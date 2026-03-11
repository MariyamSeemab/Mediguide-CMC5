// Voice Assistant Utility for Rural Users
// Text-to-Speech and Speech Recognition with multilingual support

export interface VoiceConfig {
  language: string;
  rate: number; // 0.1 to 10 (0.8 for rural-friendly slow speed)
  pitch: number; // 0 to 2
  volume: number; // 0 to 1
}

// Language code mapping for speech recognition and synthesis
export const languageCodeMap: { [key: string]: string } = {
  'en': 'en-IN',
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

// Text-to-Speech class
export class TextToSpeech {
  private synth: SpeechSynthesis;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private config: VoiceConfig;

  constructor(config: Partial<VoiceConfig> = {}) {
    this.synth = window.speechSynthesis;
    this.config = {
      language: config.language || 'en-IN',
      rate: config.rate || 0.8, // Slower for rural users
      pitch: config.pitch || 1.0,
      volume: config.volume || 0.9
    };
  }

  // Speak text
  speak(text: string, onEnd?: () => void, onStart?: () => void): void {
    // Stop any ongoing speech
    this.stop();

    // Clean text (remove markdown, emojis, etc.)
    const cleanText = this.cleanText(text);
    
    // Safety check - don't speak if text is empty or too short
    if (!cleanText || cleanText.length < 2) {
      console.warn('⚠️ Text too short or empty after cleaning:', cleanText);
      if (onEnd) onEnd();
      return;
    }

    // Try to find a native voice first
    const voices = this.synth.getVoices();
    const langCode = this.config.language.split('-')[0];
    let voice = this.findVoice(voices, langCode);
    
    // If no native voice found, use Hindi voice (Lekha) as fallback for Indian languages
    if (!voice) {
      console.log('🔍 No native voice found for', this.config.language);
      
      // For Gujarati and other Indian languages without native voices, use Hindi (Lekha)
      const indianLanguages = ['gu', 'ml', 'pa', 'or', 'as', 'ur'];
      if (indianLanguages.includes(langCode)) {
        console.log('🔄 Using Hindi voice (Lekha) as fallback for', langCode);
        voice = this.findVoice(voices, 'hi');
        
        if (voice) {
          console.log('✅ Found Hindi voice:', voice.name);
        } else {
          console.warn('⚠️ Hindi voice not found, using default');
        }
      }
    }

    // Use native speech synthesis
    this.speakWithNative(cleanText, voice, onEnd, onStart);
  }

  // Speak using native browser TTS
  private speakWithNative(text: string, voice: SpeechSynthesisVoice | null, onEnd?: () => void, onStart?: () => void): void {
    this.currentUtterance = new SpeechSynthesisUtterance(text);
    this.currentUtterance.lang = this.config.language;
    this.currentUtterance.rate = this.config.rate;
    this.currentUtterance.pitch = this.config.pitch;
    this.currentUtterance.volume = this.config.volume;

    if (voice) {
      console.log('✅ Using native voice:', voice.name, '(' + voice.lang + ')');
      this.currentUtterance.voice = voice;
    } else {
      console.warn('⚠️ No voice found for', this.config.language, '- using default');
      const voices = this.synth.getVoices();
      console.log('📋 Available voices:', voices.map(v => `${v.name} (${v.lang})`).join(', '));
    }

    if (onStart) {
      this.currentUtterance.onstart = onStart;
    }

    if (onEnd) {
      this.currentUtterance.onend = onEnd;
    }
    
    // Error handling
    this.currentUtterance.onerror = (event) => {
      console.error('❌ Speech synthesis error:', event);
      if (onEnd) onEnd();
    };

    console.log('🗣️ Speaking text (native):', text.substring(0, 50) + '...');
    this.synth.speak(this.currentUtterance);
  }

  // Find best matching voice
  private findVoice(voices: SpeechSynthesisVoice[], langCode: string): SpeechSynthesisVoice | null {
    console.log('🔊 Available voices:', voices.length);
    console.log('🌐 Looking for language:', this.config.language);
    
    let voice = null;
    
    // Strategy 1: Exact match (hi-IN)
    voice = voices.find(v => v.lang === this.config.language);
    if (voice) {
      console.log('✅ Found exact match:', voice.name);
      return voice;
    }
    
    // Strategy 2: Starts with language code (hi)
    voice = voices.find(v => v.lang.startsWith(langCode));
    if (voice) {
      console.log('✅ Found partial match:', voice.name);
      return voice;
    }
    
    // Strategy 3: Contains language code
    voice = voices.find(v => v.lang.toLowerCase().includes(langCode));
    if (voice) {
      console.log('✅ Found contains match:', voice.name);
      return voice;
    }
    
    // Strategy 4: Voice name contains language (specific voice names for Indian languages)
    const specificVoiceNames: { [key: string]: string[] } = {
      'hi': ['lekha', 'hindi'],
      'ta': ['vani', 'kyra', 'tamil'],
      'te': ['geeta', 'veena', 'telugu'],
      'bn': ['piya', 'bangla', 'bengali'],
      'mr': ['ananya', 'marathi'],
      'gu': ['gujarati'],
      'kn': ['soumya', 'kannada'],
      'ml': ['malayalam'],
      'pa': ['punjabi'],
      'or': ['odia', 'oriya'],
      'as': ['assamese'],
      'ur': ['urdu']
    };
    
    const voiceNames = specificVoiceNames[langCode] || [];
    for (const name of voiceNames) {
      voice = voices.find(v => v.name.toLowerCase().includes(name));
      if (voice) {
        console.log('✅ Found by specific voice name:', voice.name);
        return voice;
      }
    }
    
    // Strategy 5: For other Indian languages, try by general language name
    const languageNames: { [key: string]: string[] } = {
      'ta': ['tamil'],
      'te': ['telugu'],
      'bn': ['bangla', 'bengali'],
      'mr': ['marathi'],
      'gu': ['gujarati'],
      'kn': ['kannada'],
      'ml': ['malayalam'],
      'pa': ['punjabi'],
      'or': ['odia', 'oriya'],
      'as': ['assamese'],
      'ur': ['urdu']
    };
    
    const names = languageNames[langCode] || [];
    for (const name of names) {
      voice = voices.find(v => v.name.toLowerCase().includes(name));
      if (voice) {
        console.log('✅ Found by language name:', voice.name);
        return voice;
      }
    }
    
    return null;
  }
  // Stop speaking
  stop(): void {
    if (this.synth.speaking) {
      this.synth.cancel();
    }
    this.currentUtterance = null;
  }

  // Pause speaking
  pause(): void {
    if (this.synth.speaking && !this.synth.paused) {
      this.synth.pause();
    }
  }

  // Resume speaking
  resume(): void {
    if (this.synth.paused) {
      this.synth.resume();
    }
  }

  // Check if currently speaking
  isSpeaking(): boolean {
    return this.synth.speaking;
  }

  // Check if paused
  isPaused(): boolean {
    return this.synth.paused;
  }

  // Update language
  setLanguage(language: string): void {
    // Handle both formats: 'hi' or 'hi-IN'
    if (language.includes('-')) {
      // Already in full format (hi-IN)
      this.config.language = language;
      console.log('🌐 Language set to:', language);
    } else {
      // Short format (hi), convert to full format
      this.config.language = languageCodeMap[language] || 'en-IN';
      console.log('🌐 Language converted:', language, '→', this.config.language);
    }
  }

  // Clean text for speech (remove markdown, emojis, but preserve all language text)
  private cleanText(text: string): string {
    let cleaned = text;
    
    // Remove markdown bold/italic (preserve content)
    cleaned = cleaned.replace(/\*\*(.+?)\*\*/g, '$1');
    cleaned = cleaned.replace(/\*(.+?)\*/g, '$1');
    cleaned = cleaned.replace(/__(.+?)__/g, '$1');
    cleaned = cleaned.replace(/_(.+?)_/g, '$1');
    
    // Remove markdown headers (preserve content)
    cleaned = cleaned.replace(/^#+\s+/gm, '');
    
    // Replace bullet points with "and" or pause
    cleaned = cleaned.replace(/^[•]\s+/gm, '');
    cleaned = cleaned.replace(/^[\-\*]\s+/gm, '');
    
    // Remove only common emojis (preserve text)
    cleaned = cleaned.replace(/[\u{1F600}-\u{1F64F}]/gu, ''); // Emoticons
    cleaned = cleaned.replace(/[\u{1F300}-\u{1F5FF}]/gu, ''); // Misc Symbols
    cleaned = cleaned.replace(/[\u{1F680}-\u{1F6FF}]/gu, ''); // Transport
    cleaned = cleaned.replace(/[\u{1F1E0}-\u{1F1FF}]/gu, ''); // Flags
    cleaned = cleaned.replace(/[\u{2600}-\u{26FF}]/gu, '');  // Misc symbols
    cleaned = cleaned.replace(/[\u{2700}-\u{27BF}]/gu, '');  // Dingbats
    cleaned = cleaned.replace(/👋|😊|💙|🤖|⚠️|✅|❌|🔴|🟡|🟢/g, ''); // Common emojis
    
    // Normalize whitespace (but preserve line breaks as pauses)
    cleaned = cleaned.replace(/\n\n+/g, '. '); // Double line breaks become periods
    cleaned = cleaned.replace(/\n/g, ', '); // Single line breaks become commas
    cleaned = cleaned.replace(/\s+/g, ' '); // Multiple spaces become single space
    
    // Trim
    cleaned = cleaned.trim();
    
    console.log('🧹 Original text length:', text.length);
    console.log('🧹 Cleaned text length:', cleaned.length);
    console.log('🧹 Cleaned text preview:', cleaned.substring(0, 100));
    
    return cleaned;
  }
}

// Speech Recognition class
export class SpeechRecognition {
  private recognition: any;
  private isListening: boolean = false;
  private language: string;

  constructor(language: string = 'en-IN') {
    this.language = languageCodeMap[language] || 'en-IN';
    this.initRecognition();
  }

  private initRecognition(): void {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognitionConstructor = 
        (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      
      this.recognition = new SpeechRecognitionConstructor();
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
      this.recognition.lang = this.language;
      this.recognition.maxAlternatives = 1;
    }
  }

  // Start listening
  start(
    onResult: (transcript: string) => void,
    onError?: (error: string) => void,
    onEnd?: () => void
  ): void {
    if (!this.recognition) {
      if (onError) {
        onError('Speech recognition not supported in this browser');
      }
      return;
    }

    this.recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      onResult(transcript);
    };

    this.recognition.onerror = (event: any) => {
      this.isListening = false;
      if (onError) {
        onError(event.error);
      }
    };

    this.recognition.onend = () => {
      this.isListening = false;
      if (onEnd) {
        onEnd();
      }
    };

    try {
      this.recognition.start();
      this.isListening = true;
    } catch (error) {
      this.isListening = false;
      if (onError) {
        onError('Failed to start speech recognition');
      }
    }
  }

  // Stop listening
  stop(): void {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
      this.isListening = false;
    }
  }

  // Update language
  setLanguage(language: string): void {
    this.language = languageCodeMap[language] || 'en-IN';
    if (this.recognition) {
      this.recognition.lang = this.language;
    }
  }

  // Check if listening
  getIsListening(): boolean {
    return this.isListening;
  }

  // Check if supported
  static isSupported(): boolean {
    return 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
  }
}

