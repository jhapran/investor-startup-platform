import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth';
import Logo from './Logo';
import NavLinks from './NavLinks';
import AuthButtons from './AuthButtons';
import MobileMenu from './MobileMenu';
import AuthModal from '../auth/AuthModal';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(79, 70, 229, 0)', 'rgba(79, 70, 229, 1)']
  );

  const handleAuthClick = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setShowAuthModal(true);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <motion.header
        style={{ backgroundColor: headerBackground }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Logo />
            
            <NavLinks />

            <div className="flex items-center space-x-4">
              {user ? (
                <div className="hidden md:flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium">
                        {user.displayName?.[0] || 'U'}
                      </span>
                    </div>
                    <span className="text-white">{user.displayName || 'User'}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => signOut()}
                    className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    Sign Out
                  </motion.button>
                </div>
              ) : (
                <div className="hidden md:block">
                  <AuthButtons
                    onSignIn={() => handleAuthClick('signin')}
                    onSignUp={() => handleAuthClick('signup')}
                  />
                </div>
              )}

              <MobileMenu
                isOpen={isMobileMenuOpen}
                onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                onSignIn={() => handleAuthClick('signin')}
                onSignUp={() => handleAuthClick('signup')}
              />
            </div>
          </div>
        </div>
      </motion.header>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode={authMode}
      />
    </>
  );
};

export default Header;