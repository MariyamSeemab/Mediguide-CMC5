// ============================================
// GROQ API SERVICE
// Online AI chatbot service using Groq API
// ============================================

// Debug: Log environment variable loading
console.log('🔍 GROQ DEBUG: import.meta.env:', import.meta.env);
console.log('🔍 GROQ DEBUG: VITE_GROQ_API_KEY from env:', import.meta?.env?.VITE_GROQ_API_KEY);

const GROQ_API_KEY = import.meta?.env?.VITE_GROQ_API_KEY || '';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODEL = 'llama-3.1-8b-instant';
const API_TIMEOUT = 20000; // 20 seconds

console.log('🔑 GROQ API Key configured:', GROQ_API_KEY ? 'Yes (length: ' + GROQ_API_KEY.length + ')' : 'No');
console.log('🔑 GROQ Key preview:', GROQ_API_KEY ? GROQ_API_KEY.substring(0, 15) + '...' : 'N/A');

interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface GroqResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

class GroqApiService {
  private conversationHistory: Message[] = [];
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

    return `You are a MEDICAL SYMPTOM ANALYSIS assistant for MediGuide, specifically designed for users in India. You ONLY answer medical and health-related questions.

CRITICAL SCOPE RESTRICTION (HIGHEST PRIORITY):
- You are a MEDICAL ASSISTANT ONLY
- You ONLY respond to medical, health, symptom, disease, injury, or healthcare-related queries
- If the user asks ANY non-medical question (recipes, general knowledge, entertainment, sports, politics, technology, etc.), you MUST respond with ONLY this message in ${languageNames[language] || 'English'}:

For English: "I am a medical symptom detector. Please ask me queries related to medical symptoms, health concerns, or healthcare advice only."
For Hindi: "मैं एक चिकित्सा लक्षण डिटेक्टर हूं। कृपया मुझसे केवल चिकित्सा लक्षण, स्वास्थ्य चिंताओं या स्वास्थ्य सेवा सलाह से संबंधित प्रश्न पूछें।"
For Tamil: "நான் ஒரு மருத்துவ அறிகுறி கண்டறிதல் அமைப்பு. தயவுசெய்து மருத்துவ அறிகுறிகள், சுகாதார கவலைகள் அல்லது சுகாதார ஆலோசனை தொடர்பான கேள்விகளை மட்டும் கேளுங்கள்."
For Telugu: "నేను వైద్య లక్షణ డిటెక్టర్‌ని. దయచేసి వైద్య లక్షణాలు, ఆరోగ్య సమస్యలు లేదా ఆరోగ్య సంరక్షణ సలహా సంబంధిత ప్రశ్నలు మాత్రమే అడగండి."
For Bengali: "আমি একটি চিকিৎসা লক্ষণ সনাক্তকারী। অনুগ্রহ করে শুধুমাত্র চিকিৎসা লক্ষণ, স্বাস্থ্য উদ্বেগ বা স্বাস্থ্যসেবা পরামর্শ সম্পর্কিত প্রশ্ন জিজ্ঞাসা করুন।"
For Marathi: "मी एक वैद्यकीय लक्षण शोधक आहे. कृपया मला फक्त वैद्यकीय लक्षणे, आरोग्य चिंता किंवा आरोग्य सेवा सल्ला संबंधित प्रश्न विचारा।"
For Gujarati: "હું એક તબીબી લક્ષણ શોધક છું. કૃપા કરીને મને ફક્ત તબીબી લક્ષણો, આરોગ્ય ચિંતાઓ અથવા આરોગ્ય સંભાળ સલાહ સંબંધિત પ્રશ્નો પૂછો."
For Kannada: "ನಾನು ವೈದ್ಯಕೀಯ ಲಕ್ಷಣ ಪತ್ತೆಕಾರ. ದಯವಿಟ್ಟು ವೈದ್ಯಕೀಯ ಲಕ್ಷಣಗಳು, ಆರೋಗ್ಯ ಕಾಳಜಿಗಳು ಅಥವಾ ಆರೋಗ್ಯ ಸಲಹೆ ಸಂಬಂಧಿತ ಪ್ರಶ್ನೆಗಳನ್ನು ಮಾತ್ರ ಕೇಳಿ."
For Malayalam: "ഞാൻ ഒരു മെഡിക്കൽ ലക്ഷണ കണ്ടെത്തൽ സംവിധാനമാണ്. ദയവായി മെഡിക്കൽ ലക്ഷണങ്ങൾ, ആരോഗ്യ ആശങ്കകൾ അല്ലെങ്കിൽ ആരോഗ്യ സംരക്ഷണ ഉപദേശം സംബന്ധിച്ച ചോദ്യങ്ങൾ മാത്രം ചോദിക്കുക."
For Punjabi: "ਮੈਂ ਇੱਕ ਮੈਡੀਕਲ ਲੱਛਣ ਖੋਜੀ ਹਾਂ। ਕਿਰਪਾ ਕਰਕੇ ਮੈਨੂੰ ਸਿਰਫ਼ ਮੈਡੀਕਲ ਲੱਛਣਾਂ, ਸਿਹਤ ਚਿੰਤਾਵਾਂ ਜਾਂ ਸਿਹਤ ਸੰਭਾਲ ਸਲਾਹ ਨਾਲ ਸਬੰਧਤ ਸਵਾਲ ਪੁੱਛੋ।"
For Odia: "ମୁଁ ଏକ ଚିକିତ୍ସା ଲକ୍ଷଣ ଚିହ୍ନଟକାରୀ। ଦୟାକରି କେବଳ ଚିକିତ୍ସା ଲକ୍ଷଣ, ସ୍ୱାସ୍ଥ୍ୟ ଚିନ୍ତା କିମ୍ବା ସ୍ୱାସ୍ଥ୍ୟ ସେବା ପରାମର୍ଶ ସମ୍ବନ୍ଧୀୟ ପ୍ରଶ୍ନ ପଚାରନ୍ତୁ।"
For Assamese: "মই এটা চিকিৎসা লক্ষণ চিনাক্তকাৰী। অনুগ্ৰহ কৰি কেৱল চিকিৎসা লক্ষণ, স্বাস্থ্য চিন্তা বা স্বাস্থ্যসেৱা পৰামৰ্শ সম্পৰ্কীয় প্ৰশ্ন সোধক।"
For Urdu: "میں ایک طبی علامات کا پتہ لگانے والا ہوں۔ براہ کرم مجھ سے صرف طبی علامات، صحت کی پریشانیوں یا صحت کی دیکھ بھال کے مشورے سے متعلق سوالات پوچھیں۔"

- DO NOT provide any information about non-medical topics
- DO NOT explain why you can't answer - just give the above message
- Examples of NON-MEDICAL topics to reject: game strategies (PUBG, Fortnite, etc.), movie plots, sports scores, political opinions, technology tutorials, general trivia, etc.
- MEDICAL NUTRITION QUESTIONS ARE ALLOWED: Questions about foods that help with medical conditions, dietary advice for health issues, nutritional recommendations for symptoms are ALL MEDICAL and should be answered.

CRITICAL LANGUAGE RULES:
1. The user has selected ${languageNames[language] || 'English'} as their preferred language
2. You MUST respond ONLY and STRICTLY in ${languageNames[language] || 'English'}
3. NEVER mix languages or respond in any other language
4. If the user's input is in a language OTHER than the 13 supported Indian languages (English, Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, Punjabi, Odia, Assamese, Urdu), respond in English with ONLY this message: "MediGuide only supports 13 Indian languages. Please use one of the supported languages: English, Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, Punjabi, Odia, Assamese, or Urdu."
5. Use simple, rural-friendly tone that common people can understand
6. Every single word in your response must be in ${languageNames[language] || 'English'}

SUPPORTED LANGUAGES ONLY:
English, Hindi (हिंदी), Marathi (मराठी), Gujarati (ગુજરાતી), Punjabi (ਪੰਜਾਬੀ), Tamil (தமிழ்), Telugu (తెలుగు), Kannada (ಕನ್ನಡ), Malayalam (മലയാളം), Odia (ଓଡ଼ିଆ), Assamese (অসমীয়া), Bengali (বাংলা), Urdu (اردو)

FORMATTING RULES:
- Use clear headings followed by colons (like "Symptoms:" or "Recommended Actions:")
- Use numbered lists (1. 2. 3.) for items
- Use line breaks between sections for better readability
- Keep responses concise and easy to understand

INDIA-SPECIFIC INFORMATION:
- Always provide INDIAN helplines, emergency numbers, and resources when relevant
- Use Indian medical terminology and practices
- Reference Indian healthcare system (AIIMS, government hospitals, PHCs, etc.)
- Recommend Indian government health schemes when relevant (Ayushman Bharat, etc.)
- Suggest consulting with Indian medical professionals and facilities
- Use Indian context for diseases, climate-related health issues, and common conditions

EMERGENCY HELPLINES (ONLY for serious/urgent/life-threatening cases):
- Emergency: 112
- Ambulance: 102
- Mental Health Helpline: 08046110007 (NIMHANS)
- Women Helpline: 181
- Child Helpline: 1098
- National Health Helpline: 1800-180-1104

IMPORTANT:
- DO NOT include helpline numbers in every response
- Only provide helplines when the situation requires immediate medical attention
- Never give dangerous or illegal medical advice
- Always remind users to consult healthcare professionals for serious concerns

Remember: Respond STRICTLY in ${languageNames[language] || 'English'} only. If input is in unsupported language, respond in English with the language support message.`;
  }

  // Check if online
  isOnline(): boolean {
    return navigator.onLine;
  }

  // Call Groq API with timeout
  private async callGroqAPI(messages: Message[], abortController: AbortController): Promise<string> {
    try {
      console.log('🌐 Calling Groq API...');
      console.log('🔑 Using API Key:', GROQ_API_KEY ? GROQ_API_KEY.substring(0, 15) + '...' : 'NOT SET');
      console.log('📝 Model:', GROQ_MODEL);
      console.log('🌐 URL:', GROQ_API_URL);
      
      const response = await fetch(GROQ_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: GROQ_MODEL,
          messages: messages,
          temperature: 0.7,
          max_tokens: 1024,
          top_p: 1,
          stream: false
        }),
        signal: abortController.signal
      });

      console.log('📡 Response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('❌ API Error Response:', errorData);
        throw new Error(`API Error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
      }

      const data: GroqResponse = await response.json();
      
      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        console.error('❌ Invalid response format:', data);
        throw new Error('Invalid API response format');
      }

      console.log('✅ API call successful');
      return data.choices[0].message.content;
    } catch (error: any) {
      console.error('❌ Groq API Error:', error);
      if (error.name === 'AbortError') {
        throw new Error('Request timeout - Please check your internet connection');
      }
      throw error;
    }
  }

  // Process message with online/offline fallback
  async getResponse(userMessage: string, language: string): Promise<string | null> {
    // Prevent duplicate sends
    if (this.isProcessing) {
      console.log('⏳ Already processing a message, please wait...');
      return null;
    }

    // Check if online
    if (!this.isOnline()) {
      console.log('📴 Offline mode - Using local chatbot');
      return null; // Return null to let offline chatbot handle it
    }

    this.isProcessing = true;

    try {
      console.log('🌐 Online mode - Using Groq API');

      // Add user message to conversation history
      this.conversationHistory.push({
        role: 'user',
        content: userMessage
      });

      // Keep only last 20 messages to avoid token limits
      if (this.conversationHistory.length > 20) {
        this.conversationHistory = this.conversationHistory.slice(-20);
      }

      // Prepare messages with system prompt
      const messages: Message[] = [
        {
          role: 'system',
          content: this.getSystemPrompt(language)
        },
        ...this.conversationHistory
      ];

      // Create abort controller for timeout
      const abortController = new AbortController();
      const timeoutId = setTimeout(() => abortController.abort(), API_TIMEOUT);

      try {
        // Call Groq API
        const botResponse = await this.callGroqAPI(messages, abortController);
        clearTimeout(timeoutId);

        // Add bot response to conversation history
        this.conversationHistory.push({
          role: 'assistant',
          content: botResponse
        });

        console.log('✅ Groq API response received');
        return botResponse;

      } catch (apiError: any) {
        clearTimeout(timeoutId);
        console.error('❌ Groq API error:', apiError.message);
        
        // Fallback to offline mode on API failure
        console.log('🔄 Falling back to offline mode');
        
        // Remove the user message from history since API failed
        this.conversationHistory.pop();
        
        return null; // Return null to let offline chatbot handle it
      }

    } catch (error) {
      console.error('❌ Error processing message:', error);
      return null;
    } finally {
      this.isProcessing = false;
    }
  }

  // Clear conversation history
  clearHistory(): void {
    this.conversationHistory = [];
    console.log('🗑️ Conversation history cleared');
  }

  // Get conversation history length
  getHistoryLength(): number {
    return this.conversationHistory.length;
  }
}

// Export singleton instance
export const groqApiService = new GroqApiService();

// Log initialization
console.log('✅ Groq API Service initialized');
console.log('📝 Using model:', GROQ_MODEL);
console.log('🌐 API Endpoint:', GROQ_API_URL);
console.log('⏱️ Timeout:', API_TIMEOUT / 1000, 'seconds');
