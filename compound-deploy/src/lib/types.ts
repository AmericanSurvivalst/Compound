// Compound Database Types

export type Category = 'peptide' | 'sarm' | 'hormone' | 'nootropic' | 'natural' | 'pct' | 'support';

export type Goal = 
  | 'muscle' 
  | 'fat-loss' 
  | 'recovery' 
  | 'sleep' 
  | 'cognition' 
  | 'mood' 
  | 'energy' 
  | 'longevity' 
  | 'hormones' 
  | 'performance';

export type ResearchLevel = 'well-researched' | 'moderate' | 'limited';
export type SuppressionLevel = 'none' | 'mild' | 'moderate' | 'significant';
export type DeliveryMethod = 'oral' | 'injectable' | 'nasal' | 'topical' | 'sublingual';
export type WarningType = 'health' | 'legal' | 'suppression' | 'research' | 'interaction' | 'tolerance';
export type WarningSeverity = 'low' | 'medium' | 'high';
export type StudyType = 'human' | 'animal' | 'in-vitro' | 'review' | 'guideline';

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
  sort_order: number;
}

export interface Warning {
  id: string;
  warning_type: WarningType;
  text: string;
  severity: WarningSeverity;
}

export interface Study {
  id: string;
  title: string;
  summary: string;
  link: string;
  study_type: StudyType;
  year: number;
}

export interface Source {
  id: string;
  name: string;
  url: string;
  is_affiliate: boolean;
  notes?: string;
}

export interface Compound {
  id: string;
  name: string;
  slug: string;
  category: Category;
  subcategory?: string;
  one_liner: string;
  overview: string;
  research_level: ResearchLevel;
  suppression_level: SuppressionLevel;
  delivery_methods: DeliveryMethod[];
  dosing_standard: string;
  dosing_timing: string;
  dosing_cycle_length: string;
  dosing_notes?: string;
  goals: Goal[];
  side_effects: string[];
  benefits: Benefit[];
  warnings: Warning[];
  studies?: Study[];
  sources: Source[];
}

export interface Stack {
  id: string;
  name: string;
  slug: string;
  description: string;
  goal: Goal;
  duration: string;
  estimated_cost: string;
  what_to_expect: string;
  warnings: string;
}

export interface StackCompound {
  id: string;
  stack_id: string;
  compound_id: string;
  dosing_in_stack: string;
  timing_in_stack: string;
  purpose: string;
  is_optional: boolean;
  sort_order: number;
}
