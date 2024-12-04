import React, { useState } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import FormField from '../forms/FormField';
import { Sector, StartupStage, InvestorType } from '../../types';
import { useAuth } from '../../hooks/useAuth';
import { startupService } from '../../services/startupService';
import { investorService } from '../../services/investorService';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from '../../config/firebase';

interface ProfileSetupProps {
  isOpen: boolean;
  onClose: () => void;
  userType: 'startup' | 'investor';
  email: string;
  password: string;
}

const auth = getAuth(app);

const sectors: Sector[] = [
  "Technology", "Healthcare", "Education", "Finance",
  "E-commerce", "Agriculture", "Clean Energy", "Manufacturing"
];

const startupStages: StartupStage[] = [
  "Idea", "MVP", "Early Traction", "Growth", "Scale"
];

const investorTypes: InvestorType[] = [
  "Angel Investor", "Venture Capital", "Private Equity",
  "Corporate Investor", "Family Office", "Accelerator/Incubator"
];

const ProfileSetup: React.FC<ProfileSetupProps> = ({ isOpen, onClose, userType, email, password }) => {
  const { updateUserProfile } = useAuth();
  const [formData, setFormData] = useState(
    userType === 'startup' 
      ? {
          name: '',
          sector: 'Technology' as Sector,
          description: '',
          fundingNeeded: '',
          location: '',
          foundedYear: new Date().getFullYear().toString(),
          teamSize: '1',
          companyUrl: '',
          stage: 'Idea' as StartupStage,
          pitchDeck: '',
          teamMembers: [{ name: '', role: '', linkedin: '' }],
          previousFunding: '',
          revenue: '',
          socialLinks: {
            linkedin: '',
            twitter: '',
            website: ''
          }
        }
      : {
          name: '',
          focusSectors: [] as Sector[],
          investmentRange: {
            min: '',
            max: ''
          },
          location: '',
          portfolio: '0',
          firmType: 'Angel Investor' as InvestorType,
          investmentStages: [] as StartupStage[],
          investmentThesis: '',
          successfulExits: '0',
          preferredTicketSize: {
            min: '',
            max: ''
          },
          socialLinks: {
            linkedin: '',
            twitter: '',
            website: ''
          },
          investmentCriteria: ['']
        }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'focusSectors' || name === 'investmentStages') {
      const select = e.target as HTMLSelectElement;
      const selectedValues = Array.from(select.selectedOptions).map(option => option.value);
      setFormData(prev => ({
        ...prev,
        [name]: selectedValues
      }));
    } else if (name.startsWith('investmentRange.') || name.startsWith('preferredTicketSize.')) {
      const [object, field] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [object]: {
          ...prev[object],
          [field]: value
        }
      }));
    } else if (name.startsWith('socialLinks.')) {
      const [, field] = name.split('.');
      setFormData(prev => ({
        ...prev,
        socialLinks: {
          ...prev.socialLinks,
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleTeamMemberChange = (index: number, field: keyof typeof formData.teamMembers[0], value: string) => {
    if (userType !== 'startup') return;
    
    setFormData(prev => ({
      ...prev,
      teamMembers: prev.teamMembers.map((member, i) =>
        i === index ? { ...member, [field]: value } : member
      )
    }));
  };

  const addTeamMember = () => {
    if (userType !== 'startup') return;

    setFormData(prev => ({
      ...prev,
      teamMembers: [...prev.teamMembers, { name: '', role: '', linkedin: '' }]
    }));
  };

  const removeTeamMember = (index: number) => {
    if (userType !== 'startup') return;

    setFormData(prev => ({
      ...prev,
      teamMembers: prev.teamMembers.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // First sign in with the credentials
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (userType === 'startup') {
        const startupData = {
          ...formData,
          fundingNeeded: parseInt(formData.fundingNeeded) || 0,
          foundedYear: parseInt(formData.foundedYear),
          teamSize: parseInt(formData.teamSize),
          previousFunding: parseInt(formData.previousFunding) || 0,
          revenue: parseInt(formData.revenue) || 0,
          logo: `https://api.dicebear.com/7.x/initials/svg?seed=${formData.name}`
        };
        const startupId = await startupService.add(startupData);
        await updateUserProfile({ userType: 'startup', profile: { ...startupData, id: startupId } });
      } else {
        const investorData = {
          ...formData,
          investmentRange: {
            min: parseInt(formData.investmentRange.min) || 0,
            max: parseInt(formData.investmentRange.max) || 0
          },
          preferredTicketSize: {
            min: parseInt(formData.preferredTicketSize.min) || 0,
            max: parseInt(formData.preferredTicketSize.max) || 0
          },
          portfolio: parseInt(formData.portfolio),
          successfulExits: parseInt(formData.successfulExits),
          avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${formData.name}`
        };
        const investorId = await investorService.add(investorData);
        await updateUserProfile({ userType: 'investor', profile: { ...investorData, id: investorId } });
      }
      onClose();
    } catch (error) {
      console.error('Error creating profile:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div 
        className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 border-b flex justify-between items-center sticky top-0 bg-white">
          <h2 className="text-xl font-bold text-gray-900">
            Complete Your {userType === 'startup' ? 'Startup' : 'Investor'} Profile
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {userType === 'startup' ? (
            <>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    label="Startup Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <FormField
                    label="Company Website"
                    name="companyUrl"
                    type="url"
                    value={formData.companyUrl}
                    onChange={handleChange}
                    required
                  />
                </div>

                <FormField
                  label="Sector"
                  name="sector"
                  value={formData.sector}
                  onChange={handleChange}
                  required
                  as="select"
                >
                  {sectors.map(sector => (
                    <option key={sector} value={sector}>{sector}</option>
                  ))}
                </FormField>

                <FormField
                  label="Stage"
                  name="stage"
                  value={formData.stage}
                  onChange={handleChange}
                  required
                  as="select"
                >
                  {startupStages.map(stage => (
                    <option key={stage} value={stage}>{stage}</option>
                  ))}
                </FormField>

                <FormField
                  label="Description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  as="textarea"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    label="Funding Needed (USD)"
                    name="fundingNeeded"
                    type="number"
                    value={formData.fundingNeeded}
                    onChange={handleChange}
                    required
                    min="0"
                  />
                  <FormField
                    label="Previous Funding (USD)"
                    name="previousFunding"
                    type="number"
                    value={formData.previousFunding}
                    onChange={handleChange}
                    min="0"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    label="Annual Revenue (USD)"
                    name="revenue"
                    type="number"
                    value={formData.revenue}
                    onChange={handleChange}
                    min="0"
                  />
                  <FormField
                    label="Team Size"
                    name="teamSize"
                    type="number"
                    value={formData.teamSize}
                    onChange={handleChange}
                    required
                    min="1"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    label="Location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                  <FormField
                    label="Founded Year"
                    name="foundedYear"
                    type="number"
                    value={formData.foundedYear}
                    onChange={handleChange}
                    required
                    min="1900"
                    max={new Date().getFullYear()}
                  />
                </div>

                <FormField
                  label="Pitch Deck URL"
                  name="pitchDeck"
                  type="url"
                  value={formData.pitchDeck}
                  onChange={handleChange}
                  placeholder="Link to your pitch deck"
                />

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Team Members</h3>
                    <button
                      type="button"
                      onClick={addTeamMember}
                      className="text-indigo-600 hover:text-indigo-500 flex items-center"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add Member
                    </button>
                  </div>
                  
                  {formData.teamMembers.map((member, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                      <FormField
                        label="Name"
                        name={`teamMembers.${index}.name`}
                        value={member.name}
                        onChange={(e) => handleTeamMemberChange(index, 'name', e.target.value)}
                        required
                      />
                      <FormField
                        label="Role"
                        name={`teamMembers.${index}.role`}
                        value={member.role}
                        onChange={(e) => handleTeamMemberChange(index, 'role', e.target.value)}
                        required
                      />
                      <div className="flex items-center gap-2">
                        <div className="flex-1">
                          <FormField
                            label="LinkedIn URL"
                            name={`teamMembers.${index}.linkedin`}
                            type="url"
                            value={member.linkedin}
                            onChange={(e) => handleTeamMemberChange(index, 'linkedin', e.target.value)}
                          />
                        </div>
                        {index > 0 && (
                          <button
                            type="button"
                            onClick={() => removeTeamMember(index)}
                            className="text-red-500 hover:text-red-600 p-2"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Social Links</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="LinkedIn URL"
                      name="socialLinks.linkedin"
                      type="url"
                      value={formData.socialLinks.linkedin}
                      onChange={handleChange}
                    />
                    <FormField
                      label="Twitter URL"
                      name="socialLinks.twitter"
                      type="url"
                      value={formData.socialLinks.twitter}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    label="Investment Firm Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <FormField
                    label="Location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>

                <FormField
                  label="Firm Type"
                  name="firmType"
                  value={formData.firmType}
                  onChange={handleChange}
                  required
                  as="select"
                >
                  {investorTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </FormField>

                <FormField
                  label="Focus Sectors"
                  name="focusSectors"
                  value={formData.focusSectors}
                  onChange={handleChange}
                  required
                  as="select"
                  multiple
                >
                  {sectors.map(sector => (
                    <option key={sector} value={sector}>{sector}</option>
                  ))}
                </FormField>

                <FormField
                  label="Investment Stages"
                  name="investmentStages"
                  value={formData.investmentStages}
                  onChange={handleChange}
                  required
                  as="select"
                  multiple
                >
                  {startupStages.map(stage => (
                    <option key={stage} value={stage}>{stage}</option>
                  ))}
                </FormField>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Investment Range (USD)</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <FormField
                        label="Minimum"
                        name="investmentRange.min"
                        type="number"
                        value={formData.investmentRange.min}
                        onChange={handleChange}
                        required
                        min="0"
                      />
                      <FormField
                        label="Maximum"
                        name="investmentRange.max"
                        type="number"
                        value={formData.investmentRange.max}
                        onChange={handleChange}
                        required
                        min="0"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Preferred Ticket Size (USD)</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <FormField
                        label="Minimum"
                        name="preferredTicketSize.min"
                        type="number"
                        value={formData.preferredTicketSize.min}
                        onChange={handleChange}
                        required
                        min="0"
                      />
                      <FormField
                        label="Maximum"
                        name="preferredTicketSize.max"
                        type="number"
                        value={formData.preferredTicketSize.max}
                        onChange={handleChange}
                        required
                        min="0"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    label="Portfolio Companies"
                    name="portfolio"
                    type="number"
                    value={formData.portfolio}
                    onChange={handleChange}
                    required
                    min="0"
                  />
                  <FormField
                    label="Successful Exits"
                    name="successfulExits"
                    type="number"
                    value={formData.successfulExits}
                    onChange={handleChange}
                    required
                    min="0"
                  />
                </div>

                <FormField
                  label="Investment Thesis"
                  name="investmentThesis"
                  value={formData.investmentThesis}
                  onChange={handleChange}
                  as="textarea"
                  placeholder="Describe your investment philosophy and what you look for in startups"
                />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Social Links</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="LinkedIn URL"
                      name="socialLinks.linkedin"
                      type="url"
                      value={formData.socialLinks.linkedin}
                      onChange={handleChange}
                    />
                    <FormField
                      label="Twitter URL"
                      name="socialLinks.twitter"
                      type="url"
                      value={formData.socialLinks.twitter}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="mt-8 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"
            >
              Complete Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetup;