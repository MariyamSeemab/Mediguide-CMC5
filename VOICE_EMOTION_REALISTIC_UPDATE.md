# Voice Emotion Detection - Realistic Audio Processing Update

## Changes Made

### 1. Realistic Audio Thresholds
Updated all volume thresholds to work with actual microphone input levels:

**Previous (Too High):**
- Critical: volume > 0.3
- High: volume > 0.35
- Medium: volume > 0.25

**New (Realistic):**
- Critical: volume > 0.08 (with severe pain keywords)
- High: volume > 0.1 (with pain keywords)
- Medium: volume > 0.05 (with anxiety indicators)
- Normal speaking: 0.01-0.05
- Loud speaking: 0.05-0.15
- Very loud/shouting: 0.15+

### 2. Enhanced Audio Analysis
Added new audio features for better emotion detection:
- **Variance calculation**: Detects voice instability/trembling
- **Improved peak detection**: Lowered threshold from 0.3 to 0.1 for realistic audio
- **Better speech rate analysis**: More accurate word-per-second calculation
- **Enhanced keyword detection**: Added more variations (breathing, very, fear, drowsy, etc.)

### 3. Real-Time Audio Level Indicator
Added visual feedback showing detected audio levels:
- **Color-coded bar**: 
  - Red (< 0.02): Too quiet
  - Orange (0.02-0.05): Good level
  - Green (> 0.05): Strong signal
- **Percentage display**: Shows exact audio level
- **Live updates**: Updates in real-time while recording

### 4. Improved Console Logging
Enhanced debugging output with emojis for easy identification:
- 🎤 Audio Analysis: Shows volume, zcr, energy, peakRatio, variance, speechRate
- 📝 Keyword Detection: Shows which keyword categories were detected
- ✅ Emotion Analysis Result: Shows final emotion, tone, urgency, and voice quality

### 5. Better Emotion Detection Logic
Prioritizes keyword detection over audio levels:
- Critical symptoms (chest pain, can't breathe) trigger CRITICAL urgency regardless of volume
- Severe + pain keywords trigger HIGH urgency even with moderate voice
- Audio features (volume, variance, speech rate) provide supporting evidence
- More forgiving thresholds for detecting normal conversation

## Testing Instructions

### Test 1: Normal Calm Voice
**Say:** "I have a mild headache"
**Expected:** 
- Audio level: 2-5%
- Emotion: Calm or In Pain
- Urgency: LOW or MEDIUM
- Tone: Normal or Strained

### Test 2: Anxious/Worried Voice
**Say:** "I'm really worried about this pain"
**Expected:**
- Audio level: 3-7%
- Emotion: Anxious
- Urgency: MEDIUM
- Tone: Worried

### Test 3: Severe Pain (Loud Voice)
**Say:** "I have severe chest pain" (speak louder)
**Expected:**
- Audio level: 8-15%
- Emotion: In Pain or Distressed
- Urgency: HIGH or CRITICAL
- Tone: Strained or Emergency

### Test 4: Critical Emergency
**Say:** "I can't breathe, chest pain" (any volume)
**Expected:**
- Emotion: Critical
- Urgency: CRITICAL
- Tone: Emergency
- Voice Quality: "Requires immediate attention"

### Test 5: Weak/Tired Voice
**Say:** "I feel very weak and tired" (speak quietly)
**Expected:**
- Audio level: 1-3%
- Emotion: Weak/Tired
- Urgency: MEDIUM
- Tone: Low energy

## Technical Details

### Audio Processing
- Sample rate: 44100 Hz
- FFT size: 4096 (high resolution)
- Smoothing: 0.3 (responsive)
- Auto-gain control: Disabled (for true volume levels)
- Echo cancellation: Enabled
- Noise suppression: Enabled

### Emotion Detection Algorithm
1. Capture audio samples (10 samples over 500ms)
2. Calculate audio features (RMS, ZCR, energy, peaks, variance)
3. Analyze transcript for medical keywords in 13 languages
4. Combine audio + text analysis with weighted scoring
5. Determine emotion, tone, urgency, and voice quality
6. Display results with color-coded urgency levels

## Multilingual Support
Keywords detected in all 13 languages:
- English, Hindi, Tamil, Telugu, Bengali, Marathi
- Gujarati, Kannada, Malayalam, Punjabi, Odia, Assamese, Urdu

## Files Modified
- `src/pages/SymptomChecker.tsx` - Updated emotion detection logic and added audio level indicator
- `src/pages/SymptomChecker.css` - Added styling for audio level indicator

## Next Steps (Optional Enhancements)
1. Add microphone calibration feature
2. Save audio level history for better analysis
3. Add visual waveform display
4. Implement machine learning model for better emotion detection
5. Add background noise detection and filtering
