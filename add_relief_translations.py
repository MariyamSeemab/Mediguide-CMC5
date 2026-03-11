#!/usr/bin/env python3
"""
Add comprehensive relief solution translations for all symptoms
"""

import json
import os

# Relief solutions translations for all symptoms
RELIEF_TRANSLATIONS = {
    "en": {
        "periodTracker": {
            "reliefSolutions": {
                "cramps": {
                    "homeRemedies": [
                        "Apply heating pad to lower abdomen",
                        "Take warm bath with Epsom salt",
                        "Gentle abdominal massage",
                        "Stay hydrated"
                    ],
                    "medicines": [
                        "Ibuprofen (400mg every 6-8 hours)",
                        "Naproxen (220mg every 8-12 hours)",
                        "Acetaminophen (500mg every 6 hours)"
                    ],
                    "exercises": [
                        "Child's Pose",
                        "Cat-Cow Stretch",
                        "Pelvic tilts",
                        "Gentle walking"
                    ],
                    "warning": "If pain is unbearable or doesn't improve with medication, consult a doctor",
                    "dontDo": [
                        "Don't consume excessive caffeine or alcohol",
                        "Avoid intense physical activity if pain is severe"
                    ]
                },
                "headache": {
                    "homeRemedies": [
                        "Rest in dark, quiet room",
                        "Cold compress on forehead",
                        "Stay hydrated",
                        "Peppermint oil on temples"
                    ],
                    "medicines": [
                        "Ibuprofen (400mg)",
                        "Acetaminophen (500mg)",
                        "Aspirin (325mg)"
                    ],
                    "exercises": [
                        "Neck stretches",
                        "Deep breathing",
                        "Light walking",
                        "Shoulder rolls"
                    ],
                    "warning": "Seek medical help if headache is severe or accompanied by vision changes",
                    "dontDo": [
                        "Don't skip meals or get dehydrated",
                        "Avoid bright screens and loud noises"
                    ]
                },
                "bloating": {
                    "homeRemedies": [
                        "Drink peppermint tea",
                        "Avoid salty foods",
                        "Eat smaller meals",
                        "Light abdominal massage"
                    ],
                    "medicines": [
                        "Simethicone (Gas-X)",
                        "Probiotics",
                        "Magnesium supplements"
                    ],
                    "exercises": [
                        "Walking",
                        "Yoga twists",
                        "Knee-to-chest pose",
                        "Light cardio"
                    ],
                    "warning": "If bloating is severe or persistent, consult a healthcare provider",
                    "dontDo": [
                        "Don't eat salty or processed foods",
                        "Avoid carbonated drinks"
                    ]
                },
                "backPain": {
                    "homeRemedies": [
                        "Apply heat or ice pack",
                        "Maintain good posture",
                        "Use supportive pillow",
                        "Warm compress"
                    ],
                    "medicines": [
                        "Ibuprofen (400mg)",
                        "Naproxen (220mg)",
                        "Topical pain relief cream"
                    ],
                    "exercises": [
                        "Cat-Cow Stretch",
                        "Child's Pose",
                        "Pelvic tilts",
                        "Gentle back stretches"
                    ],
                    "warning": "Consult doctor if pain radiates down legs or is accompanied by numbness",
                    "dontDo": [
                        "Don't sit or stand for too long",
                        "Avoid heavy lifting"
                    ]
                },
                "fatigue": {
                    "homeRemedies": [
                        "Get 7-9 hours sleep",
                        "Eat iron-rich foods",
                        "Stay hydrated",
                        "Take short naps"
                    ],
                    "medicines": [
                        "Iron supplements (if deficient)",
                        "Vitamin B12",
                        "Multivitamin"
                    ],
                    "exercises": [
                        "Light walking",
                        "Gentle yoga",
                        "Stretching",
                        "Avoid intense workouts"
                    ],
                    "warning": "Persistent fatigue may indicate anemia - get blood work done",
                    "dontDo": [
                        "Don't skip sleep or stay up late",
                        "Avoid excessive sugar and junk food"
                    ]
                },
                "moodSwings": {
                    "homeRemedies": [
                        "Practice deep breathing",
                        "Get regular exercise",
                        "Maintain sleep schedule",
                        "Talk to loved ones"
                    ],
                    "medicines": [
                        "Magnesium supplements",
                        "Vitamin B6",
                        "Evening primrose oil"
                    ],
                    "exercises": [
                        "Yoga",
                        "Walking",
                        "Dancing",
                        "Swimming"
                    ],
                    "warning": "If mood changes are severe or affecting daily life, seek professional help",
                    "dontDo": [
                        "Don't isolate yourself completely",
                        "Avoid making major decisions during this time"
                    ]
                }
            }
        }
    },
    "hi": {
        "periodTracker": {
            "reliefSolutions": {
                "cramps": {
                    "homeRemedies": [
                        "निचले पेट पर हीटिंग पैड लगाएं",
                        "एप्सम सॉल्ट के साथ गर्म पानी से नहाएं",
                        "पेट की हल्की मालिश करें",
                        "हाइड्रेटेड रहें"
                    ],
                    "medicines": [
                        "इबुप्रोफेन (400mg हर 6-8 घंटे)",
                        "नेप्रोक्सन (220mg हर 8-12 घंटे)",
                        "एसिटामिनोफेन (500mg हर 6 घंटे)"
                    ],
                    "exercises": [
                        "चाइल्ड पोज़",
                        "कैट-काउ स्ट्रेच",
                        "पेल्विक टिल्ट",
                        "हल्की वॉकिंग"
                    ],
                    "warning": "यदि दर्द असहनीय है या दवा से ठीक नहीं होता है, तो डॉक्टर से परामर्श लें",
                    "dontDo": [
                        "अत्यधिक कैफीन या शराब का सेवन न करें",
                        "यदि दर्द गंभीर है तो तीव्र शारीरिक गतिविधि से बचें"
                    ]
                },
                "headache": {
                    "homeRemedies": [
                        "अंधेरे, शांत कमरे में आराम करें",
                        "माथे पर ठंडी सिकाई करें",
                        "हाइड्रेटेड रहें",
                        "कनपटी पर पुदीने का तेल लगाएं"
                    ],
                    "medicines": [
                        "इबुप्रोफेन (400mg)",
                        "एसिटामिनोफेन (500mg)",
                        "एस्पिरिन (325mg)"
                    ],
                    "exercises": [
                        "गर्दन की स्ट्रेचिंग",
                        "गहरी सांस लेना",
                        "हल्की वॉकिंग",
                        "कंधे घुमाना"
                    ],
                    "warning": "यदि सिरदर्द गंभीर है या दृष्टि में परिवर्तन के साथ है तो चिकित्सा सहायता लें",
                    "dontDo": [
                        "भोजन न छोड़ें या निर्जलित न हों",
                        "तेज स्क्रीन और तेज आवाज से बचें"
                    ]
                },
                "bloating": {
                    "homeRemedies": [
                        "पुदीने की चाय पिएं",
                        "नमकीन खाद्य पदार्थों से बचें",
                        "छोटे भोजन खाएं",
                        "पेट की हल्की मालिश करें"
                    ],
                    "medicines": [
                        "सिमेथिकोन (गैस-एक्स)",
                        "प्रोबायोटिक्स",
                        "मैग्नीशियम सप्लीमेंट"
                    ],
                    "exercises": [
                        "वॉकिंग",
                        "योग ट्विस्ट",
                        "घुटने से छाती तक पोज़",
                        "हल्का कार्डियो"
                    ],
                    "warning": "यदि सूजन गंभीर या लगातार है, तो स्वास्थ्य सेवा प्रदाता से परामर्श लें",
                    "dontDo": [
                        "नमकीन या प्रसंस्कृत खाद्य पदार्थ न खाएं",
                        "कार्बोनेटेड पेय से बचें"
                    ]
                },
                "backPain": {
                    "homeRemedies": [
                        "गर्म या ठंडी सिकाई करें",
                        "अच्छी मुद्रा बनाए रखें",
                        "सहायक तकिया का उपयोग करें",
                        "गर्म सिकाई करें"
                    ],
                    "medicines": [
                        "इबुप्रोफेन (400mg)",
                        "नेप्रोक्सन (220mg)",
                        "टॉपिकल दर्द निवारक क्रीम"
                    ],
                    "exercises": [
                        "कैट-काउ स्ट्रेच",
                        "चाइल्ड पोज़",
                        "पेल्विक टिल्ट",
                        "हल्की पीठ की स्ट्रेचिंग"
                    ],
                    "warning": "यदि दर्द पैरों में फैलता है या सुन्नता के साथ है तो डॉक्टर से परामर्श लें",
                    "dontDo": [
                        "बहुत देर तक बैठें या खड़े न रहें",
                        "भारी सामान उठाने से बचें"
                    ]
                },
                "fatigue": {
                    "homeRemedies": [
                        "7-9 घंटे की नींद लें",
                        "आयरन युक्त खाद्य पदार्थ खाएं",
                        "हाइड्रेटेड रहें",
                        "छोटी झपकी लें"
                    ],
                    "medicines": [
                        "आयरन सप्लीमेंट (यदि कमी है)",
                        "विटामिन बी12",
                        "मल्टीविटामिन"
                    ],
                    "exercises": [
                        "हल्की वॉकिंग",
                        "हल्का योग",
                        "स्ट्रेचिंग",
                        "तीव्र वर्कआउट से बचें"
                    ],
                    "warning": "लगातार थकान एनीमिया का संकेत हो सकती है - रक्त परीक्षण करवाएं",
                    "dontDo": [
                        "नींद न छोड़ें या देर तक जागें नहीं",
                        "अत्यधिक चीनी और जंक फूड से बचें"
                    ]
                },
                "moodSwings": {
                    "homeRemedies": [
                        "गहरी सांस लेने का अभ्यास करें",
                        "नियमित व्यायाम करें",
                        "नींद का समय बनाए रखें",
                        "प्रियजनों से बात करें"
                    ],
                    "medicines": [
                        "मैग्नीशियम सप्लीमेंट",
                        "विटामिन बी6",
                        "इवनिंग प्रिमरोज़ ऑयल"
                    ],
                    "exercises": [
                        "योग",
                        "वॉकिंग",
                        "डांसिंग",
                        "स्विमिंग"
                    ],
                    "warning": "यदि मूड में बदलाव गंभीर हैं या दैनिक जीवन को प्रभावित कर रहे हैं, तो पेशेवर मदद लें",
                    "dontDo": [
                        "खुद को पूरी तरह से अलग न करें",
                        "इस समय बड़े फैसले लेने से बचें"
                    ]
                }
            }
        }
    }
}

def update_translation_file(lang_code, translations):
    """Update a translation file with relief solutions"""
    file_path = f'src/translations/{lang_code}.json'
    
    try:
        # Read existing translations
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        # Add relief solutions to periodTracker section
        if 'periodTracker' not in data:
            data['periodTracker'] = {}
        
        data['periodTracker']['reliefSolutions'] = translations['periodTracker']['reliefSolutions']
        
        # Write back
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        
        print(f"✅ Updated {lang_code}.json with relief solutions")
        return True
    except Exception as e:
        print(f"❌ Error updating {lang_code}.json: {e}")
        return False

def main():
    """Main function to update all translation files"""
    print("🚀 Adding relief solution translations...")
    print()
    
    # Update English and Hindi first
    for lang_code, translations in RELIEF_TRANSLATIONS.items():
        update_translation_file(lang_code, translations)
    
    print()
    print("✅ Relief solution translations added successfully!")
    print("📝 Note: Update PeriodTracker.tsx to use these translations")

if __name__ == '__main__':
    main()
