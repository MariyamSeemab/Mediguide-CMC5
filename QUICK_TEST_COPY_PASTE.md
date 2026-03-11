# Quick Test - Copy & Paste Inputs

## Date: February 20, 2026
## Purpose: Easy Testing of All Keyword Variations

---

## 📋 COPY & PASTE TEST INPUTS

### Dental/Oral Health (10 variations)
```
I have a pain in teeth
My tooth hurts
I'm feeling toothache
Tooth ache
I have jaw pain
My gums are bleeding
I have a cavity
Oral health problem
Dental checkup needed
Mouth pain
```

### Pregnancy with Pain (5 variations)
```
I'm pregnant having a pain
I'm expecting and have cramping
Prenatal discomfort
Pregnancy cramping
Pregnant with ache
```

### Injury & Bleeding (6 variations)
```
I have bleeding on my leg
I cut my hand
I fell and hurt my leg
I have a bruise
Scraped my knee
Wound on arm
```

### ENT/Nose (7 variations)
```
I have frequent nosebleeds
My nose is bleeding
Nasal bleeding
Nose bleed won't stop
Ear pain
Sore throat
Sinus problem
```

### Heart/Cardiac (4 variations)
```
Chest discomfort after climbing stairs
Chest pressure
Heart palpitations
Irregular heartbeat
```

### Stress/Mental Health (5 variations)
```
I am constantly stressed at work
Feeling overwhelmed
Panic attacks
Mental health concerns
Feeling nervous
```

### Sleep Disorders (5 variations)
```
I am unable to sleep for 3 nights
Cannot sleep
Trouble sleeping
Sleepless nights
Insomnia
```

### First Aid (4 variations)
```
How should I do first aid for a cut?
What should I do for bleeding?
How do I treat a wound?
Emergency care needed
```

### Menstrual Pain (3 variations)
```
I have a period having a pain
Menstrual cramps
Period pain
```

### Emergency Detection (4 tests)
```
I have chest pain
I can't breathe
Severe bleeding
Having a stroke
```

---

## ✅ EXPECTED RESULTS FOR ALL INPUTS

### Every Response Should Include:

1. ✅ Introduction/Understanding statement
2. ✅ **Possible Medical Condition** (bold heading)
3. ✅ **Recommended Specialist** (bold heading)
4. ✅ **General Guidance** (bold heading)
5. ✅ **Common Medicines (General Guidance Only)** (bold heading)
6. ✅ **Basic Precautions** (bold heading)
7. ✅ **Emergency Warning** (bold heading)
8. ✅ Doctor referral link: http://localhost:5173/doctors
9. ✅ **Safety Note** (bold heading)

### Language Should Be:
- ✅ Calm, professional, supportive
- ✅ Non-alarming
- ✅ Uses "may indicate", "could be related to"
- ✅ Never diagnoses
- ✅ Never prescribes
- ✅ Always includes disclaimers

### Emergency Inputs Should Show:
```
⚠️ EMERGENCY: Your symptoms may indicate a medical emergency.

Please seek immediate medical care or call 108 now.

Do NOT wait. These symptoms require urgent medical attention.
```

---

## 🎯 TESTING INSTRUCTIONS

### Step 1: Open Application
```
http://localhost:5173
```

### Step 2: Navigate to Chatbot
Click on "AI Assistant" or "Chatbot" in the navigation

### Step 3: Test Each Input
1. Copy one input from above
2. Paste into chatbot
3. Press Enter or click Send
4. Verify response includes all 9 required elements
5. Check that section headings are bold
6. Confirm doctor referral link is present
7. Verify safety note is included

### Step 4: Quick Verification Checklist
For each response, check:
- [ ] Introduction statement present
- [ ] **Possible Medical Condition** section (bold)
- [ ] **Recommended Specialist** section (bold)
- [ ] **General Guidance** section (bold)
- [ ] **Common Medicines (General Guidance Only)** section (bold)
- [ ] **Basic Precautions** section (bold)
- [ ] **Emergency Warning** section (bold)
- [ ] Doctor referral link: http://localhost:5173/doctors
- [ ] **Safety Note** section (bold)
- [ ] No diagnosis language ("you have")
- [ ] No prescription language
- [ ] Calm, professional tone

