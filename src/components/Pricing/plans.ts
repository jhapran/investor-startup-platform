export const startupPlans = [
  {
    name: 'Free',
    price: '0',
    description: 'Perfect for early-stage startups getting started',
    features: [
      { text: 'Basic startup profile', included: true },
      { text: 'Limited investor connections', included: true },
      { text: 'Basic analytics', included: true },
      { text: 'Email support', included: true },
      { text: 'Advanced matching algorithm', included: false },
      { text: 'Priority investor access', included: false },
      { text: 'Deal room features', included: false },
      { text: 'Dedicated success manager', included: false }
    ]
  },
  {
    name: 'Growth',
    price: '2,999',
    description: 'For startups actively raising funds',
    features: [
      { text: 'Enhanced startup profile', included: true },
      { text: 'Unlimited investor connections', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Priority email & chat support', included: true },
      { text: 'Advanced matching algorithm', included: true },
      { text: 'Priority investor access', included: true },
      { text: 'Deal room features', included: false },
      { text: 'Dedicated success manager', included: false }
    ],
    isPopular: true
  },
  {
    name: 'Scale',
    price: '7,999',
    description: 'Complete toolkit for serious fundraising',
    features: [
      { text: 'Premium startup profile', included: true },
      { text: 'Unlimited investor connections', included: true },
      { text: 'Advanced analytics & reporting', included: true },
      { text: '24/7 priority support', included: true },
      { text: 'Advanced matching algorithm', included: true },
      { text: 'Priority investor access', included: true },
      { text: 'Deal room features', included: true },
      { text: 'Dedicated success manager', included: true }
    ]
  }
];