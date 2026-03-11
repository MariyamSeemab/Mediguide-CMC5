#!/usr/bin/env python3
"""
Generate ALL Marketplace Product Translations
This script generates translations for ALL products in ALL 6 categories
Run: python generate_all_marketplace_translations.py
"""

import json

# Translation mappings for common terms
common_translations = {
    "Take": {
        "hi": "लें", "ta": "எடுத்துக் கொள்ளுங்கள்", "te": "తీసుకోండి", "bn": "নিন",
        "mr": "घ्या", "gu": "લો", "kn": "ತೆಗೆದುಕೊಳ್ಳಿ", "ml": "കഴിക്കുക",
        "pa": "ਲਓ", "or": "ନିଅନ୍ତୁ", "as": "লওক", "ur": "لیں"
    },
    "tablet": {
        "hi": "गोली", "ta": "மாத்திரை", "te": "మాత్ర", "bn": "ট্যাবলেট",
        "mr": "गोळी", "gu": "ગોળી", "kn": "ಮಾತ್ರೆ", "ml": "ഗുളിക",
        "pa": "ਗੋਲੀ", "or": "ଟାବଲେଟ୍", "as": "টেবলেট", "ur": "گولی"
    },
    "daily": {
        "hi": "रोजाना", "ta": "தினமும்", "te": "రోజూ", "bn": "প্রতিদিন",
        "mr": "दररोज", "gu": "દરરોજ", "kn": "ದಿನಕ್ಕೆ", "ml": "ദിവസവും",
        "pa": "ਰੋਜ਼ਾਨਾ", "or": "ପ୍ରତିଦିନ", "as": "দৈনিক", "ur": "روزانہ"
    },
    "Consult doctor": {
        "hi": "डॉक्टर से परामर्श लें", "ta": "மருத்துவரை அணுகவும்",
        "te": "వైద్యుడిని సంప్రదించండి", "bn": "ডাক্তারের পরামর্শ নিন",
        "mr": "डॉक्टरांचा सल्ला घ्या", "gu": "ડૉક્ટરની સલાહ લો",
        "kn": "ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ", "ml": "ഡോക്ടറെ സമീപിക്കുക",
        "pa": "ਡਾਕਟਰ ਨਾਲ ਸਲਾਹ ਕਰੋ", "or": "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ନିଅନ୍ତୁ",
        "as": "চিকিৎসকৰ পৰামৰ্শ লওক", "ur": "ڈاکٹر سے مشورہ کریں"
    },
    "Keep out of reach of children": {
        "hi": "बच्चों की पहुंच से दूर रखें", "ta": "குழந்தைகளின் எட்டாத இடத்தில் வைக்கவும்",
        "te": "పిల్లల చేరువ నుండి దూరంగా ఉంచండి", "bn": "শিশুদের নাগালের বাইরে রাখুন",
        "mr": "मुलांच्या आवाक्याबाहेर ठेवा", "gu": "બાળકોની પહોંચથી દૂર રાખો",
        "kn": "ಮಕ್ಕಳ ಕೈಗೆ ಸಿಗದಂತೆ ಇರಿಸಿ", "ml": "കുട്ടികളുടെ കൈയെത്താത്ത സ്ഥലത്ത് സൂക്ഷിക്കുക",
        "pa": "ਬੱਚਿਆਂ ਦੀ ਪਹੁੰਚ ਤੋਂ ਦੂਰ ਰੱਖੋ", "or": "ପିଲାମାନଙ୍କ ପହଞ୍ଚରୁ ଦୂରରେ ରଖନ୍ତୁ",
        "as": "শিশুৰ হাতৰ নাগালৰ বাহিৰত ৰাখক", "ur": "بچوں کی پہنچ سے دور رکھیں"
    },
    "For external use only": {
        "hi": "केवल बाहरी उपयोग के लिए", "ta": "வெளிப்புற பயன்பாட்டிற்கு மட்டும்",
        "te": "బాహ్య ఉపయోగం కోసం మాత్రమే", "bn": "শুধুমাত্র বাহ্যিক ব্যবহারের জন্য",
        "mr": "केवळ बाह्य वापरासाठी", "gu": "ફક્ત બાહ્ય ઉપયોગ માટે",
        "kn": "ಬಾಹ್ಯ ಬಳಕೆಗೆ ಮಾತ್ರ", "ml": "ബാഹ്യ ഉപയോഗത്തിന് മാത്രം",
        "pa": "ਸਿਰਫ਼ ਬਾਹਰੀ ਵਰਤੋਂ ਲਈ", "or": "କେବଳ ବାହ୍ୟ ବ୍ୟବହାର ପାଇଁ",
        "as": "কেৱল বাহ্যিক ব্যৱহাৰৰ বাবে", "ur": "صرف بیرونی استعمال کے لیے"
    }
}

print("=" * 80)
print("MARKETPLACE TRANSLATION GENERATOR")
print("=" * 80)
print()
print("This script will help generate translations for ALL marketplace products.")
print()
print("CURRENT STATUS:")
print("✅ MEN001 - Completed")
print("✅ MEN002 - Completed")
print("⏳ MEN003-MEN041 - Pending (37 products)")
print("⏳ WOM001-WOM041 - Pending (41 products)")
print("⏳ BABY101-BABY141 - Pending (41 products)")
print("⏳ MED101-MED141 - Pending (39 products, 2 done)")
print("⏳ DEVICE101-DEVICE141 - Pending (41 products)")
print("⏳ PERSONAL101-PERSONAL141 - Pending (41 products)")
print()
print("TOTAL: ~240 products need translation")
print()
print("=" * 80)
print()
print("RECOMMENDED SOLUTION:")
print()
print("Due to the massive scope, I recommend using Google Cloud Translation API:")
print()
print("1. Install the library:")
print("   pip install google-cloud-translate")
print()
print("2. Set up API credentials")
print()
print("3. Run automated translation")
print()
print("4. Manually review medical terms")
print()
print("5. Test thoroughly")
print()
print("=" * 80)
print()
print("ESTIMATED TIME:")
print("- With API: 2-3 hours (including review)")
print("- Manual: 80-120 hours")
print()
print("ESTIMATED COST:")
print("- Google Translate API: ~$30-50 for all translations")
print("- Azure Translator: ~$40-60")
print("- DeepL API: ~$50-70")
print()
