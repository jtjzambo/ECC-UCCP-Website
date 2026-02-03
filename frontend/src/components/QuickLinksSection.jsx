import React from 'react';
import { Link } from 'react-router-dom';
import { Church, BookOpen, Calendar, Heart } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

const quickLinks = [
  {
    title: "Our Services",
    path: "/services",
    description: "Join us for worship, prayer meetings, and Bible study throughout the week",
    icon: Church,
    gradient: "from-emerald-100 to-emerald-200",
    iconColor: "text-emerald-700",
    borderColor: "border-emerald-100 hover:border-emerald-300",
    hoverColor: "group-hover:text-emerald-700"
  },
  {
    title: "Our History",
    path: "/history",
    description: "Learn about our journey and how we've served the community over the years",
    icon: BookOpen,
    gradient: "from-sky-100 to-sky-200",
    iconColor: "text-sky-700",
    borderColor: "border-sky-100 hover:border-sky-300",
    hoverColor: "group-hover:text-sky-700"
  },
  {
    title: "Events",
    path: "/events",
    description: "Stay updated with upcoming church activities, programs, and special events",
    icon: Calendar,
    gradient: "from-amber-100 to-amber-200",
    iconColor: "text-amber-700",
    borderColor: "border-amber-100 hover:border-amber-300",
    hoverColor: "group-hover:text-amber-700"
  },
  {
    title: "Donate",
    path: "/donate",
    description: "Support our mission and ministry through your generous giving",
    icon: Heart,
    gradient: "from-rose-100 to-rose-200",
    iconColor: "text-rose-700",
    borderColor: "border-rose-100 hover:border-rose-300",
    hoverColor: "group-hover:text-rose-700"
  }
];

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
          {quickLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <Card 
                key={link.path} 
                className={`group hover:shadow-xl cursor-pointer ${link.borderColor}`}
              >
                <Link to={link.path}>
                  <CardHeader>
                    <div className={`w-14 h-14 bg-gradient-to-br ${link.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110`}>
                      <IconComponent className={link.iconColor} size={28} />
                    </div>
                    <CardTitle className={`text-xl text-slate-800 ${link.hoverColor}`}>
                      {link.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      {link.description}
                    </CardDescription>
                  </CardHeader>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
