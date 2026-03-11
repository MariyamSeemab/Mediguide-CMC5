// ============================================
// GROQ API CONFIGURATION
// ============================================
const GROQ_API_KEY = import.meta?.env?.VITE_GROQ_API_KEY || 'const apiKey = "YOUR_API_KEY";';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODEL = 'llama-3.1-8b-instant';
const API_TIMEOUT = 20000; // 20 seconds

// ============================================
// DOM ELEMENTS
// ============================================
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');
const languageSelect = document.getElementById('languageSelect');
const voiceButton = document.getElementById('voiceButton');

// ============================================
// STATE MANAGEMENT
// ============================================
let recognition;
let isListening = false;
let conversationHistory = [];
let isProcessing = false;

// ============================================
// SPEECH RECOGNITION SETUP
// ============================================
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    
    recognition.onstart = function() {
        isListening = true;
        voiceButton.classList.add('listening');
        voiceButton.textContent = '🔴';
        userInput.placeholder = 'Listening...';
    };
    
    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        userInput.value = transcript;
        userInput.focus();
    };
    
    recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
        isListening = false;
        voiceButton.classList.remove('listening');
        voiceButton.textContent = '🎤';
        userInput.placeholder = 'Type your message here...';
        
        if (event.error === 'not-allowed') {
            alert('Microphone access denied. Please allow microphone access in your browser settings.');
        }
    };
    
    recognition.onend = function() {
        isListening = false;
        voiceButton.classList.remove('listening');
        voiceButton.textContent = '🎤';
        userInput.placeholder = 'Type your message here...';
    };
} else {
    voiceButton.style.display = 'none';
    console.log('Speech recognition not supported in this browser.');
}

// ============================================
// LANGUAGE CODE MAPPING
// ============================================
const languageCodeMap = {
    'English': 'en-IN',
    'Hindi': 'hi-IN',
    'Marathi': 'mr-IN',
    'Gujarati': 'gu-IN',
    'Punjabi': 'pa-IN',
    'Tamil': 'ta-IN',
    'Telugu': 'te-IN',
    'Kannada': 'kn-IN',
    'Malayalam': 'ml-IN',
    'Odia': 'or-IN',
    'Assamese': 'as-IN',
    'Bengali': 'bn-IN',
    'Urdu': 'ur-IN'
};

// ============================================
// VOICE BUTTON EVENT LISTENER
// ============================================
voiceButton.addEventListener('click', () => {
    if (!recognition) {
        alert('Speech recognition is not supported in your browser. Please use Chrome, Edge, or Safari.');
        return;
    }
    
    if (isListening) {
        recognition.stop();
    } else {
        const selectedLanguage = languageSelect.value;
        recognition.lang = languageCodeMap[selectedLanguage] || 'en-IN';
        recognition.start();
    }
});

// ============================================
// SYSTEM PROMPT GENERATOR
// ============================================
function getSystemPrompt(language) {
    return `You are Healthcare MediGuide Assistant. You ONLY answer medical and healthcare questions.

ABSOLUTE RULES - NO EXCEPTIONS:

1. If question is about: prices, products, technology, food recipes, shopping, electronics, sports, entertainment, general knowledge → ONLY respond: "I'm Healthcare MediGuide Assistant. Please ask me questions related to healthcare and medical topics only."

2. Medical questions → Answer in MAXIMUM 3 sentences. NO lists, NO steps, NO tutorials.

3. FORBIDDEN WORDS: "However", "But", "Materials", "Steps", "Instructions", "Tips", "Remember", "Guide", "Follow these", "You can check", "I recommend", "Visit a store", "Official website"

4. FORBIDDEN FORMATS: Numbered lists (1. 2. 3.), bullet points, step-by-step guides, detailed tutorials

5. If you write more than 3 sentences, you FAILED.

REJECT IMMEDIATELY (respond with rejection message only):
- Any price questions (Dairy Milk, OnePlus, iPhone, MacBook, etc.)
- Any product questions (phones, laptops, electronics)
- Any food preparation (bread, jam, cooking, recipes)
- Any technology questions
- Any shopping/purchasing questions
- Any non-health topics

MEDICAL TOPICS (Answer in MAX 3 sentences):
- Symptoms: fever, cough, pain, headache
- Diseases and conditions
- When to see a doctor
- Basic medical advice
- Health concerns

EXAMPLES OF CORRECT RESPONSES:

Q: "OnePlus price"
A: "I'm Healthcare MediGuide Assistant. Please ask me questions related to healthcare and medical topics only."

Q: "MacBook price"
A: "I'm Healthcare MediGuide Assistant. Please ask me questions related to healthcare and medical topics only."

Q: "How to apply bread in jam"
A: "I'm Healthcare MediGuide Assistant. Please ask me questions related to healthcare and medical topics only."

Q: "Dairy Milk price"
A: "I'm Healthcare MediGuide Assistant. Please ask me questions related to healthcare and medical topics only."

Q: "Toothpaste application"
A: "I'm Healthcare MediGuide Assistant. Please ask me questions related to healthcare and medical topics only."

Q: "What is fever?"
A: "Fever is body temperature above 98.6°F (37°C), usually from infection. Take paracetamol, rest, and drink fluids. See a doctor if it lasts over 3 days or exceeds 103°F."

Q: "Headache remedy"
A: "For headaches, rest in a quiet dark room and stay hydrated. Take paracetamol if needed. Consult a doctor if severe or persistent."

CRITICAL: 
- Maximum 3 sentences for medical answers
- Zero sentences for non-medical (just rejection message)
- NO lists, NO steps, NO guides, NO tutorials
- If unsure if medical → reject it

Language: ${language}

YOU MUST REJECT ALL NON-MEDICAL QUESTIONS. NO EXCEPTIONS.`;
}

