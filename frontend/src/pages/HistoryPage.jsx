import React from 'react';
import { Calendar, Users, Heart, BookOpen, Award, Church } from 'lucide-react';

export const HistoryPage = () => {
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
            Our Story of Faith
          </h1>
          <p className="text-xl text-slate-200">
            A journey of service, transformation, and community
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
              Our Local History
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Ecumenical Center Church has been a beacon of hope and faith in Zamboanga City for many years. Our story is one of dedication, service, and unwavering commitment to the Gospel of Jesus Christ and the transformation of our community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl p-8 border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Foundation and Early Years
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Our church was established as a gathering place for believers committed to ecumenical dialogue and unified Christian witness. From the beginning, we embraced the vision of the United Church of Christ in the Philippines.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl p-8 border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Growth and Expansion
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Through the years, our congregation has grown from a small fellowship into a vibrant community of faith. We've expanded our ministries to include youth programs, community outreach, and various service initiatives.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl p-8 border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Community Impact
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Our church has been actively involved in addressing social concerns, providing support during times of crisis, and working alongside other faith communities to build a more just and compassionate society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UCCP Overview Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Users size={16} />
              United Church of Christ in the Philippines
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Understanding UCCP
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              The United Church of Christ in the Philippines represents a historic union of Protestant churches in the Philippines, united in mission, vision, and commitment to transformative ministry.
            </p>
          </div>

          {/* UCCP History */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center">
                <Calendar className="text-amber-700" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">
                UCCP History
              </h3>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              The UCCP was formally established on May 25, 1948, through the union of three major Protestant denominations: the Evangelical Church of the Philippines, the Philippine Methodist Church, and the United Evangelical Church. This historic merger represented a powerful witness to Christian unity and cooperation in service to the Filipino people.
            </p>
          </div>

          {/* Core Values */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center">
                <Heart className="text-emerald-700" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">
                Core Values
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    Unity in Diversity
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    We celebrate our diverse backgrounds while maintaining unity in Christ, embracing ecumenical dialogue and cooperation with all people of goodwill.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    Prophetic Witness
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    We stand with the marginalized and speak truth to power, advocating for justice, peace, and the integrity of creation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    Servant Leadership
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Following Christ's example, we lead through service, empowering communities and fostering transformation through humble engagement.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    Faith in Action
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Our faith compels us to action. We don't just proclaim the Gospel; we live it through concrete acts of compassion and justice.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Theological Stance */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-100 to-sky-200 rounded-xl flex items-center justify-center">
                <BookOpen className="text-sky-700" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">
                Our Theological Stance
              </h3>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              The UCCP is rooted in Reformed theology while embracing a progressive, contextual approach to faith. We affirm the authority of Scripture, the sovereignty of God, and the lordship of Jesus Christ.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <p className="text-slate-700 leading-relaxed">The Bible as our primary source of faith and practice, interpreted in community and context</p>
              </li>
              <li className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <p className="text-slate-700 leading-relaxed">Salvation through God's grace, not by human merit</p>
              </li>
              <li className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <p className="text-slate-700 leading-relaxed">The priesthood of all believers and the giftedness of every member</p>
              </li>
              <li className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <p className="text-slate-700 leading-relaxed">God's preferential option for the poor and marginalized</p>
              </li>
              <li className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <p className="text-slate-700 leading-relaxed">Commitment to social transformation as integral to the Gospel</p>
              </li>
              <li className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <p className="text-slate-700 leading-relaxed">Care for creation as faithful stewardship</p>
              </li>
            </ul>
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
              Timeline of Events
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Key milestones in our journey of faith
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200"></div>

            <div className="space-y-12">
              {/* Event 1948 */}
              <div className="relative flex items-center md:flex-row flex-col gap-8">
                <div className="w-full md:w-5/12 md:text-right">
                  <div className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl p-6 border border-emerald-100">
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-sky-100 text-sky-700">
                      UCCP
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      UCCP Founded
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      The United Church of Christ in the Philippines is established through the historic union of three Protestant denominations.
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-20 h-20 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10">
                  1948
                </div>
                <div className="hidden md:block w-5/12"></div>
              </div>

              {/* Event 1990s */}
              <div className="relative flex items-center md:flex-row-reverse flex-col gap-8">
                <div className="w-full md:w-5/12 md:text-left">
                  <div className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl p-6 border border-emerald-100">
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-emerald-100 text-emerald-700">
                      Local Church
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      Formal Establishment
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Ecumenical Center Church is officially organized as a local congregation of the UCCP, beginning regular worship services and community programs.
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-20 h-20 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10">
                  1990s
                </div>
                <div className="hidden md:block w-5/12"></div>
              </div>

              {/* Event Present */}
              <div className="relative flex items-center md:flex-row flex-col gap-8">
                <div className="w-full md:w-5/12 md:text-right">
                  <div className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl p-6 border border-emerald-100">
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-emerald-100 text-emerald-700">
                      Local Church
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      Continuing the Journey
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Today, we continue to grow in faith and service, embracing new challenges and opportunities to be Christ's witness in Zamboanga City and beyond.
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-20 h-20 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg z-10">
                  Present
                </div>
                <div className="hidden md:block w-5/12"></div>
              </div>
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
              We're gathering historical photos to showcase our church's journey. Suggested photos include: UCCP founders (1948), early church gatherings, dedication ceremonies, youth ministry activities, community outreach programs, and current congregation photos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
