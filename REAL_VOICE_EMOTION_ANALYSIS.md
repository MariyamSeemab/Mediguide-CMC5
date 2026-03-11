# Real Voice Emotion Analysis - How It Actually Works

## Overview
The voice emotion detection now uses REAL audio signal processing to analyze your voice characteristics, not random detection. It collects continuous audio samples throughout your speech and analyzes multiple acoustic features.

## How It Works

### 1. Audio Collection
- Starts collecting audio samples when you click the microphone
- Captures raw audio data every 100ms
- Stores up to 100 samples (10 seconds of audio)
- Uses high-resolution FFT (8192 points) for detailed analysis
- NO audio processing filters (echo cancellation, noise suppression OFF) to get true voice characteristics

### 2. Real Audio Features Analyzed

#### Volume/Amplitude (RMS)
- Measures how loud you're speaking
- Loud voice (> 0.08) = possible distress
- Quiet voice (< 0.02) = possible weakness/fatigue

#### Zero-Crossing Rate (ZCR)
- Measures pitch/frequency changes
- High ZCR (> 0.12) = high-pitched voice (anxiety, stress)
- Normal ZCR = calm, stable voice

#### Energy
- Overall signal strength
- Combined with volume for better accuracy

#### Peak Analysis
- Analyzes the loudest 10% of your speech
- High peaks (> 0.15) = voice strain, shouting
- Detects sudden volume spikes

#### Standard Deviation (Voice Stability)
- Measures voice trembling/shaking
- High variance (> 0.08) = unstable voice (distress, anxiety)
- Low variance = stable, calm voice

#### Dynamic Range
- Difference between loud and quiet parts
- High range (> 0.3) = strained voice, emotional speech
- Low range = monotone, calm speech

#### Speech Rate
- Words per second calculation
- Fast speech (> 2.5 words/sec) = anxiety, urgency
- Normal speech = calm state

#### Spectral Flux
- Rate of frequency change
- High flux (> 0.15) = stressed, emotional voice
- Low flux = calm, steady voice

### 3. Text Analysis
Analyzes your words for medical urgency keywords in 13 languages:
- Critical: chest pain, can't breathe, heart attack, stroke
- Severe: severe, intense, unbearable, extreme
- Pain: pain, hurt, ache, burning, sharp
- Anxiety: worried, scared, anxious, panic
- Weakness: weak, tired, exhausted, dizzy

### 4. Combined Classification

The system combines audio features + text keywords to determine:

**CRITICAL (Red)**
- Keywords: chest pain, can't breathe, heart attack
- OR: Severe pain + loud/unstable voice
- Result: Emergency tone, immediate attention needed

**HIGH (Orange)**
- Severe pain keywords + voice strain
- OR: Pain + loud voice + fast speech
- OR: Loud + high pitch + fast speech
- Result: Urgent medical attention

**MEDIUM (Yellow)**
- Anxiety keywords OR fast + high-pitched speech
- OR: Weakness keywords OR very quiet voice
- OR: Pain mentioned without vocal stress
- Result: Should see doctor soon

**LOW (Green)**
- No stress indicators
- Normal voice patterns
- Calm, stable speech
- Result: Monitor symptoms

## Real Examples

### Example 1: Calm Report
**You say:** "I have a mild headache"
**Audio features:**
- Volume: 0.03 (normal)
- ZCR: 0.08 (normal pitch)
- Std Dev: 0.04 (stable)
- Speech rate: 2.0 words/sec (normal)
**Result:** Calm emotion, LOW urgency

### Example 2: Anxious Patient
**You say:** "I'm really worried about this pain" (speaking quickly)
**Audio features:**
- Volume: 0.06 (slightly elevated)
- ZCR: 0.13 (high pitch)
- Std Dev: 0.09 (unstable)
- Speech rate: 3.2 words/sec (fast)
**Result:** Anxious emotion, MEDIUM urgency

### Example 3: Severe Pain
**You say:** "I have severe chest pain" (speaking loudly)
**Audio features:**
- Volume: 0.12 (loud)
- Peak average: 0.18 (high peaks)
- Dynamic range: 0.35 (strained)
- Keywords: "severe" + "chest pain"
**Result:** Critical emotion, CRITICAL urgency

### Example 4: Weak/Tired
**You say:** "I feel very weak and dizzy" (speaking quietly)
**Audio features:**
- Volume: 0.015 (very quiet)
- Energy: 0.012 (low)
- Keywords: "weak" + "dizzy"
**Result:** Weak/Tired emotion, MEDIUM urgency

## Technical Specifications

- Sample Rate: 44100 Hz
- FFT Size: 8192 points (high resolution)
- Smoothing: 0.1 (minimal, for accuracy)
- Sample Interval: 100ms
- Max Samples: 100 (10 seconds)
- Audio Processing: RAW (no filters)

## Debugging

Open browser console (F12) to see real-time analysis:
- 🎤 REAL Audio Features: Shows all calculated values
- 📝 Keyword Analysis: Shows detected keywords
- ✅ Final Classification: Shows emotion, tone, urgency
- Indicators: Shows which stress indicators triggered

## Why This Is Real, Not Random

1. **Continuous Sampling**: Collects audio throughout your entire speech
2. **Multiple Features**: Analyzes 8 different acoustic properties
3. **Scientific Basis**: Uses established audio signal processing techniques
4. **Keyword Integration**: Combines audio + text for accuracy
5. **Consistent Results**: Same voice characteristics = same emotion detection
6. **Transparent**: Console logs show exact values used for classification

## Limitations

- Microphone quality affects accuracy
- Background noise can interfere (no noise suppression)
- Works best with clear speech
- Requires browser microphone permission
- Speech recognition must support your language

## Files Modified
- `src/pages/SymptomChecker.tsx` - Complete rewrite of emotion analysis
- `src/pages/SymptomChecker.css` - Removed audio level indicator

The system now provides genuine voice emotion analysis based on real acoustic features, not random or simulated results.
