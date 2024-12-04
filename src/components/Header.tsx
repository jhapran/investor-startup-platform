import React, { useState } from 'react';
import { TrendingUp, UserCircle } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import AuthModal from './auth/AuthModal';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  const handleAuthClick = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  return (
    <header className="bg-indigo-600 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-8 w-8" />
            <span className="text-2xl font-bold">StartupConnect India</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#startups" className="hover:text-indigo-200 transition-colors">
              Startups
            </a>
            <a href="#investors" className="hover:text-indigo-200 transition-colors">
              Investors
            </a>
            <a href="#sectors" className="hover:text-indigo-200 transition-colors">
              Sectors
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <UserCircle className="h-6 w-6" />
                  <span>{user.displayName || 'User'}</span>
                </div>
                <button
                  onClick={() => signOut()}
                  className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-400 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => handleAuthClick('signin')}
                  className="bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors"
                >
                  Sign In
                </button>
                <button
                  onClick={() => handleAuthClick('signup')}
                  className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-400 transition-colors"
                >
                  Sign Up
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