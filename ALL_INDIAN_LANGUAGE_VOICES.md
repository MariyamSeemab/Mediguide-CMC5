# All Indian Language Voices - Complete Reference

## ✅ Confirmed Voice Names on macOS

Based on your system, here are the actual voice names:

| Language | Code | Voice Name | Status |
|----------|------|------------|--------|
| **Hindi** | hi-IN | **Lekha** | ✅ Confirmed Working |
| **Tamil** | ta-IN | **Vani** | ✅ Confirmed Working |
| **Telugu** | te-IN | **Geeta** | ✅ Confirmed Working |
| **Bangla** | bn-IN | **Piya** | ✅ Confirmed Working |
| **Marathi** | mr-IN | **Ananya** | ✅ Confirmed Working |
| **Kannada** | kn-IN | **Soumya** | ✅ Confirmed Working |
| English | en-IN | Samantha, Alex | ✅ Default |
| Gujarati | gu-IN | N/A | ❌ Not available on macOS |
| Malayalam | ml-IN | TBD | 🔍 To be confirmed |
| Punjabi | pa-IN | TBD | 🔍 To be confirmed |
| Odia | or-IN | TBD | 🔍 To be confirmed |
| Assamese | as-IN | TBD | 🔍 To be confirmed |
| Urdu | ur-IN | TBD | 🔍 To be confirmed |

## 🔧 Current Code Configuration

```typescript
const specificVoiceNames: { [key: string]: string[] } = {
  'hi': ['lekha', 'hindi'],           // ✅ Confirmed: Lekha
  'ta': ['vani', 'kyra', 'tamil'],    // ✅ Confirmed: Vani
  'te': ['geeta', 'veena', 'telugu'], // ✅ Confirmed: Geeta
  'bn': ['piya', 'bangla', 'bengali'],// ✅ Confirmed: Piya
  'mr': ['ananya', 'marathi'],        // ✅ Confirmed: Ananya
  'kn': ['soumya', 'kannada'],        // ✅ Confirmed: Soumya
  'gu': ['gujarati'],
  'ml': ['malayalam'],
  'pa': ['punjabi'],
  'or': ['odia', 'oriya'],
  'as': ['assamese'],
  'ur': ['urdu']
};
```

## 📋 How to Find Voice Names

### Method 1: Terminal Command
```bash
# List all voices
say -v ?

# Filter by language
say -v ? | grep -i hindi
say -v ? | grep -i tamil
say -v ? | grep -i telugu
say -v ? | grep -i bangla
say -v ? | grep -i marathi
# etc.
```

### Method 2: Browser Console
```javascript
// Get all voices
const voices = window.speechSynthesis.getVoices();

// Filter by language code
const hindiVoices = voices.filter(v => v.lang.includes('hi'));
const tamilVoices = voices.filter(v => v.lang.includes('ta'));
const teluguVoices = voices.filter(v => v.lang.includes('te'));

// Display
console.log('Hindi:', hindiVoices);
console.log('Tamil:', tamilVoices);
console.log('Telugu:', teluguVoices);
```

### Method 3: Test Page
Go to: http://localhost:5173/simple-voice-test
- Shows all available voices
- Lists voices by language
- Easy to identify voice names

## 🎯 Testing Each Language

### 1. Install Language Voice
```
System Settings → General → Language & Region 
→ Add language → Keep English

System Settings → Accessibility → Spoken Content 
→ Manage Voices → Check voice → OK
```

### 2. Verify in Terminal
```bash
say -v ? | grep -i [language]
```

### 3. Test Voice
```bash
say -v [VoiceName] "Test text in that language"
```

### 4. Update Code (if needed)
If the voice name is different, let me know and I'll add it!

## 📝 Test Phrases

Use these to test each language:

**Hindi:**
```bash
say -v Lekha "नमस्ते, मैं आपकी मदद कैसे कर सकता हूं"
```

**Tamil:**
```bash
say -v Vani "வணக்கம், நான் உங்களுக்கு எப்படி உதவ முடியும்"
```

**Telugu:**
```bash
say -v Geeta "నమస్కారం, నేను మీకు ఎలా సహాయం చేయగలను"
```

**Bangla:**
```bash
say -v Piya "হ্যালো, আমি আপনাকে কীভাবে সাহায্য করতে পারি"
```

**Kannada:**
```bash
say -v Soumya "ನಮಸ್ಕಾರ, ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು"
```

**Marathi:**
```bash
say -v Ananya "नमस्कार, मी तुम्हाला कशी मदत करू शकतो"
```

## 🔄 Update Process

When you find a new voice name:

1. **Tell me the voice name** (e.g., "In Bangla it's Raveena")
2. **I'll update the code** to include it
3. **Test in browser** to confirm it works
4. **Document it** in this file

## 💡 Common Voice Name Patterns

Based on what we've found:
- **Female names**: Lekha (Hindi), Vani (Tamil), Geeta (Telugu), Piya (Bangla), Ananya (Marathi)
- **Pattern**: Apple uses female Indian names for Indian language voices
- **Variations**: Older macOS versions may have different voice names
- **Naming**: Names are culturally appropriate for each language
- **All confirmed voices are female**: Consistent pattern across all Indian languages

## 🚀 Quick Reference

**Working Languages:**
- Hindi → Lekha ✅
- Tamil → Vani ✅
- Telugu → Geeta ✅
- Bangla → Piya ✅
- Marathi → Ananya ✅
- Kannada → Soumya ✅

**To Test Next:**
- Malayalam → ?
- Punjabi → ?
- Odia → ?
- Assamese → ?
- Urdu → ?

**Not Available on macOS:**
- Gujarati ❌ (No voice available)

## 📞 Need Help?

If you want to test another language:
1. Install the language voice on your Mac
2. Run: `say -v ? | grep -i [language]`
3. Tell me the voice name
4. I'll update the code immediately!

---

**Status**: 6/13 languages confirmed (46% complete!)
**Next**: Test remaining languages as needed


## ❌ Languages Not Available on macOS

### Gujarati
- **Status**: No TTS voice available on macOS
- **Checked**: System Settings → Accessibility → Spoken Content → Manage Voices
- **Terminal**: `say -v ? | grep -i gujarati` returns nothing

**What This Means:**
- Gujarati text will display correctly in the chatbot
- Voice output will use English voice (fallback)
- Users can still read Gujarati text, just can't hear it

**Alternatives:**
1. **Android**: Usually has Gujarati TTS support
2. **Google Translate**: Can speak Gujarati text
3. **Windows**: May have Gujarati voice available

### Other Potentially Unavailable Languages
Some other Indian languages may also not be available on macOS. We'll update this list as we test them.

## 🌐 Platform Comparison

| Platform | Indian Language Support |
|----------|------------------------|
| **Android** | ✅ Excellent (most languages) |
| **Windows** | ✅ Good (many languages) |
| **macOS** | ⚠️ Limited (5-8 languages) |
| **iOS** | ⚠️ Limited (same as macOS) |

**Recommendation**: For best Indian language TTS support, use Android devices or Windows.
