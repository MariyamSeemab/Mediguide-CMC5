# MediGuide AI - Expanded Medical Triage Classification System

## Complete Category List (40+ Categories)

### Core Medical Categories
1. **General Illness** - Fever, cold, flu, fatigue
2. **Respiratory** - Cough, breathing issues, asthma, bronchitis
3. **Neurological** - Headache, dizziness, seizures, stroke symptoms
4. **Cardiovascular/Heart** - Chest pain, palpitations, cardiac risk
5. **Digestive/Gastrointestinal** - Stomach pain, nausea, diarrhea, constipation
6. **Musculoskeletal** - Joint pain, back pain, muscle strain, arthritis
7. **Skin/Dermatological** - Rashes, wounds, infections, allergic reactions
8. **Endocrine** - Diabetes, thyroid disorders, hormonal imbalances

### Specialized Medical Categories
9. **ENT (Ear, Nose, Throat)** - Ear infections, sinus issues, sore throat, hearing problems
10. **Eye/Vision** - Eye pain, vision changes, infections, injuries
11. **Dental/Oral Health** - Toothache, gum problems, oral infections
12. **Urology/Urinary** - UTI, kidney stones, bladder issues, urination problems
13. **Kidney Concerns** - Kidney pain, kidney disease symptoms
14. **Liver Disorders** - Jaundice, liver pain, hepatitis symptoms
15. **Blood Disorders** - Anemia, bleeding disorders, clotting issues

### Mental & Behavioral Health
16. **Mental Health** - Depression, anxiety, stress, panic attacks
17. **Sleep Disorders** - Insomnia, sleep apnea, excessive sleepiness
18. **Stress-Related Conditions** - Burnout, stress symptoms, tension

### Reproductive & Sexual Health
19. **Women's Health** - Menstrual issues, PCOS, menopause, breast health
20. **Men's Reproductive Health** - Prostate issues, erectile dysfunction, testicular concerns
21. **Pregnancy-Related** - Pregnancy symptoms, prenatal concerns, postpartum issues
22. **Sexual Health** - STI awareness, sexual dysfunction, contraception guidance

### Immune & Systemic Conditions
23. **Allergy** - Allergic reactions, hay fever, food allergies
24. **Autoimmune Conditions** - Lupus, rheumatoid arthritis, autoimmune symptoms
25. **Infection** - Bacterial, viral, fungal infections
26. **Cancer Awareness** - Early warning signs, screening guidance (non-diagnostic)

### Metabolic & Nutritional
27. **Hormonal Disorders** - Hormone imbalances, PCOS, thyroid issues
28. **Nutritional Deficiencies** - Vitamin deficiencies, malnutrition symptoms
29. **Obesity & Metabolic Health** - Weight management, metabolic syndrome
30. **Chronic Disease Management** - Diabetes, hypertension, thyroid management

### Age-Specific Categories
31. **Pediatric** - Child-specific health concerns, growth issues
32. **Geriatric/Elderly Care** - Age-related health issues, fall prevention

### Injury & Emergency
33. **Injury/Trauma** - Cuts, burns, fractures, sprains, wounds
34. **First-Aid Guidance** - Basic non-clinical first aid, home care
35. **Poisoning/Toxic Exposure** - Accidental poisoning, chemical exposure

### Environmental & Lifestyle
36. **Heat-Related Illness** - Heat stroke, heat exhaustion, dehydration
37. **Cold-Related Illness** - Hypothermia, frostbite, cold exposure
38. **Travel-Related Illness** - Travel sickness, tropical diseases, jet lag
39. **Occupational Health** - Work-related injuries, repetitive strain, exposure
40. **Environmental Health** - Air quality, pollution exposure, environmental toxins
41. **Lifestyle-Related Disorders** - Sedentary lifestyle, poor diet effects

### Preventive & Supportive Care
42. **Preventive Health** - Wellness, health screening, lifestyle guidance
43. **Vaccination & Immunization** - Vaccine schedules, immunization guidance
44. **Post-Surgery Care** - Recovery guidance, wound care, rehabilitation
45. **Medication Side-Effects** - Awareness of common medication reactions

## Category Classification Logic

The AI automatically classifies user symptoms into one of these categories based on:
- **Keyword detection** in user message
- **Symptom patterns** described by user
- **Context clues** from conversation
- **Multi-language support** for all categories

## Emergency Detection (Always First Priority)

Before any category classification, the system checks for:
- Chest pain / Heart attack symptoms
- Breathing difficulty / Respiratory distress
- Stroke signs (FAST: Face, Arms, Speech, Time)
- Severe bleeding / Hemorrhage
- Seizures / Convulsions
- Loss of consciousness
- Suicidal thoughts / Self-harm ideation
- Severe allergic reaction (anaphylaxis)
- Severe burns
- Poisoning / Overdose

## Response Format (Unchanged)

All categories follow the same MediGuide AI format:
```
**Understanding:** [Brief summary of user's issue]

**Possible Reasons:** [Category-specific possibilities]
• Reason 1
• Reason 2
• Reason 3

**Recommended Action:** ✅ Self-care / 👨‍⚕️ Doctor visit / 🚨 Emergency
• Action 1
• Action 2
• Action 3

[If doctor visit recommended:]
For consultation with a specialist, please book an appointment here: http://localhost:5173/doctors

**Safety Note:** This guidance is informational and not a medical diagnosis. Please consult a healthcare professional.
```

## Safety Rules (Unchanged)

❌ Never diagnose diseases
❌ Never prescribe medications
❌ Never say "you have..."
❌ Never replace a doctor

✅ Use "may indicate", "could be related to"
✅ Provide early guidance
✅ Help users decide when to seek care
✅ Include safety disclaimers
✅ Prioritize emergency detection

## Implementation Status

✅ Category system expanded and documented
⏳ Individual category responses to be implemented as needed
✅ Emergency detection remains top priority
✅ Response format standardized across all categories
✅ Multi-language support framework in place

## Future Implementation

As symptoms are reported in each category, specific responses will be added following the MediGuide AI format. Priority categories for implementation:
1. ENT (common: ear infections, sore throat)
2. Eye/Vision (common: eye infections, vision changes)
3. Dental (common: toothache, gum problems)
4. Urology (common: UTI symptoms)
5. Mental Health (common: anxiety, depression)
6. Sleep Disorders (common: insomnia)
7. Digestive (common: stomach pain, nausea)
8. Skin (common: rashes, infections)

---

**Last Updated**: February 20, 2026
**Total Categories**: 45+
**Coverage**: Comprehensive Primary Healthcare
