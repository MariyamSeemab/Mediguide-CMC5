# 🚀 Quick Test - Gujarati Voice

## Step 1: Test ResponsiveVoice (2 minutes)

Open: **http://localhost:5173/test-responsivevoice.html**

**Expected:**
- ✅ Green box: "ResponsiveVoice loaded successfully!"
- Click "Test Gujarati" button → Hear Hindi voice

**If Red Box:**
- Disable ad blocker
- Hard refresh: Cmd+Shift+R
- Check internet connection

## Step 2: Test in Chatbot (1 minute)

1. Open: **http://localhost:5173/chatbot**
2. Select: **ગુજરાતી** (Gujarati)
3. Type: **નમસ્તે**
4. Click: **▶️ Play button**

**Expected:**
- Hear Hindi voice speaking Gujarati text

## Step 3: Check Console (if issues)

Press: **Cmd+Option+I** (Mac) or **F12** (Windows)

**Good logs:**
```
✅ ResponsiveVoice is fully available and ready
🗣️ Speaking text (ResponsiveVoice): નમસ્તે...
▶️ ResponsiveVoice started speaking
```

**Bad logs:**
```
❌ ResponsiveVoice not available
```

## Quick Debug Command

Paste in console:
```javascript
window.debugTTS.debugResponsiveVoice();
```

## Common Fixes

1. **Ad blocker** → Disable for localhost
2. **No internet** → Check connection
3. **Cache** → Hard refresh (Cmd+Shift+R)
4. **Wait** → Wait 5 seconds after page loads
5. **Browser** → Use Chrome or Safari

## What You Should Hear

- Hindi-accented voice reading Gujarati text
- Not perfect pronunciation but understandable
- Quality: ⭐⭐⭐ Good enough!

---

**Start here:** http://localhost:5173/test-responsivevoice.html

If test page works → Chatbot will work too!
