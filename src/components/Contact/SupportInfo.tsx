import React from 'react';
import { Mail, MessageCircle, Clock, MapPin } from 'lucide-react';

const SupportInfo: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-start space-x-6">
        <div className="p-3 bg-white/10 rounded-2xl">
          <Mail className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-1">Email Support</h3>
          <p className="text-indigo-200">support@startupconnect.in</p>
          <p className="text-sm text-indigo-200/80 mt-1">24/7 email support</p>
        </div>
      </div>

      <div className="flex items-start space-x-6">
        <div className="p-3 bg-white/10 rounded-2xl">
          <MessageCircle className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-1">Live Chat</h3>
          <p className="text-indigo-200">Available in dashboard</p>
          <p className="text-sm text-indigo-200/80 mt-1">Mon-Fri, 9 AM - 6 PM IST</p>
        </div>
      </div>

      <div className="flex items-start space-x-6">
        <div className="p-3 bg-white/10 rounded-2xl">
          <Clock className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-1">Response Time</h3>
          <p className="text-indigo-200">Within 24 hours</p>
          <p className="text-sm text-indigo-200/80 mt-1">Usually much faster</p>
        </div>
      </div>

      <div className="flex items-start space-x-6">
        <div className="p-3 bg-white/10 rounded-2xl">
          <MapPin className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-1">Office Location</h3>
          <p className="text-indigo-200">Bangalore, India</p>
          <p className="text-sm text-indigo-200/80 mt-1">By appointment only</p>
        </div>
      </div>
    </div>
  );
};

export default SupportInfo;