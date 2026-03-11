# Testing Checklist - Language Switcher & Simple Process Updates

## Quick Verification Steps

### ✅ Step 1: Check Default Language
1. Clear browser cache and localStorage
2. Open the application
3. **Expected:** Site loads in Hindi (हिंदी)
4. **Verify:** Navigation and content are in Hindi

### ✅ Step 2: Verify Language Switcher
1. Click on the Language Switcher dropdown
2. **Expected:** See exactly 12 languages (no English)
3. **Verify:** All languages have India flag 🇮🇳

**Languages List:**
```
🇮🇳 हिंदी (Hindi)
🇮🇳 தமிழ் (Tamil)
🇮🇳 తెలుగు (Telugu)
🇮🇳 বাংলা (Bengali)
🇮🇳 मराठी (Marathi)
🇮🇳 ગુજરાતી (Gujarati)
🇮🇳 ಕನ್ನಡ (Kannada)
🇮🇳 മലയാളം (Malayalam)
🇮🇳 ਪੰਜਾਬੀ (Punjabi)
🇮🇳 ଓଡ଼ିଆ (Odia)
🇮🇳 অসমীয়া (Assamese)
🇮🇳 اردو (Urdu)
```

### ✅ Step 3: Test Simple Process Section (Critical)
1. Scroll down to "Simple Process" section
2. **Expected:** All text in English regardless of selected language
3. **Verify the following text appears exactly:**

**Section Header:**
- Eyebrow: "Simple Process"
- Title: "Your Journey to Better Health"
- Description: "Get started in minutes with our intuitive, step-by-step process"

**Step 1:**
- Number: "1"
- Title: "Create Your Account"
- Description: "Sign up in seconds with email or Google. Your data is encrypted and secure."

**Step 2:**
- Number: "2"
- Title: "Describe Your Symptoms"
- Description: "Use voice, text, or images to tell us what you're experiencing in your preferred language."

**Step 3:**
- Number: "3"
- Title: "Get AI-Powered Insights"
- Description: "Receive instant, personalized health guidance based on verified medical data."

**Step 4:**
- Number: "4"
- Title: "Take Action"
- Description: "Download your health summary and share it with your doctor for better care."

### ✅ Step 4: Test Language Switching
1. Select Hindi from Language Switcher
2. **Verify:** Navigation, hero, features translate to Hindi
3. **Verify:** "Simple Process" stays in English
4. Repeat for each language:
   - Tamil
   - Telugu
   - Bengali
   - Marathi
   - Gujarati
   - Kannada
   - Malayalam
   - Punjabi
   - Odia
   - Assamese
   - Urdu

### ✅ Step 5: Verify Language Count
1. Check hero section stats
2. **Expected:** "12+" (or localized equivalent)
3. **Examples:**
   - Hindi: "12+ भाषाएं"
   - Urdu: "۱۲+ زبانیں"
   - Tamil: "12+ மொழிகள்"

### ✅ Step 6: Test Other Sections Translate
**These sections SHOULD translate:**
- ✅ Navigation bar
- ✅ Hero section
- ✅ Quick Actions cards
- ✅ Features section
- ✅ Services section
- ✅ Testimonials
- ✅ Footer

**This section should NOT translate:**
- ❌ Simple Process (How It Works)

### ✅ Step 7: Test All Pages
Navigate to each page and verify translations work:
1. Home Page - ✅ Translates (except Simple Process)
2. Symptom Checker - ✅ Translates
3. AI Assistant - ✅ Translates
4. About Us - ✅ Translates
5. Support - ✅ Translates
6. Emergency - ✅ Translates
7. Connect with Doctors - ✅ Translates
8. Lab Tests & Results - ✅ Translates

### ✅ Step 8: Test Urdu Specifically
1. Select Urdu (اردو) from Language Switcher
2. **Verify:**
   - Navigation in Urdu
   - Numbers in Urdu numerals (۰-۹)
   - "12+" shows as "۱۲+"
   - "Simple Process" stays in English
   - Layout stays LTR (not RTL)

## Detailed Test Cases

### Test Case 1: Fresh User Experience
**Scenario:** New user visits the site for the first time

**Steps:**
1. Open browser in incognito/private mode
2. Navigate to the application
3. Observe default language

**Expected Result:**
- Site loads in Hindi
- Language Switcher shows हिंदी selected
- All content in Hindi except "Simple Process"

