'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getCompoundBySlug } from '@/lib/data';

const categoryLabels: Record<string, string> = {
  peptide: 'Peptides',
  sarm: 'SARMs',
  hormone: 'Steroids & Hormones',
  nootropic: 'Nootropics',
  natural: 'Natural Supplements',
  pct: 'PCT & Hormone Support',
  support: 'Support Compounds',
};

const researchLabels: Record<string, { label: string; color: string }> = {
  'well-researched': { label: 'Well Researched', color: 'bg-green-500/10 text-green-400 border-green-500/20' },
  'moderate': { label: 'Moderate Research', color: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' },
  'limited': { label: 'Limited Research', color: 'bg-red-500/10 text-red-400 border-red-500/20' },
};

const suppressionLabels: Record<string, { label: string; color: string }> = {
  'none': { label: 'No Suppression', color: 'bg-green-500/10 text-green-400' },
  'mild': { label: 'Mild Suppression', color: 'bg-yellow-500/10 text-yellow-400' },
  'moderate': { label: 'Moderate Suppression', color: 'bg-orange-500/10 text-orange-400' },
  'significant': { label: 'Significant Suppression', color: 'bg-red-500/10 text-red-400' },
};

export default function CompoundPage() {
  const params = useParams();
  const slug = params.slug as string;
  const compound = getCompoundBySlug(slug);

  if (!compound) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Compound Not Found</h1>
          <Link href="/" className="text-blue-400 hover:underline">← Back to all compounds</Link>
        </div>
      </div>
    );
  }

  const research = researchLabels[compound.research_level];
  const suppression = suppressionLabels[compound.suppression_level];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Header */}
      <div className="border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
            ← Back to all compounds
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
            {compound.subcategory || categoryLabels[compound.category]}
          </span>
          <span className={`px-3 py-1 rounded-full text-sm border ${research.color}`}>
            {research.label}
          </span>
          <span className={`px-3 py-1 rounded-full text-sm ${suppression.color}`}>
            {suppression.label}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{compound.name}</h1>
        <p className="text-xl text-gray-400">{compound.one_liner}</p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-white">Overview</h2>
          <div className="prose prose-invert max-w-none">
            {compound.overview.split('\n\n').map((para, i) => (
              <p key={i} className="text-gray-300 mb-4 leading-relaxed">{para}</p>
            ))}
          </div>
        </section>

        {/* Dosing */}
        <section className="mb-12 p-6 bg-white/[0.02] border border-white/5 rounded-xl">
          <h2 className="text-xl font-semibold mb-4 text-white">Dosing Protocol</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-1">Standard Dose</h3>
              <p className="text-white font-medium">{compound.dosing_standard}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-1">Timing</h3>
              <p className="text-white">{compound.dosing_timing}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-1">Cycle Length</h3>
              <p className="text-white">{compound.dosing_cycle_length}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-1">Delivery</h3>
              <p className="text-white capitalize">{compound.delivery_methods.join(', ')}</p>
            </div>
          </div>
          {compound.dosing_notes && (
            <div className="mt-4 pt-4 border-t border-white/5">
              <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-1">Notes</h3>
              <p className="text-gray-300">{compound.dosing_notes}</p>
            </div>
          )}
        </section>

        {/* Benefits */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-white">Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {compound.benefits.map(benefit => (
              <div key={benefit.id} className="p-4 bg-green-500/5 border border-green-500/10 rounded-lg">
                <h3 className="font-medium text-green-400 mb-1">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Side Effects */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-white">Side Effects</h2>
          <ul className="space-y-2">
            {compound.side_effects.map((effect, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-300">
                <span className="text-yellow-500 mt-1">•</span>
                {effect}
              </li>
            ))}
          </ul>
        </section>

        {/* Warnings */}
        {compound.warnings.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4 text-white">Warnings</h2>
            <div className="space-y-3">
              {compound.warnings.map(warning => (
                <div 
                  key={warning.id} 
                  className={`p-4 rounded-lg border ${
                    warning.severity === 'high' 
                      ? 'bg-red-500/10 border-red-500/20' 
                      : warning.severity === 'medium'
                      ? 'bg-yellow-500/10 border-yellow-500/20'
                      : 'bg-gray-500/10 border-gray-500/20'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs uppercase tracking-wide ${
                      warning.severity === 'high' ? 'text-red-400' : 
                      warning.severity === 'medium' ? 'text-yellow-400' : 'text-gray-400'
                    }`}>
                      {warning.warning_type}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      warning.severity === 'high' ? 'bg-red-500/20 text-red-400' : 
                      warning.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      {warning.severity}
                    </span>
                  </div>
                  <p className="text-gray-300">{warning.text}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Studies */}
        {compound.studies && compound.studies.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4 text-white">Research Studies</h2>
            <div className="space-y-4">
              {compound.studies.map(study => (
                <a
                  key={study.id}
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-blue-500/5 border border-blue-500/10 rounded-lg hover:bg-blue-500/10 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded">
                      {study.study_type}
                    </span>
                    <span className="text-xs text-gray-500">{study.year}</span>
                  </div>
                  <h3 className="font-medium text-blue-400 mb-1">{study.title}</h3>
                  <p className="text-sm text-gray-400">{study.summary}</p>
                  <span className="text-xs text-blue-400 mt-2 inline-block">View Study →</span>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Sources */}
        {compound.sources.length > 0 && compound.sources[0].url !== '#' && (
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4 text-white">Where to Buy</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {compound.sources.filter(s => s.url !== '#').map(source => (
                <a
                  key={source.id}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/[0.02] border border-white/5 rounded-lg hover:bg-white/[0.04] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white">{source.name}</span>
                    {source.is_affiliate && (
                      <span className="text-xs text-gray-500">affiliate</span>
                    )}
                  </div>
                  {source.notes && (
                    <p className="text-sm text-gray-400 mt-1">{source.notes}</p>
                  )}
                </a>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Disclaimer */}
      <div className="border-t border-white/5 bg-red-500/5">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <p className="text-sm text-red-400/80">
            <strong>Disclaimer:</strong> This information is for educational purposes only. 
            {compound.category === 'hormone' && ' Anabolic steroids are Schedule III controlled substances.'}
            {compound.category === 'sarm' && ' SARMs are not approved for human use.'}
            {compound.category === 'peptide' && ' Many peptides are not FDA-approved for human use.'}
            {' '}Consult a healthcare provider before using any substances.
          </p>
        </div>
      </div>
    </div>
  );
}
