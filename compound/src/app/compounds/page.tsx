'use client';

import { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, ChevronRight, Filter, X } from 'lucide-react';
import { compounds } from '@/lib/data';
import { categoryInfo, researchInfo, suppressionInfo, goalInfo, CompoundCategory, GoalType } from '@/lib/types';

const categories: { id: CompoundCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'peptide', label: 'Peptides' },
  { id: 'sarm', label: 'SARMs' },
  { id: 'hormone', label: 'Hormones' },
  { id: 'nootropic', label: 'Nootropics' },
  { id: 'natural', label: 'Natural' },
  { id: 'pct', label: 'PCT' },
  { id: 'support', label: 'Support' },
];

const goals: { id: GoalType; label: string }[] = [
  { id: 'muscle', label: 'Muscle' },
  { id: 'fat-loss', label: 'Fat Loss' },
  { id: 'recovery', label: 'Recovery' },
  { id: 'cognition', label: 'Cognition' },
  { id: 'sleep', label: 'Sleep' },
  { id: 'energy', label: 'Energy' },
  { id: 'mood', label: 'Mood' },
  { id: 'longevity', label: 'Longevity' },
];

function CompoundsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const initialQuery = searchParams.get('q') || '';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredCompounds = useMemo(() => {
    return compounds.filter(c => {
      const matchesSearch = !searchQuery || 
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.one_liner.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || c.category === selectedCategory;
      const matchesGoal = !selectedGoal || c.goals.includes(selectedGoal as GoalType);
      return matchesSearch && matchesCategory && matchesGoal;
    });
  }, [searchQuery, selectedCategory, selectedGoal]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedGoal(null);
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'all' || selectedGoal;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">All Compounds</h1>
        <p className="text-[var(--text-secondary)]">
          Browse our database of {compounds.length} researched compounds
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-tertiary)]" />
            <input
              type="text"
              placeholder="Search compounds..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent-primary)]"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-colors ${
              showFilters || hasActiveFilters
                ? 'bg-[var(--accent-muted)] border-[var(--accent-primary)] text-[var(--accent-primary)]'
                : 'border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-light)]'
            }`}
          >
            <Filter className="w-5 h-5" />
            <span className="hidden sm:inline">Filters</span>
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[var(--accent-primary)] text-white'
                  : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Expanded Filters */}
        {showFilters && (
          <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Filter by Goal</h3>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-sm text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]"
                >
                  <X className="w-4 h-4" />
                  Clear all
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {goals.map((goal) => (
                <button
                  key={goal.id}
                  onClick={() => setSelectedGoal(selectedGoal === goal.id ? null : goal.id)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                    selectedGoal === goal.id
                      ? 'bg-[var(--accent-primary)] text-white'
                      : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]'
                  }`}
                >
                  {goalInfo[goal.id]?.icon} {goal.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="mb-4">
        <p className="text-sm text-[var(--text-tertiary)]">
          Showing {filteredCompounds.length} of {compounds.length} compounds
        </p>
      </div>

      {/* Compounds Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCompounds.map((compound) => (
          <Link
            key={compound.id}
            href={`/compound/${compound.slug}`}
            className="group p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] card-hover"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold group-hover:text-[var(--accent-primary)] transition-colors">
                  {compound.name}
                </h3>
                <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium border ${categoryInfo[compound.category]?.color || 'cat-support'}`}>
                  {compound.subcategory || categoryInfo[compound.category]?.label}
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-[var(--text-tertiary)] group-hover:text-[var(--accent-primary)] group-hover:translate-x-1 transition-all" />
            </div>
            
            <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2">
              {compound.one_liner}
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className={`px-2 py-1 rounded-md text-xs ${researchInfo[compound.research_level]?.color}`}>
                {researchInfo[compound.research_level]?.label}
              </span>
              <span className={`px-2 py-1 rounded-md text-xs ${suppressionInfo[compound.suppression_level]?.color}`}>
                {suppressionInfo[compound.suppression_level]?.label}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {filteredCompounds.length === 0 && (
        <div className="text-center py-12">
          <p className="text-[var(--text-secondary)] mb-4">No compounds found matching your criteria</p>
          <button
            onClick={clearFilters}
            className="text-[var(--accent-primary)] hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </main>
  );
}

export default function CompoundsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />
      <Suspense fallback={
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-10 bg-[var(--bg-secondary)] rounded w-1/3 mb-4"></div>
            <div className="h-6 bg-[var(--bg-secondary)] rounded w-1/2 mb-8"></div>
            <div className="grid md:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-48 bg-[var(--bg-secondary)] rounded-2xl"></div>
              ))}
            </div>
          </div>
        </div>
      }>
        <CompoundsContent />
      </Suspense>
      <Footer />
    </div>
  );
}