// Sound notification utility
export class SoundNotification {
  private audioContext: AudioContext | null = null;

  constructor() {
    if ('AudioContext' in window || 'webkitAudioContext' in window) {
      this.audioContext = new ((window as any).AudioContext || (window as any).webkitAudioContext)();
    }
  }

  // Play a soft notification sound
  playNotification(type: 'open' | 'response' = 'response'): void {
    if (!this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    // Soft, pleasant tones
    if (type === 'open') {
      // Opening sound: ascending tones
      oscillator.frequency.setValueAtTime(400, this.audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(600, this.audioContext.currentTime + 0.1);
      oscillator.frequency.exponentialRampToValueAtTime(800, this.audioContext.currentTime + 0.2);
    } else {
      // Response sound: gentle notification
      oscillator.frequency.setValueAtTime(600, this.audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(500, this.audioContext.currentTime + 0.15);
    }

    // Soft volume (0.1 = 10% volume)
    gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);

    oscillator.type = 'sine'; // Soft sine wave
    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + 0.3);
  }

  // Play a subtle success sound
  playSuccess(): void {
    if (!this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    // Success: two quick ascending tones
    oscillator.frequency.setValueAtTime(500, this.audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(700, this.audioContext.currentTime + 0.1);

    gainNode.gain.setValueAtTime(0.08, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2);

    oscillator.type = 'sine';
    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + 0.2);
  }
}
