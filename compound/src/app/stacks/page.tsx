'use client';

import Link from 'next/link';
import { ArrowLeft, Beaker, Lock } from 'lucide-react';
import { stacks } from '@/lib/data';
import { goalInfo } from '@/lib/types';

export default function StacksPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header */}
      <header className="border-b border-[var(--border)] sticky top-0 z-50 glass">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <Beaker className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">Compound</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Stacks</h1>
          <p className="text-[var(--text-secondary)]">Curated compound combinations for specific goals</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {stacks.map((stack) => (
            <div
              key={stack.id}
              className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">{goalInfo[stack.goal]?.icon}</span>
                <span className="text-sm font-medium text-[var(--accent-primary)]">
                  {goalInfo[stack.goal]?.label}
                </span>
              </div>
              
              <h2 className="text-xl font-semibold mb-2">{stack.name}</h2>
              <p className="text-[var(--text-secondary)] mb-4">{stack.description}</p>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-[var(--text-tertiary)]">{stack.duration}</span>
                <span className="text-[var(--text-tertiary)]">{stack.estimated_cost}</span>
              </div>

              <div className="mt-4 pt-4 border-t border-[var(--border)]">
                <div className="flex items-center gap-2 text-sm text-[var(--warning)]">
                  <Lock className="w-4 h-4" />
                  <span>Full protocol requires Pro</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-[var(--accent-muted)] border border-green-500/20 text-center">
          <h3 className="text-xl font-semibold mb-2">Unlock All Stacks</h3>
          <p className="text-[var(--text-secondary)] mb-4">
            Get detailed protocols, dosing schedules, and compound recommendations.
          </p>
          <Link 
            href="/auth"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-secondary)] transition-colors"
          >
            Get Pro - $5/month
          </Link>
        </div>
      </main>
    </div>
  );
}
