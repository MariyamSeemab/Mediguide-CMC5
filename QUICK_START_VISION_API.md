# 🚀 Quick Start - Vision API for Image Analysis

## ✅ What's Been Implemented

Your Symptom Checker now has **online/offline AI image analysis** - exactly like the chatbot!

## 📍 Where to Add API Key

### Option 1: Create/Edit `.env` file
```bash
# In the root folder (CMC-5-main/)
# Create or edit .env file and add:

VITE_VISION_API_KEY=your_api_key_here
```

### Option 2: Get API Key from Together AI
1. Visit: https://api.together.xyz/
2. Sign up (free tier available)
3. Go to: Settings → API Keys
4. Create new API key
5. Copy and paste into `.env` file

## 🎯 Model Details

**Model Name**: `meta-llama/llama-4-scout-17b-16e-instruct`
**Provider**: Together AI (https://api.together.xyz/)
**API Endpoint**: https://api.together.xyz/v1/chat/completions

## 🔄 How It Works

```
User uploads image
    ↓
Check internet connection
    ↓
┌─────────────────────────────────────┐
│  ONLINE? (navigator.onLine)         │
└─────────────────────────────────────┘
    ↓                    ↓
   YES                  NO
    ↓                    ↓
API Key configured?   OFFLINE MODE
    ↓                    ↓
   YES                Mock Analysis
    ↓                (Pre-programmed)
Send to LLaMA Vision
    ↓
AI analyzes image
    ↓
Returns symptoms + recommendations
    ↓
Display in user's language
    ↓
(If API fails → Automatic fallback to offline mode)
```

## 🌍 Language Support

Works in all 13 languages:
- English, Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, Punjabi, Odia, Assamese, Urdu

The AI automatically responds in the user's selected language!

## 📋 Response Format

The AI returns results in this exact format:

```
Identified Symptoms:
Swelling
Bruising
Possible injury

Recommendations:
Apply ice pack for 15-20 minutes
Elevate the affected area if possible
Consider over-the-counter pain relief
Seek medical attention if pain persists

Urgency Level: medium

Disclaimer: This analysis is for informational purposes only...
```

## 🧪 Testing

### Test 1: Online Mode
```bash
# 1. Add API key to .env
VITE_VISION_API_KEY=your_key_here

# 2. Restart server
npm run dev

# 3. Open browser console (F12)
# 4. Go to Symptom Checker
# 5. Upload an image
# 6. Look for console logs:
#    🌐 Attempting online image analysis with Vision API
#    ✅ Online image analysis received
```

### Test 2: Offline Mode
```bash
# 1. Remove API key from .env OR disconnect internet
# 2. Upload an image
# 3. Look for console logs:
#    📴 Using offline image analysis
```

## 💰 Pricing

**Together AI**:
- Free tier: Limited requests/month
- Paid: ~$0.001 per image
- Check: https://api.together.xyz/pricing

## 🔍 Console Logs to Watch

When you upload an image, check browser console (F12):

**Initialization:**
```
✅ Vision API Service initialized
📝 Using model: meta-llama/llama-4-scout-17b-16e-instruct
🔑 API Key configured: Yes/No
```

**Online Mode:**
```
🌐 Attempting online image analysis with Vision API
📸 Model: meta-llama/llama-4-scout-17b-16e-instruct
✅ Online image analysis received
```

**Offline Mode:**
```
📴 Using offline image analysis
```

**Error/Fallback:**
```
❌ Vision API error: [error message]
🔄 Falling back to offline mode
```

## ⚙️ Files Modified

1. **NEW**: `src/services/visionApiService.ts` - Vision API service (like groqApiService.ts)
2. **UPDATED**: `src/pages/SymptomChecker.tsx` - Added online/offline logic
3. **UPDATED**: `.env.example` - Added VITE_VISION_API_KEY

## 🎨 UI Changes

**NONE!** The UI remains exactly the same. Only the backend logic changed:
- Same upload button
- Same loading animation
- Same result display format
- Enhanced with real AI when online

## 🛡️ Safety Features

✅ Automatic fallback to offline mode
✅ 30-second timeout protection
✅ Error handling
✅ Works without API key (offline mode)
✅ No image storage
✅ Secure HTTPS transmission

## 📝 Important Notes

1. **Without API Key**: System works fine in offline mode with mock responses
2. **With API Key**: Gets real AI analysis when online
3. **No Internet**: Automatically uses offline mode
4. **API Fails**: Automatically falls back to offline mode
5. **UI**: No changes - same user experience

## 🚨 Urgency Detection

The AI detects urgency levels:

- **CRITICAL** 🔴: Severe bleeding, deep wounds, life-threatening
- **HIGH** 🟠: Moderate bleeding, significant injuries
- **MEDIUM** 🟡: Minor injuries, mild conditions
- **LOW** 🟢: Very minor issues

For critical cases, it provides Indian emergency numbers (112, 102).

## ✨ Example API Key Setup

```bash
# In CMC-5-main/.env file:

VITE_VISION_API_KEY=sk_together_xyz_abc123def456ghi789jkl012mno345pqr678stu901vwx234yz
```

Then restart:
```bash
npm run dev
```

## 🎉 That's It!

Your image analysis now works exactly like the chatbot:
- **Online**: Real AI analysis
- **Offline**: Mock responses
- **Automatic**: Seamless switching
- **Multilingual**: All 13 languages

No UI changes, just smarter backend! 🚀
