// Product Data Structure for MediGuide Marketplace
import { Product } from '../services/marketplaceService';

// Men's Care Product Images
import multivitaminTablets from '../assets/multivitamin tablets.jpg';
import healthZincTablets from '../assets/health zinc tablets.jpg';
import omega3Capsules from '../assets/omega3 capsules.jpg';
import vitaminD3Capsules from '../assets/vitamin d3 capsules.jpg';
import vitaminBCapsules from '../assets/vitamin b capsules.jpg';
import hairSerum from '../assets/hair serum.jpg';
import follicleHairSerum from '../assets/follicle hair serum.jpg';
import hairShampoo from '../assets/hair shampoo.jpg';
import beardGrowthOil from '../assets/beard growth oil.jpg';
import beardBalm from '../assets/beard balm.jpg';
import beardWash from '../assets/beard wash.jpg';
import testosteroneBoosts from '../assets/testostrone boosts.jpg';
import testosteroneCapsule from '../assets/testostrone capsule.jpg';
import prostateHealth from '../assets/prostrate.jpg';
import urinarySupport from '../assets/urinary-support.jpg';
import wellnessFormula from '../assets/mensmultivit.jpg';
import jointSupport from '../assets/precare joint support.jpg';
import immuneSupport from '../assets/immiuno.jpg';
import proteinChocolate from '../assets/protein-chocolate.jpg';
import proteinVanilla from '../assets/vanilla.jpg';
import preWorkout from '../assets/pre-workout.jpg';
import bcaaPowder from '../assets/aminoacid.jpg';
import creatine from '../assets/creatine monohydrate.jpg';
import shavingGel from '../assets/shaving gel men.jpg';
import aftershaveBalm from '../assets/aftershavebalm.jpg';
import razorBlades from '../assets/shaveblade.jpg';
import preShaveOil from '../assets/shavinggel.jpg';
import faceMoisturizer from '../assets/face-moisturizer.jpg';
import antiHairfallShampoo from '../assets/shampoo.jpg';
import hairVitamins from '../assets/biotine.jpg';
import scalpScrub from '../assets/scalp-scrub.jpg';
import hairSerumStrong from '../assets/hair serum.jpg';
import scalpTreatment from '../assets/scalp-treatment.jpg';
import hairGel from '../assets/gel.jpg';
import hairWax from '../assets/hair wax.jpg';
import beardTrimmerOil from '../assets/beardclipperoil.jpg';
import beardSoftener from '../assets/beardsoftner.jpg';
import staminaPlus from '../assets/stamina-plus.jpg';
import muscleRecovery from '../assets/testomax.jpg';
import vitalityBoost from '../assets/vitality-boost.jpg';

// Men's Care Products - EXPANDED WITH MORE PRODUCTS AND RATINGS
export const mensCareProducts: Product[] = [
  // HealthVit Brand (5 products)
  {
    id: "MEN001",
    name: "Men's Multivitamin Tablets",
    category: "mens-care",
    brand: "HealthVit",
    price: 599,
    rating: 4.5,
    reviews: 234,
    inStock: true,
    image: multivitaminTablets,
    description: "Complete daily nutrition for men with 25+ essential vitamins and minerals",
    benefits: ["Boosts energy", "Supports immunity", "Promotes heart health"],
    usage: "Take 1 tablet daily after breakfast",
    warnings: ["Consult doctor if you have medical conditions", "Keep out of reach of children"],
    prescriptionRequired: false
  },
  {
    id: "MEN009",
    name: "HealthVit Zinc Tablets",
    category: "mens-care",
    brand: "HealthVit",
    price: 349,
    rating: 3.8,
    reviews: 156,
    inStock: true,
    image: healthZincTablets,
    description: "Zinc supplement for immune support",
    benefits: ["Supports immune system", "Promotes skin health", "Aids metabolism"],
    usage: "Take 1 tablet daily with food",
    warnings: ["Do not exceed recommended dose", "Store in cool place"],
    prescriptionRequired: false
  },
  {
    id: "MEN010",
    name: "HealthVit Omega-3 Capsules",
    category: "mens-care",
    brand: "HealthVit",
    price: 899,
    rating: 4.2,
    reviews: 203,
    inStock: true,
    image: omega3Capsules,
    description: "Fish oil omega-3 for heart health",
    benefits: ["Supports heart health", "Reduces inflammation", "Improves brain function"],
    usage: "Take 2 capsules daily with meals",
    warnings: ["Consult doctor if on blood thinners", "Keep refrigerated"],
    prescriptionRequired: false
  },
  {
    id: "MEN011",
    name: "HealthVit Vitamin D3",
    category: "mens-care",
    brand: "HealthVit",
    price: 299,
    rating: 3.5,
    reviews: 98,
    inStock: true,
    image: vitaminD3Capsules,
    description: "Vitamin D3 for bone health",
    benefits: ["Strengthens bones", "Supports immunity", "Improves mood"],
    usage: "Take 1 tablet daily",
    warnings: ["Do not exceed recommended dose"],
    prescriptionRequired: false
  },
  {
    id: "MEN012",
    name: "HealthVit B-Complex",
    category: "mens-care",
    brand: "HealthVit",
    price: 449,
    rating: 2.8,
    reviews: 67,
    inStock: true,
    image: vitaminBCapsules,
    description: "B-Complex vitamins for energy",
    benefits: ["Boosts energy", "Supports metabolism", "Reduces fatigue"],
    usage: "Take 1 tablet daily with breakfast",
    warnings: ["May cause nausea if taken on empty stomach"],
    prescriptionRequired: false
  },
  // Follicle Boost Brand
  {
    id: "MEN002",
    name: "Hair Growth Serum",
    category: "mens-care",
    brand: "Follicle Boost",
    price: 899,
    rating: 4.3,
    reviews: 156,
    inStock: true,
    image: hairSerum,
    description: "Advanced hair growth formula with biotin and keratin",
    benefits: ["Reduces hair fall", "Promotes growth"],
    usage: "Apply 1ml to scalp twice daily",
    warnings: ["For external use only"],
    prescriptionRequired: false
  },
  {
    id: "MEN013",
    name: "Follicle Boost Hair Oil",
    category: "mens-care",
    brand: "Follicle Boost",
    price: 649,
    rating: 3.2,
    reviews: 89,
    inStock: true,
    image: follicleHairSerum,
    description: "Natural hair oil for hair growth",
    benefits: ["Nourishes scalp", "Reduces dandruff"],
    usage: "Massage into scalp 2-3 times weekly",
    warnings: ["For external use only"],
    prescriptionRequired: false
  },
  {
    id: "MEN014",
    name: "Follicle Boost Shampoo",
    category: "mens-care",
    brand: "Follicle Boost",
    price: 499,
    rating: 2.9,
    reviews: 72,
    inStock: true,
    image: hairShampoo,
    description: "Anti-hair fall shampoo",
    benefits: ["Reduces hair fall", "Cleanses scalp"],
    usage: "Apply to wet hair, lather, rinse",
    warnings: ["Avoid contact with eyes"],
    prescriptionRequired: false
  },
  // BeardKing Brand
  {
    id: "MEN003",
    name: "Beard Growth Oil",
    category: "mens-care",
    brand: "BeardKing",
    price: 449,
    rating: 4.6,
    reviews: 312,
    inStock: true,
    image: beardGrowthOil,
    description: "Natural beard oil for thicker, fuller beard growth",
    benefits: ["Promotes beard growth", "Softens beard"],
    usage: "Apply 3-4 drops to beard daily",
    warnings: ["For external use only"],
    prescriptionRequired: false
  },
  {
    id: "MEN017",
    name: "BeardKing Beard Balm",
    category: "mens-care",
    brand: "BeardKing",
    price: 549,
    rating: 3.7,
    reviews: 187,
    inStock: true,
    image: beardBalm,
    description: "Styling balm for beard control",
    benefits: ["Styles beard", "Conditions"],
    usage: "Rub small amount between palms, apply to beard",
    warnings: ["For external use only"],
    prescriptionRequired: false
  },
  {
    id: "MEN018",
    name: "BeardKing Beard Wash",
    category: "mens-care",
    brand: "BeardKing",
    price: 399,
    rating: 2.5,
    reviews: 94,
    inStock: true,
    image: beardWash,
    description: "Gentle beard cleanser",
    benefits: ["Cleanses beard", "Softens hair"],
    usage: "Apply to wet beard, massage, rinse",
    warnings: ["Avoid contact with eyes"],
    prescriptionRequired: false
  },
  // TestoMax Brand
  {
    id: "MEN004",
    name: "Testosterone Booster Capsules",
    category: "mens-care",
    brand: "TestoMax",
    price: 1299,
    rating: 4.4,
    reviews: 189,
    inStock: true,
    image: testosteroneBoosts,
    description: "Natural testosterone support supplement",
    benefits: ["Supports muscle growth", "Enhances energy"],
    usage: "Take 2 capsules daily with meals",
    warnings: ["Consult doctor before use"],
    prescriptionRequired: false
  },
  {
    id: "MEN020",
    name: "TestoMax Energy Booster",
    category: "mens-care",
    brand: "TestoMax",
    price: 999,
    rating: 3.6,
    reviews: 123,
    inStock: true,
    image: testosteroneCapsule,
    description: "Natural energy supplement for men",
    benefits: ["Increases energy", "Reduces fatigue"],
    usage: "Take 1 capsule in morning",
    warnings: ["Do not exceed recommended dose"],
    prescriptionRequired: false
  },
  {
    id: "MEN021",
    name: "TestoMax Stamina Plus",
    category: "mens-care",
    brand: "TestoMax",
    price: 899,
    rating: 2.7,
    reviews: 89,
    inStock: true,
    image: staminaPlus,
    description: "Stamina enhancement supplement",
    benefits: ["Enhances stamina", "Boosts performance"],
    usage: "Take 1 capsule daily",
    warnings: ["Not for individuals under 18"],
    prescriptionRequired: false
  },
  // ProCare Brand
  {
    id: "MEN005",
    name: "Prostate Health Tablets",
    category: "mens-care",
    brand: "ProCare",
    price: 799,
    rating: 4.7,
    reviews: 145,
    inStock: true,
    image: prostateHealth,
    description: "Supports prostate health and urinary function",
    benefits: ["Supports prostate health", "Promotes urinary function"],
    usage: "Take 1 tablet twice daily with meals",
    warnings: ["Consult healthcare provider"],
    prescriptionRequired: false
  },
  {
    id: "MEN024",
    name: "ProCare Urinary Support",
    category: "mens-care",
    brand: "ProCare",
    price: 699,
    rating: 3.8,
    reviews: 98,
    inStock: true,
    image: urinarySupport,
    description: "Urinary tract health supplement",
    benefits: ["Supports urinary health", "Natural ingredients"],
    usage: "Take 1 capsule twice daily",
    warnings: ["Consult doctor if symptoms persist"],
    prescriptionRequired: false
  },
  {
    id: "MEN026",
    name: "ProCare Joint Support",
    category: "mens-care",
    brand: "ProCare",
    price: 749,
    rating: 2.6,
    reviews: 76,
    inStock: true,
    image: jointSupport,
    description: "Joint health supplement for men",
    benefits: ["Supports joints", "Reduces stiffness"],
    usage: "Take 1 tablet daily",
    warnings: ["Consult doctor if on blood thinners"],
    prescriptionRequired: false
  },
  // MuscleMax Brand
  {
    id: "MEN006",
    name: "Men's Protein Powder - Chocolate",
    category: "mens-care",
    brand: "MuscleMax",
    price: 1899,
    rating: 4.8,
    reviews: 567,
    inStock: true,
    image: proteinChocolate,
    description: "Whey protein isolate for muscle building",
    benefits: ["25g protein per serving", "Supports muscle growth"],
    usage: "Mix 1 scoop with 250ml water post-workout",
    warnings: ["Consult doctor if you have kidney issues"],
    prescriptionRequired: false
  },
  {
    id: "MEN028",
    name: "MuscleMax Pre-Workout",
    category: "mens-care",
    brand: "MuscleMax",
    price: 1299,
    rating: 3.9,
    reviews: 234,
    inStock: true,
    image: preWorkout,
    description: "Pre-workout energy booster",
    benefits: ["Boosts energy", "Enhances focus"],
    usage: "Mix 1 scoop 30 minutes before workout",
    warnings: ["Contains caffeine"],
    prescriptionRequired: false
  },
  {
    id: "MEN030",
    name: "MuscleMax Creatine Monohydrate",
    category: "mens-care",
    brand: "MuscleMax",
    price: 799,
    rating: 2.4,
    reviews: 145,
    inStock: true,
    image: creatine,
    description: "Pure creatine for strength",
    benefits: ["Increases strength", "Builds muscle"],
    usage: "Mix 5g with water daily",
    warnings: ["Drink plenty of water"],
    prescriptionRequired: false
  },
  // SmoothShave Brand
  {
    id: "MEN007",
    name: "Shaving Gel - Sensitive Skin",
    category: "mens-care",
    brand: "SmoothShave",
    price: 299,
    rating: 4.5,
    reviews: 423,
    inStock: true,
    image: shavingGel,
    description: "Gentle shaving gel for sensitive skin",
    benefits: ["Prevents razor burns", "Soothes skin"],
    usage: "Apply to wet face, lather, and shave",
    warnings: ["For external use only"],
    prescriptionRequired: false
  },
  {
    id: "MEN031",
    name: "SmoothShave Aftershave Balm",
    category: "mens-care",
    brand: "SmoothShave",
    price: 349,
    rating: 3.7,
    reviews: 267,
    inStock: true,
    image: aftershaveBalm,
    description: "Soothing aftershave balm",
    benefits: ["Soothes irritation", "Moisturizes"],
    usage: "Apply to face after shaving",
    warnings: ["For external use only"],
    prescriptionRequired: false
  },
  {
    id: "MEN032",
    name: "SmoothShave Razor Blades Pack",
    category: "mens-care",
    brand: "SmoothShave",
    price: 199,
    rating: 2.9,
    reviews: 189,
    inStock: true,
    image: razorBlades,
    description: "Premium razor blades - 5 pack",
    benefits: ["Close shave", "Long-lasting"],
    usage: "Replace blade after 5-7 shaves",
    warnings: ["Keep out of reach of children"],
    prescriptionRequired: false
  },
  // HairStrong Brand
  {
    id: "MEN008",
    name: "Anti-Hair Fall Shampoo",
    category: "mens-care",
    brand: "HairStrong",
    price: 399,
    rating: 4.4,
    reviews: 289,
    inStock: true,
    image: antiHairfallShampoo,
    description: "Strengthening shampoo to reduce hair fall",
    benefits: ["Reduces hair fall", "Strengthens hair"],
    usage: "Apply to wet hair, massage, rinse",
    warnings: ["For external use only"],
    prescriptionRequired: false
  },
  {
    id: "MEN034",
    name: "HairStrong Hair Serum",
    category: "mens-care",
    brand: "HairStrong",
    price: 599,
    rating: 3.6,
    reviews: 198,
    inStock: true,
    image: hairSerumStrong,
    description: "Anti-frizz hair serum",
    benefits: ["Controls frizz", "Adds shine"],
    usage: "Apply small amount to damp hair",
    warnings: ["For external use only"],
    prescriptionRequired: false
  },
  {
    id: "MEN035",
    name: "HairStrong Scalp Treatment",
    category: "mens-care",
    brand: "HairStrong",
    price: 749,
    rating: 2.8,
    reviews: 123,
    inStock: true,
    image: scalpTreatment,
    description: "Scalp nourishing treatment",
    benefits: ["Nourishes scalp", "Reduces flaking"],
    usage: "Apply to scalp, leave for 10 minutes, rinse",
    warnings: ["For external use only"],
    prescriptionRequired: false
  },
  {
    id: "MEN037",
    name: "HairStrong Hair Wax",
    category: "mens-care",
    brand: "HairStrong",
    price: 349,
    rating: 2.3,
    reviews: 94,
    inStock: true,
    image: hairWax,
    description: "Matte finish hair wax",
    benefits: ["Matte finish", "Flexible hold"],
    usage: "Rub between palms, apply to hair",
    warnings: ["For external use only"],
    prescriptionRequired: false
  },
  // Additional Follicle Boost products
  {
    id: "MEN015",
    name: "Follicle Boost Hair Vitamins",
    category: "mens-care",
    brand: "Follicle Boost",
    price: 799,
    rating: 4.1,
    reviews: 145,
    inStock: true,
    image: hairVitamins,
    description: "Hair growth vitamins with biotin",
    benefits: ["Promotes hair growth", "Strengthens from within"],
    usage: "Take 2 capsules daily",
    warnings: ["Consult doctor if pregnant"],
    prescriptionRequired: false
  },
  {
    id: "MEN016",
    name: "Follicle Boost Scalp Scrub",
    category: "mens-care",
    brand: "Follicle Boost",
    price: 549,
    rating: 3.4,
    reviews: 87,
    inStock: true,
    image: scalpScrub,
    description: "Exfoliating scalp scrub",
    benefits: ["Exfoliates scalp", "Removes dead skin"],
    usage: "Use once weekly before shampooing",
    warnings: ["For external use only"],
    prescriptionRequired: false
  },
  // Additional BeardKing products
  {
    id: "MEN019",
    name: "BeardKing Beard Trimmer Oil",
    category: "mens-care",
    brand: "BeardKing",
    price: 299,
    rating: 4.2,
    reviews: 156,
    inStock: true,
    image: beardTrimmerOil,
    description: "Lubricating oil for beard trimmers",
    benefits: ["Extends blade life", "Smooth trimming"],
    usage: "Apply 2-3 drops to blades after each use",
    warnings: ["Keep away from children"],
    prescriptionRequired: false
  },
  {
    id: "MEN038",
    name: "BeardKing Beard Softener",
    category: "mens-care",
    brand: "BeardKing",
    price: 449,
    rating: 3.3,
    reviews: 112,
    inStock: true,
    image: beardSoftener,
    description: "Beard softening cream",
    benefits: ["Softens beard", "Easy to style"],
    usage: "Apply small amount daily",
    warnings: ["For external use only"],
    prescriptionRequired: false
  },
  // Additional TestoMax products
  {
    id: "MEN022",
    name: "TestoMax Muscle Recovery",
    category: "mens-care",
    brand: "TestoMax",
    price: 1099,
    rating: 4.0,
    reviews: 167,
    inStock: true,
    image: muscleRecovery,
    description: "Post-workout recovery supplement",
    benefits: ["Faster recovery", "Reduces soreness"],
    usage: "Take 2 capsules after workout",
    warnings: ["Keep out of reach of children"],
    prescriptionRequired: false
  },
  {
    id: "MEN039",
    name: "TestoMax Vitality Boost",
    category: "mens-care",
    brand: "TestoMax",
    price: 1199,
    rating: 3.5,
    reviews: 134,
    inStock: true,
    image: vitalityBoost,
    description: "Men's vitality enhancement formula",
    benefits: ["Boosts vitality", "Improves wellness"],
    usage: "Take 1 capsule daily",
    warnings: ["Not for under 18"],
    prescriptionRequired: false
  },
  // Additional ProCare products
  {
    id: "MEN025",
    name: "ProCare Men's Wellness Formula",
    category: "mens-care",
    brand: "ProCare",
    price: 899,
    rating: 4.2,
    reviews: 134,
    inStock: true,
    image: wellnessFormula,
    description: "Complete men's wellness supplement",
    benefits: ["Overall wellness", "Supports vitality"],
    usage: "Take 2 tablets daily",
    warnings: ["Store in cool, dry place"],
    prescriptionRequired: false
  },
  {
    id: "MEN040",
    name: "ProCare Immune Support",
    category: "mens-care",
    brand: "ProCare",
    price: 649,
    rating: 3.4,
    reviews: 98,
    inStock: true,
    image: immuneSupport,
    description: "Immune system booster for men",
    benefits: ["Boosts immunity", "Natural ingredients"],
    usage: "Take 1 capsule daily",
    warnings: ["Consult doctor if on medication"],
    prescriptionRequired: false
  },
  // Additional MuscleMax products
  {
    id: "MEN027",
    name: "MuscleMax Protein Powder - Vanilla",
    category: "mens-care",
    brand: "MuscleMax",
    price: 1899,
    rating: 4.6,
    reviews: 489,
    inStock: true,
    image: proteinVanilla,
    description: "Vanilla flavored whey protein",
    benefits: ["High protein", "Great taste"],
    usage: "Mix 1 scoop with milk or water",
    warnings: ["Keep container tightly closed"],
    prescriptionRequired: false
  },
  {
    id: "MEN029",
    name: "MuscleMax BCAA Powder",
    category: "mens-care",
    brand: "MuscleMax",
    price: 999,
    rating: 3.1,
    reviews: 178,
    inStock: true,
    image: bcaaPowder,
    description: "Branch chain amino acids supplement",
    benefits: ["Supports recovery", "Reduces muscle breakdown"],
    usage: "Mix 1 scoop during or after workout",
    warnings: ["Store in cool place"],
    prescriptionRequired: false
  },
  // Additional SmoothShave products
  {
    id: "MEN033",
    name: "SmoothShave Pre-Shave Oil",
    category: "mens-care",
    brand: "SmoothShave",
    price: 399,
    rating: 3.5,
    reviews: 156,
    inStock: true,
    image: preShaveOil,
    description: "Pre-shave oil for smooth shaving",
    benefits: ["Softens beard", "Protects skin"],
    usage: "Apply before shaving gel",
    warnings: ["For external use only"],
    prescriptionRequired: false
  },
  {
    id: "MEN041",
    name: "SmoothShave Face Moisturizer",
    category: "mens-care",
    brand: "SmoothShave",
    price: 449,
    rating: 4.1,
    reviews: 234,
    inStock: true,
    image: faceMoisturizer,
    description: "Daily face moisturizer for men",
    benefits: ["Hydrates skin", "Non-greasy formula"],
    usage: "Apply to face twice daily",
    warnings: ["For external use only"],
    prescriptionRequired: false
  },
  // Additional HairStrong product
  {
    id: "MEN036",
    name: "HairStrong Hair Gel",
    category: "mens-care",
    brand: "HairStrong",
    price: 299,
    rating: 3.3,
    reviews: 167,
    inStock: true,
    image: hairGel,
    description: "Strong hold hair gel",
    benefits: ["Strong hold", "No flaking"],
    usage: "Apply to damp or dry hair, style as desired",
    warnings: ["For external use only"],
    prescriptionRequired: false
  },
];

