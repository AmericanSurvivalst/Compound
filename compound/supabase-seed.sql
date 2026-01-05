-- Compound App Seed Data
-- Run this AFTER the schema

-- ============================================
-- COMPOUNDS
-- ============================================

INSERT INTO compounds (name, slug, category, subcategory, one_liner, overview, research_level, suppression_level, delivery_methods, dosing_standard, dosing_timing, dosing_cycle_length, dosing_notes, goals, side_effects) VALUES

-- MK-677
(
  'MK-677',
  'mk-677',
  'peptide',
  'gh-secretagogue',
  'Oral growth hormone secretagogue — improves sleep, recovery, and body composition without injections.',
  'MK-677 (Ibutamoren) is technically not a peptide but a non-peptide ghrelin mimetic that stimulates growth hormone release. Because it survives digestion, it can be taken orally — making it one of the most accessible GH-boosting compounds available. It significantly improves sleep quality, enhances recovery, and supports muscle retention and fat loss over time. Users typically notice better sleep within the first week, with body composition changes becoming apparent over 2-3 months of consistent use.',
  'moderate',
  'none',
  ARRAY['oral']::delivery_method[],
  '15-25mg daily',
  'Before bed (to sleep through appetite spike and maximize GH release during sleep)',
  'Can run indefinitely with breaks, or 8-12 weeks on, 4 weeks off',
  'Start at 15mg to assess appetite increase. Some users split dose AM/PM but nighttime dosing is most common. Monitor fasting glucose with long-term use.',
  ARRAY['muscle', 'recovery', 'sleep', 'fat-loss']::goal_type[],
  ARRAY['Increased appetite (significant first 2-3 weeks)', 'Water retention and bloating initially', 'Potential impact on insulin sensitivity with long-term use', 'Lethargy in some users', 'Numbness or tingling in hands (rare)']
),

-- BPC-157
(
  'BPC-157',
  'bpc-157',
  'peptide',
  'recovery',
  'The healing peptide — accelerates tissue repair, gut health, and injury recovery.',
  'BPC-157 (Body Protection Compound-157) is a peptide derived from a protein found in human gastric juice. It has remarkable healing properties across multiple tissue types — tendons, ligaments, muscle, gut lining, and even nerve tissue. Athletes use it to recover from injuries faster, while others use it for gut healing (leaky gut, IBS, ulcers). It also has neuroprotective properties and can help regulate the dopamine system. BPC-157 is one of the most versatile and well-tolerated peptides available.',
  'moderate',
  'none',
  ARRAY['injectable', 'oral']::delivery_method[],
  '250-500mcg per day',
  'Once daily or split AM/PM. Can inject near injury site for localized effect.',
  '4-8 weeks, or as needed for injury recovery',
  'Injectable is preferred for systemic effects (tendon, joint, muscle healing). Oral is effective for gut-specific issues. Subcutaneous injection into belly fat or near injury site.',
  ARRAY['recovery', 'performance']::goal_type[],
  ARRAY['Generally very well-tolerated', 'Mild nausea in some users initially', 'Possible lightheadedness at higher doses', 'Slight dizziness (rare)']
),

-- TB-500
(
  'TB-500',
  'tb-500',
  'peptide',
  'recovery',
  'Systemic healing peptide — reduces inflammation and promotes tissue repair throughout the body.',
  'TB-500 (Thymosin Beta-4) is a naturally occurring peptide present in almost all human and animal cells. It plays a crucial role in tissue repair, cell migration, and blood vessel formation. TB-500 promotes healing by reducing inflammation, encouraging cell migration to injury sites, and supporting the formation of new blood vessels. It works systemically rather than locally, making it effective for multiple injuries or general recovery. Often stacked with BPC-157 for enhanced healing effects.',
  'moderate',
  'none',
  ARRAY['injectable']::delivery_method[],
  '2-2.5mg twice weekly (loading), then 2mg weekly (maintenance)',
  'Inject subcutaneously. Timing is flexible.',
  '4-8 weeks loading, then maintenance as needed',
  'Loading phase of 4-6 weeks with twice-weekly injections, then drop to once weekly for maintenance. Can be run alongside BPC-157 for synergistic effects.',
  ARRAY['recovery', 'performance']::goal_type[],
  ARRAY['Generally well-tolerated', 'Mild head rush immediately after injection (rare)', 'Temporary fatigue', 'Flu-like symptoms (rare, typically first dose)']
),

