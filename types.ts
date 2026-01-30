
export interface SolarEstimate {
  annualSavings: string;
  paybackYears: string;
  lifetimeSavings: string;
  co2Saved: string;
  treesPlanted: string;
  recommendation: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
}
