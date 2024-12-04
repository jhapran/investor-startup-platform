import { useState, useEffect } from 'react';
import { User as FirebaseUser } from 'firebase/auth';
import { authService } from '../services/authService';
import { AuthState, User } from '../types/auth';
import { getAuthErrorMessage } from '../utils/errorMessages';

const mapFirebaseUser = async (firebaseUser: FirebaseUser | null): Promise<User | null> => {
  if (!firebaseUser) return null;
  
  // Get additional user data from Firestore
  const userData = await authService.getUserData(firebaseUser.uid);
  
  return {
    uid: firebaseUser.uid,
    email: firebaseUser.email,
    displayName: firebaseUser.displayName,
    userType: userData?.userType,
    profile: userData?.profile,
    isAdmin: userData?.isAdmin || false
  };
};

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    const unsubscribe = authService.onAuthStateChanged(async (firebaseUser) => {
      const user = await mapFirebaseUser(firebaseUser);
      setAuthState({
        user,
        loading: false,
        error: null
      });
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      setAuthState(prev => ({ ...prev, loading: true, error: null }));
      const user = await authService.signIn(email, password);
      const mappedUser = await mapFirebaseUser(user);
      setAuthState(prev => ({ ...prev, user: mappedUser }));
    } catch (error) {
      const errorMessage = getAuthErrorMessage(error);
      setAuthState(prev => ({
        ...prev,
        error: errorMessage
      }));
      throw error;
    } finally {
      setAuthState(prev => ({ ...prev, loading: false }));
    }
  };

  const signOut = async () => {
    try {
      await authService.signOut();
      setAuthState(prev => ({ ...prev, user: null }));
    } catch (error) {
      const errorMessage = getAuthErrorMessage(error);
      setAuthState(prev => ({
        ...prev,
        error: errorMessage
      }));
      throw error;
    }
  };

  const updateUserProfile = async (data: { userType: 'startup' | 'investor'; profile: any }) => {
    try {
      if (!authState.user?.uid) return;
      
      await authService.updateUserProfile(authState.user.uid, data);
      
      setAuthState(prev => ({
        ...prev,
        user: prev.user ? {
          ...prev.user,
          userType: data.userType,
          profile: data.profile
        } : null
      }));
    } catch (error) {
      const errorMessage = getAuthErrorMessage(error);
      setAuthState(prev => ({
        ...prev,
        error: errorMessage
      }));
      throw error;
    }
  };

  return {
    ...authState,
    signIn,
    signOut,
    updateUserProfile
  };
};