import React, { useState } from 'react';
import { useStartups } from '../hooks/useStartups';
import { Sector } from '../types';
import FormField from './forms/FormField';
import { X } from 'lucide-react';

const sectors: Sector[] = [
  "Technology",
  "Healthcare",
  "Education",
  "Finance",
  "E-commerce",
  "Agriculture",
  "Clean Energy",
  "Manufacturing"
];

const StartupForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { addStartup } = useStartups();
  const [formState, setFormState] = useState({
    name: '',
    sector: 'Technology' as Sector,
    description: '',
    fundingNeeded: '',
    location: '',
    foundedYear: new Date().getFullYear().toString(),
    teamSize: '1',
    companyUrl: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await addStartup({
        ...formState,
        fundingNeeded: parseInt(formState.fundingNeeded) || 0,
        foundedYear: parseInt(formState.foundedYear),
        teamSize: parseInt(formState.teamSize),
        logo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100'
      });
      onClose();
    } catch (error) {
      console.error('Failed to submit:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-lg w-full max-w-md max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">List Your Startup</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4 overflow-y-auto">
          <form onSubmit={handleSubmit} className="space-y-3">
            <FormField
              label="Startup Name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
            />

            <FormField
              label="Company Website URL"
              name="companyUrl"
              type="url"
              value={formState.companyUrl}
              onChange={handleChange}
              required
              placeholder="https://example.com"
            />

            <FormField
              label="Sector"
              name="sector"
              value={formState.sector}
              onChange={handleChange}
              required
              as="select"
            >
              {sectors.map(sector => (
                <option key={sector} value={sector}>{sector}</option>
              ))}
            </FormField>

            <FormField
              label="Description"
              name="description"
              value={formState.description}
              onChange={handleChange}
              required
              as="textarea"
            />

            <FormField
              label="Funding Needed (USD)"
              name="fundingNeeded"
              type="number"
              value={formState.fundingNeeded}
              onChange={handleChange}
              required
              min="0"
            />

            <FormField
              label="Location"
              name="location"
              value={formState.location}
              onChange={handleChange}
              required
            />

            <FormField
              label="Founded Year"
              name="foundedYear"
              type="number"
              value={formState.foundedYear}
              onChange={handleChange}
              required
              min="1900"
              max={new Date().getFullYear()}
            />

            <FormField
              label="Team Size"
              name="teamSize"
              type="number"
              value={formState.teamSize}
              onChange={handleChange}
              required
              min="1"
            />
          </form>
        </div>

        <div className="p-4 border-t bg-gray-50 rounded-b-lg">
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupForm;