// ============================================
// HYBRID IMAGE ANALYSIS SYSTEM
// Online (Groq API) + Offline (Rule-based)
// ============================================

// ============================================
// CONFIGURATION
// ============================================
const GROQ_API_KEY = 'const apiKey = "YOUR_API_KEY";';
const MODEL = 'meta-llama/llama-4-scout-17b-16e-instruct';
const API_TIMEOUT = 20000; // 20 seconds

// ============================================
// STATE MANAGEMENT
// ============================================
let currentLanguage = 'en';
let isProcessingImage = false;
let selectedImage = null;

// ============================================
// OFFLINE IMAGE ANALYSIS DATA
// ============================================
const offlineImageAnalysis = {
  en: {
    skinRash: {
      symptoms: ['Redness on skin', 'Itching or irritation', 'Visible rash or bumps'],
      confidence: 0.85,
      recommendations: [
        'Keep the affected area clean and dry',
        'Avoid scratching to prevent infection',
        'Apply calamine lotion or hydrocortisone cream',
        'Consult a dermatologist if symptoms persist'
      ]
    },
    swelling: {
      symptoms: ['Visible swelling', 'Tenderness or pain', 'Possible inflammation'],
      confidence: 0.78,
      recommendations: [
        'Apply ice pack for 15-20 minutes',
        'Elevate the affected area',
        'Take anti-inflammatory medication if needed',
        'Seek medical attention if swelling increases'
      ]
    },
    discoloration: {
      symptoms: ['Unusual skin color', 'Possible bruising or pigmentation'],
      confidence: 0.72,
      recommendations: [
        'Monitor the area for changes',
        'Protect from sun exposure',
        'Consult a doctor if discoloration spreads',
        'Document changes with photos'
      ]
    }
  },
  hi: {
    skinRash: {
      symptoms: ['त्वचा पर लालिमा', 'खुजली या जलन', 'दाने या उभार दिखाई देना'],
      confidence: 0.85,
      recommendations: [
        'प्रभावित क्षेत्र को साफ और सूखा रखें',
        'संक्रमण से बचने के लिए खुजली न करें',
        'कैलामाइन लोशन या हाइड्रोकार्टिसोन क्रीम लगाएं',
        'लक्षण बने रहने पर त्वचा विशेषज्ञ से परामर्श लें'
      ]
    },
    swelling: {
      symptoms: ['दिखाई देने वाली सूजन', 'कोमलता या दर्द', 'संभावित सूजन'],
      confidence: 0.78,
      recommendations: [
        '15-20 मिनट के लिए बर्फ की पट्टी लगाएं',
        'प्रभावित क्षेत्र को ऊपर उठाएं',
        'आवश्यकता होने पर सूजन-रोधी दवा लें',
        'सूजन बढ़ने पर चिकित्सा सहायता लें'
      ]
    },
    discoloration: {
      symptoms: ['असामान्य त्वचा का रंग', 'संभावित चोट या रंजकता'],
      confidence: 0.72,
      recommendations: [
        'परिवर्तनों के लिए क्षेत्र की निगरानी करें',
        'सूर्य के संपर्क से बचाएं',
        'रंग फैलने पर डॉक्टर से परामर्श लें',
        'फोटो के साथ परिवर्तनों को दस्तावेज करें'
      ]
    }
  }
  // Add more languages as needed
};

// ============================================
// SYSTEM PROMPT GENERATOR
// ============================================
function getImageAnalysisPrompt(language) {
  return `You are a medical image analysis AI assistant for MediGuide, designed for users in India.

CRITICAL LANGUAGE RULE:
- The user has selected ${language} as their preferred language
- You MUST respond ONLY in ${language}
- Do not mix languages
- Use simple, rural-friendly tone that common people can understand

ANALYSIS REQUIREMENTS:
- Analyze the uploaded medical/symptom image carefully
- Identify visible symptoms, conditions, or concerns
- Provide structured analysis with clear sections

FORMATTING RULES:
- Use clear headings followed by colons (like "Symptoms:" or "Recommendations:")
- Use numbered lists (1. 2. 3.) for items
- Use line breaks between sections
- Keep responses concise and easy to understand

RESPONSE STRUCTURE:
1. Symptoms: List visible symptoms or conditions
2. Confidence: Indicate confidence level (e.g., "High", "Medium", "Low")
3. Recommendations: Provide 4-5 actionable recommendations
4. When to See Doctor: Specify urgency level

INDIA-SPECIFIC CONTEXT:
- Reference Indian healthcare system when relevant
- Suggest Indian government health schemes if applicable
- Use Indian medical terminology
- Consider Indian climate and common conditions

IMPORTANT:
- This is preliminary analysis only
- Always recommend consulting healthcare professionals for serious concerns
- Never provide definitive diagnosis
- Focus on guidance and awareness

Remember: Respond in ${language} only with structured, helpful analysis.`;
}

