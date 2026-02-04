import React, { useState } from 'react';
import { Calendar, Users, Heart, BookOpen, Award, Church } from 'lucide-react';
import { historyData } from '../historyMock';

// Hero Component
const HeroSection = () => (
  <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800">
    <div className="absolute inset-0 bg-black/40"></div>
    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-flex items-center gap-2 bg-emerald-600/20 backdrop-blur-md px-4 py-2 rounded-full text-emerald-300 mb-6 border border-emerald-500/30">
        <BookOpen size={18} />
        <span className="text-sm font-semibold">Our Heritage</span>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
        {historyData.hero.title}
      </h1>
      <p className="text-xl text-slate-200">
        {historyData.hero.subtitle}
      </p>
    </div>
  </section>
);

// Local History Component
const LocalHistorySection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          <Church size={16} />
          Ecumenical Center Church
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
          {historyData.localHistory.title}
        </h2>
        <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
          {historyData.localHistory.introduction}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {historyData.localHistory.content.map((section, index) => (
          <div key={index} className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl p-8 border border-emerald-100">
            <div className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-bold text-xl mb-4">
              {index + 1}
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              {section.title}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {section.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// UCCP Overview Component
const UCCPOverviewSection = () => {
  const overview = historyData.uccpOverview;
  
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Users size={16} />
            United Church of Christ in the Philippines
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            {overview.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            {overview.subtitle}
          </p>
        </div>

        {/* UCCP History */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center">
              <Calendar className="text-amber-700" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-slate-800">
              {overview.history.title}
            </h3>
          </div>
          <p className="text-lg text-slate-600 leading-relaxed">
            {overview.history.content}
          </p>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center">
              <Heart className="text-emerald-700" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-slate-800">
              {overview.values.title}
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {overview.values.items.map((value, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    {value.name}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Theological Stance */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-sky-100 to-sky-200 rounded-xl flex items-center justify-center">
              <BookOpen className="text-sky-700" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-slate-800">
              {overview.theological.title}
            </h3>
          </div>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            {overview.theological.content}
          </p>
          <ul className="space-y-3">
            {overview.theological.principles.map((principle, index) => (
              <li key={index} className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <p className="text-slate-700 leading-relaxed">{principle}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

// Timeline Component
const TimelineSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const timeline = historyData.timeline;
  
  const filteredEvents = selectedCategory === 'all' 
    ? timeline.events 
    : timeline.events.filter(e => e.category === selectedCategory);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Award size={16} />
            Milestones
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            {timeline.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            {timeline.subtitle}
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full font-medium ${
                selectedCategory === 'all'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setSelectedCategory('local')}
              className={`px-6 py-2 rounded-full font-medium ${
                selectedCategory === 'local'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Local Church
            </button>
            <button
              onClick={() => setSelectedCategory('uccp')}
              className={`px-6 py-2 rounded-full font-medium ${
                selectedCategory === 'uccp'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              UCCP History
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200"></div>

          <div className="space-y-12">
            {filteredEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col gap-8`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl p-6 border border-emerald-100">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                      event.category === 'uccp' 
                        ? 'bg-sky-100 text-sky-700' 
                        : 'bg-emerald-100 text-emerald-700'
                    }`}>
                      {event.category === 'uccp' ? 'UCCP' : 'Local Church'}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                <div className="flex-shrink-0 w-20 h-20 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10">
                  {event.year}
                </div>

                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Photo Suggestions Component
const PhotoSuggestionsSection = () => {
  const photos = historyData.photoSuggestions;
  
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Photo Gallery Suggestions
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Suggested historical photos to enhance this page (placeholders for now)
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <div key={photo.id} className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="h-64 bg-gradient-to-br from-slate-200 to-emerald-100 flex items-center justify-center">
                <div className="text-center p-6">
                  <BookOpen size={48} className="text-slate-400 mx-auto mb-3" />
                  <p className="text-sm text-slate-500 font-medium">
                    Photo Suggestion
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {photo.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 italic">
                  {photo.caption}
                </p>
                <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-100">
                  <p className="text-xs text-emerald-700">
                    <strong>Suggestion:</strong> {photo.suggestion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Page Component
export const HistoryPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <LocalHistorySection />
      <UCCPOverviewSection />
      <TimelineSection />
      <PhotoSuggestionsSection />
    </div>
  );
};
