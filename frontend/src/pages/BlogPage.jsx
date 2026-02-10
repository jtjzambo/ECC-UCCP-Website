import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Clock, User, Heart, ChevronRight, Sparkles, Bell, ExternalLink, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

// Weekly rotating verses - curated selection (weeks start on Sunday)
const WEEKLY_VERSES = [
  {
    verse_text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
    verse_reference: "Jeremiah 29:11 (NIV)",
    reflection: "Let this promise remind you that God's plans for your life are good. Trust His timing, embrace His purpose, and walk confidently into the future He has prepared for you."
  },
  {
    verse_text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
    verse_reference: "Proverbs 3:5-6 (NIV)",
    reflection: "When life feels uncertain, remember that God sees the full picture. Surrender your plans to Him and watch as He guides your steps with perfect wisdom."
  },
  {
    verse_text: "I can do all this through him who gives me strength.",
    verse_reference: "Philippians 4:13 (NIV)",
    reflection: "Whatever challenges you face this week, know that God's strength is available to you. You are never alone in your struggles."
  },
  {
    verse_text: "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.",
    verse_reference: "Psalm 23:1-3 (NIV)",
    reflection: "In the busyness of life, God invites you to rest in His care. He provides everything you need and leads you to places of peace."
  },
  {
    verse_text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
    verse_reference: "Joshua 1:9 (NIV)",
    reflection: "Courage isn't the absence of fear—it's moving forward despite fear because you know God walks with you every step of the way."
  },
  {
    verse_text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    verse_reference: "Romans 8:28 (NIV)",
    reflection: "Even in difficult circumstances, God is working behind the scenes. Trust that He is weaving every experience into something beautiful."
  },
  {
    verse_text: "Come to me, all you who are weary and burdened, and I will give you rest.",
    verse_reference: "Matthew 11:28 (NIV)",
    reflection: "Jesus offers rest for your tired soul. Bring your burdens to Him this week and experience the peace that only He can give."
  },
  {
    verse_text: "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.",
    verse_reference: "Lamentations 3:22-23 (ESV)",
    reflection: "Each morning brings fresh mercy from God. No matter what yesterday held, today is a new opportunity to experience His faithful love."
  }
];

// Helper function to get week number (Sunday start)
const getWeekNumberSundayStart = () => {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const dayOfYear = Math.floor((now - startOfYear) / (24 * 60 * 60 * 1000));
  // Adjust for Sunday start
  const adjustedDay = (now.getDay() + 1) % 7;
  const daysSinceSunday = adjustedDay;
  const adjustedDayOfYear = dayOfYear - daysSinceSunday;
  return Math.floor(adjustedDayOfYear / 7);
};

// Get current verse of the week
const getCurrentVerseOfTheWeek = () => {
  const weekNum = getWeekNumberSundayStart();
  const verseIndex = Math.abs(weekNum) % WEEKLY_VERSES.length;
  return WEEKLY_VERSES[verseIndex];
};

// Helper to extract Bible verse from text
const extractBibleVerse = (text) => {
  const pattern = /(\d?\s?[A-Z][a-z]+\s+\d+:\d+(?:-\d+)?)/;
  const match = text.match(pattern);
  return match ? match[1] : null;
};

// Helper to extract snippet from HTML
const extractSnippet = (html, maxLength = 150) => {
  const text = html.replace(/<[^>]+>/g, '').replace(/&[^;]+;/g, ' ').trim();
  if (text.length > maxLength) {
    return text.substring(0, maxLength).replace(/\s+\S*$/, '') + '...';
  }
  return text;
};

// Parse RSS XML to devotionals
const parseODBFeed = (xmlText) => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
  const items = xmlDoc.querySelectorAll('item');
  
  const devotionals = [];
  items.forEach((item, index) => {
    if (index >= 7) return; // Only get 7 items
    
    const title = item.querySelector('title')?.textContent || 'Untitled';
    const link = item.querySelector('link')?.textContent || 'https://odb.org';
    const author = item.querySelector('creator')?.textContent || 'Our Daily Bread';
    const pubDate = item.querySelector('pubDate')?.textContent || '';
    const description = item.querySelector('description')?.textContent || '';
    const category = item.querySelector('category')?.textContent || 'Devotional';
    
    devotionals.push({
      id: `odb-${index}`,
      title,
      link,
      author,
      published_date: pubDate,
      category,
      snippet: extractSnippet(description),
      bible_verse: extractBibleVerse(description)
    });
  });
  
  // Sort by date (newest first)
  devotionals.sort((a, b) => {
    const dateA = new Date(a.published_date);
    const dateB = new Date(b.published_date);
    return dateB - dateA;
  });
  
  return devotionals;
};

