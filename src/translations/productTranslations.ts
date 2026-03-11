// Product Translation System for all 6 categories
// Supports 13 languages: en, hi, ta, te, bn, mr, gu, kn, ml, pa, or, as, ur

export interface ProductTranslation {
  shortDesc: string;
  description: string;
  benefits: string;
  usage: string;
  warnings: string;
}

export interface ProductTranslations {
  [productId: string]: {
    [language: string]: ProductTranslation;
  };
}

export const productTranslations: ProductTranslations = {
  "BABY101": {
    en: {
      shortDesc: "Ultra-soft baby diapers",
      description: "Ultra-soft baby diapers",
      benefits: "12-hour protection, Wetness indicator",
      usage: "Change every 3-4 hours",
      warnings: "Keep away from fire"
    },
    hi: {
      shortDesc: "Ultra-soft baby diapers",
      description: "Ultra-soft baby diapers",
      benefits: "12-hour protection, Wetness indicator",
      usage: "Change every 3-4 hours",
      warnings: "Keep away from fire"
    },
    ta: {
      shortDesc: "Ultra-soft baby diapers",
      description: "Ultra-soft baby diapers",
      benefits: "12-hour protection, Wetness indicator",
      usage: "Change every 3-4 hours",
      warnings: "Keep away from fire"
    },
    te: {
      shortDesc: "Ultra-soft baby diapers",
      description: "Ultra-soft baby diapers",
      benefits: "12-hour protection, Wetness indicator",
      usage: "Change every 3-4 hours",
      warnings: "Keep away from fire"
    },
    bn: {
      shortDesc: "Ultra-soft baby diapers",
      description: "Ultra-soft baby diapers",
      benefits: "12-hour protection, Wetness indicator",
      usage: "Change every 3-4 hours",
      warnings: "Keep away from fire"
    },
    mr: {
      shortDesc: "Ultra-soft baby diapers",
      description: "Ultra-soft baby diapers",
      benefits: "12-hour protection, Wetness indicator",
      usage: "Change every 3-4 hours",
      warnings: "Keep away from fire"
    },
    gu: {
      shortDesc: "Ultra-soft baby diapers",
      description: "Ultra-soft baby diapers",
      benefits: "12-hour protection, Wetness indicator",
      usage: "Change every 3-4 hours",
      warnings: "Keep away from fire"
    },
    kn: {
      shortDesc: "Ultra-soft baby diapers",
      description: "Ultra-soft baby diapers",
      benefits: "12-hour protection, Wetness indicator",
      usage: "Change every 3-4 hours",
      warnings: "Keep away from fire"
    },
    ml: {
      shortDesc: "Ultra-soft baby diapers",
      description: "Ultra-soft baby diapers",
      benefits: "12-hour protection, Wetness indicator",
      usage: "Change every 3-4 hours",
      warnings: "Keep away from fire"
    },
    pa: {
      shortDesc: "Ultra-soft baby diapers",
      description: "Ultra-soft baby diapers",
      benefits: "12-hour protection, Wetness indicator",
      usage: "Change every 3-4 hours",
      warnings: "Keep away from fire"
    },
    or: {
      shortDesc: "Ultra-soft baby diapers",
      description: "Ultra-soft baby diapers",
      benefits: "12-hour protection, Wetness indicator",
      usage: "Change every 3-4 hours",
      warnings: "Keep away from fire"
    },
    as: {
      shortDesc: "Ultra-soft baby diapers",
      description: "Ultra-soft baby diapers",
      benefits: "12-hour protection, Wetness indicator",
      usage: "Change every 3-4 hours",
      warnings: "Keep away from fire"
    },
    ur: {
      shortDesc: "Ultra-soft baby diapers",
      description: "Ultra-soft baby diapers",
      benefits: "12-hour protection, Wetness indicator",
      usage: "Change every 3-4 hours",
      warnings: "Keep away from fire"
    }
  },
  "BABY102": {
    en: {
      shortDesc: "Gentle baby wipes",
      description: "Gentle baby wipes",
      benefits: "Alcohol-free, Hypoallergenic",
      usage: "Use for cleaning",
      warnings: "For external use"
    },
    hi: {
      shortDesc: "Gentle baby wipes",
      description: "Gentle baby wipes",
      benefits: "Alcohol-free, Hypoallergenic",
      usage: "Use for cleaning",
      warnings: "For external use"
    },
    ta: {
      shortDesc: "Gentle baby wipes",
      description: "Gentle baby wipes",
      benefits: "Alcohol-free, Hypoallergenic",
      usage: "Use for cleaning",
      warnings: "For external use"
    },
    te: {
      shortDesc: "Gentle baby wipes",
      description: "Gentle baby wipes",
      benefits: "Alcohol-free, Hypoallergenic",
      usage: "Use for cleaning",
      warnings: "For external use"
    },
    bn: {
      shortDesc: "Gentle baby wipes",
      description: "Gentle baby wipes",
      benefits: "Alcohol-free, Hypoallergenic",
      usage: "Use for cleaning",
      warnings: "For external use"
    },
    mr: {
      shortDesc: "Gentle baby wipes",
      description: "Gentle baby wipes",
      benefits: "Alcohol-free, Hypoallergenic",
      usage: "Use for cleaning",
      warnings: "For external use"
    },
    gu: {
      shortDesc: "Gentle baby wipes",
      description: "Gentle baby wipes",
      benefits: "Alcohol-free, Hypoallergenic",
      usage: "Use for cleaning",
      warnings: "For external use"
    },
    kn: {
      shortDesc: "Gentle baby wipes",
      description: "Gentle baby wipes",
      benefits: "Alcohol-free, Hypoallergenic",
      usage: "Use for cleaning",
      warnings: "For external use"
    },
    ml: {
      shortDesc: "Gentle baby wipes",
      description: "Gentle baby wipes",
      benefits: "Alcohol-free, Hypoallergenic",
      usage: "Use for cleaning",
      warnings: "For external use"
    },
    pa: {
      shortDesc: "Gentle baby wipes",
      description: "Gentle baby wipes",
      benefits: "Alcohol-free, Hypoallergenic",
      usage: "Use for cleaning",
      warnings: "For external use"
    },
    or: {
      shortDesc: "Gentle baby wipes",
      description: "Gentle baby wipes",
      benefits: "Alcohol-free, Hypoallergenic",
      usage: "Use for cleaning",
      warnings: "For external use"
    },
    as: {
      shortDesc: "Gentle baby wipes",
      description: "Gentle baby wipes",
      benefits: "Alcohol-free, Hypoallergenic",
      usage: "Use for cleaning",
      warnings: "For external use"
    },
    ur: {
      shortDesc: "Gentle baby wipes",
      description: "Gentle baby wipes",
      benefits: "Alcohol-free, Hypoallergenic",
      usage: "Use for cleaning",
      warnings: "For external use"
    }
  },
  "BABY103": {
    en: {
      shortDesc: "Moisturizing baby lotion",
      description: "Moisturizing baby lotion",
      benefits: "Deep hydration, Non-greasy",
      usage: "Apply after bath",
      warnings: "Patch test first"
    },
    hi: {
      shortDesc: "Moisturizing baby lotion",
      description: "Moisturizing baby lotion",
      benefits: "Deep hydration, Non-greasy",
      usage: "Apply after bath",
      warnings: "Patch test first"
    },
    ta: {
      shortDesc: "Moisturizing baby lotion",
      description: "Moisturizing baby lotion",
      benefits: "Deep hydration, Non-greasy",
      usage: "Apply after bath",
      warnings: "Patch test first"
    },
    te: {
      shortDesc: "Moisturizing baby lotion",
      description: "Moisturizing baby lotion",
      benefits: "Deep hydration, Non-greasy",
      usage: "Apply after bath",
      warnings: "Patch test first"
    },
    bn: {
      shortDesc: "Moisturizing baby lotion",
      description: "Moisturizing baby lotion",
      benefits: "Deep hydration, Non-greasy",
      usage: "Apply after bath",
      warnings: "Patch test first"
    },
    mr: {
      shortDesc: "Moisturizing baby lotion",
      description: "Moisturizing baby lotion",
      benefits: "Deep hydration, Non-greasy",
      usage: "Apply after bath",
      warnings: "Patch test first"
    },
    gu: {
      shortDesc: "Moisturizing baby lotion",
      description: "Moisturizing baby lotion",
      benefits: "Deep hydration, Non-greasy",
      usage: "Apply after bath",
      warnings: "Patch test first"
    },
    kn: {
      shortDesc: "Moisturizing baby lotion",
      description: "Moisturizing baby lotion",
      benefits: "Deep hydration, Non-greasy",
      usage: "Apply after bath",
      warnings: "Patch test first"
    },
    ml: {
      shortDesc: "Moisturizing baby lotion",
      description: "Moisturizing baby lotion",
      benefits: "Deep hydration, Non-greasy",
      usage: "Apply after bath",
      warnings: "Patch test first"
    },
    pa: {
      shortDesc: "Moisturizing baby lotion",
      description: "Moisturizing baby lotion",
      benefits: "Deep hydration, Non-greasy",
      usage: "Apply after bath",
      warnings: "Patch test first"
    },
    or: {
      shortDesc: "Moisturizing baby lotion",
      description: "Moisturizing baby lotion",
      benefits: "Deep hydration, Non-greasy",
      usage: "Apply after bath",
      warnings: "Patch test first"
    },
    as: {
      shortDesc: "Moisturizing baby lotion",
      description: "Moisturizing baby lotion",
      benefits: "Deep hydration, Non-greasy",
      usage: "Apply after bath",
      warnings: "Patch test first"
    },
    ur: {
      shortDesc: "Moisturizing baby lotion",
      description: "Moisturizing baby lotion",
      benefits: "Deep hydration, Non-greasy",
      usage: "Apply after bath",
      warnings: "Patch test first"
    }
  },
  "BABY104": {
    en: {
      shortDesc: "Tear-free baby shampoo",
      description: "Tear-free baby shampoo",
      benefits: "Gentle formula, No tears",
      usage: "Apply to wet hair",
      warnings: "Avoid eyes"
    },
    hi: {
      shortDesc: "Tear-free baby shampoo",
      description: "Tear-free baby shampoo",
      benefits: "Gentle formula, No tears",
      usage: "Apply to wet hair",
      warnings: "Avoid eyes"
    },
    ta: {
      shortDesc: "Tear-free baby shampoo",
      description: "Tear-free baby shampoo",
      benefits: "Gentle formula, No tears",
      usage: "Apply to wet hair",
      warnings: "Avoid eyes"
    },
    te: {
      shortDesc: "Tear-free baby shampoo",
      description: "Tear-free baby shampoo",
      benefits: "Gentle formula, No tears",
      usage: "Apply to wet hair",
      warnings: "Avoid eyes"
    },
    bn: {
      shortDesc: "Tear-free baby shampoo",
      description: "Tear-free baby shampoo",
      benefits: "Gentle formula, No tears",
      usage: "Apply to wet hair",
      warnings: "Avoid eyes"
    },
    mr: {
      shortDesc: "Tear-free baby shampoo",
      description: "Tear-free baby shampoo",
      benefits: "Gentle formula, No tears",
      usage: "Apply to wet hair",
      warnings: "Avoid eyes"
    },
    gu: {
      shortDesc: "Tear-free baby shampoo",
      description: "Tear-free baby shampoo",
      benefits: "Gentle formula, No tears",
      usage: "Apply to wet hair",
      warnings: "Avoid eyes"
    },
    kn: {
      shortDesc: "Tear-free baby shampoo",
      description: "Tear-free baby shampoo",
      benefits: "Gentle formula, No tears",
      usage: "Apply to wet hair",
      warnings: "Avoid eyes"
    },
    ml: {
      shortDesc: "Tear-free baby shampoo",
      description: "Tear-free baby shampoo",
      benefits: "Gentle formula, No tears",
      usage: "Apply to wet hair",
      warnings: "Avoid eyes"
    },
    pa: {
      shortDesc: "Tear-free baby shampoo",
      description: "Tear-free baby shampoo",
      benefits: "Gentle formula, No tears",
      usage: "Apply to wet hair",
      warnings: "Avoid eyes"
    },
    or: {
      shortDesc: "Tear-free baby shampoo",
      description: "Tear-free baby shampoo",
      benefits: "Gentle formula, No tears",
      usage: "Apply to wet hair",
      warnings: "Avoid eyes"
    },
    as: {
      shortDesc: "Tear-free baby shampoo",
      description: "Tear-free baby shampoo",
      benefits: "Gentle formula, No tears",
      usage: "Apply to wet hair",
      warnings: "Avoid eyes"
    },
    ur: {
      shortDesc: "Tear-free baby shampoo",
      description: "Tear-free baby shampoo",
      benefits: "Gentle formula, No tears",
      usage: "Apply to wet hair",
      warnings: "Avoid eyes"
    }
  },
  "BABY105": {
    en: {
      shortDesc: "Talc-free baby powder",
      description: "Talc-free baby powder",
      benefits: "Keeps skin dry, Prevents rashes",
      usage: "Apply to dry skin",
      warnings: "Avoid inhalation"
    },
    hi: {
      shortDesc: "Talc-free baby powder",
      description: "Talc-free baby powder",
      benefits: "Keeps skin dry, Prevents rashes",
      usage: "Apply to dry skin",
      warnings: "Avoid inhalation"
    },
    ta: {
      shortDesc: "Talc-free baby powder",
      description: "Talc-free baby powder",
      benefits: "Keeps skin dry, Prevents rashes",
      usage: "Apply to dry skin",
      warnings: "Avoid inhalation"
    },
    te: {
      shortDesc: "Talc-free baby powder",
      description: "Talc-free baby powder",
      benefits: "Keeps skin dry, Prevents rashes",
      usage: "Apply to dry skin",
      warnings: "Avoid inhalation"
    },
    bn: {
      shortDesc: "Talc-free baby powder",
      description: "Talc-free baby powder",
      benefits: "Keeps skin dry, Prevents rashes",
      usage: "Apply to dry skin",
      warnings: "Avoid inhalation"
    },
    mr: {
      shortDesc: "Talc-free baby powder",
      description: "Talc-free baby powder",
      benefits: "Keeps skin dry, Prevents rashes",
      usage: "Apply to dry skin",
      warnings: "Avoid inhalation"
    },
    gu: {
      shortDesc: "Talc-free baby powder",
      description: "Talc-free baby powder",
      benefits: "Keeps skin dry, Prevents rashes",
      usage: "Apply to dry skin",
      warnings: "Avoid inhalation"
    },
    kn: {
      shortDesc: "Talc-free baby powder",
      description: "Talc-free baby powder",
      benefits: "Keeps skin dry, Prevents rashes",
      usage: "Apply to dry skin",
      warnings: "Avoid inhalation"
    },
    ml: {
      shortDesc: "Talc-free baby powder",
      description: "Talc-free baby powder",
      benefits: "Keeps skin dry, Prevents rashes",
      usage: "Apply to dry skin",
      warnings: "Avoid inhalation"
    },
    pa: {
      shortDesc: "Talc-free baby powder",
      description: "Talc-free baby powder",
      benefits: "Keeps skin dry, Prevents rashes",
      usage: "Apply to dry skin",
      warnings: "Avoid inhalation"
    },
    or: {
      shortDesc: "Talc-free baby powder",
      description: "Talc-free baby powder",
      benefits: "Keeps skin dry, Prevents rashes",
      usage: "Apply to dry skin",
      warnings: "Avoid inhalation"
    },
    as: {
      shortDesc: "Talc-free baby powder",
      description: "Talc-free baby powder",
      benefits: "Keeps skin dry, Prevents rashes",
      usage: "Apply to dry skin",
      warnings: "Avoid inhalation"
    },
    ur: {
      shortDesc: "Talc-free baby powder",
      description: "Talc-free baby powder",
      benefits: "Keeps skin dry, Prevents rashes",
      usage: "Apply to dry skin",
      warnings: "Avoid inhalation"
    }
  },
  "BABY106": {
    en: {
      shortDesc: "Diaper rash treatment",
      description: "Diaper rash treatment",
      benefits: "Soothes irritation, Zinc oxide",
      usage: "Apply with each change",
      warnings: "For external use"
    },
    hi: {
      shortDesc: "Diaper rash treatment",
      description: "Diaper rash treatment",
      benefits: "Soothes irritation, Zinc oxide",
      usage: "Apply with each change",
      warnings: "For external use"
    },
    ta: {
      shortDesc: "Diaper rash treatment",
      description: "Diaper rash treatment",
      benefits: "Soothes irritation, Zinc oxide",
      usage: "Apply with each change",
      warnings: "For external use"
    },
    te: {
      shortDesc: "Diaper rash treatment",
      description: "Diaper rash treatment",
      benefits: "Soothes irritation, Zinc oxide",
      usage: "Apply with each change",
      warnings: "For external use"
    },
    bn: {
      shortDesc: "Diaper rash treatment",
      description: "Diaper rash treatment",
      benefits: "Soothes irritation, Zinc oxide",
      usage: "Apply with each change",
      warnings: "For external use"
    },
    mr: {
      shortDesc: "Diaper rash treatment",
      description: "Diaper rash treatment",
      benefits: "Soothes irritation, Zinc oxide",
      usage: "Apply with each change",
      warnings: "For external use"
    },
    gu: {
      shortDesc: "Diaper rash treatment",
      description: "Diaper rash treatment",
      benefits: "Soothes irritation, Zinc oxide",
      usage: "Apply with each change",
      warnings: "For external use"
    },
    kn: {
      shortDesc: "Diaper rash treatment",
      description: "Diaper rash treatment",
      benefits: "Soothes irritation, Zinc oxide",
      usage: "Apply with each change",
      warnings: "For external use"
    },
    ml: {
      shortDesc: "Diaper rash treatment",
      description: "Diaper rash treatment",
      benefits: "Soothes irritation, Zinc oxide",
      usage: "Apply with each change",
      warnings: "For external use"
    },
    pa: {
      shortDesc: "Diaper rash treatment",
      description: "Diaper rash treatment",
      benefits: "Soothes irritation, Zinc oxide",
      usage: "Apply with each change",
      warnings: "For external use"
    },
    or: {
      shortDesc: "Diaper rash treatment",
      description: "Diaper rash treatment",
      benefits: "Soothes irritation, Zinc oxide",
      usage: "Apply with each change",
      warnings: "For external use"
    },
    as: {
      shortDesc: "Diaper rash treatment",
      description: "Diaper rash treatment",
      benefits: "Soothes irritation, Zinc oxide",
      usage: "Apply with each change",
      warnings: "For external use"
    },
    ur: {
      shortDesc: "Diaper rash treatment",
      description: "Diaper rash treatment",
      benefits: "Soothes irritation, Zinc oxide",
      usage: "Apply with each change",
      warnings: "For external use"
    }
  },
  "BABY107": {
    en: {
      shortDesc: "Baby multivitamin drops",
      description: "Baby multivitamin drops",
      benefits: "Essential vitamins, Supports growth",
      usage: "Give 1ml daily",
      warnings: "Consult pediatrician"
    },
    hi: {
      shortDesc: "Baby multivitamin drops",
      description: "Baby multivitamin drops",
      benefits: "Essential vitamins, Supports growth",
      usage: "Give 1ml daily",
      warnings: "Consult pediatrician"
    },
    ta: {
      shortDesc: "Baby multivitamin drops",
      description: "Baby multivitamin drops",
      benefits: "Essential vitamins, Supports growth",
      usage: "Give 1ml daily",
      warnings: "Consult pediatrician"
    },
    te: {
      shortDesc: "Baby multivitamin drops",
      description: "Baby multivitamin drops",
      benefits: "Essential vitamins, Supports growth",
      usage: "Give 1ml daily",
      warnings: "Consult pediatrician"
    },
    bn: {
      shortDesc: "Baby multivitamin drops",
      description: "Baby multivitamin drops",
      benefits: "Essential vitamins, Supports growth",
      usage: "Give 1ml daily",
      warnings: "Consult pediatrician"
    },
    mr: {
      shortDesc: "Baby multivitamin drops",
      description: "Baby multivitamin drops",
      benefits: "Essential vitamins, Supports growth",
      usage: "Give 1ml daily",
      warnings: "Consult pediatrician"
    },
    gu: {
      shortDesc: "Baby multivitamin drops",
      description: "Baby multivitamin drops",
      benefits: "Essential vitamins, Supports growth",
      usage: "Give 1ml daily",
      warnings: "Consult pediatrician"
    },
    kn: {
      shortDesc: "Baby multivitamin drops",
      description: "Baby multivitamin drops",
      benefits: "Essential vitamins, Supports growth",
      usage: "Give 1ml daily",
      warnings: "Consult pediatrician"
    },
    ml: {
      shortDesc: "Baby multivitamin drops",
      description: "Baby multivitamin drops",
      benefits: "Essential vitamins, Supports growth",
      usage: "Give 1ml daily",
      warnings: "Consult pediatrician"
    },
    pa: {
      shortDesc: "Baby multivitamin drops",
      description: "Baby multivitamin drops",
      benefits: "Essential vitamins, Supports growth",
      usage: "Give 1ml daily",
      warnings: "Consult pediatrician"
    },
    or: {
      shortDesc: "Baby multivitamin drops",
      description: "Baby multivitamin drops",
      benefits: "Essential vitamins, Supports growth",
      usage: "Give 1ml daily",
      warnings: "Consult pediatrician"
    },
    as: {
      shortDesc: "Baby multivitamin drops",
      description: "Baby multivitamin drops",
      benefits: "Essential vitamins, Supports growth",
      usage: "Give 1ml daily",
      warnings: "Consult pediatrician"
    },
    ur: {
      shortDesc: "Baby multivitamin drops",
      description: "Baby multivitamin drops",
      benefits: "Essential vitamins, Supports growth",
      usage: "Give 1ml daily",
      warnings: "Consult pediatrician"
    }
  },
  "BABY108": {
    en: {
      shortDesc: "Colic relief for babies",
      description: "Colic relief for babies",
      benefits: "Relieves gas, Soothes tummy",
      usage: "Give as directed",
      warnings: "Shake well"
    },
    hi: {
      shortDesc: "Colic relief for babies",
      description: "Colic relief for babies",
      benefits: "Relieves gas, Soothes tummy",
      usage: "Give as directed",
      warnings: "Shake well"
    },
    ta: {
      shortDesc: "Colic relief for babies",
      description: "Colic relief for babies",
      benefits: "Relieves gas, Soothes tummy",
      usage: "Give as directed",
      warnings: "Shake well"
    },
    te: {
      shortDesc: "Colic relief for babies",
      description: "Colic relief for babies",
      benefits: "Relieves gas, Soothes tummy",
      usage: "Give as directed",
      warnings: "Shake well"
    },
    bn: {
      shortDesc: "Colic relief for babies",
      description: "Colic relief for babies",
      benefits: "Relieves gas, Soothes tummy",
      usage: "Give as directed",
      warnings: "Shake well"
    },
    mr: {
      shortDesc: "Colic relief for babies",
      description: "Colic relief for babies",
      benefits: "Relieves gas, Soothes tummy",
      usage: "Give as directed",
      warnings: "Shake well"
    },
    gu: {
      shortDesc: "Colic relief for babies",
      description: "Colic relief for babies",
      benefits: "Relieves gas, Soothes tummy",
      usage: "Give as directed",
      warnings: "Shake well"
    },
    kn: {
      shortDesc: "Colic relief for babies",
      description: "Colic relief for babies",
      benefits: "Relieves gas, Soothes tummy",
      usage: "Give as directed",
      warnings: "Shake well"
    },
    ml: {
      shortDesc: "Colic relief for babies",
      description: "Colic relief for babies",
      benefits: "Relieves gas, Soothes tummy",
      usage: "Give as directed",
      warnings: "Shake well"
    },
    pa: {
      shortDesc: "Colic relief for babies",
      description: "Colic relief for babies",
      benefits: "Relieves gas, Soothes tummy",
      usage: "Give as directed",
      warnings: "Shake well"
    },
    or: {
      shortDesc: "Colic relief for babies",
      description: "Colic relief for babies",
      benefits: "Relieves gas, Soothes tummy",
      usage: "Give as directed",
      warnings: "Shake well"
    },
    as: {
      shortDesc: "Colic relief for babies",
      description: "Colic relief for babies",
      benefits: "Relieves gas, Soothes tummy",
      usage: "Give as directed",
      warnings: "Shake well"
    },
    ur: {
      shortDesc: "Colic relief for babies",
      description: "Colic relief for babies",
      benefits: "Relieves gas, Soothes tummy",
      usage: "Give as directed",
      warnings: "Shake well"
    }
  },
  "BABY109": {
    en: {
      shortDesc: "Saline nasal drops",
      description: "Saline nasal drops",
      benefits: "Clears congestion, Safe formula",
      usage: "Use 2-3 drops",
      warnings: "Do not share"
    },
    hi: {
      shortDesc: "Saline nasal drops",
      description: "Saline nasal drops",
      benefits: "Clears congestion, Safe formula",
      usage: "Use 2-3 drops",
      warnings: "Do not share"
    },
    ta: {
      shortDesc: "Saline nasal drops",
      description: "Saline nasal drops",
      benefits: "Clears congestion, Safe formula",
      usage: "Use 2-3 drops",
      warnings: "Do not share"
    },
    te: {
      shortDesc: "Saline nasal drops",
      description: "Saline nasal drops",
      benefits: "Clears congestion, Safe formula",
      usage: "Use 2-3 drops",
      warnings: "Do not share"
    },
    bn: {
      shortDesc: "Saline nasal drops",
      description: "Saline nasal drops",
      benefits: "Clears congestion, Safe formula",
      usage: "Use 2-3 drops",
      warnings: "Do not share"
    },
    mr: {
      shortDesc: "Saline nasal drops",
      description: "Saline nasal drops",
      benefits: "Clears congestion, Safe formula",
      usage: "Use 2-3 drops",
      warnings: "Do not share"
    },
    gu: {
      shortDesc: "Saline nasal drops",
      description: "Saline nasal drops",
      benefits: "Clears congestion, Safe formula",
      usage: "Use 2-3 drops",
      warnings: "Do not share"
    },
    kn: {
      shortDesc: "Saline nasal drops",
      description: "Saline nasal drops",
      benefits: "Clears congestion, Safe formula",
      usage: "Use 2-3 drops",
      warnings: "Do not share"
    },
    ml: {
      shortDesc: "Saline nasal drops",
      description: "Saline nasal drops",
      benefits: "Clears congestion, Safe formula",
      usage: "Use 2-3 drops",
      warnings: "Do not share"
    },
    pa: {
      shortDesc: "Saline nasal drops",
      description: "Saline nasal drops",
      benefits: "Clears congestion, Safe formula",
      usage: "Use 2-3 drops",
      warnings: "Do not share"
    },
    or: {
      shortDesc: "Saline nasal drops",
      description: "Saline nasal drops",
      benefits: "Clears congestion, Safe formula",
      usage: "Use 2-3 drops",
      warnings: "Do not share"
    },
    as: {
      shortDesc: "Saline nasal drops",
      description: "Saline nasal drops",
      benefits: "Clears congestion, Safe formula",
      usage: "Use 2-3 drops",
      warnings: "Do not share"
    },
    ur: {
      shortDesc: "Saline nasal drops",
      description: "Saline nasal drops",
      benefits: "Clears congestion, Safe formula",
      usage: "Use 2-3 drops",
      warnings: "Do not share"
    }
  },
  "BABY110": {
    en: {
      shortDesc: "Teething pain relief",
      description: "Teething pain relief",
      benefits: "Numbs gums, Fast relief",
      usage: "Apply to gums",
      warnings: "Use sparingly"
    },
    hi: {
      shortDesc: "Teething pain relief",
      description: "Teething pain relief",
      benefits: "Numbs gums, Fast relief",
      usage: "Apply to gums",
      warnings: "Use sparingly"
    },
    ta: {
      shortDesc: "Teething pain relief",
      description: "Teething pain relief",
      benefits: "Numbs gums, Fast relief",
      usage: "Apply to gums",
      warnings: "Use sparingly"
    },
    te: {
      shortDesc: "Teething pain relief",
      description: "Teething pain relief",
      benefits: "Numbs gums, Fast relief",
      usage: "Apply to gums",
      warnings: "Use sparingly"
    },
    bn: {
      shortDesc: "Teething pain relief",
      description: "Teething pain relief",
      benefits: "Numbs gums, Fast relief",
      usage: "Apply to gums",
      warnings: "Use sparingly"
    },
    mr: {
      shortDesc: "Teething pain relief",
      description: "Teething pain relief",
      benefits: "Numbs gums, Fast relief",
      usage: "Apply to gums",
      warnings: "Use sparingly"
    },
    gu: {
      shortDesc: "Teething pain relief",
      description: "Teething pain relief",
      benefits: "Numbs gums, Fast relief",
      usage: "Apply to gums",
      warnings: "Use sparingly"
    },
    kn: {
      shortDesc: "Teething pain relief",
      description: "Teething pain relief",
      benefits: "Numbs gums, Fast relief",
      usage: "Apply to gums",
      warnings: "Use sparingly"
    },
    ml: {
      shortDesc: "Teething pain relief",
      description: "Teething pain relief",
      benefits: "Numbs gums, Fast relief",
      usage: "Apply to gums",
      warnings: "Use sparingly"
    },
    pa: {
      shortDesc: "Teething pain relief",
      description: "Teething pain relief",
      benefits: "Numbs gums, Fast relief",
      usage: "Apply to gums",
      warnings: "Use sparingly"
    },
    or: {
      shortDesc: "Teething pain relief",
      description: "Teething pain relief",
      benefits: "Numbs gums, Fast relief",
      usage: "Apply to gums",
      warnings: "Use sparingly"
    },
    as: {
      shortDesc: "Teething pain relief",
      description: "Teething pain relief",
      benefits: "Numbs gums, Fast relief",
      usage: "Apply to gums",
      warnings: "Use sparingly"
    },
    ur: {
      shortDesc: "Teething pain relief",
      description: "Teething pain relief",
      benefits: "Numbs gums, Fast relief",
      usage: "Apply to gums",
      warnings: "Use sparingly"
    }
  },
  "BABY111": {
    en: {
      shortDesc: "Gentle baby massage oil",
      description: "Gentle baby massage oil",
      benefits: "Moisturizes skin, Relaxing",
      usage: "Massage gently",
      warnings: "For external use"
    },
    hi: {
      shortDesc: "Gentle baby massage oil",
      description: "Gentle baby massage oil",
      benefits: "Moisturizes skin, Relaxing",
      usage: "Massage gently",
      warnings: "For external use"
    },
    ta: {
      shortDesc: "Gentle baby massage oil",
      description: "Gentle baby massage oil",
      benefits: "Moisturizes skin, Relaxing",
      usage: "Massage gently",
      warnings: "For external use"
    },
    te: {
      shortDesc: "Gentle baby massage oil",
      description: "Gentle baby massage oil",
      benefits: "Moisturizes skin, Relaxing",
      usage: "Massage gently",
      warnings: "For external use"
    },
    bn: {
      shortDesc: "Gentle baby massage oil",
      description: "Gentle baby massage oil",
      benefits: "Moisturizes skin, Relaxing",
      usage: "Massage gently",
      warnings: "For external use"
    },
    mr: {
      shortDesc: "Gentle baby massage oil",
      description: "Gentle baby massage oil",
      benefits: "Moisturizes skin, Relaxing",
      usage: "Massage gently",
      warnings: "For external use"
    },
    gu: {
      shortDesc: "Gentle baby massage oil",
      description: "Gentle baby massage oil",
      benefits: "Moisturizes skin, Relaxing",
      usage: "Massage gently",
      warnings: "For external use"
    },
    kn: {
      shortDesc: "Gentle baby massage oil",
      description: "Gentle baby massage oil",
      benefits: "Moisturizes skin, Relaxing",
      usage: "Massage gently",
      warnings: "For external use"
    },
    ml: {
      shortDesc: "Gentle baby massage oil",
      description: "Gentle baby massage oil",
      benefits: "Moisturizes skin, Relaxing",
      usage: "Massage gently",
      warnings: "For external use"
    },
    pa: {
      shortDesc: "Gentle baby massage oil",
      description: "Gentle baby massage oil",
      benefits: "Moisturizes skin, Relaxing",
      usage: "Massage gently",
      warnings: "For external use"
    },
    or: {
      shortDesc: "Gentle baby massage oil",
      description: "Gentle baby massage oil",
      benefits: "Moisturizes skin, Relaxing",
      usage: "Massage gently",
      warnings: "For external use"
    },
    as: {
      shortDesc: "Gentle baby massage oil",
      description: "Gentle baby massage oil",
      benefits: "Moisturizes skin, Relaxing",
      usage: "Massage gently",
      warnings: "For external use"
    },
    ur: {
      shortDesc: "Gentle baby massage oil",
      description: "Gentle baby massage oil",
      benefits: "Moisturizes skin, Relaxing",
      usage: "Massage gently",
      warnings: "For external use"
    }
  },
  "BABY112": {
    en: {
      shortDesc: "Mild baby soap",
      description: "Mild baby soap",
      benefits: "Gentle cleansing, pH balanced",
      usage: "Use during bath",
      warnings: "Avoid eyes"
    },
    hi: {
      shortDesc: "Mild baby soap",
      description: "Mild baby soap",
      benefits: "Gentle cleansing, pH balanced",
      usage: "Use during bath",
      warnings: "Avoid eyes"
    },
    ta: {
      shortDesc: "Mild baby soap",
      description: "Mild baby soap",
      benefits: "Gentle cleansing, pH balanced",
      usage: "Use during bath",
      warnings: "Avoid eyes"
    },
    te: {
      shortDesc: "Mild baby soap",
      description: "Mild baby soap",
      benefits: "Gentle cleansing, pH balanced",
      usage: "Use during bath",
      warnings: "Avoid eyes"
    },
    bn: {
      shortDesc: "Mild baby soap",
      description: "Mild baby soap",
      benefits: "Gentle cleansing, pH balanced",
      usage: "Use during bath",
      warnings: "Avoid eyes"
    },
    mr: {
      shortDesc: "Mild baby soap",
      description: "Mild baby soap",
      benefits: "Gentle cleansing, pH balanced",
      usage: "Use during bath",
      warnings: "Avoid eyes"
    },
    gu: {
      shortDesc: "Mild baby soap",
      description: "Mild baby soap",
      benefits: "Gentle cleansing, pH balanced",
      usage: "Use during bath",
      warnings: "Avoid eyes"
    },
    kn: {
      shortDesc: "Mild baby soap",
      description: "Mild baby soap",
      benefits: "Gentle cleansing, pH balanced",
      usage: "Use during bath",
      warnings: "Avoid eyes"
    },
    ml: {
      shortDesc: "Mild baby soap",
      description: "Mild baby soap",
      benefits: "Gentle cleansing, pH balanced",
      usage: "Use during bath",
      warnings: "Avoid eyes"
    },
    pa: {
      shortDesc: "Mild baby soap",
      description: "Mild baby soap",
      benefits: "Gentle cleansing, pH balanced",
      usage: "Use during bath",
      warnings: "Avoid eyes"
    },
    or: {
      shortDesc: "Mild baby soap",
      description: "Mild baby soap",
      benefits: "Gentle cleansing, pH balanced",
      usage: "Use during bath",
      warnings: "Avoid eyes"
    },
    as: {
      shortDesc: "Mild baby soap",
      description: "Mild baby soap",
      benefits: "Gentle cleansing, pH balanced",
      usage: "Use during bath",
      warnings: "Avoid eyes"
    },
    ur: {
      shortDesc: "Mild baby soap",
      description: "Mild baby soap",
      benefits: "Gentle cleansing, pH balanced",
      usage: "Use during bath",
      warnings: "Avoid eyes"
    }
  },
  "BABY113": {
    en: {
      shortDesc: "Baby sunscreen SPF 50",
      description: "Baby sunscreen SPF 50",
      benefits: "Sun protection, Water resistant",
      usage: "Apply before sun exposure",
      warnings: "Reapply every 2 hours"
    },
    hi: {
      shortDesc: "Baby sunscreen SPF 50",
      description: "Baby sunscreen SPF 50",
      benefits: "Sun protection, Water resistant",
      usage: "Apply before sun exposure",
      warnings: "Reapply every 2 hours"
    },
    ta: {
      shortDesc: "Baby sunscreen SPF 50",
      description: "Baby sunscreen SPF 50",
      benefits: "Sun protection, Water resistant",
      usage: "Apply before sun exposure",
      warnings: "Reapply every 2 hours"
    },
    te: {
      shortDesc: "Baby sunscreen SPF 50",
      description: "Baby sunscreen SPF 50",
      benefits: "Sun protection, Water resistant",
      usage: "Apply before sun exposure",
      warnings: "Reapply every 2 hours"
    },
    bn: {
      shortDesc: "Baby sunscreen SPF 50",
      description: "Baby sunscreen SPF 50",
      benefits: "Sun protection, Water resistant",
      usage: "Apply before sun exposure",
      warnings: "Reapply every 2 hours"
    },
    mr: {
      shortDesc: "Baby sunscreen SPF 50",
      description: "Baby sunscreen SPF 50",
      benefits: "Sun protection, Water resistant",
      usage: "Apply before sun exposure",
      warnings: "Reapply every 2 hours"
    },
    gu: {
      shortDesc: "Baby sunscreen SPF 50",
      description: "Baby sunscreen SPF 50",
      benefits: "Sun protection, Water resistant",
      usage: "Apply before sun exposure",
      warnings: "Reapply every 2 hours"
    },
    kn: {
      shortDesc: "Baby sunscreen SPF 50",
      description: "Baby sunscreen SPF 50",
      benefits: "Sun protection, Water resistant",
      usage: "Apply before sun exposure",
      warnings: "Reapply every 2 hours"
    },
    ml: {
      shortDesc: "Baby sunscreen SPF 50",
      description: "Baby sunscreen SPF 50",
      benefits: "Sun protection, Water resistant",
      usage: "Apply before sun exposure",
      warnings: "Reapply every 2 hours"
    },
    pa: {
      shortDesc: "Baby sunscreen SPF 50",
      description: "Baby sunscreen SPF 50",
      benefits: "Sun protection, Water resistant",
      usage: "Apply before sun exposure",
      warnings: "Reapply every 2 hours"
    },
    or: {
      shortDesc: "Baby sunscreen SPF 50",
      description: "Baby sunscreen SPF 50",
      benefits: "Sun protection, Water resistant",
      usage: "Apply before sun exposure",
      warnings: "Reapply every 2 hours"
    },
    as: {
      shortDesc: "Baby sunscreen SPF 50",
      description: "Baby sunscreen SPF 50",
      benefits: "Sun protection, Water resistant",
      usage: "Apply before sun exposure",
      warnings: "Reapply every 2 hours"
    },
    ur: {
      shortDesc: "Baby sunscreen SPF 50",
      description: "Baby sunscreen SPF 50",
      benefits: "Sun protection, Water resistant",
      usage: "Apply before sun exposure",
      warnings: "Reapply every 2 hours"
    }
  },
  "BABY114": {
    en: {
      shortDesc: "Anti-colic feeding bottle",
      description: "Anti-colic feeding bottle",
      benefits: "BPA-free, Anti-colic",
      usage: "Sterilize before use",
      warnings: "Check for damage"
    },
    hi: {
      shortDesc: "Anti-colic feeding bottle",
      description: "Anti-colic feeding bottle",
      benefits: "BPA-free, Anti-colic",
      usage: "Sterilize before use",
      warnings: "Check for damage"
    },
    ta: {
      shortDesc: "Anti-colic feeding bottle",
      description: "Anti-colic feeding bottle",
      benefits: "BPA-free, Anti-colic",
      usage: "Sterilize before use",
      warnings: "Check for damage"
    },
    te: {
      shortDesc: "Anti-colic feeding bottle",
      description: "Anti-colic feeding bottle",
      benefits: "BPA-free, Anti-colic",
      usage: "Sterilize before use",
      warnings: "Check for damage"
    },
    bn: {
      shortDesc: "Anti-colic feeding bottle",
      description: "Anti-colic feeding bottle",
      benefits: "BPA-free, Anti-colic",
      usage: "Sterilize before use",
      warnings: "Check for damage"
    },
    mr: {
      shortDesc: "Anti-colic feeding bottle",
      description: "Anti-colic feeding bottle",
      benefits: "BPA-free, Anti-colic",
      usage: "Sterilize before use",
      warnings: "Check for damage"
    },
    gu: {
      shortDesc: "Anti-colic feeding bottle",
      description: "Anti-colic feeding bottle",
      benefits: "BPA-free, Anti-colic",
      usage: "Sterilize before use",
      warnings: "Check for damage"
    },
    kn: {
      shortDesc: "Anti-colic feeding bottle",
      description: "Anti-colic feeding bottle",
      benefits: "BPA-free, Anti-colic",
      usage: "Sterilize before use",
      warnings: "Check for damage"
    },
    ml: {
      shortDesc: "Anti-colic feeding bottle",
      description: "Anti-colic feeding bottle",
      benefits: "BPA-free, Anti-colic",
      usage: "Sterilize before use",
      warnings: "Check for damage"
    },
    pa: {
      shortDesc: "Anti-colic feeding bottle",
      description: "Anti-colic feeding bottle",
      benefits: "BPA-free, Anti-colic",
      usage: "Sterilize before use",
      warnings: "Check for damage"
    },
    or: {
      shortDesc: "Anti-colic feeding bottle",
      description: "Anti-colic feeding bottle",
      benefits: "BPA-free, Anti-colic",
      usage: "Sterilize before use",
      warnings: "Check for damage"
    },
    as: {
      shortDesc: "Anti-colic feeding bottle",
      description: "Anti-colic feeding bottle",
      benefits: "BPA-free, Anti-colic",
      usage: "Sterilize before use",
      warnings: "Check for damage"
    },
    ur: {
      shortDesc: "Anti-colic feeding bottle",
      description: "Anti-colic feeding bottle",
      benefits: "BPA-free, Anti-colic",
      usage: "Sterilize before use",
      warnings: "Check for damage"
    }
  },
  "BABY115": {
    en: {
      shortDesc: "Orthodontic pacifier",
      description: "Orthodontic pacifier",
      benefits: "Soothes baby, BPA-free",
      usage: "Sterilize regularly",
      warnings: "Replace monthly"
    },
    hi: {
      shortDesc: "Orthodontic pacifier",
      description: "Orthodontic pacifier",
      benefits: "Soothes baby, BPA-free",
      usage: "Sterilize regularly",
      warnings: "Replace monthly"
    },
    ta: {
      shortDesc: "Orthodontic pacifier",
      description: "Orthodontic pacifier",
      benefits: "Soothes baby, BPA-free",
      usage: "Sterilize regularly",
      warnings: "Replace monthly"
    },
    te: {
      shortDesc: "Orthodontic pacifier",
      description: "Orthodontic pacifier",
      benefits: "Soothes baby, BPA-free",
      usage: "Sterilize regularly",
      warnings: "Replace monthly"
    },
    bn: {
      shortDesc: "Orthodontic pacifier",
      description: "Orthodontic pacifier",
      benefits: "Soothes baby, BPA-free",
      usage: "Sterilize regularly",
      warnings: "Replace monthly"
    },
    mr: {
      shortDesc: "Orthodontic pacifier",
      description: "Orthodontic pacifier",
      benefits: "Soothes baby, BPA-free",
      usage: "Sterilize regularly",
      warnings: "Replace monthly"
    },
    gu: {
      shortDesc: "Orthodontic pacifier",
      description: "Orthodontic pacifier",
      benefits: "Soothes baby, BPA-free",
      usage: "Sterilize regularly",
      warnings: "Replace monthly"
    },
    kn: {
      shortDesc: "Orthodontic pacifier",
      description: "Orthodontic pacifier",
      benefits: "Soothes baby, BPA-free",
      usage: "Sterilize regularly",
      warnings: "Replace monthly"
    },
    ml: {
      shortDesc: "Orthodontic pacifier",
      description: "Orthodontic pacifier",
      benefits: "Soothes baby, BPA-free",
      usage: "Sterilize regularly",
      warnings: "Replace monthly"
    },
    pa: {
      shortDesc: "Orthodontic pacifier",
      description: "Orthodontic pacifier",
      benefits: "Soothes baby, BPA-free",
      usage: "Sterilize regularly",
      warnings: "Replace monthly"
    },
    or: {
      shortDesc: "Orthodontic pacifier",
      description: "Orthodontic pacifier",
      benefits: "Soothes baby, BPA-free",
      usage: "Sterilize regularly",
      warnings: "Replace monthly"
    },
    as: {
      shortDesc: "Orthodontic pacifier",
      description: "Orthodontic pacifier",
      benefits: "Soothes baby, BPA-free",
      usage: "Sterilize regularly",
      warnings: "Replace monthly"
    },
    ur: {
      shortDesc: "Orthodontic pacifier",
      description: "Orthodontic pacifier",
      benefits: "Soothes baby, BPA-free",
      usage: "Sterilize regularly",
      warnings: "Replace monthly"
    }
  },
  "BABY116": {
    en: {
      shortDesc: "Protective diaper cream",
      description: "Protective diaper cream",
      benefits: "Prevents rashes, Zinc formula",
      usage: "Apply at each change",
      warnings: "For external use"
    },
    hi: {
      shortDesc: "Protective diaper cream",
      description: "Protective diaper cream",
      benefits: "Prevents rashes, Zinc formula",
      usage: "Apply at each change",
      warnings: "For external use"
    },
    ta: {
      shortDesc: "Protective diaper cream",
      description: "Protective diaper cream",
      benefits: "Prevents rashes, Zinc formula",
      usage: "Apply at each change",
      warnings: "For external use"
    },
    te: {
      shortDesc: "Protective diaper cream",
      description: "Protective diaper cream",
      benefits: "Prevents rashes, Zinc formula",
      usage: "Apply at each change",
      warnings: "For external use"
    },
    bn: {
      shortDesc: "Protective diaper cream",
      description: "Protective diaper cream",
      benefits: "Prevents rashes, Zinc formula",
      usage: "Apply at each change",
      warnings: "For external use"
    },
    mr: {
      shortDesc: "Protective diaper cream",
      description: "Protective diaper cream",
      benefits: "Prevents rashes, Zinc formula",
      usage: "Apply at each change",
      warnings: "For external use"
    },
    gu: {
      shortDesc: "Protective diaper cream",
      description: "Protective diaper cream",
      benefits: "Prevents rashes, Zinc formula",
      usage: "Apply at each change",
      warnings: "For external use"
    },
    kn: {
      shortDesc: "Protective diaper cream",
      description: "Protective diaper cream",
      benefits: "Prevents rashes, Zinc formula",
      usage: "Apply at each change",
      warnings: "For external use"
    },
    ml: {
      shortDesc: "Protective diaper cream",
      description: "Protective diaper cream",
      benefits: "Prevents rashes, Zinc formula",
      usage: "Apply at each change",
      warnings: "For external use"
    },
    pa: {
      shortDesc: "Protective diaper cream",
      description: "Protective diaper cream",
      benefits: "Prevents rashes, Zinc formula",
      usage: "Apply at each change",
      warnings: "For external use"
    },
    or: {
      shortDesc: "Protective diaper cream",
      description: "Protective diaper cream",
      benefits: "Prevents rashes, Zinc formula",
      usage: "Apply at each change",
      warnings: "For external use"
    },
    as: {
      shortDesc: "Protective diaper cream",
      description: "Protective diaper cream",
      benefits: "Prevents rashes, Zinc formula",
      usage: "Apply at each change",
      warnings: "For external use"
    },
    ur: {
      shortDesc: "Protective diaper cream",
      description: "Protective diaper cream",
      benefits: "Prevents rashes, Zinc formula",
      usage: "Apply at each change",
      warnings: "For external use"
    }
  },
  "BABY117": {
    en: {
      shortDesc: "Head-to-toe baby wash",
      description: "Head-to-toe baby wash",
      benefits: "2-in-1 formula, Tear-free",
      usage: "Use during bath",
      warnings: "Avoid eyes"
    },
    hi: {
      shortDesc: "Head-to-toe baby wash",
      description: "Head-to-toe baby wash",
      benefits: "2-in-1 formula, Tear-free",
      usage: "Use during bath",
      warnings: "Avoid eyes"
    },
    ta: {
      shortDesc: "Head-to-toe baby wash",
      description: "Head-to-toe baby wash",
      benefits: "2-in-1 formula, Tear-free",
      usage: "Use during bath",
      warnings: "Avoid eyes"
    },
    te: {
      shortDesc: "Head-to-toe baby wash",
      description: "Head-to-toe baby wash",
      benefits: "2-in-1 formula, Tear-free",
      usage: "Use during bath",
      warnings: "Avoid eyes"
    },
    bn: {
      shortDesc: "Head-to-toe baby wash",
      description: "Head-to-toe baby wash",
      benefits: "2-in-1 formula, Tear-free",
      usage: "Use during bath",
      warnings: "Avoid eyes"
    },
    mr: {
      shortDesc: "Head-to-toe baby wash",
      description: "Head-to-toe baby wash",
      benefits: "2-in-1 formula, Tear-free",
      usage: "Use during bath",
      warnings: "Avoid eyes"
    },
    gu: {
      shortDesc: "Head-to-toe baby wash",
      description: "Head-to-toe baby wash",
      benefits: "2-in-1 formula, Tear-free",
      usage: "Use during bath",
      warnings: "Avoid eyes"
    },
    kn: {
      shortDesc: "Head-to-toe baby wash",
      description: "Head-to-toe baby wash",
      benefits: "2-in-1 formula, Tear-free",
      usage: "Use during bath",
      warnings: "Avoid eyes"
    },
    ml: {
      shortDesc: "Head-to-toe baby wash",
      description: "Head-to-toe baby wash",
      benefits: "2-in-1 formula, Tear-free",
      usage: "Use during bath",
      warnings: "Avoid eyes"
    },
    pa: {
      shortDesc: "Head-to-toe baby wash",
      description: "Head-to-toe baby wash",
      benefits: "2-in-1 formula, Tear-free",
      usage: "Use during bath",
      warnings: "Avoid eyes"
    },
    or: {
      shortDesc: "Head-to-toe baby wash",
      description: "Head-to-toe baby wash",
      benefits: "2-in-1 formula, Tear-free",
      usage: "Use during bath",
      warnings: "Avoid eyes"
    },
    as: {
      shortDesc: "Head-to-toe baby wash",
      description: "Head-to-toe baby wash",
      benefits: "2-in-1 formula, Tear-free",
      usage: "Use during bath",
      warnings: "Avoid eyes"
    },
    ur: {
      shortDesc: "Head-to-toe baby wash",
      description: "Head-to-toe baby wash",
      benefits: "2-in-1 formula, Tear-free",
      usage: "Use during bath",
      warnings: "Avoid eyes"
    }
  },
  "BABY118": {
    en: {
      shortDesc: "Baby-safe laundry detergent",
      description: "Baby-safe laundry detergent",
      benefits: "Hypoallergenic, Gentle on clothes",
      usage: "Use for baby clothes",
      warnings: "Keep out of reach"
    },
    hi: {
      shortDesc: "Baby-safe laundry detergent",
      description: "Baby-safe laundry detergent",
      benefits: "Hypoallergenic, Gentle on clothes",
      usage: "Use for baby clothes",
      warnings: "Keep out of reach"
    },
    ta: {
      shortDesc: "Baby-safe laundry detergent",
      description: "Baby-safe laundry detergent",
      benefits: "Hypoallergenic, Gentle on clothes",
      usage: "Use for baby clothes",
      warnings: "Keep out of reach"
    },
    te: {
      shortDesc: "Baby-safe laundry detergent",
      description: "Baby-safe laundry detergent",
      benefits: "Hypoallergenic, Gentle on clothes",
      usage: "Use for baby clothes",
      warnings: "Keep out of reach"
    },
    bn: {
      shortDesc: "Baby-safe laundry detergent",
      description: "Baby-safe laundry detergent",
      benefits: "Hypoallergenic, Gentle on clothes",
      usage: "Use for baby clothes",
      warnings: "Keep out of reach"
    },
    mr: {
      shortDesc: "Baby-safe laundry detergent",
      description: "Baby-safe laundry detergent",
      benefits: "Hypoallergenic, Gentle on clothes",
      usage: "Use for baby clothes",
      warnings: "Keep out of reach"
    },
    gu: {
      shortDesc: "Baby-safe laundry detergent",
      description: "Baby-safe laundry detergent",
      benefits: "Hypoallergenic, Gentle on clothes",
      usage: "Use for baby clothes",
      warnings: "Keep out of reach"
    },
    kn: {
      shortDesc: "Baby-safe laundry detergent",
      description: "Baby-safe laundry detergent",
      benefits: "Hypoallergenic, Gentle on clothes",
      usage: "Use for baby clothes",
      warnings: "Keep out of reach"
    },
    ml: {
      shortDesc: "Baby-safe laundry detergent",
      description: "Baby-safe laundry detergent",
      benefits: "Hypoallergenic, Gentle on clothes",
      usage: "Use for baby clothes",
      warnings: "Keep out of reach"
    },
    pa: {
      shortDesc: "Baby-safe laundry detergent",
      description: "Baby-safe laundry detergent",
      benefits: "Hypoallergenic, Gentle on clothes",
      usage: "Use for baby clothes",
      warnings: "Keep out of reach"
    },
    or: {
      shortDesc: "Baby-safe laundry detergent",
      description: "Baby-safe laundry detergent",
      benefits: "Hypoallergenic, Gentle on clothes",
      usage: "Use for baby clothes",
      warnings: "Keep out of reach"
    },
    as: {
      shortDesc: "Baby-safe laundry detergent",
      description: "Baby-safe laundry detergent",
      benefits: "Hypoallergenic, Gentle on clothes",
      usage: "Use for baby clothes",
      warnings: "Keep out of reach"
    },
    ur: {
      shortDesc: "Baby-safe laundry detergent",
      description: "Baby-safe laundry detergent",
      benefits: "Hypoallergenic, Gentle on clothes",
      usage: "Use for baby clothes",
      warnings: "Keep out of reach"
    }
  },
  "BABY119": {
    en: {
      shortDesc: "Digital baby thermometer",
      description: "Digital baby thermometer",
      benefits: "Fast reading, Fever alarm",
      usage: "Place under arm",
      warnings: "Clean after use"
    },
    hi: {
      shortDesc: "Digital baby thermometer",
      description: "Digital baby thermometer",
      benefits: "Fast reading, Fever alarm",
      usage: "Place under arm",
      warnings: "Clean after use"
    },
    ta: {
      shortDesc: "Digital baby thermometer",
      description: "Digital baby thermometer",
      benefits: "Fast reading, Fever alarm",
      usage: "Place under arm",
      warnings: "Clean after use"
    },
    te: {
      shortDesc: "Digital baby thermometer",
      description: "Digital baby thermometer",
      benefits: "Fast reading, Fever alarm",
      usage: "Place under arm",
      warnings: "Clean after use"
    },
    bn: {
      shortDesc: "Digital baby thermometer",
      description: "Digital baby thermometer",
      benefits: "Fast reading, Fever alarm",
      usage: "Place under arm",
      warnings: "Clean after use"
    },
    mr: {
      shortDesc: "Digital baby thermometer",
      description: "Digital baby thermometer",
      benefits: "Fast reading, Fever alarm",
      usage: "Place under arm",
      warnings: "Clean after use"
    },
    gu: {
      shortDesc: "Digital baby thermometer",
      description: "Digital baby thermometer",
      benefits: "Fast reading, Fever alarm",
      usage: "Place under arm",
      warnings: "Clean after use"
    },
    kn: {
      shortDesc: "Digital baby thermometer",
      description: "Digital baby thermometer",
      benefits: "Fast reading, Fever alarm",
      usage: "Place under arm",
      warnings: "Clean after use"
    },
    ml: {
      shortDesc: "Digital baby thermometer",
      description: "Digital baby thermometer",
      benefits: "Fast reading, Fever alarm",
      usage: "Place under arm",
      warnings: "Clean after use"
    },
    pa: {
      shortDesc: "Digital baby thermometer",
      description: "Digital baby thermometer",
      benefits: "Fast reading, Fever alarm",
      usage: "Place under arm",
      warnings: "Clean after use"
    },
    or: {
      shortDesc: "Digital baby thermometer",
      description: "Digital baby thermometer",
      benefits: "Fast reading, Fever alarm",
      usage: "Place under arm",
      warnings: "Clean after use"
    },
    as: {
      shortDesc: "Digital baby thermometer",
      description: "Digital baby thermometer",
      benefits: "Fast reading, Fever alarm",
      usage: "Place under arm",
      warnings: "Clean after use"
    },
    ur: {
      shortDesc: "Digital baby thermometer",
      description: "Digital baby thermometer",
      benefits: "Fast reading, Fever alarm",
      usage: "Place under arm",
      warnings: "Clean after use"
    }
  },
  "BABY120": {
    en: {
      shortDesc: "Safe baby nail clipper",
      description: "Safe baby nail clipper",
      benefits: "Rounded edges, Easy grip",
      usage: "Trim nails carefully",
      warnings: "Use with caution"
    },
    hi: {
      shortDesc: "Safe baby nail clipper",
      description: "Safe baby nail clipper",
      benefits: "Rounded edges, Easy grip",
      usage: "Trim nails carefully",
      warnings: "Use with caution"
    },
    ta: {
      shortDesc: "Safe baby nail clipper",
      description: "Safe baby nail clipper",
      benefits: "Rounded edges, Easy grip",
      usage: "Trim nails carefully",
      warnings: "Use with caution"
    },
    te: {
      shortDesc: "Safe baby nail clipper",
      description: "Safe baby nail clipper",
      benefits: "Rounded edges, Easy grip",
      usage: "Trim nails carefully",
      warnings: "Use with caution"
    },
    bn: {
      shortDesc: "Safe baby nail clipper",
      description: "Safe baby nail clipper",
      benefits: "Rounded edges, Easy grip",
      usage: "Trim nails carefully",
      warnings: "Use with caution"
    },
    mr: {
      shortDesc: "Safe baby nail clipper",
      description: "Safe baby nail clipper",
      benefits: "Rounded edges, Easy grip",
      usage: "Trim nails carefully",
      warnings: "Use with caution"
    },
    gu: {
      shortDesc: "Safe baby nail clipper",
      description: "Safe baby nail clipper",
      benefits: "Rounded edges, Easy grip",
      usage: "Trim nails carefully",
      warnings: "Use with caution"
    },
    kn: {
      shortDesc: "Safe baby nail clipper",
      description: "Safe baby nail clipper",
      benefits: "Rounded edges, Easy grip",
      usage: "Trim nails carefully",
      warnings: "Use with caution"
    },
    ml: {
      shortDesc: "Safe baby nail clipper",
      description: "Safe baby nail clipper",
      benefits: "Rounded edges, Easy grip",
      usage: "Trim nails carefully",
      warnings: "Use with caution"
    },
    pa: {
      shortDesc: "Safe baby nail clipper",
      description: "Safe baby nail clipper",
      benefits: "Rounded edges, Easy grip",
      usage: "Trim nails carefully",
      warnings: "Use with caution"
    },
    or: {
      shortDesc: "Safe baby nail clipper",
      description: "Safe baby nail clipper",
      benefits: "Rounded edges, Easy grip",
      usage: "Trim nails carefully",
      warnings: "Use with caution"
    },
    as: {
      shortDesc: "Safe baby nail clipper",
      description: "Safe baby nail clipper",
      benefits: "Rounded edges, Easy grip",
      usage: "Trim nails carefully",
      warnings: "Use with caution"
    },
    ur: {
      shortDesc: "Safe baby nail clipper",
      description: "Safe baby nail clipper",
      benefits: "Rounded edges, Easy grip",
      usage: "Trim nails carefully",
      warnings: "Use with caution"
    }
  },
  "BABY121": {
    en: {
      shortDesc: "Gas relief drops",
      description: "Gas relief drops",
      benefits: "Relieves colic, Fast acting",
      usage: "Give before feeding",
      warnings: "Consult doctor"
    },
    hi: {
      shortDesc: "Gas relief drops",
      description: "Gas relief drops",
      benefits: "Relieves colic, Fast acting",
      usage: "Give before feeding",
      warnings: "Consult doctor"
    },
    ta: {
      shortDesc: "Gas relief drops",
      description: "Gas relief drops",
      benefits: "Relieves colic, Fast acting",
      usage: "Give before feeding",
      warnings: "Consult doctor"
    },
    te: {
      shortDesc: "Gas relief drops",
      description: "Gas relief drops",
      benefits: "Relieves colic, Fast acting",
      usage: "Give before feeding",
      warnings: "Consult doctor"
    },
    bn: {
      shortDesc: "Gas relief drops",
      description: "Gas relief drops",
      benefits: "Relieves colic, Fast acting",
      usage: "Give before feeding",
      warnings: "Consult doctor"
    },
    mr: {
      shortDesc: "Gas relief drops",
      description: "Gas relief drops",
      benefits: "Relieves colic, Fast acting",
      usage: "Give before feeding",
      warnings: "Consult doctor"
    },
    gu: {
      shortDesc: "Gas relief drops",
      description: "Gas relief drops",
      benefits: "Relieves colic, Fast acting",
      usage: "Give before feeding",
      warnings: "Consult doctor"
    },
    kn: {
      shortDesc: "Gas relief drops",
      description: "Gas relief drops",
      benefits: "Relieves colic, Fast acting",
      usage: "Give before feeding",
      warnings: "Consult doctor"
    },
    ml: {
      shortDesc: "Gas relief drops",
      description: "Gas relief drops",
      benefits: "Relieves colic, Fast acting",
      usage: "Give before feeding",
      warnings: "Consult doctor"
    },
    pa: {
      shortDesc: "Gas relief drops",
      description: "Gas relief drops",
      benefits: "Relieves colic, Fast acting",
      usage: "Give before feeding",
      warnings: "Consult doctor"
    },
    or: {
      shortDesc: "Gas relief drops",
      description: "Gas relief drops",
      benefits: "Relieves colic, Fast acting",
      usage: "Give before feeding",
      warnings: "Consult doctor"
    },
    as: {
      shortDesc: "Gas relief drops",
      description: "Gas relief drops",
      benefits: "Relieves colic, Fast acting",
      usage: "Give before feeding",
      warnings: "Consult doctor"
    },
    ur: {
      shortDesc: "Gas relief drops",
      description: "Gas relief drops",
      benefits: "Relieves colic, Fast acting",
      usage: "Give before feeding",
      warnings: "Consult doctor"
    }
  },
  "BABY122": {
    en: {
      shortDesc: "Infant probiotic supplement",
      description: "Infant probiotic supplement",
      benefits: "Gut health, Immunity",
      usage: "Give 5 drops daily",
      warnings: "Refrigerate after opening"
    },
    hi: {
      shortDesc: "Infant probiotic supplement",
      description: "Infant probiotic supplement",
      benefits: "Gut health, Immunity",
      usage: "Give 5 drops daily",
      warnings: "Refrigerate after opening"
    },
    ta: {
      shortDesc: "Infant probiotic supplement",
      description: "Infant probiotic supplement",
      benefits: "Gut health, Immunity",
      usage: "Give 5 drops daily",
      warnings: "Refrigerate after opening"
    },
    te: {
      shortDesc: "Infant probiotic supplement",
      description: "Infant probiotic supplement",
      benefits: "Gut health, Immunity",
      usage: "Give 5 drops daily",
      warnings: "Refrigerate after opening"
    },
    bn: {
      shortDesc: "Infant probiotic supplement",
      description: "Infant probiotic supplement",
      benefits: "Gut health, Immunity",
      usage: "Give 5 drops daily",
      warnings: "Refrigerate after opening"
    },
    mr: {
      shortDesc: "Infant probiotic supplement",
      description: "Infant probiotic supplement",
      benefits: "Gut health, Immunity",
      usage: "Give 5 drops daily",
      warnings: "Refrigerate after opening"
    },
    gu: {
      shortDesc: "Infant probiotic supplement",
      description: "Infant probiotic supplement",
      benefits: "Gut health, Immunity",
      usage: "Give 5 drops daily",
      warnings: "Refrigerate after opening"
    },
    kn: {
      shortDesc: "Infant probiotic supplement",
      description: "Infant probiotic supplement",
      benefits: "Gut health, Immunity",
      usage: "Give 5 drops daily",
      warnings: "Refrigerate after opening"
    },
    ml: {
      shortDesc: "Infant probiotic supplement",
      description: "Infant probiotic supplement",
      benefits: "Gut health, Immunity",
      usage: "Give 5 drops daily",
      warnings: "Refrigerate after opening"
    },
    pa: {
      shortDesc: "Infant probiotic supplement",
      description: "Infant probiotic supplement",
      benefits: "Gut health, Immunity",
      usage: "Give 5 drops daily",
      warnings: "Refrigerate after opening"
    },
    or: {
      shortDesc: "Infant probiotic supplement",
      description: "Infant probiotic supplement",
      benefits: "Gut health, Immunity",
      usage: "Give 5 drops daily",
      warnings: "Refrigerate after opening"
    },
    as: {
      shortDesc: "Infant probiotic supplement",
      description: "Infant probiotic supplement",
      benefits: "Gut health, Immunity",
      usage: "Give 5 drops daily",
      warnings: "Refrigerate after opening"
    },
    ur: {
      shortDesc: "Infant probiotic supplement",
      description: "Infant probiotic supplement",
      benefits: "Gut health, Immunity",
      usage: "Give 5 drops daily",
      warnings: "Refrigerate after opening"
    }
  },
  "BABY123": {
    en: {
      shortDesc: "Iron supplement for babies",
      description: "Iron supplement for babies",
      benefits: "Prevents anemia, Supports growth",
      usage: "Give as directed",
      warnings: "May stain teeth"
    },
    hi: {
      shortDesc: "Iron supplement for babies",
      description: "Iron supplement for babies",
      benefits: "Prevents anemia, Supports growth",
      usage: "Give as directed",
      warnings: "May stain teeth"
    },
    ta: {
      shortDesc: "Iron supplement for babies",
      description: "Iron supplement for babies",
      benefits: "Prevents anemia, Supports growth",
      usage: "Give as directed",
      warnings: "May stain teeth"
    },
    te: {
      shortDesc: "Iron supplement for babies",
      description: "Iron supplement for babies",
      benefits: "Prevents anemia, Supports growth",
      usage: "Give as directed",
      warnings: "May stain teeth"
    },
    bn: {
      shortDesc: "Iron supplement for babies",
      description: "Iron supplement for babies",
      benefits: "Prevents anemia, Supports growth",
      usage: "Give as directed",
      warnings: "May stain teeth"
    },
    mr: {
      shortDesc: "Iron supplement for babies",
      description: "Iron supplement for babies",
      benefits: "Prevents anemia, Supports growth",
      usage: "Give as directed",
      warnings: "May stain teeth"
    },
    gu: {
      shortDesc: "Iron supplement for babies",
      description: "Iron supplement for babies",
      benefits: "Prevents anemia, Supports growth",
      usage: "Give as directed",
      warnings: "May stain teeth"
    },
    kn: {
      shortDesc: "Iron supplement for babies",
      description: "Iron supplement for babies",
      benefits: "Prevents anemia, Supports growth",
      usage: "Give as directed",
      warnings: "May stain teeth"
    },
    ml: {
      shortDesc: "Iron supplement for babies",
      description: "Iron supplement for babies",
      benefits: "Prevents anemia, Supports growth",
      usage: "Give as directed",
      warnings: "May stain teeth"
    },
    pa: {
      shortDesc: "Iron supplement for babies",
      description: "Iron supplement for babies",
      benefits: "Prevents anemia, Supports growth",
      usage: "Give as directed",
      warnings: "May stain teeth"
    },
    or: {
      shortDesc: "Iron supplement for babies",
      description: "Iron supplement for babies",
      benefits: "Prevents anemia, Supports growth",
      usage: "Give as directed",
      warnings: "May stain teeth"
    },
    as: {
      shortDesc: "Iron supplement for babies",
      description: "Iron supplement for babies",
      benefits: "Prevents anemia, Supports growth",
      usage: "Give as directed",
      warnings: "May stain teeth"
    },
    ur: {
      shortDesc: "Iron supplement for babies",
      description: "Iron supplement for babies",
      benefits: "Prevents anemia, Supports growth",
      usage: "Give as directed",
      warnings: "May stain teeth"
    }
  },
  "BABY124": {
    en: {
      shortDesc: "DHA for brain development",
      description: "DHA for brain development",
      benefits: "Brain health, Eye development",
      usage: "Give 1ml daily",
      warnings: "Keep refrigerated"
    },
    hi: {
      shortDesc: "DHA for brain development",
      description: "DHA for brain development",
      benefits: "Brain health, Eye development",
      usage: "Give 1ml daily",
      warnings: "Keep refrigerated"
    },
    ta: {
      shortDesc: "DHA for brain development",
      description: "DHA for brain development",
      benefits: "Brain health, Eye development",
      usage: "Give 1ml daily",
      warnings: "Keep refrigerated"
    },
    te: {
      shortDesc: "DHA for brain development",
      description: "DHA for brain development",
      benefits: "Brain health, Eye development",
      usage: "Give 1ml daily",
      warnings: "Keep refrigerated"
    },
    bn: {
      shortDesc: "DHA for brain development",
      description: "DHA for brain development",
      benefits: "Brain health, Eye development",
      usage: "Give 1ml daily",
      warnings: "Keep refrigerated"
    },
    mr: {
      shortDesc: "DHA for brain development",
      description: "DHA for brain development",
      benefits: "Brain health, Eye development",
      usage: "Give 1ml daily",
      warnings: "Keep refrigerated"
    },
    gu: {
      shortDesc: "DHA for brain development",
      description: "DHA for brain development",
      benefits: "Brain health, Eye development",
      usage: "Give 1ml daily",
      warnings: "Keep refrigerated"
    },
    kn: {
      shortDesc: "DHA for brain development",
      description: "DHA for brain development",
      benefits: "Brain health, Eye development",
      usage: "Give 1ml daily",
      warnings: "Keep refrigerated"
    },
    ml: {
      shortDesc: "DHA for brain development",
      description: "DHA for brain development",
      benefits: "Brain health, Eye development",
      usage: "Give 1ml daily",
      warnings: "Keep refrigerated"
    },
    pa: {
      shortDesc: "DHA for brain development",
      description: "DHA for brain development",
      benefits: "Brain health, Eye development",
      usage: "Give 1ml daily",
      warnings: "Keep refrigerated"
    },
    or: {
      shortDesc: "DHA for brain development",
      description: "DHA for brain development",
      benefits: "Brain health, Eye development",
      usage: "Give 1ml daily",
      warnings: "Keep refrigerated"
    },
    as: {
      shortDesc: "DHA for brain development",
      description: "DHA for brain development",
      benefits: "Brain health, Eye development",
      usage: "Give 1ml daily",
      warnings: "Keep refrigerated"
    },
    ur: {
      shortDesc: "DHA for brain development",
      description: "DHA for brain development",
      benefits: "Brain health, Eye development",
      usage: "Give 1ml daily",
      warnings: "Keep refrigerated"
    }
  },
  "BABY125": {
    en: {
      shortDesc: "Vitamin D drops for infants",
      description: "Vitamin D drops for infants",
      benefits: "Bone health, Immunity",
      usage: "Give 400 IU daily",
      warnings: "Do not exceed dose"
    },
    hi: {
      shortDesc: "Vitamin D drops for infants",
      description: "Vitamin D drops for infants",
      benefits: "Bone health, Immunity",
      usage: "Give 400 IU daily",
      warnings: "Do not exceed dose"
    },
    ta: {
      shortDesc: "Vitamin D drops for infants",
      description: "Vitamin D drops for infants",
      benefits: "Bone health, Immunity",
      usage: "Give 400 IU daily",
      warnings: "Do not exceed dose"
    },
    te: {
      shortDesc: "Vitamin D drops for infants",
      description: "Vitamin D drops for infants",
      benefits: "Bone health, Immunity",
      usage: "Give 400 IU daily",
      warnings: "Do not exceed dose"
    },
    bn: {
      shortDesc: "Vitamin D drops for infants",
      description: "Vitamin D drops for infants",
      benefits: "Bone health, Immunity",
      usage: "Give 400 IU daily",
      warnings: "Do not exceed dose"
    },
    mr: {
      shortDesc: "Vitamin D drops for infants",
      description: "Vitamin D drops for infants",
      benefits: "Bone health, Immunity",
      usage: "Give 400 IU daily",
      warnings: "Do not exceed dose"
    },
    gu: {
      shortDesc: "Vitamin D drops for infants",
      description: "Vitamin D drops for infants",
      benefits: "Bone health, Immunity",
      usage: "Give 400 IU daily",
      warnings: "Do not exceed dose"
    },
    kn: {
      shortDesc: "Vitamin D drops for infants",
      description: "Vitamin D drops for infants",
      benefits: "Bone health, Immunity",
      usage: "Give 400 IU daily",
      warnings: "Do not exceed dose"
    },
    ml: {
      shortDesc: "Vitamin D drops for infants",
      description: "Vitamin D drops for infants",
      benefits: "Bone health, Immunity",
      usage: "Give 400 IU daily",
      warnings: "Do not exceed dose"
    },
    pa: {
      shortDesc: "Vitamin D drops for infants",
      description: "Vitamin D drops for infants",
      benefits: "Bone health, Immunity",
      usage: "Give 400 IU daily",
      warnings: "Do not exceed dose"
    },
    or: {
      shortDesc: "Vitamin D drops for infants",
      description: "Vitamin D drops for infants",
      benefits: "Bone health, Immunity",
      usage: "Give 400 IU daily",
      warnings: "Do not exceed dose"
    },
    as: {
      shortDesc: "Vitamin D drops for infants",
      description: "Vitamin D drops for infants",
      benefits: "Bone health, Immunity",
      usage: "Give 400 IU daily",
      warnings: "Do not exceed dose"
    },
    ur: {
      shortDesc: "Vitamin D drops for infants",
      description: "Vitamin D drops for infants",
      benefits: "Bone health, Immunity",
      usage: "Give 400 IU daily",
      warnings: "Do not exceed dose"
    }
  },
  "BABY126": {
    en: {
      shortDesc: "Baby-safe mosquito repellent",
      description: "Baby-safe mosquito repellent",
      benefits: "Natural ingredients, Long-lasting",
      usage: "Apply to exposed skin",
      warnings: "Avoid eyes and mouth"
    },
    hi: {
      shortDesc: "Baby-safe mosquito repellent",
      description: "Baby-safe mosquito repellent",
      benefits: "Natural ingredients, Long-lasting",
      usage: "Apply to exposed skin",
      warnings: "Avoid eyes and mouth"
    },
    ta: {
      shortDesc: "Baby-safe mosquito repellent",
      description: "Baby-safe mosquito repellent",
      benefits: "Natural ingredients, Long-lasting",
      usage: "Apply to exposed skin",
      warnings: "Avoid eyes and mouth"
    },
    te: {
      shortDesc: "Baby-safe mosquito repellent",
      description: "Baby-safe mosquito repellent",
      benefits: "Natural ingredients, Long-lasting",
      usage: "Apply to exposed skin",
      warnings: "Avoid eyes and mouth"
    },
    bn: {
      shortDesc: "Baby-safe mosquito repellent",
      description: "Baby-safe mosquito repellent",
      benefits: "Natural ingredients, Long-lasting",
      usage: "Apply to exposed skin",
      warnings: "Avoid eyes and mouth"
    },
    mr: {
      shortDesc: "Baby-safe mosquito repellent",
      description: "Baby-safe mosquito repellent",
      benefits: "Natural ingredients, Long-lasting",
      usage: "Apply to exposed skin",
      warnings: "Avoid eyes and mouth"
    },
    gu: {
      shortDesc: "Baby-safe mosquito repellent",
      description: "Baby-safe mosquito repellent",
      benefits: "Natural ingredients, Long-lasting",
      usage: "Apply to exposed skin",
      warnings: "Avoid eyes and mouth"
    },
    kn: {
      shortDesc: "Baby-safe mosquito repellent",
      description: "Baby-safe mosquito repellent",
      benefits: "Natural ingredients, Long-lasting",
      usage: "Apply to exposed skin",
      warnings: "Avoid eyes and mouth"
    },
    ml: {
      shortDesc: "Baby-safe mosquito repellent",
      description: "Baby-safe mosquito repellent",
      benefits: "Natural ingredients, Long-lasting",
      usage: "Apply to exposed skin",
      warnings: "Avoid eyes and mouth"
    },
    pa: {
      shortDesc: "Baby-safe mosquito repellent",
      description: "Baby-safe mosquito repellent",
      benefits: "Natural ingredients, Long-lasting",
      usage: "Apply to exposed skin",
      warnings: "Avoid eyes and mouth"
    },
    or: {
      shortDesc: "Baby-safe mosquito repellent",
      description: "Baby-safe mosquito repellent",
      benefits: "Natural ingredients, Long-lasting",
      usage: "Apply to exposed skin",
      warnings: "Avoid eyes and mouth"
    },
    as: {
      shortDesc: "Baby-safe mosquito repellent",
      description: "Baby-safe mosquito repellent",
      benefits: "Natural ingredients, Long-lasting",
      usage: "Apply to exposed skin",
      warnings: "Avoid eyes and mouth"
    },
    ur: {
      shortDesc: "Baby-safe mosquito repellent",
      description: "Baby-safe mosquito repellent",
      benefits: "Natural ingredients, Long-lasting",
      usage: "Apply to exposed skin",
      warnings: "Avoid eyes and mouth"
    }
  },
  "BABY127": {
    en: {
      shortDesc: "Gentle hand sanitizer",
      description: "Gentle hand sanitizer",
      benefits: "Kills germs, Moisturizing",
      usage: "Apply to hands",
      warnings: "For external use"
    },
    hi: {
      shortDesc: "Gentle hand sanitizer",
      description: "Gentle hand sanitizer",
      benefits: "Kills germs, Moisturizing",
      usage: "Apply to hands",
      warnings: "For external use"
    },
    ta: {
      shortDesc: "Gentle hand sanitizer",
      description: "Gentle hand sanitizer",
      benefits: "Kills germs, Moisturizing",
      usage: "Apply to hands",
      warnings: "For external use"
    },
    te: {
      shortDesc: "Gentle hand sanitizer",
      description: "Gentle hand sanitizer",
      benefits: "Kills germs, Moisturizing",
      usage: "Apply to hands",
      warnings: "For external use"
    },
    bn: {
      shortDesc: "Gentle hand sanitizer",
      description: "Gentle hand sanitizer",
      benefits: "Kills germs, Moisturizing",
      usage: "Apply to hands",
      warnings: "For external use"
    },
    mr: {
      shortDesc: "Gentle hand sanitizer",
      description: "Gentle hand sanitizer",
      benefits: "Kills germs, Moisturizing",
      usage: "Apply to hands",
      warnings: "For external use"
    },
    gu: {
      shortDesc: "Gentle hand sanitizer",
      description: "Gentle hand sanitizer",
      benefits: "Kills germs, Moisturizing",
      usage: "Apply to hands",
      warnings: "For external use"
    },
    kn: {
      shortDesc: "Gentle hand sanitizer",
      description: "Gentle hand sanitizer",
      benefits: "Kills germs, Moisturizing",
      usage: "Apply to hands",
      warnings: "For external use"
    },
    ml: {
      shortDesc: "Gentle hand sanitizer",
      description: "Gentle hand sanitizer",
      benefits: "Kills germs, Moisturizing",
      usage: "Apply to hands",
      warnings: "For external use"
    },
    pa: {
      shortDesc: "Gentle hand sanitizer",
      description: "Gentle hand sanitizer",
      benefits: "Kills germs, Moisturizing",
      usage: "Apply to hands",
      warnings: "For external use"
    },
    or: {
      shortDesc: "Gentle hand sanitizer",
      description: "Gentle hand sanitizer",
      benefits: "Kills germs, Moisturizing",
      usage: "Apply to hands",
      warnings: "For external use"
    },
    as: {
      shortDesc: "Gentle hand sanitizer",
      description: "Gentle hand sanitizer",
      benefits: "Kills germs, Moisturizing",
      usage: "Apply to hands",
      warnings: "For external use"
    },
    ur: {
      shortDesc: "Gentle hand sanitizer",
      description: "Gentle hand sanitizer",
      benefits: "Kills germs, Moisturizing",
      usage: "Apply to hands",
      warnings: "For external use"
    }
  },
  "BABY128": {
    en: {
      shortDesc: "Baby first aid essentials",
      description: "Baby first aid essentials",
      benefits: "Complete kit, Travel-friendly",
      usage: "Keep handy",
      warnings: "Check expiry dates"
    },
    hi: {
      shortDesc: "Baby first aid essentials",
      description: "Baby first aid essentials",
      benefits: "Complete kit, Travel-friendly",
      usage: "Keep handy",
      warnings: "Check expiry dates"
    },
    ta: {
      shortDesc: "Baby first aid essentials",
      description: "Baby first aid essentials",
      benefits: "Complete kit, Travel-friendly",
      usage: "Keep handy",
      warnings: "Check expiry dates"
    },
    te: {
      shortDesc: "Baby first aid essentials",
      description: "Baby first aid essentials",
      benefits: "Complete kit, Travel-friendly",
      usage: "Keep handy",
      warnings: "Check expiry dates"
    },
    bn: {
      shortDesc: "Baby first aid essentials",
      description: "Baby first aid essentials",
      benefits: "Complete kit, Travel-friendly",
      usage: "Keep handy",
      warnings: "Check expiry dates"
    },
    mr: {
      shortDesc: "Baby first aid essentials",
      description: "Baby first aid essentials",
      benefits: "Complete kit, Travel-friendly",
      usage: "Keep handy",
      warnings: "Check expiry dates"
    },
    gu: {
      shortDesc: "Baby first aid essentials",
      description: "Baby first aid essentials",
      benefits: "Complete kit, Travel-friendly",
      usage: "Keep handy",
      warnings: "Check expiry dates"
    },
    kn: {
      shortDesc: "Baby first aid essentials",
      description: "Baby first aid essentials",
      benefits: "Complete kit, Travel-friendly",
      usage: "Keep handy",
      warnings: "Check expiry dates"
    },
    ml: {
      shortDesc: "Baby first aid essentials",
      description: "Baby first aid essentials",
      benefits: "Complete kit, Travel-friendly",
      usage: "Keep handy",
      warnings: "Check expiry dates"
    },
    pa: {
      shortDesc: "Baby first aid essentials",
      description: "Baby first aid essentials",
      benefits: "Complete kit, Travel-friendly",
      usage: "Keep handy",
      warnings: "Check expiry dates"
    },
    or: {
      shortDesc: "Baby first aid essentials",
      description: "Baby first aid essentials",
      benefits: "Complete kit, Travel-friendly",
      usage: "Keep handy",
      warnings: "Check expiry dates"
    },
    as: {
      shortDesc: "Baby first aid essentials",
      description: "Baby first aid essentials",
      benefits: "Complete kit, Travel-friendly",
      usage: "Keep handy",
      warnings: "Check expiry dates"
    },
    ur: {
      shortDesc: "Baby first aid essentials",
      description: "Baby first aid essentials",
      benefits: "Complete kit, Travel-friendly",
      usage: "Keep handy",
      warnings: "Check expiry dates"
    }
  },
  "BABY129": {
    en: {
      shortDesc: "Antiseptic for minor cuts",
      description: "Antiseptic for minor cuts",
      benefits: "Prevents infection, Gentle formula",
      usage: "Apply to clean wound",
      warnings: "For external use"
    },
    hi: {
      shortDesc: "Antiseptic for minor cuts",
      description: "Antiseptic for minor cuts",
      benefits: "Prevents infection, Gentle formula",
      usage: "Apply to clean wound",
      warnings: "For external use"
    },
    ta: {
      shortDesc: "Antiseptic for minor cuts",
      description: "Antiseptic for minor cuts",
      benefits: "Prevents infection, Gentle formula",
      usage: "Apply to clean wound",
      warnings: "For external use"
    },
    te: {
      shortDesc: "Antiseptic for minor cuts",
      description: "Antiseptic for minor cuts",
      benefits: "Prevents infection, Gentle formula",
      usage: "Apply to clean wound",
      warnings: "For external use"
    },
    bn: {
      shortDesc: "Antiseptic for minor cuts",
      description: "Antiseptic for minor cuts",
      benefits: "Prevents infection, Gentle formula",
      usage: "Apply to clean wound",
      warnings: "For external use"
    },
    mr: {
      shortDesc: "Antiseptic for minor cuts",
      description: "Antiseptic for minor cuts",
      benefits: "Prevents infection, Gentle formula",
      usage: "Apply to clean wound",
      warnings: "For external use"
    },
    gu: {
      shortDesc: "Antiseptic for minor cuts",
      description: "Antiseptic for minor cuts",
      benefits: "Prevents infection, Gentle formula",
      usage: "Apply to clean wound",
      warnings: "For external use"
    },
    kn: {
      shortDesc: "Antiseptic for minor cuts",
      description: "Antiseptic for minor cuts",
      benefits: "Prevents infection, Gentle formula",
      usage: "Apply to clean wound",
      warnings: "For external use"
    },
    ml: {
      shortDesc: "Antiseptic for minor cuts",
      description: "Antiseptic for minor cuts",
      benefits: "Prevents infection, Gentle formula",
      usage: "Apply to clean wound",
      warnings: "For external use"
    },
    pa: {
      shortDesc: "Antiseptic for minor cuts",
      description: "Antiseptic for minor cuts",
      benefits: "Prevents infection, Gentle formula",
      usage: "Apply to clean wound",
      warnings: "For external use"
    },
    or: {
      shortDesc: "Antiseptic for minor cuts",
      description: "Antiseptic for minor cuts",
      benefits: "Prevents infection, Gentle formula",
      usage: "Apply to clean wound",
      warnings: "For external use"
    },
    as: {
      shortDesc: "Antiseptic for minor cuts",
      description: "Antiseptic for minor cuts",
      benefits: "Prevents infection, Gentle formula",
      usage: "Apply to clean wound",
      warnings: "For external use"
    },
    ur: {
      shortDesc: "Antiseptic for minor cuts",
      description: "Antiseptic for minor cuts",
      benefits: "Prevents infection, Gentle formula",
      usage: "Apply to clean wound",
      warnings: "For external use"
    }
  },
  "BABY130": {
    en: {
      shortDesc: "Fun character bandages",
      description: "Fun character bandages",
      benefits: "Hypoallergenic, Waterproof",
      usage: "Apply to minor cuts",
      warnings: "Change daily"
    },
    hi: {
      shortDesc: "Fun character bandages",
      description: "Fun character bandages",
      benefits: "Hypoallergenic, Waterproof",
      usage: "Apply to minor cuts",
      warnings: "Change daily"
    },
    ta: {
      shortDesc: "Fun character bandages",
      description: "Fun character bandages",
      benefits: "Hypoallergenic, Waterproof",
      usage: "Apply to minor cuts",
      warnings: "Change daily"
    },
    te: {
      shortDesc: "Fun character bandages",
      description: "Fun character bandages",
      benefits: "Hypoallergenic, Waterproof",
      usage: "Apply to minor cuts",
      warnings: "Change daily"
    },
    bn: {
      shortDesc: "Fun character bandages",
      description: "Fun character bandages",
      benefits: "Hypoallergenic, Waterproof",
      usage: "Apply to minor cuts",
      warnings: "Change daily"
    },
    mr: {
      shortDesc: "Fun character bandages",
      description: "Fun character bandages",
      benefits: "Hypoallergenic, Waterproof",
      usage: "Apply to minor cuts",
      warnings: "Change daily"
    },
    gu: {
      shortDesc: "Fun character bandages",
      description: "Fun character bandages",
      benefits: "Hypoallergenic, Waterproof",
      usage: "Apply to minor cuts",
      warnings: "Change daily"
    },
    kn: {
      shortDesc: "Fun character bandages",
      description: "Fun character bandages",
      benefits: "Hypoallergenic, Waterproof",
      usage: "Apply to minor cuts",
      warnings: "Change daily"
    },
    ml: {
      shortDesc: "Fun character bandages",
      description: "Fun character bandages",
      benefits: "Hypoallergenic, Waterproof",
      usage: "Apply to minor cuts",
      warnings: "Change daily"
    },
    pa: {
      shortDesc: "Fun character bandages",
      description: "Fun character bandages",
      benefits: "Hypoallergenic, Waterproof",
      usage: "Apply to minor cuts",
      warnings: "Change daily"
    },
    or: {
      shortDesc: "Fun character bandages",
      description: "Fun character bandages",
      benefits: "Hypoallergenic, Waterproof",
      usage: "Apply to minor cuts",
      warnings: "Change daily"
    },
    as: {
      shortDesc: "Fun character bandages",
      description: "Fun character bandages",
      benefits: "Hypoallergenic, Waterproof",
      usage: "Apply to minor cuts",
      warnings: "Change daily"
    },
    ur: {
      shortDesc: "Fun character bandages",
      description: "Fun character bandages",
      benefits: "Hypoallergenic, Waterproof",
      usage: "Apply to minor cuts",
      warnings: "Change daily"
    }
  },
  "BABY131": {
    en: {
      shortDesc: "Video baby monitor",
      description: "Video baby monitor",
      benefits: "Night vision, Two-way audio",
      usage: "Place in nursery",
      warnings: "Keep cord away from baby"
    },
    hi: {
      shortDesc: "Video baby monitor",
      description: "Video baby monitor",
      benefits: "Night vision, Two-way audio",
      usage: "Place in nursery",
      warnings: "Keep cord away from baby"
    },
    ta: {
      shortDesc: "Video baby monitor",
      description: "Video baby monitor",
      benefits: "Night vision, Two-way audio",
      usage: "Place in nursery",
      warnings: "Keep cord away from baby"
    },
    te: {
      shortDesc: "Video baby monitor",
      description: "Video baby monitor",
      benefits: "Night vision, Two-way audio",
      usage: "Place in nursery",
      warnings: "Keep cord away from baby"
    },
    bn: {
      shortDesc: "Video baby monitor",
      description: "Video baby monitor",
      benefits: "Night vision, Two-way audio",
      usage: "Place in nursery",
      warnings: "Keep cord away from baby"
    },
    mr: {
      shortDesc: "Video baby monitor",
      description: "Video baby monitor",
      benefits: "Night vision, Two-way audio",
      usage: "Place in nursery",
      warnings: "Keep cord away from baby"
    },
    gu: {
      shortDesc: "Video baby monitor",
      description: "Video baby monitor",
      benefits: "Night vision, Two-way audio",
      usage: "Place in nursery",
      warnings: "Keep cord away from baby"
    },
    kn: {
      shortDesc: "Video baby monitor",
      description: "Video baby monitor",
      benefits: "Night vision, Two-way audio",
      usage: "Place in nursery",
      warnings: "Keep cord away from baby"
    },
    ml: {
      shortDesc: "Video baby monitor",
      description: "Video baby monitor",
      benefits: "Night vision, Two-way audio",
      usage: "Place in nursery",
      warnings: "Keep cord away from baby"
    },
    pa: {
      shortDesc: "Video baby monitor",
      description: "Video baby monitor",
      benefits: "Night vision, Two-way audio",
      usage: "Place in nursery",
      warnings: "Keep cord away from baby"
    },
    or: {
      shortDesc: "Video baby monitor",
      description: "Video baby monitor",
      benefits: "Night vision, Two-way audio",
      usage: "Place in nursery",
      warnings: "Keep cord away from baby"
    },
    as: {
      shortDesc: "Video baby monitor",
      description: "Video baby monitor",
      benefits: "Night vision, Two-way audio",
      usage: "Place in nursery",
      warnings: "Keep cord away from baby"
    },
    ur: {
      shortDesc: "Video baby monitor",
      description: "Video baby monitor",
      benefits: "Night vision, Two-way audio",
      usage: "Place in nursery",
      warnings: "Keep cord away from baby"
    }
  },
  "BABY132": {
    en: {
      shortDesc: "Cool mist humidifier",
      description: "Cool mist humidifier",
      benefits: "Relieves congestion, Quiet operation",
      usage: "Use in nursery",
      warnings: "Clean regularly"
    },
    hi: {
      shortDesc: "Cool mist humidifier",
      description: "Cool mist humidifier",
      benefits: "Relieves congestion, Quiet operation",
      usage: "Use in nursery",
      warnings: "Clean regularly"
    },
    ta: {
      shortDesc: "Cool mist humidifier",
      description: "Cool mist humidifier",
      benefits: "Relieves congestion, Quiet operation",
      usage: "Use in nursery",
      warnings: "Clean regularly"
    },
    te: {
      shortDesc: "Cool mist humidifier",
      description: "Cool mist humidifier",
      benefits: "Relieves congestion, Quiet operation",
      usage: "Use in nursery",
      warnings: "Clean regularly"
    },
    bn: {
      shortDesc: "Cool mist humidifier",
      description: "Cool mist humidifier",
      benefits: "Relieves congestion, Quiet operation",
      usage: "Use in nursery",
      warnings: "Clean regularly"
    },
    mr: {
      shortDesc: "Cool mist humidifier",
      description: "Cool mist humidifier",
      benefits: "Relieves congestion, Quiet operation",
      usage: "Use in nursery",
      warnings: "Clean regularly"
    },
    gu: {
      shortDesc: "Cool mist humidifier",
      description: "Cool mist humidifier",
      benefits: "Relieves congestion, Quiet operation",
      usage: "Use in nursery",
      warnings: "Clean regularly"
    },
    kn: {
      shortDesc: "Cool mist humidifier",
      description: "Cool mist humidifier",
      benefits: "Relieves congestion, Quiet operation",
      usage: "Use in nursery",
      warnings: "Clean regularly"
    },
    ml: {
      shortDesc: "Cool mist humidifier",
      description: "Cool mist humidifier",
      benefits: "Relieves congestion, Quiet operation",
      usage: "Use in nursery",
      warnings: "Clean regularly"
    },
    pa: {
      shortDesc: "Cool mist humidifier",
      description: "Cool mist humidifier",
      benefits: "Relieves congestion, Quiet operation",
      usage: "Use in nursery",
      warnings: "Clean regularly"
    },
    or: {
      shortDesc: "Cool mist humidifier",
      description: "Cool mist humidifier",
      benefits: "Relieves congestion, Quiet operation",
      usage: "Use in nursery",
      warnings: "Clean regularly"
    },
    as: {
      shortDesc: "Cool mist humidifier",
      description: "Cool mist humidifier",
      benefits: "Relieves congestion, Quiet operation",
      usage: "Use in nursery",
      warnings: "Clean regularly"
    },
    ur: {
      shortDesc: "Cool mist humidifier",
      description: "Cool mist humidifier",
      benefits: "Relieves congestion, Quiet operation",
      usage: "Use in nursery",
      warnings: "Clean regularly"
    }
  },
  "BABY133": {
    en: {
      shortDesc: "Soft glow night light",
      description: "Soft glow night light",
      benefits: "Soothing light, Energy efficient",
      usage: "Place in nursery",
      warnings: "Keep away from water"
    },
    hi: {
      shortDesc: "Soft glow night light",
      description: "Soft glow night light",
      benefits: "Soothing light, Energy efficient",
      usage: "Place in nursery",
      warnings: "Keep away from water"
    },
    ta: {
      shortDesc: "Soft glow night light",
      description: "Soft glow night light",
      benefits: "Soothing light, Energy efficient",
      usage: "Place in nursery",
      warnings: "Keep away from water"
    },
    te: {
      shortDesc: "Soft glow night light",
      description: "Soft glow night light",
      benefits: "Soothing light, Energy efficient",
      usage: "Place in nursery",
      warnings: "Keep away from water"
    },
    bn: {
      shortDesc: "Soft glow night light",
      description: "Soft glow night light",
      benefits: "Soothing light, Energy efficient",
      usage: "Place in nursery",
      warnings: "Keep away from water"
    },
    mr: {
      shortDesc: "Soft glow night light",
      description: "Soft glow night light",
      benefits: "Soothing light, Energy efficient",
      usage: "Place in nursery",
      warnings: "Keep away from water"
    },
    gu: {
      shortDesc: "Soft glow night light",
      description: "Soft glow night light",
      benefits: "Soothing light, Energy efficient",
      usage: "Place in nursery",
      warnings: "Keep away from water"
    },
    kn: {
      shortDesc: "Soft glow night light",
      description: "Soft glow night light",
      benefits: "Soothing light, Energy efficient",
      usage: "Place in nursery",
      warnings: "Keep away from water"
    },
    ml: {
      shortDesc: "Soft glow night light",
      description: "Soft glow night light",
      benefits: "Soothing light, Energy efficient",
      usage: "Place in nursery",
      warnings: "Keep away from water"
    },
    pa: {
      shortDesc: "Soft glow night light",
      description: "Soft glow night light",
      benefits: "Soothing light, Energy efficient",
      usage: "Place in nursery",
      warnings: "Keep away from water"
    },
    or: {
      shortDesc: "Soft glow night light",
      description: "Soft glow night light",
      benefits: "Soothing light, Energy efficient",
      usage: "Place in nursery",
      warnings: "Keep away from water"
    },
    as: {
      shortDesc: "Soft glow night light",
      description: "Soft glow night light",
      benefits: "Soothing light, Energy efficient",
      usage: "Place in nursery",
      warnings: "Keep away from water"
    },
    ur: {
      shortDesc: "Soft glow night light",
      description: "Soft glow night light",
      benefits: "Soothing light, Energy efficient",
      usage: "Place in nursery",
      warnings: "Keep away from water"
    }
  },
  "BABY134": {
    en: {
      shortDesc: "Adjustable safety gate",
      description: "Adjustable safety gate",
      benefits: "Easy installation, Sturdy",
      usage: "Install at stairs",
      warnings: "Follow instructions"
    },
    hi: {
      shortDesc: "Adjustable safety gate",
      description: "Adjustable safety gate",
      benefits: "Easy installation, Sturdy",
      usage: "Install at stairs",
      warnings: "Follow instructions"
    },
    ta: {
      shortDesc: "Adjustable safety gate",
      description: "Adjustable safety gate",
      benefits: "Easy installation, Sturdy",
      usage: "Install at stairs",
      warnings: "Follow instructions"
    },
    te: {
      shortDesc: "Adjustable safety gate",
      description: "Adjustable safety gate",
      benefits: "Easy installation, Sturdy",
      usage: "Install at stairs",
      warnings: "Follow instructions"
    },
    bn: {
      shortDesc: "Adjustable safety gate",
      description: "Adjustable safety gate",
      benefits: "Easy installation, Sturdy",
      usage: "Install at stairs",
      warnings: "Follow instructions"
    },
    mr: {
      shortDesc: "Adjustable safety gate",
      description: "Adjustable safety gate",
      benefits: "Easy installation, Sturdy",
      usage: "Install at stairs",
      warnings: "Follow instructions"
    },
    gu: {
      shortDesc: "Adjustable safety gate",
      description: "Adjustable safety gate",
      benefits: "Easy installation, Sturdy",
      usage: "Install at stairs",
      warnings: "Follow instructions"
    },
    kn: {
      shortDesc: "Adjustable safety gate",
      description: "Adjustable safety gate",
      benefits: "Easy installation, Sturdy",
      usage: "Install at stairs",
      warnings: "Follow instructions"
    },
    ml: {
      shortDesc: "Adjustable safety gate",
      description: "Adjustable safety gate",
      benefits: "Easy installation, Sturdy",
      usage: "Install at stairs",
      warnings: "Follow instructions"
    },
    pa: {
      shortDesc: "Adjustable safety gate",
      description: "Adjustable safety gate",
      benefits: "Easy installation, Sturdy",
      usage: "Install at stairs",
      warnings: "Follow instructions"
    },
    or: {
      shortDesc: "Adjustable safety gate",
      description: "Adjustable safety gate",
      benefits: "Easy installation, Sturdy",
      usage: "Install at stairs",
      warnings: "Follow instructions"
    },
    as: {
      shortDesc: "Adjustable safety gate",
      description: "Adjustable safety gate",
      benefits: "Easy installation, Sturdy",
      usage: "Install at stairs",
      warnings: "Follow instructions"
    },
    ur: {
      shortDesc: "Adjustable safety gate",
      description: "Adjustable safety gate",
      benefits: "Easy installation, Sturdy",
      usage: "Install at stairs",
      warnings: "Follow instructions"
    }
  },
  "BABY135": {
    en: {
      shortDesc: "Furniture corner protectors",
      description: "Furniture corner protectors",
      benefits: "Prevents injuries, Easy to install",
      usage: "Attach to sharp corners",
      warnings: "Check adhesion regularly"
    },
    hi: {
      shortDesc: "Furniture corner protectors",
      description: "Furniture corner protectors",
      benefits: "Prevents injuries, Easy to install",
      usage: "Attach to sharp corners",
      warnings: "Check adhesion regularly"
    },
    ta: {
      shortDesc: "Furniture corner protectors",
      description: "Furniture corner protectors",
      benefits: "Prevents injuries, Easy to install",
      usage: "Attach to sharp corners",
      warnings: "Check adhesion regularly"
    },
    te: {
      shortDesc: "Furniture corner protectors",
      description: "Furniture corner protectors",
      benefits: "Prevents injuries, Easy to install",
      usage: "Attach to sharp corners",
      warnings: "Check adhesion regularly"
    },
    bn: {
      shortDesc: "Furniture corner protectors",
      description: "Furniture corner protectors",
      benefits: "Prevents injuries, Easy to install",
      usage: "Attach to sharp corners",
      warnings: "Check adhesion regularly"
    },
    mr: {
      shortDesc: "Furniture corner protectors",
      description: "Furniture corner protectors",
      benefits: "Prevents injuries, Easy to install",
      usage: "Attach to sharp corners",
      warnings: "Check adhesion regularly"
    },
    gu: {
      shortDesc: "Furniture corner protectors",
      description: "Furniture corner protectors",
      benefits: "Prevents injuries, Easy to install",
      usage: "Attach to sharp corners",
      warnings: "Check adhesion regularly"
    },
    kn: {
      shortDesc: "Furniture corner protectors",
      description: "Furniture corner protectors",
      benefits: "Prevents injuries, Easy to install",
      usage: "Attach to sharp corners",
      warnings: "Check adhesion regularly"
    },
    ml: {
      shortDesc: "Furniture corner protectors",
      description: "Furniture corner protectors",
      benefits: "Prevents injuries, Easy to install",
      usage: "Attach to sharp corners",
      warnings: "Check adhesion regularly"
    },
    pa: {
      shortDesc: "Furniture corner protectors",
      description: "Furniture corner protectors",
      benefits: "Prevents injuries, Easy to install",
      usage: "Attach to sharp corners",
      warnings: "Check adhesion regularly"
    },
    or: {
      shortDesc: "Furniture corner protectors",
      description: "Furniture corner protectors",
      benefits: "Prevents injuries, Easy to install",
      usage: "Attach to sharp corners",
      warnings: "Check adhesion regularly"
    },
    as: {
      shortDesc: "Furniture corner protectors",
      description: "Furniture corner protectors",
      benefits: "Prevents injuries, Easy to install",
      usage: "Attach to sharp corners",
      warnings: "Check adhesion regularly"
    },
    ur: {
      shortDesc: "Furniture corner protectors",
      description: "Furniture corner protectors",
      benefits: "Prevents injuries, Easy to install",
      usage: "Attach to sharp corners",
      warnings: "Check adhesion regularly"
    }
  },
  "CARE001": {
    en: {
      shortDesc: "Deep cleansing face wash",
      description: "Deep cleansing face wash",
      benefits: "Removes dirt, Refreshing",
      usage: "Use twice daily",
      warnings: "Avoid eyes"
    },
    hi: {
      shortDesc: "Deep cleansing face wash",
      description: "Deep cleansing face wash",
      benefits: "Removes dirt, Refreshing",
      usage: "Use twice daily",
      warnings: "Avoid eyes"
    },
    ta: {
      shortDesc: "Deep cleansing face wash",
      description: "Deep cleansing face wash",
      benefits: "Removes dirt, Refreshing",
      usage: "Use twice daily",
      warnings: "Avoid eyes"
    },
    te: {
      shortDesc: "Deep cleansing face wash",
      description: "Deep cleansing face wash",
      benefits: "Removes dirt, Refreshing",
      usage: "Use twice daily",
      warnings: "Avoid eyes"
    },
    bn: {
      shortDesc: "Deep cleansing face wash",
      description: "Deep cleansing face wash",
      benefits: "Removes dirt, Refreshing",
      usage: "Use twice daily",
      warnings: "Avoid eyes"
    },
    mr: {
      shortDesc: "Deep cleansing face wash",
      description: "Deep cleansing face wash",
      benefits: "Removes dirt, Refreshing",
      usage: "Use twice daily",
      warnings: "Avoid eyes"
    },
    gu: {
      shortDesc: "Deep cleansing face wash",
      description: "Deep cleansing face wash",
      benefits: "Removes dirt, Refreshing",
      usage: "Use twice daily",
      warnings: "Avoid eyes"
    },
    kn: {
      shortDesc: "Deep cleansing face wash",
      description: "Deep cleansing face wash",
      benefits: "Removes dirt, Refreshing",
      usage: "Use twice daily",
      warnings: "Avoid eyes"
    },
    ml: {
      shortDesc: "Deep cleansing face wash",
      description: "Deep cleansing face wash",
      benefits: "Removes dirt, Refreshing",
      usage: "Use twice daily",
      warnings: "Avoid eyes"
    },
    pa: {
      shortDesc: "Deep cleansing face wash",
      description: "Deep cleansing face wash",
      benefits: "Removes dirt, Refreshing",
      usage: "Use twice daily",
      warnings: "Avoid eyes"
    },
    or: {
      shortDesc: "Deep cleansing face wash",
      description: "Deep cleansing face wash",
      benefits: "Removes dirt, Refreshing",
      usage: "Use twice daily",
      warnings: "Avoid eyes"
    },
    as: {
      shortDesc: "Deep cleansing face wash",
      description: "Deep cleansing face wash",
      benefits: "Removes dirt, Refreshing",
      usage: "Use twice daily",
      warnings: "Avoid eyes"
    },
    ur: {
      shortDesc: "Deep cleansing face wash",
      description: "Deep cleansing face wash",
      benefits: "Removes dirt, Refreshing",
      usage: "Use twice daily",
      warnings: "Avoid eyes"
    }
  },
  "CARE002": {
    en: {
      shortDesc: "Moisturizing body wash",
      description: "Moisturizing body wash",
      benefits: "Hydrates skin, Pleasant scent",
      usage: "Use during shower",
      warnings: "For external use"
    },
    hi: {
      shortDesc: "Moisturizing body wash",
      description: "Moisturizing body wash",
      benefits: "Hydrates skin, Pleasant scent",
      usage: "Use during shower",
      warnings: "For external use"
    },
    ta: {
      shortDesc: "Moisturizing body wash",
      description: "Moisturizing body wash",
      benefits: "Hydrates skin, Pleasant scent",
      usage: "Use during shower",
      warnings: "For external use"
    },
    te: {
      shortDesc: "Moisturizing body wash",
      description: "Moisturizing body wash",
      benefits: "Hydrates skin, Pleasant scent",
      usage: "Use during shower",
      warnings: "For external use"
    },
    bn: {
      shortDesc: "Moisturizing body wash",
      description: "Moisturizing body wash",
      benefits: "Hydrates skin, Pleasant scent",
      usage: "Use during shower",
      warnings: "For external use"
    },
    mr: {
      shortDesc: "Moisturizing body wash",
      description: "Moisturizing body wash",
      benefits: "Hydrates skin, Pleasant scent",
      usage: "Use during shower",
      warnings: "For external use"
    },
    gu: {
      shortDesc: "Moisturizing body wash",
      description: "Moisturizing body wash",
      benefits: "Hydrates skin, Pleasant scent",
      usage: "Use during shower",
      warnings: "For external use"
    },
    kn: {
      shortDesc: "Moisturizing body wash",
      description: "Moisturizing body wash",
      benefits: "Hydrates skin, Pleasant scent",
      usage: "Use during shower",
      warnings: "For external use"
    },
    ml: {
      shortDesc: "Moisturizing body wash",
      description: "Moisturizing body wash",
      benefits: "Hydrates skin, Pleasant scent",
      usage: "Use during shower",
      warnings: "For external use"
    },
    pa: {
      shortDesc: "Moisturizing body wash",
      description: "Moisturizing body wash",
      benefits: "Hydrates skin, Pleasant scent",
      usage: "Use during shower",
      warnings: "For external use"
    },
    or: {
      shortDesc: "Moisturizing body wash",
      description: "Moisturizing body wash",
      benefits: "Hydrates skin, Pleasant scent",
      usage: "Use during shower",
      warnings: "For external use"
    },
    as: {
      shortDesc: "Moisturizing body wash",
      description: "Moisturizing body wash",
      benefits: "Hydrates skin, Pleasant scent",
      usage: "Use during shower",
      warnings: "For external use"
    },
    ur: {
      shortDesc: "Moisturizing body wash",
      description: "Moisturizing body wash",
      benefits: "Hydrates skin, Pleasant scent",
      usage: "Use during shower",
      warnings: "For external use"
    }
  },
  "CARE003": {
    en: {
      shortDesc: "Nourishing shampoo",
      description: "Nourishing shampoo",
      benefits: "Strengthens hair, Adds shine",
      usage: "Apply to wet hair",
      warnings: "Rinse thoroughly"
    },
    hi: {
      shortDesc: "Nourishing shampoo",
      description: "Nourishing shampoo",
      benefits: "Strengthens hair, Adds shine",
      usage: "Apply to wet hair",
      warnings: "Rinse thoroughly"
    },
    ta: {
      shortDesc: "Nourishing shampoo",
      description: "Nourishing shampoo",
      benefits: "Strengthens hair, Adds shine",
      usage: "Apply to wet hair",
      warnings: "Rinse thoroughly"
    },
    te: {
      shortDesc: "Nourishing shampoo",
      description: "Nourishing shampoo",
      benefits: "Strengthens hair, Adds shine",
      usage: "Apply to wet hair",
      warnings: "Rinse thoroughly"
    },
    bn: {
      shortDesc: "Nourishing shampoo",
      description: "Nourishing shampoo",
      benefits: "Strengthens hair, Adds shine",
      usage: "Apply to wet hair",
      warnings: "Rinse thoroughly"
    },
    mr: {
      shortDesc: "Nourishing shampoo",
      description: "Nourishing shampoo",
      benefits: "Strengthens hair, Adds shine",
      usage: "Apply to wet hair",
      warnings: "Rinse thoroughly"
    },
    gu: {
      shortDesc: "Nourishing shampoo",
      description: "Nourishing shampoo",
      benefits: "Strengthens hair, Adds shine",
      usage: "Apply to wet hair",
      warnings: "Rinse thoroughly"
    },
    kn: {
      shortDesc: "Nourishing shampoo",
      description: "Nourishing shampoo",
      benefits: "Strengthens hair, Adds shine",
      usage: "Apply to wet hair",
      warnings: "Rinse thoroughly"
    },
    ml: {
      shortDesc: "Nourishing shampoo",
      description: "Nourishing shampoo",
      benefits: "Strengthens hair, Adds shine",
      usage: "Apply to wet hair",
      warnings: "Rinse thoroughly"
    },
    pa: {
      shortDesc: "Nourishing shampoo",
      description: "Nourishing shampoo",
      benefits: "Strengthens hair, Adds shine",
      usage: "Apply to wet hair",
      warnings: "Rinse thoroughly"
    },
    or: {
      shortDesc: "Nourishing shampoo",
      description: "Nourishing shampoo",
      benefits: "Strengthens hair, Adds shine",
      usage: "Apply to wet hair",
      warnings: "Rinse thoroughly"
    },
    as: {
      shortDesc: "Nourishing shampoo",
      description: "Nourishing shampoo",
      benefits: "Strengthens hair, Adds shine",
      usage: "Apply to wet hair",
      warnings: "Rinse thoroughly"
    },
    ur: {
      shortDesc: "Nourishing shampoo",
      description: "Nourishing shampoo",
      benefits: "Strengthens hair, Adds shine",
      usage: "Apply to wet hair",
      warnings: "Rinse thoroughly"
    }
  },
  "CARE004": {
    en: {
      shortDesc: "Smoothing conditioner",
      description: "Smoothing conditioner",
      benefits: "Detangles hair, Soft finish",
      usage: "Apply after shampoo",
      warnings: "Avoid scalp"
    },
    hi: {
      shortDesc: "Smoothing conditioner",
      description: "Smoothing conditioner",
      benefits: "Detangles hair, Soft finish",
      usage: "Apply after shampoo",
      warnings: "Avoid scalp"
    },
    ta: {
      shortDesc: "Smoothing conditioner",
      description: "Smoothing conditioner",
      benefits: "Detangles hair, Soft finish",
      usage: "Apply after shampoo",
      warnings: "Avoid scalp"
    },
    te: {
      shortDesc: "Smoothing conditioner",
      description: "Smoothing conditioner",
      benefits: "Detangles hair, Soft finish",
      usage: "Apply after shampoo",
      warnings: "Avoid scalp"
    },
    bn: {
      shortDesc: "Smoothing conditioner",
      description: "Smoothing conditioner",
      benefits: "Detangles hair, Soft finish",
      usage: "Apply after shampoo",
      warnings: "Avoid scalp"
    },
    mr: {
      shortDesc: "Smoothing conditioner",
      description: "Smoothing conditioner",
      benefits: "Detangles hair, Soft finish",
      usage: "Apply after shampoo",
      warnings: "Avoid scalp"
    },
    gu: {
      shortDesc: "Smoothing conditioner",
      description: "Smoothing conditioner",
      benefits: "Detangles hair, Soft finish",
      usage: "Apply after shampoo",
      warnings: "Avoid scalp"
    },
    kn: {
      shortDesc: "Smoothing conditioner",
      description: "Smoothing conditioner",
      benefits: "Detangles hair, Soft finish",
      usage: "Apply after shampoo",
      warnings: "Avoid scalp"
    },
    ml: {
      shortDesc: "Smoothing conditioner",
      description: "Smoothing conditioner",
      benefits: "Detangles hair, Soft finish",
      usage: "Apply after shampoo",
      warnings: "Avoid scalp"
    },
    pa: {
      shortDesc: "Smoothing conditioner",
      description: "Smoothing conditioner",
      benefits: "Detangles hair, Soft finish",
      usage: "Apply after shampoo",
      warnings: "Avoid scalp"
    },
    or: {
      shortDesc: "Smoothing conditioner",
      description: "Smoothing conditioner",
      benefits: "Detangles hair, Soft finish",
      usage: "Apply after shampoo",
      warnings: "Avoid scalp"
    },
    as: {
      shortDesc: "Smoothing conditioner",
      description: "Smoothing conditioner",
      benefits: "Detangles hair, Soft finish",
      usage: "Apply after shampoo",
      warnings: "Avoid scalp"
    },
    ur: {
      shortDesc: "Smoothing conditioner",
      description: "Smoothing conditioner",
      benefits: "Detangles hair, Soft finish",
      usage: "Apply after shampoo",
      warnings: "Avoid scalp"
    }
  },
  "CARE005": {
    en: {
      shortDesc: "Whitening toothpaste",
      description: "Whitening toothpaste",
      benefits: "Whitens teeth, Fresh breath",
      usage: "Brush twice daily",
      warnings: "Not for children under 6"
    },
    hi: {
      shortDesc: "Whitening toothpaste",
      description: "Whitening toothpaste",
      benefits: "Whitens teeth, Fresh breath",
      usage: "Brush twice daily",
      warnings: "Not for children under 6"
    },
    ta: {
      shortDesc: "Whitening toothpaste",
      description: "Whitening toothpaste",
      benefits: "Whitens teeth, Fresh breath",
      usage: "Brush twice daily",
      warnings: "Not for children under 6"
    },
    te: {
      shortDesc: "Whitening toothpaste",
      description: "Whitening toothpaste",
      benefits: "Whitens teeth, Fresh breath",
      usage: "Brush twice daily",
      warnings: "Not for children under 6"
    },
    bn: {
      shortDesc: "Whitening toothpaste",
      description: "Whitening toothpaste",
      benefits: "Whitens teeth, Fresh breath",
      usage: "Brush twice daily",
      warnings: "Not for children under 6"
    },
    mr: {
      shortDesc: "Whitening toothpaste",
      description: "Whitening toothpaste",
      benefits: "Whitens teeth, Fresh breath",
      usage: "Brush twice daily",
      warnings: "Not for children under 6"
    },
    gu: {
      shortDesc: "Whitening toothpaste",
      description: "Whitening toothpaste",
      benefits: "Whitens teeth, Fresh breath",
      usage: "Brush twice daily",
      warnings: "Not for children under 6"
    },
    kn: {
      shortDesc: "Whitening toothpaste",
      description: "Whitening toothpaste",
      benefits: "Whitens teeth, Fresh breath",
      usage: "Brush twice daily",
      warnings: "Not for children under 6"
    },
    ml: {
      shortDesc: "Whitening toothpaste",
      description: "Whitening toothpaste",
      benefits: "Whitens teeth, Fresh breath",
      usage: "Brush twice daily",
      warnings: "Not for children under 6"
    },
    pa: {
      shortDesc: "Whitening toothpaste",
      description: "Whitening toothpaste",
      benefits: "Whitens teeth, Fresh breath",
      usage: "Brush twice daily",
      warnings: "Not for children under 6"
    },
    or: {
      shortDesc: "Whitening toothpaste",
      description: "Whitening toothpaste",
      benefits: "Whitens teeth, Fresh breath",
      usage: "Brush twice daily",
      warnings: "Not for children under 6"
    },
    as: {
      shortDesc: "Whitening toothpaste",
      description: "Whitening toothpaste",
      benefits: "Whitens teeth, Fresh breath",
      usage: "Brush twice daily",
      warnings: "Not for children under 6"
    },
    ur: {
      shortDesc: "Whitening toothpaste",
      description: "Whitening toothpaste",
      benefits: "Whitens teeth, Fresh breath",
      usage: "Brush twice daily",
      warnings: "Not for children under 6"
    }
  },
  "CARE006": {
    en: {
      shortDesc: "Daily face moisturizer",
      description: "Daily face moisturizer",
      benefits: "24-hour hydration, Non-greasy",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    hi: {
      shortDesc: "Daily face moisturizer",
      description: "Daily face moisturizer",
      benefits: "24-hour hydration, Non-greasy",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    ta: {
      shortDesc: "Daily face moisturizer",
      description: "Daily face moisturizer",
      benefits: "24-hour hydration, Non-greasy",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    te: {
      shortDesc: "Daily face moisturizer",
      description: "Daily face moisturizer",
      benefits: "24-hour hydration, Non-greasy",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    bn: {
      shortDesc: "Daily face moisturizer",
      description: "Daily face moisturizer",
      benefits: "24-hour hydration, Non-greasy",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    mr: {
      shortDesc: "Daily face moisturizer",
      description: "Daily face moisturizer",
      benefits: "24-hour hydration, Non-greasy",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    gu: {
      shortDesc: "Daily face moisturizer",
      description: "Daily face moisturizer",
      benefits: "24-hour hydration, Non-greasy",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    kn: {
      shortDesc: "Daily face moisturizer",
      description: "Daily face moisturizer",
      benefits: "24-hour hydration, Non-greasy",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    ml: {
      shortDesc: "Daily face moisturizer",
      description: "Daily face moisturizer",
      benefits: "24-hour hydration, Non-greasy",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    pa: {
      shortDesc: "Daily face moisturizer",
      description: "Daily face moisturizer",
      benefits: "24-hour hydration, Non-greasy",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    or: {
      shortDesc: "Daily face moisturizer",
      description: "Daily face moisturizer",
      benefits: "24-hour hydration, Non-greasy",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    as: {
      shortDesc: "Daily face moisturizer",
      description: "Daily face moisturizer",
      benefits: "24-hour hydration, Non-greasy",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    ur: {
      shortDesc: "Daily face moisturizer",
      description: "Daily face moisturizer",
      benefits: "24-hour hydration, Non-greasy",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    }
  },
  "CARE007": {
    en: {
      shortDesc: "Broad spectrum sunscreen",
      description: "Broad spectrum sunscreen",
      benefits: "UVA/UVB protection, Water resistant",
      usage: "Apply before sun exposure",
      warnings: "Reapply every 2 hours"
    },
    hi: {
      shortDesc: "Broad spectrum sunscreen",
      description: "Broad spectrum sunscreen",
      benefits: "UVA/UVB protection, Water resistant",
      usage: "Apply before sun exposure",
      warnings: "Reapply every 2 hours"
    },
    ta: {
      shortDesc: "Broad spectrum sunscreen",
      description: "Broad spectrum sunscreen",
      benefits: "UVA/UVB protection, Water resistant",
      usage: "Apply before sun exposure",
      warnings: "Reapply every 2 hours"
    },
    te: {
      shortDesc: "Broad spectrum sunscreen",
      description: "Broad spectrum sunscreen",
      benefits: "UVA/UVB protection, Water resistant",
      usage: "Apply before sun exposure",
      warnings: "Reapply every 2 hours"
    },
    bn: {
      shortDesc: "Broad spectrum sunscreen",
      description: "Broad spectrum sunscreen",
      benefits: "UVA/UVB protection, Water resistant",
      usage: "Apply before sun exposure",
      warnings: "Reapply every 2 hours"
    },
    mr: {
      shortDesc: "Broad spectrum sunscreen",
      description: "Broad spectrum sunscreen",
      benefits: "UVA/UVB protection, Water resistant",
      usage: "Apply before sun exposure",
      warnings: "Reapply every 2 hours"
    },
    gu: {
      shortDesc: "Broad spectrum sunscreen",
      description: "Broad spectrum sunscreen",
      benefits: "UVA/UVB protection, Water resistant",
      usage: "Apply before sun exposure",
      warnings: "Reapply every 2 hours"
    },
    kn: {
      shortDesc: "Broad spectrum sunscreen",
      description: "Broad spectrum sunscreen",
      benefits: "UVA/UVB protection, Water resistant",
      usage: "Apply before sun exposure",
      warnings: "Reapply every 2 hours"
    },
    ml: {
      shortDesc: "Broad spectrum sunscreen",
      description: "Broad spectrum sunscreen",
      benefits: "UVA/UVB protection, Water resistant",
      usage: "Apply before sun exposure",
      warnings: "Reapply every 2 hours"
    },
    pa: {
      shortDesc: "Broad spectrum sunscreen",
      description: "Broad spectrum sunscreen",
      benefits: "UVA/UVB protection, Water resistant",
      usage: "Apply before sun exposure",
      warnings: "Reapply every 2 hours"
    },
    or: {
      shortDesc: "Broad spectrum sunscreen",
      description: "Broad spectrum sunscreen",
      benefits: "UVA/UVB protection, Water resistant",
      usage: "Apply before sun exposure",
      warnings: "Reapply every 2 hours"
    },
    as: {
      shortDesc: "Broad spectrum sunscreen",
      description: "Broad spectrum sunscreen",
      benefits: "UVA/UVB protection, Water resistant",
      usage: "Apply before sun exposure",
      warnings: "Reapply every 2 hours"
    },
    ur: {
      shortDesc: "Broad spectrum sunscreen",
      description: "Broad spectrum sunscreen",
      benefits: "UVA/UVB protection, Water resistant",
      usage: "Apply before sun exposure",
      warnings: "Reapply every 2 hours"
    }
  },
  "CARE008": {
    en: {
      shortDesc: "Vitamin C serum",
      description: "Vitamin C serum",
      benefits: "Brightens skin, Anti-aging",
      usage: "Apply before moisturizer",
      warnings: "Use sunscreen"
    },
    hi: {
      shortDesc: "Vitamin C serum",
      description: "Vitamin C serum",
      benefits: "Brightens skin, Anti-aging",
      usage: "Apply before moisturizer",
      warnings: "Use sunscreen"
    },
    ta: {
      shortDesc: "Vitamin C serum",
      description: "Vitamin C serum",
      benefits: "Brightens skin, Anti-aging",
      usage: "Apply before moisturizer",
      warnings: "Use sunscreen"
    },
    te: {
      shortDesc: "Vitamin C serum",
      description: "Vitamin C serum",
      benefits: "Brightens skin, Anti-aging",
      usage: "Apply before moisturizer",
      warnings: "Use sunscreen"
    },
    bn: {
      shortDesc: "Vitamin C serum",
      description: "Vitamin C serum",
      benefits: "Brightens skin, Anti-aging",
      usage: "Apply before moisturizer",
      warnings: "Use sunscreen"
    },
    mr: {
      shortDesc: "Vitamin C serum",
      description: "Vitamin C serum",
      benefits: "Brightens skin, Anti-aging",
      usage: "Apply before moisturizer",
      warnings: "Use sunscreen"
    },
    gu: {
      shortDesc: "Vitamin C serum",
      description: "Vitamin C serum",
      benefits: "Brightens skin, Anti-aging",
      usage: "Apply before moisturizer",
      warnings: "Use sunscreen"
    },
    kn: {
      shortDesc: "Vitamin C serum",
      description: "Vitamin C serum",
      benefits: "Brightens skin, Anti-aging",
      usage: "Apply before moisturizer",
      warnings: "Use sunscreen"
    },
    ml: {
      shortDesc: "Vitamin C serum",
      description: "Vitamin C serum",
      benefits: "Brightens skin, Anti-aging",
      usage: "Apply before moisturizer",
      warnings: "Use sunscreen"
    },
    pa: {
      shortDesc: "Vitamin C serum",
      description: "Vitamin C serum",
      benefits: "Brightens skin, Anti-aging",
      usage: "Apply before moisturizer",
      warnings: "Use sunscreen"
    },
    or: {
      shortDesc: "Vitamin C serum",
      description: "Vitamin C serum",
      benefits: "Brightens skin, Anti-aging",
      usage: "Apply before moisturizer",
      warnings: "Use sunscreen"
    },
    as: {
      shortDesc: "Vitamin C serum",
      description: "Vitamin C serum",
      benefits: "Brightens skin, Anti-aging",
      usage: "Apply before moisturizer",
      warnings: "Use sunscreen"
    },
    ur: {
      shortDesc: "Vitamin C serum",
      description: "Vitamin C serum",
      benefits: "Brightens skin, Anti-aging",
      usage: "Apply before moisturizer",
      warnings: "Use sunscreen"
    }
  },
  "CARE009": {
    en: {
      shortDesc: "Balancing toner",
      description: "Balancing toner",
      benefits: "Tightens pores, Refreshes skin",
      usage: "Apply after cleansing",
      warnings: "Avoid eyes"
    },
    hi: {
      shortDesc: "Balancing toner",
      description: "Balancing toner",
      benefits: "Tightens pores, Refreshes skin",
      usage: "Apply after cleansing",
      warnings: "Avoid eyes"
    },
    ta: {
      shortDesc: "Balancing toner",
      description: "Balancing toner",
      benefits: "Tightens pores, Refreshes skin",
      usage: "Apply after cleansing",
      warnings: "Avoid eyes"
    },
    te: {
      shortDesc: "Balancing toner",
      description: "Balancing toner",
      benefits: "Tightens pores, Refreshes skin",
      usage: "Apply after cleansing",
      warnings: "Avoid eyes"
    },
    bn: {
      shortDesc: "Balancing toner",
      description: "Balancing toner",
      benefits: "Tightens pores, Refreshes skin",
      usage: "Apply after cleansing",
      warnings: "Avoid eyes"
    },
    mr: {
      shortDesc: "Balancing toner",
      description: "Balancing toner",
      benefits: "Tightens pores, Refreshes skin",
      usage: "Apply after cleansing",
      warnings: "Avoid eyes"
    },
    gu: {
      shortDesc: "Balancing toner",
      description: "Balancing toner",
      benefits: "Tightens pores, Refreshes skin",
      usage: "Apply after cleansing",
      warnings: "Avoid eyes"
    },
    kn: {
      shortDesc: "Balancing toner",
      description: "Balancing toner",
      benefits: "Tightens pores, Refreshes skin",
      usage: "Apply after cleansing",
      warnings: "Avoid eyes"
    },
    ml: {
      shortDesc: "Balancing toner",
      description: "Balancing toner",
      benefits: "Tightens pores, Refreshes skin",
      usage: "Apply after cleansing",
      warnings: "Avoid eyes"
    },
    pa: {
      shortDesc: "Balancing toner",
      description: "Balancing toner",
      benefits: "Tightens pores, Refreshes skin",
      usage: "Apply after cleansing",
      warnings: "Avoid eyes"
    },
    or: {
      shortDesc: "Balancing toner",
      description: "Balancing toner",
      benefits: "Tightens pores, Refreshes skin",
      usage: "Apply after cleansing",
      warnings: "Avoid eyes"
    },
    as: {
      shortDesc: "Balancing toner",
      description: "Balancing toner",
      benefits: "Tightens pores, Refreshes skin",
      usage: "Apply after cleansing",
      warnings: "Avoid eyes"
    },
    ur: {
      shortDesc: "Balancing toner",
      description: "Balancing toner",
      benefits: "Tightens pores, Refreshes skin",
      usage: "Apply after cleansing",
      warnings: "Avoid eyes"
    }
  },
  "CARE010": {
    en: {
      shortDesc: "Overnight repair cream",
      description: "Overnight repair cream",
      benefits: "Deep nourishment, Anti-aging",
      usage: "Apply before bed",
      warnings: "For external use"
    },
    hi: {
      shortDesc: "Overnight repair cream",
      description: "Overnight repair cream",
      benefits: "Deep nourishment, Anti-aging",
      usage: "Apply before bed",
      warnings: "For external use"
    },
    ta: {
      shortDesc: "Overnight repair cream",
      description: "Overnight repair cream",
      benefits: "Deep nourishment, Anti-aging",
      usage: "Apply before bed",
      warnings: "For external use"
    },
    te: {
      shortDesc: "Overnight repair cream",
      description: "Overnight repair cream",
      benefits: "Deep nourishment, Anti-aging",
      usage: "Apply before bed",
      warnings: "For external use"
    },
    bn: {
      shortDesc: "Overnight repair cream",
      description: "Overnight repair cream",
      benefits: "Deep nourishment, Anti-aging",
      usage: "Apply before bed",
      warnings: "For external use"
    },
    mr: {
      shortDesc: "Overnight repair cream",
      description: "Overnight repair cream",
      benefits: "Deep nourishment, Anti-aging",
      usage: "Apply before bed",
      warnings: "For external use"
    },
    gu: {
      shortDesc: "Overnight repair cream",
      description: "Overnight repair cream",
      benefits: "Deep nourishment, Anti-aging",
      usage: "Apply before bed",
      warnings: "For external use"
    },
    kn: {
      shortDesc: "Overnight repair cream",
      description: "Overnight repair cream",
      benefits: "Deep nourishment, Anti-aging",
      usage: "Apply before bed",
      warnings: "For external use"
    },
    ml: {
      shortDesc: "Overnight repair cream",
      description: "Overnight repair cream",
      benefits: "Deep nourishment, Anti-aging",
      usage: "Apply before bed",
      warnings: "For external use"
    },
    pa: {
      shortDesc: "Overnight repair cream",
      description: "Overnight repair cream",
      benefits: "Deep nourishment, Anti-aging",
      usage: "Apply before bed",
      warnings: "For external use"
    },
    or: {
      shortDesc: "Overnight repair cream",
      description: "Overnight repair cream",
      benefits: "Deep nourishment, Anti-aging",
      usage: "Apply before bed",
      warnings: "For external use"
    },
    as: {
      shortDesc: "Overnight repair cream",
      description: "Overnight repair cream",
      benefits: "Deep nourishment, Anti-aging",
      usage: "Apply before bed",
      warnings: "For external use"
    },
    ur: {
      shortDesc: "Overnight repair cream",
      description: "Overnight repair cream",
      benefits: "Deep nourishment, Anti-aging",
      usage: "Apply before bed",
      warnings: "For external use"
    }
  },
  "CARE011": {
    en: {
      shortDesc: "24-hour protection deodorant",
      description: "24-hour protection deodorant",
      benefits: "Long-lasting, No white marks",
      usage: "Apply to underarms",
      warnings: "Avoid broken skin"
    },
    hi: {
      shortDesc: "24-hour protection deodorant",
      description: "24-hour protection deodorant",
      benefits: "Long-lasting, No white marks",
      usage: "Apply to underarms",
      warnings: "Avoid broken skin"
    },
    ta: {
      shortDesc: "24-hour protection deodorant",
      description: "24-hour protection deodorant",
      benefits: "Long-lasting, No white marks",
      usage: "Apply to underarms",
      warnings: "Avoid broken skin"
    },
    te: {
      shortDesc: "24-hour protection deodorant",
      description: "24-hour protection deodorant",
      benefits: "Long-lasting, No white marks",
      usage: "Apply to underarms",
      warnings: "Avoid broken skin"
    },
    bn: {
      shortDesc: "24-hour protection deodorant",
      description: "24-hour protection deodorant",
      benefits: "Long-lasting, No white marks",
      usage: "Apply to underarms",
      warnings: "Avoid broken skin"
    },
    mr: {
      shortDesc: "24-hour protection deodorant",
      description: "24-hour protection deodorant",
      benefits: "Long-lasting, No white marks",
      usage: "Apply to underarms",
      warnings: "Avoid broken skin"
    },
    gu: {
      shortDesc: "24-hour protection deodorant",
      description: "24-hour protection deodorant",
      benefits: "Long-lasting, No white marks",
      usage: "Apply to underarms",
      warnings: "Avoid broken skin"
    },
    kn: {
      shortDesc: "24-hour protection deodorant",
      description: "24-hour protection deodorant",
      benefits: "Long-lasting, No white marks",
      usage: "Apply to underarms",
      warnings: "Avoid broken skin"
    },
    ml: {
      shortDesc: "24-hour protection deodorant",
      description: "24-hour protection deodorant",
      benefits: "Long-lasting, No white marks",
      usage: "Apply to underarms",
      warnings: "Avoid broken skin"
    },
    pa: {
      shortDesc: "24-hour protection deodorant",
      description: "24-hour protection deodorant",
      benefits: "Long-lasting, No white marks",
      usage: "Apply to underarms",
      warnings: "Avoid broken skin"
    },
    or: {
      shortDesc: "24-hour protection deodorant",
      description: "24-hour protection deodorant",
      benefits: "Long-lasting, No white marks",
      usage: "Apply to underarms",
      warnings: "Avoid broken skin"
    },
    as: {
      shortDesc: "24-hour protection deodorant",
      description: "24-hour protection deodorant",
      benefits: "Long-lasting, No white marks",
      usage: "Apply to underarms",
      warnings: "Avoid broken skin"
    },
    ur: {
      shortDesc: "24-hour protection deodorant",
      description: "24-hour protection deodorant",
      benefits: "Long-lasting, No white marks",
      usage: "Apply to underarms",
      warnings: "Avoid broken skin"
    }
  },
  "CARE012": {
    en: {
      shortDesc: "Refreshing body spray",
      description: "Refreshing body spray",
      benefits: "Fresh scent, Quick-dry",
      usage: "Spray on body",
      warnings: "Flammable"
    },
    hi: {
      shortDesc: "Refreshing body spray",
      description: "Refreshing body spray",
      benefits: "Fresh scent, Quick-dry",
      usage: "Spray on body",
      warnings: "Flammable"
    },
    ta: {
      shortDesc: "Refreshing body spray",
      description: "Refreshing body spray",
      benefits: "Fresh scent, Quick-dry",
      usage: "Spray on body",
      warnings: "Flammable"
    },
    te: {
      shortDesc: "Refreshing body spray",
      description: "Refreshing body spray",
      benefits: "Fresh scent, Quick-dry",
      usage: "Spray on body",
      warnings: "Flammable"
    },
    bn: {
      shortDesc: "Refreshing body spray",
      description: "Refreshing body spray",
      benefits: "Fresh scent, Quick-dry",
      usage: "Spray on body",
      warnings: "Flammable"
    },
    mr: {
      shortDesc: "Refreshing body spray",
      description: "Refreshing body spray",
      benefits: "Fresh scent, Quick-dry",
      usage: "Spray on body",
      warnings: "Flammable"
    },
    gu: {
      shortDesc: "Refreshing body spray",
      description: "Refreshing body spray",
      benefits: "Fresh scent, Quick-dry",
      usage: "Spray on body",
      warnings: "Flammable"
    },
    kn: {
      shortDesc: "Refreshing body spray",
      description: "Refreshing body spray",
      benefits: "Fresh scent, Quick-dry",
      usage: "Spray on body",
      warnings: "Flammable"
    },
    ml: {
      shortDesc: "Refreshing body spray",
      description: "Refreshing body spray",
      benefits: "Fresh scent, Quick-dry",
      usage: "Spray on body",
      warnings: "Flammable"
    },
    pa: {
      shortDesc: "Refreshing body spray",
      description: "Refreshing body spray",
      benefits: "Fresh scent, Quick-dry",
      usage: "Spray on body",
      warnings: "Flammable"
    },
    or: {
      shortDesc: "Refreshing body spray",
      description: "Refreshing body spray",
      benefits: "Fresh scent, Quick-dry",
      usage: "Spray on body",
      warnings: "Flammable"
    },
    as: {
      shortDesc: "Refreshing body spray",
      description: "Refreshing body spray",
      benefits: "Fresh scent, Quick-dry",
      usage: "Spray on body",
      warnings: "Flammable"
    },
    ur: {
      shortDesc: "Refreshing body spray",
      description: "Refreshing body spray",
      benefits: "Fresh scent, Quick-dry",
      usage: "Spray on body",
      warnings: "Flammable"
    }
  },
  "CARE013": {
    en: {
      shortDesc: "Antibacterial mouthwash",
      description: "Antibacterial mouthwash",
      benefits: "Kills germs, Fresh breath",
      usage: "Rinse for 30 seconds",
      warnings: "Do not swallow"
    },
    hi: {
      shortDesc: "Antibacterial mouthwash",
      description: "Antibacterial mouthwash",
      benefits: "Kills germs, Fresh breath",
      usage: "Rinse for 30 seconds",
      warnings: "Do not swallow"
    },
    ta: {
      shortDesc: "Antibacterial mouthwash",
      description: "Antibacterial mouthwash",
      benefits: "Kills germs, Fresh breath",
      usage: "Rinse for 30 seconds",
      warnings: "Do not swallow"
    },
    te: {
      shortDesc: "Antibacterial mouthwash",
      description: "Antibacterial mouthwash",
      benefits: "Kills germs, Fresh breath",
      usage: "Rinse for 30 seconds",
      warnings: "Do not swallow"
    },
    bn: {
      shortDesc: "Antibacterial mouthwash",
      description: "Antibacterial mouthwash",
      benefits: "Kills germs, Fresh breath",
      usage: "Rinse for 30 seconds",
      warnings: "Do not swallow"
    },
    mr: {
      shortDesc: "Antibacterial mouthwash",
      description: "Antibacterial mouthwash",
      benefits: "Kills germs, Fresh breath",
      usage: "Rinse for 30 seconds",
      warnings: "Do not swallow"
    },
    gu: {
      shortDesc: "Antibacterial mouthwash",
      description: "Antibacterial mouthwash",
      benefits: "Kills germs, Fresh breath",
      usage: "Rinse for 30 seconds",
      warnings: "Do not swallow"
    },
    kn: {
      shortDesc: "Antibacterial mouthwash",
      description: "Antibacterial mouthwash",
      benefits: "Kills germs, Fresh breath",
      usage: "Rinse for 30 seconds",
      warnings: "Do not swallow"
    },
    ml: {
      shortDesc: "Antibacterial mouthwash",
      description: "Antibacterial mouthwash",
      benefits: "Kills germs, Fresh breath",
      usage: "Rinse for 30 seconds",
      warnings: "Do not swallow"
    },
    pa: {
      shortDesc: "Antibacterial mouthwash",
      description: "Antibacterial mouthwash",
      benefits: "Kills germs, Fresh breath",
      usage: "Rinse for 30 seconds",
      warnings: "Do not swallow"
    },
    or: {
      shortDesc: "Antibacterial mouthwash",
      description: "Antibacterial mouthwash",
      benefits: "Kills germs, Fresh breath",
      usage: "Rinse for 30 seconds",
      warnings: "Do not swallow"
    },
    as: {
      shortDesc: "Antibacterial mouthwash",
      description: "Antibacterial mouthwash",
      benefits: "Kills germs, Fresh breath",
      usage: "Rinse for 30 seconds",
      warnings: "Do not swallow"
    },
    ur: {
      shortDesc: "Antibacterial mouthwash",
      description: "Antibacterial mouthwash",
      benefits: "Kills germs, Fresh breath",
      usage: "Rinse for 30 seconds",
      warnings: "Do not swallow"
    }
  },
  "CARE014": {
    en: {
      shortDesc: "Antibacterial hand wash",
      description: "Antibacterial hand wash",
      benefits: "Kills 99.9% germs, Moisturizing",
      usage: "Wash hands thoroughly",
      warnings: "Avoid eyes"
    },
    hi: {
      shortDesc: "Antibacterial hand wash",
      description: "Antibacterial hand wash",
      benefits: "Kills 99.9% germs, Moisturizing",
      usage: "Wash hands thoroughly",
      warnings: "Avoid eyes"
    },
    ta: {
      shortDesc: "Antibacterial hand wash",
      description: "Antibacterial hand wash",
      benefits: "Kills 99.9% germs, Moisturizing",
      usage: "Wash hands thoroughly",
      warnings: "Avoid eyes"
    },
    te: {
      shortDesc: "Antibacterial hand wash",
      description: "Antibacterial hand wash",
      benefits: "Kills 99.9% germs, Moisturizing",
      usage: "Wash hands thoroughly",
      warnings: "Avoid eyes"
    },
    bn: {
      shortDesc: "Antibacterial hand wash",
      description: "Antibacterial hand wash",
      benefits: "Kills 99.9% germs, Moisturizing",
      usage: "Wash hands thoroughly",
      warnings: "Avoid eyes"
    },
    mr: {
      shortDesc: "Antibacterial hand wash",
      description: "Antibacterial hand wash",
      benefits: "Kills 99.9% germs, Moisturizing",
      usage: "Wash hands thoroughly",
      warnings: "Avoid eyes"
    },
    gu: {
      shortDesc: "Antibacterial hand wash",
      description: "Antibacterial hand wash",
      benefits: "Kills 99.9% germs, Moisturizing",
      usage: "Wash hands thoroughly",
      warnings: "Avoid eyes"
    },
    kn: {
      shortDesc: "Antibacterial hand wash",
      description: "Antibacterial hand wash",
      benefits: "Kills 99.9% germs, Moisturizing",
      usage: "Wash hands thoroughly",
      warnings: "Avoid eyes"
    },
    ml: {
      shortDesc: "Antibacterial hand wash",
      description: "Antibacterial hand wash",
      benefits: "Kills 99.9% germs, Moisturizing",
      usage: "Wash hands thoroughly",
      warnings: "Avoid eyes"
    },
    pa: {
      shortDesc: "Antibacterial hand wash",
      description: "Antibacterial hand wash",
      benefits: "Kills 99.9% germs, Moisturizing",
      usage: "Wash hands thoroughly",
      warnings: "Avoid eyes"
    },
    or: {
      shortDesc: "Antibacterial hand wash",
      description: "Antibacterial hand wash",
      benefits: "Kills 99.9% germs, Moisturizing",
      usage: "Wash hands thoroughly",
      warnings: "Avoid eyes"
    },
    as: {
      shortDesc: "Antibacterial hand wash",
      description: "Antibacterial hand wash",
      benefits: "Kills 99.9% germs, Moisturizing",
      usage: "Wash hands thoroughly",
      warnings: "Avoid eyes"
    },
    ur: {
      shortDesc: "Antibacterial hand wash",
      description: "Antibacterial hand wash",
      benefits: "Kills 99.9% germs, Moisturizing",
      usage: "Wash hands thoroughly",
      warnings: "Avoid eyes"
    }
  },
  "CARE015": {
    en: {
      shortDesc: "Moisturizing foot cream",
      description: "Moisturizing foot cream",
      benefits: "Softens feet, Repairs cracks",
      usage: "Apply to clean feet",
      warnings: "For external use"
    },
    hi: {
      shortDesc: "Moisturizing foot cream",
      description: "Moisturizing foot cream",
      benefits: "Softens feet, Repairs cracks",
      usage: "Apply to clean feet",
      warnings: "For external use"
    },
    ta: {
      shortDesc: "Moisturizing foot cream",
      description: "Moisturizing foot cream",
      benefits: "Softens feet, Repairs cracks",
      usage: "Apply to clean feet",
      warnings: "For external use"
    },
    te: {
      shortDesc: "Moisturizing foot cream",
      description: "Moisturizing foot cream",
      benefits: "Softens feet, Repairs cracks",
      usage: "Apply to clean feet",
      warnings: "For external use"
    },
    bn: {
      shortDesc: "Moisturizing foot cream",
      description: "Moisturizing foot cream",
      benefits: "Softens feet, Repairs cracks",
      usage: "Apply to clean feet",
      warnings: "For external use"
    },
    mr: {
      shortDesc: "Moisturizing foot cream",
      description: "Moisturizing foot cream",
      benefits: "Softens feet, Repairs cracks",
      usage: "Apply to clean feet",
      warnings: "For external use"
    },
    gu: {
      shortDesc: "Moisturizing foot cream",
      description: "Moisturizing foot cream",
      benefits: "Softens feet, Repairs cracks",
      usage: "Apply to clean feet",
      warnings: "For external use"
    },
    kn: {
      shortDesc: "Moisturizing foot cream",
      description: "Moisturizing foot cream",
      benefits: "Softens feet, Repairs cracks",
      usage: "Apply to clean feet",
      warnings: "For external use"
    },
    ml: {
      shortDesc: "Moisturizing foot cream",
      description: "Moisturizing foot cream",
      benefits: "Softens feet, Repairs cracks",
      usage: "Apply to clean feet",
      warnings: "For external use"
    },
    pa: {
      shortDesc: "Moisturizing foot cream",
      description: "Moisturizing foot cream",
      benefits: "Softens feet, Repairs cracks",
      usage: "Apply to clean feet",
      warnings: "For external use"
    },
    or: {
      shortDesc: "Moisturizing foot cream",
      description: "Moisturizing foot cream",
      benefits: "Softens feet, Repairs cracks",
      usage: "Apply to clean feet",
      warnings: "For external use"
    },
    as: {
      shortDesc: "Moisturizing foot cream",
      description: "Moisturizing foot cream",
      benefits: "Softens feet, Repairs cracks",
      usage: "Apply to clean feet",
      warnings: "For external use"
    },
    ur: {
      shortDesc: "Moisturizing foot cream",
      description: "Moisturizing foot cream",
      benefits: "Softens feet, Repairs cracks",
      usage: "Apply to clean feet",
      warnings: "For external use"
    }
  },
  "CARE016": {
    en: {
      shortDesc: "Gentle bathing soap",
      description: "Gentle bathing soap",
      benefits: "Moisturizing, pH balanced",
      usage: "Use daily",
      warnings: "For external use"
    },
    hi: {
      shortDesc: "Gentle bathing soap",
      description: "Gentle bathing soap",
      benefits: "Moisturizing, pH balanced",
      usage: "Use daily",
      warnings: "For external use"
    },
    ta: {
      shortDesc: "Gentle bathing soap",
      description: "Gentle bathing soap",
      benefits: "Moisturizing, pH balanced",
      usage: "Use daily",
      warnings: "For external use"
    },
    te: {
      shortDesc: "Gentle bathing soap",
      description: "Gentle bathing soap",
      benefits: "Moisturizing, pH balanced",
      usage: "Use daily",
      warnings: "For external use"
    },
    bn: {
      shortDesc: "Gentle bathing soap",
      description: "Gentle bathing soap",
      benefits: "Moisturizing, pH balanced",
      usage: "Use daily",
      warnings: "For external use"
    },
    mr: {
      shortDesc: "Gentle bathing soap",
      description: "Gentle bathing soap",
      benefits: "Moisturizing, pH balanced",
      usage: "Use daily",
      warnings: "For external use"
    },
    gu: {
      shortDesc: "Gentle bathing soap",
      description: "Gentle bathing soap",
      benefits: "Moisturizing, pH balanced",
      usage: "Use daily",
      warnings: "For external use"
    },
    kn: {
      shortDesc: "Gentle bathing soap",
      description: "Gentle bathing soap",
      benefits: "Moisturizing, pH balanced",
      usage: "Use daily",
      warnings: "For external use"
    },
    ml: {
      shortDesc: "Gentle bathing soap",
      description: "Gentle bathing soap",
      benefits: "Moisturizing, pH balanced",
      usage: "Use daily",
      warnings: "For external use"
    },
    pa: {
      shortDesc: "Gentle bathing soap",
      description: "Gentle bathing soap",
      benefits: "Moisturizing, pH balanced",
      usage: "Use daily",
      warnings: "For external use"
    },
    or: {
      shortDesc: "Gentle bathing soap",
      description: "Gentle bathing soap",
      benefits: "Moisturizing, pH balanced",
      usage: "Use daily",
      warnings: "For external use"
    },
    as: {
      shortDesc: "Gentle bathing soap",
      description: "Gentle bathing soap",
      benefits: "Moisturizing, pH balanced",
      usage: "Use daily",
      warnings: "For external use"
    },
    ur: {
      shortDesc: "Gentle bathing soap",
      description: "Gentle bathing soap",
      benefits: "Moisturizing, pH balanced",
      usage: "Use daily",
      warnings: "For external use"
    }
  },
  "CARE017": {
    en: {
      shortDesc: "Body lotion",
      description: "Body lotion",
      benefits: "Hydrates skin, Non-sticky",
      usage: "Apply after bath",
      warnings: "Patch test first"
    },
    hi: {
      shortDesc: "Body lotion",
      description: "Body lotion",
      benefits: "Hydrates skin, Non-sticky",
      usage: "Apply after bath",
      warnings: "Patch test first"
    },
    ta: {
      shortDesc: "Body lotion",
      description: "Body lotion",
      benefits: "Hydrates skin, Non-sticky",
      usage: "Apply after bath",
      warnings: "Patch test first"
    },
    te: {
      shortDesc: "Body lotion",
      description: "Body lotion",
      benefits: "Hydrates skin, Non-sticky",
      usage: "Apply after bath",
      warnings: "Patch test first"
    },
    bn: {
      shortDesc: "Body lotion",
      description: "Body lotion",
      benefits: "Hydrates skin, Non-sticky",
      usage: "Apply after bath",
      warnings: "Patch test first"
    },
    mr: {
      shortDesc: "Body lotion",
      description: "Body lotion",
      benefits: "Hydrates skin, Non-sticky",
      usage: "Apply after bath",
      warnings: "Patch test first"
    },
    gu: {
      shortDesc: "Body lotion",
      description: "Body lotion",
      benefits: "Hydrates skin, Non-sticky",
      usage: "Apply after bath",
      warnings: "Patch test first"
    },
    kn: {
      shortDesc: "Body lotion",
      description: "Body lotion",
      benefits: "Hydrates skin, Non-sticky",
      usage: "Apply after bath",
      warnings: "Patch test first"
    },
    ml: {
      shortDesc: "Body lotion",
      description: "Body lotion",
      benefits: "Hydrates skin, Non-sticky",
      usage: "Apply after bath",
      warnings: "Patch test first"
    },
    pa: {
      shortDesc: "Body lotion",
      description: "Body lotion",
      benefits: "Hydrates skin, Non-sticky",
      usage: "Apply after bath",
      warnings: "Patch test first"
    },
    or: {
      shortDesc: "Body lotion",
      description: "Body lotion",
      benefits: "Hydrates skin, Non-sticky",
      usage: "Apply after bath",
      warnings: "Patch test first"
    },
    as: {
      shortDesc: "Body lotion",
      description: "Body lotion",
      benefits: "Hydrates skin, Non-sticky",
      usage: "Apply after bath",
      warnings: "Patch test first"
    },
    ur: {
      shortDesc: "Body lotion",
      description: "Body lotion",
      benefits: "Hydrates skin, Non-sticky",
      usage: "Apply after bath",
      warnings: "Patch test first"
    }
  },
  "CARE018": {
    en: {
      shortDesc: "Refreshing body talc",
      description: "Refreshing body talc",
      benefits: "Keeps skin dry, Pleasant fragrance",
      usage: "Apply to body",
      warnings: "Avoid inhalation"
    },
    hi: {
      shortDesc: "Refreshing body talc",
      description: "Refreshing body talc",
      benefits: "Keeps skin dry, Pleasant fragrance",
      usage: "Apply to body",
      warnings: "Avoid inhalation"
    },
    ta: {
      shortDesc: "Refreshing body talc",
      description: "Refreshing body talc",
      benefits: "Keeps skin dry, Pleasant fragrance",
      usage: "Apply to body",
      warnings: "Avoid inhalation"
    },
    te: {
      shortDesc: "Refreshing body talc",
      description: "Refreshing body talc",
      benefits: "Keeps skin dry, Pleasant fragrance",
      usage: "Apply to body",
      warnings: "Avoid inhalation"
    },
    bn: {
      shortDesc: "Refreshing body talc",
      description: "Refreshing body talc",
      benefits: "Keeps skin dry, Pleasant fragrance",
      usage: "Apply to body",
      warnings: "Avoid inhalation"
    },
    mr: {
      shortDesc: "Refreshing body talc",
      description: "Refreshing body talc",
      benefits: "Keeps skin dry, Pleasant fragrance",
      usage: "Apply to body",
      warnings: "Avoid inhalation"
    },
    gu: {
      shortDesc: "Refreshing body talc",
      description: "Refreshing body talc",
      benefits: "Keeps skin dry, Pleasant fragrance",
      usage: "Apply to body",
      warnings: "Avoid inhalation"
    },
    kn: {
      shortDesc: "Refreshing body talc",
      description: "Refreshing body talc",
      benefits: "Keeps skin dry, Pleasant fragrance",
      usage: "Apply to body",
      warnings: "Avoid inhalation"
    },
    ml: {
      shortDesc: "Refreshing body talc",
      description: "Refreshing body talc",
      benefits: "Keeps skin dry, Pleasant fragrance",
      usage: "Apply to body",
      warnings: "Avoid inhalation"
    },
    pa: {
      shortDesc: "Refreshing body talc",
      description: "Refreshing body talc",
      benefits: "Keeps skin dry, Pleasant fragrance",
      usage: "Apply to body",
      warnings: "Avoid inhalation"
    },
    or: {
      shortDesc: "Refreshing body talc",
      description: "Refreshing body talc",
      benefits: "Keeps skin dry, Pleasant fragrance",
      usage: "Apply to body",
      warnings: "Avoid inhalation"
    },
    as: {
      shortDesc: "Refreshing body talc",
      description: "Refreshing body talc",
      benefits: "Keeps skin dry, Pleasant fragrance",
      usage: "Apply to body",
      warnings: "Avoid inhalation"
    },
    ur: {
      shortDesc: "Refreshing body talc",
      description: "Refreshing body talc",
      benefits: "Keeps skin dry, Pleasant fragrance",
      usage: "Apply to body",
      warnings: "Avoid inhalation"
    }
  },
  "CARE019": {
    en: {
      shortDesc: "Smooth shaving cream",
      description: "Smooth shaving cream",
      benefits: "Prevents razor burn, Smooth shave",
      usage: "Apply before shaving",
      warnings: "For external use"
    },
    hi: {
      shortDesc: "Smooth shaving cream",
      description: "Smooth shaving cream",
      benefits: "Prevents razor burn, Smooth shave",
      usage: "Apply before shaving",
      warnings: "For external use"
    },
    ta: {
      shortDesc: "Smooth shaving cream",
      description: "Smooth shaving cream",
      benefits: "Prevents razor burn, Smooth shave",
      usage: "Apply before shaving",
      warnings: "For external use"
    },
    te: {
      shortDesc: "Smooth shaving cream",
      description: "Smooth shaving cream",
      benefits: "Prevents razor burn, Smooth shave",
      usage: "Apply before shaving",
      warnings: "For external use"
    },
    bn: {
      shortDesc: "Smooth shaving cream",
      description: "Smooth shaving cream",
      benefits: "Prevents razor burn, Smooth shave",
      usage: "Apply before shaving",
      warnings: "For external use"
    },
    mr: {
      shortDesc: "Smooth shaving cream",
      description: "Smooth shaving cream",
      benefits: "Prevents razor burn, Smooth shave",
      usage: "Apply before shaving",
      warnings: "For external use"
    },
    gu: {
      shortDesc: "Smooth shaving cream",
      description: "Smooth shaving cream",
      benefits: "Prevents razor burn, Smooth shave",
      usage: "Apply before shaving",
      warnings: "For external use"
    },
    kn: {
      shortDesc: "Smooth shaving cream",
      description: "Smooth shaving cream",
      benefits: "Prevents razor burn, Smooth shave",
      usage: "Apply before shaving",
      warnings: "For external use"
    },
    ml: {
      shortDesc: "Smooth shaving cream",
      description: "Smooth shaving cream",
      benefits: "Prevents razor burn, Smooth shave",
      usage: "Apply before shaving",
      warnings: "For external use"
    },
    pa: {
      shortDesc: "Smooth shaving cream",
      description: "Smooth shaving cream",
      benefits: "Prevents razor burn, Smooth shave",
      usage: "Apply before shaving",
      warnings: "For external use"
    },
    or: {
      shortDesc: "Smooth shaving cream",
      description: "Smooth shaving cream",
      benefits: "Prevents razor burn, Smooth shave",
      usage: "Apply before shaving",
      warnings: "For external use"
    },
    as: {
      shortDesc: "Smooth shaving cream",
      description: "Smooth shaving cream",
      benefits: "Prevents razor burn, Smooth shave",
      usage: "Apply before shaving",
      warnings: "For external use"
    },
    ur: {
      shortDesc: "Smooth shaving cream",
      description: "Smooth shaving cream",
      benefits: "Prevents razor burn, Smooth shave",
      usage: "Apply before shaving",
      warnings: "For external use"
    }
  },
  "CARE020": {
    en: {
      shortDesc: "Soothing aftershave",
      description: "Soothing aftershave",
      benefits: "Soothes skin, Prevents irritation",
      usage: "Apply after shaving",
      warnings: "Avoid broken skin"
    },
    hi: {
      shortDesc: "Soothing aftershave",
      description: "Soothing aftershave",
      benefits: "Soothes skin, Prevents irritation",
      usage: "Apply after shaving",
      warnings: "Avoid broken skin"
    },
    ta: {
      shortDesc: "Soothing aftershave",
      description: "Soothing aftershave",
      benefits: "Soothes skin, Prevents irritation",
      usage: "Apply after shaving",
      warnings: "Avoid broken skin"
    },
    te: {
      shortDesc: "Soothing aftershave",
      description: "Soothing aftershave",
      benefits: "Soothes skin, Prevents irritation",
      usage: "Apply after shaving",
      warnings: "Avoid broken skin"
    },
    bn: {
      shortDesc: "Soothing aftershave",
      description: "Soothing aftershave",
      benefits: "Soothes skin, Prevents irritation",
      usage: "Apply after shaving",
      warnings: "Avoid broken skin"
    },
    mr: {
      shortDesc: "Soothing aftershave",
      description: "Soothing aftershave",
      benefits: "Soothes skin, Prevents irritation",
      usage: "Apply after shaving",
      warnings: "Avoid broken skin"
    },
    gu: {
      shortDesc: "Soothing aftershave",
      description: "Soothing aftershave",
      benefits: "Soothes skin, Prevents irritation",
      usage: "Apply after shaving",
      warnings: "Avoid broken skin"
    },
    kn: {
      shortDesc: "Soothing aftershave",
      description: "Soothing aftershave",
      benefits: "Soothes skin, Prevents irritation",
      usage: "Apply after shaving",
      warnings: "Avoid broken skin"
    },
    ml: {
      shortDesc: "Soothing aftershave",
      description: "Soothing aftershave",
      benefits: "Soothes skin, Prevents irritation",
      usage: "Apply after shaving",
      warnings: "Avoid broken skin"
    },
    pa: {
      shortDesc: "Soothing aftershave",
      description: "Soothing aftershave",
      benefits: "Soothes skin, Prevents irritation",
      usage: "Apply after shaving",
      warnings: "Avoid broken skin"
    },
    or: {
      shortDesc: "Soothing aftershave",
      description: "Soothing aftershave",
      benefits: "Soothes skin, Prevents irritation",
      usage: "Apply after shaving",
      warnings: "Avoid broken skin"
    },
    as: {
      shortDesc: "Soothing aftershave",
      description: "Soothing aftershave",
      benefits: "Soothes skin, Prevents irritation",
      usage: "Apply after shaving",
      warnings: "Avoid broken skin"
    },
    ur: {
      shortDesc: "Soothing aftershave",
      description: "Soothing aftershave",
      benefits: "Soothes skin, Prevents irritation",
      usage: "Apply after shaving",
      warnings: "Avoid broken skin"
    }
  },
  "CARE021": {
    en: {
      shortDesc: "Anti-aging face cream",
      description: "Anti-aging face cream",
      benefits: "Reduces wrinkles, Firms skin",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    hi: {
      shortDesc: "Anti-aging face cream",
      description: "Anti-aging face cream",
      benefits: "Reduces wrinkles, Firms skin",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    ta: {
      shortDesc: "Anti-aging face cream",
      description: "Anti-aging face cream",
      benefits: "Reduces wrinkles, Firms skin",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    te: {
      shortDesc: "Anti-aging face cream",
      description: "Anti-aging face cream",
      benefits: "Reduces wrinkles, Firms skin",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    bn: {
      shortDesc: "Anti-aging face cream",
      description: "Anti-aging face cream",
      benefits: "Reduces wrinkles, Firms skin",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    mr: {
      shortDesc: "Anti-aging face cream",
      description: "Anti-aging face cream",
      benefits: "Reduces wrinkles, Firms skin",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    gu: {
      shortDesc: "Anti-aging face cream",
      description: "Anti-aging face cream",
      benefits: "Reduces wrinkles, Firms skin",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    kn: {
      shortDesc: "Anti-aging face cream",
      description: "Anti-aging face cream",
      benefits: "Reduces wrinkles, Firms skin",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    ml: {
      shortDesc: "Anti-aging face cream",
      description: "Anti-aging face cream",
      benefits: "Reduces wrinkles, Firms skin",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    pa: {
      shortDesc: "Anti-aging face cream",
      description: "Anti-aging face cream",
      benefits: "Reduces wrinkles, Firms skin",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    or: {
      shortDesc: "Anti-aging face cream",
      description: "Anti-aging face cream",
      benefits: "Reduces wrinkles, Firms skin",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    as: {
      shortDesc: "Anti-aging face cream",
      description: "Anti-aging face cream",
      benefits: "Reduces wrinkles, Firms skin",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    ur: {
      shortDesc: "Anti-aging face cream",
      description: "Anti-aging face cream",
      benefits: "Reduces wrinkles, Firms skin",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    }
  },
  "CARE022": {
    en: {
      shortDesc: "Intensive hand cream",
      description: "Intensive hand cream",
      benefits: "Deep moisturization, Non-greasy",
      usage: "Apply as needed",
      warnings: "For external use"
    },
    hi: {
      shortDesc: "Intensive hand cream",
      description: "Intensive hand cream",
      benefits: "Deep moisturization, Non-greasy",
      usage: "Apply as needed",
      warnings: "For external use"
    },
    ta: {
      shortDesc: "Intensive hand cream",
      description: "Intensive hand cream",
      benefits: "Deep moisturization, Non-greasy",
      usage: "Apply as needed",
      warnings: "For external use"
    },
    te: {
      shortDesc: "Intensive hand cream",
      description: "Intensive hand cream",
      benefits: "Deep moisturization, Non-greasy",
      usage: "Apply as needed",
      warnings: "For external use"
    },
    bn: {
      shortDesc: "Intensive hand cream",
      description: "Intensive hand cream",
      benefits: "Deep moisturization, Non-greasy",
      usage: "Apply as needed",
      warnings: "For external use"
    },
    mr: {
      shortDesc: "Intensive hand cream",
      description: "Intensive hand cream",
      benefits: "Deep moisturization, Non-greasy",
      usage: "Apply as needed",
      warnings: "For external use"
    },
    gu: {
      shortDesc: "Intensive hand cream",
      description: "Intensive hand cream",
      benefits: "Deep moisturization, Non-greasy",
      usage: "Apply as needed",
      warnings: "For external use"
    },
    kn: {
      shortDesc: "Intensive hand cream",
      description: "Intensive hand cream",
      benefits: "Deep moisturization, Non-greasy",
      usage: "Apply as needed",
      warnings: "For external use"
    },
    ml: {
      shortDesc: "Intensive hand cream",
      description: "Intensive hand cream",
      benefits: "Deep moisturization, Non-greasy",
      usage: "Apply as needed",
      warnings: "For external use"
    },
    pa: {
      shortDesc: "Intensive hand cream",
      description: "Intensive hand cream",
      benefits: "Deep moisturization, Non-greasy",
      usage: "Apply as needed",
      warnings: "For external use"
    },
    or: {
      shortDesc: "Intensive hand cream",
      description: "Intensive hand cream",
      benefits: "Deep moisturization, Non-greasy",
      usage: "Apply as needed",
      warnings: "For external use"
    },
    as: {
      shortDesc: "Intensive hand cream",
      description: "Intensive hand cream",
      benefits: "Deep moisturization, Non-greasy",
      usage: "Apply as needed",
      warnings: "For external use"
    },
    ur: {
      shortDesc: "Intensive hand cream",
      description: "Intensive hand cream",
      benefits: "Deep moisturization, Non-greasy",
      usage: "Apply as needed",
      warnings: "For external use"
    }
  },
  "CARE023": {
    en: {
      shortDesc: "Moisturizing lip balm",
      description: "Moisturizing lip balm",
      benefits: "Prevents chapping, SPF 15",
      usage: "Apply to lips",
      warnings: "For external use"
    },
    hi: {
      shortDesc: "Moisturizing lip balm",
      description: "Moisturizing lip balm",
      benefits: "Prevents chapping, SPF 15",
      usage: "Apply to lips",
      warnings: "For external use"
    },
    ta: {
      shortDesc: "Moisturizing lip balm",
      description: "Moisturizing lip balm",
      benefits: "Prevents chapping, SPF 15",
      usage: "Apply to lips",
      warnings: "For external use"
    },
    te: {
      shortDesc: "Moisturizing lip balm",
      description: "Moisturizing lip balm",
      benefits: "Prevents chapping, SPF 15",
      usage: "Apply to lips",
      warnings: "For external use"
    },
    bn: {
      shortDesc: "Moisturizing lip balm",
      description: "Moisturizing lip balm",
      benefits: "Prevents chapping, SPF 15",
      usage: "Apply to lips",
      warnings: "For external use"
    },
    mr: {
      shortDesc: "Moisturizing lip balm",
      description: "Moisturizing lip balm",
      benefits: "Prevents chapping, SPF 15",
      usage: "Apply to lips",
      warnings: "For external use"
    },
    gu: {
      shortDesc: "Moisturizing lip balm",
      description: "Moisturizing lip balm",
      benefits: "Prevents chapping, SPF 15",
      usage: "Apply to lips",
      warnings: "For external use"
    },
    kn: {
      shortDesc: "Moisturizing lip balm",
      description: "Moisturizing lip balm",
      benefits: "Prevents chapping, SPF 15",
      usage: "Apply to lips",
      warnings: "For external use"
    },
    ml: {
      shortDesc: "Moisturizing lip balm",
      description: "Moisturizing lip balm",
      benefits: "Prevents chapping, SPF 15",
      usage: "Apply to lips",
      warnings: "For external use"
    },
    pa: {
      shortDesc: "Moisturizing lip balm",
      description: "Moisturizing lip balm",
      benefits: "Prevents chapping, SPF 15",
      usage: "Apply to lips",
      warnings: "For external use"
    },
    or: {
      shortDesc: "Moisturizing lip balm",
      description: "Moisturizing lip balm",
      benefits: "Prevents chapping, SPF 15",
      usage: "Apply to lips",
      warnings: "For external use"
    },
    as: {
      shortDesc: "Moisturizing lip balm",
      description: "Moisturizing lip balm",
      benefits: "Prevents chapping, SPF 15",
      usage: "Apply to lips",
      warnings: "For external use"
    },
    ur: {
      shortDesc: "Moisturizing lip balm",
      description: "Moisturizing lip balm",
      benefits: "Prevents chapping, SPF 15",
      usage: "Apply to lips",
      warnings: "For external use"
    }
  },
  "CARE024": {
    en: {
      shortDesc: "Rich body butter",
      description: "Rich body butter",
      benefits: "Intense hydration, Smooth skin",
      usage: "Apply to dry areas",
      warnings: "Patch test first"
    },
    hi: {
      shortDesc: "Rich body butter",
      description: "Rich body butter",
      benefits: "Intense hydration, Smooth skin",
      usage: "Apply to dry areas",
      warnings: "Patch test first"
    },
    ta: {
      shortDesc: "Rich body butter",
      description: "Rich body butter",
      benefits: "Intense hydration, Smooth skin",
      usage: "Apply to dry areas",
      warnings: "Patch test first"
    },
    te: {
      shortDesc: "Rich body butter",
      description: "Rich body butter",
      benefits: "Intense hydration, Smooth skin",
      usage: "Apply to dry areas",
      warnings: "Patch test first"
    },
    bn: {
      shortDesc: "Rich body butter",
      description: "Rich body butter",
      benefits: "Intense hydration, Smooth skin",
      usage: "Apply to dry areas",
      warnings: "Patch test first"
    },
    mr: {
      shortDesc: "Rich body butter",
      description: "Rich body butter",
      benefits: "Intense hydration, Smooth skin",
      usage: "Apply to dry areas",
      warnings: "Patch test first"
    },
    gu: {
      shortDesc: "Rich body butter",
      description: "Rich body butter",
      benefits: "Intense hydration, Smooth skin",
      usage: "Apply to dry areas",
      warnings: "Patch test first"
    },
    kn: {
      shortDesc: "Rich body butter",
      description: "Rich body butter",
      benefits: "Intense hydration, Smooth skin",
      usage: "Apply to dry areas",
      warnings: "Patch test first"
    },
    ml: {
      shortDesc: "Rich body butter",
      description: "Rich body butter",
      benefits: "Intense hydration, Smooth skin",
      usage: "Apply to dry areas",
      warnings: "Patch test first"
    },
    pa: {
      shortDesc: "Rich body butter",
      description: "Rich body butter",
      benefits: "Intense hydration, Smooth skin",
      usage: "Apply to dry areas",
      warnings: "Patch test first"
    },
    or: {
      shortDesc: "Rich body butter",
      description: "Rich body butter",
      benefits: "Intense hydration, Smooth skin",
      usage: "Apply to dry areas",
      warnings: "Patch test first"
    },
    as: {
      shortDesc: "Rich body butter",
      description: "Rich body butter",
      benefits: "Intense hydration, Smooth skin",
      usage: "Apply to dry areas",
      warnings: "Patch test first"
    },
    ur: {
      shortDesc: "Rich body butter",
      description: "Rich body butter",
      benefits: "Intense hydration, Smooth skin",
      usage: "Apply to dry areas",
      warnings: "Patch test first"
    }
  },
  "CARE025": {
    en: {
      shortDesc: "Gentle face exfoliator",
      description: "Gentle face exfoliator",
      benefits: "Removes dead skin, Brightens",
      usage: "Use 2-3 times weekly",
      warnings: "Avoid eyes"
    },
    hi: {
      shortDesc: "Gentle face exfoliator",
      description: "Gentle face exfoliator",
      benefits: "Removes dead skin, Brightens",
      usage: "Use 2-3 times weekly",
      warnings: "Avoid eyes"
    },
    ta: {
      shortDesc: "Gentle face exfoliator",
      description: "Gentle face exfoliator",
      benefits: "Removes dead skin, Brightens",
      usage: "Use 2-3 times weekly",
      warnings: "Avoid eyes"
    },
    te: {
      shortDesc: "Gentle face exfoliator",
      description: "Gentle face exfoliator",
      benefits: "Removes dead skin, Brightens",
      usage: "Use 2-3 times weekly",
      warnings: "Avoid eyes"
    },
    bn: {
      shortDesc: "Gentle face exfoliator",
      description: "Gentle face exfoliator",
      benefits: "Removes dead skin, Brightens",
      usage: "Use 2-3 times weekly",
      warnings: "Avoid eyes"
    },
    mr: {
      shortDesc: "Gentle face exfoliator",
      description: "Gentle face exfoliator",
      benefits: "Removes dead skin, Brightens",
      usage: "Use 2-3 times weekly",
      warnings: "Avoid eyes"
    },
    gu: {
      shortDesc: "Gentle face exfoliator",
      description: "Gentle face exfoliator",
      benefits: "Removes dead skin, Brightens",
      usage: "Use 2-3 times weekly",
      warnings: "Avoid eyes"
    },
    kn: {
      shortDesc: "Gentle face exfoliator",
      description: "Gentle face exfoliator",
      benefits: "Removes dead skin, Brightens",
      usage: "Use 2-3 times weekly",
      warnings: "Avoid eyes"
    },
    ml: {
      shortDesc: "Gentle face exfoliator",
      description: "Gentle face exfoliator",
      benefits: "Removes dead skin, Brightens",
      usage: "Use 2-3 times weekly",
      warnings: "Avoid eyes"
    },
    pa: {
      shortDesc: "Gentle face exfoliator",
      description: "Gentle face exfoliator",
      benefits: "Removes dead skin, Brightens",
      usage: "Use 2-3 times weekly",
      warnings: "Avoid eyes"
    },
    or: {
      shortDesc: "Gentle face exfoliator",
      description: "Gentle face exfoliator",
      benefits: "Removes dead skin, Brightens",
      usage: "Use 2-3 times weekly",
      warnings: "Avoid eyes"
    },
    as: {
      shortDesc: "Gentle face exfoliator",
      description: "Gentle face exfoliator",
      benefits: "Removes dead skin, Brightens",
      usage: "Use 2-3 times weekly",
      warnings: "Avoid eyes"
    },
    ur: {
      shortDesc: "Gentle face exfoliator",
      description: "Gentle face exfoliator",
      benefits: "Removes dead skin, Brightens",
      usage: "Use 2-3 times weekly",
      warnings: "Avoid eyes"
    }
  },
  "CARE026": {
    en: {
      shortDesc: "Hand sanitizer gel",
      description: "Hand sanitizer gel",
      benefits: "Kills 99.9% germs, Quick-dry",
      usage: "Apply to hands",
      warnings: "Flammable"
    },
    hi: {
      shortDesc: "Hand sanitizer gel",
      description: "Hand sanitizer gel",
      benefits: "Kills 99.9% germs, Quick-dry",
      usage: "Apply to hands",
      warnings: "Flammable"
    },
    ta: {
      shortDesc: "Hand sanitizer gel",
      description: "Hand sanitizer gel",
      benefits: "Kills 99.9% germs, Quick-dry",
      usage: "Apply to hands",
      warnings: "Flammable"
    },
    te: {
      shortDesc: "Hand sanitizer gel",
      description: "Hand sanitizer gel",
      benefits: "Kills 99.9% germs, Quick-dry",
      usage: "Apply to hands",
      warnings: "Flammable"
    },
    bn: {
      shortDesc: "Hand sanitizer gel",
      description: "Hand sanitizer gel",
      benefits: "Kills 99.9% germs, Quick-dry",
      usage: "Apply to hands",
      warnings: "Flammable"
    },
    mr: {
      shortDesc: "Hand sanitizer gel",
      description: "Hand sanitizer gel",
      benefits: "Kills 99.9% germs, Quick-dry",
      usage: "Apply to hands",
      warnings: "Flammable"
    },
    gu: {
      shortDesc: "Hand sanitizer gel",
      description: "Hand sanitizer gel",
      benefits: "Kills 99.9% germs, Quick-dry",
      usage: "Apply to hands",
      warnings: "Flammable"
    },
    kn: {
      shortDesc: "Hand sanitizer gel",
      description: "Hand sanitizer gel",
      benefits: "Kills 99.9% germs, Quick-dry",
      usage: "Apply to hands",
      warnings: "Flammable"
    },
    ml: {
      shortDesc: "Hand sanitizer gel",
      description: "Hand sanitizer gel",
      benefits: "Kills 99.9% germs, Quick-dry",
      usage: "Apply to hands",
      warnings: "Flammable"
    },
    pa: {
      shortDesc: "Hand sanitizer gel",
      description: "Hand sanitizer gel",
      benefits: "Kills 99.9% germs, Quick-dry",
      usage: "Apply to hands",
      warnings: "Flammable"
    },
    or: {
      shortDesc: "Hand sanitizer gel",
      description: "Hand sanitizer gel",
      benefits: "Kills 99.9% germs, Quick-dry",
      usage: "Apply to hands",
      warnings: "Flammable"
    },
    as: {
      shortDesc: "Hand sanitizer gel",
      description: "Hand sanitizer gel",
      benefits: "Kills 99.9% germs, Quick-dry",
      usage: "Apply to hands",
      warnings: "Flammable"
    },
    ur: {
      shortDesc: "Hand sanitizer gel",
      description: "Hand sanitizer gel",
      benefits: "Kills 99.9% germs, Quick-dry",
      usage: "Apply to hands",
      warnings: "Flammable"
    }
  },
  "CARE027": {
    en: {
      shortDesc: "Antibacterial wet wipes",
      description: "Antibacterial wet wipes",
      benefits: "Convenient, Kills germs",
      usage: "Use as needed",
      warnings: "Dispose properly"
    },
    hi: {
      shortDesc: "Antibacterial wet wipes",
      description: "Antibacterial wet wipes",
      benefits: "Convenient, Kills germs",
      usage: "Use as needed",
      warnings: "Dispose properly"
    },
    ta: {
      shortDesc: "Antibacterial wet wipes",
      description: "Antibacterial wet wipes",
      benefits: "Convenient, Kills germs",
      usage: "Use as needed",
      warnings: "Dispose properly"
    },
    te: {
      shortDesc: "Antibacterial wet wipes",
      description: "Antibacterial wet wipes",
      benefits: "Convenient, Kills germs",
      usage: "Use as needed",
      warnings: "Dispose properly"
    },
    bn: {
      shortDesc: "Antibacterial wet wipes",
      description: "Antibacterial wet wipes",
      benefits: "Convenient, Kills germs",
      usage: "Use as needed",
      warnings: "Dispose properly"
    },
    mr: {
      shortDesc: "Antibacterial wet wipes",
      description: "Antibacterial wet wipes",
      benefits: "Convenient, Kills germs",
      usage: "Use as needed",
      warnings: "Dispose properly"
    },
    gu: {
      shortDesc: "Antibacterial wet wipes",
      description: "Antibacterial wet wipes",
      benefits: "Convenient, Kills germs",
      usage: "Use as needed",
      warnings: "Dispose properly"
    },
    kn: {
      shortDesc: "Antibacterial wet wipes",
      description: "Antibacterial wet wipes",
      benefits: "Convenient, Kills germs",
      usage: "Use as needed",
      warnings: "Dispose properly"
    },
    ml: {
      shortDesc: "Antibacterial wet wipes",
      description: "Antibacterial wet wipes",
      benefits: "Convenient, Kills germs",
      usage: "Use as needed",
      warnings: "Dispose properly"
    },
    pa: {
      shortDesc: "Antibacterial wet wipes",
      description: "Antibacterial wet wipes",
      benefits: "Convenient, Kills germs",
      usage: "Use as needed",
      warnings: "Dispose properly"
    },
    or: {
      shortDesc: "Antibacterial wet wipes",
      description: "Antibacterial wet wipes",
      benefits: "Convenient, Kills germs",
      usage: "Use as needed",
      warnings: "Dispose properly"
    },
    as: {
      shortDesc: "Antibacterial wet wipes",
      description: "Antibacterial wet wipes",
      benefits: "Convenient, Kills germs",
      usage: "Use as needed",
      warnings: "Dispose properly"
    },
    ur: {
      shortDesc: "Antibacterial wet wipes",
      description: "Antibacterial wet wipes",
      benefits: "Convenient, Kills germs",
      usage: "Use as needed",
      warnings: "Dispose properly"
    }
  },
  "CARE028": {
    en: {
      shortDesc: "Soft facial tissues",
      description: "Soft facial tissues",
      benefits: "Soft, Strong",
      usage: "Use as needed",
      warnings: "Dispose properly"
    },
    hi: {
      shortDesc: "Soft facial tissues",
      description: "Soft facial tissues",
      benefits: "Soft, Strong",
      usage: "Use as needed",
      warnings: "Dispose properly"
    },
    ta: {
      shortDesc: "Soft facial tissues",
      description: "Soft facial tissues",
      benefits: "Soft, Strong",
      usage: "Use as needed",
      warnings: "Dispose properly"
    },
    te: {
      shortDesc: "Soft facial tissues",
      description: "Soft facial tissues",
      benefits: "Soft, Strong",
      usage: "Use as needed",
      warnings: "Dispose properly"
    },
    bn: {
      shortDesc: "Soft facial tissues",
      description: "Soft facial tissues",
      benefits: "Soft, Strong",
      usage: "Use as needed",
      warnings: "Dispose properly"
    },
    mr: {
      shortDesc: "Soft facial tissues",
      description: "Soft facial tissues",
      benefits: "Soft, Strong",
      usage: "Use as needed",
      warnings: "Dispose properly"
    },
    gu: {
      shortDesc: "Soft facial tissues",
      description: "Soft facial tissues",
      benefits: "Soft, Strong",
      usage: "Use as needed",
      warnings: "Dispose properly"
    },
    kn: {
      shortDesc: "Soft facial tissues",
      description: "Soft facial tissues",
      benefits: "Soft, Strong",
      usage: "Use as needed",
      warnings: "Dispose properly"
    },
    ml: {
      shortDesc: "Soft facial tissues",
      description: "Soft facial tissues",
      benefits: "Soft, Strong",
      usage: "Use as needed",
      warnings: "Dispose properly"
    },
    pa: {
      shortDesc: "Soft facial tissues",
      description: "Soft facial tissues",
      benefits: "Soft, Strong",
      usage: "Use as needed",
      warnings: "Dispose properly"
    },
    or: {
      shortDesc: "Soft facial tissues",
      description: "Soft facial tissues",
      benefits: "Soft, Strong",
      usage: "Use as needed",
      warnings: "Dispose properly"
    },
    as: {
      shortDesc: "Soft facial tissues",
      description: "Soft facial tissues",
      benefits: "Soft, Strong",
      usage: "Use as needed",
      warnings: "Dispose properly"
    },
    ur: {
      shortDesc: "Soft facial tissues",
      description: "Soft facial tissues",
      benefits: "Soft, Strong",
      usage: "Use as needed",
      warnings: "Dispose properly"
    }
  },
  "CARE029": {
    en: {
      shortDesc: "Soft cotton pads",
      description: "Soft cotton pads",
      benefits: "Gentle, Absorbent",
      usage: "Use for cleansing",
      warnings: "For external use"
    },
    hi: {
      shortDesc: "Soft cotton pads",
      description: "Soft cotton pads",
      benefits: "Gentle, Absorbent",
      usage: "Use for cleansing",
      warnings: "For external use"
    },
    ta: {
      shortDesc: "Soft cotton pads",
      description: "Soft cotton pads",
      benefits: "Gentle, Absorbent",
      usage: "Use for cleansing",
      warnings: "For external use"
    },
    te: {
      shortDesc: "Soft cotton pads",
      description: "Soft cotton pads",
      benefits: "Gentle, Absorbent",
      usage: "Use for cleansing",
      warnings: "For external use"
    },
    bn: {
      shortDesc: "Soft cotton pads",
      description: "Soft cotton pads",
      benefits: "Gentle, Absorbent",
      usage: "Use for cleansing",
      warnings: "For external use"
    },
    mr: {
      shortDesc: "Soft cotton pads",
      description: "Soft cotton pads",
      benefits: "Gentle, Absorbent",
      usage: "Use for cleansing",
      warnings: "For external use"
    },
    gu: {
      shortDesc: "Soft cotton pads",
      description: "Soft cotton pads",
      benefits: "Gentle, Absorbent",
      usage: "Use for cleansing",
      warnings: "For external use"
    },
    kn: {
      shortDesc: "Soft cotton pads",
      description: "Soft cotton pads",
      benefits: "Gentle, Absorbent",
      usage: "Use for cleansing",
      warnings: "For external use"
    },
    ml: {
      shortDesc: "Soft cotton pads",
      description: "Soft cotton pads",
      benefits: "Gentle, Absorbent",
      usage: "Use for cleansing",
      warnings: "For external use"
    },
    pa: {
      shortDesc: "Soft cotton pads",
      description: "Soft cotton pads",
      benefits: "Gentle, Absorbent",
      usage: "Use for cleansing",
      warnings: "For external use"
    },
    or: {
      shortDesc: "Soft cotton pads",
      description: "Soft cotton pads",
      benefits: "Gentle, Absorbent",
      usage: "Use for cleansing",
      warnings: "For external use"
    },
    as: {
      shortDesc: "Soft cotton pads",
      description: "Soft cotton pads",
      benefits: "Gentle, Absorbent",
      usage: "Use for cleansing",
      warnings: "For external use"
    },
    ur: {
      shortDesc: "Soft cotton pads",
      description: "Soft cotton pads",
      benefits: "Gentle, Absorbent",
      usage: "Use for cleansing",
      warnings: "For external use"
    }
  },
  "CARE030": {
    en: {
      shortDesc: "Cotton ear buds",
      description: "Cotton ear buds",
      benefits: "Soft tips, Safe",
      usage: "Use gently",
      warnings: "Do not insert deep"
    },
    hi: {
      shortDesc: "Cotton ear buds",
      description: "Cotton ear buds",
      benefits: "Soft tips, Safe",
      usage: "Use gently",
      warnings: "Do not insert deep"
    },
    ta: {
      shortDesc: "Cotton ear buds",
      description: "Cotton ear buds",
      benefits: "Soft tips, Safe",
      usage: "Use gently",
      warnings: "Do not insert deep"
    },
    te: {
      shortDesc: "Cotton ear buds",
      description: "Cotton ear buds",
      benefits: "Soft tips, Safe",
      usage: "Use gently",
      warnings: "Do not insert deep"
    },
    bn: {
      shortDesc: "Cotton ear buds",
      description: "Cotton ear buds",
      benefits: "Soft tips, Safe",
      usage: "Use gently",
      warnings: "Do not insert deep"
    },
    mr: {
      shortDesc: "Cotton ear buds",
      description: "Cotton ear buds",
      benefits: "Soft tips, Safe",
      usage: "Use gently",
      warnings: "Do not insert deep"
    },
    gu: {
      shortDesc: "Cotton ear buds",
      description: "Cotton ear buds",
      benefits: "Soft tips, Safe",
      usage: "Use gently",
      warnings: "Do not insert deep"
    },
    kn: {
      shortDesc: "Cotton ear buds",
      description: "Cotton ear buds",
      benefits: "Soft tips, Safe",
      usage: "Use gently",
      warnings: "Do not insert deep"
    },
    ml: {
      shortDesc: "Cotton ear buds",
      description: "Cotton ear buds",
      benefits: "Soft tips, Safe",
      usage: "Use gently",
      warnings: "Do not insert deep"
    },
    pa: {
      shortDesc: "Cotton ear buds",
      description: "Cotton ear buds",
      benefits: "Soft tips, Safe",
      usage: "Use gently",
      warnings: "Do not insert deep"
    },
    or: {
      shortDesc: "Cotton ear buds",
      description: "Cotton ear buds",
      benefits: "Soft tips, Safe",
      usage: "Use gently",
      warnings: "Do not insert deep"
    },
    as: {
      shortDesc: "Cotton ear buds",
      description: "Cotton ear buds",
      benefits: "Soft tips, Safe",
      usage: "Use gently",
      warnings: "Do not insert deep"
    },
    ur: {
      shortDesc: "Cotton ear buds",
      description: "Cotton ear buds",
      benefits: "Soft tips, Safe",
      usage: "Use gently",
      warnings: "Do not insert deep"
    }
  },
  "CARE031": {
    en: {
      shortDesc: "Hydrating sheet mask",
      description: "Hydrating sheet mask",
      benefits: "Deep hydration, Brightening",
      usage: "Apply for 15-20 minutes",
      warnings: "Single use only"
    },
    hi: {
      shortDesc: "Hydrating sheet mask",
      description: "Hydrating sheet mask",
      benefits: "Deep hydration, Brightening",
      usage: "Apply for 15-20 minutes",
      warnings: "Single use only"
    },
    ta: {
      shortDesc: "Hydrating sheet mask",
      description: "Hydrating sheet mask",
      benefits: "Deep hydration, Brightening",
      usage: "Apply for 15-20 minutes",
      warnings: "Single use only"
    },
    te: {
      shortDesc: "Hydrating sheet mask",
      description: "Hydrating sheet mask",
      benefits: "Deep hydration, Brightening",
      usage: "Apply for 15-20 minutes",
      warnings: "Single use only"
    },
    bn: {
      shortDesc: "Hydrating sheet mask",
      description: "Hydrating sheet mask",
      benefits: "Deep hydration, Brightening",
      usage: "Apply for 15-20 minutes",
      warnings: "Single use only"
    },
    mr: {
      shortDesc: "Hydrating sheet mask",
      description: "Hydrating sheet mask",
      benefits: "Deep hydration, Brightening",
      usage: "Apply for 15-20 minutes",
      warnings: "Single use only"
    },
    gu: {
      shortDesc: "Hydrating sheet mask",
      description: "Hydrating sheet mask",
      benefits: "Deep hydration, Brightening",
      usage: "Apply for 15-20 minutes",
      warnings: "Single use only"
    },
    kn: {
      shortDesc: "Hydrating sheet mask",
      description: "Hydrating sheet mask",
      benefits: "Deep hydration, Brightening",
      usage: "Apply for 15-20 minutes",
      warnings: "Single use only"
    },
    ml: {
      shortDesc: "Hydrating sheet mask",
      description: "Hydrating sheet mask",
      benefits: "Deep hydration, Brightening",
      usage: "Apply for 15-20 minutes",
      warnings: "Single use only"
    },
    pa: {
      shortDesc: "Hydrating sheet mask",
      description: "Hydrating sheet mask",
      benefits: "Deep hydration, Brightening",
      usage: "Apply for 15-20 minutes",
      warnings: "Single use only"
    },
    or: {
      shortDesc: "Hydrating sheet mask",
      description: "Hydrating sheet mask",
      benefits: "Deep hydration, Brightening",
      usage: "Apply for 15-20 minutes",
      warnings: "Single use only"
    },
    as: {
      shortDesc: "Hydrating sheet mask",
      description: "Hydrating sheet mask",
      benefits: "Deep hydration, Brightening",
      usage: "Apply for 15-20 minutes",
      warnings: "Single use only"
    },
    ur: {
      shortDesc: "Hydrating sheet mask",
      description: "Hydrating sheet mask",
      benefits: "Deep hydration, Brightening",
      usage: "Apply for 15-20 minutes",
      warnings: "Single use only"
    }
  },
  "CARE032": {
    en: {
      shortDesc: "Anti-aging eye cream",
      description: "Anti-aging eye cream",
      benefits: "Reduces dark circles, Firms skin",
      usage: "Apply around eyes",
      warnings: "Avoid direct eye contact"
    },
    hi: {
      shortDesc: "Anti-aging eye cream",
      description: "Anti-aging eye cream",
      benefits: "Reduces dark circles, Firms skin",
      usage: "Apply around eyes",
      warnings: "Avoid direct eye contact"
    },
    ta: {
      shortDesc: "Anti-aging eye cream",
      description: "Anti-aging eye cream",
      benefits: "Reduces dark circles, Firms skin",
      usage: "Apply around eyes",
      warnings: "Avoid direct eye contact"
    },
    te: {
      shortDesc: "Anti-aging eye cream",
      description: "Anti-aging eye cream",
      benefits: "Reduces dark circles, Firms skin",
      usage: "Apply around eyes",
      warnings: "Avoid direct eye contact"
    },
    bn: {
      shortDesc: "Anti-aging eye cream",
      description: "Anti-aging eye cream",
      benefits: "Reduces dark circles, Firms skin",
      usage: "Apply around eyes",
      warnings: "Avoid direct eye contact"
    },
    mr: {
      shortDesc: "Anti-aging eye cream",
      description: "Anti-aging eye cream",
      benefits: "Reduces dark circles, Firms skin",
      usage: "Apply around eyes",
      warnings: "Avoid direct eye contact"
    },
    gu: {
      shortDesc: "Anti-aging eye cream",
      description: "Anti-aging eye cream",
      benefits: "Reduces dark circles, Firms skin",
      usage: "Apply around eyes",
      warnings: "Avoid direct eye contact"
    },
    kn: {
      shortDesc: "Anti-aging eye cream",
      description: "Anti-aging eye cream",
      benefits: "Reduces dark circles, Firms skin",
      usage: "Apply around eyes",
      warnings: "Avoid direct eye contact"
    },
    ml: {
      shortDesc: "Anti-aging eye cream",
      description: "Anti-aging eye cream",
      benefits: "Reduces dark circles, Firms skin",
      usage: "Apply around eyes",
      warnings: "Avoid direct eye contact"
    },
    pa: {
      shortDesc: "Anti-aging eye cream",
      description: "Anti-aging eye cream",
      benefits: "Reduces dark circles, Firms skin",
      usage: "Apply around eyes",
      warnings: "Avoid direct eye contact"
    },
    or: {
      shortDesc: "Anti-aging eye cream",
      description: "Anti-aging eye cream",
      benefits: "Reduces dark circles, Firms skin",
      usage: "Apply around eyes",
      warnings: "Avoid direct eye contact"
    },
    as: {
      shortDesc: "Anti-aging eye cream",
      description: "Anti-aging eye cream",
      benefits: "Reduces dark circles, Firms skin",
      usage: "Apply around eyes",
      warnings: "Avoid direct eye contact"
    },
    ur: {
      shortDesc: "Anti-aging eye cream",
      description: "Anti-aging eye cream",
      benefits: "Reduces dark circles, Firms skin",
      usage: "Apply around eyes",
      warnings: "Avoid direct eye contact"
    }
  },
  "CARE033": {
    en: {
      shortDesc: "Gentle facial cleanser",
      description: "Gentle facial cleanser",
      benefits: "Deep cleansing, Refreshing",
      usage: "Use twice daily",
      warnings: "Avoid eyes"
    },
    hi: {
      shortDesc: "Gentle facial cleanser",
      description: "Gentle facial cleanser",
      benefits: "Deep cleansing, Refreshing",
      usage: "Use twice daily",
      warnings: "Avoid eyes"
    },
    ta: {
      shortDesc: "Gentle facial cleanser",
      description: "Gentle facial cleanser",
      benefits: "Deep cleansing, Refreshing",
      usage: "Use twice daily",
      warnings: "Avoid eyes"
    },
    te: {
      shortDesc: "Gentle facial cleanser",
      description: "Gentle facial cleanser",
      benefits: "Deep cleansing, Refreshing",
      usage: "Use twice daily",
      warnings: "Avoid eyes"
    },
    bn: {
      shortDesc: "Gentle facial cleanser",
      description: "Gentle facial cleanser",
      benefits: "Deep cleansing, Refreshing",
      usage: "Use twice daily",
      warnings: "Avoid eyes"
    },
    mr: {
      shortDesc: "Gentle facial cleanser",
      description: "Gentle facial cleanser",
      benefits: "Deep cleansing, Refreshing",
      usage: "Use twice daily",
      warnings: "Avoid eyes"
    },
    gu: {
      shortDesc: "Gentle facial cleanser",
      description: "Gentle facial cleanser",
      benefits: "Deep cleansing, Refreshing",
      usage: "Use twice daily",
      warnings: "Avoid eyes"
    },
    kn: {
      shortDesc: "Gentle facial cleanser",
      description: "Gentle facial cleanser",
      benefits: "Deep cleansing, Refreshing",
      usage: "Use twice daily",
      warnings: "Avoid eyes"
    },
    ml: {
      shortDesc: "Gentle facial cleanser",
      description: "Gentle facial cleanser",
      benefits: "Deep cleansing, Refreshing",
      usage: "Use twice daily",
      warnings: "Avoid eyes"
    },
    pa: {
      shortDesc: "Gentle facial cleanser",
      description: "Gentle facial cleanser",
      benefits: "Deep cleansing, Refreshing",
      usage: "Use twice daily",
      warnings: "Avoid eyes"
    },
    or: {
      shortDesc: "Gentle facial cleanser",
      description: "Gentle facial cleanser",
      benefits: "Deep cleansing, Refreshing",
      usage: "Use twice daily",
      warnings: "Avoid eyes"
    },
    as: {
      shortDesc: "Gentle facial cleanser",
      description: "Gentle facial cleanser",
      benefits: "Deep cleansing, Refreshing",
      usage: "Use twice daily",
      warnings: "Avoid eyes"
    },
    ur: {
      shortDesc: "Gentle facial cleanser",
      description: "Gentle facial cleanser",
      benefits: "Deep cleansing, Refreshing",
      usage: "Use twice daily",
      warnings: "Avoid eyes"
    }
  },
  "CARE034": {
    en: {
      shortDesc: "Exfoliating face scrub",
      description: "Exfoliating face scrub",
      benefits: "Removes dead skin, Smooth texture",
      usage: "Use 2-3 times weekly",
      warnings: "Do not over-scrub"
    },
    hi: {
      shortDesc: "Exfoliating face scrub",
      description: "Exfoliating face scrub",
      benefits: "Removes dead skin, Smooth texture",
      usage: "Use 2-3 times weekly",
      warnings: "Do not over-scrub"
    },
    ta: {
      shortDesc: "Exfoliating face scrub",
      description: "Exfoliating face scrub",
      benefits: "Removes dead skin, Smooth texture",
      usage: "Use 2-3 times weekly",
      warnings: "Do not over-scrub"
    },
    te: {
      shortDesc: "Exfoliating face scrub",
      description: "Exfoliating face scrub",
      benefits: "Removes dead skin, Smooth texture",
      usage: "Use 2-3 times weekly",
      warnings: "Do not over-scrub"
    },
    bn: {
      shortDesc: "Exfoliating face scrub",
      description: "Exfoliating face scrub",
      benefits: "Removes dead skin, Smooth texture",
      usage: "Use 2-3 times weekly",
      warnings: "Do not over-scrub"
    },
    mr: {
      shortDesc: "Exfoliating face scrub",
      description: "Exfoliating face scrub",
      benefits: "Removes dead skin, Smooth texture",
      usage: "Use 2-3 times weekly",
      warnings: "Do not over-scrub"
    },
    gu: {
      shortDesc: "Exfoliating face scrub",
      description: "Exfoliating face scrub",
      benefits: "Removes dead skin, Smooth texture",
      usage: "Use 2-3 times weekly",
      warnings: "Do not over-scrub"
    },
    kn: {
      shortDesc: "Exfoliating face scrub",
      description: "Exfoliating face scrub",
      benefits: "Removes dead skin, Smooth texture",
      usage: "Use 2-3 times weekly",
      warnings: "Do not over-scrub"
    },
    ml: {
      shortDesc: "Exfoliating face scrub",
      description: "Exfoliating face scrub",
      benefits: "Removes dead skin, Smooth texture",
      usage: "Use 2-3 times weekly",
      warnings: "Do not over-scrub"
    },
    pa: {
      shortDesc: "Exfoliating face scrub",
      description: "Exfoliating face scrub",
      benefits: "Removes dead skin, Smooth texture",
      usage: "Use 2-3 times weekly",
      warnings: "Do not over-scrub"
    },
    or: {
      shortDesc: "Exfoliating face scrub",
      description: "Exfoliating face scrub",
      benefits: "Removes dead skin, Smooth texture",
      usage: "Use 2-3 times weekly",
      warnings: "Do not over-scrub"
    },
    as: {
      shortDesc: "Exfoliating face scrub",
      description: "Exfoliating face scrub",
      benefits: "Removes dead skin, Smooth texture",
      usage: "Use 2-3 times weekly",
      warnings: "Do not over-scrub"
    },
    ur: {
      shortDesc: "Exfoliating face scrub",
      description: "Exfoliating face scrub",
      benefits: "Removes dead skin, Smooth texture",
      usage: "Use 2-3 times weekly",
      warnings: "Do not over-scrub"
    }
  },
  "CARE035": {
    en: {
      shortDesc: "Makeup remover",
      description: "Makeup remover",
      benefits: "Gentle cleansing, No rinse needed",
      usage: "Apply with cotton pad",
      warnings: "Avoid eyes"
    },
    hi: {
      shortDesc: "Makeup remover",
      description: "Makeup remover",
      benefits: "Gentle cleansing, No rinse needed",
      usage: "Apply with cotton pad",
      warnings: "Avoid eyes"
    },
    ta: {
      shortDesc: "Makeup remover",
      description: "Makeup remover",
      benefits: "Gentle cleansing, No rinse needed",
      usage: "Apply with cotton pad",
      warnings: "Avoid eyes"
    },
    te: {
      shortDesc: "Makeup remover",
      description: "Makeup remover",
      benefits: "Gentle cleansing, No rinse needed",
      usage: "Apply with cotton pad",
      warnings: "Avoid eyes"
    },
    bn: {
      shortDesc: "Makeup remover",
      description: "Makeup remover",
      benefits: "Gentle cleansing, No rinse needed",
      usage: "Apply with cotton pad",
      warnings: "Avoid eyes"
    },
    mr: {
      shortDesc: "Makeup remover",
      description: "Makeup remover",
      benefits: "Gentle cleansing, No rinse needed",
      usage: "Apply with cotton pad",
      warnings: "Avoid eyes"
    },
    gu: {
      shortDesc: "Makeup remover",
      description: "Makeup remover",
      benefits: "Gentle cleansing, No rinse needed",
      usage: "Apply with cotton pad",
      warnings: "Avoid eyes"
    },
    kn: {
      shortDesc: "Makeup remover",
      description: "Makeup remover",
      benefits: "Gentle cleansing, No rinse needed",
      usage: "Apply with cotton pad",
      warnings: "Avoid eyes"
    },
    ml: {
      shortDesc: "Makeup remover",
      description: "Makeup remover",
      benefits: "Gentle cleansing, No rinse needed",
      usage: "Apply with cotton pad",
      warnings: "Avoid eyes"
    },
    pa: {
      shortDesc: "Makeup remover",
      description: "Makeup remover",
      benefits: "Gentle cleansing, No rinse needed",
      usage: "Apply with cotton pad",
      warnings: "Avoid eyes"
    },
    or: {
      shortDesc: "Makeup remover",
      description: "Makeup remover",
      benefits: "Gentle cleansing, No rinse needed",
      usage: "Apply with cotton pad",
      warnings: "Avoid eyes"
    },
    as: {
      shortDesc: "Makeup remover",
      description: "Makeup remover",
      benefits: "Gentle cleansing, No rinse needed",
      usage: "Apply with cotton pad",
      warnings: "Avoid eyes"
    },
    ur: {
      shortDesc: "Makeup remover",
      description: "Makeup remover",
      benefits: "Gentle cleansing, No rinse needed",
      usage: "Apply with cotton pad",
      warnings: "Avoid eyes"
    }
  },
  "DEV201": {
    en: {
      shortDesc: "Digital thermometer",
      description: "Digital thermometer",
      benefits: "Fast reading, Fever alarm",
      usage: "Place under tongue",
      warnings: "Clean after use"
    },
    hi: {
      shortDesc: "Digital thermometer",
      description: "Digital thermometer",
      benefits: "Fast reading, Fever alarm",
      usage: "Place under tongue",
      warnings: "Clean after use"
    },
    ta: {
      shortDesc: "Digital thermometer",
      description: "Digital thermometer",
      benefits: "Fast reading, Fever alarm",
      usage: "Place under tongue",
      warnings: "Clean after use"
    },
    te: {
      shortDesc: "Digital thermometer",
      description: "Digital thermometer",
      benefits: "Fast reading, Fever alarm",
      usage: "Place under tongue",
      warnings: "Clean after use"
    },
    bn: {
      shortDesc: "Digital thermometer",
      description: "Digital thermometer",
      benefits: "Fast reading, Fever alarm",
      usage: "Place under tongue",
      warnings: "Clean after use"
    },
    mr: {
      shortDesc: "Digital thermometer",
      description: "Digital thermometer",
      benefits: "Fast reading, Fever alarm",
      usage: "Place under tongue",
      warnings: "Clean after use"
    },
    gu: {
      shortDesc: "Digital thermometer",
      description: "Digital thermometer",
      benefits: "Fast reading, Fever alarm",
      usage: "Place under tongue",
      warnings: "Clean after use"
    },
    kn: {
      shortDesc: "Digital thermometer",
      description: "Digital thermometer",
      benefits: "Fast reading, Fever alarm",
      usage: "Place under tongue",
      warnings: "Clean after use"
    },
    ml: {
      shortDesc: "Digital thermometer",
      description: "Digital thermometer",
      benefits: "Fast reading, Fever alarm",
      usage: "Place under tongue",
      warnings: "Clean after use"
    },
    pa: {
      shortDesc: "Digital thermometer",
      description: "Digital thermometer",
      benefits: "Fast reading, Fever alarm",
      usage: "Place under tongue",
      warnings: "Clean after use"
    },
    or: {
      shortDesc: "Digital thermometer",
      description: "Digital thermometer",
      benefits: "Fast reading, Fever alarm",
      usage: "Place under tongue",
      warnings: "Clean after use"
    },
    as: {
      shortDesc: "Digital thermometer",
      description: "Digital thermometer",
      benefits: "Fast reading, Fever alarm",
      usage: "Place under tongue",
      warnings: "Clean after use"
    },
    ur: {
      shortDesc: "Digital thermometer",
      description: "Digital thermometer",
      benefits: "Fast reading, Fever alarm",
      usage: "Place under tongue",
      warnings: "Clean after use"
    }
  },
  "DEV202": {
    en: {
      shortDesc: "Blood pressure monitor",
      description: "Blood pressure monitor",
      benefits: "Automatic, Memory function",
      usage: "Wrap cuff around arm",
      warnings: "Follow instructions"
    },
    hi: {
      shortDesc: "Blood pressure monitor",
      description: "Blood pressure monitor",
      benefits: "Automatic, Memory function",
      usage: "Wrap cuff around arm",
      warnings: "Follow instructions"
    },
    ta: {
      shortDesc: "Blood pressure monitor",
      description: "Blood pressure monitor",
      benefits: "Automatic, Memory function",
      usage: "Wrap cuff around arm",
      warnings: "Follow instructions"
    },
    te: {
      shortDesc: "Blood pressure monitor",
      description: "Blood pressure monitor",
      benefits: "Automatic, Memory function",
      usage: "Wrap cuff around arm",
      warnings: "Follow instructions"
    },
    bn: {
      shortDesc: "Blood pressure monitor",
      description: "Blood pressure monitor",
      benefits: "Automatic, Memory function",
      usage: "Wrap cuff around arm",
      warnings: "Follow instructions"
    },
    mr: {
      shortDesc: "Blood pressure monitor",
      description: "Blood pressure monitor",
      benefits: "Automatic, Memory function",
      usage: "Wrap cuff around arm",
      warnings: "Follow instructions"
    },
    gu: {
      shortDesc: "Blood pressure monitor",
      description: "Blood pressure monitor",
      benefits: "Automatic, Memory function",
      usage: "Wrap cuff around arm",
      warnings: "Follow instructions"
    },
    kn: {
      shortDesc: "Blood pressure monitor",
      description: "Blood pressure monitor",
      benefits: "Automatic, Memory function",
      usage: "Wrap cuff around arm",
      warnings: "Follow instructions"
    },
    ml: {
      shortDesc: "Blood pressure monitor",
      description: "Blood pressure monitor",
      benefits: "Automatic, Memory function",
      usage: "Wrap cuff around arm",
      warnings: "Follow instructions"
    },
    pa: {
      shortDesc: "Blood pressure monitor",
      description: "Blood pressure monitor",
      benefits: "Automatic, Memory function",
      usage: "Wrap cuff around arm",
      warnings: "Follow instructions"
    },
    or: {
      shortDesc: "Blood pressure monitor",
      description: "Blood pressure monitor",
      benefits: "Automatic, Memory function",
      usage: "Wrap cuff around arm",
      warnings: "Follow instructions"
    },
    as: {
      shortDesc: "Blood pressure monitor",
      description: "Blood pressure monitor",
      benefits: "Automatic, Memory function",
      usage: "Wrap cuff around arm",
      warnings: "Follow instructions"
    },
    ur: {
      shortDesc: "Blood pressure monitor",
      description: "Blood pressure monitor",
      benefits: "Automatic, Memory function",
      usage: "Wrap cuff around arm",
      warnings: "Follow instructions"
    }
  },
  "DEV203": {
    en: {
      shortDesc: "Blood glucose meter",
      description: "Blood glucose meter",
      benefits: "Accurate, Fast results",
      usage: "Prick finger, test blood",
      warnings: "Dispose lancets safely"
    },
    hi: {
      shortDesc: "Blood glucose meter",
      description: "Blood glucose meter",
      benefits: "Accurate, Fast results",
      usage: "Prick finger, test blood",
      warnings: "Dispose lancets safely"
    },
    ta: {
      shortDesc: "Blood glucose meter",
      description: "Blood glucose meter",
      benefits: "Accurate, Fast results",
      usage: "Prick finger, test blood",
      warnings: "Dispose lancets safely"
    },
    te: {
      shortDesc: "Blood glucose meter",
      description: "Blood glucose meter",
      benefits: "Accurate, Fast results",
      usage: "Prick finger, test blood",
      warnings: "Dispose lancets safely"
    },
    bn: {
      shortDesc: "Blood glucose meter",
      description: "Blood glucose meter",
      benefits: "Accurate, Fast results",
      usage: "Prick finger, test blood",
      warnings: "Dispose lancets safely"
    },
    mr: {
      shortDesc: "Blood glucose meter",
      description: "Blood glucose meter",
      benefits: "Accurate, Fast results",
      usage: "Prick finger, test blood",
      warnings: "Dispose lancets safely"
    },
    gu: {
      shortDesc: "Blood glucose meter",
      description: "Blood glucose meter",
      benefits: "Accurate, Fast results",
      usage: "Prick finger, test blood",
      warnings: "Dispose lancets safely"
    },
    kn: {
      shortDesc: "Blood glucose meter",
      description: "Blood glucose meter",
      benefits: "Accurate, Fast results",
      usage: "Prick finger, test blood",
      warnings: "Dispose lancets safely"
    },
    ml: {
      shortDesc: "Blood glucose meter",
      description: "Blood glucose meter",
      benefits: "Accurate, Fast results",
      usage: "Prick finger, test blood",
      warnings: "Dispose lancets safely"
    },
    pa: {
      shortDesc: "Blood glucose meter",
      description: "Blood glucose meter",
      benefits: "Accurate, Fast results",
      usage: "Prick finger, test blood",
      warnings: "Dispose lancets safely"
    },
    or: {
      shortDesc: "Blood glucose meter",
      description: "Blood glucose meter",
      benefits: "Accurate, Fast results",
      usage: "Prick finger, test blood",
      warnings: "Dispose lancets safely"
    },
    as: {
      shortDesc: "Blood glucose meter",
      description: "Blood glucose meter",
      benefits: "Accurate, Fast results",
      usage: "Prick finger, test blood",
      warnings: "Dispose lancets safely"
    },
    ur: {
      shortDesc: "Blood glucose meter",
      description: "Blood glucose meter",
      benefits: "Accurate, Fast results",
      usage: "Prick finger, test blood",
      warnings: "Dispose lancets safely"
    }
  },
  "DEV204": {
    en: {
      shortDesc: "Pulse oximeter",
      description: "Pulse oximeter",
      benefits: "Measures SpO2, LED display",
      usage: "Insert finger",
      warnings: "Not for continuous monitoring"
    },
    hi: {
      shortDesc: "Pulse oximeter",
      description: "Pulse oximeter",
      benefits: "Measures SpO2, LED display",
      usage: "Insert finger",
      warnings: "Not for continuous monitoring"
    },
    ta: {
      shortDesc: "Pulse oximeter",
      description: "Pulse oximeter",
      benefits: "Measures SpO2, LED display",
      usage: "Insert finger",
      warnings: "Not for continuous monitoring"
    },
    te: {
      shortDesc: "Pulse oximeter",
      description: "Pulse oximeter",
      benefits: "Measures SpO2, LED display",
      usage: "Insert finger",
      warnings: "Not for continuous monitoring"
    },
    bn: {
      shortDesc: "Pulse oximeter",
      description: "Pulse oximeter",
      benefits: "Measures SpO2, LED display",
      usage: "Insert finger",
      warnings: "Not for continuous monitoring"
    },
    mr: {
      shortDesc: "Pulse oximeter",
      description: "Pulse oximeter",
      benefits: "Measures SpO2, LED display",
      usage: "Insert finger",
      warnings: "Not for continuous monitoring"
    },
    gu: {
      shortDesc: "Pulse oximeter",
      description: "Pulse oximeter",
      benefits: "Measures SpO2, LED display",
      usage: "Insert finger",
      warnings: "Not for continuous monitoring"
    },
    kn: {
      shortDesc: "Pulse oximeter",
      description: "Pulse oximeter",
      benefits: "Measures SpO2, LED display",
      usage: "Insert finger",
      warnings: "Not for continuous monitoring"
    },
    ml: {
      shortDesc: "Pulse oximeter",
      description: "Pulse oximeter",
      benefits: "Measures SpO2, LED display",
      usage: "Insert finger",
      warnings: "Not for continuous monitoring"
    },
    pa: {
      shortDesc: "Pulse oximeter",
      description: "Pulse oximeter",
      benefits: "Measures SpO2, LED display",
      usage: "Insert finger",
      warnings: "Not for continuous monitoring"
    },
    or: {
      shortDesc: "Pulse oximeter",
      description: "Pulse oximeter",
      benefits: "Measures SpO2, LED display",
      usage: "Insert finger",
      warnings: "Not for continuous monitoring"
    },
    as: {
      shortDesc: "Pulse oximeter",
      description: "Pulse oximeter",
      benefits: "Measures SpO2, LED display",
      usage: "Insert finger",
      warnings: "Not for continuous monitoring"
    },
    ur: {
      shortDesc: "Pulse oximeter",
      description: "Pulse oximeter",
      benefits: "Measures SpO2, LED display",
      usage: "Insert finger",
      warnings: "Not for continuous monitoring"
    }
  },
  "DEV205": {
    en: {
      shortDesc: "Portable nebulizer",
      description: "Portable nebulizer",
      benefits: "Quiet operation, Fast treatment",
      usage: "Add medication, inhale",
      warnings: "Clean after use"
    },
    hi: {
      shortDesc: "Portable nebulizer",
      description: "Portable nebulizer",
      benefits: "Quiet operation, Fast treatment",
      usage: "Add medication, inhale",
      warnings: "Clean after use"
    },
    ta: {
      shortDesc: "Portable nebulizer",
      description: "Portable nebulizer",
      benefits: "Quiet operation, Fast treatment",
      usage: "Add medication, inhale",
      warnings: "Clean after use"
    },
    te: {
      shortDesc: "Portable nebulizer",
      description: "Portable nebulizer",
      benefits: "Quiet operation, Fast treatment",
      usage: "Add medication, inhale",
      warnings: "Clean after use"
    },
    bn: {
      shortDesc: "Portable nebulizer",
      description: "Portable nebulizer",
      benefits: "Quiet operation, Fast treatment",
      usage: "Add medication, inhale",
      warnings: "Clean after use"
    },
    mr: {
      shortDesc: "Portable nebulizer",
      description: "Portable nebulizer",
      benefits: "Quiet operation, Fast treatment",
      usage: "Add medication, inhale",
      warnings: "Clean after use"
    },
    gu: {
      shortDesc: "Portable nebulizer",
      description: "Portable nebulizer",
      benefits: "Quiet operation, Fast treatment",
      usage: "Add medication, inhale",
      warnings: "Clean after use"
    },
    kn: {
      shortDesc: "Portable nebulizer",
      description: "Portable nebulizer",
      benefits: "Quiet operation, Fast treatment",
      usage: "Add medication, inhale",
      warnings: "Clean after use"
    },
    ml: {
      shortDesc: "Portable nebulizer",
      description: "Portable nebulizer",
      benefits: "Quiet operation, Fast treatment",
      usage: "Add medication, inhale",
      warnings: "Clean after use"
    },
    pa: {
      shortDesc: "Portable nebulizer",
      description: "Portable nebulizer",
      benefits: "Quiet operation, Fast treatment",
      usage: "Add medication, inhale",
      warnings: "Clean after use"
    },
    or: {
      shortDesc: "Portable nebulizer",
      description: "Portable nebulizer",
      benefits: "Quiet operation, Fast treatment",
      usage: "Add medication, inhale",
      warnings: "Clean after use"
    },
    as: {
      shortDesc: "Portable nebulizer",
      description: "Portable nebulizer",
      benefits: "Quiet operation, Fast treatment",
      usage: "Add medication, inhale",
      warnings: "Clean after use"
    },
    ur: {
      shortDesc: "Portable nebulizer",
      description: "Portable nebulizer",
      benefits: "Quiet operation, Fast treatment",
      usage: "Add medication, inhale",
      warnings: "Clean after use"
    }
  },
  "DEV206": {
    en: {
      shortDesc: "Digital weighing scale",
      description: "Digital weighing scale",
      benefits: "High precision, Large display",
      usage: "Step on scale",
      warnings: "Use on flat surface"
    },
    hi: {
      shortDesc: "Digital weighing scale",
      description: "Digital weighing scale",
      benefits: "High precision, Large display",
      usage: "Step on scale",
      warnings: "Use on flat surface"
    },
    ta: {
      shortDesc: "Digital weighing scale",
      description: "Digital weighing scale",
      benefits: "High precision, Large display",
      usage: "Step on scale",
      warnings: "Use on flat surface"
    },
    te: {
      shortDesc: "Digital weighing scale",
      description: "Digital weighing scale",
      benefits: "High precision, Large display",
      usage: "Step on scale",
      warnings: "Use on flat surface"
    },
    bn: {
      shortDesc: "Digital weighing scale",
      description: "Digital weighing scale",
      benefits: "High precision, Large display",
      usage: "Step on scale",
      warnings: "Use on flat surface"
    },
    mr: {
      shortDesc: "Digital weighing scale",
      description: "Digital weighing scale",
      benefits: "High precision, Large display",
      usage: "Step on scale",
      warnings: "Use on flat surface"
    },
    gu: {
      shortDesc: "Digital weighing scale",
      description: "Digital weighing scale",
      benefits: "High precision, Large display",
      usage: "Step on scale",
      warnings: "Use on flat surface"
    },
    kn: {
      shortDesc: "Digital weighing scale",
      description: "Digital weighing scale",
      benefits: "High precision, Large display",
      usage: "Step on scale",
      warnings: "Use on flat surface"
    },
    ml: {
      shortDesc: "Digital weighing scale",
      description: "Digital weighing scale",
      benefits: "High precision, Large display",
      usage: "Step on scale",
      warnings: "Use on flat surface"
    },
    pa: {
      shortDesc: "Digital weighing scale",
      description: "Digital weighing scale",
      benefits: "High precision, Large display",
      usage: "Step on scale",
      warnings: "Use on flat surface"
    },
    or: {
      shortDesc: "Digital weighing scale",
      description: "Digital weighing scale",
      benefits: "High precision, Large display",
      usage: "Step on scale",
      warnings: "Use on flat surface"
    },
    as: {
      shortDesc: "Digital weighing scale",
      description: "Digital weighing scale",
      benefits: "High precision, Large display",
      usage: "Step on scale",
      warnings: "Use on flat surface"
    },
    ur: {
      shortDesc: "Digital weighing scale",
      description: "Digital weighing scale",
      benefits: "High precision, Large display",
      usage: "Step on scale",
      warnings: "Use on flat surface"
    }
  },
  "DEV207": {
    en: {
      shortDesc: "Activity tracker",
      description: "Activity tracker",
      benefits: "Tracks steps, Heart rate monitor",
      usage: "Wear on wrist",
      warnings: "Charge regularly"
    },
    hi: {
      shortDesc: "Activity tracker",
      description: "Activity tracker",
      benefits: "Tracks steps, Heart rate monitor",
      usage: "Wear on wrist",
      warnings: "Charge regularly"
    },
    ta: {
      shortDesc: "Activity tracker",
      description: "Activity tracker",
      benefits: "Tracks steps, Heart rate monitor",
      usage: "Wear on wrist",
      warnings: "Charge regularly"
    },
    te: {
      shortDesc: "Activity tracker",
      description: "Activity tracker",
      benefits: "Tracks steps, Heart rate monitor",
      usage: "Wear on wrist",
      warnings: "Charge regularly"
    },
    bn: {
      shortDesc: "Activity tracker",
      description: "Activity tracker",
      benefits: "Tracks steps, Heart rate monitor",
      usage: "Wear on wrist",
      warnings: "Charge regularly"
    },
    mr: {
      shortDesc: "Activity tracker",
      description: "Activity tracker",
      benefits: "Tracks steps, Heart rate monitor",
      usage: "Wear on wrist",
      warnings: "Charge regularly"
    },
    gu: {
      shortDesc: "Activity tracker",
      description: "Activity tracker",
      benefits: "Tracks steps, Heart rate monitor",
      usage: "Wear on wrist",
      warnings: "Charge regularly"
    },
    kn: {
      shortDesc: "Activity tracker",
      description: "Activity tracker",
      benefits: "Tracks steps, Heart rate monitor",
      usage: "Wear on wrist",
      warnings: "Charge regularly"
    },
    ml: {
      shortDesc: "Activity tracker",
      description: "Activity tracker",
      benefits: "Tracks steps, Heart rate monitor",
      usage: "Wear on wrist",
      warnings: "Charge regularly"
    },
    pa: {
      shortDesc: "Activity tracker",
      description: "Activity tracker",
      benefits: "Tracks steps, Heart rate monitor",
      usage: "Wear on wrist",
      warnings: "Charge regularly"
    },
    or: {
      shortDesc: "Activity tracker",
      description: "Activity tracker",
      benefits: "Tracks steps, Heart rate monitor",
      usage: "Wear on wrist",
      warnings: "Charge regularly"
    },
    as: {
      shortDesc: "Activity tracker",
      description: "Activity tracker",
      benefits: "Tracks steps, Heart rate monitor",
      usage: "Wear on wrist",
      warnings: "Charge regularly"
    },
    ur: {
      shortDesc: "Activity tracker",
      description: "Activity tracker",
      benefits: "Tracks steps, Heart rate monitor",
      usage: "Wear on wrist",
      warnings: "Charge regularly"
    }
  },
  "DEV208": {
    en: {
      shortDesc: "Step counter",
      description: "Step counter",
      benefits: "Tracks steps, Calorie counter",
      usage: "Clip to belt",
      warnings: "Replace battery"
    },
    hi: {
      shortDesc: "Step counter",
      description: "Step counter",
      benefits: "Tracks steps, Calorie counter",
      usage: "Clip to belt",
      warnings: "Replace battery"
    },
    ta: {
      shortDesc: "Step counter",
      description: "Step counter",
      benefits: "Tracks steps, Calorie counter",
      usage: "Clip to belt",
      warnings: "Replace battery"
    },
    te: {
      shortDesc: "Step counter",
      description: "Step counter",
      benefits: "Tracks steps, Calorie counter",
      usage: "Clip to belt",
      warnings: "Replace battery"
    },
    bn: {
      shortDesc: "Step counter",
      description: "Step counter",
      benefits: "Tracks steps, Calorie counter",
      usage: "Clip to belt",
      warnings: "Replace battery"
    },
    mr: {
      shortDesc: "Step counter",
      description: "Step counter",
      benefits: "Tracks steps, Calorie counter",
      usage: "Clip to belt",
      warnings: "Replace battery"
    },
    gu: {
      shortDesc: "Step counter",
      description: "Step counter",
      benefits: "Tracks steps, Calorie counter",
      usage: "Clip to belt",
      warnings: "Replace battery"
    },
    kn: {
      shortDesc: "Step counter",
      description: "Step counter",
      benefits: "Tracks steps, Calorie counter",
      usage: "Clip to belt",
      warnings: "Replace battery"
    },
    ml: {
      shortDesc: "Step counter",
      description: "Step counter",
      benefits: "Tracks steps, Calorie counter",
      usage: "Clip to belt",
      warnings: "Replace battery"
    },
    pa: {
      shortDesc: "Step counter",
      description: "Step counter",
      benefits: "Tracks steps, Calorie counter",
      usage: "Clip to belt",
      warnings: "Replace battery"
    },
    or: {
      shortDesc: "Step counter",
      description: "Step counter",
      benefits: "Tracks steps, Calorie counter",
      usage: "Clip to belt",
      warnings: "Replace battery"
    },
    as: {
      shortDesc: "Step counter",
      description: "Step counter",
      benefits: "Tracks steps, Calorie counter",
      usage: "Clip to belt",
      warnings: "Replace battery"
    },
    ur: {
      shortDesc: "Step counter",
      description: "Step counter",
      benefits: "Tracks steps, Calorie counter",
      usage: "Clip to belt",
      warnings: "Replace battery"
    }
  },
  "DEV209": {
    en: {
      shortDesc: "ECG monitor",
      description: "ECG monitor",
      benefits: "Detects irregularities, Portable",
      usage: "Place on chest",
      warnings: "Not for diagnosis"
    },
    hi: {
      shortDesc: "ECG monitor",
      description: "ECG monitor",
      benefits: "Detects irregularities, Portable",
      usage: "Place on chest",
      warnings: "Not for diagnosis"
    },
    ta: {
      shortDesc: "ECG monitor",
      description: "ECG monitor",
      benefits: "Detects irregularities, Portable",
      usage: "Place on chest",
      warnings: "Not for diagnosis"
    },
    te: {
      shortDesc: "ECG monitor",
      description: "ECG monitor",
      benefits: "Detects irregularities, Portable",
      usage: "Place on chest",
      warnings: "Not for diagnosis"
    },
    bn: {
      shortDesc: "ECG monitor",
      description: "ECG monitor",
      benefits: "Detects irregularities, Portable",
      usage: "Place on chest",
      warnings: "Not for diagnosis"
    },
    mr: {
      shortDesc: "ECG monitor",
      description: "ECG monitor",
      benefits: "Detects irregularities, Portable",
      usage: "Place on chest",
      warnings: "Not for diagnosis"
    },
    gu: {
      shortDesc: "ECG monitor",
      description: "ECG monitor",
      benefits: "Detects irregularities, Portable",
      usage: "Place on chest",
      warnings: "Not for diagnosis"
    },
    kn: {
      shortDesc: "ECG monitor",
      description: "ECG monitor",
      benefits: "Detects irregularities, Portable",
      usage: "Place on chest",
      warnings: "Not for diagnosis"
    },
    ml: {
      shortDesc: "ECG monitor",
      description: "ECG monitor",
      benefits: "Detects irregularities, Portable",
      usage: "Place on chest",
      warnings: "Not for diagnosis"
    },
    pa: {
      shortDesc: "ECG monitor",
      description: "ECG monitor",
      benefits: "Detects irregularities, Portable",
      usage: "Place on chest",
      warnings: "Not for diagnosis"
    },
    or: {
      shortDesc: "ECG monitor",
      description: "ECG monitor",
      benefits: "Detects irregularities, Portable",
      usage: "Place on chest",
      warnings: "Not for diagnosis"
    },
    as: {
      shortDesc: "ECG monitor",
      description: "ECG monitor",
      benefits: "Detects irregularities, Portable",
      usage: "Place on chest",
      warnings: "Not for diagnosis"
    },
    ur: {
      shortDesc: "ECG monitor",
      description: "ECG monitor",
      benefits: "Detects irregularities, Portable",
      usage: "Place on chest",
      warnings: "Not for diagnosis"
    }
  },
  "DEV210": {
    en: {
      shortDesc: "Sleep quality monitor",
      description: "Sleep quality monitor",
      benefits: "Tracks sleep, Smart alarm",
      usage: "Place under mattress",
      warnings: "Sync with app"
    },
    hi: {
      shortDesc: "Sleep quality monitor",
      description: "Sleep quality monitor",
      benefits: "Tracks sleep, Smart alarm",
      usage: "Place under mattress",
      warnings: "Sync with app"
    },
    ta: {
      shortDesc: "Sleep quality monitor",
      description: "Sleep quality monitor",
      benefits: "Tracks sleep, Smart alarm",
      usage: "Place under mattress",
      warnings: "Sync with app"
    },
    te: {
      shortDesc: "Sleep quality monitor",
      description: "Sleep quality monitor",
      benefits: "Tracks sleep, Smart alarm",
      usage: "Place under mattress",
      warnings: "Sync with app"
    },
    bn: {
      shortDesc: "Sleep quality monitor",
      description: "Sleep quality monitor",
      benefits: "Tracks sleep, Smart alarm",
      usage: "Place under mattress",
      warnings: "Sync with app"
    },
    mr: {
      shortDesc: "Sleep quality monitor",
      description: "Sleep quality monitor",
      benefits: "Tracks sleep, Smart alarm",
      usage: "Place under mattress",
      warnings: "Sync with app"
    },
    gu: {
      shortDesc: "Sleep quality monitor",
      description: "Sleep quality monitor",
      benefits: "Tracks sleep, Smart alarm",
      usage: "Place under mattress",
      warnings: "Sync with app"
    },
    kn: {
      shortDesc: "Sleep quality monitor",
      description: "Sleep quality monitor",
      benefits: "Tracks sleep, Smart alarm",
      usage: "Place under mattress",
      warnings: "Sync with app"
    },
    ml: {
      shortDesc: "Sleep quality monitor",
      description: "Sleep quality monitor",
      benefits: "Tracks sleep, Smart alarm",
      usage: "Place under mattress",
      warnings: "Sync with app"
    },
    pa: {
      shortDesc: "Sleep quality monitor",
      description: "Sleep quality monitor",
      benefits: "Tracks sleep, Smart alarm",
      usage: "Place under mattress",
      warnings: "Sync with app"
    },
    or: {
      shortDesc: "Sleep quality monitor",
      description: "Sleep quality monitor",
      benefits: "Tracks sleep, Smart alarm",
      usage: "Place under mattress",
      warnings: "Sync with app"
    },
    as: {
      shortDesc: "Sleep quality monitor",
      description: "Sleep quality monitor",
      benefits: "Tracks sleep, Smart alarm",
      usage: "Place under mattress",
      warnings: "Sync with app"
    },
    ur: {
      shortDesc: "Sleep quality monitor",
      description: "Sleep quality monitor",
      benefits: "Tracks sleep, Smart alarm",
      usage: "Place under mattress",
      warnings: "Sync with app"
    }
  },
  "DEV211": {
    en: {
      shortDesc: "Medical stethoscope",
      description: "Medical stethoscope",
      benefits: "Clear sound, Durable",
      usage: "Listen to heart/lungs",
      warnings: "Clean regularly"
    },
    hi: {
      shortDesc: "Medical stethoscope",
      description: "Medical stethoscope",
      benefits: "Clear sound, Durable",
      usage: "Listen to heart/lungs",
      warnings: "Clean regularly"
    },
    ta: {
      shortDesc: "Medical stethoscope",
      description: "Medical stethoscope",
      benefits: "Clear sound, Durable",
      usage: "Listen to heart/lungs",
      warnings: "Clean regularly"
    },
    te: {
      shortDesc: "Medical stethoscope",
      description: "Medical stethoscope",
      benefits: "Clear sound, Durable",
      usage: "Listen to heart/lungs",
      warnings: "Clean regularly"
    },
    bn: {
      shortDesc: "Medical stethoscope",
      description: "Medical stethoscope",
      benefits: "Clear sound, Durable",
      usage: "Listen to heart/lungs",
      warnings: "Clean regularly"
    },
    mr: {
      shortDesc: "Medical stethoscope",
      description: "Medical stethoscope",
      benefits: "Clear sound, Durable",
      usage: "Listen to heart/lungs",
      warnings: "Clean regularly"
    },
    gu: {
      shortDesc: "Medical stethoscope",
      description: "Medical stethoscope",
      benefits: "Clear sound, Durable",
      usage: "Listen to heart/lungs",
      warnings: "Clean regularly"
    },
    kn: {
      shortDesc: "Medical stethoscope",
      description: "Medical stethoscope",
      benefits: "Clear sound, Durable",
      usage: "Listen to heart/lungs",
      warnings: "Clean regularly"
    },
    ml: {
      shortDesc: "Medical stethoscope",
      description: "Medical stethoscope",
      benefits: "Clear sound, Durable",
      usage: "Listen to heart/lungs",
      warnings: "Clean regularly"
    },
    pa: {
      shortDesc: "Medical stethoscope",
      description: "Medical stethoscope",
      benefits: "Clear sound, Durable",
      usage: "Listen to heart/lungs",
      warnings: "Clean regularly"
    },
    or: {
      shortDesc: "Medical stethoscope",
      description: "Medical stethoscope",
      benefits: "Clear sound, Durable",
      usage: "Listen to heart/lungs",
      warnings: "Clean regularly"
    },
    as: {
      shortDesc: "Medical stethoscope",
      description: "Medical stethoscope",
      benefits: "Clear sound, Durable",
      usage: "Listen to heart/lungs",
      warnings: "Clean regularly"
    },
    ur: {
      shortDesc: "Medical stethoscope",
      description: "Medical stethoscope",
      benefits: "Clear sound, Durable",
      usage: "Listen to heart/lungs",
      warnings: "Clean regularly"
    }
  },
  "DEV212": {
    en: {
      shortDesc: "Non-contact thermometer",
      description: "Non-contact thermometer",
      benefits: "Instant reading, Hygienic",
      usage: "Point at forehead",
      warnings: "Keep clean"
    },
    hi: {
      shortDesc: "Non-contact thermometer",
      description: "Non-contact thermometer",
      benefits: "Instant reading, Hygienic",
      usage: "Point at forehead",
      warnings: "Keep clean"
    },
    ta: {
      shortDesc: "Non-contact thermometer",
      description: "Non-contact thermometer",
      benefits: "Instant reading, Hygienic",
      usage: "Point at forehead",
      warnings: "Keep clean"
    },
    te: {
      shortDesc: "Non-contact thermometer",
      description: "Non-contact thermometer",
      benefits: "Instant reading, Hygienic",
      usage: "Point at forehead",
      warnings: "Keep clean"
    },
    bn: {
      shortDesc: "Non-contact thermometer",
      description: "Non-contact thermometer",
      benefits: "Instant reading, Hygienic",
      usage: "Point at forehead",
      warnings: "Keep clean"
    },
    mr: {
      shortDesc: "Non-contact thermometer",
      description: "Non-contact thermometer",
      benefits: "Instant reading, Hygienic",
      usage: "Point at forehead",
      warnings: "Keep clean"
    },
    gu: {
      shortDesc: "Non-contact thermometer",
      description: "Non-contact thermometer",
      benefits: "Instant reading, Hygienic",
      usage: "Point at forehead",
      warnings: "Keep clean"
    },
    kn: {
      shortDesc: "Non-contact thermometer",
      description: "Non-contact thermometer",
      benefits: "Instant reading, Hygienic",
      usage: "Point at forehead",
      warnings: "Keep clean"
    },
    ml: {
      shortDesc: "Non-contact thermometer",
      description: "Non-contact thermometer",
      benefits: "Instant reading, Hygienic",
      usage: "Point at forehead",
      warnings: "Keep clean"
    },
    pa: {
      shortDesc: "Non-contact thermometer",
      description: "Non-contact thermometer",
      benefits: "Instant reading, Hygienic",
      usage: "Point at forehead",
      warnings: "Keep clean"
    },
    or: {
      shortDesc: "Non-contact thermometer",
      description: "Non-contact thermometer",
      benefits: "Instant reading, Hygienic",
      usage: "Point at forehead",
      warnings: "Keep clean"
    },
    as: {
      shortDesc: "Non-contact thermometer",
      description: "Non-contact thermometer",
      benefits: "Instant reading, Hygienic",
      usage: "Point at forehead",
      warnings: "Keep clean"
    },
    ur: {
      shortDesc: "Non-contact thermometer",
      description: "Non-contact thermometer",
      benefits: "Instant reading, Hygienic",
      usage: "Point at forehead",
      warnings: "Keep clean"
    }
  },
  "DEV213": {
    en: {
      shortDesc: "Electric heating pad",
      description: "Electric heating pad",
      benefits: "Pain relief, 3 heat settings",
      usage: "Apply to affected area",
      warnings: "Do not sleep with it"
    },
    hi: {
      shortDesc: "Electric heating pad",
      description: "Electric heating pad",
      benefits: "Pain relief, 3 heat settings",
      usage: "Apply to affected area",
      warnings: "Do not sleep with it"
    },
    ta: {
      shortDesc: "Electric heating pad",
      description: "Electric heating pad",
      benefits: "Pain relief, 3 heat settings",
      usage: "Apply to affected area",
      warnings: "Do not sleep with it"
    },
    te: {
      shortDesc: "Electric heating pad",
      description: "Electric heating pad",
      benefits: "Pain relief, 3 heat settings",
      usage: "Apply to affected area",
      warnings: "Do not sleep with it"
    },
    bn: {
      shortDesc: "Electric heating pad",
      description: "Electric heating pad",
      benefits: "Pain relief, 3 heat settings",
      usage: "Apply to affected area",
      warnings: "Do not sleep with it"
    },
    mr: {
      shortDesc: "Electric heating pad",
      description: "Electric heating pad",
      benefits: "Pain relief, 3 heat settings",
      usage: "Apply to affected area",
      warnings: "Do not sleep with it"
    },
    gu: {
      shortDesc: "Electric heating pad",
      description: "Electric heating pad",
      benefits: "Pain relief, 3 heat settings",
      usage: "Apply to affected area",
      warnings: "Do not sleep with it"
    },
    kn: {
      shortDesc: "Electric heating pad",
      description: "Electric heating pad",
      benefits: "Pain relief, 3 heat settings",
      usage: "Apply to affected area",
      warnings: "Do not sleep with it"
    },
    ml: {
      shortDesc: "Electric heating pad",
      description: "Electric heating pad",
      benefits: "Pain relief, 3 heat settings",
      usage: "Apply to affected area",
      warnings: "Do not sleep with it"
    },
    pa: {
      shortDesc: "Electric heating pad",
      description: "Electric heating pad",
      benefits: "Pain relief, 3 heat settings",
      usage: "Apply to affected area",
      warnings: "Do not sleep with it"
    },
    or: {
      shortDesc: "Electric heating pad",
      description: "Electric heating pad",
      benefits: "Pain relief, 3 heat settings",
      usage: "Apply to affected area",
      warnings: "Do not sleep with it"
    },
    as: {
      shortDesc: "Electric heating pad",
      description: "Electric heating pad",
      benefits: "Pain relief, 3 heat settings",
      usage: "Apply to affected area",
      warnings: "Do not sleep with it"
    },
    ur: {
      shortDesc: "Electric heating pad",
      description: "Electric heating pad",
      benefits: "Pain relief, 3 heat settings",
      usage: "Apply to affected area",
      warnings: "Do not sleep with it"
    }
  },
  "DEV214": {
    en: {
      shortDesc: "Reusable ice pack",
      description: "Reusable ice pack",
      benefits: "Reduces swelling, Reusable",
      usage: "Freeze before use",
      warnings: "Wrap in cloth"
    },
    hi: {
      shortDesc: "Reusable ice pack",
      description: "Reusable ice pack",
      benefits: "Reduces swelling, Reusable",
      usage: "Freeze before use",
      warnings: "Wrap in cloth"
    },
    ta: {
      shortDesc: "Reusable ice pack",
      description: "Reusable ice pack",
      benefits: "Reduces swelling, Reusable",
      usage: "Freeze before use",
      warnings: "Wrap in cloth"
    },
    te: {
      shortDesc: "Reusable ice pack",
      description: "Reusable ice pack",
      benefits: "Reduces swelling, Reusable",
      usage: "Freeze before use",
      warnings: "Wrap in cloth"
    },
    bn: {
      shortDesc: "Reusable ice pack",
      description: "Reusable ice pack",
      benefits: "Reduces swelling, Reusable",
      usage: "Freeze before use",
      warnings: "Wrap in cloth"
    },
    mr: {
      shortDesc: "Reusable ice pack",
      description: "Reusable ice pack",
      benefits: "Reduces swelling, Reusable",
      usage: "Freeze before use",
      warnings: "Wrap in cloth"
    },
    gu: {
      shortDesc: "Reusable ice pack",
      description: "Reusable ice pack",
      benefits: "Reduces swelling, Reusable",
      usage: "Freeze before use",
      warnings: "Wrap in cloth"
    },
    kn: {
      shortDesc: "Reusable ice pack",
      description: "Reusable ice pack",
      benefits: "Reduces swelling, Reusable",
      usage: "Freeze before use",
      warnings: "Wrap in cloth"
    },
    ml: {
      shortDesc: "Reusable ice pack",
      description: "Reusable ice pack",
      benefits: "Reduces swelling, Reusable",
      usage: "Freeze before use",
      warnings: "Wrap in cloth"
    },
    pa: {
      shortDesc: "Reusable ice pack",
      description: "Reusable ice pack",
      benefits: "Reduces swelling, Reusable",
      usage: "Freeze before use",
      warnings: "Wrap in cloth"
    },
    or: {
      shortDesc: "Reusable ice pack",
      description: "Reusable ice pack",
      benefits: "Reduces swelling, Reusable",
      usage: "Freeze before use",
      warnings: "Wrap in cloth"
    },
    as: {
      shortDesc: "Reusable ice pack",
      description: "Reusable ice pack",
      benefits: "Reduces swelling, Reusable",
      usage: "Freeze before use",
      warnings: "Wrap in cloth"
    },
    ur: {
      shortDesc: "Reusable ice pack",
      description: "Reusable ice pack",
      benefits: "Reduces swelling, Reusable",
      usage: "Freeze before use",
      warnings: "Wrap in cloth"
    }
  },
  "DEV215": {
    en: {
      shortDesc: "Medical compression socks",
      description: "Medical compression socks",
      benefits: "Improves circulation, Reduces swelling",
      usage: "Wear during day",
      warnings: "Wash regularly"
    },
    hi: {
      shortDesc: "Medical compression socks",
      description: "Medical compression socks",
      benefits: "Improves circulation, Reduces swelling",
      usage: "Wear during day",
      warnings: "Wash regularly"
    },
    ta: {
      shortDesc: "Medical compression socks",
      description: "Medical compression socks",
      benefits: "Improves circulation, Reduces swelling",
      usage: "Wear during day",
      warnings: "Wash regularly"
    },
    te: {
      shortDesc: "Medical compression socks",
      description: "Medical compression socks",
      benefits: "Improves circulation, Reduces swelling",
      usage: "Wear during day",
      warnings: "Wash regularly"
    },
    bn: {
      shortDesc: "Medical compression socks",
      description: "Medical compression socks",
      benefits: "Improves circulation, Reduces swelling",
      usage: "Wear during day",
      warnings: "Wash regularly"
    },
    mr: {
      shortDesc: "Medical compression socks",
      description: "Medical compression socks",
      benefits: "Improves circulation, Reduces swelling",
      usage: "Wear during day",
      warnings: "Wash regularly"
    },
    gu: {
      shortDesc: "Medical compression socks",
      description: "Medical compression socks",
      benefits: "Improves circulation, Reduces swelling",
      usage: "Wear during day",
      warnings: "Wash regularly"
    },
    kn: {
      shortDesc: "Medical compression socks",
      description: "Medical compression socks",
      benefits: "Improves circulation, Reduces swelling",
      usage: "Wear during day",
      warnings: "Wash regularly"
    },
    ml: {
      shortDesc: "Medical compression socks",
      description: "Medical compression socks",
      benefits: "Improves circulation, Reduces swelling",
      usage: "Wear during day",
      warnings: "Wash regularly"
    },
    pa: {
      shortDesc: "Medical compression socks",
      description: "Medical compression socks",
      benefits: "Improves circulation, Reduces swelling",
      usage: "Wear during day",
      warnings: "Wash regularly"
    },
    or: {
      shortDesc: "Medical compression socks",
      description: "Medical compression socks",
      benefits: "Improves circulation, Reduces swelling",
      usage: "Wear during day",
      warnings: "Wash regularly"
    },
    as: {
      shortDesc: "Medical compression socks",
      description: "Medical compression socks",
      benefits: "Improves circulation, Reduces swelling",
      usage: "Wear during day",
      warnings: "Wash regularly"
    },
    ur: {
      shortDesc: "Medical compression socks",
      description: "Medical compression socks",
      benefits: "Improves circulation, Reduces swelling",
      usage: "Wear during day",
      warnings: "Wash regularly"
    }
  },
  "DEV216": {
    en: {
      shortDesc: "Test strips pack of 50",
      description: "Test strips pack of 50",
      benefits: "Accurate, Easy to use",
      usage: "Use with glucometer",
      warnings: "Check expiry"
    },
    hi: {
      shortDesc: "Test strips pack of 50",
      description: "Test strips pack of 50",
      benefits: "Accurate, Easy to use",
      usage: "Use with glucometer",
      warnings: "Check expiry"
    },
    ta: {
      shortDesc: "Test strips pack of 50",
      description: "Test strips pack of 50",
      benefits: "Accurate, Easy to use",
      usage: "Use with glucometer",
      warnings: "Check expiry"
    },
    te: {
      shortDesc: "Test strips pack of 50",
      description: "Test strips pack of 50",
      benefits: "Accurate, Easy to use",
      usage: "Use with glucometer",
      warnings: "Check expiry"
    },
    bn: {
      shortDesc: "Test strips pack of 50",
      description: "Test strips pack of 50",
      benefits: "Accurate, Easy to use",
      usage: "Use with glucometer",
      warnings: "Check expiry"
    },
    mr: {
      shortDesc: "Test strips pack of 50",
      description: "Test strips pack of 50",
      benefits: "Accurate, Easy to use",
      usage: "Use with glucometer",
      warnings: "Check expiry"
    },
    gu: {
      shortDesc: "Test strips pack of 50",
      description: "Test strips pack of 50",
      benefits: "Accurate, Easy to use",
      usage: "Use with glucometer",
      warnings: "Check expiry"
    },
    kn: {
      shortDesc: "Test strips pack of 50",
      description: "Test strips pack of 50",
      benefits: "Accurate, Easy to use",
      usage: "Use with glucometer",
      warnings: "Check expiry"
    },
    ml: {
      shortDesc: "Test strips pack of 50",
      description: "Test strips pack of 50",
      benefits: "Accurate, Easy to use",
      usage: "Use with glucometer",
      warnings: "Check expiry"
    },
    pa: {
      shortDesc: "Test strips pack of 50",
      description: "Test strips pack of 50",
      benefits: "Accurate, Easy to use",
      usage: "Use with glucometer",
      warnings: "Check expiry"
    },
    or: {
      shortDesc: "Test strips pack of 50",
      description: "Test strips pack of 50",
      benefits: "Accurate, Easy to use",
      usage: "Use with glucometer",
      warnings: "Check expiry"
    },
    as: {
      shortDesc: "Test strips pack of 50",
      description: "Test strips pack of 50",
      benefits: "Accurate, Easy to use",
      usage: "Use with glucometer",
      warnings: "Check expiry"
    },
    ur: {
      shortDesc: "Test strips pack of 50",
      description: "Test strips pack of 50",
      benefits: "Accurate, Easy to use",
      usage: "Use with glucometer",
      warnings: "Check expiry"
    }
  },
  "DEV217": {
    en: {
      shortDesc: "Sterile lancets pack of 100",
      description: "Sterile lancets pack of 100",
      benefits: "Painless, Sterile",
      usage: "Use with lancing device",
      warnings: "Single use only"
    },
    hi: {
      shortDesc: "Sterile lancets pack of 100",
      description: "Sterile lancets pack of 100",
      benefits: "Painless, Sterile",
      usage: "Use with lancing device",
      warnings: "Single use only"
    },
    ta: {
      shortDesc: "Sterile lancets pack of 100",
      description: "Sterile lancets pack of 100",
      benefits: "Painless, Sterile",
      usage: "Use with lancing device",
      warnings: "Single use only"
    },
    te: {
      shortDesc: "Sterile lancets pack of 100",
      description: "Sterile lancets pack of 100",
      benefits: "Painless, Sterile",
      usage: "Use with lancing device",
      warnings: "Single use only"
    },
    bn: {
      shortDesc: "Sterile lancets pack of 100",
      description: "Sterile lancets pack of 100",
      benefits: "Painless, Sterile",
      usage: "Use with lancing device",
      warnings: "Single use only"
    },
    mr: {
      shortDesc: "Sterile lancets pack of 100",
      description: "Sterile lancets pack of 100",
      benefits: "Painless, Sterile",
      usage: "Use with lancing device",
      warnings: "Single use only"
    },
    gu: {
      shortDesc: "Sterile lancets pack of 100",
      description: "Sterile lancets pack of 100",
      benefits: "Painless, Sterile",
      usage: "Use with lancing device",
      warnings: "Single use only"
    },
    kn: {
      shortDesc: "Sterile lancets pack of 100",
      description: "Sterile lancets pack of 100",
      benefits: "Painless, Sterile",
      usage: "Use with lancing device",
      warnings: "Single use only"
    },
    ml: {
      shortDesc: "Sterile lancets pack of 100",
      description: "Sterile lancets pack of 100",
      benefits: "Painless, Sterile",
      usage: "Use with lancing device",
      warnings: "Single use only"
    },
    pa: {
      shortDesc: "Sterile lancets pack of 100",
      description: "Sterile lancets pack of 100",
      benefits: "Painless, Sterile",
      usage: "Use with lancing device",
      warnings: "Single use only"
    },
    or: {
      shortDesc: "Sterile lancets pack of 100",
      description: "Sterile lancets pack of 100",
      benefits: "Painless, Sterile",
      usage: "Use with lancing device",
      warnings: "Single use only"
    },
    as: {
      shortDesc: "Sterile lancets pack of 100",
      description: "Sterile lancets pack of 100",
      benefits: "Painless, Sterile",
      usage: "Use with lancing device",
      warnings: "Single use only"
    },
    ur: {
      shortDesc: "Sterile lancets pack of 100",
      description: "Sterile lancets pack of 100",
      benefits: "Painless, Sterile",
      usage: "Use with lancing device",
      warnings: "Single use only"
    }
  },
  "DEV218": {
    en: {
      shortDesc: "Reusable insulin pen",
      description: "Reusable insulin pen",
      benefits: "Easy dosing, Portable",
      usage: "Load cartridge, inject",
      warnings: "Consult doctor"
    },
    hi: {
      shortDesc: "Reusable insulin pen",
      description: "Reusable insulin pen",
      benefits: "Easy dosing, Portable",
      usage: "Load cartridge, inject",
      warnings: "Consult doctor"
    },
    ta: {
      shortDesc: "Reusable insulin pen",
      description: "Reusable insulin pen",
      benefits: "Easy dosing, Portable",
      usage: "Load cartridge, inject",
      warnings: "Consult doctor"
    },
    te: {
      shortDesc: "Reusable insulin pen",
      description: "Reusable insulin pen",
      benefits: "Easy dosing, Portable",
      usage: "Load cartridge, inject",
      warnings: "Consult doctor"
    },
    bn: {
      shortDesc: "Reusable insulin pen",
      description: "Reusable insulin pen",
      benefits: "Easy dosing, Portable",
      usage: "Load cartridge, inject",
      warnings: "Consult doctor"
    },
    mr: {
      shortDesc: "Reusable insulin pen",
      description: "Reusable insulin pen",
      benefits: "Easy dosing, Portable",
      usage: "Load cartridge, inject",
      warnings: "Consult doctor"
    },
    gu: {
      shortDesc: "Reusable insulin pen",
      description: "Reusable insulin pen",
      benefits: "Easy dosing, Portable",
      usage: "Load cartridge, inject",
      warnings: "Consult doctor"
    },
    kn: {
      shortDesc: "Reusable insulin pen",
      description: "Reusable insulin pen",
      benefits: "Easy dosing, Portable",
      usage: "Load cartridge, inject",
      warnings: "Consult doctor"
    },
    ml: {
      shortDesc: "Reusable insulin pen",
      description: "Reusable insulin pen",
      benefits: "Easy dosing, Portable",
      usage: "Load cartridge, inject",
      warnings: "Consult doctor"
    },
    pa: {
      shortDesc: "Reusable insulin pen",
      description: "Reusable insulin pen",
      benefits: "Easy dosing, Portable",
      usage: "Load cartridge, inject",
      warnings: "Consult doctor"
    },
    or: {
      shortDesc: "Reusable insulin pen",
      description: "Reusable insulin pen",
      benefits: "Easy dosing, Portable",
      usage: "Load cartridge, inject",
      warnings: "Consult doctor"
    },
    as: {
      shortDesc: "Reusable insulin pen",
      description: "Reusable insulin pen",
      benefits: "Easy dosing, Portable",
      usage: "Load cartridge, inject",
      warnings: "Consult doctor"
    },
    ur: {
      shortDesc: "Reusable insulin pen",
      description: "Reusable insulin pen",
      benefits: "Easy dosing, Portable",
      usage: "Load cartridge, inject",
      warnings: "Consult doctor"
    }
  },
  "DEV219": {
    en: {
      shortDesc: "7-day pill box",
      description: "7-day pill box",
      benefits: "Organized, Easy to use",
      usage: "Fill compartments",
      warnings: "Keep dry"
    },
    hi: {
      shortDesc: "7-day pill box",
      description: "7-day pill box",
      benefits: "Organized, Easy to use",
      usage: "Fill compartments",
      warnings: "Keep dry"
    },
    ta: {
      shortDesc: "7-day pill box",
      description: "7-day pill box",
      benefits: "Organized, Easy to use",
      usage: "Fill compartments",
      warnings: "Keep dry"
    },
    te: {
      shortDesc: "7-day pill box",
      description: "7-day pill box",
      benefits: "Organized, Easy to use",
      usage: "Fill compartments",
      warnings: "Keep dry"
    },
    bn: {
      shortDesc: "7-day pill box",
      description: "7-day pill box",
      benefits: "Organized, Easy to use",
      usage: "Fill compartments",
      warnings: "Keep dry"
    },
    mr: {
      shortDesc: "7-day pill box",
      description: "7-day pill box",
      benefits: "Organized, Easy to use",
      usage: "Fill compartments",
      warnings: "Keep dry"
    },
    gu: {
      shortDesc: "7-day pill box",
      description: "7-day pill box",
      benefits: "Organized, Easy to use",
      usage: "Fill compartments",
      warnings: "Keep dry"
    },
    kn: {
      shortDesc: "7-day pill box",
      description: "7-day pill box",
      benefits: "Organized, Easy to use",
      usage: "Fill compartments",
      warnings: "Keep dry"
    },
    ml: {
      shortDesc: "7-day pill box",
      description: "7-day pill box",
      benefits: "Organized, Easy to use",
      usage: "Fill compartments",
      warnings: "Keep dry"
    },
    pa: {
      shortDesc: "7-day pill box",
      description: "7-day pill box",
      benefits: "Organized, Easy to use",
      usage: "Fill compartments",
      warnings: "Keep dry"
    },
    or: {
      shortDesc: "7-day pill box",
      description: "7-day pill box",
      benefits: "Organized, Easy to use",
      usage: "Fill compartments",
      warnings: "Keep dry"
    },
    as: {
      shortDesc: "7-day pill box",
      description: "7-day pill box",
      benefits: "Organized, Easy to use",
      usage: "Fill compartments",
      warnings: "Keep dry"
    },
    ur: {
      shortDesc: "7-day pill box",
      description: "7-day pill box",
      benefits: "Organized, Easy to use",
      usage: "Fill compartments",
      warnings: "Keep dry"
    }
  },
  "DEV220": {
    en: {
      shortDesc: "Smart pill reminder",
      description: "Smart pill reminder",
      benefits: "Alarm alerts, Multiple reminders",
      usage: "Set medication times",
      warnings: "Replace battery"
    },
    hi: {
      shortDesc: "Smart pill reminder",
      description: "Smart pill reminder",
      benefits: "Alarm alerts, Multiple reminders",
      usage: "Set medication times",
      warnings: "Replace battery"
    },
    ta: {
      shortDesc: "Smart pill reminder",
      description: "Smart pill reminder",
      benefits: "Alarm alerts, Multiple reminders",
      usage: "Set medication times",
      warnings: "Replace battery"
    },
    te: {
      shortDesc: "Smart pill reminder",
      description: "Smart pill reminder",
      benefits: "Alarm alerts, Multiple reminders",
      usage: "Set medication times",
      warnings: "Replace battery"
    },
    bn: {
      shortDesc: "Smart pill reminder",
      description: "Smart pill reminder",
      benefits: "Alarm alerts, Multiple reminders",
      usage: "Set medication times",
      warnings: "Replace battery"
    },
    mr: {
      shortDesc: "Smart pill reminder",
      description: "Smart pill reminder",
      benefits: "Alarm alerts, Multiple reminders",
      usage: "Set medication times",
      warnings: "Replace battery"
    },
    gu: {
      shortDesc: "Smart pill reminder",
      description: "Smart pill reminder",
      benefits: "Alarm alerts, Multiple reminders",
      usage: "Set medication times",
      warnings: "Replace battery"
    },
    kn: {
      shortDesc: "Smart pill reminder",
      description: "Smart pill reminder",
      benefits: "Alarm alerts, Multiple reminders",
      usage: "Set medication times",
      warnings: "Replace battery"
    },
    ml: {
      shortDesc: "Smart pill reminder",
      description: "Smart pill reminder",
      benefits: "Alarm alerts, Multiple reminders",
      usage: "Set medication times",
      warnings: "Replace battery"
    },
    pa: {
      shortDesc: "Smart pill reminder",
      description: "Smart pill reminder",
      benefits: "Alarm alerts, Multiple reminders",
      usage: "Set medication times",
      warnings: "Replace battery"
    },
    or: {
      shortDesc: "Smart pill reminder",
      description: "Smart pill reminder",
      benefits: "Alarm alerts, Multiple reminders",
      usage: "Set medication times",
      warnings: "Replace battery"
    },
    as: {
      shortDesc: "Smart pill reminder",
      description: "Smart pill reminder",
      benefits: "Alarm alerts, Multiple reminders",
      usage: "Set medication times",
      warnings: "Replace battery"
    },
    ur: {
      shortDesc: "Smart pill reminder",
      description: "Smart pill reminder",
      benefits: "Alarm alerts, Multiple reminders",
      usage: "Set medication times",
      warnings: "Replace battery"
    }
  },
  "DEV221": {
    en: {
      shortDesc: "Foldable wheelchair",
      description: "Foldable wheelchair",
      benefits: "Lightweight, Comfortable",
      usage: "Adjust to user",
      warnings: "Check brakes"
    },
    hi: {
      shortDesc: "Foldable wheelchair",
      description: "Foldable wheelchair",
      benefits: "Lightweight, Comfortable",
      usage: "Adjust to user",
      warnings: "Check brakes"
    },
    ta: {
      shortDesc: "Foldable wheelchair",
      description: "Foldable wheelchair",
      benefits: "Lightweight, Comfortable",
      usage: "Adjust to user",
      warnings: "Check brakes"
    },
    te: {
      shortDesc: "Foldable wheelchair",
      description: "Foldable wheelchair",
      benefits: "Lightweight, Comfortable",
      usage: "Adjust to user",
      warnings: "Check brakes"
    },
    bn: {
      shortDesc: "Foldable wheelchair",
      description: "Foldable wheelchair",
      benefits: "Lightweight, Comfortable",
      usage: "Adjust to user",
      warnings: "Check brakes"
    },
    mr: {
      shortDesc: "Foldable wheelchair",
      description: "Foldable wheelchair",
      benefits: "Lightweight, Comfortable",
      usage: "Adjust to user",
      warnings: "Check brakes"
    },
    gu: {
      shortDesc: "Foldable wheelchair",
      description: "Foldable wheelchair",
      benefits: "Lightweight, Comfortable",
      usage: "Adjust to user",
      warnings: "Check brakes"
    },
    kn: {
      shortDesc: "Foldable wheelchair",
      description: "Foldable wheelchair",
      benefits: "Lightweight, Comfortable",
      usage: "Adjust to user",
      warnings: "Check brakes"
    },
    ml: {
      shortDesc: "Foldable wheelchair",
      description: "Foldable wheelchair",
      benefits: "Lightweight, Comfortable",
      usage: "Adjust to user",
      warnings: "Check brakes"
    },
    pa: {
      shortDesc: "Foldable wheelchair",
      description: "Foldable wheelchair",
      benefits: "Lightweight, Comfortable",
      usage: "Adjust to user",
      warnings: "Check brakes"
    },
    or: {
      shortDesc: "Foldable wheelchair",
      description: "Foldable wheelchair",
      benefits: "Lightweight, Comfortable",
      usage: "Adjust to user",
      warnings: "Check brakes"
    },
    as: {
      shortDesc: "Foldable wheelchair",
      description: "Foldable wheelchair",
      benefits: "Lightweight, Comfortable",
      usage: "Adjust to user",
      warnings: "Check brakes"
    },
    ur: {
      shortDesc: "Foldable wheelchair",
      description: "Foldable wheelchair",
      benefits: "Lightweight, Comfortable",
      usage: "Adjust to user",
      warnings: "Check brakes"
    }
  },
  "DEV222": {
    en: {
      shortDesc: "Adjustable walking cane",
      description: "Adjustable walking cane",
      benefits: "Sturdy, Adjustable height",
      usage: "Adjust to height",
      warnings: "Check rubber tip"
    },
    hi: {
      shortDesc: "Adjustable walking cane",
      description: "Adjustable walking cane",
      benefits: "Sturdy, Adjustable height",
      usage: "Adjust to height",
      warnings: "Check rubber tip"
    },
    ta: {
      shortDesc: "Adjustable walking cane",
      description: "Adjustable walking cane",
      benefits: "Sturdy, Adjustable height",
      usage: "Adjust to height",
      warnings: "Check rubber tip"
    },
    te: {
      shortDesc: "Adjustable walking cane",
      description: "Adjustable walking cane",
      benefits: "Sturdy, Adjustable height",
      usage: "Adjust to height",
      warnings: "Check rubber tip"
    },
    bn: {
      shortDesc: "Adjustable walking cane",
      description: "Adjustable walking cane",
      benefits: "Sturdy, Adjustable height",
      usage: "Adjust to height",
      warnings: "Check rubber tip"
    },
    mr: {
      shortDesc: "Adjustable walking cane",
      description: "Adjustable walking cane",
      benefits: "Sturdy, Adjustable height",
      usage: "Adjust to height",
      warnings: "Check rubber tip"
    },
    gu: {
      shortDesc: "Adjustable walking cane",
      description: "Adjustable walking cane",
      benefits: "Sturdy, Adjustable height",
      usage: "Adjust to height",
      warnings: "Check rubber tip"
    },
    kn: {
      shortDesc: "Adjustable walking cane",
      description: "Adjustable walking cane",
      benefits: "Sturdy, Adjustable height",
      usage: "Adjust to height",
      warnings: "Check rubber tip"
    },
    ml: {
      shortDesc: "Adjustable walking cane",
      description: "Adjustable walking cane",
      benefits: "Sturdy, Adjustable height",
      usage: "Adjust to height",
      warnings: "Check rubber tip"
    },
    pa: {
      shortDesc: "Adjustable walking cane",
      description: "Adjustable walking cane",
      benefits: "Sturdy, Adjustable height",
      usage: "Adjust to height",
      warnings: "Check rubber tip"
    },
    or: {
      shortDesc: "Adjustable walking cane",
      description: "Adjustable walking cane",
      benefits: "Sturdy, Adjustable height",
      usage: "Adjust to height",
      warnings: "Check rubber tip"
    },
    as: {
      shortDesc: "Adjustable walking cane",
      description: "Adjustable walking cane",
      benefits: "Sturdy, Adjustable height",
      usage: "Adjust to height",
      warnings: "Check rubber tip"
    },
    ur: {
      shortDesc: "Adjustable walking cane",
      description: "Adjustable walking cane",
      benefits: "Sturdy, Adjustable height",
      usage: "Adjust to height",
      warnings: "Check rubber tip"
    }
  },
  "DEV223": {
    en: {
      shortDesc: "Mobility walker",
      description: "Mobility walker",
      benefits: "Stable, With seat",
      usage: "Use for support",
      warnings: "Lock brakes when sitting"
    },
    hi: {
      shortDesc: "Mobility walker",
      description: "Mobility walker",
      benefits: "Stable, With seat",
      usage: "Use for support",
      warnings: "Lock brakes when sitting"
    },
    ta: {
      shortDesc: "Mobility walker",
      description: "Mobility walker",
      benefits: "Stable, With seat",
      usage: "Use for support",
      warnings: "Lock brakes when sitting"
    },
    te: {
      shortDesc: "Mobility walker",
      description: "Mobility walker",
      benefits: "Stable, With seat",
      usage: "Use for support",
      warnings: "Lock brakes when sitting"
    },
    bn: {
      shortDesc: "Mobility walker",
      description: "Mobility walker",
      benefits: "Stable, With seat",
      usage: "Use for support",
      warnings: "Lock brakes when sitting"
    },
    mr: {
      shortDesc: "Mobility walker",
      description: "Mobility walker",
      benefits: "Stable, With seat",
      usage: "Use for support",
      warnings: "Lock brakes when sitting"
    },
    gu: {
      shortDesc: "Mobility walker",
      description: "Mobility walker",
      benefits: "Stable, With seat",
      usage: "Use for support",
      warnings: "Lock brakes when sitting"
    },
    kn: {
      shortDesc: "Mobility walker",
      description: "Mobility walker",
      benefits: "Stable, With seat",
      usage: "Use for support",
      warnings: "Lock brakes when sitting"
    },
    ml: {
      shortDesc: "Mobility walker",
      description: "Mobility walker",
      benefits: "Stable, With seat",
      usage: "Use for support",
      warnings: "Lock brakes when sitting"
    },
    pa: {
      shortDesc: "Mobility walker",
      description: "Mobility walker",
      benefits: "Stable, With seat",
      usage: "Use for support",
      warnings: "Lock brakes when sitting"
    },
    or: {
      shortDesc: "Mobility walker",
      description: "Mobility walker",
      benefits: "Stable, With seat",
      usage: "Use for support",
      warnings: "Lock brakes when sitting"
    },
    as: {
      shortDesc: "Mobility walker",
      description: "Mobility walker",
      benefits: "Stable, With seat",
      usage: "Use for support",
      warnings: "Lock brakes when sitting"
    },
    ur: {
      shortDesc: "Mobility walker",
      description: "Mobility walker",
      benefits: "Stable, With seat",
      usage: "Use for support",
      warnings: "Lock brakes when sitting"
    }
  },
  "DEV224": {
    en: {
      shortDesc: "Adjustable knee support",
      description: "Adjustable knee support",
      benefits: "Pain relief, Adjustable",
      usage: "Wear during activity",
      warnings: "Do not overtighten"
    },
    hi: {
      shortDesc: "Adjustable knee support",
      description: "Adjustable knee support",
      benefits: "Pain relief, Adjustable",
      usage: "Wear during activity",
      warnings: "Do not overtighten"
    },
    ta: {
      shortDesc: "Adjustable knee support",
      description: "Adjustable knee support",
      benefits: "Pain relief, Adjustable",
      usage: "Wear during activity",
      warnings: "Do not overtighten"
    },
    te: {
      shortDesc: "Adjustable knee support",
      description: "Adjustable knee support",
      benefits: "Pain relief, Adjustable",
      usage: "Wear during activity",
      warnings: "Do not overtighten"
    },
    bn: {
      shortDesc: "Adjustable knee support",
      description: "Adjustable knee support",
      benefits: "Pain relief, Adjustable",
      usage: "Wear during activity",
      warnings: "Do not overtighten"
    },
    mr: {
      shortDesc: "Adjustable knee support",
      description: "Adjustable knee support",
      benefits: "Pain relief, Adjustable",
      usage: "Wear during activity",
      warnings: "Do not overtighten"
    },
    gu: {
      shortDesc: "Adjustable knee support",
      description: "Adjustable knee support",
      benefits: "Pain relief, Adjustable",
      usage: "Wear during activity",
      warnings: "Do not overtighten"
    },
    kn: {
      shortDesc: "Adjustable knee support",
      description: "Adjustable knee support",
      benefits: "Pain relief, Adjustable",
      usage: "Wear during activity",
      warnings: "Do not overtighten"
    },
    ml: {
      shortDesc: "Adjustable knee support",
      description: "Adjustable knee support",
      benefits: "Pain relief, Adjustable",
      usage: "Wear during activity",
      warnings: "Do not overtighten"
    },
    pa: {
      shortDesc: "Adjustable knee support",
      description: "Adjustable knee support",
      benefits: "Pain relief, Adjustable",
      usage: "Wear during activity",
      warnings: "Do not overtighten"
    },
    or: {
      shortDesc: "Adjustable knee support",
      description: "Adjustable knee support",
      benefits: "Pain relief, Adjustable",
      usage: "Wear during activity",
      warnings: "Do not overtighten"
    },
    as: {
      shortDesc: "Adjustable knee support",
      description: "Adjustable knee support",
      benefits: "Pain relief, Adjustable",
      usage: "Wear during activity",
      warnings: "Do not overtighten"
    },
    ur: {
      shortDesc: "Adjustable knee support",
      description: "Adjustable knee support",
      benefits: "Pain relief, Adjustable",
      usage: "Wear during activity",
      warnings: "Do not overtighten"
    }
  },
  "DEV225": {
    en: {
      shortDesc: "Lumbar support belt",
      description: "Lumbar support belt",
      benefits: "Posture correction, Pain relief",
      usage: "Wear during work",
      warnings: "Do not wear while sleeping"
    },
    hi: {
      shortDesc: "Lumbar support belt",
      description: "Lumbar support belt",
      benefits: "Posture correction, Pain relief",
      usage: "Wear during work",
      warnings: "Do not wear while sleeping"
    },
    ta: {
      shortDesc: "Lumbar support belt",
      description: "Lumbar support belt",
      benefits: "Posture correction, Pain relief",
      usage: "Wear during work",
      warnings: "Do not wear while sleeping"
    },
    te: {
      shortDesc: "Lumbar support belt",
      description: "Lumbar support belt",
      benefits: "Posture correction, Pain relief",
      usage: "Wear during work",
      warnings: "Do not wear while sleeping"
    },
    bn: {
      shortDesc: "Lumbar support belt",
      description: "Lumbar support belt",
      benefits: "Posture correction, Pain relief",
      usage: "Wear during work",
      warnings: "Do not wear while sleeping"
    },
    mr: {
      shortDesc: "Lumbar support belt",
      description: "Lumbar support belt",
      benefits: "Posture correction, Pain relief",
      usage: "Wear during work",
      warnings: "Do not wear while sleeping"
    },
    gu: {
      shortDesc: "Lumbar support belt",
      description: "Lumbar support belt",
      benefits: "Posture correction, Pain relief",
      usage: "Wear during work",
      warnings: "Do not wear while sleeping"
    },
    kn: {
      shortDesc: "Lumbar support belt",
      description: "Lumbar support belt",
      benefits: "Posture correction, Pain relief",
      usage: "Wear during work",
      warnings: "Do not wear while sleeping"
    },
    ml: {
      shortDesc: "Lumbar support belt",
      description: "Lumbar support belt",
      benefits: "Posture correction, Pain relief",
      usage: "Wear during work",
      warnings: "Do not wear while sleeping"
    },
    pa: {
      shortDesc: "Lumbar support belt",
      description: "Lumbar support belt",
      benefits: "Posture correction, Pain relief",
      usage: "Wear during work",
      warnings: "Do not wear while sleeping"
    },
    or: {
      shortDesc: "Lumbar support belt",
      description: "Lumbar support belt",
      benefits: "Posture correction, Pain relief",
      usage: "Wear during work",
      warnings: "Do not wear while sleeping"
    },
    as: {
      shortDesc: "Lumbar support belt",
      description: "Lumbar support belt",
      benefits: "Posture correction, Pain relief",
      usage: "Wear during work",
      warnings: "Do not wear while sleeping"
    },
    ur: {
      shortDesc: "Lumbar support belt",
      description: "Lumbar support belt",
      benefits: "Posture correction, Pain relief",
      usage: "Wear during work",
      warnings: "Do not wear while sleeping"
    }
  },
  "DEV226": {
    en: {
      shortDesc: "Early detection test",
      description: "Early detection test",
      benefits: "99% accurate, Easy to read",
      usage: "Use with morning urine",
      warnings: "Read instructions"
    },
    hi: {
      shortDesc: "Early detection test",
      description: "Early detection test",
      benefits: "99% accurate, Easy to read",
      usage: "Use with morning urine",
      warnings: "Read instructions"
    },
    ta: {
      shortDesc: "Early detection test",
      description: "Early detection test",
      benefits: "99% accurate, Easy to read",
      usage: "Use with morning urine",
      warnings: "Read instructions"
    },
    te: {
      shortDesc: "Early detection test",
      description: "Early detection test",
      benefits: "99% accurate, Easy to read",
      usage: "Use with morning urine",
      warnings: "Read instructions"
    },
    bn: {
      shortDesc: "Early detection test",
      description: "Early detection test",
      benefits: "99% accurate, Easy to read",
      usage: "Use with morning urine",
      warnings: "Read instructions"
    },
    mr: {
      shortDesc: "Early detection test",
      description: "Early detection test",
      benefits: "99% accurate, Easy to read",
      usage: "Use with morning urine",
      warnings: "Read instructions"
    },
    gu: {
      shortDesc: "Early detection test",
      description: "Early detection test",
      benefits: "99% accurate, Easy to read",
      usage: "Use with morning urine",
      warnings: "Read instructions"
    },
    kn: {
      shortDesc: "Early detection test",
      description: "Early detection test",
      benefits: "99% accurate, Easy to read",
      usage: "Use with morning urine",
      warnings: "Read instructions"
    },
    ml: {
      shortDesc: "Early detection test",
      description: "Early detection test",
      benefits: "99% accurate, Easy to read",
      usage: "Use with morning urine",
      warnings: "Read instructions"
    },
    pa: {
      shortDesc: "Early detection test",
      description: "Early detection test",
      benefits: "99% accurate, Easy to read",
      usage: "Use with morning urine",
      warnings: "Read instructions"
    },
    or: {
      shortDesc: "Early detection test",
      description: "Early detection test",
      benefits: "99% accurate, Easy to read",
      usage: "Use with morning urine",
      warnings: "Read instructions"
    },
    as: {
      shortDesc: "Early detection test",
      description: "Early detection test",
      benefits: "99% accurate, Easy to read",
      usage: "Use with morning urine",
      warnings: "Read instructions"
    },
    ur: {
      shortDesc: "Early detection test",
      description: "Early detection test",
      benefits: "99% accurate, Easy to read",
      usage: "Use with morning urine",
      warnings: "Read instructions"
    }
  },
  "DEV227": {
    en: {
      shortDesc: "Fertility tracker",
      description: "Fertility tracker",
      benefits: "Tracks fertile days, Accurate",
      usage: "Test daily",
      warnings: "Follow instructions"
    },
    hi: {
      shortDesc: "Fertility tracker",
      description: "Fertility tracker",
      benefits: "Tracks fertile days, Accurate",
      usage: "Test daily",
      warnings: "Follow instructions"
    },
    ta: {
      shortDesc: "Fertility tracker",
      description: "Fertility tracker",
      benefits: "Tracks fertile days, Accurate",
      usage: "Test daily",
      warnings: "Follow instructions"
    },
    te: {
      shortDesc: "Fertility tracker",
      description: "Fertility tracker",
      benefits: "Tracks fertile days, Accurate",
      usage: "Test daily",
      warnings: "Follow instructions"
    },
    bn: {
      shortDesc: "Fertility tracker",
      description: "Fertility tracker",
      benefits: "Tracks fertile days, Accurate",
      usage: "Test daily",
      warnings: "Follow instructions"
    },
    mr: {
      shortDesc: "Fertility tracker",
      description: "Fertility tracker",
      benefits: "Tracks fertile days, Accurate",
      usage: "Test daily",
      warnings: "Follow instructions"
    },
    gu: {
      shortDesc: "Fertility tracker",
      description: "Fertility tracker",
      benefits: "Tracks fertile days, Accurate",
      usage: "Test daily",
      warnings: "Follow instructions"
    },
    kn: {
      shortDesc: "Fertility tracker",
      description: "Fertility tracker",
      benefits: "Tracks fertile days, Accurate",
      usage: "Test daily",
      warnings: "Follow instructions"
    },
    ml: {
      shortDesc: "Fertility tracker",
      description: "Fertility tracker",
      benefits: "Tracks fertile days, Accurate",
      usage: "Test daily",
      warnings: "Follow instructions"
    },
    pa: {
      shortDesc: "Fertility tracker",
      description: "Fertility tracker",
      benefits: "Tracks fertile days, Accurate",
      usage: "Test daily",
      warnings: "Follow instructions"
    },
    or: {
      shortDesc: "Fertility tracker",
      description: "Fertility tracker",
      benefits: "Tracks fertile days, Accurate",
      usage: "Test daily",
      warnings: "Follow instructions"
    },
    as: {
      shortDesc: "Fertility tracker",
      description: "Fertility tracker",
      benefits: "Tracks fertile days, Accurate",
      usage: "Test daily",
      warnings: "Follow instructions"
    },
    ur: {
      shortDesc: "Fertility tracker",
      description: "Fertility tracker",
      benefits: "Tracks fertile days, Accurate",
      usage: "Test daily",
      warnings: "Follow instructions"
    }
  },
  "DEV228": {
    en: {
      shortDesc: "Home cholesterol test",
      description: "Home cholesterol test",
      benefits: "Quick results, Easy to use",
      usage: "Prick finger, test",
      warnings: "Not for diagnosis"
    },
    hi: {
      shortDesc: "Home cholesterol test",
      description: "Home cholesterol test",
      benefits: "Quick results, Easy to use",
      usage: "Prick finger, test",
      warnings: "Not for diagnosis"
    },
    ta: {
      shortDesc: "Home cholesterol test",
      description: "Home cholesterol test",
      benefits: "Quick results, Easy to use",
      usage: "Prick finger, test",
      warnings: "Not for diagnosis"
    },
    te: {
      shortDesc: "Home cholesterol test",
      description: "Home cholesterol test",
      benefits: "Quick results, Easy to use",
      usage: "Prick finger, test",
      warnings: "Not for diagnosis"
    },
    bn: {
      shortDesc: "Home cholesterol test",
      description: "Home cholesterol test",
      benefits: "Quick results, Easy to use",
      usage: "Prick finger, test",
      warnings: "Not for diagnosis"
    },
    mr: {
      shortDesc: "Home cholesterol test",
      description: "Home cholesterol test",
      benefits: "Quick results, Easy to use",
      usage: "Prick finger, test",
      warnings: "Not for diagnosis"
    },
    gu: {
      shortDesc: "Home cholesterol test",
      description: "Home cholesterol test",
      benefits: "Quick results, Easy to use",
      usage: "Prick finger, test",
      warnings: "Not for diagnosis"
    },
    kn: {
      shortDesc: "Home cholesterol test",
      description: "Home cholesterol test",
      benefits: "Quick results, Easy to use",
      usage: "Prick finger, test",
      warnings: "Not for diagnosis"
    },
    ml: {
      shortDesc: "Home cholesterol test",
      description: "Home cholesterol test",
      benefits: "Quick results, Easy to use",
      usage: "Prick finger, test",
      warnings: "Not for diagnosis"
    },
    pa: {
      shortDesc: "Home cholesterol test",
      description: "Home cholesterol test",
      benefits: "Quick results, Easy to use",
      usage: "Prick finger, test",
      warnings: "Not for diagnosis"
    },
    or: {
      shortDesc: "Home cholesterol test",
      description: "Home cholesterol test",
      benefits: "Quick results, Easy to use",
      usage: "Prick finger, test",
      warnings: "Not for diagnosis"
    },
    as: {
      shortDesc: "Home cholesterol test",
      description: "Home cholesterol test",
      benefits: "Quick results, Easy to use",
      usage: "Prick finger, test",
      warnings: "Not for diagnosis"
    },
    ur: {
      shortDesc: "Home cholesterol test",
      description: "Home cholesterol test",
      benefits: "Quick results, Easy to use",
      usage: "Prick finger, test",
      warnings: "Not for diagnosis"
    }
  },
  "DEV229": {
    en: {
      shortDesc: "Multi-parameter test",
      description: "Multi-parameter test",
      benefits: "Tests 10 parameters, Fast results",
      usage: "Dip in urine",
      warnings: "Check expiry"
    },
    hi: {
      shortDesc: "Multi-parameter test",
      description: "Multi-parameter test",
      benefits: "Tests 10 parameters, Fast results",
      usage: "Dip in urine",
      warnings: "Check expiry"
    },
    ta: {
      shortDesc: "Multi-parameter test",
      description: "Multi-parameter test",
      benefits: "Tests 10 parameters, Fast results",
      usage: "Dip in urine",
      warnings: "Check expiry"
    },
    te: {
      shortDesc: "Multi-parameter test",
      description: "Multi-parameter test",
      benefits: "Tests 10 parameters, Fast results",
      usage: "Dip in urine",
      warnings: "Check expiry"
    },
    bn: {
      shortDesc: "Multi-parameter test",
      description: "Multi-parameter test",
      benefits: "Tests 10 parameters, Fast results",
      usage: "Dip in urine",
      warnings: "Check expiry"
    },
    mr: {
      shortDesc: "Multi-parameter test",
      description: "Multi-parameter test",
      benefits: "Tests 10 parameters, Fast results",
      usage: "Dip in urine",
      warnings: "Check expiry"
    },
    gu: {
      shortDesc: "Multi-parameter test",
      description: "Multi-parameter test",
      benefits: "Tests 10 parameters, Fast results",
      usage: "Dip in urine",
      warnings: "Check expiry"
    },
    kn: {
      shortDesc: "Multi-parameter test",
      description: "Multi-parameter test",
      benefits: "Tests 10 parameters, Fast results",
      usage: "Dip in urine",
      warnings: "Check expiry"
    },
    ml: {
      shortDesc: "Multi-parameter test",
      description: "Multi-parameter test",
      benefits: "Tests 10 parameters, Fast results",
      usage: "Dip in urine",
      warnings: "Check expiry"
    },
    pa: {
      shortDesc: "Multi-parameter test",
      description: "Multi-parameter test",
      benefits: "Tests 10 parameters, Fast results",
      usage: "Dip in urine",
      warnings: "Check expiry"
    },
    or: {
      shortDesc: "Multi-parameter test",
      description: "Multi-parameter test",
      benefits: "Tests 10 parameters, Fast results",
      usage: "Dip in urine",
      warnings: "Check expiry"
    },
    as: {
      shortDesc: "Multi-parameter test",
      description: "Multi-parameter test",
      benefits: "Tests 10 parameters, Fast results",
      usage: "Dip in urine",
      warnings: "Check expiry"
    },
    ur: {
      shortDesc: "Multi-parameter test",
      description: "Multi-parameter test",
      benefits: "Tests 10 parameters, Fast results",
      usage: "Dip in urine",
      warnings: "Check expiry"
    }
  },
  "DEV230": {
    en: {
      shortDesc: "Rapid antigen test",
      description: "Rapid antigen test",
      benefits: "15-minute results, Accurate",
      usage: "Nasal swab test",
      warnings: "Follow instructions"
    },
    hi: {
      shortDesc: "Rapid antigen test",
      description: "Rapid antigen test",
      benefits: "15-minute results, Accurate",
      usage: "Nasal swab test",
      warnings: "Follow instructions"
    },
    ta: {
      shortDesc: "Rapid antigen test",
      description: "Rapid antigen test",
      benefits: "15-minute results, Accurate",
      usage: "Nasal swab test",
      warnings: "Follow instructions"
    },
    te: {
      shortDesc: "Rapid antigen test",
      description: "Rapid antigen test",
      benefits: "15-minute results, Accurate",
      usage: "Nasal swab test",
      warnings: "Follow instructions"
    },
    bn: {
      shortDesc: "Rapid antigen test",
      description: "Rapid antigen test",
      benefits: "15-minute results, Accurate",
      usage: "Nasal swab test",
      warnings: "Follow instructions"
    },
    mr: {
      shortDesc: "Rapid antigen test",
      description: "Rapid antigen test",
      benefits: "15-minute results, Accurate",
      usage: "Nasal swab test",
      warnings: "Follow instructions"
    },
    gu: {
      shortDesc: "Rapid antigen test",
      description: "Rapid antigen test",
      benefits: "15-minute results, Accurate",
      usage: "Nasal swab test",
      warnings: "Follow instructions"
    },
    kn: {
      shortDesc: "Rapid antigen test",
      description: "Rapid antigen test",
      benefits: "15-minute results, Accurate",
      usage: "Nasal swab test",
      warnings: "Follow instructions"
    },
    ml: {
      shortDesc: "Rapid antigen test",
      description: "Rapid antigen test",
      benefits: "15-minute results, Accurate",
      usage: "Nasal swab test",
      warnings: "Follow instructions"
    },
    pa: {
      shortDesc: "Rapid antigen test",
      description: "Rapid antigen test",
      benefits: "15-minute results, Accurate",
      usage: "Nasal swab test",
      warnings: "Follow instructions"
    },
    or: {
      shortDesc: "Rapid antigen test",
      description: "Rapid antigen test",
      benefits: "15-minute results, Accurate",
      usage: "Nasal swab test",
      warnings: "Follow instructions"
    },
    as: {
      shortDesc: "Rapid antigen test",
      description: "Rapid antigen test",
      benefits: "15-minute results, Accurate",
      usage: "Nasal swab test",
      warnings: "Follow instructions"
    },
    ur: {
      shortDesc: "Rapid antigen test",
      description: "Rapid antigen test",
      benefits: "15-minute results, Accurate",
      usage: "Nasal swab test",
      warnings: "Follow instructions"
    }
  },
  "DEV231": {
    en: {
      shortDesc: "Percussion massager",
      description: "Percussion massager",
      benefits: "Muscle recovery, Multiple speeds",
      usage: "Apply to muscles",
      warnings: "Do not use on injuries"
    },
    hi: {
      shortDesc: "Percussion massager",
      description: "Percussion massager",
      benefits: "Muscle recovery, Multiple speeds",
      usage: "Apply to muscles",
      warnings: "Do not use on injuries"
    },
    ta: {
      shortDesc: "Percussion massager",
      description: "Percussion massager",
      benefits: "Muscle recovery, Multiple speeds",
      usage: "Apply to muscles",
      warnings: "Do not use on injuries"
    },
    te: {
      shortDesc: "Percussion massager",
      description: "Percussion massager",
      benefits: "Muscle recovery, Multiple speeds",
      usage: "Apply to muscles",
      warnings: "Do not use on injuries"
    },
    bn: {
      shortDesc: "Percussion massager",
      description: "Percussion massager",
      benefits: "Muscle recovery, Multiple speeds",
      usage: "Apply to muscles",
      warnings: "Do not use on injuries"
    },
    mr: {
      shortDesc: "Percussion massager",
      description: "Percussion massager",
      benefits: "Muscle recovery, Multiple speeds",
      usage: "Apply to muscles",
      warnings: "Do not use on injuries"
    },
    gu: {
      shortDesc: "Percussion massager",
      description: "Percussion massager",
      benefits: "Muscle recovery, Multiple speeds",
      usage: "Apply to muscles",
      warnings: "Do not use on injuries"
    },
    kn: {
      shortDesc: "Percussion massager",
      description: "Percussion massager",
      benefits: "Muscle recovery, Multiple speeds",
      usage: "Apply to muscles",
      warnings: "Do not use on injuries"
    },
    ml: {
      shortDesc: "Percussion massager",
      description: "Percussion massager",
      benefits: "Muscle recovery, Multiple speeds",
      usage: "Apply to muscles",
      warnings: "Do not use on injuries"
    },
    pa: {
      shortDesc: "Percussion massager",
      description: "Percussion massager",
      benefits: "Muscle recovery, Multiple speeds",
      usage: "Apply to muscles",
      warnings: "Do not use on injuries"
    },
    or: {
      shortDesc: "Percussion massager",
      description: "Percussion massager",
      benefits: "Muscle recovery, Multiple speeds",
      usage: "Apply to muscles",
      warnings: "Do not use on injuries"
    },
    as: {
      shortDesc: "Percussion massager",
      description: "Percussion massager",
      benefits: "Muscle recovery, Multiple speeds",
      usage: "Apply to muscles",
      warnings: "Do not use on injuries"
    },
    ur: {
      shortDesc: "Percussion massager",
      description: "Percussion massager",
      benefits: "Muscle recovery, Multiple speeds",
      usage: "Apply to muscles",
      warnings: "Do not use on injuries"
    }
  },
  "DEV232": {
    en: {
      shortDesc: "Electric foot massager",
      description: "Electric foot massager",
      benefits: "Relieves fatigue, Heat function",
      usage: "Place feet inside",
      warnings: "Not for diabetics"
    },
    hi: {
      shortDesc: "Electric foot massager",
      description: "Electric foot massager",
      benefits: "Relieves fatigue, Heat function",
      usage: "Place feet inside",
      warnings: "Not for diabetics"
    },
    ta: {
      shortDesc: "Electric foot massager",
      description: "Electric foot massager",
      benefits: "Relieves fatigue, Heat function",
      usage: "Place feet inside",
      warnings: "Not for diabetics"
    },
    te: {
      shortDesc: "Electric foot massager",
      description: "Electric foot massager",
      benefits: "Relieves fatigue, Heat function",
      usage: "Place feet inside",
      warnings: "Not for diabetics"
    },
    bn: {
      shortDesc: "Electric foot massager",
      description: "Electric foot massager",
      benefits: "Relieves fatigue, Heat function",
      usage: "Place feet inside",
      warnings: "Not for diabetics"
    },
    mr: {
      shortDesc: "Electric foot massager",
      description: "Electric foot massager",
      benefits: "Relieves fatigue, Heat function",
      usage: "Place feet inside",
      warnings: "Not for diabetics"
    },
    gu: {
      shortDesc: "Electric foot massager",
      description: "Electric foot massager",
      benefits: "Relieves fatigue, Heat function",
      usage: "Place feet inside",
      warnings: "Not for diabetics"
    },
    kn: {
      shortDesc: "Electric foot massager",
      description: "Electric foot massager",
      benefits: "Relieves fatigue, Heat function",
      usage: "Place feet inside",
      warnings: "Not for diabetics"
    },
    ml: {
      shortDesc: "Electric foot massager",
      description: "Electric foot massager",
      benefits: "Relieves fatigue, Heat function",
      usage: "Place feet inside",
      warnings: "Not for diabetics"
    },
    pa: {
      shortDesc: "Electric foot massager",
      description: "Electric foot massager",
      benefits: "Relieves fatigue, Heat function",
      usage: "Place feet inside",
      warnings: "Not for diabetics"
    },
    or: {
      shortDesc: "Electric foot massager",
      description: "Electric foot massager",
      benefits: "Relieves fatigue, Heat function",
      usage: "Place feet inside",
      warnings: "Not for diabetics"
    },
    as: {
      shortDesc: "Electric foot massager",
      description: "Electric foot massager",
      benefits: "Relieves fatigue, Heat function",
      usage: "Place feet inside",
      warnings: "Not for diabetics"
    },
    ur: {
      shortDesc: "Electric foot massager",
      description: "Electric foot massager",
      benefits: "Relieves fatigue, Heat function",
      usage: "Place feet inside",
      warnings: "Not for diabetics"
    }
  },
  "DEV233": {
    en: {
      shortDesc: "Cervical massager",
      description: "Cervical massager",
      benefits: "Relieves neck pain, Portable",
      usage: "Wear around neck",
      warnings: "Do not use while driving"
    },
    hi: {
      shortDesc: "Cervical massager",
      description: "Cervical massager",
      benefits: "Relieves neck pain, Portable",
      usage: "Wear around neck",
      warnings: "Do not use while driving"
    },
    ta: {
      shortDesc: "Cervical massager",
      description: "Cervical massager",
      benefits: "Relieves neck pain, Portable",
      usage: "Wear around neck",
      warnings: "Do not use while driving"
    },
    te: {
      shortDesc: "Cervical massager",
      description: "Cervical massager",
      benefits: "Relieves neck pain, Portable",
      usage: "Wear around neck",
      warnings: "Do not use while driving"
    },
    bn: {
      shortDesc: "Cervical massager",
      description: "Cervical massager",
      benefits: "Relieves neck pain, Portable",
      usage: "Wear around neck",
      warnings: "Do not use while driving"
    },
    mr: {
      shortDesc: "Cervical massager",
      description: "Cervical massager",
      benefits: "Relieves neck pain, Portable",
      usage: "Wear around neck",
      warnings: "Do not use while driving"
    },
    gu: {
      shortDesc: "Cervical massager",
      description: "Cervical massager",
      benefits: "Relieves neck pain, Portable",
      usage: "Wear around neck",
      warnings: "Do not use while driving"
    },
    kn: {
      shortDesc: "Cervical massager",
      description: "Cervical massager",
      benefits: "Relieves neck pain, Portable",
      usage: "Wear around neck",
      warnings: "Do not use while driving"
    },
    ml: {
      shortDesc: "Cervical massager",
      description: "Cervical massager",
      benefits: "Relieves neck pain, Portable",
      usage: "Wear around neck",
      warnings: "Do not use while driving"
    },
    pa: {
      shortDesc: "Cervical massager",
      description: "Cervical massager",
      benefits: "Relieves neck pain, Portable",
      usage: "Wear around neck",
      warnings: "Do not use while driving"
    },
    or: {
      shortDesc: "Cervical massager",
      description: "Cervical massager",
      benefits: "Relieves neck pain, Portable",
      usage: "Wear around neck",
      warnings: "Do not use while driving"
    },
    as: {
      shortDesc: "Cervical massager",
      description: "Cervical massager",
      benefits: "Relieves neck pain, Portable",
      usage: "Wear around neck",
      warnings: "Do not use while driving"
    },
    ur: {
      shortDesc: "Cervical massager",
      description: "Cervical massager",
      benefits: "Relieves neck pain, Portable",
      usage: "Wear around neck",
      warnings: "Do not use while driving"
    }
  },
  "DEV234": {
    en: {
      shortDesc: "Pain relief device",
      description: "Pain relief device",
      benefits: "Drug-free pain relief, Adjustable",
      usage: "Apply pads to skin",
      warnings: "Not for pacemaker users"
    },
    hi: {
      shortDesc: "Pain relief device",
      description: "Pain relief device",
      benefits: "Drug-free pain relief, Adjustable",
      usage: "Apply pads to skin",
      warnings: "Not for pacemaker users"
    },
    ta: {
      shortDesc: "Pain relief device",
      description: "Pain relief device",
      benefits: "Drug-free pain relief, Adjustable",
      usage: "Apply pads to skin",
      warnings: "Not for pacemaker users"
    },
    te: {
      shortDesc: "Pain relief device",
      description: "Pain relief device",
      benefits: "Drug-free pain relief, Adjustable",
      usage: "Apply pads to skin",
      warnings: "Not for pacemaker users"
    },
    bn: {
      shortDesc: "Pain relief device",
      description: "Pain relief device",
      benefits: "Drug-free pain relief, Adjustable",
      usage: "Apply pads to skin",
      warnings: "Not for pacemaker users"
    },
    mr: {
      shortDesc: "Pain relief device",
      description: "Pain relief device",
      benefits: "Drug-free pain relief, Adjustable",
      usage: "Apply pads to skin",
      warnings: "Not for pacemaker users"
    },
    gu: {
      shortDesc: "Pain relief device",
      description: "Pain relief device",
      benefits: "Drug-free pain relief, Adjustable",
      usage: "Apply pads to skin",
      warnings: "Not for pacemaker users"
    },
    kn: {
      shortDesc: "Pain relief device",
      description: "Pain relief device",
      benefits: "Drug-free pain relief, Adjustable",
      usage: "Apply pads to skin",
      warnings: "Not for pacemaker users"
    },
    ml: {
      shortDesc: "Pain relief device",
      description: "Pain relief device",
      benefits: "Drug-free pain relief, Adjustable",
      usage: "Apply pads to skin",
      warnings: "Not for pacemaker users"
    },
    pa: {
      shortDesc: "Pain relief device",
      description: "Pain relief device",
      benefits: "Drug-free pain relief, Adjustable",
      usage: "Apply pads to skin",
      warnings: "Not for pacemaker users"
    },
    or: {
      shortDesc: "Pain relief device",
      description: "Pain relief device",
      benefits: "Drug-free pain relief, Adjustable",
      usage: "Apply pads to skin",
      warnings: "Not for pacemaker users"
    },
    as: {
      shortDesc: "Pain relief device",
      description: "Pain relief device",
      benefits: "Drug-free pain relief, Adjustable",
      usage: "Apply pads to skin",
      warnings: "Not for pacemaker users"
    },
    ur: {
      shortDesc: "Pain relief device",
      description: "Pain relief device",
      benefits: "Drug-free pain relief, Adjustable",
      usage: "Apply pads to skin",
      warnings: "Not for pacemaker users"
    }
  },
  "DEV235": {
    en: {
      shortDesc: "Acupressure therapy mat",
      description: "Acupressure therapy mat",
      benefits: "Relieves tension, Improves circulation",
      usage: "Lie on mat",
      warnings: "Start with short sessions"
    },
    hi: {
      shortDesc: "Acupressure therapy mat",
      description: "Acupressure therapy mat",
      benefits: "Relieves tension, Improves circulation",
      usage: "Lie on mat",
      warnings: "Start with short sessions"
    },
    ta: {
      shortDesc: "Acupressure therapy mat",
      description: "Acupressure therapy mat",
      benefits: "Relieves tension, Improves circulation",
      usage: "Lie on mat",
      warnings: "Start with short sessions"
    },
    te: {
      shortDesc: "Acupressure therapy mat",
      description: "Acupressure therapy mat",
      benefits: "Relieves tension, Improves circulation",
      usage: "Lie on mat",
      warnings: "Start with short sessions"
    },
    bn: {
      shortDesc: "Acupressure therapy mat",
      description: "Acupressure therapy mat",
      benefits: "Relieves tension, Improves circulation",
      usage: "Lie on mat",
      warnings: "Start with short sessions"
    },
    mr: {
      shortDesc: "Acupressure therapy mat",
      description: "Acupressure therapy mat",
      benefits: "Relieves tension, Improves circulation",
      usage: "Lie on mat",
      warnings: "Start with short sessions"
    },
    gu: {
      shortDesc: "Acupressure therapy mat",
      description: "Acupressure therapy mat",
      benefits: "Relieves tension, Improves circulation",
      usage: "Lie on mat",
      warnings: "Start with short sessions"
    },
    kn: {
      shortDesc: "Acupressure therapy mat",
      description: "Acupressure therapy mat",
      benefits: "Relieves tension, Improves circulation",
      usage: "Lie on mat",
      warnings: "Start with short sessions"
    },
    ml: {
      shortDesc: "Acupressure therapy mat",
      description: "Acupressure therapy mat",
      benefits: "Relieves tension, Improves circulation",
      usage: "Lie on mat",
      warnings: "Start with short sessions"
    },
    pa: {
      shortDesc: "Acupressure therapy mat",
      description: "Acupressure therapy mat",
      benefits: "Relieves tension, Improves circulation",
      usage: "Lie on mat",
      warnings: "Start with short sessions"
    },
    or: {
      shortDesc: "Acupressure therapy mat",
      description: "Acupressure therapy mat",
      benefits: "Relieves tension, Improves circulation",
      usage: "Lie on mat",
      warnings: "Start with short sessions"
    },
    as: {
      shortDesc: "Acupressure therapy mat",
      description: "Acupressure therapy mat",
      benefits: "Relieves tension, Improves circulation",
      usage: "Lie on mat",
      warnings: "Start with short sessions"
    },
    ur: {
      shortDesc: "Acupressure therapy mat",
      description: "Acupressure therapy mat",
      benefits: "Relieves tension, Improves circulation",
      usage: "Lie on mat",
      warnings: "Start with short sessions"
    }
  },
  "MED101": {
    en: {
      shortDesc: "Pain and fever relief",
      description: "Pain and fever relief",
      benefits: "Reduces fever, Relieves pain",
      usage: "Take 1-2 tablets every 4-6 hours",
      warnings: "Do not exceed 8 tablets daily"
    },
    hi: {
      shortDesc: "Pain and fever relief",
      description: "Pain and fever relief",
      benefits: "Reduces fever, Relieves pain",
      usage: "Take 1-2 tablets every 4-6 hours",
      warnings: "Do not exceed 8 tablets daily"
    },
    ta: {
      shortDesc: "Pain and fever relief",
      description: "Pain and fever relief",
      benefits: "Reduces fever, Relieves pain",
      usage: "Take 1-2 tablets every 4-6 hours",
      warnings: "Do not exceed 8 tablets daily"
    },
    te: {
      shortDesc: "Pain and fever relief",
      description: "Pain and fever relief",
      benefits: "Reduces fever, Relieves pain",
      usage: "Take 1-2 tablets every 4-6 hours",
      warnings: "Do not exceed 8 tablets daily"
    },
    bn: {
      shortDesc: "Pain and fever relief",
      description: "Pain and fever relief",
      benefits: "Reduces fever, Relieves pain",
      usage: "Take 1-2 tablets every 4-6 hours",
      warnings: "Do not exceed 8 tablets daily"
    },
    mr: {
      shortDesc: "Pain and fever relief",
      description: "Pain and fever relief",
      benefits: "Reduces fever, Relieves pain",
      usage: "Take 1-2 tablets every 4-6 hours",
      warnings: "Do not exceed 8 tablets daily"
    },
    gu: {
      shortDesc: "Pain and fever relief",
      description: "Pain and fever relief",
      benefits: "Reduces fever, Relieves pain",
      usage: "Take 1-2 tablets every 4-6 hours",
      warnings: "Do not exceed 8 tablets daily"
    },
    kn: {
      shortDesc: "Pain and fever relief",
      description: "Pain and fever relief",
      benefits: "Reduces fever, Relieves pain",
      usage: "Take 1-2 tablets every 4-6 hours",
      warnings: "Do not exceed 8 tablets daily"
    },
    ml: {
      shortDesc: "Pain and fever relief",
      description: "Pain and fever relief",
      benefits: "Reduces fever, Relieves pain",
      usage: "Take 1-2 tablets every 4-6 hours",
      warnings: "Do not exceed 8 tablets daily"
    },
    pa: {
      shortDesc: "Pain and fever relief",
      description: "Pain and fever relief",
      benefits: "Reduces fever, Relieves pain",
      usage: "Take 1-2 tablets every 4-6 hours",
      warnings: "Do not exceed 8 tablets daily"
    },
    or: {
      shortDesc: "Pain and fever relief",
      description: "Pain and fever relief",
      benefits: "Reduces fever, Relieves pain",
      usage: "Take 1-2 tablets every 4-6 hours",
      warnings: "Do not exceed 8 tablets daily"
    },
    as: {
      shortDesc: "Pain and fever relief",
      description: "Pain and fever relief",
      benefits: "Reduces fever, Relieves pain",
      usage: "Take 1-2 tablets every 4-6 hours",
      warnings: "Do not exceed 8 tablets daily"
    },
    ur: {
      shortDesc: "Pain and fever relief",
      description: "Pain and fever relief",
      benefits: "Reduces fever, Relieves pain",
      usage: "Take 1-2 tablets every 4-6 hours",
      warnings: "Do not exceed 8 tablets daily"
    }
  },
  "MED102": {
    en: {
      shortDesc: "Anti-inflammatory",
      description: "Anti-inflammatory",
      benefits: "Reduces inflammation, Pain relief",
      usage: "Take with food",
      warnings: "Not for stomach ulcers"
    },
    hi: {
      shortDesc: "Anti-inflammatory",
      description: "Anti-inflammatory",
      benefits: "Reduces inflammation, Pain relief",
      usage: "Take with food",
      warnings: "Not for stomach ulcers"
    },
    ta: {
      shortDesc: "Anti-inflammatory",
      description: "Anti-inflammatory",
      benefits: "Reduces inflammation, Pain relief",
      usage: "Take with food",
      warnings: "Not for stomach ulcers"
    },
    te: {
      shortDesc: "Anti-inflammatory",
      description: "Anti-inflammatory",
      benefits: "Reduces inflammation, Pain relief",
      usage: "Take with food",
      warnings: "Not for stomach ulcers"
    },
    bn: {
      shortDesc: "Anti-inflammatory",
      description: "Anti-inflammatory",
      benefits: "Reduces inflammation, Pain relief",
      usage: "Take with food",
      warnings: "Not for stomach ulcers"
    },
    mr: {
      shortDesc: "Anti-inflammatory",
      description: "Anti-inflammatory",
      benefits: "Reduces inflammation, Pain relief",
      usage: "Take with food",
      warnings: "Not for stomach ulcers"
    },
    gu: {
      shortDesc: "Anti-inflammatory",
      description: "Anti-inflammatory",
      benefits: "Reduces inflammation, Pain relief",
      usage: "Take with food",
      warnings: "Not for stomach ulcers"
    },
    kn: {
      shortDesc: "Anti-inflammatory",
      description: "Anti-inflammatory",
      benefits: "Reduces inflammation, Pain relief",
      usage: "Take with food",
      warnings: "Not for stomach ulcers"
    },
    ml: {
      shortDesc: "Anti-inflammatory",
      description: "Anti-inflammatory",
      benefits: "Reduces inflammation, Pain relief",
      usage: "Take with food",
      warnings: "Not for stomach ulcers"
    },
    pa: {
      shortDesc: "Anti-inflammatory",
      description: "Anti-inflammatory",
      benefits: "Reduces inflammation, Pain relief",
      usage: "Take with food",
      warnings: "Not for stomach ulcers"
    },
    or: {
      shortDesc: "Anti-inflammatory",
      description: "Anti-inflammatory",
      benefits: "Reduces inflammation, Pain relief",
      usage: "Take with food",
      warnings: "Not for stomach ulcers"
    },
    as: {
      shortDesc: "Anti-inflammatory",
      description: "Anti-inflammatory",
      benefits: "Reduces inflammation, Pain relief",
      usage: "Take with food",
      warnings: "Not for stomach ulcers"
    },
    ur: {
      shortDesc: "Anti-inflammatory",
      description: "Anti-inflammatory",
      benefits: "Reduces inflammation, Pain relief",
      usage: "Take with food",
      warnings: "Not for stomach ulcers"
    }
  },
  "MED103": {
    en: {
      shortDesc: "Cough relief",
      description: "Cough relief",
      benefits: "Soothes throat, Reduces cough",
      usage: "Take 2 teaspoons 3 times daily",
      warnings: "Shake well"
    },
    hi: {
      shortDesc: "Cough relief",
      description: "Cough relief",
      benefits: "Soothes throat, Reduces cough",
      usage: "Take 2 teaspoons 3 times daily",
      warnings: "Shake well"
    },
    ta: {
      shortDesc: "Cough relief",
      description: "Cough relief",
      benefits: "Soothes throat, Reduces cough",
      usage: "Take 2 teaspoons 3 times daily",
      warnings: "Shake well"
    },
    te: {
      shortDesc: "Cough relief",
      description: "Cough relief",
      benefits: "Soothes throat, Reduces cough",
      usage: "Take 2 teaspoons 3 times daily",
      warnings: "Shake well"
    },
    bn: {
      shortDesc: "Cough relief",
      description: "Cough relief",
      benefits: "Soothes throat, Reduces cough",
      usage: "Take 2 teaspoons 3 times daily",
      warnings: "Shake well"
    },
    mr: {
      shortDesc: "Cough relief",
      description: "Cough relief",
      benefits: "Soothes throat, Reduces cough",
      usage: "Take 2 teaspoons 3 times daily",
      warnings: "Shake well"
    },
    gu: {
      shortDesc: "Cough relief",
      description: "Cough relief",
      benefits: "Soothes throat, Reduces cough",
      usage: "Take 2 teaspoons 3 times daily",
      warnings: "Shake well"
    },
    kn: {
      shortDesc: "Cough relief",
      description: "Cough relief",
      benefits: "Soothes throat, Reduces cough",
      usage: "Take 2 teaspoons 3 times daily",
      warnings: "Shake well"
    },
    ml: {
      shortDesc: "Cough relief",
      description: "Cough relief",
      benefits: "Soothes throat, Reduces cough",
      usage: "Take 2 teaspoons 3 times daily",
      warnings: "Shake well"
    },
    pa: {
      shortDesc: "Cough relief",
      description: "Cough relief",
      benefits: "Soothes throat, Reduces cough",
      usage: "Take 2 teaspoons 3 times daily",
      warnings: "Shake well"
    },
    or: {
      shortDesc: "Cough relief",
      description: "Cough relief",
      benefits: "Soothes throat, Reduces cough",
      usage: "Take 2 teaspoons 3 times daily",
      warnings: "Shake well"
    },
    as: {
      shortDesc: "Cough relief",
      description: "Cough relief",
      benefits: "Soothes throat, Reduces cough",
      usage: "Take 2 teaspoons 3 times daily",
      warnings: "Shake well"
    },
    ur: {
      shortDesc: "Cough relief",
      description: "Cough relief",
      benefits: "Soothes throat, Reduces cough",
      usage: "Take 2 teaspoons 3 times daily",
      warnings: "Shake well"
    }
  },
  "MED104": {
    en: {
      shortDesc: "Acidity relief",
      description: "Acidity relief",
      benefits: "Fast relief, Mint flavor",
      usage: "Chew 1-2 tablets",
      warnings: "Do not exceed 8 tablets"
    },
    hi: {
      shortDesc: "Acidity relief",
      description: "Acidity relief",
      benefits: "Fast relief, Mint flavor",
      usage: "Chew 1-2 tablets",
      warnings: "Do not exceed 8 tablets"
    },
    ta: {
      shortDesc: "Acidity relief",
      description: "Acidity relief",
      benefits: "Fast relief, Mint flavor",
      usage: "Chew 1-2 tablets",
      warnings: "Do not exceed 8 tablets"
    },
    te: {
      shortDesc: "Acidity relief",
      description: "Acidity relief",
      benefits: "Fast relief, Mint flavor",
      usage: "Chew 1-2 tablets",
      warnings: "Do not exceed 8 tablets"
    },
    bn: {
      shortDesc: "Acidity relief",
      description: "Acidity relief",
      benefits: "Fast relief, Mint flavor",
      usage: "Chew 1-2 tablets",
      warnings: "Do not exceed 8 tablets"
    },
    mr: {
      shortDesc: "Acidity relief",
      description: "Acidity relief",
      benefits: "Fast relief, Mint flavor",
      usage: "Chew 1-2 tablets",
      warnings: "Do not exceed 8 tablets"
    },
    gu: {
      shortDesc: "Acidity relief",
      description: "Acidity relief",
      benefits: "Fast relief, Mint flavor",
      usage: "Chew 1-2 tablets",
      warnings: "Do not exceed 8 tablets"
    },
    kn: {
      shortDesc: "Acidity relief",
      description: "Acidity relief",
      benefits: "Fast relief, Mint flavor",
      usage: "Chew 1-2 tablets",
      warnings: "Do not exceed 8 tablets"
    },
    ml: {
      shortDesc: "Acidity relief",
      description: "Acidity relief",
      benefits: "Fast relief, Mint flavor",
      usage: "Chew 1-2 tablets",
      warnings: "Do not exceed 8 tablets"
    },
    pa: {
      shortDesc: "Acidity relief",
      description: "Acidity relief",
      benefits: "Fast relief, Mint flavor",
      usage: "Chew 1-2 tablets",
      warnings: "Do not exceed 8 tablets"
    },
    or: {
      shortDesc: "Acidity relief",
      description: "Acidity relief",
      benefits: "Fast relief, Mint flavor",
      usage: "Chew 1-2 tablets",
      warnings: "Do not exceed 8 tablets"
    },
    as: {
      shortDesc: "Acidity relief",
      description: "Acidity relief",
      benefits: "Fast relief, Mint flavor",
      usage: "Chew 1-2 tablets",
      warnings: "Do not exceed 8 tablets"
    },
    ur: {
      shortDesc: "Acidity relief",
      description: "Acidity relief",
      benefits: "Fast relief, Mint flavor",
      usage: "Chew 1-2 tablets",
      warnings: "Do not exceed 8 tablets"
    }
  },
  "MED105": {
    en: {
      shortDesc: "Immunity booster",
      description: "Immunity booster",
      benefits: "Boosts immunity, Antioxidant",
      usage: "Take 1 tablet daily",
      warnings: "Store in cool place"
    },
    hi: {
      shortDesc: "Immunity booster",
      description: "Immunity booster",
      benefits: "Boosts immunity, Antioxidant",
      usage: "Take 1 tablet daily",
      warnings: "Store in cool place"
    },
    ta: {
      shortDesc: "Immunity booster",
      description: "Immunity booster",
      benefits: "Boosts immunity, Antioxidant",
      usage: "Take 1 tablet daily",
      warnings: "Store in cool place"
    },
    te: {
      shortDesc: "Immunity booster",
      description: "Immunity booster",
      benefits: "Boosts immunity, Antioxidant",
      usage: "Take 1 tablet daily",
      warnings: "Store in cool place"
    },
    bn: {
      shortDesc: "Immunity booster",
      description: "Immunity booster",
      benefits: "Boosts immunity, Antioxidant",
      usage: "Take 1 tablet daily",
      warnings: "Store in cool place"
    },
    mr: {
      shortDesc: "Immunity booster",
      description: "Immunity booster",
      benefits: "Boosts immunity, Antioxidant",
      usage: "Take 1 tablet daily",
      warnings: "Store in cool place"
    },
    gu: {
      shortDesc: "Immunity booster",
      description: "Immunity booster",
      benefits: "Boosts immunity, Antioxidant",
      usage: "Take 1 tablet daily",
      warnings: "Store in cool place"
    },
    kn: {
      shortDesc: "Immunity booster",
      description: "Immunity booster",
      benefits: "Boosts immunity, Antioxidant",
      usage: "Take 1 tablet daily",
      warnings: "Store in cool place"
    },
    ml: {
      shortDesc: "Immunity booster",
      description: "Immunity booster",
      benefits: "Boosts immunity, Antioxidant",
      usage: "Take 1 tablet daily",
      warnings: "Store in cool place"
    },
    pa: {
      shortDesc: "Immunity booster",
      description: "Immunity booster",
      benefits: "Boosts immunity, Antioxidant",
      usage: "Take 1 tablet daily",
      warnings: "Store in cool place"
    },
    or: {
      shortDesc: "Immunity booster",
      description: "Immunity booster",
      benefits: "Boosts immunity, Antioxidant",
      usage: "Take 1 tablet daily",
      warnings: "Store in cool place"
    },
    as: {
      shortDesc: "Immunity booster",
      description: "Immunity booster",
      benefits: "Boosts immunity, Antioxidant",
      usage: "Take 1 tablet daily",
      warnings: "Store in cool place"
    },
    ur: {
      shortDesc: "Immunity booster",
      description: "Immunity booster",
      benefits: "Boosts immunity, Antioxidant",
      usage: "Take 1 tablet daily",
      warnings: "Store in cool place"
    }
  },
  "MED106": {
    en: {
      shortDesc: "Complete nutrition",
      description: "Complete nutrition",
      benefits: "Essential vitamins, Energy boost",
      usage: "Take 1 tablet daily",
      warnings: "Keep out of reach of children"
    },
    hi: {
      shortDesc: "Complete nutrition",
      description: "Complete nutrition",
      benefits: "Essential vitamins, Energy boost",
      usage: "Take 1 tablet daily",
      warnings: "Keep out of reach of children"
    },
    ta: {
      shortDesc: "Complete nutrition",
      description: "Complete nutrition",
      benefits: "Essential vitamins, Energy boost",
      usage: "Take 1 tablet daily",
      warnings: "Keep out of reach of children"
    },
    te: {
      shortDesc: "Complete nutrition",
      description: "Complete nutrition",
      benefits: "Essential vitamins, Energy boost",
      usage: "Take 1 tablet daily",
      warnings: "Keep out of reach of children"
    },
    bn: {
      shortDesc: "Complete nutrition",
      description: "Complete nutrition",
      benefits: "Essential vitamins, Energy boost",
      usage: "Take 1 tablet daily",
      warnings: "Keep out of reach of children"
    },
    mr: {
      shortDesc: "Complete nutrition",
      description: "Complete nutrition",
      benefits: "Essential vitamins, Energy boost",
      usage: "Take 1 tablet daily",
      warnings: "Keep out of reach of children"
    },
    gu: {
      shortDesc: "Complete nutrition",
      description: "Complete nutrition",
      benefits: "Essential vitamins, Energy boost",
      usage: "Take 1 tablet daily",
      warnings: "Keep out of reach of children"
    },
    kn: {
      shortDesc: "Complete nutrition",
      description: "Complete nutrition",
      benefits: "Essential vitamins, Energy boost",
      usage: "Take 1 tablet daily",
      warnings: "Keep out of reach of children"
    },
    ml: {
      shortDesc: "Complete nutrition",
      description: "Complete nutrition",
      benefits: "Essential vitamins, Energy boost",
      usage: "Take 1 tablet daily",
      warnings: "Keep out of reach of children"
    },
    pa: {
      shortDesc: "Complete nutrition",
      description: "Complete nutrition",
      benefits: "Essential vitamins, Energy boost",
      usage: "Take 1 tablet daily",
      warnings: "Keep out of reach of children"
    },
    or: {
      shortDesc: "Complete nutrition",
      description: "Complete nutrition",
      benefits: "Essential vitamins, Energy boost",
      usage: "Take 1 tablet daily",
      warnings: "Keep out of reach of children"
    },
    as: {
      shortDesc: "Complete nutrition",
      description: "Complete nutrition",
      benefits: "Essential vitamins, Energy boost",
      usage: "Take 1 tablet daily",
      warnings: "Keep out of reach of children"
    },
    ur: {
      shortDesc: "Complete nutrition",
      description: "Complete nutrition",
      benefits: "Essential vitamins, Energy boost",
      usage: "Take 1 tablet daily",
      warnings: "Keep out of reach of children"
    }
  },
  "MED107": {
    en: {
      shortDesc: "Bone health",
      description: "Bone health",
      benefits: "Strengthens bones, With Vitamin D",
      usage: "Take 1 tablet twice daily",
      warnings: "Consult doctor"
    },
    hi: {
      shortDesc: "Bone health",
      description: "Bone health",
      benefits: "Strengthens bones, With Vitamin D",
      usage: "Take 1 tablet twice daily",
      warnings: "Consult doctor"
    },
    ta: {
      shortDesc: "Bone health",
      description: "Bone health",
      benefits: "Strengthens bones, With Vitamin D",
      usage: "Take 1 tablet twice daily",
      warnings: "Consult doctor"
    },
    te: {
      shortDesc: "Bone health",
      description: "Bone health",
      benefits: "Strengthens bones, With Vitamin D",
      usage: "Take 1 tablet twice daily",
      warnings: "Consult doctor"
    },
    bn: {
      shortDesc: "Bone health",
      description: "Bone health",
      benefits: "Strengthens bones, With Vitamin D",
      usage: "Take 1 tablet twice daily",
      warnings: "Consult doctor"
    },
    mr: {
      shortDesc: "Bone health",
      description: "Bone health",
      benefits: "Strengthens bones, With Vitamin D",
      usage: "Take 1 tablet twice daily",
      warnings: "Consult doctor"
    },
    gu: {
      shortDesc: "Bone health",
      description: "Bone health",
      benefits: "Strengthens bones, With Vitamin D",
      usage: "Take 1 tablet twice daily",
      warnings: "Consult doctor"
    },
    kn: {
      shortDesc: "Bone health",
      description: "Bone health",
      benefits: "Strengthens bones, With Vitamin D",
      usage: "Take 1 tablet twice daily",
      warnings: "Consult doctor"
    },
    ml: {
      shortDesc: "Bone health",
      description: "Bone health",
      benefits: "Strengthens bones, With Vitamin D",
      usage: "Take 1 tablet twice daily",
      warnings: "Consult doctor"
    },
    pa: {
      shortDesc: "Bone health",
      description: "Bone health",
      benefits: "Strengthens bones, With Vitamin D",
      usage: "Take 1 tablet twice daily",
      warnings: "Consult doctor"
    },
    or: {
      shortDesc: "Bone health",
      description: "Bone health",
      benefits: "Strengthens bones, With Vitamin D",
      usage: "Take 1 tablet twice daily",
      warnings: "Consult doctor"
    },
    as: {
      shortDesc: "Bone health",
      description: "Bone health",
      benefits: "Strengthens bones, With Vitamin D",
      usage: "Take 1 tablet twice daily",
      warnings: "Consult doctor"
    },
    ur: {
      shortDesc: "Bone health",
      description: "Bone health",
      benefits: "Strengthens bones, With Vitamin D",
      usage: "Take 1 tablet twice daily",
      warnings: "Consult doctor"
    }
  },
  "MED108": {
    en: {
      shortDesc: "Prevents anemia",
      description: "Prevents anemia",
      benefits: "Boosts hemoglobin, Energy",
      usage: "Take 1 tablet daily",
      warnings: "May cause constipation"
    },
    hi: {
      shortDesc: "Prevents anemia",
      description: "Prevents anemia",
      benefits: "Boosts hemoglobin, Energy",
      usage: "Take 1 tablet daily",
      warnings: "May cause constipation"
    },
    ta: {
      shortDesc: "Prevents anemia",
      description: "Prevents anemia",
      benefits: "Boosts hemoglobin, Energy",
      usage: "Take 1 tablet daily",
      warnings: "May cause constipation"
    },
    te: {
      shortDesc: "Prevents anemia",
      description: "Prevents anemia",
      benefits: "Boosts hemoglobin, Energy",
      usage: "Take 1 tablet daily",
      warnings: "May cause constipation"
    },
    bn: {
      shortDesc: "Prevents anemia",
      description: "Prevents anemia",
      benefits: "Boosts hemoglobin, Energy",
      usage: "Take 1 tablet daily",
      warnings: "May cause constipation"
    },
    mr: {
      shortDesc: "Prevents anemia",
      description: "Prevents anemia",
      benefits: "Boosts hemoglobin, Energy",
      usage: "Take 1 tablet daily",
      warnings: "May cause constipation"
    },
    gu: {
      shortDesc: "Prevents anemia",
      description: "Prevents anemia",
      benefits: "Boosts hemoglobin, Energy",
      usage: "Take 1 tablet daily",
      warnings: "May cause constipation"
    },
    kn: {
      shortDesc: "Prevents anemia",
      description: "Prevents anemia",
      benefits: "Boosts hemoglobin, Energy",
      usage: "Take 1 tablet daily",
      warnings: "May cause constipation"
    },
    ml: {
      shortDesc: "Prevents anemia",
      description: "Prevents anemia",
      benefits: "Boosts hemoglobin, Energy",
      usage: "Take 1 tablet daily",
      warnings: "May cause constipation"
    },
    pa: {
      shortDesc: "Prevents anemia",
      description: "Prevents anemia",
      benefits: "Boosts hemoglobin, Energy",
      usage: "Take 1 tablet daily",
      warnings: "May cause constipation"
    },
    or: {
      shortDesc: "Prevents anemia",
      description: "Prevents anemia",
      benefits: "Boosts hemoglobin, Energy",
      usage: "Take 1 tablet daily",
      warnings: "May cause constipation"
    },
    as: {
      shortDesc: "Prevents anemia",
      description: "Prevents anemia",
      benefits: "Boosts hemoglobin, Energy",
      usage: "Take 1 tablet daily",
      warnings: "May cause constipation"
    },
    ur: {
      shortDesc: "Prevents anemia",
      description: "Prevents anemia",
      benefits: "Boosts hemoglobin, Energy",
      usage: "Take 1 tablet daily",
      warnings: "May cause constipation"
    }
  },
  "MED109": {
    en: {
      shortDesc: "Immunity support",
      description: "Immunity support",
      benefits: "Boosts immunity, Wound healing",
      usage: "Take 1 tablet daily",
      warnings: "Do not exceed dose"
    },
    hi: {
      shortDesc: "Immunity support",
      description: "Immunity support",
      benefits: "Boosts immunity, Wound healing",
      usage: "Take 1 tablet daily",
      warnings: "Do not exceed dose"
    },
    ta: {
      shortDesc: "Immunity support",
      description: "Immunity support",
      benefits: "Boosts immunity, Wound healing",
      usage: "Take 1 tablet daily",
      warnings: "Do not exceed dose"
    },
    te: {
      shortDesc: "Immunity support",
      description: "Immunity support",
      benefits: "Boosts immunity, Wound healing",
      usage: "Take 1 tablet daily",
      warnings: "Do not exceed dose"
    },
    bn: {
      shortDesc: "Immunity support",
      description: "Immunity support",
      benefits: "Boosts immunity, Wound healing",
      usage: "Take 1 tablet daily",
      warnings: "Do not exceed dose"
    },
    mr: {
      shortDesc: "Immunity support",
      description: "Immunity support",
      benefits: "Boosts immunity, Wound healing",
      usage: "Take 1 tablet daily",
      warnings: "Do not exceed dose"
    },
    gu: {
      shortDesc: "Immunity support",
      description: "Immunity support",
      benefits: "Boosts immunity, Wound healing",
      usage: "Take 1 tablet daily",
      warnings: "Do not exceed dose"
    },
    kn: {
      shortDesc: "Immunity support",
      description: "Immunity support",
      benefits: "Boosts immunity, Wound healing",
      usage: "Take 1 tablet daily",
      warnings: "Do not exceed dose"
    },
    ml: {
      shortDesc: "Immunity support",
      description: "Immunity support",
      benefits: "Boosts immunity, Wound healing",
      usage: "Take 1 tablet daily",
      warnings: "Do not exceed dose"
    },
    pa: {
      shortDesc: "Immunity support",
      description: "Immunity support",
      benefits: "Boosts immunity, Wound healing",
      usage: "Take 1 tablet daily",
      warnings: "Do not exceed dose"
    },
    or: {
      shortDesc: "Immunity support",
      description: "Immunity support",
      benefits: "Boosts immunity, Wound healing",
      usage: "Take 1 tablet daily",
      warnings: "Do not exceed dose"
    },
    as: {
      shortDesc: "Immunity support",
      description: "Immunity support",
      benefits: "Boosts immunity, Wound healing",
      usage: "Take 1 tablet daily",
      warnings: "Do not exceed dose"
    },
    ur: {
      shortDesc: "Immunity support",
      description: "Immunity support",
      benefits: "Boosts immunity, Wound healing",
      usage: "Take 1 tablet daily",
      warnings: "Do not exceed dose"
    }
  },
  "MED110": {
    en: {
      shortDesc: "Energy vitamins",
      description: "Energy vitamins",
      benefits: "Boosts energy, Reduces fatigue",
      usage: "Take 1 tablet daily",
      warnings: "Take with food"
    },
    hi: {
      shortDesc: "Energy vitamins",
      description: "Energy vitamins",
      benefits: "Boosts energy, Reduces fatigue",
      usage: "Take 1 tablet daily",
      warnings: "Take with food"
    },
    ta: {
      shortDesc: "Energy vitamins",
      description: "Energy vitamins",
      benefits: "Boosts energy, Reduces fatigue",
      usage: "Take 1 tablet daily",
      warnings: "Take with food"
    },
    te: {
      shortDesc: "Energy vitamins",
      description: "Energy vitamins",
      benefits: "Boosts energy, Reduces fatigue",
      usage: "Take 1 tablet daily",
      warnings: "Take with food"
    },
    bn: {
      shortDesc: "Energy vitamins",
      description: "Energy vitamins",
      benefits: "Boosts energy, Reduces fatigue",
      usage: "Take 1 tablet daily",
      warnings: "Take with food"
    },
    mr: {
      shortDesc: "Energy vitamins",
      description: "Energy vitamins",
      benefits: "Boosts energy, Reduces fatigue",
      usage: "Take 1 tablet daily",
      warnings: "Take with food"
    },
    gu: {
      shortDesc: "Energy vitamins",
      description: "Energy vitamins",
      benefits: "Boosts energy, Reduces fatigue",
      usage: "Take 1 tablet daily",
      warnings: "Take with food"
    },
    kn: {
      shortDesc: "Energy vitamins",
      description: "Energy vitamins",
      benefits: "Boosts energy, Reduces fatigue",
      usage: "Take 1 tablet daily",
      warnings: "Take with food"
    },
    ml: {
      shortDesc: "Energy vitamins",
      description: "Energy vitamins",
      benefits: "Boosts energy, Reduces fatigue",
      usage: "Take 1 tablet daily",
      warnings: "Take with food"
    },
    pa: {
      shortDesc: "Energy vitamins",
      description: "Energy vitamins",
      benefits: "Boosts energy, Reduces fatigue",
      usage: "Take 1 tablet daily",
      warnings: "Take with food"
    },
    or: {
      shortDesc: "Energy vitamins",
      description: "Energy vitamins",
      benefits: "Boosts energy, Reduces fatigue",
      usage: "Take 1 tablet daily",
      warnings: "Take with food"
    },
    as: {
      shortDesc: "Energy vitamins",
      description: "Energy vitamins",
      benefits: "Boosts energy, Reduces fatigue",
      usage: "Take 1 tablet daily",
      warnings: "Take with food"
    },
    ur: {
      shortDesc: "Energy vitamins",
      description: "Energy vitamins",
      benefits: "Boosts energy, Reduces fatigue",
      usage: "Take 1 tablet daily",
      warnings: "Take with food"
    }
  },
  "MED111": {
    en: {
      shortDesc: "Multi-symptom relief",
      description: "Multi-symptom relief",
      benefits: "Relieves cold symptoms, Fast acting",
      usage: "Take 1 tablet every 6 hours",
      warnings: "May cause drowsiness"
    },
    hi: {
      shortDesc: "Multi-symptom relief",
      description: "Multi-symptom relief",
      benefits: "Relieves cold symptoms, Fast acting",
      usage: "Take 1 tablet every 6 hours",
      warnings: "May cause drowsiness"
    },
    ta: {
      shortDesc: "Multi-symptom relief",
      description: "Multi-symptom relief",
      benefits: "Relieves cold symptoms, Fast acting",
      usage: "Take 1 tablet every 6 hours",
      warnings: "May cause drowsiness"
    },
    te: {
      shortDesc: "Multi-symptom relief",
      description: "Multi-symptom relief",
      benefits: "Relieves cold symptoms, Fast acting",
      usage: "Take 1 tablet every 6 hours",
      warnings: "May cause drowsiness"
    },
    bn: {
      shortDesc: "Multi-symptom relief",
      description: "Multi-symptom relief",
      benefits: "Relieves cold symptoms, Fast acting",
      usage: "Take 1 tablet every 6 hours",
      warnings: "May cause drowsiness"
    },
    mr: {
      shortDesc: "Multi-symptom relief",
      description: "Multi-symptom relief",
      benefits: "Relieves cold symptoms, Fast acting",
      usage: "Take 1 tablet every 6 hours",
      warnings: "May cause drowsiness"
    },
    gu: {
      shortDesc: "Multi-symptom relief",
      description: "Multi-symptom relief",
      benefits: "Relieves cold symptoms, Fast acting",
      usage: "Take 1 tablet every 6 hours",
      warnings: "May cause drowsiness"
    },
    kn: {
      shortDesc: "Multi-symptom relief",
      description: "Multi-symptom relief",
      benefits: "Relieves cold symptoms, Fast acting",
      usage: "Take 1 tablet every 6 hours",
      warnings: "May cause drowsiness"
    },
    ml: {
      shortDesc: "Multi-symptom relief",
      description: "Multi-symptom relief",
      benefits: "Relieves cold symptoms, Fast acting",
      usage: "Take 1 tablet every 6 hours",
      warnings: "May cause drowsiness"
    },
    pa: {
      shortDesc: "Multi-symptom relief",
      description: "Multi-symptom relief",
      benefits: "Relieves cold symptoms, Fast acting",
      usage: "Take 1 tablet every 6 hours",
      warnings: "May cause drowsiness"
    },
    or: {
      shortDesc: "Multi-symptom relief",
      description: "Multi-symptom relief",
      benefits: "Relieves cold symptoms, Fast acting",
      usage: "Take 1 tablet every 6 hours",
      warnings: "May cause drowsiness"
    },
    as: {
      shortDesc: "Multi-symptom relief",
      description: "Multi-symptom relief",
      benefits: "Relieves cold symptoms, Fast acting",
      usage: "Take 1 tablet every 6 hours",
      warnings: "May cause drowsiness"
    },
    ur: {
      shortDesc: "Multi-symptom relief",
      description: "Multi-symptom relief",
      benefits: "Relieves cold symptoms, Fast acting",
      usage: "Take 1 tablet every 6 hours",
      warnings: "May cause drowsiness"
    }
  },
  "MED112": {
    en: {
      shortDesc: "Sore throat relief",
      description: "Sore throat relief",
      benefits: "Soothes throat, Antibacterial",
      usage: "Dissolve 1 lozenge every 2-3 hours",
      warnings: "Not for children under 6"
    },
    hi: {
      shortDesc: "Sore throat relief",
      description: "Sore throat relief",
      benefits: "Soothes throat, Antibacterial",
      usage: "Dissolve 1 lozenge every 2-3 hours",
      warnings: "Not for children under 6"
    },
    ta: {
      shortDesc: "Sore throat relief",
      description: "Sore throat relief",
      benefits: "Soothes throat, Antibacterial",
      usage: "Dissolve 1 lozenge every 2-3 hours",
      warnings: "Not for children under 6"
    },
    te: {
      shortDesc: "Sore throat relief",
      description: "Sore throat relief",
      benefits: "Soothes throat, Antibacterial",
      usage: "Dissolve 1 lozenge every 2-3 hours",
      warnings: "Not for children under 6"
    },
    bn: {
      shortDesc: "Sore throat relief",
      description: "Sore throat relief",
      benefits: "Soothes throat, Antibacterial",
      usage: "Dissolve 1 lozenge every 2-3 hours",
      warnings: "Not for children under 6"
    },
    mr: {
      shortDesc: "Sore throat relief",
      description: "Sore throat relief",
      benefits: "Soothes throat, Antibacterial",
      usage: "Dissolve 1 lozenge every 2-3 hours",
      warnings: "Not for children under 6"
    },
    gu: {
      shortDesc: "Sore throat relief",
      description: "Sore throat relief",
      benefits: "Soothes throat, Antibacterial",
      usage: "Dissolve 1 lozenge every 2-3 hours",
      warnings: "Not for children under 6"
    },
    kn: {
      shortDesc: "Sore throat relief",
      description: "Sore throat relief",
      benefits: "Soothes throat, Antibacterial",
      usage: "Dissolve 1 lozenge every 2-3 hours",
      warnings: "Not for children under 6"
    },
    ml: {
      shortDesc: "Sore throat relief",
      description: "Sore throat relief",
      benefits: "Soothes throat, Antibacterial",
      usage: "Dissolve 1 lozenge every 2-3 hours",
      warnings: "Not for children under 6"
    },
    pa: {
      shortDesc: "Sore throat relief",
      description: "Sore throat relief",
      benefits: "Soothes throat, Antibacterial",
      usage: "Dissolve 1 lozenge every 2-3 hours",
      warnings: "Not for children under 6"
    },
    or: {
      shortDesc: "Sore throat relief",
      description: "Sore throat relief",
      benefits: "Soothes throat, Antibacterial",
      usage: "Dissolve 1 lozenge every 2-3 hours",
      warnings: "Not for children under 6"
    },
    as: {
      shortDesc: "Sore throat relief",
      description: "Sore throat relief",
      benefits: "Soothes throat, Antibacterial",
      usage: "Dissolve 1 lozenge every 2-3 hours",
      warnings: "Not for children under 6"
    },
    ur: {
      shortDesc: "Sore throat relief",
      description: "Sore throat relief",
      benefits: "Soothes throat, Antibacterial",
      usage: "Dissolve 1 lozenge every 2-3 hours",
      warnings: "Not for children under 6"
    }
  },
  "MED113": {
    en: {
      shortDesc: "Topical pain relief",
      description: "Topical pain relief",
      benefits: "Fast relief, Non-greasy",
      usage: "Apply to affected area",
      warnings: "For external use only"
    },
    hi: {
      shortDesc: "Topical pain relief",
      description: "Topical pain relief",
      benefits: "Fast relief, Non-greasy",
      usage: "Apply to affected area",
      warnings: "For external use only"
    },
    ta: {
      shortDesc: "Topical pain relief",
      description: "Topical pain relief",
      benefits: "Fast relief, Non-greasy",
      usage: "Apply to affected area",
      warnings: "For external use only"
    },
    te: {
      shortDesc: "Topical pain relief",
      description: "Topical pain relief",
      benefits: "Fast relief, Non-greasy",
      usage: "Apply to affected area",
      warnings: "For external use only"
    },
    bn: {
      shortDesc: "Topical pain relief",
      description: "Topical pain relief",
      benefits: "Fast relief, Non-greasy",
      usage: "Apply to affected area",
      warnings: "For external use only"
    },
    mr: {
      shortDesc: "Topical pain relief",
      description: "Topical pain relief",
      benefits: "Fast relief, Non-greasy",
      usage: "Apply to affected area",
      warnings: "For external use only"
    },
    gu: {
      shortDesc: "Topical pain relief",
      description: "Topical pain relief",
      benefits: "Fast relief, Non-greasy",
      usage: "Apply to affected area",
      warnings: "For external use only"
    },
    kn: {
      shortDesc: "Topical pain relief",
      description: "Topical pain relief",
      benefits: "Fast relief, Non-greasy",
      usage: "Apply to affected area",
      warnings: "For external use only"
    },
    ml: {
      shortDesc: "Topical pain relief",
      description: "Topical pain relief",
      benefits: "Fast relief, Non-greasy",
      usage: "Apply to affected area",
      warnings: "For external use only"
    },
    pa: {
      shortDesc: "Topical pain relief",
      description: "Topical pain relief",
      benefits: "Fast relief, Non-greasy",
      usage: "Apply to affected area",
      warnings: "For external use only"
    },
    or: {
      shortDesc: "Topical pain relief",
      description: "Topical pain relief",
      benefits: "Fast relief, Non-greasy",
      usage: "Apply to affected area",
      warnings: "For external use only"
    },
    as: {
      shortDesc: "Topical pain relief",
      description: "Topical pain relief",
      benefits: "Fast relief, Non-greasy",
      usage: "Apply to affected area",
      warnings: "For external use only"
    },
    ur: {
      shortDesc: "Topical pain relief",
      description: "Topical pain relief",
      benefits: "Fast relief, Non-greasy",
      usage: "Apply to affected area",
      warnings: "For external use only"
    }
  },
  "MED114": {
    en: {
      shortDesc: "Improves digestion",
      description: "Improves digestion",
      benefits: "Reduces bloating, Better absorption",
      usage: "Take 1 tablet with meals",
      warnings: "Consult doctor"
    },
    hi: {
      shortDesc: "Improves digestion",
      description: "Improves digestion",
      benefits: "Reduces bloating, Better absorption",
      usage: "Take 1 tablet with meals",
      warnings: "Consult doctor"
    },
    ta: {
      shortDesc: "Improves digestion",
      description: "Improves digestion",
      benefits: "Reduces bloating, Better absorption",
      usage: "Take 1 tablet with meals",
      warnings: "Consult doctor"
    },
    te: {
      shortDesc: "Improves digestion",
      description: "Improves digestion",
      benefits: "Reduces bloating, Better absorption",
      usage: "Take 1 tablet with meals",
      warnings: "Consult doctor"
    },
    bn: {
      shortDesc: "Improves digestion",
      description: "Improves digestion",
      benefits: "Reduces bloating, Better absorption",
      usage: "Take 1 tablet with meals",
      warnings: "Consult doctor"
    },
    mr: {
      shortDesc: "Improves digestion",
      description: "Improves digestion",
      benefits: "Reduces bloating, Better absorption",
      usage: "Take 1 tablet with meals",
      warnings: "Consult doctor"
    },
    gu: {
      shortDesc: "Improves digestion",
      description: "Improves digestion",
      benefits: "Reduces bloating, Better absorption",
      usage: "Take 1 tablet with meals",
      warnings: "Consult doctor"
    },
    kn: {
      shortDesc: "Improves digestion",
      description: "Improves digestion",
      benefits: "Reduces bloating, Better absorption",
      usage: "Take 1 tablet with meals",
      warnings: "Consult doctor"
    },
    ml: {
      shortDesc: "Improves digestion",
      description: "Improves digestion",
      benefits: "Reduces bloating, Better absorption",
      usage: "Take 1 tablet with meals",
      warnings: "Consult doctor"
    },
    pa: {
      shortDesc: "Improves digestion",
      description: "Improves digestion",
      benefits: "Reduces bloating, Better absorption",
      usage: "Take 1 tablet with meals",
      warnings: "Consult doctor"
    },
    or: {
      shortDesc: "Improves digestion",
      description: "Improves digestion",
      benefits: "Reduces bloating, Better absorption",
      usage: "Take 1 tablet with meals",
      warnings: "Consult doctor"
    },
    as: {
      shortDesc: "Improves digestion",
      description: "Improves digestion",
      benefits: "Reduces bloating, Better absorption",
      usage: "Take 1 tablet with meals",
      warnings: "Consult doctor"
    },
    ur: {
      shortDesc: "Improves digestion",
      description: "Improves digestion",
      benefits: "Reduces bloating, Better absorption",
      usage: "Take 1 tablet with meals",
      warnings: "Consult doctor"
    }
  },
  "MED115": {
    en: {
      shortDesc: "Antihistamine",
      description: "Antihistamine",
      benefits: "Relieves allergies, Non-drowsy",
      usage: "Take 1 tablet daily",
      warnings: "Avoid alcohol"
    },
    hi: {
      shortDesc: "Antihistamine",
      description: "Antihistamine",
      benefits: "Relieves allergies, Non-drowsy",
      usage: "Take 1 tablet daily",
      warnings: "Avoid alcohol"
    },
    ta: {
      shortDesc: "Antihistamine",
      description: "Antihistamine",
      benefits: "Relieves allergies, Non-drowsy",
      usage: "Take 1 tablet daily",
      warnings: "Avoid alcohol"
    },
    te: {
      shortDesc: "Antihistamine",
      description: "Antihistamine",
      benefits: "Relieves allergies, Non-drowsy",
      usage: "Take 1 tablet daily",
      warnings: "Avoid alcohol"
    },
    bn: {
      shortDesc: "Antihistamine",
      description: "Antihistamine",
      benefits: "Relieves allergies, Non-drowsy",
      usage: "Take 1 tablet daily",
      warnings: "Avoid alcohol"
    },
    mr: {
      shortDesc: "Antihistamine",
      description: "Antihistamine",
      benefits: "Relieves allergies, Non-drowsy",
      usage: "Take 1 tablet daily",
      warnings: "Avoid alcohol"
    },
    gu: {
      shortDesc: "Antihistamine",
      description: "Antihistamine",
      benefits: "Relieves allergies, Non-drowsy",
      usage: "Take 1 tablet daily",
      warnings: "Avoid alcohol"
    },
    kn: {
      shortDesc: "Antihistamine",
      description: "Antihistamine",
      benefits: "Relieves allergies, Non-drowsy",
      usage: "Take 1 tablet daily",
      warnings: "Avoid alcohol"
    },
    ml: {
      shortDesc: "Antihistamine",
      description: "Antihistamine",
      benefits: "Relieves allergies, Non-drowsy",
      usage: "Take 1 tablet daily",
      warnings: "Avoid alcohol"
    },
    pa: {
      shortDesc: "Antihistamine",
      description: "Antihistamine",
      benefits: "Relieves allergies, Non-drowsy",
      usage: "Take 1 tablet daily",
      warnings: "Avoid alcohol"
    },
    or: {
      shortDesc: "Antihistamine",
      description: "Antihistamine",
      benefits: "Relieves allergies, Non-drowsy",
      usage: "Take 1 tablet daily",
      warnings: "Avoid alcohol"
    },
    as: {
      shortDesc: "Antihistamine",
      description: "Antihistamine",
      benefits: "Relieves allergies, Non-drowsy",
      usage: "Take 1 tablet daily",
      warnings: "Avoid alcohol"
    },
    ur: {
      shortDesc: "Antihistamine",
      description: "Antihistamine",
      benefits: "Relieves allergies, Non-drowsy",
      usage: "Take 1 tablet daily",
      warnings: "Avoid alcohol"
    }
  },
  "MED116": {
    en: {
      shortDesc: "Oral rehydration",
      description: "Oral rehydration",
      benefits: "Prevents dehydration, WHO formula",
      usage: "Dissolve in water",
      warnings: "Use fresh solution"
    },
    hi: {
      shortDesc: "Oral rehydration",
      description: "Oral rehydration",
      benefits: "Prevents dehydration, WHO formula",
      usage: "Dissolve in water",
      warnings: "Use fresh solution"
    },
    ta: {
      shortDesc: "Oral rehydration",
      description: "Oral rehydration",
      benefits: "Prevents dehydration, WHO formula",
      usage: "Dissolve in water",
      warnings: "Use fresh solution"
    },
    te: {
      shortDesc: "Oral rehydration",
      description: "Oral rehydration",
      benefits: "Prevents dehydration, WHO formula",
      usage: "Dissolve in water",
      warnings: "Use fresh solution"
    },
    bn: {
      shortDesc: "Oral rehydration",
      description: "Oral rehydration",
      benefits: "Prevents dehydration, WHO formula",
      usage: "Dissolve in water",
      warnings: "Use fresh solution"
    },
    mr: {
      shortDesc: "Oral rehydration",
      description: "Oral rehydration",
      benefits: "Prevents dehydration, WHO formula",
      usage: "Dissolve in water",
      warnings: "Use fresh solution"
    },
    gu: {
      shortDesc: "Oral rehydration",
      description: "Oral rehydration",
      benefits: "Prevents dehydration, WHO formula",
      usage: "Dissolve in water",
      warnings: "Use fresh solution"
    },
    kn: {
      shortDesc: "Oral rehydration",
      description: "Oral rehydration",
      benefits: "Prevents dehydration, WHO formula",
      usage: "Dissolve in water",
      warnings: "Use fresh solution"
    },
    ml: {
      shortDesc: "Oral rehydration",
      description: "Oral rehydration",
      benefits: "Prevents dehydration, WHO formula",
      usage: "Dissolve in water",
      warnings: "Use fresh solution"
    },
    pa: {
      shortDesc: "Oral rehydration",
      description: "Oral rehydration",
      benefits: "Prevents dehydration, WHO formula",
      usage: "Dissolve in water",
      warnings: "Use fresh solution"
    },
    or: {
      shortDesc: "Oral rehydration",
      description: "Oral rehydration",
      benefits: "Prevents dehydration, WHO formula",
      usage: "Dissolve in water",
      warnings: "Use fresh solution"
    },
    as: {
      shortDesc: "Oral rehydration",
      description: "Oral rehydration",
      benefits: "Prevents dehydration, WHO formula",
      usage: "Dissolve in water",
      warnings: "Use fresh solution"
    },
    ur: {
      shortDesc: "Oral rehydration",
      description: "Oral rehydration",
      benefits: "Prevents dehydration, WHO formula",
      usage: "Dissolve in water",
      warnings: "Use fresh solution"
    }
  },
  "MED117": {
    en: {
      shortDesc: "Wound disinfectant",
      description: "Wound disinfectant",
      benefits: "Kills germs, Prevents infection",
      usage: "Apply to clean wound",
      warnings: "For external use"
    },
    hi: {
      shortDesc: "Wound disinfectant",
      description: "Wound disinfectant",
      benefits: "Kills germs, Prevents infection",
      usage: "Apply to clean wound",
      warnings: "For external use"
    },
    ta: {
      shortDesc: "Wound disinfectant",
      description: "Wound disinfectant",
      benefits: "Kills germs, Prevents infection",
      usage: "Apply to clean wound",
      warnings: "For external use"
    },
    te: {
      shortDesc: "Wound disinfectant",
      description: "Wound disinfectant",
      benefits: "Kills germs, Prevents infection",
      usage: "Apply to clean wound",
      warnings: "For external use"
    },
    bn: {
      shortDesc: "Wound disinfectant",
      description: "Wound disinfectant",
      benefits: "Kills germs, Prevents infection",
      usage: "Apply to clean wound",
      warnings: "For external use"
    },
    mr: {
      shortDesc: "Wound disinfectant",
      description: "Wound disinfectant",
      benefits: "Kills germs, Prevents infection",
      usage: "Apply to clean wound",
      warnings: "For external use"
    },
    gu: {
      shortDesc: "Wound disinfectant",
      description: "Wound disinfectant",
      benefits: "Kills germs, Prevents infection",
      usage: "Apply to clean wound",
      warnings: "For external use"
    },
    kn: {
      shortDesc: "Wound disinfectant",
      description: "Wound disinfectant",
      benefits: "Kills germs, Prevents infection",
      usage: "Apply to clean wound",
      warnings: "For external use"
    },
    ml: {
      shortDesc: "Wound disinfectant",
      description: "Wound disinfectant",
      benefits: "Kills germs, Prevents infection",
      usage: "Apply to clean wound",
      warnings: "For external use"
    },
    pa: {
      shortDesc: "Wound disinfectant",
      description: "Wound disinfectant",
      benefits: "Kills germs, Prevents infection",
      usage: "Apply to clean wound",
      warnings: "For external use"
    },
    or: {
      shortDesc: "Wound disinfectant",
      description: "Wound disinfectant",
      benefits: "Kills germs, Prevents infection",
      usage: "Apply to clean wound",
      warnings: "For external use"
    },
    as: {
      shortDesc: "Wound disinfectant",
      description: "Wound disinfectant",
      benefits: "Kills germs, Prevents infection",
      usage: "Apply to clean wound",
      warnings: "For external use"
    },
    ur: {
      shortDesc: "Wound disinfectant",
      description: "Wound disinfectant",
      benefits: "Kills germs, Prevents infection",
      usage: "Apply to clean wound",
      warnings: "For external use"
    }
  },
  "MED118": {
    en: {
      shortDesc: "Adhesive bandages",
      description: "Adhesive bandages",
      benefits: "Waterproof, Flexible",
      usage: "Apply to minor cuts",
      warnings: "Change daily"
    },
    hi: {
      shortDesc: "Adhesive bandages",
      description: "Adhesive bandages",
      benefits: "Waterproof, Flexible",
      usage: "Apply to minor cuts",
      warnings: "Change daily"
    },
    ta: {
      shortDesc: "Adhesive bandages",
      description: "Adhesive bandages",
      benefits: "Waterproof, Flexible",
      usage: "Apply to minor cuts",
      warnings: "Change daily"
    },
    te: {
      shortDesc: "Adhesive bandages",
      description: "Adhesive bandages",
      benefits: "Waterproof, Flexible",
      usage: "Apply to minor cuts",
      warnings: "Change daily"
    },
    bn: {
      shortDesc: "Adhesive bandages",
      description: "Adhesive bandages",
      benefits: "Waterproof, Flexible",
      usage: "Apply to minor cuts",
      warnings: "Change daily"
    },
    mr: {
      shortDesc: "Adhesive bandages",
      description: "Adhesive bandages",
      benefits: "Waterproof, Flexible",
      usage: "Apply to minor cuts",
      warnings: "Change daily"
    },
    gu: {
      shortDesc: "Adhesive bandages",
      description: "Adhesive bandages",
      benefits: "Waterproof, Flexible",
      usage: "Apply to minor cuts",
      warnings: "Change daily"
    },
    kn: {
      shortDesc: "Adhesive bandages",
      description: "Adhesive bandages",
      benefits: "Waterproof, Flexible",
      usage: "Apply to minor cuts",
      warnings: "Change daily"
    },
    ml: {
      shortDesc: "Adhesive bandages",
      description: "Adhesive bandages",
      benefits: "Waterproof, Flexible",
      usage: "Apply to minor cuts",
      warnings: "Change daily"
    },
    pa: {
      shortDesc: "Adhesive bandages",
      description: "Adhesive bandages",
      benefits: "Waterproof, Flexible",
      usage: "Apply to minor cuts",
      warnings: "Change daily"
    },
    or: {
      shortDesc: "Adhesive bandages",
      description: "Adhesive bandages",
      benefits: "Waterproof, Flexible",
      usage: "Apply to minor cuts",
      warnings: "Change daily"
    },
    as: {
      shortDesc: "Adhesive bandages",
      description: "Adhesive bandages",
      benefits: "Waterproof, Flexible",
      usage: "Apply to minor cuts",
      warnings: "Change daily"
    },
    ur: {
      shortDesc: "Adhesive bandages",
      description: "Adhesive bandages",
      benefits: "Waterproof, Flexible",
      usage: "Apply to minor cuts",
      warnings: "Change daily"
    }
  },
  "MED119": {
    en: {
      shortDesc: "Sterile gauze pads",
      description: "Sterile gauze pads",
      benefits: "Absorbent, Sterile",
      usage: "Use for wound dressing",
      warnings: "Single use only"
    },
    hi: {
      shortDesc: "Sterile gauze pads",
      description: "Sterile gauze pads",
      benefits: "Absorbent, Sterile",
      usage: "Use for wound dressing",
      warnings: "Single use only"
    },
    ta: {
      shortDesc: "Sterile gauze pads",
      description: "Sterile gauze pads",
      benefits: "Absorbent, Sterile",
      usage: "Use for wound dressing",
      warnings: "Single use only"
    },
    te: {
      shortDesc: "Sterile gauze pads",
      description: "Sterile gauze pads",
      benefits: "Absorbent, Sterile",
      usage: "Use for wound dressing",
      warnings: "Single use only"
    },
    bn: {
      shortDesc: "Sterile gauze pads",
      description: "Sterile gauze pads",
      benefits: "Absorbent, Sterile",
      usage: "Use for wound dressing",
      warnings: "Single use only"
    },
    mr: {
      shortDesc: "Sterile gauze pads",
      description: "Sterile gauze pads",
      benefits: "Absorbent, Sterile",
      usage: "Use for wound dressing",
      warnings: "Single use only"
    },
    gu: {
      shortDesc: "Sterile gauze pads",
      description: "Sterile gauze pads",
      benefits: "Absorbent, Sterile",
      usage: "Use for wound dressing",
      warnings: "Single use only"
    },
    kn: {
      shortDesc: "Sterile gauze pads",
      description: "Sterile gauze pads",
      benefits: "Absorbent, Sterile",
      usage: "Use for wound dressing",
      warnings: "Single use only"
    },
    ml: {
      shortDesc: "Sterile gauze pads",
      description: "Sterile gauze pads",
      benefits: "Absorbent, Sterile",
      usage: "Use for wound dressing",
      warnings: "Single use only"
    },
    pa: {
      shortDesc: "Sterile gauze pads",
      description: "Sterile gauze pads",
      benefits: "Absorbent, Sterile",
      usage: "Use for wound dressing",
      warnings: "Single use only"
    },
    or: {
      shortDesc: "Sterile gauze pads",
      description: "Sterile gauze pads",
      benefits: "Absorbent, Sterile",
      usage: "Use for wound dressing",
      warnings: "Single use only"
    },
    as: {
      shortDesc: "Sterile gauze pads",
      description: "Sterile gauze pads",
      benefits: "Absorbent, Sterile",
      usage: "Use for wound dressing",
      warnings: "Single use only"
    },
    ur: {
      shortDesc: "Sterile gauze pads",
      description: "Sterile gauze pads",
      benefits: "Absorbent, Sterile",
      usage: "Use for wound dressing",
      warnings: "Single use only"
    }
  },
  "MED120": {
    en: {
      shortDesc: "Medical cotton",
      description: "Medical cotton",
      benefits: "Soft, Absorbent",
      usage: "Use for cleaning",
      warnings: "For external use"
    },
    hi: {
      shortDesc: "Medical cotton",
      description: "Medical cotton",
      benefits: "Soft, Absorbent",
      usage: "Use for cleaning",
      warnings: "For external use"
    },
    ta: {
      shortDesc: "Medical cotton",
      description: "Medical cotton",
      benefits: "Soft, Absorbent",
      usage: "Use for cleaning",
      warnings: "For external use"
    },
    te: {
      shortDesc: "Medical cotton",
      description: "Medical cotton",
      benefits: "Soft, Absorbent",
      usage: "Use for cleaning",
      warnings: "For external use"
    },
    bn: {
      shortDesc: "Medical cotton",
      description: "Medical cotton",
      benefits: "Soft, Absorbent",
      usage: "Use for cleaning",
      warnings: "For external use"
    },
    mr: {
      shortDesc: "Medical cotton",
      description: "Medical cotton",
      benefits: "Soft, Absorbent",
      usage: "Use for cleaning",
      warnings: "For external use"
    },
    gu: {
      shortDesc: "Medical cotton",
      description: "Medical cotton",
      benefits: "Soft, Absorbent",
      usage: "Use for cleaning",
      warnings: "For external use"
    },
    kn: {
      shortDesc: "Medical cotton",
      description: "Medical cotton",
      benefits: "Soft, Absorbent",
      usage: "Use for cleaning",
      warnings: "For external use"
    },
    ml: {
      shortDesc: "Medical cotton",
      description: "Medical cotton",
      benefits: "Soft, Absorbent",
      usage: "Use for cleaning",
      warnings: "For external use"
    },
    pa: {
      shortDesc: "Medical cotton",
      description: "Medical cotton",
      benefits: "Soft, Absorbent",
      usage: "Use for cleaning",
      warnings: "For external use"
    },
    or: {
      shortDesc: "Medical cotton",
      description: "Medical cotton",
      benefits: "Soft, Absorbent",
      usage: "Use for cleaning",
      warnings: "For external use"
    },
    as: {
      shortDesc: "Medical cotton",
      description: "Medical cotton",
      benefits: "Soft, Absorbent",
      usage: "Use for cleaning",
      warnings: "For external use"
    },
    ur: {
      shortDesc: "Medical cotton",
      description: "Medical cotton",
      benefits: "Soft, Absorbent",
      usage: "Use for cleaning",
      warnings: "For external use"
    }
  },
  "MED121": {
    en: {
      shortDesc: "Energy supplement",
      description: "Energy supplement",
      benefits: "Instant energy, Vitamins",
      usage: "Mix with water",
      warnings: "Contains caffeine"
    },
    hi: {
      shortDesc: "Energy supplement",
      description: "Energy supplement",
      benefits: "Instant energy, Vitamins",
      usage: "Mix with water",
      warnings: "Contains caffeine"
    },
    ta: {
      shortDesc: "Energy supplement",
      description: "Energy supplement",
      benefits: "Instant energy, Vitamins",
      usage: "Mix with water",
      warnings: "Contains caffeine"
    },
    te: {
      shortDesc: "Energy supplement",
      description: "Energy supplement",
      benefits: "Instant energy, Vitamins",
      usage: "Mix with water",
      warnings: "Contains caffeine"
    },
    bn: {
      shortDesc: "Energy supplement",
      description: "Energy supplement",
      benefits: "Instant energy, Vitamins",
      usage: "Mix with water",
      warnings: "Contains caffeine"
    },
    mr: {
      shortDesc: "Energy supplement",
      description: "Energy supplement",
      benefits: "Instant energy, Vitamins",
      usage: "Mix with water",
      warnings: "Contains caffeine"
    },
    gu: {
      shortDesc: "Energy supplement",
      description: "Energy supplement",
      benefits: "Instant energy, Vitamins",
      usage: "Mix with water",
      warnings: "Contains caffeine"
    },
    kn: {
      shortDesc: "Energy supplement",
      description: "Energy supplement",
      benefits: "Instant energy, Vitamins",
      usage: "Mix with water",
      warnings: "Contains caffeine"
    },
    ml: {
      shortDesc: "Energy supplement",
      description: "Energy supplement",
      benefits: "Instant energy, Vitamins",
      usage: "Mix with water",
      warnings: "Contains caffeine"
    },
    pa: {
      shortDesc: "Energy supplement",
      description: "Energy supplement",
      benefits: "Instant energy, Vitamins",
      usage: "Mix with water",
      warnings: "Contains caffeine"
    },
    or: {
      shortDesc: "Energy supplement",
      description: "Energy supplement",
      benefits: "Instant energy, Vitamins",
      usage: "Mix with water",
      warnings: "Contains caffeine"
    },
    as: {
      shortDesc: "Energy supplement",
      description: "Energy supplement",
      benefits: "Instant energy, Vitamins",
      usage: "Mix with water",
      warnings: "Contains caffeine"
    },
    ur: {
      shortDesc: "Energy supplement",
      description: "Energy supplement",
      benefits: "Instant energy, Vitamins",
      usage: "Mix with water",
      warnings: "Contains caffeine"
    }
  },
  "MED122": {
    en: {
      shortDesc: "Whey protein",
      description: "Whey protein",
      benefits: "Muscle building, 25g protein",
      usage: "Mix 1 scoop with milk",
      warnings: "Consult doctor"
    },
    hi: {
      shortDesc: "Whey protein",
      description: "Whey protein",
      benefits: "Muscle building, 25g protein",
      usage: "Mix 1 scoop with milk",
      warnings: "Consult doctor"
    },
    ta: {
      shortDesc: "Whey protein",
      description: "Whey protein",
      benefits: "Muscle building, 25g protein",
      usage: "Mix 1 scoop with milk",
      warnings: "Consult doctor"
    },
    te: {
      shortDesc: "Whey protein",
      description: "Whey protein",
      benefits: "Muscle building, 25g protein",
      usage: "Mix 1 scoop with milk",
      warnings: "Consult doctor"
    },
    bn: {
      shortDesc: "Whey protein",
      description: "Whey protein",
      benefits: "Muscle building, 25g protein",
      usage: "Mix 1 scoop with milk",
      warnings: "Consult doctor"
    },
    mr: {
      shortDesc: "Whey protein",
      description: "Whey protein",
      benefits: "Muscle building, 25g protein",
      usage: "Mix 1 scoop with milk",
      warnings: "Consult doctor"
    },
    gu: {
      shortDesc: "Whey protein",
      description: "Whey protein",
      benefits: "Muscle building, 25g protein",
      usage: "Mix 1 scoop with milk",
      warnings: "Consult doctor"
    },
    kn: {
      shortDesc: "Whey protein",
      description: "Whey protein",
      benefits: "Muscle building, 25g protein",
      usage: "Mix 1 scoop with milk",
      warnings: "Consult doctor"
    },
    ml: {
      shortDesc: "Whey protein",
      description: "Whey protein",
      benefits: "Muscle building, 25g protein",
      usage: "Mix 1 scoop with milk",
      warnings: "Consult doctor"
    },
    pa: {
      shortDesc: "Whey protein",
      description: "Whey protein",
      benefits: "Muscle building, 25g protein",
      usage: "Mix 1 scoop with milk",
      warnings: "Consult doctor"
    },
    or: {
      shortDesc: "Whey protein",
      description: "Whey protein",
      benefits: "Muscle building, 25g protein",
      usage: "Mix 1 scoop with milk",
      warnings: "Consult doctor"
    },
    as: {
      shortDesc: "Whey protein",
      description: "Whey protein",
      benefits: "Muscle building, 25g protein",
      usage: "Mix 1 scoop with milk",
      warnings: "Consult doctor"
    },
    ur: {
      shortDesc: "Whey protein",
      description: "Whey protein",
      benefits: "Muscle building, 25g protein",
      usage: "Mix 1 scoop with milk",
      warnings: "Consult doctor"
    }
  },
  "MED123": {
    en: {
      shortDesc: "Fish oil capsules",
      description: "Fish oil capsules",
      benefits: "Heart health, Brain function",
      usage: "Take 2 capsules daily",
      warnings: "Keep refrigerated"
    },
    hi: {
      shortDesc: "Fish oil capsules",
      description: "Fish oil capsules",
      benefits: "Heart health, Brain function",
      usage: "Take 2 capsules daily",
      warnings: "Keep refrigerated"
    },
    ta: {
      shortDesc: "Fish oil capsules",
      description: "Fish oil capsules",
      benefits: "Heart health, Brain function",
      usage: "Take 2 capsules daily",
      warnings: "Keep refrigerated"
    },
    te: {
      shortDesc: "Fish oil capsules",
      description: "Fish oil capsules",
      benefits: "Heart health, Brain function",
      usage: "Take 2 capsules daily",
      warnings: "Keep refrigerated"
    },
    bn: {
      shortDesc: "Fish oil capsules",
      description: "Fish oil capsules",
      benefits: "Heart health, Brain function",
      usage: "Take 2 capsules daily",
      warnings: "Keep refrigerated"
    },
    mr: {
      shortDesc: "Fish oil capsules",
      description: "Fish oil capsules",
      benefits: "Heart health, Brain function",
      usage: "Take 2 capsules daily",
      warnings: "Keep refrigerated"
    },
    gu: {
      shortDesc: "Fish oil capsules",
      description: "Fish oil capsules",
      benefits: "Heart health, Brain function",
      usage: "Take 2 capsules daily",
      warnings: "Keep refrigerated"
    },
    kn: {
      shortDesc: "Fish oil capsules",
      description: "Fish oil capsules",
      benefits: "Heart health, Brain function",
      usage: "Take 2 capsules daily",
      warnings: "Keep refrigerated"
    },
    ml: {
      shortDesc: "Fish oil capsules",
      description: "Fish oil capsules",
      benefits: "Heart health, Brain function",
      usage: "Take 2 capsules daily",
      warnings: "Keep refrigerated"
    },
    pa: {
      shortDesc: "Fish oil capsules",
      description: "Fish oil capsules",
      benefits: "Heart health, Brain function",
      usage: "Take 2 capsules daily",
      warnings: "Keep refrigerated"
    },
    or: {
      shortDesc: "Fish oil capsules",
      description: "Fish oil capsules",
      benefits: "Heart health, Brain function",
      usage: "Take 2 capsules daily",
      warnings: "Keep refrigerated"
    },
    as: {
      shortDesc: "Fish oil capsules",
      description: "Fish oil capsules",
      benefits: "Heart health, Brain function",
      usage: "Take 2 capsules daily",
      warnings: "Keep refrigerated"
    },
    ur: {
      shortDesc: "Fish oil capsules",
      description: "Fish oil capsules",
      benefits: "Heart health, Brain function",
      usage: "Take 2 capsules daily",
      warnings: "Keep refrigerated"
    }
  },
  "MED124": {
    en: {
      shortDesc: "Gut health",
      description: "Gut health",
      benefits: "Improves digestion, Immunity",
      usage: "Take 1 capsule daily",
      warnings: "Refrigerate after opening"
    },
    hi: {
      shortDesc: "Gut health",
      description: "Gut health",
      benefits: "Improves digestion, Immunity",
      usage: "Take 1 capsule daily",
      warnings: "Refrigerate after opening"
    },
    ta: {
      shortDesc: "Gut health",
      description: "Gut health",
      benefits: "Improves digestion, Immunity",
      usage: "Take 1 capsule daily",
      warnings: "Refrigerate after opening"
    },
    te: {
      shortDesc: "Gut health",
      description: "Gut health",
      benefits: "Improves digestion, Immunity",
      usage: "Take 1 capsule daily",
      warnings: "Refrigerate after opening"
    },
    bn: {
      shortDesc: "Gut health",
      description: "Gut health",
      benefits: "Improves digestion, Immunity",
      usage: "Take 1 capsule daily",
      warnings: "Refrigerate after opening"
    },
    mr: {
      shortDesc: "Gut health",
      description: "Gut health",
      benefits: "Improves digestion, Immunity",
      usage: "Take 1 capsule daily",
      warnings: "Refrigerate after opening"
    },
    gu: {
      shortDesc: "Gut health",
      description: "Gut health",
      benefits: "Improves digestion, Immunity",
      usage: "Take 1 capsule daily",
      warnings: "Refrigerate after opening"
    },
    kn: {
      shortDesc: "Gut health",
      description: "Gut health",
      benefits: "Improves digestion, Immunity",
      usage: "Take 1 capsule daily",
      warnings: "Refrigerate after opening"
    },
    ml: {
      shortDesc: "Gut health",
      description: "Gut health",
      benefits: "Improves digestion, Immunity",
      usage: "Take 1 capsule daily",
      warnings: "Refrigerate after opening"
    },
    pa: {
      shortDesc: "Gut health",
      description: "Gut health",
      benefits: "Improves digestion, Immunity",
      usage: "Take 1 capsule daily",
      warnings: "Refrigerate after opening"
    },
    or: {
      shortDesc: "Gut health",
      description: "Gut health",
      benefits: "Improves digestion, Immunity",
      usage: "Take 1 capsule daily",
      warnings: "Refrigerate after opening"
    },
    as: {
      shortDesc: "Gut health",
      description: "Gut health",
      benefits: "Improves digestion, Immunity",
      usage: "Take 1 capsule daily",
      warnings: "Refrigerate after opening"
    },
    ur: {
      shortDesc: "Gut health",
      description: "Gut health",
      benefits: "Improves digestion, Immunity",
      usage: "Take 1 capsule daily",
      warnings: "Refrigerate after opening"
    }
  },
  "MED125": {
    en: {
      shortDesc: "Skin and joint health",
      description: "Skin and joint health",
      benefits: "Anti-aging, Joint support",
      usage: "Mix 1 scoop daily",
      warnings: "Store in cool place"
    },
    hi: {
      shortDesc: "Skin and joint health",
      description: "Skin and joint health",
      benefits: "Anti-aging, Joint support",
      usage: "Mix 1 scoop daily",
      warnings: "Store in cool place"
    },
    ta: {
      shortDesc: "Skin and joint health",
      description: "Skin and joint health",
      benefits: "Anti-aging, Joint support",
      usage: "Mix 1 scoop daily",
      warnings: "Store in cool place"
    },
    te: {
      shortDesc: "Skin and joint health",
      description: "Skin and joint health",
      benefits: "Anti-aging, Joint support",
      usage: "Mix 1 scoop daily",
      warnings: "Store in cool place"
    },
    bn: {
      shortDesc: "Skin and joint health",
      description: "Skin and joint health",
      benefits: "Anti-aging, Joint support",
      usage: "Mix 1 scoop daily",
      warnings: "Store in cool place"
    },
    mr: {
      shortDesc: "Skin and joint health",
      description: "Skin and joint health",
      benefits: "Anti-aging, Joint support",
      usage: "Mix 1 scoop daily",
      warnings: "Store in cool place"
    },
    gu: {
      shortDesc: "Skin and joint health",
      description: "Skin and joint health",
      benefits: "Anti-aging, Joint support",
      usage: "Mix 1 scoop daily",
      warnings: "Store in cool place"
    },
    kn: {
      shortDesc: "Skin and joint health",
      description: "Skin and joint health",
      benefits: "Anti-aging, Joint support",
      usage: "Mix 1 scoop daily",
      warnings: "Store in cool place"
    },
    ml: {
      shortDesc: "Skin and joint health",
      description: "Skin and joint health",
      benefits: "Anti-aging, Joint support",
      usage: "Mix 1 scoop daily",
      warnings: "Store in cool place"
    },
    pa: {
      shortDesc: "Skin and joint health",
      description: "Skin and joint health",
      benefits: "Anti-aging, Joint support",
      usage: "Mix 1 scoop daily",
      warnings: "Store in cool place"
    },
    or: {
      shortDesc: "Skin and joint health",
      description: "Skin and joint health",
      benefits: "Anti-aging, Joint support",
      usage: "Mix 1 scoop daily",
      warnings: "Store in cool place"
    },
    as: {
      shortDesc: "Skin and joint health",
      description: "Skin and joint health",
      benefits: "Anti-aging, Joint support",
      usage: "Mix 1 scoop daily",
      warnings: "Store in cool place"
    },
    ur: {
      shortDesc: "Skin and joint health",
      description: "Skin and joint health",
      benefits: "Anti-aging, Joint support",
      usage: "Mix 1 scoop daily",
      warnings: "Store in cool place"
    }
  },
  "MED126": {
    en: {
      shortDesc: "Complete first aid",
      description: "Complete first aid",
      benefits: "100+ pieces, Portable",
      usage: "Keep handy",
      warnings: "Check expiry dates"
    },
    hi: {
      shortDesc: "Complete first aid",
      description: "Complete first aid",
      benefits: "100+ pieces, Portable",
      usage: "Keep handy",
      warnings: "Check expiry dates"
    },
    ta: {
      shortDesc: "Complete first aid",
      description: "Complete first aid",
      benefits: "100+ pieces, Portable",
      usage: "Keep handy",
      warnings: "Check expiry dates"
    },
    te: {
      shortDesc: "Complete first aid",
      description: "Complete first aid",
      benefits: "100+ pieces, Portable",
      usage: "Keep handy",
      warnings: "Check expiry dates"
    },
    bn: {
      shortDesc: "Complete first aid",
      description: "Complete first aid",
      benefits: "100+ pieces, Portable",
      usage: "Keep handy",
      warnings: "Check expiry dates"
    },
    mr: {
      shortDesc: "Complete first aid",
      description: "Complete first aid",
      benefits: "100+ pieces, Portable",
      usage: "Keep handy",
      warnings: "Check expiry dates"
    },
    gu: {
      shortDesc: "Complete first aid",
      description: "Complete first aid",
      benefits: "100+ pieces, Portable",
      usage: "Keep handy",
      warnings: "Check expiry dates"
    },
    kn: {
      shortDesc: "Complete first aid",
      description: "Complete first aid",
      benefits: "100+ pieces, Portable",
      usage: "Keep handy",
      warnings: "Check expiry dates"
    },
    ml: {
      shortDesc: "Complete first aid",
      description: "Complete first aid",
      benefits: "100+ pieces, Portable",
      usage: "Keep handy",
      warnings: "Check expiry dates"
    },
    pa: {
      shortDesc: "Complete first aid",
      description: "Complete first aid",
      benefits: "100+ pieces, Portable",
      usage: "Keep handy",
      warnings: "Check expiry dates"
    },
    or: {
      shortDesc: "Complete first aid",
      description: "Complete first aid",
      benefits: "100+ pieces, Portable",
      usage: "Keep handy",
      warnings: "Check expiry dates"
    },
    as: {
      shortDesc: "Complete first aid",
      description: "Complete first aid",
      benefits: "100+ pieces, Portable",
      usage: "Keep handy",
      warnings: "Check expiry dates"
    },
    ur: {
      shortDesc: "Complete first aid",
      description: "Complete first aid",
      benefits: "100+ pieces, Portable",
      usage: "Keep handy",
      warnings: "Check expiry dates"
    }
  },
  "MED127": {
    en: {
      shortDesc: "Instant pain relief",
      description: "Instant pain relief",
      benefits: "Fast acting, Cooling effect",
      usage: "Spray on affected area",
      warnings: "For external use"
    },
    hi: {
      shortDesc: "Instant pain relief",
      description: "Instant pain relief",
      benefits: "Fast acting, Cooling effect",
      usage: "Spray on affected area",
      warnings: "For external use"
    },
    ta: {
      shortDesc: "Instant pain relief",
      description: "Instant pain relief",
      benefits: "Fast acting, Cooling effect",
      usage: "Spray on affected area",
      warnings: "For external use"
    },
    te: {
      shortDesc: "Instant pain relief",
      description: "Instant pain relief",
      benefits: "Fast acting, Cooling effect",
      usage: "Spray on affected area",
      warnings: "For external use"
    },
    bn: {
      shortDesc: "Instant pain relief",
      description: "Instant pain relief",
      benefits: "Fast acting, Cooling effect",
      usage: "Spray on affected area",
      warnings: "For external use"
    },
    mr: {
      shortDesc: "Instant pain relief",
      description: "Instant pain relief",
      benefits: "Fast acting, Cooling effect",
      usage: "Spray on affected area",
      warnings: "For external use"
    },
    gu: {
      shortDesc: "Instant pain relief",
      description: "Instant pain relief",
      benefits: "Fast acting, Cooling effect",
      usage: "Spray on affected area",
      warnings: "For external use"
    },
    kn: {
      shortDesc: "Instant pain relief",
      description: "Instant pain relief",
      benefits: "Fast acting, Cooling effect",
      usage: "Spray on affected area",
      warnings: "For external use"
    },
    ml: {
      shortDesc: "Instant pain relief",
      description: "Instant pain relief",
      benefits: "Fast acting, Cooling effect",
      usage: "Spray on affected area",
      warnings: "For external use"
    },
    pa: {
      shortDesc: "Instant pain relief",
      description: "Instant pain relief",
      benefits: "Fast acting, Cooling effect",
      usage: "Spray on affected area",
      warnings: "For external use"
    },
    or: {
      shortDesc: "Instant pain relief",
      description: "Instant pain relief",
      benefits: "Fast acting, Cooling effect",
      usage: "Spray on affected area",
      warnings: "For external use"
    },
    as: {
      shortDesc: "Instant pain relief",
      description: "Instant pain relief",
      benefits: "Fast acting, Cooling effect",
      usage: "Spray on affected area",
      warnings: "For external use"
    },
    ur: {
      shortDesc: "Instant pain relief",
      description: "Instant pain relief",
      benefits: "Fast acting, Cooling effect",
      usage: "Spray on affected area",
      warnings: "For external use"
    }
  },
  "MED128": {
    en: {
      shortDesc: "Relieves eye strain",
      description: "Relieves eye strain",
      benefits: "Soothes eyes, Reduces redness",
      usage: "Apply 1-2 drops",
      warnings: "Do not touch dropper"
    },
    hi: {
      shortDesc: "Relieves eye strain",
      description: "Relieves eye strain",
      benefits: "Soothes eyes, Reduces redness",
      usage: "Apply 1-2 drops",
      warnings: "Do not touch dropper"
    },
    ta: {
      shortDesc: "Relieves eye strain",
      description: "Relieves eye strain",
      benefits: "Soothes eyes, Reduces redness",
      usage: "Apply 1-2 drops",
      warnings: "Do not touch dropper"
    },
    te: {
      shortDesc: "Relieves eye strain",
      description: "Relieves eye strain",
      benefits: "Soothes eyes, Reduces redness",
      usage: "Apply 1-2 drops",
      warnings: "Do not touch dropper"
    },
    bn: {
      shortDesc: "Relieves eye strain",
      description: "Relieves eye strain",
      benefits: "Soothes eyes, Reduces redness",
      usage: "Apply 1-2 drops",
      warnings: "Do not touch dropper"
    },
    mr: {
      shortDesc: "Relieves eye strain",
      description: "Relieves eye strain",
      benefits: "Soothes eyes, Reduces redness",
      usage: "Apply 1-2 drops",
      warnings: "Do not touch dropper"
    },
    gu: {
      shortDesc: "Relieves eye strain",
      description: "Relieves eye strain",
      benefits: "Soothes eyes, Reduces redness",
      usage: "Apply 1-2 drops",
      warnings: "Do not touch dropper"
    },
    kn: {
      shortDesc: "Relieves eye strain",
      description: "Relieves eye strain",
      benefits: "Soothes eyes, Reduces redness",
      usage: "Apply 1-2 drops",
      warnings: "Do not touch dropper"
    },
    ml: {
      shortDesc: "Relieves eye strain",
      description: "Relieves eye strain",
      benefits: "Soothes eyes, Reduces redness",
      usage: "Apply 1-2 drops",
      warnings: "Do not touch dropper"
    },
    pa: {
      shortDesc: "Relieves eye strain",
      description: "Relieves eye strain",
      benefits: "Soothes eyes, Reduces redness",
      usage: "Apply 1-2 drops",
      warnings: "Do not touch dropper"
    },
    or: {
      shortDesc: "Relieves eye strain",
      description: "Relieves eye strain",
      benefits: "Soothes eyes, Reduces redness",
      usage: "Apply 1-2 drops",
      warnings: "Do not touch dropper"
    },
    as: {
      shortDesc: "Relieves eye strain",
      description: "Relieves eye strain",
      benefits: "Soothes eyes, Reduces redness",
      usage: "Apply 1-2 drops",
      warnings: "Do not touch dropper"
    },
    ur: {
      shortDesc: "Relieves eye strain",
      description: "Relieves eye strain",
      benefits: "Soothes eyes, Reduces redness",
      usage: "Apply 1-2 drops",
      warnings: "Do not touch dropper"
    }
  },
  "MED129": {
    en: {
      shortDesc: "Ear wax removal",
      description: "Ear wax removal",
      benefits: "Softens wax, Safe formula",
      usage: "Apply 3-4 drops",
      warnings: "Consult doctor if pain"
    },
    hi: {
      shortDesc: "Ear wax removal",
      description: "Ear wax removal",
      benefits: "Softens wax, Safe formula",
      usage: "Apply 3-4 drops",
      warnings: "Consult doctor if pain"
    },
    ta: {
      shortDesc: "Ear wax removal",
      description: "Ear wax removal",
      benefits: "Softens wax, Safe formula",
      usage: "Apply 3-4 drops",
      warnings: "Consult doctor if pain"
    },
    te: {
      shortDesc: "Ear wax removal",
      description: "Ear wax removal",
      benefits: "Softens wax, Safe formula",
      usage: "Apply 3-4 drops",
      warnings: "Consult doctor if pain"
    },
    bn: {
      shortDesc: "Ear wax removal",
      description: "Ear wax removal",
      benefits: "Softens wax, Safe formula",
      usage: "Apply 3-4 drops",
      warnings: "Consult doctor if pain"
    },
    mr: {
      shortDesc: "Ear wax removal",
      description: "Ear wax removal",
      benefits: "Softens wax, Safe formula",
      usage: "Apply 3-4 drops",
      warnings: "Consult doctor if pain"
    },
    gu: {
      shortDesc: "Ear wax removal",
      description: "Ear wax removal",
      benefits: "Softens wax, Safe formula",
      usage: "Apply 3-4 drops",
      warnings: "Consult doctor if pain"
    },
    kn: {
      shortDesc: "Ear wax removal",
      description: "Ear wax removal",
      benefits: "Softens wax, Safe formula",
      usage: "Apply 3-4 drops",
      warnings: "Consult doctor if pain"
    },
    ml: {
      shortDesc: "Ear wax removal",
      description: "Ear wax removal",
      benefits: "Softens wax, Safe formula",
      usage: "Apply 3-4 drops",
      warnings: "Consult doctor if pain"
    },
    pa: {
      shortDesc: "Ear wax removal",
      description: "Ear wax removal",
      benefits: "Softens wax, Safe formula",
      usage: "Apply 3-4 drops",
      warnings: "Consult doctor if pain"
    },
    or: {
      shortDesc: "Ear wax removal",
      description: "Ear wax removal",
      benefits: "Softens wax, Safe formula",
      usage: "Apply 3-4 drops",
      warnings: "Consult doctor if pain"
    },
    as: {
      shortDesc: "Ear wax removal",
      description: "Ear wax removal",
      benefits: "Softens wax, Safe formula",
      usage: "Apply 3-4 drops",
      warnings: "Consult doctor if pain"
    },
    ur: {
      shortDesc: "Ear wax removal",
      description: "Ear wax removal",
      benefits: "Softens wax, Safe formula",
      usage: "Apply 3-4 drops",
      warnings: "Consult doctor if pain"
    }
  },
  "MED130": {
    en: {
      shortDesc: "Congestion relief",
      description: "Congestion relief",
      benefits: "Clears nose, Fast relief",
      usage: "Spray in each nostril",
      warnings: "Do not share"
    },
    hi: {
      shortDesc: "Congestion relief",
      description: "Congestion relief",
      benefits: "Clears nose, Fast relief",
      usage: "Spray in each nostril",
      warnings: "Do not share"
    },
    ta: {
      shortDesc: "Congestion relief",
      description: "Congestion relief",
      benefits: "Clears nose, Fast relief",
      usage: "Spray in each nostril",
      warnings: "Do not share"
    },
    te: {
      shortDesc: "Congestion relief",
      description: "Congestion relief",
      benefits: "Clears nose, Fast relief",
      usage: "Spray in each nostril",
      warnings: "Do not share"
    },
    bn: {
      shortDesc: "Congestion relief",
      description: "Congestion relief",
      benefits: "Clears nose, Fast relief",
      usage: "Spray in each nostril",
      warnings: "Do not share"
    },
    mr: {
      shortDesc: "Congestion relief",
      description: "Congestion relief",
      benefits: "Clears nose, Fast relief",
      usage: "Spray in each nostril",
      warnings: "Do not share"
    },
    gu: {
      shortDesc: "Congestion relief",
      description: "Congestion relief",
      benefits: "Clears nose, Fast relief",
      usage: "Spray in each nostril",
      warnings: "Do not share"
    },
    kn: {
      shortDesc: "Congestion relief",
      description: "Congestion relief",
      benefits: "Clears nose, Fast relief",
      usage: "Spray in each nostril",
      warnings: "Do not share"
    },
    ml: {
      shortDesc: "Congestion relief",
      description: "Congestion relief",
      benefits: "Clears nose, Fast relief",
      usage: "Spray in each nostril",
      warnings: "Do not share"
    },
    pa: {
      shortDesc: "Congestion relief",
      description: "Congestion relief",
      benefits: "Clears nose, Fast relief",
      usage: "Spray in each nostril",
      warnings: "Do not share"
    },
    or: {
      shortDesc: "Congestion relief",
      description: "Congestion relief",
      benefits: "Clears nose, Fast relief",
      usage: "Spray in each nostril",
      warnings: "Do not share"
    },
    as: {
      shortDesc: "Congestion relief",
      description: "Congestion relief",
      benefits: "Clears nose, Fast relief",
      usage: "Spray in each nostril",
      warnings: "Do not share"
    },
    ur: {
      shortDesc: "Congestion relief",
      description: "Congestion relief",
      benefits: "Clears nose, Fast relief",
      usage: "Spray in each nostril",
      warnings: "Do not share"
    }
  },
  "MED131": {
    en: {
      shortDesc: "Instant energy",
      description: "Instant energy",
      benefits: "Quick energy, Easy to digest",
      usage: "Mix with water",
      warnings: "Diabetics consult doctor"
    },
    hi: {
      shortDesc: "Instant energy",
      description: "Instant energy",
      benefits: "Quick energy, Easy to digest",
      usage: "Mix with water",
      warnings: "Diabetics consult doctor"
    },
    ta: {
      shortDesc: "Instant energy",
      description: "Instant energy",
      benefits: "Quick energy, Easy to digest",
      usage: "Mix with water",
      warnings: "Diabetics consult doctor"
    },
    te: {
      shortDesc: "Instant energy",
      description: "Instant energy",
      benefits: "Quick energy, Easy to digest",
      usage: "Mix with water",
      warnings: "Diabetics consult doctor"
    },
    bn: {
      shortDesc: "Instant energy",
      description: "Instant energy",
      benefits: "Quick energy, Easy to digest",
      usage: "Mix with water",
      warnings: "Diabetics consult doctor"
    },
    mr: {
      shortDesc: "Instant energy",
      description: "Instant energy",
      benefits: "Quick energy, Easy to digest",
      usage: "Mix with water",
      warnings: "Diabetics consult doctor"
    },
    gu: {
      shortDesc: "Instant energy",
      description: "Instant energy",
      benefits: "Quick energy, Easy to digest",
      usage: "Mix with water",
      warnings: "Diabetics consult doctor"
    },
    kn: {
      shortDesc: "Instant energy",
      description: "Instant energy",
      benefits: "Quick energy, Easy to digest",
      usage: "Mix with water",
      warnings: "Diabetics consult doctor"
    },
    ml: {
      shortDesc: "Instant energy",
      description: "Instant energy",
      benefits: "Quick energy, Easy to digest",
      usage: "Mix with water",
      warnings: "Diabetics consult doctor"
    },
    pa: {
      shortDesc: "Instant energy",
      description: "Instant energy",
      benefits: "Quick energy, Easy to digest",
      usage: "Mix with water",
      warnings: "Diabetics consult doctor"
    },
    or: {
      shortDesc: "Instant energy",
      description: "Instant energy",
      benefits: "Quick energy, Easy to digest",
      usage: "Mix with water",
      warnings: "Diabetics consult doctor"
    },
    as: {
      shortDesc: "Instant energy",
      description: "Instant energy",
      benefits: "Quick energy, Easy to digest",
      usage: "Mix with water",
      warnings: "Diabetics consult doctor"
    },
    ur: {
      shortDesc: "Instant energy",
      description: "Instant energy",
      benefits: "Quick energy, Easy to digest",
      usage: "Mix with water",
      warnings: "Diabetics consult doctor"
    }
  },
  "MED132": {
    en: {
      shortDesc: "Hydration drink",
      description: "Hydration drink",
      benefits: "Replenishes electrolytes, Refreshing",
      usage: "Mix with water",
      warnings: "Use fresh solution"
    },
    hi: {
      shortDesc: "Hydration drink",
      description: "Hydration drink",
      benefits: "Replenishes electrolytes, Refreshing",
      usage: "Mix with water",
      warnings: "Use fresh solution"
    },
    ta: {
      shortDesc: "Hydration drink",
      description: "Hydration drink",
      benefits: "Replenishes electrolytes, Refreshing",
      usage: "Mix with water",
      warnings: "Use fresh solution"
    },
    te: {
      shortDesc: "Hydration drink",
      description: "Hydration drink",
      benefits: "Replenishes electrolytes, Refreshing",
      usage: "Mix with water",
      warnings: "Use fresh solution"
    },
    bn: {
      shortDesc: "Hydration drink",
      description: "Hydration drink",
      benefits: "Replenishes electrolytes, Refreshing",
      usage: "Mix with water",
      warnings: "Use fresh solution"
    },
    mr: {
      shortDesc: "Hydration drink",
      description: "Hydration drink",
      benefits: "Replenishes electrolytes, Refreshing",
      usage: "Mix with water",
      warnings: "Use fresh solution"
    },
    gu: {
      shortDesc: "Hydration drink",
      description: "Hydration drink",
      benefits: "Replenishes electrolytes, Refreshing",
      usage: "Mix with water",
      warnings: "Use fresh solution"
    },
    kn: {
      shortDesc: "Hydration drink",
      description: "Hydration drink",
      benefits: "Replenishes electrolytes, Refreshing",
      usage: "Mix with water",
      warnings: "Use fresh solution"
    },
    ml: {
      shortDesc: "Hydration drink",
      description: "Hydration drink",
      benefits: "Replenishes electrolytes, Refreshing",
      usage: "Mix with water",
      warnings: "Use fresh solution"
    },
    pa: {
      shortDesc: "Hydration drink",
      description: "Hydration drink",
      benefits: "Replenishes electrolytes, Refreshing",
      usage: "Mix with water",
      warnings: "Use fresh solution"
    },
    or: {
      shortDesc: "Hydration drink",
      description: "Hydration drink",
      benefits: "Replenishes electrolytes, Refreshing",
      usage: "Mix with water",
      warnings: "Use fresh solution"
    },
    as: {
      shortDesc: "Hydration drink",
      description: "Hydration drink",
      benefits: "Replenishes electrolytes, Refreshing",
      usage: "Mix with water",
      warnings: "Use fresh solution"
    },
    ur: {
      shortDesc: "Hydration drink",
      description: "Hydration drink",
      benefits: "Replenishes electrolytes, Refreshing",
      usage: "Mix with water",
      warnings: "Use fresh solution"
    }
  },
  "MED133": {
    en: {
      shortDesc: "Relieves constipation",
      description: "Relieves constipation",
      benefits: "Gentle relief, Overnight action",
      usage: "Take before bed",
      warnings: "Do not use long-term"
    },
    hi: {
      shortDesc: "Relieves constipation",
      description: "Relieves constipation",
      benefits: "Gentle relief, Overnight action",
      usage: "Take before bed",
      warnings: "Do not use long-term"
    },
    ta: {
      shortDesc: "Relieves constipation",
      description: "Relieves constipation",
      benefits: "Gentle relief, Overnight action",
      usage: "Take before bed",
      warnings: "Do not use long-term"
    },
    te: {
      shortDesc: "Relieves constipation",
      description: "Relieves constipation",
      benefits: "Gentle relief, Overnight action",
      usage: "Take before bed",
      warnings: "Do not use long-term"
    },
    bn: {
      shortDesc: "Relieves constipation",
      description: "Relieves constipation",
      benefits: "Gentle relief, Overnight action",
      usage: "Take before bed",
      warnings: "Do not use long-term"
    },
    mr: {
      shortDesc: "Relieves constipation",
      description: "Relieves constipation",
      benefits: "Gentle relief, Overnight action",
      usage: "Take before bed",
      warnings: "Do not use long-term"
    },
    gu: {
      shortDesc: "Relieves constipation",
      description: "Relieves constipation",
      benefits: "Gentle relief, Overnight action",
      usage: "Take before bed",
      warnings: "Do not use long-term"
    },
    kn: {
      shortDesc: "Relieves constipation",
      description: "Relieves constipation",
      benefits: "Gentle relief, Overnight action",
      usage: "Take before bed",
      warnings: "Do not use long-term"
    },
    ml: {
      shortDesc: "Relieves constipation",
      description: "Relieves constipation",
      benefits: "Gentle relief, Overnight action",
      usage: "Take before bed",
      warnings: "Do not use long-term"
    },
    pa: {
      shortDesc: "Relieves constipation",
      description: "Relieves constipation",
      benefits: "Gentle relief, Overnight action",
      usage: "Take before bed",
      warnings: "Do not use long-term"
    },
    or: {
      shortDesc: "Relieves constipation",
      description: "Relieves constipation",
      benefits: "Gentle relief, Overnight action",
      usage: "Take before bed",
      warnings: "Do not use long-term"
    },
    as: {
      shortDesc: "Relieves constipation",
      description: "Relieves constipation",
      benefits: "Gentle relief, Overnight action",
      usage: "Take before bed",
      warnings: "Do not use long-term"
    },
    ur: {
      shortDesc: "Relieves constipation",
      description: "Relieves constipation",
      benefits: "Gentle relief, Overnight action",
      usage: "Take before bed",
      warnings: "Do not use long-term"
    }
  },
  "MED134": {
    en: {
      shortDesc: "Stops diarrhea",
      description: "Stops diarrhea",
      benefits: "Fast relief, Safe formula",
      usage: "Take after loose stool",
      warnings: "Consult doctor if persists"
    },
    hi: {
      shortDesc: "Stops diarrhea",
      description: "Stops diarrhea",
      benefits: "Fast relief, Safe formula",
      usage: "Take after loose stool",
      warnings: "Consult doctor if persists"
    },
    ta: {
      shortDesc: "Stops diarrhea",
      description: "Stops diarrhea",
      benefits: "Fast relief, Safe formula",
      usage: "Take after loose stool",
      warnings: "Consult doctor if persists"
    },
    te: {
      shortDesc: "Stops diarrhea",
      description: "Stops diarrhea",
      benefits: "Fast relief, Safe formula",
      usage: "Take after loose stool",
      warnings: "Consult doctor if persists"
    },
    bn: {
      shortDesc: "Stops diarrhea",
      description: "Stops diarrhea",
      benefits: "Fast relief, Safe formula",
      usage: "Take after loose stool",
      warnings: "Consult doctor if persists"
    },
    mr: {
      shortDesc: "Stops diarrhea",
      description: "Stops diarrhea",
      benefits: "Fast relief, Safe formula",
      usage: "Take after loose stool",
      warnings: "Consult doctor if persists"
    },
    gu: {
      shortDesc: "Stops diarrhea",
      description: "Stops diarrhea",
      benefits: "Fast relief, Safe formula",
      usage: "Take after loose stool",
      warnings: "Consult doctor if persists"
    },
    kn: {
      shortDesc: "Stops diarrhea",
      description: "Stops diarrhea",
      benefits: "Fast relief, Safe formula",
      usage: "Take after loose stool",
      warnings: "Consult doctor if persists"
    },
    ml: {
      shortDesc: "Stops diarrhea",
      description: "Stops diarrhea",
      benefits: "Fast relief, Safe formula",
      usage: "Take after loose stool",
      warnings: "Consult doctor if persists"
    },
    pa: {
      shortDesc: "Stops diarrhea",
      description: "Stops diarrhea",
      benefits: "Fast relief, Safe formula",
      usage: "Take after loose stool",
      warnings: "Consult doctor if persists"
    },
    or: {
      shortDesc: "Stops diarrhea",
      description: "Stops diarrhea",
      benefits: "Fast relief, Safe formula",
      usage: "Take after loose stool",
      warnings: "Consult doctor if persists"
    },
    as: {
      shortDesc: "Stops diarrhea",
      description: "Stops diarrhea",
      benefits: "Fast relief, Safe formula",
      usage: "Take after loose stool",
      warnings: "Consult doctor if persists"
    },
    ur: {
      shortDesc: "Stops diarrhea",
      description: "Stops diarrhea",
      benefits: "Fast relief, Safe formula",
      usage: "Take after loose stool",
      warnings: "Consult doctor if persists"
    }
  },
  "MED135": {
    en: {
      shortDesc: "Prevents nausea",
      description: "Prevents nausea",
      benefits: "Prevents motion sickness, Non-drowsy",
      usage: "Take before travel",
      warnings: "May cause drowsiness"
    },
    hi: {
      shortDesc: "Prevents nausea",
      description: "Prevents nausea",
      benefits: "Prevents motion sickness, Non-drowsy",
      usage: "Take before travel",
      warnings: "May cause drowsiness"
    },
    ta: {
      shortDesc: "Prevents nausea",
      description: "Prevents nausea",
      benefits: "Prevents motion sickness, Non-drowsy",
      usage: "Take before travel",
      warnings: "May cause drowsiness"
    },
    te: {
      shortDesc: "Prevents nausea",
      description: "Prevents nausea",
      benefits: "Prevents motion sickness, Non-drowsy",
      usage: "Take before travel",
      warnings: "May cause drowsiness"
    },
    bn: {
      shortDesc: "Prevents nausea",
      description: "Prevents nausea",
      benefits: "Prevents motion sickness, Non-drowsy",
      usage: "Take before travel",
      warnings: "May cause drowsiness"
    },
    mr: {
      shortDesc: "Prevents nausea",
      description: "Prevents nausea",
      benefits: "Prevents motion sickness, Non-drowsy",
      usage: "Take before travel",
      warnings: "May cause drowsiness"
    },
    gu: {
      shortDesc: "Prevents nausea",
      description: "Prevents nausea",
      benefits: "Prevents motion sickness, Non-drowsy",
      usage: "Take before travel",
      warnings: "May cause drowsiness"
    },
    kn: {
      shortDesc: "Prevents nausea",
      description: "Prevents nausea",
      benefits: "Prevents motion sickness, Non-drowsy",
      usage: "Take before travel",
      warnings: "May cause drowsiness"
    },
    ml: {
      shortDesc: "Prevents nausea",
      description: "Prevents nausea",
      benefits: "Prevents motion sickness, Non-drowsy",
      usage: "Take before travel",
      warnings: "May cause drowsiness"
    },
    pa: {
      shortDesc: "Prevents nausea",
      description: "Prevents nausea",
      benefits: "Prevents motion sickness, Non-drowsy",
      usage: "Take before travel",
      warnings: "May cause drowsiness"
    },
    or: {
      shortDesc: "Prevents nausea",
      description: "Prevents nausea",
      benefits: "Prevents motion sickness, Non-drowsy",
      usage: "Take before travel",
      warnings: "May cause drowsiness"
    },
    as: {
      shortDesc: "Prevents nausea",
      description: "Prevents nausea",
      benefits: "Prevents motion sickness, Non-drowsy",
      usage: "Take before travel",
      warnings: "May cause drowsiness"
    },
    ur: {
      shortDesc: "Prevents nausea",
      description: "Prevents nausea",
      benefits: "Prevents motion sickness, Non-drowsy",
      usage: "Take before travel",
      warnings: "May cause drowsiness"
    }
  },
  "MEN001": {
    en: {
      shortDesc: "Complete daily nutrition for men with 25+ essential vitamins and minerals",
      description: "Complete daily nutrition for men with 25+ essential vitamins and minerals",
      benefits: "Boosts energy, Supports immunity, Promotes heart health",
      usage: "Take 1 tablet daily after breakfast",
      warnings: "Consult doctor if you have medical conditions, Keep out of reach of children"
    },
    hi: {
      shortDesc: "25+ आवश्यक विटामिन और खनिजों के साथ पुरुषों के लिए संपूर्ण दैनिक पोषण",
      description: "25+ आवश्यक विटामिन और खनिजों के साथ पुरुषों के लिए संपूर्ण दैनिक पोषण",
      benefits: "ऊर्जा बढ़ाता है, प्रतिरक्षा का समर्थन करता है, हृदय स्वास्थ्य को बढ़ावा देता है",
      usage: "नाश्ते के बाद रोजाना 1 गोली लें",
      warnings: "यदि आपको कोई चिकित्सीय स्थिति है तो डॉक्टर से परामर्श लें, बच्चों की पहुंच से दूर रखें"
    },
    ta: {
      shortDesc: "25+ அத்தியாவசிய வைட்டமின்கள் மற்றும் தாதுக்களுடன் ஆண்களுக்கான முழுமையான தினசரி ஊட்டச்சத்து",
      description: "25+ அத்தியாவசிய வைட்டமின்கள் மற்றும் தாதுக்களுடன் ஆண்களுக்கான முழுமையான தினசரி ஊட்டச்சத்து",
      benefits: "ஆற்றலை அதிகரிக்கிறது, நோய் எதிர்ப்பு சக்தியை ஆதரிக்கிறது, இதய ஆரோக்கியத்தை மேம்படுத்துகிறது",
      usage: "காலை உணவுக்குப் பிறகு தினமும் 1 மாத்திரை எடுத்துக் கொள்ளுங்கள்",
      warnings: "உங்களுக்கு மருத்துவ நிலைமைகள் இருந்தால் மருத்துவரை அணுகவும், குழந்தைகளின் எட்டாத இடத்தில் வைக்கவும்"
    },
    te: {
      shortDesc: "25+ అవసరమైన విటమిన్లు మరియు ఖనిజాలతో పురుషులకు పూర్తి రోజువారీ పోషణ",
      description: "25+ అవసరమైన విటమిన్లు మరియు ఖనిజాలతో పురుషులకు పూర్తి రోజువారీ పోషణ",
      benefits: "శక్తిని పెంచుతుంది, రోగనిరోధక శక్తికి మద్దతు ఇస్తుంది, గుండె ఆరోగ్యాన్ని ప్రోత్సహిస్తుంది",
      usage: "అల్పాహారం తర్వాత రోజూ 1 మాత్ర తీసుకోండి",
      warnings: "మీకు వైద్య పరిస్థితులు ఉంటే వైద్యుడిని సంప్రదించండి, పిల్లల చేరువ నుండి దూరంగా ఉంచండి"
    },
    bn: {
      shortDesc: "25+ প্রয়োজনীয় ভিটামিন এবং খনিজ সহ পুরুষদের জন্য সম্পূর্ণ দৈনিক পুষ্টি",
      description: "25+ প্রয়োজনীয় ভিটামিন এবং খনিজ সহ পুরুষদের জন্য সম্পূর্ণ দৈনিক পুষ্টি",
      benefits: "শক্তি বৃদ্ধি করে, রোগ প্রতিরোধ ক্ষমতা সমর্থন করে, হৃদযন্ত্রের স্বাস্থ্য প্রচার করে",
      usage: "প্রাতঃরাশের পরে প্রতিদিন 1টি ট্যাবলেট নিন",
      warnings: "আপনার যদি চিকিৎসা সংক্রান্ত সমস্যা থাকে তবে ডাক্তারের পরামর্শ নিন, শিশুদের নাগালের বাইরে রাখুন"
    },
    mr: {
      shortDesc: "25+ आवश्यक जीवनसत्त्वे आणि खनिजांसह पुरुषांसाठी संपूर्ण दैनंदिन पोषण",
      description: "25+ आवश्यक जीवनसत्त्वे आणि खनिजांसह पुरुषांसाठी संपूर्ण दैनंदिन पोषण",
      benefits: "ऊर्जा वाढवते, रोगप्रतिकारक शक्तीला समर्थन देते, हृदय आरोग्य वाढवते",
      usage: "नाश्त्यानंतर दररोज 1 गोळी घ्या",
      warnings: "तुम्हाला वैद्यकीय स्थिती असल्यास डॉक्टरांचा सल्ला घ्या, मुलांच्या आवाक्याबाहेर ठेवा"
    },
    gu: {
      shortDesc: "25+ આવશ્યક વિટામિન્સ અને ખનિજો સાથે પુરુષો માટે સંપૂર્ણ દૈનિક પોષણ",
      description: "25+ આવશ્યક વિટામિન્સ અને ખનિજો સાથે પુરુષો માટે સંપૂર્ણ દૈનિક પોષણ",
      benefits: "ઊર્જા વધારે છે, રોગપ્રતિકારક શક્તિને ટેકો આપે છે, હૃદય સ્વાસ્થ્યને પ્રોત્સાહન આપે છે",
      usage: "નાસ્તા પછી દરરોજ 1 ગોળી લો",
      warnings: "જો તમને તબીબી સ્થિતિ હોય તો ડૉક્ટરની સલાહ લો, બાળકોની પહોંચથી દૂર રાખો"
    },
    kn: {
      shortDesc: "25+ ಅತ್ಯಗತ್ಯ ವಿಟಮಿನ್‌ಗಳು ಮತ್ತು ಖನಿಜಗಳೊಂದಿಗೆ ಪುರುಷರಿಗೆ ಸಂಪೂರ್ಣ ದೈನಂದಿನ ಪೋಷಣೆ",
      description: "25+ ಅತ್ಯಗತ್ಯ ವಿಟಮಿನ್‌ಗಳು ಮತ್ತು ಖನಿಜಗಳೊಂದಿಗೆ ಪುರುಷರಿಗೆ ಸಂಪೂರ್ಣ ದೈನಂದಿನ ಪೋಷಣೆ",
      benefits: "ಶಕ್ತಿಯನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ, ರೋಗನಿರೋಧಕ ಶಕ್ತಿಯನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ, ಹೃದಯ ಆರೋಗ್ಯವನ್ನು ಉತ್ತೇಜಿಸುತ್ತದೆ",
      usage: "ಬೆಳಗಿನ ಉಪಾಹಾರದ ನಂತರ ದಿನಕ್ಕೆ 1 ಮಾತ್ರೆ ತೆಗೆದುಕೊಳ್ಳಿ",
      warnings: "ನಿಮಗೆ ವೈದ್ಯಕೀಯ ಪರಿಸ್ಥಿತಿಗಳಿದ್ದರೆ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ, ಮಕ್ಕಳ ಕೈಗೆ ಸಿಗದಂತೆ ಇರಿಸಿ"
    },
    ml: {
      shortDesc: "25+ അവശ്യ വിറ്റാമിനുകളും ധാതുക്കളും ഉള്ള പുരുഷന്മാർക്കുള്ള സമ്പൂർണ്ണ ദൈനംദിന പോഷണം",
      description: "25+ അവശ്യ വിറ്റാമിനുകളും ധാതുക്കളും ഉള്ള പുരുഷന്മാർക്കുള്ള സമ്പൂർണ്ണ ദൈനംദിന പോഷണം",
      benefits: "ഊർജ്ജം വർദ്ധിപ്പിക്കുന്നു, പ്രതിരോധശേഷി പിന്തുണയ്ക്കുന്നു, ഹൃദയാരോഗ്യം പ്രോത്സാഹിപ്പിക്കുന്നു",
      usage: "പ്രഭാതഭക്ഷണത്തിന് ശേഷം ദിവസവും 1 ഗുളിക കഴിക്കുക",
      warnings: "നിങ്ങൾക്ക് മെഡിക്കൽ അവസ്ഥകൾ ഉണ്ടെങ്കിൽ ഡോക്ടറെ സമീപിക്കുക, കുട്ടികളുടെ കൈയെത്താത്ത സ്ഥലത്ത് സൂക്ഷിക്കുക"
    },
    pa: {
      shortDesc: "25+ ਜ਼ਰੂਰੀ ਵਿਟਾਮਿਨਾਂ ਅਤੇ ਖਣਿਜਾਂ ਨਾਲ ਮਰਦਾਂ ਲਈ ਸੰਪੂਰਨ ਰੋਜ਼ਾਨਾ ਪੋਸ਼ਣ",
      description: "25+ ਜ਼ਰੂਰੀ ਵਿਟਾਮਿਨਾਂ ਅਤੇ ਖਣਿਜਾਂ ਨਾਲ ਮਰਦਾਂ ਲਈ ਸੰਪੂਰਨ ਰੋਜ਼ਾਨਾ ਪੋਸ਼ਣ",
      benefits: "ਊਰਜਾ ਵਧਾਉਂਦਾ ਹੈ, ਰੋਗ ਪ੍ਰਤੀਰੋਧਕ ਸ਼ਕਤੀ ਦਾ ਸਮਰਥਨ ਕਰਦਾ ਹੈ, ਦਿਲ ਦੀ ਸਿਹਤ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਦਾ ਹੈ",
      usage: "ਨਾਸ਼ਤੇ ਤੋਂ ਬਾਅਦ ਰੋਜ਼ਾਨਾ 1 ਗੋਲੀ ਲਓ",
      warnings: "ਜੇ ਤੁਹਾਨੂੰ ਕੋਈ ਡਾਕਟਰੀ ਸਥਿਤੀ ਹੈ ਤਾਂ ਡਾਕਟਰ ਨਾਲ ਸਲਾਹ ਕਰੋ, ਬੱਚਿਆਂ ਦੀ ਪਹੁੰਚ ਤੋਂ ਦੂਰ ਰੱਖੋ"
    },
    or: {
      shortDesc: "25+ ଅତ୍ୟାବଶ୍ୟକ ଭିଟାମିନ୍ ଏବଂ ଖଣିଜ ସହିତ ପୁରୁଷମାନଙ୍କ ପାଇଁ ସମ୍ପୂର୍ଣ୍ଣ ଦୈନିକ ପୋଷଣ",
      description: "25+ ଅତ୍ୟାବଶ୍ୟକ ଭିଟାମିନ୍ ଏବଂ ଖଣିଜ ସହିତ ପୁରୁଷମାନଙ୍କ ପାଇଁ ସମ୍ପୂର୍ଣ୍ଣ ଦୈନିକ ପୋଷଣ",
      benefits: "ଶକ୍ତି ବୃଦ୍ଧି କରେ, ପ୍ରତିରକ୍ଷା ସମର୍ଥନ କରେ, ହୃଦୟ ସ୍ୱାସ୍ଥ୍ୟକୁ ପ୍ରୋତ୍ସାହିତ କରେ",
      usage: "ଜଳଖିଆ ପରେ ପ୍ରତିଦିନ 1 ଟି ଟାବଲେଟ୍ ନିଅନ୍ତୁ",
      warnings: "ଯଦି ଆପଣଙ୍କର ଚିକିତ୍ସା ଅବସ୍ଥା ଅଛି ତେବେ ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ନିଅନ୍ତୁ, ପିଲାମାନଙ୍କ ପହଞ୍ଚରୁ ଦୂରରେ ରଖନ୍ତୁ"
    },
    as: {
      shortDesc: "25+ অত্যাৱশ্যকীয় ভিটামিন আৰু খনিজৰ সৈতে পুৰুষৰ বাবে সম্পূৰ্ণ দৈনিক পুষ্টি",
      description: "25+ অত্যাৱশ্যকীয় ভিটামিন আৰু খনিজৰ সৈতে পুৰুষৰ বাবে সম্পূৰ্ণ দৈনিক পুষ্টি",
      benefits: "শক্তি বৃদ্ধি কৰে, ৰোগ প্ৰতিৰোধ ক্ষমতা সমৰ্থন কৰে, হৃদযন্ত্ৰৰ স্বাস্থ্য প্ৰচাৰ কৰে",
      usage: "ৰাতিপুৱাৰ আহাৰৰ পিছত দৈনিক 1 টা টেবলেট লওক",
      warnings: "যদি আপোনাৰ চিকিৎসা সম্পৰ্কীয় সমস্যা আছে তেন্তে চিকিৎসকৰ পৰামৰ্শ লওক, শিশুৰ হাতৰ নাগালৰ বাহিৰত ৰাখক"
    },
    ur: {
      shortDesc: "25+ ضروری وٹامنز اور معدنیات کے ساتھ مردوں کے لیے مکمل روزانہ غذائیت",
      description: "25+ ضروری وٹامنز اور معدنیات کے ساتھ مردوں کے لیے مکمل روزانہ غذائیت",
      benefits: "توانائی بڑھاتا ہے، قوت مدافعت کی حمایت کرتا ہے، دل کی صحت کو فروغ دیتا ہے",
      usage: "ناشتے کے بعد روزانہ 1 گولی لیں",
      warnings: "اگر آپ کو طبی حالات ہیں تو ڈاکٹر سے مشورہ کریں، بچوں کی پہنچ سے دور رکھیں"
    }
  },
  "MEN002": {
    en: {
      shortDesc: "Advanced hair growth formula with biotin and keratin",
      description: "Advanced hair growth formula with biotin and keratin",
      benefits: "Reduces hair fall, Promotes growth",
      usage: "Apply 1ml to scalp twice daily",
      warnings: "For external use only"
    },
    hi: {
      shortDesc: "Advanced hair growth formula with biotin and keratin",
      description: "Advanced hair growth formula with biotin and keratin",
      benefits: "Reduces hair fall, Promotes growth",
      usage: "Apply 1ml to scalp twice daily",
      warnings: "For external use only"
    },
    ta: {
      shortDesc: "Advanced hair growth formula with biotin and keratin",
      description: "Advanced hair growth formula with biotin and keratin",
      benefits: "Reduces hair fall, Promotes growth",
      usage: "Apply 1ml to scalp twice daily",
      warnings: "For external use only"
    },
    te: {
      shortDesc: "Advanced hair growth formula with biotin and keratin",
      description: "Advanced hair growth formula with biotin and keratin",
      benefits: "Reduces hair fall, Promotes growth",
      usage: "Apply 1ml to scalp twice daily",
      warnings: "For external use only"
    },
    bn: {
      shortDesc: "Advanced hair growth formula with biotin and keratin",
      description: "Advanced hair growth formula with biotin and keratin",
      benefits: "Reduces hair fall, Promotes growth",
      usage: "Apply 1ml to scalp twice daily",
      warnings: "For external use only"
    },
    mr: {
      shortDesc: "Advanced hair growth formula with biotin and keratin",
      description: "Advanced hair growth formula with biotin and keratin",
      benefits: "Reduces hair fall, Promotes growth",
      usage: "Apply 1ml to scalp twice daily",
      warnings: "For external use only"
    },
    gu: {
      shortDesc: "Advanced hair growth formula with biotin and keratin",
      description: "Advanced hair growth formula with biotin and keratin",
      benefits: "Reduces hair fall, Promotes growth",
      usage: "Apply 1ml to scalp twice daily",
      warnings: "For external use only"
    },
    kn: {
      shortDesc: "Advanced hair growth formula with biotin and keratin",
      description: "Advanced hair growth formula with biotin and keratin",
      benefits: "Reduces hair fall, Promotes growth",
      usage: "Apply 1ml to scalp twice daily",
      warnings: "For external use only"
    },
    ml: {
      shortDesc: "Advanced hair growth formula with biotin and keratin",
      description: "Advanced hair growth formula with biotin and keratin",
      benefits: "Reduces hair fall, Promotes growth",
      usage: "Apply 1ml to scalp twice daily",
      warnings: "For external use only"
    },
    pa: {
      shortDesc: "Advanced hair growth formula with biotin and keratin",
      description: "Advanced hair growth formula with biotin and keratin",
      benefits: "Reduces hair fall, Promotes growth",
      usage: "Apply 1ml to scalp twice daily",
      warnings: "For external use only"
    },
    or: {
      shortDesc: "Advanced hair growth formula with biotin and keratin",
      description: "Advanced hair growth formula with biotin and keratin",
      benefits: "Reduces hair fall, Promotes growth",
      usage: "Apply 1ml to scalp twice daily",
      warnings: "For external use only"
    },
    as: {
      shortDesc: "Advanced hair growth formula with biotin and keratin",
      description: "Advanced hair growth formula with biotin and keratin",
      benefits: "Reduces hair fall, Promotes growth",
      usage: "Apply 1ml to scalp twice daily",
      warnings: "For external use only"
    },
    ur: {
      shortDesc: "Advanced hair growth formula with biotin and keratin",
      description: "Advanced hair growth formula with biotin and keratin",
      benefits: "Reduces hair fall, Promotes growth",
      usage: "Apply 1ml to scalp twice daily",
      warnings: "For external use only"
    }
  },
  "MEN003": {
    en: {
      shortDesc: "Natural beard oil for thicker, fuller beard growth",
      description: "Natural beard oil for thicker, fuller beard growth",
      benefits: "Promotes beard growth, Softens beard",
      usage: "Apply 3-4 drops to beard daily",
      warnings: "For external use only"
    },
    hi: {
      shortDesc: "Natural beard oil for thicker, fuller beard growth",
      description: "Natural beard oil for thicker, fuller beard growth",
      benefits: "Promotes beard growth, Softens beard",
      usage: "Apply 3-4 drops to beard daily",
      warnings: "For external use only"
    },
    ta: {
      shortDesc: "Natural beard oil for thicker, fuller beard growth",
      description: "Natural beard oil for thicker, fuller beard growth",
      benefits: "Promotes beard growth, Softens beard",
      usage: "Apply 3-4 drops to beard daily",
      warnings: "For external use only"
    },
    te: {
      shortDesc: "Natural beard oil for thicker, fuller beard growth",
      description: "Natural beard oil for thicker, fuller beard growth",
      benefits: "Promotes beard growth, Softens beard",
      usage: "Apply 3-4 drops to beard daily",
      warnings: "For external use only"
    },
    bn: {
      shortDesc: "Natural beard oil for thicker, fuller beard growth",
      description: "Natural beard oil for thicker, fuller beard growth",
      benefits: "Promotes beard growth, Softens beard",
      usage: "Apply 3-4 drops to beard daily",
      warnings: "For external use only"
    },
    mr: {
      shortDesc: "Natural beard oil for thicker, fuller beard growth",
      description: "Natural beard oil for thicker, fuller beard growth",
      benefits: "Promotes beard growth, Softens beard",
      usage: "Apply 3-4 drops to beard daily",
      warnings: "For external use only"
    },
    gu: {
      shortDesc: "Natural beard oil for thicker, fuller beard growth",
      description: "Natural beard oil for thicker, fuller beard growth",
      benefits: "Promotes beard growth, Softens beard",
      usage: "Apply 3-4 drops to beard daily",
      warnings: "For external use only"
    },
    kn: {
      shortDesc: "Natural beard oil for thicker, fuller beard growth",
      description: "Natural beard oil for thicker, fuller beard growth",
      benefits: "Promotes beard growth, Softens beard",
      usage: "Apply 3-4 drops to beard daily",
      warnings: "For external use only"
    },
    ml: {
      shortDesc: "Natural beard oil for thicker, fuller beard growth",
      description: "Natural beard oil for thicker, fuller beard growth",
      benefits: "Promotes beard growth, Softens beard",
      usage: "Apply 3-4 drops to beard daily",
      warnings: "For external use only"
    },
    pa: {
      shortDesc: "Natural beard oil for thicker, fuller beard growth",
      description: "Natural beard oil for thicker, fuller beard growth",
      benefits: "Promotes beard growth, Softens beard",
      usage: "Apply 3-4 drops to beard daily",
      warnings: "For external use only"
    },
    or: {
      shortDesc: "Natural beard oil for thicker, fuller beard growth",
      description: "Natural beard oil for thicker, fuller beard growth",
      benefits: "Promotes beard growth, Softens beard",
      usage: "Apply 3-4 drops to beard daily",
      warnings: "For external use only"
    },
    as: {
      shortDesc: "Natural beard oil for thicker, fuller beard growth",
      description: "Natural beard oil for thicker, fuller beard growth",
      benefits: "Promotes beard growth, Softens beard",
      usage: "Apply 3-4 drops to beard daily",
      warnings: "For external use only"
    },
    ur: {
      shortDesc: "Natural beard oil for thicker, fuller beard growth",
      description: "Natural beard oil for thicker, fuller beard growth",
      benefits: "Promotes beard growth, Softens beard",
      usage: "Apply 3-4 drops to beard daily",
      warnings: "For external use only"
    }
  },
  "MEN004": {
    en: {
      shortDesc: "Natural testosterone support supplement",
      description: "Natural testosterone support supplement",
      benefits: "Supports muscle growth, Enhances energy",
      usage: "Take 2 capsules daily with meals",
      warnings: "Consult doctor before use"
    },
    hi: {
      shortDesc: "Natural testosterone support supplement",
      description: "Natural testosterone support supplement",
      benefits: "Supports muscle growth, Enhances energy",
      usage: "Take 2 capsules daily with meals",
      warnings: "Consult doctor before use"
    },
    ta: {
      shortDesc: "Natural testosterone support supplement",
      description: "Natural testosterone support supplement",
      benefits: "Supports muscle growth, Enhances energy",
      usage: "Take 2 capsules daily with meals",
      warnings: "Consult doctor before use"
    },
    te: {
      shortDesc: "Natural testosterone support supplement",
      description: "Natural testosterone support supplement",
      benefits: "Supports muscle growth, Enhances energy",
      usage: "Take 2 capsules daily with meals",
      warnings: "Consult doctor before use"
    },
    bn: {
      shortDesc: "Natural testosterone support supplement",
      description: "Natural testosterone support supplement",
      benefits: "Supports muscle growth, Enhances energy",
      usage: "Take 2 capsules daily with meals",
      warnings: "Consult doctor before use"
    },
    mr: {
      shortDesc: "Natural testosterone support supplement",
      description: "Natural testosterone support supplement",
      benefits: "Supports muscle growth, Enhances energy",
      usage: "Take 2 capsules daily with meals",
      warnings: "Consult doctor before use"
    },
    gu: {
      shortDesc: "Natural testosterone support supplement",
      description: "Natural testosterone support supplement",
      benefits: "Supports muscle growth, Enhances energy",
      usage: "Take 2 capsules daily with meals",
      warnings: "Consult doctor before use"
    },
    kn: {
      shortDesc: "Natural testosterone support supplement",
      description: "Natural testosterone support supplement",
      benefits: "Supports muscle growth, Enhances energy",
      usage: "Take 2 capsules daily with meals",
      warnings: "Consult doctor before use"
    },
    ml: {
      shortDesc: "Natural testosterone support supplement",
      description: "Natural testosterone support supplement",
      benefits: "Supports muscle growth, Enhances energy",
      usage: "Take 2 capsules daily with meals",
      warnings: "Consult doctor before use"
    },
    pa: {
      shortDesc: "Natural testosterone support supplement",
      description: "Natural testosterone support supplement",
      benefits: "Supports muscle growth, Enhances energy",
      usage: "Take 2 capsules daily with meals",
      warnings: "Consult doctor before use"
    },
    or: {
      shortDesc: "Natural testosterone support supplement",
      description: "Natural testosterone support supplement",
      benefits: "Supports muscle growth, Enhances energy",
      usage: "Take 2 capsules daily with meals",
      warnings: "Consult doctor before use"
    },
    as: {
      shortDesc: "Natural testosterone support supplement",
      description: "Natural testosterone support supplement",
      benefits: "Supports muscle growth, Enhances energy",
      usage: "Take 2 capsules daily with meals",
      warnings: "Consult doctor before use"
    },
    ur: {
      shortDesc: "Natural testosterone support supplement",
      description: "Natural testosterone support supplement",
      benefits: "Supports muscle growth, Enhances energy",
      usage: "Take 2 capsules daily with meals",
      warnings: "Consult doctor before use"
    }
  },
  "MEN005": {
    en: {
      shortDesc: "Supports prostate health and urinary function",
      description: "Supports prostate health and urinary function",
      benefits: "Supports prostate health, Promotes urinary function",
      usage: "Take 1 tablet twice daily with meals",
      warnings: "Consult healthcare provider"
    },
    hi: {
      shortDesc: "Supports prostate health and urinary function",
      description: "Supports prostate health and urinary function",
      benefits: "Supports prostate health, Promotes urinary function",
      usage: "Take 1 tablet twice daily with meals",
      warnings: "Consult healthcare provider"
    },
    ta: {
      shortDesc: "Supports prostate health and urinary function",
      description: "Supports prostate health and urinary function",
      benefits: "Supports prostate health, Promotes urinary function",
      usage: "Take 1 tablet twice daily with meals",
      warnings: "Consult healthcare provider"
    },
    te: {
      shortDesc: "Supports prostate health and urinary function",
      description: "Supports prostate health and urinary function",
      benefits: "Supports prostate health, Promotes urinary function",
      usage: "Take 1 tablet twice daily with meals",
      warnings: "Consult healthcare provider"
    },
    bn: {
      shortDesc: "Supports prostate health and urinary function",
      description: "Supports prostate health and urinary function",
      benefits: "Supports prostate health, Promotes urinary function",
      usage: "Take 1 tablet twice daily with meals",
      warnings: "Consult healthcare provider"
    },
    mr: {
      shortDesc: "Supports prostate health and urinary function",
      description: "Supports prostate health and urinary function",
      benefits: "Supports prostate health, Promotes urinary function",
      usage: "Take 1 tablet twice daily with meals",
      warnings: "Consult healthcare provider"
    },
    gu: {
      shortDesc: "Supports prostate health and urinary function",
      description: "Supports prostate health and urinary function",
      benefits: "Supports prostate health, Promotes urinary function",
      usage: "Take 1 tablet twice daily with meals",
      warnings: "Consult healthcare provider"
    },
    kn: {
      shortDesc: "Supports prostate health and urinary function",
      description: "Supports prostate health and urinary function",
      benefits: "Supports prostate health, Promotes urinary function",
      usage: "Take 1 tablet twice daily with meals",
      warnings: "Consult healthcare provider"
    },
    ml: {
      shortDesc: "Supports prostate health and urinary function",
      description: "Supports prostate health and urinary function",
      benefits: "Supports prostate health, Promotes urinary function",
      usage: "Take 1 tablet twice daily with meals",
      warnings: "Consult healthcare provider"
    },
    pa: {
      shortDesc: "Supports prostate health and urinary function",
      description: "Supports prostate health and urinary function",
      benefits: "Supports prostate health, Promotes urinary function",
      usage: "Take 1 tablet twice daily with meals",
      warnings: "Consult healthcare provider"
    },
    or: {
      shortDesc: "Supports prostate health and urinary function",
      description: "Supports prostate health and urinary function",
      benefits: "Supports prostate health, Promotes urinary function",
      usage: "Take 1 tablet twice daily with meals",
      warnings: "Consult healthcare provider"
    },
    as: {
      shortDesc: "Supports prostate health and urinary function",
      description: "Supports prostate health and urinary function",
      benefits: "Supports prostate health, Promotes urinary function",
      usage: "Take 1 tablet twice daily with meals",
      warnings: "Consult healthcare provider"
    },
    ur: {
      shortDesc: "Supports prostate health and urinary function",
      description: "Supports prostate health and urinary function",
      benefits: "Supports prostate health, Promotes urinary function",
      usage: "Take 1 tablet twice daily with meals",
      warnings: "Consult healthcare provider"
    }
  },
  "MEN006": {
    en: {
      shortDesc: "Whey protein isolate for muscle building",
      description: "Whey protein isolate for muscle building",
      benefits: "25g protein per serving, Supports muscle growth",
      usage: "Mix 1 scoop with 250ml water post-workout",
      warnings: "Consult doctor if you have kidney issues"
    },
    hi: {
      shortDesc: "Whey protein isolate for muscle building",
      description: "Whey protein isolate for muscle building",
      benefits: "25g protein per serving, Supports muscle growth",
      usage: "Mix 1 scoop with 250ml water post-workout",
      warnings: "Consult doctor if you have kidney issues"
    },
    ta: {
      shortDesc: "Whey protein isolate for muscle building",
      description: "Whey protein isolate for muscle building",
      benefits: "25g protein per serving, Supports muscle growth",
      usage: "Mix 1 scoop with 250ml water post-workout",
      warnings: "Consult doctor if you have kidney issues"
    },
    te: {
      shortDesc: "Whey protein isolate for muscle building",
      description: "Whey protein isolate for muscle building",
      benefits: "25g protein per serving, Supports muscle growth",
      usage: "Mix 1 scoop with 250ml water post-workout",
      warnings: "Consult doctor if you have kidney issues"
    },
    bn: {
      shortDesc: "Whey protein isolate for muscle building",
      description: "Whey protein isolate for muscle building",
      benefits: "25g protein per serving, Supports muscle growth",
      usage: "Mix 1 scoop with 250ml water post-workout",
      warnings: "Consult doctor if you have kidney issues"
    },
    mr: {
      shortDesc: "Whey protein isolate for muscle building",
      description: "Whey protein isolate for muscle building",
      benefits: "25g protein per serving, Supports muscle growth",
      usage: "Mix 1 scoop with 250ml water post-workout",
      warnings: "Consult doctor if you have kidney issues"
    },
    gu: {
      shortDesc: "Whey protein isolate for muscle building",
      description: "Whey protein isolate for muscle building",
      benefits: "25g protein per serving, Supports muscle growth",
      usage: "Mix 1 scoop with 250ml water post-workout",
      warnings: "Consult doctor if you have kidney issues"
    },
    kn: {
      shortDesc: "Whey protein isolate for muscle building",
      description: "Whey protein isolate for muscle building",
      benefits: "25g protein per serving, Supports muscle growth",
      usage: "Mix 1 scoop with 250ml water post-workout",
      warnings: "Consult doctor if you have kidney issues"
    },
    ml: {
      shortDesc: "Whey protein isolate for muscle building",
      description: "Whey protein isolate for muscle building",
      benefits: "25g protein per serving, Supports muscle growth",
      usage: "Mix 1 scoop with 250ml water post-workout",
      warnings: "Consult doctor if you have kidney issues"
    },
    pa: {
      shortDesc: "Whey protein isolate for muscle building",
      description: "Whey protein isolate for muscle building",
      benefits: "25g protein per serving, Supports muscle growth",
      usage: "Mix 1 scoop with 250ml water post-workout",
      warnings: "Consult doctor if you have kidney issues"
    },
    or: {
      shortDesc: "Whey protein isolate for muscle building",
      description: "Whey protein isolate for muscle building",
      benefits: "25g protein per serving, Supports muscle growth",
      usage: "Mix 1 scoop with 250ml water post-workout",
      warnings: "Consult doctor if you have kidney issues"
    },
    as: {
      shortDesc: "Whey protein isolate for muscle building",
      description: "Whey protein isolate for muscle building",
      benefits: "25g protein per serving, Supports muscle growth",
      usage: "Mix 1 scoop with 250ml water post-workout",
      warnings: "Consult doctor if you have kidney issues"
    },
    ur: {
      shortDesc: "Whey protein isolate for muscle building",
      description: "Whey protein isolate for muscle building",
      benefits: "25g protein per serving, Supports muscle growth",
      usage: "Mix 1 scoop with 250ml water post-workout",
      warnings: "Consult doctor if you have kidney issues"
    }
  },
  "MEN007": {
    en: {
      shortDesc: "Gentle shaving gel for sensitive skin",
      description: "Gentle shaving gel for sensitive skin",
      benefits: "Prevents razor burns, Soothes skin",
      usage: "Apply to wet face, lather, and shave",
      warnings: "For external use only"
    },
    hi: {
      shortDesc: "Gentle shaving gel for sensitive skin",
      description: "Gentle shaving gel for sensitive skin",
      benefits: "Prevents razor burns, Soothes skin",
      usage: "Apply to wet face, lather, and shave",
      warnings: "For external use only"
    },
    ta: {
      shortDesc: "Gentle shaving gel for sensitive skin",
      description: "Gentle shaving gel for sensitive skin",
      benefits: "Prevents razor burns, Soothes skin",
      usage: "Apply to wet face, lather, and shave",
      warnings: "For external use only"
    },
    te: {
      shortDesc: "Gentle shaving gel for sensitive skin",
      description: "Gentle shaving gel for sensitive skin",
      benefits: "Prevents razor burns, Soothes skin",
      usage: "Apply to wet face, lather, and shave",
      warnings: "For external use only"
    },
    bn: {
      shortDesc: "Gentle shaving gel for sensitive skin",
      description: "Gentle shaving gel for sensitive skin",
      benefits: "Prevents razor burns, Soothes skin",
      usage: "Apply to wet face, lather, and shave",
      warnings: "For external use only"
    },
    mr: {
      shortDesc: "Gentle shaving gel for sensitive skin",
      description: "Gentle shaving gel for sensitive skin",
      benefits: "Prevents razor burns, Soothes skin",
      usage: "Apply to wet face, lather, and shave",
      warnings: "For external use only"
    },
    gu: {
      shortDesc: "Gentle shaving gel for sensitive skin",
      description: "Gentle shaving gel for sensitive skin",
      benefits: "Prevents razor burns, Soothes skin",
      usage: "Apply to wet face, lather, and shave",
      warnings: "For external use only"
    },
    kn: {
      shortDesc: "Gentle shaving gel for sensitive skin",
      description: "Gentle shaving gel for sensitive skin",
      benefits: "Prevents razor burns, Soothes skin",
      usage: "Apply to wet face, lather, and shave",
      warnings: "For external use only"
    },
    ml: {
      shortDesc: "Gentle shaving gel for sensitive skin",
      description: "Gentle shaving gel for sensitive skin",
      benefits: "Prevents razor burns, Soothes skin",
      usage: "Apply to wet face, lather, and shave",
      warnings: "For external use only"
    },
    pa: {
      shortDesc: "Gentle shaving gel for sensitive skin",
      description: "Gentle shaving gel for sensitive skin",
      benefits: "Prevents razor burns, Soothes skin",
      usage: "Apply to wet face, lather, and shave",
      warnings: "For external use only"
    },
    or: {
      shortDesc: "Gentle shaving gel for sensitive skin",
      description: "Gentle shaving gel for sensitive skin",
      benefits: "Prevents razor burns, Soothes skin",
      usage: "Apply to wet face, lather, and shave",
      warnings: "For external use only"
    },
    as: {
      shortDesc: "Gentle shaving gel for sensitive skin",
      description: "Gentle shaving gel for sensitive skin",
      benefits: "Prevents razor burns, Soothes skin",
      usage: "Apply to wet face, lather, and shave",
      warnings: "For external use only"
    },
    ur: {
      shortDesc: "Gentle shaving gel for sensitive skin",
      description: "Gentle shaving gel for sensitive skin",
      benefits: "Prevents razor burns, Soothes skin",
      usage: "Apply to wet face, lather, and shave",
      warnings: "For external use only"
    }
  },
  "MEN008": {
    en: {
      shortDesc: "Strengthening shampoo to reduce hair fall",
      description: "Strengthening shampoo to reduce hair fall",
      benefits: "Reduces hair fall, Strengthens hair",
      usage: "Apply to wet hair, massage, rinse",
      warnings: "For external use only"
    },
    hi: {
      shortDesc: "Strengthening shampoo to reduce hair fall",
      description: "Strengthening shampoo to reduce hair fall",
      benefits: "Reduces hair fall, Strengthens hair",
      usage: "Apply to wet hair, massage, rinse",
      warnings: "For external use only"
    },
    ta: {
      shortDesc: "Strengthening shampoo to reduce hair fall",
      description: "Strengthening shampoo to reduce hair fall",
      benefits: "Reduces hair fall, Strengthens hair",
      usage: "Apply to wet hair, massage, rinse",
      warnings: "For external use only"
    },
    te: {
      shortDesc: "Strengthening shampoo to reduce hair fall",
      description: "Strengthening shampoo to reduce hair fall",
      benefits: "Reduces hair fall, Strengthens hair",
      usage: "Apply to wet hair, massage, rinse",
      warnings: "For external use only"
    },
    bn: {
      shortDesc: "Strengthening shampoo to reduce hair fall",
      description: "Strengthening shampoo to reduce hair fall",
      benefits: "Reduces hair fall, Strengthens hair",
      usage: "Apply to wet hair, massage, rinse",
      warnings: "For external use only"
    },
    mr: {
      shortDesc: "Strengthening shampoo to reduce hair fall",
      description: "Strengthening shampoo to reduce hair fall",
      benefits: "Reduces hair fall, Strengthens hair",
      usage: "Apply to wet hair, massage, rinse",
      warnings: "For external use only"
    },
    gu: {
      shortDesc: "Strengthening shampoo to reduce hair fall",
      description: "Strengthening shampoo to reduce hair fall",
      benefits: "Reduces hair fall, Strengthens hair",
      usage: "Apply to wet hair, massage, rinse",
      warnings: "For external use only"
    },
    kn: {
      shortDesc: "Strengthening shampoo to reduce hair fall",
      description: "Strengthening shampoo to reduce hair fall",
      benefits: "Reduces hair fall, Strengthens hair",
      usage: "Apply to wet hair, massage, rinse",
      warnings: "For external use only"
    },
    ml: {
      shortDesc: "Strengthening shampoo to reduce hair fall",
      description: "Strengthening shampoo to reduce hair fall",
      benefits: "Reduces hair fall, Strengthens hair",
      usage: "Apply to wet hair, massage, rinse",
      warnings: "For external use only"
    },
    pa: {
      shortDesc: "Strengthening shampoo to reduce hair fall",
      description: "Strengthening shampoo to reduce hair fall",
      benefits: "Reduces hair fall, Strengthens hair",
      usage: "Apply to wet hair, massage, rinse",
      warnings: "For external use only"
    },
    or: {
      shortDesc: "Strengthening shampoo to reduce hair fall",
      description: "Strengthening shampoo to reduce hair fall",
      benefits: "Reduces hair fall, Strengthens hair",
      usage: "Apply to wet hair, massage, rinse",
      warnings: "For external use only"
    },
    as: {
      shortDesc: "Strengthening shampoo to reduce hair fall",
      description: "Strengthening shampoo to reduce hair fall",
      benefits: "Reduces hair fall, Strengthens hair",
      usage: "Apply to wet hair, massage, rinse",
      warnings: "For external use only"
    },
    ur: {
      shortDesc: "Strengthening shampoo to reduce hair fall",
      description: "Strengthening shampoo to reduce hair fall",
      benefits: "Reduces hair fall, Strengthens hair",
      usage: "Apply to wet hair, massage, rinse",
      warnings: "For external use only"
    }
  },
  "MEN009": {
    en: {
      shortDesc: "Zinc supplement for immune support",
      description: "Zinc supplement for immune support",
      benefits: "Supports immune system, Promotes skin health, Aids metabolism",
      usage: "Take 1 tablet daily with food",
      warnings: "Do not exceed recommended dose, Store in cool place"
    },
    hi: {
      shortDesc: "Zinc supplement for immune support",
      description: "Zinc supplement for immune support",
      benefits: "Supports immune system, Promotes skin health, Aids metabolism",
      usage: "Take 1 tablet daily with food",
      warnings: "Do not exceed recommended dose, Store in cool place"
    },
    ta: {
      shortDesc: "Zinc supplement for immune support",
      description: "Zinc supplement for immune support",
      benefits: "Supports immune system, Promotes skin health, Aids metabolism",
      usage: "Take 1 tablet daily with food",
      warnings: "Do not exceed recommended dose, Store in cool place"
    },
    te: {
      shortDesc: "Zinc supplement for immune support",
      description: "Zinc supplement for immune support",
      benefits: "Supports immune system, Promotes skin health, Aids metabolism",
      usage: "Take 1 tablet daily with food",
      warnings: "Do not exceed recommended dose, Store in cool place"
    },
    bn: {
      shortDesc: "Zinc supplement for immune support",
      description: "Zinc supplement for immune support",
      benefits: "Supports immune system, Promotes skin health, Aids metabolism",
      usage: "Take 1 tablet daily with food",
      warnings: "Do not exceed recommended dose, Store in cool place"
    },
    mr: {
      shortDesc: "Zinc supplement for immune support",
      description: "Zinc supplement for immune support",
      benefits: "Supports immune system, Promotes skin health, Aids metabolism",
      usage: "Take 1 tablet daily with food",
      warnings: "Do not exceed recommended dose, Store in cool place"
    },
    gu: {
      shortDesc: "Zinc supplement for immune support",
      description: "Zinc supplement for immune support",
      benefits: "Supports immune system, Promotes skin health, Aids metabolism",
      usage: "Take 1 tablet daily with food",
      warnings: "Do not exceed recommended dose, Store in cool place"
    },
    kn: {
      shortDesc: "Zinc supplement for immune support",
      description: "Zinc supplement for immune support",
      benefits: "Supports immune system, Promotes skin health, Aids metabolism",
      usage: "Take 1 tablet daily with food",
      warnings: "Do not exceed recommended dose, Store in cool place"
    },
    ml: {
      shortDesc: "Zinc supplement for immune support",
      description: "Zinc supplement for immune support",
      benefits: "Supports immune system, Promotes skin health, Aids metabolism",
      usage: "Take 1 tablet daily with food",
      warnings: "Do not exceed recommended dose, Store in cool place"
    },
    pa: {
      shortDesc: "Zinc supplement for immune support",
      description: "Zinc supplement for immune support",
      benefits: "Supports immune system, Promotes skin health, Aids metabolism",
      usage: "Take 1 tablet daily with food",
      warnings: "Do not exceed recommended dose, Store in cool place"
    },
    or: {
      shortDesc: "Zinc supplement for immune support",
      description: "Zinc supplement for immune support",
      benefits: "Supports immune system, Promotes skin health, Aids metabolism",
      usage: "Take 1 tablet daily with food",
      warnings: "Do not exceed recommended dose, Store in cool place"
    },
    as: {
      shortDesc: "Zinc supplement for immune support",
      description: "Zinc supplement for immune support",
      benefits: "Supports immune system, Promotes skin health, Aids metabolism",
      usage: "Take 1 tablet daily with food",
      warnings: "Do not exceed recommended dose, Store in cool place"
    },
    ur: {
      shortDesc: "Zinc supplement for immune support",
      description: "Zinc supplement for immune support",
      benefits: "Supports immune system, Promotes skin health, Aids metabolism",
      usage: "Take 1 tablet daily with food",
      warnings: "Do not exceed recommended dose, Store in cool place"
    }
  },
  "MEN010": {
    en: {
      shortDesc: "Fish oil omega-3 for heart health",
      description: "Fish oil omega-3 for heart health",
      benefits: "Supports heart health, Reduces inflammation, Improves brain function",
      usage: "Take 2 capsules daily with meals",
      warnings: "Consult doctor if on blood thinners, Keep refrigerated"
    },
    hi: {
      shortDesc: "Fish oil omega-3 for heart health",
      description: "Fish oil omega-3 for heart health",
      benefits: "Supports heart health, Reduces inflammation, Improves brain function",
      usage: "Take 2 capsules daily with meals",
      warnings: "Consult doctor if on blood thinners, Keep refrigerated"
    },
    ta: {
      shortDesc: "Fish oil omega-3 for heart health",
      description: "Fish oil omega-3 for heart health",
      benefits: "Supports heart health, Reduces inflammation, Improves brain function",
      usage: "Take 2 capsules daily with meals",
      warnings: "Consult doctor if on blood thinners, Keep refrigerated"
    },
    te: {
      shortDesc: "Fish oil omega-3 for heart health",
      description: "Fish oil omega-3 for heart health",
      benefits: "Supports heart health, Reduces inflammation, Improves brain function",
      usage: "Take 2 capsules daily with meals",
      warnings: "Consult doctor if on blood thinners, Keep refrigerated"
    },
    bn: {
      shortDesc: "Fish oil omega-3 for heart health",
      description: "Fish oil omega-3 for heart health",
      benefits: "Supports heart health, Reduces inflammation, Improves brain function",
      usage: "Take 2 capsules daily with meals",
      warnings: "Consult doctor if on blood thinners, Keep refrigerated"
    },
    mr: {
      shortDesc: "Fish oil omega-3 for heart health",
      description: "Fish oil omega-3 for heart health",
      benefits: "Supports heart health, Reduces inflammation, Improves brain function",
      usage: "Take 2 capsules daily with meals",
      warnings: "Consult doctor if on blood thinners, Keep refrigerated"
    },
    gu: {
      shortDesc: "Fish oil omega-3 for heart health",
      description: "Fish oil omega-3 for heart health",
      benefits: "Supports heart health, Reduces inflammation, Improves brain function",
      usage: "Take 2 capsules daily with meals",
      warnings: "Consult doctor if on blood thinners, Keep refrigerated"
    },
    kn: {
      shortDesc: "Fish oil omega-3 for heart health",
      description: "Fish oil omega-3 for heart health",
      benefits: "Supports heart health, Reduces inflammation, Improves brain function",
      usage: "Take 2 capsules daily with meals",
      warnings: "Consult doctor if on blood thinners, Keep refrigerated"
    },
    ml: {
      shortDesc: "Fish oil omega-3 for heart health",
      description: "Fish oil omega-3 for heart health",
      benefits: "Supports heart health, Reduces inflammation, Improves brain function",
      usage: "Take 2 capsules daily with meals",
      warnings: "Consult doctor if on blood thinners, Keep refrigerated"
    },
    pa: {
      shortDesc: "Fish oil omega-3 for heart health",
      description: "Fish oil omega-3 for heart health",
      benefits: "Supports heart health, Reduces inflammation, Improves brain function",
      usage: "Take 2 capsules daily with meals",
      warnings: "Consult doctor if on blood thinners, Keep refrigerated"
    },
    or: {
      shortDesc: "Fish oil omega-3 for heart health",
      description: "Fish oil omega-3 for heart health",
      benefits: "Supports heart health, Reduces inflammation, Improves brain function",
      usage: "Take 2 capsules daily with meals",
      warnings: "Consult doctor if on blood thinners, Keep refrigerated"
    },
    as: {
      shortDesc: "Fish oil omega-3 for heart health",
      description: "Fish oil omega-3 for heart health",
      benefits: "Supports heart health, Reduces inflammation, Improves brain function",
      usage: "Take 2 capsules daily with meals",
      warnings: "Consult doctor if on blood thinners, Keep refrigerated"
    },
    ur: {
      shortDesc: "Fish oil omega-3 for heart health",
      description: "Fish oil omega-3 for heart health",
      benefits: "Supports heart health, Reduces inflammation, Improves brain function",
      usage: "Take 2 capsules daily with meals",
      warnings: "Consult doctor if on blood thinners, Keep refrigerated"
    }
  },
  "MEN011": {
    en: {
      shortDesc: "Vitamin D3 for bone health",
      description: "Vitamin D3 for bone health",
      benefits: "Strengthens bones, Supports immunity, Improves mood",
      usage: "Take 1 tablet daily",
      warnings: "Do not exceed recommended dose"
    },
    hi: {
      shortDesc: "Vitamin D3 for bone health",
      description: "Vitamin D3 for bone health",
      benefits: "Strengthens bones, Supports immunity, Improves mood",
      usage: "Take 1 tablet daily",
      warnings: "Do not exceed recommended dose"
    },
    ta: {
      shortDesc: "Vitamin D3 for bone health",
      description: "Vitamin D3 for bone health",
      benefits: "Strengthens bones, Supports immunity, Improves mood",
      usage: "Take 1 tablet daily",
      warnings: "Do not exceed recommended dose"
    },
    te: {
      shortDesc: "Vitamin D3 for bone health",
      description: "Vitamin D3 for bone health",
      benefits: "Strengthens bones, Supports immunity, Improves mood",
      usage: "Take 1 tablet daily",
      warnings: "Do not exceed recommended dose"
    },
    bn: {
      shortDesc: "Vitamin D3 for bone health",
      description: "Vitamin D3 for bone health",
      benefits: "Strengthens bones, Supports immunity, Improves mood",
      usage: "Take 1 tablet daily",
      warnings: "Do not exceed recommended dose"
    },
    mr: {
      shortDesc: "Vitamin D3 for bone health",
      description: "Vitamin D3 for bone health",
      benefits: "Strengthens bones, Supports immunity, Improves mood",
      usage: "Take 1 tablet daily",
      warnings: "Do not exceed recommended dose"
    },
    gu: {
      shortDesc: "Vitamin D3 for bone health",
      description: "Vitamin D3 for bone health",
      benefits: "Strengthens bones, Supports immunity, Improves mood",
      usage: "Take 1 tablet daily",
      warnings: "Do not exceed recommended dose"
    },
    kn: {
      shortDesc: "Vitamin D3 for bone health",
      description: "Vitamin D3 for bone health",
      benefits: "Strengthens bones, Supports immunity, Improves mood",
      usage: "Take 1 tablet daily",
      warnings: "Do not exceed recommended dose"
    },
    ml: {
      shortDesc: "Vitamin D3 for bone health",
      description: "Vitamin D3 for bone health",
      benefits: "Strengthens bones, Supports immunity, Improves mood",
      usage: "Take 1 tablet daily",
      warnings: "Do not exceed recommended dose"
    },
    pa: {
      shortDesc: "Vitamin D3 for bone health",
      description: "Vitamin D3 for bone health",
      benefits: "Strengthens bones, Supports immunity, Improves mood",
      usage: "Take 1 tablet daily",
      warnings: "Do not exceed recommended dose"
    },
    or: {
      shortDesc: "Vitamin D3 for bone health",
      description: "Vitamin D3 for bone health",
      benefits: "Strengthens bones, Supports immunity, Improves mood",
      usage: "Take 1 tablet daily",
      warnings: "Do not exceed recommended dose"
    },
    as: {
      shortDesc: "Vitamin D3 for bone health",
      description: "Vitamin D3 for bone health",
      benefits: "Strengthens bones, Supports immunity, Improves mood",
      usage: "Take 1 tablet daily",
      warnings: "Do not exceed recommended dose"
    },
    ur: {
      shortDesc: "Vitamin D3 for bone health",
      description: "Vitamin D3 for bone health",
      benefits: "Strengthens bones, Supports immunity, Improves mood",
      usage: "Take 1 tablet daily",
      warnings: "Do not exceed recommended dose"
    }
  },
  "MEN012": {
    en: {
      shortDesc: "B-Complex vitamins for energy",
      description: "B-Complex vitamins for energy",
      benefits: "Boosts energy, Supports metabolism, Reduces fatigue",
      usage: "Take 1 tablet daily with breakfast",
      warnings: "May cause nausea if taken on empty stomach"
    },
    hi: {
      shortDesc: "B-Complex vitamins for energy",
      description: "B-Complex vitamins for energy",
      benefits: "Boosts energy, Supports metabolism, Reduces fatigue",
      usage: "Take 1 tablet daily with breakfast",
      warnings: "May cause nausea if taken on empty stomach"
    },
    ta: {
      shortDesc: "B-Complex vitamins for energy",
      description: "B-Complex vitamins for energy",
      benefits: "Boosts energy, Supports metabolism, Reduces fatigue",
      usage: "Take 1 tablet daily with breakfast",
      warnings: "May cause nausea if taken on empty stomach"
    },
    te: {
      shortDesc: "B-Complex vitamins for energy",
      description: "B-Complex vitamins for energy",
      benefits: "Boosts energy, Supports metabolism, Reduces fatigue",
      usage: "Take 1 tablet daily with breakfast",
      warnings: "May cause nausea if taken on empty stomach"
    },
    bn: {
      shortDesc: "B-Complex vitamins for energy",
      description: "B-Complex vitamins for energy",
      benefits: "Boosts energy, Supports metabolism, Reduces fatigue",
      usage: "Take 1 tablet daily with breakfast",
      warnings: "May cause nausea if taken on empty stomach"
    },
    mr: {
      shortDesc: "B-Complex vitamins for energy",
      description: "B-Complex vitamins for energy",
      benefits: "Boosts energy, Supports metabolism, Reduces fatigue",
      usage: "Take 1 tablet daily with breakfast",
      warnings: "May cause nausea if taken on empty stomach"
    },
    gu: {
      shortDesc: "B-Complex vitamins for energy",
      description: "B-Complex vitamins for energy",
      benefits: "Boosts energy, Supports metabolism, Reduces fatigue",
      usage: "Take 1 tablet daily with breakfast",
      warnings: "May cause nausea if taken on empty stomach"
    },
    kn: {
      shortDesc: "B-Complex vitamins for energy",
      description: "B-Complex vitamins for energy",
      benefits: "Boosts energy, Supports metabolism, Reduces fatigue",
      usage: "Take 1 tablet daily with breakfast",
      warnings: "May cause nausea if taken on empty stomach"
    },
    ml: {
      shortDesc: "B-Complex vitamins for energy",
      description: "B-Complex vitamins for energy",
      benefits: "Boosts energy, Supports metabolism, Reduces fatigue",
      usage: "Take 1 tablet daily with breakfast",
      warnings: "May cause nausea if taken on empty stomach"
    },
    pa: {
      shortDesc: "B-Complex vitamins for energy",
      description: "B-Complex vitamins for energy",
      benefits: "Boosts energy, Supports metabolism, Reduces fatigue",
      usage: "Take 1 tablet daily with breakfast",
      warnings: "May cause nausea if taken on empty stomach"
    },
    or: {
      shortDesc: "B-Complex vitamins for energy",
      description: "B-Complex vitamins for energy",
      benefits: "Boosts energy, Supports metabolism, Reduces fatigue",
      usage: "Take 1 tablet daily with breakfast",
      warnings: "May cause nausea if taken on empty stomach"
    },
    as: {
      shortDesc: "B-Complex vitamins for energy",
      description: "B-Complex vitamins for energy",
      benefits: "Boosts energy, Supports metabolism, Reduces fatigue",
      usage: "Take 1 tablet daily with breakfast",
      warnings: "May cause nausea if taken on empty stomach"
    },
    ur: {
      shortDesc: "B-Complex vitamins for energy",
      description: "B-Complex vitamins for energy",
      benefits: "Boosts energy, Supports metabolism, Reduces fatigue",
      usage: "Take 1 tablet daily with breakfast",
      warnings: "May cause nausea if taken on empty stomach"
    }
  },
  "MEN013": {
    en: {
      shortDesc: "Natural hair oil for hair growth",
      description: "Natural hair oil for hair growth",
      benefits: "Nourishes scalp, Reduces dandruff",
      usage: "Massage into scalp 2-3 times weekly",
      warnings: "For external use only"
    },
    hi: {
      shortDesc: "Natural hair oil for hair growth",
      description: "Natural hair oil for hair growth",
      benefits: "Nourishes scalp, Reduces dandruff",
      usage: "Massage into scalp 2-3 times weekly",
      warnings: "For external use only"
    },
    ta: {
      shortDesc: "Natural hair oil for hair growth",
      description: "Natural hair oil for hair growth",
      benefits: "Nourishes scalp, Reduces dandruff",
      usage: "Massage into scalp 2-3 times weekly",
      warnings: "For external use only"
    },
    te: {
      shortDesc: "Natural hair oil for hair growth",
      description: "Natural hair oil for hair growth",
      benefits: "Nourishes scalp, Reduces dandruff",
      usage: "Massage into scalp 2-3 times weekly",
      warnings: "For external use only"
    },
    bn: {
      shortDesc: "Natural hair oil for hair growth",
      description: "Natural hair oil for hair growth",
      benefits: "Nourishes scalp, Reduces dandruff",
      usage: "Massage into scalp 2-3 times weekly",
      warnings: "For external use only"
    },
    mr: {
      shortDesc: "Natural hair oil for hair growth",
      description: "Natural hair oil for hair growth",
      benefits: "Nourishes scalp, Reduces dandruff",
      usage: "Massage into scalp 2-3 times weekly",
      warnings: "For external use only"
    },
    gu: {
      shortDesc: "Natural hair oil for hair growth",
      description: "Natural hair oil for hair growth",
      benefits: "Nourishes scalp, Reduces dandruff",
      usage: "Massage into scalp 2-3 times weekly",
      warnings: "For external use only"
    },
    kn: {
      shortDesc: "Natural hair oil for hair growth",
      description: "Natural hair oil for hair growth",
      benefits: "Nourishes scalp, Reduces dandruff",
      usage: "Massage into scalp 2-3 times weekly",
      warnings: "For external use only"
    },
    ml: {
      shortDesc: "Natural hair oil for hair growth",
      description: "Natural hair oil for hair growth",
      benefits: "Nourishes scalp, Reduces dandruff",
      usage: "Massage into scalp 2-3 times weekly",
      warnings: "For external use only"
    },
    pa: {
      shortDesc: "Natural hair oil for hair growth",
      description: "Natural hair oil for hair growth",
      benefits: "Nourishes scalp, Reduces dandruff",
      usage: "Massage into scalp 2-3 times weekly",
      warnings: "For external use only"
    },
    or: {
      shortDesc: "Natural hair oil for hair growth",
      description: "Natural hair oil for hair growth",
      benefits: "Nourishes scalp, Reduces dandruff",
      usage: "Massage into scalp 2-3 times weekly",
      warnings: "For external use only"
    },
    as: {
      shortDesc: "Natural hair oil for hair growth",
      description: "Natural hair oil for hair growth",
      benefits: "Nourishes scalp, Reduces dandruff",
      usage: "Massage into scalp 2-3 times weekly",
      warnings: "For external use only"
    },
    ur: {
      shortDesc: "Natural hair oil for hair growth",
      description: "Natural hair oil for hair growth",
      benefits: "Nourishes scalp, Reduces dandruff",
      usage: "Massage into scalp 2-3 times weekly",
      warnings: "For external use only"
    }
  },
  "MEN014": {
    en: {
      shortDesc: "Anti-hair fall shampoo",
      description: "Anti-hair fall shampoo",
      benefits: "Reduces hair fall, Cleanses scalp",
      usage: "Apply to wet hair, lather, rinse",
      warnings: "Avoid contact with eyes"
    },
    hi: {
      shortDesc: "Anti-hair fall shampoo",
      description: "Anti-hair fall shampoo",
      benefits: "Reduces hair fall, Cleanses scalp",
      usage: "Apply to wet hair, lather, rinse",
      warnings: "Avoid contact with eyes"
    },
    ta: {
      shortDesc: "Anti-hair fall shampoo",
      description: "Anti-hair fall shampoo",
      benefits: "Reduces hair fall, Cleanses scalp",
      usage: "Apply to wet hair, lather, rinse",
      warnings: "Avoid contact with eyes"
    },
    te: {
      shortDesc: "Anti-hair fall shampoo",
      description: "Anti-hair fall shampoo",
      benefits: "Reduces hair fall, Cleanses scalp",
      usage: "Apply to wet hair, lather, rinse",
      warnings: "Avoid contact with eyes"
    },
    bn: {
      shortDesc: "Anti-hair fall shampoo",
      description: "Anti-hair fall shampoo",
      benefits: "Reduces hair fall, Cleanses scalp",
      usage: "Apply to wet hair, lather, rinse",
      warnings: "Avoid contact with eyes"
    },
    mr: {
      shortDesc: "Anti-hair fall shampoo",
      description: "Anti-hair fall shampoo",
      benefits: "Reduces hair fall, Cleanses scalp",
      usage: "Apply to wet hair, lather, rinse",
      warnings: "Avoid contact with eyes"
    },
    gu: {
      shortDesc: "Anti-hair fall shampoo",
      description: "Anti-hair fall shampoo",
      benefits: "Reduces hair fall, Cleanses scalp",
      usage: "Apply to wet hair, lather, rinse",
      warnings: "Avoid contact with eyes"
    },
    kn: {
      shortDesc: "Anti-hair fall shampoo",
      description: "Anti-hair fall shampoo",
      benefits: "Reduces hair fall, Cleanses scalp",
      usage: "Apply to wet hair, lather, rinse",
      warnings: "Avoid contact with eyes"
    },
    ml: {
      shortDesc: "Anti-hair fall shampoo",
      description: "Anti-hair fall shampoo",
      benefits: "Reduces hair fall, Cleanses scalp",
      usage: "Apply to wet hair, lather, rinse",
      warnings: "Avoid contact with eyes"
    },
    pa: {
      shortDesc: "Anti-hair fall shampoo",
      description: "Anti-hair fall shampoo",
      benefits: "Reduces hair fall, Cleanses scalp",
      usage: "Apply to wet hair, lather, rinse",
      warnings: "Avoid contact with eyes"
    },
    or: {
      shortDesc: "Anti-hair fall shampoo",
      description: "Anti-hair fall shampoo",
      benefits: "Reduces hair fall, Cleanses scalp",
      usage: "Apply to wet hair, lather, rinse",
      warnings: "Avoid contact with eyes"
    },
    as: {
      shortDesc: "Anti-hair fall shampoo",
      description: "Anti-hair fall shampoo",
      benefits: "Reduces hair fall, Cleanses scalp",
      usage: "Apply to wet hair, lather, rinse",
      warnings: "Avoid contact with eyes"
    },
    ur: {
      shortDesc: "Anti-hair fall shampoo",
      description: "Anti-hair fall shampoo",
      benefits: "Reduces hair fall, Cleanses scalp",
      usage: "Apply to wet hair, lather, rinse",
      warnings: "Avoid contact with eyes"
    }
  },
  "MEN015": {
    en: {
      shortDesc: "Hair growth vitamins with biotin",
      description: "Hair growth vitamins with biotin",
      benefits: "Promotes hair growth, Strengthens from within",
      usage: "Take 2 capsules daily",
      warnings: "Consult doctor if pregnant"
    },
    hi: {
      shortDesc: "Hair growth vitamins with biotin",
      description: "Hair growth vitamins with biotin",
      benefits: "Promotes hair growth, Strengthens from within",
      usage: "Take 2 capsules daily",
      warnings: "Consult doctor if pregnant"
    },
    ta: {
      shortDesc: "Hair growth vitamins with biotin",
      description: "Hair growth vitamins with biotin",
      benefits: "Promotes hair growth, Strengthens from within",
      usage: "Take 2 capsules daily",
      warnings: "Consult doctor if pregnant"
    },
    te: {
      shortDesc: "Hair growth vitamins with biotin",
      description: "Hair growth vitamins with biotin",
      benefits: "Promotes hair growth, Strengthens from within",
      usage: "Take 2 capsules daily",
      warnings: "Consult doctor if pregnant"
    },
    bn: {
      shortDesc: "Hair growth vitamins with biotin",
      description: "Hair growth vitamins with biotin",
      benefits: "Promotes hair growth, Strengthens from within",
      usage: "Take 2 capsules daily",
      warnings: "Consult doctor if pregnant"
    },
    mr: {
      shortDesc: "Hair growth vitamins with biotin",
      description: "Hair growth vitamins with biotin",
      benefits: "Promotes hair growth, Strengthens from within",
      usage: "Take 2 capsules daily",
      warnings: "Consult doctor if pregnant"
    },
    gu: {
      shortDesc: "Hair growth vitamins with biotin",
      description: "Hair growth vitamins with biotin",
      benefits: "Promotes hair growth, Strengthens from within",
      usage: "Take 2 capsules daily",
      warnings: "Consult doctor if pregnant"
    },
    kn: {
      shortDesc: "Hair growth vitamins with biotin",
      description: "Hair growth vitamins with biotin",
      benefits: "Promotes hair growth, Strengthens from within",
      usage: "Take 2 capsules daily",
      warnings: "Consult doctor if pregnant"
    },
    ml: {
      shortDesc: "Hair growth vitamins with biotin",
      description: "Hair growth vitamins with biotin",
      benefits: "Promotes hair growth, Strengthens from within",
      usage: "Take 2 capsules daily",
      warnings: "Consult doctor if pregnant"
    },
    pa: {
      shortDesc: "Hair growth vitamins with biotin",
      description: "Hair growth vitamins with biotin",
      benefits: "Promotes hair growth, Strengthens from within",
      usage: "Take 2 capsules daily",
      warnings: "Consult doctor if pregnant"
    },
    or: {
      shortDesc: "Hair growth vitamins with biotin",
      description: "Hair growth vitamins with biotin",
      benefits: "Promotes hair growth, Strengthens from within",
      usage: "Take 2 capsules daily",
      warnings: "Consult doctor if pregnant"
    },
    as: {
      shortDesc: "Hair growth vitamins with biotin",
      description: "Hair growth vitamins with biotin",
      benefits: "Promotes hair growth, Strengthens from within",
      usage: "Take 2 capsules daily",
      warnings: "Consult doctor if pregnant"
    },
    ur: {
      shortDesc: "Hair growth vitamins with biotin",
      description: "Hair growth vitamins with biotin",
      benefits: "Promotes hair growth, Strengthens from within",
      usage: "Take 2 capsules daily",
      warnings: "Consult doctor if pregnant"
    }
  },
  "MEN016": {
    en: {
      shortDesc: "Exfoliating scalp scrub",
      description: "Exfoliating scalp scrub",
      benefits: "Exfoliates scalp, Removes dead skin",
      usage: "Use once weekly before shampooing",
      warnings: "For external use only"
    },
    hi: {
      shortDesc: "Exfoliating scalp scrub",
      description: "Exfoliating scalp scrub",
      benefits: "Exfoliates scalp, Removes dead skin",
      usage: "Use once weekly before shampooing",
      warnings: "For external use only"
    },
    ta: {
      shortDesc: "Exfoliating scalp scrub",
      description: "Exfoliating scalp scrub",
      benefits: "Exfoliates scalp, Removes dead skin",
      usage: "Use once weekly before shampooing",
      warnings: "For external use only"
    },
    te: {
      shortDesc: "Exfoliating scalp scrub",
      description: "Exfoliating scalp scrub",
      benefits: "Exfoliates scalp, Removes dead skin",
      usage: "Use once weekly before shampooing",
      warnings: "For external use only"
    },
    bn: {
      shortDesc: "Exfoliating scalp scrub",
      description: "Exfoliating scalp scrub",
      benefits: "Exfoliates scalp, Removes dead skin",
      usage: "Use once weekly before shampooing",
      warnings: "For external use only"
    },
    mr: {
      shortDesc: "Exfoliating scalp scrub",
      description: "Exfoliating scalp scrub",
      benefits: "Exfoliates scalp, Removes dead skin",
      usage: "Use once weekly before shampooing",
      warnings: "For external use only"
    },
    gu: {
      shortDesc: "Exfoliating scalp scrub",
      description: "Exfoliating scalp scrub",
      benefits: "Exfoliates scalp, Removes dead skin",
      usage: "Use once weekly before shampooing",
      warnings: "For external use only"
    },
    kn: {
      shortDesc: "Exfoliating scalp scrub",
      description: "Exfoliating scalp scrub",
      benefits: "Exfoliates scalp, Removes dead skin",
      usage: "Use once weekly before shampooing",
      warnings: "For external use only"
    },
    ml: {
      shortDesc: "Exfoliating scalp scrub",
      description: "Exfoliating scalp scrub",
      benefits: "Exfoliates scalp, Removes dead skin",
      usage: "Use once weekly before shampooing",
      warnings: "For external use only"
    },
    pa: {
      shortDesc: "Exfoliating scalp scrub",
      description: "Exfoliating scalp scrub",
      benefits: "Exfoliates scalp, Removes dead skin",
      usage: "Use once weekly before shampooing",
      warnings: "For external use only"
    },
    or: {
      shortDesc: "Exfoliating scalp scrub",
      description: "Exfoliating scalp scrub",
      benefits: "Exfoliates scalp, Removes dead skin",
      usage: "Use once weekly before shampooing",
      warnings: "For external use only"
    },
    as: {
      shortDesc: "Exfoliating scalp scrub",
      description: "Exfoliating scalp scrub",
      benefits: "Exfoliates scalp, Removes dead skin",
      usage: "Use once weekly before shampooing",
      warnings: "For external use only"
    },
    ur: {
      shortDesc: "Exfoliating scalp scrub",
      description: "Exfoliating scalp scrub",
      benefits: "Exfoliates scalp, Removes dead skin",
      usage: "Use once weekly before shampooing",
      warnings: "For external use only"
    }
  },
  "MEN017": {
    en: {
      shortDesc: "Styling balm for beard control",
      description: "Styling balm for beard control",
      benefits: "Styles beard, Conditions",
      usage: "Rub small amount between palms, apply to beard",
      warnings: "For external use only"
    },
    hi: {
      shortDesc: "Styling balm for beard control",
      description: "Styling balm for beard control",
      benefits: "Styles beard, Conditions",
      usage: "Rub small amount between palms, apply to beard",
      warnings: "For external use only"
    },
    ta: {
      shortDesc: "Styling balm for beard control",
      description: "Styling balm for beard control",
      benefits: "Styles beard, Conditions",
      usage: "Rub small amount between palms, apply to beard",
      warnings: "For external use only"
    },
    te: {
      shortDesc: "Styling balm for beard control",
      description: "Styling balm for beard control",
      benefits: "Styles beard, Conditions",
      usage: "Rub small amount between palms, apply to beard",
      warnings: "For external use only"
    },
    bn: {
      shortDesc: "Styling balm for beard control",
      description: "Styling balm for beard control",
      benefits: "Styles beard, Conditions",
      usage: "Rub small amount between palms, apply to beard",
      warnings: "For external use only"
    },
    mr: {
      shortDesc: "Styling balm for beard control",
      description: "Styling balm for beard control",
      benefits: "Styles beard, Conditions",
      usage: "Rub small amount between palms, apply to beard",
      warnings: "For external use only"
    },
    gu: {
      shortDesc: "Styling balm for beard control",
      description: "Styling balm for beard control",
      benefits: "Styles beard, Conditions",
      usage: "Rub small amount between palms, apply to beard",
      warnings: "For external use only"
    },
    kn: {
      shortDesc: "Styling balm for beard control",
      description: "Styling balm for beard control",
      benefits: "Styles beard, Conditions",
      usage: "Rub small amount between palms, apply to beard",
      warnings: "For external use only"
    },
    ml: {
      shortDesc: "Styling balm for beard control",
      description: "Styling balm for beard control",
      benefits: "Styles beard, Conditions",
      usage: "Rub small amount between palms, apply to beard",
      warnings: "For external use only"
    },
    pa: {
      shortDesc: "Styling balm for beard control",
      description: "Styling balm for beard control",
      benefits: "Styles beard, Conditions",
      usage: "Rub small amount between palms, apply to beard",
      warnings: "For external use only"
    },
    or: {
      shortDesc: "Styling balm for beard control",
      description: "Styling balm for beard control",
      benefits: "Styles beard, Conditions",
      usage: "Rub small amount between palms, apply to beard",
      warnings: "For external use only"
    },
    as: {
      shortDesc: "Styling balm for beard control",
      description: "Styling balm for beard control",
      benefits: "Styles beard, Conditions",
      usage: "Rub small amount between palms, apply to beard",
      warnings: "For external use only"
    },
    ur: {
      shortDesc: "Styling balm for beard control",
      description: "Styling balm for beard control",
      benefits: "Styles beard, Conditions",
      usage: "Rub small amount between palms, apply to beard",
      warnings: "For external use only"
    }
  },
  "MEN018": {
    en: {
      shortDesc: "Gentle beard cleanser",
      description: "Gentle beard cleanser",
      benefits: "Cleanses beard, Softens hair",
      usage: "Apply to wet beard, massage, rinse",
      warnings: "Avoid contact with eyes"
    },
    hi: {
      shortDesc: "Gentle beard cleanser",
      description: "Gentle beard cleanser",
      benefits: "Cleanses beard, Softens hair",
      usage: "Apply to wet beard, massage, rinse",
      warnings: "Avoid contact with eyes"
    },
    ta: {
      shortDesc: "Gentle beard cleanser",
      description: "Gentle beard cleanser",
      benefits: "Cleanses beard, Softens hair",
      usage: "Apply to wet beard, massage, rinse",
      warnings: "Avoid contact with eyes"
    },
    te: {
      shortDesc: "Gentle beard cleanser",
      description: "Gentle beard cleanser",
      benefits: "Cleanses beard, Softens hair",
      usage: "Apply to wet beard, massage, rinse",
      warnings: "Avoid contact with eyes"
    },
    bn: {
      shortDesc: "Gentle beard cleanser",
      description: "Gentle beard cleanser",
      benefits: "Cleanses beard, Softens hair",
      usage: "Apply to wet beard, massage, rinse",
      warnings: "Avoid contact with eyes"
    },
    mr: {
      shortDesc: "Gentle beard cleanser",
      description: "Gentle beard cleanser",
      benefits: "Cleanses beard, Softens hair",
      usage: "Apply to wet beard, massage, rinse",
      warnings: "Avoid contact with eyes"
    },
    gu: {
      shortDesc: "Gentle beard cleanser",
      description: "Gentle beard cleanser",
      benefits: "Cleanses beard, Softens hair",
      usage: "Apply to wet beard, massage, rinse",
      warnings: "Avoid contact with eyes"
    },
    kn: {
      shortDesc: "Gentle beard cleanser",
      description: "Gentle beard cleanser",
      benefits: "Cleanses beard, Softens hair",
      usage: "Apply to wet beard, massage, rinse",
      warnings: "Avoid contact with eyes"
    },
    ml: {
      shortDesc: "Gentle beard cleanser",
      description: "Gentle beard cleanser",
      benefits: "Cleanses beard, Softens hair",
      usage: "Apply to wet beard, massage, rinse",
      warnings: "Avoid contact with eyes"
    },
    pa: {
      shortDesc: "Gentle beard cleanser",
      description: "Gentle beard cleanser",
      benefits: "Cleanses beard, Softens hair",
      usage: "Apply to wet beard, massage, rinse",
      warnings: "Avoid contact with eyes"
    },
    or: {
      shortDesc: "Gentle beard cleanser",
      description: "Gentle beard cleanser",
      benefits: "Cleanses beard, Softens hair",
      usage: "Apply to wet beard, massage, rinse",
      warnings: "Avoid contact with eyes"
    },
    as: {
      shortDesc: "Gentle beard cleanser",
      description: "Gentle beard cleanser",
      benefits: "Cleanses beard, Softens hair",
      usage: "Apply to wet beard, massage, rinse",
      warnings: "Avoid contact with eyes"
    },
    ur: {
      shortDesc: "Gentle beard cleanser",
      description: "Gentle beard cleanser",
      benefits: "Cleanses beard, Softens hair",
      usage: "Apply to wet beard, massage, rinse",
      warnings: "Avoid contact with eyes"
    }
  },
  "MEN019": {
    en: {
      shortDesc: "Lubricating oil for beard trimmers",
      description: "Lubricating oil for beard trimmers",
      benefits: "Extends blade life, Smooth trimming",
      usage: "Apply 2-3 drops to blades after each use",
      warnings: "Keep away from children"
    },
    hi: {
      shortDesc: "Lubricating oil for beard trimmers",
      description: "Lubricating oil for beard trimmers",
      benefits: "Extends blade life, Smooth trimming",
      usage: "Apply 2-3 drops to blades after each use",
      warnings: "Keep away from children"
    },
    ta: {
      shortDesc: "Lubricating oil for beard trimmers",
      description: "Lubricating oil for beard trimmers",
      benefits: "Extends blade life, Smooth trimming",
      usage: "Apply 2-3 drops to blades after each use",
      warnings: "Keep away from children"
    },
    te: {
      shortDesc: "Lubricating oil for beard trimmers",
      description: "Lubricating oil for beard trimmers",
      benefits: "Extends blade life, Smooth trimming",
      usage: "Apply 2-3 drops to blades after each use",
      warnings: "Keep away from children"
    },
    bn: {
      shortDesc: "Lubricating oil for beard trimmers",
      description: "Lubricating oil for beard trimmers",
      benefits: "Extends blade life, Smooth trimming",
      usage: "Apply 2-3 drops to blades after each use",
      warnings: "Keep away from children"
    },
    mr: {
      shortDesc: "Lubricating oil for beard trimmers",
      description: "Lubricating oil for beard trimmers",
      benefits: "Extends blade life, Smooth trimming",
      usage: "Apply 2-3 drops to blades after each use",
      warnings: "Keep away from children"
    },
    gu: {
      shortDesc: "Lubricating oil for beard trimmers",
      description: "Lubricating oil for beard trimmers",
      benefits: "Extends blade life, Smooth trimming",
      usage: "Apply 2-3 drops to blades after each use",
      warnings: "Keep away from children"
    },
    kn: {
      shortDesc: "Lubricating oil for beard trimmers",
      description: "Lubricating oil for beard trimmers",
      benefits: "Extends blade life, Smooth trimming",
      usage: "Apply 2-3 drops to blades after each use",
      warnings: "Keep away from children"
    },
    ml: {
      shortDesc: "Lubricating oil for beard trimmers",
      description: "Lubricating oil for beard trimmers",
      benefits: "Extends blade life, Smooth trimming",
      usage: "Apply 2-3 drops to blades after each use",
      warnings: "Keep away from children"
    },
    pa: {
      shortDesc: "Lubricating oil for beard trimmers",
      description: "Lubricating oil for beard trimmers",
      benefits: "Extends blade life, Smooth trimming",
      usage: "Apply 2-3 drops to blades after each use",
      warnings: "Keep away from children"
    },
    or: {
      shortDesc: "Lubricating oil for beard trimmers",
      description: "Lubricating oil for beard trimmers",
      benefits: "Extends blade life, Smooth trimming",
      usage: "Apply 2-3 drops to blades after each use",
      warnings: "Keep away from children"
    },
    as: {
      shortDesc: "Lubricating oil for beard trimmers",
      description: "Lubricating oil for beard trimmers",
      benefits: "Extends blade life, Smooth trimming",
      usage: "Apply 2-3 drops to blades after each use",
      warnings: "Keep away from children"
    },
    ur: {
      shortDesc: "Lubricating oil for beard trimmers",
      description: "Lubricating oil for beard trimmers",
      benefits: "Extends blade life, Smooth trimming",
      usage: "Apply 2-3 drops to blades after each use",
      warnings: "Keep away from children"
    }
  },
  "MEN020": {
    en: {
      shortDesc: "Natural energy supplement for men",
      description: "Natural energy supplement for men",
      benefits: "Increases energy, Reduces fatigue",
      usage: "Take 1 capsule in morning",
      warnings: "Do not exceed recommended dose"
    },
    hi: {
      shortDesc: "Natural energy supplement for men",
      description: "Natural energy supplement for men",
      benefits: "Increases energy, Reduces fatigue",
      usage: "Take 1 capsule in morning",
      warnings: "Do not exceed recommended dose"
    },
    ta: {
      shortDesc: "Natural energy supplement for men",
      description: "Natural energy supplement for men",
      benefits: "Increases energy, Reduces fatigue",
      usage: "Take 1 capsule in morning",
      warnings: "Do not exceed recommended dose"
    },
    te: {
      shortDesc: "Natural energy supplement for men",
      description: "Natural energy supplement for men",
      benefits: "Increases energy, Reduces fatigue",
      usage: "Take 1 capsule in morning",
      warnings: "Do not exceed recommended dose"
    },
    bn: {
      shortDesc: "Natural energy supplement for men",
      description: "Natural energy supplement for men",
      benefits: "Increases energy, Reduces fatigue",
      usage: "Take 1 capsule in morning",
      warnings: "Do not exceed recommended dose"
    },
    mr: {
      shortDesc: "Natural energy supplement for men",
      description: "Natural energy supplement for men",
      benefits: "Increases energy, Reduces fatigue",
      usage: "Take 1 capsule in morning",
      warnings: "Do not exceed recommended dose"
    },
    gu: {
      shortDesc: "Natural energy supplement for men",
      description: "Natural energy supplement for men",
      benefits: "Increases energy, Reduces fatigue",
      usage: "Take 1 capsule in morning",
      warnings: "Do not exceed recommended dose"
    },
    kn: {
      shortDesc: "Natural energy supplement for men",
      description: "Natural energy supplement for men",
      benefits: "Increases energy, Reduces fatigue",
      usage: "Take 1 capsule in morning",
      warnings: "Do not exceed recommended dose"
    },
    ml: {
      shortDesc: "Natural energy supplement for men",
      description: "Natural energy supplement for men",
      benefits: "Increases energy, Reduces fatigue",
      usage: "Take 1 capsule in morning",
      warnings: "Do not exceed recommended dose"
    },
    pa: {
      shortDesc: "Natural energy supplement for men",
      description: "Natural energy supplement for men",
      benefits: "Increases energy, Reduces fatigue",
      usage: "Take 1 capsule in morning",
      warnings: "Do not exceed recommended dose"
    },
    or: {
      shortDesc: "Natural energy supplement for men",
      description: "Natural energy supplement for men",
      benefits: "Increases energy, Reduces fatigue",
      usage: "Take 1 capsule in morning",
      warnings: "Do not exceed recommended dose"
    },
    as: {
      shortDesc: "Natural energy supplement for men",
      description: "Natural energy supplement for men",
      benefits: "Increases energy, Reduces fatigue",
      usage: "Take 1 capsule in morning",
      warnings: "Do not exceed recommended dose"
    },
    ur: {
      shortDesc: "Natural energy supplement for men",
      description: "Natural energy supplement for men",
      benefits: "Increases energy, Reduces fatigue",
      usage: "Take 1 capsule in morning",
      warnings: "Do not exceed recommended dose"
    }
  },
  "MEN021": {
    en: {
      shortDesc: "Stamina enhancement supplement",
      description: "Stamina enhancement supplement",
      benefits: "Enhances stamina, Boosts performance",
      usage: "Take 1 capsule daily",
      warnings: "Not for individuals under 18"
    },
    hi: {
      shortDesc: "Stamina enhancement supplement",
      description: "Stamina enhancement supplement",
      benefits: "Enhances stamina, Boosts performance",
      usage: "Take 1 capsule daily",
      warnings: "Not for individuals under 18"
    },
    ta: {
      shortDesc: "Stamina enhancement supplement",
      description: "Stamina enhancement supplement",
      benefits: "Enhances stamina, Boosts performance",
      usage: "Take 1 capsule daily",
      warnings: "Not for individuals under 18"
    },
    te: {
      shortDesc: "Stamina enhancement supplement",
      description: "Stamina enhancement supplement",
      benefits: "Enhances stamina, Boosts performance",
      usage: "Take 1 capsule daily",
      warnings: "Not for individuals under 18"
    },
    bn: {
      shortDesc: "Stamina enhancement supplement",
      description: "Stamina enhancement supplement",
      benefits: "Enhances stamina, Boosts performance",
      usage: "Take 1 capsule daily",
      warnings: "Not for individuals under 18"
    },
    mr: {
      shortDesc: "Stamina enhancement supplement",
      description: "Stamina enhancement supplement",
      benefits: "Enhances stamina, Boosts performance",
      usage: "Take 1 capsule daily",
      warnings: "Not for individuals under 18"
    },
    gu: {
      shortDesc: "Stamina enhancement supplement",
      description: "Stamina enhancement supplement",
      benefits: "Enhances stamina, Boosts performance",
      usage: "Take 1 capsule daily",
      warnings: "Not for individuals under 18"
    },
    kn: {
      shortDesc: "Stamina enhancement supplement",
      description: "Stamina enhancement supplement",
      benefits: "Enhances stamina, Boosts performance",
      usage: "Take 1 capsule daily",
      warnings: "Not for individuals under 18"
    },
    ml: {
      shortDesc: "Stamina enhancement supplement",
      description: "Stamina enhancement supplement",
      benefits: "Enhances stamina, Boosts performance",
      usage: "Take 1 capsule daily",
      warnings: "Not for individuals under 18"
    },
    pa: {
      shortDesc: "Stamina enhancement supplement",
      description: "Stamina enhancement supplement",
      benefits: "Enhances stamina, Boosts performance",
      usage: "Take 1 capsule daily",
      warnings: "Not for individuals under 18"
    },
    or: {
      shortDesc: "Stamina enhancement supplement",
      description: "Stamina enhancement supplement",
      benefits: "Enhances stamina, Boosts performance",
      usage: "Take 1 capsule daily",
      warnings: "Not for individuals under 18"
    },
    as: {
      shortDesc: "Stamina enhancement supplement",
      description: "Stamina enhancement supplement",
      benefits: "Enhances stamina, Boosts performance",
      usage: "Take 1 capsule daily",
      warnings: "Not for individuals under 18"
    },
    ur: {
      shortDesc: "Stamina enhancement supplement",
      description: "Stamina enhancement supplement",
      benefits: "Enhances stamina, Boosts performance",
      usage: "Take 1 capsule daily",
      warnings: "Not for individuals under 18"
    }
  },
  "MEN022": {
    en: {
      shortDesc: "Post-workout recovery supplement",
      description: "Post-workout recovery supplement",
      benefits: "Faster recovery, Reduces soreness",
      usage: "Take 2 capsules after workout",
      warnings: "Keep out of reach of children"
    },
    hi: {
      shortDesc: "Post-workout recovery supplement",
      description: "Post-workout recovery supplement",
      benefits: "Faster recovery, Reduces soreness",
      usage: "Take 2 capsules after workout",
      warnings: "Keep out of reach of children"
    },
    ta: {
      shortDesc: "Post-workout recovery supplement",
      description: "Post-workout recovery supplement",
      benefits: "Faster recovery, Reduces soreness",
      usage: "Take 2 capsules after workout",
      warnings: "Keep out of reach of children"
    },
    te: {
      shortDesc: "Post-workout recovery supplement",
      description: "Post-workout recovery supplement",
      benefits: "Faster recovery, Reduces soreness",
      usage: "Take 2 capsules after workout",
      warnings: "Keep out of reach of children"
    },
    bn: {
      shortDesc: "Post-workout recovery supplement",
      description: "Post-workout recovery supplement",
      benefits: "Faster recovery, Reduces soreness",
      usage: "Take 2 capsules after workout",
      warnings: "Keep out of reach of children"
    },
    mr: {
      shortDesc: "Post-workout recovery supplement",
      description: "Post-workout recovery supplement",
      benefits: "Faster recovery, Reduces soreness",
      usage: "Take 2 capsules after workout",
      warnings: "Keep out of reach of children"
    },
    gu: {
      shortDesc: "Post-workout recovery supplement",
      description: "Post-workout recovery supplement",
      benefits: "Faster recovery, Reduces soreness",
      usage: "Take 2 capsules after workout",
      warnings: "Keep out of reach of children"
    },
    kn: {
      shortDesc: "Post-workout recovery supplement",
      description: "Post-workout recovery supplement",
      benefits: "Faster recovery, Reduces soreness",
      usage: "Take 2 capsules after workout",
      warnings: "Keep out of reach of children"
    },
    ml: {
      shortDesc: "Post-workout recovery supplement",
      description: "Post-workout recovery supplement",
      benefits: "Faster recovery, Reduces soreness",
      usage: "Take 2 capsules after workout",
      warnings: "Keep out of reach of children"
    },
    pa: {
      shortDesc: "Post-workout recovery supplement",
      description: "Post-workout recovery supplement",
      benefits: "Faster recovery, Reduces soreness",
      usage: "Take 2 capsules after workout",
      warnings: "Keep out of reach of children"
    },
    or: {
      shortDesc: "Post-workout recovery supplement",
      description: "Post-workout recovery supplement",
      benefits: "Faster recovery, Reduces soreness",
      usage: "Take 2 capsules after workout",
      warnings: "Keep out of reach of children"
    },
    as: {
      shortDesc: "Post-workout recovery supplement",
      description: "Post-workout recovery supplement",
      benefits: "Faster recovery, Reduces soreness",
      usage: "Take 2 capsules after workout",
      warnings: "Keep out of reach of children"
    },
    ur: {
      shortDesc: "Post-workout recovery supplement",
      description: "Post-workout recovery supplement",
      benefits: "Faster recovery, Reduces soreness",
      usage: "Take 2 capsules after workout",
      warnings: "Keep out of reach of children"
    }
  },
  "MEN024": {
    en: {
      shortDesc: "Urinary tract health supplement",
      description: "Urinary tract health supplement",
      benefits: "Supports urinary health, Natural ingredients",
      usage: "Take 1 capsule twice daily",
      warnings: "Consult doctor if symptoms persist"
    },
    hi: {
      shortDesc: "Urinary tract health supplement",
      description: "Urinary tract health supplement",
      benefits: "Supports urinary health, Natural ingredients",
      usage: "Take 1 capsule twice daily",
      warnings: "Consult doctor if symptoms persist"
    },
    ta: {
      shortDesc: "Urinary tract health supplement",
      description: "Urinary tract health supplement",
      benefits: "Supports urinary health, Natural ingredients",
      usage: "Take 1 capsule twice daily",
      warnings: "Consult doctor if symptoms persist"
    },
    te: {
      shortDesc: "Urinary tract health supplement",
      description: "Urinary tract health supplement",
      benefits: "Supports urinary health, Natural ingredients",
      usage: "Take 1 capsule twice daily",
      warnings: "Consult doctor if symptoms persist"
    },
    bn: {
      shortDesc: "Urinary tract health supplement",
      description: "Urinary tract health supplement",
      benefits: "Supports urinary health, Natural ingredients",
      usage: "Take 1 capsule twice daily",
      warnings: "Consult doctor if symptoms persist"
    },
    mr: {
      shortDesc: "Urinary tract health supplement",
      description: "Urinary tract health supplement",
      benefits: "Supports urinary health, Natural ingredients",
      usage: "Take 1 capsule twice daily",
      warnings: "Consult doctor if symptoms persist"
    },
    gu: {
      shortDesc: "Urinary tract health supplement",
      description: "Urinary tract health supplement",
      benefits: "Supports urinary health, Natural ingredients",
      usage: "Take 1 capsule twice daily",
      warnings: "Consult doctor if symptoms persist"
    },
    kn: {
      shortDesc: "Urinary tract health supplement",
      description: "Urinary tract health supplement",
      benefits: "Supports urinary health, Natural ingredients",
      usage: "Take 1 capsule twice daily",
      warnings: "Consult doctor if symptoms persist"
    },
    ml: {
      shortDesc: "Urinary tract health supplement",
      description: "Urinary tract health supplement",
      benefits: "Supports urinary health, Natural ingredients",
      usage: "Take 1 capsule twice daily",
      warnings: "Consult doctor if symptoms persist"
    },
    pa: {
      shortDesc: "Urinary tract health supplement",
      description: "Urinary tract health supplement",
      benefits: "Supports urinary health, Natural ingredients",
      usage: "Take 1 capsule twice daily",
      warnings: "Consult doctor if symptoms persist"
    },
    or: {
      shortDesc: "Urinary tract health supplement",
      description: "Urinary tract health supplement",
      benefits: "Supports urinary health, Natural ingredients",
      usage: "Take 1 capsule twice daily",
      warnings: "Consult doctor if symptoms persist"
    },
    as: {
      shortDesc: "Urinary tract health supplement",
      description: "Urinary tract health supplement",
      benefits: "Supports urinary health, Natural ingredients",
      usage: "Take 1 capsule twice daily",
      warnings: "Consult doctor if symptoms persist"
    },
    ur: {
      shortDesc: "Urinary tract health supplement",
      description: "Urinary tract health supplement",
      benefits: "Supports urinary health, Natural ingredients",
      usage: "Take 1 capsule twice daily",
      warnings: "Consult doctor if symptoms persist"
    }
  },
  "MEN025": {
    en: {
      shortDesc: "Complete men's wellness supplement",
      description: "Complete men's wellness supplement",
      benefits: "Overall wellness, Supports vitality",
      usage: "Take 2 tablets daily",
      warnings: "Store in cool, dry place"
    },
    hi: {
      shortDesc: "Complete men's wellness supplement",
      description: "Complete men's wellness supplement",
      benefits: "Overall wellness, Supports vitality",
      usage: "Take 2 tablets daily",
      warnings: "Store in cool, dry place"
    },
    ta: {
      shortDesc: "Complete men's wellness supplement",
      description: "Complete men's wellness supplement",
      benefits: "Overall wellness, Supports vitality",
      usage: "Take 2 tablets daily",
      warnings: "Store in cool, dry place"
    },
    te: {
      shortDesc: "Complete men's wellness supplement",
      description: "Complete men's wellness supplement",
      benefits: "Overall wellness, Supports vitality",
      usage: "Take 2 tablets daily",
      warnings: "Store in cool, dry place"
    },
    bn: {
      shortDesc: "Complete men's wellness supplement",
      description: "Complete men's wellness supplement",
      benefits: "Overall wellness, Supports vitality",
      usage: "Take 2 tablets daily",
      warnings: "Store in cool, dry place"
    },
    mr: {
      shortDesc: "Complete men's wellness supplement",
      description: "Complete men's wellness supplement",
      benefits: "Overall wellness, Supports vitality",
      usage: "Take 2 tablets daily",
      warnings: "Store in cool, dry place"
    },
    gu: {
      shortDesc: "Complete men's wellness supplement",
      description: "Complete men's wellness supplement",
      benefits: "Overall wellness, Supports vitality",
      usage: "Take 2 tablets daily",
      warnings: "Store in cool, dry place"
    },
    kn: {
      shortDesc: "Complete men's wellness supplement",
      description: "Complete men's wellness supplement",
      benefits: "Overall wellness, Supports vitality",
      usage: "Take 2 tablets daily",
      warnings: "Store in cool, dry place"
    },
    ml: {
      shortDesc: "Complete men's wellness supplement",
      description: "Complete men's wellness supplement",
      benefits: "Overall wellness, Supports vitality",
      usage: "Take 2 tablets daily",
      warnings: "Store in cool, dry place"
    },
    pa: {
      shortDesc: "Complete men's wellness supplement",
      description: "Complete men's wellness supplement",
      benefits: "Overall wellness, Supports vitality",
      usage: "Take 2 tablets daily",
      warnings: "Store in cool, dry place"
    },
    or: {
      shortDesc: "Complete men's wellness supplement",
      description: "Complete men's wellness supplement",
      benefits: "Overall wellness, Supports vitality",
      usage: "Take 2 tablets daily",
      warnings: "Store in cool, dry place"
    },
    as: {
      shortDesc: "Complete men's wellness supplement",
      description: "Complete men's wellness supplement",
      benefits: "Overall wellness, Supports vitality",
      usage: "Take 2 tablets daily",
      warnings: "Store in cool, dry place"
    },
    ur: {
      shortDesc: "Complete men's wellness supplement",
      description: "Complete men's wellness supplement",
      benefits: "Overall wellness, Supports vitality",
      usage: "Take 2 tablets daily",
      warnings: "Store in cool, dry place"
    }
  },
  "MEN026": {
    en: {
      shortDesc: "Joint health supplement for men",
      description: "Joint health supplement for men",
      benefits: "Supports joints, Reduces stiffness",
      usage: "Take 1 tablet daily",
      warnings: "Consult doctor if on blood thinners"
    },
    hi: {
      shortDesc: "Joint health supplement for men",
      description: "Joint health supplement for men",
      benefits: "Supports joints, Reduces stiffness",
      usage: "Take 1 tablet daily",
      warnings: "Consult doctor if on blood thinners"
    },
    ta: {
      shortDesc: "Joint health supplement for men",
      description: "Joint health supplement for men",
      benefits: "Supports joints, Reduces stiffness",
      usage: "Take 1 tablet daily",
      warnings: "Consult doctor if on blood thinners"
    },
    te: {
      shortDesc: "Joint health supplement for men",
      description: "Joint health supplement for men",
      benefits: "Supports joints, Reduces stiffness",
      usage: "Take 1 tablet daily",
      warnings: "Consult doctor if on blood thinners"
    },
    bn: {
      shortDesc: "Joint health supplement for men",
      description: "Joint health supplement for men",
      benefits: "Supports joints, Reduces stiffness",
      usage: "Take 1 tablet daily",
      warnings: "Consult doctor if on blood thinners"
    },
    mr: {
      shortDesc: "Joint health supplement for men",
      description: "Joint health supplement for men",
      benefits: "Supports joints, Reduces stiffness",
      usage: "Take 1 tablet daily",
      warnings: "Consult doctor if on blood thinners"
    },
    gu: {
      shortDesc: "Joint health supplement for men",
      description: "Joint health supplement for men",
      benefits: "Supports joints, Reduces stiffness",
      usage: "Take 1 tablet daily",
      warnings: "Consult doctor if on blood thinners"
    },
    kn: {
      shortDesc: "Joint health supplement for men",
      description: "Joint health supplement for men",
      benefits: "Supports joints, Reduces stiffness",
      usage: "Take 1 tablet daily",
      warnings: "Consult doctor if on blood thinners"
    },
    ml: {
      shortDesc: "Joint health supplement for men",
      description: "Joint health supplement for men",
      benefits: "Supports joints, Reduces stiffness",
      usage: "Take 1 tablet daily",
      warnings: "Consult doctor if on blood thinners"
    },
    pa: {
      shortDesc: "Joint health supplement for men",
      description: "Joint health supplement for men",
      benefits: "Supports joints, Reduces stiffness",
      usage: "Take 1 tablet daily",
      warnings: "Consult doctor if on blood thinners"
    },
    or: {
      shortDesc: "Joint health supplement for men",
      description: "Joint health supplement for men",
      benefits: "Supports joints, Reduces stiffness",
      usage: "Take 1 tablet daily",
      warnings: "Consult doctor if on blood thinners"
    },
    as: {
      shortDesc: "Joint health supplement for men",
      description: "Joint health supplement for men",
      benefits: "Supports joints, Reduces stiffness",
      usage: "Take 1 tablet daily",
      warnings: "Consult doctor if on blood thinners"
    },
    ur: {
      shortDesc: "Joint health supplement for men",
      description: "Joint health supplement for men",
      benefits: "Supports joints, Reduces stiffness",
      usage: "Take 1 tablet daily",
      warnings: "Consult doctor if on blood thinners"
    }
  },
  "MEN027": {
    en: {
      shortDesc: "Vanilla flavored whey protein",
      description: "Vanilla flavored whey protein",
      benefits: "High protein, Great taste",
      usage: "Mix 1 scoop with milk or water",
      warnings: "Keep container tightly closed"
    },
    hi: {
      shortDesc: "Vanilla flavored whey protein",
      description: "Vanilla flavored whey protein",
      benefits: "High protein, Great taste",
      usage: "Mix 1 scoop with milk or water",
      warnings: "Keep container tightly closed"
    },
    ta: {
      shortDesc: "Vanilla flavored whey protein",
      description: "Vanilla flavored whey protein",
      benefits: "High protein, Great taste",
      usage: "Mix 1 scoop with milk or water",
      warnings: "Keep container tightly closed"
    },
    te: {
      shortDesc: "Vanilla flavored whey protein",
      description: "Vanilla flavored whey protein",
      benefits: "High protein, Great taste",
      usage: "Mix 1 scoop with milk or water",
      warnings: "Keep container tightly closed"
    },
    bn: {
      shortDesc: "Vanilla flavored whey protein",
      description: "Vanilla flavored whey protein",
      benefits: "High protein, Great taste",
      usage: "Mix 1 scoop with milk or water",
      warnings: "Keep container tightly closed"
    },
    mr: {
      shortDesc: "Vanilla flavored whey protein",
      description: "Vanilla flavored whey protein",
      benefits: "High protein, Great taste",
      usage: "Mix 1 scoop with milk or water",
      warnings: "Keep container tightly closed"
    },
    gu: {
      shortDesc: "Vanilla flavored whey protein",
      description: "Vanilla flavored whey protein",
      benefits: "High protein, Great taste",
      usage: "Mix 1 scoop with milk or water",
      warnings: "Keep container tightly closed"
    },
    kn: {
      shortDesc: "Vanilla flavored whey protein",
      description: "Vanilla flavored whey protein",
      benefits: "High protein, Great taste",
      usage: "Mix 1 scoop with milk or water",
      warnings: "Keep container tightly closed"
    },
    ml: {
      shortDesc: "Vanilla flavored whey protein",
      description: "Vanilla flavored whey protein",
      benefits: "High protein, Great taste",
      usage: "Mix 1 scoop with milk or water",
      warnings: "Keep container tightly closed"
    },
    pa: {
      shortDesc: "Vanilla flavored whey protein",
      description: "Vanilla flavored whey protein",
      benefits: "High protein, Great taste",
      usage: "Mix 1 scoop with milk or water",
      warnings: "Keep container tightly closed"
    },
    or: {
      shortDesc: "Vanilla flavored whey protein",
      description: "Vanilla flavored whey protein",
      benefits: "High protein, Great taste",
      usage: "Mix 1 scoop with milk or water",
      warnings: "Keep container tightly closed"
    },
    as: {
      shortDesc: "Vanilla flavored whey protein",
      description: "Vanilla flavored whey protein",
      benefits: "High protein, Great taste",
      usage: "Mix 1 scoop with milk or water",
      warnings: "Keep container tightly closed"
    },
    ur: {
      shortDesc: "Vanilla flavored whey protein",
      description: "Vanilla flavored whey protein",
      benefits: "High protein, Great taste",
      usage: "Mix 1 scoop with milk or water",
      warnings: "Keep container tightly closed"
    }
  },
  "MEN028": {
    en: {
      shortDesc: "Pre-workout energy booster",
      description: "Pre-workout energy booster",
      benefits: "Boosts energy, Enhances focus",
      usage: "Mix 1 scoop 30 minutes before workout",
      warnings: "Contains caffeine"
    },
    hi: {
      shortDesc: "Pre-workout energy booster",
      description: "Pre-workout energy booster",
      benefits: "Boosts energy, Enhances focus",
      usage: "Mix 1 scoop 30 minutes before workout",
      warnings: "Contains caffeine"
    },
    ta: {
      shortDesc: "Pre-workout energy booster",
      description: "Pre-workout energy booster",
      benefits: "Boosts energy, Enhances focus",
      usage: "Mix 1 scoop 30 minutes before workout",
      warnings: "Contains caffeine"
    },
    te: {
      shortDesc: "Pre-workout energy booster",
      description: "Pre-workout energy booster",
      benefits: "Boosts energy, Enhances focus",
      usage: "Mix 1 scoop 30 minutes before workout",
      warnings: "Contains caffeine"
    },
    bn: {
      shortDesc: "Pre-workout energy booster",
      description: "Pre-workout energy booster",
      benefits: "Boosts energy, Enhances focus",
      usage: "Mix 1 scoop 30 minutes before workout",
      warnings: "Contains caffeine"
    },
    mr: {
      shortDesc: "Pre-workout energy booster",
      description: "Pre-workout energy booster",
      benefits: "Boosts energy, Enhances focus",
      usage: "Mix 1 scoop 30 minutes before workout",
      warnings: "Contains caffeine"
    },
    gu: {
      shortDesc: "Pre-workout energy booster",
      description: "Pre-workout energy booster",
      benefits: "Boosts energy, Enhances focus",
      usage: "Mix 1 scoop 30 minutes before workout",
      warnings: "Contains caffeine"
    },
    kn: {
      shortDesc: "Pre-workout energy booster",
      description: "Pre-workout energy booster",
      benefits: "Boosts energy, Enhances focus",
      usage: "Mix 1 scoop 30 minutes before workout",
      warnings: "Contains caffeine"
    },
    ml: {
      shortDesc: "Pre-workout energy booster",
      description: "Pre-workout energy booster",
      benefits: "Boosts energy, Enhances focus",
      usage: "Mix 1 scoop 30 minutes before workout",
      warnings: "Contains caffeine"
    },
    pa: {
      shortDesc: "Pre-workout energy booster",
      description: "Pre-workout energy booster",
      benefits: "Boosts energy, Enhances focus",
      usage: "Mix 1 scoop 30 minutes before workout",
      warnings: "Contains caffeine"
    },
    or: {
      shortDesc: "Pre-workout energy booster",
      description: "Pre-workout energy booster",
      benefits: "Boosts energy, Enhances focus",
      usage: "Mix 1 scoop 30 minutes before workout",
      warnings: "Contains caffeine"
    },
    as: {
      shortDesc: "Pre-workout energy booster",
      description: "Pre-workout energy booster",
      benefits: "Boosts energy, Enhances focus",
      usage: "Mix 1 scoop 30 minutes before workout",
      warnings: "Contains caffeine"
    },
    ur: {
      shortDesc: "Pre-workout energy booster",
      description: "Pre-workout energy booster",
      benefits: "Boosts energy, Enhances focus",
      usage: "Mix 1 scoop 30 minutes before workout",
      warnings: "Contains caffeine"
    }
  },
  "MEN029": {
    en: {
      shortDesc: "Branch chain amino acids supplement",
      description: "Branch chain amino acids supplement",
      benefits: "Supports recovery, Reduces muscle breakdown",
      usage: "Mix 1 scoop during or after workout",
      warnings: "Store in cool place"
    },
    hi: {
      shortDesc: "Branch chain amino acids supplement",
      description: "Branch chain amino acids supplement",
      benefits: "Supports recovery, Reduces muscle breakdown",
      usage: "Mix 1 scoop during or after workout",
      warnings: "Store in cool place"
    },
    ta: {
      shortDesc: "Branch chain amino acids supplement",
      description: "Branch chain amino acids supplement",
      benefits: "Supports recovery, Reduces muscle breakdown",
      usage: "Mix 1 scoop during or after workout",
      warnings: "Store in cool place"
    },
    te: {
      shortDesc: "Branch chain amino acids supplement",
      description: "Branch chain amino acids supplement",
      benefits: "Supports recovery, Reduces muscle breakdown",
      usage: "Mix 1 scoop during or after workout",
      warnings: "Store in cool place"
    },
    bn: {
      shortDesc: "Branch chain amino acids supplement",
      description: "Branch chain amino acids supplement",
      benefits: "Supports recovery, Reduces muscle breakdown",
      usage: "Mix 1 scoop during or after workout",
      warnings: "Store in cool place"
    },
    mr: {
      shortDesc: "Branch chain amino acids supplement",
      description: "Branch chain amino acids supplement",
      benefits: "Supports recovery, Reduces muscle breakdown",
      usage: "Mix 1 scoop during or after workout",
      warnings: "Store in cool place"
    },
    gu: {
      shortDesc: "Branch chain amino acids supplement",
      description: "Branch chain amino acids supplement",
      benefits: "Supports recovery, Reduces muscle breakdown",
      usage: "Mix 1 scoop during or after workout",
      warnings: "Store in cool place"
    },
    kn: {
      shortDesc: "Branch chain amino acids supplement",
      description: "Branch chain amino acids supplement",
      benefits: "Supports recovery, Reduces muscle breakdown",
      usage: "Mix 1 scoop during or after workout",
      warnings: "Store in cool place"
    },
    ml: {
      shortDesc: "Branch chain amino acids supplement",
      description: "Branch chain amino acids supplement",
      benefits: "Supports recovery, Reduces muscle breakdown",
      usage: "Mix 1 scoop during or after workout",
      warnings: "Store in cool place"
    },
    pa: {
      shortDesc: "Branch chain amino acids supplement",
      description: "Branch chain amino acids supplement",
      benefits: "Supports recovery, Reduces muscle breakdown",
      usage: "Mix 1 scoop during or after workout",
      warnings: "Store in cool place"
    },
    or: {
      shortDesc: "Branch chain amino acids supplement",
      description: "Branch chain amino acids supplement",
      benefits: "Supports recovery, Reduces muscle breakdown",
      usage: "Mix 1 scoop during or after workout",
      warnings: "Store in cool place"
    },
    as: {
      shortDesc: "Branch chain amino acids supplement",
      description: "Branch chain amino acids supplement",
      benefits: "Supports recovery, Reduces muscle breakdown",
      usage: "Mix 1 scoop during or after workout",
      warnings: "Store in cool place"
    },
    ur: {
      shortDesc: "Branch chain amino acids supplement",
      description: "Branch chain amino acids supplement",
      benefits: "Supports recovery, Reduces muscle breakdown",
      usage: "Mix 1 scoop during or after workout",
      warnings: "Store in cool place"
    }
  },
  "MEN030": {
    en: {
      shortDesc: "Pure creatine for strength",
      description: "Pure creatine for strength",
      benefits: "Increases strength, Builds muscle",
      usage: "Mix 5g with water daily",
      warnings: "Drink plenty of water"
    },
    hi: {
      shortDesc: "Pure creatine for strength",
      description: "Pure creatine for strength",
      benefits: "Increases strength, Builds muscle",
      usage: "Mix 5g with water daily",
      warnings: "Drink plenty of water"
    },
    ta: {
      shortDesc: "Pure creatine for strength",
      description: "Pure creatine for strength",
      benefits: "Increases strength, Builds muscle",
      usage: "Mix 5g with water daily",
      warnings: "Drink plenty of water"
    },
    te: {
      shortDesc: "Pure creatine for strength",
      description: "Pure creatine for strength",
      benefits: "Increases strength, Builds muscle",
      usage: "Mix 5g with water daily",
      warnings: "Drink plenty of water"
    },
    bn: {
      shortDesc: "Pure creatine for strength",
      description: "Pure creatine for strength",
      benefits: "Increases strength, Builds muscle",
      usage: "Mix 5g with water daily",
      warnings: "Drink plenty of water"
    },
    mr: {
      shortDesc: "Pure creatine for strength",
      description: "Pure creatine for strength",
      benefits: "Increases strength, Builds muscle",
      usage: "Mix 5g with water daily",
      warnings: "Drink plenty of water"
    },
    gu: {
      shortDesc: "Pure creatine for strength",
      description: "Pure creatine for strength",
      benefits: "Increases strength, Builds muscle",
      usage: "Mix 5g with water daily",
      warnings: "Drink plenty of water"
    },
    kn: {
      shortDesc: "Pure creatine for strength",
      description: "Pure creatine for strength",
      benefits: "Increases strength, Builds muscle",
      usage: "Mix 5g with water daily",
      warnings: "Drink plenty of water"
    },
    ml: {
      shortDesc: "Pure creatine for strength",
      description: "Pure creatine for strength",
      benefits: "Increases strength, Builds muscle",
      usage: "Mix 5g with water daily",
      warnings: "Drink plenty of water"
    },
    pa: {
      shortDesc: "Pure creatine for strength",
      description: "Pure creatine for strength",
      benefits: "Increases strength, Builds muscle",
      usage: "Mix 5g with water daily",
      warnings: "Drink plenty of water"
    },
    or: {
      shortDesc: "Pure creatine for strength",
      description: "Pure creatine for strength",
      benefits: "Increases strength, Builds muscle",
      usage: "Mix 5g with water daily",
      warnings: "Drink plenty of water"
    },
    as: {
      shortDesc: "Pure creatine for strength",
      description: "Pure creatine for strength",
      benefits: "Increases strength, Builds muscle",
      usage: "Mix 5g with water daily",
      warnings: "Drink plenty of water"
    },
    ur: {
      shortDesc: "Pure creatine for strength",
      description: "Pure creatine for strength",
      benefits: "Increases strength, Builds muscle",
      usage: "Mix 5g with water daily",
      warnings: "Drink plenty of water"
    }
  },
  "MEN031": {
    en: {
      shortDesc: "Soothing aftershave balm",
      description: "Soothing aftershave balm",
      benefits: "Soothes irritation, Moisturizes",
      usage: "Apply to face after shaving",
      warnings: "For external use only"
    },
    hi: {
      shortDesc: "Soothing aftershave balm",
      description: "Soothing aftershave balm",
      benefits: "Soothes irritation, Moisturizes",
      usage: "Apply to face after shaving",
      warnings: "For external use only"
    },
    ta: {
      shortDesc: "Soothing aftershave balm",
      description: "Soothing aftershave balm",
      benefits: "Soothes irritation, Moisturizes",
      usage: "Apply to face after shaving",
      warnings: "For external use only"
    },
    te: {
      shortDesc: "Soothing aftershave balm",
      description: "Soothing aftershave balm",
      benefits: "Soothes irritation, Moisturizes",
      usage: "Apply to face after shaving",
      warnings: "For external use only"
    },
    bn: {
      shortDesc: "Soothing aftershave balm",
      description: "Soothing aftershave balm",
      benefits: "Soothes irritation, Moisturizes",
      usage: "Apply to face after shaving",
      warnings: "For external use only"
    },
    mr: {
      shortDesc: "Soothing aftershave balm",
      description: "Soothing aftershave balm",
      benefits: "Soothes irritation, Moisturizes",
      usage: "Apply to face after shaving",
      warnings: "For external use only"
    },
    gu: {
      shortDesc: "Soothing aftershave balm",
      description: "Soothing aftershave balm",
      benefits: "Soothes irritation, Moisturizes",
      usage: "Apply to face after shaving",
      warnings: "For external use only"
    },
    kn: {
      shortDesc: "Soothing aftershave balm",
      description: "Soothing aftershave balm",
      benefits: "Soothes irritation, Moisturizes",
      usage: "Apply to face after shaving",
      warnings: "For external use only"
    },
    ml: {
      shortDesc: "Soothing aftershave balm",
      description: "Soothing aftershave balm",
      benefits: "Soothes irritation, Moisturizes",
      usage: "Apply to face after shaving",
      warnings: "For external use only"
    },
    pa: {
      shortDesc: "Soothing aftershave balm",
      description: "Soothing aftershave balm",
      benefits: "Soothes irritation, Moisturizes",
      usage: "Apply to face after shaving",
      warnings: "For external use only"
    },
    or: {
      shortDesc: "Soothing aftershave balm",
      description: "Soothing aftershave balm",
      benefits: "Soothes irritation, Moisturizes",
      usage: "Apply to face after shaving",
      warnings: "For external use only"
    },
    as: {
      shortDesc: "Soothing aftershave balm",
      description: "Soothing aftershave balm",
      benefits: "Soothes irritation, Moisturizes",
      usage: "Apply to face after shaving",
      warnings: "For external use only"
    },
    ur: {
      shortDesc: "Soothing aftershave balm",
      description: "Soothing aftershave balm",
      benefits: "Soothes irritation, Moisturizes",
      usage: "Apply to face after shaving",
      warnings: "For external use only"
    }
  },
  "MEN032": {
    en: {
      shortDesc: "Premium razor blades - 5 pack",
      description: "Premium razor blades - 5 pack",
      benefits: "Close shave, Long-lasting",
      usage: "Replace blade after 5-7 shaves",
      warnings: "Keep out of reach of children"
    },
    hi: {
      shortDesc: "Premium razor blades - 5 pack",
      description: "Premium razor blades - 5 pack",
      benefits: "Close shave, Long-lasting",
      usage: "Replace blade after 5-7 shaves",
      warnings: "Keep out of reach of children"
    },
    ta: {
      shortDesc: "Premium razor blades - 5 pack",
      description: "Premium razor blades - 5 pack",
      benefits: "Close shave, Long-lasting",
      usage: "Replace blade after 5-7 shaves",
      warnings: "Keep out of reach of children"
    },
    te: {
      shortDesc: "Premium razor blades - 5 pack",
      description: "Premium razor blades - 5 pack",
      benefits: "Close shave, Long-lasting",
      usage: "Replace blade after 5-7 shaves",
      warnings: "Keep out of reach of children"
    },
    bn: {
      shortDesc: "Premium razor blades - 5 pack",
      description: "Premium razor blades - 5 pack",
      benefits: "Close shave, Long-lasting",
      usage: "Replace blade after 5-7 shaves",
      warnings: "Keep out of reach of children"
    },
    mr: {
      shortDesc: "Premium razor blades - 5 pack",
      description: "Premium razor blades - 5 pack",
      benefits: "Close shave, Long-lasting",
      usage: "Replace blade after 5-7 shaves",
      warnings: "Keep out of reach of children"
    },
    gu: {
      shortDesc: "Premium razor blades - 5 pack",
      description: "Premium razor blades - 5 pack",
      benefits: "Close shave, Long-lasting",
      usage: "Replace blade after 5-7 shaves",
      warnings: "Keep out of reach of children"
    },
    kn: {
      shortDesc: "Premium razor blades - 5 pack",
      description: "Premium razor blades - 5 pack",
      benefits: "Close shave, Long-lasting",
      usage: "Replace blade after 5-7 shaves",
      warnings: "Keep out of reach of children"
    },
    ml: {
      shortDesc: "Premium razor blades - 5 pack",
      description: "Premium razor blades - 5 pack",
      benefits: "Close shave, Long-lasting",
      usage: "Replace blade after 5-7 shaves",
      warnings: "Keep out of reach of children"
    },
    pa: {
      shortDesc: "Premium razor blades - 5 pack",
      description: "Premium razor blades - 5 pack",
      benefits: "Close shave, Long-lasting",
      usage: "Replace blade after 5-7 shaves",
      warnings: "Keep out of reach of children"
    },
    or: {
      shortDesc: "Premium razor blades - 5 pack",
      description: "Premium razor blades - 5 pack",
      benefits: "Close shave, Long-lasting",
      usage: "Replace blade after 5-7 shaves",
      warnings: "Keep out of reach of children"
    },
    as: {
      shortDesc: "Premium razor blades - 5 pack",
      description: "Premium razor blades - 5 pack",
      benefits: "Close shave, Long-lasting",
      usage: "Replace blade after 5-7 shaves",
      warnings: "Keep out of reach of children"
    },
    ur: {
      shortDesc: "Premium razor blades - 5 pack",
      description: "Premium razor blades - 5 pack",
      benefits: "Close shave, Long-lasting",
      usage: "Replace blade after 5-7 shaves",
      warnings: "Keep out of reach of children"
    }
  },
  "MEN033": {
    en: {
      shortDesc: "Pre-shave oil for smooth shaving",
      description: "Pre-shave oil for smooth shaving",
      benefits: "Softens beard, Protects skin",
      usage: "Apply before shaving gel",
      warnings: "For external use only"
    },
    hi: {
      shortDesc: "Pre-shave oil for smooth shaving",
      description: "Pre-shave oil for smooth shaving",
      benefits: "Softens beard, Protects skin",
      usage: "Apply before shaving gel",
      warnings: "For external use only"
    },
    ta: {
      shortDesc: "Pre-shave oil for smooth shaving",
      description: "Pre-shave oil for smooth shaving",
      benefits: "Softens beard, Protects skin",
      usage: "Apply before shaving gel",
      warnings: "For external use only"
    },
    te: {
      shortDesc: "Pre-shave oil for smooth shaving",
      description: "Pre-shave oil for smooth shaving",
      benefits: "Softens beard, Protects skin",
      usage: "Apply before shaving gel",
      warnings: "For external use only"
    },
    bn: {
      shortDesc: "Pre-shave oil for smooth shaving",
      description: "Pre-shave oil for smooth shaving",
      benefits: "Softens beard, Protects skin",
      usage: "Apply before shaving gel",
      warnings: "For external use only"
    },
    mr: {
      shortDesc: "Pre-shave oil for smooth shaving",
      description: "Pre-shave oil for smooth shaving",
      benefits: "Softens beard, Protects skin",
      usage: "Apply before shaving gel",
      warnings: "For external use only"
    },
    gu: {
      shortDesc: "Pre-shave oil for smooth shaving",
      description: "Pre-shave oil for smooth shaving",
      benefits: "Softens beard, Protects skin",
      usage: "Apply before shaving gel",
      warnings: "For external use only"
    },
    kn: {
      shortDesc: "Pre-shave oil for smooth shaving",
      description: "Pre-shave oil for smooth shaving",
      benefits: "Softens beard, Protects skin",
      usage: "Apply before shaving gel",
      warnings: "For external use only"
    },
    ml: {
      shortDesc: "Pre-shave oil for smooth shaving",
      description: "Pre-shave oil for smooth shaving",
      benefits: "Softens beard, Protects skin",
      usage: "Apply before shaving gel",
      warnings: "For external use only"
    },
    pa: {
      shortDesc: "Pre-shave oil for smooth shaving",
      description: "Pre-shave oil for smooth shaving",
      benefits: "Softens beard, Protects skin",
      usage: "Apply before shaving gel",
      warnings: "For external use only"
    },
    or: {
      shortDesc: "Pre-shave oil for smooth shaving",
      description: "Pre-shave oil for smooth shaving",
      benefits: "Softens beard, Protects skin",
      usage: "Apply before shaving gel",
      warnings: "For external use only"
    },
    as: {
      shortDesc: "Pre-shave oil for smooth shaving",
      description: "Pre-shave oil for smooth shaving",
      benefits: "Softens beard, Protects skin",
      usage: "Apply before shaving gel",
      warnings: "For external use only"
    },
    ur: {
      shortDesc: "Pre-shave oil for smooth shaving",
      description: "Pre-shave oil for smooth shaving",
      benefits: "Softens beard, Protects skin",
      usage: "Apply before shaving gel",
      warnings: "For external use only"
    }
  },
  "MEN034": {
    en: {
      shortDesc: "Anti-frizz hair serum",
      description: "Anti-frizz hair serum",
      benefits: "Controls frizz, Adds shine",
      usage: "Apply small amount to damp hair",
      warnings: "For external use only"
    },
    hi: {
      shortDesc: "Anti-frizz hair serum",
      description: "Anti-frizz hair serum",
      benefits: "Controls frizz, Adds shine",
      usage: "Apply small amount to damp hair",
      warnings: "For external use only"
    },
    ta: {
      shortDesc: "Anti-frizz hair serum",
      description: "Anti-frizz hair serum",
      benefits: "Controls frizz, Adds shine",
      usage: "Apply small amount to damp hair",
      warnings: "For external use only"
    },
    te: {
      shortDesc: "Anti-frizz hair serum",
      description: "Anti-frizz hair serum",
      benefits: "Controls frizz, Adds shine",
      usage: "Apply small amount to damp hair",
      warnings: "For external use only"
    },
    bn: {
      shortDesc: "Anti-frizz hair serum",
      description: "Anti-frizz hair serum",
      benefits: "Controls frizz, Adds shine",
      usage: "Apply small amount to damp hair",
      warnings: "For external use only"
    },
    mr: {
      shortDesc: "Anti-frizz hair serum",
      description: "Anti-frizz hair serum",
      benefits: "Controls frizz, Adds shine",
      usage: "Apply small amount to damp hair",
      warnings: "For external use only"
    },
    gu: {
      shortDesc: "Anti-frizz hair serum",
      description: "Anti-frizz hair serum",
      benefits: "Controls frizz, Adds shine",
      usage: "Apply small amount to damp hair",
      warnings: "For external use only"
    },
    kn: {
      shortDesc: "Anti-frizz hair serum",
      description: "Anti-frizz hair serum",
      benefits: "Controls frizz, Adds shine",
      usage: "Apply small amount to damp hair",
      warnings: "For external use only"
    },
    ml: {
      shortDesc: "Anti-frizz hair serum",
      description: "Anti-frizz hair serum",
      benefits: "Controls frizz, Adds shine",
      usage: "Apply small amount to damp hair",
      warnings: "For external use only"
    },
    pa: {
      shortDesc: "Anti-frizz hair serum",
      description: "Anti-frizz hair serum",
      benefits: "Controls frizz, Adds shine",
      usage: "Apply small amount to damp hair",
      warnings: "For external use only"
    },
    or: {
      shortDesc: "Anti-frizz hair serum",
      description: "Anti-frizz hair serum",
      benefits: "Controls frizz, Adds shine",
      usage: "Apply small amount to damp hair",
      warnings: "For external use only"
    },
    as: {
      shortDesc: "Anti-frizz hair serum",
      description: "Anti-frizz hair serum",
      benefits: "Controls frizz, Adds shine",
      usage: "Apply small amount to damp hair",
      warnings: "For external use only"
    },
    ur: {
      shortDesc: "Anti-frizz hair serum",
      description: "Anti-frizz hair serum",
      benefits: "Controls frizz, Adds shine",
      usage: "Apply small amount to damp hair",
      warnings: "For external use only"
    }
  },
  "MEN035": {
    en: {
      shortDesc: "Scalp nourishing treatment",
      description: "Scalp nourishing treatment",
      benefits: "Nourishes scalp, Reduces flaking",
      usage: "Apply to scalp, leave for 10 minutes, rinse",
      warnings: "For external use only"
    },
    hi: {
      shortDesc: "Scalp nourishing treatment",
      description: "Scalp nourishing treatment",
      benefits: "Nourishes scalp, Reduces flaking",
      usage: "Apply to scalp, leave for 10 minutes, rinse",
      warnings: "For external use only"
    },
    ta: {
      shortDesc: "Scalp nourishing treatment",
      description: "Scalp nourishing treatment",
      benefits: "Nourishes scalp, Reduces flaking",
      usage: "Apply to scalp, leave for 10 minutes, rinse",
      warnings: "For external use only"
    },
    te: {
      shortDesc: "Scalp nourishing treatment",
      description: "Scalp nourishing treatment",
      benefits: "Nourishes scalp, Reduces flaking",
      usage: "Apply to scalp, leave for 10 minutes, rinse",
      warnings: "For external use only"
    },
    bn: {
      shortDesc: "Scalp nourishing treatment",
      description: "Scalp nourishing treatment",
      benefits: "Nourishes scalp, Reduces flaking",
      usage: "Apply to scalp, leave for 10 minutes, rinse",
      warnings: "For external use only"
    },
    mr: {
      shortDesc: "Scalp nourishing treatment",
      description: "Scalp nourishing treatment",
      benefits: "Nourishes scalp, Reduces flaking",
      usage: "Apply to scalp, leave for 10 minutes, rinse",
      warnings: "For external use only"
    },
    gu: {
      shortDesc: "Scalp nourishing treatment",
      description: "Scalp nourishing treatment",
      benefits: "Nourishes scalp, Reduces flaking",
      usage: "Apply to scalp, leave for 10 minutes, rinse",
      warnings: "For external use only"
    },
    kn: {
      shortDesc: "Scalp nourishing treatment",
      description: "Scalp nourishing treatment",
      benefits: "Nourishes scalp, Reduces flaking",
      usage: "Apply to scalp, leave for 10 minutes, rinse",
      warnings: "For external use only"
    },
    ml: {
      shortDesc: "Scalp nourishing treatment",
      description: "Scalp nourishing treatment",
      benefits: "Nourishes scalp, Reduces flaking",
      usage: "Apply to scalp, leave for 10 minutes, rinse",
      warnings: "For external use only"
    },
    pa: {
      shortDesc: "Scalp nourishing treatment",
      description: "Scalp nourishing treatment",
      benefits: "Nourishes scalp, Reduces flaking",
      usage: "Apply to scalp, leave for 10 minutes, rinse",
      warnings: "For external use only"
    },
    or: {
      shortDesc: "Scalp nourishing treatment",
      description: "Scalp nourishing treatment",
      benefits: "Nourishes scalp, Reduces flaking",
      usage: "Apply to scalp, leave for 10 minutes, rinse",
      warnings: "For external use only"
    },
    as: {
      shortDesc: "Scalp nourishing treatment",
      description: "Scalp nourishing treatment",
      benefits: "Nourishes scalp, Reduces flaking",
      usage: "Apply to scalp, leave for 10 minutes, rinse",
      warnings: "For external use only"
    },
    ur: {
      shortDesc: "Scalp nourishing treatment",
      description: "Scalp nourishing treatment",
      benefits: "Nourishes scalp, Reduces flaking",
      usage: "Apply to scalp, leave for 10 minutes, rinse",
      warnings: "For external use only"
    }
  },
  "MEN036": {
    en: {
      shortDesc: "Strong hold hair gel",
      description: "Strong hold hair gel",
      benefits: "Strong hold, No flaking",
      usage: "Apply to damp or dry hair, style as desired",
      warnings: "For external use only"
    },
    hi: {
      shortDesc: "Strong hold hair gel",
      description: "Strong hold hair gel",
      benefits: "Strong hold, No flaking",
      usage: "Apply to damp or dry hair, style as desired",
      warnings: "For external use only"
    },
    ta: {
      shortDesc: "Strong hold hair gel",
      description: "Strong hold hair gel",
      benefits: "Strong hold, No flaking",
      usage: "Apply to damp or dry hair, style as desired",
      warnings: "For external use only"
    },
    te: {
      shortDesc: "Strong hold hair gel",
      description: "Strong hold hair gel",
      benefits: "Strong hold, No flaking",
      usage: "Apply to damp or dry hair, style as desired",
      warnings: "For external use only"
    },
    bn: {
      shortDesc: "Strong hold hair gel",
      description: "Strong hold hair gel",
      benefits: "Strong hold, No flaking",
      usage: "Apply to damp or dry hair, style as desired",
      warnings: "For external use only"
    },
    mr: {
      shortDesc: "Strong hold hair gel",
      description: "Strong hold hair gel",
      benefits: "Strong hold, No flaking",
      usage: "Apply to damp or dry hair, style as desired",
      warnings: "For external use only"
    },
    gu: {
      shortDesc: "Strong hold hair gel",
      description: "Strong hold hair gel",
      benefits: "Strong hold, No flaking",
      usage: "Apply to damp or dry hair, style as desired",
      warnings: "For external use only"
    },
    kn: {
      shortDesc: "Strong hold hair gel",
      description: "Strong hold hair gel",
      benefits: "Strong hold, No flaking",
      usage: "Apply to damp or dry hair, style as desired",
      warnings: "For external use only"
    },
    ml: {
      shortDesc: "Strong hold hair gel",
      description: "Strong hold hair gel",
      benefits: "Strong hold, No flaking",
      usage: "Apply to damp or dry hair, style as desired",
      warnings: "For external use only"
    },
    pa: {
      shortDesc: "Strong hold hair gel",
      description: "Strong hold hair gel",
      benefits: "Strong hold, No flaking",
      usage: "Apply to damp or dry hair, style as desired",
      warnings: "For external use only"
    },
    or: {
      shortDesc: "Strong hold hair gel",
      description: "Strong hold hair gel",
      benefits: "Strong hold, No flaking",
      usage: "Apply to damp or dry hair, style as desired",
      warnings: "For external use only"
    },
    as: {
      shortDesc: "Strong hold hair gel",
      description: "Strong hold hair gel",
      benefits: "Strong hold, No flaking",
      usage: "Apply to damp or dry hair, style as desired",
      warnings: "For external use only"
    },
    ur: {
      shortDesc: "Strong hold hair gel",
      description: "Strong hold hair gel",
      benefits: "Strong hold, No flaking",
      usage: "Apply to damp or dry hair, style as desired",
      warnings: "For external use only"
    }
  },
  "MEN037": {
    en: {
      shortDesc: "Matte finish hair wax",
      description: "Matte finish hair wax",
      benefits: "Matte finish, Flexible hold",
      usage: "Rub between palms, apply to hair",
      warnings: "For external use only"
    },
    hi: {
      shortDesc: "Matte finish hair wax",
      description: "Matte finish hair wax",
      benefits: "Matte finish, Flexible hold",
      usage: "Rub between palms, apply to hair",
      warnings: "For external use only"
    },
    ta: {
      shortDesc: "Matte finish hair wax",
      description: "Matte finish hair wax",
      benefits: "Matte finish, Flexible hold",
      usage: "Rub between palms, apply to hair",
      warnings: "For external use only"
    },
    te: {
      shortDesc: "Matte finish hair wax",
      description: "Matte finish hair wax",
      benefits: "Matte finish, Flexible hold",
      usage: "Rub between palms, apply to hair",
      warnings: "For external use only"
    },
    bn: {
      shortDesc: "Matte finish hair wax",
      description: "Matte finish hair wax",
      benefits: "Matte finish, Flexible hold",
      usage: "Rub between palms, apply to hair",
      warnings: "For external use only"
    },
    mr: {
      shortDesc: "Matte finish hair wax",
      description: "Matte finish hair wax",
      benefits: "Matte finish, Flexible hold",
      usage: "Rub between palms, apply to hair",
      warnings: "For external use only"
    },
    gu: {
      shortDesc: "Matte finish hair wax",
      description: "Matte finish hair wax",
      benefits: "Matte finish, Flexible hold",
      usage: "Rub between palms, apply to hair",
      warnings: "For external use only"
    },
    kn: {
      shortDesc: "Matte finish hair wax",
      description: "Matte finish hair wax",
      benefits: "Matte finish, Flexible hold",
      usage: "Rub between palms, apply to hair",
      warnings: "For external use only"
    },
    ml: {
      shortDesc: "Matte finish hair wax",
      description: "Matte finish hair wax",
      benefits: "Matte finish, Flexible hold",
      usage: "Rub between palms, apply to hair",
      warnings: "For external use only"
    },
    pa: {
      shortDesc: "Matte finish hair wax",
      description: "Matte finish hair wax",
      benefits: "Matte finish, Flexible hold",
      usage: "Rub between palms, apply to hair",
      warnings: "For external use only"
    },
    or: {
      shortDesc: "Matte finish hair wax",
      description: "Matte finish hair wax",
      benefits: "Matte finish, Flexible hold",
      usage: "Rub between palms, apply to hair",
      warnings: "For external use only"
    },
    as: {
      shortDesc: "Matte finish hair wax",
      description: "Matte finish hair wax",
      benefits: "Matte finish, Flexible hold",
      usage: "Rub between palms, apply to hair",
      warnings: "For external use only"
    },
    ur: {
      shortDesc: "Matte finish hair wax",
      description: "Matte finish hair wax",
      benefits: "Matte finish, Flexible hold",
      usage: "Rub between palms, apply to hair",
      warnings: "For external use only"
    }
  },
  "MEN038": {
    en: {
      shortDesc: "Beard softening cream",
      description: "Beard softening cream",
      benefits: "Softens beard, Easy to style",
      usage: "Apply small amount daily",
      warnings: "For external use only"
    },
    hi: {
      shortDesc: "Beard softening cream",
      description: "Beard softening cream",
      benefits: "Softens beard, Easy to style",
      usage: "Apply small amount daily",
      warnings: "For external use only"
    },
    ta: {
      shortDesc: "Beard softening cream",
      description: "Beard softening cream",
      benefits: "Softens beard, Easy to style",
      usage: "Apply small amount daily",
      warnings: "For external use only"
    },
    te: {
      shortDesc: "Beard softening cream",
      description: "Beard softening cream",
      benefits: "Softens beard, Easy to style",
      usage: "Apply small amount daily",
      warnings: "For external use only"
    },
    bn: {
      shortDesc: "Beard softening cream",
      description: "Beard softening cream",
      benefits: "Softens beard, Easy to style",
      usage: "Apply small amount daily",
      warnings: "For external use only"
    },
    mr: {
      shortDesc: "Beard softening cream",
      description: "Beard softening cream",
      benefits: "Softens beard, Easy to style",
      usage: "Apply small amount daily",
      warnings: "For external use only"
    },
    gu: {
      shortDesc: "Beard softening cream",
      description: "Beard softening cream",
      benefits: "Softens beard, Easy to style",
      usage: "Apply small amount daily",
      warnings: "For external use only"
    },
    kn: {
      shortDesc: "Beard softening cream",
      description: "Beard softening cream",
      benefits: "Softens beard, Easy to style",
      usage: "Apply small amount daily",
      warnings: "For external use only"
    },
    ml: {
      shortDesc: "Beard softening cream",
      description: "Beard softening cream",
      benefits: "Softens beard, Easy to style",
      usage: "Apply small amount daily",
      warnings: "For external use only"
    },
    pa: {
      shortDesc: "Beard softening cream",
      description: "Beard softening cream",
      benefits: "Softens beard, Easy to style",
      usage: "Apply small amount daily",
      warnings: "For external use only"
    },
    or: {
      shortDesc: "Beard softening cream",
      description: "Beard softening cream",
      benefits: "Softens beard, Easy to style",
      usage: "Apply small amount daily",
      warnings: "For external use only"
    },
    as: {
      shortDesc: "Beard softening cream",
      description: "Beard softening cream",
      benefits: "Softens beard, Easy to style",
      usage: "Apply small amount daily",
      warnings: "For external use only"
    },
    ur: {
      shortDesc: "Beard softening cream",
      description: "Beard softening cream",
      benefits: "Softens beard, Easy to style",
      usage: "Apply small amount daily",
      warnings: "For external use only"
    }
  },
  "MEN039": {
    en: {
      shortDesc: "Men's vitality enhancement formula",
      description: "Men's vitality enhancement formula",
      benefits: "Boosts vitality, Improves wellness",
      usage: "Take 1 capsule daily",
      warnings: "Not for under 18"
    },
    hi: {
      shortDesc: "Men's vitality enhancement formula",
      description: "Men's vitality enhancement formula",
      benefits: "Boosts vitality, Improves wellness",
      usage: "Take 1 capsule daily",
      warnings: "Not for under 18"
    },
    ta: {
      shortDesc: "Men's vitality enhancement formula",
      description: "Men's vitality enhancement formula",
      benefits: "Boosts vitality, Improves wellness",
      usage: "Take 1 capsule daily",
      warnings: "Not for under 18"
    },
    te: {
      shortDesc: "Men's vitality enhancement formula",
      description: "Men's vitality enhancement formula",
      benefits: "Boosts vitality, Improves wellness",
      usage: "Take 1 capsule daily",
      warnings: "Not for under 18"
    },
    bn: {
      shortDesc: "Men's vitality enhancement formula",
      description: "Men's vitality enhancement formula",
      benefits: "Boosts vitality, Improves wellness",
      usage: "Take 1 capsule daily",
      warnings: "Not for under 18"
    },
    mr: {
      shortDesc: "Men's vitality enhancement formula",
      description: "Men's vitality enhancement formula",
      benefits: "Boosts vitality, Improves wellness",
      usage: "Take 1 capsule daily",
      warnings: "Not for under 18"
    },
    gu: {
      shortDesc: "Men's vitality enhancement formula",
      description: "Men's vitality enhancement formula",
      benefits: "Boosts vitality, Improves wellness",
      usage: "Take 1 capsule daily",
      warnings: "Not for under 18"
    },
    kn: {
      shortDesc: "Men's vitality enhancement formula",
      description: "Men's vitality enhancement formula",
      benefits: "Boosts vitality, Improves wellness",
      usage: "Take 1 capsule daily",
      warnings: "Not for under 18"
    },
    ml: {
      shortDesc: "Men's vitality enhancement formula",
      description: "Men's vitality enhancement formula",
      benefits: "Boosts vitality, Improves wellness",
      usage: "Take 1 capsule daily",
      warnings: "Not for under 18"
    },
    pa: {
      shortDesc: "Men's vitality enhancement formula",
      description: "Men's vitality enhancement formula",
      benefits: "Boosts vitality, Improves wellness",
      usage: "Take 1 capsule daily",
      warnings: "Not for under 18"
    },
    or: {
      shortDesc: "Men's vitality enhancement formula",
      description: "Men's vitality enhancement formula",
      benefits: "Boosts vitality, Improves wellness",
      usage: "Take 1 capsule daily",
      warnings: "Not for under 18"
    },
    as: {
      shortDesc: "Men's vitality enhancement formula",
      description: "Men's vitality enhancement formula",
      benefits: "Boosts vitality, Improves wellness",
      usage: "Take 1 capsule daily",
      warnings: "Not for under 18"
    },
    ur: {
      shortDesc: "Men's vitality enhancement formula",
      description: "Men's vitality enhancement formula",
      benefits: "Boosts vitality, Improves wellness",
      usage: "Take 1 capsule daily",
      warnings: "Not for under 18"
    }
  },
  "MEN040": {
    en: {
      shortDesc: "Immune system booster for men",
      description: "Immune system booster for men",
      benefits: "Boosts immunity, Natural ingredients",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor if on medication"
    },
    hi: {
      shortDesc: "Immune system booster for men",
      description: "Immune system booster for men",
      benefits: "Boosts immunity, Natural ingredients",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor if on medication"
    },
    ta: {
      shortDesc: "Immune system booster for men",
      description: "Immune system booster for men",
      benefits: "Boosts immunity, Natural ingredients",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor if on medication"
    },
    te: {
      shortDesc: "Immune system booster for men",
      description: "Immune system booster for men",
      benefits: "Boosts immunity, Natural ingredients",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor if on medication"
    },
    bn: {
      shortDesc: "Immune system booster for men",
      description: "Immune system booster for men",
      benefits: "Boosts immunity, Natural ingredients",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor if on medication"
    },
    mr: {
      shortDesc: "Immune system booster for men",
      description: "Immune system booster for men",
      benefits: "Boosts immunity, Natural ingredients",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor if on medication"
    },
    gu: {
      shortDesc: "Immune system booster for men",
      description: "Immune system booster for men",
      benefits: "Boosts immunity, Natural ingredients",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor if on medication"
    },
    kn: {
      shortDesc: "Immune system booster for men",
      description: "Immune system booster for men",
      benefits: "Boosts immunity, Natural ingredients",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor if on medication"
    },
    ml: {
      shortDesc: "Immune system booster for men",
      description: "Immune system booster for men",
      benefits: "Boosts immunity, Natural ingredients",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor if on medication"
    },
    pa: {
      shortDesc: "Immune system booster for men",
      description: "Immune system booster for men",
      benefits: "Boosts immunity, Natural ingredients",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor if on medication"
    },
    or: {
      shortDesc: "Immune system booster for men",
      description: "Immune system booster for men",
      benefits: "Boosts immunity, Natural ingredients",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor if on medication"
    },
    as: {
      shortDesc: "Immune system booster for men",
      description: "Immune system booster for men",
      benefits: "Boosts immunity, Natural ingredients",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor if on medication"
    },
    ur: {
      shortDesc: "Immune system booster for men",
      description: "Immune system booster for men",
      benefits: "Boosts immunity, Natural ingredients",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor if on medication"
    }
  },
  "MEN041": {
    en: {
      shortDesc: "Daily face moisturizer for men",
      description: "Daily face moisturizer for men",
      benefits: "Hydrates skin, Non-greasy formula",
      usage: "Apply to face twice daily",
      warnings: "For external use only"
    },
    hi: {
      shortDesc: "Daily face moisturizer for men",
      description: "Daily face moisturizer for men",
      benefits: "Hydrates skin, Non-greasy formula",
      usage: "Apply to face twice daily",
      warnings: "For external use only"
    },
    ta: {
      shortDesc: "Daily face moisturizer for men",
      description: "Daily face moisturizer for men",
      benefits: "Hydrates skin, Non-greasy formula",
      usage: "Apply to face twice daily",
      warnings: "For external use only"
    },
    te: {
      shortDesc: "Daily face moisturizer for men",
      description: "Daily face moisturizer for men",
      benefits: "Hydrates skin, Non-greasy formula",
      usage: "Apply to face twice daily",
      warnings: "For external use only"
    },
    bn: {
      shortDesc: "Daily face moisturizer for men",
      description: "Daily face moisturizer for men",
      benefits: "Hydrates skin, Non-greasy formula",
      usage: "Apply to face twice daily",
      warnings: "For external use only"
    },
    mr: {
      shortDesc: "Daily face moisturizer for men",
      description: "Daily face moisturizer for men",
      benefits: "Hydrates skin, Non-greasy formula",
      usage: "Apply to face twice daily",
      warnings: "For external use only"
    },
    gu: {
      shortDesc: "Daily face moisturizer for men",
      description: "Daily face moisturizer for men",
      benefits: "Hydrates skin, Non-greasy formula",
      usage: "Apply to face twice daily",
      warnings: "For external use only"
    },
    kn: {
      shortDesc: "Daily face moisturizer for men",
      description: "Daily face moisturizer for men",
      benefits: "Hydrates skin, Non-greasy formula",
      usage: "Apply to face twice daily",
      warnings: "For external use only"
    },
    ml: {
      shortDesc: "Daily face moisturizer for men",
      description: "Daily face moisturizer for men",
      benefits: "Hydrates skin, Non-greasy formula",
      usage: "Apply to face twice daily",
      warnings: "For external use only"
    },
    pa: {
      shortDesc: "Daily face moisturizer for men",
      description: "Daily face moisturizer for men",
      benefits: "Hydrates skin, Non-greasy formula",
      usage: "Apply to face twice daily",
      warnings: "For external use only"
    },
    or: {
      shortDesc: "Daily face moisturizer for men",
      description: "Daily face moisturizer for men",
      benefits: "Hydrates skin, Non-greasy formula",
      usage: "Apply to face twice daily",
      warnings: "For external use only"
    },
    as: {
      shortDesc: "Daily face moisturizer for men",
      description: "Daily face moisturizer for men",
      benefits: "Hydrates skin, Non-greasy formula",
      usage: "Apply to face twice daily",
      warnings: "For external use only"
    },
    ur: {
      shortDesc: "Daily face moisturizer for men",
      description: "Daily face moisturizer for men",
      benefits: "Hydrates skin, Non-greasy formula",
      usage: "Apply to face twice daily",
      warnings: "For external use only"
    }
  },
  "WOM001": {
    en: {
      shortDesc: "Complete daily nutrition for women",
      description: "Complete daily nutrition for women",
      benefits: "Supports energy, Hormonal balance, Bone health",
      usage: "Take 1 tablet daily",
      warnings: "Consult doctor if pregnant"
    },
    hi: {
      shortDesc: "Complete daily nutrition for women",
      description: "Complete daily nutrition for women",
      benefits: "Supports energy, Hormonal balance, Bone health",
      usage: "Take 1 tablet daily",
      warnings: "Consult doctor if pregnant"
    },
    ta: {
      shortDesc: "Complete daily nutrition for women",
      description: "Complete daily nutrition for women",
      benefits: "Supports energy, Hormonal balance, Bone health",
      usage: "Take 1 tablet daily",
      warnings: "Consult doctor if pregnant"
    },
    te: {
      shortDesc: "Complete daily nutrition for women",
      description: "Complete daily nutrition for women",
      benefits: "Supports energy, Hormonal balance, Bone health",
      usage: "Take 1 tablet daily",
      warnings: "Consult doctor if pregnant"
    },
    bn: {
      shortDesc: "Complete daily nutrition for women",
      description: "Complete daily nutrition for women",
      benefits: "Supports energy, Hormonal balance, Bone health",
      usage: "Take 1 tablet daily",
      warnings: "Consult doctor if pregnant"
    },
    mr: {
      shortDesc: "Complete daily nutrition for women",
      description: "Complete daily nutrition for women",
      benefits: "Supports energy, Hormonal balance, Bone health",
      usage: "Take 1 tablet daily",
      warnings: "Consult doctor if pregnant"
    },
    gu: {
      shortDesc: "Complete daily nutrition for women",
      description: "Complete daily nutrition for women",
      benefits: "Supports energy, Hormonal balance, Bone health",
      usage: "Take 1 tablet daily",
      warnings: "Consult doctor if pregnant"
    },
    kn: {
      shortDesc: "Complete daily nutrition for women",
      description: "Complete daily nutrition for women",
      benefits: "Supports energy, Hormonal balance, Bone health",
      usage: "Take 1 tablet daily",
      warnings: "Consult doctor if pregnant"
    },
    ml: {
      shortDesc: "Complete daily nutrition for women",
      description: "Complete daily nutrition for women",
      benefits: "Supports energy, Hormonal balance, Bone health",
      usage: "Take 1 tablet daily",
      warnings: "Consult doctor if pregnant"
    },
    pa: {
      shortDesc: "Complete daily nutrition for women",
      description: "Complete daily nutrition for women",
      benefits: "Supports energy, Hormonal balance, Bone health",
      usage: "Take 1 tablet daily",
      warnings: "Consult doctor if pregnant"
    },
    or: {
      shortDesc: "Complete daily nutrition for women",
      description: "Complete daily nutrition for women",
      benefits: "Supports energy, Hormonal balance, Bone health",
      usage: "Take 1 tablet daily",
      warnings: "Consult doctor if pregnant"
    },
    as: {
      shortDesc: "Complete daily nutrition for women",
      description: "Complete daily nutrition for women",
      benefits: "Supports energy, Hormonal balance, Bone health",
      usage: "Take 1 tablet daily",
      warnings: "Consult doctor if pregnant"
    },
    ur: {
      shortDesc: "Complete daily nutrition for women",
      description: "Complete daily nutrition for women",
      benefits: "Supports energy, Hormonal balance, Bone health",
      usage: "Take 1 tablet daily",
      warnings: "Consult doctor if pregnant"
    }
  },
  "WOM002": {
    en: {
      shortDesc: "Iron supplement with folic acid",
      description: "Iron supplement with folic acid",
      benefits: "Prevents anemia, Boosts energy",
      usage: "Take 1 tablet with food",
      warnings: "May cause constipation"
    },
    hi: {
      shortDesc: "Iron supplement with folic acid",
      description: "Iron supplement with folic acid",
      benefits: "Prevents anemia, Boosts energy",
      usage: "Take 1 tablet with food",
      warnings: "May cause constipation"
    },
    ta: {
      shortDesc: "Iron supplement with folic acid",
      description: "Iron supplement with folic acid",
      benefits: "Prevents anemia, Boosts energy",
      usage: "Take 1 tablet with food",
      warnings: "May cause constipation"
    },
    te: {
      shortDesc: "Iron supplement with folic acid",
      description: "Iron supplement with folic acid",
      benefits: "Prevents anemia, Boosts energy",
      usage: "Take 1 tablet with food",
      warnings: "May cause constipation"
    },
    bn: {
      shortDesc: "Iron supplement with folic acid",
      description: "Iron supplement with folic acid",
      benefits: "Prevents anemia, Boosts energy",
      usage: "Take 1 tablet with food",
      warnings: "May cause constipation"
    },
    mr: {
      shortDesc: "Iron supplement with folic acid",
      description: "Iron supplement with folic acid",
      benefits: "Prevents anemia, Boosts energy",
      usage: "Take 1 tablet with food",
      warnings: "May cause constipation"
    },
    gu: {
      shortDesc: "Iron supplement with folic acid",
      description: "Iron supplement with folic acid",
      benefits: "Prevents anemia, Boosts energy",
      usage: "Take 1 tablet with food",
      warnings: "May cause constipation"
    },
    kn: {
      shortDesc: "Iron supplement with folic acid",
      description: "Iron supplement with folic acid",
      benefits: "Prevents anemia, Boosts energy",
      usage: "Take 1 tablet with food",
      warnings: "May cause constipation"
    },
    ml: {
      shortDesc: "Iron supplement with folic acid",
      description: "Iron supplement with folic acid",
      benefits: "Prevents anemia, Boosts energy",
      usage: "Take 1 tablet with food",
      warnings: "May cause constipation"
    },
    pa: {
      shortDesc: "Iron supplement with folic acid",
      description: "Iron supplement with folic acid",
      benefits: "Prevents anemia, Boosts energy",
      usage: "Take 1 tablet with food",
      warnings: "May cause constipation"
    },
    or: {
      shortDesc: "Iron supplement with folic acid",
      description: "Iron supplement with folic acid",
      benefits: "Prevents anemia, Boosts energy",
      usage: "Take 1 tablet with food",
      warnings: "May cause constipation"
    },
    as: {
      shortDesc: "Iron supplement with folic acid",
      description: "Iron supplement with folic acid",
      benefits: "Prevents anemia, Boosts energy",
      usage: "Take 1 tablet with food",
      warnings: "May cause constipation"
    },
    ur: {
      shortDesc: "Iron supplement with folic acid",
      description: "Iron supplement with folic acid",
      benefits: "Prevents anemia, Boosts energy",
      usage: "Take 1 tablet with food",
      warnings: "May cause constipation"
    }
  },
  "WOM003": {
    en: {
      shortDesc: "Calcium with Vitamin D3",
      description: "Calcium with Vitamin D3",
      benefits: "Strengthens bones, Prevents osteoporosis",
      usage: "Take 1 tablet twice daily",
      warnings: "Store in cool place"
    },
    hi: {
      shortDesc: "Calcium with Vitamin D3",
      description: "Calcium with Vitamin D3",
      benefits: "Strengthens bones, Prevents osteoporosis",
      usage: "Take 1 tablet twice daily",
      warnings: "Store in cool place"
    },
    ta: {
      shortDesc: "Calcium with Vitamin D3",
      description: "Calcium with Vitamin D3",
      benefits: "Strengthens bones, Prevents osteoporosis",
      usage: "Take 1 tablet twice daily",
      warnings: "Store in cool place"
    },
    te: {
      shortDesc: "Calcium with Vitamin D3",
      description: "Calcium with Vitamin D3",
      benefits: "Strengthens bones, Prevents osteoporosis",
      usage: "Take 1 tablet twice daily",
      warnings: "Store in cool place"
    },
    bn: {
      shortDesc: "Calcium with Vitamin D3",
      description: "Calcium with Vitamin D3",
      benefits: "Strengthens bones, Prevents osteoporosis",
      usage: "Take 1 tablet twice daily",
      warnings: "Store in cool place"
    },
    mr: {
      shortDesc: "Calcium with Vitamin D3",
      description: "Calcium with Vitamin D3",
      benefits: "Strengthens bones, Prevents osteoporosis",
      usage: "Take 1 tablet twice daily",
      warnings: "Store in cool place"
    },
    gu: {
      shortDesc: "Calcium with Vitamin D3",
      description: "Calcium with Vitamin D3",
      benefits: "Strengthens bones, Prevents osteoporosis",
      usage: "Take 1 tablet twice daily",
      warnings: "Store in cool place"
    },
    kn: {
      shortDesc: "Calcium with Vitamin D3",
      description: "Calcium with Vitamin D3",
      benefits: "Strengthens bones, Prevents osteoporosis",
      usage: "Take 1 tablet twice daily",
      warnings: "Store in cool place"
    },
    ml: {
      shortDesc: "Calcium with Vitamin D3",
      description: "Calcium with Vitamin D3",
      benefits: "Strengthens bones, Prevents osteoporosis",
      usage: "Take 1 tablet twice daily",
      warnings: "Store in cool place"
    },
    pa: {
      shortDesc: "Calcium with Vitamin D3",
      description: "Calcium with Vitamin D3",
      benefits: "Strengthens bones, Prevents osteoporosis",
      usage: "Take 1 tablet twice daily",
      warnings: "Store in cool place"
    },
    or: {
      shortDesc: "Calcium with Vitamin D3",
      description: "Calcium with Vitamin D3",
      benefits: "Strengthens bones, Prevents osteoporosis",
      usage: "Take 1 tablet twice daily",
      warnings: "Store in cool place"
    },
    as: {
      shortDesc: "Calcium with Vitamin D3",
      description: "Calcium with Vitamin D3",
      benefits: "Strengthens bones, Prevents osteoporosis",
      usage: "Take 1 tablet twice daily",
      warnings: "Store in cool place"
    },
    ur: {
      shortDesc: "Calcium with Vitamin D3",
      description: "Calcium with Vitamin D3",
      benefits: "Strengthens bones, Prevents osteoporosis",
      usage: "Take 1 tablet twice daily",
      warnings: "Store in cool place"
    }
  },
  "WOM004": {
    en: {
      shortDesc: "Fish oil for women's health",
      description: "Fish oil for women's health",
      benefits: "Heart health, Brain function",
      usage: "Take 2 capsules daily",
      warnings: "Keep refrigerated"
    },
    hi: {
      shortDesc: "Fish oil for women's health",
      description: "Fish oil for women's health",
      benefits: "Heart health, Brain function",
      usage: "Take 2 capsules daily",
      warnings: "Keep refrigerated"
    },
    ta: {
      shortDesc: "Fish oil for women's health",
      description: "Fish oil for women's health",
      benefits: "Heart health, Brain function",
      usage: "Take 2 capsules daily",
      warnings: "Keep refrigerated"
    },
    te: {
      shortDesc: "Fish oil for women's health",
      description: "Fish oil for women's health",
      benefits: "Heart health, Brain function",
      usage: "Take 2 capsules daily",
      warnings: "Keep refrigerated"
    },
    bn: {
      shortDesc: "Fish oil for women's health",
      description: "Fish oil for women's health",
      benefits: "Heart health, Brain function",
      usage: "Take 2 capsules daily",
      warnings: "Keep refrigerated"
    },
    mr: {
      shortDesc: "Fish oil for women's health",
      description: "Fish oil for women's health",
      benefits: "Heart health, Brain function",
      usage: "Take 2 capsules daily",
      warnings: "Keep refrigerated"
    },
    gu: {
      shortDesc: "Fish oil for women's health",
      description: "Fish oil for women's health",
      benefits: "Heart health, Brain function",
      usage: "Take 2 capsules daily",
      warnings: "Keep refrigerated"
    },
    kn: {
      shortDesc: "Fish oil for women's health",
      description: "Fish oil for women's health",
      benefits: "Heart health, Brain function",
      usage: "Take 2 capsules daily",
      warnings: "Keep refrigerated"
    },
    ml: {
      shortDesc: "Fish oil for women's health",
      description: "Fish oil for women's health",
      benefits: "Heart health, Brain function",
      usage: "Take 2 capsules daily",
      warnings: "Keep refrigerated"
    },
    pa: {
      shortDesc: "Fish oil for women's health",
      description: "Fish oil for women's health",
      benefits: "Heart health, Brain function",
      usage: "Take 2 capsules daily",
      warnings: "Keep refrigerated"
    },
    or: {
      shortDesc: "Fish oil for women's health",
      description: "Fish oil for women's health",
      benefits: "Heart health, Brain function",
      usage: "Take 2 capsules daily",
      warnings: "Keep refrigerated"
    },
    as: {
      shortDesc: "Fish oil for women's health",
      description: "Fish oil for women's health",
      benefits: "Heart health, Brain function",
      usage: "Take 2 capsules daily",
      warnings: "Keep refrigerated"
    },
    ur: {
      shortDesc: "Fish oil for women's health",
      description: "Fish oil for women's health",
      benefits: "Heart health, Brain function",
      usage: "Take 2 capsules daily",
      warnings: "Keep refrigerated"
    }
  },
  "WOM005": {
    en: {
      shortDesc: "Biotin for hair growth",
      description: "Biotin for hair growth",
      benefits: "Strengthens hair, Reduces hair fall",
      usage: "Take 1 capsule daily",
      warnings: "Results may vary"
    },
    hi: {
      shortDesc: "Biotin for hair growth",
      description: "Biotin for hair growth",
      benefits: "Strengthens hair, Reduces hair fall",
      usage: "Take 1 capsule daily",
      warnings: "Results may vary"
    },
    ta: {
      shortDesc: "Biotin for hair growth",
      description: "Biotin for hair growth",
      benefits: "Strengthens hair, Reduces hair fall",
      usage: "Take 1 capsule daily",
      warnings: "Results may vary"
    },
    te: {
      shortDesc: "Biotin for hair growth",
      description: "Biotin for hair growth",
      benefits: "Strengthens hair, Reduces hair fall",
      usage: "Take 1 capsule daily",
      warnings: "Results may vary"
    },
    bn: {
      shortDesc: "Biotin for hair growth",
      description: "Biotin for hair growth",
      benefits: "Strengthens hair, Reduces hair fall",
      usage: "Take 1 capsule daily",
      warnings: "Results may vary"
    },
    mr: {
      shortDesc: "Biotin for hair growth",
      description: "Biotin for hair growth",
      benefits: "Strengthens hair, Reduces hair fall",
      usage: "Take 1 capsule daily",
      warnings: "Results may vary"
    },
    gu: {
      shortDesc: "Biotin for hair growth",
      description: "Biotin for hair growth",
      benefits: "Strengthens hair, Reduces hair fall",
      usage: "Take 1 capsule daily",
      warnings: "Results may vary"
    },
    kn: {
      shortDesc: "Biotin for hair growth",
      description: "Biotin for hair growth",
      benefits: "Strengthens hair, Reduces hair fall",
      usage: "Take 1 capsule daily",
      warnings: "Results may vary"
    },
    ml: {
      shortDesc: "Biotin for hair growth",
      description: "Biotin for hair growth",
      benefits: "Strengthens hair, Reduces hair fall",
      usage: "Take 1 capsule daily",
      warnings: "Results may vary"
    },
    pa: {
      shortDesc: "Biotin for hair growth",
      description: "Biotin for hair growth",
      benefits: "Strengthens hair, Reduces hair fall",
      usage: "Take 1 capsule daily",
      warnings: "Results may vary"
    },
    or: {
      shortDesc: "Biotin for hair growth",
      description: "Biotin for hair growth",
      benefits: "Strengthens hair, Reduces hair fall",
      usage: "Take 1 capsule daily",
      warnings: "Results may vary"
    },
    as: {
      shortDesc: "Biotin for hair growth",
      description: "Biotin for hair growth",
      benefits: "Strengthens hair, Reduces hair fall",
      usage: "Take 1 capsule daily",
      warnings: "Results may vary"
    },
    ur: {
      shortDesc: "Biotin for hair growth",
      description: "Biotin for hair growth",
      benefits: "Strengthens hair, Reduces hair fall",
      usage: "Take 1 capsule daily",
      warnings: "Results may vary"
    }
  },
  "WOM006": {
    en: {
      shortDesc: "Natural PCOS management",
      description: "Natural PCOS management",
      benefits: "Hormonal balance, Regular cycles",
      usage: "Take 2 capsules daily",
      warnings: "Consult gynecologist"
    },
    hi: {
      shortDesc: "Natural PCOS management",
      description: "Natural PCOS management",
      benefits: "Hormonal balance, Regular cycles",
      usage: "Take 2 capsules daily",
      warnings: "Consult gynecologist"
    },
    ta: {
      shortDesc: "Natural PCOS management",
      description: "Natural PCOS management",
      benefits: "Hormonal balance, Regular cycles",
      usage: "Take 2 capsules daily",
      warnings: "Consult gynecologist"
    },
    te: {
      shortDesc: "Natural PCOS management",
      description: "Natural PCOS management",
      benefits: "Hormonal balance, Regular cycles",
      usage: "Take 2 capsules daily",
      warnings: "Consult gynecologist"
    },
    bn: {
      shortDesc: "Natural PCOS management",
      description: "Natural PCOS management",
      benefits: "Hormonal balance, Regular cycles",
      usage: "Take 2 capsules daily",
      warnings: "Consult gynecologist"
    },
    mr: {
      shortDesc: "Natural PCOS management",
      description: "Natural PCOS management",
      benefits: "Hormonal balance, Regular cycles",
      usage: "Take 2 capsules daily",
      warnings: "Consult gynecologist"
    },
    gu: {
      shortDesc: "Natural PCOS management",
      description: "Natural PCOS management",
      benefits: "Hormonal balance, Regular cycles",
      usage: "Take 2 capsules daily",
      warnings: "Consult gynecologist"
    },
    kn: {
      shortDesc: "Natural PCOS management",
      description: "Natural PCOS management",
      benefits: "Hormonal balance, Regular cycles",
      usage: "Take 2 capsules daily",
      warnings: "Consult gynecologist"
    },
    ml: {
      shortDesc: "Natural PCOS management",
      description: "Natural PCOS management",
      benefits: "Hormonal balance, Regular cycles",
      usage: "Take 2 capsules daily",
      warnings: "Consult gynecologist"
    },
    pa: {
      shortDesc: "Natural PCOS management",
      description: "Natural PCOS management",
      benefits: "Hormonal balance, Regular cycles",
      usage: "Take 2 capsules daily",
      warnings: "Consult gynecologist"
    },
    or: {
      shortDesc: "Natural PCOS management",
      description: "Natural PCOS management",
      benefits: "Hormonal balance, Regular cycles",
      usage: "Take 2 capsules daily",
      warnings: "Consult gynecologist"
    },
    as: {
      shortDesc: "Natural PCOS management",
      description: "Natural PCOS management",
      benefits: "Hormonal balance, Regular cycles",
      usage: "Take 2 capsules daily",
      warnings: "Consult gynecologist"
    },
    ur: {
      shortDesc: "Natural PCOS management",
      description: "Natural PCOS management",
      benefits: "Hormonal balance, Regular cycles",
      usage: "Take 2 capsules daily",
      warnings: "Consult gynecologist"
    }
  },
  "WOM007": {
    en: {
      shortDesc: "Complete prenatal nutrition",
      description: "Complete prenatal nutrition",
      benefits: "Fetal development, Maternal health",
      usage: "Take 1 tablet daily",
      warnings: "For pregnant women only"
    },
    hi: {
      shortDesc: "Complete prenatal nutrition",
      description: "Complete prenatal nutrition",
      benefits: "Fetal development, Maternal health",
      usage: "Take 1 tablet daily",
      warnings: "For pregnant women only"
    },
    ta: {
      shortDesc: "Complete prenatal nutrition",
      description: "Complete prenatal nutrition",
      benefits: "Fetal development, Maternal health",
      usage: "Take 1 tablet daily",
      warnings: "For pregnant women only"
    },
    te: {
      shortDesc: "Complete prenatal nutrition",
      description: "Complete prenatal nutrition",
      benefits: "Fetal development, Maternal health",
      usage: "Take 1 tablet daily",
      warnings: "For pregnant women only"
    },
    bn: {
      shortDesc: "Complete prenatal nutrition",
      description: "Complete prenatal nutrition",
      benefits: "Fetal development, Maternal health",
      usage: "Take 1 tablet daily",
      warnings: "For pregnant women only"
    },
    mr: {
      shortDesc: "Complete prenatal nutrition",
      description: "Complete prenatal nutrition",
      benefits: "Fetal development, Maternal health",
      usage: "Take 1 tablet daily",
      warnings: "For pregnant women only"
    },
    gu: {
      shortDesc: "Complete prenatal nutrition",
      description: "Complete prenatal nutrition",
      benefits: "Fetal development, Maternal health",
      usage: "Take 1 tablet daily",
      warnings: "For pregnant women only"
    },
    kn: {
      shortDesc: "Complete prenatal nutrition",
      description: "Complete prenatal nutrition",
      benefits: "Fetal development, Maternal health",
      usage: "Take 1 tablet daily",
      warnings: "For pregnant women only"
    },
    ml: {
      shortDesc: "Complete prenatal nutrition",
      description: "Complete prenatal nutrition",
      benefits: "Fetal development, Maternal health",
      usage: "Take 1 tablet daily",
      warnings: "For pregnant women only"
    },
    pa: {
      shortDesc: "Complete prenatal nutrition",
      description: "Complete prenatal nutrition",
      benefits: "Fetal development, Maternal health",
      usage: "Take 1 tablet daily",
      warnings: "For pregnant women only"
    },
    or: {
      shortDesc: "Complete prenatal nutrition",
      description: "Complete prenatal nutrition",
      benefits: "Fetal development, Maternal health",
      usage: "Take 1 tablet daily",
      warnings: "For pregnant women only"
    },
    as: {
      shortDesc: "Complete prenatal nutrition",
      description: "Complete prenatal nutrition",
      benefits: "Fetal development, Maternal health",
      usage: "Take 1 tablet daily",
      warnings: "For pregnant women only"
    },
    ur: {
      shortDesc: "Complete prenatal nutrition",
      description: "Complete prenatal nutrition",
      benefits: "Fetal development, Maternal health",
      usage: "Take 1 tablet daily",
      warnings: "For pregnant women only"
    }
  },
  "WOM008": {
    en: {
      shortDesc: "Menopause symptom relief",
      description: "Menopause symptom relief",
      benefits: "Reduces hot flashes, Mood support",
      usage: "Take 1 capsule twice daily",
      warnings: "Consult doctor"
    },
    hi: {
      shortDesc: "Menopause symptom relief",
      description: "Menopause symptom relief",
      benefits: "Reduces hot flashes, Mood support",
      usage: "Take 1 capsule twice daily",
      warnings: "Consult doctor"
    },
    ta: {
      shortDesc: "Menopause symptom relief",
      description: "Menopause symptom relief",
      benefits: "Reduces hot flashes, Mood support",
      usage: "Take 1 capsule twice daily",
      warnings: "Consult doctor"
    },
    te: {
      shortDesc: "Menopause symptom relief",
      description: "Menopause symptom relief",
      benefits: "Reduces hot flashes, Mood support",
      usage: "Take 1 capsule twice daily",
      warnings: "Consult doctor"
    },
    bn: {
      shortDesc: "Menopause symptom relief",
      description: "Menopause symptom relief",
      benefits: "Reduces hot flashes, Mood support",
      usage: "Take 1 capsule twice daily",
      warnings: "Consult doctor"
    },
    mr: {
      shortDesc: "Menopause symptom relief",
      description: "Menopause symptom relief",
      benefits: "Reduces hot flashes, Mood support",
      usage: "Take 1 capsule twice daily",
      warnings: "Consult doctor"
    },
    gu: {
      shortDesc: "Menopause symptom relief",
      description: "Menopause symptom relief",
      benefits: "Reduces hot flashes, Mood support",
      usage: "Take 1 capsule twice daily",
      warnings: "Consult doctor"
    },
    kn: {
      shortDesc: "Menopause symptom relief",
      description: "Menopause symptom relief",
      benefits: "Reduces hot flashes, Mood support",
      usage: "Take 1 capsule twice daily",
      warnings: "Consult doctor"
    },
    ml: {
      shortDesc: "Menopause symptom relief",
      description: "Menopause symptom relief",
      benefits: "Reduces hot flashes, Mood support",
      usage: "Take 1 capsule twice daily",
      warnings: "Consult doctor"
    },
    pa: {
      shortDesc: "Menopause symptom relief",
      description: "Menopause symptom relief",
      benefits: "Reduces hot flashes, Mood support",
      usage: "Take 1 capsule twice daily",
      warnings: "Consult doctor"
    },
    or: {
      shortDesc: "Menopause symptom relief",
      description: "Menopause symptom relief",
      benefits: "Reduces hot flashes, Mood support",
      usage: "Take 1 capsule twice daily",
      warnings: "Consult doctor"
    },
    as: {
      shortDesc: "Menopause symptom relief",
      description: "Menopause symptom relief",
      benefits: "Reduces hot flashes, Mood support",
      usage: "Take 1 capsule twice daily",
      warnings: "Consult doctor"
    },
    ur: {
      shortDesc: "Menopause symptom relief",
      description: "Menopause symptom relief",
      benefits: "Reduces hot flashes, Mood support",
      usage: "Take 1 capsule twice daily",
      warnings: "Consult doctor"
    }
  },
  "WOM009": {
    en: {
      shortDesc: "Fast menstrual pain relief",
      description: "Fast menstrual pain relief",
      benefits: "Reduces cramps, Non-drowsy",
      usage: "Take 1-2 tablets as needed",
      warnings: "Do not exceed 6 tablets daily"
    },
    hi: {
      shortDesc: "Fast menstrual pain relief",
      description: "Fast menstrual pain relief",
      benefits: "Reduces cramps, Non-drowsy",
      usage: "Take 1-2 tablets as needed",
      warnings: "Do not exceed 6 tablets daily"
    },
    ta: {
      shortDesc: "Fast menstrual pain relief",
      description: "Fast menstrual pain relief",
      benefits: "Reduces cramps, Non-drowsy",
      usage: "Take 1-2 tablets as needed",
      warnings: "Do not exceed 6 tablets daily"
    },
    te: {
      shortDesc: "Fast menstrual pain relief",
      description: "Fast menstrual pain relief",
      benefits: "Reduces cramps, Non-drowsy",
      usage: "Take 1-2 tablets as needed",
      warnings: "Do not exceed 6 tablets daily"
    },
    bn: {
      shortDesc: "Fast menstrual pain relief",
      description: "Fast menstrual pain relief",
      benefits: "Reduces cramps, Non-drowsy",
      usage: "Take 1-2 tablets as needed",
      warnings: "Do not exceed 6 tablets daily"
    },
    mr: {
      shortDesc: "Fast menstrual pain relief",
      description: "Fast menstrual pain relief",
      benefits: "Reduces cramps, Non-drowsy",
      usage: "Take 1-2 tablets as needed",
      warnings: "Do not exceed 6 tablets daily"
    },
    gu: {
      shortDesc: "Fast menstrual pain relief",
      description: "Fast menstrual pain relief",
      benefits: "Reduces cramps, Non-drowsy",
      usage: "Take 1-2 tablets as needed",
      warnings: "Do not exceed 6 tablets daily"
    },
    kn: {
      shortDesc: "Fast menstrual pain relief",
      description: "Fast menstrual pain relief",
      benefits: "Reduces cramps, Non-drowsy",
      usage: "Take 1-2 tablets as needed",
      warnings: "Do not exceed 6 tablets daily"
    },
    ml: {
      shortDesc: "Fast menstrual pain relief",
      description: "Fast menstrual pain relief",
      benefits: "Reduces cramps, Non-drowsy",
      usage: "Take 1-2 tablets as needed",
      warnings: "Do not exceed 6 tablets daily"
    },
    pa: {
      shortDesc: "Fast menstrual pain relief",
      description: "Fast menstrual pain relief",
      benefits: "Reduces cramps, Non-drowsy",
      usage: "Take 1-2 tablets as needed",
      warnings: "Do not exceed 6 tablets daily"
    },
    or: {
      shortDesc: "Fast menstrual pain relief",
      description: "Fast menstrual pain relief",
      benefits: "Reduces cramps, Non-drowsy",
      usage: "Take 1-2 tablets as needed",
      warnings: "Do not exceed 6 tablets daily"
    },
    as: {
      shortDesc: "Fast menstrual pain relief",
      description: "Fast menstrual pain relief",
      benefits: "Reduces cramps, Non-drowsy",
      usage: "Take 1-2 tablets as needed",
      warnings: "Do not exceed 6 tablets daily"
    },
    ur: {
      shortDesc: "Fast menstrual pain relief",
      description: "Fast menstrual pain relief",
      benefits: "Reduces cramps, Non-drowsy",
      usage: "Take 1-2 tablets as needed",
      warnings: "Do not exceed 6 tablets daily"
    }
  },
  "WOM010": {
    en: {
      shortDesc: "Collagen for skin health",
      description: "Collagen for skin health",
      benefits: "Anti-aging, Skin elasticity",
      usage: "Mix 1 scoop daily",
      warnings: "Store in cool place"
    },
    hi: {
      shortDesc: "Collagen for skin health",
      description: "Collagen for skin health",
      benefits: "Anti-aging, Skin elasticity",
      usage: "Mix 1 scoop daily",
      warnings: "Store in cool place"
    },
    ta: {
      shortDesc: "Collagen for skin health",
      description: "Collagen for skin health",
      benefits: "Anti-aging, Skin elasticity",
      usage: "Mix 1 scoop daily",
      warnings: "Store in cool place"
    },
    te: {
      shortDesc: "Collagen for skin health",
      description: "Collagen for skin health",
      benefits: "Anti-aging, Skin elasticity",
      usage: "Mix 1 scoop daily",
      warnings: "Store in cool place"
    },
    bn: {
      shortDesc: "Collagen for skin health",
      description: "Collagen for skin health",
      benefits: "Anti-aging, Skin elasticity",
      usage: "Mix 1 scoop daily",
      warnings: "Store in cool place"
    },
    mr: {
      shortDesc: "Collagen for skin health",
      description: "Collagen for skin health",
      benefits: "Anti-aging, Skin elasticity",
      usage: "Mix 1 scoop daily",
      warnings: "Store in cool place"
    },
    gu: {
      shortDesc: "Collagen for skin health",
      description: "Collagen for skin health",
      benefits: "Anti-aging, Skin elasticity",
      usage: "Mix 1 scoop daily",
      warnings: "Store in cool place"
    },
    kn: {
      shortDesc: "Collagen for skin health",
      description: "Collagen for skin health",
      benefits: "Anti-aging, Skin elasticity",
      usage: "Mix 1 scoop daily",
      warnings: "Store in cool place"
    },
    ml: {
      shortDesc: "Collagen for skin health",
      description: "Collagen for skin health",
      benefits: "Anti-aging, Skin elasticity",
      usage: "Mix 1 scoop daily",
      warnings: "Store in cool place"
    },
    pa: {
      shortDesc: "Collagen for skin health",
      description: "Collagen for skin health",
      benefits: "Anti-aging, Skin elasticity",
      usage: "Mix 1 scoop daily",
      warnings: "Store in cool place"
    },
    or: {
      shortDesc: "Collagen for skin health",
      description: "Collagen for skin health",
      benefits: "Anti-aging, Skin elasticity",
      usage: "Mix 1 scoop daily",
      warnings: "Store in cool place"
    },
    as: {
      shortDesc: "Collagen for skin health",
      description: "Collagen for skin health",
      benefits: "Anti-aging, Skin elasticity",
      usage: "Mix 1 scoop daily",
      warnings: "Store in cool place"
    },
    ur: {
      shortDesc: "Collagen for skin health",
      description: "Collagen for skin health",
      benefits: "Anti-aging, Skin elasticity",
      usage: "Mix 1 scoop daily",
      warnings: "Store in cool place"
    }
  },
  "WOM011": {
    en: {
      shortDesc: "Vitamins for glowing skin",
      description: "Vitamins for glowing skin",
      benefits: "Brightens skin, Reduces acne",
      usage: "Take 2 capsules daily",
      warnings: "Use sunscreen"
    },
    hi: {
      shortDesc: "Vitamins for glowing skin",
      description: "Vitamins for glowing skin",
      benefits: "Brightens skin, Reduces acne",
      usage: "Take 2 capsules daily",
      warnings: "Use sunscreen"
    },
    ta: {
      shortDesc: "Vitamins for glowing skin",
      description: "Vitamins for glowing skin",
      benefits: "Brightens skin, Reduces acne",
      usage: "Take 2 capsules daily",
      warnings: "Use sunscreen"
    },
    te: {
      shortDesc: "Vitamins for glowing skin",
      description: "Vitamins for glowing skin",
      benefits: "Brightens skin, Reduces acne",
      usage: "Take 2 capsules daily",
      warnings: "Use sunscreen"
    },
    bn: {
      shortDesc: "Vitamins for glowing skin",
      description: "Vitamins for glowing skin",
      benefits: "Brightens skin, Reduces acne",
      usage: "Take 2 capsules daily",
      warnings: "Use sunscreen"
    },
    mr: {
      shortDesc: "Vitamins for glowing skin",
      description: "Vitamins for glowing skin",
      benefits: "Brightens skin, Reduces acne",
      usage: "Take 2 capsules daily",
      warnings: "Use sunscreen"
    },
    gu: {
      shortDesc: "Vitamins for glowing skin",
      description: "Vitamins for glowing skin",
      benefits: "Brightens skin, Reduces acne",
      usage: "Take 2 capsules daily",
      warnings: "Use sunscreen"
    },
    kn: {
      shortDesc: "Vitamins for glowing skin",
      description: "Vitamins for glowing skin",
      benefits: "Brightens skin, Reduces acne",
      usage: "Take 2 capsules daily",
      warnings: "Use sunscreen"
    },
    ml: {
      shortDesc: "Vitamins for glowing skin",
      description: "Vitamins for glowing skin",
      benefits: "Brightens skin, Reduces acne",
      usage: "Take 2 capsules daily",
      warnings: "Use sunscreen"
    },
    pa: {
      shortDesc: "Vitamins for glowing skin",
      description: "Vitamins for glowing skin",
      benefits: "Brightens skin, Reduces acne",
      usage: "Take 2 capsules daily",
      warnings: "Use sunscreen"
    },
    or: {
      shortDesc: "Vitamins for glowing skin",
      description: "Vitamins for glowing skin",
      benefits: "Brightens skin, Reduces acne",
      usage: "Take 2 capsules daily",
      warnings: "Use sunscreen"
    },
    as: {
      shortDesc: "Vitamins for glowing skin",
      description: "Vitamins for glowing skin",
      benefits: "Brightens skin, Reduces acne",
      usage: "Take 2 capsules daily",
      warnings: "Use sunscreen"
    },
    ur: {
      shortDesc: "Vitamins for glowing skin",
      description: "Vitamins for glowing skin",
      benefits: "Brightens skin, Reduces acne",
      usage: "Take 2 capsules daily",
      warnings: "Use sunscreen"
    }
  },
  "WOM012": {
    en: {
      shortDesc: "Hair growth serum",
      description: "Hair growth serum",
      benefits: "Reduces hair fall, Promotes growth",
      usage: "Apply to scalp twice daily",
      warnings: "For external use only"
    },
    hi: {
      shortDesc: "Hair growth serum",
      description: "Hair growth serum",
      benefits: "Reduces hair fall, Promotes growth",
      usage: "Apply to scalp twice daily",
      warnings: "For external use only"
    },
    ta: {
      shortDesc: "Hair growth serum",
      description: "Hair growth serum",
      benefits: "Reduces hair fall, Promotes growth",
      usage: "Apply to scalp twice daily",
      warnings: "For external use only"
    },
    te: {
      shortDesc: "Hair growth serum",
      description: "Hair growth serum",
      benefits: "Reduces hair fall, Promotes growth",
      usage: "Apply to scalp twice daily",
      warnings: "For external use only"
    },
    bn: {
      shortDesc: "Hair growth serum",
      description: "Hair growth serum",
      benefits: "Reduces hair fall, Promotes growth",
      usage: "Apply to scalp twice daily",
      warnings: "For external use only"
    },
    mr: {
      shortDesc: "Hair growth serum",
      description: "Hair growth serum",
      benefits: "Reduces hair fall, Promotes growth",
      usage: "Apply to scalp twice daily",
      warnings: "For external use only"
    },
    gu: {
      shortDesc: "Hair growth serum",
      description: "Hair growth serum",
      benefits: "Reduces hair fall, Promotes growth",
      usage: "Apply to scalp twice daily",
      warnings: "For external use only"
    },
    kn: {
      shortDesc: "Hair growth serum",
      description: "Hair growth serum",
      benefits: "Reduces hair fall, Promotes growth",
      usage: "Apply to scalp twice daily",
      warnings: "For external use only"
    },
    ml: {
      shortDesc: "Hair growth serum",
      description: "Hair growth serum",
      benefits: "Reduces hair fall, Promotes growth",
      usage: "Apply to scalp twice daily",
      warnings: "For external use only"
    },
    pa: {
      shortDesc: "Hair growth serum",
      description: "Hair growth serum",
      benefits: "Reduces hair fall, Promotes growth",
      usage: "Apply to scalp twice daily",
      warnings: "For external use only"
    },
    or: {
      shortDesc: "Hair growth serum",
      description: "Hair growth serum",
      benefits: "Reduces hair fall, Promotes growth",
      usage: "Apply to scalp twice daily",
      warnings: "For external use only"
    },
    as: {
      shortDesc: "Hair growth serum",
      description: "Hair growth serum",
      benefits: "Reduces hair fall, Promotes growth",
      usage: "Apply to scalp twice daily",
      warnings: "For external use only"
    },
    ur: {
      shortDesc: "Hair growth serum",
      description: "Hair growth serum",
      benefits: "Reduces hair fall, Promotes growth",
      usage: "Apply to scalp twice daily",
      warnings: "For external use only"
    }
  },
  "WOM013": {
    en: {
      shortDesc: "Strengthens brittle nails",
      description: "Strengthens brittle nails",
      benefits: "Stronger nails, Prevents breaking",
      usage: "Apply daily",
      warnings: "Avoid contact with eyes"
    },
    hi: {
      shortDesc: "Strengthens brittle nails",
      description: "Strengthens brittle nails",
      benefits: "Stronger nails, Prevents breaking",
      usage: "Apply daily",
      warnings: "Avoid contact with eyes"
    },
    ta: {
      shortDesc: "Strengthens brittle nails",
      description: "Strengthens brittle nails",
      benefits: "Stronger nails, Prevents breaking",
      usage: "Apply daily",
      warnings: "Avoid contact with eyes"
    },
    te: {
      shortDesc: "Strengthens brittle nails",
      description: "Strengthens brittle nails",
      benefits: "Stronger nails, Prevents breaking",
      usage: "Apply daily",
      warnings: "Avoid contact with eyes"
    },
    bn: {
      shortDesc: "Strengthens brittle nails",
      description: "Strengthens brittle nails",
      benefits: "Stronger nails, Prevents breaking",
      usage: "Apply daily",
      warnings: "Avoid contact with eyes"
    },
    mr: {
      shortDesc: "Strengthens brittle nails",
      description: "Strengthens brittle nails",
      benefits: "Stronger nails, Prevents breaking",
      usage: "Apply daily",
      warnings: "Avoid contact with eyes"
    },
    gu: {
      shortDesc: "Strengthens brittle nails",
      description: "Strengthens brittle nails",
      benefits: "Stronger nails, Prevents breaking",
      usage: "Apply daily",
      warnings: "Avoid contact with eyes"
    },
    kn: {
      shortDesc: "Strengthens brittle nails",
      description: "Strengthens brittle nails",
      benefits: "Stronger nails, Prevents breaking",
      usage: "Apply daily",
      warnings: "Avoid contact with eyes"
    },
    ml: {
      shortDesc: "Strengthens brittle nails",
      description: "Strengthens brittle nails",
      benefits: "Stronger nails, Prevents breaking",
      usage: "Apply daily",
      warnings: "Avoid contact with eyes"
    },
    pa: {
      shortDesc: "Strengthens brittle nails",
      description: "Strengthens brittle nails",
      benefits: "Stronger nails, Prevents breaking",
      usage: "Apply daily",
      warnings: "Avoid contact with eyes"
    },
    or: {
      shortDesc: "Strengthens brittle nails",
      description: "Strengthens brittle nails",
      benefits: "Stronger nails, Prevents breaking",
      usage: "Apply daily",
      warnings: "Avoid contact with eyes"
    },
    as: {
      shortDesc: "Strengthens brittle nails",
      description: "Strengthens brittle nails",
      benefits: "Stronger nails, Prevents breaking",
      usage: "Apply daily",
      warnings: "Avoid contact with eyes"
    },
    ur: {
      shortDesc: "Strengthens brittle nails",
      description: "Strengthens brittle nails",
      benefits: "Stronger nails, Prevents breaking",
      usage: "Apply daily",
      warnings: "Avoid contact with eyes"
    }
  },
  "WOM014": {
    en: {
      shortDesc: "Anti-aging face cream",
      description: "Anti-aging face cream",
      benefits: "Reduces wrinkles, Hydrates skin",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    hi: {
      shortDesc: "Anti-aging face cream",
      description: "Anti-aging face cream",
      benefits: "Reduces wrinkles, Hydrates skin",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    ta: {
      shortDesc: "Anti-aging face cream",
      description: "Anti-aging face cream",
      benefits: "Reduces wrinkles, Hydrates skin",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    te: {
      shortDesc: "Anti-aging face cream",
      description: "Anti-aging face cream",
      benefits: "Reduces wrinkles, Hydrates skin",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    bn: {
      shortDesc: "Anti-aging face cream",
      description: "Anti-aging face cream",
      benefits: "Reduces wrinkles, Hydrates skin",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    mr: {
      shortDesc: "Anti-aging face cream",
      description: "Anti-aging face cream",
      benefits: "Reduces wrinkles, Hydrates skin",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    gu: {
      shortDesc: "Anti-aging face cream",
      description: "Anti-aging face cream",
      benefits: "Reduces wrinkles, Hydrates skin",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    kn: {
      shortDesc: "Anti-aging face cream",
      description: "Anti-aging face cream",
      benefits: "Reduces wrinkles, Hydrates skin",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    ml: {
      shortDesc: "Anti-aging face cream",
      description: "Anti-aging face cream",
      benefits: "Reduces wrinkles, Hydrates skin",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    pa: {
      shortDesc: "Anti-aging face cream",
      description: "Anti-aging face cream",
      benefits: "Reduces wrinkles, Hydrates skin",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    or: {
      shortDesc: "Anti-aging face cream",
      description: "Anti-aging face cream",
      benefits: "Reduces wrinkles, Hydrates skin",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    as: {
      shortDesc: "Anti-aging face cream",
      description: "Anti-aging face cream",
      benefits: "Reduces wrinkles, Hydrates skin",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    },
    ur: {
      shortDesc: "Anti-aging face cream",
      description: "Anti-aging face cream",
      benefits: "Reduces wrinkles, Hydrates skin",
      usage: "Apply twice daily",
      warnings: "Patch test first"
    }
  },
  "WOM015": {
    en: {
      shortDesc: "Moisturizing body lotion",
      description: "Moisturizing body lotion",
      benefits: "Deep hydration, Smooth skin",
      usage: "Apply after shower",
      warnings: "For external use"
    },
    hi: {
      shortDesc: "Moisturizing body lotion",
      description: "Moisturizing body lotion",
      benefits: "Deep hydration, Smooth skin",
      usage: "Apply after shower",
      warnings: "For external use"
    },
    ta: {
      shortDesc: "Moisturizing body lotion",
      description: "Moisturizing body lotion",
      benefits: "Deep hydration, Smooth skin",
      usage: "Apply after shower",
      warnings: "For external use"
    },
    te: {
      shortDesc: "Moisturizing body lotion",
      description: "Moisturizing body lotion",
      benefits: "Deep hydration, Smooth skin",
      usage: "Apply after shower",
      warnings: "For external use"
    },
    bn: {
      shortDesc: "Moisturizing body lotion",
      description: "Moisturizing body lotion",
      benefits: "Deep hydration, Smooth skin",
      usage: "Apply after shower",
      warnings: "For external use"
    },
    mr: {
      shortDesc: "Moisturizing body lotion",
      description: "Moisturizing body lotion",
      benefits: "Deep hydration, Smooth skin",
      usage: "Apply after shower",
      warnings: "For external use"
    },
    gu: {
      shortDesc: "Moisturizing body lotion",
      description: "Moisturizing body lotion",
      benefits: "Deep hydration, Smooth skin",
      usage: "Apply after shower",
      warnings: "For external use"
    },
    kn: {
      shortDesc: "Moisturizing body lotion",
      description: "Moisturizing body lotion",
      benefits: "Deep hydration, Smooth skin",
      usage: "Apply after shower",
      warnings: "For external use"
    },
    ml: {
      shortDesc: "Moisturizing body lotion",
      description: "Moisturizing body lotion",
      benefits: "Deep hydration, Smooth skin",
      usage: "Apply after shower",
      warnings: "For external use"
    },
    pa: {
      shortDesc: "Moisturizing body lotion",
      description: "Moisturizing body lotion",
      benefits: "Deep hydration, Smooth skin",
      usage: "Apply after shower",
      warnings: "For external use"
    },
    or: {
      shortDesc: "Moisturizing body lotion",
      description: "Moisturizing body lotion",
      benefits: "Deep hydration, Smooth skin",
      usage: "Apply after shower",
      warnings: "For external use"
    },
    as: {
      shortDesc: "Moisturizing body lotion",
      description: "Moisturizing body lotion",
      benefits: "Deep hydration, Smooth skin",
      usage: "Apply after shower",
      warnings: "For external use"
    },
    ur: {
      shortDesc: "Moisturizing body lotion",
      description: "Moisturizing body lotion",
      benefits: "Deep hydration, Smooth skin",
      usage: "Apply after shower",
      warnings: "For external use"
    }
  },
  "WOM016": {
    en: {
      shortDesc: "Organic cotton pads",
      description: "Organic cotton pads",
      benefits: "100% organic, Super absorbent",
      usage: "Change every 4-6 hours",
      warnings: "Dispose properly"
    },
    hi: {
      shortDesc: "Organic cotton pads",
      description: "Organic cotton pads",
      benefits: "100% organic, Super absorbent",
      usage: "Change every 4-6 hours",
      warnings: "Dispose properly"
    },
    ta: {
      shortDesc: "Organic cotton pads",
      description: "Organic cotton pads",
      benefits: "100% organic, Super absorbent",
      usage: "Change every 4-6 hours",
      warnings: "Dispose properly"
    },
    te: {
      shortDesc: "Organic cotton pads",
      description: "Organic cotton pads",
      benefits: "100% organic, Super absorbent",
      usage: "Change every 4-6 hours",
      warnings: "Dispose properly"
    },
    bn: {
      shortDesc: "Organic cotton pads",
      description: "Organic cotton pads",
      benefits: "100% organic, Super absorbent",
      usage: "Change every 4-6 hours",
      warnings: "Dispose properly"
    },
    mr: {
      shortDesc: "Organic cotton pads",
      description: "Organic cotton pads",
      benefits: "100% organic, Super absorbent",
      usage: "Change every 4-6 hours",
      warnings: "Dispose properly"
    },
    gu: {
      shortDesc: "Organic cotton pads",
      description: "Organic cotton pads",
      benefits: "100% organic, Super absorbent",
      usage: "Change every 4-6 hours",
      warnings: "Dispose properly"
    },
    kn: {
      shortDesc: "Organic cotton pads",
      description: "Organic cotton pads",
      benefits: "100% organic, Super absorbent",
      usage: "Change every 4-6 hours",
      warnings: "Dispose properly"
    },
    ml: {
      shortDesc: "Organic cotton pads",
      description: "Organic cotton pads",
      benefits: "100% organic, Super absorbent",
      usage: "Change every 4-6 hours",
      warnings: "Dispose properly"
    },
    pa: {
      shortDesc: "Organic cotton pads",
      description: "Organic cotton pads",
      benefits: "100% organic, Super absorbent",
      usage: "Change every 4-6 hours",
      warnings: "Dispose properly"
    },
    or: {
      shortDesc: "Organic cotton pads",
      description: "Organic cotton pads",
      benefits: "100% organic, Super absorbent",
      usage: "Change every 4-6 hours",
      warnings: "Dispose properly"
    },
    as: {
      shortDesc: "Organic cotton pads",
      description: "Organic cotton pads",
      benefits: "100% organic, Super absorbent",
      usage: "Change every 4-6 hours",
      warnings: "Dispose properly"
    },
    ur: {
      shortDesc: "Organic cotton pads",
      description: "Organic cotton pads",
      benefits: "100% organic, Super absorbent",
      usage: "Change every 4-6 hours",
      warnings: "Dispose properly"
    }
  },
  "WOM017": {
    en: {
      shortDesc: "pH balanced intimate wash",
      description: "pH balanced intimate wash",
      benefits: "Maintains pH, Prevents infections",
      usage: "Use daily",
      warnings: "For external use only"
    },
    hi: {
      shortDesc: "pH balanced intimate wash",
      description: "pH balanced intimate wash",
      benefits: "Maintains pH, Prevents infections",
      usage: "Use daily",
      warnings: "For external use only"
    },
    ta: {
      shortDesc: "pH balanced intimate wash",
      description: "pH balanced intimate wash",
      benefits: "Maintains pH, Prevents infections",
      usage: "Use daily",
      warnings: "For external use only"
    },
    te: {
      shortDesc: "pH balanced intimate wash",
      description: "pH balanced intimate wash",
      benefits: "Maintains pH, Prevents infections",
      usage: "Use daily",
      warnings: "For external use only"
    },
    bn: {
      shortDesc: "pH balanced intimate wash",
      description: "pH balanced intimate wash",
      benefits: "Maintains pH, Prevents infections",
      usage: "Use daily",
      warnings: "For external use only"
    },
    mr: {
      shortDesc: "pH balanced intimate wash",
      description: "pH balanced intimate wash",
      benefits: "Maintains pH, Prevents infections",
      usage: "Use daily",
      warnings: "For external use only"
    },
    gu: {
      shortDesc: "pH balanced intimate wash",
      description: "pH balanced intimate wash",
      benefits: "Maintains pH, Prevents infections",
      usage: "Use daily",
      warnings: "For external use only"
    },
    kn: {
      shortDesc: "pH balanced intimate wash",
      description: "pH balanced intimate wash",
      benefits: "Maintains pH, Prevents infections",
      usage: "Use daily",
      warnings: "For external use only"
    },
    ml: {
      shortDesc: "pH balanced intimate wash",
      description: "pH balanced intimate wash",
      benefits: "Maintains pH, Prevents infections",
      usage: "Use daily",
      warnings: "For external use only"
    },
    pa: {
      shortDesc: "pH balanced intimate wash",
      description: "pH balanced intimate wash",
      benefits: "Maintains pH, Prevents infections",
      usage: "Use daily",
      warnings: "For external use only"
    },
    or: {
      shortDesc: "pH balanced intimate wash",
      description: "pH balanced intimate wash",
      benefits: "Maintains pH, Prevents infections",
      usage: "Use daily",
      warnings: "For external use only"
    },
    as: {
      shortDesc: "pH balanced intimate wash",
      description: "pH balanced intimate wash",
      benefits: "Maintains pH, Prevents infections",
      usage: "Use daily",
      warnings: "For external use only"
    },
    ur: {
      shortDesc: "pH balanced intimate wash",
      description: "pH balanced intimate wash",
      benefits: "Maintains pH, Prevents infections",
      usage: "Use daily",
      warnings: "For external use only"
    }
  },
  "WOM018": {
    en: {
      shortDesc: "Nursing breast pads",
      description: "Nursing breast pads",
      benefits: "Leak protection, Soft material",
      usage: "Change as needed",
      warnings: "Single use only"
    },
    hi: {
      shortDesc: "Nursing breast pads",
      description: "Nursing breast pads",
      benefits: "Leak protection, Soft material",
      usage: "Change as needed",
      warnings: "Single use only"
    },
    ta: {
      shortDesc: "Nursing breast pads",
      description: "Nursing breast pads",
      benefits: "Leak protection, Soft material",
      usage: "Change as needed",
      warnings: "Single use only"
    },
    te: {
      shortDesc: "Nursing breast pads",
      description: "Nursing breast pads",
      benefits: "Leak protection, Soft material",
      usage: "Change as needed",
      warnings: "Single use only"
    },
    bn: {
      shortDesc: "Nursing breast pads",
      description: "Nursing breast pads",
      benefits: "Leak protection, Soft material",
      usage: "Change as needed",
      warnings: "Single use only"
    },
    mr: {
      shortDesc: "Nursing breast pads",
      description: "Nursing breast pads",
      benefits: "Leak protection, Soft material",
      usage: "Change as needed",
      warnings: "Single use only"
    },
    gu: {
      shortDesc: "Nursing breast pads",
      description: "Nursing breast pads",
      benefits: "Leak protection, Soft material",
      usage: "Change as needed",
      warnings: "Single use only"
    },
    kn: {
      shortDesc: "Nursing breast pads",
      description: "Nursing breast pads",
      benefits: "Leak protection, Soft material",
      usage: "Change as needed",
      warnings: "Single use only"
    },
    ml: {
      shortDesc: "Nursing breast pads",
      description: "Nursing breast pads",
      benefits: "Leak protection, Soft material",
      usage: "Change as needed",
      warnings: "Single use only"
    },
    pa: {
      shortDesc: "Nursing breast pads",
      description: "Nursing breast pads",
      benefits: "Leak protection, Soft material",
      usage: "Change as needed",
      warnings: "Single use only"
    },
    or: {
      shortDesc: "Nursing breast pads",
      description: "Nursing breast pads",
      benefits: "Leak protection, Soft material",
      usage: "Change as needed",
      warnings: "Single use only"
    },
    as: {
      shortDesc: "Nursing breast pads",
      description: "Nursing breast pads",
      benefits: "Leak protection, Soft material",
      usage: "Change as needed",
      warnings: "Single use only"
    },
    ur: {
      shortDesc: "Nursing breast pads",
      description: "Nursing breast pads",
      benefits: "Leak protection, Soft material",
      usage: "Change as needed",
      warnings: "Single use only"
    }
  },
  "WOM019": {
    en: {
      shortDesc: "Early detection pregnancy test",
      description: "Early detection pregnancy test",
      benefits: "99% accurate, Easy to use",
      usage: "Use with first morning urine",
      warnings: "Read instructions carefully"
    },
    hi: {
      shortDesc: "Early detection pregnancy test",
      description: "Early detection pregnancy test",
      benefits: "99% accurate, Easy to use",
      usage: "Use with first morning urine",
      warnings: "Read instructions carefully"
    },
    ta: {
      shortDesc: "Early detection pregnancy test",
      description: "Early detection pregnancy test",
      benefits: "99% accurate, Easy to use",
      usage: "Use with first morning urine",
      warnings: "Read instructions carefully"
    },
    te: {
      shortDesc: "Early detection pregnancy test",
      description: "Early detection pregnancy test",
      benefits: "99% accurate, Easy to use",
      usage: "Use with first morning urine",
      warnings: "Read instructions carefully"
    },
    bn: {
      shortDesc: "Early detection pregnancy test",
      description: "Early detection pregnancy test",
      benefits: "99% accurate, Easy to use",
      usage: "Use with first morning urine",
      warnings: "Read instructions carefully"
    },
    mr: {
      shortDesc: "Early detection pregnancy test",
      description: "Early detection pregnancy test",
      benefits: "99% accurate, Easy to use",
      usage: "Use with first morning urine",
      warnings: "Read instructions carefully"
    },
    gu: {
      shortDesc: "Early detection pregnancy test",
      description: "Early detection pregnancy test",
      benefits: "99% accurate, Easy to use",
      usage: "Use with first morning urine",
      warnings: "Read instructions carefully"
    },
    kn: {
      shortDesc: "Early detection pregnancy test",
      description: "Early detection pregnancy test",
      benefits: "99% accurate, Easy to use",
      usage: "Use with first morning urine",
      warnings: "Read instructions carefully"
    },
    ml: {
      shortDesc: "Early detection pregnancy test",
      description: "Early detection pregnancy test",
      benefits: "99% accurate, Easy to use",
      usage: "Use with first morning urine",
      warnings: "Read instructions carefully"
    },
    pa: {
      shortDesc: "Early detection pregnancy test",
      description: "Early detection pregnancy test",
      benefits: "99% accurate, Easy to use",
      usage: "Use with first morning urine",
      warnings: "Read instructions carefully"
    },
    or: {
      shortDesc: "Early detection pregnancy test",
      description: "Early detection pregnancy test",
      benefits: "99% accurate, Easy to use",
      usage: "Use with first morning urine",
      warnings: "Read instructions carefully"
    },
    as: {
      shortDesc: "Early detection pregnancy test",
      description: "Early detection pregnancy test",
      benefits: "99% accurate, Easy to use",
      usage: "Use with first morning urine",
      warnings: "Read instructions carefully"
    },
    ur: {
      shortDesc: "Early detection pregnancy test",
      description: "Early detection pregnancy test",
      benefits: "99% accurate, Easy to use",
      usage: "Use with first morning urine",
      warnings: "Read instructions carefully"
    }
  },
  "WOM020": {
    en: {
      shortDesc: "Ovulation prediction kit",
      description: "Ovulation prediction kit",
      benefits: "Tracks fertile days, Easy to read",
      usage: "Test daily during cycle",
      warnings: "Follow instructions"
    },
    hi: {
      shortDesc: "Ovulation prediction kit",
      description: "Ovulation prediction kit",
      benefits: "Tracks fertile days, Easy to read",
      usage: "Test daily during cycle",
      warnings: "Follow instructions"
    },
    ta: {
      shortDesc: "Ovulation prediction kit",
      description: "Ovulation prediction kit",
      benefits: "Tracks fertile days, Easy to read",
      usage: "Test daily during cycle",
      warnings: "Follow instructions"
    },
    te: {
      shortDesc: "Ovulation prediction kit",
      description: "Ovulation prediction kit",
      benefits: "Tracks fertile days, Easy to read",
      usage: "Test daily during cycle",
      warnings: "Follow instructions"
    },
    bn: {
      shortDesc: "Ovulation prediction kit",
      description: "Ovulation prediction kit",
      benefits: "Tracks fertile days, Easy to read",
      usage: "Test daily during cycle",
      warnings: "Follow instructions"
    },
    mr: {
      shortDesc: "Ovulation prediction kit",
      description: "Ovulation prediction kit",
      benefits: "Tracks fertile days, Easy to read",
      usage: "Test daily during cycle",
      warnings: "Follow instructions"
    },
    gu: {
      shortDesc: "Ovulation prediction kit",
      description: "Ovulation prediction kit",
      benefits: "Tracks fertile days, Easy to read",
      usage: "Test daily during cycle",
      warnings: "Follow instructions"
    },
    kn: {
      shortDesc: "Ovulation prediction kit",
      description: "Ovulation prediction kit",
      benefits: "Tracks fertile days, Easy to read",
      usage: "Test daily during cycle",
      warnings: "Follow instructions"
    },
    ml: {
      shortDesc: "Ovulation prediction kit",
      description: "Ovulation prediction kit",
      benefits: "Tracks fertile days, Easy to read",
      usage: "Test daily during cycle",
      warnings: "Follow instructions"
    },
    pa: {
      shortDesc: "Ovulation prediction kit",
      description: "Ovulation prediction kit",
      benefits: "Tracks fertile days, Easy to read",
      usage: "Test daily during cycle",
      warnings: "Follow instructions"
    },
    or: {
      shortDesc: "Ovulation prediction kit",
      description: "Ovulation prediction kit",
      benefits: "Tracks fertile days, Easy to read",
      usage: "Test daily during cycle",
      warnings: "Follow instructions"
    },
    as: {
      shortDesc: "Ovulation prediction kit",
      description: "Ovulation prediction kit",
      benefits: "Tracks fertile days, Easy to read",
      usage: "Test daily during cycle",
      warnings: "Follow instructions"
    },
    ur: {
      shortDesc: "Ovulation prediction kit",
      description: "Ovulation prediction kit",
      benefits: "Tracks fertile days, Easy to read",
      usage: "Test daily during cycle",
      warnings: "Follow instructions"
    }
  },
  "WOM021": {
    en: {
      shortDesc: "Energy supplement for women",
      description: "Energy supplement for women",
      benefits: "Reduces fatigue, Boosts stamina",
      usage: "Take 1 capsule daily",
      warnings: "Contains caffeine"
    },
    hi: {
      shortDesc: "Energy supplement for women",
      description: "Energy supplement for women",
      benefits: "Reduces fatigue, Boosts stamina",
      usage: "Take 1 capsule daily",
      warnings: "Contains caffeine"
    },
    ta: {
      shortDesc: "Energy supplement for women",
      description: "Energy supplement for women",
      benefits: "Reduces fatigue, Boosts stamina",
      usage: "Take 1 capsule daily",
      warnings: "Contains caffeine"
    },
    te: {
      shortDesc: "Energy supplement for women",
      description: "Energy supplement for women",
      benefits: "Reduces fatigue, Boosts stamina",
      usage: "Take 1 capsule daily",
      warnings: "Contains caffeine"
    },
    bn: {
      shortDesc: "Energy supplement for women",
      description: "Energy supplement for women",
      benefits: "Reduces fatigue, Boosts stamina",
      usage: "Take 1 capsule daily",
      warnings: "Contains caffeine"
    },
    mr: {
      shortDesc: "Energy supplement for women",
      description: "Energy supplement for women",
      benefits: "Reduces fatigue, Boosts stamina",
      usage: "Take 1 capsule daily",
      warnings: "Contains caffeine"
    },
    gu: {
      shortDesc: "Energy supplement for women",
      description: "Energy supplement for women",
      benefits: "Reduces fatigue, Boosts stamina",
      usage: "Take 1 capsule daily",
      warnings: "Contains caffeine"
    },
    kn: {
      shortDesc: "Energy supplement for women",
      description: "Energy supplement for women",
      benefits: "Reduces fatigue, Boosts stamina",
      usage: "Take 1 capsule daily",
      warnings: "Contains caffeine"
    },
    ml: {
      shortDesc: "Energy supplement for women",
      description: "Energy supplement for women",
      benefits: "Reduces fatigue, Boosts stamina",
      usage: "Take 1 capsule daily",
      warnings: "Contains caffeine"
    },
    pa: {
      shortDesc: "Energy supplement for women",
      description: "Energy supplement for women",
      benefits: "Reduces fatigue, Boosts stamina",
      usage: "Take 1 capsule daily",
      warnings: "Contains caffeine"
    },
    or: {
      shortDesc: "Energy supplement for women",
      description: "Energy supplement for women",
      benefits: "Reduces fatigue, Boosts stamina",
      usage: "Take 1 capsule daily",
      warnings: "Contains caffeine"
    },
    as: {
      shortDesc: "Energy supplement for women",
      description: "Energy supplement for women",
      benefits: "Reduces fatigue, Boosts stamina",
      usage: "Take 1 capsule daily",
      warnings: "Contains caffeine"
    },
    ur: {
      shortDesc: "Energy supplement for women",
      description: "Energy supplement for women",
      benefits: "Reduces fatigue, Boosts stamina",
      usage: "Take 1 capsule daily",
      warnings: "Contains caffeine"
    }
  },
  "WOM022": {
    en: {
      shortDesc: "Immune system support",
      description: "Immune system support",
      benefits: "Boosts immunity, Antioxidants",
      usage: "Take 1 tablet daily",
      warnings: "Store in cool place"
    },
    hi: {
      shortDesc: "Immune system support",
      description: "Immune system support",
      benefits: "Boosts immunity, Antioxidants",
      usage: "Take 1 tablet daily",
      warnings: "Store in cool place"
    },
    ta: {
      shortDesc: "Immune system support",
      description: "Immune system support",
      benefits: "Boosts immunity, Antioxidants",
      usage: "Take 1 tablet daily",
      warnings: "Store in cool place"
    },
    te: {
      shortDesc: "Immune system support",
      description: "Immune system support",
      benefits: "Boosts immunity, Antioxidants",
      usage: "Take 1 tablet daily",
      warnings: "Store in cool place"
    },
    bn: {
      shortDesc: "Immune system support",
      description: "Immune system support",
      benefits: "Boosts immunity, Antioxidants",
      usage: "Take 1 tablet daily",
      warnings: "Store in cool place"
    },
    mr: {
      shortDesc: "Immune system support",
      description: "Immune system support",
      benefits: "Boosts immunity, Antioxidants",
      usage: "Take 1 tablet daily",
      warnings: "Store in cool place"
    },
    gu: {
      shortDesc: "Immune system support",
      description: "Immune system support",
      benefits: "Boosts immunity, Antioxidants",
      usage: "Take 1 tablet daily",
      warnings: "Store in cool place"
    },
    kn: {
      shortDesc: "Immune system support",
      description: "Immune system support",
      benefits: "Boosts immunity, Antioxidants",
      usage: "Take 1 tablet daily",
      warnings: "Store in cool place"
    },
    ml: {
      shortDesc: "Immune system support",
      description: "Immune system support",
      benefits: "Boosts immunity, Antioxidants",
      usage: "Take 1 tablet daily",
      warnings: "Store in cool place"
    },
    pa: {
      shortDesc: "Immune system support",
      description: "Immune system support",
      benefits: "Boosts immunity, Antioxidants",
      usage: "Take 1 tablet daily",
      warnings: "Store in cool place"
    },
    or: {
      shortDesc: "Immune system support",
      description: "Immune system support",
      benefits: "Boosts immunity, Antioxidants",
      usage: "Take 1 tablet daily",
      warnings: "Store in cool place"
    },
    as: {
      shortDesc: "Immune system support",
      description: "Immune system support",
      benefits: "Boosts immunity, Antioxidants",
      usage: "Take 1 tablet daily",
      warnings: "Store in cool place"
    },
    ur: {
      shortDesc: "Immune system support",
      description: "Immune system support",
      benefits: "Boosts immunity, Antioxidants",
      usage: "Take 1 tablet daily",
      warnings: "Store in cool place"
    }
  },
  "WOM023": {
    en: {
      shortDesc: "Natural stress management",
      description: "Natural stress management",
      benefits: "Reduces anxiety, Improves mood",
      usage: "Take 2 capsules daily",
      warnings: "May cause drowsiness"
    },
    hi: {
      shortDesc: "Natural stress management",
      description: "Natural stress management",
      benefits: "Reduces anxiety, Improves mood",
      usage: "Take 2 capsules daily",
      warnings: "May cause drowsiness"
    },
    ta: {
      shortDesc: "Natural stress management",
      description: "Natural stress management",
      benefits: "Reduces anxiety, Improves mood",
      usage: "Take 2 capsules daily",
      warnings: "May cause drowsiness"
    },
    te: {
      shortDesc: "Natural stress management",
      description: "Natural stress management",
      benefits: "Reduces anxiety, Improves mood",
      usage: "Take 2 capsules daily",
      warnings: "May cause drowsiness"
    },
    bn: {
      shortDesc: "Natural stress management",
      description: "Natural stress management",
      benefits: "Reduces anxiety, Improves mood",
      usage: "Take 2 capsules daily",
      warnings: "May cause drowsiness"
    },
    mr: {
      shortDesc: "Natural stress management",
      description: "Natural stress management",
      benefits: "Reduces anxiety, Improves mood",
      usage: "Take 2 capsules daily",
      warnings: "May cause drowsiness"
    },
    gu: {
      shortDesc: "Natural stress management",
      description: "Natural stress management",
      benefits: "Reduces anxiety, Improves mood",
      usage: "Take 2 capsules daily",
      warnings: "May cause drowsiness"
    },
    kn: {
      shortDesc: "Natural stress management",
      description: "Natural stress management",
      benefits: "Reduces anxiety, Improves mood",
      usage: "Take 2 capsules daily",
      warnings: "May cause drowsiness"
    },
    ml: {
      shortDesc: "Natural stress management",
      description: "Natural stress management",
      benefits: "Reduces anxiety, Improves mood",
      usage: "Take 2 capsules daily",
      warnings: "May cause drowsiness"
    },
    pa: {
      shortDesc: "Natural stress management",
      description: "Natural stress management",
      benefits: "Reduces anxiety, Improves mood",
      usage: "Take 2 capsules daily",
      warnings: "May cause drowsiness"
    },
    or: {
      shortDesc: "Natural stress management",
      description: "Natural stress management",
      benefits: "Reduces anxiety, Improves mood",
      usage: "Take 2 capsules daily",
      warnings: "May cause drowsiness"
    },
    as: {
      shortDesc: "Natural stress management",
      description: "Natural stress management",
      benefits: "Reduces anxiety, Improves mood",
      usage: "Take 2 capsules daily",
      warnings: "May cause drowsiness"
    },
    ur: {
      shortDesc: "Natural stress management",
      description: "Natural stress management",
      benefits: "Reduces anxiety, Improves mood",
      usage: "Take 2 capsules daily",
      warnings: "May cause drowsiness"
    }
  },
  "WOM024": {
    en: {
      shortDesc: "Calcium and magnesium blend",
      description: "Calcium and magnesium blend",
      benefits: "Strong bones, Prevents fractures",
      usage: "Take 1 tablet twice daily",
      warnings: "Consult doctor"
    },
    hi: {
      shortDesc: "Calcium and magnesium blend",
      description: "Calcium and magnesium blend",
      benefits: "Strong bones, Prevents fractures",
      usage: "Take 1 tablet twice daily",
      warnings: "Consult doctor"
    },
    ta: {
      shortDesc: "Calcium and magnesium blend",
      description: "Calcium and magnesium blend",
      benefits: "Strong bones, Prevents fractures",
      usage: "Take 1 tablet twice daily",
      warnings: "Consult doctor"
    },
    te: {
      shortDesc: "Calcium and magnesium blend",
      description: "Calcium and magnesium blend",
      benefits: "Strong bones, Prevents fractures",
      usage: "Take 1 tablet twice daily",
      warnings: "Consult doctor"
    },
    bn: {
      shortDesc: "Calcium and magnesium blend",
      description: "Calcium and magnesium blend",
      benefits: "Strong bones, Prevents fractures",
      usage: "Take 1 tablet twice daily",
      warnings: "Consult doctor"
    },
    mr: {
      shortDesc: "Calcium and magnesium blend",
      description: "Calcium and magnesium blend",
      benefits: "Strong bones, Prevents fractures",
      usage: "Take 1 tablet twice daily",
      warnings: "Consult doctor"
    },
    gu: {
      shortDesc: "Calcium and magnesium blend",
      description: "Calcium and magnesium blend",
      benefits: "Strong bones, Prevents fractures",
      usage: "Take 1 tablet twice daily",
      warnings: "Consult doctor"
    },
    kn: {
      shortDesc: "Calcium and magnesium blend",
      description: "Calcium and magnesium blend",
      benefits: "Strong bones, Prevents fractures",
      usage: "Take 1 tablet twice daily",
      warnings: "Consult doctor"
    },
    ml: {
      shortDesc: "Calcium and magnesium blend",
      description: "Calcium and magnesium blend",
      benefits: "Strong bones, Prevents fractures",
      usage: "Take 1 tablet twice daily",
      warnings: "Consult doctor"
    },
    pa: {
      shortDesc: "Calcium and magnesium blend",
      description: "Calcium and magnesium blend",
      benefits: "Strong bones, Prevents fractures",
      usage: "Take 1 tablet twice daily",
      warnings: "Consult doctor"
    },
    or: {
      shortDesc: "Calcium and magnesium blend",
      description: "Calcium and magnesium blend",
      benefits: "Strong bones, Prevents fractures",
      usage: "Take 1 tablet twice daily",
      warnings: "Consult doctor"
    },
    as: {
      shortDesc: "Calcium and magnesium blend",
      description: "Calcium and magnesium blend",
      benefits: "Strong bones, Prevents fractures",
      usage: "Take 1 tablet twice daily",
      warnings: "Consult doctor"
    },
    ur: {
      shortDesc: "Calcium and magnesium blend",
      description: "Calcium and magnesium blend",
      benefits: "Strong bones, Prevents fractures",
      usage: "Take 1 tablet twice daily",
      warnings: "Consult doctor"
    }
  },
  "WOM025": {
    en: {
      shortDesc: "Probiotic supplement",
      description: "Probiotic supplement",
      benefits: "Improves digestion, Gut health",
      usage: "Take 1 capsule daily",
      warnings: "Keep refrigerated"
    },
    hi: {
      shortDesc: "Probiotic supplement",
      description: "Probiotic supplement",
      benefits: "Improves digestion, Gut health",
      usage: "Take 1 capsule daily",
      warnings: "Keep refrigerated"
    },
    ta: {
      shortDesc: "Probiotic supplement",
      description: "Probiotic supplement",
      benefits: "Improves digestion, Gut health",
      usage: "Take 1 capsule daily",
      warnings: "Keep refrigerated"
    },
    te: {
      shortDesc: "Probiotic supplement",
      description: "Probiotic supplement",
      benefits: "Improves digestion, Gut health",
      usage: "Take 1 capsule daily",
      warnings: "Keep refrigerated"
    },
    bn: {
      shortDesc: "Probiotic supplement",
      description: "Probiotic supplement",
      benefits: "Improves digestion, Gut health",
      usage: "Take 1 capsule daily",
      warnings: "Keep refrigerated"
    },
    mr: {
      shortDesc: "Probiotic supplement",
      description: "Probiotic supplement",
      benefits: "Improves digestion, Gut health",
      usage: "Take 1 capsule daily",
      warnings: "Keep refrigerated"
    },
    gu: {
      shortDesc: "Probiotic supplement",
      description: "Probiotic supplement",
      benefits: "Improves digestion, Gut health",
      usage: "Take 1 capsule daily",
      warnings: "Keep refrigerated"
    },
    kn: {
      shortDesc: "Probiotic supplement",
      description: "Probiotic supplement",
      benefits: "Improves digestion, Gut health",
      usage: "Take 1 capsule daily",
      warnings: "Keep refrigerated"
    },
    ml: {
      shortDesc: "Probiotic supplement",
      description: "Probiotic supplement",
      benefits: "Improves digestion, Gut health",
      usage: "Take 1 capsule daily",
      warnings: "Keep refrigerated"
    },
    pa: {
      shortDesc: "Probiotic supplement",
      description: "Probiotic supplement",
      benefits: "Improves digestion, Gut health",
      usage: "Take 1 capsule daily",
      warnings: "Keep refrigerated"
    },
    or: {
      shortDesc: "Probiotic supplement",
      description: "Probiotic supplement",
      benefits: "Improves digestion, Gut health",
      usage: "Take 1 capsule daily",
      warnings: "Keep refrigerated"
    },
    as: {
      shortDesc: "Probiotic supplement",
      description: "Probiotic supplement",
      benefits: "Improves digestion, Gut health",
      usage: "Take 1 capsule daily",
      warnings: "Keep refrigerated"
    },
    ur: {
      shortDesc: "Probiotic supplement",
      description: "Probiotic supplement",
      benefits: "Improves digestion, Gut health",
      usage: "Take 1 capsule daily",
      warnings: "Keep refrigerated"
    }
  },
  "WOM026": {
    en: {
      shortDesc: "Advanced PCOS management",
      description: "Advanced PCOS management",
      benefits: "Regulates hormones, Weight management",
      usage: "Take 2 capsules daily",
      warnings: "Consult gynecologist"
    },
    hi: {
      shortDesc: "Advanced PCOS management",
      description: "Advanced PCOS management",
      benefits: "Regulates hormones, Weight management",
      usage: "Take 2 capsules daily",
      warnings: "Consult gynecologist"
    },
    ta: {
      shortDesc: "Advanced PCOS management",
      description: "Advanced PCOS management",
      benefits: "Regulates hormones, Weight management",
      usage: "Take 2 capsules daily",
      warnings: "Consult gynecologist"
    },
    te: {
      shortDesc: "Advanced PCOS management",
      description: "Advanced PCOS management",
      benefits: "Regulates hormones, Weight management",
      usage: "Take 2 capsules daily",
      warnings: "Consult gynecologist"
    },
    bn: {
      shortDesc: "Advanced PCOS management",
      description: "Advanced PCOS management",
      benefits: "Regulates hormones, Weight management",
      usage: "Take 2 capsules daily",
      warnings: "Consult gynecologist"
    },
    mr: {
      shortDesc: "Advanced PCOS management",
      description: "Advanced PCOS management",
      benefits: "Regulates hormones, Weight management",
      usage: "Take 2 capsules daily",
      warnings: "Consult gynecologist"
    },
    gu: {
      shortDesc: "Advanced PCOS management",
      description: "Advanced PCOS management",
      benefits: "Regulates hormones, Weight management",
      usage: "Take 2 capsules daily",
      warnings: "Consult gynecologist"
    },
    kn: {
      shortDesc: "Advanced PCOS management",
      description: "Advanced PCOS management",
      benefits: "Regulates hormones, Weight management",
      usage: "Take 2 capsules daily",
      warnings: "Consult gynecologist"
    },
    ml: {
      shortDesc: "Advanced PCOS management",
      description: "Advanced PCOS management",
      benefits: "Regulates hormones, Weight management",
      usage: "Take 2 capsules daily",
      warnings: "Consult gynecologist"
    },
    pa: {
      shortDesc: "Advanced PCOS management",
      description: "Advanced PCOS management",
      benefits: "Regulates hormones, Weight management",
      usage: "Take 2 capsules daily",
      warnings: "Consult gynecologist"
    },
    or: {
      shortDesc: "Advanced PCOS management",
      description: "Advanced PCOS management",
      benefits: "Regulates hormones, Weight management",
      usage: "Take 2 capsules daily",
      warnings: "Consult gynecologist"
    },
    as: {
      shortDesc: "Advanced PCOS management",
      description: "Advanced PCOS management",
      benefits: "Regulates hormones, Weight management",
      usage: "Take 2 capsules daily",
      warnings: "Consult gynecologist"
    },
    ur: {
      shortDesc: "Advanced PCOS management",
      description: "Advanced PCOS management",
      benefits: "Regulates hormones, Weight management",
      usage: "Take 2 capsules daily",
      warnings: "Consult gynecologist"
    }
  },
  "WOM027": {
    en: {
      shortDesc: "Thyroid health supplement",
      description: "Thyroid health supplement",
      benefits: "Supports thyroid, Boosts metabolism",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor"
    },
    hi: {
      shortDesc: "Thyroid health supplement",
      description: "Thyroid health supplement",
      benefits: "Supports thyroid, Boosts metabolism",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor"
    },
    ta: {
      shortDesc: "Thyroid health supplement",
      description: "Thyroid health supplement",
      benefits: "Supports thyroid, Boosts metabolism",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor"
    },
    te: {
      shortDesc: "Thyroid health supplement",
      description: "Thyroid health supplement",
      benefits: "Supports thyroid, Boosts metabolism",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor"
    },
    bn: {
      shortDesc: "Thyroid health supplement",
      description: "Thyroid health supplement",
      benefits: "Supports thyroid, Boosts metabolism",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor"
    },
    mr: {
      shortDesc: "Thyroid health supplement",
      description: "Thyroid health supplement",
      benefits: "Supports thyroid, Boosts metabolism",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor"
    },
    gu: {
      shortDesc: "Thyroid health supplement",
      description: "Thyroid health supplement",
      benefits: "Supports thyroid, Boosts metabolism",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor"
    },
    kn: {
      shortDesc: "Thyroid health supplement",
      description: "Thyroid health supplement",
      benefits: "Supports thyroid, Boosts metabolism",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor"
    },
    ml: {
      shortDesc: "Thyroid health supplement",
      description: "Thyroid health supplement",
      benefits: "Supports thyroid, Boosts metabolism",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor"
    },
    pa: {
      shortDesc: "Thyroid health supplement",
      description: "Thyroid health supplement",
      benefits: "Supports thyroid, Boosts metabolism",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor"
    },
    or: {
      shortDesc: "Thyroid health supplement",
      description: "Thyroid health supplement",
      benefits: "Supports thyroid, Boosts metabolism",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor"
    },
    as: {
      shortDesc: "Thyroid health supplement",
      description: "Thyroid health supplement",
      benefits: "Supports thyroid, Boosts metabolism",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor"
    },
    ur: {
      shortDesc: "Thyroid health supplement",
      description: "Thyroid health supplement",
      benefits: "Supports thyroid, Boosts metabolism",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor"
    }
  },
  "WOM028": {
    en: {
      shortDesc: "Fertility enhancement",
      description: "Fertility enhancement",
      benefits: "Improves fertility, Hormonal balance",
      usage: "Take 2 capsules daily",
      warnings: "Results may vary"
    },
    hi: {
      shortDesc: "Fertility enhancement",
      description: "Fertility enhancement",
      benefits: "Improves fertility, Hormonal balance",
      usage: "Take 2 capsules daily",
      warnings: "Results may vary"
    },
    ta: {
      shortDesc: "Fertility enhancement",
      description: "Fertility enhancement",
      benefits: "Improves fertility, Hormonal balance",
      usage: "Take 2 capsules daily",
      warnings: "Results may vary"
    },
    te: {
      shortDesc: "Fertility enhancement",
      description: "Fertility enhancement",
      benefits: "Improves fertility, Hormonal balance",
      usage: "Take 2 capsules daily",
      warnings: "Results may vary"
    },
    bn: {
      shortDesc: "Fertility enhancement",
      description: "Fertility enhancement",
      benefits: "Improves fertility, Hormonal balance",
      usage: "Take 2 capsules daily",
      warnings: "Results may vary"
    },
    mr: {
      shortDesc: "Fertility enhancement",
      description: "Fertility enhancement",
      benefits: "Improves fertility, Hormonal balance",
      usage: "Take 2 capsules daily",
      warnings: "Results may vary"
    },
    gu: {
      shortDesc: "Fertility enhancement",
      description: "Fertility enhancement",
      benefits: "Improves fertility, Hormonal balance",
      usage: "Take 2 capsules daily",
      warnings: "Results may vary"
    },
    kn: {
      shortDesc: "Fertility enhancement",
      description: "Fertility enhancement",
      benefits: "Improves fertility, Hormonal balance",
      usage: "Take 2 capsules daily",
      warnings: "Results may vary"
    },
    ml: {
      shortDesc: "Fertility enhancement",
      description: "Fertility enhancement",
      benefits: "Improves fertility, Hormonal balance",
      usage: "Take 2 capsules daily",
      warnings: "Results may vary"
    },
    pa: {
      shortDesc: "Fertility enhancement",
      description: "Fertility enhancement",
      benefits: "Improves fertility, Hormonal balance",
      usage: "Take 2 capsules daily",
      warnings: "Results may vary"
    },
    or: {
      shortDesc: "Fertility enhancement",
      description: "Fertility enhancement",
      benefits: "Improves fertility, Hormonal balance",
      usage: "Take 2 capsules daily",
      warnings: "Results may vary"
    },
    as: {
      shortDesc: "Fertility enhancement",
      description: "Fertility enhancement",
      benefits: "Improves fertility, Hormonal balance",
      usage: "Take 2 capsules daily",
      warnings: "Results may vary"
    },
    ur: {
      shortDesc: "Fertility enhancement",
      description: "Fertility enhancement",
      benefits: "Improves fertility, Hormonal balance",
      usage: "Take 2 capsules daily",
      warnings: "Results may vary"
    }
  },
  "WOM029": {
    en: {
      shortDesc: "PMS symptom relief",
      description: "PMS symptom relief",
      benefits: "Reduces bloating, Mood support",
      usage: "Take 1-2 capsules as needed",
      warnings: "Do not exceed dose"
    },
    hi: {
      shortDesc: "PMS symptom relief",
      description: "PMS symptom relief",
      benefits: "Reduces bloating, Mood support",
      usage: "Take 1-2 capsules as needed",
      warnings: "Do not exceed dose"
    },
    ta: {
      shortDesc: "PMS symptom relief",
      description: "PMS symptom relief",
      benefits: "Reduces bloating, Mood support",
      usage: "Take 1-2 capsules as needed",
      warnings: "Do not exceed dose"
    },
    te: {
      shortDesc: "PMS symptom relief",
      description: "PMS symptom relief",
      benefits: "Reduces bloating, Mood support",
      usage: "Take 1-2 capsules as needed",
      warnings: "Do not exceed dose"
    },
    bn: {
      shortDesc: "PMS symptom relief",
      description: "PMS symptom relief",
      benefits: "Reduces bloating, Mood support",
      usage: "Take 1-2 capsules as needed",
      warnings: "Do not exceed dose"
    },
    mr: {
      shortDesc: "PMS symptom relief",
      description: "PMS symptom relief",
      benefits: "Reduces bloating, Mood support",
      usage: "Take 1-2 capsules as needed",
      warnings: "Do not exceed dose"
    },
    gu: {
      shortDesc: "PMS symptom relief",
      description: "PMS symptom relief",
      benefits: "Reduces bloating, Mood support",
      usage: "Take 1-2 capsules as needed",
      warnings: "Do not exceed dose"
    },
    kn: {
      shortDesc: "PMS symptom relief",
      description: "PMS symptom relief",
      benefits: "Reduces bloating, Mood support",
      usage: "Take 1-2 capsules as needed",
      warnings: "Do not exceed dose"
    },
    ml: {
      shortDesc: "PMS symptom relief",
      description: "PMS symptom relief",
      benefits: "Reduces bloating, Mood support",
      usage: "Take 1-2 capsules as needed",
      warnings: "Do not exceed dose"
    },
    pa: {
      shortDesc: "PMS symptom relief",
      description: "PMS symptom relief",
      benefits: "Reduces bloating, Mood support",
      usage: "Take 1-2 capsules as needed",
      warnings: "Do not exceed dose"
    },
    or: {
      shortDesc: "PMS symptom relief",
      description: "PMS symptom relief",
      benefits: "Reduces bloating, Mood support",
      usage: "Take 1-2 capsules as needed",
      warnings: "Do not exceed dose"
    },
    as: {
      shortDesc: "PMS symptom relief",
      description: "PMS symptom relief",
      benefits: "Reduces bloating, Mood support",
      usage: "Take 1-2 capsules as needed",
      warnings: "Do not exceed dose"
    },
    ur: {
      shortDesc: "PMS symptom relief",
      description: "PMS symptom relief",
      benefits: "Reduces bloating, Mood support",
      usage: "Take 1-2 capsules as needed",
      warnings: "Do not exceed dose"
    }
  },
  "WOM030": {
    en: {
      shortDesc: "Natural libido support",
      description: "Natural libido support",
      benefits: "Enhances desire, Hormonal balance",
      usage: "Take 1 capsule daily",
      warnings: "Not for under 18"
    },
    hi: {
      shortDesc: "Natural libido support",
      description: "Natural libido support",
      benefits: "Enhances desire, Hormonal balance",
      usage: "Take 1 capsule daily",
      warnings: "Not for under 18"
    },
    ta: {
      shortDesc: "Natural libido support",
      description: "Natural libido support",
      benefits: "Enhances desire, Hormonal balance",
      usage: "Take 1 capsule daily",
      warnings: "Not for under 18"
    },
    te: {
      shortDesc: "Natural libido support",
      description: "Natural libido support",
      benefits: "Enhances desire, Hormonal balance",
      usage: "Take 1 capsule daily",
      warnings: "Not for under 18"
    },
    bn: {
      shortDesc: "Natural libido support",
      description: "Natural libido support",
      benefits: "Enhances desire, Hormonal balance",
      usage: "Take 1 capsule daily",
      warnings: "Not for under 18"
    },
    mr: {
      shortDesc: "Natural libido support",
      description: "Natural libido support",
      benefits: "Enhances desire, Hormonal balance",
      usage: "Take 1 capsule daily",
      warnings: "Not for under 18"
    },
    gu: {
      shortDesc: "Natural libido support",
      description: "Natural libido support",
      benefits: "Enhances desire, Hormonal balance",
      usage: "Take 1 capsule daily",
      warnings: "Not for under 18"
    },
    kn: {
      shortDesc: "Natural libido support",
      description: "Natural libido support",
      benefits: "Enhances desire, Hormonal balance",
      usage: "Take 1 capsule daily",
      warnings: "Not for under 18"
    },
    ml: {
      shortDesc: "Natural libido support",
      description: "Natural libido support",
      benefits: "Enhances desire, Hormonal balance",
      usage: "Take 1 capsule daily",
      warnings: "Not for under 18"
    },
    pa: {
      shortDesc: "Natural libido support",
      description: "Natural libido support",
      benefits: "Enhances desire, Hormonal balance",
      usage: "Take 1 capsule daily",
      warnings: "Not for under 18"
    },
    or: {
      shortDesc: "Natural libido support",
      description: "Natural libido support",
      benefits: "Enhances desire, Hormonal balance",
      usage: "Take 1 capsule daily",
      warnings: "Not for under 18"
    },
    as: {
      shortDesc: "Natural libido support",
      description: "Natural libido support",
      benefits: "Enhances desire, Hormonal balance",
      usage: "Take 1 capsule daily",
      warnings: "Not for under 18"
    },
    ur: {
      shortDesc: "Natural libido support",
      description: "Natural libido support",
      benefits: "Enhances desire, Hormonal balance",
      usage: "Take 1 capsule daily",
      warnings: "Not for under 18"
    }
  },
  "WOM031": {
    en: {
      shortDesc: "Breast health supplement",
      description: "Breast health supplement",
      benefits: "Supports breast health, Antioxidants",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor"
    },
    hi: {
      shortDesc: "Breast health supplement",
      description: "Breast health supplement",
      benefits: "Supports breast health, Antioxidants",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor"
    },
    ta: {
      shortDesc: "Breast health supplement",
      description: "Breast health supplement",
      benefits: "Supports breast health, Antioxidants",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor"
    },
    te: {
      shortDesc: "Breast health supplement",
      description: "Breast health supplement",
      benefits: "Supports breast health, Antioxidants",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor"
    },
    bn: {
      shortDesc: "Breast health supplement",
      description: "Breast health supplement",
      benefits: "Supports breast health, Antioxidants",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor"
    },
    mr: {
      shortDesc: "Breast health supplement",
      description: "Breast health supplement",
      benefits: "Supports breast health, Antioxidants",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor"
    },
    gu: {
      shortDesc: "Breast health supplement",
      description: "Breast health supplement",
      benefits: "Supports breast health, Antioxidants",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor"
    },
    kn: {
      shortDesc: "Breast health supplement",
      description: "Breast health supplement",
      benefits: "Supports breast health, Antioxidants",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor"
    },
    ml: {
      shortDesc: "Breast health supplement",
      description: "Breast health supplement",
      benefits: "Supports breast health, Antioxidants",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor"
    },
    pa: {
      shortDesc: "Breast health supplement",
      description: "Breast health supplement",
      benefits: "Supports breast health, Antioxidants",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor"
    },
    or: {
      shortDesc: "Breast health supplement",
      description: "Breast health supplement",
      benefits: "Supports breast health, Antioxidants",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor"
    },
    as: {
      shortDesc: "Breast health supplement",
      description: "Breast health supplement",
      benefits: "Supports breast health, Antioxidants",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor"
    },
    ur: {
      shortDesc: "Breast health supplement",
      description: "Breast health supplement",
      benefits: "Supports breast health, Antioxidants",
      usage: "Take 1 capsule daily",
      warnings: "Consult doctor"
    }
  },
  "WOM032": {
    en: {
      shortDesc: "Urinary tract health",
      description: "Urinary tract health",
      benefits: "Prevents UTI, Cranberry extract",
      usage: "Take 2 capsules daily",
      warnings: "Drink plenty of water"
    },
    hi: {
      shortDesc: "Urinary tract health",
      description: "Urinary tract health",
      benefits: "Prevents UTI, Cranberry extract",
      usage: "Take 2 capsules daily",
      warnings: "Drink plenty of water"
    },
    ta: {
      shortDesc: "Urinary tract health",
      description: "Urinary tract health",
      benefits: "Prevents UTI, Cranberry extract",
      usage: "Take 2 capsules daily",
      warnings: "Drink plenty of water"
    },
    te: {
      shortDesc: "Urinary tract health",
      description: "Urinary tract health",
      benefits: "Prevents UTI, Cranberry extract",
      usage: "Take 2 capsules daily",
      warnings: "Drink plenty of water"
    },
    bn: {
      shortDesc: "Urinary tract health",
      description: "Urinary tract health",
      benefits: "Prevents UTI, Cranberry extract",
      usage: "Take 2 capsules daily",
      warnings: "Drink plenty of water"
    },
    mr: {
      shortDesc: "Urinary tract health",
      description: "Urinary tract health",
      benefits: "Prevents UTI, Cranberry extract",
      usage: "Take 2 capsules daily",
      warnings: "Drink plenty of water"
    },
    gu: {
      shortDesc: "Urinary tract health",
      description: "Urinary tract health",
      benefits: "Prevents UTI, Cranberry extract",
      usage: "Take 2 capsules daily",
      warnings: "Drink plenty of water"
    },
    kn: {
      shortDesc: "Urinary tract health",
      description: "Urinary tract health",
      benefits: "Prevents UTI, Cranberry extract",
      usage: "Take 2 capsules daily",
      warnings: "Drink plenty of water"
    },
    ml: {
      shortDesc: "Urinary tract health",
      description: "Urinary tract health",
      benefits: "Prevents UTI, Cranberry extract",
      usage: "Take 2 capsules daily",
      warnings: "Drink plenty of water"
    },
    pa: {
      shortDesc: "Urinary tract health",
      description: "Urinary tract health",
      benefits: "Prevents UTI, Cranberry extract",
      usage: "Take 2 capsules daily",
      warnings: "Drink plenty of water"
    },
    or: {
      shortDesc: "Urinary tract health",
      description: "Urinary tract health",
      benefits: "Prevents UTI, Cranberry extract",
      usage: "Take 2 capsules daily",
      warnings: "Drink plenty of water"
    },
    as: {
      shortDesc: "Urinary tract health",
      description: "Urinary tract health",
      benefits: "Prevents UTI, Cranberry extract",
      usage: "Take 2 capsules daily",
      warnings: "Drink plenty of water"
    },
    ur: {
      shortDesc: "Urinary tract health",
      description: "Urinary tract health",
      benefits: "Prevents UTI, Cranberry extract",
      usage: "Take 2 capsules daily",
      warnings: "Drink plenty of water"
    }
  },
  "WOM033": {
    en: {
      shortDesc: "Vaginal pH balance",
      description: "Vaginal pH balance",
      benefits: "Maintains pH, Prevents infections",
      usage: "Take 1 capsule daily",
      warnings: "Consult gynecologist"
    },
    hi: {
      shortDesc: "Vaginal pH balance",
      description: "Vaginal pH balance",
      benefits: "Maintains pH, Prevents infections",
      usage: "Take 1 capsule daily",
      warnings: "Consult gynecologist"
    },
    ta: {
      shortDesc: "Vaginal pH balance",
      description: "Vaginal pH balance",
      benefits: "Maintains pH, Prevents infections",
      usage: "Take 1 capsule daily",
      warnings: "Consult gynecologist"
    },
    te: {
      shortDesc: "Vaginal pH balance",
      description: "Vaginal pH balance",
      benefits: "Maintains pH, Prevents infections",
      usage: "Take 1 capsule daily",
      warnings: "Consult gynecologist"
    },
    bn: {
      shortDesc: "Vaginal pH balance",
      description: "Vaginal pH balance",
      benefits: "Maintains pH, Prevents infections",
      usage: "Take 1 capsule daily",
      warnings: "Consult gynecologist"
    },
    mr: {
      shortDesc: "Vaginal pH balance",
      description: "Vaginal pH balance",
      benefits: "Maintains pH, Prevents infections",
      usage: "Take 1 capsule daily",
      warnings: "Consult gynecologist"
    },
    gu: {
      shortDesc: "Vaginal pH balance",
      description: "Vaginal pH balance",
      benefits: "Maintains pH, Prevents infections",
      usage: "Take 1 capsule daily",
      warnings: "Consult gynecologist"
    },
    kn: {
      shortDesc: "Vaginal pH balance",
      description: "Vaginal pH balance",
      benefits: "Maintains pH, Prevents infections",
      usage: "Take 1 capsule daily",
      warnings: "Consult gynecologist"
    },
    ml: {
      shortDesc: "Vaginal pH balance",
      description: "Vaginal pH balance",
      benefits: "Maintains pH, Prevents infections",
      usage: "Take 1 capsule daily",
      warnings: "Consult gynecologist"
    },
    pa: {
      shortDesc: "Vaginal pH balance",
      description: "Vaginal pH balance",
      benefits: "Maintains pH, Prevents infections",
      usage: "Take 1 capsule daily",
      warnings: "Consult gynecologist"
    },
    or: {
      shortDesc: "Vaginal pH balance",
      description: "Vaginal pH balance",
      benefits: "Maintains pH, Prevents infections",
      usage: "Take 1 capsule daily",
      warnings: "Consult gynecologist"
    },
    as: {
      shortDesc: "Vaginal pH balance",
      description: "Vaginal pH balance",
      benefits: "Maintains pH, Prevents infections",
      usage: "Take 1 capsule daily",
      warnings: "Consult gynecologist"
    },
    ur: {
      shortDesc: "Vaginal pH balance",
      description: "Vaginal pH balance",
      benefits: "Maintains pH, Prevents infections",
      usage: "Take 1 capsule daily",
      warnings: "Consult gynecologist"
    }
  },
  "WOM034": {
    en: {
      shortDesc: "Postpartum recovery support",
      description: "Postpartum recovery support",
      benefits: "Aids recovery, Boosts energy",
      usage: "Take 2 capsules daily",
      warnings: "For nursing mothers"
    },
    hi: {
      shortDesc: "Postpartum recovery support",
      description: "Postpartum recovery support",
      benefits: "Aids recovery, Boosts energy",
      usage: "Take 2 capsules daily",
      warnings: "For nursing mothers"
    },
    ta: {
      shortDesc: "Postpartum recovery support",
      description: "Postpartum recovery support",
      benefits: "Aids recovery, Boosts energy",
      usage: "Take 2 capsules daily",
      warnings: "For nursing mothers"
    },
    te: {
      shortDesc: "Postpartum recovery support",
      description: "Postpartum recovery support",
      benefits: "Aids recovery, Boosts energy",
      usage: "Take 2 capsules daily",
      warnings: "For nursing mothers"
    },
    bn: {
      shortDesc: "Postpartum recovery support",
      description: "Postpartum recovery support",
      benefits: "Aids recovery, Boosts energy",
      usage: "Take 2 capsules daily",
      warnings: "For nursing mothers"
    },
    mr: {
      shortDesc: "Postpartum recovery support",
      description: "Postpartum recovery support",
      benefits: "Aids recovery, Boosts energy",
      usage: "Take 2 capsules daily",
      warnings: "For nursing mothers"
    },
    gu: {
      shortDesc: "Postpartum recovery support",
      description: "Postpartum recovery support",
      benefits: "Aids recovery, Boosts energy",
      usage: "Take 2 capsules daily",
      warnings: "For nursing mothers"
    },
    kn: {
      shortDesc: "Postpartum recovery support",
      description: "Postpartum recovery support",
      benefits: "Aids recovery, Boosts energy",
      usage: "Take 2 capsules daily",
      warnings: "For nursing mothers"
    },
    ml: {
      shortDesc: "Postpartum recovery support",
      description: "Postpartum recovery support",
      benefits: "Aids recovery, Boosts energy",
      usage: "Take 2 capsules daily",
      warnings: "For nursing mothers"
    },
    pa: {
      shortDesc: "Postpartum recovery support",
      description: "Postpartum recovery support",
      benefits: "Aids recovery, Boosts energy",
      usage: "Take 2 capsules daily",
      warnings: "For nursing mothers"
    },
    or: {
      shortDesc: "Postpartum recovery support",
      description: "Postpartum recovery support",
      benefits: "Aids recovery, Boosts energy",
      usage: "Take 2 capsules daily",
      warnings: "For nursing mothers"
    },
    as: {
      shortDesc: "Postpartum recovery support",
      description: "Postpartum recovery support",
      benefits: "Aids recovery, Boosts energy",
      usage: "Take 2 capsules daily",
      warnings: "For nursing mothers"
    },
    ur: {
      shortDesc: "Postpartum recovery support",
      description: "Postpartum recovery support",
      benefits: "Aids recovery, Boosts energy",
      usage: "Take 2 capsules daily",
      warnings: "For nursing mothers"
    }
  },
  "WOM035": {
    en: {
      shortDesc: "Healthy weight support",
      description: "Healthy weight support",
      benefits: "Metabolism boost, Appetite control",
      usage: "Take 1 capsule before meals",
      warnings: "Diet and exercise required"
    },
    hi: {
      shortDesc: "Healthy weight support",
      description: "Healthy weight support",
      benefits: "Metabolism boost, Appetite control",
      usage: "Take 1 capsule before meals",
      warnings: "Diet and exercise required"
    },
    ta: {
      shortDesc: "Healthy weight support",
      description: "Healthy weight support",
      benefits: "Metabolism boost, Appetite control",
      usage: "Take 1 capsule before meals",
      warnings: "Diet and exercise required"
    },
    te: {
      shortDesc: "Healthy weight support",
      description: "Healthy weight support",
      benefits: "Metabolism boost, Appetite control",
      usage: "Take 1 capsule before meals",
      warnings: "Diet and exercise required"
    },
    bn: {
      shortDesc: "Healthy weight support",
      description: "Healthy weight support",
      benefits: "Metabolism boost, Appetite control",
      usage: "Take 1 capsule before meals",
      warnings: "Diet and exercise required"
    },
    mr: {
      shortDesc: "Healthy weight support",
      description: "Healthy weight support",
      benefits: "Metabolism boost, Appetite control",
      usage: "Take 1 capsule before meals",
      warnings: "Diet and exercise required"
    },
    gu: {
      shortDesc: "Healthy weight support",
      description: "Healthy weight support",
      benefits: "Metabolism boost, Appetite control",
      usage: "Take 1 capsule before meals",
      warnings: "Diet and exercise required"
    },
    kn: {
      shortDesc: "Healthy weight support",
      description: "Healthy weight support",
      benefits: "Metabolism boost, Appetite control",
      usage: "Take 1 capsule before meals",
      warnings: "Diet and exercise required"
    },
    ml: {
      shortDesc: "Healthy weight support",
      description: "Healthy weight support",
      benefits: "Metabolism boost, Appetite control",
      usage: "Take 1 capsule before meals",
      warnings: "Diet and exercise required"
    },
    pa: {
      shortDesc: "Healthy weight support",
      description: "Healthy weight support",
      benefits: "Metabolism boost, Appetite control",
      usage: "Take 1 capsule before meals",
      warnings: "Diet and exercise required"
    },
    or: {
      shortDesc: "Healthy weight support",
      description: "Healthy weight support",
      benefits: "Metabolism boost, Appetite control",
      usage: "Take 1 capsule before meals",
      warnings: "Diet and exercise required"
    },
    as: {
      shortDesc: "Healthy weight support",
      description: "Healthy weight support",
      benefits: "Metabolism boost, Appetite control",
      usage: "Take 1 capsule before meals",
      warnings: "Diet and exercise required"
    },
    ur: {
      shortDesc: "Healthy weight support",
      description: "Healthy weight support",
      benefits: "Metabolism boost, Appetite control",
      usage: "Take 1 capsule before meals",
      warnings: "Diet and exercise required"
    }
  }
};

// Helper function to get product translation
export const getProductTranslation = (
  productId: string,
  language: string
): ProductTranslation | null => {
  const translations = productTranslations[productId];
  if (!translations) return null;
  
  // Return translation for requested language or fallback to English
  return translations[language] || translations['en'] || null;
};

// Helper to check if translation exists
export const hasTranslation = (productId: string, language: string): boolean => {
  return !!(productTranslations[productId]?.[language]);
};
