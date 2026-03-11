import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { localizeNumber } from '../utils/numberLocalization';
import { patientDataService, ConversationMessage } from '../services/patientDataService';
import './Chatbot.css';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  time: string;
  isTyping?: boolean;
}

// Enhanced Medical Response Service with Symptom-Based Doctor Recommendations
const getMedicalResponse = (userMessage: string, language: string): string => {
  const lowerMessage = userMessage.toLowerCase();
  
  // Enhanced symptom-based doctor recommendations (English only)
  if (language === 'en') {
    // Neurological (Brain & Nerves)
    if (lowerMessage.includes('headache') || lowerMessage.includes('migraine') || lowerMessage.includes('dizziness') || 
        lowerMessage.includes('seizure') || lowerMessage.includes('memory loss') || lowerMessage.includes('confusion') ||
        lowerMessage.includes('numbness') || lowerMessage.includes('tingling') || lowerMessage.includes('weakness') ||
        lowerMessage.includes('tremor') || lowerMessage.includes('stroke') || lowerMessage.includes('epilepsy')) {
      return `I understand you're experiencing these symptoms. Let me help you with some guidance.

**Possible Medical Condition**
This could be tension headache, migraine, or other neurological conditions. This is not a final diagnosis.

**Recommended Specialist**
Neurologist or General Physician for initial evaluation.

**General Guidance**
Rest in a quiet, dark room. Stay hydrated with water. Avoid bright lights and loud sounds. Apply cold or warm compress to head or neck.

**Common Medicines (General Guidance Only)**
Paracetamol 500mg every 6 hours or Ibuprofen 400mg every 8 hours. These are general suggestions only, not prescriptions.

**Basic Precautions**
Do not drive if feeling dizzy. Have someone stay with you if symptoms are severe. Keep track of when symptoms occur.

**Emergency Warning**
Seek immediate medical help if you have sudden severe headache, headache with fever and stiff neck, loss of consciousness, difficulty speaking, or vision changes. Call 108 for emergencies.

Please consult a doctor for proper diagnosis and treatment. This is general guidance only.`;
    }

    // Cardiovascular (Heart & Blood)
    if (lowerMessage.includes('chest pain') || lowerMessage.includes('heart') || lowerMessage.includes('palpitation') ||
        lowerMessage.includes('shortness of breath') || lowerMessage.includes('high blood pressure') || 
        lowerMessage.includes('low blood pressure') || lowerMessage.includes('irregular heartbeat') ||
        lowerMessage.includes('swelling') || lowerMessage.includes('fatigue') || lowerMessage.includes('ankle swelling')) {
      return `I understand you're experiencing these symptoms. Let me help you with some guidance.

**Possible Medical Condition**
This could be heart palpitations, high blood pressure, or other cardiovascular conditions. This is not a final diagnosis.

**Recommended Specialist**
Cardiologist or General Physician for initial evaluation.

**General Guidance**
Rest and avoid heavy physical activity. Sit upright if having breathing difficulty. Stay calm and breathe slowly. Monitor blood pressure if possible.

**Common Medicines (General Guidance Only)**
For general discomfort, Paracetamol 500mg. Do not take any heart medications without doctor's advice. These are general suggestions only, not prescriptions.

**Basic Precautions**
Limit salt in food. Avoid smoking and alcohol. Do not do strenuous exercise. Keep a record of symptoms.

**Emergency Warning**
Seek immediate medical help if you have severe chest pain, difficulty breathing, pain in arm or jaw, rapid heartbeat, fainting, or sudden severe swelling. Call 108 for emergencies.

Please consult a cardiologist for proper diagnosis and treatment. This is general guidance only.`;
    }

    // Respiratory (Lungs & Airways)
    if (lowerMessage.includes('cough') || lowerMessage.includes('breathing') || lowerMessage.includes('asthma') ||
        lowerMessage.includes('wheezing') || lowerMessage.includes('shortness of breath') || 
        lowerMessage.includes('chest congestion') || lowerMessage.includes('pneumonia') ||
        lowerMessage.includes('bronchitis') || lowerMessage.includes('sore throat')) {
      return `I understand you're experiencing these symptoms. Let me help you with some guidance.

**Possible Medical Condition**
This could be common cold, bronchitis, asthma, or other respiratory conditions. This is not a final diagnosis.

**Recommended Specialist**
Pulmonologist or General Physician for initial evaluation.

**General Guidance**
Rest and drink plenty of warm fluids. Use a humidifier or breathe steam from hot water. Sleep with your head elevated. Avoid smoke and strong smells.

**Common Medicines (General Guidance Only)**
Paracetamol 500mg for pain, Cetirizine 10mg for allergies, or cough syrup as needed. These are general suggestions only, not prescriptions.

**Basic Precautions**
Cover mouth when coughing. Wash hands frequently. Stay away from others if you might be contagious. Avoid cold air and dust.

**Emergency Warning**
Seek immediate medical help if you have severe difficulty breathing, chest pain with breathing, coughing up blood, high fever, or blue lips. Call 108 for emergencies.

Please consult a pulmonologist for proper diagnosis and treatment. This is general guidance only.`;
    }

    // Digestive (Stomach & Intestines)
    if (lowerMessage.includes('stomach') || lowerMessage.includes('nausea') || lowerMessage.includes('vomiting') ||
        lowerMessage.includes('diarrhea') || lowerMessage.includes('constipation') || lowerMessage.includes('abdominal pain') ||
        lowerMessage.includes('indigestion') || lowerMessage.includes('heartburn') || lowerMessage.includes('bloating') ||
        lowerMessage.includes('gas') || lowerMessage.includes('cramps')) {
      return `I understand you're experiencing these symptoms. Let me help you with some guidance.

**Possible Medical Condition**
This could be indigestion, gastritis, food poisoning, or other digestive conditions. This is not a final diagnosis.

**Recommended Specialist**
Gastroenterologist or General Physician for initial evaluation.

**General Guidance**
Rest and drink clear fluids like water or clear soup. Eat light foods like rice, bananas, or toast when ready. Apply warm compress to stomach for cramps.

**Common Medicines (General Guidance Only)**
Antacid tablets for heartburn, ORS packets for dehydration, or Paracetamol 500mg for pain. These are general suggestions only, not prescriptions.

**Basic Precautions**
Avoid spicy and oily foods. Eat small meals slowly. Do not lie down right after eating. Drink clean water only.

**Emergency Warning**
Seek immediate medical help if you have severe stomach pain, persistent vomiting, blood in vomit or stool, high fever with stomach pain, or signs of dehydration. Call 108 for emergencies.

Please consult a gastroenterologist for proper diagnosis and treatment. This is general guidance only.`;
    }

    // Musculoskeletal (Bones & Muscles)
    if (lowerMessage.includes('back pain') || lowerMessage.includes('joint pain') || lowerMessage.includes('muscle') ||
        lowerMessage.includes('arthritis') || lowerMessage.includes('fracture') || lowerMessage.includes('sprain') ||
        lowerMessage.includes('stiffness') || lowerMessage.includes('neck pain') || lowerMessage.includes('shoulder pain') ||
        lowerMessage.includes('knee pain') || lowerMessage.includes('hip pain')) {
      return `I understand you're experiencing these symptoms. Let me help you with some guidance.

**Possible Medical Condition**
This could be muscle strain, arthritis, sprain, or other bone and muscle conditions. This is not a final diagnosis.

**Recommended Specialist**
Orthopedic Doctor or General Physician for initial evaluation.

**General Guidance**
Rest the painful area. Apply ice for new injuries or heat for old pain. Do gentle stretching. Maintain good posture when sitting and standing.

**Common Medicines (General Guidance Only)**
Ibuprofen 400mg every 8 hours or Paracetamol 500mg every 6 hours for pain. These are general suggestions only, not prescriptions.

**Basic Precautions**
Do not do activities that increase pain. Use proper lifting techniques. Wear comfortable shoes. Sleep on a firm mattress.

**Emergency Warning**
Seek immediate medical help if you have severe pain after injury, cannot move the area, visible swelling or deformity, numbness or tingling, or signs of infection. Call 108 for emergencies.

Please consult an orthopedic doctor for proper diagnosis and treatment. This is general guidance only.`;
    }

    // Skin, Hair & Nails
    if (lowerMessage.includes('rash') || lowerMessage.includes('itching') || lowerMessage.includes('skin') ||
        lowerMessage.includes('acne') || lowerMessage.includes('eczema') || lowerMessage.includes('psoriasis') ||
        lowerMessage.includes('hair loss') || lowerMessage.includes('nail') || lowerMessage.includes('mole') ||
        lowerMessage.includes('burn') || lowerMessage.includes('cut') || lowerMessage.includes('wound')) {
      return `I understand you're experiencing these symptoms. Let me help you with some guidance.

**Possible Medical Condition**
This could be allergic reaction, eczema, acne, or other skin conditions. This is not a final diagnosis.

**Recommended Specialist**
Dermatologist or General Physician for initial evaluation.

**General Guidance**
Keep the area clean and dry. Do not scratch or pick at the skin. Apply cool, damp cloth for itching. Use gentle, unscented soaps and lotions.

**Common Medicines (General Guidance Only)**
Cetirizine 10mg for itching, Calamine lotion for rashes, or mild hydrocortisone cream. These are general suggestions only, not prescriptions.

**Basic Precautions**
Avoid known allergens. Protect skin from sun. Wear loose, soft clothing. Keep fingernails short to prevent scratching damage.

**Emergency Warning**
Seek immediate medical help if you have difficulty breathing with skin reaction, severe swelling, signs of infection like pus or red streaks, or rapidly spreading rash. Call 108 for emergencies.

Please consult a dermatologist for proper diagnosis and treatment. This is general guidance only.`;
    }

    // Eyes
    if (lowerMessage.includes('eye') || lowerMessage.includes('vision') || lowerMessage.includes('blurry') ||
        lowerMessage.includes('red eyes') || lowerMessage.includes('eye pain') || lowerMessage.includes('dry eyes') ||
        lowerMessage.includes('discharge') || lowerMessage.includes('itchy eyes') || lowerMessage.includes('swelling')) {
      return `I understand you're experiencing these symptoms. Let me help you with some guidance.

**Possible Medical Condition**
This could be eye infection, dry eyes, allergies, or other eye conditions. This is not a final diagnosis.

**Recommended Specialist**
Eye Doctor (Ophthalmologist) or General Physician for initial evaluation.

**General Guidance**
Do not rub or touch your eyes. Rinse with clean water if irritated. Remove contact lenses if wearing them. Rest your eyes from screens and bright lights.

**Common Medicines (General Guidance Only)**
Artificial tears for dry eyes, Cetirizine 10mg for allergies. Do not use any eye drops without doctor's advice. These are general suggestions only, not prescriptions.

**Basic Precautions**
Wash hands before touching eye area. Use clean towels. Do not share eye makeup. Wear sunglasses in bright light.

**Emergency Warning**
Seek immediate medical help if you have sudden vision loss, severe eye pain, light sensitivity with headache, foreign object in eye, or chemical in eyes. Call 108 for emergencies.

Please consult an eye doctor for proper diagnosis and treatment. This is general guidance only.`;
    }

    // ENT (Ear, Nose & Throat)
    if (lowerMessage.includes('ear') || lowerMessage.includes('nose') || lowerMessage.includes('throat') ||
        lowerMessage.includes('hearing') || lowerMessage.includes('sinus') || lowerMessage.includes('congestion') ||
        lowerMessage.includes('runny nose') || lowerMessage.includes('stuffy nose') || lowerMessage.includes('earache') ||
        lowerMessage.includes('tinnitus') || lowerMessage.includes('hoarse')) {
      return `I understand you're experiencing these symptoms. Let me help you with some guidance.

**Possible Medical Condition**
This could be ear infection, sinus congestion, throat infection, or other ENT conditions. This is not a final diagnosis.

**Recommended Specialist**
ENT Doctor (Ear, Nose, Throat specialist) or General Physician for initial evaluation.

**General Guidance**
Drink warm fluids like tea or warm water. Gargle with warm salt water for sore throat. Use saline nasal spray for congestion. Rest your voice if hoarse.

**Common Medicines (General Guidance Only)**
Paracetamol 500mg for pain, Cetirizine 10mg for allergies, or throat lozenges. These are general suggestions only, not prescriptions.

**Basic Precautions**
Do not put anything in your ears. Avoid loud noises if ear problems. Use a humidifier for dry air. Do not smoke.

**Emergency Warning**
Seek immediate medical help if you have severe ear pain with discharge, sudden hearing loss, high fever with throat pain, or difficulty swallowing or breathing. Call 108 for emergencies.

Please consult an ENT doctor for proper diagnosis and treatment. This is general guidance only.`;
    }

    // Mental & Emotional Health
    if (lowerMessage.includes('anxiety') || lowerMessage.includes('depression') || lowerMessage.includes('stress') ||
        lowerMessage.includes('panic') || lowerMessage.includes('mood') || lowerMessage.includes('sleep') ||
        lowerMessage.includes('insomnia') || lowerMessage.includes('worry') || lowerMessage.includes('sad') ||
        lowerMessage.includes('mental health') || lowerMessage.includes('emotional')) {
      return `I understand you're experiencing these concerns. Let me help you with some guidance.

**Possible Medical Condition**
This could be anxiety, depression, stress-related issues, or other mental health conditions. This is not a final diagnosis.

**Recommended Specialist**
Psychiatrist, Psychologist, or General Physician for initial evaluation.

**General Guidance**
Practice deep breathing exercises. Try to maintain regular sleep schedule. Talk to trusted friends or family. Engage in light physical activity like walking.

**Common Medicines (General Guidance Only)**
For sleep issues, consult doctor before taking any medicines. Avoid alcohol and excessive caffeine. These are general suggestions only, not prescriptions.

**Basic Precautions**
Maintain daily routines. Avoid isolation. Limit news and social media if causing stress. Practice relaxation techniques.

**Emergency Warning**
Seek immediate help if you have thoughts of self-harm, severe panic attacks, or complete inability to function. Call mental health helpline or 108 for emergencies.

Please consult a mental health professional for proper support and treatment. This is general guidance only.`;
    }

    // Urinary System
    if (lowerMessage.includes('urine') || lowerMessage.includes('bladder') || lowerMessage.includes('kidney') ||
        lowerMessage.includes('urination') || lowerMessage.includes('burning') || lowerMessage.includes('frequent urination') ||
        lowerMessage.includes('blood in urine') || lowerMessage.includes('uti') || lowerMessage.includes('infection')) {
      return `I understand you're experiencing these symptoms. Let me help you with some guidance.

**Possible Medical Condition**
This could be urinary tract infection, bladder infection, or other urinary conditions. This is not a final diagnosis.

**Recommended Specialist**
Urologist or General Physician for initial evaluation.

**General Guidance**
Drink plenty of water throughout the day. Urinate frequently and do not hold it. Maintain good personal hygiene. Wipe from front to back.

**Common Medicines (General Guidance Only)**
Paracetamol 500mg for pain. Drink cranberry juice if available. Do not take antibiotics without doctor's prescription. These are general suggestions only, not prescriptions.

**Basic Precautions**
Wear cotton underwear. Avoid tight-fitting clothes. Empty bladder completely when urinating. Avoid perfumed soaps in genital area.

**Emergency Warning**
Seek immediate medical help if you have blood in urine, severe pain, high fever with urinary symptoms, complete inability to urinate, or severe back pain. Call 108 for emergencies.

Please consult a urologist for proper diagnosis and treatment. This is general guidance only.`;
    }

    // General Symptoms (Fever, Fatigue, etc.)
    if (lowerMessage.includes('fever') || lowerMessage.includes('tired') || lowerMessage.includes('fatigue') ||
        lowerMessage.includes('weakness') || lowerMessage.includes('loss of appetite') || lowerMessage.includes('weight loss') ||
        lowerMessage.includes('night sweats') || lowerMessage.includes('chills')) {
      return `I understand you're experiencing these symptoms. Let me help you with some guidance.

**Possible Medical Condition**
This could be viral infection, flu, or other general health conditions. This is not a final diagnosis.

**Recommended Specialist**
General Physician for evaluation.

**General Guidance**
Rest and get plenty of sleep. Drink lots of fluids like water and clear soups. Eat light, nutritious foods when possible. Monitor your temperature regularly.

**Common Medicines (General Guidance Only)**
Paracetamol 500mg every 6 hours for fever, ORS packets for dehydration. These are general suggestions only, not prescriptions.

**Basic Precautions**
Do not do heavy work or exercise. Stay away from others if you might be contagious. Wash hands frequently. Get adequate rest.

**Emergency Warning**
Seek immediate medical help if you have high fever above 103°F, persistent fever for more than 3 days, difficulty breathing, severe weakness, or confusion. Call 108 for emergencies.

Please consult a general physician for proper diagnosis and treatment. This is general guidance only.`;
    }
  }
  
  // Original multilingual symptom responses for backward compatibility
  if (lowerMessage.includes('fever') || lowerMessage.includes('बुखार') || lowerMessage.includes('காய்ச்சல்')) {
    const responses: { [key: string]: string } = {
      en: `For fever management:
• Rest and stay hydrated
• Take paracetamol as directed (adults: ${localizeNumber('500', language)}-${localizeNumber('1000', language)}mg every ${localizeNumber('4', language)}-${localizeNumber('6', language)} hours)
• Use cool compresses
• Monitor temperature regularly
• Seek medical attention if fever exceeds ${localizeNumber('103', language)}°F (${localizeNumber('39.4', language)}°C) or persists beyond ${localizeNumber('3', language)} days

⚠️ For high fever or concerning symptoms, please consult a doctor or call ${localizeNumber('108', language)} for emergencies.`,
      hi: `बुखार के लिए:
• आराम करें और हाइड्रेटेड रहें
• पैरासिटामोल लें (वयस्क: ${localizeNumber('500', language)}-${localizeNumber('1000', language)}mg हर ${localizeNumber('4', language)}-${localizeNumber('6', language)} घंटे में)
• ठंडी पट्टी का उपयोग करें
• तापमान की नियमित जांच करें
• यदि बुखार ${localizeNumber('103', language)}°F से अधिक हो या ${localizeNumber('3', language)} दिन से अधिक रहे तो डॉक्टर से मिलें

⚠️ तेज बुखार या चिंताजनक लक्षणों के लिए डॉक्टर से सलाह लें या आपातकाल के लिए ${localizeNumber('108', language)} पर कॉल करें।`,
      ta: `காய்ச்சலுக்கு:
• ஓய்வு எடுத்து நீர்ச்சத்துடன் இருங்கள்
• பாராசிட்டமால் எடுத்துக்கொள்ளுங்கள் (பெரியவர்கள்: ${localizeNumber('500', language)}-${localizeNumber('1000', language)}mg ஒவ்வொரு ${localizeNumber('4', language)}-${localizeNumber('6', language)} மணி நேரத்திற்கும்)
• குளிர்ந்த ஒத்தடம் பயன்படுத்துங்கள்
• வெப்பநிலையை தொடர்ந்து கண்காணிக்கவும்

⚠️ அதிக காய்ச்சல் அல்லது கவலைக்குரிய அறிகுறிகளுக்கு மருத்துவரை அணுகவும் அல்லது அவசரநிலைக்கு ${localizeNumber('108', language)} ஐ அழைக்கவும்।`
    };
    return responses[language] || responses['en'];
  }

  // Headache responses
  if (lowerMessage.includes('headache') || lowerMessage.includes('सिरदर्द') || lowerMessage.includes('தலைவலி')) {
    const responses: { [key: string]: string } = {
      en: `For headache relief:
• Rest in a quiet, dark room
• Apply cold or warm compress to head/neck
• Stay hydrated - drink plenty of water
• Gentle neck and shoulder massage
• Over-the-counter pain relievers (as directed)

⚠️ Seek immediate medical attention for severe, sudden headaches or those with fever, stiff neck, or vision changes. Call ${localizeNumber('108', language)} for emergencies.`,
      hi: `सिरदर्द के लिए:
• शांत, अंधेरे कमरे में आराम करें
• सिर/गर्दन पर ठंडी या गर्म पट्टी लगाएं
• हाइड्रेटेड रहें - भरपूर पानी पिएं
• गर्दन और कंधे की हल्की मालिश करें

⚠️ तेज, अचानक सिरदर्द या बुखार, गर्दन में अकड़न के साथ सिरदर्द के लिए तुरंत डॉक्टर से मिलें। आपातकाल के लिए ${localizeNumber('108', language)} पर कॉल करें।`,
      ta: `தலைவலிக்கு:
• அமைதியான, இருண்ட அறையில் ஓய்வு எடுங்கள்
• தலை/கழுத்தில் குளிர்ந்த அல்லது சூடான ஒத்தடம்
• நீர்ச்சத்துடன் இருங்கள் - நிறைய தண்ணீர் குடிக்கவும்
• கழுத்து மற்றும் தோள்பட்டை மென்மையான மசாஜ்

⚠️ கடுமையான, திடீர் தலைவலி அல்லது காய்ச்சல், கழுத்து விறைப்புடன் கூடிய தலைவலிக்கு உடனடியாக மருத்துவ உதவி பெறவும். அவசரநிலைக்கு ${localizeNumber('108', language)} ஐ அழைக்கவும்।`
    };
    return responses[language] || responses['en'];
  }

  // Cough responses
  if (lowerMessage.includes('cough') || lowerMessage.includes('खांसी') || lowerMessage.includes('இருமல்')) {
    const responses: { [key: string]: string } = {
      en: `For cough management:
• Stay hydrated - warm water, herbal teas
• Honey (${localizeNumber('1', language)}-${localizeNumber('2', language)} teaspoons) can soothe throat
• Use a humidifier or breathe steam
• Avoid irritants like smoke, strong odors
• Elevate your head while sleeping

⚠️ Consult a doctor if cough persists beyond ${localizeNumber('2', language)} weeks, has blood, or is accompanied by high fever, difficulty breathing. Call ${localizeNumber('108', language)} for breathing emergencies.`,
      hi: `खांसी के लिए:
• हाइड्रेटेड रहें - गर्म पानी, हर्बल चाय
• शहद (${localizeNumber('1', language)}-${localizeNumber('2', language)} चम्मच) गले को आराम देता है
• ह्यूमिडिफायर का उपयोग करें या भाप लें
• धुआं, तेज गंध जैसे परेशान करने वाली चीजों से बचें

⚠️ यदि खांसी ${localizeNumber('2', language)} सप्ताह से अधिक रहे, खून आए, या तेज बुखार, सांस लेने में कठिनाई हो तो डॉक्टर से मिलें। सांस की समस्या के लिए ${localizeNumber('108', language)} पर कॉल करें।`,
      ta: `இருமலுக்கு:
• நீர்ச்சத்துடன் இருங்கள் - சூடான தண்ணீர், மூலிகை தேநீர்
• தேன் (${localizeNumber('1', language)}-${localizeNumber('2', language)} தேக்கரண்டி) தொண்டையை ஆற்றும்
• ஈரப்பதமூட்டி பயன்படுத்தவும் அல்லது நீராவி சுவாசிக்கவும்
• புகை, கடுமையான வாசனை போன்ற எரிச்சல்களை தவிர்க்கவும்

⚠️ இருமல் ${localizeNumber('2', language)} வாரங்களுக்கு மேல் நீடித்தால், இரத்தம் வந்தால், அல்லது அதிக காய்ச்சல், மூச்சுத்திணறல் இருந்தால் மருத்துவரை அணுகவும். மூச்சு அவசரநிலைக்கு ${localizeNumber('108', language)} ஐ அழைக்கவும்।`
    };
    return responses[language] || responses['en'];
  }

  // General health tips
  if (lowerMessage.includes('health tips') || lowerMessage.includes('स्वास्थ्य') || lowerMessage.includes('சுகாதார')) {
    const responses: { [key: string]: string } = {
      en: `General Health Tips:
🥗 Nutrition: Eat balanced meals with fruits, vegetables, whole grains
💧 Hydration: Drink ${localizeNumber('8', language)}-${localizeNumber('10', language)} glasses of water daily
🏃‍♂️ Exercise: ${localizeNumber('30', language)} minutes of physical activity daily
😴 Sleep: ${localizeNumber('7', language)}-${localizeNumber('9', language)} hours of quality sleep
🧘‍♀️ Stress Management: Practice meditation, deep breathing
🚭 Avoid: Smoking, excessive alcohol, processed foods
🩺 Regular Check-ups: Annual health screenings

Remember: These are general guidelines. Consult healthcare professionals for personalized advice.`,
      hi: `सामान्य स्वास्थ्य सुझाव:
🥗 पोषण: फल, सब्जियां, साबुत अनाज के साथ संतुलित भोजन
💧 हाइड्रेशन: दैनिक ${localizeNumber('8', language)}-${localizeNumber('10', language)} गिलास पानी पिएं
🏃‍♂️ व्यायाम: दैनिक ${localizeNumber('30', language)} मिनट शारीरिक गतिविधि
😴 नींद: ${localizeNumber('7', language)}-${localizeNumber('9', language)} घंटे की गुणवत्तापूर्ण नींद
🧘‍♀️ तनाव प्रबंधन: ध्यान, गहरी सांस लेने का अभ्यास
🚭 बचें: धूम्रपान, अधिक शराब, प्रसंस्कृत भोजन से
🩺 नियमित जांच: वार्षिक स्वास्थ्य जांच

याद रखें: ये सामान्य दिशानिर्देश हैं। व्यक्तिगत सलाह के लिए स्वास्थ्य पेशेवरों से सलाह लें।`,
      ta: `பொதுவான சுகாதார குறிப்புகள்:
🥗 ஊட்டச்சத்து: பழங்கள், காய்கறிகள், முழு தானியங்களுடன் சமச்சீர் உணவு
💧 நீர்ச்சத்து: தினமும் ${localizeNumber('8', language)}-${localizeNumber('10', language)} கிளாஸ் தண்ணீர் குடிக்கவும்
🏃‍♂️ உடற்பயிற்சி: தினமும் ${localizeNumber('30', language)} நிமிட உடல் செயல்பாடு
😴 தூக்கம்: ${localizeNumber('7', language)}-${localizeNumber('9', language)} மணி நேர தரமான தூக்கம்
🧘‍♀️ மன அழுத்த மேலாண்மை: தியானம், ஆழ்ந்த மூச்சு பயிற்சி
🚭 தவிர்க்கவும்: புகைபிடித்தல், அதிக மது, பதப்படுத்தப்பட்ட உணவுகள்
🩺 வழக்கமான பரிசோதனைகள்: வருடாந்திர சுகாதார பரிசோதனைகள்

நினைவில் கொள்ளுங்கள்: இவை பொதுவான வழிகாட்டுதல்கள். தனிப்பட்ட ஆலோசனைக்கு சுகாதார நிபுணர்களை அணுகவும்।`
    };
    return responses[language] || responses['en'];
  }

  // Default response
  const defaultResponses: { [key: string]: string } = {
    en: `Thank you for your message. I'm here to help with your health concerns. I can provide information about:

• Common symptoms and their management
• General health and wellness tips
• Medication information (general)
• When to seek medical attention

Please describe your specific health question or concern, and I'll do my best to provide helpful guidance.

⚠️ Important: I provide general information only and cannot replace professional medical advice. For emergencies, please call ${localizeNumber('108', language)}.`,
    hi: `आपके संदेश के लिए धन्यवाद। मैं आपकी स्वास्थ्य चिंताओं में मदद के लिए यहां हूं। मैं इन विषयों पर जानकारी प्रदान कर सकता हूं:

• सामान्य लक्षण और उनका प्रबंधन
• सामान्य स्वास्थ्य और कल्याण सुझाव
• दवा की जानकारी (सामान्य)
• कब चिकित्सा सहायता लेनी चाहिए

कृपया अपना विशिष्ट स्वास्थ्य प्रश्न या चिंता बताएं, और मैं सहायक मार्गदर्शन प्रदान करने की पूरी कोशिश करूंगा।

⚠️ महत्वपूर्ण: मैं केवल सामान्य जानकारी प्रदान करता हूं और पेशेवर चिकित्सा सलाह की जगह नहीं ले सकता। आपातकाल के लिए, कृपया ${localizeNumber('108', language)} पर कॉल करें।`,
    ta: `உங்கள் செய்திக்கு நன்றி. உங்கள் சுகாதார கவலைகளுக்கு உதவ நான் இங்கே இருக்கிறேன். நான் இந்த விषயங்களில் தகவல் வழங்க முடியும்:

• பொதுவான அறிகுறிகள் மற்றும் அவற்றின் மேலாண்மை
• பொதுவான சுகாதார மற்றும் நல்வாழ்வு குறிப்புகள்
• மருந்து தகவல் (பொதுவான)
• எப்போது மருத்துவ உதவி பெற வேண்டும்

உங்கள் குறிப்பிட்ட சுகாதார கேள்வி அல்லது கவலையை விவரிக்கவும், நான் உதவிகரமான வழிகாட்டுதலை வழங்க முயற்சிப்பேன்.

⚠️ முக்கியம்: நான் பொதுவான தகவல் மட்டுமே வழங்குகிறேன், தொழில்முறை மருத்துவ ஆலோசனையை மாற்ற முடியாது. அவசரநிலைகளுக்கு, தயவுசெய்து ${localizeNumber('108', language)} ஐ அழைக்கவும்.`
  };

  return defaultResponses[language] || defaultResponses['en'];
};

