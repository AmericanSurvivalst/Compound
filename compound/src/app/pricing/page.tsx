'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check, X, Zap } from 'lucide-react';

const features = [
  { name: 'Browse compound database', free: true, pro: true },
  { name: 'Basic compound overviews', free: true, pro: true },
  { name: 'All blog articles', free: true, pro: true },
  { name: 'Category filtering', free: true, pro: true },
  { name: 'Full dosing protocols', free: false, pro: true },
  { name: 'Cycle length recommendations', free: false, pro: true },
  { name: 'Side effect management', free: false, pro: true },
  { name: 'Curated stacks', free: false, pro: true },
  { name: 'Source recommendations', free: false, pro: true },
  { name: 'Coach AI assistance', free: false, pro: true },
  { name: 'Priority support', free: false, pro: true },
  { name: 'Early access to new compounds', free: false, pro: true },
];

const faqs = [
  {
    q: 'Can I cancel anytime?',
    a: 'Yes, you can cancel your subscription at any time. You\'ll retain access until the end of your billing period.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards through Stripe. Your payment information is never stored on our servers.',
  },
  {
    q: 'Is my information private?',
    a: 'Absolutely. We don\'t sell your data. Your account information and browsing history are kept confidential.',
  },
  {
    q: 'Do you offer refunds?',
    a: 'If you\'re not satisfied within the first 7 days, contact us for a full refund. No questions asked.',
  },
  {
    q: 'How often is content updated?',
    a: 'We add new compounds monthly and update existing profiles as new research becomes available.',
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Free to browse. Pro for serious optimizers who want the full picture.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Free */}
          <div className="p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-2">Free</h2>
            <p className="text-[var(--text-secondary)] mb-6">Get started with the basics</p>
            <div className="mb-8">
              <span className="text-5xl font-bold">$0</span>
              <span className="text-[var(--text-tertiary)]">/forever</span>
            </div>
            <Link 
              href="/compounds"
              className="block w-full py-4 rounded-xl border border-[var(--border)] text-center font-medium hover:bg-[var(--bg-tertiary)] transition-colors mb-8"
            >
              Browse Free
            </Link>
            <ul className="space-y-4">
              {features.filter(f => f.free).map((feature) => (
                <li key={feature.name} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[var(--accent-primary)]" />
                  <span className="text-[var(--text-secondary)]">{feature.name}</span>
                </li>
              ))}
              {features.filter(f => !f.free).slice(0, 4).map((feature) => (
                <li key={feature.name} className="flex items-center gap-3 opacity-50">
                  <X className="w-5 h-5 text-[var(--text-tertiary)]" />
                  <span className="text-[var(--text-tertiary)]">{feature.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pro */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-green-500/10 to-transparent border-2 border-[var(--accent-primary)] relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1 rounded-full bg-[var(--accent-primary)] text-white text-sm font-medium">
              <Zap className="w-4 h-4" />
              MOST POPULAR
            </div>
            <h2 className="text-2xl font-bold mb-2">Pro</h2>
            <p className="text-[var(--text-secondary)] mb-6">Full access to everything</p>
            <div className="mb-8">
              <span className="text-5xl font-bold">$5</span>
              <span className="text-[var(--text-tertiary)]">/month</span>
            </div>
            <Link 
              href="/auth"
              className="block w-full py-4 rounded-xl bg-[var(--accent-primary)] text-white text-center font-medium hover:bg-[var(--accent-secondary)] transition-colors mb-8"
            >
              Get Pro Access
            </Link>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature.name} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[var(--accent-primary)]" />
                  <span className="text-[var(--text-secondary)]">{feature.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Comparison Table (Desktop) */}
        <div className="hidden lg:block mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Feature Comparison</h2>
          <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
            <table className="w-full">
              <thead className="bg-[var(--bg-secondary)]">
                <tr>
                  <th className="text-left py-4 px-6 font-medium">Feature</th>
                  <th className="text-center py-4 px-6 font-medium">Free</th>
                  <th className="text-center py-4 px-6 font-medium text-[var(--accent-primary)]">Pro</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, i) => (
                  <tr key={feature.name} className={i % 2 === 0 ? 'bg-[var(--bg-primary)]' : 'bg-[var(--bg-secondary)]'}>
                    <td className="py-4 px-6 text-[var(--text-secondary)]">{feature.name}</td>
                    <td className="py-4 px-6 text-center">
                      {feature.free ? (
                        <Check className="w-5 h-5 text-[var(--accent-primary)] mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-[var(--text-tertiary)] mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="w-5 h-5 text-[var(--accent-primary)] mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)]">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-[var(--text-secondary)]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 p-8 rounded-2xl bg-[var(--accent-muted)] border border-green-500/20">
          <h2 className="text-2xl font-bold mb-2">Ready to optimize?</h2>
          <p className="text-[var(--text-secondary)] mb-6">
            Join thousands making informed decisions about performance compounds.
          </p>
          <Link 
            href="/auth"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--accent-primary)] text-white font-medium hover:bg-[var(--accent-secondary)] transition-colors"
          >
            Get Pro Access
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
