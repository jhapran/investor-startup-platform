import { useState, useEffect } from 'react';
import { Startup } from '../types';
import { startupService } from '../services/startupService';

export const useStartups = () => {
  const [startups, setStartups] = useState<Startup[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStartups = async () => {
      try {
        const data = await startupService.getAll();
        setStartups(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch startups');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStartups();
  }, []);

  const addStartup = async (startup: Omit<Startup, 'id'>) => {
    try {
      const id = await startupService.add(startup);
      setStartups(prev => [...prev, { ...startup, id }]);
      return id;
    } catch (err) {
      setError('Failed to add startup');
      throw err;
    }
  };

  return { startups, loading, error, addStartup };
};