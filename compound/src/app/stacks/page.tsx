'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Lock, ChevronRight } from 'lucide-react';
import { stacks } from '@/lib/data';
import { goalInfo } from '@/lib/types';

export default function StacksPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Stacks</h1>
          <p className="text-lg text-[var(--text-secondary)]">
            Curated compound combinations designed for specific goals. 
            Each stack includes dosing, timing, and what to expect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {stacks.map((stack) => (
            <div
              key={stack.id}
              className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-500/10 to-transparent rounded-bl-full" />
              
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{goalInfo[stack.goal]?.icon}</span>
                  <span className="text-sm font-medium text-[var(--accent-primary)]">
                    {goalInfo[stack.goal]?.label}
                  </span>
                </div>
                
                <h2 className="text-xl font-semibold mb-2">{stack.name}</h2>
                <p className="text-[var(--text-secondary)] mb-4">{stack.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-[var(--text-tertiary)] mb-4">
                  <span>{stack.duration}</span>
                  <span>•</span>
                  <span>{stack.estimated_cost}</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                  <div className="flex items-center gap-2 text-sm text-[var(--warning)]">
                    <Lock className="w-4 h-4" />
                    <span>Full protocol with Pro</span>
                  </div>
                  <Link 
                    href="/auth"
                    className="flex items-center gap-1 text-sm text-[var(--accent-primary)] hover:underline"
                  >
                    Unlock <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20 text-center">
          <h2 className="text-2xl font-bold mb-2">Get Full Stack Protocols</h2>
          <p className="text-[var(--text-secondary)] mb-6 max-w-xl mx-auto">
            Unlock detailed compound lists, dosing schedules, timing recommendations, 
            and expected results for each stack.
          </p>
          <Link 
            href="/auth"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--accent-primary)] text-white font-medium hover:bg-[var(--accent-secondary)] transition-colors"
          >
            Get Pro Access - $5/month
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
