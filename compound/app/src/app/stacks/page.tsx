'use client';

import Link from 'next/link';
import { ArrowLeft, Beaker, Clock, DollarSign, AlertTriangle, ChevronRight } from 'lucide-react';
import { stacks, compounds } from '@/lib/data';
import { goalInfo, categoryInfo } from '@/lib/types';

export default function StacksPage() {
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

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Curated Stacks</h1>
          <p className="text-lg text-[var(--text-secondary)]">
            Pre-built protocols for common goals. Each stack includes compounds, dosing, timing, and what to expect.
          </p>
        </div>

        <div className="space-y-6">
          {stacks.map((stack) => (
            <div key={stack.id} className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold">{stack.name}</h2>
                    <span className="px-3 py-1 rounded-full text-sm bg-[var(--accent-muted)] text-[var(--accent-primary)]">
                      {goalInfo[stack.goal].icon} {goalInfo[stack.goal].label}
                    </span>
                  </div>
                  <p className="text-[var(--text-secondary)]">{stack.description}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {stack.duration && (
                  <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                    <Clock className="w-4 h-4 text-[var(--text-tertiary)]" />
                    <span className="text-sm">{stack.duration}</span>
                  </div>
                )}
                {stack.estimated_cost && (
                  <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                    <DollarSign className="w-4 h-4 text-[var(--text-tertiary)]" />
                    <span className="text-sm">{stack.estimated_cost}</span>
                  </div>
                )}
              </div>

              {/* Compounds in Stack */}
              <div className="mb-6">
                <h3 className="text-sm font-medium uppercase tracking-wider text-[var(--text-tertiary)] mb-3">
                  Compounds in this stack
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {getStackCompounds(stack.slug).map((compound) => (
                    <Link
                      key={compound.id}
                      href={`/compound/${compound.slug}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-[var(--bg-tertiary)] hover:bg-[var(--bg-elevated)] transition-colors group"
                    >
                      <div>
                        <span className="font-medium group-hover:text-[var(--accent-primary)] transition-colors">
                          {compound.name}
                        </span>
                        <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${categoryInfo[compound.category].color}`}>
                          {categoryInfo[compound.category].label}
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[var(--text-tertiary)] group-hover:text-[var(--accent-primary)] transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* What to Expect */}
              {stack.what_to_expect && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium uppercase tracking-wider text-[var(--text-tertiary)] mb-2">
                    What to Expect
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm">{stack.what_to_expect}</p>
                </div>
              )}

              {/* Warnings */}
              {stack.warnings && (
                <div className="p-4 rounded-xl bg-[var(--warning-muted)] border border-yellow-500/30">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[var(--text-secondary)]">{stack.warnings}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-8 mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-[var(--text-tertiary)] text-center">
            Compound provides educational information only. Not medical advice. All compounds are used at your own risk.
          </p>
        </div>
      </footer>
    </div>
  );
}

function getStackCompounds(stackSlug: string) {
  // Map stack slugs to compound slugs
  const stackMappings: Record<string, string[]> = {
    'no-needle-starter': ['mk-677', 'semax', 'alpha-gpc'],
    'cognitive-edge': ['semax', 'selank', 'alpha-gpc'],
    'recovery-stack': ['bpc-157', 'mk-677', 'ipamorelin'],
  };

  const compoundSlugs = stackMappings[stackSlug] || [];
  return compounds.filter(c => compoundSlugs.includes(c.slug));
}
