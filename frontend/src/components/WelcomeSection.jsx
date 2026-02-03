import React from 'react';
import { Heart, Users, BookOpen } from 'lucide-react';
import { churchInfo } from '../mock';

export const WelcomeSection = () => {
  // Parse the mission content to extract Vision, Mission, and Goals
  const missionContent = churchInfo.introduction.mission;
  const visionMatch = missionContent.match(/Our Vision:(.*?)Our Mission:/s);
  const missionMatch = missionContent.match(/Our Mission:(.*?)Our Goals:/s);
  const goalsMatch = missionContent.match(/Our Goals:(.*)/s);
  
  const vision = visionMatch ? visionMatch[1].trim() : '';
  const mission = missionMatch ? missionMatch[1].trim() : '';
  const goalsText = goalsMatch ? goalsMatch[1].trim() : '';
  
  // Extract individual goals
  const goals = goalsText.split('●').filter(g => g.trim()).map(g => g.trim());

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Content */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Heart size={16} />
              About Our Church
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              {churchInfo.introduction.title}
            </h2>
            <div className="prose prose-lg max-w-none">
              {churchInfo.introduction.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg text-slate-600 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="relative h-full">
            <div className="sticky top-24">
              <img 
                src={churchInfo.images.community}
                alt="Church Community"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white p-6 rounded-xl shadow-xl">
                <p className="text-3xl font-bold">Join Us</p>
                <p className="text-emerald-100">Every Sunday</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision, Mission, Goals Section */}
        <div className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-3xl p-8 md:p-12 border border-emerald-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Vision, Mission & Goals
            </h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Guided by faith and called to service, we are committed to transforming lives and communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Vision Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-100 to-sky-200 rounded-xl flex items-center justify-center">
                  <Users className="text-sky-700" size={24} />
                </div>
                <h4 className="text-2xl font-bold text-slate-800">Our Vision</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {vision}
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center">
                  <Heart className="text-emerald-700" size={24} />
                </div>
                <h4 className="text-2xl font-bold text-slate-800">Our Mission</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {mission}
              </p>
            </div>
          </div>

          {/* Goals Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center">
                <BookOpen className="text-amber-700" size={24} />
              </div>
              <h4 className="text-2xl font-bold text-slate-800">Our Goals</h4>
            </div>
            <div className="space-y-6">
              {goals.map((goal, index) => {
                const [title, ...description] = goal.split('–');
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-slate-800 font-semibold mb-1">{title.trim()}</p>
                      {description.length > 0 && (
                        <p className="text-slate-600 leading-relaxed">
                          {description.join('–').trim()}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
