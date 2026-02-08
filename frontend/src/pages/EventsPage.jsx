import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, Heart, Star, Music, BookOpen, Gift, Church, MessageCircle, Radio, Play } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

export const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isSunday, setIsSunday] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // Check if today is Sunday (0 = Sunday)
    const today = new Date();
    setIsSunday(today.getDay() === 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Live Worship Banner - Only shows on Sundays */}
      {isSunday && (
        <section className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 text-white py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center gap-2 animate-pulse">
                <Radio size={20} className="text-white" />
                <span className="font-bold uppercase tracking-wide">Live Now</span>
              </div>
              <span className="text-white/80">|</span>
              <span className="font-medium">Sunday Worship Service is happening now!</span>
              <a href="#live-worship" className="ml-4 px-4 py-1 bg-white text-blue-600 rounded-full font-semibold text-sm hover:bg-blue-50 transition-colors">
                Watch Live
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-full text-white mb-6 border border-white/30">
            <Calendar size={18} />
            <span className="text-sm font-semibold">What's Happening</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Upcoming Events
          </h1>
          <p className="text-xl text-slate-100">
            Join us for worship, fellowship, and community celebrations!
          </p>
        </div>
      </section>

      {/* Quick Info Banner */}
      <section className="bg-emerald-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="flex items-center gap-3">
              <Calendar className="text-emerald-200" size={24} />
              <div>
                <p className="font-semibold">Weekly Services</p>
                <p className="text-emerald-100 text-sm">Every Sunday & Wednesday</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-emerald-200" size={24} />
              <div>
                <p className="font-semibold">Everyone Welcome</p>
                <p className="text-emerald-100 text-sm">All ages, all backgrounds</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Heart className="text-emerald-200" size={24} />
              <div>
                <p className="font-semibold">Free to Attend</p>
                <p className="text-emerald-100 text-sm">No registration needed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Worship Section - Only shows on Sundays */}
      {isSunday && (
        <section id="live-worship" className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-pulse">
                <Radio size={16} />
                LIVE NOW
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Sunday Worship Service
              </h2>
              <p className="text-lg text-slate-300">
                Join us in worship from wherever you are!
              </p>
            </div>

            {/* Facebook Live Embed */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-800">
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <Play size={48} className="text-white ml-2" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Live Stream Available</h3>
                  <p className="text-slate-300 mb-6 max-w-md mx-auto">
                    Click below to join our Sunday worship service live on Facebook
                  </p>
                  <a 
                    href="https://www.facebook.com/uccpzambo/live" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-colors shadow-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Watch Live on Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Service Info */}
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                <Clock className="mx-auto text-blue-400 mb-2" size={24} />
                <p className="text-white font-semibold">Morning Service</p>
                <p className="text-slate-300 text-sm">9:00 AM</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                <Church className="mx-auto text-blue-400 mb-2" size={24} />
                <p className="text-white font-semibold">In-Person Worship</p>
                <p className="text-slate-300 text-sm">All are welcome!</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                <MessageCircle className="mx-auto text-blue-400 mb-2" size={24} />
                <p className="text-white font-semibold">Join the Chat</p>
                <p className="text-slate-300 text-sm">Comment on Facebook</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <a 
                href="https://www.facebook.com/uccpzambo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                Follow our Facebook page for updates and past services
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Featured Event Announcement */}
      <section className="py-10 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl ml-auto">
            <Card className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white border-0 shadow-lg">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Star className="text-yellow-300" size={20} />
                  <span className="text-sm font-semibold text-emerald-100">Featured Announcement</span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Stay Tuned for Special Events!
                </h3>
                <p className="text-emerald-100 text-sm mb-4">
                  We're planning exciting upcoming celebrations and special services. Follow us on social media for the latest announcements!
                </p>
                <a 
                  href="https://www.facebook.com/uccpzambo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-semibold transition-colors duration-200"
                >
                  Follow for Updates
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Categories Filter */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setSelectedCategory('worship')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                selectedCategory === 'worship'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              🙏 Worship
            </button>
            <button
              onClick={() => setSelectedCategory('fellowship')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                selectedCategory === 'fellowship'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              ❤️ Fellowship
            </button>
            <button
              onClick={() => setSelectedCategory('outreach')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                selectedCategory === 'outreach'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              🤝 Outreach
            </button>
            <button
              onClick={() => setSelectedCategory('youth')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                selectedCategory === 'youth'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              🎵 Youth
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Events Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
            Coming Up Soon
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event 1: Alabanza Y Adora Night */}
            {(selectedCategory === 'all' || selectedCategory === 'youth' || selectedCategory === 'worship') && (
              <Card className="hover:shadow-xl transition-shadow duration-300 border-purple-200 bg-gradient-to-br from-purple-50 to-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                      Youth Worship
                    </span>
                    <Music className="text-purple-600" size={24} />
                  </div>
                  <CardTitle className="text-2xl mb-2">Alabanza Y Adora Night</CardTitle>
                  <div className="space-y-2 text-slate-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span className="text-sm">2nd & 4th Sundays</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span className="text-sm">5:00 PM</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 mb-4">
                    Contemporary night worship led by CYF Zamboanga. Experience vibrant praise and worship in a youth-friendly atmosphere!
                  </CardDescription>
                  <p className="text-sm text-purple-700 font-semibold">
                    ✨ No registration required - Just come and worship!
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Event 2: Wednesday Prayer Meeting */}
            {(selectedCategory === 'all' || selectedCategory === 'worship') && (
              <Card className="hover:shadow-xl transition-shadow duration-300 border-sky-200 bg-gradient-to-br from-sky-50 to-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold">
                      Weekly
                    </span>
                    <Church className="text-sky-600" size={24} />
                  </div>
                  <CardTitle className="text-2xl mb-2">Midweek Prayer Meeting</CardTitle>
                  <div className="space-y-2 text-slate-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span className="text-sm">Every Wednesday</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span className="text-sm">5:30 PM</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 mb-4">
                    Join us for powerful prayer and spiritual encouragement. Strengthen your faith and connect with fellow believers.
                  </CardDescription>
                  <p className="text-sm text-sky-700 font-semibold">
                    🙏 Open to all - Bring your prayer requests
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Event 3: Community Ministry Program */}
            {(selectedCategory === 'all' || selectedCategory === 'outreach') && (
              <Card className="hover:shadow-xl transition-shadow duration-300 border-emerald-200 bg-gradient-to-br from-emerald-50 to-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                      Community Service
                    </span>
                    <Heart className="text-emerald-600" size={24} />
                  </div>
                  <CardTitle className="text-2xl mb-2">Community Ministry Program</CardTitle>
                  <div className="space-y-2 text-slate-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span className="text-sm">Monthly</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span className="text-sm">Various Locations</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 mb-4">
                    Serve our community through feeding programs, relief distribution, and compassionate outreach to those in need.
                  </CardDescription>
                  <p className="text-sm text-emerald-700 font-semibold">
                    💚 Volunteers needed - Contact church office
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Event 4: Sunday Fellowship */}
            {(selectedCategory === 'all' || selectedCategory === 'fellowship') && (
              <Card className="hover:shadow-xl transition-shadow duration-300 border-amber-200 bg-gradient-to-br from-amber-50 to-white overflow-hidden">
                {/* Image Collage */}
                <div className="grid grid-cols-3 gap-1 h-40">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_0ca8b7ab-d422-4d3b-b565-d4e3e0d6ac03/artifacts/2po3vv36_Sunday%20Fellowship.jpg" 
                    alt="Sunday Fellowship" 
                    className="w-full h-full object-cover"
                  />
                  <img 
                    src="https://customer-assets.emergentagent.com/job_0ca8b7ab-d422-4d3b-b565-d4e3e0d6ac03/artifacts/66ejwuyz_Sunday%20Fellowship%202.jpg" 
                    alt="Sunday Fellowship" 
                    className="w-full h-full object-cover"
                  />
                  <img 
                    src="https://customer-assets.emergentagent.com/job_0ca8b7ab-d422-4d3b-b565-d4e3e0d6ac03/artifacts/95a1yswv_Sunday%20Fellowship%203.jpg" 
                    alt="Sunday Fellowship" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">
                      Fellowship
                    </span>
                    <Users className="text-amber-600" size={24} />
                  </div>
                  <CardTitle className="text-2xl mb-2">Sunday Fellowship</CardTitle>
                  <div className="space-y-2 text-slate-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span className="text-sm">Every Sunday</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span className="text-sm">After Morning Service</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 mb-4">
                    Enjoy refreshments and fellowship after worship. Great opportunity to meet new friends and connect with church family!
                  </CardDescription>
                  <p className="text-sm text-amber-700 font-semibold">
                    ☕ Refreshments provided - Stay and connect
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Event 5: CYF Bible Study */}
            {(selectedCategory === 'all' || selectedCategory === 'youth') && (
              <Card className="hover:shadow-xl transition-shadow duration-300 border-rose-200 bg-gradient-to-br from-rose-50 to-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-semibold">
                      Youth Ministry
                    </span>
                    <BookOpen className="text-rose-600" size={24} />
                  </div>
                  <CardTitle className="text-2xl mb-2">CYF Sunday School</CardTitle>
                  <div className="space-y-2 text-slate-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span className="text-sm">Every Sunday</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span className="text-sm">11:30 AM</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 mb-4">
                    Christian Youth Fellowship - Growing in faith through Bible study, discussion, and fun activities designed for young people.
                  </CardDescription>
                  <p className="text-sm text-rose-700 font-semibold">
                    🎯 Ages 13-25 welcome - Bring a friend!
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Event 6: Special Celebration */}
            {(selectedCategory === 'all' || selectedCategory === 'fellowship') && (
              <Card className="hover:shadow-xl transition-shadow duration-300 border-teal-200 bg-gradient-to-br from-teal-50 to-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold">
                      Special Event
                    </span>
                    <Gift className="text-teal-600" size={24} />
                  </div>
                  <CardTitle className="text-2xl mb-2">Church Anniversary {currentYear}</CardTitle>
                  <div className="space-y-2 text-slate-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span className="text-sm">May {currentYear}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span className="text-sm">Church Premises</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 mb-4">
                    Celebrate God's faithfulness! Special worship, testimonies, fellowship meal, and thanksgiving for our church's journey.
                  </CardDescription>
                  <p className="text-sm text-teal-700 font-semibold">
                    🎉 Mark your calendars - More details coming soon
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* RSVP/Contact Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-sky-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <MessageCircle size={48} className="mx-auto text-emerald-600 mb-4" />
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Want to Know More?
            </h2>
            <p className="text-xl text-slate-600">
              Have questions about upcoming events or want to get involved?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl mb-2">📧 Email Us</CardTitle>
                <CardDescription>
                  <a href="mailto:eccuccpzamboangacity@gmail.com" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                    eccuccpzamboangacity@gmail.com
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl mb-2">📱 Call Us</CardTitle>
                <CardDescription>
                  <a href="tel:+63629916685" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                    +63 62 991 6685
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl mb-2">💬 Message Us</CardTitle>
                <CardDescription>
                  <a href="https://m.me/uccpzambo" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                    Facebook Messenger
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl mb-2">📍 Visit Us</CardTitle>
                <CardDescription className="text-slate-600">
                  #27 Castillo Rd., Baliwasan, Zamboanga City
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">
              Stay updated with all our events and announcements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.facebook.com/uccpzambo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg shadow-lg transition-colors duration-200"
              >
                Follow on Facebook
              </a>
              <a 
                href="https://www.youtube.com/@uccpzambo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold text-lg shadow-lg transition-colors duration-200"
              >
                Subscribe on YouTube
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
