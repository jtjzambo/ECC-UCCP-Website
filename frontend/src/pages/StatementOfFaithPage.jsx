import React from 'react';
import { BookOpen, Heart, Users, Church, Sparkles, Crown, Cross } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

export const StatementOfFaithPage = () => {
  const beliefs = [
    {
      id: 1,
      title: "One God",
      icon: Crown,
      color: "emerald",
      content: "in One God; Creator, Redeemer and Sustainer who provides order, purpose, meaning and fulfillment to all creation. That in Jesus Christ, who was born of Mary, God became human and is Sovereign Lord of life and history. That in the Holy Spirit, God is present in the world, empowering and guiding believers to understand and live out their faith in Jesus Christ."
    },
    {
      id: 2,
      title: "Persons & Redemption",
      icon: Heart,
      color: "rose",
      content: "persons are created in the image of God and destined to live in community with God, with other persons and with all creation. That by disobedience, they have become sinful, but, by grace through faith, they are redeemed in Jesus Christ. That being entrusted with God's creation, they are called to participate in the establishment of a just and compassionate social order."
    },
    {
      id: 3,
      title: "The Church",
      icon: Church,
      color: "sky",
      content: "that the Church is the one Body of Christ, the whole community of persons reconciled to God through Jesus Christ and entrusted with God's ministry."
    },
    {
      id: 4,
      title: "The Holy Bible",
      icon: BookOpen,
      color: "amber",
      content: "that the Holy Bible is a faithful and inspired witness of God's self revelation in Jesus Christ and in history, to illumine, guide correct and edify believers in their faith and witness."
    },
    {
      id: 5,
      title: "God's Kingdom",
      icon: Sparkles,
      color: "purple",
      content: "that God is at work to make each person a new being in Christ and the whole world God's Kingdom in which love, justice and peace prevail. That the Kingdom of God is present where faith in Jesus Christ is shared, where healing is given to the sick, where food is given to the hungry, where light is given to the blind, and where liberty is given to the captive and oppressed."
    },
    {
      id: 6,
      title: "Resurrection & Hope",
      icon: Cross,
      color: "teal",
      content: "that the resurrection of Jesus Christ has overcome the power of death gives assurance of life after death, and we look forward to His coming again in all fullness and glory to make all creation new and to gather all the faithful in the Kingdom of God."
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: {
        bg: "bg-gradient-to-br from-emerald-50 to-emerald-100",
        border: "border-emerald-200",
        icon: "bg-emerald-600",
        text: "text-emerald-700",
        number: "text-emerald-600"
      },
      rose: {
        bg: "bg-gradient-to-br from-rose-50 to-rose-100",
        border: "border-rose-200",
        icon: "bg-rose-600",
        text: "text-rose-700",
        number: "text-rose-600"
      },
      sky: {
        bg: "bg-gradient-to-br from-sky-50 to-sky-100",
        border: "border-sky-200",
        icon: "bg-sky-600",
        text: "text-sky-700",
        number: "text-sky-600"
      },
      amber: {
        bg: "bg-gradient-to-br from-amber-50 to-amber-100",
        border: "border-amber-200",
        icon: "bg-amber-600",
        text: "text-amber-700",
        number: "text-amber-600"
      },
      purple: {
        bg: "bg-gradient-to-br from-purple-50 to-purple-100",
        border: "border-purple-200",
        icon: "bg-purple-600",
        text: "text-purple-700",
        number: "text-purple-600"
      },
      teal: {
        bg: "bg-gradient-to-br from-teal-50 to-teal-100",
        border: "border-teal-200",
        icon: "bg-teal-600",
        text: "text-teal-700",
        number: "text-teal-600"
      }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Decorative Cross */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <Cross size={400} strokeWidth={1} className="text-white" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-full text-white mb-6 border border-white/30">
            <BookOpen size={18} />
            <span className="text-sm font-semibold">Our Foundation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Statement of Faith
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            The beliefs that unite and guide the United Church of Christ in the Philippines
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_90205a7e-4d6d-494e-8cef-9b429c5f743c/artifacts/rc0byv4d_UCCP.jpg" 
              alt="UCCP Logo" 
              className="h-24 w-24 object-contain mx-auto mb-6 bg-white rounded-2xl p-2 shadow-lg"
            />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              The Statement of Faith of the<br />
              <span className="text-purple-700">United Church of Christ in the Philippines</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              As members of the United Church of Christ in the Philippines, we are bound together by our shared faith and commitment to God's work in the world. This statement expresses the core beliefs that guide our worship, ministry, and witness.
            </p>
          </div>
        </div>
      </section>

      {/* Beliefs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {beliefs.map((belief) => {
              const colors = getColorClasses(belief.color);
              const IconComponent = belief.icon;
              
              return (
                <Card 
                  key={belief.id} 
                  className={`${colors.bg} ${colors.border} border-2 overflow-hidden hover:shadow-xl transition-shadow duration-300`}
                >
                  <CardContent className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Icon and Number */}
                      <div className="flex-shrink-0 flex items-start gap-4">
                        <div className={`w-16 h-16 ${colors.icon} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <IconComponent className="text-white" size={32} />
                        </div>
                        <div className="md:hidden">
                          <h3 className={`text-xl font-bold ${colors.text}`}>{belief.title}</h3>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className={`hidden md:block text-2xl font-bold ${colors.text} mb-4`}>
                          {belief.title}
                        </h3>
                        <p className="text-lg text-slate-700 leading-relaxed">
                          <span className={`font-bold ${colors.number} text-xl`}>WE BELIEVE, </span>
                          {belief.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Amen */}
          <div className="text-center mt-12">
            <p className="text-3xl font-bold text-purple-700 italic">Amen.</p>
          </div>
        </div>
      </section>

      {/* Full Statement Card */}
      <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Complete Statement of Faith
            </h3>
            <div className="prose prose-lg prose-invert max-w-none text-slate-200 leading-relaxed space-y-6">
              <p>
                <strong className="text-emerald-300">WE BELIEVE,</strong> in One God; Creator, Redeemer and Sustainer who provides order, purpose, meaning and fulfillment to all creation. That in Jesus Christ, who was born of Mary, God became human and is Sovereign Lord of life and history. That in the Holy Spirit, God is present in the world, empowering and guiding believers to understand and live out their faith in Jesus Christ.
              </p>
              <p>
                <strong className="text-rose-300">WE BELIEVE,</strong> persons are created in the image of God and destined to live in community with God, with other persons and with all creation. That by disobedience, they have become sinful, but, by grace through faith, they are redeemed in Jesus Christ. That being entrusted with God's creation, they are called to participate in the establishment of a just and compassionate social order.
              </p>
              <p>
                <strong className="text-sky-300">WE BELIEVE,</strong> that the Church is the one Body of Christ, the whole community of persons reconciled to God through Jesus Christ and entrusted with God's ministry.
              </p>
              <p>
                <strong className="text-amber-300">WE BELIEVE,</strong> that the Holy Bible is a faithful and inspired witness of God's self revelation in Jesus Christ and in history, to illumine, guide correct and edify believers in their faith and witness.
              </p>
              <p>
                <strong className="text-purple-300">WE BELIEVE,</strong> that God is at work to make each person a new being in Christ and the whole world God's Kingdom in which love, justice and peace prevail. That the Kingdom of God is present where faith in Jesus Christ is shared, where healing is given to the sick, where food is given to the hungry, where light is given to the blind, and where liberty is given to the captive and oppressed.
              </p>
              <p>
                <strong className="text-teal-300">WE BELIEVE,</strong> that the resurrection of Jesus Christ has overcome the power of death gives assurance of life after death, and we look forward to His coming again in all fullness and glory to make all creation new and to gather all the faithful in the Kingdom of God.
              </p>
              <p className="text-center text-2xl font-bold text-white mt-8">
                Amen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UCCP Identity Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://customer-assets.emergentagent.com/job_0ca8b7ab-d422-4d3b-b565-d4e3e0d6ac03/artifacts/01wz3rqz_cmac%20shirt.jpg"
            alt="UCCP Identity Cross"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
              UCCP's Identity
            </h2>
            
            <div className="space-y-6 text-xl md:text-2xl text-white leading-relaxed">
              <p>
                <span className="font-bold text-amber-400">UCCP's Identity</span> is{' '}
                <span className="font-bold text-amber-300">United</span> and{' '}
                <span className="font-bold text-amber-300">Uniting</span>.
              </p>
              <p>
                My <span className="font-bold text-orange-400">character</span> is{' '}
                <span className="font-bold text-orange-300">Evangelical</span> and{' '}
                <span className="font-bold text-orange-300">Evangelistic</span>.
              </p>
              <p>
                My <span className="font-bold text-yellow-400">ministry</span> is{' '}
                <span className="font-bold text-yellow-300">Wholistic</span>.
              </p>
              <p>
                My <span className="font-bold text-amber-400">concerns</span> are{' '}
                <span className="font-bold text-amber-300">Universal</span> and{' '}
                <span className="font-bold text-amber-300">Inclusive</span>.
              </p>
              <p>
                My <span className="font-bold text-orange-400">Spirit</span> is{' '}
                <span className="font-bold text-orange-300">Progressive</span>.
              </p>
              <p>
                And my <span className="font-bold text-yellow-400">Attitude</span> is{' '}
                <span className="font-bold text-yellow-300">Open-Minded</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UCCP Connection */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users size={48} className="mx-auto text-purple-600 mb-6" />
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Part of the UCCP Family
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ecumenical Center Church is a proud member of the United Church of Christ in the Philippines (UCCP), 
            a community of faith committed to the proclamation of the Gospel and the transformation of church and society.
          </p>
          <a 
            href="https://www.uccpchurch.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold text-lg transition-colors shadow-lg"
          >
            Visit UCCP National Website
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart size={48} className="mx-auto mb-6 text-purple-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Live Out Your Faith With Us
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join us in worship, fellowship, and service as we live out these beliefs together. 
            Everyone is welcome in our faith community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/services"
              className="inline-block px-8 py-4 bg-white text-purple-700 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-colors shadow-lg"
            >
              Join Our Worship Services
            </a>
            <a 
              href="/contact"
              className="inline-block px-8 py-4 bg-purple-800 hover:bg-purple-900 text-white border-2 border-purple-400 rounded-lg font-semibold text-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
