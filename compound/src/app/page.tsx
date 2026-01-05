'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { compounds, stacks, searchCompounds } from '@/lib/data';
import { Category, Goal } from '@/lib/types';

const categoryLabels: Record<Category, string> = {
  peptide: 'Peptides',
  sarm: 'SARMs',
  hormone: 'Steroids & Hormones',
  nootropic: 'Nootropics',
  natural: 'Natural Supplements',
  pct: 'PCT & Hormone Support',
  support: 'Support Compounds',
};

const goalLabels: Record<Goal, string> = {
  muscle: 'Build Muscle',
  'fat-loss': 'Lose Fat',
  recovery: 'Recovery',
  sleep: 'Sleep',
  cognition: 'Cognition',
  mood: 'Mood',
  energy: 'Energy',
  longevity: 'Longevity',
  hormones: 'Optimize Hormones',
  performance: 'Performance',
};

const categoryColors: Record<Category, string> = {
  peptide: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  sarm: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  hormone: 'bg-red-500/10 text-red-400 border-red-500/20',
  nootropic: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  natural: 'bg-green-500/10 text-green-400 border-green-500/20',
  pct: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  support: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
};

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [selectedGoal, setSelectedGoal] = useState<Goal | 'all'>('all');

  const filteredCompounds = useMemo(() => {
    let results = compounds;
    
    if (searchQuery) {
      results = searchCompounds(searchQuery);
    }
    
    if (selectedCategory !== 'all') {
      results = results.filter(c => c.category === selectedCategory);
    }
    
    if (selectedGoal !== 'all') {
      results = results.filter(c => c.goals.includes(selectedGoal));
    }
    
    return results;
  }, [searchQuery, selectedCategory, selectedGoal]);

  const categories = Object.keys(categoryLabels) as Category[];
  const goals = Object.keys(goalLabels) as Goal[];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Compound
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-8">
            Research-backed information on peptides, SARMs, nootropics, steroids, and natural supplements. 
            Real studies. Accurate dosing. No BS.
          </p>
          
          {/* Search */}
          <div className="relative max-w-xl">
            <input
              type="text"
              placeholder="Search compounds..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
            />
            <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-sm text-gray-500 self-center mr-2">Category:</span>
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1 rounded-full text-sm transition-all ${
              selectedCategory === 'all' 
                ? 'bg-white text-black' 
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-sm transition-all ${
                selectedCategory === cat 
                  ? 'bg-white text-black' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-500 self-center mr-2">Goal:</span>
          <button
            onClick={() => setSelectedGoal('all')}
            className={`px-3 py-1 rounded-full text-sm transition-all ${
              selectedGoal === 'all' 
                ? 'bg-white text-black' 
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            All
          </button>
          {goals.map(goal => (
            <button
              key={goal}
              onClick={() => setSelectedGoal(goal)}
              className={`px-3 py-1 rounded-full text-sm transition-all ${
                selectedGoal === goal 
                  ? 'bg-white text-black' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {goalLabels[goal]}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 pb-4">
        <p className="text-sm text-gray-500">
          Showing {filteredCompounds.length} of {compounds.length} compounds
        </p>
      </div>

      {/* Compound Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCompounds.map(compound => (
            <Link
              key={compound.id}
              href={`/compound/${compound.slug}`}
              className="group p-5 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] hover:border-white/10 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`px-2 py-0.5 rounded text-xs border ${categoryColors[compound.category]}`}>
                  {compound.subcategory || categoryLabels[compound.category]}
                </span>
                {compound.suppression_level !== 'none' && (
                  <span className={`px-2 py-0.5 rounded text-xs ${
                    compound.suppression_level === 'significant' 
                      ? 'bg-red-500/10 text-red-400' 
                      : compound.suppression_level === 'moderate'
                      ? 'bg-yellow-500/10 text-yellow-400'
                      : 'bg-orange-500/10 text-orange-400'
                  }`}>
                    {compound.suppression_level} suppression
                  </span>
                )}
              </div>
              
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                {compound.name}
              </h3>
              
              <p className="text-sm text-gray-400 line-clamp-2 mb-3">
                {compound.one_liner}
              </p>
              
              <div className="flex flex-wrap gap-1">
                {compound.goals.slice(0, 3).map(goal => (
                  <span key={goal} className="px-2 py-0.5 bg-white/5 rounded text-xs text-gray-500">
                    {goalLabels[goal]}
                  </span>
                ))}
                {compound.goals.length > 3 && (
                  <span className="px-2 py-0.5 bg-white/5 rounded text-xs text-gray-500">
                    +{compound.goals.length - 3}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Stacks Section */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-2">Popular Stacks</h2>
          <p className="text-gray-400 mb-8">Curated combinations for specific goals</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stacks.map(stack => (
              <div
                key={stack.id}
                className="p-5 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-xl"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded text-xs">
                    {goalLabels[stack.goal]}
                  </span>
                  <span className="text-xs text-gray-500">{stack.duration}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{stack.name}</h3>
                <p className="text-sm text-gray-400 mb-3">{stack.description}</p>
                
                <div className="text-xs text-gray-500">
                  Est. {stack.estimated_cost}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-white/5 bg-red-500/5">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <p className="text-sm text-red-400/80">
            <strong>Disclaimer:</strong> This information is for educational purposes only. Many compounds listed are not FDA-approved for human use. 
            Consult a healthcare provider before using any substances. We do not encourage illegal use of controlled substances.
          </p>
        </div>
      </div>
    </div>
  );
}
