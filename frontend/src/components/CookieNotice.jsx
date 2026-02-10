import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';

const STORAGE_KEY = 'cookie_notice_dismissed';
const DAYS_TO_PERSIST = 180;

export const CookieNotice = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Check if notice was previously dismissed
    const dismissedAt = localStorage.getItem(STORAGE_KEY);
    
    if (dismissedAt) {
      const dismissedDate = new Date(parseInt(dismissedAt, 10));
      const now = new Date();
      const daysSinceDismissed = (now - dismissedDate) / (1000 * 60 * 60 * 24);
      
      // Show again if 180 days have passed
      if (daysSinceDismissed >= DAYS_TO_PERSIST) {
        localStorage.removeItem(STORAGE_KEY);
        setIsVisible(true);
      }
    } else {
      // First-time visitor
      setIsVisible(true);
    }
  }, []);

  // Focus the button when banner becomes visible for accessibility
  useEffect(() => {
    if (isVisible && buttonRef.current) {
      // Small delay to ensure smooth animation
      const timer = setTimeout(() => {
        buttonRef.current?.focus();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleDismiss = () => {
    // Save dismissal timestamp to localStorage
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
    setIsVisible(false);
  };

  // Handle keyboard events
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleDismiss();
    }
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      aria-describedby="cookie-notice-message"
      onKeyDown={handleKeyDown}
      className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up"
      data-testid="cookie-notice"
    >
      <div className="bg-slate-900/95 backdrop-blur-sm border-t border-slate-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            {/* Message */}
            <div className="flex items-start sm:items-center gap-3 flex-1">
              <Cookie 
                className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5 sm:mt-0" 
                aria-hidden="true"
              />
              <p 
                id="cookie-notice-message" 
                className="text-sm text-slate-300 leading-relaxed"
              >
                This site uses minimal cookies necessary for basic functionality. No personal data is collected or tracked.{' '}
                <Link 
                  to="/privacy" 
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                  aria-label="Learn more about our privacy policy"
                  data-testid="cookie-notice-learn-more"
                >
                  Learn more
                </Link>
              </p>
            </div>

            {/* OK Button */}
            <button
              ref={buttonRef}
              onClick={handleDismiss}
              className="flex-shrink-0 px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label="Dismiss cookie notice"
              data-testid="cookie-notice-ok-btn"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieNotice;
