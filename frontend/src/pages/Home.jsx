import React from 'react';
import { Link } from 'react-router-dom';
import { Church, BookOpen, Calendar, Heart, Users, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { churchInfo } from '../mock';

export const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${churchInfo.images.hero})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-emerald-900/70 to-sky-900/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white mb-6 border border-white/20">
              <Sparkles size={16} />
              <span className="text-sm font-medium">Welcome to Our Faith Community</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {churchInfo.tagline}
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join us as we worship together, grow in faith, and serve our community with love and compassion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Link to="/services">Our Services</Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-white/30 px-8 py-6 text-lg shadow-lg transition-all duration-200"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8fafc"/>
          </svg>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                {churchInfo.introduction.title}
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                {churchInfo.introduction.content}
              </p>
              <div className="bg-gradient-to-br from-emerald-50 to-sky-50 p-6 rounded-xl border border-emerald-100">
                <p className="text-slate-700 italic leading-relaxed">
                  <span className="font-semibold text-emerald-700">Our Mission:</span> {churchInfo.introduction.mission}
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={churchInfo.images.community}
                alt="Church Community"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-xl shadow-xl">
                <p className="text-3xl font-bold">Join Us</p>
                <p className="text-emerald-100">Every Sunday</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Explore Our Church</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover more about who we are, what we believe, and how you can get involved
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Our Services Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-emerald-100 hover:border-emerald-300 cursor-pointer">
              <Link to="/services">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Church className="text-emerald-700" size={28} />
                  </div>
                  <CardTitle className="text-xl text-slate-800 group-hover:text-emerald-700 transition-colors">
                    Our Services
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    Join us for worship, prayer meetings, and Bible study throughout the week
                  </CardDescription>
                </CardHeader>
              </Link>
            </Card>

            {/* History Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-sky-100 hover:border-sky-300 cursor-pointer">
              <Link to="/history">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-sky-100 to-sky-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="text-sky-700" size={28} />
                  </div>
                  <CardTitle className="text-xl text-slate-800 group-hover:text-sky-700 transition-colors">
                    Our History
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    Learn about our journey and how we've served the community over the years
                  </CardDescription>
                </CardHeader>
              </Link>
            </Card>

            {/* Events Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-amber-100 hover:border-amber-300 cursor-pointer">
              <Link to="/events">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="text-amber-700" size={28} />
                  </div>
                  <CardTitle className="text-xl text-slate-800 group-hover:text-amber-700 transition-colors">
                    Events
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    Stay updated with upcoming church activities, programs, and special events
                  </CardDescription>
                </CardHeader>
              </Link>
            </Card>

            {/* Donate Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-rose-100 hover:border-rose-300 cursor-pointer">
              <Link to="/donate">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-rose-100 to-rose-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="text-rose-700" size={28} />
                  </div>
                  <CardTitle className="text-xl text-slate-800 group-hover:text-rose-700 transition-colors">
                    Donate
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    Support our mission and ministry through your generous giving
                  </CardDescription>
                </CardHeader>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Upcoming Events</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Join us for fellowship, worship, and community service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {churchInfo.events.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">{event.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} className="text-emerald-600" />
                      {event.date}
                    </span>
                    <span>{event.time}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
              <Link to="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users size={48} className="mx-auto mb-6 text-emerald-400" />
          <h2 className="text-4xl font-bold mb-6">Become Part of Our Family</h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Everyone is welcome here. Come as you are and experience the love of God and the warmth of our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-800 px-8 py-6 text-lg"
            >
              <Link to="/services">Plan Your Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
