import React from 'react';
import { Shield, Cookie, Globe, FileText } from 'lucide-react';

export const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white" data-testid="privacy-page">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Shield className="w-16 h-16 mx-auto mb-6 text-white/90" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg sm:text-xl text-emerald-100 max-w-2xl mx-auto">
            Your privacy matters to us
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            
            {/* Informational Purpose */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8" data-testid="privacy-informational">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-800 mb-3">Informational Website</h2>
                  <p className="text-slate-600 leading-relaxed">
                    This website is purely informational. It exists to share news, events, and resources about the Ecumenical Center Church – UCCP Zamboanga City. We do not sell products, offer services for purchase, or engage in any commercial activities through this site.
                  </p>
                </div>
              </div>
            </div>

            {/* No Data Collection */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8" data-testid="privacy-no-collection">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-800 mb-3">No Personal Data Collection</h2>
                  <p className="text-slate-600 leading-relaxed">
                    We do not collect personal data from visitors. There are no user accounts, registration forms, login systems, or profiling mechanisms on this website. We do not display advertisements or share any information with advertisers.
                  </p>
                </div>
              </div>
            </div>

            {/* Cookies */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8" data-testid="privacy-cookies">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-800 mb-3">Cookies</h2>
                  <p className="text-slate-600 leading-relaxed">
                    This website may use only minimal, essential cookies required for basic functionality. These cookies are not used for tracking, advertising, or profiling purposes. They simply help ensure the website works properly for you.
                  </p>
                </div>
              </div>
            </div>

            {/* Third-Party Embeds */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8" data-testid="privacy-third-party">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-800 mb-3">Third-Party Embeds</h2>
                  <p className="text-slate-600 leading-relaxed">
                    Our website may include embedded content from third-party services such as YouTube videos or Google Maps. These services may set their own cookies and collect data according to their respective privacy policies. We encourage you to review the privacy policies of these third-party providers for more information.
                  </p>
                </div>
              </div>
            </div>

            {/* Compliance Note */}
            <div className="bg-emerald-50 rounded-2xl border border-emerald-100 p-6 sm:p-8" data-testid="privacy-compliance">
              <h2 className="text-xl font-bold text-slate-800 mb-3">Compliance</h2>
              <p className="text-slate-600 leading-relaxed">
                This privacy policy is provided in accordance with the <strong>Data Privacy Act of 2012 (Republic Act No. 10173)</strong> of the Philippines. We are committed to protecting your privacy and ensuring transparency in how this website operates.
              </p>
            </div>

            {/* Last Updated */}
            <div className="text-center pt-6 border-t border-slate-200">
              <p className="text-slate-500 text-sm" data-testid="privacy-last-updated">
                Last updated: February 10, 2026
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