export const BlogPage = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [odbDevotionals, setOdbDevotionals] = useState([]);
  const [loadingOdb, setLoadingOdb] = useState(true);
  const [verseOfTheWeek, setVerseOfTheWeek] = useState(null);

  // Fetch Our Daily Bread devotionals directly (using CORS proxy)
  useEffect(() => {
    const fetchDevotionals = async () => {
      try {
        setLoadingOdb(true);
        
        // Use allorigins.win as CORS proxy with cache-busting timestamp
        const timestamp = new Date().getTime();
        const proxyUrl = `https://api.allorigins.win/raw?url=`;
        const odbUrl = encodeURIComponent(`https://odb.org/feed/?_=${timestamp}`);
        
        const response = await fetch(proxyUrl + odbUrl, {
          cache: 'no-store', // Prevent browser caching
          headers: {
            'Cache-Control': 'no-cache'
          }
        });
        
        if (response.ok) {
          const xmlText = await response.text();
          const devotionals = parseODBFeed(xmlText);
          setOdbDevotionals(devotionals);
        }
      } catch (error) {
        console.error('Error fetching devotionals:', error);
      } finally {
        setLoadingOdb(false);
      }
    };
    
    fetchDevotionals();
  }, []);

  // Set Verse of the Week (calculated locally, updates weekly on Sunday)
  useEffect(() => {
    setVerseOfTheWeek(getCurrentVerseOfTheWeek());
  }, []);

  // Format date from RSS feed
  const formatDate = (dateStr) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } catch {
      return dateStr;
    }
  };

  // Featured devotional comes from ODB (first item) or fallback
  const featuredDevotional = odbDevotionals.length > 0 ? {
    id: odbDevotionals[0].id,
    title: odbDevotionals[0].title,
    excerpt: odbDevotionals[0].snippet,
    author: odbDevotionals[0].author,
    date: formatDate(odbDevotionals[0].published_date),
    readTime: "5 min read",
    category: "odb",
    verse: odbDevotionals[0].bible_verse || "Our Daily Bread",
    link: odbDevotionals[0].link
  } : {
    id: 1,
    title: "Finding Peace in the Storm",
    excerpt: "In the midst of life's challenges, God offers us a peace that surpasses all understanding. Jesus said, 'Peace I leave with you; my peace I give you.' This isn't the absence of trouble—it's the presence of God in the trouble.",
    author: "Pastor's Desk",
    date: "February 8, 2026",
    readTime: "5 min read",
    category: "devotional",
    verse: "John 14:27",
    link: null
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      odb: 'bg-orange-100 text-orange-700',
      devotional: 'bg-purple-100 text-purple-700',
      faith: 'bg-emerald-100 text-emerald-700',
      news: 'bg-sky-100 text-sky-700',
      reflection: 'bg-amber-100 text-amber-700'
    };
    return colors[category] || 'bg-slate-100 text-slate-700';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-800 to-slate-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-full text-white mb-6 border border-white/30">
            <BookOpen size={18} />
            <span className="text-sm font-semibold">Devotionals & Reflections</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Faith & Inspiration
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Nourish your soul with daily devotionals, spiritual reflections, and stories of faith from our church community.
          </p>
        </div>
      </section>

      {/* Featured Devotional */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Sparkles className="text-purple-600" size={24} />
              <h2 className="text-2xl font-bold text-slate-800">Today's Featured Devotional</h2>
            </div>
            {featuredDevotional.link && (
              <a 
                href="https://odb.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center gap-1"
              >
                From Our Daily Bread
                <ExternalLink size={14} />
              </a>
            )}
          </div>

          <Card className="overflow-hidden bg-white shadow-xl border-0">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <BookOpen size={48} className="mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-medium italic opacity-90">"{featuredDevotional.verse}"</p>
                  {featuredDevotional.link && (
                    <p className="mt-4 text-sm opacity-70">via Our Daily Bread</p>
                  )}
                </div>
              </div>
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(featuredDevotional.category)}`}>
                    {featuredDevotional.link ? 'Our Daily Bread' : 'Devotional'}
                  </span>
                  <span className="text-slate-500 text-sm flex items-center gap-1">
                    <Calendar size={14} />
                    {featuredDevotional.date}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-4">
                  {featuredDevotional.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  {featuredDevotional.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <User size={16} />
                    <span>{featuredDevotional.author}</span>
                    <span className="mx-2">•</span>
                    <Clock size={16} />
                    <span>{featuredDevotional.readTime}</span>
                  </div>
                  {featuredDevotional.link ? (
                    <a 
                      href={featuredDevotional.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-medium transition-colors"
                    >
                      Read on ODB
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                  ) : (
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                      Read Full Devotional
                      <ChevronRight size={18} className="ml-1" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Reflections Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <BookOpen className="text-orange-600" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800">Reflections</h2>
                <p className="text-sm text-slate-500">Weekly devotionals from Our Daily Bread</p>
              </div>
            </div>
            <a 
              href="https://odb.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-700 text-sm font-medium flex items-center gap-1"
            >
              Visit odb.org
              <ExternalLink size={14} />
            </a>
          </div>

          {loadingOdb ? (
            <div className="flex items-center justify-center py-12">
              <RefreshCw className="animate-spin text-orange-500" size={32} />
              <span className="ml-3 text-slate-500">Loading devotionals...</span>
            </div>
          ) : odbDevotionals.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {odbDevotionals.slice(1).map((devotional, index) => (
                <a
                  key={devotional.id}
                  href={devotional.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className={`h-full hover:shadow-xl transition-all duration-300 border-orange-200 hover:border-orange-400 ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor('odb')}`}>
                          {devotional.category}
                        </span>
                        <ExternalLink size={14} className="text-slate-400 group-hover:text-orange-500 transition-colors" />
                      </div>
                      <CardTitle className="text-lg mb-1 group-hover:text-orange-600 transition-colors line-clamp-2">
                        {devotional.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Calendar size={12} />
                        <span>{formatDate(devotional.published_date)}</span>
                      </div>
                      {devotional.bible_verse && (
                        <div className="mt-2 text-xs text-purple-600 font-medium italic">
                          📖 {devotional.bible_verse}
                        </div>
                      )}
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                        {devotional.snippet}
                      </CardDescription>
                      <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100">
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <User size={12} />
                          {devotional.author}
                        </span>
                        <span className="text-orange-600 font-medium text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read on ODB
                          <ChevronRight size={14} />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl">
              <BookOpen size={48} className="mx-auto text-slate-300 mb-4" />
              <p className="text-slate-500">Unable to load devotionals. Please try again later.</p>
              <a 
                href="https://odb.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-orange-600 hover:text-orange-700 font-medium"
              >
                Visit Our Daily Bread directly
                <ExternalLink size={16} />
              </a>
            </div>
          )}

          <div className="mt-8 p-4 bg-white/70 rounded-xl border border-orange-200 text-center">
            <p className="text-sm text-slate-600">
              Devotionals provided by <a href="https://odb.org" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline font-medium">Our Daily Bread Ministries</a>. 
              Click any devotional to read the full content on their website.
            </p>
          </div>
        </div>
      </section>

      {/* Weekly Verse Section */}
      <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-purple-300 mb-6">
            <Heart size={16} />
            <span className="text-sm font-semibold">Verse of the Week</span>
            <span className="text-xs opacity-70">(Updates Weekly)</span>
          </div>
          {verseOfTheWeek ? (
            <>
              <blockquote className="text-3xl md:text-4xl font-serif italic text-white mb-6 leading-relaxed">
                "{verseOfTheWeek.verse_text}"
              </blockquote>
              <p className="text-xl text-purple-300 font-medium">— {verseOfTheWeek.verse_reference}</p>
              <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
                {verseOfTheWeek.reflection}
              </p>
            </>
          ) : (
            <>
              <blockquote className="text-3xl md:text-4xl font-serif italic text-white mb-6 leading-relaxed">
                "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future."
              </blockquote>
              <p className="text-xl text-purple-300 font-medium">— Jeremiah 29:11 (NIV)</p>
              <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
                Let this promise remind you that God's plans for your life are good. Trust His timing, embrace His purpose, and walk confidently into the future He has prepared for you.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-purple-100">
            <Bell size={40} className="mx-auto text-purple-600 mb-4" />
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Never Miss a Devotional
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Subscribe to receive weekly devotionals, spiritual reflections, and church updates delivered straight to your inbox. Start your week with encouragement!
            </p>

            {subscribed ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                <Heart className="mx-auto text-emerald-600 mb-2" size={32} />
                <p className="text-emerald-700 font-semibold text-lg">Thank you for subscribing!</p>
                <p className="text-emerald-600 text-sm mt-1">You'll receive our next devotional soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 border-slate-300 focus:border-purple-500 focus:ring-purple-500"
                  data-testid="newsletter-email-input"
                />
                <Button 
                  type="submit" 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6"
                  data-testid="newsletter-subscribe-btn"
                >
                  Subscribe
                </Button>
              </form>
            )}

            <p className="text-sm text-slate-500 mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Daily Prayer */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white border-0 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4">
                  Daily Prayer
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  A Prayer for Today
                </h3>
                <p className="text-lg text-emerald-100 leading-relaxed italic max-w-2xl mx-auto">
                  "Heavenly Father, thank You for this new day. Fill our hearts with Your peace, guide our steps with Your wisdom, and let Your love flow through us to others. Help us to trust You in all things and to see Your hand at work in our lives. In Jesus' name, Amen."
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="inline-block px-6 py-3 bg-white text-emerald-700 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
                  >
                    Share a Prayer Request
                  </Link>
                  <Link 
                    to="/services"
                    className="inline-block px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white border-2 border-emerald-400 rounded-lg font-semibold transition-colors"
                  >
                    Join Our Prayer Meeting
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};
