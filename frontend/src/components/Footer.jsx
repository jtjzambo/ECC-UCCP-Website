import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Heart, Facebook, Youtube, MessageCircle, Church } from 'lucide-react';
import { churchInfo } from '../mock';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img 
                src="https://customer-assets.emergentagent.com/job_90205a7e-4d6d-494e-8cef-9b429c5f743c/artifacts/rc0byv4d_UCCP.jpg" 
                alt="UCCP Logo" 
                className="h-14 w-14 object-contain bg-white rounded-lg p-1"
              />
              <div>
                <h3 className="font-bold text-sm leading-tight">ECUMENICAL CENTER CHURCH</h3>
                <p className="text-xs text-emerald-400 font-semibold">UCCP Zamboanga City</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm mb-5">
              A Christ-centered community of faith rooted in worship, service, and mission since 1964.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-3">
              <a 
                href={churchInfo.contact.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Facebook"
                data-testid="footer-facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href={churchInfo.contact.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="YouTube"
                data-testid="footer-youtube"
              >
                <Youtube size={18} />
              </a>
              <a 
                href={churchInfo.contact.social.messenger}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Messenger"
                data-testid="footer-messenger"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links - Column 1 */}
          <div>
            <h3 className="font-bold text-base mb-5 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/history" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                  History
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links - Column 2 */}
          <div>
            <h3 className="font-bold text-base mb-5 text-white">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/events" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                  Events
                </Link>
              </li>
              <li>
                <Link to="/about#ministries" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                  Ministries
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-base mb-5 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  #27 Castillo Rd., Baliwasan<br />
                  Zamboanga City, 7000<br />
                  Philippines
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-emerald-400 flex-shrink-0" />
                <a href={`tel:${churchInfo.contact.phone}`} className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 text-sm">
                  +63 62 991 6685
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-emerald-400 flex-shrink-0" />
                <a href={`mailto:${churchInfo.contact.email}`} className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 text-sm break-all">
                  eccuccpzamboangacity@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Church size={20} className="text-emerald-500" />
              <p className="text-slate-500 text-sm">
                © {currentYear} Ecumenical Center Church – UCCP. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <span>Serving Zamboanga City since 1964</span>
              <Heart size={14} className="text-red-500 fill-red-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
