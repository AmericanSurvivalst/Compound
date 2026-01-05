'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Search, ChevronRight, Check, ArrowRight, 
  Beaker, Brain, Dumbbell, Flame, Moon, Zap, Heart, Shield,
  BookOpen, Users, FileText, Star
} from 'lucide-react';
import { compounds, blogPosts } from '@/lib/data';
import { categoryInfo, researchInfo, suppressionInfo } from '@/lib/types';

const stats = [
  { value: '50+', label: 'Compounds' },
  { value: '200+', label: 'Studies Cited' },
  { value: '10K+', label: 'Monthly Readers' },
  { value: '4.9', label: 'User Rating', icon: Star },
];

const problems = [
  { icon: '🤷', text: 'Conflicting info from Reddit, forums, and "bro science"' },
  { icon: '⚠️', text: 'No idea about real dosing, timing, or cycle lengths' },
  { icon: '💊', text: 'Wasting money on compounds that don\'t fit your goals' },
  { icon: '😰', text: 'Worried about side effects you didn\'t know about' },
];

const features = [
  {
    icon: FileText,
    title: 'Research-Backed Info',
    description: 'Every compound profile includes real studies, not just gym talk. We cite our sources.',
  },
  {
    icon: Beaker,
    title: 'Complete Protocols',
    description: 'Dosing, timing, cycle length, PCT requirements. Everything you need to know.',
  },
  {
    icon: Shield,
    title: 'Side Effect Profiles',
    description: 'Know the risks before you start. Honest information about what to watch for.',
  },
  {
    icon: Users,
    title: 'Stack Builder',
    description: 'Curated compound combinations for specific goals. Fat loss, muscle, cognition.',
  },
];

const categories = [
  { id: 'peptide', label: 'Peptides', icon: Beaker, count: compounds.filter(c => c.category === 'peptide').length },
  { id: 'sarm', label: 'SARMs', icon: Dumbbell, count: compounds.filter(c => c.category === 'sarm').length },
  { id: 'hormone', label: 'Hormones', icon: Zap, count: compounds.filter(c => c.category === 'hormone').length },
  { id: 'nootropic', label: 'Nootropics', icon: Brain, count: compounds.filter(c => c.category === 'nootropic').length },
  { id: 'natural', label: 'Natural', icon: Heart, count: compounds.filter(c => c.category === 'natural').length },
  { id: 'pct', label: 'PCT', icon: Shield, count: compounds.filter(c => c.category === 'pct').length },
];