-- Ipamorelin
(
  'Ipamorelin',
  'ipamorelin',
  'peptide',
  'gh-secretagogue',
  'Clean growth hormone release — stimulates natural GH production without affecting cortisol or prolactin.',
  'Ipamorelin is a growth hormone releasing peptide (GHRP) that stimulates the pituitary gland to produce more growth hormone. What makes it unique is its selectivity — it triggers GH release without significantly impacting cortisol, prolactin, or appetite (unlike other GHRPs like GHRP-6). This makes it one of the cleanest and most side-effect-free options for GH optimization. Users experience improved sleep, better recovery, gradual fat loss, and anti-aging benefits. Typically stacked with CJC-1295 for synergistic effects.',
  'moderate',
  'none',
  ARRAY['injectable']::delivery_method[],
  '200-300mcg per injection',
  'Before bed for optimal GH release during sleep. Can also dose AM on empty stomach.',
  'Can run ongoing. Common protocols: 5 days on 2 days off, or daily.',
  'Inject subcutaneously on empty stomach (food, especially fats and carbs, blunts GH release). Best combined with CJC-1295 (no DAC) in the same syringe.',
  ARRAY['recovery', 'sleep', 'fat-loss', 'longevity']::goal_type[],
  ARRAY['Very well-tolerated', 'Possible water retention initially', 'Tingling or numbness (rare)', 'Headache (rare, usually from dehydration)']
),

-- CJC-1295
(
  'CJC-1295',
  'cjc-1295',
  'peptide',
  'gh-secretagogue',
  'Growth hormone releasing hormone — extends GH pulses for sustained elevation.',
  'CJC-1295 is a synthetic analog of growth hormone releasing hormone (GHRH). It works by extending the duration of growth hormone pulses rather than just triggering them. Available in two forms: with DAC (Drug Affinity Complex) which has a longer half-life of about a week, and without DAC (also called Mod GRF 1-29) with a shorter half-life requiring more frequent dosing. The no-DAC version is preferred by most users as it creates more natural GH pulsing patterns and is typically combined with Ipamorelin for synergistic effects.',
  'moderate',
  'none',
  ARRAY['injectable']::delivery_method[],
  '200-300mcg per injection (no DAC version)',
  'Before bed, combined with Ipamorelin. Empty stomach.',
  'Can run ongoing. 5 days on 2 days off, or daily.',
  'The "no DAC" version (Mod GRF 1-29) is preferred for daily use. The DAC version only requires 1-2 injections per week but creates less natural GH patterns. Combine with Ipamorelin in same syringe.',
  ARRAY['recovery', 'sleep', 'fat-loss', 'longevity']::goal_type[],
  ARRAY['Generally well-tolerated', 'Flushing or warmth after injection', 'Water retention', 'Fatigue initially as body adjusts']
),

-- Semax
(
  'Semax',
  'semax',
  'nootropic',
  'neurotrophic',
  'Nasal nootropic — enhances focus, memory, and neuroprotection without stimulants.',
  'Semax is a synthetic peptide derived from ACTH (adrenocorticotropic hormone) developed in Russia for cognitive enhancement and neuroprotection. It increases BDNF (brain-derived neurotrophic factor), which supports the growth and maintenance of neurons. Users experience improved focus, mental clarity, better memory, and enhanced mood — all without the jitters, crash, or dependency associated with stimulants. Semax is delivered as a nasal spray, making it easy to use and fast-acting. It has been used clinically in Russia for decades.',
  'moderate',
  'none',
  ARRAY['nasal']::delivery_method[],
  '200-600mcg daily',
  'Split into 2-3 doses throughout the day. Morning and early afternoon.',
  '2-4 weeks on, 2 weeks off. Or as needed for cognitive demand.',
  'Nasal spray is standard delivery. Effects are noticeable within 15-30 minutes. Can be used daily during high-demand periods. The acetylated version (NA-Semax Amidate) is stronger and longer-lasting.',
  ARRAY['cognition', 'mood', 'energy']::goal_type[],
  ARRAY['Very well-tolerated', 'Mild nasal irritation', 'Headache if dehydrated', 'Overstimulation at very high doses (rare)']
),

-- Selank
(
  'Selank',
  'selank',
  'nootropic',
  'neurotrophic',
  'Anxiolytic nootropic — reduces anxiety and stress while supporting cognitive function.',
  'Selank is a synthetic peptide developed alongside Semax in Russia. While Semax is more stimulating and focus-oriented, Selank is calming and anti-anxiety. It modulates GABA and serotonin systems, reducing anxiety and stress without sedation or cognitive impairment. Users report feeling calmer, more emotionally stable, and better able to handle stressful situations. It also has mild cognitive benefits and can be stacked with Semax for balanced focus and calm. Like Semax, it is delivered as a nasal spray.',
  'moderate',
  'none',
  ARRAY['nasal']::delivery_method[],
  '200-400mcg daily',
  'Once daily or split into 2 doses. Can be used as needed for stressful situations.',
  'Same as Semax: 2-4 weeks on, 2 weeks off. Or as needed.',
  'Can be combined with Semax — Semax for focus, Selank for stress management. The acetylated version (NA-Selank Amidate) is more potent.',
  ARRAY['cognition', 'mood']::goal_type[],
  ARRAY['Very well-tolerated', 'Mild nasal irritation', 'Fatigue at higher doses (rare)', 'May enhance effects of alcohol']
),