// ============================================
// ONLINE/OFFLINE CHECK
// ============================================
function isOnline() {
    return navigator.onLine;
}

// ============================================
// GROQ API CALL WITH TIMEOUT
// ============================================
async function callGroqAPI(messages, abortController) {
    try {
        const response = await fetch(GROQ_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GROQ_API_KEY}`
            },
            body: JSON.stringify({
                model: GROQ_MODEL,
                messages: messages,
                temperature: 0.7,
                max_tokens: 1024,
                top_p: 1,
                stream: false
            }),
            signal: abortController.signal
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(`API Error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
        }

        const data = await response.json();
        
        if (!data.choices || !data.choices[0] || !data.choices[0].message) {
            throw new Error('Invalid API response format');
        }

        return data.choices[0].message.content;
    } catch (error) {
        if (error.name === 'AbortError') {
            throw new Error('Request timeout - Please check your internet connection');
        }
        throw error;
    }
}

// ============================================
// RESPONSE FILTER - ENFORCE MEDICAL-ONLY RESPONSES
// ============================================
function filterNonMedicalResponse(response, userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    const lowerResponse = response.toLowerCase();
    
    const REJECTION_MESSAGE = "I'm Healthcare MediGuide Assistant. Please ask me questions related to healthcare and medical topics only.";
    
    // ULTRA-STRICT: List of non-medical keywords in user message
    const nonMedicalKeywords = [
        'price', 'cost', 'rupees', 'rs', 'dollar', 'shopping', 'buy', 'purchase', 'sell',
        'oneplus', 'iphone', 'macbook', 'samsung', 'google', 'laptop', 'phone', 'computer', 'mobile', 'device',
        'cricket', 'football', 'sports', 'movie', 'entertainment', 'game', 'match', 'player',
        'recipe', 'cooking', 'travel', 'tourism', 'restaurant', 'food', 'dish',
        'business', 'politics', 'coding', 'programming', 'software', 'app',
        'dairy milk', 'chocolate', 'bread', 'jam', 'butter', 'cheese', 'snack',
        'car', 'bike', 'vehicle', 'train', 'flight', 'transport',
        'music', 'song', 'singer', 'actor', 'actress', 'celebrity',
        'capital', 'country', 'geography', 'city',
        'math', 'history', 'subject', 'education', 'school', 'college',
        'job', 'salary', 'career', 'company', 'work',
        'apply', 'application', 'how to use', 'tutorial', 'guide',
        'toothpaste application', 'brush application', 'how to apply'
    ];
    
    // Medical keywords that should be allowed (but still check response quality)
    const medicalKeywords = [
        'fever', 'cough', 'cold', 'headache', 'pain', 'ache', 'sick', 'ill', 'hurt',
        'disease', 'symptom', 'medicine', 'tablet', 'drug', 'treatment', 'cure', 'remedy',
        'doctor', 'hospital', 'clinic', 'health', 'medical', 'dental', 'dentist',
        'diabetes', 'cancer', 'covid', 'flu', 'infection', 'virus', 'bacteria',
        'blood', 'pressure', 'sugar', 'heart', 'lung', 'kidney', 'liver',
        'pregnant', 'pregnancy', 'baby', 'child', 'infant',
        'mental', 'depression', 'anxiety', 'stress', 'sleep',
        'injury', 'wound', 'cut', 'burn', 'fracture', 'sprain',
        'allergy', 'asthma', 'breathing', 'chest'
    ];
    
    // Check if message contains medical keywords
    const hasMedicalKeywords = medicalKeywords.some(keyword => lowerMessage.includes(keyword));
    
    // Check if user message contains non-medical keywords
    const hasNonMedicalKeywords = nonMedicalKeywords.some(keyword => lowerMessage.includes(keyword));
    
    // ULTRA-STRICT: If question has non-medical keywords and no medical keywords, reject immediately
    if (hasNonMedicalKeywords && !hasMedicalKeywords) {
        return REJECTION_MESSAGE;
    }
    
    // ULTRA-STRICT: Check if response is too long (more than 350 characters)
    if (response.length > 350) {
        return REJECTION_MESSAGE;
    }
    
    // ULTRA-STRICT: Forbidden phrases that indicate non-medical or tutorial content
    const forbiddenPhrases = [
        'materials needed', 'step-by-step', 'follow these steps', 'instructions:', 'instruction',
        'tips for indian users', 'tips:', 'remember:', 'note:', 'notes:',
        'enjoy your', 'experiment with', 'simple guide', 'guide:', 'guide to',
        'online shopping', 'amazon', 'flipkart', 'store', 'website', 'online',
        'however,', 'but i can', 'i recommend checking', 'you can check', 'you can visit',
        'visit a store', 'official website', 'check the', 'check online',
        'recommended actions', 'action:', 'actions:', 'to apply', 'application:', 'applying',
        'choose the right', 'place a', 'spread the', 'take a slice',
        'optional:', 'if you prefer', 'once you', 'when you',
        'proper', 'properly', 'correct way', 'best way',
        'materials:', 'ingredients:', 'tools:', 'equipment:',
        'step 1', 'step 2', 'first,', 'second,', 'third,', 'finally,',
        'here are', 'here is how', 'follow this', 'do this',
        'government scheme', 'digital india', 'pradhan mantri',
        'authorized retailer', 'official', 'latest price',
        'consult with a financial', 'financial advisor',
        'for the most accurate', 'for more information'
    ];
    
    if (forbiddenPhrases.some(phrase => lowerResponse.includes(phrase))) {
        return REJECTION_MESSAGE;
    }
    
    // ULTRA-STRICT: Count sentences - if more than 4 sentences, reject
    const sentenceCount = (response.match(/[.!?]+/g) || []).length;
    if (sentenceCount > 4) {
        return REJECTION_MESSAGE;
    }
    
    // ULTRA-STRICT: Check for numbered lists (1. 2. 3.)
    if (/\d+\.\s/.test(response)) {
        return REJECTION_MESSAGE;
    }
    
    // ULTRA-STRICT: Check for bullet points
    if (/^[•\-\*]\s/m.test(response)) {
        return REJECTION_MESSAGE;
    }
    
    // ULTRA-STRICT: Check for colons followed by lists (indicates structured content)
    const colonCount = (response.match(/:/g) || []).length;
    if (colonCount > 2) {
        return REJECTION_MESSAGE;
    }
    
    // ULTRA-STRICT: Check for multiple line breaks (indicates structured content)
    const lineBreakCount = (response.match(/\n\n/g) || []).length;
    if (lineBreakCount > 1) {
        return REJECTION_MESSAGE;
    }
    
    // If response passed all checks, return it
    return response;
}

