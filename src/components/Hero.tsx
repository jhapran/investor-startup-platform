import React, { useState } from 'react';
import { Rocket, TrendingUp, Users } from 'lucide-react';
import StartupForm from './StartupForm';

const Hero: React.FC = () => {
  const [showStartupForm, setShowStartupForm] = useState(false);

  return (
    <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Connecting Indian Startups with Global Investors
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-indigo-100">
            Empowering the next generation of Indian entrepreneurs through meaningful connections
            and strategic investments
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <Rocket className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">500+ Startups</h3>
              <p className="text-indigo-100">Active innovative startups across sectors</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">200+ Investors</h3>
              <p className="text-indigo-100">Active investors looking for opportunities</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <TrendingUp className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">₹100Cr+ Funded</h3>
              <p className="text-indigo-100">Total funding facilitated through platform</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowStartupForm(true)}
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              List Your Startup
            </button>
            <button className="bg-indigo-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-400 transition-colors">
              Invest Now
            </button>
          </div>
        </div>
      </div>

      {showStartupForm && (
        <StartupForm onClose={() => setShowStartupForm(false)} />
      )}
    </div>
  );
};

export default Hero;