-- Dihexa
(
  'Dihexa',
  'dihexa',
  'nootropic',
  'neurotrophic',
  'Powerful cognitive enhancer — dramatically increases BDNF for memory and learning.',
  'Dihexa is a small molecule derived from angiotensin IV that has shown remarkable cognitive-enhancing effects in research. It increases BDNF by orders of magnitude more than other nootropics, potentially creating new neural connections and enhancing synaptic plasticity. Users report significant improvements in memory, learning capacity, and mental clarity. Because of its potency, it should be used in short cycles rather than continuously. Limited human research exists, so it falls into the more experimental category.',
  'experimental',
  'none',
  ARRAY['oral', 'sublingual']::delivery_method[],
  '10-20mg daily',
  'Once daily, morning. Sublingual may improve absorption.',
  '2-4 weeks max, then extended break',
  'Start at lower dose (5-10mg) to assess tolerance. Very potent — more is not better. Use during periods requiring peak cognitive performance, not as a daily driver.',
  ARRAY['cognition']::goal_type[],
  ARRAY['Limited human safety data', 'Headache reported by some users', 'Overstimulation possible', 'Unknown long-term effects']
),

-- NA-Semax Amidate
(
  'NA-Semax Amidate',
  'na-semax-amidate',
  'nootropic',
  'neurotrophic',
  'Enhanced Semax — stronger, longer-lasting focus and neuroprotection.',
  'NA-Semax Amidate is an acetylated and amidated version of Semax, making it more potent and longer-lasting than the original. The modifications improve its stability and enhance its effects on BDNF and cognitive function. Users who find regular Semax too subtle often prefer this version for its more noticeable impact on focus, mental clarity, and motivation. Same nasal spray delivery, but requires lower doses due to increased potency.',
  'moderate',
  'none',
  ARRAY['nasal']::delivery_method[],
  '100-300mcg daily',
  'Split into 2 doses. Morning and early afternoon.',
  '2-4 weeks on, 2 weeks off',
  'Lower doses needed compared to regular Semax due to enhanced potency. Effects last longer — afternoon dosing may affect sleep in sensitive individuals.',
  ARRAY['cognition', 'mood', 'energy']::goal_type[],
  ARRAY['Well-tolerated', 'Nasal irritation', 'Overstimulation if dosed too high', 'Potential sleep disruption with late dosing']
),

-- NA-Selank Amidate
(
  'NA-Selank Amidate',
  'na-selank-amidate',
  'nootropic',
  'neurotrophic',
  'Enhanced Selank — deeper anxiolytic effects with improved mood stabilization.',
  'NA-Selank Amidate is the enhanced version of Selank, featuring modifications that increase its potency and duration of action. It provides stronger anti-anxiety effects and more pronounced mood stabilization than regular Selank. Users dealing with significant stress, anxiety, or emotional volatility often prefer this version. Stacks well with NA-Semax Amidate for a balanced cognitive and emotional state.',
  'moderate',
  'none',
  ARRAY['nasal']::delivery_method[],
  '100-300mcg daily',
  'Once daily or as needed for stress',
  '2-4 weeks on, 2 weeks off',
  'Stronger than regular Selank — start with lower doses. Good for acute stress situations or ongoing anxiety management.',
  ARRAY['cognition', 'mood']::goal_type[],
  ARRAY['Well-tolerated', 'Nasal irritation', 'Drowsiness at higher doses', 'Enhanced alcohol effects']
),

-- Pinealon
(
  'Pinealon',
  'pinealon',
  'nootropic',
  'neurotrophic',
  'Sleep and circadian peptide — supports melatonin production and brain health.',
  'Pinealon is a short-chain peptide (just 3 amino acids) that targets the pineal gland. It supports natural melatonin production and helps regulate circadian rhythm. Users report improved sleep quality, easier time falling asleep, and more refreshing rest. Because of its small size, it survives digestion and can be taken orally or sublingually. Beyond sleep, it has neuroprotective properties and may support cognitive function through better rest and brain recovery.',
  'moderate',
  'none',
  ARRAY['oral', 'sublingual']::delivery_method[],
  '10-20mg daily',
  'Before bed',
  'Can run ongoing or in cycles',
  'One of the few peptides that works orally due to its tiny size (tripeptide). Take 30-60 minutes before intended sleep time.',
  ARRAY['sleep', 'longevity', 'cognition']::goal_type[],
  ARRAY['Very well-tolerated', 'Vivid dreams (some users)', 'Morning grogginess if dosed too high']
),

