import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import FormField from '../forms/FormField';
import UserTypeSelection from './UserTypeSelection';
import ProfileSetup from './ProfileSetup';
import { ProfileFormData } from '../../types/auth';
import { createUserWithEmailAndPassword, updateProfile, getAuth, signOut } from 'firebase/auth';
import { app } from '../../config/firebase';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'signin' | 'signup';
}

const auth = getAuth(app);

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode = 'signin' }) => {
  const [mode, setMode] = useState<'signin' | 'signup' | 'usertype' | 'profile'>(initialMode);
  const [formData, setFormData] = useState<ProfileFormData>({
    userType: 'startup',
    email: '',
    password: '',
    name: ''
  });
  const { signIn, error } = useAuth();

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (mode === 'signup') {
        // Create user in Firebase Auth without saving to database
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        await updateProfile(userCredential.user, { displayName: formData.name });
        // Sign out immediately to prevent auto-login
        await signOut(auth);
        setMode('usertype');
      } else if (mode === 'signin') {
        await signIn(formData.email, formData.password);
        onClose();
      }
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleUserTypeSelect = (type: 'startup' | 'investor') => {
    setFormData(prev => ({ ...prev, userType: type }));
    setMode('profile');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0" style={{ zIndex: 9999 }}>
      <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={onClose} />
      <div className="fixed inset-0" style={{ zIndex: 9999 }}>
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <div 
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md"
            onClick={e => e.stopPropagation()}
          >
            {mode === 'profile' ? (
              <ProfileSetup
                isOpen={true}
                onClose={onClose}
                userType={formData.userType}
                email={formData.email}
                password={formData.password}
              />
            ) : mode === 'usertype' ? (
              <UserTypeSelection onSelect={handleUserTypeSelect} />
            ) : (
              <>
                <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {mode === 'signin' ? 'Sign In' : 'Create Account'}
                  </h2>
                  <button 
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="px-6 py-4">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="p-3 bg-red-100 text-red-700 rounded text-sm">
                        {error}
                      </div>
                    )}

                    {mode === 'signup' && (
                      <FormField
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    )}

                    <FormField
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                    <FormField
                      label="Password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />

                    <button
                      type="submit"
                      className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition-colors"
                    >
                      {mode === 'signin' ? 'Sign In' : 'Next'}
                    </button>

                    <div className="text-center text-sm text-gray-600">
                      {mode === 'signin' ? (
                        <>
                          Don't have an account?{' '}
                          <button
                            type="button"
                            onClick={() => setMode('usertype')}
                            className="text-indigo-600 hover:text-indigo-500"
                          >
                            Sign Up
                          </button>
                        </>
                      ) : (
                        <>
                          Already have an account?{' '}
                          <button
                            type="button"
                            onClick={() => setMode('signin')}
                            className="text-indigo-600 hover:text-indigo-500"
                          >
                            Sign In
                          </button>
                        </>
                      )}
                    </div>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;