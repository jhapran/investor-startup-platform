import { Investor, Startup } from '../types';

export const mockStartups: Startup[] = [
  {
    id: '1',
    name: 'EduTech Solutions',
    sector: 'Education',
    description: 'Revolutionizing education through AI-powered personalized learning platforms.',
    fundingNeeded: 500000,
    location: 'Bangalore',
    foundedYear: 2022,
    teamSize: 15,
    logo: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=100&h=100'
  },
  {
    id: '2',
    name: 'AgroInnovate',
    sector: 'Agriculture',
    description: 'Smart farming solutions using IoT and data analytics.',
    fundingNeeded: 750000,
    location: 'Punjab',
    foundedYear: 2021,
    teamSize: 12,
    logo: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6b?auto=format&fit=crop&w=100&h=100'
  }
];

export const mockInvestors: Investor[] = [
  {
    id: '1',
    name: 'Venture Growth Capital',
    focusSectors: ['Technology', 'Education'],
    investmentRange: {
      min: 200000,
      max: 2000000
    },
    portfolio: 12,
    location: 'Mumbai',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100'
  },
  {
    id: '2',
    name: 'Green Future Investments',
    focusSectors: ['Clean Energy', 'Agriculture'],
    investmentRange: {
      min: 500000,
      max: 5000000
    },
    portfolio: 8,
    location: 'Delhi',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100'
  }
];