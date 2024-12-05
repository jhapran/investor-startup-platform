import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Get in <span className="text-orange-500">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Have questions? We're here to help you connect and grow.
          </motion.p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 text-sm mb-4">We'll respond within 24 hours</p>
            <a href="mailto:contact@dfab.com" className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center">
              contact@dfab.com
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
          >
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 text-sm mb-4">Mon-Fri from 9am to 6pm</p>
            <a href="tel:+919876543210" className="text-green-600 hover:text-green-700 font-medium text-sm inline-flex items-center">
              +91 98765 43210
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </motion.div>

          {/* Office Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
          >
            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600 text-sm mb-4">Come say hello at our office</p>
            <a href="#" className="text-purple-600 hover:text-purple-700 font-medium text-sm inline-flex items-center">
              View on map
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;