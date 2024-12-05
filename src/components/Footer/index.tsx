import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUpRight, Mail } from 'lucide-react';
import Image from 'next/image';

const Footer: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const footerLinks = {
    product: [
      { name: 'Features', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Reviews', href: '#' },
      { name: 'Updates', href: '#' }
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'News', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Partners', href: '#' }
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Newsletter', href: '#' },
      { name: 'Events', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Support', href: '#' }
    ],
    legal: [
      { name: 'Terms', href: '#' },
      { name: 'Privacy', href: '#' },
      { name: 'Cookies', href: '#' },
      { name: 'Settings', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Instagram, href: '#' }
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(249,115,22,0.15),rgba(0,0,0,0))]" />
      <div className="absolute w-[500px] h-[500px] -top-64 -right-64 bg-orange-500/20 rounded-full blur-3xl" />
      <div className="absolute w-[500px] h-[500px] -bottom-64 -left-64 bg-orange-500/20 rounded-full blur-3xl" />

      {/* Mesh Grid Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 relative">
        {/* Newsletter Section */}
        <div className="mb-16">
          <motion.div 
            className="max-w-7xl mx-auto px-4 sm:px-6 py-20"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={item}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                  Stay in the Loop
                </h2>
                <p className="text-gray-400 text-lg max-w-md">
                  Get exclusive updates on startup investment opportunities and industry insights.
                </p>
              </motion.div>
              <motion.div variants={item}>
                <form className="flex gap-4">
                  <div className="flex-grow">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 text-white placeholder-gray-500 text-sm transition-all outline-none"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 shadow-lg shadow-orange-500/25 flex items-center gap-2 whitespace-nowrap"
                  >
                    Subscribe
                    <Mail className="w-4 h-4" />
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Main Footer Content */}
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
              {/* Logo Column */}
              <div className="col-span-2">
                <div className="mb-6">
                  <Image 
                    src="/dfab-logo.svg" 
                    alt="DFAB Logo" 
                    width={120} 
                    height={40}
                    className="brightness-0 invert"
                  />
                </div>
                <p className="text-gray-400 text-sm mb-6 max-w-md">
                  Empowering startups and investors to connect, collaborate, and create the future of innovation together.
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Links Columns */}
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title} className="col-span-1">
                  <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">
                    {title}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <li key={index}>
                        <motion.a
                          href={link.href}
                          className="text-gray-400 hover:text-white text-sm flex items-center group"
                          whileHover={{ x: 4 }}
                        >
                          {link.name}
                          <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom Bar */}
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                &copy; 2024 DFAB. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
