-- Compound App Database Schema
-- Run this in your Supabase SQL Editor

-- ============================================
-- ENUMS
-- ============================================

CREATE TYPE compound_category AS ENUM (
  'peptide',
  'sarm',
  'nootropic',
  'hormone',
  'support',
  'pct'
);

CREATE TYPE research_level AS ENUM (
  'well-researched',
  'moderate',
  'experimental'
);

CREATE TYPE suppression_level AS ENUM (
  'none',
  'mild',
  'significant'
);

CREATE TYPE delivery_method AS ENUM (
  'oral',
  'injectable',
  'nasal',
  'topical',
  'sublingual'
);

CREATE TYPE goal_type AS ENUM (
  'muscle',
  'recovery',
  'cognition',
  'fat-loss',
  'longevity',
  'sleep',
  'energy',
  'mood',
  'hormones',
  'performance'
);

-- ============================================
-- COMPOUNDS TABLE
-- ============================================

CREATE TABLE compounds (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Basic Info
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  category compound_category NOT NULL,
  subcategory VARCHAR(50),
  one_liner TEXT NOT NULL,
  overview TEXT NOT NULL,
  
  -- Status Indicators
  research_level research_level NOT NULL DEFAULT 'moderate',
  suppression_level suppression_level NOT NULL DEFAULT 'none',
  delivery_methods delivery_method[] NOT NULL,
  
  -- Dosing
  dosing_standard VARCHAR(100),
  dosing_timing VARCHAR(200),
  dosing_cycle_length VARCHAR(100),
  dosing_notes TEXT,
  
  -- Goals this compound helps with
  goals goal_type[] NOT NULL DEFAULT '{}',
  
  -- Side Effects (array of strings)
  side_effects TEXT[] DEFAULT '{}',
  
  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- BENEFITS TABLE
-- ============================================

CREATE TABLE benefits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  compound_id UUID REFERENCES compounds(id) ON DELETE CASCADE,
  title VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  icon VARCHAR(50), -- icon name for frontend
  sort_order INT DEFAULT 0
);

-- ============================================
-- WARNINGS TABLE
-- ============================================

CREATE TABLE warnings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  compound_id UUID REFERENCES compounds(id) ON DELETE CASCADE,
  warning_type VARCHAR(50) NOT NULL, -- 'research', 'legal', 'health', 'suppression'
  text TEXT NOT NULL,
  severity VARCHAR(20) DEFAULT 'medium' -- 'low', 'medium', 'high'
);

-- ============================================
-- RESEARCH/STUDIES TABLE
-- ============================================

CREATE TABLE studies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  compound_id UUID REFERENCES compounds(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  summary TEXT NOT NULL,
  link VARCHAR(500),
  study_type VARCHAR(50), -- 'human', 'animal', 'in-vitro'
  year INT
);

-- ============================================
-- SOURCES (Where to Buy)
-- ============================================

CREATE TABLE sources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  compound_id UUID REFERENCES compounds(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  url VARCHAR(500) NOT NULL,
  is_affiliate BOOLEAN DEFAULT false,
  notes TEXT
);

-- ============================================
-- STACKS (Compound Relationships)
-- ============================================

CREATE TABLE compound_stacks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  compound_id UUID REFERENCES compounds(id) ON DELETE CASCADE,
  stacks_with_id UUID REFERENCES compounds(id) ON DELETE CASCADE,
  reason TEXT, -- Why these stack well together
  UNIQUE(compound_id, stacks_with_id)
);

-- ============================================
-- CURATED STACKS (Pre-built Protocols)
-- ============================================

CREATE TABLE stacks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  description TEXT NOT NULL,
  goal goal_type NOT NULL,
  duration VARCHAR(50), -- "8 weeks", "ongoing", etc.
  estimated_cost VARCHAR(50),
  what_to_expect TEXT,
  warnings TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE stack_compounds (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stack_id UUID REFERENCES stacks(id) ON DELETE CASCADE,
  compound_id UUID REFERENCES compounds(id) ON DELETE CASCADE,
  dosing VARCHAR(200),
  timing VARCHAR(200),
  notes TEXT,
  sort_order INT DEFAULT 0
);

-- ============================================
-- FAQ
-- ============================================

CREATE TABLE faqs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  compound_id UUID REFERENCES compounds(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  sort_order INT DEFAULT 0
);

-- ============================================
-- INDEXES
-- ============================================

CREATE INDEX idx_compounds_category ON compounds(category);
CREATE INDEX idx_compounds_slug ON compounds(slug);
CREATE INDEX idx_compounds_goals ON compounds USING GIN(goals);
CREATE INDEX idx_benefits_compound ON benefits(compound_id);
CREATE INDEX idx_warnings_compound ON warnings(compound_id);
CREATE INDEX idx_studies_compound ON studies(compound_id);
CREATE INDEX idx_sources_compound ON sources(compound_id);

-- ============================================
-- UPDATED_AT TRIGGER
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER compounds_updated_at
  BEFORE UPDATE ON compounds
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- ============================================
-- ROW LEVEL SECURITY (Optional - for public read)
-- ============================================

ALTER TABLE compounds ENABLE ROW LEVEL SECURITY;
ALTER TABLE benefits ENABLE ROW LEVEL SECURITY;
ALTER TABLE warnings ENABLE ROW LEVEL SECURITY;
ALTER TABLE studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE stacks ENABLE ROW LEVEL SECURITY;
ALTER TABLE stack_compounds ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Public read access" ON compounds FOR SELECT USING (true);
CREATE POLICY "Public read access" ON benefits FOR SELECT USING (true);
CREATE POLICY "Public read access" ON warnings FOR SELECT USING (true);
CREATE POLICY "Public read access" ON studies FOR SELECT USING (true);
CREATE POLICY "Public read access" ON sources FOR SELECT USING (true);
CREATE POLICY "Public read access" ON stacks FOR SELECT USING (true);
CREATE POLICY "Public read access" ON stack_compounds FOR SELECT USING (true);
CREATE POLICY "Public read access" ON faqs FOR SELECT USING (true);
