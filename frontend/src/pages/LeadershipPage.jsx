import React from 'react';
import { Users, User, Building2, Heart, BookOpen, Music, Briefcase, Crown, Church } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

export const LeadershipPage = () => {
  // Pastor Information
  const pastor = {
    name: "Rev. Ronnie Flor Taripe Nicanor",
    title: "Resident Minister",
    image: "https://customer-assets.emergentagent.com/job_git-pull-saver/artifacts/sj6xqyse_ChatGPT%20Image%20Feb%2010%2C%202026%2C%2008_21_13%20AM.png",
    bio: `Rev. Ronnie Flor Taripe Nicanor is a native of Zamboanga City and an ordained minister of the United Church of Christ in the Philippines (UCCP). He earned his Master of Divinity from Silliman University Divinity School in 2015 and was ordained to the ministry in 2018.

His pastoral journey began as an intern at UCCP Makilas, followed by service as Associate Pastor of UCCP Ipil. He later served as Administrative Pastor of UCCP Kabasalan and UCCP Siay from 2016 to 2022, where he provided leadership in both pastoral care and church administration. Since 2022, he has been faithfully serving as Resident Pastor of the Ecumenical Center Church–UCCP (ECC-UCCP) Zamboanga.

Beyond the local church, Rev. Nicanor has been actively involved in conference-wide ministry under the DCSZ, serving as CYFU Youth Chaplain since 2015, an Ordained Representative since 2019, and currently as Chair of the Ministerial Formation Committee. His ministry reflects a strong commitment to pastoral leadership, youth formation, and the continuing nurture of the church's ministers.`
  };

  // Church Council
  const churchCouncil = [
    { name: "Leo Raul D. Jumalon", position: "Chairperson" },
    { name: "Rosemarie O. Taguibolos", position: "Vice-Chairperson" },
    { name: "Flordeliza T. Nicanor", position: "Secretary" },
    { name: "Cherie Lou S. Enriquez", position: "Treasurer" },
    { name: "Arceli D. Silay", position: "Auditor" },
    { name: "Avelino A. Sulit", position: "Financial Secretary" }
  ];

  // Church Boards
  const churchBoards = [
    { name: "Esther N. Chang", position: "Board of Elders Chairperson", icon: Crown },
    { name: "Avelino A. Sulit", position: "Board of Deacons Chairperson", icon: Heart },
    { name: "Jesus C. Tan, Jr.", position: "Board of Christian Educators Chairperson", icon: BookOpen },
    { name: "Romulo S. Sangalang", position: "Board of Trustees Chairperson", icon: Building2 }
  ];

  // Church Organizations
  const churchOrganizations = [
    { name: "Mario B. Jacobe", position: "United Church Men President", org: "UCM", logo: "https://customer-assets.emergentagent.com/job_git-pull-saver/artifacts/i65wcq3p_UCM.jpg" },
    { name: "Felogine T. Oscera", position: "Christian Women's Association President", org: "CWA", logo: "https://customer-assets.emergentagent.com/job_git-pull-saver/artifacts/d4by6gxw_cwa.jpg" },
    { name: "Arvin V. Duhaylungsod", position: "Christian Young Adult Fellowship President", org: "CYAF", logo: "https://customer-assets.emergentagent.com/job_git-pull-saver/artifacts/ud3fo0ue_cyaf%20logo.jpg" },
    { name: "Jobert A. Naval", position: "Christian Youth Fellowship President", org: "CYF", logo: "https://customer-assets.emergentagent.com/job_git-pull-saver/artifacts/lnoggs4d_cyf%20logo.jpg" }
  ];

  // Church Staff
  const churchStaff = [
    { name: "Ronaliza N. Imperial", position: "Church Office Secretary", icon: Briefcase },
    { name: "Alfredo F. Alba, Jr.", position: "Musical Director", icon: Music },
    { name: "Yolanda J. Hablo", position: "Utility", icon: Heart },
    { name: "Jose Marie T. Indig", position: "Driver / Utility", icon: Heart }
  ];

  // District Conference
  const districtConference = {
    name: "Rev. Zosimo C. Molina, Jr.",
    position: "Conference Minister",
    district: "District Conference of Southern Zamboanga"
  };

  // Wider Judicatory
  const widerJudicatory = [
    { name: "Rev. Bishop Ligaya F. San Francisco", position: "Jurisdictional Bishop of NWMJ" },
    { name: "Rev. Bishop Joseph G. Agpaoa", position: "Acting General Secretary" }
  ];

  // Leader Card Component
  const LeaderCard = ({ name, position, image, icon: Icon, highlight = false }) => (
    <Card className={`hover:shadow-lg transition-all duration-300 ${highlight ? 'border-purple-300 bg-purple-50' : 'border-slate-200'}`}>
      <CardContent className="p-6 text-center">
        <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${highlight ? 'bg-purple-600' : 'bg-slate-200'}`}>
          {image ? (
            <img src={image} alt={name} className="w-full h-full rounded-full object-cover" />
          ) : Icon ? (
            <Icon className={`w-10 h-10 ${highlight ? 'text-white' : 'text-slate-500'}`} />
          ) : (
            <User className={`w-10 h-10 ${highlight ? 'text-white' : 'text-slate-500'}`} />
          )}
        </div>
        <h3 className="font-bold text-slate-800 text-lg">{name}</h3>
        <p className={`text-sm mt-1 ${highlight ? 'text-purple-600 font-medium' : 'text-slate-500'}`}>{position}</p>
      </CardContent>
    </Card>
  );

  // Small Leader Card for lists
  const SmallLeaderCard = ({ name, position, org, logo }) => (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-all">
      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-slate-200">
        {logo ? (
          <img src={logo} alt={org} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
            {org || name.charAt(0)}
          </div>
        )}
      </div>
      <div>
        <h4 className="font-semibold text-slate-800">{name}</h4>
        <p className="text-sm text-slate-500">{position}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-800 to-slate-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-full text-white mb-6 border border-white/30">
            <Users size={18} />
            <span className="text-sm font-semibold">Our Church Family</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Church Leadership
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Meet the dedicated servants who lead and serve our church community with love and faithfulness.
          </p>
        </div>
      </section>

      {/* Pastor Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full text-purple-700 mb-4">
              <Church size={18} />
              <span className="text-sm font-semibold">Pastoral Leadership</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Our Resident Minister</h2>
          </div>

          <Card className="max-w-4xl mx-auto overflow-hidden bg-white shadow-xl border-0">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 relative">
                <div className="h-full min-h-[300px] md:min-h-full bg-gradient-to-br from-purple-600 to-indigo-700">
                  {pastor.image && (
                    <img 
                      src={pastor.image} 
                      alt={pastor.name} 
                      className="w-full h-full object-cover object-top"
                    />
                  )}
                </div>
              </div>
              <div className="md:col-span-3 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{pastor.name}</h3>
                <p className="text-purple-600 font-medium mb-4">{pastor.title}</p>
                {pastor.bio ? (
                  <div className="text-slate-600 leading-relaxed text-sm space-y-3">
                    {pastor.bio.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-400 italic">Bio and additional information coming soon.</p>
                )}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Church Council Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full text-emerald-700 mb-4">
              <Users size={18} />
              <span className="text-sm font-semibold">Elected Leadership EY 2025-2026</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Church Council</h2>
            <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
              The governing body that oversees the administration and direction of our church.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {churchCouncil.map((leader, index) => (
              <LeaderCard 
                key={index} 
                name={leader.name} 
                position={leader.position} 
                highlight={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Church Boards Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-sky-100 px-4 py-2 rounded-full text-sky-700 mb-4">
              <Building2 size={18} />
              <span className="text-sm font-semibold">Board Chairpersons</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Church Boards</h2>
            <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
              Leading specialized ministries and areas of church life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {churchBoards.map((leader, index) => (
              <LeaderCard 
                key={index} 
                name={leader.name} 
                position={leader.position}
                icon={leader.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Church Organizations Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full text-amber-700 mb-4">
              <Heart size={18} />
              <span className="text-sm font-semibold">Organization Presidents</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Church Organizations</h2>
            <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
              Fellowship groups that bring our church family together across all ages.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {churchOrganizations.map((leader, index) => (
              <SmallLeaderCard 
                key={index} 
                name={leader.name} 
                position={leader.position}
                org={leader.org}
                logo={leader.logo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Church Staff Section */}
      <section className="py-16 bg-gradient-to-br from-slate-100 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-rose-100 px-4 py-2 rounded-full text-rose-700 mb-4">
              <Briefcase size={18} />
              <span className="text-sm font-semibold">Administrative Team</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Church Staff</h2>
            <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
              Dedicated individuals who support the daily operations of our church.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {churchStaff.map((staff, index) => (
              <LeaderCard 
                key={index} 
                name={staff.name} 
                position={staff.position}
                icon={staff.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* District Conference Section */}
      <section className="py-16 bg-gradient-to-br from-sky-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-full text-sky-100 mb-4">
              <Users size={18} />
              <span className="text-sm font-semibold">Our Immediate Church Connection</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{districtConference.district}</h2>
            <p className="text-sky-100 mt-2 max-w-2xl mx-auto">
              Our direct connection within the UCCP structure, providing pastoral care and administrative oversight.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-sky-500 flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-white text-xl">{districtConference.name}</h3>
                <p className="text-sky-200 text-sm mt-1">{districtConference.position}</p>
                <p className="text-sky-300 text-xs mt-3 italic">{districtConference.district}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Wider Judicatory Section */}
      <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-purple-300 mb-4">
              <Church size={18} />
              <span className="text-sm font-semibold">UCCP Connection</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Wider Judicatory</h2>
            <p className="text-slate-300 mt-2 max-w-2xl mx-auto">
              Our connection to the United Church of Christ in the Philippines leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {widerJudicatory.map((leader, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-600 flex items-center justify-center">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-white text-lg">{leader.name}</h3>
                  <p className="text-purple-300 text-sm mt-1">{leader.position}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Serving Together in Christ
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Our leaders are committed to serving God and our community. If you have questions or would like to connect with any of our leaders, please reach out.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};
