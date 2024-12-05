import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onSignIn: () => void;
  onSignUp: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onToggle, onSignIn, onSignUp }) => {
  return (
    <div className="md:hidden">
      <button
        onClick={onToggle}
        className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-indigo-800 shadow-lg py-4 px-4"
          >
            <nav className="flex flex-col space-y-2">
              <a href="/" className="text-white/90 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10">
                Home
              </a>
              <a href="#features" className="text-white/90 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10">
                Features
              </a>
              <a href="#how-it-works" className="text-white/90 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10">
                How It Works
              </a>
              <a href="#pricing" className="text-white/90 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10">
                Pricing
              </a>
              <a href="#blog" className="text-white/90 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10">
                Blog
              </a>
              <hr className="border-white/10 my-2" />
              <button
                onClick={onSignIn}
                className="text-white/90 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 text-left"
              >
                Sign In
              </button>
              <button
                onClick={onSignUp}
                className="bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50"
              >
                Get Started
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;