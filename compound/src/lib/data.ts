import { Compound, Stack, BlogPost } from './types';

// ============================================
// COMPLETE COMPOUND DATABASE
// Organized by Category
// ============================================

export const compounds: Compound[] = [

  // ============================================
  // PEPTIDES - GH SECRETAGOGUES
  // ============================================
  {
    id: 'p1',
    name: 'MK-677 (Ibutamoren)',
    slug: 'mk-677',
    category: 'peptide',
    subcategory: 'GH Secretagogue',
    one_liner: 'Oral growth hormone secretagogue - improves sleep, recovery, and body composition without injections.',
    overview: `MK-677 (Ibutamoren) is a non-peptide ghrelin mimetic that stimulates growth hormone release by mimicking the hunger hormone ghrelin. Unlike injectable GH secretagogues, MK-677 survives digestion and can be taken orally.

It significantly increases GH and IGF-1 levels, improves sleep quality (particularly deep sleep), enhances recovery, and supports muscle retention and fat loss over time. Users typically notice better sleep within the first week, with body composition changes becoming apparent over 2-3 months.

MK-677 does not suppress natural testosterone production, making it one of the safer performance compounds available. However, it can impact insulin sensitivity with long-term use, so fasting glucose should be monitored.`,
    research_level: 'moderate',
    suppression_level: 'none',
    delivery_methods: ['oral'],
    dosing_standard: '15-25mg daily',
    dosing_timing: 'Before bed (sleep through appetite spike, maximize GH release during sleep)',
    dosing_cycle_length: '8-12 weeks on, 4 weeks off, or continuous with monitoring',
    dosing_notes: 'Start at 10-15mg to assess appetite increase. Monitor fasting glucose every 8-12 weeks with long-term use.',
    goals: ['muscle', 'recovery', 'sleep', 'fat-loss'],
    side_effects: ['Increased appetite (significant first 2-3 weeks)', 'Water retention initially', 'Potential insulin sensitivity impact long-term', 'Lethargy in some users', 'Numbness/tingling in hands (rare)'],
    benefits: [
      { id: '1', title: 'Improved Sleep', description: 'Significantly enhances sleep quality and depth, particularly REM and deep sleep.', icon: 'moon', sort_order: 1 },
      { id: '2', title: 'Enhanced Recovery', description: 'Faster recovery between training sessions through elevated GH and IGF-1.', icon: 'refresh-cw', sort_order: 2 },
      { id: '3', title: 'Body Composition', description: 'Gradual fat loss and muscle retention over 2-3+ months.', icon: 'trending-up', sort_order: 3 },
      { id: '4', title: 'No Injections', description: 'One of few GH-boosting compounds that works orally.', icon: 'pill', sort_order: 4 },
    ],
    warnings: [
      { id: '1', warning_type: 'health', text: 'May affect insulin sensitivity with long-term use. Monitor fasting glucose.', severity: 'medium' },
      { id: '2', warning_type: 'legal', text: 'Not FDA approved. Sold as research chemical.', severity: 'low' },
    ],
    studies: [
      { id: '1', title: 'MK-677 Effects on GH and Body Composition', summary: 'Significantly increased GH and IGF-1 in healthy adults with favorable safety.', link: 'https://pubmed.ncbi.nlm.nih.gov/9467534/', study_type: 'human', year: 1998 },
      { id: '2', title: 'MK-677 Improves Sleep Quality', summary: '50% increase in stage IV sleep and 20% increase in REM sleep.', link: 'https://pubmed.ncbi.nlm.nih.gov/9349662/', study_type: 'human', year: 1997 },
    ],
    sources: [{ id: '1', name: 'Swiss Chems', url: 'https://swisschems.is', is_affiliate: true }, { id: '2', name: 'Chemyo', url: 'https://chemyo.com', is_affiliate: true }],
  },
  {
    id: 'p2',
    name: 'Ipamorelin',
    slug: 'ipamorelin',
    category: 'peptide',
    subcategory: 'GH Secretagogue',
    one_liner: 'Clean GH release - stimulates natural growth hormone without cortisol or prolactin spikes.',
    overview: `Ipamorelin is a growth hormone releasing peptide (GHRP) that stimulates the pituitary gland to produce more growth hormone. What makes it unique is its selectivity - it triggers GH release without significantly impacting cortisol, prolactin, or appetite.

This selectivity makes it one of the cleanest and most side-effect-free options for GH optimization. Users experience improved sleep, better recovery, gradual fat loss, and anti-aging benefits.

Typically stacked with CJC-1295 (no DAC) for synergistic effects - Ipamorelin triggers the pulse, CJC-1295 extends it.`,
    research_level: 'moderate',
    suppression_level: 'none',
    delivery_methods: ['injectable'],
    dosing_standard: '200-300mcg per injection',
    dosing_timing: 'Before bed on empty stomach. Can also dose morning.',
    dosing_cycle_length: 'Ongoing. Common: 5 days on, 2 days off.',
    dosing_notes: 'Inject subcutaneously on empty stomach (food blunts GH release). Stack with CJC-1295 no DAC.',
    goals: ['recovery', 'sleep', 'fat-loss', 'longevity'],
    side_effects: ['Very well-tolerated', 'Possible water retention initially', 'Tingling/numbness (rare)', 'Headache (rare)'],
    benefits: [
      { id: '1', title: 'Selective GH Release', description: 'Stimulates GH without affecting cortisol, prolactin, or hunger.', icon: 'zap', sort_order: 1 },
      { id: '2', title: 'Improved Sleep', description: 'Enhanced sleep quality through optimized GH pulsing.', icon: 'moon', sort_order: 2 },
      { id: '3', title: 'Anti-Aging', description: 'Supports skin, hair, and overall vitality.', icon: 'sparkles', sort_order: 3 },
    ],
    warnings: [{ id: '1', warning_type: 'legal', text: 'Not FDA approved. Sold as research chemical.', severity: 'low' }],
    sources: [{ id: '1', name: 'Peptide Sciences', url: 'https://peptidesciences.com', is_affiliate: true }],
  },
  {
    id: 'p3',
    name: 'CJC-1295 (no DAC)',
    slug: 'cjc-1295',
    category: 'peptide',
    subcategory: 'GH Secretagogue',
    one_liner: 'Growth hormone releasing hormone - extends GH pulses when stacked with Ipamorelin.',
    overview: `CJC-1295 without DAC (also called Mod GRF 1-29) is a growth hormone releasing hormone (GHRH) analog. It works by extending the duration of GH pulses rather than initiating them.

When combined with a GHRP like Ipamorelin, it creates a synergistic effect - the GHRP initiates the GH pulse and CJC-1295 extends it, resulting in higher overall GH output than either compound alone.

The "no DAC" version has a shorter half-life (~30 min) which more closely mimics natural GH pulsing patterns. The DAC version creates sustained elevated GH which is less physiological.`,
    research_level: 'moderate',
    suppression_level: 'none',
    delivery_methods: ['injectable'],
    dosing_standard: '100mcg per injection (with Ipamorelin)',
    dosing_timing: 'Before bed on empty stomach. Combine with Ipamorelin in same syringe.',
    dosing_cycle_length: 'Ongoing with Ipamorelin.',
    dosing_notes: 'Always use "no DAC" version for physiological pulsing. DAC version creates constant elevation.',
    goals: ['recovery', 'sleep', 'fat-loss', 'longevity'],
    side_effects: ['Well-tolerated', 'Flushing immediately after injection', 'Headache (rare)'],
    benefits: [
      { id: '1', title: 'Extends GH Pulses', description: 'Synergistic with GHRPs for enhanced GH output.', icon: 'activity', sort_order: 1 },
      { id: '2', title: 'Natural Pulsing', description: 'No DAC version mimics physiological GH patterns.', icon: 'heart-pulse', sort_order: 2 },
    ],
    warnings: [{ id: '1', warning_type: 'legal', text: 'Not FDA approved. Sold as research chemical.', severity: 'low' }],
    sources: [{ id: '1', name: 'Peptide Sciences', url: 'https://peptidesciences.com', is_affiliate: true }],
  },
  {
    id: 'p4',
    name: 'Tesamorelin',
    slug: 'tesamorelin',
    category: 'peptide',
    subcategory: 'GH Secretagogue',
    one_liner: 'FDA-approved GHRH - clinically proven to reduce visceral fat.',
    overview: `Tesamorelin is an FDA-approved growth hormone releasing hormone (GHRH) analog, originally developed for HIV-associated lipodystrophy (abnormal fat accumulation). It's the only FDA-approved compound specifically for reducing visceral abdominal fat.

Clinical trials showed significant reductions in trunk fat and visceral adipose tissue. It increases GH and IGF-1 levels while maintaining the body's natural pulsatile GH release pattern.

Because it's FDA-approved, it can be obtained through legitimate telemedicine clinics and compounding pharmacies, making quality and purity more reliable than research peptides.`,
    research_level: 'well-researched',
    suppression_level: 'none',
    delivery_methods: ['injectable'],
    dosing_standard: '2mg daily',
    dosing_timing: 'Once daily subcutaneous injection',
    dosing_cycle_length: 'Typically 12-26 weeks in clinical studies',
    dosing_notes: 'FDA-approved. Can obtain through telemedicine clinics. More expensive than research peptides.',
    goals: ['fat-loss', 'longevity'],
    side_effects: ['Injection site reactions', 'Fluid retention', 'Joint pain', 'Paresthesia'],
    benefits: [
      { id: '1', title: 'FDA-Approved', description: 'Only FDA-approved compound for visceral fat reduction.', icon: 'shield-check', sort_order: 1 },
      { id: '2', title: 'Clinically Proven', description: 'Robust clinical trial data supporting efficacy.', icon: 'file-check', sort_order: 2 },
      { id: '3', title: 'Quality Assurance', description: 'Available through legitimate pharmacies.', icon: 'badge-check', sort_order: 3 },
    ],
    warnings: [{ id: '1', warning_type: 'health', text: 'Contraindicated with active malignancy. Discontinue if hypersensitivity occurs.', severity: 'medium' }],
    studies: [
      { id: '1', title: 'Tesamorelin for HIV Lipodystrophy', summary: 'Significantly reduced trunk fat and visceral adipose tissue vs placebo.', link: 'https://pubmed.ncbi.nlm.nih.gov/21091114/', study_type: 'human', year: 2010 },
    ],
    sources: [{ id: '1', name: 'Marek Health', url: 'https://marekhealth.com', is_affiliate: true, notes: 'Telemedicine clinic' }],
  },

  // ============================================
  // PEPTIDES - RECOVERY/HEALING
  // ============================================
  {
    id: 'p10',
    name: 'BPC-157',
    slug: 'bpc-157',
    category: 'peptide',
    subcategory: 'Recovery',
    one_liner: 'The healing peptide - accelerates tissue repair for tendons, ligaments, gut, and more.',
    overview: `BPC-157 (Body Protection Compound-157) is a 15-amino acid peptide derived from a protein found in human gastric juice. It has remarkable healing properties across multiple tissue types including tendons, ligaments, muscle, gut lining, and nerve tissue.

The peptide works through multiple mechanisms: upregulating growth hormone receptors, promoting angiogenesis (new blood vessel formation), and modulating the nitric oxide system. It also has neuroprotective properties.

A 2024 systematic review found BPC-157 improved outcomes in muscle, tendon, ligament, and bone injury models. One small human study showed 7 of 12 patients with chronic knee pain experienced relief for over 6 months after a single injection. A 2025 pilot study found IV infusions up to 20mg were well-tolerated.`,
    research_level: 'moderate',
    suppression_level: 'none',
    delivery_methods: ['injectable', 'oral'],
    dosing_standard: '250-500mcg per day',
    dosing_timing: 'Once daily or split AM/PM. Can inject near injury site.',
    dosing_cycle_length: '4-8 weeks or as needed for injury recovery',
    dosing_notes: 'Injectable (subcutaneous) preferred for systemic effects. Oral effective for gut issues.',
    goals: ['recovery', 'performance'],
    side_effects: ['Generally very well-tolerated', 'Mild nausea initially', 'Lightheadedness at high doses (rare)', 'Injection site irritation (rare)'],
    benefits: [
      { id: '1', title: 'Accelerated Healing', description: 'Promotes recovery of tendons, ligaments, muscles, connective tissues.', icon: 'heart-pulse', sort_order: 1 },
      { id: '2', title: 'Gut Health', description: 'Repairs gut lining. Phase II trials completed for IBD.', icon: 'shield', sort_order: 2 },
      { id: '3', title: 'Neuroprotection', description: 'Supports nerve healing and dopamine regulation.', icon: 'brain', sort_order: 3 },
    ],
    warnings: [
      { id: '1', warning_type: 'research', text: 'Most studies animal-based. Limited human clinical data.', severity: 'medium' },
      { id: '2', warning_type: 'legal', text: 'FDA Category 2 bulk drug. Cannot be compounded by pharmacies.', severity: 'medium' },
    ],
    studies: [
      { id: '1', title: 'BPC-157 Orthopaedic Review (2024)', summary: 'Review of 36 studies. 7/12 humans with knee pain had relief >6 months.', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12313605/', study_type: 'review', year: 2024 },
      { id: '2', title: 'IV BPC-157 Safety Pilot (2025)', summary: 'Up to 20mg IV well-tolerated with no adverse effects.', link: 'https://pubmed.ncbi.nlm.nih.gov/40131143/', study_type: 'human', year: 2025 },
    ],
    sources: [{ id: '1', name: 'Peptide Sciences', url: 'https://peptidesciences.com', is_affiliate: true }],
  },
  {
    id: 'p11',
    name: 'TB-500',
    slug: 'tb-500',
    category: 'peptide',
    subcategory: 'Recovery',
    one_liner: 'Systemic healing peptide - reduces inflammation and promotes tissue repair throughout the body.',
    overview: `TB-500 is a synthetic version of Thymosin Beta-4 (TB4), a naturally occurring peptide present in almost all human and animal cells. It plays a crucial role in tissue repair, cell migration, and blood vessel formation.

TB-500 promotes healing by reducing inflammation, encouraging cell migration to injury sites, and supporting angiogenesis. Unlike BPC-157 which can be injected locally, TB-500 works systemically throughout the body.

Commonly stacked with BPC-157 for enhanced healing - the two peptides work through different mechanisms and appear synergistic.`,
    research_level: 'moderate',
    suppression_level: 'none',
    delivery_methods: ['injectable'],
    dosing_standard: '2-2.5mg twice weekly (loading), then 2mg weekly',
    dosing_timing: 'Inject subcutaneously. Timing flexible.',
    dosing_cycle_length: '4-6 weeks loading, then maintenance as needed',
    dosing_notes: 'Loading phase with twice-weekly injections, then drop to weekly. Often stacked with BPC-157.',
    goals: ['recovery', 'performance'],
    side_effects: ['Generally well-tolerated', 'Mild head rush after injection (rare)', 'Temporary fatigue', 'Flu-like symptoms first dose (rare)'],
    benefits: [
      { id: '1', title: 'Systemic Healing', description: 'Works throughout body to promote tissue repair.', icon: 'heart-pulse', sort_order: 1 },
      { id: '2', title: 'Angiogenesis', description: 'Promotes new blood vessel formation.', icon: 'activity', sort_order: 2 },
      { id: '3', title: 'Anti-Inflammatory', description: 'Reduces inflammation at injury sites.', icon: 'shield', sort_order: 3 },
    ],
    warnings: [{ id: '1', warning_type: 'research', text: 'Most research preclinical. Limited human data.', severity: 'medium' }],
    sources: [{ id: '1', name: 'Peptide Sciences', url: 'https://peptidesciences.com', is_affiliate: true }],
  },

  // ============================================
  // PEPTIDES - WEIGHT LOSS
  // ============================================
  {
    id: 'p20',
    name: 'Semaglutide',
    slug: 'semaglutide',
    category: 'peptide',
    subcategory: 'Metabolic',
    one_liner: 'FDA-approved weight loss - 15-20% body weight reduction with cardiovascular benefits.',
    overview: `Semaglutide is a GLP-1 receptor agonist originally developed for type 2 diabetes (Ozempic) and later approved for weight loss (Wegovy). It is the most researched and proven weight loss compound available.

In the STEP clinical trials, semaglutide 2.4mg weekly produced mean weight losses of 14.9-17.4% from baseline at 68 weeks. 69-79% of participants achieved at least 10% weight loss. The SELECT trial (17,604 patients) showed a 20% reduction in major cardiovascular events.

Newer trials (STEP UP, 2025) show semaglutide 7.2mg achieves 20.7% weight loss with 33% of patients losing 25%+ of body weight.

Side effects are primarily GI-related and improve with time. The biggest risk is muscle loss if protein intake and resistance training are inadequate.`,
    research_level: 'well-researched',
    suppression_level: 'none',
    delivery_methods: ['injectable'],
    dosing_standard: 'Start 0.25mg weekly, titrate to 1.0-2.4mg weekly',
    dosing_timing: 'Once weekly injection, same day each week',
    dosing_cycle_length: 'Long-term - effects reverse if discontinued',
    dosing_notes: 'Start low (0.25mg), titrate every 4 weeks. MUST maintain high protein (1g/lb) and resistance training.',
    goals: ['fat-loss'],
    side_effects: ['Nausea (common initially)', 'Constipation or diarrhea', 'Muscle loss without adequate protein/training', 'Gallbladder issues with rapid loss', 'Pancreatitis (rare)'],
    benefits: [
      { id: '1', title: 'Significant Weight Loss', description: '15-20% body weight reduction in trials.', icon: 'trending-down', sort_order: 1 },
      { id: '2', title: 'Cardiovascular Protection', description: '20% reduction in major CV events (SELECT trial).', icon: 'heart', sort_order: 2 },
      { id: '3', title: 'Appetite Reduction', description: 'Dramatically reduces hunger and increases satiety.', icon: 'utensils', sort_order: 3 },
    ],
    warnings: [
      { id: '1', warning_type: 'health', text: 'Can cause significant muscle loss without protein (1g/lb) and resistance training.', severity: 'high' },
      { id: '2', warning_type: 'health', text: 'Do not use if history of medullary thyroid carcinoma or MEN 2.', severity: 'high' },
    ],
    studies: [
      { id: '1', title: 'STEP 1 Trial (NEJM 2021)', summary: '1,961 adults. 14.9% weight loss vs 2.4% placebo at 68 weeks.', link: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2032183', study_type: 'human', year: 2021 },
      { id: '2', title: 'SELECT CV Outcomes (NEJM 2023)', summary: '17,604 patients. 20% reduction in major cardiovascular events.', link: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2307563', study_type: 'human', year: 2023 },
    ],
    sources: [{ id: '1', name: 'Marek Health', url: 'https://marekhealth.com', is_affiliate: true, notes: 'Pharmaceutical grade' }],
  },
  {
    id: 'p21',
    name: 'Tirzepatide',
    slug: 'tirzepatide',
    category: 'peptide',
    subcategory: 'Metabolic',
    one_liner: 'Dual GIP/GLP-1 agonist - even greater weight loss than semaglutide (up to 22%).',
    overview: `Tirzepatide (Mounjaro/Zepbound) is a dual GIP and GLP-1 receptor agonist that produces even greater weight loss than semaglutide. It works through two pathways for enhanced metabolic effects.

In the SURMOUNT-1 trial, tirzepatide produced mean weight loss of 15-22% depending on dose, with over 50% of participants losing 20%+ of body weight at the highest dose - results approaching bariatric surgery.

Like semaglutide, muscle preservation requires adequate protein and resistance training. GI side effects are common but typically improve over time.`,
    research_level: 'well-researched',
    suppression_level: 'none',
    delivery_methods: ['injectable'],
    dosing_standard: 'Start 2.5mg weekly, titrate to 5-15mg weekly',
    dosing_timing: 'Once weekly injection',
    dosing_cycle_length: 'Long-term use',
    dosing_notes: 'Titrate slowly to minimize GI side effects. Same protein/training requirements as semaglutide.',
    goals: ['fat-loss'],
    side_effects: ['Nausea', 'Diarrhea', 'Constipation', 'Injection site reactions', 'Muscle loss without protein/training'],
    benefits: [
      { id: '1', title: 'Superior Weight Loss', description: 'Up to 22% body weight loss - exceeds semaglutide.', icon: 'trending-down', sort_order: 1 },
      { id: '2', title: 'Dual Mechanism', description: 'GIP + GLP-1 for enhanced metabolic effects.', icon: 'zap', sort_order: 2 },
      { id: '3', title: 'Glycemic Control', description: 'Excellent for type 2 diabetes if applicable.', icon: 'activity', sort_order: 3 },
    ],
    warnings: [
      { id: '1', warning_type: 'health', text: 'Same muscle loss risk as semaglutide without protein and training.', severity: 'high' },
      { id: '2', warning_type: 'health', text: 'Do not use if history of medullary thyroid carcinoma or MEN 2.', severity: 'high' },
    ],
    studies: [
      { id: '1', title: 'SURMOUNT-1 Trial', summary: '2,539 adults. 15-22% weight loss at 72 weeks. Over 50% lost 20%+ at highest dose.', link: 'https://pubmed.ncbi.nlm.nih.gov/35658024/', study_type: 'human', year: 2022 },
    ],
    sources: [{ id: '1', name: 'Marek Health', url: 'https://marekhealth.com', is_affiliate: true }],
  },

  // ============================================
  // STEROIDS / HORMONES
  // ============================================
  {
    id: 's1',
    name: 'Testosterone Cypionate',
    slug: 'testosterone-cypionate',
    category: 'hormone',
    subcategory: 'Androgen',
    one_liner: 'Gold standard TRT - FDA-approved testosterone replacement with well-understood effects.',
    overview: `Testosterone Cypionate is an esterified form of testosterone FDA-approved for testosterone replacement therapy (TRT) in hypogonadal men. It is one of the most commonly prescribed and well-studied testosterone formulations.

The cypionate ester provides a half-life of ~8 days, allowing weekly or bi-weekly injections. TRT doses typically range from 100-200mg weekly, targeting blood levels of 400-700 ng/dL as recommended by the Endocrine Society.

At TRT doses, testosterone improves energy, libido, mood, muscle mass, and bone density. At supraphysiological doses (bodybuilding use), it produces significant muscle and strength gains but with increased health risks.

All exogenous testosterone suppresses natural production and fertility. Reversible in most cases upon discontinuation.`,
    research_level: 'well-researched',
    suppression_level: 'significant',
    delivery_methods: ['injectable'],
    dosing_standard: 'TRT: 100-200mg weekly. Enhanced: 300-500mg weekly.',
    dosing_timing: 'Once weekly IM. Some split to 2x weekly for stable levels.',
    dosing_cycle_length: 'TRT: Indefinite. Cycles: 12-16 weeks.',
    dosing_notes: 'Measure trough levels. Target 400-700 ng/dL for TRT. Monitor hematocrit, PSA, lipids.',
    goals: ['muscle', 'performance', 'hormones', 'energy'],
    side_effects: ['Testosterone suppression', 'Fertility impairment (usually reversible)', 'Elevated hematocrit', 'Acne', 'Hair loss (genetic)', 'Mood changes'],
    benefits: [
      { id: '1', title: 'Muscle & Strength', description: 'Increases protein synthesis and nitrogen retention.', icon: 'dumbbell', sort_order: 1 },
      { id: '2', title: 'Energy & Libido', description: 'Restores energy and sexual function.', icon: 'zap', sort_order: 2 },
      { id: '3', title: 'Bone Density', description: 'Maintains and improves bone mineral density.', icon: 'bone', sort_order: 3 },
    ],
    warnings: [
      { id: '1', warning_type: 'suppression', text: 'Completely suppresses natural testosterone. PCT required if discontinuing.', severity: 'high' },
      { id: '2', warning_type: 'health', text: 'Monitor hematocrit - may increase clot risk if >54%.', severity: 'medium' },
      { id: '3', warning_type: 'legal', text: 'Schedule III controlled substance. Requires prescription.', severity: 'medium' },
    ],
    studies: [
      { id: '1', title: 'Endocrine Society TRT Guidelines', summary: 'Target 400-700 ng/dL trough. Monitor hematocrit and PSA.', link: 'https://pubmed.ncbi.nlm.nih.gov/29562364/', study_type: 'guideline', year: 2018 },
    ],
    sources: [{ id: '1', name: 'Marek Health', url: 'https://marekhealth.com', is_affiliate: true }],
  },
  {
    id: 's2',
    name: 'Testosterone Enanthate',
    slug: 'testosterone-enanthate',
    category: 'hormone',
    subcategory: 'Androgen',
    one_liner: 'Interchangeable with cypionate - slightly shorter ester, same effects.',
    overview: `Testosterone Enanthate is essentially interchangeable with Testosterone Cypionate. The only difference is a slightly shorter ester (7 vs 8 carbons), resulting in marginally faster release.

In practice, the two are used identically. Enanthate is more common in Europe while Cypionate dominates the US market. Both are FDA-approved for TRT.

Same dosing, same effects, same side effects. Choose based on availability and cost.`,
    research_level: 'well-researched',
    suppression_level: 'significant',
    delivery_methods: ['injectable'],
    dosing_standard: 'TRT: 100-200mg weekly. Enhanced: 300-500mg weekly.',
    dosing_timing: 'Once weekly IM or split to 2x weekly.',
    dosing_cycle_length: 'TRT: Indefinite. Cycles: 12-16 weeks.',
    dosing_notes: 'Interchangeable with Cypionate. Same monitoring requirements.',
    goals: ['muscle', 'performance', 'hormones', 'energy'],
    side_effects: ['Same as Testosterone Cypionate'],
    benefits: [
      { id: '1', title: 'Interchangeable', description: 'Same effects as Cypionate.', icon: 'repeat', sort_order: 1 },
    ],
    warnings: [
      { id: '1', warning_type: 'suppression', text: 'Completely suppresses natural testosterone.', severity: 'high' },
      { id: '2', warning_type: 'legal', text: 'Schedule III controlled substance.', severity: 'medium' },
    ],
    sources: [{ id: '1', name: 'Marek Health', url: 'https://marekhealth.com', is_affiliate: true }],
  },
  {
    id: 's3',
    name: 'Nandrolone Decanoate (Deca)',
    slug: 'nandrolone-decanoate',
    category: 'hormone',
    subcategory: 'Androgen',
    one_liner: 'Deca-Durabolin - joint-friendly anabolic with strong mass-building and notable suppression.',
    overview: `Nandrolone Decanoate (Deca-Durabolin) is an anabolic steroid used medically for anemia, osteoporosis, and muscle wasting. Known for quality muscle mass with less androgenic effects than testosterone.

Nandrolone has strong anabolic effect with weaker androgenic effect. Known for improving joint health and reducing joint pain through increased collagen synthesis and fluid retention.

However, highly suppressive and has unique side effects including "deca dick" (erectile dysfunction) due to progesterone receptor interaction. REQUIRES testosterone base.

Currently unavailable in US market, though previously FDA-approved.`,
    research_level: 'well-researched',
    suppression_level: 'significant',
    delivery_methods: ['injectable'],
    dosing_standard: '200-400mg weekly (WITH testosterone base)',
    dosing_timing: 'Once weekly due to long half-life (~15 days)',
    dosing_cycle_length: '12-16 weeks',
    dosing_notes: 'ALWAYS run with testosterone at equal or higher dose. Long detection time (~18 months).',
    goals: ['muscle', 'recovery', 'performance'],
    side_effects: ['Severe testosterone suppression', 'Sexual dysfunction without test base', 'Water retention', 'Memory effects (animal studies)', 'Progesterone-related sides'],
    benefits: [
      { id: '1', title: 'Quality Muscle', description: 'Steady gains with less water than other compounds.', icon: 'dumbbell', sort_order: 1 },
      { id: '2', title: 'Joint Support', description: 'Improves joint comfort and reduces pain.', icon: 'bone', sort_order: 2 },
      { id: '3', title: 'Lower Androgenic', description: 'Less hair loss and acne than testosterone.', icon: 'shield', sort_order: 3 },
    ],
    warnings: [
      { id: '1', warning_type: 'suppression', text: 'MUST run with testosterone or sexual dysfunction will occur.', severity: 'high' },
      { id: '2', warning_type: 'health', text: 'Animal studies show potential memory effects.', severity: 'medium' },
      { id: '3', warning_type: 'legal', text: 'Schedule III. Currently unavailable in US.', severity: 'medium' },
    ],
    studies: [
      { id: '1', title: 'Nandrolone and Memory (2024)', summary: 'Rat study showed impaired recognition memory from nandrolone.', link: 'https://www.sciencedirect.com/science/article/pii/S0018506X24000266', study_type: 'animal', year: 2024 },
    ],
    sources: [{ id: '1', name: 'Note: Prescription required, limited availability', url: '#', is_affiliate: false }],
  },
  // ============================================
  // STEROIDS - CONTINUED
  // ============================================
  {
    id: 's4',
    name: 'Trenbolone',
    slug: 'trenbolone',
    category: 'hormone',
    subcategory: 'Androgen',
    one_liner: 'Extremely potent anabolic - dramatic results with significant health and mental side effects.',
    overview: `Trenbolone is a synthetic anabolic steroid derived from nandrolone. Never approved for human use - only for veterinary use (Finaplix) to increase muscle in cattle.

Considered one of the most powerful anabolics, producing dramatic changes in muscle mass, strength, and body composition. However, comes with severe side effect profile including mental health effects, cardiovascular strain, and significant suppression.

Research shows 90% of users experience adverse effects. Studies document aggression, violent behavior, mood disturbances, and impaired cognitive function. Does not aromatize to estrogen but has strong progesterone activity.

"Tren cough" - violent coughing immediately after injection - is unique to trenbolone.`,
    research_level: 'moderate',
    suppression_level: 'significant',
    delivery_methods: ['injectable'],
    dosing_standard: '200-400mg weekly (experienced users only)',
    dosing_timing: 'Acetate: Every other day. Enanthate: Twice weekly.',
    dosing_cycle_length: '8-10 weeks maximum',
    dosing_notes: 'Start LOW (150-200mg). Acetate clears faster if sides intolerable. NEVER for beginners.',
    goals: ['muscle', 'fat-loss', 'performance'],
    side_effects: ['Severe testosterone suppression', 'Aggression and mood disturbances (very common)', 'Night sweats and insomnia', 'Tren cough', 'Cardiovascular strain', 'Potential neurotoxicity', 'Hair loss', 'Acne'],
    benefits: [
      { id: '1', title: 'Extreme Muscle Building', description: 'One of the most potent anabolics available.', icon: 'dumbbell', sort_order: 1 },
      { id: '2', title: 'Fat Loss', description: 'Strong nutrient partitioning - builds muscle while losing fat.', icon: 'flame', sort_order: 2 },
      { id: '3', title: 'No Estrogen', description: 'Does not aromatize - no water retention from estrogen.', icon: 'shield', sort_order: 3 },
    ],
    warnings: [
      { id: '1', warning_type: 'health', text: '90% of users experience adverse effects. Mental sides very common.', severity: 'high' },
      { id: '2', warning_type: 'health', text: 'Research shows potential neurotoxicity and brain cell death.', severity: 'high' },
      { id: '3', warning_type: 'health', text: 'Severe cardiovascular strain. Destroys lipid profile.', severity: 'high' },
      { id: '4', warning_type: 'legal', text: 'Schedule III controlled substance. Never approved for humans.', severity: 'high' },
    ],
    studies: [
      { id: '1', title: 'Trenbolone Organ Impact (2024)', summary: '90% of users experience adverse effects on multiple organ systems.', link: 'https://pubmed.ncbi.nlm.nih.gov/38887114/', study_type: 'review', year: 2024 },
      { id: '2', title: 'AAS Neurotoxicity Study (2019)', summary: 'Trenbolone caused apoptotic brain cell death via androgen receptor.', link: 'https://www.sciencedirect.com/science/article/pii/S0306452218307772', study_type: 'in-vitro', year: 2019 },
    ],
    sources: [{ id: '1', name: 'Not recommended due to extreme risk profile', url: '#', is_affiliate: false }],
  },
  {
    id: 's5',
    name: 'Anavar (Oxandrolone)',
    slug: 'anavar',
    category: 'hormone',
    subcategory: 'Androgen',
    one_liner: 'Mild oral steroid - strength and lean gains with lower side effects than most AAS.',
    overview: `Anavar (Oxandrolone) is an oral anabolic steroid originally developed to treat muscle wasting. It has a 10:1 anabolic to androgenic ratio, making it one of the mildest steroids with lower virilization risk.

Known for producing lean, dry gains without water retention. Increases strength significantly relative to mass gained. Popular for cutting phases and among women due to lower androgenic effects.

However, as a 17-alpha-alkylated oral steroid, it does stress the liver. Also suppresses natural testosterone and negatively impacts cholesterol (lowers HDL significantly). In June 2023, FDA withdrew approval citing serious adverse effects.

Despite "mild" reputation, still carries real risks - especially cardiovascular and hepatic with extended use.`,
    research_level: 'well-researched',
    suppression_level: 'moderate',
    delivery_methods: ['oral'],
    dosing_standard: 'Men: 20-50mg daily. Women: 5-10mg daily.',
    dosing_timing: 'Split doses throughout day due to short half-life (9-10 hours)',
    dosing_cycle_length: '6-8 weeks maximum',
    dosing_notes: 'Oral so liver toxic. Monitor liver enzymes and lipids. PCT recommended.',
    goals: ['muscle', 'fat-loss', 'performance'],
    side_effects: ['Testosterone suppression', 'Liver stress', 'Significant HDL cholesterol reduction', 'Potential hair loss', 'Acne'],
    benefits: [
      { id: '1', title: 'Lean Gains', description: 'Dry muscle without water retention.', icon: 'trending-up', sort_order: 1 },
      { id: '2', title: 'Strength Increase', description: 'Significant strength gains relative to mass.', icon: 'dumbbell', sort_order: 2 },
      { id: '3', title: 'Lower Virilization', description: 'Safer option for women than most AAS.', icon: 'shield', sort_order: 3 },
    ],
    warnings: [
      { id: '1', warning_type: 'health', text: 'Significantly impacts cholesterol - lowers HDL substantially.', severity: 'high' },
      { id: '2', warning_type: 'health', text: 'Liver toxic as 17-alpha-alkylated oral. Monitor liver enzymes.', severity: 'medium' },
      { id: '3', warning_type: 'legal', text: 'Schedule III. FDA withdrew approval in 2023.', severity: 'medium' },
    ],
    studies: [
      { id: '1', title: 'Oxandrolone in Older Men', summary: 'Increased LBM by 3kg. Fat loss sustained 12 weeks post-treatment.', link: 'https://journals.physiology.org/doi/full/10.1152/japplphysiol.00808.2003', study_type: 'human', year: 2004 },
    ],
    sources: [{ id: '1', name: 'Requires prescription or UGL source', url: '#', is_affiliate: false }],
  },
  {
    id: 's6',
    name: 'Primobolan (Methenolone)',
    slug: 'primobolan',
    category: 'hormone',
    subcategory: 'Androgen',
    one_liner: 'Premium mild anabolic - quality gains with excellent safety profile but very expensive.',
    overview: `Primobolan (Methenolone) is considered one of the safest anabolic steroids available. It has a relatively mild anabolic effect with very low androgenic activity and does not aromatize to estrogen.

Available in oral (acetate) and injectable (enanthate) forms. The injectable is preferred as the oral requires high doses and still has some liver impact despite not being 17-alpha-alkylated.

Known for producing quality, keepable gains rather than rapid mass. Popular in cutting phases to preserve muscle. Has a reputation for being Arnold Schwarzenegger's favorite steroid.

The major downside is cost - genuine Primobolan is extremely expensive, leading to high rates of counterfeiting.`,
    research_level: 'moderate',
    suppression_level: 'mild',
    delivery_methods: ['injectable', 'oral'],
    dosing_standard: 'Injectable: 400-800mg weekly. Oral: 50-100mg daily.',
    dosing_timing: 'Injectable: 2x weekly. Oral: Split daily.',
    dosing_cycle_length: '12-16 weeks',
    dosing_notes: 'Very expensive. High counterfeit rate. Injectable preferred.',
    goals: ['muscle', 'fat-loss'],
    side_effects: ['Mild testosterone suppression', 'Potential hair loss', 'Oral form: mild liver stress', 'Very expensive'],
    benefits: [
      { id: '1', title: 'Excellent Safety Profile', description: 'One of the safest AAS available.', icon: 'shield-check', sort_order: 1 },
      { id: '2', title: 'No Estrogen', description: 'Does not aromatize - no water, no gyno.', icon: 'shield', sort_order: 2 },
      { id: '3', title: 'Quality Gains', description: 'Lean, keepable muscle.', icon: 'trending-up', sort_order: 3 },
    ],
    warnings: [
      { id: '1', warning_type: 'suppression', text: 'Still suppresses testosterone despite mild reputation.', severity: 'medium' },
      { id: '2', warning_type: 'legal', text: 'Schedule III controlled substance.', severity: 'medium' },
      { id: '3', warning_type: 'health', text: 'Very high counterfeit rate due to cost.', severity: 'medium' },
    ],
    sources: [{ id: '1', name: 'Pharmaceutical grade very expensive and rare', url: '#', is_affiliate: false }],
  },
  {
    id: 's7',
    name: 'Masteron (Drostanolone)',
    slug: 'masteron',
    category: 'hormone',
    subcategory: 'Androgen',
    one_liner: 'Hardening agent - adds density and dryness, popular for cutting and contest prep.',
    overview: `Masteron (Drostanolone) is a DHT-derived anabolic steroid originally used to treat breast cancer. It's known for its hardening and drying effects on physique, making it popular for cutting phases and contest prep.

Available as propionate (short ester, frequent injections) and enanthate (long ester, less frequent). Does not aromatize and actually has anti-estrogenic properties.

Most effective when user is already at lower body fat. At higher body fat percentages, the visual effects are minimal. Not a mass builder - used for finishing and refining a physique.

Strongly DHT-derived, so hair loss is a significant concern for those genetically prone.`,
    research_level: 'moderate',
    suppression_level: 'moderate',
    delivery_methods: ['injectable'],
    dosing_standard: '300-500mg weekly',
    dosing_timing: 'Propionate: Every other day. Enanthate: 2x weekly.',
    dosing_cycle_length: '8-12 weeks',
    dosing_notes: 'Most effective at lower body fat. DHT-derived so significant hair loss risk.',
    goals: ['fat-loss', 'performance'],
    side_effects: ['Testosterone suppression', 'Hair loss (significant)', 'Acne', 'Aggression'],
    benefits: [
      { id: '1', title: 'Hardening Effect', description: 'Adds muscle density and definition.', icon: 'diamond', sort_order: 1 },
      { id: '2', title: 'Anti-Estrogenic', description: 'Has mild AI properties.', icon: 'shield', sort_order: 2 },
      { id: '3', title: 'No Water Retention', description: 'Produces dry, aesthetic look.', icon: 'droplet', sort_order: 3 },
    ],
    warnings: [
      { id: '1', warning_type: 'health', text: 'Significant hair loss risk due to DHT derivation.', severity: 'medium' },
      { id: '2', warning_type: 'legal', text: 'Schedule III controlled substance.', severity: 'medium' },
    ],
    sources: [{ id: '1', name: 'UGL sources or prescription', url: '#', is_affiliate: false }],
  },

  // ============================================
  // SARMs
  // ============================================
  {
    id: 'sarm1',
    name: 'RAD-140 (Testolone)',
    slug: 'rad-140',
    category: 'sarm',
    subcategory: 'Muscle Building',
    one_liner: 'Powerful SARM - significant strength and muscle with notable testosterone suppression.',
    overview: `RAD-140 (Testolone) is one of the strongest SARMs available, producing results comparable to mild steroid cycles. Binds selectively to androgen receptors, primarily targeting muscle and bone tissue.

Users experience rapid strength increases, a hard dry look (no water retention), and noticeable muscle fullness. However, RAD-140 is significantly suppressive - blood work consistently shows 30-50%+ reduction in testosterone.

PCT strongly recommended after any RAD-140 cycle. The suppression is substantial enough that most benefit from Nolvadex or Enclomiphene.

Not approved for human use. Sold as research chemical. Banned by WADA.`,
    research_level: 'moderate',
    suppression_level: 'significant',
    delivery_methods: ['oral'],
    dosing_standard: '10-20mg daily',
    dosing_timing: 'Once daily, morning.',
    dosing_cycle_length: '6-8 weeks maximum',
    dosing_notes: 'Very suppressive - get blood work. PCT recommended (Nolvadex 20mg/day 4 weeks).',
    goals: ['muscle', 'performance'],
    side_effects: ['Testosterone suppression (30-50%+)', 'Mood changes', 'Hair shedding', 'Elevated liver enzymes possible', 'Headaches', 'Insomnia'],
    benefits: [
      { id: '1', title: 'Rapid Strength', description: 'Noticeable strength increases within two weeks.', icon: 'dumbbell', sort_order: 1 },
      { id: '2', title: 'Lean Muscle', description: 'Dry gains without water retention.', icon: 'trending-up', sort_order: 2 },
    ],
    warnings: [
      { id: '1', warning_type: 'suppression', text: 'Significantly suppresses testosterone (30-50%+). PCT recommended.', severity: 'high' },
      { id: '2', warning_type: 'legal', text: 'Banned by WADA. Not FDA approved.', severity: 'medium' },
    ],
    sources: [{ id: '1', name: 'Swiss Chems', url: 'https://swisschems.is', is_affiliate: true }, { id: '2', name: 'Chemyo', url: 'https://chemyo.com', is_affiliate: true }],
  },
  {
    id: 'sarm2',
    name: 'Ostarine (MK-2866)',
    slug: 'ostarine',
    category: 'sarm',
    subcategory: 'Muscle Building',
    one_liner: 'Mild SARM - best researched, moderate gains with lower suppression than alternatives.',
    overview: `Ostarine (MK-2866, Enobosarm) is the most researched SARM, having gone through Phase II clinical trials for muscle wasting before development was discontinued. Produces modest but real muscle gains with less suppression than stronger SARMs.

Particularly useful for muscle preservation during caloric deficit (cutting) and recomposition. Users typically gain 3-6 lbs lean mass over 8 weeks.

While "milder," still suppresses testosterone - blood work shows 15-30% reduction. PCT often optional for shorter, lower-dose cycles but recommended for 8+ weeks at higher doses.`,
    research_level: 'well-researched',
    suppression_level: 'mild',
    delivery_methods: ['oral'],
    dosing_standard: '10-25mg daily',
    dosing_timing: 'Once daily, morning.',
    dosing_cycle_length: '8-12 weeks',
    dosing_notes: 'Mildest SARM but still suppressive. Blood work recommended. PCT typically sufficient.',
    goals: ['muscle', 'recovery'],
    side_effects: ['Testosterone suppression (15-30%)', 'Headaches', 'Back pain', 'Lipid changes'],
    benefits: [
      { id: '1', title: 'Muscle Preservation', description: 'Excellent for maintaining muscle in deficit.', icon: 'shield', sort_order: 1 },
      { id: '2', title: 'Best Researched', description: 'More human data than any other SARM.', icon: 'book-open', sort_order: 2 },
      { id: '3', title: 'Lower Suppression', description: 'Less testosterone impact than stronger SARMs.', icon: 'check', sort_order: 3 },
    ],
    warnings: [
      { id: '1', warning_type: 'suppression', text: 'Still suppresses testosterone (15-30%).', severity: 'medium' },
      { id: '2', warning_type: 'legal', text: 'Banned by WADA. Not FDA approved.', severity: 'medium' },
    ],
    sources: [{ id: '1', name: 'Swiss Chems', url: 'https://swisschems.is', is_affiliate: true }, { id: '2', name: 'Chemyo', url: 'https://chemyo.com', is_affiliate: true }],
  },
  {
    id: 'sarm3',
    name: 'LGD-4033 (Ligandrol)',
    slug: 'lgd-4033',
    category: 'sarm',
    subcategory: 'Muscle Building',
    one_liner: 'Mass-building SARM - significant lean mass gains with moderate suppression.',
    overview: `LGD-4033 (Ligandrol) is a potent SARM known for producing significant lean muscle gains. Phase II clinical trials showed dose-dependent increases in lean body mass: 4.8% at 0.5mg, 7.2% at 1mg, and 9.1% at 2mg after 12 weeks.

Produces fuller, rounder muscles compared to the dry look of RAD-140. Popular for bulking phases. Generally well-tolerated in clinical studies with minimal side effects at therapeutic doses.

However, suppresses testosterone dose-dependently. Also associated with liver enzyme elevations in some case reports. PCT recommended, especially at bodybuilding doses (5-10mg).`,
    research_level: 'well-researched',
    suppression_level: 'moderate',
    delivery_methods: ['oral'],
    dosing_standard: '5-10mg daily',
    dosing_timing: 'Once daily, any time.',
    dosing_cycle_length: '8-12 weeks',
    dosing_notes: 'More suppressive than Ostarine. PCT recommended. Monitor liver enzymes.',
    goals: ['muscle', 'performance'],
    side_effects: ['Testosterone suppression', 'Water retention possible', 'Liver enzyme elevation (case reports)', 'Headaches', 'Fatigue'],
    benefits: [
      { id: '1', title: 'Significant Mass Gains', description: 'Clinical trials showed 4.8-9.1% LBM increase.', icon: 'dumbbell', sort_order: 1 },
      { id: '2', title: 'Clinical Data', description: 'Multiple Phase I and Phase II trials completed.', icon: 'file-check', sort_order: 2 },
      { id: '3', title: 'Well-Tolerated', description: 'Minimal sides at therapeutic doses in studies.', icon: 'shield', sort_order: 3 },
    ],
    warnings: [
      { id: '1', warning_type: 'suppression', text: 'Suppresses testosterone dose-dependently. PCT recommended.', severity: 'medium' },
      { id: '2', warning_type: 'health', text: 'Case reports of liver enzyme elevation. Monitor.', severity: 'medium' },
      { id: '3', warning_type: 'legal', text: 'Banned by WADA. Not FDA approved.', severity: 'medium' },
    ],
    studies: [
      { id: '1', title: 'LGD-4033 Phase I Study', summary: 'Safe and well-tolerated. Significant LBM gains at all doses.', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4111291/', study_type: 'human', year: 2013 },
    ],
    sources: [{ id: '1', name: 'Swiss Chems', url: 'https://swisschems.is', is_affiliate: true }, { id: '2', name: 'Chemyo', url: 'https://chemyo.com', is_affiliate: true }],
  },
  {
    id: 'sarm4',
    name: 'Cardarine (GW-501516)',
    slug: 'cardarine',
    category: 'sarm',
    subcategory: 'Endurance',
    one_liner: 'Not a SARM - PPARδ agonist that dramatically increases endurance and fat oxidation.',
    overview: `Cardarine (GW-501516) is often grouped with SARMs but is actually a PPARδ receptor agonist. It does not bind to androgen receptors and does not cause testosterone suppression.

Dramatically increases endurance capacity and fat oxidation. Users report being able to do significantly more cardio with faster recovery. Also improves lipid profile - increases HDL and decreases LDL.

Development was discontinued due to cancer concerns in rodent studies, though these used very high doses for extended periods. The relevance to human use at typical doses is debated. No human cancer cases have been reported.

Does not build muscle directly. Often stacked with SARMs during cutting for enhanced fat loss and endurance.`,
    research_level: 'moderate',
    suppression_level: 'none',
    delivery_methods: ['oral'],
    dosing_standard: '10-20mg daily',
    dosing_timing: 'Once daily, 1-2 hours before cardio.',
    dosing_cycle_length: '8-12 weeks',
    dosing_notes: 'No suppression - no PCT needed. Cancer concerns from rodent studies at high doses.',
    goals: ['fat-loss', 'performance'],
    side_effects: ['Cancer concerns from rodent studies (debated applicability)', 'Generally well-tolerated in users'],
    benefits: [
      { id: '1', title: 'Endurance Increase', description: 'Dramatically improves cardio capacity.', icon: 'activity', sort_order: 1 },
      { id: '2', title: 'Fat Oxidation', description: 'Increases fat burning during exercise.', icon: 'flame', sort_order: 2 },
      { id: '3', title: 'Lipid Improvement', description: 'Increases HDL, decreases LDL.', icon: 'heart', sort_order: 3 },
      { id: '4', title: 'No Suppression', description: 'Does not affect testosterone.', icon: 'shield-check', sort_order: 4 },
    ],
    warnings: [
      { id: '1', warning_type: 'health', text: 'Development discontinued due to rodent cancer. Human relevance debated.', severity: 'high' },
      { id: '2', warning_type: 'legal', text: 'Banned by WADA.', severity: 'medium' },
    ],
    sources: [{ id: '1', name: 'Swiss Chems', url: 'https://swisschems.is', is_affiliate: true }],
  },
  {
    id: 'sarm5',
    name: 'YK-11',
    slug: 'yk-11',
    category: 'sarm',
    subcategory: 'Muscle Building',
    one_liner: 'Myostatin inhibitor - unique mechanism but limited research and significant liver concerns.',
    overview: `YK-11 is often classified as a SARM but appears to work primarily as a myostatin inhibitor. Myostatin limits muscle growth, so inhibiting it theoretically allows for greater muscle development.

Users report significant strength and muscle gains, often compared to mild oral steroids. However, YK-11 is methylated, meaning it has liver toxicity similar to oral steroids - unlike other SARMs.

Research is very limited - mostly cell studies with minimal animal data and no human trials. The mechanism, safety profile, and appropriate dosing are poorly understood.

Given the liver toxicity and lack of research, considered one of the riskier "SARMs" available.`,
    research_level: 'limited',
    suppression_level: 'significant',
    delivery_methods: ['oral'],
    dosing_standard: '5-10mg daily',
    dosing_timing: 'Split doses due to short half-life.',
    dosing_cycle_length: '6-8 weeks maximum',
    dosing_notes: 'Methylated = liver toxic. Very limited research. PCT required.',
    goals: ['muscle', 'performance'],
    side_effects: ['Liver toxicity (methylated)', 'Testosterone suppression', 'Joint pain reported', 'Hair loss', 'Unknown long-term effects'],
    benefits: [
      { id: '1', title: 'Myostatin Inhibition', description: 'Unique mechanism allowing greater muscle growth.', icon: 'dumbbell', sort_order: 1 },
      { id: '2', title: 'Significant Gains', description: 'Users report notable strength and size increases.', icon: 'trending-up', sort_order: 2 },
    ],
    warnings: [
      { id: '1', warning_type: 'health', text: 'Methylated compound - liver toxic unlike most SARMs.', severity: 'high' },
      { id: '2', warning_type: 'research', text: 'Very limited research. No human trials. Unknown safety profile.', severity: 'high' },
      { id: '3', warning_type: 'suppression', text: 'Significantly suppressive. PCT required.', severity: 'high' },
    ],
    sources: [{ id: '1', name: 'Swiss Chems', url: 'https://swisschems.is', is_affiliate: true }],
  },
  {
    id: 'sarm6',
    name: 'S-23',
    slug: 's-23',
    category: 'sarm',
    subcategory: 'Muscle Building',
    one_liner: 'Strongest SARM - steroid-like results with steroid-like suppression.',
    overview: `S-23 is considered the strongest SARM available, producing results closer to anabolic steroids than other SARMs. It has very high binding affinity to androgen receptors.

Produces hard, dry gains similar to Winstrol or Masteron. Very effective for cutting and recomposition. Users report significant strength increases and muscle hardening.

However, S-23 is extremely suppressive - often described as completely shutting down testosterone production. It was actually researched as a potential male contraceptive due to its suppressive effects on sperm production.

PCT is absolutely required. Some users report needing extended PCT or even temporary HCG use to recover.`,
    research_level: 'moderate',
    suppression_level: 'significant',
    delivery_methods: ['oral'],
    dosing_standard: '10-25mg daily',
    dosing_timing: 'Split doses throughout day.',
    dosing_cycle_length: '6-8 weeks maximum',
    dosing_notes: 'EXTREMELY suppressive - full shutdown common. Extended PCT required.',
    goals: ['muscle', 'fat-loss', 'performance'],
    side_effects: ['Complete testosterone shutdown', 'Temporary infertility', 'Hair loss', 'Aggression', 'Night sweats'],
    benefits: [
      { id: '1', title: 'Strongest SARM', description: 'Steroid-like results from an oral SARM.', icon: 'dumbbell', sort_order: 1 },
      { id: '2', title: 'Hard Dry Look', description: 'Similar aesthetic to Winstrol/Masteron.', icon: 'diamond', sort_order: 2 },
      { id: '3', title: 'Effective Cutting', description: 'Excellent for recomposition and fat loss.', icon: 'flame', sort_order: 3 },
    ],
    warnings: [
      { id: '1', warning_type: 'suppression', text: 'EXTREMELY suppressive. Full shutdown common. Extended PCT required.', severity: 'high' },
      { id: '2', warning_type: 'health', text: 'Researched as male contraceptive - causes temporary infertility.', severity: 'high' },
    ],
    sources: [{ id: '1', name: 'Swiss Chems', url: 'https://swisschems.is', is_affiliate: true }],
  },
  // ============================================
  // NOOTROPICS
  // ============================================
  {
    id: 'n1',
    name: 'Semax',
    slug: 'semax',
    category: 'nootropic',
    subcategory: 'Neurotrophic',
    one_liner: 'Nasal nootropic - enhances focus, memory, and neuroprotection without stimulants.',
    overview: `Semax is a synthetic peptide derived from ACTH developed in Russia for cognitive enhancement and neuroprotection. Used clinically in Russia for decades.

Works primarily by increasing BDNF (brain-derived neurotrophic factor), supporting neuron growth and maintenance. Users experience improved focus, mental clarity, better memory, and enhanced mood without stimulant side effects.

Delivered as nasal spray for rapid absorption. Effects noticeable within 15-30 minutes. NA-Semax Amidate is more potent and longer-lasting.`,
    research_level: 'moderate',
    suppression_level: 'none',
    delivery_methods: ['nasal'],
    dosing_standard: '200-600mcg daily',
    dosing_timing: 'Split 2-3 doses. Morning and early afternoon.',
    dosing_cycle_length: '2-4 weeks on, 2 weeks off.',
    dosing_notes: 'Effects in 15-30 min. NA-Semax Amidate is 2-3x more potent.',
    goals: ['cognition', 'mood', 'energy'],
    side_effects: ['Very well-tolerated', 'Mild nasal irritation', 'Headache if dehydrated', 'Overstimulation at high doses (rare)'],
    benefits: [
      { id: '1', title: 'Enhanced Focus', description: 'Clean, stimulant-free focus without jitters.', icon: 'target', sort_order: 1 },
      { id: '2', title: 'BDNF Elevation', description: 'Increases brain-derived neurotrophic factor.', icon: 'brain', sort_order: 2 },
      { id: '3', title: 'Neuroprotection', description: 'Protects neurons and supports brain health.', icon: 'shield', sort_order: 3 },
    ],
    warnings: [{ id: '1', warning_type: 'research', text: 'Most research from Russia. Limited Western trials.', severity: 'low' }],
    sources: [{ id: '1', name: 'Limitless Life Nootropics', url: 'https://limitlesslifenootropics.com', is_affiliate: true }],
  },
  {
    id: 'n2',
    name: 'Selank',
    slug: 'selank',
    category: 'nootropic',
    subcategory: 'Neurotrophic',
    one_liner: 'Anxiolytic nootropic - reduces anxiety and stress while supporting cognition.',
    overview: `Selank is a synthetic peptide developed alongside Semax in Russia. While Semax is more stimulating and focus-oriented, Selank is calming and anti-anxiety.

Modulates GABA and serotonin systems, reducing anxiety without sedation or cognitive impairment. Users report feeling calmer, more emotionally stable, and better able to handle stress.

Can be stacked with Semax for balanced focus and calm. Like Semax, delivered as nasal spray.`,
    research_level: 'moderate',
    suppression_level: 'none',
    delivery_methods: ['nasal'],
    dosing_standard: '200-400mcg daily',
    dosing_timing: 'Once daily or as needed.',
    dosing_cycle_length: '2-4 weeks on, 2 weeks off.',
    dosing_notes: 'Can combine with Semax. NA-Selank Amidate is more potent.',
    goals: ['cognition', 'mood'],
    side_effects: ['Very well-tolerated', 'Mild nasal irritation', 'Fatigue at high doses (rare)', 'May enhance alcohol effects'],
    benefits: [
      { id: '1', title: 'Anxiety Reduction', description: 'Calms anxiety without sedation.', icon: 'heart', sort_order: 1 },
      { id: '2', title: 'Stress Resilience', description: 'Better handling of stressful situations.', icon: 'shield', sort_order: 2 },
      { id: '3', title: 'Mood Stabilization', description: 'More emotionally balanced.', icon: 'smile', sort_order: 3 },
    ],
    warnings: [{ id: '1', warning_type: 'interaction', text: 'May enhance effects of alcohol and sedatives.', severity: 'low' }],
    sources: [{ id: '1', name: 'Limitless Life Nootropics', url: 'https://limitlesslifenootropics.com', is_affiliate: true }],
  },
  {
    id: 'n3',
    name: 'Dihexa',
    slug: 'dihexa',
    category: 'nootropic',
    subcategory: 'Neurotrophic',
    one_liner: 'Extremely potent cognitive enhancer - 10 million times more potent than BDNF.',
    overview: `Dihexa is a peptide derivative of angiotensin IV developed at Washington State University. In preclinical studies, it showed remarkable cognitive enhancement - described as 10 million times more potent than BDNF at promoting synapse formation.

Works by binding to hepatocyte growth factor (HGF) receptors, promoting neurite outgrowth and synaptogenesis. Research suggests potential for treating Alzheimer's and other cognitive decline.

However, research is very limited - mostly animal studies. The extreme potency raises questions about appropriate dosing and long-term safety in humans. Some users report significant cognitive enhancement while others notice little effect.`,
    research_level: 'limited',
    suppression_level: 'none',
    delivery_methods: ['oral', 'nasal', 'injectable'],
    dosing_standard: '10-30mg daily (oral) or 5-10mg (nasal/subQ)',
    dosing_timing: 'Morning dosing preferred.',
    dosing_cycle_length: '4-6 weeks with breaks.',
    dosing_notes: 'Very limited human data. Extremely potent - start low. Effects may take weeks.',
    goals: ['cognition'],
    side_effects: ['Limited safety data', 'Headache reported', 'Fatigue in some', 'Unknown long-term effects'],
    benefits: [
      { id: '1', title: 'Synaptogenesis', description: 'Promotes new synapse formation.', icon: 'brain', sort_order: 1 },
      { id: '2', title: 'Cognitive Enhancement', description: 'Significant memory and learning improvements in studies.', icon: 'lightbulb', sort_order: 2 },
    ],
    warnings: [
      { id: '1', warning_type: 'research', text: 'Very limited human data. Most research preclinical.', severity: 'high' },
      { id: '2', warning_type: 'health', text: 'Unknown long-term safety profile.', severity: 'medium' },
    ],
    sources: [{ id: '1', name: 'Limitless Life Nootropics', url: 'https://limitlesslifenootropics.com', is_affiliate: true }],
  },
  {
    id: 'n4',
    name: 'Modafinil',
    slug: 'modafinil',
    category: 'nootropic',
    subcategory: 'Eugeroic',
    one_liner: 'FDA-approved wakefulness agent - reliable focus and alertness without typical stimulant crash.',
    overview: `Modafinil is an FDA-approved eugeroic (wakefulness-promoting agent) used to treat narcolepsy, sleep apnea, and shift work sleep disorder. It's widely used off-label as a cognitive enhancer.

Unlike amphetamines, modafinil provides wakefulness without the jittery feeling, strong euphoria, or harsh crash. The mechanism isn't fully understood but involves dopamine, histamine, and orexin systems.

Effects last 10-15 hours, so morning dosing is essential. Very reliable for focus and productivity. Tolerance can develop with daily use, so many cycle it (e.g., work days only).

Prescription required in most countries, though it's Schedule IV (relatively low abuse potential).`,
    research_level: 'well-researched',
    suppression_level: 'none',
    delivery_methods: ['oral'],
    dosing_standard: '100-200mg daily',
    dosing_timing: 'Morning only due to long duration (10-15 hours).',
    dosing_cycle_length: 'As needed or cycling (work days only).',
    dosing_notes: 'Start with 100mg to assess tolerance. Take early - will disrupt sleep if dosed late.',
    goals: ['cognition', 'energy'],
    side_effects: ['Headache (most common)', 'Appetite suppression', 'Insomnia if dosed late', 'Anxiety in some', 'Skin reactions (rare but serious)'],
    benefits: [
      { id: '1', title: 'Reliable Wakefulness', description: 'Consistent alertness and focus.', icon: 'sun', sort_order: 1 },
      { id: '2', title: 'No Crash', description: 'Smoother than traditional stimulants.', icon: 'activity', sort_order: 2 },
      { id: '3', title: 'FDA-Approved', description: 'Well-studied safety profile.', icon: 'shield-check', sort_order: 3 },
    ],
    warnings: [
      { id: '1', warning_type: 'legal', text: 'Prescription required (Schedule IV).', severity: 'low' },
      { id: '2', warning_type: 'health', text: 'Rare but serious skin reactions (SJS). Stop if rash develops.', severity: 'medium' },
    ],
    sources: [{ id: '1', name: 'Prescription required', url: '#', is_affiliate: false }],
  },
  {
    id: 'n5',
    name: 'Racetams (Piracetam)',
    slug: 'piracetam',
    category: 'nootropic',
    subcategory: 'Racetam',
    one_liner: 'The original nootropic - subtle cognitive enhancement with excellent safety profile.',
    overview: `Piracetam is the original "nootropic" - the term was coined to describe it in 1972. It modulates AMPA and NMDA glutamate receptors and enhances cell membrane fluidity.

Effects are subtle but real - improved verbal fluency, memory, and learning capacity. Often described as "turning the dial up slightly" on cognition rather than dramatic enhancement.

Very safe - no known LD50 (lethal dose) in humans. Few side effects. Often needs to "build up" over 1-2 weeks of consistent use. Stack with choline (Alpha-GPC) for best results.

Other racetams (Aniracetam, Phenylpiracetam, Pramiracetam) offer variations - some more potent, some more anxiolytic.`,
    research_level: 'well-researched',
    suppression_level: 'none',
    delivery_methods: ['oral'],
    dosing_standard: '1.6-4.8g daily in 2-3 divided doses',
    dosing_timing: 'Divide throughout day. Take with choline source.',
    dosing_cycle_length: 'Can use continuously. Effects build over 1-2 weeks.',
    dosing_notes: 'Needs choline to work optimally (Alpha-GPC). Effects subtle but cumulative.',
    goals: ['cognition'],
    side_effects: ['Headache (usually from insufficient choline)', 'Generally very well-tolerated', 'Insomnia if dosed late (rare)'],
    benefits: [
      { id: '1', title: 'Excellent Safety', description: 'No known lethal dose. Minimal side effects.', icon: 'shield-check', sort_order: 1 },
      { id: '2', title: 'Cognitive Enhancement', description: 'Improves memory, verbal fluency, learning.', icon: 'brain', sort_order: 2 },
      { id: '3', title: 'Well-Researched', description: 'Decades of human use and study.', icon: 'book-open', sort_order: 3 },
    ],
    warnings: [{ id: '1', warning_type: 'interaction', text: 'May enhance blood thinners. Caution with anticoagulants.', severity: 'low' }],
    sources: [{ id: '1', name: 'Nootropics Depot', url: 'https://nootropicsdepot.com', is_affiliate: true }],
  },
  {
    id: 'n6',
    name: 'Phenylpiracetam',
    slug: 'phenylpiracetam',
    category: 'nootropic',
    subcategory: 'Racetam',
    one_liner: 'Stimulating racetam - stronger and more physically enhancing than piracetam.',
    overview: `Phenylpiracetam is piracetam with a phenyl group added, making it significantly more potent (30-60x) and adding stimulant and physical performance effects.

Provides noticeable cognitive enhancement, increased energy, and improved physical stamina. Developed in Russia for cosmonauts to enhance performance under stress. Banned by WADA due to physical enhancement effects.

Tolerance develops quickly with daily use - many use it only 2-3x per week for demanding tasks. More noticeable acute effects than piracetam.`,
    research_level: 'moderate',
    suppression_level: 'none',
    delivery_methods: ['oral'],
    dosing_standard: '100-200mg per dose, 1-2x daily',
    dosing_timing: 'Morning or before demanding tasks. Not daily due to tolerance.',
    dosing_cycle_length: 'Use 2-3x weekly to avoid tolerance.',
    dosing_notes: 'Tolerance builds quickly - cycle usage. Banned by WADA.',
    goals: ['cognition', 'energy', 'performance'],
    side_effects: ['Tolerance with daily use', 'Insomnia if dosed late', 'Headache', 'Irritability at high doses'],
    benefits: [
      { id: '1', title: 'Strong Cognitive Effects', description: 'More noticeable than piracetam.', icon: 'brain', sort_order: 1 },
      { id: '2', title: 'Physical Enhancement', description: 'Improves stamina and cold tolerance.', icon: 'activity', sort_order: 2 },
      { id: '3', title: 'Energy Boost', description: 'Mild stimulant-like effects.', icon: 'zap', sort_order: 3 },
    ],
    warnings: [
      { id: '1', warning_type: 'tolerance', text: 'Tolerance develops quickly. Do not use daily.', severity: 'medium' },
      { id: '2', warning_type: 'legal', text: 'Banned by WADA for physical enhancement.', severity: 'medium' },
    ],
    sources: [{ id: '1', name: 'Nootropics Depot', url: 'https://nootropicsdepot.com', is_affiliate: true }],
  },
  {
    id: 'n7',
    name: 'Lion\'s Mane',
    slug: 'lions-mane',
    category: 'nootropic',
    subcategory: 'Natural',
    one_liner: 'Natural neurotropic mushroom - supports nerve growth factor and brain health.',
    overview: `Lion's Mane (Hericium erinaceus) is an edible mushroom with remarkable neurotropic properties. It contains compounds (hericenones and erinacines) that stimulate nerve growth factor (NGF) production.

Research shows benefits for cognitive function, nerve regeneration, and mood. Unlike synthetic nootropics, effects build gradually over weeks of consistent use.

Available as powdered mushroom or concentrated extract. Extracts standardized for beta-glucans and hericenones are most effective. Dual extraction (water + alcohol) captures full spectrum of compounds.

Very safe with long history of traditional use. One of few nootropics with genuine neurogenesis potential.`,
    research_level: 'moderate',
    suppression_level: 'none',
    delivery_methods: ['oral'],
    dosing_standard: '500-3000mg daily of extract',
    dosing_timing: 'Can take any time. Divide doses if desired.',
    dosing_cycle_length: 'Can use continuously. Effects build over weeks.',
    dosing_notes: 'Look for dual extract with beta-glucan content listed. Effects subtle and cumulative.',
    goals: ['cognition', 'mood'],
    side_effects: ['Generally very well-tolerated', 'GI upset in some', 'Possible allergic reaction (rare)'],
    benefits: [
      { id: '1', title: 'NGF Production', description: 'Stimulates nerve growth factor.', icon: 'brain', sort_order: 1 },
      { id: '2', title: 'Neurogenesis', description: 'Supports growth of new neurons.', icon: 'sparkles', sort_order: 2 },
      { id: '3', title: 'Natural & Safe', description: 'Long history of safe traditional use.', icon: 'leaf', sort_order: 3 },
    ],
    warnings: [],
    studies: [
      { id: '1', title: 'Lion\'s Mane for Mild Cognitive Impairment', summary: 'Significant cognitive improvement in elderly with mild impairment.', link: 'https://pubmed.ncbi.nlm.nih.gov/18844328/', study_type: 'human', year: 2009 },
    ],
    sources: [{ id: '1', name: 'Nootropics Depot', url: 'https://nootropicsdepot.com', is_affiliate: true }, { id: '2', name: 'Real Mushrooms', url: 'https://realmushrooms.com', is_affiliate: true }],
  },
  // ============================================
  // NATURAL SUPPLEMENTS - CONTINUED
  // ============================================
  {
    id: 'nat3',
    name: 'Tongkat Ali',
    slug: 'tongkat-ali',
    category: 'natural',
    subcategory: 'Testosterone Support',
    one_liner: 'Evidence-based testosterone booster - modest but real increases in T and well-being.',
    overview: `Tongkat Ali (Eurycoma longifolia) is a Southeast Asian herb with genuine clinical evidence for testosterone support. Unlike most "test boosters," it has real data.

Works by reducing SHBG (freeing testosterone), reducing cortisol, and possibly stimulating Leydig cells. Studies show modest but significant testosterone increases (particularly free T) and improved well-being, libido, and stress resilience.

Quality matters significantly - look for standardized extracts (2% eurycomanone minimum). Indonesian sources tend to be most potent. Effects develop over 2-4 weeks.`,
    research_level: 'moderate',
    suppression_level: 'none',
    delivery_methods: ['oral'],
    dosing_standard: '200-400mg daily of standardized extract',
    dosing_timing: 'Morning. Can split doses.',
    dosing_cycle_length: '8-12 weeks on, 2-4 weeks off.',
    dosing_notes: 'Look for 2%+ eurycomanone. Quality varies significantly.',
    goals: ['hormones', 'energy', 'mood'],
    side_effects: ['Insomnia if dosed late', 'Restlessness', 'Increased aggression (rare)'],
    benefits: [
      { id: '1', title: 'Testosterone Support', description: 'Modest but real increases in free T.', icon: 'trending-up', sort_order: 1 },
      { id: '2', title: 'Cortisol Reduction', description: 'Lowers stress hormones.', icon: 'trending-down', sort_order: 2 },
      { id: '3', title: 'Improved Libido', description: 'Consistent improvements in sexual function.', icon: 'heart', sort_order: 3 },
    ],
    warnings: [{ id: '1', warning_type: 'health', text: 'Quality varies significantly. Source carefully.', severity: 'low' }],
    sources: [{ id: '1', name: 'Nootropics Depot', url: 'https://nootropicsdepot.com', is_affiliate: true }],
  },
  {
    id: 'nat4',
    name: 'Fadogia Agrestis',
    slug: 'fadogia-agrestis',
    category: 'natural',
    subcategory: 'Testosterone Support',
    one_liner: 'Nigerian herb for testosterone - promising but limited research and safety concerns.',
    overview: `Fadogia Agrestis is a Nigerian shrub that gained popularity after being discussed on podcasts as a testosterone booster. Limited animal studies show increased testosterone and sexual behavior.

Works supposedly by increasing luteinizing hormone (LH) and stimulating Leydig cells directly. Often stacked with Tongkat Ali.

However, research is very limited (mostly one research group in Nigeria) and there are concerns about potential testicular toxicity at higher doses in animal studies. Long-term safety in humans is unknown.

If using, cycling and monitoring are recommended. Not for long-term continuous use.`,
    research_level: 'limited',
    suppression_level: 'none',
    delivery_methods: ['oral'],
    dosing_standard: '300-600mg daily',
    dosing_timing: 'Morning.',
    dosing_cycle_length: '4-8 weeks on, 4 weeks off. Do not use continuously.',
    dosing_notes: 'Limited research. Potential toxicity concerns. Cycle usage.',
    goals: ['hormones'],
    side_effects: ['Unknown long-term effects', 'Potential testicular toxicity (animal studies)', 'Limited safety data'],
    benefits: [
      { id: '1', title: 'Testosterone Increase', description: 'Animal studies show significant T increases.', icon: 'trending-up', sort_order: 1 },
      { id: '2', title: 'LH Stimulation', description: 'May increase luteinizing hormone.', icon: 'activity', sort_order: 2 },
    ],
    warnings: [
      { id: '1', warning_type: 'research', text: 'Very limited research. Most from single research group.', severity: 'high' },
      { id: '2', warning_type: 'health', text: 'Animal studies show potential testicular toxicity at high doses.', severity: 'high' },
    ],
    sources: [{ id: '1', name: 'Nootropics Depot', url: 'https://nootropicsdepot.com', is_affiliate: true }],
  },
  {
    id: 'nat5',
    name: 'Vitamin D3',
    slug: 'vitamin-d3',
    category: 'natural',
    subcategory: 'Essential',
    one_liner: 'Essential hormone precursor - optimizing levels supports testosterone, immunity, and mood.',
    overview: `Vitamin D is technically a hormone precursor, not a vitamin. Deficiency is extremely common (40-75% of population) and associated with lower testosterone, weakened immunity, depression, and numerous health issues.

Optimizing vitamin D levels (40-60 ng/mL) has been shown to support testosterone levels in deficient men, improve immune function, enhance mood, and support bone health.

D3 (cholecalciferol) is the preferred form over D2. Take with fat for absorption. Pair with K2 (MK-7) for optimal calcium metabolism and to prevent arterial calcification.

Get blood levels tested - you can't know if you're deficient without testing.`,
    research_level: 'well-researched',
    suppression_level: 'none',
    delivery_methods: ['oral'],
    dosing_standard: '2,000-5,000 IU daily (or based on blood levels)',
    dosing_timing: 'With a meal containing fat.',
    dosing_cycle_length: 'Continuous. Adjust based on blood levels.',
    dosing_notes: 'Get blood levels tested. Target 40-60 ng/mL. Take with K2 and fat.',
    goals: ['hormones', 'mood', 'recovery'],
    side_effects: ['Very safe at normal doses', 'Toxicity possible at very high doses long-term'],
    benefits: [
      { id: '1', title: 'Testosterone Support', description: 'Optimizing levels supports T in deficient men.', icon: 'trending-up', sort_order: 1 },
      { id: '2', title: 'Immune Function', description: 'Critical for immune system function.', icon: 'shield', sort_order: 2 },
      { id: '3', title: 'Mood Support', description: 'Deficiency linked to depression.', icon: 'sun', sort_order: 3 },
    ],
    warnings: [{ id: '1', warning_type: 'health', text: 'Get blood levels tested. Don\'t mega-dose without monitoring.', severity: 'low' }],
    sources: [{ id: '1', name: 'Any quality brand', url: '#', is_affiliate: false }],
  },
  {
    id: 'nat6',
    name: 'Omega-3 Fish Oil',
    slug: 'omega-3',
    category: 'natural',
    subcategory: 'Essential',
    one_liner: 'Essential fatty acids - supports cardiovascular health, brain function, and reduces inflammation.',
    overview: `Omega-3 fatty acids (EPA and DHA) are essential fats that most people don't get enough of. They're critical for brain function, cardiovascular health, and managing inflammation.

Higher EPA content is better for inflammation and mood. Higher DHA is better for brain structure and cognition. Most people benefit from both.

Quality matters - look for molecularly distilled, third-party tested products. Triglyceride form absorbs better than ethyl ester. Fish burps indicate oxidation/poor quality.

Particularly important if you don't eat fatty fish 2-3x per week.`,
    research_level: 'well-researched',
    suppression_level: 'none',
    delivery_methods: ['oral'],
    dosing_standard: '2-4g combined EPA/DHA daily',
    dosing_timing: 'With meals to reduce fish burps and improve absorption.',
    dosing_cycle_length: 'Continuous.',
    dosing_notes: 'Look for triglyceride form. Third-party tested. Keep refrigerated.',
    goals: ['recovery', 'cognition', 'mood'],
    side_effects: ['Fish burps (indicates poor quality)', 'May thin blood slightly', 'GI upset'],
    benefits: [
      { id: '1', title: 'Cardiovascular Health', description: 'Supports heart and blood vessel function.', icon: 'heart', sort_order: 1 },
      { id: '2', title: 'Brain Function', description: 'DHA is critical for brain structure.', icon: 'brain', sort_order: 2 },
      { id: '3', title: 'Anti-Inflammatory', description: 'EPA reduces systemic inflammation.', icon: 'shield', sort_order: 3 },
    ],
    warnings: [{ id: '1', warning_type: 'interaction', text: 'May enhance blood thinners. Discuss with doctor if on anticoagulants.', severity: 'low' }],
    sources: [{ id: '1', name: 'Nordic Naturals', url: 'https://nordicnaturals.com', is_affiliate: true }],
  },
  {
    id: 'nat7',
    name: 'Magnesium',
    slug: 'magnesium',
    category: 'natural',
    subcategory: 'Essential',
    one_liner: 'Critical mineral - supports sleep, recovery, testosterone, and 300+ enzymatic reactions.',
    overview: `Magnesium is involved in over 300 enzymatic reactions including energy production, protein synthesis, and muscle/nerve function. Deficiency is common and impairs sleep, recovery, and hormone function.

Different forms serve different purposes: Glycinate for sleep and relaxation, Threonate for cognition (crosses blood-brain barrier), Citrate for general supplementation, Taurate for cardiovascular.

Optimizing magnesium supports testosterone (especially if deficient), improves sleep quality, reduces muscle cramps, and supports recovery.

RDA is inadequate for active individuals. Most benefit from 300-500mg elemental magnesium daily.`,
    research_level: 'well-researched',
    suppression_level: 'none',
    delivery_methods: ['oral'],
    dosing_standard: '300-500mg elemental magnesium daily',
    dosing_timing: 'Glycinate at night for sleep. Others any time.',
    dosing_cycle_length: 'Continuous.',
    dosing_notes: 'Glycinate for sleep, Threonate for cognition, Citrate general. Avoid oxide (poor absorption).',
    goals: ['sleep', 'recovery', 'hormones'],
    side_effects: ['Loose stools at high doses (especially citrate)', 'Generally very safe'],
    benefits: [
      { id: '1', title: 'Sleep Quality', description: 'Glycinate form significantly improves sleep.', icon: 'moon', sort_order: 1 },
      { id: '2', title: 'Recovery Support', description: 'Critical for muscle function and repair.', icon: 'refresh-cw', sort_order: 2 },
      { id: '3', title: 'Hormone Support', description: 'Optimizing levels supports testosterone.', icon: 'trending-up', sort_order: 3 },
    ],
    warnings: [],
    sources: [{ id: '1', name: 'Nootropics Depot', url: 'https://nootropicsdepot.com', is_affiliate: true }],
  },
  {
    id: 'nat8',
    name: 'Zinc',
    slug: 'zinc',
    category: 'natural',
    subcategory: 'Essential',
    one_liner: 'Essential for testosterone - deficiency tanks T levels, optimizing restores them.',
    overview: `Zinc is critical for testosterone production, immune function, and protein synthesis. Deficiency is common in athletes due to losses through sweat and is associated with significantly reduced testosterone.

Supplementing zinc restores testosterone in deficient individuals but does NOT raise T above normal in those with adequate levels. It's not a testosterone "booster" - it prevents deficiency-induced suppression.

Different forms: Picolinate and glycinate absorb well. Avoid oxide (poor absorption). Balance with copper (ratio of 15:1 zinc to copper) to prevent copper deficiency.

Take with food to prevent nausea. Don't exceed 40mg long-term without copper.`,
    research_level: 'well-researched',
    suppression_level: 'none',
    delivery_methods: ['oral'],
    dosing_standard: '15-30mg daily',
    dosing_timing: 'With food to prevent nausea.',
    dosing_cycle_length: 'Continuous at moderate doses.',
    dosing_notes: 'Picolinate or glycinate forms. Balance with copper. Take with food.',
    goals: ['hormones', 'recovery'],
    side_effects: ['Nausea if taken without food', 'Copper deficiency at high doses', 'Metallic taste'],
    benefits: [
      { id: '1', title: 'Testosterone Support', description: 'Prevents deficiency-induced T reduction.', icon: 'trending-up', sort_order: 1 },
      { id: '2', title: 'Immune Function', description: 'Critical for immune system.', icon: 'shield', sort_order: 2 },
      { id: '3', title: 'Recovery', description: 'Supports protein synthesis and repair.', icon: 'refresh-cw', sort_order: 3 },
    ],
    warnings: [{ id: '1', warning_type: 'health', text: 'High doses deplete copper. Balance supplementation.', severity: 'low' }],
    sources: [{ id: '1', name: 'Any quality brand', url: '#', is_affiliate: false }],
  },

  // ============================================
  // PCT / HORMONE SUPPORT
  // ============================================
  {
    id: 'pct1',
    name: 'Enclomiphene',
    slug: 'enclomiphene',
    category: 'pct',
    subcategory: 'SERM',
    one_liner: 'Raises natural testosterone - increases LH/FSH without shutting down production.',
    overview: `Enclomiphene is the active trans-isomer of Clomiphene (Clomid) that selectively blocks estrogen receptors in the pituitary gland. This tricks the brain into producing more LH and FSH, signaling the testes to produce more testosterone.

Unlike TRT, enclomiphene keeps your natural production active rather than replacing it. This preserves fertility and testicular function. Users typically see testosterone levels increase to high-normal range or above.

Used standalone for testosterone optimization or as PCT after SARMs/steroids. Has fewer side effects than Clomid because it lacks the estrogenic isomer (zuclomiphene).`,
    research_level: 'well-researched',
    suppression_level: 'none',
    delivery_methods: ['oral'],
    dosing_standard: '12.5-25mg daily',
    dosing_timing: 'Once daily or every other day.',
    dosing_cycle_length: 'PCT: 4-6 weeks. Ongoing: Indefinite with monitoring.',
    dosing_notes: 'Enhances rather than suppresses production. Monitor T, LH, FSH, E2.',
    goals: ['hormones', 'muscle', 'energy'],
    side_effects: ['Vision disturbances (rare, usually reversible)', 'Mood changes', 'May reduce IGF-1', 'Hot flashes (rare)'],
    benefits: [
      { id: '1', title: 'Increased Testosterone', description: 'Raises natural T without replacement.', icon: 'trending-up', sort_order: 1 },
      { id: '2', title: 'Preserves Fertility', description: 'Maintains natural production and testicular function.', icon: 'shield', sort_order: 2 },
      { id: '3', title: 'Fewer Sides Than Clomid', description: 'Lacks estrogenic isomer causing Clomid sides.', icon: 'check', sort_order: 3 },
    ],
    warnings: [{ id: '1', warning_type: 'health', text: 'Stop immediately if visual disturbances occur.', severity: 'medium' }],
    sources: [{ id: '1', name: 'Amino Asylum', url: 'https://aminoasylum.com', is_affiliate: true }, { id: '2', name: 'Marek Health', url: 'https://marekhealth.com', is_affiliate: true, notes: 'Prescription' }],
  },
  {
    id: 'pct2',
    name: 'Tamoxifen (Nolvadex)',
    slug: 'tamoxifen',
    category: 'pct',
    subcategory: 'SERM',
    one_liner: 'Classic PCT drug - blocks estrogen at breast tissue and stimulates testosterone recovery.',
    overview: `Tamoxifen (Nolvadex) is a selective estrogen receptor modulator (SERM) that blocks estrogen at breast tissue while stimulating estrogen receptors in the pituitary, increasing LH and FSH.

The standard PCT drug for decades. Very effective at restoring natural testosterone production after suppression from SARMs or steroids. Also prevents and can reverse gynecomastia.

More side effects than Enclomiphene due to mixed estrogenic/anti-estrogenic activity. Common protocol is 20mg/day for 4-6 weeks post-cycle.`,
    research_level: 'well-researched',
    suppression_level: 'none',
    delivery_methods: ['oral'],
    dosing_standard: '10-20mg daily for PCT',
    dosing_timing: 'Once daily.',
    dosing_cycle_length: '4-6 weeks for PCT.',
    dosing_notes: 'Start PCT when suppressive compounds have cleared. Standard for post-cycle recovery.',
    goals: ['hormones'],
    side_effects: ['Hot flashes', 'Mood changes', 'Decreased libido during use', 'Visual disturbances (rare)', 'Blood clot risk (rare)'],
    benefits: [
      { id: '1', title: 'Testosterone Recovery', description: 'Stimulates natural T production.', icon: 'trending-up', sort_order: 1 },
      { id: '2', title: 'Gyno Prevention/Reversal', description: 'Blocks estrogen at breast tissue.', icon: 'shield', sort_order: 2 },
      { id: '3', title: 'Proven Track Record', description: 'Decades of use in PCT.', icon: 'check', sort_order: 3 },
    ],
    warnings: [
      { id: '1', warning_type: 'health', text: 'Small increased risk of blood clots with extended use.', severity: 'medium' },
      { id: '2', warning_type: 'legal', text: 'Prescription medication.', severity: 'low' },
    ],
    sources: [{ id: '1', name: 'Prescription or research chemical sources', url: '#', is_affiliate: false }],
  },
  {
    id: 'pct3',
    name: 'HCG (Human Chorionic Gonadotropin)',
    slug: 'hcg',
    category: 'pct',
    subcategory: 'Gonadotropin',
    one_liner: 'Mimics LH - maintains testicular function during TRT or jumpstarts recovery in PCT.',
    overview: `HCG mimics luteinizing hormone (LH), directly stimulating the testes to produce testosterone. Unlike SERMs which work through the pituitary, HCG works directly on the testes.

Used during TRT to maintain testicular size and function (and fertility). Also used in PCT to "wake up" the testes before transitioning to SERMs.

Does not restore the full HPTA - the pituitary remains suppressed while using HCG. That's why it's typically used WITH a SERM in PCT, or as ongoing support during TRT.

Requires reconstitution (mixing with bacteriostatic water) and refrigeration.`,
    research_level: 'well-researched',
    suppression_level: 'none',
    delivery_methods: ['injectable'],
    dosing_standard: 'TRT support: 250-500 IU 2-3x/week. PCT: 500-1000 IU EOD.',
    dosing_timing: '2-3x weekly subcutaneous injection.',
    dosing_cycle_length: 'TRT: Ongoing. PCT: 2-4 weeks before SERMs.',
    dosing_notes: 'Requires reconstitution. Refrigerate after mixing. Use with SERMs for full PCT.',
    goals: ['hormones'],
    side_effects: ['Estrogen increase (aromatizes)', 'Acne', 'Water retention', 'Desensitization at high doses'],
    benefits: [
      { id: '1', title: 'Testicular Maintenance', description: 'Prevents atrophy during TRT.', icon: 'shield', sort_order: 1 },
      { id: '2', title: 'Fertility Preservation', description: 'Maintains sperm production.', icon: 'heart', sort_order: 2 },
      { id: '3', title: 'Direct Stimulation', description: 'Works directly on testes, fast-acting.', icon: 'zap', sort_order: 3 },
    ],
    warnings: [
      { id: '1', warning_type: 'health', text: 'Can cause estrogen increase - may need AI.', severity: 'medium' },
      { id: '2', warning_type: 'health', text: 'Desensitization possible at high doses long-term.', severity: 'medium' },
      { id: '3', warning_type: 'legal', text: 'Prescription medication.', severity: 'low' },
    ],
    sources: [{ id: '1', name: 'Prescription required', url: '#', is_affiliate: false }],
  },

  // ============================================
  // LIVER / ORGAN SUPPORT
  // ============================================
  {
    id: 'sup1',
    name: 'TUDCA',
    slug: 'tudca',
    category: 'support',
    subcategory: 'Liver Support',
    one_liner: 'Premium liver protectant - essential when using oral steroids or hepatotoxic compounds.',
    overview: `TUDCA (Tauroursodeoxycholic acid) is a bile salt that provides powerful liver protection. It's significantly more effective than NAC or milk thistle for protecting against hepatotoxicity.

Works by improving bile flow, reducing ER stress, and preventing mitochondrial dysfunction in liver cells. Essential support when using oral steroids, prohormones, or other liver-stressing compounds.

Can also support liver health generally and has emerging research for metabolic and neurological benefits. Very safe with minimal side effects.`,
    research_level: 'well-researched',
    suppression_level: 'none',
    delivery_methods: ['oral'],
    dosing_standard: '250-500mg daily (general). 500-1000mg during oral cycle.',
    dosing_timing: 'With meals. Split doses if using higher amounts.',
    dosing_cycle_length: 'During hepatotoxic compound use and 2-4 weeks after.',
    dosing_notes: 'Essential when running oral steroids. More effective than NAC/milk thistle.',
    goals: ['recovery'],
    side_effects: ['Generally very well-tolerated', 'Mild GI upset possible'],
    benefits: [
      { id: '1', title: 'Liver Protection', description: 'Powerful hepatoprotective effects.', icon: 'shield', sort_order: 1 },
      { id: '2', title: 'Bile Flow', description: 'Improves bile acid metabolism.', icon: 'activity', sort_order: 2 },
      { id: '3', title: 'ER Stress Reduction', description: 'Protects cells from endoplasmic reticulum stress.', icon: 'heart', sort_order: 3 },
    ],
    warnings: [],
    sources: [{ id: '1', name: 'Nootropics Depot', url: 'https://nootropicsdepot.com', is_affiliate: true }],
  },
  {
    id: 'sup2',
    name: 'NAC (N-Acetyl Cysteine)',
    slug: 'nac',
    category: 'support',
    subcategory: 'Antioxidant',
    one_liner: 'Glutathione precursor - supports liver, respiratory health, and antioxidant defense.',
    overview: `NAC is a precursor to glutathione, the body's master antioxidant. It supports liver detoxification, respiratory health, and provides broad antioxidant protection.

Used medically to treat acetaminophen overdose (liver protection) and as a mucolytic for respiratory conditions. Also has research for mood support and addictive behavior reduction.

Less potent than TUDCA for liver protection during oral steroid cycles, but valuable for general antioxidant support. Can be used alongside TUDCA.

Take on empty stomach for best absorption. May deplete zinc and copper with long-term use.`,
    research_level: 'well-researched',
    suppression_level: 'none',
    delivery_methods: ['oral'],
    dosing_standard: '600-1800mg daily',
    dosing_timing: 'Empty stomach, away from meals.',
    dosing_cycle_length: 'Can use continuously.',
    dosing_notes: 'Empty stomach for absorption. May deplete zinc/copper long-term.',
    goals: ['recovery'],
    side_effects: ['GI upset', 'Sulfur smell to breath/urine', 'May deplete zinc/copper'],
    benefits: [
      { id: '1', title: 'Glutathione Support', description: 'Precursor to master antioxidant.', icon: 'shield', sort_order: 1 },
      { id: '2', title: 'Liver Support', description: 'Supports detoxification pathways.', icon: 'activity', sort_order: 2 },
      { id: '3', title: 'Respiratory Health', description: 'Mucolytic properties.', icon: 'wind', sort_order: 3 },
    ],
    warnings: [{ id: '1', warning_type: 'health', text: 'May deplete zinc and copper with long-term use.', severity: 'low' }],
    sources: [{ id: '1', name: 'Nootropics Depot', url: 'https://nootropicsdepot.com', is_affiliate: true }],
  },
  {
    id: 'sup3',
    name: 'Alpha-GPC',
    slug: 'alpha-gpc',
    category: 'support',
    subcategory: 'Cholinergic',
    one_liner: 'Bioavailable choline - fuels acetylcholine for memory, focus, and mind-muscle connection.',
    overview: `Alpha-GPC is the most bioavailable form of choline, efficiently crossing the blood-brain barrier. It provides raw material for acetylcholine synthesis.

Acetylcholine is the neurotransmitter for memory, focus, learning, and muscle contraction (mind-muscle connection). Alpha-GPC pairs well with nootropics like racetams that increase acetylcholine turnover.

Also has evidence for boosting growth hormone output when taken pre-workout. Foundational supplement for cognitive function with excellent safety profile.`,
    research_level: 'well-researched',
    suppression_level: 'none',
    delivery_methods: ['oral'],
    dosing_standard: '300-600mg daily',
    dosing_timing: 'Morning or pre-workout.',
    dosing_cycle_length: 'Can use continuously.',
    dosing_notes: 'Take with nootropics. Higher doses (600mg) before training.',
    goals: ['cognition', 'performance'],
    side_effects: ['Headache if choline too high', 'GI upset', 'Fishy body odor at high doses (rare)'],
    benefits: [
      { id: '1', title: 'Cognitive Support', description: 'Building blocks for acetylcholine.', icon: 'brain', sort_order: 1 },
      { id: '2', title: 'Mind-Muscle Connection', description: 'Enhanced focus during training.', icon: 'target', sort_order: 2 },
      { id: '3', title: 'GH Support', description: 'May boost GH when taken pre-workout.', icon: 'trending-up', sort_order: 3 },
    ],
    warnings: [],
    sources: [{ id: '1', name: 'Nootropics Depot', url: 'https://nootropicsdepot.com', is_affiliate: true }],
  },
  {
    id: 'sup4',
    name: 'P5P (Pyridoxal-5-Phosphate)',
    slug: 'p5p',
    category: 'support',
    subcategory: 'Vitamin',
    one_liner: 'Active B6 - controls prolactin and supports neurotransmitter synthesis.',
    overview: `P5P is the active, coenzyme form of vitamin B6. Unlike regular B6, it doesn't require liver conversion and is immediately usable by the body.

Critical for neurotransmitter synthesis (dopamine, serotonin, GABA) and helps regulate prolactin levels. Often used alongside compounds that can raise prolactin (like nandrolone or trenbolone).

Also supports hormone metabolism and immune function. More effective than regular B6 and avoids potential nerve toxicity from high-dose pyridoxine.`,
    research_level: 'well-researched',
    suppression_level: 'none',
    delivery_methods: ['oral'],
    dosing_standard: '50-100mg daily',
    dosing_timing: 'With meals.',
    dosing_cycle_length: 'Continuous or during cycles with prolactin-raising compounds.',
    dosing_notes: 'Active form - no conversion needed. Safer than high-dose regular B6.',
    goals: ['hormones', 'mood'],
    side_effects: ['Very well-tolerated', 'Vivid dreams in some'],
    benefits: [
      { id: '1', title: 'Prolactin Control', description: 'Helps regulate prolactin levels.', icon: 'trending-down', sort_order: 1 },
      { id: '2', title: 'Neurotransmitter Support', description: 'Essential for dopamine/serotonin synthesis.', icon: 'brain', sort_order: 2 },
      { id: '3', title: 'Safer Than B6', description: 'Avoids nerve toxicity risk of high-dose pyridoxine.', icon: 'shield', sort_order: 3 },
    ],
    warnings: [],
    sources: [{ id: '1', name: 'Any quality brand', url: '#', is_affiliate: false }],
  },
];

// ============================================
// STACKS
// ============================================
export const stacks: Stack[] = [
  {
    id: '1',
    name: 'No Needle Starter',
    slug: 'no-needle-starter',
    description: 'Best results without injections. Covers recovery, sleep, and cognitive performance.',
    goal: 'performance',
    duration: 'Ongoing',
    estimated_cost: '$100-150/month',
    what_to_expect: 'Week 1: Better sleep, appetite increase, sharper focus. Week 4-8: Improved recovery, body composition shifts.',
    warnings: 'Oral and nasal only. No testosterone suppression. No PCT needed. Monitor fasting glucose with MK-677.',
  },
  {
    id: '2',
    name: 'Cognitive Edge',
    slug: 'cognitive-edge',
    description: 'Sharpen focus, enhance memory, and protect your brain without stimulant crashes.',
    goal: 'cognition',
    duration: 'Ongoing with cycles',
    estimated_cost: '$100-150/month',
    what_to_expect: 'Day 1: Noticeable focus from Semax. Week 2-4: Cumulative benefits. Ongoing: Sustained clarity.',
    warnings: 'Non-injectable. No suppression. Cycle peptides 4 weeks on, 2 weeks off.',
  },
  {
    id: '3',
    name: 'Recovery Stack',
    slug: 'recovery-stack',
    description: 'Accelerate healing from injuries or accumulated wear. Ideal for joint/tendon issues.',
    goal: 'recovery',
    duration: '8 weeks',
    estimated_cost: '$180-250',
    what_to_expect: 'Week 1-2: Improved sleep. Week 3-4: Reduced pain. Week 5-8: Accumulated healing.',
    warnings: 'BPC-157 and TB-500 are injectable. MK-677 oral. No testosterone suppression.',
  },
  {
    id: '4',
    name: 'First SARM Cycle',
    slug: 'first-sarm-cycle',
    description: 'Entry point into SARMs. Ostarine provides noticeable results with manageable suppression.',
    goal: 'muscle',
    duration: '8 weeks',
    estimated_cost: '$100-150',
    what_to_expect: 'Week 2-3: Strength increases. Week 4-8: 3-6 lbs lean mass. Post-cycle: Some suppression.',
    warnings: 'Will suppress testosterone (15-30%). Get blood work. PCT optional but recommended.',
  },
  {
    id: '5',
    name: 'Natural Foundation',
    slug: 'natural-foundation',
    description: 'Optimize hormones and performance naturally. Essential before considering anything else.',
    goal: 'hormones',
    duration: 'Ongoing',
    estimated_cost: '$50-80/month',
    what_to_expect: 'Week 2-4: Improved sleep and energy. Week 4-8: Better stress response, modest T optimization.',
    warnings: 'All natural supplements. No suppression. Get vitamin D levels tested.',
  },
  {
    id: '6',
    name: 'TRT Optimization',
    slug: 'trt-optimization',
    description: 'For those on TRT - add compounds to maximize benefits while supporting health.',
    goal: 'muscle',
    duration: 'Ongoing',
    estimated_cost: '$200-300/month',
    what_to_expect: 'Ongoing: Enhanced recovery, better sleep, improved body composition, maintained fertility.',
    warnings: 'Requires existing TRT prescription. HCG preserves fertility. Monitor all relevant markers.',
  },
  {
    id: '7',
    name: 'Weight Loss Protocol',
    slug: 'weight-loss-protocol',
    description: 'Maximum fat loss while preserving muscle. Built around GLP-1 medications.',
    goal: 'fat-loss',
    duration: '12-16 weeks minimum',
    estimated_cost: '$300-500/month',
    what_to_expect: 'Week 1-4: Appetite dramatically reduced. Week 8-16: 10-15% body weight loss typical.',
    warnings: 'MUST maintain high protein (1g/lb) and resistance training or will lose muscle.',
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================
export function getCompoundBySlug(slug: string): Compound | undefined {
  return compounds.find(c => c.slug === slug);
}

export function getCompoundsByCategory(category: string): Compound[] {
  return compounds.filter(c => c.category === category);
}

export function getCompoundsByGoal(goal: string): Compound[] {
  return compounds.filter(c => c.goals.includes(goal as any));
}

export function getStackBySlug(slug: string): Stack | undefined {
  return stacks.find(s => s.slug === slug);
}

export function searchCompounds(query: string): Compound[] {
  const lowerQuery = query.toLowerCase();
  return compounds.filter(c => 
    c.name.toLowerCase().includes(lowerQuery) ||
    c.one_liner.toLowerCase().includes(lowerQuery) ||
    c.category.toLowerCase().includes(lowerQuery) ||
    c.subcategory?.toLowerCase().includes(lowerQuery) ||
    c.goals.some(g => g.toLowerCase().includes(lowerQuery))
  );
}

// ============================================
// BLOG POSTS
// ============================================
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'beginners-guide-to-peptides',
    title: "The Beginner's Guide to Peptides",
    excerpt: 'Everything you need to know before starting peptides - from what they are to how to use them safely.',
    content: `Peptides are short chains of amino acids that signal your body to perform specific functions. Unlike anabolic steroids, most peptides work WITH your body's natural systems rather than overriding them.

## Why Peptides Are Different

When you take a steroid like testosterone, you're adding exogenous hormones to your body. Your natural production shuts down. With most peptides, you're signaling your body to produce MORE of what it already makes.

## The Main Categories

**GH Secretagogues** - MK-677, Ipamorelin, CJC-1295. These tell your pituitary to release more growth hormone. Benefits include better sleep, recovery, and body composition.

**Healing Peptides** - BPC-157, TB-500. These accelerate tissue repair. Popular for injuries, gut issues, and general recovery.

**Metabolic Peptides** - Semaglutide, Tirzepatide. GLP-1 agonists that reduce appetite and improve metabolic health.

## Starting Out

Most people start with either MK-677 (oral, no injections) or a combo of Ipamorelin + CJC-1295. Both are well-tolerated with minimal side effects.

The key is starting low, being consistent, and giving it time. Peptides aren't steroids - you won't see dramatic changes in a week. But over 2-3 months, the compound effects are significant.`,
    category: 'Guides',
    published_at: '2025-01-01',
    read_time: 5,
  },
  {
    id: '2',
    slug: 'mk677-complete-guide',
    title: 'MK-677: The Complete Guide',
    excerpt: 'Deep dive into Ibutamoren - dosing, timing, what to expect, and how to manage side effects.',
    content: `MK-677 (Ibutamoren) is hands down the most popular entry point into performance peptides. Why? It's oral (no injections), doesn't suppress testosterone, and the effects are noticeable quickly.

## How It Works

MK-677 mimics ghrelin, the hunger hormone. When it binds to ghrelin receptors in your brain, it tells your pituitary to release growth hormone. It also prevents somatostatin (GH inhibitor) from doing its job.

The result: elevated GH and IGF-1 levels around the clock.

## What You'll Notice

**Week 1**: Better sleep. This is usually the first thing people notice. You fall asleep faster, sleep deeper, and wake up more refreshed.

**Weeks 2-4**: Increased appetite. For some people this is dramatic - like constantly hungry. It usually mellows out.

**Weeks 4-8**: Improved recovery. Workouts feel easier to bounce back from. Minor aches heal faster.

**Months 2-3+**: Body composition changes. Gradual fat loss (especially visceral), better muscle fullness, improved skin.

## Dosing

Start at 10-15mg daily. Most people settle at 20-25mg. Take it before bed so you sleep through the appetite spike.

## The Catch

Long-term use can impact insulin sensitivity. Get fasting glucose checked every 8-12 weeks if running it continuously. Cycle off periodically (8-12 weeks on, 4 weeks off is common).`,
    category: 'Compound Guides',
    published_at: '2025-01-02',
    read_time: 7,
  },
  {
    id: '3',
    slug: 'sarms-vs-steroids',
    title: 'SARMs vs Steroids: The Real Differences',
    excerpt: 'An honest breakdown of how SARMs compare to traditional anabolic steroids - benefits, risks, and what the science actually says.',
    content: `The marketing says SARMs are "steroids without the side effects." The reality is more nuanced. Let's break it down honestly.

## What SARMs Actually Are

SARMs (Selective Androgen Receptor Modulators) bind to the same receptors as testosterone but are designed to be tissue-selective - hitting muscle and bone while avoiding prostate, hair follicles, and other tissues.

In theory, this means gains without hair loss, prostate issues, or severe suppression. In practice? It's complicated.

## The Reality

**They DO suppress testosterone.** Not as much as steroids, but meaningful suppression happens. RAD-140 at 10mg can drop your T by 30-50%. Ostarine is milder but still suppressive.

**They DO have side effects.** Liver stress (especially with some compounds), lipid changes, potential hair shedding in those genetically prone.

**They ARE less researched.** Most SARMs have limited human data. You're essentially a test subject.

## When SARMs Make Sense

- You want something milder than steroids
- You're not ready for injectable protocols
- You want a first cycle to see how your body responds
- You accept the legal gray area

## When Steroids Make More Sense

- You want predictable, well-documented compounds
- You're working with a doctor
- You're committing to proper PCT
- You want maximum results

The bottom line: SARMs aren't "safe steroids." They're a different tool with their own risk/reward profile.`,
    category: 'Education',
    published_at: '2025-01-03',
    read_time: 6,
  },
  {
    id: '4',
    slug: 'bpc-157-healing-protocol',
    title: 'BPC-157: The Healing Protocol',
    excerpt: 'How to use BPC-157 for tendon, ligament, gut, and injury recovery - dosing, injection sites, and realistic expectations.',
    content: `BPC-157 is the most popular healing peptide for good reason - the anecdotal reports are impressive, and the mechanism of action makes biological sense.

## What It Does

BPC-157 is a 15-amino acid sequence derived from a protein in gastric juice. It promotes healing through multiple pathways:

- Increases growth hormone receptor expression
- Promotes angiogenesis (new blood vessel formation)
- Modulates the nitric oxide system
- Has anti-inflammatory effects

## What People Use It For

**Tendon/Ligament injuries** - This is the most common use. Nagging elbow, shoulder, knee issues that won't heal.

**Gut healing** - Originally studied for IBD. Works well for leaky gut, ulcers, and general GI issues.

**Post-surgery recovery** - Accelerating healing after surgical procedures.

**Muscle tears** - Faster recovery from muscle injuries.

## How To Use It

**Dosing**: 250-500mcg daily, once or twice daily.

**Injection**: Subcutaneous, can inject near injury site or just in belly fat. Both work - local may be slightly faster for that area.

**Oral**: Works for gut issues specifically. Less effective systemically.

**Duration**: 4-8 weeks typically. Can run longer if needed.

## Realistic Expectations

BPC-157 isn't magic. A severe injury that needs surgery still needs surgery. But for those nagging issues that "almost" heal then flare up again, it can be the difference-maker.

Expect gradual improvement over weeks, not overnight miracles.`,
    category: 'Compound Guides',
    published_at: '2025-01-04',
    read_time: 6,
  },
];
