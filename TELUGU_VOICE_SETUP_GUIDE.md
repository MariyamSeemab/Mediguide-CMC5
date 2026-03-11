# Telugu Voice Output - Complete Setup Guide

## ✅ Telugu Voice is Now Supported!

The code has been enhanced to automatically detect and use Telugu voices (like "Veena").

## 📱 Step 1: Install Telugu Voice on Mac

### For macOS Ventura/Sonoma (13.0+):

1. **Open System Settings**
   - Click Apple menu () → System Settings

2. **Add Telugu Language**
   - Click "General" in sidebar
   - Click "Language & Region"
   - Click "+" button under "Preferred languages"
   - Search for "Telugu"
   - Select "Telugu (India)" or "తెలుగు (భారతదేశం)"
   - Click "Add"
   - When asked "Use Telugu as primary?" → Click "Keep English"

3. **Enable Telugu Voice**
   - Go to "Accessibility" in sidebar
   - Click "Spoken Content"
   - Click "System voice" dropdown
   - Click "Manage Voices..." at bottom
   - Scroll to find "Geeta (Telugu)" or "Veena (Telugu)"
   - Check the box next to it
   - Click "OK"
   - Wait for download (50-100 MB)

4. **Verify Installation**
   Open Terminal and run:
   ```bash
   say -v ? | grep -i telugu
   ```
   
   Should show something like:
   ```
   Geeta               te_IN    # నమస్కారం, నేను గీత.
   ```
   (or Veena on older macOS)

5. **Test Telugu Voice**
   ```bash
   say -v Geeta "నమస్కారం, నేను మీకు ఎలా సహాయం చేయగలను"
   ```
   
   You should hear Telugu! ✅

### For macOS Monterey (12.0) or Earlier:

1. **Open System Preferences**
   - Apple menu () → System Preferences

2. **Add Telugu Language**
   - Language & Region → "+" → Telugu (India) → Add

3. **Enable Telugu Voice**
   - Accessibility → Speech
   - System Voice → Customize...
   - Check "Telugu" voices
   - OK

## 🎯 Step 2: Test in Your Project

### Test 1: Simple Voice Test Page

1. **Restart browser completely** (Cmd+Q, then reopen)
2. Go to: http://localhost:5173/simple-voice-test
3. Select "Telugu (తెలుగు)" from dropdown
4. Click "Speak" button
5. Check console (Cmd+Option+I):
   ```
   🔊 Available voices: X
   🌐 Looking for language: te-IN
   ✅ Found by specific voice name: Geeta
   ✅ Using voice: Geeta (te_IN)
   🗣️ Speaking text: నమస్కారం...
   ```
6. **You should hear Telugu!** ✅

### Test 2: Chatbot

1. Go to: http://localhost:5173/chatbot
2. Select "తెలుగు (Telugu)" from language dropdown
3. Type: "నమస్కారం"
4. Bot responds in Telugu
5. Click ▶️ play button
6. **You should hear Telugu!** ✅

## 🔍 Troubleshooting

### Issue: "Telugu voices: 0" on test page

**Solution:**
1. Make sure you added Telugu language in System Settings
2. Make sure you downloaded Telugu voice (Veena or similar)
3. Restart browser completely (Cmd+Q)
4. Clear browser cache (Cmd+Shift+Delete)

### Issue: Hears English instead of Telugu

**Solution:**
1. Check Terminal: `say -v ? | grep -i telugu`
2. If no output, Telugu voice not installed
3. Follow installation steps again
4. Make sure to restart browser after installing

### Issue: Only reads punctuation/English words

**Solution:**
- This means Telugu voice is not installed
- Browser is using English voice for Telugu text
- English voice can only pronounce English characters
- Install Telugu voice following steps above

## 📊 Voice Detection Strategy

Our code tries 5 strategies to find Telugu voice:

1. **Exact match**: `te-IN`
2. **Partial match**: Starts with `te`
3. **Contains match**: Contains `te`
4. **Specific voice name**: "Veena" (common Telugu voice on Mac)
5. **Language name**: "Telugu"

This ensures Telugu voice is found even if named differently!