// Women's Care Product Images
import womensMultivitamin from '../assets/women multivitamin.jpg';
import ironPlus from '../assets/iron women.jpg';
import calciumD3 from '../assets/bone health.jpg';
import omega3Women from '../assets/women omega3.jpg';
import biotinHair from '../assets/biotin7.jpg';
import pcosSupport from '../assets/pcos.jpg';
import prenatalVitamin from '../assets/vitamin.jpg';
import menopauseRelief from '../assets/balance.jpg';
import periodPainRelief from '../assets/periods.jpg';
import collagenBeauty from '../assets/beauty.jpg';
import skinVitamins from '../assets/skin-vitamins.jpg';
import hairSerumWomen from '../assets/womenserum.jpg';
import nailStrengthener from '../assets/nail.jpg';
import faceCream from '../assets/face-cream.jpg';
import bodyLotion from '../assets/lotion.jpg';
import sanitaryPads from '../assets/pad.jpg';
import intimateWash from '../assets/hygeine.jpg';
import breastPads from '../assets/breast.jpg';
import pregnancyTest from '../assets/kit.jpg';
import ovulationKit from '../assets/ovulating.jpg';
import energyBoostWomen from '../assets/energy.jpg';
import immunityPlusWomen from '../assets/immuno.jpg';
import stressRelief from '../assets/stress.jpg';
import boneHealth from '../assets/bone.jpg';
import digestiveHealth from '../assets/pro.jpg';
import pcosCare from '../assets/hayer.jpg';
import thyroidSupport from '../assets/pure.jpg';
import fertilityBoost from '../assets/plus.jpg';
import pmsRelief from '../assets/pms.jpg';
import libidoEnhancer from '../assets/lib.jpg';
import breastCare from '../assets/PinkHealth Breast Care.jpg';
import utiPrevention from '../assets/PinkHealth UTI Prevention.jpg';
import vaginalHealth from '../assets/PinkHealth UTI Prevention (1).jpg';
import postpartumCare from '../assets/PinkHealth Postpartum Care.jpg';
import breastfeedingSupport from '../assets/PinkHealth Breastfeeding Support.jpg';

