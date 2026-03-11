// Configuration
const GROQ_API_KEY = 'const apiKey = "YOUR_API_KEY";'; // Replace with your actual API key
const MODEL = 'meta-llama/llama-4-scout-17b-16e-instruct';

// Current language
let currentLanguage = 'en';

// DOM Elements
const uploadArea = document.getElementById('uploadArea');
const imageInput = document.getElementById('imageInput');
const previewSection = document.getElementById('previewSection');
const imagePreview = document.getElementById('imagePreview');
const removeBtn = document.getElementById('removeBtn');
const analyzeBtn = document.getElementById('analyzeBtn');
const btnText = document.getElementById('btnText');
const btnLoader = document.getElementById('btnLoader');
const chatSection = document.getElementById('chatSection');
const chatMessages = document.getElementById('chatMessages');
const languageSelect = document.getElementById('languageSelect');
const textInputSection = document.getElementById('textInputSection');
const userMessage = document.getElementById('userMessage');

let selectedImage = null;

// Language change handler
languageSelect.addEventListener('change', (e) => {
    currentLanguage = e.target.value;
    updateLanguage();
});

// Update all text based on selected language
function updateLanguage() {
    const lang = translations[currentLanguage];
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (lang[key]) {
            element.textContent = lang[key];
        }
    });
    
    // Update placeholder
    const placeholderKey = userMessage.getAttribute('data-i18n-placeholder');
    if (placeholderKey && lang[placeholderKey]) {
        userMessage.placeholder = lang[placeholderKey];
    }
    
    // Update direction for Urdu
    document.body.style.direction = currentLanguage === 'ur' ? 'rtl' : 'ltr';
}

// Upload area click handler
uploadArea.addEventListener('click', () => {
    imageInput.click();
});

// Drag and drop handlers
uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = '#764ba2';
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.style.borderColor = '#667eea';
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = '#667eea';
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        handleImageSelect(file);
    }
});

// File input change handler
imageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        handleImageSelect(file);
    }
});

// Handle image selection
function handleImageSelect(file) {
    if (file.size > 5 * 1024 * 1024) {
        alert(translations[currentLanguage].fileSizeError);
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        selectedImage = e.target.result;
        imagePreview.src = selectedImage;
        uploadArea.style.display = 'none';
        previewSection.style.display = 'block';
        textInputSection.style.display = 'block';
        analyzeBtn.disabled = false;
        
        // Clear previous chat history
        chatMessages.innerHTML = '';
        chatSection.style.display = 'none';
    };
    reader.readAsDataURL(file);
}

// Remove image handler
removeBtn.addEventListener('click', () => {
    selectedImage = null;
    imageInput.value = '';
    userMessage.value = '';
    uploadArea.style.display = 'block';
    previewSection.style.display = 'none';
    textInputSection.style.display = 'none';
    analyzeBtn.disabled = true;
    
    // Clear chat history
    chatMessages.innerHTML = '';
    chatSection.style.display = 'none';
});

// Analyze button handler
analyzeBtn.addEventListener('click', async () => {
    if (!selectedImage) return;

    const userText = userMessage.value.trim();
    
    // Add user message to chat
    addChatMessage('user', userText, selectedImage);

    // Show loading state
    analyzeBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoader.style.display = 'block';

    try {
        const result = await analyzeSkinImage(selectedImage, userText);
        addChatMessage('ai', result);
    } catch (error) {
        addChatMessage('ai', `${translations[currentLanguage].errorLabel} ${error.message}`);
    } finally {
        // Reset button state
        btnText.style.display = 'block';
        btnLoader.style.display = 'none';
        analyzeBtn.disabled = false;
    }
});

// Analyze skin image using Groq API
async function analyzeSkinImage(imageBase64, userText) {
    const lang = translations[currentLanguage];
    
    let promptText = lang.analysisPrompt;
    if (userText) {
        promptText += `\n\nUser's additional information: ${userText}`;
    }
    
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${GROQ_API_KEY}`
        },
        body: JSON.stringify({
            model: MODEL,
            messages: [
                {
                    role: 'user',
                    content: [
                        {
                            type: 'text',
                            text: promptText
                        },
                        {
                            type: 'image_url',
                            image_url: {
                                url: imageBase64
                            }
                        }
                    ]
                }
            ],
            temperature: 0.7,
            max_tokens: 1024
        })
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Failed to analyze image');
    }

    const data = await response.json();
    return data.choices[0].message.content;
}

// Add message to chat
function addChatMessage(type, text, image = null) {
    const lang = translations[currentLanguage];
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${type}`;
    
    const label = document.createElement('div');
    label.className = 'chat-message-label';
    label.textContent = type === 'user' ? lang.userLabel : lang.aiLabel;
    
    const content = document.createElement('div');
    content.className = 'chat-message-content';
    
    // Parse markdown-style formatting for AI messages
    if (type === 'ai' && text) {
        content.innerHTML = parseMarkdown(text);
    } else {
        content.textContent = text || (type === 'user' ? '📷 Image uploaded' : '');
    }
    
    messageDiv.appendChild(label);
    messageDiv.appendChild(content);
    
    if (image && type === 'user') {
        const img = document.createElement('img');
        img.src = image;
        img.className = 'chat-image';
        messageDiv.appendChild(img);
    }
    
    chatMessages.appendChild(messageDiv);
    chatSection.style.display = 'block';
    messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Parse markdown formatting
function parseMarkdown(text) {
    // Convert **text** to <strong>text</strong>
    text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    
    // Convert *text* to <em>text</em>
    text = text.replace(/\*(.+?)\*/g, '<em>$1</em>');
    
    // Convert line breaks to <br>
    text = text.replace(/\n/g, '<br>');
    
    // Convert numbered lists
    text = text.replace(/^(\d+)\.\s+(.+)$/gm, '<div style="margin-left: 20px;">$1. $2</div>');
    
    return text;
}

// Display result (deprecated - keeping for compatibility)
function displayResult(text) {
    addChatMessage('ai', text);
}

// Display error (deprecated - keeping for compatibility)
function displayError(message) {
    const lang = translations[currentLanguage];
    addChatMessage('ai', `${lang.errorLabel} ${message}`);
}
