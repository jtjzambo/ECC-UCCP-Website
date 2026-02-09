from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone, timedelta
import feedparser
import re
from html import unescape


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Devotional Models
class Devotional(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    link: str
    author: str
    published_date: str
    category: str
    snippet: str  # Brief preview only - links to full content on ODB
    bible_verse: Optional[str] = None  # Scripture reference
    image_url: Optional[str] = None

class VerseOfTheWeek(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    verse_text: str
    verse_reference: str
    reflection: str
    fetched_at: str
    expires_at: str

class DevotionalCache(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    devotionals: List[dict]
    fetched_at: datetime
    expires_at: datetime

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Helper function to extract snippet from HTML content
def extract_snippet(html_content: str, max_length: int = 150) -> str:
    """Extract a brief text snippet from HTML content"""
    # Remove HTML tags
    text = re.sub(r'<[^>]+>', '', html_content)
    # Decode HTML entities
    text = unescape(text)
    # Clean up whitespace
    text = ' '.join(text.split())
    # Truncate to max length
    if len(text) > max_length:
        text = text[:max_length].rsplit(' ', 1)[0] + '...'
    return text

# Helper function to extract image URL from HTML content
def extract_image_url(html_content: str) -> Optional[str]:
    """Extract the first image URL from HTML content"""
    match = re.search(r'<img[^>]+src=["\']([^"\']+)["\']', html_content)
    return match.group(1) if match else None

# Helper function to extract Bible verse references from text
def extract_bible_verse(html_content: str) -> Optional[str]:
    """Extract Bible verse reference from HTML content"""
    text = re.sub(r'<[^>]+>', '', html_content)
    text = unescape(text)
    
    # Common Bible verse patterns
    # Matches patterns like "John 3:16", "1 Corinthians 13:4-7", "Psalm 23:1-6", "Genesis 1:1"
    patterns = [
        r'(\d?\s?[A-Z][a-z]+\s+\d+:\d+(?:-\d+)?)',  # Standard format
        r'((?:Genesis|Exodus|Leviticus|Numbers|Deuteronomy|Joshua|Judges|Ruth|1\s?Samuel|2\s?Samuel|1\s?Kings|2\s?Kings|1\s?Chronicles|2\s?Chronicles|Ezra|Nehemiah|Esther|Job|Psalms?|Proverbs?|Ecclesiastes|Song\s?of\s?Solomon|Isaiah|Jeremiah|Lamentations|Ezekiel|Daniel|Hosea|Joel|Amos|Obadiah|Jonah|Micah|Nahum|Habakkuk|Zephaniah|Haggai|Zechariah|Malachi|Matthew|Mark|Luke|John|Acts|Romans|1\s?Corinthians|2\s?Corinthians|Galatians|Ephesians|Philippians|Colossians|1\s?Thessalonians|2\s?Thessalonians|1\s?Timothy|2\s?Timothy|Titus|Philemon|Hebrews|James|1\s?Peter|2\s?Peter|1\s?John|2\s?John|3\s?John|Jude|Revelation)\s+\d+:\d+(?:-\d+)?)',
    ]
    
    for pattern in patterns:
        matches = re.findall(pattern, text, re.IGNORECASE)
        if matches:
            # Return the first meaningful match
            return matches[0].strip()
    
    return None

async def fetch_odb_devotionals() -> List[dict]:
    """Fetch devotionals from Our Daily Bread RSS feed"""
    try:
        feed = feedparser.parse("https://odb.org/feed/")
        devotionals = []
        
        for entry in feed.entries[:7]:  # Get last 7 days of devotionals
            # Extract categories
            categories = [cat.term for cat in entry.get('tags', [])]
            category = categories[0] if categories else 'Devotional'
            
            # Get description/summary
            description = entry.get('description', entry.get('summary', ''))
            
            devotional = {
                'id': str(uuid.uuid4()),
                'title': entry.get('title', 'Untitled'),
                'link': entry.get('link', 'https://odb.org'),
                'author': entry.get('dc_creator', entry.get('author', 'Our Daily Bread')),
                'published_date': entry.get('published', ''),
                'category': category,
                'snippet': extract_snippet(description, 150),
                'image_url': extract_image_url(description)
            }
            devotionals.append(devotional)
        
        return devotionals
    except Exception as e:
        logger.error(f"Error fetching ODB feed: {e}")
        return []

@api_router.get("/devotionals", response_model=List[Devotional])
async def get_devotionals():
    """
    Get Our Daily Bread devotionals.
    - Fetches from ODB RSS feed
    - Caches for 1 week to minimize requests
    - Returns snippets only - full content available at odb.org links
    """
    # Check cache first
    cache = await db.devotional_cache.find_one({}, {"_id": 0})
    
    now = datetime.now(timezone.utc)
    
    if cache:
        expires_at = cache.get('expires_at')
        if isinstance(expires_at, str):
            expires_at = datetime.fromisoformat(expires_at.replace('Z', '+00:00'))
        
        # If cache is still valid, return cached devotionals
        if expires_at and now < expires_at:
            logger.info("Returning cached devotionals")
            return cache.get('devotionals', [])
    
    # Cache expired or doesn't exist - fetch fresh data
    logger.info("Fetching fresh devotionals from Our Daily Bread")
    devotionals = await fetch_odb_devotionals()
    
    if devotionals:
        # Store in cache with 1 week expiration
        cache_doc = {
            'id': str(uuid.uuid4()),
            'devotionals': devotionals,
            'fetched_at': now.isoformat(),
            'expires_at': (now + timedelta(days=7)).isoformat()
        }
        
        # Upsert cache (replace existing or insert new)
        await db.devotional_cache.delete_many({})
        await db.devotional_cache.insert_one(cache_doc)
        
        return devotionals
    
    # If fetch failed but we have old cache, return that
    if cache:
        logger.warning("Fetch failed, returning stale cache")
        return cache.get('devotionals', [])
    
    return []

@api_router.post("/devotionals/refresh", response_model=List[Devotional])
async def refresh_devotionals():
    """Force refresh devotionals from Our Daily Bread (admin use)"""
    logger.info("Force refreshing devotionals")
    
    devotionals = await fetch_odb_devotionals()
    
    if devotionals:
        now = datetime.now(timezone.utc)
        cache_doc = {
            'id': str(uuid.uuid4()),
            'devotionals': devotionals,
            'fetched_at': now.isoformat(),
            'expires_at': (now + timedelta(days=7)).isoformat()
        }
        
        await db.devotional_cache.delete_many({})
        await db.devotional_cache.insert_one(cache_doc)
    
    return devotionals

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()