// Women's Care Products - EXPANDED
export const womensCareProducts: Product[] = [
  // HerWell Brand (5 products)
  { id: "WOM001", name: "Women's Multivitamin Complex", category: "womens-care", brand: "HerWell", price: 649, rating: 4.6, reviews: 312, inStock: true, image: womensMultivitamin, description: "Complete daily nutrition for women", benefits: ["Supports energy", "Hormonal balance", "Bone health"], usage: "Take 1 tablet daily", warnings: ["Consult doctor if pregnant"], prescriptionRequired: false },
  { id: "WOM002", name: "HerWell Iron Plus", category: "womens-care", brand: "HerWell", price: 399, rating: 3.7, reviews: 189, inStock: true, image: ironPlus, description: "Iron supplement with folic acid", benefits: ["Prevents anemia", "Boosts energy"], usage: "Take 1 tablet with food", warnings: ["May cause constipation"], prescriptionRequired: false },
  { id: "WOM003", name: "HerWell Calcium D3", category: "womens-care", brand: "HerWell", price: 549, rating: 4.3, reviews: 267, inStock: true, image: calciumD3, description: "Calcium with Vitamin D3", benefits: ["Strengthens bones", "Prevents osteoporosis"], usage: "Take 1 tablet twice daily", warnings: ["Store in cool place"], prescriptionRequired: false },
  { id: "WOM004", name: "HerWell Omega-3", category: "womens-care", brand: "HerWell", price: 899, rating: 2.8, reviews: 134, inStock: true, image: omega3Women, description: "Fish oil for women's health", benefits: ["Heart health", "Brain function"], usage: "Take 2 capsules daily", warnings: ["Keep refrigerated"], prescriptionRequired: false },
  { id: "WOM005", name: "HerWell Biotin Hair", category: "womens-care", brand: "HerWell", price: 749, rating: 3.5, reviews: 198, inStock: true, image: biotinHair, description: "Biotin for hair growth", benefits: ["Strengthens hair", "Reduces hair fall"], usage: "Take 1 capsule daily", warnings: ["Results may vary"], prescriptionRequired: false },
  
  // FemVit Brand (5 products)
  { id: "WOM006", name: "FemVit PCOS Support", category: "womens-care", brand: "FemVit", price: 1299, rating: 4.7, reviews: 423, inStock: true, image: pcosSupport, description: "Natural PCOS management", benefits: ["Hormonal balance", "Regular cycles"], usage: "Take 2 capsules daily", warnings: ["Consult gynecologist"], prescriptionRequired: false },
  { id: "WOM007", name: "FemVit Prenatal", category: "womens-care", brand: "FemVit", price: 899, rating: 4.8, reviews: 567, inStock: true, image: prenatalVitamin, description: "Complete prenatal nutrition", benefits: ["Fetal development", "Maternal health"], usage: "Take 1 tablet daily", warnings: ["For pregnant women only"], prescriptionRequired: false },
  { id: "WOM008", name: "FemVit Menopause Relief", category: "womens-care", brand: "FemVit", price: 1099, rating: 3.9, reviews: 234, inStock: true, image: menopauseRelief, description: "Menopause symptom relief", benefits: ["Reduces hot flashes", "Mood support"], usage: "Take 1 capsule twice daily", warnings: ["Consult doctor"], prescriptionRequired: false },
  { id: "WOM009", name: "FemVit Period Pain Relief", category: "womens-care", brand: "FemVit", price: 199, rating: 2.6, reviews: 156, inStock: true, image: periodPainRelief, description: "Fast menstrual pain relief", benefits: ["Reduces cramps", "Non-drowsy"], usage: "Take 1-2 tablets as needed", warnings: ["Do not exceed 6 tablets daily"], prescriptionRequired: false },
  { id: "WOM010", name: "FemVit Collagen Beauty", category: "womens-care", brand: "FemVit", price: 1499, rating: 3.4, reviews: 289, inStock: true, image: collagenBeauty, description: "Collagen for skin health", benefits: ["Anti-aging", "Skin elasticity"], usage: "Mix 1 scoop daily", warnings: ["Store in cool place"], prescriptionRequired: false },

  // GlowHer Brand (5 products)
  { id: "WOM011", name: "GlowHer Skin Vitamins", category: "womens-care", brand: "GlowHer", price: 799, rating: 4.4, reviews: 345, inStock: true, image: skinVitamins, description: "Vitamins for glowing skin", benefits: ["Brightens skin", "Reduces acne"], usage: "Take 2 capsules daily", warnings: ["Use sunscreen"], prescriptionRequired: false },
  { id: "WOM012", name: "GlowHer Hair Serum", category: "womens-care", brand: "GlowHer", price: 649, rating: 3.2, reviews: 178, inStock: true, image: hairSerumWomen, description: "Hair growth serum", benefits: ["Reduces hair fall", "Promotes growth"], usage: "Apply to scalp twice daily", warnings: ["For external use only"], prescriptionRequired: false },
  { id: "WOM013", name: "GlowHer Nail Strengthener", category: "womens-care", brand: "GlowHer", price: 449, rating: 2.9, reviews: 123, inStock: true, image: nailStrengthener, description: "Strengthens brittle nails", benefits: ["Stronger nails", "Prevents breaking"], usage: "Apply daily", warnings: ["Avoid contact with eyes"], prescriptionRequired: false },
  { id: "WOM014", name: "GlowHer Face Cream", category: "womens-care", brand: "GlowHer", price: 899, rating: 4.5, reviews: 456, inStock: true, image: faceCream, description: "Anti-aging face cream", benefits: ["Reduces wrinkles", "Hydrates skin"], usage: "Apply twice daily", warnings: ["Patch test first"], prescriptionRequired: false },
  { id: "WOM015", name: "GlowHer Body Lotion", category: "womens-care", brand: "GlowHer", price: 549, rating: 3.8, reviews: 234, inStock: true, image: bodyLotion, description: "Moisturizing body lotion", benefits: ["Deep hydration", "Smooth skin"], usage: "Apply after shower", warnings: ["For external use"], prescriptionRequired: false },
  
  // SheCare Brand (5 products)
  { id: "WOM016", name: "SheCare Sanitary Pads", category: "womens-care", brand: "SheCare", price: 249, rating: 4.6, reviews: 678, inStock: true, image: sanitaryPads, description: "Organic cotton pads", benefits: ["100% organic", "Super absorbent"], usage: "Change every 4-6 hours", warnings: ["Dispose properly"], prescriptionRequired: false },
  { id: "WOM017", name: "SheCare Intimate Wash", category: "womens-care", brand: "SheCare", price: 349, rating: 4.3, reviews: 389, inStock: true, image: intimateWash, description: "pH balanced intimate wash", benefits: ["Maintains pH", "Prevents infections"], usage: "Use daily", warnings: ["For external use only"], prescriptionRequired: false },
  { id: "WOM018", name: "SheCare Breast Pads", category: "womens-care", brand: "SheCare", price: 199, rating: 3.6, reviews: 156, inStock: true, image: breastPads, description: "Nursing breast pads", benefits: ["Leak protection", "Soft material"], usage: "Change as needed", warnings: ["Single use only"], prescriptionRequired: false },
  { id: "WOM019", name: "SheCare Pregnancy Test", category: "womens-care", brand: "SheCare", price: 99, rating: 2.4, reviews: 234, inStock: true, image: pregnancyTest, description: "Early detection pregnancy test", benefits: ["99% accurate", "Easy to use"], usage: "Use with first morning urine", warnings: ["Read instructions carefully"], prescriptionRequired: false },
  { id: "WOM020", name: "SheCare Ovulation Kit", category: "womens-care", brand: "SheCare", price: 499, rating: 3.7, reviews: 178, inStock: true, image: ovulationKit, description: "Ovulation prediction kit", benefits: ["Tracks fertile days", "Easy to read"], usage: "Test daily during cycle", warnings: ["Follow instructions"], prescriptionRequired: false },

  // VitaWoman Brand (5 products)
  { id: "WOM021", name: "VitaWoman Energy Boost", category: "womens-care", brand: "VitaWoman", price: 699, rating: 4.2, reviews: 267, inStock: true, image: energyBoostWomen, description: "Energy supplement for women", benefits: ["Reduces fatigue", "Boosts stamina"], usage: "Take 1 capsule daily", warnings: ["Contains caffeine"], prescriptionRequired: false },
  { id: "WOM022", name: "VitaWoman Immunity Plus", category: "womens-care", brand: "VitaWoman", price: 549, rating: 3.3, reviews: 145, inStock: true, image: immunityPlusWomen, description: "Immune system support", benefits: ["Boosts immunity", "Antioxidants"], usage: "Take 1 tablet daily", warnings: ["Store in cool place"], prescriptionRequired: false },
  { id: "WOM023", name: "VitaWoman Stress Relief", category: "womens-care", brand: "VitaWoman", price: 799, rating: 2.7, reviews: 98, inStock: true, image: stressRelief, description: "Natural stress management", benefits: ["Reduces anxiety", "Improves mood"], usage: "Take 2 capsules daily", warnings: ["May cause drowsiness"], prescriptionRequired: false },
  { id: "WOM024", name: "VitaWoman Bone Health", category: "womens-care", brand: "VitaWoman", price: 649, rating: 4.4, reviews: 312, inStock: true, image: boneHealth, description: "Calcium and magnesium blend", benefits: ["Strong bones", "Prevents fractures"], usage: "Take 1 tablet twice daily", warnings: ["Consult doctor"], prescriptionRequired: false },
  { id: "WOM025", name: "VitaWoman Digestive Health", category: "womens-care", brand: "VitaWoman", price: 499, rating: 3.9, reviews: 189, inStock: true, image: digestiveHealth, description: "Probiotic supplement", benefits: ["Improves digestion", "Gut health"], usage: "Take 1 capsule daily", warnings: ["Keep refrigerated"], prescriptionRequired: false },
  
  // HormoBalance Brand (5 products)
  { id: "WOM026", name: "HormoBalance PCOS Care", category: "womens-care", brand: "HormoBalance", price: 1399, rating: 4.7, reviews: 456, inStock: true, image: pcosCare, description: "Advanced PCOS management", benefits: ["Regulates hormones", "Weight management"], usage: "Take 2 capsules daily", warnings: ["Consult gynecologist"], prescriptionRequired: false },
  { id: "WOM027", name: "HormoBalance Thyroid Support", category: "womens-care", brand: "HormoBalance", price: 899, rating: 3.8, reviews: 234, inStock: true, image: thyroidSupport, description: "Thyroid health supplement", benefits: ["Supports thyroid", "Boosts metabolism"], usage: "Take 1 capsule daily", warnings: ["Consult doctor"], prescriptionRequired: false },
  { id: "WOM028", name: "HormoBalance Fertility Boost", category: "womens-care", brand: "HormoBalance", price: 1599, rating: 2.9, reviews: 167, inStock: true, image: fertilityBoost, description: "Fertility enhancement", benefits: ["Improves fertility", "Hormonal balance"], usage: "Take 2 capsules daily", warnings: ["Results may vary"], prescriptionRequired: false },
  { id: "WOM029", name: "HormoBalance PMS Relief", category: "womens-care", brand: "HormoBalance", price: 649, rating: 4.1, reviews: 289, inStock: true, image: pmsRelief, description: "PMS symptom relief", benefits: ["Reduces bloating", "Mood support"], usage: "Take 1-2 capsules as needed", warnings: ["Do not exceed dose"], prescriptionRequired: false },
  { id: "WOM030", name: "HormoBalance Libido Enhancer", category: "womens-care", brand: "HormoBalance", price: 1199, rating: 3.5, reviews: 178, inStock: true, image: libidoEnhancer, description: "Natural libido support", benefits: ["Enhances desire", "Hormonal balance"], usage: "Take 1 capsule daily", warnings: ["Not for under 18"], prescriptionRequired: false },
  
  // PinkHealth Brand (5 products)
  { id: "WOM031", name: "PinkHealth Breast Care", category: "womens-care", brand: "PinkHealth", price: 899, rating: 4.3, reviews: 312, inStock: true, image: breastCare, description: "Breast health supplement", benefits: ["Supports breast health", "Antioxidants"], usage: "Take 1 capsule daily", warnings: ["Consult doctor"], prescriptionRequired: false },
  { id: "WOM032", name: "PinkHealth UTI Prevention", category: "womens-care", brand: "PinkHealth", price: 549, rating: 3.6, reviews: 189, inStock: true, image: utiPrevention, description: "Urinary tract health", benefits: ["Prevents UTI", "Cranberry extract"], usage: "Take 2 capsules daily", warnings: ["Drink plenty of water"], prescriptionRequired: false },
  { id: "WOM033", name: "PinkHealth Vaginal Health", category: "womens-care", brand: "PinkHealth", price: 699, rating: 2.8, reviews: 134, inStock: true, image: vaginalHealth, description: "Vaginal pH balance", benefits: ["Maintains pH", "Prevents infections"], usage: "Take 1 capsule daily", warnings: ["Consult gynecologist"], prescriptionRequired: false },
  { id: "WOM034", name: "PinkHealth Postpartum Care", category: "womens-care", brand: "PinkHealth", price: 1099, rating: 4.6, reviews: 267, inStock: true, image: postpartumCare, description: "Postpartum recovery support", benefits: ["Aids recovery", "Boosts energy"], usage: "Take 2 capsules daily", warnings: ["For nursing mothers"], prescriptionRequired: false },
  { id: "WOM035", name: "PinkHealth Weight Management", category: "womens-care", brand: "PinkHealth", price: 999, rating: 3.4, reviews: 223, inStock: true, image: breastfeedingSupport, description: "Healthy weight support", benefits: ["Metabolism boost", "Appetite control"], usage: "Take 1 capsule before meals", warnings: ["Diet and exercise required"], prescriptionRequired: false },
];


