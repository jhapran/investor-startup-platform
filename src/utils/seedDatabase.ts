import { collection, getDocs, addDoc, doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { mockStartups, mockInvestors } from '../data/mockData';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../config/firebase';

const auth = getAuth(app);

const MAX_RETRIES = 3;
const RETRY_DELAY = 2000; // 2 seconds

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const retryOperation = async <T>(
  operation: () => Promise<T>,
  retries = MAX_RETRIES,
  delay = RETRY_DELAY
): Promise<T> => {
  try {
    return await operation();
  } catch (error: any) {
    if (error.code === 'auth/network-request-failed') {
      if (retries > 0) {
        await wait(delay);
        return retryOperation(operation, retries - 1, delay);
      }
    }
    throw error;
  }
};

export const seedDatabase = async () => {
  try {
    // Create admin user if it doesn't exist
    const adminEmail = 'admin@startupconnect.in';
    const adminPassword = 'Admin@123';

    try {
      // First check if admin user exists in Firestore
      const adminDoc = await getDoc(doc(db, 'users', 'admin'));
      
      if (!adminDoc.exists()) {
        // Try to sign in first to check if user exists in Auth
        try {
          const userCredential = await signInWithEmailAndPassword(auth, adminEmail, adminPassword);
          // If sign in successful, just create the Firestore document
          const adminData = {
            uid: userCredential.user.uid,
            email: adminEmail,
            isAdmin: true,
            userType: 'admin',
            name: 'System Admin',
            createdAt: new Date().toISOString()
          };
          await setDoc(doc(db, 'users', userCredential.user.uid), adminData);
        } catch (signInError: any) {
          // If user doesn't exist, create new user
          if (signInError.code === 'auth/user-not-found') {
            const createAdmin = async () => {
              const userCredential = await createUserWithEmailAndPassword(auth, adminEmail, adminPassword);
              await updateProfile(userCredential.user, { displayName: 'System Admin' });

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
              return userCredential;
            };

            await retryOperation(createAdmin);
          }
        }
      }
    } catch (error: any) {
      if (error.code !== 'auth/email-already-in-use') {
        console.error('Error managing admin user:', error);
      }
    }

    // Check and seed collections with retry logic
    const seedCollection = async (collectionName: string, data: any[]) => {
      const snapshot = await getDocs(collection(db, collectionName));
      if (snapshot.empty) {
        for (const item of data) {
          const { id, ...itemData } = item;
          await addDoc(collection(db, collectionName), itemData);
        }
        console.log(`${collectionName} seeded successfully`);
      }
    };

    await retryOperation(() => seedCollection('startups', mockStartups));
    await retryOperation(() => seedCollection('investors', mockInvestors));

  } catch (error) {
    console.error('Error seeding database:', error);
    // Don't throw the error to prevent app crash
    // The app can still function without initial seed data
  }
};