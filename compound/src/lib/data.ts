import { Compound, Stack } from './types';

export const compounds: Compound[] = [
  {
    id: '1',
    name: 'MK-677',
    slug: 'mk-677',
    category: 'peptide',
    subcategory: 'GH Secretagogue',
    one_liner: 'Oral growth hormone secretagogue - improves sleep, recovery, and body composition without injections.',
    overview: `MK-677 (Ibutamoren) is technically not a peptide but a non-peptide ghrelin mimetic that stimulates growth hormone release. Because it survives digestion, it can be taken orally - making it one of the most accessible GH-boosting compounds available.

It significantly improves sleep quality, enhances recovery, and supports muscle retention and fat loss over time. Users typically notice better sleep within the first week, with body composition changes becoming apparent over 2-3 months of consistent use.

MK-677 is popular because it requires no injections, does not suppress natural testosterone production, and provides real benefits for recovery and body composition.`,
    research_level: 'moderate',
    suppression_level: 'none',
    delivery_methods: ['oral'],
    dosing_standard: '15-25mg daily',
    dosing_timing: 'Before bed (to sleep through appetite spike and maximize GH release during sleep)',
    dosing_cycle_length: 'Can run indefinitely with breaks, or 8-12 weeks on, 4 weeks off',
    dosing_notes: 'Start at 15mg to assess appetite increase. Some users split dose AM/PM but nighttime dosing is most common. Monitor fasting glucose with long-term use.',
    goals: ['muscle', 'recovery', 'sleep', 'fat-loss'],
    side_effects: [
      'Increased appetite (significant first 2-3 weeks)',
      'Water retention and bloating initially',
      'Potential impact on insulin sensitivity with long-term use',
      'Lethargy in some users',
      'Numbness or tingling in hands (rare)'
    ],
    benefits: [
      { id: '1', title: 'Improved Sleep', description: 'Significantly enhances sleep quality and depth. Many users notice this within the first few days.', icon: 'moon', sort_order: 1 },
      { id: '2', title: 'Enhanced Recovery', description: 'Faster recovery between training sessions. Reduced soreness and improved tissue repair.', icon: 'refresh-cw', sort_order: 2 },
      { id: '3', title: 'Body Composition', description: 'Gradual fat loss and muscle retention over time. More noticeable at 2-3 months of use.', icon: 'trending-up', sort_order: 3 },
      { id: '4', title: 'No Injections', description: 'One of the few GH-boosting compounds that works orally. Simple daily capsule or liquid.', icon: 'pill', sort_order: 4 },
    ],
    warnings: [
      { id: '1', warning_type: 'health', text: 'May affect insulin sensitivity with long-term use. Monitor fasting glucose periodically.', severity: 'medium' },
      { id: '2', warning_type: 'legal', text: 'Not FDA approved for human use. Sold as a research chemical.', severity: 'low' },
    ],
    sources: [
      { id: '1', name: 'Swiss Chems', url: 'https://swisschems.is', is_affiliate: true, notes: 'Third-party tested' },
      { id: '2', name: 'Chemyo', url: 'https://chemyo.com', is_affiliate: true, notes: 'Good reputation' },
    ],
  },
  {
    id: '2',
    name: 'BPC-157',
    slug: 'bpc-157',
    category: 'peptide',
    subcategory: 'Recovery',
    one_liner: 'The healing peptide - accelerates tissue repair, gut health, and injury recovery.',
    overview: `BPC-157 (Body Protection Compound-157) is a peptide derived from a protein found in human gastric juice. It has remarkable healing properties across multiple tissue types - tendons, ligaments, muscle, gut lining, and even nerve tissue.

Athletes use it to recover from injuries faster, while others use it for gut healing (leaky gut, IBS, ulcers). It also has neuroprotective properties and can help regulate the dopamine system.

BPC-157 is one of the most versatile and well-tolerated peptides available, with an excellent safety profile in both animal and anecdotal human data.`,
    research_level: 'moderate',
    suppression_level: 'none',
    delivery_methods: ['injectable', 'oral'],
    dosing_standard: '250-500mcg per day',
    dosing_timing: 'Once daily or split AM/PM. Can inject near injury site for localized effect.',
    dosing_cycle_length: '4-8 weeks, or as needed for injury recovery',
    dosing_notes: 'Injectable is preferred for systemic effects. Oral is effective for gut-specific issues. Subcutaneous injection into belly fat or near injury site.',
    goals: ['recovery', 'performance'],
    side_effects: [
      'Generally very well-tolerated',
      'Mild nausea in some users initially',
      'Possible lightheadedness at higher doses',
    ],
    benefits: [
      { id: '1', title: 'Injury Healing', description: 'Accelerates recovery from tendon, ligament, and muscle injuries significantly.', icon: 'heart-pulse', sort_order: 1 },
      { id: '2', title: 'Gut Health', description: 'Repairs gut lining. Effective for leaky gut, IBS, ulcers, and digestive issues.', icon: 'shield', sort_order: 2 },
      { id: '3', title: 'Neuroprotection', description: 'Supports brain healing and dopamine system regulation.', icon: 'brain', sort_order: 3 },
    ],
    warnings: [
      { id: '1', warning_type: 'research', text: 'Most studies are animal-based. Limited human clinical trial data.', severity: 'medium' },
      { id: '2', warning_type: 'legal', text: 'Not FDA approved. Sold as a research chemical.', severity: 'low' },
    ],
    sources: [
      { id: '1', name: 'Peptide Sciences', url: 'https://peptidesciences.com', is_affiliate: true },
    ],
  },
  {
    id: '3',
    name: 'Semax',
    slug: 'semax',
    category: 'nootropic',
    subcategory: 'Neurotrophic',
    one_liner: 'Nasal nootropic - enhances focus, memory, and neuroprotection without stimulants.',
    overview: `Semax is a synthetic peptide derived from ACTH (adrenocorticotropic hormone) developed in Russia for cognitive enhancement and neuroprotection. It increases BDNF (brain-derived neurotrophic factor), which supports the growth and maintenance of neurons.

Users experience improved focus, mental clarity, better memory, and enhanced mood - all without the jitters, crash, or dependency associated with stimulants. Semax is delivered as a nasal spray, making it easy to use and fast-acting.

It has been used clinically in Russia for decades with an excellent safety profile.`,
    research_level: 'moderate',
    suppression_level: 'none',
    delivery_methods: ['nasal'],
    dosing_standard: '200-600mcg daily',
    dosing_timing: 'Split into 2-3 doses throughout the day. Morning and early afternoon.',
    dosing_cycle_length: '2-4 weeks on, 2 weeks off. Or as needed for cognitive demand.',
    dosing_notes: 'Nasal spray is standard delivery. Effects noticeable within 15-30 minutes. The acetylated version (NA-Semax Amidate) is stronger.',
    goals: ['cognition', 'mood', 'energy'],
    side_effects: [
      'Very well-tolerated',
      'Mild nasal irritation',
      'Headache if dehydrated',
    ],
    benefits: [
      { id: '1', title: 'Enhanced Focus', description: 'Clean, stimulant-free focus that lasts without a crash.', icon: 'target', sort_order: 1 },
      { id: '2', title: 'Memory Support', description: 'Improved memory formation and recall through BDNF elevation.', icon: 'brain', sort_order: 2 },
      { id: '3', title: 'Neuroprotection', description: 'Protects neurons from stress and supports long-term brain health.', icon: 'shield', sort_order: 3 },
    ],
    warnings: [
      { id: '1', warning_type: 'research', text: 'Most research is from Russia. Limited Western clinical trials.', severity: 'low' },
    ],
    sources: [
      { id: '1', name: 'Limitless Life Nootropics', url: 'https://limitlesslifenootropics.com', is_affiliate: true },
      { id: '2', name: 'CosmicNootropic', url: 'https://cosmicnootropic.com', is_affiliate: true },
    ],
  },
  {
    id: '4',
    name: 'RAD-140',
    slug: 'rad-140',
    category: 'sarm',
    subcategory: 'Muscle Building',
    one_liner: 'Powerful SARM - significant strength and muscle gains with notable testosterone suppression.',
    overview: `RAD-140 (Testolone) is one of the strongest SARMs available, producing steroid-like results in terms of strength and muscle gains. It binds to androgen receptors selectively, primarily targeting muscle and bone tissue.

Users experience rapid strength increases, a hard and dry look (no water retention), and noticeable muscle fullness. However, it is significantly suppressive to natural testosterone production - PCT is mandatory after a cycle.

Best suited for experienced users who understand the risks and have proper cycle support in place.`,
    research_level: 'moderate',
    suppression_level: 'significant',
    delivery_methods: ['oral'],
    dosing_standard: '10-20mg daily',
    dosing_timing: 'Once daily, morning. With or without food.',
    dosing_cycle_length: '6-8 weeks maximum',
    dosing_notes: 'Very suppressive - blood work before and after is strongly recommended. PCT with Nolvadex or Clomid required. Not for beginners.',
    goals: ['muscle', 'performance'],
    side_effects: [
      'Testosterone suppression (significant)',
      'Potential mood changes and aggression',
      'Hair shedding in those prone',
      'Elevated liver enzymes possible',
    ],
    benefits: [
      { id: '1', title: 'Rapid Strength Gains', description: 'Noticeable strength increases within the first two weeks.', icon: 'dumbbell', sort_order: 1 },
      { id: '2', title: 'Lean Muscle', description: 'Dry gains without water retention. Hard, full look.', icon: 'trending-up', sort_order: 2 },
    ],
    warnings: [
      { id: '1', warning_type: 'suppression', text: 'Significantly suppresses natural testosterone production. PCT is mandatory.', severity: 'high' },
      { id: '2', warning_type: 'health', text: 'May elevate liver enzymes. Blood work recommended.', severity: 'medium' },
      { id: '3', warning_type: 'legal', text: 'Banned by WADA. Not FDA approved.', severity: 'medium' },
    ],
    sources: [
      { id: '1', name: 'Swiss Chems', url: 'https://swisschems.is', is_affiliate: true },
      { id: '2', name: 'Chemyo', url: 'https://chemyo.com', is_affiliate: true },
    ],
  },
  {
    id: '5',
    name: 'Alpha-GPC',
    slug: 'alpha-gpc',
    category: 'support',
    subcategory: 'Cholinergic',
    one_liner: 'Bioavailable choline - fuels acetylcholine for memory, focus, and mind-muscle connection.',
    overview: `Alpha-GPC (Alpha-glycerophosphocholine) is the most bioavailable form of choline, a nutrient essential for brain function. It crosses the blood-brain barrier efficiently and provides raw material for acetylcholine synthesis.

Acetylcholine is the neurotransmitter responsible for memory, focus, learning, and the mind-muscle connection during training. Alpha-GPC pairs well with nootropics like Semax, amplifying their effects by ensuring adequate choline availability.

It is a foundational supplement that supports cognitive function and may also boost growth hormone output.`,
    research_level: 'well-researched',
    suppression_level: 'none',
    delivery_methods: ['oral'],
    dosing_standard: '300-600mg daily',
    dosing_timing: 'Morning or pre-workout',
    dosing_cycle_length: 'Can run indefinitely',
    dosing_notes: 'Take with nootropics to fuel their mechanisms. Higher doses before training for enhanced mind-muscle connection.',
    goals: ['cognition', 'performance'],
    side_effects: [
      'Generally very well-tolerated',
      'Headache if choline levels get too high',
      'GI upset in some users',
    ],
    benefits: [
      { id: '1', title: 'Cognitive Support', description: 'Provides building blocks for acetylcholine, the learning neurotransmitter.', icon: 'brain', sort_order: 1 },
      { id: '2', title: 'Mind-Muscle Connection', description: 'Enhanced focus and connection during training.', icon: 'target', sort_order: 2 },
    ],
    warnings: [],
    sources: [
      { id: '1', name: 'Nootropics Depot', url: 'https://nootropicsdepot.com', is_affiliate: true },
      { id: '2', name: 'Bulk Supplements', url: 'https://bulksupplements.com', is_affiliate: true },
    ],
  },
  {
    id: '6',
    name: 'Enclomiphene',
    slug: 'enclomiphene',
    category: 'pct',
    subcategory: 'Testosterone Support',
    one_liner: 'Raises natural testosterone - increases LH and FSH without shutting down production.',
    overview: `Enclomiphene is the active isomer of Clomiphene (Clomid) that selectively blocks estrogen receptors in the pituitary gland. This tricks the brain into producing more LH and FSH, which signals the testes to produce more testosterone.

Unlike TRT, it keeps your natural production active rather than replacing it. Users experience increased testosterone levels, improved energy, libido, and body composition.

Can be used as standalone testosterone optimization or as PCT after SARMs.`,
    research_level: 'well-researched',
    suppression_level: 'none',
    delivery_methods: ['oral'],
    dosing_standard: '12.5-25mg daily',
    dosing_timing: 'Once daily or every other day',
    dosing_cycle_length: 'Can run ongoing with monitoring, or 4-6 weeks for PCT',
    dosing_notes: 'Does not suppress natural production - it enhances it. Blood work to monitor testosterone, LH, FSH, and estradiol.',
    goals: ['hormones', 'muscle', 'energy'],
    side_effects: [
      'Vision disturbances (rare, usually reversible)',
      'Mood changes',
      'May lower IGF-1 slightly',
      'Hot flashes (rare)',
    ],
    benefits: [
      { id: '1', title: 'Increased Testosterone', description: 'Raises natural testosterone levels without replacement therapy.', icon: 'trending-up', sort_order: 1 },
      { id: '2', title: 'Maintains Fertility', description: 'Keeps natural production active, preserving fertility unlike TRT.', icon: 'shield', sort_order: 2 },
    ],
    warnings: [
      { id: '1', warning_type: 'health', text: 'Monitor for vision changes. Discontinue if visual disturbances occur.', severity: 'medium' },
    ],
    sources: [
      { id: '1', name: 'Amino Asylum', url: 'https://aminoasylum.com', is_affiliate: true },
    ],
  },
  {
    id: '7',
    name: 'Selank',
    slug: 'selank',
    category: 'nootropic',
    subcategory: 'Neurotrophic',
    one_liner: 'Anxiolytic nootropic - reduces anxiety and stress while supporting cognitive function.',
    overview: `Selank is a synthetic peptide developed alongside Semax in Russia. While Semax is more stimulating and focus-oriented, Selank is calming and anti-anxiety. It modulates GABA and serotonin systems, reducing anxiety and stress without sedation or cognitive impairment.

Users report feeling calmer, more emotionally stable, and better able to handle stressful situations. It also has mild cognitive benefits and can be stacked with Semax for balanced focus and calm.

Like Semax, it is delivered as a nasal spray with rapid onset of effects.`,
    research_level: 'moderate',
    suppression_level: 'none',
    delivery_methods: ['nasal'],
    dosing_standard: '200-400mcg daily',
    dosing_timing: 'Once daily or split into 2 doses. Can be used as needed for stressful situations.',
    dosing_cycle_length: '2-4 weeks on, 2 weeks off. Or as needed.',
    dosing_notes: 'Can be combined with Semax for balanced focus and calm. The acetylated version (NA-Selank Amidate) is more potent.',
    goals: ['cognition', 'mood'],
    side_effects: [
      'Very well-tolerated',
      'Mild nasal irritation',
      'Fatigue at higher doses (rare)',
    ],
    benefits: [
      { id: '1', title: 'Anxiety Reduction', description: 'Calms anxiety without sedation or cognitive impairment.', icon: 'heart', sort_order: 1 },
      { id: '2', title: 'Stress Resilience', description: 'Better able to handle stressful situations calmly.', icon: 'shield', sort_order: 2 },
      { id: '3', title: 'Mood Stabilization', description: 'More emotionally balanced and stable.', icon: 'smile', sort_order: 3 },
    ],
    warnings: [
      { id: '1', warning_type: 'interaction', text: 'May enhance effects of alcohol. Use caution.', severity: 'low' },
    ],
    sources: [
      { id: '1', name: 'Limitless Life Nootropics', url: 'https://limitlesslifenootropics.com', is_affiliate: true },
      { id: '2', name: 'CosmicNootropic', url: 'https://cosmicnootropic.com', is_affiliate: true },
    ],
  },
  {
    id: '8',
    name: 'Ipamorelin',
    slug: 'ipamorelin',
    category: 'peptide',
    subcategory: 'GH Secretagogue',
    one_liner: 'Clean growth hormone release - stimulates natural GH production without cortisol or prolactin spikes.',
    overview: `Ipamorelin is a growth hormone releasing peptide (GHRP) that stimulates the pituitary gland to produce more growth hormone. What makes it unique is its selectivity - it triggers GH release without significantly impacting cortisol, prolactin, or appetite.

This makes it one of the cleanest and most side-effect-free options for GH optimization. Users experience improved sleep, better recovery, gradual fat loss, and anti-aging benefits.

Typically stacked with CJC-1295 for synergistic effects.`,
    research_level: 'moderate',
    suppression_level: 'none',
    delivery_methods: ['injectable'],
    dosing_standard: '200-300mcg per injection',
    dosing_timing: 'Before bed for optimal GH release during sleep. Can also dose AM on empty stomach.',
    dosing_cycle_length: 'Can run ongoing. Common protocols: 5 days on 2 days off, or daily.',
    dosing_notes: 'Inject subcutaneously on empty stomach. Best combined with CJC-1295 (no DAC) in the same syringe.',
    goals: ['recovery', 'sleep', 'fat-loss', 'longevity'],
    side_effects: [
      'Very well-tolerated',
      'Possible water retention initially',
      'Tingling or numbness (rare)',
      'Headache (rare, usually from dehydration)',
    ],
    benefits: [
      { id: '1', title: 'Clean GH Release', description: 'Stimulates GH without affecting cortisol, prolactin, or appetite.', icon: 'zap', sort_order: 1 },
      { id: '2', title: 'Improved Sleep', description: 'Enhanced sleep quality and deeper rest.', icon: 'moon', sort_order: 2 },
      { id: '3', title: 'Anti-Aging', description: 'Supports skin, hair, and overall vitality.', icon: 'sparkles', sort_order: 3 },
    ],
    warnings: [
      { id: '1', warning_type: 'legal', text: 'Not FDA approved. Sold as a research chemical.', severity: 'low' },
    ],
    sources: [
      { id: '1', name: 'Peptide Sciences', url: 'https://peptidesciences.com', is_affiliate: true },
    ],
  },
  {
    id: '9',
    name: 'Dihexa',
    slug: 'dihexa',
    category: 'nootropic',
    subcategory: 'Neurotrophic',
    one_liner: 'Powerful cognitive enhancer - dramatically increases BDNF for memory and learning.',
    overview: `Dihexa is a small molecule derived from angiotensin IV that has shown remarkable cognitive-enhancing effects in research. It increases BDNF by orders of magnitude more than other nootropics, potentially creating new neural connections and enhancing synaptic plasticity.

Users report significant improvements in memory, learning capacity, and mental clarity. Because of its potency, it should be used in short cycles rather than continuously.

Limited human research exists, so it falls into the more experimental category.`,
    research_level: 'experimental',
    suppression_level: 'none',
    delivery_methods: ['oral', 'sublingual'],
    dosing_standard: '10-20mg daily',
    dosing_timing: 'Once daily, morning. Sublingual may improve absorption.',
    dosing_cycle_length: '2-4 weeks max, then extended break',
    dosing_notes: 'Start at lower dose (5-10mg) to assess tolerance. Very potent - more is not better.',
    goals: ['cognition'],
    side_effects: [
      'Limited human safety data',
      'Headache reported by some users',
      'Overstimulation possible',
      'Unknown long-term effects',
    ],
    benefits: [
      { id: '1', title: 'Powerful BDNF Increase', description: 'Dramatically elevates brain-derived neurotrophic factor.', icon: 'brain', sort_order: 1 },
      { id: '2', title: 'Enhanced Learning', description: 'Significant improvements in memory and learning capacity.', icon: 'book-open', sort_order: 2 },
    ],
    warnings: [
      { id: '1', warning_type: 'research', text: 'Very limited human research. Experimental compound.', severity: 'high' },
      { id: '2', warning_type: 'health', text: 'Unknown long-term effects. Use short cycles only.', severity: 'high' },
    ],
    sources: [
      { id: '1', name: 'Limitless Life Nootropics', url: 'https://limitlesslifenootropics.com', is_affiliate: true },
    ],
  },
  {
    id: '10',
    name: 'Pinealon',
    slug: 'pinealon',
    category: 'nootropic',
    subcategory: 'Neurotrophic',
    one_liner: 'Sleep and circadian peptide - supports melatonin production and brain health.',
    overview: `Pinealon is a short-chain peptide (just 3 amino acids) that targets the pineal gland. It supports natural melatonin production and helps regulate circadian rhythm.

Users report improved sleep quality, easier time falling asleep, and more refreshing rest. Because of its small size, it survives digestion and can be taken orally or sublingually.

Beyond sleep, it has neuroprotective properties and may support cognitive function through better rest and brain recovery.`,
    research_level: 'moderate',
    suppression_level: 'none',
    delivery_methods: ['oral', 'sublingual'],
    dosing_standard: '10-20mg daily',
    dosing_timing: 'Before bed',
    dosing_cycle_length: 'Can run ongoing or in cycles',
    dosing_notes: 'One of the few peptides that works orally due to its tiny size (tripeptide). Take 30-60 minutes before intended sleep time.',
    goals: ['sleep', 'longevity', 'cognition'],
    side_effects: [
      'Very well-tolerated',
      'Vivid dreams (some users)',
      'Morning grogginess if dosed too high',
    ],
    benefits: [
      { id: '1', title: 'Sleep Quality', description: 'Improves sleep onset and depth through natural melatonin support.', icon: 'moon', sort_order: 1 },
      { id: '2', title: 'Circadian Regulation', description: 'Helps normalize sleep-wake cycles.', icon: 'clock', sort_order: 2 },
      { id: '3', title: 'Neuroprotection', description: 'Supports brain health and recovery during sleep.', icon: 'brain', sort_order: 3 },
    ],
    warnings: [],
    sources: [
      { id: '1', name: 'CosmicNootropic', url: 'https://cosmicnootropic.com', is_affiliate: true },
    ],
  },
];

