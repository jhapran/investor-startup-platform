import { useState, useEffect } from 'react';
import { Investor } from '../types';
import { investorService } from '../services/investorService';

export const useInvestors = () => {
  const [investors, setInvestors] = useState<Investor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInvestors = async () => {
      try {
        const data = await investorService.getAll();
        setInvestors(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch investors');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchInvestors();
  }, []);

  const addInvestor = async (investor: Omit<Investor, 'id'>) => {
    try {
      const id = await investorService.add(investor);
      setInvestors(prev => [...prev, { ...investor, id }]);
      return id;
    } catch (err) {
      setError('Failed to add investor');
      throw err;
    }
  };

  return { investors, loading, error, addInvestor };
};