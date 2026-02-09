import React from 'react';
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';
import { Button } from './ui/button';

export const CTASection = () => {
  return (
    <section className="py-20 bg-slate-800 text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://customer-assets.emergentagent.com/job_0ca8b7ab-d422-4d3b-b565-d4e3e0d6ac03/artifacts/8n1g6gue_Cover%20photo.jpg"
          alt="Ecumenical Center Church Community"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-800/90 to-slate-800/80"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Users size={48} className="mx-auto mb-6 text-emerald-400" />
        <h2 className="text-4xl font-bold mb-6">Become Part of Our Family</h2>
        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
          Everyone is welcome here! Come as you are and experience the love of God and the warmth of our community.
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
  );
};
