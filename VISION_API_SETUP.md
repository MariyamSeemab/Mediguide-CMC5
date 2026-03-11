# 🖼️ Vision API Setup Guide

## Overview
The Symptom Checker now supports **online AI-powered image analysis** using the LLaMA Vision model, with automatic fallback to offline mode.

## Model Information
- **Model**: `meta-llama/llama-4-scout-17b-16e-instruct`
- **Provider**: Together AI
- **Capabilities**: Medical image analysis, symptom detection, urgency assessment
- **Languages**: All 13 supported languages (English, Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, Punjabi, Odia, Assamese, Urdu)

## How It Works

### 🌐 Online Mode (Primary)
When internet is available and API key is configured:
- Sends image to LLaMA Vision API
- AI analyzes the image for medical symptoms
- Detects conditions: wounds, bleeding, rashes, swelling, bruising, burns, infections
- Provides urgency level: critical, high, medium, low
- Returns recommendations in user's selected language

### 📴 Offline Mode (Fallback)
When internet is NOT available OR API fails:
- Uses local mock analysis
- Returns pre-programmed responses
- Works completely offline
- Supports all 13 languages

## Setup Instructions

### Step 1: Get API Key
1. Go to [Together AI](https://api.together.xyz/)
2. Sign up or log in
3. Navigate to Settings → API Keys
4. Create a new API key
5. Copy the API key

### Step 2: Configure Environment Variable
1. Open your `.env` file (or create one from `.env.example`)
2. Add your API key:
```env
VITE_VISION_API_KEY=your_actual_api_key_here
```

### Step 3: Restart Development Server
```bash
npm run dev
```

## Testing

### Test Online Mode
1. Make sure you have internet connection
2. Add API key to `.env` file
3. Go to Symptom Checker page
4. Upload an image
5. Check browser console for logs:
   - `🌐 Attempting online image analysis with Vision API`
   - `✅ Online image analysis received`

### Test Offline Mode
1. Remove API key from `.env` OR disconnect internet
2. Upload an image
3. Check browser console for logs:
   - `📴 Using offline image analysis`

## Response Format

The AI returns results in this format:

```
Identified Symptoms:
- Symptom 1
- Symptom 2
- Symptom 3

Recommendations:
- Recommendation 1
- Recommendation 2
- Recommendation 3
- Recommendation 4

Urgency Level: [critical/high/medium/low]

Disclaimer: This analysis is for informational purposes only...
```

## Urgency Levels

- **CRITICAL**: Severe bleeding, deep wounds, severe burns, life-threatening
- **HIGH**: Moderate bleeding, significant swelling, painful injuries
- **MEDIUM**: Minor injuries, mild rashes, bruising
- **LOW**: Very minor issues, cosmetic concerns

## Features

✅ **Automatic Language Detection**: Responds in user's selected language
✅ **Smart Fallback**: Automatically switches to offline mode if API fails
✅ **Timeout Protection**: 30-second timeout for API calls
✅ **Error Handling**: Graceful error handling with fallback
✅ **No UI Changes**: Same user interface, enhanced backend
✅ **India-Specific**: Provides Indian emergency numbers for critical cases
✅ **Privacy**: Images are sent securely and not stored by the API

## API Costs

Together AI pricing (as of 2024):
- **Free Tier**: Limited requests per month
- **Pay-as-you-go**: ~$0.001 per image analysis
- Check [Together AI Pricing](https://api.together.xyz/pricing) for latest rates

## Troubleshooting

### Issue: "Vision API key not configured"
**Solution**: Add `VITE_VISION_API_KEY` to your `.env` file

### Issue: "Request timeout"
**Solution**: Check your internet connection. System will automatically fallback to offline mode.

### Issue: API returns error
**Solution**: 
1. Verify API key is correct
2. Check API quota/limits
3. System will automatically use offline mode

### Issue: Not getting AI responses
**Solution**:
1. Open browser console (F12)
2. Look for logs starting with 🌐 or 📴
3. Check if API key is configured: Look for "🔑 API Key configured: Yes"

## Console Logs

The system provides detailed console logs:

```
✅ Vision API Service initialized
📝 Using model: meta-llama/llama-4-scout-17b-16e-instruct
🌐 API Endpoint: https://api.together.xyz/v1/chat/completions
⏱️ Timeout: 30 seconds
🔑 API Key configured: Yes

🌐 Attempting online image analysis with Vision API
📸 Model: meta-llama/llama-4-scout-17b-16e-instruct
✅ Vision API response received
📝 Raw response: Identified Symptoms:...
```

## Security Notes

- API key is stored in `.env` file (not committed to git)
- Images are sent over HTTPS
- No images are stored on servers
- All processing is done in real-time
- Automatic timeout prevents hanging requests

## Support

For issues or questions:
1. Check browser console for error messages
2. Verify API key configuration
3. Test with offline mode first
4. Contact Together AI support for API-specific issues

---

**Note**: The system works perfectly fine without the API key - it will simply use offline mode with pre-programmed responses. The online mode is an enhancement for better accuracy.