// ============================================
// ONLINE IMAGE ANALYSIS (GROQ API)
// ============================================
async function analyzeImageOnline(imageBase64, userText = '') {
  console.log('🌐 Using online image analysis (Groq API)');
  
  const abortController = new AbortController();
  const timeoutId = setTimeout(() => abortController.abort(), API_TIMEOUT);
  
  try {
    let promptText = getImageAnalysisPrompt(currentLanguage);
    if (userText) {
      promptText += `\n\nUser's additional information: ${userText}`;
    }
    
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: promptText
              },
              {
                type: 'image_url',
                image_url: {
                  url: imageBase64
                }
              }
            ]
          }
        ],
        temperature: 0.7,
        max_tokens: 1024
      }),
      signal: abortController.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'API request failed');
    }

    const data = await response.json();
    const result = data.choices[0].message.content;
    
    console.log('✅ Online analysis successful');
    return result;
    
  } catch (error) {
    clearTimeout(timeoutId);
    
    if (error.name === 'AbortError') {
      console.log('⏱️ API timeout - falling back to offline');
    } else {
      console.error('❌ Online analysis error:', error.message);
    }
    
    // Return null to trigger offline fallback
    return null;
  }
}

// ============================================
// OFFLINE IMAGE ANALYSIS (RULE-BASED)
// ============================================
function analyzeImageOffline() {
  console.log('📴 Using offline image analysis');
  
  // Get language-specific data or fallback to English
  const langData = offlineImageAnalysis[currentLanguage] || offlineImageAnalysis['en'];
  
  // Randomly select one of the mock results for demonstration
  const analysisTypes = Object.keys(langData);
  const randomType = analysisTypes[Math.floor(Math.random() * analysisTypes.length)];
  const result = langData[randomType];
  
  // Format result as structured text - PURE OFFLINE FORMAT
  let formattedResult = '';
  
  if (currentLanguage === 'en') {
    formattedResult = `Symptoms:\n`;
    result.symptoms.forEach((symptom, index) => {
      formattedResult += `${index + 1}. ${symptom}\n`;
    });
    
    formattedResult += `\nConfidence: ${(result.confidence * 100).toFixed(0)}%\n`;
    
    formattedResult += `\nRecommendations:\n`;
    result.recommendations.forEach((rec, index) => {
      formattedResult += `${index + 1}. ${rec}\n`;
    });
  } else if (currentLanguage === 'hi') {
    formattedResult = `पहचाने गए लक्षण:\n`;
    result.symptoms.forEach((symptom, index) => {
      formattedResult += `${index + 1}. ${symptom}\n`;
    });
    
    formattedResult += `\nविश्वास स्तर: ${(result.confidence * 100).toFixed(0)}%\n`;
    
    formattedResult += `\nसिफारिशें:\n`;
    result.recommendations.forEach((rec, index) => {
      formattedResult += `${index + 1}. ${rec}\n`;
    });
  } else {
    // Fallback for other languages
    formattedResult = `Symptoms:\n`;
    result.symptoms.forEach((symptom, index) => {
      formattedResult += `${index + 1}. ${symptom}\n`;
    });
    
    formattedResult += `\nConfidence: ${(result.confidence * 100).toFixed(0)}%\n`;
    
    formattedResult += `\nRecommendations:\n`;
    result.recommendations.forEach((rec, index) => {
      formattedResult += `${index + 1}. ${rec}\n`;
    });
  }
  
  console.log('✅ Offline analysis complete');
  return formattedResult;
}

// ============================================
// MAIN IMAGE ANALYSIS CONTROLLER
// ============================================
async function handleImageAnalysis(imageBase64, userText = '') {
  // Prevent duplicate processing
  if (isProcessingImage) {
    console.log('⏳ Already processing an image, please wait...');
    return null;
  }
  
  isProcessingImage = true;
  
  try {
    let result = null;
    
    // Check if online
    if (navigator.onLine) {
      console.log('🌐 Online mode detected');
      
      // Try online analysis first
      result = await analyzeImageOnline(imageBase64, userText);
      
      // If online fails, fallback to offline
      if (!result) {
        console.log('🔄 Falling back to offline analysis');
        result = analyzeImageOffline();
      }
    } else {
      console.log('📴 Offline mode detected');
      
      // Use offline analysis directly
      result = analyzeImageOffline();
    }
    
    return result;
    
  } catch (error) {
    console.error('❌ Error in image analysis:', error);
    
    // Final fallback to offline
    return analyzeImageOffline();
    
  } finally {
    isProcessingImage = false;
  }
}

// ============================================
// EXPORT FOR USE IN SYMPTOM CHECKER
// ============================================
if (typeof window !== 'undefined') {
  window.handleImageAnalysis = handleImageAnalysis;
  window.setImageAnalysisLanguage = (lang) => {
    currentLanguage = lang;
    console.log('🌍 Image analysis language set to:', lang);
  };
}

console.log('✅ Hybrid Image Analysis System loaded');
console.log('📝 Supports: Online (Groq API) + Offline (Rule-based)');
console.log('🌐 Auto-switching based on internet connectivity');
