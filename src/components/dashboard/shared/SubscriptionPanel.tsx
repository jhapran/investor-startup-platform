import React from 'react';
import { Check, CreditCard } from 'lucide-react';

const SubscriptionPanel: React.FC = () => {
  const plans = [
    {
      name: 'Basic',
      price: '₹999',
      period: 'month',
      features: [
        'Up to 10 startup connections',
        'Basic analytics',
        'Email support',
        'Standard access to deals'
      ],
      current: false
    },
    {
      name: 'Professional',
      price: '₹2,499',
      period: 'month',
      features: [
        'Unlimited startup connections',
        'Advanced analytics',
        'Priority support',
        'Premium deal access',
        'Custom reports'
      ],
      current: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'year',
      features: [
        'All Professional features',
        'Dedicated account manager',
        'Custom integration',
        'API access',
        'Bulk operations'
      ],
      current: false
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">Subscription Plans</h2>
        <p className="mt-4 text-lg text-gray-600">
          Choose the perfect plan for your investment needs
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-lg shadow-lg divide-y divide-gray-200 ${
              plan.current
                ? 'border-2 border-indigo-500 relative'
                : 'border border-gray-200'
            }`}
          >
            {plan.current && (
              <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  Current Plan
                </span>
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
              <p className="mt-4">
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="text-base font-medium text-gray-500">/{plan.period}</span>
              </p>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-6 py-4">
              <button
                className={`w-full flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium ${
                  plan.current
                    ? 'bg-gray-100 text-gray-600 cursor-default'
                    : 'bg-indigo-600 text-white hover:bg-indigo-500'
                }`}
                disabled={plan.current}
              >
                {plan.current ? (
                  'Current Plan'
                ) : (
                  <>
                    <CreditCard className="h-4 w-4 mr-2" />
                    Upgrade Plan
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Need a custom plan? <a href="#" className="text-indigo-600 font-medium">Contact us</a>
        </p>
      </div>
    </div>
  );
};

export default SubscriptionPanel;