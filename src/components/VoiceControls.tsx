// Voice Controls Component for Chatbot Messages
// Adds speaker icon with play/pause/replay functionality

import React, { useState, useEffect } from 'react';
import { TextToSpeech } from '../utils/voiceAssistant';
import './VoiceControls.css';

interface VoiceControlsProps {
  text: string;
  language: string;
  autoSpeak?: boolean;
  onSpeakStart?: () => void;
  onSpeakEnd?: () => void;
}

const VoiceControls: React.FC<VoiceControlsProps> = ({
  text,
  language,
  autoSpeak = false,
  onSpeakStart,
  onSpeakEnd
}) => {
  const [tts] = useState(() => new TextToSpeech({ language }));
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Update language when it changes
  useEffect(() => {
    console.log('🎤 VoiceControls: Language prop changed to:', language);
    tts.setLanguage(language);
  }, [language, tts]);

  // Auto-speak if enabled
  useEffect(() => {
    if (autoSpeak && text) {
      handlePlay();
    }
    // Cleanup: stop speaking when component unmounts
    return () => {
      tts.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoSpeak, text]);

  const handlePlay = () => {
    if (isPaused) {
      tts.resume();
      setIsPaused(false);
      setIsPlaying(true);
    } else {
      // Ensure voices are loaded before speaking
      const loadVoicesAndSpeak = () => {
        const voices = window.speechSynthesis.getVoices();
        console.log('🔊 Voices loaded:', voices.length);
        
        if (voices.length === 0) {
          console.log('⏳ Waiting for voices to load...');
          // Wait for voices to load
          window.speechSynthesis.onvoiceschanged = () => {
            console.log('✅ Voices loaded!');
            startSpeaking();
          };
          // Also try after a short delay
          setTimeout(() => {
            if (window.speechSynthesis.getVoices().length > 0) {
              startSpeaking();
            }
          }, 100);
        } else {
          startSpeaking();
        }
      };
      
      loadVoicesAndSpeak();
    }
  };

  const startSpeaking = () => {
    setIsPlaying(true);
    setIsPaused(false);
    if (onSpeakStart) onSpeakStart();
    
    tts.speak(
      text,
      () => {
        setIsPlaying(false);
        setIsPaused(false);
        if (onSpeakEnd) onSpeakEnd();
      },
      () => {
        setIsPlaying(true);
      }
    );
  };

  const handlePause = () => {
    tts.pause();
    setIsPaused(true);
    setIsPlaying(false);
  };

  const handleStop = () => {
    tts.stop();
    setIsPlaying(false);
    setIsPaused(false);
  };

  const handleReplay = () => {
    tts.stop();
    setIsPlaying(false);
    setIsPaused(false);
    setTimeout(() => handlePlay(), 100);
  };

  return (
    <div className="voice-controls">
      {!isPlaying && !isPaused && (
        <button
          className="voice-control-btn play-btn"
          onClick={handlePlay}
          title="Play"
          aria-label="Play message"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </button>
      )}

      {isPlaying && (
        <button
          className="voice-control-btn pause-btn"
          onClick={handlePause}
          title="Pause"
          aria-label="Pause message"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        </button>
      )}

      {isPaused && (
        <button
          className="voice-control-btn resume-btn"
          onClick={handlePlay}
          title="Resume"
          aria-label="Resume message"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </button>
      )}

      {(isPlaying || isPaused) && (
        <button
          className="voice-control-btn stop-btn"
          onClick={handleStop}
          title="Stop"
          aria-label="Stop message"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="6" y="6" width="12" height="12" />
          </svg>
        </button>
      )}

      <button
        className="voice-control-btn replay-btn"
        onClick={handleReplay}
        title="Replay"
        aria-label="Replay message"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="1 4 1 10 7 10" />
          <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
        </svg>
      </button>
    </div>
  );
};

export default VoiceControls;
