import { 
  getAuth, 
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { app, db } from '../config/firebase';

const auth = getAuth(app);

export const authService = {
  async signIn(email: string, password: string) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  },

  async signOut() {
    await firebaseSignOut(auth);
  },

  async getUserData(uid: string) {
    const userDoc = await getDoc(doc(db, 'users', uid));
    return userDoc.data();
  },

  async updateUserProfile(uid: string, data: { userType: string; profile: any }) {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
      userType: data.userType,
      profile: data.profile,
      updatedAt: new Date().toISOString()
    });
  },

  onAuthStateChanged(callback: (user: FirebaseUser | null) => void) {
    return onAuthStateChanged(auth, callback);
  }
};