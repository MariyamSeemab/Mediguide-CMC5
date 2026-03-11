// Voice Test Page - Debug Hindi TTS
import React, { useState, useEffect } from 'react';
import { TextToSpeech, languageCodeMap } from '../utils/voiceAssistant';

const VoiceTest: React.FC = () => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedLang, setSelectedLang] = useState('hi');
  const [testText, setTestText] = useState('नमस्ते, मैं आपकी मदद कैसे कर सकता हूं?');
  const [tts] = useState(() => new TextToSpeech());

  useEffect(() => {
    // Load voices
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      console.log('📢 Total voices:', availableVoices.length);
      setVoices(availableVoices);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const handleSpeak = () => {
    const langCode = languageCodeMap[selectedLang];
    console.log('🗣️ Speaking in:', langCode);
    console.log('📝 Original text:', testText);
    tts.setLanguage(selectedLang);
    tts.speak(testText);
  };

  const handleStop = () => {
    tts.stop();
  };

  const testSamples: { [key: string]: string } = {
    en: 'Hello, how can I help you today?',
    hi: 'नमस्ते, मैं आपकी मदद कैसे कर सकता हूं?',
    ta: 'வணக்கம், இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?',
    te: 'నమస్కారం, ఈరోజు నేను మీకు ఎలా సహాయం చేయగలను?',
    bn: 'হ্যালো, আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি?',
    mr: 'नमस्कार, आज मी तुम्हाला कशी मदत करू शकतो?',
    gu: 'હેલો, આજે હું તમને કેવી રીતે મદદ કરી શકું?',
    kn: 'ಹಲೋ, ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?',
    ml: 'ഹലോ, ഇന്ന് ഞാൻ നിങ്ങളെ എങ്ങനെ സഹായിക്കും?',
    pa: 'ਹੈਲੋ, ਅੱਜ ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?',
    or: 'ହେଲୋ, ଆଜି ମୁଁ ଆପଣଙ୍କୁ କିପରି ସାହାଯ୍ୟ କରିପାରିବି?',
    as: 'হেলো, আজি মই আপোনাক কেনেকৈ সহায় কৰিব পাৰোঁ?',
    ur: 'ہیلو، آج میں آپ کی کیسے مدد کر سکتا ہوں؟'
  };

  const hindiVoices = voices.filter(v => 
    v.lang.includes('hi') || v.lang.includes('HI') || v.name.toLowerCase().includes('hindi')
  );

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>🎤 Voice Test - Hindi TTS Debug</h1>
      
      <div style={{ marginBottom: '20px', padding: '15px', background: '#f0f0f0', borderRadius: '8px' }}>
        <h3>📊 Voice Statistics</h3>
        <p><strong>Total voices available:</strong> {voices.length}</p>
        <p><strong>Hindi voices found:</strong> {hindiVoices.length}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>🌐 Select Language</h3>
        <select 
          value={selectedLang} 
          onChange={(e) => {
            setSelectedLang(e.target.value);
            setTestText(testSamples[e.target.value]);
          }}
          style={{ padding: '10px', fontSize: '16px', width: '100%' }}
        >
          <option value="en">English</option>
          <option value="hi">Hindi (हिंदी)</option>
          <option value="ta">Tamil (தமிழ்)</option>
          <option value="te">Telugu (తెలుగు)</option>
          <option value="bn">Bangla (বাংলা)</option>
          <option value="mr">Marathi (मराठी)</option>
          <option value="gu">Gujarati (ગુજરાતી)</option>
          <option value="kn">Kannada (ಕನ್ನಡ)</option>
          <option value="ml">Malayalam (മലയാളം)</option>
          <option value="pa">Punjabi (ਪੰਜਾਬੀ)</option>
          <option value="or">Odia (ଓଡ଼ିଆ)</option>
          <option value="as">Assamese (অসমীয়া)</option>
          <option value="ur">Urdu (اردو)</option>
        </select>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>📝 Test Text</h3>
        <textarea
          value={testText}
          onChange={(e) => setTestText(e.target.value)}
          style={{ width: '100%', padding: '10px', fontSize: '16px', minHeight: '100px' }}
        />
      </div>

      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <button 
          onClick={handleSpeak}
          style={{ padding: '12px 24px', fontSize: '16px', cursor: 'pointer', background: '#005EB8', color: 'white', border: 'none', borderRadius: '6px' }}
        >
          ▶️ Speak
        </button>
        <button 
          onClick={handleStop}
          style={{ padding: '12px 24px', fontSize: '16px', cursor: 'pointer', background: '#D32F2F', color: 'white', border: 'none', borderRadius: '6px' }}
        >
          ⏹️ Stop
        </button>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>🔊 Available Hindi Voices</h3>
        {hindiVoices.length > 0 ? (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {hindiVoices.map((voice, index) => (
              <li key={index} style={{ padding: '10px', background: '#e8f4f8', marginBottom: '8px', borderRadius: '6px' }}>
                <strong>{voice.name}</strong><br />
                <small>Language: {voice.lang} | Local: {voice.localService ? 'Yes' : 'No'}</small>
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ color: '#D32F2F' }}>⚠️ No Hindi voices found. Your browser may not support Hindi TTS.</p>
        )}
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>📋 All Available Voices ({voices.length})</h3>
        <div style={{ maxHeight: '300px', overflow: 'auto', border: '1px solid #ddd', padding: '10px', borderRadius: '6px' }}>
          {voices.map((voice, index) => (
            <div key={index} style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
              <strong>{voice.name}</strong> - {voice.lang}
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '30px', padding: '15px', background: '#fff3cd', borderRadius: '8px' }}>
        <h3>💡 Troubleshooting Tips</h3>
        <ul>
          <li>If no Hindi voices are available, your browser/OS may not have Hindi TTS installed</li>
          <li>Chrome on Windows/Mac usually has good Hindi support</li>
          <li>Android devices typically have excellent Indian language support</li>
          <li>Try installing additional language packs in your OS settings</li>
          <li>Check browser console (F12) for detailed voice logs</li>
        </ul>
      </div>
    </div>
  );
};

export default VoiceTest;
