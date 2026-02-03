import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navigationLinks } from '../mock';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="https://customer-assets.emergentagent.com/job_90205a7e-4d6d-494e-8cef-9b429c5f743c/artifacts/03n3qdeh_ECC%20UCCP%20Logo.jpg" 
              alt="ECC-UCCP Logo" 
              className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-slate-800 leading-tight">
                Ecumenical Center Church
              </span>
              <span className="text-sm text-emerald-700 font-medium">
                UCCP - Zamboanga City
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-slate-700 hover:text-emerald-600 font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              to="/donate"
              className="px-6 py-2.5 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Donate
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-emerald-600 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-200">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-3 text-slate-700 hover:text-emerald-600 hover:bg-slate-50 px-4 rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/donate"
              className="block mt-2 py-3 text-center bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-200 mx-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Donate
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
