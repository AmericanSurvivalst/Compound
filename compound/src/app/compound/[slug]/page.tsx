'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, AlertTriangle, CheckCircle, Info, Beaker, Clock, Target, BookOpen, ShoppingCart, MessageCircle } from 'lucide-react';
import { getCompoundBySlug, compounds } from '@/lib/data';
import { categoryInfo, researchInfo, suppressionInfo, deliveryInfo, goalInfo } from '@/lib/types';

export default function CompoundPage() {
  const params = useParams();
  const slug = params.slug as string;
  const compound = getCompoundBySlug(slug);

  if (!compound) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Compound not found</h1>
          <Link href="/" className="text-[var(--accent-primary)] hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  const relatedCompounds = compounds
    .filter(c => c.id !== compound.id && c.goals.some(g => compound.goals.includes(g)))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header */}
      <header className="border-b border-[var(--border)] sticky top-0 z-50 glass">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <Beaker className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold tracking-tight">Compound</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero */}
        <div className="mb-8 animate-in">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${categoryInfo[compound.category].color}`}>
              {categoryInfo[compound.category].label}
            </span>
            {compound.subcategory && (
              <span className="text-[var(--text-tertiary)]">{compound.subcategory}</span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{compound.name}</h1>
          <p className="text-xl text-[var(--text-secondary)] mb-6">{compound.one_liner}</p>
          
          {/* Status Badges */}
          <div className="flex flex-wrap gap-3">
            <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${researchInfo[compound.research_level].color}`}>
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">{researchInfo[compound.research_level].label}</span>
            </div>
            <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${suppressionInfo[compound.suppression_level].color}`}>
              {compound.suppression_level === 'none' ? <CheckCircle className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
              <span className="text-sm font-medium">{suppressionInfo[compound.suppression_level].label}</span>
            </div>
            {compound.delivery_methods.map((method) => (
              <div key={method} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--bg-tertiary)]">
                <span>{deliveryInfo[method].icon}</span>
                <span className="text-sm font-medium text-[var(--text-secondary)]">{deliveryInfo[method].label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-[var(--accent-primary)]" />
                Overview
              </h2>
              <div className="prose prose-invert max-w-none">
                {compound.overview.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-[var(--text-secondary)] mb-4 last:mb-0 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Benefits */}
            {compound.benefits && compound.benefits.length > 0 && (
              <section className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Benefits
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {compound.benefits.map((benefit) => (
                    <div key={benefit.id} className="p-4 rounded-xl bg-[var(--bg-tertiary)]">
                      <h3 className="font-medium mb-1">{benefit.title}</h3>
                      <p className="text-sm text-[var(--text-secondary)]">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Warnings */}
            {compound.warnings && compound.warnings.length > 0 && (
              <section className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-[var(--warning)]" />
                  Warnings
                </h2>
                <div className="space-y-3">
                  {compound.warnings.map((warning) => (
                    <div 
                      key={warning.id} 
                      className={`p-4 rounded-xl border ${
                        warning.severity === 'high' 
                          ? 'bg-[var(--danger-muted)] border-red-500/30' 
                          : warning.severity === 'medium'
                          ? 'bg-[var(--warning-muted)] border-yellow-500/30'
                          : 'bg-[var(--bg-tertiary)] border-[var(--border)]'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <AlertTriangle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          warning.severity === 'high' ? 'text-red-500' : 
                          warning.severity === 'medium' ? 'text-yellow-500' : 'text-[var(--text-tertiary)]'
                        }`} />
                        <div>
                          <span className="text-xs font-medium uppercase tracking-wider text-[var(--text-tertiary)] block mb-1">
                            {warning.warning_type}
                          </span>
                          <p className="text-sm">{warning.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Side Effects */}
            {compound.side_effects && compound.side_effects.length > 0 && (
              <section className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]">
                <h2 className="text-lg font-semibold mb-4">Possible Side Effects</h2>
                <ul className="space-y-2">
                  {compound.side_effects.map((effect, i) => (
                    <li key={i} className="flex items-start gap-2 text-[var(--text-secondary)]">
                      <span className="text-[var(--text-tertiary)] mt-1">•</span>
                      {effect}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Sources */}
            {compound.sources && compound.sources.length > 0 && (
              <section className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-[var(--accent-primary)]" />
                  Where to Buy
                </h2>
                <p className="text-sm text-[var(--text-tertiary)] mb-4">
                  We only recommend sources with third-party testing and verified quality.
                </p>
                <div className="space-y-3">
                  {compound.sources.map((source) => (
                    <a
                      key={source.id}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-xl bg-[var(--bg-tertiary)] hover:bg-[var(--bg-elevated)] transition-colors group"
                    >
                      <div>
                        <span className="font-medium group-hover:text-[var(--accent-primary)] transition-colors">
                          {source.name}
                        </span>
                        {source.notes && (
                          <span className="text-sm text-[var(--text-tertiary)] ml-2">
                            — {source.notes}
                          </span>
                        )}
                      </div>
                      <ExternalLink className="w-4 h-4 text-[var(--text-tertiary)] group-hover:text-[var(--accent-primary)] transition-colors" />
                    </a>
                  ))}
                </div>
                {compound.sources.some(s => s.is_affiliate) && (
                  <p className="text-xs text-[var(--text-tertiary)] mt-4">
                    * We may earn a commission on purchases. This helps support Compound.
                  </p>
                )}
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Dosing Card */}
            <div className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] sticky top-24">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-[var(--accent-primary)]" />
                How to Use
              </h2>
              
              {compound.dosing_standard && (
                <div className="mb-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-[var(--text-tertiary)]">Dose</span>
                  <p className="text-lg font-medium mt-1">{compound.dosing_standard}</p>
                </div>
              )}
              
              {compound.dosing_timing && (
                <div className="mb-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-[var(--text-tertiary)]">Timing</span>
                  <p className="text-[var(--text-secondary)] mt-1">{compound.dosing_timing}</p>
                </div>
              )}
              
              {compound.dosing_cycle_length && (
                <div className="mb-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-[var(--text-tertiary)]">Cycle Length</span>
                  <p className="text-[var(--text-secondary)] mt-1">{compound.dosing_cycle_length}</p>
                </div>
              )}
              
              {compound.dosing_notes && (
                <div className="p-3 rounded-lg bg-[var(--bg-tertiary)] mt-4">
                  <p className="text-sm text-[var(--text-secondary)]">{compound.dosing_notes}</p>
                </div>
              )}

              {/* Goals */}
              <div className="mt-6 pt-6 border-t border-[var(--border)]">
                <span className="text-xs font-medium uppercase tracking-wider text-[var(--text-tertiary)]">Good For</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {compound.goals.map((goal) => (
                    <span key={goal} className="px-2 py-1 rounded-md text-xs bg-[var(--bg-tertiary)] text-[var(--text-secondary)]">
                      {goalInfo[goal].icon} {goalInfo[goal].label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ask Coach */}
              <button className="w-full mt-6 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[var(--accent-muted)] text-[var(--accent-primary)] hover:bg-green-500/20 transition-colors">
                <MessageCircle className="w-5 h-5" />
                Ask Coach about {compound.name}
              </button>
            </div>

            {/* Related Compounds */}
            {relatedCompounds.length > 0 && (
              <div className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]">
                <h2 className="text-lg font-semibold mb-4">Stacks Well With</h2>
                <div className="space-y-3">
                  {relatedCompounds.map((related) => (
                    <Link
                      key={related.id}
                      href={`/compound/${related.slug}`}
                      className="block p-3 rounded-xl bg-[var(--bg-tertiary)] hover:bg-[var(--bg-elevated)] transition-colors"
                    >
                      <span className="font-medium">{related.name}</span>
                      <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${categoryInfo[related.category].color}`}>
                        {categoryInfo[related.category].label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Disclaimer Footer */}
      <footer className="border-t border-[var(--border)] py-8 mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-[var(--text-tertiary)] text-center">
            Compound provides educational information only. Not medical advice. All compounds are used at your own risk. 
            Consult a healthcare provider before starting any new supplement or compound.
          </p>
        </div>
      </footer>
    </div>
  );
}
