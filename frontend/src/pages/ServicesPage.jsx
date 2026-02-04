import React from 'react';
import { Clock, Users, Heart, Music, Church, BookOpen, Calendar, Star, Droplet, Flame, Cross, Facebook, Youtube, MapPin, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { servicesData } from '../servicesMock';

const iconMap = {
  book: BookOpen,
  users: Users,
  church: Church,
  heart: Heart,
  music: Music,
  cross: Cross,
  star: Star,
  droplet: Droplet,
  bread: Church,
  calendar: Calendar,
  flame: Flame,
  facebook: Facebook,
  youtube: Youtube
};

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
            {servicesData.hero.title}
          </h1>
          <p className="text-xl text-slate-200">
            {servicesData.hero.subtitle}
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
              {servicesData.weeklySchedule.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {servicesData.weeklySchedule.subtitle}
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
              {servicesData.weeklySchedule.services[0].services.map((service, idx) => (
                <Card 
                  key={idx} 
                  className={`${
                    service.featured 
                      ? 'border-emerald-300 bg-gradient-to-br from-emerald-50 to-sky-50 shadow-lg' 
                      : service.special
                      ? 'border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50'
                      : 'border-slate-200'
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            service.featured ? 'bg-emerald-600' : service.special ? 'bg-amber-600' : 'bg-slate-600'
                          }`}>
                            <Clock size={20} className="text-white" />
                          </div>
                          <span className={`text-2xl font-bold ${
                            service.featured ? 'text-emerald-700' : service.special ? 'text-amber-700' : 'text-slate-800'
                          }`}>
                            {service.time}
                          </span>
                        </div>
                        <CardTitle className="text-xl mb-2">{service.name}</CardTitle>
                        {service.schedule && (
                          <div className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold mb-2">
                            {service.schedule}
                          </div>
                        )}
                        {service.featured && (
                          <div className="inline-block px-3 py-1 bg-emerald-600 text-white rounded-full text-xs font-semibold mb-2">
                            Main Service
                          </div>
                        )}
                      </div>
                    </div>
                    <CardDescription className="text-slate-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
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
              {servicesData.weeklySchedule.services[1].services.map((service, idx) => (
                <Card key={idx} className="border-sky-200 bg-gradient-to-br from-sky-50 to-slate-50">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center">
                        <Clock size={20} className="text-white" />
                      </div>
                      <span className="text-2xl font-bold text-sky-700">{service.time}</span>
                    </div>
                    <CardTitle className="text-xl mb-2">{service.name}</CardTitle>
                    <CardDescription className="text-slate-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
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
              {servicesData.specialServices.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {servicesData.specialServices.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.specialServices.events.map((event, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mb-4">
                    <Calendar className="text-emerald-700" size={24} />
                  </div>
                  <CardTitle className="text-xl mb-2">{event.name}</CardTitle>
                  <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-3">
                    {event.season}
                  </div>
                  <CardDescription className="text-slate-600">
                    {event.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
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
              {servicesData.onlineWorship.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4">
              {servicesData.onlineWorship.subtitle}
            </p>
            <p className="text-lg text-emerald-700 font-semibold">
              {servicesData.onlineWorship.note}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50 hover:shadow-xl transition-shadow duration-300">
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
                  href={servicesData.onlineWorship.platforms[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Watch on Facebook
                </a>
              </CardHeader>
            </Card>

            <Card className="border-red-200 bg-gradient-to-br from-red-50 to-slate-50 hover:shadow-xl transition-shadow duration-300">
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
                  href={servicesData.onlineWorship.platforms[1].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
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
              {servicesData.sermonArchive.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              {servicesData.sermonArchive.subtitle}
            </p>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {servicesData.sermonArchive.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {servicesData.sermonArchive.recentSermons.map((item, idx) => (
              <Card key={idx} className="bg-white">
                <CardHeader>
                  <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                  <CardDescription className="text-slate-600">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <a 
              href="https://www.youtube.com/@uccpzambo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-red-600 text-white rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
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
              {servicesData.visitInfo.title}
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {servicesData.visitInfo.items.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-emerald-600">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
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
