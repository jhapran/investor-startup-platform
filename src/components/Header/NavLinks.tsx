import React from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: '/', label: 'Home' },
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#blog', label: 'Blog' }
];

const NavLinks: React.FC = () => {
  return (
    <nav className="hidden md:flex items-center space-x-1">
      {links.map((link, index) => (
        <motion.a
          key={link.href}
          href={link.href}
          className="relative px-4 py-2 text-white/90 hover:text-white transition-colors group"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <span className="relative z-10">{link.label}</span>
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-lg transition-colors -z-0" />
        </motion.a>
      ))}
    </nav>
  );
};

export default NavLinks;