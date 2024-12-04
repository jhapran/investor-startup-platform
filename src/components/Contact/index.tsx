import React from 'react';
import ContactForm from './ContactForm';
import SupportInfo from './SupportInfo';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full blur-3xl opacity-50 transform rotate-12" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-full blur-3xl opacity-50 transform -rotate-12" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Need Help?
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              We're Here for You
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get in touch with our support team for any questions or assistance
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 transform hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-indigo-50 rounded-2xl">
                <MessageSquare className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Send a Message</h3>
                <p className="text-gray-600">We'll get back to you within 24 hours</p>
              </div>
            </div>
            <ContactForm />
          </motion.div>

          {/* Support Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl shadow-xl p-8 lg:p-12 text-white"
          >
            <SupportInfo />

            <div className="mt-12 pt-8 border-t border-white/20">
              <h4 className="text-xl font-semibold mb-4">Quick Support</h4>
              <a 
                href="#" 
                className="group flex items-center justify-between bg-white/10 hover:bg-white/20 rounded-2xl p-6 transition-all duration-300"
              >
                <div>
                  <h5 className="font-medium mb-1">Visit Help Center</h5>
                  <p className="text-sm text-indigo-200">Find answers to common questions</p>
                </div>
                <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
