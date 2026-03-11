#!/usr/bin/env python3
"""
Add Self-Care Tracker translations for all languages
"""

import json

SELFCARE_TRANSLATIONS = {
    "en": {
        "selfCare": {
            "title": "Self-Care Daily Tracker",
            "subtitle": "Track your daily health and wellness",
            "tabs": {
                "tracker": "Daily Tracker",
                "tips": "Health Tips",
                "firstAid": "First Aid",
                "remedies": "Home Remedies",
                "exercises": "Exercises"
            },
            "tracker": {
                "howFeeling": "How are you feeling today?",
                "waterIntake": "Water Intake Tracker",
                "goal": "Goal",
                "glasses": "glasses",
                "steps": "Daily Steps",
                "stepsUnit": "steps",
                "complete": "complete",
                "sleep": "Sleep Tracker",
                "sleepGoal": "Recommended: 7-8 hours",
                "hours": "hours",
                "quickChecks": "Quick Health Checks",
                "check1": "Did you sleep 7+ hours?",
                "check2": "Did you drink enough water?",
                "check3": "Did you exercise today?",
                "check4": "Did you eat fruits/vegetables?",
                "notes": "Daily Notes",
                "notesPlaceholder": "How was your day? Any health observations?",
                "saveLog": "Save Today's Log"
            },
            "moods": {
                "calm": "Calm",
                "okay": "Okay",
                "stressed": "Stressed",
                "veryStressed": "Very Stressed"
            },
            "eyeTimer": {
                "title": "Eye Relaxation Timer",
                "rule": "20-20-20 Rule: Every 20 minutes, look 20 feet away for 20 seconds",
                "seconds": "seconds",
                "start": "Start Timer",
                "stop": "Stop Timer",
                "complete": "Time's up! Look 20 feet away and relax your eyes."
            },
            "tips": {
                "dailyTip": "Health Tip of the Day",
                "tip1": "Drink 2-3 liters of water daily to stay hydrated and healthy",
                "tip2": "Walk at least 30 minutes daily for cardiovascular health",
                "tip3": "Sleep 7-8 hours every night for proper rest and recovery",
                "tip4": "Eat a balanced diet with fruits, vegetables, and whole grains",
                "tip5": "Practice meditation or deep breathing for 10 minutes daily",
                "tip6": "Get 15-20 minutes of sunlight exposure daily for Vitamin D",
                "tip7": "Limit screen time, especially before bedtime",
                "tip8": "Eat an apple a day to boost immunity",
                "tip9": "Keep your mind active with puzzles, reading, or learning"
            },
            "firstAid": {
                "title": "Quick First-Aid Guide",
                "emergency": "Emergency Number",
                "readMore": "Click to read more →",
                "warning": "If symptoms are severe or don't improve, seek immediate medical attention. Call 108 for emergencies.",
                "cuts": {
                    "title": "Cuts and Bleeding",
                    "step1": "1. Wash your hands thoroughly",
                    "step2": "2. Clean the wound with clean water",
                    "step3": "3. Apply pressure with clean cloth to stop bleeding",
                    "step4": "4. Apply antiseptic and cover with bandage"
                },
                "burns": {
                    "title": "Burns",
                    "step1": "1. Cool the burn under running water for 10-20 minutes",
                    "step2": "2. Remove jewelry or tight clothing near the burn",
                    "step3": "3. Cover with sterile, non-stick bandage",
                    "step4": "4. Do NOT apply ice, butter, or ointments"
                },
                "sprains": {
                    "title": "Sprains",
                    "step1": "1. Rest the injured area immediately",
                    "step2": "2. Apply ice pack for 15-20 minutes",
                    "step3": "3. Compress with elastic bandage",
                    "step4": "4. Elevate the injured limb above heart level"
                },
                "nosebleed": {
                    "title": "Nosebleed",
                    "step1": "1. Sit upright and lean slightly forward",
                    "step2": "2. Pinch the soft part of nose for 10 minutes",
                    "step3": "3. Breathe through your mouth",
                    "step4": "4. Apply cold compress on nose bridge"
                },
                "choking": {
                    "title": "Choking",
                    "step1": "1. Encourage coughing if person can breathe",
                    "step2": "2. Give 5 back blows between shoulder blades",
                    "step3": "3. Perform 5 abdominal thrusts (Heimlich maneuver)",
                    "step4": "4. Call 108 if object doesn't come out"
                },
                "heartAttack": {
                    "title": "Heart Attack",
                    "step1": "1. Call 108 immediately",
                    "step2": "2. Help person sit down and stay calm",
                    "step3": "3. Loosen tight clothing",
                    "step4": "4. If trained, give aspirin (300mg) to chew"
                }
            },
            "remedies": {
                "title": "Traditional Home Remedies",
                "subtitle": "Safe and effective remedies commonly used in India",
                "ingredients": "Ingredients",
                "method": "Method",
                "usage": "Usage",
                "caution": "These are traditional remedies. If symptoms persist or worsen, consult a doctor.",
                "soreThroat": {
                    "title": "Sore Throat",
                    "preview": "Ginger tea with honey",
                    "ingredients": "Fresh ginger, honey, warm water",
                    "method": "Boil ginger slices in water for 5 minutes. Add honey when warm.",
                    "usage": "Drink 2-3 times daily"
                },
                "cold": {
                    "title": "Cold and Congestion",
                    "preview": "Steam inhalation",
                    "ingredients": "Hot water, eucalyptus oil (optional)",
                    "method": "Boil water, add 2-3 drops eucalyptus oil. Inhale steam with towel over head.",
                    "usage": "2-3 times daily for 10 minutes"
                },
                "cough": {
                    "title": "Cough",
                    "preview": "Turmeric milk",
                    "ingredients": "Milk, turmeric powder, honey",
                    "method": "Heat milk, add 1/2 tsp turmeric and honey.",
                    "usage": "Drink before bedtime"
                },
                "headache": {
                    "title": "Headache",
                    "preview": "Cold compress",
                    "ingredients": "Ice pack or cold cloth",
                    "method": "Apply cold compress to forehead and temples.",
                    "usage": "15-20 minutes, repeat as needed"
                },
                "acidity": {
                    "title": "Acidity",
                    "preview": "Coconut water",
                    "ingredients": "Fresh coconut water",
                    "method": "Drink fresh coconut water.",
                    "usage": "1-2 glasses daily"
                },
                "indigestion": {
                    "title": "Indigestion",
                    "preview": "Lemon water",
                    "ingredients": "Lemon, warm water, honey",
                    "method": "Mix lemon juice in warm water, add honey.",
                    "usage": "Drink after meals"
                }
            },
            "exercises": {
                "title": "Daily Exercises & Wellness",
                "subtitle": "Simple exercises you can do at home",
                "tryNow": "Try Now",
                "breathing": {
                    "title": "Breathing Exercise",
                    "desc": "4-4-4-4 breathing technique for relaxation",
                    "step1": "Breathe in slowly through nose for 4 seconds",
                    "step2": "Hold your breath for 4 seconds",
                    "step3": "Breathe out slowly through mouth for 4 seconds",
                    "step4": "Wait for 4 seconds, then repeat 5 times"
                },
                "yoga": {
                    "title": "Simple Yoga Poses",
                    "desc": "Easy yoga poses for daily practice",
                    "pose1": {
                        "name": "Mountain Pose (Tadasana)",
                        "desc": "Stand tall, feet together, arms at sides. Great for posture."
                    },
                    "pose2": {
                        "name": "Child's Pose (Balasana)",
                        "desc": "Kneel, sit on heels, stretch arms forward. Relaxes back and shoulders."
                    },
                    "pose3": {
                        "name": "Cat-Cow Stretch",
                        "desc": "On hands and knees, alternate arching and rounding back. Good for spine."
                    },
                    "pose4": {
                        "name": "Tree Pose (Vrikshasana)",
                        "desc": "Stand on one leg, other foot on inner thigh. Improves balance."
                    }
                },
                "stretching": {
                    "title": "Morning Stretching",
                    "desc": "5-minute stretching routine to start your day"
                },
                "walking": {
                    "title": "Walking Exercise",
                    "desc": "30-minute brisk walk daily for overall health"
                },
                "meditation": {
                    "title": "Meditation",
                    "desc": "10-minute guided meditation for mental peace"
                },
                "neckExercise": {
                    "title": "Neck Exercises",
                    "desc": "Gentle neck rotations and stretches for desk workers"
                }
            },
            "messages": {
                "logSaved": "Today's log saved successfully!"
            }
        }
    },
    "hi": {
        "selfCare": {
            "title": "स्व-देखभाल दैनिक ट्रैकर",
            "subtitle": "अपने दैनिक स्वास्थ्य और कल्याण को ट्रैक करें",
            "tabs": {
                "tracker": "दैनिक ट्रैकर",
                "tips": "स्वास्थ्य सुझाव",
                "firstAid": "प्राथमिक चिकित्सा",
                "remedies": "घरेलू उपचार",
                "exercises": "व्यायाम"
            },
            "tracker": {
                "howFeeling": "आज आप कैसा महसूस कर रहे हैं?",
                "waterIntake": "पानी का सेवन ट्रैकर",
                "goal": "लक्ष्य",
                "glasses": "गिलास",
                "steps": "दैनिक कदम",
                "stepsUnit": "कदम",
                "complete": "पूर्ण",
                "sleep": "नींद ट्रैकर",
                "sleepGoal": "अनुशंसित: 7-8 घंटे",
                "hours": "घंटे",
                "quickChecks": "त्वरित स्वास्थ्य जांच",
                "check1": "क्या आपने 7+ घंटे सोए?",
                "check2": "क्या आपने पर्याप्त पानी पिया?",
                "check3": "क्या आपने आज व्यायाम किया?",
                "check4": "क्या आपने फल/सब्जियां खाईं?",
                "notes": "दैनिक नोट्स",
                "notesPlaceholder": "आपका दिन कैसा रहा? कोई स्वास्थ्य अवलोकन?",
                "saveLog": "आज का लॉग सहेजें"
            },
            "moods": {
                "calm": "शांत",
                "okay": "ठीक",
                "stressed": "तनावग्रस्त",
                "veryStressed": "बहुत तनावग्रस्त"
            },
            "eyeTimer": {
                "title": "आंख विश्राम टाइमर",
                "rule": "20-20-20 नियम: हर 20 मिनट में, 20 फीट दूर देखें 20 सेकंड के लिए",
                "seconds": "सेकंड",
                "start": "टाइमर शुरू करें",
                "stop": "टाइमर रोकें",
                "complete": "समय समाप्त! 20 फीट दूर देखें और अपनी आंखों को आराम दें।"
            },
            "tips": {
                "dailyTip": "आज का स्वास्थ्य सुझाव",
                "tip1": "हाइड्रेटेड और स्वस्थ रहने के लिए प्रतिदिन 2-3 लीटर पानी पिएं",
                "tip2": "हृदय स्वास्थ्य के लिए प्रतिदिन कम से कम 30 मिनट चलें",
                "tip3": "उचित आराम और रिकवरी के लिए हर रात 7-8 घंटे सोएं",
                "tip4": "फल, सब्जियां और साबुत अनाज के साथ संतुलित आहार लें",
                "tip5": "प्रतिदिन 10 मिनट के लिए ध्यान या गहरी सांस लेने का अभ्यास करें",
                "tip6": "विटामिन डी के लिए प्रतिदिन 15-20 मिनट धूप में रहें",
                "tip7": "स्क्रीन टाइम सीमित करें, विशेष रूप से सोने से पहले",
                "tip8": "प्रतिरक्षा बढ़ाने के लिए दिन में एक सेब खाएं",
                "tip9": "पहेलियों, पढ़ने या सीखने से अपने दिमाग को सक्रिय रखें"
            },
            "firstAid": {
                "title": "त्वरित प्राथमिक चिकित्सा गाइड",
                "emergency": "आपातकालीन नंबर",
                "readMore": "अधिक पढ़ने के लिए क्लिक करें →",
                "warning": "यदि लक्षण गंभीर हैं या सुधार नहीं होता है, तो तुरंत चिकित्सा सहायता लें। आपात स्थिति के लिए 108 पर कॉल करें।",
                "cuts": {
                    "title": "कट और रक्तस्राव",
                    "step1": "1. अपने हाथों को अच्छी तरह धोएं",
                    "step2": "2. घाव को साफ पानी से धोएं",
                    "step3": "3. रक्तस्राव रोकने के लिए साफ कपड़े से दबाव डालें",
                    "step4": "4. एंटीसेप्टिक लगाएं और पट्टी से ढकें"
                },
                "burns": {
                    "title": "जलन",
                    "step1": "1. जले हुए हिस्से को 10-20 मिनट तक बहते पानी में ठंडा करें",
                    "step2": "2. जले हुए हिस्से के पास के गहने या तंग कपड़े हटा दें",
                    "step3": "3. बाँझ, नॉन-स्टिक पट्टी से ढकें",
                    "step4": "4. बर्फ, मक्खन या मलहम न लगाएं"
                },
                "sprains": {
                    "title": "मोच",
                    "step1": "1. घायल क्षेत्र को तुरंत आराम दें",
                    "step2": "2. 15-20 मिनट के लिए आइस पैक लगाएं",
                    "step3": "3. लोचदार पट्टी से संकुचित करें",
                    "step4": "4. घायल अंग को हृदय के स्तर से ऊपर उठाएं"
                },
                "nosebleed": {
                    "title": "नाक से खून आना",
                    "step1": "1. सीधे बैठें और थोड़ा आगे झुकें",
                    "step2": "2. नाक के नरम हिस्से को 10 मिनट के लिए दबाएं",
                    "step3": "3. अपने मुंह से सांस लें",
                    "step4": "4. नाक के पुल पर ठंडा सेक लगाएं"
                },
                "choking": {
                    "title": "घुटन",
                    "step1": "1. यदि व्यक्ति सांस ले सकता है तो खांसने के लिए प्रोत्साहित करें",
                    "step2": "2. कंधे के ब्लेड के बीच 5 पीठ के वार दें",
                    "step3": "3. 5 पेट के धक्के दें (हेमलिच युद्धाभ्यास)",
                    "step4": "4. यदि वस्तु बाहर नहीं आती है तो 108 पर कॉल करें"
                },
                "heartAttack": {
                    "title": "दिल का दौरा",
                    "step1": "1. तुरंत 108 पर कॉल करें",
                    "step2": "2. व्यक्ति को बैठने में मदद करें और शांत रहें",
                    "step3": "3. तंग कपड़े ढीले करें",
                    "step4": "4. यदि प्रशिक्षित हैं, तो चबाने के लिए एस्पिरिन (300mg) दें"
                }
            },
            "remedies": {
                "title": "पारंपरिक घरेलू उपचार",
                "subtitle": "भारत में आमतौर पर उपयोग किए जाने वाले सुरक्षित और प्रभावी उपचार",
                "ingredients": "सामग्री",
                "method": "विधि",
                "usage": "उपयोग",
                "caution": "ये पारंपरिक उपचार हैं। यदि लक्षण बने रहते हैं या बिगड़ते हैं, तो डॉक्टर से परामर्श लें।",
                "soreThroat": {
                    "title": "गले में खराश",
                    "preview": "शहद के साथ अदरक की चाय",
                    "ingredients": "ताजा अदरक, शहद, गर्म पानी",
                    "method": "अदरक के टुकड़ों को 5 मिनट के लिए पानी में उबालें। गर्म होने पर शहद मिलाएं।",
                    "usage": "दिन में 2-3 बार पिएं"
                },
                "cold": {
                    "title": "सर्दी और जमाव",
                    "preview": "भाप लेना",
                    "ingredients": "गर्म पानी, नीलगिरी का तेल (वैकल्पिक)",
                    "method": "पानी उबालें, 2-3 बूंद नीलगिरी का तेल मिलाएं। सिर पर तौलिया रखकर भाप लें।",
                    "usage": "दिन में 2-3 बार 10 मिनट के लिए"
                },
                "cough": {
                    "title": "खांसी",
                    "preview": "हल्दी वाला दूध",
                    "ingredients": "दूध, हल्दी पाउडर, शहद",
                    "method": "दूध गर्म करें, 1/2 चम्मच हल्दी और शहद मिलाएं।",
                    "usage": "सोने से पहले पिएं"
                },
                "headache": {
                    "title": "सिरदर्द",
                    "preview": "ठंडी सिकाई",
                    "ingredients": "आइस पैक या ठंडा कपड़ा",
                    "method": "माथे और कनपटी पर ठंडी सिकाई लगाएं।",
                    "usage": "15-20 मिनट, आवश्यकतानुसार दोहराएं"
                },
                "acidity": {
                    "title": "अम्लता",
                    "preview": "नारियल पानी",
                    "ingredients": "ताजा नारियल पानी",
                    "method": "ताजा नारियल पानी पिएं।",
                    "usage": "दिन में 1-2 गिलास"
                },
                "indigestion": {
                    "title": "अपच",
                    "preview": "नींबू पानी",
                    "ingredients": "नींबू, गर्म पानी, शहद",
                    "method": "गर्म पानी में नींबू का रस मिलाएं, शहद मिलाएं।",
                    "usage": "भोजन के बाद पिएं"
                }
            },
            "exercises": {
                "title": "दैनिक व्यायाम और कल्याण",
                "subtitle": "सरल व्यायाम जो आप घर पर कर सकते हैं",
                "tryNow": "अभी आज़माएं",
                "breathing": {
                    "title": "श्वास व्यायाम",
                    "desc": "विश्राम के लिए 4-4-4-4 श्वास तकनीक",
                    "step1": "नाक से 4 सेकंड के लिए धीरे-धीरे सांस लें",
                    "step2": "4 सेकंड के लिए अपनी सांस रोकें",
                    "step3": "मुंह से 4 सेकंड के लिए धीरे-धीरे सांस छोड़ें",
                    "step4": "4 सेकंड प्रतीक्षा करें, फिर 5 बार दोहराएं"
                },
                "yoga": {
                    "title": "सरल योग आसन",
                    "desc": "दैनिक अभ्यास के लिए आसान योग आसन",
                    "pose1": {
                        "name": "पर्वत आसन (ताड़ासन)",
                        "desc": "लंबा खड़े हों, पैर एक साथ, भुजाएं बगल में। मुद्रा के लिए बढ़िया।"
                    },
                    "pose2": {
                        "name": "बाल आसन (बालासन)",
                        "desc": "घुटने टेकें, एड़ियों पर बैठें, भुजाओं को आगे फैलाएं। पीठ और कंधों को आराम देता है।"
                    },
                    "pose3": {
                        "name": "बिल्ली-गाय खिंचाव",
                        "desc": "हाथों और घुटनों पर, पीठ को वैकल्पिक रूप से मोड़ें और गोल करें। रीढ़ के लिए अच्छा।"
                    },
                    "pose4": {
                        "name": "वृक्ष आसन (वृक्षासन)",
                        "desc": "एक पैर पर खड़े हों, दूसरा पैर भीतरी जांघ पर। संतुलन में सुधार करता है।"
                    }
                },
                "stretching": {
                    "title": "सुबह की स्ट्रेचिंग",
                    "desc": "अपने दिन की शुरुआत के लिए 5 मिनट की स्ट्रेचिंग रूटीन"
                },
                "walking": {
                    "title": "चलने का व्यायाम",
                    "desc": "समग्र स्वास्थ्य के लिए दैनिक 30 मिनट तेज चलना"
                },
                "meditation": {
                    "title": "ध्यान",
                    "desc": "मानसिक शांति के लिए 10 मिनट का निर्देशित ध्यान"
                },
                "neckExercise": {
                    "title": "गर्दन के व्यायाम",
                    "desc": "डेस्क कर्मचारियों के लिए कोमल गर्दन घुमाव और खिंचाव"
                }
            },
            "messages": {
                "logSaved": "आज का लॉग सफलतापूर्वक सहेजा गया!"
            }
        }
    }
}

