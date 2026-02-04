import React, { useState } from 'react';
import { Calendar, Users, Heart, BookOpen, Award, Church, Building2, GraduationCap } from 'lucide-react';

export const HistoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

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
            A journey of service, transformation, and community spanning over a century
          </p>
        </div>
      </section>

      {/* Our Local History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Church size={16} />
              Ecumenical Center Church - Zamboanga City
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Our Local History
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              From humble beginnings under a mango tree to becoming a beacon of hope and service in Western Mindanao, our church's 60-year journey reflects faith, resilience, and unwavering commitment to Christ and community.
            </p>
          </div>

          {/* Founding Narrative */}
          <div className="bg-gradient-to-br from-emerald-50 to-sky-50 rounded-3xl p-8 md:p-12 shadow-lg mb-12 border border-emerald-100">
            <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
              The Founding Story (1905-1969)
            </h3>
            
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <h4 className="text-2xl font-bold text-emerald-700 mb-4">Protestant Roots (1905-1952)</h4>
                <p className="text-slate-600 leading-relaxed">
                  Protestant missionaries first designated Zamboanga as a mission field in 1905, with Alliance and Episcopal churches establishing organized work. The Episcopal Church founded Brent Hospital in 1908, strengthening the Christian presence in the region. In 1952, Mr. Gonzaga gathered the first UCCP parishioners in Zamboanga, planting seeds for what would become our church.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md">
                <h4 className="text-2xl font-bold text-emerald-700 mb-4">Vision Revived (Early 1960s-1964)</h4>
                <p className="text-slate-600 leading-relaxed">
                  In the early 1960s, Cipriano 'Papsi' Malonzo revived the vision of establishing a UCCP local church. In 1963, Rodulfo P. Beley was assigned to study the feasibility, and by May 1964, a planning committee was organized. The first congregational worship was held under a mango tree at the Malonzo residence—a humble beginning that exemplified true faith and community spirit.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md">
                <h4 className="text-2xl font-bold text-emerald-700 mb-4">Official Establishment (1965-1969)</h4>
                <p className="text-slate-600 leading-relaxed">
                  Rev. Estenio Labrador became our first regular pastor in 1965. Through the bayanihan spirit, the congregation built the first church structure (1965-1966), dedicated on December 18, 1966. On August 3, 1969, after a congregational contest, the church was officially named Ecumenical Center Church (ECC), reflecting our commitment to Christian unity and cooperation.
                </p>
              </div>
            </div>
          </div>

          {/* Key Periods */}
          <div className="space-y-8 mb-12">
            <h3 className="text-3xl font-bold text-slate-800 text-center mb-8">Key Periods in Our Journey</h3>
            
            {/* Period 1967-1981 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-emerald-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-4 py-1 bg-emerald-600 text-white rounded-full text-sm font-semibold">
                  1967-1981
                </div>
                <h4 className="text-2xl font-bold text-slate-800">Growth and Service</h4>
              </div>
              <p className="text-emerald-700 font-semibold mb-4">Pastor: Rev. Rodulfo P. Beley</p>
              <ul className="space-y-2">
                <li className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <p className="text-slate-600">Long-term pastoral leadership strengthening worship and education</p>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <p className="text-slate-600"><strong>1973:</strong> Church became relief center for thousands displaced by Jolo conflict</p>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <p className="text-slate-600"><strong>1975-1978:</strong> Operation JOB (Just One Break) livelihood program launched</p>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <p className="text-slate-600">Bayanihan Student Center established providing housing for students</p>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <p className="text-slate-600"><strong>1976-1981:</strong> ZAMBABME outreach organized among mining company workers</p>
                </li>
              </ul>
            </div>

            {/* Period 1984-1996 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-sky-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-4 py-1 bg-sky-600 text-white rounded-full text-sm font-semibold">
                  1984-1996
                </div>
                <h4 className="text-2xl font-bold text-slate-800">Major Expansion and Formalization</h4>
              </div>
              <p className="text-sky-700 font-semibold mb-4">Pastor: Nemesio Trinidad, Jr.</p>
              <ul className="space-y-2">
                <li className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
                  <p className="text-slate-600"><strong>1984-1990:</strong> Construction of new church building through community effort</p>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
                  <p className="text-slate-600"><strong>1986:</strong> Pre-School Program (ECPSZC) founded</p>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
                  <p className="text-slate-600"><strong>1987:</strong> Basilan outreach established with building dedication (August 30)</p>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
                  <p className="text-slate-600"><strong>1992:</strong> IN-A-PEACE registered with SEC for ecumenical education</p>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
                  <p className="text-slate-600"><strong>Palm Sunday 1993:</strong> New sanctuary first used for worship</p>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
                  <p className="text-slate-600"><strong>1994-1996:</strong> Hosted Western Mindanao Conference and ecumenical conventions</p>
                </li>
              </ul>
            </div>

            {/* Period 2005-Present */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-amber-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-4 py-1 bg-amber-600 text-white rounded-full text-sm font-semibold">
                  2005-Present
                </div>
                <h4 className="text-2xl font-bold text-slate-800">Continued Mission and Celebration</h4>
              </div>
              <ul className="space-y-2">
                <li className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <p className="text-slate-600"><strong>2005:</strong> Tungawan outreach opened</p>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <p className="text-slate-600"><strong>2014:</strong> Golden Anniversary celebration - 50 years 'Seasoned by Times'</p>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <p className="text-slate-600"><strong>2024:</strong> 60 years of faithful service to Christ and community</p>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <p className="text-slate-600">Continued commitment to worship, evangelism, education, social services, and ecumenical partnerships</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Visual Timeline */}
          <div className="bg-gradient-to-r from-emerald-600 to-sky-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">60 Years of Milestones</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-1">1905</div>
                <div className="text-sm text-emerald-100">Mission Field Designated</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">1964</div>
                <div className="text-sm text-emerald-100">Worship Under Mango Tree</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">1966</div>
                <div className="text-sm text-emerald-100">First Church Built</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">1969</div>
                <div className="text-sm text-emerald-100">Named ECC</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">1973</div>
                <div className="text-sm text-emerald-100">Relief Center Service</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">1987</div>
                <div className="text-sm text-emerald-100">Basilan Outreach</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">2014</div>
                <div className="text-sm text-emerald-100">Golden Anniversary</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">2024</div>
                <div className="text-sm text-emerald-100">60 Years Strong</div>
              </div>
            </div>
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
              The United Church of Christ in the Philippines
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              A Historic Union for Filipino Christianity
            </p>
          </div>

          {/* Founding Story */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center">
                <Calendar className="text-amber-700" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">
                The Founding Story (1898-1948)
              </h3>
            </div>
            
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                The roots of the UCCP trace back to the arrival of Protestant missionaries following the Philippine Revolution of 1898. When the Philippines transitioned from Spanish to American sovereignty, Methodist chaplain George C. Stull conducted the first Protestant worship service in the country. This marked the beginning of an extraordinary journey.
              </p>
              
              <p>
                Starting in 1899, various American mission boards—Methodist Episcopal Church, Presbyterian Church, Church of the United Brethren, Foreign Christian Missionary Society, and Congregational Church—sent missionaries to the Philippines. These pioneers established not only churches but also vital institutions: Silliman Institute (1901, later Silliman University), Union Theological Seminary (1907), and numerous hospitals.
              </p>
              
              <p>
                Recognizing the need for unity rather than competition, these mission groups formed the Evangelical Union in 1902 to foster cooperation and work toward a national church. This vision progressed through several stages: the United Church of Manila (1924), the United Evangelical Church (1929), and the Philippine Methodist Church (1933).
              </p>
              
              <p>
                During World War II, under Japanese occupation, Filipino church leaders demonstrated remarkable courage by forming the Evangelical Church of the Philippines in 1943—the first union under Filipino leadership. This wartime experience strengthened the resolve for complete union.
              </p>
              
              <p className="font-semibold text-emerald-700">
                On May 22-25, 1948, at the historic Uniting Assembly in Ellinwood Malate Church, Manila, 165 delegates from three churches signed the declaration of union, formally establishing the United Church of Christ in the Philippines.
              </p>
            </div>
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
              <div className="border-l-4 border-emerald-600 pl-6">
                <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-2">
                  1952-1960
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-3">
                  Establishing Identity
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  The young church sent its first overseas missionaries (1952), adopted governance structures including a Book of Government and Book of Common Worship, and began mission work among indigenous tribes. In 1960, the UCCP Constitution was approved.
                </p>
              </div>

              <div className="border-l-4 border-emerald-600 pl-6">
                <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-2">
                  1962-1974
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-3">
                  Growth and Self-Reliance
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Following the declaration of Martial Law (1973), the church boldly declared its commitment to self-reliance, announcing a moratorium on foreign missionaries and launching local fundraising campaigns.
                </p>
              </div>

              <div className="border-l-4 border-emerald-600 pl-6">
                <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-2">
                  1978-1986
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-3">
                  Prophetic Witness
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  During authoritarian rule, the UCCP courageously stood against martial law and human rights violations. The church created a Human Rights Desk (1978) and actively participated in the movement for justice, celebrating the 1986 People Power Revolution.
                </p>
              </div>

              <div className="border-l-4 border-emerald-600 pl-6">
                <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-2">
                  1988-Present
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-3">
                  Mission and Transformation
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Commemorating its 40th anniversary in 1988, the UCCP launched the ambitious "2,000 by the Year 2000" church growth program. The church continues evolving while maintaining its prophetic voice.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-rose-200 rounded-xl flex items-center justify-center">
                <Heart className="text-rose-700" size={24} />
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
                    Born from the union of multiple denominations, we celebrate our diverse backgrounds while maintaining unity in Christ.
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
                    We stand with the marginalized and speak truth to power, advocating for justice, peace, and creation integrity.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    Self-Reliance and Stewardship
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Committed to independence since 1974, we practice faithful stewardship while maintaining partnerships.
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
                    From establishing schools and hospitals to human rights advocacy, we live the Gospel through concrete action.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Theological Stance */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-100 to-sky-200 rounded-xl flex items-center justify-center">
                <BookOpen className="text-sky-700" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">
                Our Theological Stance
              </h3>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              The UCCP is rooted in Reformed theology while embracing a progressive, contextual approach to faith. Our Statement of Faith, approved in 1986, declares "The Church for the Life of the World."
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <p className="text-slate-700 leading-relaxed">The Bible as our primary source of faith and practice</p>
              </li>
              <li className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <p className="text-slate-700 leading-relaxed">Salvation through God's grace</p>
              </li>
              <li className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <p className="text-slate-700 leading-relaxed">The priesthood of all believers</p>
              </li>
              <li className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <p className="text-slate-700 leading-relaxed">God's preferential option for the poor</p>
              </li>
              <li className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <p className="text-slate-700 leading-relaxed">Social transformation as integral to the Gospel</p>
              </li>
              <li className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <p className="text-slate-700 leading-relaxed">Care for creation as faithful stewardship</p>
              </li>
            </ul>
          </div>

          {/* Historic Institutions */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
                <Building2 className="text-purple-700" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">
                Historic Institutions Founded
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-sky-50 rounded-xl p-6 border border-purple-100">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="text-purple-600" size={20} />
                  <span className="text-sm font-semibold text-purple-700">1901</span>
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">Silliman University</h4>
                <p className="text-sm text-slate-500 mb-2">Dumaguete City</p>
                <p className="text-sm text-slate-600 leading-relaxed">Founded as Silliman Institute, became the first university outside Manila.</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-sky-50 rounded-xl p-6 border border-purple-100">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="text-purple-600" size={20} />
                  <span className="text-sm font-semibold text-purple-700">1907</span>
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">Union Theological Seminary</h4>
                <p className="text-sm text-slate-500 mb-2">Manila</p>
                <p className="text-sm text-slate-600 leading-relaxed">Merger of Presbyterian and Methodist theological schools.</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-sky-50 rounded-xl p-6 border border-purple-100">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="text-purple-600" size={20} />
                  <span className="text-sm font-semibold text-purple-700">1901-1921</span>
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">Mission Hospitals</h4>
                <p className="text-sm text-slate-500 mb-2">Various Locations</p>
                <p className="text-sm text-slate-600 leading-relaxed">Including Brokenshire Memorial and Bethany Hospitals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Note */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-emerald-50 to-sky-50 rounded-2xl p-8 shadow-lg border border-emerald-100">
            <Award size={48} className="text-emerald-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Detailed Timeline
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              From 1898 (first Protestant worship) through 1948 (UCCP founding) to 1988 (40th anniversary) and beyond—our history spans crucial moments in Philippine church history, including the formation of the Evangelical Union (1902), United Evangelical Church (1929), wartime unity (1943), the historic 1948 union, self-reliance declaration (1974), and prophetic witness during Martial Law.
            </p>
            <p className="text-sm text-slate-500 italic">
              Full timeline with 15+ key milestones available in our historical archives
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery Note */}
      <section className="py-12 bg-gradient-to-br from-emerald-50 to-sky-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100">
            <BookOpen size={48} className="text-emerald-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Photo Gallery Coming Soon
            </h3>
            <p className="text-slate-600 leading-relaxed">
              We're gathering historical photos including: UCCP founders at the 1948 Uniting Assembly, Silliman University founding, early mission hospitals, wartime unity efforts, People Power participation, and current ECC-UCCP Zamboanga congregation photos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
