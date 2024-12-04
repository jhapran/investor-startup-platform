import React from 'react';
import { motion } from 'framer-motion';

interface AuthButtonsProps {
  onSignIn: () => void;
  onSignUp: () => void;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({ onSignIn, onSignUp }) => {
  return (
    <div className="flex items-center space-x-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onSignIn}
        className="text-white/90 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
      >
        Sign In
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onSignUp}
        className="bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors"
      >
        Sign Up
      </motion.button>
    </div>
  );
};

export default AuthButtons;