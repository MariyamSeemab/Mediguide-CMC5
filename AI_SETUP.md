# AI Chatbot Setup Guide

## Overview
MediGuide AI now includes a real AI-powered chatbot that can provide intelligent medical guidance and health information. The system works with or without an API key, providing smart fallback responses.

## Features
- **Real AI Integration**: Connects to OpenAI's GPT-3.5-turbo for intelligent responses
- **Multilingual Support**: Works in 12+ Indian languages
- **Medical Focus**: Specialized prompts for healthcare guidance
- **Smart Fallbacks**: Works even without API key using intelligent mock responses
- **Typing Indicators**: Real-time chat experience
- **Context Awareness**: Remembers conversation history

## Setup Instructions

### Option 1: With OpenAI API (Recommended)
1. **Get OpenAI API Key**:
   - Visit [OpenAI Platform](https://platform.openai.com/api-keys)
   - Create an account and generate an API key
   - Copy your API key

2. **Configure Environment**:
   ```bash
   # Copy the example environment file
   cp .env.example .env
   
   # Edit .env file and add your API key
   REACT_APP_OPENAI_API_KEY=sk-your-actual-api-key-here
   ```

3. **Restart Development Server**:
   ```bash
   npm run dev
   ```

### Option 2: Without API Key (Mock Mode)
The chatbot works perfectly without an API key using intelligent mock responses:
- Provides relevant medical information
- Handles common health queries
- Supports all languages
- No setup required

## How It Works

### With API Key
- Sends user messages to OpenAI's GPT-3.5-turbo
- Uses specialized medical prompts
- Provides contextual, intelligent responses
- Maintains conversation history

### Without API Key (Mock Mode)
- Uses pattern matching for common health queries
- Provides pre-written medical guidance
- Covers symptoms like fever, headache, cough
- Includes general health tips

## Supported Languages
- English (en)
- Hindi (hi)
- Tamil (ta)
- Telugu (te)
- Bengali (bn)
- Marathi (mr)
- Gujarati (gu)
- Kannada (kn)
- Malayalam (ml)
- Punjabi (pa)
- Odia (or)
- Assamese (as)

## Medical Safety Features
- **Disclaimers**: Always includes medical disclaimers
- **Emergency Guidance**: Directs users to call 108 for emergencies
- **Professional Advice**: Emphasizes consulting healthcare professionals
- **General Information**: Clearly states it provides general guidance only

## API Usage & Costs
- **Model**: GPT-3.5-turbo (cost-effective)
- **Token Limit**: 500 tokens per response
- **Context**: Maintains last 6 messages for context
- **Estimated Cost**: ~$0.002 per conversation

## Customization Options

### Adding New AI Services
You can easily integrate other AI services by modifying the `MedicalAIService` class:

```typescript
// Add support for Google Gemini, Anthropic Claude, etc.
// Modify the generateResponse method in Chatbot.tsx
```

### Customizing Medical Prompts
Edit the `getSystemPrompt` method to customize AI behavior:
- Add specific medical specializations
- Include hospital-specific information
- Customize response tone and style

### Adding New Languages
1. Add language to `getSystemPrompt` method
2. Add mock responses in `getMockResponse` method
3. Update language selector in UI

## Troubleshooting

### Common Issues
1. **API Key Not Working**:
   - Verify key is correct in `.env` file
   - Check OpenAI account has credits
   - Restart development server

2. **Responses Too Slow**:
   - Check internet connection
   - Consider using mock mode for development

3. **Language Not Supported**:
   - Falls back to English responses
   - Add custom language support in code

### Error Handling
The system gracefully handles:
- Network connectivity issues
- API rate limits
- Invalid API keys
- Service outages

## Security Considerations
- **API Keys**: Never commit API keys to version control
- **User Data**: No conversation data is stored permanently
- **Privacy**: Messages are only sent to AI service, not logged
- **Rate Limiting**: Implement rate limiting for production use

## Production Deployment
For production deployment:
1. Set up proper environment variables
2. Implement rate limiting
3. Add user authentication
4. Monitor API usage and costs
5. Set up error logging and monitoring

## Support
For issues or questions about the AI integration:
1. Check this documentation
2. Review error messages in browser console
3. Test with mock mode first
4. Verify API key configuration