const proFeatures = [
  'Full access to all 50+ compound profiles',
  'Complete dosing protocols and timing',
  'Side effect management guides',
  'Curated stacks for every goal',
  'Verified source recommendations',
  'Coach AI for personalized guidance',
  'New compounds added monthly',
  'Cancel anytime',
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const featuredCompounds = compounds.slice(0, 6);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-green-500/5 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-muted)] border border-green-500/20 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-[var(--accent-primary)]">50+ compounds researched and documented</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Stop guessing.
              <br />
              <span className="gradient-text">Start knowing.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              The complete guide to peptides, SARMs, nootropics, and performance compounds. 
              Research-backed. No bro science. No BS.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-tertiary)]" />
              <input
                type="text"
                placeholder="Search compounds... (e.g., MK-677, BPC-157, RAD-140)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-green-500/20 transition-all"
              />
              {searchQuery && (
                <Link 
                  href={`/compounds?q=${encodeURIComponent(searchQuery)}`}
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl bg-[var(--accent-primary)] text-white text-sm font-medium hover:bg-[var(--accent-secondary)] transition-colors"
                >
                  Search
                </Link>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/compounds"
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--accent-primary)] text-white font-medium hover:bg-[var(--accent-secondary)] transition-all hover:scale-105"
              >
                Browse Compounds
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/blog"
                className="flex items-center gap-2 px-8 py-4 rounded-full border border-[var(--border)] text-[var(--text-primary)] font-medium hover:bg-[var(--bg-secondary)] transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                Read Free Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <span className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">{stat.value}</span>
                  {stat.icon && <stat.icon className="w-5 h-5 text-yellow-500 fill-yellow-500" />}
                </div>
                <p className="text-sm text-[var(--text-tertiary)] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tired of bad information?
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              Most guys researching compounds face the same problems:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {problems.map((problem, i) => (
              <div 
                key={i}
                className="flex items-start gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10"
              >
                <span className="text-2xl">{problem.icon}</span>
                <p className="text-[var(--text-secondary)]">{problem.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution/Features Section */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              One source of truth
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              Compound gives you research-backed information you can actually trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border)] card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-muted)] flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[var(--accent-primary)]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Browse by Category</h2>
              <p className="text-[var(--text-secondary)]">Find compounds for your specific goals</p>
            </div>
            <Link href="/compounds" className="hidden md:flex items-center gap-1 text-[var(--accent-primary)] hover:underline">
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/compounds?category=${cat.id}`}
                className="group p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--accent-primary)] transition-all text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--bg-tertiary)] group-hover:bg-[var(--accent-muted)] flex items-center justify-center mx-auto mb-4 transition-colors">
                  <cat.icon className="w-7 h-7 text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] transition-colors" />
                </div>
                <h3 className="font-semibold mb-1">{cat.label}</h3>
                <p className="text-sm text-[var(--text-tertiary)]">{cat.count} compounds</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Compounds */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Popular Compounds</h2>
              <p className="text-[var(--text-secondary)]">Most researched compounds in our database</p>
            </div>
            <Link href="/compounds" className="hidden md:flex items-center gap-1 text-[var(--accent-primary)] hover:underline">
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredCompounds.map((compound) => (
              <Link
                key={compound.id}
                href={`/compound/${compound.slug}`}
                className="group p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border)] card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-[var(--accent-primary)] transition-colors">
                      {compound.name}
                    </h3>
                    <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium border ${categoryInfo[compound.category]?.color || 'cat-support'}`}>
                      {categoryInfo[compound.category]?.label}
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

          <div className="text-center mt-8">
            <Link 
              href="/compounds"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] transition-colors"
            >
              View All {compounds.length} Compounds
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              Free to browse. Pro for serious optimizers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Tier */}
            <div className="p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]">
              <h3 className="text-xl font-bold mb-2">Free</h3>
              <p className="text-[var(--text-secondary)] mb-4">Get started with the basics</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-[var(--text-tertiary)]">/forever</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Browse all compound names',
                  'Basic compound overviews',
                  'All blog articles',
                  'Category browsing',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <Check className="w-4 h-4 text-[var(--accent-primary)]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                href="/compounds"
                className="block w-full py-3 rounded-xl border border-[var(--border)] text-center font-medium hover:bg-[var(--bg-tertiary)] transition-colors"
              >
                Browse Free
              </Link>
            </div>

            {/* Pro Tier */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-green-500/10 to-transparent border-2 border-[var(--accent-primary)] relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[var(--accent-primary)] text-white text-xs font-medium">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold mb-2">Pro</h3>
              <p className="text-[var(--text-secondary)] mb-4">Full access to everything</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$5</span>
                <span className="text-[var(--text-tertiary)]">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {proFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <Check className="w-4 h-4 text-[var(--accent-primary)]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                href="/auth"
                className="block w-full py-3 rounded-xl bg-[var(--accent-primary)] text-white text-center font-medium hover:bg-[var(--accent-secondary)] transition-colors"
              >
                Get Pro Access
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog/Learn Section */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Learn the Fundamentals</h2>
              <p className="text-[var(--text-secondary)]">Free guides to get you started</p>
            </div>
            <Link href="/blog" className="hidden md:flex items-center gap-1 text-[var(--accent-primary)] hover:underline">
              All articles <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border)] card-hover"
              >
                <span className="text-xs font-medium text-[var(--accent-primary)]">{post.category}</span>
                <h3 className="text-lg font-semibold mt-2 mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mb-4">{post.excerpt}</p>
                <span className="text-xs text-[var(--text-tertiary)]">{post.read_time} min read</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to optimize?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Join thousands of people who use Compound to make informed decisions about performance optimization.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/auth"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--accent-primary)] text-white font-medium hover:bg-[var(--accent-secondary)] transition-all hover:scale-105"
            >
              Get Pro Access
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/compounds"
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-[var(--border)] text-[var(--text-primary)] font-medium hover:bg-[var(--bg-secondary)] transition-colors"
            >
              Browse Free
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
