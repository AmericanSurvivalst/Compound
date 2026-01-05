'use client';

import { useState } from 'react';
import { Search, Dumbbell, Brain, Heart, Flame, Moon, Zap, MessageCircle, ChevronRight, Beaker, Pill, Sparkles } from 'lucide-react';
import { compounds, stacks } from '@/lib/data';
import { categoryInfo, goalInfo, researchInfo, suppressionInfo, deliveryInfo } from '@/lib/types';
import Link from 'next/link';

const categories = [
  { id: 'peptide', label: 'Peptides', icon: Beaker, description: 'Healing, recovery, GH optimization' },
  { id: 'sarm', label: 'SARMs', icon: Dumbbell, description: 'Muscle building, strength' },
  { id: 'nootropic', label: 'Nootropics', icon: Brain, description: 'Focus, memory, cognition' },
  { id: 'support', label: 'Support', icon: Pill, description: 'Foundational supplements' },
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
  const [showCoach, setShowCoach] = useState(false);

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
              <button 
                onClick={() => setShowCoach(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-muted)] text-[var(--accent-primary)] hover:bg-green-500/20 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Ask Coach
              </button>
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
              Research-backed information with AI-powered guidance.
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
              All
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
            {filteredCompounds.map((compound) => (
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
                    <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium border ${categoryInfo[compound.category].color}`}>
                      {categoryInfo[compound.category].label}
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[var(--text-tertiary)] group-hover:text-[var(--accent-primary)] group-hover:translate-x-1 transition-all" />
                </div>
                
                <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2">
                  {compound.one_liner}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className={`px-2 py-1 rounded-md text-xs ${researchInfo[compound.research_level].color}`}>
                    {researchInfo[compound.research_level].label}
                  </span>
                  <span className={`px-2 py-1 rounded-md text-xs ${suppressionInfo[compound.suppression_level].color}`}>
                    {suppressionInfo[compound.suppression_level].label}
                  </span>
                  {compound.delivery_methods.map((method) => (
                    <span key={method} className="px-2 py-1 rounded-md text-xs bg-[var(--bg-tertiary)] text-[var(--text-secondary)]">
                      {deliveryInfo[method].icon} {deliveryInfo[method].label}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          
          {filteredCompounds.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[var(--text-secondary)]">No compounds found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Coach Button (Mobile) */}
      <button
        onClick={() => setShowCoach(true)}
        className="md:hidden fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[var(--accent-primary)] text-white shadow-lg shadow-green-500/25 flex items-center justify-center hover:scale-105 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Coach Modal */}
      {showCoach && (
        <CoachModal onClose={() => setShowCoach(false)} />
      )}

      {/* Disclaimer Footer */}
      <footer className="border-t border-[var(--border)] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-[var(--text-tertiary)] text-center">
            Compound provides educational information only. Not medical advice. All compounds are used at your own risk. 
            Consult a healthcare provider before starting any new supplement or compound.{' '}
            <Link href="/disclaimer" className="underline hover:text-[var(--text-secondary)]">
              Full Disclaimer
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}

function CoachModal({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([
    { role: 'assistant', content: "Hey, I'm Coach. I can help you find the right compounds for your goals, explain how things work, or answer questions about dosing and protocols. What are you looking to accomplish?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    // Simulate AI response (in production, this would call the Claude API)
    setTimeout(() => {
      const response = generateCoachResponse(userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border)] shadow-2xl max-h-[80vh] flex flex-col animate-in">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[var(--accent-muted)] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[var(--accent-primary)]" />
            </div>
            <div>
              <h3 className="font-semibold">Coach</h3>
              <p className="text-xs text-[var(--text-tertiary)]">AI-powered guidance</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-[var(--bg-tertiary)] rounded-lg transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] px-4 py-3 ${msg.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-coach'}`}>
                <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="chat-bubble-coach px-4 py-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-[var(--accent-primary)] typing-dot" />
                  <div className="w-2 h-2 rounded-full bg-[var(--accent-primary)] typing-dot" />
                  <div className="w-2 h-2 rounded-full bg-[var(--accent-primary)] typing-dot" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-[var(--border)]">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask Coach anything..."
              className="flex-1 px-4 py-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="px-4 py-3 rounded-xl bg-[var(--accent-primary)] text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--accent-secondary)] transition-colors"
            >
              Send
            </button>
          </div>
          <p className="text-xs text-[var(--text-tertiary)] mt-2 text-center">
            Coach provides educational information, not medical advice.
          </p>
        </div>
      </div>
    </div>
  );
}

function generateCoachResponse(query: string): string {
  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes('no needle') || lowerQuery.includes('no injection') || lowerQuery.includes('oral')) {
    return `For no-needle options, your best bets are:

**MK-677** - Oral GH secretagogue. Improves sleep, recovery, and body composition. Take 15-25mg before bed.

**Semax** - Nasal spray nootropic. Enhances focus and memory without stimulants. 200-600mcg daily.

**Alpha-GPC** - Oral choline source. Supports cognitive function and mind-muscle connection. 300-600mg daily.

**Enclomiphene** - Oral testosterone optimization. Raises natural T without shutting you down. 12.5-25mg daily.

None of these suppress testosterone or require PCT. Want me to go deeper on any of these?`;
  }
  
  if (lowerQuery.includes('muscle') || lowerQuery.includes('bigger') || lowerQuery.includes('strength')) {
    return `For muscle and strength, it depends on what you're willing to do:

**No suppression, no needles:**
- MK-677 + Enclomiphene - Elevates GH and natural testosterone

**Willing to inject, no suppression:**
- Add Ipamorelin + CJC-1295 for more GH optimization
- BPC-157 for recovery and injury prevention

**Willing to accept suppression:**
- RAD-140 or LGD-4033 (SARMs) - Real muscle gains but you'll need PCT

What's your situation - any constraints I should know about?`;
  }
  
  if (lowerQuery.includes('focus') || lowerQuery.includes('cognitive') || lowerQuery.includes('brain') || lowerQuery.includes('memory')) {
    return `For cognitive enhancement, here's the stack I'd recommend:

**Daily foundation:**
- Semax 200-300mcg nasal spray (morning + early afternoon)
- Alpha-GPC 300-600mg (morning)

**For stress/anxiety:**
- Add Selank 200-400mcg nasal spray

**For deep work periods:**
- Dihexa 10-15mg sublingual (short cycles only, 2-4 weeks)

**Long-term brain health:**
- Lion's Mane 500-1000mg daily

All of these are non-injectable and have no hormonal effects. The Semax + Alpha-GPC combo is a great starting point.`;
  }
  
  if (lowerQuery.includes('sleep') || lowerQuery.includes('recovery')) {
    return `For sleep and recovery:

**MK-677** is the foundation - 15-25mg before bed. Most users notice improved sleep within the first week. It raises GH which pulses during deep sleep.

**Pinealon** - Oral peptide that supports natural melatonin production. 10-20mg before bed.

**If you're willing to inject:**
- Ipamorelin + CJC-1295 before bed amplifies GH release
- BPC-157 accelerates tissue repair while you sleep

The MK-677 + Pinealon combo is solid for sleep without needles.`;
  }
  
  return `Good question. To give you the best recommendation, I need to understand a few things:

1. **What's your main goal?** (muscle, cognitive performance, recovery, fat loss, etc.)

2. **Any constraints?** (no needles, no suppression, budget, etc.)

3. **Experience level?** (first time with compounds, or have you used things before?)

Once I know that, I can point you to exactly what makes sense for your situation.`;
}
