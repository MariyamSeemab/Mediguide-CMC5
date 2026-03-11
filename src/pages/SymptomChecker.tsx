import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { patientDataService } from '../services/patientDataService';
import { visionApiService } from '../services/visionApiService';
import { groqApiService } from '../services/groqApiService';
import { localizePercentage } from '../utils/numberLocalization';
import './SymptomChecker.css';

interface SpeechRecognitionEvent {
  results: {
    [key: number]: {
      [key: number]: {
        transcript: string;
      };
    };
  };
}

interface SpeechRecognitionErrorEvent {
  error: string;
}

interface AnalysisResult {
  imageAnalysis?: string;
  symptoms: string[];
  confidence: number;
  recommendations: string[];
  urgency?: 'critical' | 'high' | 'medium' | 'low';
}

const SymptomChecker: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isListening, setIsListening] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [imageQuestion, setImageQuestion] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [textAnalysisResult, setTextAnalysisResult] = useState<AnalysisResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Clean markdown formatting from text
  const cleanMarkdown = (text: string): string => {
    return text
      .replace(/\*\*([^*]+?)\*\*/g, '$1')  // Remove **bold**
      .replace(/\*([^*]+?)\*/g, '$1')      // Remove *italic*
      .replace(/__([^_]+?)__/g, '$1')      // Remove __bold__
      .replace(/_([^_]+?)_/g, '$1')        // Remove _italic_
      .trim();
  };

  // Parse AI text response into structured format
  const parseTextResponse = (aiResponse: string): AnalysisResult | null => {
    // Check if this is a rejection message (non-medical query)
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
      'ask me queries related to medical',
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
      
      if (trimmedLine.toLowerCase().includes('symptom analysis:') || 
          trimmedLine.toLowerCase().includes('analysis:')) {
        currentSection = 'analysis';
        continue;
      } else if (trimmedLine.toLowerCase().includes('identified symptoms') || 
          trimmedLine.toLowerCase().includes('symptoms:')) {
        currentSection = 'symptoms';
        continue;
      } else if (trimmedLine.toLowerCase().includes('recommendations:')) {
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
        break;
      }

      if (currentSection === 'analysis' && trimmedLine && !trimmedLine.endsWith(':')) {
        const cleanText = cleanMarkdown(trimmedLine);
        imageAnalysis += (imageAnalysis ? ' ' : '') + cleanText;
      } else if (currentSection === 'symptoms' && trimmedLine && !trimmedLine.endsWith(':')) {
        let cleanLine = trimmedLine.replace(/^[-•*\d.)\]]+\s*/, '').trim();
        cleanLine = cleanMarkdown(cleanLine);
        if (cleanLine && cleanLine.length > 2) {
          symptoms.push(cleanLine);
        }
      } else if (currentSection === 'recommendations' && trimmedLine && !trimmedLine.endsWith(':')) {
        let cleanLine = trimmedLine.replace(/^[-•*\d.)\]]+\s*/, '').trim();
        cleanLine = cleanMarkdown(cleanLine);
        if (cleanLine && cleanLine.length > 2) {
          recommendations.push(cleanLine);
        }
      }
    }

    return {
      imageAnalysis: imageAnalysis || undefined,
      symptoms: symptoms.length > 0 ? symptoms : [t('symptomChecker.analysis.general.symptom1') || 'Symptoms analyzed'],
      recommendations: recommendations.length > 0 ? recommendations : [t('symptomChecker.analysis.general.rec1') || 'Consult a healthcare provider'],
      confidence: 0.85,
      urgency
    };
  };

  const analyzeTextSymptoms = async (text: string) => {
      setIsAnalyzing(true);
      setTextAnalysisResult(null);

      try {
        // Try online mode first (Direct Groq API call)
        if (navigator.onLine) {
          console.log('🌐 Attempting online text symptom analysis');

          const GROQ_API_KEY = import.meta?.env?.VITE_GROQ_API_KEY || '';
          const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
          const GROQ_MODEL = 'llama-3.1-8b-instant';

          console.log('🔍 Environment:', import.meta.env);
          console.log('🔑 API Key available:', GROQ_API_KEY ? 'Yes' : 'No');
          console.log('🔑 API Key length:', GROQ_API_KEY.length);
          console.log('🔑 API Key preview:', GROQ_API_KEY ? GROQ_API_KEY.substring(0, 10) + '...' : 'EMPTY');

          if (GROQ_API_KEY) {
            console.log('✅ API Key found, proceeding with API call');
            try {
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

              const systemPrompt = `You are a MEDICAL SYMPTOM ANALYSIS assistant for MediGuide. Analyze symptoms and provide guidance.

  CRITICAL SCOPE RESTRICTION:
  - You ONLY respond to medical, health, symptom, disease, injury, or healthcare-related queries
  - If non-medical question, respond: "I am a medical symptom detector. Please ask me queries related to medical symptoms, health concerns, or healthcare advice only."

  LANGUAGE RULES:
  - Respond ONLY in ${languageNames[currentLanguage]}
  - Do NOT mix languages

  User's symptoms: ${text}

  Respond in this format:

  Symptom Analysis:
  [2-3 lines describing the symptoms and possible conditions]

  Identified Symptoms:
  [List 2-4 key symptoms]

  Recommendations:
  [List 3-5 recommendations]

  Urgency Level: [critical/high/medium/low]

  URGENCY GUIDELINES:
  - CRITICAL: Heart attack, stroke, severe chest pain, difficulty breathing, severe bleeding
  - HIGH: Moderate chest pain, high fever, severe headache, severe abdominal pain
  - MEDIUM: Persistent fever, moderate pain
  - LOW: Minor symptoms`;

              const response = await fetch(GROQ_API_URL, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${GROQ_API_KEY}`
                },
                body: JSON.stringify({
                  model: GROQ_MODEL,
                  messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: text }
                  ],
                  temperature: 0.7,
                  max_tokens: 1024
                })
              });

              console.log('📡 API Response status:', response.status);

              if (response.ok) {
                const data = await response.json();
                const aiResponse = data.choices[0].message.content;

                console.log('✅ Online text analysis received');
                const parsedResult = parseTextResponse(aiResponse);
                setTextAnalysisResult(parsedResult);
                setIsAnalyzing(false);
                return;
              } else {
                const errorData = await response.json().catch(() => ({}));
                console.error('❌ API Error:', response.status, errorData);
              }
            } catch (apiError) {
              console.error('❌ API call failed:', apiError);
            }
          } else {
            console.error('❌ No API key found! Check .env file');
            console.error('❌ VITE_GROQ_API_KEY is:', import.meta?.env?.VITE_GROQ_API_KEY);
          }
        } else {
          console.log('📴 Browser is offline');
        }

        // Fallback to offline mode
        console.log('📴 Using offline text analysis');

        setTimeout(() => {
          const lowerText = text.toLowerCase();
          
          // Check for non-medical keywords (games, entertainment, food, etc.)
          const nonMedicalKeywords = [
            'pubg', 'game', 'gaming', 'fortnite', 'minecraft', 'cod', 'valorant',
            'movie', 'film', 'song', 'music', 'video', 'youtube', 'netflix',
            'recipe', 'cook', 'food', 'restaurant', 'pizza', 'burger', 'falooda',
            'cricket', 'football', 'sports', 'match', 'player',
            'phone', 'mobile', 'laptop', 'computer', 'app', 'software'
          ];
          
          const isNonMedical = nonMedicalKeywords.some(keyword => lowerText.includes(keyword));
          
          if (isNonMedical) {
            // Return rejection message for non-medical queries
            const rejectionMessages: { [key: string]: string } = {
              en: 'I am a medical symptom detector. Please ask me queries related to medical symptoms, health concerns, or healthcare advice only.',
              hi: 'मैं एक चिकित्सा लक्षण डिटेक्टर हूं। कृपया मुझसे केवल चिकित्सा लक्षण, स्वास्थ्य चिंताओं या स्वास्थ्य सेवा सलाह से संबंधित प्रश्न पूछें।',
              ta: 'நான் ஒரு மருத்துவ அறிகுறி கண்டறிதல் அமைப்பு. தயவுசெய்து மருத்துவ அறிகுறிகள், சுகாதார கவலைகள் அல்லது சுகாதார ஆலோசனை தொடர்பான கேள்விகளை மட்டும் கேளுங்கள்.'
            };
            
            setTextAnalysisResult({
              imageAnalysis: rejectionMessages[currentLanguage] || rejectionMessages['en'],
              symptoms: [],
              recommendations: [],
              confidence: 0,
              urgency: 'low'
            });
            setIsAnalyzing(false);
            return;
          }
          
          let mockResult: AnalysisResult;

          if (lowerText.includes('fever') || lowerText.includes('temperature') || lowerText.includes('hot') ||
              lowerText.includes('बुखार') || lowerText.includes('காய்ச்சல்') || lowerText.includes('జ్వరం') ||
              lowerText.includes('জ্বর') || lowerText.includes('તાવ') || lowerText.includes('ಜ್ವರ')) {
            mockResult = {
              symptoms: [
                t('symptomChecker.analysis.fever.symptom1'),
                t('symptomChecker.analysis.fever.symptom2'),
                t('symptomChecker.analysis.fever.symptom3')
              ],
              confidence: 0.82,
              recommendations: [
                t('symptomChecker.analysis.fever.rec1'),
                t('symptomChecker.analysis.fever.rec2'),
                t('symptomChecker.analysis.fever.rec3'),
                t('symptomChecker.analysis.fever.rec4'),
                t('symptomChecker.analysis.fever.rec5')
              ]
            };
          } else if (lowerText.includes('headache') || lowerText.includes('head pain') || lowerText.includes('migraine') ||
                     lowerText.includes('सिरदर्द') || lowerText.includes('தலைவலி') || lowerText.includes('తలనొప్పి') ||
                     lowerText.includes('মাথাব্যথা') || lowerText.includes('માથાનો દુખાવો') || lowerText.includes('ತಲೆನೋವು')) {
            mockResult = {
              symptoms: [
                t('symptomChecker.analysis.headache.symptom1'),
                t('symptomChecker.analysis.headache.symptom2'),
                t('symptomChecker.analysis.headache.symptom3')
              ],
              confidence: 0.85,
              recommendations: [
                t('symptomChecker.analysis.headache.rec1'),
                t('symptomChecker.analysis.headache.rec2'),
                t('symptomChecker.analysis.headache.rec3'),
                t('symptomChecker.analysis.headache.rec4'),
                t('symptomChecker.analysis.headache.rec5'),
                t('symptomChecker.analysis.headache.rec6')
              ]
            };
          } else if (lowerText.includes('cough') || lowerText.includes('throat') || lowerText.includes('cold') ||
                     lowerText.includes('खांसी') || lowerText.includes('இருமல்') || lowerText.includes('దగ్గు') ||
                     lowerText.includes('কাশি') || lowerText.includes('ઉધરસ') || lowerText.includes('ಕೆಮ್ಮು')) {
            mockResult = {
              symptoms: [
                t('symptomChecker.analysis.cough.symptom1'),
                t('symptomChecker.analysis.cough.symptom2'),
                t('symptomChecker.analysis.cough.symptom3')
              ],
              confidence: 0.80,
              recommendations: [
                t('symptomChecker.analysis.cough.rec1'),
                t('symptomChecker.analysis.cough.rec2'),
                t('symptomChecker.analysis.cough.rec3'),
                t('symptomChecker.analysis.cough.rec4'),
                t('symptomChecker.analysis.cough.rec5'),
                t('symptomChecker.analysis.cough.rec6')
              ]
            };
          } else if (lowerText.includes('stomach') || lowerText.includes('nausea') || lowerText.includes('vomit') || lowerText.includes('diarrhea') ||
                     lowerText.includes('पेट') || lowerText.includes('வயிறு') || lowerText.includes('కడుపు') ||
                     lowerText.includes('পেট') || lowerText.includes('પેટ') || lowerText.includes('ಹೊಟ್ಟೆ')) {
            mockResult = {
              symptoms: [
                t('symptomChecker.analysis.stomach.symptom1'),
                t('symptomChecker.analysis.stomach.symptom2'),
                t('symptomChecker.analysis.stomach.symptom3')
              ],
              confidence: 0.78,
              recommendations: [
                t('symptomChecker.analysis.stomach.rec1'),
                t('symptomChecker.analysis.stomach.rec2'),
                t('symptomChecker.analysis.stomach.rec3'),
                t('symptomChecker.analysis.stomach.rec4'),
                t('symptomChecker.analysis.stomach.rec5'),
                t('symptomChecker.analysis.stomach.rec6')
              ]
            };
          } else {
            mockResult = {
              symptoms: [
                t('symptomChecker.analysis.general.symptom1'),
                t('symptomChecker.analysis.general.symptom2')
              ],
              confidence: 0.70,
              recommendations: [
                t('symptomChecker.analysis.general.rec1'),
                t('symptomChecker.analysis.general.rec2'),
                t('symptomChecker.analysis.general.rec3'),
                t('symptomChecker.analysis.general.rec4'),
                t('symptomChecker.analysis.general.rec5'),
                t('symptomChecker.analysis.general.rec6')
              ]
            };
          }

          setTextAnalysisResult(mockResult);
          setIsAnalyzing(false);
        }, 1500);

      } catch (error) {
        console.error('❌ Error in text analysis:', error);
        // Fallback to offline on error
        setTimeout(() => {
          setTextAnalysisResult({
            symptoms: [t('symptomChecker.analysis.general.symptom1')],
            confidence: 0.70,
            recommendations: [t('symptomChecker.analysis.general.rec1')]
          });
          setIsAnalyzing(false);
        }, 500);
      }
    }

  const handleSubmitSymptoms = () => {
    console.log('Submit button clicked!');
    console.log('Text input:', textInput);
    console.log('User:', user);
    
    if (!textInput.trim()) {
      alert('Please enter your symptoms first.');
      return;
    }

    // Analyze the symptoms
    analyzeTextSymptoms(textInput);

    // Save text input if user is logged in
    if (user) {
      console.log('Saving to patient data service...');
      patientDataService.addSymptomCheckerEntry(user.id, {
        source: 'symptom-checker',
        timestamp: new Date(),
        data: {
          text: textInput.trim(),
          symptoms: textInput.split(',').map(s => s.trim()).filter(s => s)
        }
      });
      
      // Automatically generate report
      patientDataService.autoGenerateReport(user.id, user.name);
    }
    
    console.log('Symptoms recorded:', textInput);
    
    // Don't clear input immediately - let user see the analysis
    // setTextInput('');
  };

  const handleVoiceInput = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const windowWithSpeech = window as any;
      const SpeechRecognitionConstructor = windowWithSpeech.webkitSpeechRecognition || windowWithSpeech.SpeechRecognition;
      if (SpeechRecognitionConstructor) {
        const recognition = new SpeechRecognitionConstructor();
        
        // Map language codes to speech recognition locale codes
        const langMap: { [key: string]: string } = {
          'en': 'en-US',
          'hi': 'hi-IN',
          'ta': 'ta-IN',
          'te': 'te-IN',
          'bn': 'bn-IN',
          'mr': 'mr-IN',
          'gu': 'gu-IN',
          'kn': 'kn-IN',
          'ml': 'ml-IN',
          'pa': 'pa-IN',
          'or': 'or-IN',
          'as': 'as-IN',
          'ur': 'ur-IN'
        };
        
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = langMap[currentLanguage] || 'en-US';

        recognition.onstart = () => {
          setIsListening(true);
        };

        recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setTextInput(transcript);
          setIsListening(false);
          
          // Save voice input to patient data service
          if (user) {
            patientDataService.addSymptomCheckerEntry(user.id, {
              source: 'symptom-checker',
              timestamp: new Date(),
              data: {
                text: transcript
              }
            });
            
            // Automatically generate report
            patientDataService.autoGenerateReport(user.id, user.name);
          }
        };

        recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
          console.error('Speech recognition error:', event.error);
          setIsListening(false);
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        if (isListening) {
          recognition.stop();
        } else {
          recognition.start();
        }
      }
    } else {
      alert('Speech recognition is not supported in your browser. Please use Chrome or Edge.');
    }
  };

  const handleImageUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          setUploadedImage(result);
          // Don't auto-analyze - wait for user to click send button
        };
        reader.readAsDataURL(file);
      } else {
        alert('Please select a valid image file.');
      }
    }
  };

  const analyzeImage = async (imageData: string) => {
    setIsAnalyzing(true);
    setAnalysisResult(null);
    
    try {
      // Try online mode first (Vision API)
      if (navigator.onLine) {
        console.log('🌐 Attempting online image analysis with Vision API');
        const onlineResult = await visionApiService.analyzeImage(imageData, currentLanguage, imageQuestion);
        
        if (onlineResult) {
          // Online mode successful
          console.log('✅ Online image analysis received');
          setAnalysisResult(onlineResult);
          setIsAnalyzing(false);
          
          // Save image analysis to patient data service
          if (user) {
            patientDataService.addSymptomCheckerEntry(user.id, {
              source: 'symptom-checker',
              timestamp: new Date(),
              data: {
                imageAnalysis: onlineResult
              }
            });
            
            // Automatically generate report
            patientDataService.autoGenerateReport(user.id, user.name);
          }
          return;
        }
      }
      
      // Fallback to offline mode (local mock analysis)
      console.log('📴 Using offline image analysis');
      
      setTimeout(() => {
        // Mock AI analysis results - using translation keys for dynamic language support
        const mockResults: AnalysisResult[] = [
          {
            symptoms: [
              t('symptomChecker.imageAnalysis.skinRash.symptom1'),
              t('symptomChecker.imageAnalysis.skinRash.symptom2'),
              t('symptomChecker.imageAnalysis.skinRash.symptom3')
            ],
            confidence: 0.85,
            recommendations: [
              t('symptomChecker.imageAnalysis.skinRash.rec1'),
              t('symptomChecker.imageAnalysis.skinRash.rec2'),
              t('symptomChecker.imageAnalysis.skinRash.rec3'),
              t('symptomChecker.imageAnalysis.skinRash.rec4')
            ]
          },
          {
            symptoms: [
              t('symptomChecker.imageAnalysis.swelling.symptom1'),
              t('symptomChecker.imageAnalysis.swelling.symptom2'),
              t('symptomChecker.imageAnalysis.swelling.symptom3')
            ],
            confidence: 0.78,
            recommendations: [
              t('symptomChecker.imageAnalysis.swelling.rec1'),
              t('symptomChecker.imageAnalysis.swelling.rec2'),
              t('symptomChecker.imageAnalysis.swelling.rec3'),
              t('symptomChecker.imageAnalysis.swelling.rec4')
            ]
          },
          {
            symptoms: [
              t('symptomChecker.imageAnalysis.discoloration.symptom1'),
              t('symptomChecker.imageAnalysis.discoloration.symptom2')
            ],
            confidence: 0.72,
            recommendations: [
              t('symptomChecker.imageAnalysis.discoloration.rec1'),
              t('symptomChecker.imageAnalysis.discoloration.rec2'),
              t('symptomChecker.imageAnalysis.discoloration.rec3'),
              t('symptomChecker.imageAnalysis.discoloration.rec4')
            ]
          }
        ];
        
        // Randomly select one of the mock results
        const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)];
        setAnalysisResult(randomResult);
        setIsAnalyzing(false);
        
        // Save image analysis to patient data service
        if (user) {
          patientDataService.addSymptomCheckerEntry(user.id, {
            source: 'symptom-checker',
            timestamp: new Date(),
            data: {
              imageAnalysis: randomResult
            }
          });
          
          // Automatically generate report
          patientDataService.autoGenerateReport(user.id, user.name);
        }
      }, 2000);
      
    } catch (error) {
      console.error('❌ Error in image analysis:', error);
      
      // Fallback to offline mode on any error
      setTimeout(() => {
        const fallbackResult: AnalysisResult = {
          symptoms: [
            t('symptomChecker.imageAnalysis.swelling.symptom1'),
            t('symptomChecker.imageAnalysis.swelling.symptom2')
          ],
          confidence: 0.75,
          recommendations: [
            t('symptomChecker.imageAnalysis.swelling.rec1'),
            t('symptomChecker.imageAnalysis.swelling.rec2'),
            t('symptomChecker.imageAnalysis.swelling.rec3')
          ]
        };
        setAnalysisResult(fallbackResult);
        setIsAnalyzing(false);
      }, 1000);
    }
  };

  const clearImage = () => {
    setUploadedImage(null);
    setImageQuestion('');
    setAnalysisResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };


  return (
    <div className="symptom-checker">
      <div className="symptom-checker-header">
        <h1>{t('symptomChecker.title')}</h1>
        <p>{t('symptomChecker.subtitle')}</p>
      </div>

      <div className="bento-grid">
        {/* Voice Input Tile */}
        <div className="bento-tile voice-tile" onClick={handleVoiceInput}>
          <div className="tile-content">
            <div className={`microphone-icon ${isListening ? 'pulsing' : ''}`}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12V6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6V12C9 13.6569 10.3431 15 12 15Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 10V12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12V10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 19V22M12 22H9M12 22H15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>{t('symptomChecker.voiceInput.title')}</h3>
            <p>{isListening ? t('symptomChecker.voiceInput.listening') : t('symptomChecker.voiceInput.description')}</p>
          </div>
        </div>

        {/* Text Input Tile */}
        <div className="bento-tile text-tile">
          <div className="tile-content">
            <div className="text-input-wrapper">
              <textarea
                className="symptom-input"
                placeholder={t('symptomChecker.textInput.placeholder')}
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                onKeyDown={(e) => {
                  // Handle Enter key press
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault(); // Prevent new line
                    console.log('Enter key pressed!');
                    handleSubmitSymptoms();
                  }
                }}
                rows={4}
              />
              <button 
                className="send-button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Send button clicked!');
                  handleSubmitSymptoms();
                }}
                disabled={!textInput.trim()}
                type="button"
              >
                Send
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <h3>{t('symptomChecker.textInput.title')}</h3>
            <p>{t('symptomChecker.textInput.description')}</p>
          </div>
        </div>

        {/* Image Analysis Tile */}
        <div className="bento-tile scan-tile">
          <div className="tile-content" onClick={handleImageUpload} style={{ cursor: 'pointer' }}>
            <div className={`scan-icon ${isAnalyzing ? 'analyzing' : ''}`}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 9V6C3 4.89543 3.89543 4 5 4H9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 4H19C20.1046 4 21 4.89543 21 6V9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 15V18C21 19.1046 20.1046 20 19 20H15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 20H5C3.89543 20 3 19.1046 3 18V15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8V16M8 12H16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>{t('symptomChecker.imageInput.title')}</h3>
            <p>{isAnalyzing ? t('symptomChecker.imageInput.analyzing') : t('symptomChecker.imageInput.description')}</p>
          </div>
          
          {/* Optional question input inside the card with send button */}
          <div onClick={(e) => e.stopPropagation()} style={{ padding: '0 20px 20px 20px' }}>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input
                type="text"
                value={imageQuestion}
                onChange={(e) => setImageQuestion(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && uploadedImage && !isAnalyzing) {
                    analyzeImage(uploadedImage);
                  }
                }}
                placeholder={t('symptomChecker.imageInput.questionPlaceholder') || 'Info or Questions realted to Image (optional)...'}
                style={{
                  flex: 1,
                  padding: '10px 12px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontFamily: 'inherit',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                  backgroundColor: '#f9f9f9',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#00D9FF';
                  e.target.style.backgroundColor = '#fff';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
                  e.target.style.backgroundColor = '#f9f9f9';
                }}
              />
              {uploadedImage && (
                <button
                  onClick={() => !isAnalyzing && analyzeImage(uploadedImage)}
                  disabled={isAnalyzing}
                  style={{
                    padding: '10px 16px',
                    backgroundColor: isAnalyzing ? '#ccc' : '#00D9FF',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: isAnalyzing ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.3s ease',
                    minWidth: '44px',
                    height: '38px'
                  }}
                  onMouseEnter={(e) => !isAnalyzing && (e.currentTarget.style.backgroundColor = '#00B8DD')}
                  onMouseLeave={(e) => !isAnalyzing && (e.currentTarget.style.backgroundColor = '#00D9FF')}
                  title={t('symptomChecker.imageInput.analyze') || 'Analyze'}
                >
                  {isAnalyzing ? (
                    <div style={{ 
                      width: '16px', 
                      height: '16px', 
                      border: '2px solid #fff',
                      borderTopColor: 'transparent',
                      borderRadius: '50%',
                      animation: 'spin 0.8s linear infinite'
                    }} />
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        style={{ display: 'none' }}
      />

      {/* Text Analysis Results */}
      {(isAnalyzing || textAnalysisResult) && !uploadedImage && (
        <div className="image-analysis-section">
          {isAnalyzing && (
            <div className="analyzing-indicator">
              <div className="spinner"></div>
              <p>{t('symptomChecker.analysis.analyzing')}</p>
            </div>
          )}

          {textAnalysisResult && !isAnalyzing && (
            <div className="analysis-results">
              {/* Check if this is a rejection message */}
              {textAnalysisResult.symptoms.length === 0 && textAnalysisResult.recommendations.length === 0 && textAnalysisResult.imageAnalysis ? (
                // Display rejection message
                <div className="rejection-message" style={{
                  padding: '30px',
                  textAlign: 'center',
                  backgroundColor: '#fff3cd',
                  borderRadius: '12px',
                  border: '2px solid #ffc107',
                  color: '#856404'
                }}>
                  <div style={{ fontSize: '48px', marginBottom: '15px' }}>⚕️</div>
                  <p style={{ fontSize: '18px', fontWeight: '500', margin: '0', lineHeight: '1.6' }}>
                    {textAnalysisResult.imageAnalysis}
                  </p>
                </div>
              ) : (
                // Display normal analysis results
                <>
                  {/* Emergency Button - Show for critical or high urgency */}
                  {(textAnalysisResult.urgency === 'critical' || textAnalysisResult.urgency === 'high') && (
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      zIndex: 10
                    }}>
                      <button
                        onClick={() => navigate('/emergency')}
                        style={{
                          backgroundColor: '#dc2626',
                          color: 'white',
                          border: 'none',
                          borderRadius: '50%',
                          width: '56px',
                          height: '56px',
                          fontSize: '28px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)',
                          transition: 'all 0.3s ease',
                          animation: textAnalysisResult.urgency === 'critical' ? 'pulse 2s infinite' : 'none'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#b91c1c';
                          e.currentTarget.style.transform = 'scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#dc2626';
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                        title="Emergency Call"
                      >
                        🚨
                      </button>
                    </div>
                  )}

                  <h3>{t('symptomChecker.analysis.title')}</h3>
                  
                  {/* Urgency Badge */}
                  {textAnalysisResult.urgency && (
                    <div style={{
                      display: 'inline-block',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: '600',
                      marginBottom: '15px',
                      backgroundColor: 
                        textAnalysisResult.urgency === 'critical' ? '#fee2e2' :
                        textAnalysisResult.urgency === 'high' ? '#fed7aa' :
                        textAnalysisResult.urgency === 'medium' ? '#fef3c7' : '#dbeafe',
                      color:
                        textAnalysisResult.urgency === 'critical' ? '#991b1b' :
                        textAnalysisResult.urgency === 'high' ? '#9a3412' :
                        textAnalysisResult.urgency === 'medium' ? '#92400e' : '#1e40af'
                    }}>
                      {textAnalysisResult.urgency === 'critical' ? '🔴 CRITICAL' :
                       textAnalysisResult.urgency === 'high' ? '🟠 HIGH' :
                       textAnalysisResult.urgency === 'medium' ? '🟡 MEDIUM' : '🟢 LOW'}
                    </div>
                  )}
                  
                  <div className="confidence-score">
                    <span>{t('symptomChecker.analysis.confidence')}: {localizePercentage(textAnalysisResult.confidence, currentLanguage)}</span>
                  </div>
                  
                  <div className="detected-symptoms">
                    <h4>{t('symptomChecker.analysis.symptoms')}</h4>
                    <ul>
                      {textAnalysisResult.symptoms.map((symptom, index) => (
                        <li key={index}>{symptom}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="recommendations">
                    <h4>{t('symptomChecker.analysis.recommendations')}</h4>
                    <ul>
                      {textAnalysisResult.recommendations.map((recommendation, index) => (
                        <li key={index}>{recommendation}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="disclaimer">
                    <p><strong>{t('symptomChecker.analysis.disclaimer').split(':')[0]}:</strong> {t('symptomChecker.analysis.disclaimer').split(':')[1]}</p>
                  </div>
                </>
              )}

              <button 
                className="new-analysis-btn"
                onClick={() => {
                  setTextAnalysisResult(null);
                  setTextInput('');
                }}
              >
                {t('symptomChecker.analysis.checkNew')}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Image Preview and Analysis Results */}
      {uploadedImage && (
        <div className="image-analysis-section">
          <div className="image-preview-container">
            <div className="image-preview">
              <img src={uploadedImage} alt="Uploaded for analysis" />
              <button className="clear-image-btn" onClick={clearImage}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {isAnalyzing && (
            <div className="analyzing-indicator">
              <div className="spinner"></div>
              <p>{t('symptomChecker.imageInput.analyzing')}</p>
            </div>
          )}

          {analysisResult && !isAnalyzing && (
            <div className="analysis-results">
              {/* Check if this is a rejection message */}
              {analysisResult.symptoms.length === 0 && analysisResult.recommendations.length === 0 && analysisResult.imageAnalysis ? (
                // Display rejection message
                <div className="rejection-message" style={{
                  padding: '30px',
                  textAlign: 'center',
                  backgroundColor: '#fff3cd',
                  borderRadius: '12px',
                  border: '2px solid #ffc107',
                  color: '#856404'
                }}>
                  <div style={{ fontSize: '48px', marginBottom: '15px' }}>⚕️</div>
                  <p style={{ fontSize: '18px', fontWeight: '500', margin: '0', lineHeight: '1.6' }}>
                    {analysisResult.imageAnalysis}
                  </p>
                </div>
              ) : (
                // Display normal analysis results
                <>
                  {/* Emergency Button - Show for critical or high urgency */}
                  {(analysisResult.urgency === 'critical' || analysisResult.urgency === 'high') && (
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      zIndex: 10
                    }}>
                      <button
                        onClick={() => navigate('/emergency')}
                        style={{
                          backgroundColor: '#dc2626',
                          color: 'white',
                          border: 'none',
                          borderRadius: '50%',
                          width: '56px',
                          height: '56px',
                          fontSize: '28px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)',
                          transition: 'all 0.3s ease',
                          animation: analysisResult.urgency === 'critical' ? 'pulse 2s infinite' : 'none'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#b91c1c';
                          e.currentTarget.style.transform = 'scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#dc2626';
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                        title="Emergency Call"
                      >
                        🚨
                      </button>
                    </div>
                  )}

                  {/* Chat section for image-related questions */}
                  {imageQuestion && (
                    <div style={{
                      backgroundColor: '#f0f9ff',
                      border: '1px solid #00D9FF',
                      borderRadius: '8px',
                      padding: '12px 15px',
                      marginBottom: '15px',
                      fontSize: '14px'
                    }}>
                      <div style={{ fontWeight: '600', color: '#0088cc', marginBottom: '5px' }}>
                        💬 Your Question:
                      </div>
                      <div style={{ color: '#333' }}>
                        {imageQuestion}
                      </div>
                    </div>
                  )}
                  
                  {/* Image Analysis Response */}
                  {analysisResult.imageAnalysis && (
                    <div style={{
                      backgroundColor: '#f0fff4',
                      border: '1px solid #10b981',
                      borderRadius: '8px',
                      padding: '12px 15px',
                      marginBottom: '20px',
                      fontSize: '14px',
                      lineHeight: '1.6'
                    }}>
                      <div style={{ fontWeight: '600', color: '#059669', marginBottom: '8px' }}>
                        🤖 MediGuide AI:
                      </div>
                      <div style={{ color: '#1f2937' }}>
                        {analysisResult.imageAnalysis}
                      </div>
                    </div>
                  )}
                  
                  <h3>{t('symptomChecker.analysis.title')}</h3>
                  
                  {/* Urgency Badge */}
                  {analysisResult.urgency && (
                    <div style={{
                      display: 'inline-block',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: '600',
                      marginBottom: '15px',
                      backgroundColor: 
                        analysisResult.urgency === 'critical' ? '#fee2e2' :
                        analysisResult.urgency === 'high' ? '#fed7aa' :
                        analysisResult.urgency === 'medium' ? '#fef3c7' : '#dbeafe',
                      color:
                        analysisResult.urgency === 'critical' ? '#991b1b' :
                        analysisResult.urgency === 'high' ? '#9a3412' :
                        analysisResult.urgency === 'medium' ? '#92400e' : '#1e40af'
                    }}>
                      {analysisResult.urgency === 'critical' ? '🔴 CRITICAL' :
                       analysisResult.urgency === 'high' ? '🟠 HIGH' :
                       analysisResult.urgency === 'medium' ? '🟡 MEDIUM' : '🟢 LOW'}
                    </div>
                  )}
                  
                  <div className="confidence-score">
                    <span>{t('symptomChecker.analysis.confidence')}: {localizePercentage(analysisResult.confidence, currentLanguage)}</span>
                  </div>
                  
                  <div className="detected-symptoms">
                    <h4>{t('symptomChecker.analysis.symptoms')}</h4>
                    <ul>
                      {analysisResult.symptoms.map((symptom, index) => (
                        <li key={index}>{symptom}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="recommendations">
                    <h4>{t('symptomChecker.analysis.recommendations')}</h4>
                    <ul>
                      {analysisResult.recommendations.map((recommendation, index) => (
                        <li key={index}>{recommendation}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="disclaimer">
                    <p><strong>{t('symptomChecker.analysis.disclaimer').split(':')[0]}:</strong> {t('symptomChecker.analysis.disclaimer').split(':')[1]}</p>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SymptomChecker;
