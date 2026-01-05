'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, AlertTriangle, CheckCircle, Lock, Beaker } from 'lucide-react';
import { getCompoundBySlug } from '@/lib/data';
import { categoryInfo, researchInfo, suppressionInfo, deliveryInfo } from '@/lib/types';

export default function CompoundPage() {
  const params = useParams();
  const slug = params.slug as string;
  const compound = getCompoundBySlug(slug);

  if (!compound) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Compound Not Found</h1>
          <Link href="/" className="text-[var(--accent-primary)] hover:underline">
            ← Back to all compounds
          </Link>
        </div>
      </div>
    );
  }

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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${categoryInfo[compound.category]?.color || 'cat-support'}`}>
              {compound.subcategory || categoryInfo[compound.category]?.label}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm ${researchInfo[compound.research_level]?.color}`}>
              {researchInfo[compound.research_level]?.label}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm ${suppressionInfo[compound.suppression_level]?.color}`}>
              {suppressionInfo[compound.suppression_level]?.label}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{compound.name}</h1>
          <p className="text-xl text-[var(--text-secondary)]">{compound.one_liner}</p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <div className="prose prose-invert max-w-none">
            {compound.overview.split('\n\n').map((para, i) => (
              <p key={i} className="text-[var(--text-secondary)] mb-4 leading-relaxed">{para}</p>
            ))}
          </div>
        </section>

        {/* Dosing */}
        <section className="mb-12 p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]">
          <h2 className="text-xl font-semibold mb-6">Dosing Protocol</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm text-[var(--text-tertiary)] uppercase tracking-wide mb-1">Standard Dose</h3>
              <p className="text-[var(--text-primary)] font-medium">{compound.dosing_standard || 'See notes'}</p>
            </div>
            <div>
              <h3 className="text-sm text-[var(--text-tertiary)] uppercase tracking-wide mb-1">Timing</h3>
              <p className="text-[var(--text-primary)]">{compound.dosing_timing || 'See notes'}</p>
            </div>
            <div>
              <h3 className="text-sm text-[var(--text-tertiary)] uppercase tracking-wide mb-1">Cycle Length</h3>
              <p className="text-[var(--text-primary)]">{compound.dosing_cycle_length || 'Varies'}</p>
            </div>
            <div>
              <h3 className="text-sm text-[var(--text-tertiary)] uppercase tracking-wide mb-1">Delivery</h3>
              <div className="flex flex-wrap gap-2">
                {compound.delivery_methods.map((method) => (
                  <span key={method} className="px-2 py-1 rounded-md text-sm bg-[var(--bg-tertiary)]">
                    {deliveryInfo[method]?.icon} {deliveryInfo[method]?.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {compound.dosing_notes && (
            <div className="mt-6 pt-6 border-t border-[var(--border)]">
              <h3 className="text-sm text-[var(--text-tertiary)] uppercase tracking-wide mb-2">Notes</h3>
              <p className="text-[var(--text-secondary)]">{compound.dosing_notes}</p>
            </div>
          )}
        </section>

        {/* Benefits */}
        {compound.benefits && compound.benefits.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Benefits</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {compound.benefits.map((benefit) => (
                <div key={benefit.id} className="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <h3 className="font-medium text-green-400">{benefit.title}</h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Side Effects */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Side Effects</h2>
          <ul className="space-y-2">
            {compound.side_effects.map((effect, i) => (
              <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                <span className="text-[var(--warning)] mt-1">•</span>
                {effect}
              </li>
            ))}
          </ul>
        </section>

        {/* Warnings */}
        {compound.warnings && compound.warnings.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Warnings</h2>
            <div className="space-y-3">
              {compound.warnings.map((warning) => (
                <div 
                  key={warning.id}
                  className={`p-4 rounded-xl border ${
                    warning.severity === 'high' 
                      ? 'bg-red-500/10 border-red-500/30' 
                      : warning.severity === 'medium'
                      ? 'bg-yellow-500/10 border-yellow-500/30'
                      : 'bg-[var(--bg-tertiary)] border-[var(--border)]'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <AlertTriangle className={`w-4 h-4 ${
                      warning.severity === 'high' ? 'text-red-500' : 
                      warning.severity === 'medium' ? 'text-yellow-500' : 'text-[var(--text-tertiary)]'
                    }`} />
                    <span className="text-xs uppercase tracking-wide text-[var(--text-tertiary)]">
                      {warning.warning_type}
                    </span>
                  </div>
                  <p className="text-[var(--text-secondary)]">{warning.text}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Studies */}
        {compound.studies && compound.studies.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Research Studies</h2>
            <div className="space-y-4">
              {compound.studies.map((study) => (
                <a
                  key={study.id}
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-xl bg-blue-500/5 border border-blue-500/20 hover:bg-blue-500/10 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 text-xs rounded bg-blue-500/20 text-blue-400">
                      {study.study_type}
                    </span>
                    {study.year && (
                      <span className="text-xs text-[var(--text-tertiary)]">{study.year}</span>
                    )}
                  </div>
                  <h3 className="font-medium text-blue-400 mb-1">{study.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{study.summary}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-blue-400 mt-2">
                    View Study <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Sources (Pro Feature Teaser) */}
        {compound.sources && compound.sources.length > 0 && compound.sources[0].url !== '#' && (
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Where to Buy</h2>
            <div className="p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)]">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-5 h-5 text-[var(--warning)]" />
                <span className="text-[var(--text-secondary)]">Unlock verified sources with Pro</span>
              </div>
              <Link 
                href="/auth"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-secondary)] transition-colors"
              >
                Get Pro - $5/mo
              </Link>
            </div>
          </section>
        )}
      </main>

      {/* Disclaimer Footer */}
      <footer className="border-t border-[var(--border)] bg-red-500/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-sm text-red-400/80">
            <strong>Disclaimer:</strong> This information is for educational purposes only.
            {compound.category === 'hormone' && ' Anabolic steroids are Schedule III controlled substances.'}
            {compound.category === 'sarm' && ' SARMs are not approved for human use.'}
            {compound.category === 'peptide' && ' Many peptides are not FDA-approved for human use.'}
            {' '}Consult a healthcare provider before using any compounds.
          </p>
        </div>
      </footer>
    </div>
  );
}