-- RAD-140
(
  'RAD-140',
  'rad-140',
  'sarm',
  'muscle-building',
  'Powerful SARM — significant strength and muscle gains with notable testosterone suppression.',
  'RAD-140 (Testolone) is one of the strongest SARMs available, producing steroid-like results in terms of strength and muscle gains. It binds to androgen receptors selectively, primarily targeting muscle and bone tissue. Users experience rapid strength increases, a hard and dry look (no water retention), and noticeable muscle fullness. However, it is significantly suppressive to natural testosterone production — PCT is mandatory after a cycle. Some users report increased aggression or mood changes. Best suited for experienced users who understand the risks.',
  'moderate',
  'significant',
  ARRAY['oral']::delivery_method[],
  '10-20mg daily',
  'Once daily, morning. With or without food.',
  '6-8 weeks maximum',
  'Very suppressive — blood work before and after is strongly recommended. PCT with Nolvadex or Clomid required. Not for beginners.',
  ARRAY['muscle', 'performance']::goal_type[],
  ARRAY['Testosterone suppression (significant)', 'Potential mood changes and aggression', 'Hair shedding in those prone', 'Elevated liver enzymes possible', 'Headaches', 'Insomnia in some users']
),

-- Ostarine
(
  'Ostarine',
  'ostarine',
  'sarm',
  'muscle-building',
  'Mild SARM — muscle preservation and moderate gains with lower suppression.',
  'Ostarine (MK-2866, Enobosarm) is the most researched and mildest SARM available. It went through Phase 2 clinical trials for muscle wasting before development stalled. Users experience modest muscle gains, improved strength, and excellent muscle preservation during a caloric deficit. It is less suppressive than other SARMs but still affects natural testosterone — PCT is typically needed, especially at higher doses or longer cycles. Good entry point for those exploring SARMs.',
  'well-researched',
  'mild',
  ARRAY['oral']::delivery_method[],
  '10-25mg daily',
  'Once daily, morning. With or without food.',
  '8-12 weeks',
  'Mildest SARM but still suppressive. Blood work recommended. PCT with Nolvadex typically sufficient. Good for cutting or recomposition.',
  ARRAY['muscle', 'recovery']::goal_type[],
  ARRAY['Testosterone suppression (mild to moderate)', 'Headaches', 'Back pain reported by some', 'Potential lipid changes']
),

-- LGD-4033
(
  'LGD-4033',
  'lgd-4033',
  'sarm',
  'muscle-building',
  'Mass-building SARM — noticeable size and strength gains with water retention.',
  'LGD-4033 (Ligandrol) is a popular SARM for bulking, producing more significant size and strength gains than Ostarine. It also went through Phase 1 clinical trials. Users experience noticeable muscle fullness and strength increases, though some of this is water retention that subsides after the cycle. It is more suppressive than Ostarine — blood work and PCT are strongly recommended. Best used for dedicated bulking phases.',
  'well-researched',
  'mild',
  ARRAY['oral']::delivery_method[],
  '5-10mg daily',
  'Once daily, morning.',
  '8 weeks maximum',
  'More suppressive than Ostarine. Expect some water retention and potential lethargy toward end of cycle as suppression accumulates. PCT required.',
  ARRAY['muscle', 'performance']::goal_type[],
  ARRAY['Testosterone suppression (moderate)', 'Water retention', 'Lethargy toward end of cycle', 'Headaches', 'Potential lipid changes']
),

-- Enclomiphene
(
  'Enclomiphene',
  'enclomiphene',
  'pct',
  'testosterone-support',
  'Raises natural testosterone — increases LH and FSH without shutting down production.',
  'Enclomiphene is the active isomer of Clomiphene (Clomid) that selectively blocks estrogen receptors in the pituitary gland. This tricks the brain into producing more LH and FSH, which signals the testes to produce more testosterone. Unlike TRT, it keeps your natural production active rather than replacing it. Users experience increased testosterone levels (often to the higher end of normal or above), improved energy, libido, and body composition. Can be used as standalone testosterone optimization or as PCT after SARMs.',
  'well-researched',
  'none',
  ARRAY['oral']::delivery_method[],
  '12.5-25mg daily',
  'Once daily or every other day.',
  'Can run ongoing with monitoring, or standard PCT length of 4-6 weeks',
  'Does not suppress natural production — it enhances it. Blood work to monitor testosterone, LH, FSH, and estradiol. Some users experience vision sides at higher doses (rare with Enclomiphene vs Clomid).',
  ARRAY['hormones', 'muscle', 'energy']::goal_type[],
  ARRAY['Vision disturbances (rare, usually reversible)', 'Mood changes', 'May lower IGF-1 slightly', 'Hot flashes (rare)']
),