// ============================================
// PROCESS MESSAGE WITH ONLINE/OFFLINE FALLBACK
// ============================================
async function processMessage(userMessage, selectedLanguage) {
    // Prevent duplicate sends
    if (isProcessing) {
        console.log('⏳ Already processing a message, please wait...');
        return null;
    }

    isProcessing = true;

    try {
        // Check if online
        if (!isOnline()) {
            console.log('📴 Offline mode - Using local chatbot');
            isProcessing = false;
            return null; // Let chatbot.tsx handle offline mode
        }

        console.log('🌐 Online mode - Using Groq API');

        // Add user message to conversation history
        conversationHistory.push({
            role: 'user',
            content: userMessage
        });

        // Keep only last 20 messages to avoid token limits
        if (conversationHistory.length > 20) {
            conversationHistory = conversationHistory.slice(-20);
        }

        // Prepare messages with system prompt
        const messages = [
            {
                role: 'system',
                content: getSystemPrompt(selectedLanguage)
            },
            ...conversationHistory
        ];

        // Create abort controller for timeout
        const abortController = new AbortController();
        const timeoutId = setTimeout(() => abortController.abort(), API_TIMEOUT);

        try {
            // Call Groq API
            const botResponse = await callGroqAPI(messages, abortController);
            clearTimeout(timeoutId);

            // Filter the response to enforce medical-only policy
            const filteredResponse = filterNonMedicalResponse(botResponse, userMessage);

            // Add bot response to conversation history
            conversationHistory.push({
                role: 'assistant',
                content: filteredResponse
            });

            console.log('✅ Groq API response received');
            return filteredResponse;

        } catch (apiError) {
            clearTimeout(timeoutId);
            console.error('❌ Groq API error:', apiError.message);
            
            // Fallback to offline mode on API failure
            console.log('🔄 Falling back to offline mode');
            
            // Remove the user message from history since API failed
            conversationHistory.pop();
            
            return null; // Let chatbot.tsx handle offline mode
        }

    } catch (error) {
        console.error('❌ Error processing message:', error);
        return null;
    } finally {
        isProcessing = false;
    }
}

