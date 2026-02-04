import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { churchInfo } from '../mock';

export const HeroSection = () => {
  // Split tagline into parts for visual effect
  const taglineParts = churchInfo.tagline.split('. ').filter(part => part.trim());

  return (
    <section className="relative h-[650px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${churchInfo.images.hero})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-emerald-900/80 to-slate-900/85"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2.5 rounded-full text-white mb-8 border border-white/30 shadow-lg">
            <Sparkles size={18} className="text-emerald-300" />
            <span className="text-sm font-semibold tracking-wide">Welcome to Our Faith Community</span>
          </div>
          
          {/* Tagline with visual separation */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
              {taglineParts.map((part, index) => (
                <React.Fragment key={index}>
                  <span className="inline-block">{part}</span>
                  {index < taglineParts.length - 1 && (
                    <span className="text-emerald-300 mx-3">•</span>
                  )}
                </React.Fragment>
              ))}
            </h1>
            <div className="w-24 h-1 bg-emerald-400 mx-auto rounded-full"></div>
          </div>

          <p className="text-xl md:text-2xl text-slate-100 mb-10 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
            A community rooted in Christ's love, committed to justice, compassion, and service to all
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-7 text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <Link to="/services">Join Our Services</Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="bg-white/15 backdrop-blur-md hover:bg-white/25 text-white border-2 border-white/50 hover:border-white/70 px-10 py-7 text-lg font-semibold shadow-xl"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#ffffff"/>
        </svg>
      </div>
    </section>
  );
};