-- Semaglutide
(
  'Semaglutide',
  'semaglutide',
  'peptide',
  'metabolic',
  'FDA-approved weight loss — powerful appetite suppression and metabolic improvement.',
  'Semaglutide is a GLP-1 receptor agonist that was developed for type 2 diabetes and later approved for weight loss (Ozempic for diabetes, Wegovy for weight loss). It dramatically reduces appetite, slows gastric emptying, and improves insulin sensitivity. Clinical trials showed average weight loss of 15% or more of body weight. It is the most researched and proven weight loss compound available. Requires weekly injection. Side effects are primarily GI-related and usually improve over time.',
  'well-researched',
  'none',
  ARRAY['injectable']::delivery_method[],
  'Start 0.25mg weekly, titrate up to 1-2.4mg weekly',
  'Once weekly injection, same day each week',
  'Long-term use — effects reverse if discontinued',
  'Start low and titrate slowly to minimize GI side effects. Must maintain high protein intake and resistance training to preserve muscle mass. Oral version (Rybelsus) also available but less convenient.',
  ARRAY['fat-loss']::goal_type[],
  ARRAY['Nausea (very common, improves over time)', 'Constipation or diarrhea', 'Muscle loss if protein intake is inadequate', 'Gallbladder issues with rapid weight loss', 'Pancreatitis (rare)', 'Unknown long-term effects']
),

-- IGF-1 LR3
(
  'IGF-1 LR3',
  'igf-1-lr3',
  'peptide',
  'muscle-building',
  'Long-acting growth factor — drives protein synthesis and muscle growth directly.',
  'IGF-1 LR3 is a modified version of Insulin-Like Growth Factor 1 with an extended half-life (about 20-30 hours vs 20 minutes for regular IGF-1). It is the downstream signal that growth hormone creates — the actual driver of many anabolic effects. It enhances protein synthesis, increases nitrogen retention, and may promote hyperplasia (creation of new muscle cells, not just enlargement of existing ones). This is one of the most powerful peptides for muscle growth but comes with more risk than basic GH secretagogues.',
  'moderate',
  'none',
  ARRAY['injectable']::delivery_method[],
  '20-50mcg daily',
  'Post-workout or split AM/PM. Inject subcutaneously or intramuscularly into target muscles.',
  '4-6 weeks on, then equal time off',
  'Can affect blood sugar — use with caution if insulin sensitive. Cycle it rather than running continuously. Some users inject directly into trained muscles for localized effect.',
  ARRAY['muscle', 'performance', 'recovery']::goal_type[],
  ARRAY['Hypoglycemia if not eating properly', 'Potential organ growth with long-term abuse', 'Joint pain', 'Headaches', 'Unknown long-term effects']
),

-- Follistatin-344
(
  'Follistatin-344',
  'follistatin-344',
  'peptide',
  'muscle-building',
  'Myostatin inhibitor — blocks the genetic limit on muscle growth.',
  'Follistatin-344 inhibits myostatin, the protein that limits how much muscle your body can build. Every person has a genetic ceiling for muscle mass — myostatin is the brake. Follistatin releases that brake, potentially allowing muscle growth beyond natural genetic limits. Animal studies show dramatic increases in muscle mass. Human data is limited, but the mechanism is well-understood. This is one of the more experimental compounds for muscle building, with high potential but also unknown long-term implications.',
  'experimental',
  'none',
  ARRAY['injectable']::delivery_method[],
  '100mcg daily',
  'Once daily, subcutaneous injection',
  '10-30 days, then extended break',
  'Short cycles recommended due to limited human data. Expensive and harder to source. Mechanism is powerful — you are modifying genetic signaling pathways.',
  ARRAY['muscle', 'performance']::goal_type[],
  ARRAY['Limited human safety data', 'Unknown long-term effects on other systems', 'Potential impact on tendons/ligaments (unknown)', 'Immune response possible']
),

-- Alpha-GPC
(
  'Alpha-GPC',
  'alpha-gpc',
  'support',
  'cholinergic',
  'Bioavailable choline — fuels acetylcholine for memory, focus, and mind-muscle connection.',
  'Alpha-GPC (Alpha-glycerophosphocholine) is the most bioavailable form of choline, a nutrient essential for brain function. It crosses the blood-brain barrier efficiently and provides the raw material for acetylcholine synthesis. Acetylcholine is the neurotransmitter responsible for memory, focus, learning, and the mind-muscle connection during training. Alpha-GPC also has some evidence for boosting growth hormone output. It pairs well with nootropics like Semax, amplifying their effects by ensuring adequate choline availability.',
  'well-researched',
  'none',
  ARRAY['oral']::delivery_method[],
  '300-600mg daily',
  'Morning or pre-workout',
  'Can run indefinitely',
  'Take with nootropics to fuel their mechanisms. Can be taken daily. Higher doses before training for enhanced mind-muscle connection. Some evidence for GH boosting effects.',
  ARRAY['cognition', 'performance']::goal_type[],
  ARRAY['Generally very well-tolerated', 'Headache if choline levels get too high', 'Fishy body odor at very high doses (rare)', 'GI upset in some users']
),

