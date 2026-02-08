import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Gift, Users, HandHeart, CreditCard, Building, Wallet, Calendar, Target, Sparkles, ChevronRight, Check, Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

export const DonatePage = () => {
  const [donationType, setDonationType] = useState('one-time');
  const [selectedAmount, setSelectedAmount] = useState(null);

  const donationAmounts = [500, 1000, 2500, 5000, 10000];

  const volunteerOpportunities = [
    {
      title: "Worship Ministry",
      description: "Join our choir, music team, or serve as a liturgist during Sunday services.",
      icon: "🎵",
      commitment: "Sundays"
    },
    {
      title: "Children's Ministry",
      description: "Help teach Sunday School and nurture the faith of our youngest members.",
      icon: "👧",
      commitment: "Sundays, 9:00 AM"
    },
    {
      title: "Community Outreach",
      description: "Participate in feeding programs, medical missions, and community development.",
      icon: "🤝",
      commitment: "Monthly"
    },
    {
      title: "Youth Fellowship (CYF)",
      description: "Mentor and guide our young people through activities and Bible studies.",
      icon: "🌟",
      commitment: "Saturdays/Sundays"
    },
    {
      title: "Hospitality Team",
      description: "Welcome visitors, prepare fellowship meals, and create a warm atmosphere.",
      icon: "☕",
      commitment: "Sundays"
    },
    {
      title: "Media & Communications",
      description: "Help with livestreaming, social media, photography, and church announcements.",
      icon: "📱",
      commitment: "Flexible"
    }
  ];

  const specialCampaigns = [
    {
      title: "Building Fund",
      description: "Help us maintain and improve our church facilities for future generations.",
      goal: "₱500,000",
      progress: 65,
      icon: Building
    },
    {
      title: "Community Ministry Fund",
      description: "Support our feeding programs and outreach to families in need.",
      goal: "₱100,000",
      progress: 80,
      icon: Heart
    },
    {
      title: "Youth Scholarship Fund",
      description: "Provide educational support for deserving young members of our community.",
      goal: "₱150,000",
      progress: 45,
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-800 via-teal-700 to-emerald-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-full text-white mb-6 border border-white/30">
            <Heart size={18} />
            <span className="text-sm font-semibold">Give & Serve</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Support Our Mission
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto mb-8">
            Your generosity helps us spread God's love, serve our community, and transform lives. Every gift makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#donate" className="px-8 py-4 bg-white text-emerald-700 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-colors shadow-lg">
              Give Now
            </a>
            <a href="#volunteer" className="px-8 py-4 bg-emerald-700 hover:bg-emerald-600 text-white border-2 border-emerald-400 rounded-lg font-semibold text-lg transition-colors">
              Volunteer
            </a>
          </div>
        </div>
      </section>

      {/* Why Give Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Why Your Giving Matters
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              When you give to Ecumenical Center Church, you're investing in lives, community, and the Kingdom of God.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-emerald-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-emerald-600" size={32} />
                </div>
                <CardTitle className="text-xl text-slate-800">Transform Lives</CardTitle>
                <CardDescription className="text-slate-600">
                  Your gifts support ministries that bring hope, healing, and the love of Christ to individuals and families.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-sky-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-100 to-sky-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="text-sky-600" size={32} />
                </div>
                <CardTitle className="text-xl text-slate-800">Strengthen Community</CardTitle>
                <CardDescription className="text-slate-600">
                  Together, we build a faith community where everyone is welcomed, supported, and encouraged to grow.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="text-purple-600" size={32} />
                </div>
                <CardTitle className="text-xl text-slate-800">Spread the Gospel</CardTitle>
                <CardDescription className="text-slate-600">
                  Your generosity enables us to share the Good News through worship, outreach, and mission work.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Gift size={16} />
              Make a Donation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Give With a Cheerful Heart
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." — 2 Corinthians 9:7
            </p>
          </div>

          <Card className="shadow-xl border-0 overflow-hidden">
            <CardContent className="p-8 md:p-10">
              {/* Donation Type Toggle */}
              <div className="flex justify-center mb-8">
                <div className="bg-slate-100 p-1 rounded-full inline-flex">
                  <button
                    onClick={() => setDonationType('one-time')}
                    className={`px-6 py-3 rounded-full font-semibold transition-all ${
                      donationType === 'one-time'
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'text-slate-600 hover:text-slate-800'
                    }`}
                  >
                    One-Time Gift
                  </button>
                  <button
                    onClick={() => setDonationType('recurring')}
                    className={`px-6 py-3 rounded-full font-semibold transition-all ${
                      donationType === 'recurring'
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'text-slate-600 hover:text-slate-800'
                    }`}
                  >
                    Monthly Giving
                  </button>
                </div>
              </div>

              {donationType === 'recurring' && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-8 text-center">
                  <p className="text-emerald-700 font-medium">
                    🌟 Become a monthly partner and provide consistent support for our ministries!
                  </p>
                </div>
              )}

              {/* Amount Selection */}
              <div className="mb-8">
                <p className="text-center text-slate-600 mb-4 font-medium">Select an amount (PHP)</p>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                  {donationAmounts.map(amount => (
                    <button
                      key={amount}
                      onClick={() => setSelectedAmount(amount)}
                      className={`py-4 rounded-xl font-bold text-lg transition-all ${
                        selectedAmount === amount
                          ? 'bg-emerald-600 text-white shadow-lg scale-105'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      ₱{amount.toLocaleString()}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-3 max-w-xs mx-auto">
                  <span className="text-slate-600 font-medium">Or enter:</span>
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">₱</span>
                    <input
                      type="number"
                      placeholder="Other amount"
                      className="w-full pl-8 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      onChange={(e) => setSelectedAmount(Number(e.target.value))}
                    />
                  </div>
                </div>
              </div>

              {/* Donate Button */}
              <div className="text-center">
                <Button 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-6 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                  data-testid="donate-btn"
                >
                  {donationType === 'recurring' ? 'Start Monthly Giving' : 'Give Now'}
                  <Heart className="ml-2" size={24} />
                </Button>
                <p className="text-sm text-slate-500 mt-4">
                  Secure donation powered by trusted payment providers
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Other Ways to Give */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">Other Ways to Give</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-sky-50 to-white border-sky-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-3">
                    <Building className="text-sky-600" size={24} />
                  </div>
                  <CardTitle className="text-lg text-slate-800">Bank Transfer</CardTitle>
                  <CardDescription className="text-slate-600 text-sm">
                    <strong>Account Name:</strong> Ecumenical Center Church - UCCP<br />
                    <strong>Bank:</strong> [Bank Name]<br />
                    <strong>Account No:</strong> [Account Number]
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                    <Wallet className="text-purple-600" size={24} />
                  </div>
                  <CardTitle className="text-lg text-slate-800">GCash / Maya</CardTitle>
                  <CardDescription className="text-slate-600 text-sm">
                    Send your gift via mobile wallet:<br />
                    <strong>GCash:</strong> 0917-XXX-XXXX<br />
                    <strong>Maya:</strong> 0917-XXX-XXXX
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-to-br from-amber-50 to-white border-amber-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-3">
                    <Calendar className="text-amber-600" size={24} />
                  </div>
                  <CardTitle className="text-lg text-slate-800">In-Person Giving</CardTitle>
                  <CardDescription className="text-slate-600 text-sm">
                    Drop your tithes and offerings during our Sunday worship services or visit the church office during office hours.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Special Campaigns */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-emerald-300 mb-4">
              <Target size={16} />
              <span className="text-sm font-semibold">Special Campaigns</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Support Our Current Initiatives
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              These special funds address specific needs in our church and community. Your targeted giving creates lasting impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialCampaigns.map((campaign, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <campaign.icon className="text-emerald-300" size={24} />
                    </div>
                    <span className="text-emerald-300 font-bold">{campaign.goal}</span>
                  </div>
                  <CardTitle className="text-xl text-white mb-2">{campaign.title}</CardTitle>
                  <CardDescription className="text-slate-300">
                    {campaign.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Progress</span>
                      <span className="text-emerald-300 font-semibold">{campaign.progress}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-emerald-400 to-teal-400 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${campaign.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30">
                    Support This Cause
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <HandHeart size={16} />
              Serve With Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Use your time, talents, and skills to serve God and others. There's a place for everyone in our ministries!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerOpportunities.map((opportunity, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-slate-200 group cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-4xl">{opportunity.icon}</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                      {opportunity.commitment}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-slate-800 group-hover:text-purple-600 transition-colors">
                    {opportunity.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    {opportunity.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-purple-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More & Sign Up
                    <ChevronRight size={16} />
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">
              Not sure where to start? We'd love to help you find the right fit!
            </p>
            <Link to="/contact">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                Contact Us to Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Your Impact in Action</h2>
            <p className="text-slate-600">Because of faithful givers like you, we're making a difference.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-md">
              <p className="text-4xl font-bold text-emerald-600 mb-2">60+</p>
              <p className="text-slate-600 text-sm">Years of Ministry</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-md">
              <p className="text-4xl font-bold text-sky-600 mb-2">500+</p>
              <p className="text-slate-600 text-sm">Families Served Annually</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-md">
              <p className="text-4xl font-bold text-purple-600 mb-2">100+</p>
              <p className="text-slate-600 text-sm">Active Volunteers</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-md">
              <p className="text-4xl font-bold text-amber-600 mb-2">12</p>
              <p className="text-slate-600 text-sm">Community Programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-10 md:p-14 text-white">
            <Heart size={48} className="mx-auto mb-6 text-emerald-200" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Thank You for Your Generosity
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you give financially, volunteer your time, or lift us up in prayer—you are an essential part of our church family. Together, we are making an eternal difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center gap-2 text-emerald-200">
                <Phone size={18} />
                <span>+63 62 991 6685</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-emerald-200">
                <Mail size={18} />
                <span>eccuccpzamboangacity@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg text-slate-800 flex items-center gap-2">
                  <Check className="text-emerald-600" size={20} />
                  Is my donation tax-deductible?
                </CardTitle>
                <CardDescription className="text-slate-600 pl-7">
                  Yes, donations to Ecumenical Center Church - UCCP may be tax-deductible. Please contact our office for official receipts and documentation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg text-slate-800 flex items-center gap-2">
                  <Check className="text-emerald-600" size={20} />
                  Can I designate my gift for a specific purpose?
                </CardTitle>
                <CardDescription className="text-slate-600 pl-7">
                  Absolutely! You can direct your gift to our General Fund, Building Fund, Community Ministry, Youth Scholarship, or any of our special campaigns.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg text-slate-800 flex items-center gap-2">
                  <Check className="text-emerald-600" size={20} />
                  How can I cancel or modify my recurring donation?
                </CardTitle>
                <CardDescription className="text-slate-600 pl-7">
                  Simply contact our church office by phone or email, and we'll be happy to assist you with any changes to your giving.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};
