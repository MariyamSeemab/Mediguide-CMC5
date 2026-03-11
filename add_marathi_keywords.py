#!/usr/bin/env python3
"""
Script to add Marathi keywords to Chatbot.tsx
This script adds Marathi language support for all 24 categories
"""

# Marathi keywords mapping for each category
marathi_keywords = {
    "FEVER": [
        "ताप", "अंगदुखी", "थकवा", "अशक्त", "दिवसांपासून ताप", 
        "ताप आणि अंगदुखी", "थकल्यासारखे"
    ],
    "SKIN": [
        "पुरळ", "खाज", "त्वचा", "हातांवर पुरळ", "चेहऱ्यावर लाल पुरळ"
    ],
    "HEART": [
        "हृदय", "छाती", "धडधडणे", "हृदय जोरात धडधडते", 
        "छातीत अस्वस्थता", "पायऱ्या चढल्यानंतर"
    ],
    "STRESS": [
        "ताण", "चिंता", "मानसिक ताण", "रात्री झोप येत नाही", 
        "कामामुळे ताणात", "सतत ताणात"
    ],
    "WOMEN_HEALTH": [
        "मासिक पाळी", "पोटदुखी", "गरोदर", "गर्भधारणा", 
        "मासिक पाळीदरम्यान", "हलकी पोटदुखी"
    ],
    "DIGESTIVE": [
        "पोट", "पोटदुखी", "मळमळ", "बद्धकोष्ठता", "अतिसार",
        "पोटदुखी आणि मळमळ", "आठवड्यापासून बद्धकोष्ठता"
    ],
    "INFECTION": [
        "संसर्ग", "घशात खवखव", "सौम्य ताप", "कानात संसर्ग"
    ],
    "INJURY": [
        "दुखापत", "रक्त येत आहे", "हात कापला", "पायाला सूज", 
        "पडले", "पडलो", "जखम"
    ],
    "RESPIRATORY": [
        "श्वास", "श्वास घेण्यास त्रास", "खोकला", "दिवसांपासून खोकला"
    ],
    "NEUROLOGICAL": [
        "डोकेदुखी", "गरगरते", "उभे राहिल्यावर गरगरते"
    ],
    "ENDOCRINE": [
        "तहान", "वारंवार लघवी", "वजन वाढले", "अचानक वजन वाढले"
    ],
    "MUSCULOSKELETAL": [
        "पाठीला दुखते", "सांधेदुखी", "गुडघ्यांमध्ये", "जास्त वेळ बसल्यानंतर"
    ],
    "ALLERGY": [
        "शिंक", "खाज येते", "नाक वाहते", "बाहेर गेल्यानंतर शिंक",
        "डोळ्यांना खाज"
    ],
    "PEDIATRIC": [
        "मुलाला", "पुरळ आणि ताप", "वर्षांचे मूल", "उलटी करत आहे"
    ],
    "GERIATRIC": [
        "आजोबा", "अशक्त", "गरगरल्यासारखे", "ज्येष्ठ", "चालण्यात अडचण",
        "तोल सांभाळण्यात अडचण"
    ],
    "PREVENTIVE": [
        "लसीकरण", "निरोगी जीवनशैली", "आहार", "या वर्षी लसीकरण"
    ],
    "ENT": [
        "कानात दुखत आहे", "नाकातून रक्त", "वारंवार नाकातून रक्त"
    ],
    "EYE": [
        "डोळ्याने धूसर", "डोळे कोरडे", "खाजरे", "एका डोळ्याने"
    ],
    "DENTAL": [
        "दातात दुखत", "हिरड्यांतून रक्त", "दात", "हिरडे"
    ],
    "UROLOGY": [
        "लघवी", "जळजळ", "लघवी करताना", "रात्री वारंवार लघवीला"
    ],
    "KIDNEY_LIVER": [
        "टाचांमध्ये सूज", "रक्तदाब वाढलेला", "अॅनिमिया", "थकवा"
    ],
    "SLEEP": [
        "झोप येत नाही", "रात्रींपासून झोप येत नाही", "ताणात"
    ],
    "PREGNANCY": [
        "गरोदर", "पोटात कळ", "गर्भधारणेदरम्यान", "खालच्या पोटात दुखत"
    ],
    "EMERGENCY": [
        "रक्त येत आहे", "पायातून रक्त", "जखम", "प्रथमोपचार", 
        "बेशुद्ध पडलो", "बेशुद्ध पडले"
    ]
}

print("Marathi Keywords for MediGuide AI Chatbot")
print("=" * 50)
print("\nTotal Categories:", len(marathi_keywords))
print("\nKeywords by Category:\n")

for category, keywords in marathi_keywords.items():
    print(f"{category}:")
    for keyword in keywords:
        print(f"  - {keyword}")
    print()

print("\nTo add these keywords to Chatbot.tsx:")
print("1. Find each category's keyword detection section")
print("2. Add Marathi keywords using lowerMessage.includes()")
print("3. Follow the existing pattern for other languages")
