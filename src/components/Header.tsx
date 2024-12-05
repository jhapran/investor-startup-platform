import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import AuthModal from './auth/AuthModal';
import dfabLogo from '../assets/dfab-logo.svg';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  const handleAuthClick = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="relative container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Section - Logo */}
          {!user && (
            <div className="flex-shrink-0">
              <a 
                href="#hero" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('hero');
                }}
                className="flex items-center space-x-3"
              >
                <img src={dfabLogo} alt="DFAB Logo" className="h-10 w-10" />
                <span className="text-xl font-bold text-[#FF6B00]">DFAB</span>
              </a>
            </div>
          )}

          {/* Center Section - Navigation */}
          {!user && (
            <nav className="hidden lg:flex items-center justify-center flex-1 px-8">
              <div className="flex space-x-10">
                <a 
                  href="#hero"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('hero');
                  }}
                  className="text-gray-800 hover:text-[#FF6B00] text-sm font-medium transition-all duration-200 relative group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B00] transition-all duration-200 group-hover:w-full"></span>
                </a>
                <a 
                  href="#keyFeatures"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('keyFeatures');
                  }}
                  className="text-gray-800 hover:text-[#FF6B00] text-sm font-medium transition-all duration-200 relative group"
                >
                  Features
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B00] transition-all duration-200 group-hover:w-full"></span>
                </a>
                <a 
                  href="#howItWorks"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('howItWorks');
                  }}
                  className="text-gray-800 hover:text-[#FF6B00] text-sm font-medium transition-all duration-200 relative group"
                >
                  How It Works
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B00] transition-all duration-200 group-hover:w-full"></span>
                </a>
                <a 
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('pricing');
                  }}
                  className="text-gray-800 hover:text-[#FF6B00] text-sm font-medium transition-all duration-200 relative group"
                >
                  Pricing
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B00] transition-all duration-200 group-hover:w-full"></span>
                </a>
              </div>
            </nav>
          )}
          {/* Right Section - CTAs */}
          <div className={`flex items-center ${user ? 'ml-auto' : 'space-x-6'}`}>
            {user ? (
              <button
                onClick={() => signOut()}
                className="flex items-center space-x-2 bg-[#FF6B00] text-white px-6 py-2.5 rounded-lg hover:bg-[#FF8533] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200 text-sm font-medium"
              >
                <span>Sign Out</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
              </button>
            ) : (
              <>
                <button
                  onClick={() => handleAuthClick('signin')}
                  className="text-gray-800 hover:text-[#FF6B00] text-sm font-medium transition-colors"
                >
                  Sign In
                </button>
                <button
                  onClick={() => handleAuthClick('signup')}
                  className="bg-[#FF6B00] text-white px-6 py-2.5 rounded-full hover:bg-[#FF8533] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200 text-sm font-medium"
                >
                  Get Started
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {showAuthModal && (
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          initialMode={authMode}
        />
      )}
    </header>
  );
};

export default Header;