import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StartupCard from './components/StartupCard';
import InvestorCard from './components/InvestorCard';
import StartupDashboard from './components/dashboard/StartupDashboard';
import InvestorDashboard from './components/dashboard/InvestorDashboard';
import { useStartups } from './hooks/useStartups';
import { useInvestors } from './hooks/useInvestors';
import { useAuth } from './hooks/useAuth';
import { seedDatabase } from './utils/seedDatabase';

function App() {
  const { user } = useAuth();
  const { startups, loading: startupsLoading, error: startupsError } = useStartups();
  const { investors, loading: investorsLoading, error: investorsError } = useInvestors();

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
      
      <main className="container mx-auto px-4 py-16">
        <section id="startups" className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Startups</h2>
          {startupsError && (
            <div className="text-red-600 mb-4">Error: {startupsError}</div>
          )}
          {startupsLoading ? (
            <div className="text-center">Loading startups...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {startups.map((startup) => (
                <StartupCard key={startup.id} startup={startup} />
              ))}
            </div>
          )}
        </section>

        <section id="investors" className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Active Investors</h2>
          {investorsError && (
            <div className="text-red-600 mb-4">Error: {investorsError}</div>
          )}
          {investorsLoading ? (
            <div className="text-center">Loading investors...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {investors.map((investor) => (
                <InvestorCard key={investor.id} investor={investor} />
              ))}
            </div>
          )}
        </section>

        <section id="sectors" className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore Sectors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Technology', 'Healthcare', 'Education', 'Finance', 'E-commerce', 'Agriculture', 'Clean Energy', 'Manufacturing'].map((sector) => (
              <div
                key={sector}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-gray-800">{sector}</h3>
                <p className="text-gray-600 text-sm mt-2">Explore opportunities</p>
              </div>
            ))}
          </div>
        </section>
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