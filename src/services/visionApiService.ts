// ============================================
// VISION API SERVICE
// Online AI image analysis service using LLaMA Vision via Groq
// ============================================

// Debug: Log raw environment variables
console.log('🔍 DEBUG: import.meta.env:', import.meta.env);
console.log('🔍 DEBUG: VITE_VISION_API_KEY from env:', import.meta?.env?.VITE_VISION_API_KEY);
console.log('🔍 DEBUG: VITE_GROQ_API_KEY from env:', import.meta?.env?.VITE_GROQ_API_KEY);

const VISION_API_KEY = import.meta?.env?.VITE_VISION_API_KEY || import.meta?.env?.VITE_GROQ_API_KEY || '';
const VISION_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const VISION_MODEL = 'meta-llama/llama-4-scout-17b-16e-instruct';
const API_TIMEOUT = 30000; // 30 seconds for image processing

interface VisionMessage {
  role: 'system' | 'user';
  content: string | Array<{
    type: 'text' | 'image_url';
    text?: string;
    image_url?: {
      url: string;
    };
  }>;
}

interface VisionResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

interface AnalysisResult {
  imageAnalysis?: string;
  symptoms: string[];
  confidence: number;
  recommendations: string[];
  urgency?: 'critical' | 'high' | 'medium' | 'low';
}

class VisionApiService {
  private isProcessing = false;

