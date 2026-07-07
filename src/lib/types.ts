export interface Tool {
  id: string;
  name: string;
  slug: string;
  logo: string;
  tagline: string;
  pricing: {
    free: boolean;
    freePrice: string;
    pro: string;
    team: string;
    enterprise: string;
  };
  affiliateUrl: string;
  affiliateProgram?: string;
  affiliateCommission?: string;
  affiliateSignup?: string;
  features: string[];
  pros: string[];
  cons: string[];
  rating: number;
  bestFor: string;
}

export interface Comparison {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  metaTitle: string;
  tools: string[];
  verdict: string;
  updatedDate: string;
}
