import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import KeyFeatures from './components/KeyFeatures';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import CallToAction from './components/CallToAction';
import Resources from './components/Resources';
import Contact from './components/Contact';
import StartupDashboard from './components/dashboard/StartupDashboard';
import InvestorDashboard from './components/dashboard/InvestorDashboard';
import { useAuth } from './hooks/useAuth';
import { seedDatabase } from './utils/seedDatabase';

function App() {
  const { user } = useAuth();

  useEffect(() => {
    seedDatabase();
  }, []);

  // Show dashboard if user is logged in
  if (user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        {user.userType === 'startup' ? (
          <StartupDashboard />
        ) : (
          <InvestorDashboard />
        )}
      </div>
    );
  }

  // Show landing page for non-logged in users
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <main>
        <KeyFeatures />
        <HowItWorks />
        <Benefits />
        <Pricing />
        <CallToAction />
        <Resources />
        <Contact />
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">StartupConnect India</h3>
              <p className="text-gray-400">
                Bridging the gap between innovative startups and strategic investors.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">How It Works</a></li>
                <li><a href="#" className="hover:text-white">Success Stories</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Stay updated with the latest opportunities and news.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg flex-1"
                />
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-500 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 StartupConnect India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;