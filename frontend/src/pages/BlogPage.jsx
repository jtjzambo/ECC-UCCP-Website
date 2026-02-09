import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Clock, User, Heart, ChevronRight, Sparkles, Search, Bell, ExternalLink, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

export const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [odbDevotionals, setOdbDevotionals] = useState([]);
  const [loadingOdb, setLoadingOdb] = useState(true);
  const [verseOfTheWeek, setVerseOfTheWeek] = useState(null);

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  // Fetch Our Daily Bread devotionals
  useEffect(() => {
    const fetchDevotionals = async () => {
      try {
        setLoadingOdb(true);
        const response = await fetch(`${BACKEND_URL}/api/devotionals`);
        if (response.ok) {
          const data = await response.json();
          setOdbDevotionals(data);
        }
      } catch (error) {
        console.error('Error fetching devotionals:', error);
      } finally {
        setLoadingOdb(false);
      }
    };
    
    fetchDevotionals();
  }, [BACKEND_URL]);

  // Fetch Verse of the Week
  useEffect(() => {
    const fetchVerseOfTheWeek = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/verse-of-the-week`);
        if (response.ok) {
          const data = await response.json();
          setVerseOfTheWeek(data);
        }
      } catch (error) {
        console.error('Error fetching verse of the week:', error);
      }
    };
    
    fetchVerseOfTheWeek();
  }, [BACKEND_URL]);

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'odb', name: 'Our Daily Bread' },
    { id: 'devotional', name: 'Devotionals' },
    { id: 'faith', name: 'Faith & Life' },
    { id: 'news', name: 'Church News' },
    { id: 'reflection', name: 'Reflections' }
  ];

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

  const blogPosts = [
    {
      id: 2,
      title: "Walking in Faith, Not by Sight",
      excerpt: "Faith is trusting God's heart when we cannot see His hand. It's taking the next step even when the path ahead seems unclear, knowing that He who began a good work in us will carry it to completion.",
      author: "Rev. Ministry Team",
      date: "February 5, 2026",
      readTime: "4 min read",
      category: "devotional",
      verse: "2 Corinthians 5:7"
    },
    {
      id: 3,
      title: "The Power of Community in Christ",
      excerpt: "We were never meant to walk this journey alone. God designed us for fellowship—to bear one another's burdens, to rejoice together, and to grow in faith as one body in Christ.",
      author: "CYF Leadership",
      date: "February 3, 2026",
      readTime: "3 min read",
      category: "faith",
      verse: "Hebrews 10:24-25"
    },
    {
      id: 4,
      title: "Church Anniversary Celebration Highlights",
      excerpt: "What a blessed time of worship and thanksgiving! Our recent anniversary celebration brought together generations of faithful members, honoring God's faithfulness through the years.",
      author: "Church Admin",
      date: "February 1, 2026",
      readTime: "6 min read",
      category: "news"
    },
    {
      id: 5,
      title: "Morning Mercies: A Daily Devotional Practice",
      excerpt: "Great is His faithfulness! His mercies are new every morning. Starting your day with God transforms not just your morning, but your entire perspective on life's challenges.",
      author: "Pastor's Desk",
      date: "January 28, 2026",
      readTime: "4 min read",
      category: "devotional",
      verse: "Lamentations 3:22-23"
    },
    {
      id: 6,
      title: "Serving Others: The Heart of Ministry",
      excerpt: "Jesus came not to be served, but to serve. Our community ministry programs reflect this call—feeding the hungry, visiting the sick, and showing Christ's love through action.",
      author: "Outreach Ministry",
      date: "January 25, 2026",
      readTime: "5 min read",
      category: "reflection"
    },
    {
      id: 7,
      title: "Youth Sunday: Voices of the Next Generation",
      excerpt: "Our young people led worship with passion and purpose! Their energy and dedication remind us that the future of the church is bright and filled with hope.",
      author: "CYF Ministry",
      date: "January 22, 2026",
      readTime: "3 min read",
      category: "news"
    },
    {
      id: 8,
      title: "Grace for the Journey",
      excerpt: "God's grace isn't just for salvation—it's for every moment of every day. When we stumble, grace lifts us. When we're weary, grace sustains us. His grace is truly sufficient.",
      author: "Pastor's Desk",
      date: "January 20, 2026",
      readTime: "4 min read",
      category: "devotional",
      verse: "2 Corinthians 12:9"
    },
    {
      id: 9,
      title: "Ecumenical Unity: Stronger Together",
      excerpt: "Our interfaith dialogue and ecumenical partnerships remind us that while we may worship in different ways, we serve the same God and share a common mission of love and justice.",
      author: "Ecumenical Committee",
      date: "January 18, 2026",
      readTime: "5 min read",
      category: "reflection"
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

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
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="text-purple-600" size={24} />
            <h2 className="text-2xl font-bold text-slate-800">Featured Devotional</h2>
          </div>

          <Card className="overflow-hidden bg-white shadow-xl border-0">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <BookOpen size={48} className="mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-medium italic opacity-90">"{featuredDevotional.verse}"</p>
                  <p className="mt-4 text-2xl font-bold">"Peace I leave with you; my peace I give you."</p>
                </div>
              </div>
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(featuredDevotional.category)}`}>
                    Devotional
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
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    Read Full Devotional
                    <ChevronRight size={18} className="ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Our Daily Bread Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <BookOpen className="text-orange-600" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800">Our Daily Bread</h2>
                <p className="text-sm text-slate-500">Weekly devotionals from odb.org</p>
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
              {odbDevotionals.map((devotional, index) => (
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

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-[88px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 border border-slate-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            {selectedCategory === 'all' ? 'Latest Posts' : categories.find(c => c.id === selectedCategory)?.name}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <Card key={post.id} className="hover:shadow-xl transition-all duration-300 border-slate-200 group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
                      {categories.find(c => c.id === post.category)?.name}
                    </span>
                    {post.verse && (
                      <span className="text-xs text-slate-500 italic">{post.verse}</span>
                    )}
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-sm text-slate-500 flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </span>
                    <span className="text-purple-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More
                      <ChevronRight size={16} />
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <BookOpen size={48} className="mx-auto text-slate-300 mb-4" />
              <p className="text-slate-500">No posts found in this category.</p>
            </div>
          )}

          {/* Load More Button */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8">
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Weekly Verse Section */}
      <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-purple-300 mb-6">
            <Heart size={16} />
            <span className="text-sm font-semibold">Verse of the Week</span>
          </div>
          <blockquote className="text-3xl md:text-4xl font-serif italic text-white mb-6 leading-relaxed">
            "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future."
          </blockquote>
          <p className="text-xl text-purple-300 font-medium">— Jeremiah 29:11 (NIV)</p>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Let this promise remind you that God's plans for your life are good. Trust His timing, embrace His purpose, and walk confidently into the future He has prepared for you.
          </p>
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
