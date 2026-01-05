export type CompoundCategory = 'peptide' | 'sarm' | 'nootropic' | 'hormone' | 'natural' | 'support' | 'pct';
export type ResearchLevel = 'well-researched' | 'moderate' | 'limited';
export type SuppressionLevel = 'none' | 'mild' | 'moderate' | 'significant';
export type DeliveryMethod = 'oral' | 'injectable' | 'nasal' | 'topical' | 'sublingual';
export type GoalType = 'muscle' | 'recovery' | 'cognition' | 'fat-loss' | 'longevity' | 'sleep' | 'energy' | 'mood' | 'hormones' | 'performance';

export interface Compound {
  id: string;
  name: string;
  slug: string;
  category: CompoundCategory;
  subcategory?: string;
  one_liner: string;
  overview: string;
  research_level: ResearchLevel;
  suppression_level: SuppressionLevel;
  delivery_methods: DeliveryMethod[];
  dosing_standard?: string;
  dosing_timing?: string;
  dosing_cycle_length?: string;
  dosing_notes?: string;
  goals: GoalType[];
  side_effects: string[];
  benefits?: Benefit[];
  warnings?: Warning[];
  studies?: Study[];
  sources?: Source[];
  is_premium?: boolean;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon?: string;
  sort_order: number;
}

export interface Warning {
  id: string;
  warning_type: string;
  text: string;
  severity: 'low' | 'medium' | 'high';
}

export interface Study {
  id: string;
  title: string;
  summary: string;
  link?: string;
  study_type?: 'human' | 'animal' | 'in-vitro' | 'review' | 'guideline';
  year?: number;
}

export interface Source {
  id: string;
  name: string;
  url: string;
  is_affiliate: boolean;
  notes?: string;
}

export interface Stack {
  id: string;
  name: string;
  slug: string;
  description: string;
  goal: GoalType;
  duration?: string;
  estimated_cost?: string;
  what_to_expect?: string;
  warnings?: string;
  is_premium?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  published_at: string;
  read_time: number;
}

// Category display info
export const categoryInfo: Record<CompoundCategory, { label: string; color: string }> = {
  peptide: { label: 'Peptide', color: 'cat-peptide' },
  sarm: { label: 'SARM', color: 'cat-sarm' },
  nootropic: { label: 'Nootropic', color: 'cat-nootropic' },
  hormone: { label: 'Hormone', color: 'cat-hormone' },
  natural: { label: 'Natural', color: 'cat-support' },
  support: { label: 'Support', color: 'cat-support' },
  pct: { label: 'PCT', color: 'cat-pct' },
};

export const researchInfo: Record<ResearchLevel, { label: string; color: string }> = {
  'well-researched': { label: 'Well Researched', color: 'research-well' },
  'moderate': { label: 'Moderate Research', color: 'research-moderate' },
  'limited': { label: 'Limited Research', color: 'research-experimental' },
};

export const suppressionInfo: Record<SuppressionLevel, { label: string; color: string }> = {
  'none': { label: 'No Suppression', color: 'suppression-none' },
  'mild': { label: 'Mild Suppression', color: 'suppression-mild' },
  'moderate': { label: 'Moderate Suppression', color: 'suppression-mild' },
  'significant': { label: 'Significant Suppression', color: 'suppression-significant' },
};

export const deliveryInfo: Record<DeliveryMethod, { label: string; icon: string }> = {
  'oral': { label: 'Oral', icon: '💊' },
  'injectable': { label: 'Injectable', icon: '💉' },
  'nasal': { label: 'Nasal', icon: '👃' },
  'topical': { label: 'Topical', icon: '🧴' },
  'sublingual': { label: 'Sublingual', icon: '👅' },
};

export const goalInfo: Record<GoalType, { label: string; icon: string }> = {
  'muscle': { label: 'Muscle', icon: '💪' },
  'recovery': { label: 'Recovery', icon: '🩹' },
  'cognition': { label: 'Cognition', icon: '🧠' },
  'fat-loss': { label: 'Fat Loss', icon: '🔥' },
  'longevity': { label: 'Longevity', icon: '⏳' },
  'sleep': { label: 'Sleep', icon: '😴' },
  'energy': { label: 'Energy', icon: '⚡' },
  'mood': { label: 'Mood', icon: '😊' },
  'hormones': { label: 'Hormones', icon: '🧬' },
  'performance': { label: 'Performance', icon: '🏃' },
};
