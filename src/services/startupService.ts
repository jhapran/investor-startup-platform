import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Startup } from '../types';

const COLLECTION_NAME = 'startups';

export const startupService = {
  async getAll(): Promise<Startup[]> {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Startup));
  },

  async add(startup: Omit<Startup, 'id'>): Promise<string> {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), startup);
    return docRef.id;
  },

  async update(id: string, startup: Partial<Startup>): Promise<void> {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, startup);
  },

  async delete(id: string): Promise<void> {
    const docRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(docRef);
  }
};