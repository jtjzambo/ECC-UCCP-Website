import React from 'react';
import { Link } from 'react-router-dom';
import { Church, BookOpen, Calendar, Heart } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

export const QuickLinksSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Explore Our Church</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover more about who we are, what we believe, and how you can get involved
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="group border-emerald-100 hover:border-emerald-300 cursor-pointer">
            <Link to="/services">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mb-4">
                  <Church className="text-emerald-700" size={28} />
                </div>
                <CardTitle className="text-xl text-slate-800 group-hover:text-emerald-700">
                  Our Services
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Join us for worship, prayer meetings, and Bible study throughout the week
                </CardDescription>
              </CardHeader>
            </Link>
          </Card>

          <Card className="group border-sky-100 hover:border-sky-300 cursor-pointer">
            <Link to="/history">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-sky-100 to-sky-200 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="text-sky-700" size={28} />
                </div>
                <CardTitle className="text-xl text-slate-800 group-hover:text-sky-700">
                  Our History
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Learn about our journey and how we've served the community over the years
                </CardDescription>
              </CardHeader>
            </Link>
          </Card>

          <Card className="group border-amber-100 hover:border-amber-300 cursor-pointer">
            <Link to="/events">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="text-amber-700" size={28} />
                </div>
                <CardTitle className="text-xl text-slate-800 group-hover:text-amber-700">
                  Events
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Stay updated with upcoming church activities, programs, and special events
                </CardDescription>
              </CardHeader>
            </Link>
          </Card>

          <Card className="group border-rose-100 hover:border-rose-300 cursor-pointer">
            <Link to="/donate">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-rose-100 to-rose-200 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="text-rose-700" size={28} />
                </div>
                <CardTitle className="text-xl text-slate-800 group-hover:text-rose-700">
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
  );
};
