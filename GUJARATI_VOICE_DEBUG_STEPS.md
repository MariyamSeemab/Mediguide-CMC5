# Gujarati Voice - Complete Debug Guide

## 🎯 Quick Test Steps

### Step 1: Test ResponsiveVoice Directly

1. Open this test page: **http://localhost:5173/test-responsivevoice.html**
2. Wait 2 seconds for page to load
3. Check the status box:
   - ✅ Green = ResponsiveVoice loaded
   - ❌ Red = ResponsiveVoice NOT loaded

4. Click "Test Gujarati (Hindi Voice)" button
5. **Expected:** You should hear Hindi voice speaking Gujarati text

### Step 2: If Test Page Works

If the test page works but chatbot doesn't:

1. Open chatbot: http://localhost:5173/chatbot
2. Select Gujarati language
3. Open browser console (Cmd+Option+I)
4. Type this command:
```javascript
// Check if TTS instance exists
window.ttsDebug = true;
```

5. Send a message and click play
6. Look for these logs in console

### Step 3: Check Browser Console Logs

**Good logs (working):**
```
🔍 No native voice found for gu-IN
🔄 Attempting ResponsiveVoice fallback...
✅ ResponsiveVoice is fully available and ready
🗣️ Speaking text (ResponsiveVoice): નમસ્તે...
🎤 Using ResponsiveVoice voice: Hindi Female
▶️ ResponsiveVoice started speaking
✅ ResponsiveVoice speech completed
```

**Bad logs (not working):**
```
❌ window.responsiveVoice is undefined
```
OR
```
⏳ Waiting for ResponsiveVoice... (attempt 1/3)
⏳ Waiting for ResponsiveVoice... (attempt 2/3)
⏳ Waiting for ResponsiveVoice... (attempt 3/3)
❌ ResponsiveVoice not available after 3 attempts
```

## 🔧 Troubleshooting

### Issue 1: ResponsiveVoice Not Loading

**Symptoms:**
- Test page shows red error box
- Console shows "responsiveVoice is undefined"

**Fixes:**

1. **Check Internet Connection**
```javascript
// In browser console
fetch('https://code.responsivevoice.org/responsivevoice.js')
  .then(() => console.log('✅ Can reach ResponsiveVoice'))
  .catch(() => console.log('❌ Cannot reach ResponsiveVoice - check internet'));
```

2. **Disable Ad Blocker**
   - Ad blockers often block ResponsiveVoice
   - Disable for localhost
   - Refresh page

3. **Hard Refresh Browser**
```
Cmd+Shift+R (Mac)
Ctrl+Shift+R (Windows/Linux)
```

4. **Check Network Tab**
   - Open DevTools → Network
   - Refresh page
   - Look for: responsivevoice.js
   - Should show: Status 200 (green)
   - If 404 or red: Script blocked or not loading

### Issue 2: ResponsiveVoice Loads But No Sound

**Symptoms:**
- Test page shows green success
- Console shows "Started speaking"
- But no sound heard

**Fixes:**

1. **Check System Volume**
   - Make sure volume is not muted
   - Try playing a YouTube video to verify sound works

2. **Check Browser Permissions**
   - Safari: Preferences → Websites → Auto-Play → Allow
   - Chrome: Settings → Privacy → Site Settings → Sound → Allow

3. **Try Different Voice**
```javascript
// In browser console on test page
responsiveVoice.speak('Test', 'UK English Female');
```

### Issue 3: Works on Test Page But Not in Chatbot

**Symptoms:**
- Test page works perfectly
- Chatbot doesn't speak Gujarati

**Fixes:**

1. **Clear Browser Cache**
   - Cmd+Shift+Delete (Mac)
   - Clear cached files
   - Restart browser

2. **Check Chatbot Console**
   - Open chatbot page
   - Open console
   - Look for error messages
   - Share error messages with me

3. **Verify Language Selection**
   - Make sure Gujarati is actually selected
   - Check language dropdown shows "ગુજરાતી"

## 🧪 Manual Testing Commands

### Test 1: Check if ResponsiveVoice Exists
```javascript
// In browser console
console.log('ResponsiveVoice loaded:', typeof responsiveVoice !== 'undefined');
```

### Test 2: List Available Voices
```javascript
// In browser console
if (typeof responsiveVoice !== 'undefined') {
  console.log('Available voices:', responsiveVoice.getVoices().map(v => v.name));
}
```

### Test 3: Test Hindi Voice
```javascript
// In browser console
if (typeof responsiveVoice !== 'undefined') {
  responsiveVoice.speak('नमस्ते', 'Hindi Female', {
    onstart: () => console.log('Started'),
    onend: () => console.log('Ended'),
    onerror: (e) => console.error('Error:', e)
  });
}
```

### Test 4: Test Gujarati Text with Hindi Voice
```javascript
// In browser console
if (typeof responsiveVoice !== 'undefined') {
  responsiveVoice.speak('નમસ્તે', 'Hindi Female', {
    onstart: () => console.log('Started'),
    onend: () => console.log('Ended'),
    onerror: (e) => console.error('Error:', e)
  });
}
```

## 📊 Expected Results

### Test Page Results

**When Working:**
- Status box is green
- Shows "✅ ResponsiveVoice loaded successfully!"
- Debug info shows 50+ available voices
- Clicking buttons plays audio
- Console shows "Started speaking" and "Finished speaking"

**When Not Working:**
- Status box is red
- Shows "❌ ResponsiveVoice NOT loaded"
- Debug info shows error message
- Clicking buttons shows alert
- Console shows errors

### Chatbot Results

**When Working:**
1. Select Gujarati language
2. Type: નમસ્તે
3. Click play button (▶️)
4. Hear Hindi-accented voice speaking
5. Console shows ResponsiveVoice logs

**When Not Working:**
1. Click play button
2. Nothing happens OR
3. Hear wrong language OR
4. Console shows errors

## 🎯 What to Report

If still not working, please share:

1. **Test page result:**
   - Green or red status box?
   - What does debug info show?

2. **Browser console logs:**
   - Copy all logs when clicking play
   - Include any error messages (red text)

3. **Network tab:**
   - Is responsivevoice.js loaded? (200 status?)
   - Any failed requests? (red)

4. **What you hear:**
   - Nothing?
   - Wrong language?
   - Correct language but bad quality?

## 💡 Common Solutions

### Solution 1: Wait Longer
ResponsiveVoice needs time to load:
1. Open chatbot
2. Wait 5 seconds
3. Then try playing voice

### Solution 2: Use Different Browser
Try in order:
1. Chrome (best support)
2. Safari (good support)
3. Edge (good support)
4. Firefox (limited support)

### Solution 3: Check API Key
Verify in `index.html`:
```html
<script src="https://code.responsivevoice.org/responsivevoice.js?key=leFxmVN8"></script>
```

Key should be: `leFxmVN8`

## 🚀 Next Steps

1. **First:** Test the test page (http://localhost:5173/test-responsivevoice.html)
2. **If test page works:** Debug chatbot specifically
3. **If test page fails:** Fix ResponsiveVoice loading first
4. **Share results:** Tell me what you see and hear

---

**Most likely issue:** Ad blocker or internet connection blocking ResponsiveVoice script.

**Quick fix:** Disable ad blocker, hard refresh (Cmd+Shift+R), wait 5 seconds, try again!