// Baby Care Product Images
import babyPureDiapers from '../assets/BabyPure Diapers Medium.jpg';
import babyPureWipes from '../assets/BabyPure Wipes.jpg';
import babyPureLotion from '../assets/BabyPure Lotion.jpg';
import babyPureShampoo from '../assets/BabyPure Shampoo.jpg';
import babyPurePowder from '../assets/BabyPure Powder.jpg';
import tinyRashCream from '../assets/TinyCare Rash Cream.jpg';
import tinyVitaminDrops from '../assets/TinyCare Vitamin Drops.jpg';
import tinyGripeWater from '../assets/TinyCare Gripe Water.jpg';
import tinyNasalDrops from '../assets/TinyCare Nasal Drops.jpg';
import tinyTeethingGel from '../assets/TinyCare Teething Gel.jpg';
import softBabyOil from '../assets/SoftNest Baby Oil.jpg';
import softSoap from '../assets/SoftNest Soap.jpg';
import softSunscreen from '../assets/SoftNest Sunscreen.jpg';
import softFeedingBottle from '../assets/SoftNest Feeding Bottle.jpg';
import softPacifier from '../assets/SoftNest Pacifier.jpg';
import bloomDiaperCream from '../assets/LittleBloom Diaper Cream.jpg';
import bloomBabyWash from '../assets/LittleBloom Baby Wash.jpg';
import bloomLaundryDetergent from '../assets/LittleBloom Laundry Detergent.jpg';
import bloomThermometer from '../assets/LittleBloom Thermometer.jpg';
import bloomNailClipper from '../assets/LittleBloom Nail Clipper.jpg';
import infantColicDrops from '../assets/InfantPlus Colic Drops.jpg';
import infantProbioticDrops from '../assets/InfantPlus Probiotic Drops.jpg';
import infantIronDrops from '../assets/InfantPlus Iron Drops.jpg';
import infantCalciumDrops from '../assets/InfantPlus Calcium Drops.jpg';
import infantDHADrops from '../assets/InfantPlus DHA Drops.jpg';
import kidMosquitoRepellent from '../assets/KidShield Mosquito Repellent.jpg';
import kidHandSanitizer from '../assets/KidShield Hand Sanitizer.jpg';
import kidFirstAidKit from '../assets/KidShield First Aid Kit.jpg';
import kidAntisepticCream from '../assets/KidShield Antiseptic Cream.jpg';
import kidBandages from '../assets/KidShield Bandages.jpg';
import safeBabyMonitor from '../assets/SafeBaby Monitor.jpg';
import safeBabyHumidifier from '../assets/SafeBaby Humidifier.jpg';
import safeBabySterilizer from '../assets/SafeBaby Sterilizer.jpg';
import safeBabyBathThermometer from '../assets/SafeBaby Bath Thermometer.jpg';
import safeBabyNasalAspirator from '../assets/SafeBaby Nasal Aspirator.jpg';

// Baby Care Products - EXPANDED
export const babyCareProductsExpanded: Product[] = [
  // BabyPure Brand (5 products)
  { id: "BABY101", name: "BabyPure Diapers Medium", category: "baby-care", brand: "BabyPure", price: 899, rating: 4.7, reviews: 567, inStock: true, image: babyPureDiapers, description: "Ultra-soft baby diapers", benefits: ["12-hour protection", "Wetness indicator"], usage: "Change every 3-4 hours", warnings: ["Keep away from fire"], prescriptionRequired: false },
  { id: "BABY102", name: "BabyPure Wipes", category: "baby-care", brand: "BabyPure", price: 199, rating: 3.8, reviews: 423, inStock: true, image: babyPureWipes, description: "Gentle baby wipes", benefits: ["Alcohol-free", "Hypoallergenic"], usage: "Use for cleaning", warnings: ["For external use"], prescriptionRequired: false },
  { id: "BABY103", name: "BabyPure Lotion", category: "baby-care", brand: "BabyPure", price: 349, rating: 4.4, reviews: 312, inStock: true, image: babyPureLotion, description: "Moisturizing baby lotion", benefits: ["Deep hydration", "Non-greasy"], usage: "Apply after bath", warnings: ["Patch test first"], prescriptionRequired: false },
  { id: "BABY104", name: "BabyPure Shampoo", category: "baby-care", brand: "BabyPure", price: 249, rating: 2.9, reviews: 189, inStock: true, image: babyPureShampoo, description: "Tear-free baby shampoo", benefits: ["Gentle formula", "No tears"], usage: "Apply to wet hair", warnings: ["Avoid eyes"], prescriptionRequired: false },
  { id: "BABY105", name: "BabyPure Powder", category: "baby-care", brand: "BabyPure", price: 199, rating: 3.5, reviews: 234, inStock: true, image: babyPurePowder, description: "Talc-free baby powder", benefits: ["Keeps skin dry", "Prevents rashes"], usage: "Apply to dry skin", warnings: ["Avoid inhalation"], prescriptionRequired: false },
  
  // TinyCare Brand (5 products)
  { id: "BABY106", name: "TinyCare Rash Cream", category: "baby-care", brand: "TinyCare", price: 299, rating: 4.6, reviews: 456, inStock: true, image: tinyRashCream, description: "Diaper rash treatment", benefits: ["Soothes irritation", "Zinc oxide"], usage: "Apply with each change", warnings: ["For external use"], prescriptionRequired: false },
  { id: "BABY107", name: "TinyCare Vitamin Drops", category: "baby-care", brand: "TinyCare", price: 449, rating: 4.3, reviews: 289, inStock: true, image: tinyVitaminDrops, description: "Baby multivitamin drops", benefits: ["Essential vitamins", "Supports growth"], usage: "Give 1ml daily", warnings: ["Consult pediatrician"], prescriptionRequired: false },
  { id: "BABY108", name: "TinyCare Gripe Water", category: "baby-care", brand: "TinyCare", price: 149, rating: 3.4, reviews: 178, inStock: true, image: tinyGripeWater, description: "Colic relief for babies", benefits: ["Relieves gas", "Soothes tummy"], usage: "Give as directed", warnings: ["Shake well"], prescriptionRequired: false },
  { id: "BABY109", name: "TinyCare Nasal Drops", category: "baby-care", brand: "TinyCare", price: 99, rating: 2.6, reviews: 123, inStock: true, image: tinyNasalDrops, description: "Saline nasal drops", benefits: ["Clears congestion", "Safe formula"], usage: "Use 2-3 drops", warnings: ["Do not share"], prescriptionRequired: false },
  { id: "BABY110", name: "TinyCare Teething Gel", category: "baby-care", brand: "TinyCare", price: 199, rating: 3.7, reviews: 267, inStock: true, image: tinyTeethingGel, description: "Teething pain relief", benefits: ["Numbs gums", "Fast relief"], usage: "Apply to gums", warnings: ["Use sparingly"], prescriptionRequired: false },

  // SoftNest, LittleBloom, InfantPlus, KidShield, SafeBaby Brands (25 more products)
  { id: "BABY111", name: "SoftNest Baby Oil", category: "baby-care", brand: "SoftNest", price: 249, rating: 4.5, reviews: 345, inStock: true, image: softBabyOil, description: "Gentle baby massage oil", benefits: ["Moisturizes skin", "Relaxing"], usage: "Massage gently", warnings: ["For external use"], prescriptionRequired: false },
  { id: "BABY112", name: "SoftNest Soap", category: "baby-care", brand: "SoftNest", price: 149, rating: 3.6, reviews: 198, inStock: true, image: softSoap, description: "Mild baby soap", benefits: ["Gentle cleansing", "pH balanced"], usage: "Use during bath", warnings: ["Avoid eyes"], prescriptionRequired: false },
  { id: "BABY113", name: "SoftNest Sunscreen", category: "baby-care", brand: "SoftNest", price: 399, rating: 2.8, reviews: 134, inStock: true, image: softSunscreen, description: "Baby sunscreen SPF 50", benefits: ["Sun protection", "Water resistant"], usage: "Apply before sun exposure", warnings: ["Reapply every 2 hours"], prescriptionRequired: false },
  { id: "BABY114", name: "SoftNest Feeding Bottle", category: "baby-care", brand: "SoftNest", price: 349, rating: 4.2, reviews: 267, inStock: true, image: softFeedingBottle, description: "Anti-colic feeding bottle", benefits: ["BPA-free", "Anti-colic"], usage: "Sterilize before use", warnings: ["Check for damage"], prescriptionRequired: false },
  { id: "BABY115", name: "SoftNest Pacifier", category: "baby-care", brand: "SoftNest", price: 149, rating: 3.9, reviews: 223, inStock: true, image: softPacifier, description: "Orthodontic pacifier", benefits: ["Soothes baby", "BPA-free"], usage: "Sterilize regularly", warnings: ["Replace monthly"], prescriptionRequired: false },
  
  { id: "BABY116", name: "LittleBloom Diaper Cream", category: "baby-care", brand: "LittleBloom", price: 299, rating: 4.4, reviews: 389, inStock: true, image: bloomDiaperCream, description: "Protective diaper cream", benefits: ["Prevents rashes", "Zinc formula"], usage: "Apply at each change", warnings: ["For external use"], prescriptionRequired: false },
  { id: "BABY117", name: "LittleBloom Baby Wash", category: "baby-care", brand: "LittleBloom", price: 249, rating: 3.7, reviews: 178, inStock: true, image: bloomBabyWash, description: "Head-to-toe baby wash", benefits: ["2-in-1 formula", "Tear-free"], usage: "Use during bath", warnings: ["Avoid eyes"], prescriptionRequired: false },
  { id: "BABY118", name: "LittleBloom Laundry Detergent", category: "baby-care", brand: "LittleBloom", price: 449, rating: 2.7, reviews: 145, inStock: true, image: bloomLaundryDetergent, description: "Baby-safe laundry detergent", benefits: ["Hypoallergenic", "Gentle on clothes"], usage: "Use for baby clothes", warnings: ["Keep out of reach"], prescriptionRequired: false },
  { id: "BABY119", name: "LittleBloom Thermometer", category: "baby-care", brand: "LittleBloom", price: 349, rating: 4.6, reviews: 456, inStock: true, image: bloomThermometer, description: "Digital baby thermometer", benefits: ["Fast reading", "Fever alarm"], usage: "Place under arm", warnings: ["Clean after use"], prescriptionRequired: false },
  { id: "BABY120", name: "LittleBloom Nail Clipper", category: "baby-care", brand: "LittleBloom", price: 149, rating: 3.5, reviews: 189, inStock: true, image: bloomNailClipper, description: "Safe baby nail clipper", benefits: ["Rounded edges", "Easy grip"], usage: "Trim nails carefully", warnings: ["Use with caution"], prescriptionRequired: false },
  
  { id: "BABY121", name: "InfantPlus Colic Drops", category: "baby-care", brand: "InfantPlus", price: 199, rating: 4.3, reviews: 312, inStock: true, image: infantColicDrops, description: "Gas relief drops", benefits: ["Relieves colic", "Fast acting"], usage: "Give before feeding", warnings: ["Consult doctor"], prescriptionRequired: false },
  { id: "BABY122", name: "InfantPlus Probiotic Drops", category: "baby-care", brand: "InfantPlus", price: 549, rating: 3.8, reviews: 234, inStock: true, image: infantProbioticDrops, description: "Infant probiotic supplement", benefits: ["Gut health", "Immunity"], usage: "Give 5 drops daily", warnings: ["Refrigerate after opening"], prescriptionRequired: false },
  { id: "BABY123", name: "InfantPlus Iron Drops", category: "baby-care", brand: "InfantPlus", price: 299, rating: 2.9, reviews: 156, inStock: true, image: infantIronDrops, description: "Iron supplement for babies", benefits: ["Prevents anemia", "Supports growth"], usage: "Give as directed", warnings: ["May stain teeth"], prescriptionRequired: false },
  { id: "BABY124", name: "InfantPlus DHA Drops", category: "baby-care", brand: "InfantPlus", price: 649, rating: 4.5, reviews: 389, inStock: true, image: infantCalciumDrops, description: "DHA for brain development", benefits: ["Brain health", "Eye development"], usage: "Give 1ml daily", warnings: ["Keep refrigerated"], prescriptionRequired: false },
  { id: "BABY125", name: "InfantPlus Vitamin D", category: "baby-care", brand: "InfantPlus", price: 249, rating: 3.6, reviews: 267, inStock: true, image: infantDHADrops, description: "Vitamin D drops for infants", benefits: ["Bone health", "Immunity"], usage: "Give 400 IU daily", warnings: ["Do not exceed dose"], prescriptionRequired: false },
  
  { id: "BABY126", name: "KidShield Mosquito Repellent", category: "baby-care", brand: "KidShield", price: 199, rating: 4.2, reviews: 345, inStock: true, image: kidMosquitoRepellent, description: "Baby-safe mosquito repellent", benefits: ["Natural ingredients", "Long-lasting"], usage: "Apply to exposed skin", warnings: ["Avoid eyes and mouth"], prescriptionRequired: false },
  { id: "BABY127", name: "KidShield Hand Sanitizer", category: "baby-care", brand: "KidShield", price: 149, rating: 3.7, reviews: 198, inStock: true, image: kidHandSanitizer, description: "Gentle hand sanitizer", benefits: ["Kills germs", "Moisturizing"], usage: "Apply to hands", warnings: ["For external use"], prescriptionRequired: false },
  { id: "BABY128", name: "KidShield First Aid Kit", category: "baby-care", brand: "KidShield", price: 599, rating: 2.8, reviews: 123, inStock: true, image: kidFirstAidKit, description: "Baby first aid essentials", benefits: ["Complete kit", "Travel-friendly"], usage: "Keep handy", warnings: ["Check expiry dates"], prescriptionRequired: false },
  { id: "BABY129", name: "KidShield Antiseptic Cream", category: "baby-care", brand: "KidShield", price: 149, rating: 4.4, reviews: 289, inStock: true, image: kidAntisepticCream, description: "Antiseptic for minor cuts", benefits: ["Prevents infection", "Gentle formula"], usage: "Apply to clean wound", warnings: ["For external use"], prescriptionRequired: false },
  { id: "BABY130", name: "KidShield Bandages", category: "baby-care", brand: "KidShield", price: 99, rating: 3.5, reviews: 178, inStock: true, image: kidBandages, description: "Fun character bandages", benefits: ["Hypoallergenic", "Waterproof"], usage: "Apply to minor cuts", warnings: ["Change daily"], prescriptionRequired: false },
  
  { id: "BABY131", name: "SafeBaby Monitor", category: "baby-care", brand: "SafeBaby", price: 2499, rating: 4.7, reviews: 567, inStock: true, image: safeBabyMonitor, description: "Video baby monitor", benefits: ["Night vision", "Two-way audio"], usage: "Place in nursery", warnings: ["Keep cord away from baby"], prescriptionRequired: false },
  { id: "BABY132", name: "SafeBaby Humidifier", category: "baby-care", brand: "SafeBaby", price: 1499, rating: 4.1, reviews: 312, inStock: true, image: safeBabyHumidifier, description: "Cool mist humidifier", benefits: ["Relieves congestion", "Quiet operation"], usage: "Use in nursery", warnings: ["Clean regularly"], prescriptionRequired: false },
  { id: "BABY133", name: "SafeBaby Night Light", category: "baby-care", brand: "SafeBaby", price: 399, rating: 3.4, reviews: 189, inStock: true, image: safeBabySterilizer, description: "Soft glow night light", benefits: ["Soothing light", "Energy efficient"], usage: "Place in nursery", warnings: ["Keep away from water"], prescriptionRequired: false },
  { id: "BABY134", name: "SafeBaby Safety Gates", category: "baby-care", brand: "SafeBaby", price: 1999, rating: 4.6, reviews: 456, inStock: true, image: safeBabyBathThermometer, description: "Adjustable safety gate", benefits: ["Easy installation", "Sturdy"], usage: "Install at stairs", warnings: ["Follow instructions"], prescriptionRequired: false },
  { id: "BABY135", name: "SafeBaby Corner Guards", category: "baby-care", brand: "SafeBaby", price: 249, rating: 3.8, reviews: 234, inStock: true, image: safeBabyNasalAspirator, description: "Furniture corner protectors", benefits: ["Prevents injuries", "Easy to install"], usage: "Attach to sharp corners", warnings: ["Check adhesion regularly"], prescriptionRequired: false },
];


