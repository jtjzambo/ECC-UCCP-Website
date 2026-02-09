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

# MongoDB connection (optional - for caching)
mongo_url = os.environ.get('MONGO_URL') or os.environ.get('MONGODB_URL')
db_name = os.environ.get('DB_NAME', 'church_website')
client = None
db = None

if mongo_url:
    try:
        client = AsyncIOMotorClient(mongo_url)
        db = client[db_name]
        logging.info("MongoDB connected successfully")
    except Exception as e:
        logging.warning(f"MongoDB connection failed: {e}. Running without database caching.")

# Create the main app without a prefix
app = FastAPI(title="Church Website API")

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
                'bible_verse': extract_bible_verse(description),
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

# Weekly rotating verses - curated selection
WEEKLY_VERSES = [
    {
        "verse_text": "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
        "verse_reference": "Jeremiah 29:11 (NIV)",
        "reflection": "Let this promise remind you that God's plans for your life are good. Trust His timing, embrace His purpose, and walk confidently into the future He has prepared for you."
    },
    {
        "verse_text": "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
        "verse_reference": "Proverbs 3:5-6 (NIV)",
        "reflection": "When life feels uncertain, remember that God sees the full picture. Surrender your plans to Him and watch as He guides your steps with perfect wisdom."
    },
    {
        "verse_text": "I can do all this through him who gives me strength.",
        "verse_reference": "Philippians 4:13 (NIV)",
        "reflection": "Whatever challenges you face this week, know that God's strength is available to you. You are never alone in your struggles."
    },
    {
        "verse_text": "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.",
        "verse_reference": "Psalm 23:1-3 (NIV)",
        "reflection": "In the busyness of life, God invites you to rest in His care. He provides everything you need and leads you to places of peace."
    },
    {
        "verse_text": "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
        "verse_reference": "Joshua 1:9 (NIV)",
        "reflection": "Courage isn't the absence of fear—it's moving forward despite fear because you know God walks with you every step of the way."
    },
    {
        "verse_text": "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
        "verse_reference": "Romans 8:28 (NIV)",
        "reflection": "Even in difficult circumstances, God is working behind the scenes. Trust that He is weaving every experience into something beautiful."
    },
    {
        "verse_text": "Come to me, all you who are weary and burdened, and I will give you rest.",
        "verse_reference": "Matthew 11:28 (NIV)",
        "reflection": "Jesus offers rest for your tired soul. Bring your burdens to Him this week and experience the peace that only He can give."
    },
    {
        "verse_text": "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.",
        "verse_reference": "Lamentations 3:22-23 (ESV)",
        "reflection": "Each morning brings fresh mercy from God. No matter what yesterday held, today is a new opportunity to experience His faithful love."
    }
]

def get_week_number_sunday_start() -> int:
    """Get the current week number of the year (weeks start on Sunday)"""
    now = datetime.now(timezone.utc)
    # Adjust for Sunday start: if today is Sunday (weekday=6), it's the start of a new week
    # Python's weekday(): Monday=0, Sunday=6
    # We want Sunday=0, so we shift by 1
    adjusted_day = (now.weekday() + 1) % 7
    # Get the Sunday of current week
    days_since_sunday = adjusted_day
    current_sunday = now - timedelta(days=days_since_sunday)
    # Calculate week number based on day of year of the Sunday
    return current_sunday.timetuple().tm_yday // 7

@api_router.get("/verse-of-the-week", response_model=VerseOfTheWeek)
async def get_verse_of_the_week():
    """
    Get the verse of the week.
    - Rotates automatically each week (weeks start on Sunday)
    - Uses a curated selection of inspiring verses
    """
    week_num = get_week_number_sunday_start()
    verse_index = week_num % len(WEEKLY_VERSES)
    verse_data = WEEKLY_VERSES[verse_index]
    
    now = datetime.now(timezone.utc)
    # Calculate when this week ends (next Sunday)
    # Python weekday: Monday=0, Sunday=6
    current_weekday = now.weekday()
    # Days until next Sunday (if today is Sunday, next Sunday is in 7 days)
    if current_weekday == 6:  # Today is Sunday
        days_until_sunday = 7
    else:
        days_until_sunday = (6 - current_weekday)
    
    next_sunday = now + timedelta(days=days_until_sunday)
    next_sunday = next_sunday.replace(hour=0, minute=0, second=0, microsecond=0)
    
    return VerseOfTheWeek(
        id=str(uuid.uuid4()),
        verse_text=verse_data["verse_text"],
        verse_reference=verse_data["verse_reference"],
        reflection=verse_data["reflection"],
        fetched_at=now.isoformat(),
        expires_at=next_sunday.isoformat()
    )

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