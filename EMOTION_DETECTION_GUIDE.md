# Voice Emotion Detection - User Guide

## ❓ Why Don't I See Colors When I Say "I Have a Fever"?

The emotion detection analyzes **YOUR VOICE**, not the symptom you're describing.

### What the Colors Mean:

🟢 **GREEN (Low Urgency)** = You're speaking CALMLY
- Normal volume
- Stable voice
- Normal pitch
- Relaxed tone

🟡 **YELLOW (Medium Urgency)** = You sound WORRIED or TIRED
- Anxious tone
- Fast speech
- High pitch
- OR very quiet/weak voice

🟠 **ORANGE (High Urgency)** = You sound DISTRESSED or IN PAIN
- Loud voice
- Strained tone
- Very high pitch
- Unstable voice

🔴 **RED (Critical Urgency)** = EMERGENCY
- Very loud, shouting
- Extreme distress
- OR keywords: "chest pain", "can't breathe"

## 🎯 Example Scenarios:

### Scenario 1: Calm Voice
**You say:** "I have a fever" (speaking normally)
**Voice Analysis:** Calm, stable, normal volume
**Result:** 🟢 GREEN - Low urgency
**Why:** Your VOICE sounds calm, even though fever is a symptom

### Scenario 2: Worried Voice
**You say:** "I have a fever" (speaking quickly, high-pitched, worried tone)
**Voice Analysis:** Anxious, fast speech, high pitch
**Result:** 🟡 YELLOW - Medium urgency
**Why:** Your VOICE sounds anxious

### Scenario 3: Distressed Voice
**You say:** "I have a severe fever" (speaking loudly, strained)
**Voice Analysis:** Loud, strained, unstable
**Result:** 🟠 ORANGE - High urgency
**Why:** Your VOICE sounds distressed

### Scenario 4: Critical Keywords
**You say:** "I have chest pain" (any tone)
**Voice Analysis:** Any + critical keywords
**Result:** 🔴 RED - Critical urgency
**Why:** Critical medical keywords override voice analysis

## 🧪 How to Test Each Color:

### Test GREEN (Calm):
1. Click microphone
2. Say calmly: "I have a mild headache"
3. Speak at normal volume, normal pace
4. **Expected:** Green card, "Calm" emotion

### Test YELLOW (Anxious):
1. Click microphone
2. Say quickly in high pitch: "I'm really worried about this pain"
3. Speak FAST and HIGH-PITCHED
4. **Expected:** Yellow card, "Anxious" emotion

### Test YELLOW (Weak):
1. Click microphone
2. Say very quietly: "I feel very weak and tired"
3. Speak VERY SOFTLY with low energy
4. **Expected:** Yellow card, "Weak/Tired" emotion

### Test ORANGE (Distressed):
1. Click microphone
2. Say loudly: "I have severe pain"
3. Speak LOUDLY with strain in your voice
4. **Expected:** Orange card, "Distressed" or "In Pain" emotion

### Test RED (Critical):
1. Click microphone
2. Say: "I have chest pain" OR "I can't breathe"
3. Any tone works (keywords trigger critical)
4. **Expected:** Red card, "Critical" emotion

## 🔍 Debugging - Check Console (F12):

Open browser console to see:

```
🎯 YOUR VOICE FEATURES:
   RMS (volume): 0.0234 (quiet)      ← Your volume level
   ZCR (pitch): 0.0892 (normal)      ← Your pitch
   Stability: 0.0156 (stable)        ← Voice stability
   Centroid: 2234 Hz (normal)        ← Voice brightness
   ...

🎯 ML PREDICTIONS:
   Calm         82.3% ████████████████  ← Highest = Winner
   Anxious      10.1% ██
   Distressed   3.2%  
   In Pain      2.4%  
   Weak/Tired   1.5%  
   Critical     0.5%  

✅ FINAL: Calm (82.3% confidence)
```

## ❗ Common Issues:

### "I always get GREEN even when I change my voice"

**Solution:**
1. Visit: `http://localhost:5173/clear-model.html`
2. Click "Clear Old Model & Retrain"
3. Reload the app
4. Wait for training to complete (~20 seconds)
5. Try again with EXAGGERATED voice changes

### "The card doesn't show at all"

**Check:**
1. Did you click the microphone icon (not text input)?
2. Did you allow microphone permission?
3. Did speech recognition capture your words?
4. Check console for errors

### "I want medical urgency, not voice urgency"

The system is designed to detect **voice emotion** to assess patient distress level. This helps doctors understand:
- How much pain/distress the patient is in
- Whether it's an emergency based on voice tone
- Patient's emotional state

If you want symptom-based urgency only, use the text input instead of voice.

## 💡 Tips for Better Detection:

1. **Exaggerate your voice changes** - The model needs clear differences
2. **Speak for 2-3 seconds** - More audio data = better analysis
3. **Use different volumes** - Quiet vs loud makes a big difference
4. **Change your pitch** - High pitch = anxiety/distress
5. **Vary your pace** - Fast speech = anxiety
6. **Check console** - See exactly what the model detects

## 🎓 Understanding the ML Model:

The model was trained on 600 voice samples with these patterns:

- **Calm:** Quiet (0.02-0.05 RMS), stable, normal pitch
- **Anxious:** Medium volume, HIGH pitch (0.11-0.16 ZCR), unstable
- **Distressed:** LOUD (0.09-0.16 RMS), very high pitch, very unstable
- **In Pain:** Medium-high, STRAINED (high rolloff 7800-9600 Hz)
- **Weak/Tired:** VERY quiet (0.01-0.025 RMS), low energy
- **Critical:** EXTREME loud (0.11-0.20 RMS), extreme pitch

Your voice needs to match these patterns for accurate detection.

## 🎯 Summary:

✅ **The system IS working** - it detects YOUR VOICE emotion
✅ **Colors show voice urgency** - not symptom severity
✅ **To see different colors** - change HOW you speak, not WHAT you say
✅ **Check console** - see exact voice features detected
✅ **Exaggerate** - make your voice changes obvious

The emotion detection is analyzing your voice characteristics in real-time using a trained neural network!