**Pass/Fail:** ___

---

### Test Case 2: Language Persistence
**Scenario:** User selects a language and returns later

**Steps:**
1. Select Tamil from Language Switcher
2. Close browser
3. Reopen and navigate to the site

**Expected Result:**
- Site loads in Tamil (last selected language)
- Language preference persisted in localStorage

**Pass/Fail:** ___

---

### Test Case 3: Simple Process Immutability
**Scenario:** Verify Simple Process never translates

**Steps:**
1. Start with Hindi
2. Verify "Simple Process" is in English
3. Switch to Tamil - verify still English
4. Switch to Urdu - verify still English
5. Switch to all 12 languages

**Expected Result:**
- "Simple Process" section always in English
- Numbers always 1, 2, 3, 4 (not localized)
- All text exactly as specified

**Pass/Fail:** ___

---

### Test Case 4: Language Count Accuracy
**Scenario:** Verify language count is correct

**Steps:**
1. Count languages in Language Switcher
2. Check hero section language count
3. Check About Us page language count
4. Check Support FAQ language count

**Expected Result:**
- Language Switcher: 12 languages
- Hero stats: "12+"
- About Us: "12+ Languages"
- Support FAQ: "12+ Indian languages"

**Pass/Fail:** ___

---

### Test Case 5: Number Localization
**Scenario:** Verify numbers localize correctly (except Simple Process)

**Steps:**
1. Select Urdu
2. Check hero stats: 24/7, 12+, 98%
3. Check "Simple Process" numbers: 1, 2, 3, 4

**Expected Result:**
- Hero stats: ۲۴/۷, ۱۲+, ۹۸٪ (Urdu numerals)
- Simple Process: 1, 2, 3, 4 (English numerals)

**Pass/Fail:** ___

---

### Test Case 6: No English in Switcher
**Scenario:** Verify English is not available

**Steps:**
1. Open Language Switcher
2. Look for English or 🇬🇧 flag
3. Try to manually set language to 'en' via console

**Expected Result:**
- No English option visible
- No 🇬🇧 flag
- Console attempt fails gracefully

**Pass/Fail:** ___

---

## Browser Compatibility Testing

Test in multiple browsers:

### Chrome/Edge
- [ ] Language Switcher works
- [ ] Simple Process stays English
- [ ] Translations work
- [ ] Default language is Hindi

### Firefox
- [ ] Language Switcher works
- [ ] Simple Process stays English
- [ ] Translations work
- [ ] Default language is Hindi

### Safari
- [ ] Language Switcher works
- [ ] Simple Process stays English
- [ ] Translations work
- [ ] Default language is Hindi

## Mobile Testing

Test on mobile devices:

### Mobile Chrome
- [ ] Language Switcher accessible
- [ ] Simple Process readable
- [ ] Translations work
- [ ] Responsive design intact

### Mobile Safari
- [ ] Language Switcher accessible
- [ ] Simple Process readable
- [ ] Translations work
- [ ] Responsive design intact

## Regression Testing

Verify nothing else broke:

- [ ] Login/Signup works
- [ ] Navigation works
- [ ] All pages load correctly
- [ ] Forms work (appointment booking, etc.)
- [ ] Symptom Checker works
- [ ] AI Assistant works
- [ ] Lab Tests upload works
- [ ] Emergency page works

## Performance Testing

- [ ] Page load time acceptable
- [ ] Language switching is instant
- [ ] No console errors
- [ ] No memory leaks

## Accessibility Testing

- [ ] Screen reader announces language changes
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Color contrast maintained

## Known Issues / Notes

**Note 1:** English translations still exist in translation files but are not accessible via UI.

**Note 2:** If user has 'en' in localStorage from before, it will default to Hindi on next visit.

**Note 3:** "Simple Process" section is hardcoded in Homepage.tsx and will not appear in translation files.

## Sign-Off

**Tested By:** _______________
**Date:** _______________
**Build Version:** _______________
**Status:** Pass / Fail / Needs Review

---

## Quick Command Reference

**Clear localStorage (Browser Console):**
```javascript
localStorage.clear();
location.reload();
```

**Check current language (Browser Console):**
```javascript
localStorage.getItem('preferredLanguage');
```

**Force language change (Browser Console):**
```javascript
localStorage.setItem('preferredLanguage', 'hi');
location.reload();
```

---

**Last Updated:** February 19, 2026