export const stacks: Stack[] = [
  {
    id: '1',
    name: 'No Needle Starter',
    slug: 'no-needle-starter',
    description: 'The best results you can get without injections. Covers physical recovery and cognitive performance for those not ready to pin.',
    goal: 'performance',
    duration: 'Ongoing',
    estimated_cost: '$100-150/month',
    what_to_expect: 'Week 1: Better sleep, appetite increase, sharper focus. Week 4-8: Improved recovery, body composition shifts, sustained mental performance.',
    warnings: 'Entirely oral and nasal. No suppression. No PCT. MK-677 may affect insulin sensitivity long-term.',
  },
  {
    id: '2',
    name: 'Cognitive Edge',
    slug: 'cognitive-edge',
    description: 'Sharpen focus, enhance memory, and protect your brain from the grind. Perfect for high-performers who need mental clarity without stimulant crashes.',
    goal: 'cognition',
    duration: 'Ongoing with cycles',
    estimated_cost: '$100-150/month',
    what_to_expect: 'Day 1: Noticeable focus improvement from Semax. Week 2-4: Cumulative benefits from support compounds. Ongoing: Sustained mental clarity and stress resilience.',
    warnings: 'All non-injectable (nasal and oral). No suppression. Can run long-term with cycling of peptides.',
  },
  {
    id: '3',
    name: 'Recovery Stack',
    slug: 'recovery-stack',
    description: 'Accelerate healing, reduce inflammation, and recover faster from training. Ideal for athletes dealing with injuries or accumulated wear and tear.',
    goal: 'recovery',
    duration: '8 weeks',
    estimated_cost: '$180-250',
    what_to_expect: 'Week 1-2: Improved sleep, possible water retention. Week 3-4: Noticeable reduction in joint and tendon pain. Week 5-8: Accumulated healing, better training capacity.',
    warnings: 'BPC-157 and TB-500 are injectable. MK-677 is oral. No testosterone suppression. No PCT needed.',
  },
];

export function getCompoundBySlug(slug: string): Compound | undefined {
  return compounds.find(c => c.slug === slug);
}

export function getCompoundsByCategory(category: string): Compound[] {
  return compounds.filter(c => c.category === category);
}

export function getCompoundsByGoal(goal: string): Compound[] {
  return compounds.filter(c => c.goals.includes(goal as any));
}

export function searchCompounds(query: string): Compound[] {
  const lowerQuery = query.toLowerCase();
  return compounds.filter(c => 
    c.name.toLowerCase().includes(lowerQuery) ||
    c.one_liner.toLowerCase().includes(lowerQuery) ||
    c.category.toLowerCase().includes(lowerQuery) ||
    c.goals.some(g => g.toLowerCase().includes(lowerQuery))
  );
}
