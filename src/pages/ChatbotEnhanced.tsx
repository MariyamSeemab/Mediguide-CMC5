// Enhanced Chatbot with Voice Features for Rural Users
// This wraps the existing Chatbot component and adds voice capabilities

import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import VoiceControls from '../components/VoiceControls';
import { SpeechRecognition as VoiceSpeechRecognition, SoundNotification, languageCodeMap } from '../utils/voiceAssistant';
import './Chatbot.css';
import './ChatbotEnhanced.css';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  time: string;
  isTyping?: boolean;
}

// Import the medical response function from original Chatbot
// For now, we'll use a simplified version
const getMedicalResponse = (userMessage: string, language: string): string => {
  // This would import from the original Chatbot.tsx
  // For demonstration, returning a simple response
  return `I understand you said: "${userMessage}". This is a demo response in ${language} language. The full medical AI responses will be integrated from the existing Chatbot.tsx file.`;
};

const ChatbotEnhanced: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const { currentLanguage, availableLanguages, changeLanguage, t } = useLanguage();

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: t('chatbot.welcome') || 'Hello! I\'m MediGuide AI, your healthcare assistant. How can I help you today?',
      sender: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [autoSpeak, setAutoSpeak] = useState(false);
  
  const speechRecognitionRef = useRef<VoiceSpeechRecognition | null>(null);
  const soundNotificationRef = useRef<SoundNotification>(new SoundNotification());
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Play opening sound when component mounts
  useEffect(() => {
    soundNotificationRef.current.playNotification('open');
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Initialize speech recognition with current language
  useEffect(() => {
    const langCode = languageCodeMap[currentLanguage] || 'en-IN';
    speechRecognitionRef.current = new VoiceSpeechRecognition(langCode);
  }, [currentLanguage]);

  // Update speech recognition language when language changes
  useEffect(() => {
    if (speechRecognitionRef.current) {
      speechRecognitionRef.current.setLanguage(currentLanguage);
    }
  }, [currentLanguage]);

  const handleVoiceInput = () => {
    if (!speechRecognitionRef.current) {
      alert(t('chatbot.voiceNotSupported') || 'Voice input is not supported in your browser. Please use Chrome or Edge.');
      return;
    }

    if (isListening) {
      speechRecognitionRef.current.stop();
      setIsListening(false);
    } else {
      speechRecognitionRef.current.start(
        (transcript) => {
          setInputText(transcript);
          setIsListening(false);
          soundNotificationRef.current.playSuccess();
        },
        (error) => {
          console.error('Speech recognition error:', error);
          setIsListening(false);
        },
        () => {
          setIsListening(false);
        }
      );
      setIsListening(true);
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim() || isTyping) return;

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      time: currentTime,
    };

    // Add user message and clear input
    setMessages(prev => [...prev, userMessage]);
    const messageText = inputText;
    setInputText('');
    setIsTyping(true);

    // Add typing indicator
    const typingMessage: Message = {
      id: 'typing',
      text: t('chatbot.typing') || 'MediGuide AI is typing...',
      sender: 'bot',
      time: currentTime,
      isTyping: true,
    };

    setMessages(prev => [...prev, typingMessage]);

    // Simulate AI processing time
    setTimeout(() => {
      const aiResponse = getMedicalResponse(messageText, currentLanguage);
      
      setMessages(prev => {
        const withoutTyping = prev.filter(msg => msg.id !== 'typing');
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: aiResponse,
          sender: 'bot',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        return [...withoutTyping, botMessage];
      });
      setIsTyping(false);
      
      // Play response notification sound
      soundNotificationRef.current.playNotification('response');
    }, 1500);
  };

  return (
    <div className="chatbot-page">
      {/* Header */}
      <header className="chatbot-header">
        <div className="header-content">
          <div className="header-left">
            <a href="/" className="back-button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </a>
            <div className="bot-info">
              <div className="bot-avatar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <div className="bot-details">
                <h1>{t('chatbot.title')}</h1>
                <span className="bot-status">
                  <span className="status-dot"></span>
                  {t('chatbot.status')}
                </span>
              </div>
            </div>
          </div>
          <div className="header-right">
            {/* Auto-speak toggle */}
            <label className="auto-speak-toggle" title={t('chatbot.autoSpeak') || 'Auto speak responses'}>
              <input
                type="checkbox"
                checked={autoSpeak}
                onChange={(e) => setAutoSpeak(e.target.checked)}
              />
              <span className="toggle-slider"></span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            </label>
            
            <select
              value={currentLanguage}
              onChange={(e) => changeLanguage(e.target.value)}
              className="language-selector"
            >
              {availableLanguages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.nativeName}
                </option>
              ))}
            </select>
            {isAuthenticated && (
              <div className="user-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>{user?.name}</span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Chat Area */}
      <main className="chat-container">
        <div className="chat-main">
          <div className="messages-container">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender} ${message.isTyping ? 'typing' : ''}`}>
                {message.sender === 'bot' && (
                  <div className="message-avatar">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                )}
                <div className="message-content">
                  <div className="message-bubble">
                    {message.isTyping ? (
                      <div className="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    ) : (
                      <>
                        <p style={{ whiteSpace: 'pre-line' }}>{message.text}</p>
                        {/* Add voice controls for bot messages */}
                        {message.sender === 'bot' && (
                          <VoiceControls
                            text={message.text}
                            language={languageCodeMap[currentLanguage] || 'en-IN'}
                            autoSpeak={autoSpeak}
                          />
                        )}
                      </>
                    )}
                  </div>
                  {!message.isTyping && <span className="message-time">{message.time}</span>}
                </div>
                {message.sender === 'user' && (
                  <div className="message-avatar user-avatar">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-container">
            <div className="input-wrapper">
              <button 
                type="button" 
                className={`voice-button ${isListening ? 'listening' : ''}`}
                onClick={handleVoiceInput}
                title={t('chatbot.voiceInput') || 'Voice input'}
                disabled={isTyping}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="23"></line>
                  <line x1="8" y1="23" x2="16" y2="23"></line>
                </svg>
                {isListening && <span className="listening-pulse"></span>}
              </button>
              <input
                type="text"
                placeholder={isListening ? (t('chatbot.listening') || 'Listening...') : isTyping ? (t('chatbot.processing') || 'Processing...') : (t('chatbot.placeholder') || 'Type your message...')}
                className="chat-input"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                disabled={isTyping}
              />
              <button 
                type="button" 
                className="send-button" 
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
            <p className="input-hint">
              {t('chatbot.hint') || 'Press Enter to send or click the mic to speak'}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatbotEnhanced;
