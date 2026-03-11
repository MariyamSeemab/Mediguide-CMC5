// Simple Direct Voice Test - No dependencies
import React, { useState, useEffect } from 'react';

const SimpleVoiceTest: React.FC = () => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [status, setStatus] = useState('Loading...');
  const [testResult, setTestResult] = useState('');

  useEffect(() => {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const loadVoices = () => {
    const availableVoices = window.speechSynthesis.getVoices();
    setVoices(availableVoices);
    setStatus(`Loaded ${availableVoices.length} voices`);
    console.log('All voices:', availableVoices);
  };

  const testDirectSpeech = () => {
    setTestResult('Testing...');
    
    const text = 'नमस्ते, मैं आपकी मदद कैसे कर सकता हूं?';
    console.log('Text to speak:', text);
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'hi-IN';
    utterance.rate = 0.8;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
    
    // Try to find Hindi voice
    const hindiVoice = voices.find(v => 
      v.lang === 'hi-IN' || 
      v.lang.startsWith('hi') || 
      v.name.toLowerCase().includes('hindi')
    );
    
    if (hindiVoice) {
      utterance.voice = hindiVoice;
      console.log('Using voice:', hindiVoice.name, hindiVoice.lang);
      setTestResult(`Using: ${hindiVoice.name} (${hindiVoice.lang})`);
    } else {
      console.warn('No Hindi voice found, using default');
      setTestResult('No Hindi voice found - using default');
    }
    
    utterance.onstart = () => {
      console.log('Speech started');
      setTestResult(prev => prev + '\n✅ Speech started');
    };
    
    utterance.onend = () => {
      console.log('Speech ended');
      setTestResult(prev => prev + '\n✅ Speech completed');
    };
    
    utterance.onerror = (event) => {
      console.error('Speech error:', event);
      setTestResult(prev => prev + `\n❌ Error: ${event.error}`);
    };
    
    window.speechSynthesis.speak(utterance);
  };

  const testEnglish = () => {
    const utterance = new SpeechSynthesisUtterance('Hello, this is a test');
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeech = () => {
    window.speechSynthesis.cancel();
    setTestResult('Stopped');
  };

  const hindiVoices = voices.filter(v => 
    v.lang.includes('hi') || 
    v.lang.includes('HI') || 
    v.name.toLowerCase().includes('hindi')
  );

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🔧 Simple Voice Test</h1>
      
      <div style={{ background: '#f0f0f0', padding: '15px', marginBottom: '20px', borderRadius: '8px' }}>
        <h3>Status: {status}</h3>
        <p><strong>Total voices:</strong> {voices.length}</p>
        <p><strong>Hindi voices:</strong> {hindiVoices.length}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Quick Tests</h3>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <button 
            onClick={testDirectSpeech}
            style={{ 
              padding: '12px 24px', 
              fontSize: '16px', 
              background: '#005EB8', 
              color: 'white', 
              border: 'none', 
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            🗣️ Test Hindi Speech
          </button>
          
          <button 
            onClick={testEnglish}
            style={{ 
              padding: '12px 24px', 
              fontSize: '16px', 
              background: '#28a745', 
              color: 'white', 
              border: 'none', 
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            🗣️ Test English Speech
          </button>
          
          <button 
            onClick={stopSpeech}
            style={{ 
              padding: '12px 24px', 
              fontSize: '16px', 
              background: '#dc3545', 
              color: 'white', 
              border: 'none', 
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            ⏹️ Stop
          </button>
        </div>
        
        {testResult && (
          <div style={{ 
            background: '#e8f4f8', 
            padding: '15px', 
            borderRadius: '6px',
            whiteSpace: 'pre-wrap',
            fontFamily: 'monospace'
          }}>
            {testResult}
          </div>
        )}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Hindi Text to Test</h3>
        <div style={{ 
          background: '#fff', 
          padding: '15px', 
          border: '2px solid #005EB8',
          borderRadius: '6px',
          fontSize: '18px'
        }}>
          नमस्ते, मैं आपकी मदद कैसे कर सकता हूं?
        </div>
      </div>

      {hindiVoices.length > 0 ? (
        <div style={{ marginBottom: '20px' }}>
          <h3>✅ Available Hindi Voices ({hindiVoices.length})</h3>
          {hindiVoices.map((voice, index) => (
            <div 
              key={index}
              style={{ 
                background: '#d4edda', 
                padding: '10px', 
                marginBottom: '8px',
                borderRadius: '6px',
                border: '1px solid #28a745'
              }}
            >
              <strong>{voice.name}</strong><br />
              <small>
                Language: {voice.lang} | 
                Local: {voice.localService ? 'Yes' : 'No'} | 
                Default: {voice.default ? 'Yes' : 'No'}
              </small>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ 
          background: '#f8d7da', 
          padding: '20px', 
          borderRadius: '8px',
          border: '2px solid #dc3545',
          marginBottom: '20px'
        }}>
          <h3>❌ No Hindi Voices Found</h3>
          <p>Your system doesn't have Hindi text-to-speech voices installed.</p>
          <h4>Solutions:</h4>
          <ul>
            <li><strong>Windows:</strong> Settings → Time & Language → Speech → Add voices → Download Hindi</li>
            <li><strong>Mac:</strong> System Preferences → Accessibility → Speech → System Voice → Customize</li>
            <li><strong>Chrome:</strong> Usually uses system voices</li>
            <li><strong>Android:</strong> Settings → System → Languages → Text-to-speech</li>
          </ul>
        </div>
      )}

      <div style={{ marginTop: '30px' }}>
        <h3>All Available Voices ({voices.length})</h3>
        <div style={{ 
          maxHeight: '300px', 
          overflow: 'auto', 
          border: '1px solid #ddd',
          borderRadius: '6px'
        }}>
          {voices.map((voice, index) => (
            <div 
              key={index}
              style={{ 
                padding: '8px', 
                borderBottom: '1px solid #eee',
                background: voice.lang.includes('hi') ? '#ffffcc' : 'white'
              }}
            >
              <strong>{voice.name}</strong> - {voice.lang}
              {voice.default && <span style={{ color: '#28a745' }}> (Default)</span>}
            </div>
          ))}
        </div>
      </div>

      <div style={{ 
        marginTop: '30px', 
        background: '#fff3cd', 
        padding: '15px',
        borderRadius: '8px'
      }}>
        <h3>💡 Instructions</h3>
        <ol>
          <li>Click "Test Hindi Speech" button</li>
          <li>Check if you hear Hindi voice</li>
          <li>If not, check if Hindi voices are listed above</li>
          <li>If no Hindi voices, you need to install them in your OS</li>
          <li>Open browser console (F12) to see detailed logs</li>
        </ol>
      </div>
    </div>
  );
};

export default SimpleVoiceTest;
