import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Investor } from '../types';

const COLLECTION_NAME = 'investors';

export const investorService = {
  async getAll(): Promise<Investor[]> {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Investor));
  },

  async add(investor: Omit<Investor, 'id'>): Promise<string> {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), investor);
    return docRef.id;
  },

  async update(id: string, investor: Partial<Investor>): Promise<void> {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, investor);
  },

  async delete(id: string): Promise<void> {
    const docRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(docRef);
  }
};