'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Search, ChevronRight, Check, ArrowRight, 
  Beaker, Brain, Dumbbell, Shield,
  Users, FileText, Star, Play, TrendingUp, Clock,
  ChevronLeft, Quote
} from 'lucide-react';
import { compounds, blogPosts } from '@/lib/data';
import { categoryInfo, researchInfo, suppressionInfo } from '@/lib/types';

function useCounter(end: number, duration: number = 2000, start: number = 0) {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration, start]);

  return { count, ref };
}

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1, rootMargin: '50px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

const testimonials = [
  { name: 'Mike R.', role: 'Competitive Bodybuilder', content: 'Finally, a resource that gives it to you straight. No BS, just research-backed info.', rating: 5 },
  { name: 'Sarah K.', role: 'Biohacker', content: 'The peptide guides are incredible. I actually understand what I\'m doing now.', rating: 5 },
  { name: 'James T.', role: 'TRT Patient', content: 'My doctor was impressed I came in so informed. Game changer.', rating: 5 },
  { name: 'David L.', role: 'Entrepreneur', content: 'The nootropic recommendations are gold. Finally optimizing with confidence.', rating: 5 },
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const stats = {
    compounds: useCounter(compounds.length, 1500),
    studies: useCounter(200, 2000),
    users: useCounter(10000, 2500),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const featuredCompounds = compounds.slice(0, 6);
  const problemSection = useScrollAnimation();
  const featuresSection = useScrollAnimation();
  const compoundsSection = useScrollAnimation();
  const testimonialsSection = useScrollAnimation();
  const pricingSection = useScrollAnimation();

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] overflow-x-hidden">
      <Header />
      
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute w-[800px] h-[800px] rounded-full opacity-30 blur-3xl transition-all duration-1000 ease-out"
            style={{
              background: 'radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, transparent 70%)',
              left: `calc(${mousePosition.x * 0.02}px - 400px)`,
              top: `calc(${mousePosition.y * 0.02}px - 400px)`,
            }}
          />
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl bg-gradient-to-br from-emerald-500 to-transparent animate-pulse" />
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-8 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-green-400 font-medium">Trusted by 10,000+ optimizers worldwide</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up animation-delay-100">
              <span className="block">Stop guessing.</span>
              <span className="block mt-2 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent animate-gradient">
                Start knowing.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-10 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-200">
              The definitive guide to peptides, SARMs, and performance compounds. 
              <span className="text-[var(--text-primary)]"> Research-backed protocols.</span> Real studies. Zero BS.
            </p>

            <div className="relative max-w-xl mb-8 animate-fade-in-up animation-delay-300">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-50" />
              <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-tertiary)]" />
                <input
                  type="text"
                  placeholder="Search any compound... (MK-677, BPC-157, RAD-140)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-32 py-5 rounded-2xl bg-[var(--bg-secondary)]/80 backdrop-blur-sm border border-[var(--border)] text-lg text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all"
                />
                <Link 
                  href={searchQuery ? `/compounds?q=${encodeURIComponent(searchQuery)}` : '/compounds'}
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium hover:from-green-600 hover:to-emerald-600 transition-all hover:scale-105 active:scale-95"
                >
                  Search
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-in-up animation-delay-400">
              <Link 
                href="/compounds"
                className="group flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-all hover:scale-105 active:scale-95"
              >
                Explore All Compounds
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#how-it-works"
                className="flex items-center gap-2 px-8 py-4 rounded-full border border-[var(--border)] text-[var(--text-primary)] font-medium hover:bg-[var(--bg-secondary)] transition-all group"
              >
                <Play className="w-5 h-5 text-green-500" />
                See How It Works
              </Link>
            </div>

            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-[var(--border)] animate-fade-in-up animation-delay-500">
              <div ref={stats.compounds.ref}>
                <div className="text-3xl font-bold">{stats.compounds.count}+</div>
                <div className="text-sm text-[var(--text-tertiary)]">Compounds</div>
              </div>
              <div className="w-px h-10 bg-[var(--border)]" />
              <div ref={stats.studies.ref}>
                <div className="text-3xl font-bold">{stats.studies.count}+</div>
                <div className="text-sm text-[var(--text-tertiary)]">Studies Cited</div>
              </div>
              <div className="w-px h-10 bg-[var(--border)]" />
              <div ref={stats.users.ref}>
                <div className="text-3xl font-bold">{stats.users.count.toLocaleString()}+</div>
                <div className="text-sm text-[var(--text-tertiary)]">Users</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="py-8 border-y border-[var(--border)] bg-[var(--bg-secondary)]/50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
          <span className="text-sm text-[var(--text-tertiary)] uppercase tracking-wider">Trusted by</span>
          <div className="flex items-center gap-8 md:gap-12">
            {['Athletes', 'Biohackers', 'Physicians', 'Researchers', 'Coaches'].map((item, i) => (
              <span key={i} className="text-[var(--text-secondary)] font-medium">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section 
        ref={problemSection.ref}
        className={`py-24 transition-all duration-1000 ${problemSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-green-500 font-semibold text-sm uppercase tracking-wider">The Problem</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">You&apos;re flying blind</h2>
            <p className="text-xl text-[var(--text-secondary)]">Most people researching compounds face the same frustrating problems</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🤷', title: 'Conflicting Info', desc: 'Reddit says one thing, forums say another, your gym bro says something else.' },
              { icon: '📊', title: 'No Real Data', desc: 'Dosing recommendations pulled from thin air. No studies, no citations.' },
              { icon: '💸', title: 'Wasted Money', desc: 'Buying compounds that don\'t fit your goals because you didn\'t know better.' },
              { icon: '⚠️', title: 'Hidden Risks', desc: 'Side effects and interactions you didn\'t know about until it was too late.' },
            ].map((problem, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gradient-to-b from-red-500/5 to-transparent border border-red-500/10 hover:border-red-500/30 transition-all">
                <span className="text-4xl mb-4 block">{problem.icon}</span>
                <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section 
        id="how-it-works"
        ref={featuresSection.ref}
        className={`py-24 bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)] transition-all duration-1000 ${featuresSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-green-500 font-semibold text-sm uppercase tracking-wider">The Solution</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">One source of truth</h2>
            <p className="text-xl text-[var(--text-secondary)]">Everything you need, backed by real research</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { icon: FileText, title: 'Research-Backed Profiles', desc: 'Every compound includes cited studies, not gym folklore.', color: 'from-blue-500 to-cyan-500' },
              { icon: Beaker, title: 'Complete Protocols', desc: 'Dosing, timing, cycle length, PCT. The full picture.', color: 'from-green-500 to-emerald-500' },
              { icon: Shield, title: 'Side Effect Intelligence', desc: 'Know the risks. Severity ratings and warning signs.', color: 'from-orange-500 to-amber-500' },
              { icon: TrendingUp, title: 'Goal-Based Stacks', desc: 'Curated combinations for muscle, fat loss, cognition.', color: 'from-purple-500 to-pink-500' },
              { icon: Users, title: 'Coach AI', desc: 'Personalized guidance based on your goals.', color: 'from-red-500 to-rose-500' },
              { icon: Clock, title: 'Always Updated', desc: 'New research added monthly. Stay current.', color: 'from-teal-500 to-green-500' },
            ].map((feature, i) => (
              <div key={i} className="group relative p-8 rounded-3xl bg-[var(--bg-primary)] border border-[var(--border)] hover:border-transparent transition-all overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl`} />
                <div className="absolute inset-[1px] bg-[var(--bg-primary)] rounded-3xl -z-5" />
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="relative text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="relative text-[var(--text-secondary)]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPOUNDS */}
      <section 
        ref={compoundsSection.ref}
        className={`py-24 transition-all duration-1000 ${compoundsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-green-500 font-semibold text-sm uppercase tracking-wider">Database</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4">{compounds.length}+ compounds</h2>
              <p className="text-xl text-[var(--text-secondary)] mt-2">The most comprehensive database available</p>
            </div>
            <Link href="/compounds" className="flex items-center gap-2 text-green-500 font-medium hover:gap-3 transition-all">
              View all <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {Object.entries(categoryInfo).map(([key, value]) => (
              <Link key={key} href={`/compounds?category=${key}`} className={`px-4 py-2 rounded-full text-sm font-medium border transition-all hover:scale-105 ${value.color}`}>
                {value.label} <span className="ml-2 opacity-60">{compounds.filter(c => c.category === key).length}</span>
              </Link>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCompounds.map((compound) => (
              <Link key={compound.id} href={`/compound/${compound.slug}`} className="group relative p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-green-500/50 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/5">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-green-400 transition-colors">{compound.name}</h3>
                      <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium border ${categoryInfo[compound.category]?.color}`}>
                        {categoryInfo[compound.category]?.label}
                      </span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[var(--text-tertiary)] group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-[var(--text-secondary)] mb-4 line-clamp-2">{compound.one_liner}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-2 py-1 rounded-lg text-xs font-medium ${researchInfo[compound.research_level]?.color}`}>{researchInfo[compound.research_level]?.label}</span>
                    <span className={`px-2 py-1 rounded-lg text-xs font-medium ${suppressionInfo[compound.suppression_level]?.color}`}>{suppressionInfo[compound.suppression_level]?.label}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/compounds" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] font-medium hover:border-green-500/50 transition-all">
              Browse All {compounds.length} Compounds <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section 
        ref={testimonialsSection.ref}
        className={`py-24 bg-[var(--bg-secondary)] transition-all duration-1000 ${testimonialsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-green-500 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Trusted by serious optimizers</h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-[var(--bg-primary)] rounded-3xl p-8 md:p-12 border border-[var(--border)]">
              <Quote className="absolute top-8 left-8 w-12 h-12 text-green-500/20" />
              <div className="relative">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl leading-relaxed mb-8">&ldquo;{testimonials[activeTestimonial].content}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold">
                    {testimonials[activeTestimonial].name[0]}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonials[activeTestimonial].name}</div>
                    <div className="text-sm text-[var(--text-tertiary)]">{testimonials[activeTestimonial].role}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)} className="p-2 rounded-full border border-[var(--border)] hover:border-green-500/50 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActiveTestimonial(i)} className={`w-2 h-2 rounded-full transition-all ${i === activeTestimonial ? 'w-8 bg-green-500' : 'bg-[var(--border)]'}`} />
                ))}
              </div>
              <button onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)} className="p-2 rounded-full border border-[var(--border)] hover:border-green-500/50 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section 
        ref={pricingSection.ref}
        className={`py-24 transition-all duration-1000 ${pricingSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-green-500 font-semibold text-sm uppercase tracking-wider">Pricing</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Invest in knowledge</h2>
            <p className="text-xl text-[var(--text-secondary)]">Less than a coffee per week for information that could save you from costly mistakes</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-3xl bg-[var(--bg-secondary)] border border-[var(--border)]">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <p className="text-[var(--text-secondary)] mb-6">Start exploring</p>
              <div className="mb-8"><span className="text-5xl font-bold">$0</span></div>
              <ul className="space-y-4 mb-8">
                {['Browse compound database', 'Basic overviews', 'All blog articles', 'Community access'].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[var(--text-secondary)]"><Check className="w-5 h-5 text-green-500" />{f}</li>
                ))}
              </ul>
              <Link href="/compounds" className="block w-full py-4 rounded-xl border border-[var(--border)] text-center font-medium hover:bg-[var(--bg-tertiary)] transition-colors">Get Started</Link>
            </div>

            <div className="relative p-8 rounded-3xl bg-gradient-to-b from-green-500/10 to-transparent border-2 border-green-500">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium">MOST POPULAR</div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-[var(--text-secondary)] mb-6">Full access</p>
              <div className="mb-8"><span className="text-5xl font-bold">$5</span><span className="text-[var(--text-tertiary)]">/month</span></div>
              <ul className="space-y-4 mb-8">
                {['Everything in Free', 'Full dosing protocols', 'Side effect guides', 'All stacks', 'Verified sources', 'Coach AI', 'Priority support', 'Cancel anytime'].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[var(--text-secondary)]"><Check className="w-5 h-5 text-green-500" />{f}</li>
                ))}
              </ul>
              <Link href="/auth" className="block w-full py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white text-center font-semibold hover:from-green-600 hover:to-emerald-600 transition-all">Get Pro Access</Link>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-[var(--text-tertiary)]"><Shield className="w-4 h-4 inline mr-2" />7-day money-back guarantee</p>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-green-500 font-semibold text-sm uppercase tracking-wider">Learn</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4">Free guides</h2>
            </div>
            <Link href="/blog" className="flex items-center gap-2 text-green-500 font-medium">All articles <ArrowRight className="w-5 h-5" /></Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border)] hover:border-green-500/50 transition-all hover:-translate-y-1">
                <span className="text-sm font-medium text-green-500">{post.category}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-green-400 transition-colors">{post.title}</h3>
                <p className="text-[var(--text-secondary)] line-clamp-2 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-sm text-[var(--text-tertiary)]"><Clock className="w-4 h-4" />{post.read_time} min</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-green-500/10 blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to optimize?</h2>
          <p className="text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
            Join thousands who stopped guessing and started knowing exactly what they&apos;re taking.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/auth" className="group flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all hover:scale-105 shadow-lg shadow-green-500/25">
              Get Pro Access <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/compounds" className="px-10 py-5 rounded-full border border-[var(--border)] text-lg font-medium hover:bg-[var(--bg-secondary)] transition-all">Browse Free</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
