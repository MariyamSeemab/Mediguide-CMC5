# Gujarati Voice Troubleshooting Guide

## 🔍 Issue: Gujarati Voice Not Working

If Gujarati voice is not working, follow these steps to diagnose and fix:

### Step 1: Check Browser Console

1. Open chatbot: http://localhost:5173/chatbot
2. Select Gujarati language
3. Open browser console (Cmd+Option+I or F12)
4. Type a message and click play button
5. **Look for these logs:**

**Expected logs (working):**
```
🔍 No native voice found for gu-IN
✅ ResponsiveVoice is available and ready
🔄 Using ResponsiveVoice fallback
🗣️ Speaking text (ResponsiveVoice): નમસ્તે...
🎤 Using ResponsiveVoice voice: Hindi Female
▶️ ResponsiveVoice started speaking
✅ ResponsiveVoice speech completed
```

**Problem logs (not working):**
```
❌ ResponsiveVoice not loaded
```
OR
```
⏳ ResponsiveVoice not loaded yet
⏳ Waiting for ResponsiveVoice to load...
❌ ResponsiveVoice not available
```

### Step 2: Verify ResponsiveVoice is Loaded

In browser console, type:
```javascript
window.responsiveVoice
```

**If working:** Should show an object with methods
**If not working:** Shows `undefined`

### Step 3: Check Network Tab

1. Open DevTools → Network tab
2. Refresh page
3. Look for: `responsivevoice.js`
4. **Should show:** Status 200 (loaded successfully)
5. **If 404 or error:** Script not loading

### Step 4: Test ResponsiveVoice Directly

In browser console, paste:
```javascript
// Test if ResponsiveVoice works
if (window.responsiveVoice) {
  console.log('✅ ResponsiveVoice loaded');
  console.log('Available voices:', responsiveVoice.getVoices().length);
  
  // Test speaking
  responsiveVoice.speak('નમસ્તે', 'Hindi Female', {
    onstart: () => console.log('Started'),
    onend: () => console.log('Ended')
  });
} else {
  console.log('❌ ResponsiveVoice NOT loaded');
}
```

**Expected:** Should hear Hindi voice speaking
**If not:** ResponsiveVoice has an issue

### Step 5: Check Internet Connection

ResponsiveVoice requires internet. Test:
```javascript
fetch('https://code.responsivevoice.org/responsivevoice.js')
  .then(() => console.log('✅ Can reach ResponsiveVoice'))
  .catch(() => console.log('❌ Cannot reach ResponsiveVoice'));
```

## 🔧 Common Fixes

### Fix 1: Hard Refresh Browser

```bash
# Clear cache and reload
Cmd+Shift+R (Mac)
Ctrl+Shift+R (Windows/Linux)
```

### Fix 2: Check index.html

Verify this line exists in `index.html`:
```html
<script src="https://code.responsivevoice.org/responsivevoice.js?key=leFxmVN8"></script>
```

### Fix 3: Wait for Page Load

ResponsiveVoice needs time to load. Try:
1. Wait 2-3 seconds after page loads
2. Then click play button

### Fix 4: Check Browser Compatibility

ResponsiveVoice works best on:
- ✅ Chrome/Edge (best)
- ✅ Safari
- ⚠️ Firefox (limited)

### Fix 5: Disable Ad Blockers

Some ad blockers block ResponsiveVoice:
1. Disable ad blocker for localhost
2. Refresh page
3. Try again

## 🎯 Manual Test

If automatic fallback doesn't work, test manually:

```javascript
// In browser console
const text = 'નમસ્તે, હું તમને કેવી રીતે મદદ કરી શકું';

// Method 1: Try Hindi Female voice
responsiveVoice.speak(text, 'Hindi Female');

// Method 2: Try UK English Female
responsiveVoice.speak(text, 'UK English Female');

// Method 3: List all voices
console.log(responsiveVoice.getVoices());
```

## 📋 Diagnostic Checklist

- [ ] Browser console shows ResponsiveVoice logs
- [ ] `window.responsiveVoice` is defined
- [ ] Network tab shows responsivevoice.js loaded (200)
- [ ] Internet connection working
- [ ] No ad blocker blocking script
- [ ] Waited 2-3 seconds after page load
- [ ] Using Chrome or Safari browser
- [ ] Hard refreshed browser (Cmd+Shift+R)

## 🚨 If Still Not Working

### Option A: Use Native Voices Only

If ResponsiveVoice doesn't work, we can:
1. Hide play button for Gujarati
2. Show message: "Voice not available"
3. User can still read Gujarati text

### Option B: Try Alternative Service

We can try:
1. Google Cloud TTS (requires API key, costs money)
2. Amazon Polly (requires AWS account)
3. Microsoft Azure TTS (requires Azure account)

### Option C: Skip Gujarati Voice

- Keep Gujarati text working
- Just no voice output
- Focus on languages with native voices

## 💡 Expected Behavior

**When Working:**
1. User selects Gujarati
2. Types message
3. Clicks play button
4. Hears Hindi-accented voice speaking Gujarati text
5. Not perfect pronunciation but understandable

**Quality:**
- ⭐⭐⭐ Good (not perfect)
- Hindi voice reading Gujarati text
- Some pronunciation issues expected
- Better than nothing!

## 📞 Next Steps

1. **Try the diagnostic steps above**
2. **Check browser console** for error messages
3. **Test ResponsiveVoice directly** in console
4. **Report what you see** - I can help debug further

---

**Most Common Issue:** ResponsiveVoice script not loading due to:
- Ad blocker
- Internet connection
- Browser compatibility
- Need to wait for script to load

**Quick Fix:** Hard refresh (Cmd+Shift+R) and wait 3 seconds before testing!