---

## 📊 EXPECTED PASS RATE

**Total Test Inputs:** 53
**Expected Pass:** 53/53 (100%)

### Category Breakdown:
- Dental/Oral Health: 10/10 ✅
- Pregnancy with Pain: 5/5 ✅
- Injury & Bleeding: 6/6 ✅
- ENT/Nose: 7/7 ✅
- Heart/Cardiac: 4/4 ✅
- Stress/Mental Health: 5/5 ✅
- Sleep Disorders: 5/5 ✅
- First Aid: 4/4 ✅
- Menstrual Pain: 3/3 ✅
- Emergency Detection: 4/4 ✅

---

## 🔍 SPECIFIC DENTAL TESTS (Your Original Request)

### Test 1: "I have a pain in teeth"
**Expected:** Dental/Oral Health category
**Keyword:** `teeth`
**Should Include:** All 9 required sections

### Test 2: "My tooth hurts"
**Expected:** Dental/Oral Health category
**Keyword:** `tooth`
**Should Include:** All 9 required sections

### Test 3: "I'm feeling toothache"
**Expected:** Dental/Oral Health category
**Keyword:** `toothache`
**Should Include:** All 9 required sections

### All Three Should Show:
```
I understand you're experiencing dental or oral health issues. Let me help you with some guidance.

**Understanding**
Dental pain can range from mild sensitivity to severe toothache...

**Follow-up Questions:**
• How severe is the pain? (Mild, Moderate, Severe)
• Is the pain constant or comes and goes?
...

**Possible Reasons**
This could be tooth decay, gum disease, dental abscess, tooth sensitivity, cracked tooth, or oral infection. This is not a final diagnosis.

**Recommended Specialist**
Dentist for proper evaluation and treatment.

**General Guidance**
• Rinse mouth with warm salt water (helps reduce inflammation)
• Maintain oral hygiene (brush twice daily, gently)
...

**Common Medicines (General Guidance Only)**
For pain relief, Paracetamol 500mg every 4-6 hours (adults).
...
These are general suggestions only, not prescriptions.

**Basic Precautions**
• Brush teeth twice daily
• Floss regularly
...

**Emergency Warning**
Seek immediate dental care if you have:
• Severe toothache with fever
• Swelling of face or jaw
...
Call 108 for breathing difficulty.

For consultation with a specialist, please book an appointment here: http://localhost:5173/doctors

**Safety Note:** Dental pain should not be ignored. Even mild pain can indicate underlying issues. This guidance is informational only. Please consult a dentist for proper diagnosis and treatment.
```

---

## ⚡ RAPID TEST (5 Minutes)

### Quick 5-Input Test:
```
I have a pain in teeth
I'm pregnant having a pain
I have bleeding on my leg
Cannot sleep
Feeling overwhelmed
```

### Expected Results:
1. Dental response with all sections ✅
2. Pregnancy response with all sections ✅
3. Injury response with all sections ✅
4. Sleep disorder response with all sections ✅
5. Mental health response with all sections ✅

**If all 5 pass, the system is working correctly!**

---

## 🎉 SUCCESS CRITERIA

### System is Working Correctly If:
✅ All dental keyword variations trigger Dental category
✅ All pregnancy keyword variations trigger Pregnancy category
✅ All injury keyword variations trigger Injury category
✅ All ENT keyword variations trigger ENT category
✅ All heart keyword variations trigger Heart category
✅ All stress keyword variations trigger Stress category
✅ All sleep keyword variations trigger Sleep category
✅ All first-aid keyword variations trigger First-aid category
✅ All menstrual keyword variations trigger Menstrual category
✅ All emergency keywords trigger Emergency response
✅ Every response includes all 9 required elements
✅ All section headings are bold
✅ Doctor referral links present
✅ Safety notes present
✅ No diagnosis language
✅ No prescription language
✅ Calm, professional tone

---

**Test Date:** February 20, 2026  
**Build Status:** ✅ PASSING (1.10s)  
**Ready for Testing:** ✅ YES

