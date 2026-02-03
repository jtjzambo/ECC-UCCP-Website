import React from 'react';
import { churchInfo } from '../mock';

export const WelcomeSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="!font-bold !text-4xl mb-6 text-slate-800">
              {churchInfo.introduction.title}
            </h2>
            <p className="!text-lg mb-6 text-slate-600">
              {churchInfo.introduction.content}
            </p>
            <div className="bg-gradient-to-br from-emerald-50 to-sky-50 p-6 rounded-xl border border-emerald-100">
              <p className="text-slate-700 italic leading-relaxed">
                <span className="!font-semibold text-emerald-700"></span> {churchInfo.introduction.mission}
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={churchInfo.images.community}
              alt="Church Community"
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover" />

            <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-xl shadow-xl">
              <p className="text-3xl font-bold">Join Us</p>
              <p className="text-emerald-100">Every Sunday</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};