## 🌐 Supported Telugu Voices

### macOS:
- **Geeta** (te_IN) - Female voice (most common on newer macOS)
- **Veena** (te_IN) - Female voice (older macOS versions)

### Android:
- Usually has Telugu voices pre-installed
- Check: Settings → Languages → Text-to-speech

### Windows:
- Download from: Settings → Time & Language → Speech → Add voices

## ✅ Verification Checklist

- [ ] Telugu language added in System Settings
- [ ] Telugu voice (Geeta or Veena) downloaded
- [ ] Terminal test works (`say -v Geeta "నమస్కారం"`)
- [ ] Browser restarted
- [ ] Test page shows "Telugu voices: 1" or more
- [ ] Test page speaks Telugu correctly
- [ ] Chatbot speaks Telugu correctly

## 🎉 Success Criteria

When working correctly:
- ✅ Test page shows Telugu voices available
- ✅ Clicking "Speak" speaks Telugu
- ✅ Console shows "Using voice: Geeta (te_IN)" or similar
- ✅ Chatbot play button speaks Telugu
- ✅ Full Telugu sentences are spoken, not just punctuation

## 📝 Example Telugu Text

Test with this:
```
నమస్కారం! నేను MediGuide AI, మీ ఆరోగ్య సహచరుడు. 
ఈరోజు నేను మీకు ఎలా సహాయం చేయగలను?
```

Should hear complete Telugu sentence! 🎉

## 🚀 All 13 Languages Supported

The same process works for all Indian languages:

| Language | Code | Voice Name (Mac) | Status |
|----------|------|------------------|--------|
| English | en-IN | Samantha, Alex | ✅ Default |
| Hindi | hi-IN | Lekha | ✅ Working |
| Tamil | ta-IN | Vani, Kyra | ✅ Working |
| Telugu | te-IN | Geeta, Veena | ✅ Ready |
| Bangla | bn-IN | (varies) | ✅ Ready |
| Marathi | mr-IN | (varies) | ✅ Ready |
| Gujarati | gu-IN | (varies) | ✅ Ready |
| Kannada | kn-IN | (varies) | ✅ Ready |
| Malayalam | ml-IN | (varies) | ✅ Ready |
| Punjabi | pa-IN | (varies) | ✅ Ready |
| Odia | or-IN | (varies) | ✅ Ready |
| Assamese | as-IN | (varies) | ✅ Ready |
| Urdu | ur-IN | (varies) | ✅ Ready |

## 💡 Pro Tips

1. **Download multiple voices**: You can install voices for all languages
2. **Test in Terminal first**: Faster than testing in browser
   ```bash
   # List all Indian language voices
   say -v ? | grep -E "(hi|ta|te|bn|mr|gu|kn|ml|pa|or|as|ur)_IN"
   ```
3. **Restart browser**: Always restart after installing new voices
4. **Check console logs**: Shows exactly which voice is being used
5. **Use test page**: Easier to debug than chatbot

## 🔧 Quick Commands

**Check if Telugu voice is installed:**
```bash
say -v ? | grep -i telugu
```

**Test Telugu voice:**
```bash
say -v Geeta "నమస్కారం, నేను మీకు ఎలా సహాయం చేయగలను"
```

**List all available voices:**
```bash
say -v ?
```

**Test in browser console:**
```javascript
// Check Telugu voices
const voices = window.speechSynthesis.getVoices();
const teluguVoices = voices.filter(v => v.lang.includes('te') || v.name.toLowerCase().includes('telugu'));
console.log('Telugu voices:', teluguVoices);

// Test speaking
if (teluguVoices.length > 0) {
  const u = new SpeechSynthesisUtterance('నమస్కారం, నేను మీకు ఎలా సహాయం చేయగలను');
  u.voice = teluguVoices[0];
  u.lang = 'te-IN';
  window.speechSynthesis.speak(u);
}
```

---

**Status**: ✅ Telugu voice fully supported
**Test URL**: http://localhost:5173/simple-voice-test
**Chatbot URL**: http://localhost:5173/chatbot

**Next**: Install Telugu voice on your Mac, restart browser, and test! 🚀