  // Get system prompt for selected language
  private getSystemPrompt(language: string): string {
    const languageNames: { [key: string]: string } = {
      en: 'English',
      hi: 'Hindi (हिंदी)',
      ta: 'Tamil (தமிழ்)',
      te: 'Telugu (తెలుగు)',
      bn: 'Bengali (বাংলা)',
      mr: 'Marathi (मराठी)',
      gu: 'Gujarati (ગુજરાતી)',
      kn: 'Kannada (ಕನ್ನಡ)',
      ml: 'Malayalam (മലയാളം)',
      pa: 'Punjabi (ਪੰਜਾਬੀ)',
      or: 'Odia (ଓଡ଼ିଆ)',
      as: 'Assamese (অসমীয়া)',
      ur: 'Urdu (اردو)'
    };

    return `You are a MEDICAL IMAGE ANALYSIS assistant for MediGuide, designed for users in India. You ONLY analyze medical and health-related images.

CRITICAL SCOPE RESTRICTION (HIGHEST PRIORITY):
- You are a MEDICAL IMAGE ANALYZER ONLY
- You ONLY analyze images related to medical conditions, symptoms, injuries, wounds, rashes, skin conditions, or health concerns
- If the image is NOT medical-related (e.g., food, animals, objects, scenery, people without visible medical issues), you MUST respond with ONLY this message in ${languageNames[language] || 'English'}:

For English: "I am a medical symptom detector. Please upload images related to medical symptoms, health concerns, injuries, or visible health conditions only."
For Hindi: "मैं एक चिकित्सा लक्षण डिटेक्टर हूं। कृपया केवल चिकित्सा लक्षण, स्वास्थ्य चिंताओं, चोटों या दृश्य स्वास्थ्य स्थितियों से संबंधित छवियां अपलोड करें।"
For Tamil: "நான் ஒரு மருத்துவ அறிகுறி கண்டறிதல் அமைப்பு. தயவுசெய்து மருத்துவ அறிகுறிகள், சுகாதார கவலைகள், காயங்கள் அல்லது காணக்கூடிய சுகாதார நிலைமைகள் தொடர்பான படங்களை மட்டும் பதிவேற்றவும்."
For Telugu: "నేను వైద్య లక్షణ డిటెక్టర్‌ని. దయచేసి వైద్య లక్షణాలు, ఆరోగ్య సమస్యలు, గాయాలు లేదా కనిపించే ఆరోగ్య పరిస్థితులకు సంబంధించిన చిత్రాలను మాత్రమే అప్‌లోడ్ చేయండి."
For Bengali: "আমি একটি চিকিৎসা লক্ষণ সনাক্তকারী। অনুগ্রহ করে শুধুমাত্র চিকিৎসা লক্ষণ, স্বাস্থ্য উদ্বেগ, আঘাত বা দৃশ্যমান স্বাস্থ্য অবস্থা সম্পর্কিত ছবি আপলোড করুন।"
For Marathi: "मी एक वैद्यकीय लक्षण शोधक आहे. कृपया फक्त वैद्यकीय लक्षणे, आरोग्य चिंता, जखमा किंवा दृश्यमान आरोग्य स्थिती संबंधित प्रतिमा अपलोड करा।"
For Gujarati: "હું એક તબીબી લક્ષણ શોધક છું. કૃપા કરીને ફક્ત તબીબી લક્ષણો, આરોગ્ય ચિંતાઓ, ઇજાઓ અથવા દૃશ્યમાન આરોગ્ય સ્થિતિઓ સંબંધિત છબીઓ અપલોડ કરો."
For Kannada: "ನಾನು ವೈದ್ಯಕೀಯ ಲಕ್ಷಣ ಪತ್ತೆಕಾರ. ದಯವಿಟ್ಟು ವೈದ್ಯಕೀಯ ಲಕ್ಷಣಗಳು, ಆರೋಗ್ಯ ಕಾಳಜಿಗಳು, ಗಾಯಗಳು ಅಥವಾ ಗೋಚರ ಆರೋಗ್ಯ ಸ್ಥಿತಿಗಳಿಗೆ ಸಂಬಂಧಿಸಿದ ಚಿತ್ರಗಳನ್ನು ಮಾತ್ರ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ."
For Malayalam: "ഞാൻ ഒരു മെഡിക്കൽ ലക്ഷണ കണ്ടെത്തൽ സംവിധാനമാണ്. ദയവായി മെഡിക്കൽ ലക്ഷണങ്ങൾ, ആരോഗ്യ ആശങ്കകൾ, പരിക്കുകൾ അല്ലെങ്കിൽ ദൃശ്യമായ ആരോഗ്യ അവസ്ഥകൾ സംബന്ധിച്ച ചിത്രങ്ങൾ മാത്രം അപ്‌ലോഡ് ചെയ്യുക."
For Punjabi: "ਮੈਂ ਇੱਕ ਮੈਡੀਕਲ ਲੱਛਣ ਖੋਜੀ ਹਾਂ। ਕਿਰਪਾ ਕਰਕੇ ਸਿਰਫ਼ ਮੈਡੀਕਲ ਲੱਛਣਾਂ, ਸਿਹਤ ਚਿੰਤਾਵਾਂ, ਸੱਟਾਂ ਜਾਂ ਦਿਖਾਈ ਦੇਣ ਵਾਲੀਆਂ ਸਿਹਤ ਸਥਿਤੀਆਂ ਨਾਲ ਸਬੰਧਤ ਤਸਵੀਰਾਂ ਅੱਪਲੋਡ ਕਰੋ।"
For Odia: "ମୁଁ ଏକ ଚିକିତ୍ସା ଲକ୍ଷଣ ଚିହ୍ନଟକାରୀ। ଦୟାକରି କେବଳ ଚିକିତ୍ସା ଲକ୍ଷଣ, ସ୍ୱାସ୍ଥ୍ୟ ଚିନ୍ତା, ଆଘାତ କିମ୍ବା ଦୃଶ୍ୟମାନ ସ୍ୱାସ୍ଥ୍ୟ ଅବସ୍ଥା ସମ୍ବନ୍ଧୀୟ ଚିତ୍ର ଅପଲୋଡ୍ କରନ୍ତୁ।"
For Assamese: "মই এটা চিকিৎসা লক্ষণ চিনাক্তকাৰী। অনুগ্ৰহ কৰি কেৱল চিকিৎসা লক্ষণ, স্বাস্থ্য চিন্তা, আঘাত বা দৃশ্যমান স্বাস্থ্য অৱস্থা সম্পৰ্কীয় ছবি আপলোড কৰক।"
For Urdu: "میں ایک طبی علامات کا پتہ لگانے والا ہوں۔ براہ کرم صرف طبی علامات، صحت کی پریشانیوں، زخموں یا نظر آنے والی صحت کی حالتوں سے متعلق تصاویر اپ لوڈ کریں۔"

- DO NOT analyze non-medical images (food, recipes, animals, objects, scenery, etc.)
- DO NOT provide information about non-medical topics
- Examples of NON-MEDICAL images to reject: food items, recipes, animals (unless showing injury), landscapes, objects, etc.

CRITICAL LANGUAGE RULES:
1. The user has selected ${languageNames[language] || 'English'} as their preferred language
2. You MUST respond ONLY and STRICTLY in ${languageNames[language] || 'English'}
3. NEVER mix languages or respond in any other language
4. If the user's question/input is in a language OTHER than the 13 supported Indian languages (English, Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, Punjabi, Odia, Assamese, Urdu), respond in English with ONLY this message: "MediGuide only supports 13 Indian languages. Please use one of the supported languages: English, Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, Punjabi, Odia, Assamese, or Urdu."
5. Use simple, clear language that common people can understand
6. Every single word in your response must be in ${languageNames[language] || 'English'}

SUPPORTED LANGUAGES ONLY:
English, Hindi (हिंदी), Marathi (मराठी), Gujarati (ગુજરાતી), Punjabi (ਪੰਜਾਬੀ), Tamil (தமிழ்), Telugu (తెలుగు), Kannada (ಕನ್ನಡ), Malayalam (മലയാളം), Odia (ଓଡ଼ିଆ), Assamese (অসমীয়া), Bengali (বাংলা), Urdu (اردو)

RESPONSE FORMAT (STRICT):
You must respond in this exact format:

Image Analysis:
[Write 2-3 lines describing what you see in the image - be specific and clear]

Identified Symptoms:
[List 2-4 symptoms you observe, one per line]

Recommendations:
[List 3-5 recommendations, one per line]

Urgency Level: [critical/high/medium/low]

Disclaimer: This analysis is for informational purposes only and should not replace professional medical advice. Please consult with a healthcare provider for proper diagnosis and treatment.

ANALYSIS GUIDELINES:
1. Start with "Image Analysis" - describe what you see in 2-3 lines
2. Carefully examine the image for visible symptoms
3. Identify conditions like: wounds, bleeding, rashes, swelling, bruising, burns, infections, skin conditions, injuries
4. Assess urgency based on severity:
   - CRITICAL: Severe bleeding, deep wounds, severe burns, signs of infection, life-threatening conditions
   - HIGH: Moderate bleeding, significant swelling, painful injuries, concerning rashes
   - MEDIUM: Minor injuries, mild rashes, bruising, minor swelling
   - LOW: Very minor issues, cosmetic concerns

5. Provide practical recommendations:
   - First aid steps
   - Home care advice
   - When to seek medical help
   - What type of doctor to consult

INDIA-SPECIFIC INFORMATION:
- Recommend Indian healthcare facilities when needed
- Suggest consulting with Indian medical professionals
- Use Indian context for common conditions
- Provide emergency numbers ONLY for critical cases:
  * Emergency: 112
  * Ambulance: 102

IMPORTANT:
- Be accurate and helpful
- Never diagnose definitively - suggest possibilities
- Always recommend professional consultation for serious issues
- Provide emergency numbers only for critical/life-threatening situations
- Keep response concise and actionable

Remember: Respond STRICTLY in ${languageNames[language] || 'English'} only and follow the exact format specified above. If input is in unsupported language, respond in English with the language support message.`;
  }