// Personal Care Product Images
import cleanAuraFaceWash from '../assets/Face Wash.jpg';
import cleanAuraBodyWash from '../assets/Body Wash.jpg';
import cleanAuraShampoo from '../assets/Shampoo (1).jpg';
import cleanAuraConditioner from '../assets/Conditioner.jpg';
import cleanAuraToothpaste from '../assets/Toothpaste.jpg';
import pureSkinMoisturizer from '../assets/Moisturizer.jpg';
import pureSkinSunscreen from '../assets/Sunscreen SPF 50.jpg';
import pureSkinSerum from '../assets/Serum.jpg';
import pureSkinToner from '../assets/Toner.jpg';
import pureSkinNightCream from '../assets/Night Cream.jpg';
import freshGuardDeodorant from '../assets/Deodorant.jpg';
import freshGuardBodySpray from '../assets/Body Spray.jpg';
import freshGuardMouthwash from '../assets/Mouthwash.jpg';
import freshGuardHandWash from '../assets/Hand Wash.jpg';
import freshGuardFootCream from '../assets/Foot Cream.jpg';
import dailyCareSoap from '../assets/Soap.jpg';
import dailyCareLotion from '../assets/Lotion (1).jpg';
import dailyCareTalc from '../assets/Talc.jpg';
import dailyCareShavingCream from '../assets/Shaving Cream.jpg';
import dailyCareAftershave from '../assets/Aftershave.jpg';
import dermasoftFaceCream from '../assets/Face Cream.jpg';
import dermasoftHandCream from '../assets/Hand Cream.jpg';
import dermasoftLipBalm from '../assets/Lip Balm.jpg';
import dermasoftBodyButter from '../assets/Body Butter.jpg';
import dermasoftEyeCream from '../assets/Eye Cream.jpg';
import hairCareHairOil from '../assets/Hair Oil.jpg';
import hairCareHairMask from '../assets/Hair Mask.jpg';
import hairCareHairSpray from '../assets/Hair Spray.jpg';
import hairCareHairGel from '../assets/Hair Gel.jpg';
import hairCareHairColor from '../assets/Hair Color.jpg';
import oralCareToothbrush from '../assets/Toothbrush.jpg';
import oralCareDentalFloss from '../assets/Dental Floss.jpg';
import oralCareTongueCleaner from '../assets/Tongue Cleaner.jpg';
import oralCareTeethWhiteningStrips from '../assets/Teeth Whitening Strips.jpg';
import oralCareDentureCleaner from '../assets/Denture Cleaner.jpg';

// Personal Care Products - EXPANDED
export const personalCareProducts: Product[] = [
  { id: "CARE001", name: "CleanAura Face Wash", category: "personal-care", brand: "CleanAura", price: 299, rating: 4.5, reviews: 456, inStock: true, image: cleanAuraFaceWash, description: "Deep cleansing face wash", benefits: ["Removes dirt", "Refreshing"], usage: "Use twice daily", warnings: ["Avoid eyes"], prescriptionRequired: false },
  { id: "CARE002", name: "CleanAura Body Wash", category: "personal-care", brand: "CleanAura", price: 349, rating: 3.8, reviews: 312, inStock: true, image: cleanAuraBodyWash, description: "Moisturizing body wash", benefits: ["Hydrates skin", "Pleasant scent"], usage: "Use during shower", warnings: ["For external use"], prescriptionRequired: false },
  { id: "CARE003", name: "CleanAura Shampoo", category: "personal-care", brand: "CleanAura", price: 399, rating: 4.2, reviews: 389, inStock: true, image: cleanAuraShampoo, description: "Nourishing shampoo", benefits: ["Strengthens hair", "Adds shine"], usage: "Apply to wet hair", warnings: ["Rinse thoroughly"], prescriptionRequired: false },
  { id: "CARE004", name: "CleanAura Conditioner", category: "personal-care", brand: "CleanAura", price: 399, rating: 2.9, reviews: 178, inStock: true, image: cleanAuraConditioner, description: "Smoothing conditioner", benefits: ["Detangles hair", "Soft finish"], usage: "Apply after shampoo", warnings: ["Avoid scalp"], prescriptionRequired: false },
  { id: "CARE005", name: "CleanAura Toothpaste", category: "personal-care", brand: "CleanAura", price: 149, rating: 3.6, reviews: 267, inStock: true, image: cleanAuraToothpaste, description: "Whitening toothpaste", benefits: ["Whitens teeth", "Fresh breath"], usage: "Brush twice daily", warnings: ["Not for children under 6"], prescriptionRequired: false },
  
  { id: "CARE006", name: "PureSkin Moisturizer", category: "personal-care", brand: "PureSkin", price: 549, rating: 4.6, reviews: 523, inStock: true, image: pureSkinMoisturizer, description: "Daily face moisturizer", benefits: ["24-hour hydration", "Non-greasy"], usage: "Apply twice daily", warnings: ["Patch test first"], prescriptionRequired: false },
  { id: "CARE007", name: "PureSkin Sunscreen SPF 50", category: "personal-care", brand: "PureSkin", price: 499, rating: 4.4, reviews: 456, inStock: true, image: pureSkinSunscreen, description: "Broad spectrum sunscreen", benefits: ["UVA/UVB protection", "Water resistant"], usage: "Apply before sun exposure", warnings: ["Reapply every 2 hours"], prescriptionRequired: false },
  { id: "CARE008", name: "PureSkin Serum", category: "personal-care", brand: "PureSkin", price: 899, rating: 3.7, reviews: 289, inStock: true, image: pureSkinSerum, description: "Vitamin C serum", benefits: ["Brightens skin", "Anti-aging"], usage: "Apply before moisturizer", warnings: ["Use sunscreen"], prescriptionRequired: false },
  { id: "CARE009", name: "PureSkin Toner", category: "personal-care", brand: "PureSkin", price: 399, rating: 2.8, reviews: 167, inStock: true, image: pureSkinToner, description: "Balancing toner", benefits: ["Tightens pores", "Refreshes skin"], usage: "Apply after cleansing", warnings: ["Avoid eyes"], prescriptionRequired: false },
  { id: "CARE010", name: "PureSkin Night Cream", category: "personal-care", brand: "PureSkin", price: 699, rating: 4.3, reviews: 345, inStock: true, image: pureSkinNightCream, description: "Overnight repair cream", benefits: ["Deep nourishment", "Anti-aging"], usage: "Apply before bed", warnings: ["For external use"], prescriptionRequired: false },
  
  { id: "CARE011", name: "FreshGuard Deodorant", category: "personal-care", brand: "FreshGuard", price: 199, rating: 4.2, reviews: 412, inStock: true, image: freshGuardDeodorant, description: "24-hour protection deodorant", benefits: ["Long-lasting", "No white marks"], usage: "Apply to underarms", warnings: ["Avoid broken skin"], prescriptionRequired: false },
  { id: "CARE012", name: "FreshGuard Body Spray", category: "personal-care", brand: "FreshGuard", price: 249, rating: 3.5, reviews: 289, inStock: true, image: freshGuardBodySpray, description: "Refreshing body spray", benefits: ["Fresh scent", "Quick-dry"], usage: "Spray on body", warnings: ["Flammable"], prescriptionRequired: false },
  { id: "CARE013", name: "FreshGuard Mouthwash", category: "personal-care", brand: "FreshGuard", price: 199, rating: 2.7, reviews: 178, inStock: true, image: freshGuardMouthwash, description: "Antibacterial mouthwash", benefits: ["Kills germs", "Fresh breath"], usage: "Rinse for 30 seconds", warnings: ["Do not swallow"], prescriptionRequired: false },
  { id: "CARE014", name: "FreshGuard Hand Wash", category: "personal-care", brand: "FreshGuard", price: 149, rating: 4.4, reviews: 523, inStock: true, image: freshGuardHandWash, description: "Antibacterial hand wash", benefits: ["Kills 99.9% germs", "Moisturizing"], usage: "Wash hands thoroughly", warnings: ["Avoid eyes"], prescriptionRequired: false },
  { id: "CARE015", name: "FreshGuard Foot Cream", category: "personal-care", brand: "FreshGuard", price: 299, rating: 3.8, reviews: 234, inStock: true, image: freshGuardFootCream, description: "Moisturizing foot cream", benefits: ["Softens feet", "Repairs cracks"], usage: "Apply to clean feet", warnings: ["For external use"], prescriptionRequired: false },
  
  { id: "CARE016", name: "DailyCare Soap", category: "personal-care", brand: "DailyCare", price: 99, rating: 4.1, reviews: 678, inStock: true, image: dailyCareSoap, description: "Gentle bathing soap", benefits: ["Moisturizing", "pH balanced"], usage: "Use daily", warnings: ["For external use"], prescriptionRequired: false },
  { id: "CARE017", name: "DailyCare Lotion", category: "personal-care", brand: "DailyCare", price: 249, rating: 3.6, reviews: 345, inStock: true, image: dailyCareLotion, description: "Body lotion", benefits: ["Hydrates skin", "Non-sticky"], usage: "Apply after bath", warnings: ["Patch test first"], prescriptionRequired: false },
  { id: "CARE018", name: "DailyCare Talc", category: "personal-care", brand: "DailyCare", price: 149, rating: 2.9, reviews: 189, inStock: true, image: dailyCareTalc, description: "Refreshing body talc", benefits: ["Keeps skin dry", "Pleasant fragrance"], usage: "Apply to body", warnings: ["Avoid inhalation"], prescriptionRequired: false },
  { id: "CARE019", name: "DailyCare Shaving Cream", category: "personal-care", brand: "DailyCare", price: 199, rating: 4.3, reviews: 412, inStock: true, image: dailyCareShavingCream, description: "Smooth shaving cream", benefits: ["Prevents razor burn", "Smooth shave"], usage: "Apply before shaving", warnings: ["For external use"], prescriptionRequired: false },
  { id: "CARE020", name: "DailyCare Aftershave", category: "personal-care", brand: "DailyCare", price: 249, rating: 3.7, reviews: 267, inStock: true, image: dailyCareAftershave, description: "Soothing aftershave", benefits: ["Soothes skin", "Prevents irritation"], usage: "Apply after shaving", warnings: ["Avoid broken skin"], prescriptionRequired: false },
  
  { id: "CARE021", name: "Dermasoft Face Cream", category: "personal-care", brand: "Dermasoft", price: 599, rating: 4.5, reviews: 489, inStock: true, image: dermasoftFaceCream, description: "Anti-aging face cream", benefits: ["Reduces wrinkles", "Firms skin"], usage: "Apply twice daily", warnings: ["Patch test first"], prescriptionRequired: false },
  { id: "CARE022", name: "Dermasoft Hand Cream", category: "personal-care", brand: "Dermasoft", price: 299, rating: 4.2, reviews: 356, inStock: true, image: dermasoftHandCream, description: "Intensive hand cream", benefits: ["Deep moisturization", "Non-greasy"], usage: "Apply as needed", warnings: ["For external use"], prescriptionRequired: false },
  { id: "CARE023", name: "Dermasoft Lip Balm", category: "personal-care", brand: "Dermasoft", price: 149, rating: 3.4, reviews: 234, inStock: true, image: dermasoftLipBalm, description: "Moisturizing lip balm", benefits: ["Prevents chapping", "SPF 15"], usage: "Apply to lips", warnings: ["For external use"], prescriptionRequired: false },
  { id: "CARE024", name: "Dermasoft Body Butter", category: "personal-care", brand: "Dermasoft", price: 699, rating: 2.8, reviews: 178, inStock: true, image: dermasoftBodyButter, description: "Rich body butter", benefits: ["Intense hydration", "Smooth skin"], usage: "Apply to dry areas", warnings: ["Patch test first"], prescriptionRequired: false },
  { id: "CARE025", name: "Dermasoft Exfoliator", category: "personal-care", brand: "Dermasoft", price: 449, rating: 4.4, reviews: 412, inStock: true, image: dermasoftEyeCream, description: "Gentle face exfoliator", benefits: ["Removes dead skin", "Brightens"], usage: "Use 2-3 times weekly", warnings: ["Avoid eyes"], prescriptionRequired: false },
  
  { id: "CARE026", name: "HygienePro Sanitizer", category: "personal-care", brand: "HygienePro", price: 149, rating: 4.6, reviews: 789, inStock: true, image: hairCareHairOil, description: "Hand sanitizer gel", benefits: ["Kills 99.9% germs", "Quick-dry"], usage: "Apply to hands", warnings: ["Flammable"], prescriptionRequired: false },
  { id: "CARE027", name: "HygienePro Wet Wipes", category: "personal-care", brand: "HygienePro", price: 99, rating: 3.9, reviews: 456, inStock: true, image: hairCareHairMask, description: "Antibacterial wet wipes", benefits: ["Convenient", "Kills germs"], usage: "Use as needed", warnings: ["Dispose properly"], prescriptionRequired: false },
  { id: "CARE028", name: "HygienePro Tissue Box", category: "personal-care", brand: "HygienePro", price: 49, rating: 3.5, reviews: 234, inStock: true, image: hairCareHairSpray, description: "Soft facial tissues", benefits: ["Soft", "Strong"], usage: "Use as needed", warnings: ["Dispose properly"], prescriptionRequired: false },
  { id: "CARE029", name: "HygienePro Cotton Pads", category: "personal-care", brand: "HygienePro", price: 79, rating: 2.7, reviews: 167, inStock: true, image: hairCareHairGel, description: "Soft cotton pads", benefits: ["Gentle", "Absorbent"], usage: "Use for cleansing", warnings: ["For external use"], prescriptionRequired: false },
  { id: "CARE030", name: "HygienePro Cotton Buds", category: "personal-care", brand: "HygienePro", price: 59, rating: 4.1, reviews: 345, inStock: true, image: hairCareHairColor, description: "Cotton ear buds", benefits: ["Soft tips", "Safe"], usage: "Use gently", warnings: ["Do not insert deep"], prescriptionRequired: false },
  
  { id: "CARE031", name: "SkinEssence Face Mask", category: "personal-care", brand: "SkinEssence", price: 399, rating: 4.4, reviews: 523, inStock: true, image: oralCareToothbrush, description: "Hydrating sheet mask", benefits: ["Deep hydration", "Brightening"], usage: "Apply for 15-20 minutes", warnings: ["Single use only"], prescriptionRequired: false },
  { id: "CARE032", name: "SkinEssence Eye Cream", category: "personal-care", brand: "SkinEssence", price: 799, rating: 4.2, reviews: 389, inStock: true, image: oralCareDentalFloss, description: "Anti-aging eye cream", benefits: ["Reduces dark circles", "Firms skin"], usage: "Apply around eyes", warnings: ["Avoid direct eye contact"], prescriptionRequired: false },
  { id: "CARE033", name: "SkinEssence Cleanser", category: "personal-care", brand: "SkinEssence", price: 449, rating: 3.6, reviews: 267, inStock: true, image: oralCareTongueCleaner, description: "Gentle facial cleanser", benefits: ["Deep cleansing", "Refreshing"], usage: "Use twice daily", warnings: ["Avoid eyes"], prescriptionRequired: false },
  { id: "CARE034", name: "SkinEssence Scrub", category: "personal-care", brand: "SkinEssence", price: 349, rating: 2.9, reviews: 189, inStock: true, image: oralCareTeethWhiteningStrips, description: "Exfoliating face scrub", benefits: ["Removes dead skin", "Smooth texture"], usage: "Use 2-3 times weekly", warnings: ["Do not over-scrub"], prescriptionRequired: false },
  { id: "CARE035", name: "SkinEssence Micellar Water", category: "personal-care", brand: "SkinEssence", price: 499, rating: 4.5, reviews: 456, inStock: true, image: oralCareDentureCleaner, description: "Makeup remover", benefits: ["Gentle cleansing", "No rinse needed"], usage: "Apply with cotton pad", warnings: ["Avoid eyes"], prescriptionRequired: false },
];


