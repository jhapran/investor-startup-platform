export interface Startup {
  id: string;
  name: string;
  sector: Sector;
  description: string;
  fundingNeeded: number;
  location: string;
  foundedYear: number;
  teamSize: number;
  companyUrl: string;
  logo?: string;
  stage: StartupStage;
  pitchDeck?: string;
  teamMembers: TeamMember[];
  previousFunding?: number;
  revenue?: number;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export interface TeamMember {
  name: string;
  role: string;
  linkedin?: string;
}

export type StartupStage = 
  | "Idea"
  | "MVP"
  | "Early Traction"
  | "Growth"
  | "Scale";

export interface Investor {
  id: string;
  name: string;
  focusSectors: Sector[];
  investmentRange: {
    min: number;
    max: number;
  };
  portfolio: number;
  location: string;
  avatar?: string;
  firmType: InvestorType;
  investmentStages: StartupStage[];
  investmentThesis?: string;
  successfulExits?: number;
  preferredTicketSize: {
    min: number;
    max: number;
  };
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  investmentCriteria?: string[];
}

export type InvestorType = 
  | "Angel Investor"
  | "Venture Capital"
  | "Private Equity"
  | "Corporate Investor"
  | "Family Office"
  | "Accelerator/Incubator";

export type Sector = 
  | "Technology"
  | "Healthcare"
  | "Education"
  | "Finance"
  | "E-commerce"
  | "Agriculture"
  | "Clean Energy"
  | "Manufacturing";