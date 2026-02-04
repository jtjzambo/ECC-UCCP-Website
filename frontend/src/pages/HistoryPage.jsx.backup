import React, { useState } from 'react';
import { Calendar, Users, Heart, BookOpen, Award, Church, Building2, GraduationCap } from 'lucide-react';
import { historyData } from '../historyMock';

export const HistoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredEvents = selectedCategory === 'all' 
    ? historyData.timeline.events 
    : historyData.timeline.events.filter(e => e.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
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

      {/* Our Local History Section */}
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
            {historyData.localHistory.content.map((section, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl p-8 border border-emerald-100">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-bold text-xl mb-4">
                  {idx + 1}
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

      {/* UCCP History Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Users size={16} />
              United Church of Christ in the Philippines
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              {historyData.uccpHistory.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              {historyData.uccpHistory.subtitle}
            </p>
          </div>

          {/* Founding Story */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center">
                <Calendar className="text-amber-700" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">
                {historyData.uccpHistory.foundingStory.title}
              </h3>
            </div>
            {historyData.uccpHistory.foundingStory.content.split('\n\n').map((para, idx) => (
              <p key={idx} className="text-lg text-slate-600 leading-relaxed mb-4">
                {para}
              </p>
            ))}
          </div>

          {/* Key Milestones */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center">
                <Award className="text-emerald-700" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">
                Key Periods in UCCP History
              </h3>
            </div>
            <div className="space-y-8">
              {historyData.uccpHistory.keyMilestones.map((milestone, idx) => (
                <div key={idx} className="border-l-4 border-emerald-600 pl-6">
                  <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-2">
                    {milestone.period}
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800 mb-3">
                    {milestone.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {milestone.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-rose-200 rounded-xl flex items-center justify-center">
                <Heart className="text-rose-700" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">
                {historyData.uccpHistory.values.title}
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {historyData.uccpHistory.values.items.map((value, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                    {idx + 1}
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
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-100 to-sky-200 rounded-xl flex items-center justify-center">
                <BookOpen className="text-sky-700" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">
                {historyData.uccpHistory.theological.title}
              </h3>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              {historyData.uccpHistory.theological.content}
            </p>
            <ul className="space-y-3">
              {historyData.uccpHistory.theological.principles.map((principle, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <p className="text-slate-700 leading-relaxed">{principle}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Historic Institutions */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
                <Building2 className="text-purple-700" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">
                {historyData.institutions.title}
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {historyData.institutions.items.map((inst, idx) => (
                <div key={idx} className="bg-gradient-to-br from-purple-50 to-sky-50 rounded-xl p-6 border border-purple-100">
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap className="text-purple-600" size={20} />
                    <span className="text-sm font-semibold text-purple-700">{inst.year}</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">{inst.name}</h4>
                  <p className="text-sm text-slate-500 mb-2">{inst.location}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{inst.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Award size={16} />
              Milestones
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              {historyData.timeline.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              {historyData.timeline.subtitle}
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
                onClick={() => setSelectedCategory('foundation')}
                className={`px-6 py-2 rounded-full font-medium ${
                  selectedCategory === 'foundation'
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Early Foundations
              </button>
              <button
                onClick={() => setSelectedCategory('union')}
                className={`px-6 py-2 rounded-full font-medium ${
                  selectedCategory === 'union'
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Path to Union
              </button>
              <button
                onClick={() => setSelectedCategory('uccp')}
                className={`px-6 py-2 rounded-full font-medium ${
                  selectedCategory === 'uccp'
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                UCCP Era
              </button>
              <button
                onClick={() => setSelectedCategory('local')}
                className={`px-6 py-2 rounded-full font-medium ${
                  selectedCategory === 'local'
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Our Local Church
              </button>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200"></div>

            <div className="space-y-12">
              {filteredEvents.map((event, idx) => (
                <div
                  key={idx}
                  className={`relative flex items-center ${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col gap-8`}
                >
                  <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`rounded-2xl p-6 border ${
                      event.highlight 
                        ? 'bg-gradient-to-br from-emerald-100 to-sky-100 border-emerald-300 shadow-lg' 
                        : 'bg-gradient-to-br from-slate-50 to-emerald-50 border-emerald-100'
                    }`}>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                        event.category === 'uccp' 
                          ? 'bg-sky-600 text-white' 
                          : event.category === 'local'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-amber-100 text-amber-700'
                      }`}>
                        {event.category === 'uccp' ? 'UCCP' : event.category === 'local' ? 'Local Church' : 'Historical'}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  <div className={`flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center font-bold shadow-lg z-10 ${
                    event.highlight 
                      ? 'bg-gradient-to-br from-emerald-600 to-sky-600 text-white text-base' 
                      : 'bg-emerald-600 text-white text-lg'
                  }`}>
                    {event.year}
                  </div>

                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 bg-gradient-to-br from-emerald-50 to-sky-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100">
            <BookOpen size={48} className="text-emerald-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Photo Gallery Coming Soon
            </h3>
            <p className="text-slate-600 leading-relaxed">
              We're gathering historical photos to showcase our church's journey. Suggested photos include: UCCP founders at the 1948 Uniting Assembly, Silliman University founding, early mission hospitals, wartime unity efforts, People Power participation, and current congregation photos from ECC-UCCP Zamboanga.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