-- Lions Mane
(
  'Lions Mane',
  'lions-mane',
  'support',
  'neurotrophic',
  'Neurogenic mushroom — stimulates nerve growth factor for brain health and repair.',
  'Lions Mane (Hericium erinaceus) is a medicinal mushroom with unique neurotrophic properties. It stimulates the production of Nerve Growth Factor (NGF), which supports the growth, maintenance, and repair of neurons. Users report improved memory, mental clarity, reduced brain fog, and better mood over time. Unlike synthetic nootropics, the effects build gradually over weeks to months of consistent use. It works on different pathways than Semax (which targets BDNF), making them complementary. Choose fruiting body extracts, not mycelium, for actual potency.',
  'well-researched',
  'none',
  ARRAY['oral']::delivery_method[],
  '500-1000mg daily',
  'Any time. With food is fine.',
  'Ongoing — effects are cumulative',
  'Must use fruiting body extract, not mycelium grown on grain (which is mostly starch). Look for products standardized to beta-glucans. Effects take 2-4 weeks to become noticeable.',
  ARRAY['cognition', 'mood', 'longevity']::goal_type[],
  ARRAY['Very well-tolerated', 'Mild GI upset in some users initially', 'May affect those with mushroom allergies', 'Possible interaction with blood thinners']
);

-- ============================================
-- BENEFITS
-- ============================================

-- MK-677 Benefits
INSERT INTO benefits (compound_id, title, description, icon, sort_order) 
SELECT id, 'Improved Sleep', 'Significantly enhances sleep quality and depth. Many users notice this within the first few days.', 'moon', 1 FROM compounds WHERE slug = 'mk-677';
INSERT INTO benefits (compound_id, title, description, icon, sort_order) 
SELECT id, 'Enhanced Recovery', 'Faster recovery between training sessions. Reduced soreness and improved tissue repair.', 'refresh', 2 FROM compounds WHERE slug = 'mk-677';
INSERT INTO benefits (compound_id, title, description, icon, sort_order) 
SELECT id, 'Body Composition', 'Gradual fat loss and muscle retention over time. More noticeable at 2-3 months of use.', 'body', 3 FROM compounds WHERE slug = 'mk-677';
INSERT INTO benefits (compound_id, title, description, icon, sort_order) 
SELECT id, 'Appetite Increase', 'Significant hunger increase helps those who struggle to eat enough to grow.', 'utensils', 4 FROM compounds WHERE slug = 'mk-677';

-- BPC-157 Benefits
INSERT INTO benefits (compound_id, title, description, icon, sort_order) 
SELECT id, 'Injury Healing', 'Accelerates recovery from tendon, ligament, and muscle injuries significantly.', 'bandage', 1 FROM compounds WHERE slug = 'bpc-157';
INSERT INTO benefits (compound_id, title, description, icon, sort_order) 
SELECT id, 'Gut Health', 'Repairs gut lining. Effective for leaky gut, IBS, ulcers, and digestive issues.', 'gut', 2 FROM compounds WHERE slug = 'bpc-157';
INSERT INTO benefits (compound_id, title, description, icon, sort_order) 
SELECT id, 'Neuroprotection', 'Supports brain healing and dopamine system regulation.', 'brain', 3 FROM compounds WHERE slug = 'bpc-157';
INSERT INTO benefits (compound_id, title, description, icon, sort_order) 
SELECT id, 'Systemic Repair', 'Works on multiple tissue types throughout the body.', 'healing', 4 FROM compounds WHERE slug = 'bpc-157';

-- Semax Benefits
INSERT INTO benefits (compound_id, title, description, icon, sort_order) 
SELECT id, 'Enhanced Focus', 'Clean, stimulant-free focus that lasts without a crash.', 'target', 1 FROM compounds WHERE slug = 'semax';
INSERT INTO benefits (compound_id, title, description, icon, sort_order) 
SELECT id, 'Memory Support', 'Improved memory formation and recall through BDNF elevation.', 'brain', 2 FROM compounds WHERE slug = 'semax';
INSERT INTO benefits (compound_id, title, description, icon, sort_order) 
SELECT id, 'Neuroprotection', 'Protects neurons from stress and supports long-term brain health.', 'shield', 3 FROM compounds WHERE slug = 'semax';
INSERT INTO benefits (compound_id, title, description, icon, sort_order) 
SELECT id, 'Mood Enhancement', 'Mild mood elevation and increased motivation.', 'smile', 4 FROM compounds WHERE slug = 'semax';

-- ============================================
-- WARNINGS
-- ============================================

-- MK-677 Warnings
INSERT INTO warnings (compound_id, warning_type, text, severity)
SELECT id, 'health', 'May affect insulin sensitivity with long-term use. Monitor fasting glucose periodically.', 'medium' FROM compounds WHERE slug = 'mk-677';
INSERT INTO warnings (compound_id, warning_type, text, severity)
SELECT id, 'legal', 'Not FDA approved for human use. Sold as a research chemical.', 'low' FROM compounds WHERE slug = 'mk-677';

