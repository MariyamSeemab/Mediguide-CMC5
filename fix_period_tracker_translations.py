#!/usr/bin/env python3
"""
Complete Period Tracker Translation Fix
Adds ALL missing translation keys for the Period Tracker page
"""

import json
import os

# Complete translation structure
COMPLETE_TRANSLATIONS = {
    "en": {
        "periodTracker": {
            "title": "Period & Women Health",
            "subtitle": "Track your cycle, understand your body",
            "privacyMode": {
                "enabled": "Health Tracker",
                "subtitle": "Your personal health companion"
            },
            "tabs": {
                "aiCompanion": "AI Companion",
                "tracker": "Period Tracker",
                "calendar": "Calendar",
                "analytics": "Analytics"
            },
            "aiCompanion": {
                "askAI": {
                    "title": "Ask AI About Period Health",
                    "intro": "Get instant answers to your period health questions",
                    "welcome": "Ask me anything about periods and women's health!",
                    "placeholder": "Ask your question here...",
                    "send": "Send",
                    "sampleQuestions": {
                        "q1": "Why do I get cramps?",
                        "q2": "Why is my period late?",
                        "q3": "What foods help during periods?",
                        "q4": "What is PMS?"
                    }
                },
                "painRelief": {
                    "title": "Smart Pain Relief Assistant",
                    "subtitle": "Click on any symptom to get personalized relief recommendations"
                },
                "selfCare": {
                    "title": "Self-Care Guidance",
                    "subtitle": "Quick and practical self-care tips"
                }
            },
            "smartRelief": {
                "title": "Smart Pain Relief Assistant",
                "subtitle": "Click on any symptom to get personalized relief recommendations",
                "reliefFor": "Relief Solutions for",
                "doThese": "Do These:",
                "medications": "Safe Medications:",
                "dontDo": "Don't Do These:"
            },
            "calendar": {
                "legend": {
                    "periodDays": "Period Days",
                    "fertileWindow": "Fertile Window",
                    "ovulationDay": "Ovulation Day",
                    "loggedData": "Logged Data"
                },
                "weekdays": {
                    "sun": "Sun",
                    "mon": "Mon",
                    "tue": "Tue",
                    "wed": "Wed",
                    "thu": "Thu",
                    "fri": "Fri",
                    "sat": "Sat"
                },
                "clickToLog": "Click any day to log your mood, symptoms, and notes for that date",
                "setDateFirst": "Set Your Last Period Date First",
                "setDateDesc": "To see period predictions and color-coded days on the calendar, please go to the \"Period Tracker\" tab and set your last period start date.",
                "goToTracker": "Go to Period Tracker"
            },
            "analytics": {
                "title": "Analytics",
                "howItWorks": "How Analytics Works",
                "step1": {
                    "title": "Set Your Cycle Info",
                    "desc": "Go to \"Period Tracker\" and set your last period date"
                },
                "step2": {
                    "title": "Log Daily Data",
                    "desc": "Track mood, symptoms, water intake daily"
                },
                "step3": {
                    "title": "See Insights",
                    "desc": "After 7+ days, you'll see patterns and predictions"
                },
                "noData": {
                    "title": "No Data Yet",
                    "desc": "Start logging your daily mood, symptoms, and water intake to see personalized insights!",
                    "button": "Go to Period Tracker"
                },
                "emergencyAlert": {
                    "title": "Health Alert - Medical Attention May Be Required",
                    "detected": "We've detected concerning symptoms:",
                    "action": "Recommended Action:",
                    "consult": "Please consult a gynecologist for proper evaluation.",
                    "findDoctor": "Find a Doctor Near You"
                },
                "cycleOverview": "Cycle Overview",
                "currentPhase": "Current Cycle Phase",
                "symptomPatterns": "Symptom Patterns & Insights",
                "moodTrends": "Mood Trends",
                "commonSymptoms": "Common Symptoms"
            },
            "modal": {
                "dayDetail": {
                    "title": "Log Your Day"
                },
                "meditation": {
                    "title": "Guided Breathing Exercise",
                    "breatheIn": "Breathe in for 4 seconds...",
                    "hold": "Hold for 4 seconds...",
                    "breatheOut": "Breathe out for 4 seconds...",
                    "repeat": "Repeat 5 times",
                    "message1": "You're doing great. Take your time and focus on your breath.",
                    "message2": "Remember: It's okay to feel what you're feeling. This too shall pass."
                },
                "periodPrep": {
                    "title": "Period Preparation Reminder",
                    "message": "Your period is expected in a few days. Here's your preparation checklist:",
                    "checklist": {
                        "item1": "Stock up on sanitary products",
                        "item2": "Prepare pain relief options (heating pad, medications)",
                        "item3": "Stay well-hydrated",
                        "item4": "Plan balanced, nutritious meals",
                        "item5": "Ensure adequate rest and sleep",
                        "item6": "Prepare comfortable clothes"
                    },
                    "button": "Got it, thanks!"
                }
            },
            "messages": {
                "logSaved": "Today's log saved successfully!",
                "setDateForPredictions": "Set your last period date in the \"Period Tracker\" tab to see cycle predictions"
            },
            "buttons": {
                "save": "Save",
                "cancel": "Cancel",
                "saveTodayLog": "Save Today's Log",
                "tryNow": "Try Now"
            },
            "phases": {
                "menstrual": "Menstrual Phase",
                "follicular": "Follicular Phase",
                "ovulation": "Ovulation Phase",
                "luteal": "Luteal Phase",
                "unknown": "Unknown Phase"
            },
            "phaseTips": {
                "menstrual1": "Low-energy activities recommended",
                "menstrual2": "Focus on rest and gentle movement",
                "follicular1": "High productivity phase",
                "follicular2": "Great time for intense workouts and new projects",
                "ovulation1": "Peak energy phase",
                "ovulation2": "Perfect for social activities and challenging tasks",
                "luteal1": "Rest and recovery phase",
                "luteal2": "Focus on stress reduction and balanced nutrition"
            },
            "insights": {
                "cramps": "Cramps most frequently occur on Day 1-2 of your cycle.",
                "lowEnergy": "You tend to feel low energy before your period.",
                "hydration": "Your hydration levels are often low. Aim for 8-10 glasses daily.",
                "fatigue": "You frequently experience fatigue. Consider iron-rich foods.",
                "headache": "Headaches are common in your cycle. Stay hydrated and rest."
            },
            "waterGoal": "Goal: 8-10 glasses per day",
            "waterHelp": "Staying hydrated reduces bloating and helps with cramps",
            "logged": "Logged",
            "daysLabel": "days"
        }
    },
    "hi": {
        "periodTracker": {
            "title": "पीरियड और महिला स्वास्थ्य",
            "subtitle": "अपने चक्र को ट्रैक करें, अपने शरीर को समझें",
            "privacyMode": {
                "enabled": "स्वास्थ्य ट्रैकर",
                "subtitle": "आपका व्यक्तिगत स्वास्थ्य साथी"
            },
            "tabs": {
                "aiCompanion": "एआई साथी",
                "tracker": "पीरियड ट्रैकर",
                "calendar": "कैलेंडर",
                "analytics": "विश्लेषण"
            },
            "aiCompanion": {
                "askAI": {
                    "title": "पीरियड स्वास्थ्य के बारे में एआई से पूछें",
                    "intro": "अपने पीरियड स्वास्थ्य प्रश्नों के तुरंत उत्तर प्राप्त करें",
                    "welcome": "मुझसे पीरियड और महिलाओं के स्वास्थ्य के बारे में कुछ भी पूछें!",
                    "placeholder": "यहां अपना प्रश्न पूछें...",
                    "send": "भेजें",
                    "sampleQuestions": {
                        "q1": "मुझे ऐंठन क्यों होती है?",
                        "q2": "मेरा पीरियड देर से क्यों है?",
                        "q3": "पीरियड के दौरान कौन से खाद्य पदार्थ मदद करते हैं?",
                        "q4": "PMS क्या है?"
                    }
                },
                "painRelief": {
                    "title": "स्मार्ट दर्द राहत सहायक",
                    "subtitle": "व्यक्तिगत राहत सिफारिशें प्राप्त करने के लिए किसी भी लक्षण पर क्लिक करें"
                },
                "selfCare": {
                    "title": "स्व-देखभाल मार्गदर्शन",
                    "subtitle": "त्वरित और व्यावहारिक स्व-देखभाल युक्तियाँ"
                }
            },
            "smartRelief": {
                "title": "स्मार्ट दर्द राहत सहायक",
                "subtitle": "व्यक्तिगत राहत सिफारिशें प्राप्त करने के लिए किसी भी लक्षण पर क्लिक करें",
                "reliefFor": "के लिए राहत समाधान",
                "doThese": "ये करें:",
                "medications": "सुरक्षित दवाएं:",
                "dontDo": "ये न करें:"
            },
            "calendar": {
                "legend": {
                    "periodDays": "पीरियड के दिन",
                    "fertileWindow": "उपजाऊ खिड़की",
                    "ovulationDay": "ओव्यूलेशन दिवस",
                    "loggedData": "लॉग किया गया डेटा"
                },
                "weekdays": {
                    "sun": "रवि",
                    "mon": "सोम",
                    "tue": "मंगल",
                    "wed": "बुध",
                    "thu": "गुरु",
                    "fri": "शुक्र",
                    "sat": "शनि"
                },
                "clickToLog": "उस तारीख के लिए अपना मूड, लक्षण और नोट्स लॉग करने के लिए किसी भी दिन पर क्लिक करें",
                "setDateFirst": "पहले अपनी अंतिम पीरियड तारीख सेट करें",
                "setDateDesc": "कैलेंडर पर पीरियड की भविष्यवाणी और रंग-कोडित दिन देखने के लिए, कृपया \"पीरियड ट्रैकर\" टैब पर जाएं और अपनी अंतिम पीरियड शुरू होने की तारीख सेट करें।",
                "goToTracker": "पीरियड ट्रैकर पर जाएं"
            },
            "analytics": {
                "title": "विश्लेषण",
                "howItWorks": "विश्लेषण कैसे काम करता है",
                "step1": {
                    "title": "अपनी चक्र जानकारी सेट करें",
                    "desc": "\"पीरियड ट्रैकर\" पर जाएं और अपनी अंतिम पीरियड तारीख सेट करें"
                },
                "step2": {
                    "title": "दैनिक डेटा लॉग करें",
                    "desc": "मूड, लक्षण, पानी का सेवन प्रतिदिन ट्रैक करें"
                },
                "step3": {
                    "title": "अंतर्दृष्टि देखें",
                    "desc": "7+ दिनों के बाद, आप पैटर्न और भविष्यवाणियां देखेंगे"
                },
                "noData": {
                    "title": "अभी तक कोई डेटा नहीं",
                    "desc": "व्यक्तिगत अंतर्दृष्टि देखने के लिए अपने दैनिक मूड, लक्षण और पानी के सेवन को लॉग करना शुरू करें!",
                    "button": "पीरियड ट्रैकर पर जाएं"
                },
                "emergencyAlert": {
                    "title": "स्वास्थ्य चेतावनी - चिकित्सा ध्यान की आवश्यकता हो सकती है",
                    "detected": "हमने चिंताजनक लक्षणों का पता लगाया है:",
                    "action": "अनुशंसित कार्रवाई:",
                    "consult": "कृपया उचित मूल्यांकन के लिए स्त्री रोग विशेषज्ञ से परामर्श लें।",
                    "findDoctor": "अपने पास डॉक्टर खोजें"
                },
                "cycleOverview": "चक्र अवलोकन",
                "currentPhase": "वर्तमान चक्र चरण",
                "symptomPatterns": "लक्षण पैटर्न और अंतर्दृष्टि",
                "moodTrends": "मूड रुझान",
                "commonSymptoms": "सामान्य लक्षण"
            },
            "modal": {
                "dayDetail": {
                    "title": "अपना दिन लॉग करें"
                },
                "meditation": {
                    "title": "निर्देशित श्वास व्यायाम",
                    "breatheIn": "4 सेकंड के लिए सांस लें...",
                    "hold": "4 सेकंड के लिए रोकें...",
                    "breatheOut": "4 सेकंड के लिए सांस छोड़ें...",
                    "repeat": "5 बार दोहराएं",
                    "message1": "आप बहुत अच्छा कर रहे हैं। अपना समय लें और अपनी सांस पर ध्यान दें।",
                    "message2": "याद रखें: जो आप महसूस कर रहे हैं वह ठीक है। यह भी गुजर जाएगा।"
                },
                "periodPrep": {
                    "title": "पीरियड तैयारी अनुस्मारक",
                    "message": "आपका पीरियड कुछ दिनों में अपेक्षित है। यहां आपकी तैयारी चेकलिस्ट है:",
                    "checklist": {
                        "item1": "सैनिटरी उत्पादों का स्टॉक करें",
                        "item2": "दर्द राहत विकल्प तैयार करें (हीटिंग पैड, दवाएं)",
                        "item3": "अच्छी तरह से हाइड्रेटेड रहें",
                        "item4": "संतुलित, पौष्टिक भोजन की योजना बनाएं",
                        "item5": "पर्याप्त आराम और नींद सुनिश्चित करें",
                        "item6": "आरामदायक कपड़े तैयार करें"
                    },
                    "button": "समझ गया, धन्यवाद!"
                }
            },
            "messages": {
                "logSaved": "आज का लॉग सफलतापूर्वक सहेजा गया!",
                "setDateForPredictions": "चक्र भविष्यवाणियां देखने के लिए \"पीरियड ट्रैकर\" टैब में अपनी अंतिम पीरियड तारीख सेट करें"
            },
            "buttons": {
                "save": "सहेजें",
                "cancel": "रद्द करें",
                "saveTodayLog": "आज का लॉग सहेजें",
                "tryNow": "अभी आज़माएं"
            },
            "phases": {
                "menstrual": "मासिक धर्म चरण",
                "follicular": "फॉलिक्युलर चरण",
                "ovulation": "ओव्यूलेशन चरण",
                "luteal": "ल्यूटियल चरण",
                "unknown": "अज्ञात चरण"
            },
            "phaseTips": {
                "menstrual1": "कम-ऊर्जा गतिविधियों की सिफारिश की जाती है",
                "menstrual2": "आराम और हल्की गतिविधि पर ध्यान दें",
                "follicular1": "उच्च उत्पादकता चरण",
                "follicular2": "तीव्र वर्कआउट और नई परियोजनाओं के लिए बढ़िया समय",
                "ovulation1": "चरम ऊर्जा चरण",
                "ovulation2": "सामाजिक गतिविधियों और चुनौतीपूर्ण कार्यों के लिए एकदम सही",
                "luteal1": "आराम और रिकवरी चरण",
                "luteal2": "तनाव में कमी और संतुलित पोषण पर ध्यान दें"
            },
            "insights": {
                "cramps": "ऐंठन अक्सर आपके चक्र के दिन 1-2 पर होती है।",
                "lowEnergy": "आप अपने पीरियड से पहले कम ऊर्जा महसूस करते हैं।",
                "hydration": "आपका हाइड्रेशन स्तर अक्सर कम होता है। प्रतिदिन 8-10 गिलास का लक्ष्य रखें।",
                "fatigue": "आप अक्सर थकान का अनुभव करते हैं। आयरन युक्त खाद्य पदार्थों पर विचार करें।",
                "headache": "आपके चक्र में सिरदर्द आम है। हाइड्रेटेड रहें और आराम करें।"
            },
            "waterGoal": "लक्ष्य: प्रतिदिन 8-10 गिलास",
            "waterHelp": "हाइड्रेटेड रहने से सूजन कम होती है और ऐंठन में मदद मिलती है",
            "logged": "लॉग किया गया",
            "daysLabel": "दिन"
        }
    }
}

def merge_translations(existing, new):
    """Recursively merge new translations into existing"""
    for key, value in new.items():
        if key in existing and isinstance(existing[key], dict) and isinstance(value, dict):
            merge_translations(existing[key], value)
        else:
            existing[key] = value

def update_translation_file(lang_code):
    """Update translation file with new keys"""
    file_path = f'src/translations/{lang_code}.json'
    
    try:
        # Read existing translations
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        # Merge new translations
        if lang_code in COMPLETE_TRANSLATIONS:
            merge_translations(data, COMPLETE_TRANSLATIONS[lang_code])
        
        # Write back
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        
        print(f"✅ Updated {lang_code}.json")
        return True
    except Exception as e:
        print(f"❌ Error updating {lang_code}.json: {e}")
        return False

def main():
    print("🚀 Adding complete Period Tracker translations...")
    print()
    
    # Update both English and Hindi
    for lang in ['en', 'hi']:
        update_translation_file(lang)
    
    print()
    print("✅ All translations added successfully!")
    print("📝 Now update PeriodTracker.tsx to use these translation keys")

if __name__ == '__main__':
    main()