// General Medicine Product Images
import mediLifeParacetamol from '../assets/MediLife Paracetamol.jpg';
import mediLifeIbuprofen from '../assets/MediLife Ibuprofen.jpg';
import mediLifeCoughSyrup from '../assets/MediLife Cough Syrup.jpg';
import mediLifeAntacid from '../assets/MediLife Antacid.jpg';
import mediLifeVitaminC from '../assets/MediLife Vitamin C.jpg';
import healthVitMultivitamin from '../assets/Multivitamin.jpg';
import healthVitCalcium from '../assets/Calcium.jpg';
import healthVitIron from '../assets/Iron.jpg';
import healthVitZinc from '../assets/Zinc.jpg';
import healthVitBComplex from '../assets/B-Complex.jpg';
import curePlusColdRelief from '../assets/Cold Relief.jpg';
import curePlusThroatLozenges from '../assets/Throat Lozenges.jpg';
import curePlusPainReliefGel from '../assets/Pain Relief Gel.jpg';
import curePlusDigestiveEnzyme from '../assets/Digestive Enzyme.jpg';
import curePlusAllergyRelief from '../assets/Allergy Relief.jpg';
import pharmaCareORS from '../assets/PharmaCare ORS.jpg';
import pharmaCareAntiseptic from '../assets/PharmaCare Antiseptic.jpg';
import pharmaCareBandages from '../assets/PharmaCare Bandages.jpg';
import pharmaCareGauze from '../assets/PharmaCare Gauze.jpg';
import pharmaCareCotton from '../assets/PharmaCare Cotton.jpg';
import vitaBoostEnergyDrink from '../assets/VitaBoost Energy Drink.jpg';
import vitaBoostProteinPowder from '../assets/VitaBoost Protein Powder.jpg';
import vitaBoostOmega3 from '../assets/VitaBoost Omega-3.jpg';
import vitaBoostProbiotics from '../assets/VitaBoost Probiotics.jpg';
import vitaBoostCollagen from '../assets/VitaBoost Collagen.jpg';
import wellCareBloodPressureMonitor from '../assets/Blood Pressure Monitor.jpg';
import wellCareGlucometer from '../assets/Glucometer.jpg';
import wellCareThermometer from '../assets/Thermometer.jpg';
import wellCarePulseOximeter from '../assets/Thermometer(1).jpg';
import wellCareNebulizer from '../assets/Nebulizer.jpg';
import quickHealFirstAidKit from '../assets/First Aid Kit.jpg';
import quickHealHandSanitizer from '../assets/Hand Sanitizer.jpg';
import quickHealFaceMasks from '../assets/Face Masks.jpg';
import quickHealSurgicalGloves from '../assets/Surgical Gloves.jpg';
import quickHealDisinfectantSpray from '../assets/Disinfectant Spray.jpg';

