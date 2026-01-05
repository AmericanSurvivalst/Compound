'use client';

import Link from 'next/link';
import { ArrowLeft, Beaker, AlertTriangle } from 'lucide-react';

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header */}
      <header className="border-b border-[var(--border)] sticky top-0 z-50 glass">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-[var(--warning-muted)] flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-[var(--warning)]" />
          </div>
          <h1 className="text-3xl font-bold">Disclaimer</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-6">
          <section className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]">
            <h2 className="text-xl font-semibold mb-4">Educational Information Only</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Compound provides educational information about peptides, SARMs, nootropics, and other performance compounds. 
              This information is intended for educational and informational purposes only. It is not intended to be a substitute 
              for professional medical advice, diagnosis, or treatment.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]">
            <h2 className="text-xl font-semibold mb-4">Not Medical Advice</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              The content on Compound, including information provided by the AI assistant ("Coach"), does not constitute medical advice. 
              Always seek the advice of your physician or other qualified health provider with any questions you may have regarding 
              a medical condition or before starting any new supplement, compound, or treatment protocol.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]">
            <h2 className="text-xl font-semibold mb-4">Use at Your Own Risk</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Many compounds discussed on this platform are not FDA-approved for human use and are sold as research chemicals. 
              The use of these compounds carries inherent risks. You acknowledge that you use any information from Compound at your own risk 
              and that Compound, its creators, and affiliates are not responsible for any adverse effects or consequences resulting from 
              the use of any compounds discussed.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]">
            <h2 className="text-xl font-semibold mb-4">No Guarantees</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, 
              express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information 
              contained on this platform. Any reliance you place on such information is strictly at your own risk.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]">
            <h2 className="text-xl font-semibold mb-4">Third-Party Sources</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Compound may contain links to third-party websites or sources for purchasing compounds. These links are provided 
              for convenience only. We do not endorse, guarantee, or assume responsibility for the quality, safety, or legality 
              of products sold by third parties. Affiliate relationships may exist with some vendors.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]">
            <h2 className="text-xl font-semibold mb-4">Legal Compliance</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              It is your responsibility to understand and comply with all applicable laws and regulations regarding the purchase, 
              possession, and use of any compounds discussed on this platform. Laws vary by jurisdiction, and some compounds may 
              be restricted or prohibited in certain areas.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-[var(--warning-muted)] border border-yellow-500/30">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[var(--warning)]" />
              Important Notice
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              By using Compound, you acknowledge that you have read, understood, and agree to this disclaimer. 
              If you do not agree with any part of this disclaimer, please do not use this platform.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent-primary)] text-white font-medium hover:bg-[var(--accent-secondary)] transition-colors"
          >
            I Understand
          </Link>
        </div>
      </main>
    </div>
  );
}
