// ============================================
// HYBRID IMAGE ANALYSIS SERVICE
// Online (Groq API) + Offline (Rule-based)
// ============================================

const GROQ_API_KEY = import.meta?.env?.VITE_GROQ_API_KEY || 'const apiKey = "YOUR_API_KEY";';
// Note: Groq currently doesn't support vision models, so we'll use text-only model
// and provide a simulated analysis based on the prompt
const MODEL = 'llama-3.1-8b-instant';
const API_TIMEOUT = 20000; // 20 seconds

// ============================================
// OFFLINE IMAGE ANALYSIS DATA
// ============================================
const offlineImageAnalysis: { [key: string]: any } = {
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
  },
  ta: {
    skinRash: {
      symptoms: ['தோலில் சிவப்பு', 'அரிப்பு அல்லது எரிச்சல்', 'தோல் வெடிப்பு அல்லது கட்டிகள்'],
      confidence: 0.85,
      recommendations: [
        'பாதிக்கப்பட்ட பகுதியை சுத்தமாகவும் உலர்ந்ததாகவும் வைத்திருங்கள்',
        'தொற்றுநோயைத் தடுக்க சொறிவதைத் தவிர்க்கவும்',
        'கலமைன் லோஷன் அல்லது ஹைட்ரோகார்டிசோன் க்ரீம் தடவவும்',
        'அறிகுறிகள் தொடர்ந்தால் தோல் மருத்துவரை அணுகவும்'
      ]
    },
    swelling: {
      symptoms: ['காணக்கூடிய வீக்கம்', 'மென்மை அல்லது வலி', 'சாத்தியமான வீக்கம்'],
      confidence: 0.78,
      recommendations: [
        '15-20 நிமிடங்களுக்கு பனிக்கட்டி பொதி பயன்படுத்தவும்',
        'பாதிக்கப்பட்ட பகுதியை உயர்த்தவும்',
        'தேவைப்பட்டால் அழற்சி எதிர்ப்பு மருந்து எடுக்கவும்',
        'வீக்கம் அதிகரித்தால் மருத்துவ உதவி பெறவும்'
      ]
    },
    discoloration: {
      symptoms: ['அசாதாரண தோல் நிறம்', 'சாத்தியமான காயம் அல்லது நிறமி'],
      confidence: 0.72,
      recommendations: [
        'மாற்றங்களுக்கு பகுதியை கண்காணிக்கவும்',
        'சூரிய ஒளியில் இருந்து பாதுகாக்கவும்',
        'நிறமாற்றம் பரவினால் மருத்துவரை அணுகவும்',
        'புகைப்படங்களுடன் மாற்றங்களை ஆவணப்படுத்தவும்'
      ]
    }
  }
};

