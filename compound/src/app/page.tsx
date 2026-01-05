'use client';

import { useState } from 'react';
import { Search, Dumbbell, Brain, Heart, Flame, Moon, Zap, ChevronRight, Beaker, Pill, Lock, BookOpen, User } from 'lucide-react';
import { compounds, stacks, blogPosts } from '@/lib/data';
import { categoryInfo, researchInfo, suppressionInfo, deliveryInfo } from '@/lib/types';
import Link from 'next/link';

const categories = [
  { id: 'peptide', label: 'Peptides', icon: Beaker, description: 'Healing, recovery, GH optimization' },
  { id: 'sarm', label: 'SARMs', icon: Dumbbell, description: 'Muscle building, strength' },
  { id: 'hormone', label: 'Hormones', icon: Zap, description: 'Testosterone, steroids' },
  { id: 'nootropic', label: 'Nootropics', icon: Brain, description: 'Focus, memory, cognition' },
  { id: 'natural', label: 'Natural', icon: Pill, description: 'Supplements, herbs' },
  { id: 'pct', label: 'PCT', icon: Heart, description: 'Post-cycle therapy' },
];

const goals = [
  { id: 'muscle', label: 'Build Muscle', icon: Dumbbell },
  { id: 'cognition', label: 'Sharpen Mind', icon: Brain },
  { id: 'recovery', label: 'Recover Faster', icon: Heart },
  { id: 'fat-loss', label: 'Lose Fat', icon: Flame },
  { id: 'sleep', label: 'Sleep Better', icon: Moon },
  { id: 'energy', label: 'More Energy', icon: Zap },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCompounds = compounds.filter(c => {
    const matchesSearch = !searchQuery || 
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.one_liner.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || c.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header */}
      <header className="border-b border-[var(--border)] sticky top-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <Beaker className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold tracking-tight">Compound</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                Explore
              </Link>
              <Link href="/stacks" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                Stacks
              </Link>
              <Link href="/blog" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                Blog
              </Link>
              <Link 
                href="/auth"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-muted)] text-[var(--accent-primary)] hover:bg-green-500/20 transition-colors"
              >
                <User className="w-4 h-4" />
                Sign In
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Know what you&apos;re{' '}
              <span className="gradient-text">taking</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-8">
              The complete guide to peptides, SARMs, nootropics, and performance compounds. 
              Research-backed information. Real studies. No BS.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-tertiary)]" />
              <input
                type="text"
                placeholder="Search compounds..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
              />
            </div>

            {/* Pro Upsell */}
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--warning-muted)] text-[var(--warning)]">
              <Lock className="w-4 h-4" />
              <span className="text-sm">Unlock full protocols and Coach AI for $5/month</span>
              <Link href="/auth" className="underline font-medium">Get Pro</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-12 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-medium text-[var(--text-tertiary)] uppercase tracking-wider mb-6">
            What are you optimizing for?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {goals.map((goal) => (
              <button
                key={goal.id}
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchQuery(goal.id);
                }}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--border-light)] hover:bg-[var(--bg-tertiary)] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-tertiary)] group-hover:bg-[var(--accent-muted)] flex items-center justify-center transition-colors">
                  <goal.icon className="w-6 h-6 text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] transition-colors" />
                </div>
                <span className="text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                  {goal.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-medium text-[var(--text-tertiary)] uppercase tracking-wider mb-6">
            Browse by category
          </h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full border transition-all ${
                !selectedCategory 
                  ? 'bg-[var(--accent-primary)] border-[var(--accent-primary)] text-white' 
                  : 'border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-light)]'
              }`}
            >
              All ({compounds.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full border transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[var(--accent-primary)] border-[var(--accent-primary)] text-white'
                    : 'border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-light)]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Compounds Grid */}
      <section className="py-8 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
            {filteredCompounds.slice(0, 12).map((compound) => (
              <Link
                key={compound.id}
                href={`/compound/${compound.slug}`}
                className="group block p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                      {compound.name}
                    </h3>
                    <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium border ${categoryInfo[compound.category]?.color || 'cat-support'}`}>
                      {categoryInfo[compound.category]?.label || compound.category}
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[var(--text-tertiary)] group-hover:text-[var(--accent-primary)] group-hover:translate-x-1 transition-all" />
                </div>
                
                <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2">
                  {compound.one_liner}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className={`px-2 py-1 rounded-md text-xs ${researchInfo[compound.research_level]?.color || 'research-moderate'}`}>
                    {researchInfo[compound.research_level]?.label || compound.research_level}
                  </span>
                  <span className={`px-2 py-1 rounded-md text-xs ${suppressionInfo[compound.suppression_level]?.color || 'suppression-none'}`}>
                    {suppressionInfo[compound.suppression_level]?.label || compound.suppression_level}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          {filteredCompounds.length > 12 && (
            <div className="text-center mt-8">
              <p className="text-[var(--text-secondary)] mb-4">
                Showing 12 of {filteredCompounds.length} compounds
              </p>
              <Link 
                href="/auth" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-secondary)] transition-colors"
              >
                <Lock className="w-4 h-4" />
                Unlock All Compounds
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Stacks Preview */}
      <section className="py-16 border-t border-[var(--border)] bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Popular Stacks</h2>
              <p className="text-[var(--text-secondary)]">Curated protocols for specific goals</p>
            </div>
            <Link href="/stacks" className="text-[var(--accent-primary)] hover:underline">
              View all →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stacks.slice(0, 3).map((stack) => (
              <div
                key={stack.id}
                className="p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border)]"
              >
                <h3 className="text-lg font-semibold mb-2">{stack.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{stack.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--text-tertiary)]">{stack.duration}</span>
                  <span className="text-xs text-[var(--accent-primary)]">{stack.estimated_cost}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Free Guides</h2>
              <p className="text-[var(--text-secondary)]">Learn the fundamentals</p>
            </div>
            <Link href="/blog" className="text-[var(--accent-primary)] hover:underline flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              All articles →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <div className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] card-hover h-full">
                  <span className="text-xs text-[var(--accent-primary)] font-medium">{post.category}</span>
                  <h3 className="text-lg font-semibold mt-2 mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] line-clamp-2">{post.excerpt}</p>
                  <div className="mt-4 text-xs text-[var(--text-tertiary)]">
                    {post.read_time} min read
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Unlock Everything</h2>
          <p className="text-[var(--text-secondary)] mb-8">
            Get full compound protocols, AI-powered Coach, and exclusive content for just $5/month.
          </p>
          <Link 
            href="/auth"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--accent-primary)] text-white text-lg font-medium hover:bg-[var(--accent-secondary)] transition-colors"
          >
            Get Pro Access
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <Beaker className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm text-[var(--text-secondary)]">Compound</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-[var(--text-tertiary)]">
              <Link href="/disclaimer" className="hover:text-[var(--text-secondary)]">Disclaimer</Link>
              <Link href="/blog" className="hover:text-[var(--text-secondary)]">Blog</Link>
              <a href="mailto:support@compound.app" className="hover:text-[var(--text-secondary)]">Contact</a>
            </div>
          </div>
          <p className="text-xs text-[var(--text-tertiary)] text-center mt-6">
            This information is for educational purposes only. Consult a healthcare provider before using any compounds.
          </p>
        </div>
      </footer>
    </div>
  );
}