// General Medicine Products - EXPANDED
export const generalMedicineProducts: Product[] = [
  { id: "MED101", name: "MediLife Paracetamol", category: "general-medicine", brand: "MediLife", price: 45, rating: 4.5, reviews: 1234, inStock: true, image: mediLifeParacetamol, description: "Pain and fever relief", benefits: ["Reduces fever", "Relieves pain"], usage: "Take 1-2 tablets every 4-6 hours", warnings: ["Do not exceed 8 tablets daily"], prescriptionRequired: false },
  { id: "MED102", name: "MediLife Ibuprofen", category: "general-medicine", brand: "MediLife", price: 65, rating: 4.3, reviews: 987, inStock: true, image: mediLifeIbuprofen, description: "Anti-inflammatory", benefits: ["Reduces inflammation", "Pain relief"], usage: "Take with food", warnings: ["Not for stomach ulcers"], prescriptionRequired: false },
  { id: "MED103", name: "MediLife Cough Syrup", category: "general-medicine", brand: "MediLife", price: 125, rating: 3.8, reviews: 756, inStock: true, image: mediLifeCoughSyrup, description: "Cough relief", benefits: ["Soothes throat", "Reduces cough"], usage: "Take 2 teaspoons 3 times daily", warnings: ["Shake well"], prescriptionRequired: false },
  { id: "MED104", name: "MediLife Antacid", category: "general-medicine", brand: "MediLife", price: 89, rating: 2.9, reviews: 456, inStock: true, image: mediLifeAntacid, description: "Acidity relief", benefits: ["Fast relief", "Mint flavor"], usage: "Chew 1-2 tablets", warnings: ["Do not exceed 8 tablets"], prescriptionRequired: false },
  { id: "MED105", name: "MediLife Vitamin C", category: "general-medicine", brand: "MediLife", price: 199, rating: 4.6, reviews: 678, inStock: true, image: mediLifeVitaminC, description: "Immunity booster", benefits: ["Boosts immunity", "Antioxidant"], usage: "Take 1 tablet daily", warnings: ["Store in cool place"], prescriptionRequired: false },
  
  { id: "MED106", name: "HealthVit Multivitamin", category: "general-medicine", brand: "HealthVit", price: 299, rating: 4.4, reviews: 892, inStock: true, image: healthVitMultivitamin, description: "Complete nutrition", benefits: ["Essential vitamins", "Energy boost"], usage: "Take 1 tablet daily", warnings: ["Keep out of reach of children"], prescriptionRequired: false },
  { id: "MED107", name: "HealthVit Calcium", category: "general-medicine", brand: "HealthVit", price: 249, rating: 3.7, reviews: 534, inStock: true, image: healthVitCalcium, description: "Bone health", benefits: ["Strengthens bones", "With Vitamin D"], usage: "Take 1 tablet twice daily", warnings: ["Consult doctor"], prescriptionRequired: false },
  { id: "MED108", name: "HealthVit Iron", category: "general-medicine", brand: "HealthVit", price: 199, rating: 2.8, reviews: 345, inStock: true, image: healthVitIron, description: "Prevents anemia", benefits: ["Boosts hemoglobin", "Energy"], usage: "Take 1 tablet daily", warnings: ["May cause constipation"], prescriptionRequired: false },
  { id: "MED109", name: "HealthVit Zinc", category: "general-medicine", brand: "HealthVit", price: 149, rating: 4.2, reviews: 456, inStock: true, image: healthVitZinc, description: "Immunity support", benefits: ["Boosts immunity", "Wound healing"], usage: "Take 1 tablet daily", warnings: ["Do not exceed dose"], prescriptionRequired: false },
  { id: "MED110", name: "HealthVit B-Complex", category: "general-medicine", brand: "HealthVit", price: 179, rating: 3.6, reviews: 389, inStock: true, image: healthVitBComplex, description: "Energy vitamins", benefits: ["Boosts energy", "Reduces fatigue"], usage: "Take 1 tablet daily", warnings: ["Take with food"], prescriptionRequired: false },
  
  { id: "MED111", name: "CurePlus Cold Relief", category: "general-medicine", brand: "CurePlus", price: 95, rating: 4.3, reviews: 823, inStock: true, image: curePlusColdRelief, description: "Multi-symptom relief", benefits: ["Relieves cold symptoms", "Fast acting"], usage: "Take 1 tablet every 6 hours", warnings: ["May cause drowsiness"], prescriptionRequired: false },
  { id: "MED112", name: "CurePlus Throat Lozenges", category: "general-medicine", brand: "CurePlus", price: 55, rating: 3.9, reviews: 567, inStock: true, image: curePlusThroatLozenges, description: "Sore throat relief", benefits: ["Soothes throat", "Antibacterial"], usage: "Dissolve 1 lozenge every 2-3 hours", warnings: ["Not for children under 6"], prescriptionRequired: false },
  { id: "MED113", name: "CurePlus Pain Relief Gel", category: "general-medicine", brand: "CurePlus", price: 159, rating: 2.7, reviews: 412, inStock: true, image: curePlusPainReliefGel, description: "Topical pain relief", benefits: ["Fast relief", "Non-greasy"], usage: "Apply to affected area", warnings: ["For external use only"], prescriptionRequired: false },
  { id: "MED114", name: "CurePlus Digestive Enzyme", category: "general-medicine", brand: "CurePlus", price: 149, rating: 4.5, reviews: 678, inStock: true, image: curePlusDigestiveEnzyme, description: "Improves digestion", benefits: ["Reduces bloating", "Better absorption"], usage: "Take 1 tablet with meals", warnings: ["Consult doctor"], prescriptionRequired: false },
  { id: "MED115", name: "CurePlus Allergy Relief", category: "general-medicine", brand: "CurePlus", price: 79, rating: 3.8, reviews: 534, inStock: true, image: curePlusAllergyRelief, description: "Antihistamine", benefits: ["Relieves allergies", "Non-drowsy"], usage: "Take 1 tablet daily", warnings: ["Avoid alcohol"], prescriptionRequired: false },
  
  { id: "MED116", name: "PharmaCare ORS", category: "general-medicine", brand: "PharmaCare", price: 99, rating: 4.7, reviews: 1123, inStock: true, image: pharmaCareORS, description: "Oral rehydration", benefits: ["Prevents dehydration", "WHO formula"], usage: "Dissolve in water", warnings: ["Use fresh solution"], prescriptionRequired: false },
  { id: "MED117", name: "PharmaCare Antiseptic", category: "general-medicine", brand: "PharmaCare", price: 89, rating: 4.2, reviews: 789, inStock: true, image: pharmaCareAntiseptic, description: "Wound disinfectant", benefits: ["Kills germs", "Prevents infection"], usage: "Apply to clean wound", warnings: ["For external use"], prescriptionRequired: false },
  { id: "MED118", name: "PharmaCare Bandages", category: "general-medicine", brand: "PharmaCare", price: 49, rating: 3.5, reviews: 456, inStock: true, image: pharmaCareBandages, description: "Adhesive bandages", benefits: ["Waterproof", "Flexible"], usage: "Apply to minor cuts", warnings: ["Change daily"], prescriptionRequired: false },
  { id: "MED119", name: "PharmaCare Gauze", category: "general-medicine", brand: "PharmaCare", price: 69, rating: 2.9, reviews: 234, inStock: true, image: pharmaCareGauze, description: "Sterile gauze pads", benefits: ["Absorbent", "Sterile"], usage: "Use for wound dressing", warnings: ["Single use only"], prescriptionRequired: false },
  { id: "MED120", name: "PharmaCare Cotton", category: "general-medicine", brand: "PharmaCare", price: 39, rating: 4.1, reviews: 567, inStock: true, image: pharmaCareCotton, description: "Medical cotton", benefits: ["Soft", "Absorbent"], usage: "Use for cleaning", warnings: ["For external use"], prescriptionRequired: false },
  
  { id: "MED121", name: "VitaBoost Energy Drink", category: "general-medicine", brand: "VitaBoost", price: 149, rating: 4.4, reviews: 892, inStock: true, image: vitaBoostEnergyDrink, description: "Energy supplement", benefits: ["Instant energy", "Vitamins"], usage: "Mix with water", warnings: ["Contains caffeine"], prescriptionRequired: false },
  { id: "MED122", name: "VitaBoost Protein Powder", category: "general-medicine", brand: "VitaBoost", price: 999, rating: 4.6, reviews: 1234, inStock: true, image: vitaBoostProteinPowder, description: "Whey protein", benefits: ["Muscle building", "25g protein"], usage: "Mix 1 scoop with milk", warnings: ["Consult doctor"], prescriptionRequired: false },
  { id: "MED123", name: "VitaBoost Omega-3", category: "general-medicine", brand: "VitaBoost", price: 599, rating: 3.7, reviews: 678, inStock: true, image: vitaBoostOmega3, description: "Fish oil capsules", benefits: ["Heart health", "Brain function"], usage: "Take 2 capsules daily", warnings: ["Keep refrigerated"], prescriptionRequired: false },
  { id: "MED124", name: "VitaBoost Probiotics", category: "general-medicine", brand: "VitaBoost", price: 799, rating: 2.8, reviews: 456, inStock: true, image: vitaBoostProbiotics, description: "Gut health", benefits: ["Improves digestion", "Immunity"], usage: "Take 1 capsule daily", warnings: ["Refrigerate after opening"], prescriptionRequired: false },
  { id: "MED125", name: "VitaBoost Collagen", category: "general-medicine", brand: "VitaBoost", price: 1299, rating: 4.3, reviews: 789, inStock: true, image: vitaBoostCollagen, description: "Skin and joint health", benefits: ["Anti-aging", "Joint support"], usage: "Mix 1 scoop daily", warnings: ["Store in cool place"], prescriptionRequired: false },
  
  { id: "MED126", name: "HealWell First Aid Kit", category: "general-medicine", brand: "HealWell", price: 599, rating: 4.5, reviews: 1023, inStock: true, image: wellCareBloodPressureMonitor, description: "Complete first aid", benefits: ["100+ pieces", "Portable"], usage: "Keep handy", warnings: ["Check expiry dates"], prescriptionRequired: false },
  { id: "MED127", name: "HealWell Muscle Spray", category: "general-medicine", brand: "HealWell", price: 249, rating: 4.2, reviews: 567, inStock: true, image: wellCareGlucometer, description: "Instant pain relief", benefits: ["Fast acting", "Cooling effect"], usage: "Spray on affected area", warnings: ["For external use"], prescriptionRequired: false },
  { id: "MED128", name: "HealWell Eye Drops", category: "general-medicine", brand: "HealWell", price: 129, rating: 3.6, reviews: 412, inStock: true, image: wellCareThermometer, description: "Relieves eye strain", benefits: ["Soothes eyes", "Reduces redness"], usage: "Apply 1-2 drops", warnings: ["Do not touch dropper"], prescriptionRequired: false },
  { id: "MED129", name: "HealWell Ear Drops", category: "general-medicine", brand: "HealWell", price: 99, rating: 2.9, reviews: 289, inStock: true, image: wellCarePulseOximeter, description: "Ear wax removal", benefits: ["Softens wax", "Safe formula"], usage: "Apply 3-4 drops", warnings: ["Consult doctor if pain"], prescriptionRequired: false },
  { id: "MED130", name: "HealWell Nasal Spray", category: "general-medicine", brand: "HealWell", price: 149, rating: 4.4, reviews: 678, inStock: true, image: wellCareNebulizer, description: "Congestion relief", benefits: ["Clears nose", "Fast relief"], usage: "Spray in each nostril", warnings: ["Do not share"], prescriptionRequired: false },
  
  { id: "MED131", name: "SafeMeds Glucose Powder", category: "general-medicine", brand: "SafeMeds", price: 89, rating: 4.3, reviews: 892, inStock: true, image: quickHealFirstAidKit, description: "Instant energy", benefits: ["Quick energy", "Easy to digest"], usage: "Mix with water", warnings: ["Diabetics consult doctor"], prescriptionRequired: false },
  { id: "MED132", name: "SafeMeds Electrolyte", category: "general-medicine", brand: "SafeMeds", price: 129, rating: 4.1, reviews: 567, inStock: true, image: quickHealHandSanitizer, description: "Hydration drink", benefits: ["Replenishes electrolytes", "Refreshing"], usage: "Mix with water", warnings: ["Use fresh solution"], prescriptionRequired: false },
  { id: "MED133", name: "SafeMeds Laxative", category: "general-medicine", brand: "SafeMeds", price: 99, rating: 3.5, reviews: 412, inStock: true, image: quickHealFaceMasks, description: "Relieves constipation", benefits: ["Gentle relief", "Overnight action"], usage: "Take before bed", warnings: ["Do not use long-term"], prescriptionRequired: false },
  { id: "MED134", name: "SafeMeds Anti-Diarrheal", category: "general-medicine", brand: "SafeMeds", price: 79, rating: 2.8, reviews: 289, inStock: true, image: quickHealSurgicalGloves, description: "Stops diarrhea", benefits: ["Fast relief", "Safe formula"], usage: "Take after loose stool", warnings: ["Consult doctor if persists"], prescriptionRequired: false },
  { id: "MED135", name: "SafeMeds Motion Sickness", category: "general-medicine", brand: "SafeMeds", price: 69, rating: 4.2, reviews: 534, inStock: true, image: quickHealDisinfectantSpray, description: "Prevents nausea", benefits: ["Prevents motion sickness", "Non-drowsy"], usage: "Take before travel", warnings: ["May cause drowsiness"], prescriptionRequired: false },
];


// Health Devices Product Images
import mediTechThermometer from '../assets/Thermometer (2).jpg';
import mediTechBPMonitor from '../assets/BP Monitor (2).jpg';
import mediTechGlucometer from '../assets/Glucometer (2).jpg';
import mediTechOximeter from '../assets/Oximeter.jpg';
import mediTechNebulizer from '../assets/Nebulizer(2).jpg';
import healthTrackWeighingScale from '../assets/Weighing Scale.jpg';
import healthTrackFitnessBand from '../assets/Fitness Band.jpg';
import healthTrackPedometer from '../assets/Pedometer.jpg';
import healthTrackHeartMonitor from '../assets/Heart Monitor.jpg';
import healthTrackSleepTracker from '../assets/Sleep Tracker.jpg';
import vitalCheckStethoscope from '../assets/Stethoscope.jpg';
import vitalCheckInfraredThermometer from '../assets/Infrared Thermometer.jpg';
import vitalCheckHeatingPad from '../assets/Heating Pad.jpg';
import vitalCheckIcePack from '../assets/Ice Pack.jpg';
import vitalCheckCompressionSocks from '../assets/Compression Socks.jpg';
import careMonitorBloodGlucoseStrips from '../assets/Blood Glucose Strips.jpg';
import careMonitorLancets from '../assets/Lancets.jpg';
import careMonitorInsulinPen from '../assets/Insulin Pen.jpg';
import careMonitorPillOrganizer from '../assets/Pill Organizer.jpg';
import careMonitorMedicineReminder from '../assets/Medicine Reminder.jpg';
import smartMedWheelchair from '../assets/Wheelchair.jpg';
import smartMedWalkingStick from '../assets/Walking Stick.jpg';
import smartMedWalker from '../assets/Walker.jpg';
import smartMedCrutches from '../assets/Crutches.jpg';
import smartMedKneeBrace from '../assets/Knee Brace.jpg';
import homeCareOxygenConcentrator from '../assets/Oxygen Concentrator.jpg';
import homeCareCPAPMachine from '../assets/CPAP Machine.jpg';
import homeCareHumidifier from '../assets/Humidifier.jpg';
import homeCareAirPurifier from '../assets/Air Purifier.jpg';
import homeCareVaporizer from '../assets/Vaporizer.jpg';
import mediSupplySurgicalMask from '../assets/Surgical Mask.jpg';
import mediSupplyN95Mask from '../assets/N95 Mask.jpg';
import mediSupplyFaceShield from '../assets/Face Shield.jpg';
import mediSupplyLatexGloves from '../assets/Latex Gloves.jpg';
import mediSupplyHandSanitizer from '../assets/Hand Sanitizer (3).jpg';