  // Check if online
  isOnline(): boolean {
    return navigator.onLine;
  }

  // Call Vision API with timeout
  private async callVisionAPI(
    imageData: string,
    language: string,
    question: string,
    abortController: AbortController
  ): Promise<string> {
    try {
      const userText = question 
        ? `Please analyze this medical image and answer this question: "${question}". Provide your assessment following the specified format.`
        : 'Please analyze this medical image and provide your assessment following the specified format.';

      const messages: VisionMessage[] = [
        {
          role: 'system',
          content: this.getSystemPrompt(language)
        },
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: userText
            },
            {
              type: 'image_url',
              image_url: {
                url: imageData
              }
            }
          ]
        }
      ];

      const response = await fetch(VISION_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${VISION_API_KEY}`
        },
        body: JSON.stringify({
          model: VISION_MODEL,
          messages: messages,
          temperature: 0.7,
          max_tokens: 1024,
          top_p: 1,
          stream: false
        }),
        signal: abortController.signal
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`API Error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
      }

      const data: VisionResponse = await response.json();
      
      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        throw new Error('Invalid API response format');
      }

      return data.choices[0].message.content;
    } catch (error: any) {
      if (error.name === 'AbortError') {
        throw new Error('Request timeout - Please check your internet connection');
      }
      throw error;
    }
  }

  // Parse AI response into structured format
  private parseResponse(aiResponse: string, language: string): AnalysisResult {
    // Check if this is a rejection message (non-medical image)
    const rejectionKeywords = [
      'medical symptom detector',
      'चिकित्सा लक्षण डिटेक्टर',
      'மருத்துவ அறிகுறி கண்டறிதல்',
      'వైద్య లక్షణ డిటెక్టర్',
      'চিকিৎসা লক্ষণ সনাক্তকারী',
      'वैद्यकीय लक्षण शोधक',
      'તબીબી લક્ષણ શોધક',
      'ವೈದ್ಯಕೀಯ ಲಕ್ಷಣ ಪತ್ತೆಕಾರ',
      'മെഡിക്കൽ ലക്ഷണ കണ്ടെത്തൽ',
      'ਮੈਡੀਕਲ ਲੱਛਣ ਖੋਜੀ',
      'ଚିକିତ୍ସା ଲକ୍ଷଣ ଚିହ୍ନଟକାରୀ',
      'চিকিৎসা লক্ষণ চিনাক্তকাৰী',
      'طبی علامات کا پتہ لگانے والا',
      'upload images related to medical',
      'only supports 13'
    ];
    
    const lowerResponse = aiResponse.toLowerCase();
    const isRejection = rejectionKeywords.some(keyword => 
      lowerResponse.includes(keyword.toLowerCase())
    );
    
    if (isRejection) {
      // Return the rejection message as-is
      return {
        imageAnalysis: aiResponse.trim(),
        symptoms: [],
        recommendations: [],
        confidence: 0,
        urgency: 'low'
      };
    }
    
    const lines = aiResponse.split('\n').filter(line => line.trim());
    
    const symptoms: string[] = [];
    const recommendations: string[] = [];
    let imageAnalysis = '';
    let urgency: 'critical' | 'high' | 'medium' | 'low' = 'medium';
    let currentSection = '';

    for (const line of lines) {
      const trimmedLine = line.trim();
      
      // Detect sections
      if (trimmedLine.toLowerCase().includes('image analysis:')) {
        currentSection = 'imageAnalysis';
        continue;
      } else if (trimmedLine.toLowerCase().includes('identified symptoms') || 
          trimmedLine.toLowerCase().includes('symptoms:')) {
        currentSection = 'symptoms';
        continue;
      } else if (trimmedLine.toLowerCase().includes('recommendations:') ||
                 trimmedLine.toLowerCase().includes('recommended actions:')) {
        currentSection = 'recommendations';
        continue;
      } else if (trimmedLine.toLowerCase().includes('urgency level:')) {
        const urgencyMatch = trimmedLine.toLowerCase().match(/(critical|high|medium|low)/);
        if (urgencyMatch) {
          urgency = urgencyMatch[1] as 'critical' | 'high' | 'medium' | 'low';
        }
        currentSection = '';
        continue;
      } else if (trimmedLine.toLowerCase().includes('disclaimer')) {
        currentSection = '';
        continue;
      }

      // Add to appropriate section
      if (currentSection === 'imageAnalysis' && trimmedLine && !trimmedLine.endsWith(':')) {
        imageAnalysis += (imageAnalysis ? ' ' : '') + trimmedLine;
      } else if (currentSection === 'symptoms' && trimmedLine && !trimmedLine.endsWith(':')) {
        // Remove bullet points, numbers, dashes
        const cleanLine = trimmedLine.replace(/^[-•*\d.)\]]+\s*/, '').trim();
        if (cleanLine && cleanLine.length > 2) {
          symptoms.push(cleanLine);
        }
      } else if (currentSection === 'recommendations' && trimmedLine && !trimmedLine.endsWith(':')) {
        const cleanLine = trimmedLine.replace(/^[-•*\d.)\]]+\s*/, '').trim();
        if (cleanLine && cleanLine.length > 2) {
          recommendations.push(cleanLine);
        }
      }
    }

    // Ensure we have at least some data
    if (symptoms.length === 0) {
      symptoms.push(language === 'hi' ? 'छवि विश्लेषण पूर्ण' : 'Image analysis completed');
    }
    if (recommendations.length === 0) {
      recommendations.push(
        language === 'hi' 
          ? 'उचित निदान के लिए स्वास्थ्य सेवा प्रदाता से परामर्श लें'
          : 'Consult with a healthcare provider for proper diagnosis'
      );
    }

    return {
      imageAnalysis: imageAnalysis || undefined,
      symptoms: symptoms.slice(0, 5), // Max 5 symptoms
      recommendations: recommendations.slice(0, 6), // Max 6 recommendations
      confidence: 0.85, // Default confidence
      urgency
    };
  }

  // Analyze image with online/offline fallback
  async analyzeImage(imageData: string, language: string, question: string = ''): Promise<AnalysisResult | null> {
    // Prevent duplicate processing
    if (this.isProcessing) {
      console.log('⏳ Already processing an image, please wait...');
      return null;
    }

    // Check if online
    if (!this.isOnline()) {
      console.log('📴 Offline mode - Using local image analysis');
      return null; // Return null to let offline analysis handle it
    }

    // Check if API key is configured
    console.log('🔑 Checking API key...');
    console.log('🔑 VISION_API_KEY:', VISION_API_KEY ? 'SET (length: ' + VISION_API_KEY.length + ')' : 'NOT SET');
    console.log('🔑 Key starts with:', VISION_API_KEY ? VISION_API_KEY.substring(0, 10) + '...' : 'N/A');
    
    if (!VISION_API_KEY || VISION_API_KEY.trim() === '') {
      console.log('⚠️ Vision API key not configured - Using offline mode');
      return null;
    }

    this.isProcessing = true;

    try {
      console.log('🌐 Online mode - Using Vision API');
      console.log('📸 Model:', VISION_MODEL);
      console.log('🌐 API URL:', VISION_API_URL);
      if (question) {
        console.log('❓ User question:', question);
      }

      // Create abort controller for timeout
      const abortController = new AbortController();
      const timeoutId = setTimeout(() => abortController.abort(), API_TIMEOUT);

      try {
        // Call Vision API
        const aiResponse = await this.callVisionAPI(imageData, language, question, abortController);
        clearTimeout(timeoutId);

        console.log('✅ Vision API response received');
        console.log('📝 Raw response:', aiResponse.substring(0, 200) + '...');

        // Parse response into structured format
        const result = this.parseResponse(aiResponse, language);
        
        return result;

      } catch (apiError: any) {
        clearTimeout(timeoutId);
        console.error('❌ Vision API error:', apiError.message);
        
        // Fallback to offline mode on API failure
        console.log('🔄 Falling back to offline mode');
        
        return null; // Return null to let offline analysis handle it
      }

    } catch (error) {
      console.error('❌ Error processing image:', error);
      return null;
    } finally {
      this.isProcessing = false;
    }
  }

  // Get API status
  getStatus(): { online: boolean; apiConfigured: boolean; model: string } {
    return {
      online: this.isOnline(),
      apiConfigured: VISION_API_KEY.trim() !== '',
      model: VISION_MODEL
    };
  }
}

// Export singleton instance
export const visionApiService = new VisionApiService();

// Log initialization
console.log('✅ Vision API Service initialized');
console.log('📝 Using model:', VISION_MODEL);
console.log('🌐 API Endpoint:', VISION_API_URL);
console.log('⏱️ Timeout:', API_TIMEOUT / 1000, 'seconds');
console.log('🔑 VITE_VISION_API_KEY:', import.meta?.env?.VITE_VISION_API_KEY ? 'SET' : 'NOT SET');
console.log('🔑 VITE_GROQ_API_KEY:', import.meta?.env?.VITE_GROQ_API_KEY ? 'SET' : 'NOT SET');
console.log('🔑 Final API Key configured:', VISION_API_KEY.trim() !== '' ? 'Yes (length: ' + VISION_API_KEY.length + ')' : 'No');
console.log('🔑 Key preview:', VISION_API_KEY ? VISION_API_KEY.substring(0, 15) + '...' : 'N/A');
