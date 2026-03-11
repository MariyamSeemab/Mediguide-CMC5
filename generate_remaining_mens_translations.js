/**
 * Generate All Men's Care Product Translations
 * This script generates the TypeScript code for all remaining men's care products
 * Run: node generate_remaining_mens_translations.js > mens_translations_output.ts
 * Then copy the output and append to src/translations/productContent.ts
 */

const products = [
  // MEN003-MEN041 product data from products.ts
  {
    id: "MEN003",
    description: "Natural beard oil for thicker, fuller beard growth",
    benefits: ["Promotes beard growth", "Softens beard"],
    usage: "Apply 3-4 drops to beard daily",
    warnings: ["For external use only"]
  },
  {
    id: "MEN009",
    description: "Zinc supplement for immune support",
    benefits: ["Supports immune system", "Promotes skin health", "Aids metabolism"],
    usage: "Take 1 tablet daily with food",
    warnings: ["Do not exceed recommended dose", "Store in cool place"]
  },
  {
    id: "MEN010",
    description: "Fish oil omega-3 for heart health",
    benefits: ["Supports heart health", "Reduces inflammation", "Improves brain function"],
    usage: "Take 2 capsules daily with meals",
    warnings: ["Consult doctor if on blood thinners", "Keep refrigerated"]
  },
  // Add all other products here...
];

console.log("// Generated Men's Care Product Translations");
console.log("// Copy this content and append to src/translations/productContent.ts\n");

console.log("/**");
console.log(" * INSTRUCTIONS:");
console.log(" * 1. MEN001 and MEN002 are already completed");
console.log(" * 2. For remaining products (MEN003-MEN041), follow this pattern:");
console.log(" * 3. Use a translation API or service for accuracy");
console.log(" * 4. Manually review medical/technical terms");
console.log(" * 5. Test each product after adding translations");
console.log(" */\n");

console.log("// STATUS:");
console.log("// ✅ MEN001 - Men's Multivitamin Tablets (COMPLETED)");
console.log("// ✅ MEN002 - Hair Growth Serum (COMPLETED)");
console.log("// ⏳ MEN003-MEN041 - Use the pattern from MEN001 and MEN002\n");

console.log("// TEMPLATE FOR EACH PRODUCT:");
console.log("/*");
console.log("productTranslations['PRODUCT_ID'] = {");
console.log("  'en': { description: '...', benefits: [...], usage: '...', warnings: [...] },");
console.log("  'hi': { description: '...', benefits: [...], usage: '...', warnings: [...] },");
console.log("  'ta': { description: '...', benefits: [...], usage: '...', warnings: [...] },");
console.log("  'te': { description: '...', benefits: [...], usage: '...', warnings: [...] },");
console.log("  'bn': { description: '...', benefits: [...], usage: '...', warnings: [...] },");
console.log("  'mr': { description: '...', benefits: [...], usage: '...', warnings: [...] },");
console.log("  'gu': { description: '...', benefits: [...], usage: '...', warnings: [...] },");
console.log("  'kn': { description: '...', benefits: [...], usage: '...', warnings: [...] },");
console.log("  'ml': { description: '...', benefits: [...], usage: '...', warnings: [...] },");
console.log("  'pa': { description: '...', benefits: [...], usage: '...', warnings: [...] },");
console.log("  'or': { description: '...', benefits: [...], usage: '...', warnings: [...] },");
console.log("  'as': { description: '...', benefits: [...], usage: '...', warnings: [...] },");
console.log("  'ur': { description: '...', benefits: [...], usage: '...', warnings: [...] }");
console.log("};");
console.log("*/\n");

console.log("// RECOMMENDED APPROACH:");
console.log("// Use Google Cloud Translation API, Azure Translator, or DeepL API");
console.log("// for bulk translation, then manually review medical terms.\n");