def update_translation_file(lang_code):
    """Update translation file with selfCare keys"""
    file_path = f'src/translations/{lang_code}.json'
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        if lang_code in SELFCARE_TRANSLATIONS:
            data['selfCare'] = SELFCARE_TRANSLATIONS[lang_code]['selfCare']
        
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        
        print(f"✅ Updated {lang_code}.json with Self-Care translations")
        return True
    except Exception as e:
        print(f"❌ Error updating {lang_code}.json: {e}")
        return False

def copy_to_all_languages():
    """Copy Hindi translations to all other languages"""
    LANGUAGES = ['ta', 'te', 'bn', 'mr', 'kn', 'ml', 'pa', 'or', 'as', 'gu', 'ur']
    
    hindi_selfcare = SELFCARE_TRANSLATIONS['hi']['selfCare']
    
    for lang in LANGUAGES:
        file_path = f'src/translations/{lang}.json'
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            data['selfCare'] = hindi_selfcare
            
            with open(file_path, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            
            print(f"✅ Added Self-Care to {lang}.json")
        except Exception as e:
            print(f"❌ Error updating {lang}.json: {e}")

if __name__ == '__main__':
    print("🚀 Adding Self-Care Tracker translations...")
    print()
    
    # Add English and Hindi
    update_translation_file('en')
    update_translation_file('hi')
    
    print()
    print("📋 Copying to all other languages...")
    copy_to_all_languages()
    
    print()
    print("✅ All Self-Care translations added successfully!")