// Health Devices Products - EXPANDED
export const healthDevicesProducts: Product[] = [
  { id: "DEV201", name: "MediTech Thermometer", category: "health-devices", brand: "MediTech", price: 299, rating: 4.6, reviews: 892, inStock: true, image: mediTechThermometer, description: "Digital thermometer", benefits: ["Fast reading", "Fever alarm"], usage: "Place under tongue", warnings: ["Clean after use"], prescriptionRequired: false },
  { id: "DEV202", name: "MediTech BP Monitor", category: "health-devices", brand: "MediTech", price: 1899, rating: 4.8, reviews: 1234, inStock: true, image: mediTechBPMonitor, description: "Blood pressure monitor", benefits: ["Automatic", "Memory function"], usage: "Wrap cuff around arm", warnings: ["Follow instructions"], prescriptionRequired: false },
  { id: "DEV203", name: "MediTech Glucometer", category: "health-devices", brand: "MediTech", price: 1299, rating: 4.4, reviews: 789, inStock: true, image: mediTechGlucometer, description: "Blood glucose meter", benefits: ["Accurate", "Fast results"], usage: "Prick finger, test blood", warnings: ["Dispose lancets safely"], prescriptionRequired: false },
  { id: "DEV204", name: "MediTech Oximeter", category: "health-devices", brand: "MediTech", price: 899, rating: 3.7, reviews: 567, inStock: true, image: mediTechOximeter, description: "Pulse oximeter", benefits: ["Measures SpO2", "LED display"], usage: "Insert finger", warnings: ["Not for continuous monitoring"], prescriptionRequired: false },
  { id: "DEV205", name: "MediTech Nebulizer", category: "health-devices", brand: "MediTech", price: 2499, rating: 2.9, reviews: 412, inStock: true, image: mediTechNebulizer, description: "Portable nebulizer", benefits: ["Quiet operation", "Fast treatment"], usage: "Add medication, inhale", warnings: ["Clean after use"], prescriptionRequired: false },
  
  { id: "DEV206", name: "HealthTrack Weighing Scale", category: "health-devices", brand: "HealthTrack", price: 1499, rating: 4.5, reviews: 678, inStock: true, image: healthTrackWeighingScale, description: "Digital weighing scale", benefits: ["High precision", "Large display"], usage: "Step on scale", warnings: ["Use on flat surface"], prescriptionRequired: false },
  { id: "DEV207", name: "HealthTrack Fitness Band", category: "health-devices", brand: "HealthTrack", price: 2999, rating: 4.3, reviews: 1023, inStock: true, image: healthTrackFitnessBand, description: "Activity tracker", benefits: ["Tracks steps", "Heart rate monitor"], usage: "Wear on wrist", warnings: ["Charge regularly"], prescriptionRequired: false },
  { id: "DEV208", name: "HealthTrack Pedometer", category: "health-devices", brand: "HealthTrack", price: 499, rating: 3.6, reviews: 456, inStock: true, image: healthTrackPedometer, description: "Step counter", benefits: ["Tracks steps", "Calorie counter"], usage: "Clip to belt", warnings: ["Replace battery"], prescriptionRequired: false },
  { id: "DEV209", name: "HealthTrack Heart Monitor", category: "health-devices", brand: "HealthTrack", price: 3499, rating: 2.8, reviews: 289, inStock: true, image: healthTrackHeartMonitor, description: "ECG monitor", benefits: ["Detects irregularities", "Portable"], usage: "Place on chest", warnings: ["Not for diagnosis"], prescriptionRequired: false },
  { id: "DEV210", name: "HealthTrack Sleep Tracker", category: "health-devices", brand: "HealthTrack", price: 1999, rating: 4.2, reviews: 534, inStock: true, image: healthTrackSleepTracker, description: "Sleep quality monitor", benefits: ["Tracks sleep", "Smart alarm"], usage: "Place under mattress", warnings: ["Sync with app"], prescriptionRequired: false },
  
  { id: "DEV211", name: "VitalCheck Stethoscope", category: "health-devices", brand: "VitalCheck", price: 899, rating: 4.4, reviews: 678, inStock: true, image: vitalCheckStethoscope, description: "Medical stethoscope", benefits: ["Clear sound", "Durable"], usage: "Listen to heart/lungs", warnings: ["Clean regularly"], prescriptionRequired: false },
  { id: "DEV212", name: "VitalCheck Infrared Thermometer", category: "health-devices", brand: "VitalCheck", price: 1299, rating: 4.6, reviews: 892, inStock: true, image: vitalCheckInfraredThermometer, description: "Non-contact thermometer", benefits: ["Instant reading", "Hygienic"], usage: "Point at forehead", warnings: ["Keep clean"], prescriptionRequired: false },
  { id: "DEV213", name: "VitalCheck Heating Pad", category: "health-devices", brand: "VitalCheck", price: 799, rating: 3.8, reviews: 456, inStock: true, image: vitalCheckHeatingPad, description: "Electric heating pad", benefits: ["Pain relief", "3 heat settings"], usage: "Apply to affected area", warnings: ["Do not sleep with it"], prescriptionRequired: false },
  { id: "DEV214", name: "VitalCheck Ice Pack", category: "health-devices", brand: "VitalCheck", price: 299, rating: 2.9, reviews: 312, inStock: true, image: vitalCheckIcePack, description: "Reusable ice pack", benefits: ["Reduces swelling", "Reusable"], usage: "Freeze before use", warnings: ["Wrap in cloth"], prescriptionRequired: false },
  { id: "DEV215", name: "VitalCheck Compression Socks", category: "health-devices", brand: "VitalCheck", price: 599, rating: 4.3, reviews: 567, inStock: true, image: vitalCheckCompressionSocks, description: "Medical compression socks", benefits: ["Improves circulation", "Reduces swelling"], usage: "Wear during day", warnings: ["Wash regularly"], prescriptionRequired: false },
  
  { id: "DEV216", name: "CareMonitor Blood Glucose Strips", category: "health-devices", brand: "CareMonitor", price: 499, rating: 4.5, reviews: 789, inStock: true, image: careMonitorBloodGlucoseStrips, description: "Test strips pack of 50", benefits: ["Accurate", "Easy to use"], usage: "Use with glucometer", warnings: ["Check expiry"], prescriptionRequired: false },
  { id: "DEV217", name: "CareMonitor Lancets", category: "health-devices", brand: "CareMonitor", price: 199, rating: 4.2, reviews: 623, inStock: true, image: careMonitorLancets, description: "Sterile lancets pack of 100", benefits: ["Painless", "Sterile"], usage: "Use with lancing device", warnings: ["Single use only"], prescriptionRequired: false },
  { id: "DEV218", name: "CareMonitor Insulin Pen", category: "health-devices", brand: "CareMonitor", price: 1499, rating: 3.7, reviews: 412, inStock: true, image: careMonitorInsulinPen, description: "Reusable insulin pen", benefits: ["Easy dosing", "Portable"], usage: "Load cartridge, inject", warnings: ["Consult doctor"], prescriptionRequired: false },
  { id: "DEV219", name: "CareMonitor Pill Organizer", category: "health-devices", brand: "CareMonitor", price: 249, rating: 2.8, reviews: 289, inStock: true, image: careMonitorPillOrganizer, description: "7-day pill box", benefits: ["Organized", "Easy to use"], usage: "Fill compartments", warnings: ["Keep dry"], prescriptionRequired: false },
  { id: "DEV220", name: "CareMonitor Medicine Reminder", category: "health-devices", brand: "CareMonitor", price: 799, rating: 4.4, reviews: 534, inStock: true, image: careMonitorMedicineReminder, description: "Smart pill reminder", benefits: ["Alarm alerts", "Multiple reminders"], usage: "Set medication times", warnings: ["Replace battery"], prescriptionRequired: false },
  
  { id: "DEV221", name: "SmartMed Wheelchair", category: "health-devices", brand: "SmartMed", price: 8999, rating: 4.7, reviews: 456, inStock: true, image: smartMedWheelchair, description: "Foldable wheelchair", benefits: ["Lightweight", "Comfortable"], usage: "Adjust to user", warnings: ["Check brakes"], prescriptionRequired: false },
  { id: "DEV222", name: "SmartMed Walking Stick", category: "health-devices", brand: "SmartMed", price: 599, rating: 4.3, reviews: 678, inStock: true, image: smartMedWalkingStick, description: "Adjustable walking cane", benefits: ["Sturdy", "Adjustable height"], usage: "Adjust to height", warnings: ["Check rubber tip"], prescriptionRequired: false },
  { id: "DEV223", name: "SmartMed Walker", category: "health-devices", brand: "SmartMed", price: 2499, rating: 3.9, reviews: 412, inStock: true, image: smartMedWalker, description: "Mobility walker", benefits: ["Stable", "With seat"], usage: "Use for support", warnings: ["Lock brakes when sitting"], prescriptionRequired: false },
  { id: "DEV224", name: "SmartMed Knee Brace", category: "health-devices", brand: "SmartMed", price: 899, rating: 2.9, reviews: 289, inStock: true, image: smartMedCrutches, description: "Adjustable knee support", benefits: ["Pain relief", "Adjustable"], usage: "Wear during activity", warnings: ["Do not overtighten"], prescriptionRequired: false },
  { id: "DEV225", name: "SmartMed Back Support", category: "health-devices", brand: "SmartMed", price: 1299, rating: 4.2, reviews: 567, inStock: true, image: smartMedKneeBrace, description: "Lumbar support belt", benefits: ["Posture correction", "Pain relief"], usage: "Wear during work", warnings: ["Do not wear while sleeping"], prescriptionRequired: false },
  
  { id: "DEV226", name: "LifeScan Pregnancy Test", category: "health-devices", brand: "LifeScan", price: 99, rating: 4.5, reviews: 1234, inStock: true, image: homeCareOxygenConcentrator, description: "Early detection test", benefits: ["99% accurate", "Easy to read"], usage: "Use with morning urine", warnings: ["Read instructions"], prescriptionRequired: false },
  { id: "DEV227", name: "LifeScan Ovulation Kit", category: "health-devices", brand: "LifeScan", price: 499, rating: 4.3, reviews: 789, inStock: true, image: homeCareCPAPMachine, description: "Fertility tracker", benefits: ["Tracks fertile days", "Accurate"], usage: "Test daily", warnings: ["Follow instructions"], prescriptionRequired: false },
  { id: "DEV228", name: "LifeScan Cholesterol Test", category: "health-devices", brand: "LifeScan", price: 899, rating: 3.7, reviews: 456, inStock: true, image: homeCareHumidifier, description: "Home cholesterol test", benefits: ["Quick results", "Easy to use"], usage: "Prick finger, test", warnings: ["Not for diagnosis"], prescriptionRequired: false },
  { id: "DEV229", name: "LifeScan Urine Test Strips", category: "health-devices", brand: "LifeScan", price: 299, rating: 2.8, reviews: 312, inStock: true, image: homeCareAirPurifier, description: "Multi-parameter test", benefits: ["Tests 10 parameters", "Fast results"], usage: "Dip in urine", warnings: ["Check expiry"], prescriptionRequired: false },
  { id: "DEV230", name: "LifeScan COVID Test Kit", category: "health-devices", brand: "LifeScan", price: 199, rating: 4.6, reviews: 2345, inStock: true, image: homeCareVaporizer, description: "Rapid antigen test", benefits: ["15-minute results", "Accurate"], usage: "Nasal swab test", warnings: ["Follow instructions"], prescriptionRequired: false },
  
  { id: "DEV231", name: "PulsePro Massage Gun", category: "health-devices", brand: "PulsePro", price: 3999, rating: 4.7, reviews: 892, inStock: true, image: mediSupplySurgicalMask, description: "Percussion massager", benefits: ["Muscle recovery", "Multiple speeds"], usage: "Apply to muscles", warnings: ["Do not use on injuries"], prescriptionRequired: false },
  { id: "DEV232", name: "PulsePro Foot Massager", category: "health-devices", brand: "PulsePro", price: 2499, rating: 4.4, reviews: 678, inStock: true, image: mediSupplyN95Mask, description: "Electric foot massager", benefits: ["Relieves fatigue", "Heat function"], usage: "Place feet inside", warnings: ["Not for diabetics"], prescriptionRequired: false },
  { id: "DEV233", name: "PulsePro Neck Massager", category: "health-devices", brand: "PulsePro", price: 1999, rating: 4.1, reviews: 534, inStock: true, image: mediSupplyFaceShield, description: "Cervical massager", benefits: ["Relieves neck pain", "Portable"], usage: "Wear around neck", warnings: ["Do not use while driving"], prescriptionRequired: false },
  { id: "DEV234", name: "PulsePro TENS Unit", category: "health-devices", brand: "PulsePro", price: 1499, rating: 3.6, reviews: 412, inStock: true, image: mediSupplyLatexGloves, description: "Pain relief device", benefits: ["Drug-free pain relief", "Adjustable"], usage: "Apply pads to skin", warnings: ["Not for pacemaker users"], prescriptionRequired: false },
  { id: "DEV235", name: "PulsePro Acupressure Mat", category: "health-devices", brand: "PulsePro", price: 999, rating: 2.9, reviews: 289, inStock: true, image: mediSupplyHandSanitizer, description: "Acupressure therapy mat", benefits: ["Relieves tension", "Improves circulation"], usage: "Lie on mat", warnings: ["Start with short sessions"], prescriptionRequired: false },
];