-- BPC-157 Warnings
INSERT INTO warnings (compound_id, warning_type, text, severity)
SELECT id, 'research', 'Most studies are animal-based. Limited human clinical trial data.', 'medium' FROM compounds WHERE slug = 'bpc-157';
INSERT INTO warnings (compound_id, warning_type, text, severity)
SELECT id, 'legal', 'Not FDA approved. Sold as a research chemical.', 'low' FROM compounds WHERE slug = 'bpc-157';

-- RAD-140 Warnings
INSERT INTO warnings (compound_id, warning_type, text, severity)
SELECT id, 'suppression', 'Significantly suppresses natural testosterone production. PCT is mandatory.', 'high' FROM compounds WHERE slug = 'rad-140';
INSERT INTO warnings (compound_id, warning_type, text, severity)
SELECT id, 'health', 'May elevate liver enzymes. Blood work before and after cycle recommended.', 'medium' FROM compounds WHERE slug = 'rad-140';
INSERT INTO warnings (compound_id, warning_type, text, severity)
SELECT id, 'legal', 'Banned by WADA. Not FDA approved. Not legal for human consumption.', 'medium' FROM compounds WHERE slug = 'rad-140';

-- IGF-1 LR3 Warnings
INSERT INTO warnings (compound_id, warning_type, text, severity)
SELECT id, 'health', 'Can cause hypoglycemia. Must eat adequately when using.', 'high' FROM compounds WHERE slug = 'igf-1-lr3';
INSERT INTO warnings (compound_id, warning_type, text, severity)
SELECT id, 'health', 'Long-term abuse may contribute to organ growth. Cycle appropriately.', 'medium' FROM compounds WHERE slug = 'igf-1-lr3';
INSERT INTO warnings (compound_id, warning_type, text, severity)
SELECT id, 'research', 'Limited long-term human safety data.', 'medium' FROM compounds WHERE slug = 'igf-1-lr3';

-- Semaglutide Warnings
INSERT INTO warnings (compound_id, warning_type, text, severity)
SELECT id, 'health', 'Can cause significant muscle loss if protein intake and training are inadequate.', 'high' FROM compounds WHERE slug = 'semaglutide';
INSERT INTO warnings (compound_id, warning_type, text, severity)
SELECT id, 'health', 'Rapid weight loss increases risk of gallbladder issues.', 'medium' FROM compounds WHERE slug = 'semaglutide';
INSERT INTO warnings (compound_id, warning_type, text, severity)
SELECT id, 'health', 'GI side effects are common, especially when titrating up.', 'medium' FROM compounds WHERE slug = 'semaglutide';

-- ============================================
-- SOURCES (Where to Buy)
-- ============================================

-- Peptides
INSERT INTO sources (compound_id, name, url, is_affiliate, notes)
SELECT id, 'Peptide Sciences', 'https://peptidesciences.com', true, 'Third-party tested, US-based' FROM compounds WHERE category = 'peptide';

INSERT INTO sources (compound_id, name, url, is_affiliate, notes)
SELECT id, 'Limitless Life Nootropics', 'https://limitlesslifenootropics.com', true, 'Good for nootropic peptides' FROM compounds WHERE slug IN ('semax', 'selank', 'na-semax-amidate', 'na-selank-amidate', 'dihexa');

-- SARMs
INSERT INTO sources (compound_id, name, url, is_affiliate, notes)
SELECT id, 'Swiss Chems', 'https://swisschems.is', true, 'Third-party tested' FROM compounds WHERE category = 'sarm' OR slug = 'mk-677';

INSERT INTO sources (compound_id, name, url, is_affiliate, notes)
SELECT id, 'Chemyo', 'https://chemyo.com', true, 'Good reputation, third-party tested' FROM compounds WHERE category = 'sarm' OR slug = 'mk-677';

-- Support compounds
INSERT INTO sources (compound_id, name, url, is_affiliate, notes)
SELECT id, 'Nootropics Depot', 'https://nootropicsdepot.com', true, 'Best quality testing for supplements' FROM compounds WHERE slug IN ('alpha-gpc', 'lions-mane');

INSERT INTO sources (compound_id, name, url, is_affiliate, notes)
SELECT id, 'Bulk Supplements', 'https://bulksupplements.com', true, 'Good value for basics' FROM compounds WHERE slug = 'alpha-gpc';

-- ============================================
-- CURATED STACKS
-- ============================================

