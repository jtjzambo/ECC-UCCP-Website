import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { churchInfo } from '../mock';

export const EventsSection = () => {
  const events = churchInfo.events || [];
  
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Upcoming Events</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join us for fellowship, worship, and community service
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.length > 0 && events.map((event) => (
            <Card key={event.id} className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
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
  );
};
