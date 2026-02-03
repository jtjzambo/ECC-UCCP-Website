import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { churchInfo } from '../mock';

export const HeroSection = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${churchInfo.images.hero})`
        }}>

        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-emerald-900/70 to-sky-900/60"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white mb-6 border border-white/20">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Welcome to Our Faith Community</span>
          </div>
          <h1 className="md:text-6xl !font-bold !text-5xl mb-6 text-white">
            {churchInfo.tagline}
          </h1>
          <p className="text-xl md:text-2xl text-slate-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join us as we worship together, grow in faith, and serve our community with love and compassion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl">

              <Link to="/services">Our Services</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-white/30 px-8 py-6 text-lg shadow-lg">

              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>);

};