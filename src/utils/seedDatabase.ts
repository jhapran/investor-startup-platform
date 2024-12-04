import { collection, getDocs, addDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { mockStartups, mockInvestors } from '../data/mockData';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { app } from '../config/firebase';

const auth = getAuth(app);

export const seedDatabase = async () => {
  try {
    // Create admin user if it doesn't exist
    const adminEmail = 'admin@startupconnect.in';
    const adminPassword = 'Admin@123';

    try {
      // Create admin user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, adminEmail, adminPassword);
      await updateProfile(userCredential.user, { displayName: 'System Admin' });

      // Store admin data in Firestore
      const adminData = {
        uid: userCredential.user.uid,
        email: adminEmail,
        isAdmin: true,
        userType: 'admin',
        name: 'System Admin',
        createdAt: new Date().toISOString()
      };

      await setDoc(doc(db, 'users', userCredential.user.uid), adminData);
      console.log('Admin user created successfully');
    } catch (error: any) {
      if (error.code !== 'auth/email-already-in-use') {
        console.error('Error creating admin user:', error);
      }
    }

    // Check if startups collection is empty
    const startupsSnapshot = await getDocs(collection(db, 'startups'));
    if (startupsSnapshot.empty) {
      // Seed startups
      for (const startup of mockStartups) {
        const { id, ...startupData } = startup;
        await addDoc(collection(db, 'startups'), startupData);
      }
      console.log('Startups seeded successfully');
    }

    // Check if investors collection is empty
    const investorsSnapshot = await getDocs(collection(db, 'investors'));
    if (investorsSnapshot.empty) {
      // Seed investors
      for (const investor of mockInvestors) {
        const { id, ...investorData } = investor;
        await addDoc(collection(db, 'investors'), investorData);
      }
      console.log('Investors seeded successfully');
    }
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};