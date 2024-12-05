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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="relative container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Section - Logo */}
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

          {/* Center Section - Navigation */}
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
              <a 
                href="#resources"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('resources');
                }}
                className="text-gray-800 hover:text-[#FF6B00] text-sm font-medium transition-all duration-200 relative group"
              >
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B00] transition-all duration-200 group-hover:w-full"></span>
              </a>
            </div>
          </nav>

          {/* Right Section - CTAs */}
          <div className="flex items-center space-x-6">
            {user ? (
              <button
                onClick={() => signOut()}
                className="bg-[#FF6B00] text-white px-6 py-2.5 rounded-full hover:bg-[#FF8533] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200 text-sm font-medium"
              >
                Sign Out
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

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode={authMode}
      />
    </header>
  );
};

export default Header;