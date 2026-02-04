import React from 'react';
import { Church, Heart, Users, BookOpen, HandHeart, Sparkles, Award, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-sky-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-600/20 backdrop-blur-md px-4 py-2 rounded-full text-emerald-200 mb-6 border border-emerald-500/30">
            <Church size={18} />
            <span className="text-sm font-semibold">Our Story</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About Us
          </h1>
          <p className="text-xl text-slate-200">
            A Christ-centered community serving Zamboanga for 60 years
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Sparkles size={16} />
              Who We Are
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
              Ecumenical Center Church - UCCP
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-br from-emerald-50 to-sky-50 rounded-2xl p-8 md:p-12 border border-emerald-100 mb-12">
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                The <strong>Ecumenical Center Church – United Church of Christ in the Philippines (UCCP Zamboanga City)</strong> is a Christ-centered community of faith rooted in decades of worship, service, and mission.
              </p>
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                From a small gathering under a mango tree in 1964, God has grown our congregation into a vibrant church committed to spiritual growth, Christian education, and compassionate outreach.
              </p>
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                Through the faithful leadership of pastors and lay members, we have built ministries that serve families, children, and communities—offering relief in times of crisis, establishing missions in surrounding areas, and promoting unity through ecumenical partnerships.
              </p>
              <p className="text-xl text-slate-700 leading-relaxed">
                Guided by our rich heritage and sustained by God's grace, we continue to proclaim the Gospel and serve Zamboanga with hope, love, and dedication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Heart size={16} />
              Our Core Values
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              What We Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mb-4">
                  <Church className="text-emerald-700" size={28} />
                </div>
                <CardTitle className="text-xl mb-2">Christ-Centered</CardTitle>
                <CardDescription className="text-slate-600">
                  Jesus Christ is at the heart of all we do, guiding our worship, teaching, and service
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-sky-100 to-sky-200 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="text-sky-700" size={28} />
                </div>
                <CardTitle className="text-xl mb-2">Biblically Grounded</CardTitle>
                <CardDescription className="text-slate-600">
                  Scripture is our foundation for faith and practice, interpreted in community and context
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-4">
                  <Users className="text-purple-700" size={28} />
                </div>
                <CardTitle className="text-xl mb-2">Community Focused</CardTitle>
                <CardDescription className="text-slate-600">
                  We value fellowship, mutual support, and working together to serve God and neighbors
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-rose-100 to-rose-200 rounded-xl flex items-center justify-center mb-4">
                  <HandHeart className="text-rose-700" size={28} />
                </div>
                <CardTitle className="text-xl mb-2">Compassionate Service</CardTitle>
                <CardDescription className="text-slate-600">
                  Serving those in need with love and action, following Christ's example of compassion
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Ministries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Target size={16} />
              Active Ministries
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              How We Serve
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              God has blessed us with diverse ministries that touch lives throughout Zamboanga City
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50 to-white">
              <CardHeader>
                <CardTitle className="text-xl mb-2 text-emerald-700">Worship & Spiritual Growth</CardTitle>
                <CardDescription className="text-slate-600">
                  Weekly worship services, Bible studies, prayer meetings, and discipleship programs that nurture faith
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-sky-200 bg-gradient-to-br from-sky-50 to-white">
              <CardHeader>
                <CardTitle className="text-xl mb-2 text-sky-700">Christian Education</CardTitle>
                <CardDescription className="text-slate-600">
                  Sunday School for all ages, Youth Fellowship (CYF), and Pre-School Program (ECPSZC) founded in 1986
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-white">
              <CardHeader>
                <CardTitle className="text-xl mb-2 text-purple-700">Community Outreach</CardTitle>
                <CardDescription className="text-slate-600">
                  Relief services during crises, livelihood programs (Operation JOB), and community development initiatives
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-white">
              <CardHeader>
                <CardTitle className="text-xl mb-2 text-amber-700">Mission Work</CardTitle>
                <CardDescription className="text-slate-600">
                  Established missions in Basilan (1987), Tungawan (2005), and ZAMBABME mining company workers outreach
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-rose-200 bg-gradient-to-br from-rose-50 to-white">
              <CardHeader>
                <CardTitle className="text-xl mb-2 text-rose-700">Ecumenical Partnerships</CardTitle>
                <CardDescription className="text-slate-600">
                  IN-A-PEACE (registered 1992) for ecumenical education and development, hosting conferences and conventions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-teal-200 bg-gradient-to-br from-teal-50 to-white">
              <CardHeader>
                <CardTitle className="text-xl mb-2 text-teal-700">Student Ministry</CardTitle>
                <CardDescription className="text-slate-600">
                  Bayanihan Student Center providing housing and support for students pursuing education
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Heritage Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Award size={16} />
                Our Heritage
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                60 Years of Faithful Service
              </h2>
              <div className="space-y-4 text-lg text-slate-600">
                <p className="leading-relaxed">
                  Since our humble beginning under a mango tree in 1964, God has been faithful to our congregation. What started as a small gathering of believers has grown into a thriving church community.
                </p>
                <p className="leading-relaxed">
                  In 1969, we were officially named <strong>Ecumenical Center Church</strong>, reflecting our commitment to Christian unity and cooperation across denominational lines.
                </p>
                <p className="leading-relaxed">
                  Through times of challenge and blessing, including serving as a relief center during the 1973 Jolo conflict, we have remained steadfast in our mission to serve Christ and community.
                </p>
                <p className="leading-relaxed">
                  In 2014, we celebrated our <strong>Golden Anniversary</strong>—50 years "Seasoned by Times"—and continue today with renewed dedication for the future.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-emerald-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Key Milestones</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                    1964
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">First Worship</p>
                    <p className="text-slate-600 text-sm">Under mango tree at Malonzo residence</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                    1969
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Named ECC</p>
                    <p className="text-slate-600 text-sm">Officially named Ecumenical Center Church</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                    1993
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">New Sanctuary</p>
                    <p className="text-slate-600 text-sm">Current church building dedicated</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                    2024
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">60 Years Strong</p>
                    <p className="text-slate-600 text-sm">Continuing faithful service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users size={48} className="mx-auto mb-6 text-emerald-400" />
          <h2 className="text-4xl font-bold mb-6">Join Our Faith Community</h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Whether you're seeking a church home, exploring faith, or looking for ways to serve, you're welcome here. Experience the warmth of our community and the transforming love of Christ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/services"
              className="inline-block px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold text-lg shadow-lg transition-colors duration-200"
            >
              Visit Our Services
            </a>
            <a 
              href="/contact"
              className="inline-block px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
