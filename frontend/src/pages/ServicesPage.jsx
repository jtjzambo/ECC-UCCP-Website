import React from 'react';
import { Clock, Users, Church, BookOpen, Calendar, Star, Facebook, Youtube, MapPin, Info } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

export const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-sky-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-600/20 backdrop-blur-md px-4 py-2 rounded-full text-emerald-200 mb-6 border border-emerald-500/30">
            <Church size={18} />
            <span className="text-sm font-semibold">Join Us for Worship</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Worship With Us
          </h1>
          <p className="text-xl text-slate-200">
            Join our vibrant community in worship, fellowship, and spiritual growth
          </p>
        </div>
      </section>

      {/* Weekly Schedule Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Clock size={16} />
              Weekly Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Weekly Schedule
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everyone is welcome to join us for worship and fellowship
            </p>
          </div>

          {/* Sunday Services */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              Sunday Services
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Morning Devotion */}
              <Card className="border-slate-200">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-slate-600 rounded-lg flex items-center justify-center">
                      <Clock size={20} className="text-white" />
                    </div>
                    <span className="text-2xl font-bold text-slate-800">9:00 AM</span>
                  </div>
                  <CardTitle className="text-xl mb-2">Morning Devotion & Adult Sunday School</CardTitle>
                  <CardDescription className="text-slate-600">
                    Start your Sunday with devotions and in-depth Bible study for adults
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Children Sunday School */}
              <Card className="border-slate-200">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-slate-600 rounded-lg flex items-center justify-center">
                      <Clock size={20} className="text-white" />
                    </div>
                    <span className="text-2xl font-bold text-slate-800">9:45 AM</span>
                  </div>
                  <CardTitle className="text-xl mb-2">Children Sunday School & Junior Worship</CardTitle>
                  <CardDescription className="text-slate-600">
                    Age-appropriate Bible lessons and worship for children and juniors
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Morning Worship - Featured */}
              <Card className="border-emerald-300 bg-gradient-to-br from-emerald-50 to-sky-50 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                      <Clock size={20} className="text-white" />
                    </div>
                    <span className="text-2xl font-bold text-emerald-700">10:00 AM</span>
                  </div>
                  <div className="inline-block px-3 py-1 bg-emerald-600 text-white rounded-full text-xs font-semibold mb-2">
                    Main Service
                  </div>
                  <CardTitle className="text-xl mb-2">Morning Worship</CardTitle>
                  <CardDescription className="text-slate-600">
                    Main worship service with inspiring messages, uplifting music, and communion
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* CYF Sunday School */}
              <Card className="border-slate-200">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-slate-600 rounded-lg flex items-center justify-center">
                      <Clock size={20} className="text-white" />
                    </div>
                    <span className="text-2xl font-bold text-slate-800">11:30 AM</span>
                  </div>
                  <CardTitle className="text-xl mb-2">CYF Sunday School</CardTitle>
                  <CardDescription className="text-slate-600">
                    Christian Youth Fellowship - discipleship and fellowship for young people
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Alabanza Y Adora Night - Special */}
              <Card className="border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 md:col-span-2">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                      <Clock size={20} className="text-white" />
                    </div>
                    <span className="text-2xl font-bold text-amber-700">5:00 PM</span>
                  </div>
                  <div className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold mb-2">
                    2nd & 4th Sundays of the month
                  </div>
                  <CardTitle className="text-xl mb-2">Alabanza Y Adora Night</CardTitle>
                  <CardDescription className="text-slate-600">
                    A Contemporary Night Worship hosted by CYF Zamboanga
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Midweek Service */}
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <div className="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">W</span>
              </div>
              Midweek Service
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-sky-200 bg-gradient-to-br from-sky-50 to-slate-50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center">
                      <Clock size={20} className="text-white" />
                    </div>
                    <span className="text-2xl font-bold text-sky-700">5:30 PM</span>
                  </div>
                  <CardTitle className="text-xl mb-2">Midweek Prayer Meeting</CardTitle>
                  <CardDescription className="text-slate-600">
                    Gather for prayer, spiritual encouragement, and fellowship midweek
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Special Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Star size={16} />
              Special Events
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Special Services & Annual Events
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join us for these significant celebrations throughout the year
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="text-emerald-700" size={24} />
                </div>
                <CardTitle className="text-xl mb-2">Holy Week Services</CardTitle>
                <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-3">
                  March/April
                </div>
                <CardDescription className="text-slate-600">
                  Palm Sunday, Maundy Thursday, Good Friday, and Easter Sunday services commemorating Christ's passion and resurrection
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mb-4">
                  <Star className="text-emerald-700" size={24} />
                </div>
                <CardTitle className="text-xl mb-2">Christmas Season</CardTitle>
                <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-3">
                  December
                </div>
                <CardDescription className="text-slate-600">
                  Advent services, Christmas Eve candlelight service, and Christmas Day celebration
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mb-4">
                  <Users className="text-emerald-700" size={24} />
                </div>
                <CardTitle className="text-xl mb-2">Baptism Services</CardTitle>
                <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-3">
                  Quarterly
                </div>
                <CardDescription className="text-slate-600">
                  Celebration of new believers through the sacrament of baptism - contact the church office to schedule
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mb-4">
                  <Church className="text-emerald-700" size={24} />
                </div>
                <CardTitle className="text-xl mb-2">Holy Communion</CardTitle>
                <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-3">
                  First Sunday Monthly
                </div>
                <CardDescription className="text-slate-600">
                  Celebration of the Lord's Supper during morning worship service
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="text-emerald-700" size={24} />
                </div>
                <CardTitle className="text-xl mb-2">Church Anniversary</CardTitle>
                <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-3">
                  August
                </div>
                <CardDescription className="text-slate-600">
                  Celebrating our heritage and God's faithfulness with special services and fellowship
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="text-emerald-700" size={24} />
                </div>
                <CardTitle className="text-xl mb-2">Revival Services</CardTitle>
                <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-3">
                  As Scheduled
                </div>
                <CardDescription className="text-slate-600">
                  Special worship services with guest speakers for spiritual renewal and growth
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Online Worship Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Youtube size={16} />
              Watch Online
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Online Worship
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4">
              Can't join us in person? Worship with us online!
            </p>
            <p className="text-lg text-emerald-700 font-semibold">
              Live streaming available for Sunday Morning Worship at 10:00 AM
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Facebook className="text-white" size={28} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Facebook Live</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-slate-600 mb-4">
                  Watch our services live on Facebook every Sunday at 10:00 AM
                </CardDescription>
                <a 
                  href="https://www.facebook.com/uccpzambo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
                >
                  Watch on Facebook
                </a>
              </CardHeader>
            </Card>

            <Card className="border-red-200 bg-gradient-to-br from-red-50 to-slate-50 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center">
                    <Youtube className="text-white" size={28} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">YouTube Channel</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-slate-600 mb-4">
                  Catch up on past services and special programs
                </CardDescription>
                <a 
                  href="https://www.youtube.com/@uccpzambo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700"
                >
                  Visit YouTube
                </a>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Sermon Archive Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <BookOpen size={16} />
              Sermon Archive
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Sermon Archive
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Listen to past messages and grow in your faith
            </p>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Access our collection of sermons and teachings. Visit our YouTube channel for full sermon videos and audio recordings.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg mb-2">Recent Sermons Available</CardTitle>
                <CardDescription className="text-slate-600">
                  Visit our YouTube channel @uccpzambo for the latest messages and teachings
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg mb-2">Special Services</CardTitle>
                <CardDescription className="text-slate-600">
                  Holy Week services, Christmas programs, and special event recordings
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg mb-2">Bible Study Series</CardTitle>
                <CardDescription className="text-slate-600">
                  In-depth teaching series on various books of the Bible
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-8">
            <a 
              href="https://www.youtube.com/@uccpzambo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-red-600 text-white rounded-lg font-semibold text-lg hover:bg-red-700 shadow-lg hover:shadow-xl"
            >
              Browse Sermon Archive
            </a>
          </div>
        </div>
      </section>

      {/* Visit Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Info size={16} />
              Visitor Info
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Plan Your Visit
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-0">
              <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-emerald-600">
                What should I wear?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Come as you are! We welcome casual and formal attire. What matters most is your heart for worship.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-emerald-600">
                Where do I park?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Parking is available near the church premises. Arrive early for the best spots, especially for Sunday morning worship.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-emerald-600">
                What about children?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Children are welcome in all services! We have dedicated Children Sunday School and Junior Worship at 9:45 AM for age-appropriate ministry.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-emerald-600">
                How long are services?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Sunday Morning Worship typically lasts 1.5-2 hours, including worship, message, and fellowship time.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 bg-gradient-to-br from-emerald-50 to-sky-50 rounded-2xl p-8 border border-emerald-100">
            <div className="flex items-start gap-4">
              <MapPin className="text-emerald-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Visit Us</h3>
                <p className="text-slate-600 mb-3">
                  #27 Castillo Rd., Baliwasan, Zamboanga City, 7000, Philippines
                </p>
                <p className="text-slate-600">
                  For more information, contact us at <strong>+63629916685</strong> or email{' '}
                  <a href="mailto:eccuccpzamboangacity@gmail.com" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                    eccuccpzamboangacity@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