INSERT INTO stacks (name, slug, description, goal, duration, estimated_cost, what_to_expect, warnings) VALUES
(
  'The Recovery Stack',
  'recovery-stack',
  'Accelerate healing, reduce inflammation, and recover faster from training. Ideal for athletes dealing with injuries or accumulated wear and tear.',
  'recovery',
  '8 weeks',
  '$180-250',
  'Week 1-2: Improved sleep, possible water retention. Week 3-4: Noticeable reduction in joint and tendon pain. Week 5-8: Accumulated healing, better training capacity.',
  'All injectable except MK-677. No testosterone suppression. No PCT needed.'
),
(
  'Cognitive Edge',
  'cognitive-edge',
  'Sharpen focus, enhance memory, and protect your brain from the grind. Perfect for high-performers who need mental clarity without stimulant crashes.',
  'cognition',
  'Ongoing with cycles',
  '$100-150/month',
  'Day 1: Noticeable focus improvement from Semax. Week 2-4: Cumulative benefits from Lions Mane. Ongoing: Sustained mental clarity and stress resilience.',
  'All non-injectable (nasal and oral). No suppression. Can run long-term with cycling of peptides.'
),
(
  'No Needle Starter',
  'no-needle-starter',
  'The best results you can get without injections. Covers physical recovery and cognitive performance for those not ready to pin.',
  'performance',
  'Ongoing',
  '$100-150/month',
  'Week 1: Better sleep, appetite increase, sharper focus. Week 4-8: Improved recovery, body composition shifts, sustained mental performance.',
  'Entirely oral and nasal. No suppression. No PCT. MK-677 may affect insulin sensitivity long-term.'
);

-- Stack Compounds for Recovery Stack
INSERT INTO stack_compounds (stack_id, compound_id, dosing, timing, notes, sort_order)
SELECT s.id, c.id, '250mcg daily', 'Morning or split AM/PM', 'Core healing peptide', 1
FROM stacks s, compounds c WHERE s.slug = 'recovery-stack' AND c.slug = 'bpc-157';

INSERT INTO stack_compounds (stack_id, compound_id, dosing, timing, notes, sort_order)
SELECT s.id, c.id, '2mg twice weekly', 'Any time, subcutaneous', 'Systemic healing support', 2
FROM stacks s, compounds c WHERE s.slug = 'recovery-stack' AND c.slug = 'tb-500';

INSERT INTO stack_compounds (stack_id, compound_id, dosing, timing, notes, sort_order)
SELECT s.id, c.id, '15-25mg daily', 'Before bed', 'Sleep and GH support', 3
FROM stacks s, compounds c WHERE s.slug = 'recovery-stack' AND c.slug = 'mk-677';

-- Stack Compounds for Cognitive Edge
INSERT INTO stack_compounds (stack_id, compound_id, dosing, timing, notes, sort_order)
SELECT s.id, c.id, '200-300mcg', 'Morning and early afternoon', 'Core focus compound', 1
FROM stacks s, compounds c WHERE s.slug = 'cognitive-edge' AND c.slug = 'semax';

INSERT INTO stack_compounds (stack_id, compound_id, dosing, timing, notes, sort_order)
SELECT s.id, c.id, '200mcg', 'As needed for stress', 'Anxiety and stress management', 2
FROM stacks s, compounds c WHERE s.slug = 'cognitive-edge' AND c.slug = 'selank';

INSERT INTO stack_compounds (stack_id, compound_id, dosing, timing, notes, sort_order)
SELECT s.id, c.id, '300-600mg', 'Morning', 'Fuels acetylcholine production', 3
FROM stacks s, compounds c WHERE s.slug = 'cognitive-edge' AND c.slug = 'alpha-gpc';

INSERT INTO stack_compounds (stack_id, compound_id, dosing, timing, notes, sort_order)
SELECT s.id, c.id, '500-1000mg', 'Any time', 'Long-term NGF support', 4
FROM stacks s, compounds c WHERE s.slug = 'cognitive-edge' AND c.slug = 'lions-mane';

-- Stack Compounds for No Needle Starter
INSERT INTO stack_compounds (stack_id, compound_id, dosing, timing, notes, sort_order)
SELECT s.id, c.id, '15-25mg', 'Before bed', 'Core recovery and sleep', 1
FROM stacks s, compounds c WHERE s.slug = 'no-needle-starter' AND c.slug = 'mk-677';

INSERT INTO stack_compounds (stack_id, compound_id, dosing, timing, notes, sort_order)
SELECT s.id, c.id, '200-300mcg', 'Morning and early afternoon', 'Focus and mental clarity', 2
FROM stacks s, compounds c WHERE s.slug = 'no-needle-starter' AND c.slug = 'semax';

INSERT INTO stack_compounds (stack_id, compound_id, dosing, timing, notes, sort_order)
SELECT s.id, c.id, '300-600mg', 'Morning', 'Cognitive support', 3
FROM stacks s, compounds c WHERE s.slug = 'no-needle-starter' AND c.slug = 'alpha-gpc';
