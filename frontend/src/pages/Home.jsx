import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { WelcomeSection } from '../components/WelcomeSection';
import { QuickLinksSection } from '../components/QuickLinksSection';
import { EventsSection } from '../components/EventsSection';
import { CTASection } from '../components/CTASection';

export const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <HeroSection />
      <WelcomeSection />
      <QuickLinksSection />
      <EventsSection />
      <CTASection />
    </div>
  );
};
