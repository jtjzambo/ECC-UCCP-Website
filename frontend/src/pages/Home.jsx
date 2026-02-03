import React from 'react';
import { Link } from 'react-router-dom';
import { Church, BookOpen, Calendar, Heart, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { HeroSection } from '../components/HeroSection';
import { WelcomeSection } from '../components/WelcomeSection';
import { churchInfo } from '../mock';

export const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <HeroSection />
      <WelcomeSection />

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