// ============================================
// MESSAGE FORMATTING
// ============================================
function formatBotMessage(content) {
    // Replace **text** with <strong>text</strong>
    content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Replace numbered lists like "1. " with proper formatting
    content = content.replace(/^(\d+)\.\s/gm, '<br><strong>$1.</strong> ');
    
    // Replace bullet points
    content = content.replace(/^[•\-\*]\s/gm, '<br>• ');
    
    // Replace section headers (text followed by colon)
    content = content.replace(/^([A-Z][^:\n]{2,50}):/gm, '<br><strong>$1:</strong>');
    
    // Replace newlines with <br>
    content = content.replace(/\n/g, '<br>');
    
    // Clean up multiple <br> tags - reduce to single <br>
    content = content.replace(/(<br>\s*){2,}/g, '<br>');
    
    // Remove leading <br>
    content = content.replace(/^(<br>\s*)+/, '');
    
    return content;
}

// ============================================
// ADD MESSAGE TO CHAT
// ============================================
function addMessage(content, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    if (isUser) {
        contentDiv.textContent = content;
    } else {
        contentDiv.innerHTML = formatBotMessage(content);
    }
    
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ============================================
// TYPING INDICATOR
// ============================================
function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message';
    typingDiv.id = 'typingIndicator';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = '<div class="typing-indicator"><span></span><span></span><span></span></div>';
    
    typingDiv.appendChild(contentDiv);
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// ============================================
// SEND MESSAGE WITH ONLINE/OFFLINE HANDLING
// ============================================
async function sendMessage() {
    const message = userInput.value.trim();
    const selectedLanguage = languageSelect.value;
    
    if (!message) return;
    
    // Prevent duplicate sends
    if (isProcessing) {
        console.log('⏳ Please wait for the current message to complete');
        return;
    }
    
    // Add user message to UI
    addMessage(message, true);
    userInput.value = '';
    sendButton.disabled = true;
    
    // Show typing indicator
    showTypingIndicator();
    
    try {
        // Try to process with Groq API (online mode)
        const botResponse = await processMessage(message, selectedLanguage);
        
        // Remove typing indicator
        removeTypingIndicator();
        
        if (botResponse) {
            // Online mode - Got response from Groq API
            addMessage(botResponse);
            
            // Optional: Speak the response if speakText function exists
            if (typeof speakText === 'function') {
                try {
                    speakText(botResponse);
                } catch (speakError) {
                    console.log('Voice output not available:', speakError);
                }
            }
        } else {
            // Offline mode or API failed - Let chatbot.tsx handle it
            console.log('📴 Using offline chatbot mode');
            
            // Note: chatbot.tsx should handle the offline response
            // If it doesn't, show a fallback message
            setTimeout(() => {
                const typingStillVisible = document.getElementById('typingIndicator');
                if (typingStillVisible) {
                    removeTypingIndicator();
                    addMessage('I\'m currently in offline mode. Please check your internet connection for online AI assistance.');
                }
            }, 1000);
        }
        
    } catch (error) {
        removeTypingIndicator();
        console.error('❌ Error in sendMessage:', error);
        
        // Show user-friendly error message
        addMessage('Sorry, I encountered an error. Please try again.');
        
    } finally {
        sendButton.disabled = false;
        userInput.focus();
    }
}

// ============================================
// EVENT LISTENERS
// ============================================
sendButton.addEventListener('click', sendMessage);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !isProcessing) {
        sendMessage();
    }
});

// Monitor online/offline status
window.addEventListener('online', () => {
    console.log('🌐 Connection restored - Online mode available');
});

window.addEventListener('offline', () => {
    console.log('📴 Connection lost - Switching to offline mode');
});

// ============================================
// INITIALIZATION
// ============================================
userInput.focus();

// Log initial status
console.log(`🔌 Initial connection status: ${isOnline() ? 'Online' : 'Offline'}`);
console.log('✅ Groq API integration loaded successfully');
console.log('📝 Using model:', GROQ_MODEL);
console.log('🌐 API Endpoint:', GROQ_API_URL);
console.log('⏱️ Timeout:', API_TIMEOUT / 1000, 'seconds');
