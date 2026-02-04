import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Heart } from 'lucide-react';
import { churchInfo } from '../mock';

export const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_90205a7e-4d6d-494e-8cef-9b429c5f743c/artifacts/rc0byv4d_UCCP.jpg" 
                alt="UCCP Logo" 
                className="h-12 w-12 object-contain bg-white rounded-lg p-1"
              />
              <div>
                <h3 className="font-bold text-base leading-tight">ECUMENICAL CENTER CHURCH</h3>
                <p className="text-xs text-emerald-300 font-semibold">United Church of Christ in the Philippines</p>
                <p className="text-xs text-slate-300">Zamboanga City</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm">
              Building Faith, Embracing Community. A welcoming place where everyone is valued and lives are transformed through God's love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-slate-300 hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/history" className="text-slate-300 hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  History
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-slate-300 hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-300">
                <MapPin size={20} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{churchInfo.contact.address}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <Mail size={20} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${churchInfo.contact.email}`} className="hover:text-emerald-400 transition-colors duration-200">
                  {churchInfo.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <Phone size={20} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{churchInfo.contact.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Ecumenical Center Church - UCCP. All rights reserved.
            </p>
            
            {/* ECC Logo Badge */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-slate-700 px-4 py-2 rounded-lg">
                <img 
                  src="https://customer-assets.emergentagent.com/job_90205a7e-4d6d-494e-8cef-9b429c5f743c/artifacts/03n3qdeh_ECC%20UCCP%20Logo.jpg" 
                  alt="ECC Badge" 
                  className="h-8 w-8 object-contain"
                />
                <span className="text-xs text-slate-300 font-medium">Est. 1964</span>
              </div>
              <p className="text-slate-400 text-sm flex items-center gap-2">
                Made with <Heart size={16} className="text-red-500 fill-red-500" /> for our community
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