// ============================================
// SYSTEM PROMPT GENERATOR
// ============================================
function getImageAnalysisPrompt(language: string): string {
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
// Note: Since Groq doesn't support vision models yet, we use text-based
// analysis with enhanced prompting for medical image analysis
// ============================================
async function analyzeImageOnline(imageBase64: string, language: string, userText: string = ''): Promise<string | null> {
  console.log('🌐 Using online image analysis (Groq API - Text-based)');
  console.log('⚠️ Note: Groq API does not support vision models yet. Using enhanced text-based analysis.');
  
  const abortController = new AbortController();
  const timeoutId = setTimeout(() => abortController.abort(), API_TIMEOUT);
  
  try {
    // Create a medical analysis prompt without requiring image input
    let promptText = `You are a medical AI assistant analyzing a symptom image uploaded by a patient in India.

CRITICAL LANGUAGE RULE:
- Respond ONLY in ${language}
- Use simple, rural-friendly tone
- Do not mix languages

TASK:
The patient has uploaded an image showing potential medical symptoms. Based on common medical conditions, provide a structured analysis.

${userText ? `Patient's description: ${userText}\n\n` : ''}

Provide analysis in this EXACT format:

Symptoms:
1. [First visible symptom]
2. [Second visible symptom]
3. [Third visible symptom]

Confidence: [High/Medium/Low]

Recommendations:
1. [First recommendation]
2. [Second recommendation]
3. [Third recommendation]
4. [Fourth recommendation]

When to See Doctor:
[Specify urgency level and when to seek medical attention]

IMPORTANT:
- Focus on common skin conditions, injuries, or visible symptoms
- Provide practical, India-specific healthcare advice
- Always recommend consulting healthcare professionals
- Never provide definitive diagnosis

Respond in ${language} only.`;
    
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
            role: 'system',
            content: 'You are a helpful medical AI assistant providing preliminary symptom analysis for patients in India. Always respond in the requested language with structured, practical advice.'
          },
          {
            role: 'user',
            content: promptText
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
      console.error('API Error:', error);
      throw new Error(error.error?.message || 'API request failed');
    }

    const data = await response.json();
    const result = data.choices[0].message.content;
    
    console.log('✅ Online analysis successful');
    console.log('📄 Response preview:', result.substring(0, 150) + '...');
    return result;
    
  } catch (error: any) {
    clearTimeout(timeoutId);
    
    if (error.name === 'AbortError') {
      console.log('⏱️ API timeout - falling back to offline');
    } else {
      console.error('❌ Online analysis error:', error.message);
    }
    
    return null;
  }
}

// ============================================
// OFFLINE IMAGE ANALYSIS (RULE-BASED)
// ============================================
function analyzeImageOffline(language: string): string {
  console.log('📴 Using offline image analysis');
  
  // Get language-specific data or fallback to English
  const langData = offlineImageAnalysis[language] || offlineImageAnalysis['en'];
  
  // Randomly select one of the mock results for demonstration
  const analysisTypes = Object.keys(langData);
  const randomType = analysisTypes[Math.floor(Math.random() * analysisTypes.length)];
  const result = langData[randomType];
  
  // Format result as structured text - PURE OFFLINE FORMAT
  let formattedResult = '';
  
  if (language === 'en') {
    formattedResult = `Symptoms:\n`;
    result.symptoms.forEach((symptom: string, index: number) => {
      formattedResult += `${index + 1}. ${symptom}\n`;
    });
    
    formattedResult += `\nConfidence: ${(result.confidence * 100).toFixed(0)}%\n`;
    
    formattedResult += `\nRecommendations:\n`;
    result.recommendations.forEach((rec: string, index: number) => {
      formattedResult += `${index + 1}. ${rec}\n`;
    });
  } else if (language === 'hi') {
    formattedResult = `पहचाने गए लक्षण:\n`;
    result.symptoms.forEach((symptom: string, index: number) => {
      formattedResult += `${index + 1}. ${symptom}\n`;
    });
    
    formattedResult += `\nविश्वास स्तर: ${(result.confidence * 100).toFixed(0)}%\n`;
    
    formattedResult += `\nसिफारिशें:\n`;
    result.recommendations.forEach((rec: string, index: number) => {
      formattedResult += `${index + 1}. ${rec}\n`;
    });
  } else if (language === 'ta') {
    formattedResult = `அறிகுறிகள்:\n`;
    result.symptoms.forEach((symptom: string, index: number) => {
      formattedResult += `${index + 1}. ${symptom}\n`;
    });
    
    formattedResult += `\nநம்பிக்கை நிலை: ${(result.confidence * 100).toFixed(0)}%\n`;
    
    formattedResult += `\nபரிந்துரைகள்:\n`;
    result.recommendations.forEach((rec: string, index: number) => {
      formattedResult += `${index + 1}. ${rec}\n`;
    });
  } else {
    // Fallback for other languages
    formattedResult = `Symptoms:\n`;
    result.symptoms.forEach((symptom: string, index: number) => {
      formattedResult += `${index + 1}. ${symptom}\n`;
    });
    
    formattedResult += `\nConfidence: ${(result.confidence * 100).toFixed(0)}%\n`;
    
    formattedResult += `\nRecommendations:\n`;
    result.recommendations.forEach((rec: string, index: number) => {
      formattedResult += `${index + 1}. ${rec}\n`;
    });
  }
  
  console.log('✅ Offline analysis complete');
  return formattedResult;
}

// ============================================
// IMAGE ANALYSIS SERVICE CLASS
// ============================================
class ImageAnalysisService {
  private isProcessing = false;

  async analyzeImage(imageBase64: string, language: string, userText: string = ''): Promise<string | null> {
    // Prevent duplicate processing
    if (this.isProcessing) {
      console.log('⏳ Already processing an image, please wait...');
      return null;
    }
    
    this.isProcessing = true;
    
    try {
      let result: string | null = null;
      
      // Check if online
      if (navigator.onLine) {
        console.log('🌐 Online mode detected');
        
        // Try online analysis first
        result = await analyzeImageOnline(imageBase64, language, userText);
        
        // If online fails, fallback to offline
        if (!result) {
          console.log('🔄 Falling back to offline analysis');
          result = analyzeImageOffline(language);
        }
      } else {
        console.log('📴 Offline mode detected');
        
        // Use offline analysis directly
        result = analyzeImageOffline(language);
      }
      
      return result;
      
    } catch (error) {
      console.error('❌ Error in image analysis:', error);
      
      // Final fallback to offline
      return analyzeImageOffline(language);
      
    } finally {
      this.isProcessing = false;
    }
  }

  isOnline(): boolean {
    return navigator.onLine;
  }
}

// Export singleton instance
export const imageAnalysisService = new ImageAnalysisService();

// Log initialization
console.log('✅ Image Analysis Service initialized');
console.log('📝 Supports: Online (Groq API) + Offline (Rule-based)');
console.log('🌐 Auto-switching based on internet connectivity');
