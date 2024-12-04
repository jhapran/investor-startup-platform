import React from 'react';
import { Rocket, ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-indigo-600 to-indigo-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-lg rounded-full mb-8">
            <Rocket className="h-6 w-6 text-white mr-2" />
            <span className="text-white font-medium">Join India's Fastest Growing Startup Network</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join 100+ Investors and 200+ Startups Already Growing with Us!
          </h2>
          
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Connect with the right partners, access funding opportunities, and take your startup to the next level.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-colors flex items-center justify-center">
              Sign Up Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors">
              Explore Opportunities
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white">
            <div>
              <div className="text-3xl font-bold">100+</div>
              <div className="text-indigo-100">Active Investors</div>
            </div>
            <div>
              <div className="text-3xl font-bold">200+</div>
              <div className="text-indigo-100">Growing Startups</div>
            </div>
            <div>
              <div className="text-3xl font-bold">₹100Cr+</div>
              <div className="text-indigo-100">Funds Raised</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;