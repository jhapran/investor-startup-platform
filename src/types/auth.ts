import { Startup, Investor } from './index';

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  userType?: 'startup' | 'investor' | 'admin';
  profile?: Startup | Investor;
  isAdmin?: boolean;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface ProfileFormData {
  userType: 'startup' | 'investor' | 'admin';
  name: string;
  email: string;
  password: string;
}