interface SpeechRecognitionEvent {
  results: {
    [key: number]: {
      [key: number]: {
        transcript: string;
      };
    };
  };
}

interface SpeechRecognitionInterface {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: () => void;
  onend: () => void;
  start: () => void;
  stop: () => void;
}

const ChatbotSimple: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const { currentLanguage, availableLanguages, changeLanguage, t } = useLanguage();

  // Helper function for translations with number localization
  const tWithNumbers = (key: string): string => {
    const translation = t(key);
    return translation.replace(/\d+/g, (match) => localizeNumber(match, currentLanguage));
  };

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: t('chatbot.welcome'),
      sender: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognitionInterface | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Initialize speech recognition
  useEffect(() => {
    const windowWithSpeech = window as any;
    if (windowWithSpeech.webkitSpeechRecognition || windowWithSpeech.SpeechRecognition) {
      const SpeechRecognition = windowWithSpeech.webkitSpeechRecognition || windowWithSpeech.SpeechRecognition;
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.lang = 'en-IN';

        recognitionRef.current.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setInputText(transcript);
          setIsListening(false);
        };

        recognitionRef.current.onerror = () => {
          setIsListening(false);
        };

        recognitionRef.current.onend = () => {
          setIsListening(false);
        };
      }
    }
  }, []);

  const handleVoiceInput = () => {
    if (!recognitionRef.current) {
      alert(t('chatbot.voiceNotSupported'));
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim() || isTyping) return;

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const timestamp = new Date();
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      time: currentTime,
    };

    // Add user message and clear input
    setMessages(prev => [...prev, userMessage]);
    const messageText = inputText;
    setInputText('');
    setIsTyping(true);

    // Save user message to patient data service
    if (user) {
      const conversationMessage: ConversationMessage = {
        id: userMessage.id,
        text: userMessage.text,
        sender: userMessage.sender,
        time: userMessage.time,
        timestamp
      };
      patientDataService.addChatbotMessage(user.id, conversationMessage);
    }

    // Add typing indicator
    const typingMessage: Message = {
      id: 'typing',
      text: t('chatbot.typing'),
      sender: 'bot',
      time: currentTime,
      isTyping: true,
    };

    setMessages(prev => [...prev, typingMessage]);

    // Simulate AI processing time
    setTimeout(() => {
      const aiResponse = getMedicalResponse(messageText, currentLanguage);
      
      setMessages(prev => {
        const withoutTyping = prev.filter(msg => msg.id !== 'typing');
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: aiResponse,
          sender: 'bot',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        
        // Save bot message to patient data service
        if (user) {
          const conversationMessage: ConversationMessage = {
            id: botMessage.id,
            text: botMessage.text,
            sender: botMessage.sender,
            time: botMessage.time,
            timestamp: new Date()
          };
          patientDataService.addChatbotMessage(user.id, conversationMessage);
          
          // Automatically generate report after interaction
          patientDataService.autoGenerateReport(user.id, user.name);
        }
        
        return [...withoutTyping, botMessage];
      });
      setIsTyping(false);
    }, 1500);
  };

  const getQuickActions = () => {
    const actions = [
      { 
        icon: '🤒', 
        text: t('chatbot.quickActions.symptomCheck'), 
        userMessage: t('chatbot.quickActions.symptomCheckMessage'),
        action: () => handleQuickAction(t('chatbot.quickActions.symptomCheckMessage'))
      },
      { 
        icon: '💊', 
        text: t('chatbot.quickActions.medicineInfo'), 
        userMessage: t('chatbot.quickActions.medicineInfoMessage'),
        action: () => handleQuickAction(t('chatbot.quickActions.medicineInfoMessage'))
      },
      { 
        icon: '📋', 
        text: t('chatbot.quickActions.healthTips'), 
        userMessage: t('chatbot.quickActions.healthTipsMessage'),
        action: () => handleQuickAction(t('chatbot.quickActions.healthTipsMessage'))
      },
      { 
        icon: '🏥', 
        text: t('chatbot.quickActions.findDoctor'), 
        userMessage: t('chatbot.quickActions.findDoctorMessage'),
        action: () => handleQuickAction(t('chatbot.quickActions.findDoctorMessage'))
      },
    ];
    return actions;
  };

  const handleQuickAction = async (message: string) => {
    if (isTyping) return;

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const timestamp = new Date();
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      time: currentTime,
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Save user message to patient data service
    if (user) {
      const conversationMessage: ConversationMessage = {
        id: userMessage.id,
        text: userMessage.text,
        sender: userMessage.sender,
        time: userMessage.time,
        timestamp
      };
      patientDataService.addChatbotMessage(user.id, conversationMessage);
    }

    // Add typing indicator
    const typingMessage: Message = {
      id: 'typing',
      text: t('chatbot.typing'),
      sender: 'bot',
      time: currentTime,
      isTyping: true,
    };

    setMessages(prev => [...prev, typingMessage]);

    // Simulate AI processing time
    setTimeout(() => {
      const aiResponse = getMedicalResponse(message, currentLanguage);
      
      setMessages(prev => {
        const withoutTyping = prev.filter(msg => msg.id !== 'typing');
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: aiResponse,
          sender: 'bot',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        
        // Save bot message to patient data service
        if (user) {
          const conversationMessage: ConversationMessage = {
            id: botMessage.id,
            text: botMessage.text,
            sender: botMessage.sender,
            time: botMessage.time,
            timestamp: new Date()
          };
          patientDataService.addChatbotMessage(user.id, conversationMessage);
          
          // Automatically generate report after interaction
          patientDataService.autoGenerateReport(user.id, user.name);
        }
        
        return [...withoutTyping, botMessage];
      });
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="chatbot-page">
      {/* Header */}
      <header className="chatbot-header">
        <div className="header-content">
          <div className="header-left">
            <a href="/" className="back-button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </a>
            <div className="bot-info">
              <div className="bot-avatar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <div className="bot-details">
                <h1>{t('chatbot.title')}</h1>
                <span className="bot-status">
                  <span className="status-dot"></span>
                  {t('chatbot.status')}
                </span>
              </div>
            </div>
          </div>
          <div className="header-right">
            <select
              value={currentLanguage}
              onChange={(e) => changeLanguage(e.target.value)}
              className="language-selector"
            >
              {availableLanguages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.nativeName}
                </option>
              ))}
            </select>
            {isAuthenticated && (
              <div className="user-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>{user?.name}</span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Chat Area */}
      <main className="chat-container">
        <div className="chat-sidebar">
          <div className="sidebar-section">
            <h3>{t('chatbot.quickActions.title')}</h3>
            <div className="quick-actions">
              {getQuickActions().map((action, index) => (
                <button 
                  key={index} 
                  className="quick-action-btn"
                  onClick={action.action}
                  disabled={isTyping}
                >
                  <span className="action-icon">{action.icon}</span>
                  <span className="action-text">{action.text}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <h3>{t('chatbot.notice.title')}</h3>
            <div className="notice-card">
              <svg className="notice-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              <p>
                {tWithNumbers('chatbot.notice.text')}
              </p>
            </div>
          </div>
        </div>

        <div className="chat-main">
          <div className="messages-container">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender} ${message.isTyping ? 'typing' : ''}`}>
                {message.sender === 'bot' && (
                  <div className="message-avatar">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                )}
                <div className="message-content">
                  <div className="message-bubble">
                    {message.isTyping ? (
                      <div className="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    ) : (
                      <p style={{ whiteSpace: 'pre-line' }}>{message.text}</p>
                    )}
                  </div>
                  {!message.isTyping && <span className="message-time">{message.time}</span>}
                </div>
                {message.sender === 'user' && (
                  <div className="message-avatar user-avatar">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="chat-input-container">
            <div className="input-wrapper">
              <button 
                type="button" 
                className={`voice-button ${isListening ? 'listening' : ''}`}
                onClick={handleVoiceInput}
                title={t('chatbot.voiceHint')}
                disabled={isTyping}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="23"></line>
                  <line x1="8" y1="23" x2="16" y2="23"></line>
                </svg>
              </button>
              <input
                type="text"
                placeholder={isListening ? t('chatbot.listening') : isTyping ? t('chatbot.processing') : t('chatbot.placeholder')}
                className="chat-input"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                disabled={isTyping}
              />
              <button 
                type="button" 
                className="send-button" 
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
            <p className="input-hint">
              {isListening ? t('chatbot.speakNow') : isTyping ? t('chatbot.processing') : t('chatbot.sendHint')}
            </p>
          </div>
          <div ref={messagesEndRef} />
        </div>
      </main>
    </div>
  );
};

export default ChatbotSimple;