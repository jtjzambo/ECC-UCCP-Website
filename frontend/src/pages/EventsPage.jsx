import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Heart, Star, Music, BookOpen, Gift, Church, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

export const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="min-h-screen bg-white">
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

      {/* Featured Event */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Star size={16} />
              Featured Event
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Don't Miss This!
            </h2>
          </div>

          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-purple-600 to-pink-600 text-white border-0 shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold">
                  🎄 Christmas Special
                </span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold">
                  📍 Church Premises
                </span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                Christmas Celebration 2024
              </h3>
              
              <div className="flex flex-wrap gap-6 mb-6 text-purple-100">
                <div className="flex items-center gap-2">
                  <Calendar size={20} />
                  <span className="font-semibold">December 25, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} />
                  <span className="font-semibold">9:00 AM - 12:00 PM</span>
                </div>
              </div>

              <p className="text-xl text-purple-50 mb-8 leading-relaxed">
                Celebrate the birth of our Savior with special worship service, Christmas carols, gift-giving for children, and fellowship meal. Bring your family and friends for a joyful celebration of Christ's love!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="mailto:eccuccpzamboangacity@gmail.com?subject=Christmas Celebration RSVP"
                  className="inline-block px-8 py-4 bg-white text-purple-700 rounded-lg font-bold text-lg hover:bg-purple-50 transition-colors duration-200 text-center"
                >
                  RSVP Now
                </a>
                <a 
                  href="https://www.facebook.com/uccpzambo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white rounded-lg font-bold text-lg transition-colors duration-200 text-center"
                >
                  Share Event
                </a>
              </div>
            </div>
          </Card>
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

            {/* Event 3: Community Outreach */}
            {(selectedCategory === 'all' || selectedCategory === 'outreach') && (
              <Card className="hover:shadow-xl transition-shadow duration-300 border-emerald-200 bg-gradient-to-br from-emerald-50 to-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                      Community Service
                    </span>
                    <Heart className="text-emerald-600" size={24} />
                  </div>
                  <CardTitle className="text-2xl mb-2">Community Outreach Program</CardTitle>
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
              <Card className="hover:shadow-xl transition-shadow duration-300 border-amber-200 bg-gradient-to-br from-amber-50 to-white">
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
                  <CardTitle className="text-2xl mb-2">Church Anniversary 2025</CardTitle>
                  <div className="space-y-2 text-slate-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span className="text-sm">August 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span className="text-sm">Church Premises</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 mb-4">
                    Celebrate 61 years of God's faithfulness! Special worship, testimonies, fellowship meal, and thanksgiving for our church's journey.
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
