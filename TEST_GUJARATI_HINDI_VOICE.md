# 🚀 Quick Test - Gujarati with Hindi Voice

## Test Steps (2 minutes)

### 1. Open Chatbot
```
http://localhost:5173/chatbot
```

### 2. Select Gujarati
- Click language dropdown
- Select: **ગુજરાતી (Gujarati)**

### 3. Send Message
Type this Gujarati text:
```
નમસ્તે, હું તમને કેવી રીતે મદદ કરી શકું?
```

### 4. Play Voice
- Click **▶️ Play button** on bot message
- Should hear **Lekha (Hindi voice)** speaking Gujarati

### 5. Check Console (Optional)
Press **Cmd+Option+I** to open console

**Expected logs:**
```
🔍 No native voice found for gu-IN
🔄 Using Hindi voice (Lekha) as fallback for gu
✅ Found Hindi voice: Lekha
🗣️ Speaking text (native): નમસ્તે...
```

## ✅ Success Checklist

- [ ] Gujarati language selected
- [ ] Typed Gujarati text
- [ ] Clicked play button
- [ ] Heard Lekha voice speaking
- [ ] Voice controls work (pause/stop/replay)
- [ ] No errors in console

## 🎤 What You Should Hear

- **Voice:** Lekha (Hindi female voice)
- **Language:** Gujarati text
- **Quality:** Clear and understandable
- **Speed:** Comfortable pace (0.8x)

## 💡 Why This Works

- Hindi and Gujarati are linguistically similar
- Both use similar phonetics
- Most Gujarati speakers understand Hindi
- Lekha voice quality is excellent
- No internet required!

## 🔧 If Issues

### No Sound?
1. Check system volume
2. Make sure Lekha is installed (System Preferences → Accessibility → Speech)
3. Try Hindi language first to verify Lekha works

### Wrong Voice?
1. Check console logs
2. Should say "Using Hindi voice (Lekha)"
3. If not, Lekha may not be installed

### Console Errors?
1. Hard refresh: Cmd+Shift+R
2. Clear cache
3. Restart browser

---

**Expected Result:** Gujarati text spoken by Hindi voice (Lekha) - clear and understandable! 🎉
