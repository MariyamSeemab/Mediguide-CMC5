// Test if the allergy detection logic works
const userMessage = "I have itchy eyes and runny nose";
const lowerMessage = userMessage.toLowerCase();

console.log("Testing input:", userMessage);
console.log("Lowercase:", lowerMessage);
console.log("");

// Test ALLERGY detection
const allergyMatch = 
  lowerMessage.includes('allergy') || lowerMessage.includes('allergic') || 
  lowerMessage.includes('hives') || lowerMessage.includes('itching all over') ||
  lowerMessage.includes('swelling') || lowerMessage.includes('allergic reaction') ||
  lowerMessage.includes('sneezing') || lowerMessage.includes('sneeze') ||
  lowerMessage.includes('itchy eyes') || lowerMessage.includes('runny nose') ||
  lowerMessage.includes('watery eyes') || lowerMessage.includes('nasal congestion');

console.log("ALLERGY detection result:", allergyMatch);
console.log("");

// Check individual keywords
console.log("Checking individual keywords:");
console.log("  includes('itchy eyes'):", lowerMessage.includes('itchy eyes'));
console.log("  includes('runny nose'):", lowerMessage.includes('runny nose'));
console.log("");

// Test EYE detection with exclusions
const eyeMatch = 
  (lowerMessage.includes('eye pain') || lowerMessage.includes('eye') || 
   lowerMessage.includes('vision') || lowerMessage.includes('blurry') ||
   lowerMessage.includes('red eye') || lowerMessage.includes('eye infection')) &&
  !lowerMessage.includes('itchy eyes') && !lowerMessage.includes('watery eyes') &&
  !lowerMessage.includes('runny nose') && !lowerMessage.includes('sneezing');

console.log("EYE detection result (with exclusions):", eyeMatch);
console.log("");

console.log("CONCLUSION:");
if (allergyMatch) {
  console.log("✅ Should trigger ALLERGY category");
} else if (eyeMatch) {
  console.log("❌ Would trigger EYE category (WRONG!)");
} else {
  console.log("❓ No category matched");
}
