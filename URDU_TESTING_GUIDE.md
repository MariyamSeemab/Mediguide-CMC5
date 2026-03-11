# Urdu Translation Testing Guide

## Quick Test Steps

### 1. Start the Application
```bash
npm run dev
```

### 2. Select Urdu Language
1. Look for the Language Switcher (globe icon or language dropdown)
2. Click on it
3. Select **اردو** (Urdu) with India flag 🇮🇳

### 3. Verify Home Page

**Check these elements are in Urdu:**
- ✅ Navigation menu: ہوم, علامات کی جانچ, اے آئی اسسٹنٹ, etc.
- ✅ Hero title: "آپ کی صحت، ہماری ترجیح"
- ✅ Buttons: "مشاورت شروع کریں", "ویڈیو دیکھیں"
- ✅ Stats: ۲۴/۷, ۱۲+, ۹۸٪ (in Urdu numerals)
- ✅ Quick Actions cards
- ✅ Features section
- ✅ Testimonials
- ✅ Footer

### 4. Test Each Page

#### Symptom Checker (`/symptom-checker`)
- ✅ Title: "اے آئی علامات کی جانچ"
- ✅ Input options: آواز کا ان پٹ, علامات ٹائپ کریں, تصویر اسکین کریں
- ✅ All buttons and placeholders in Urdu

#### AI Assistant (`/chatbot`)
- ✅ Title: "میڈی گائیڈ اے آئی"
- ✅ Welcome message in Urdu
- ✅ Placeholder: "یہاں اپنا صحت کا سوال ٹائپ کریں..."
- ✅ Quick actions in Urdu

#### About Us (`/about`)
- ✅ Title: "میڈی گائیڈ کے بارے میں"
- ✅ Mission, vision, values in Urdu
- ✅ Stats in Urdu numerals

#### Support (`/support`)
- ✅ Title: "سپورٹ سینٹر"
- ✅ FAQ section in Urdu
- ✅ Contact form labels in Urdu

#### Emergency (`/emergency`)
- ✅ Title: "ایمرجنسی ایمبولینس سروس"
- ✅ Emergency number: ۱۰۸ (Urdu numerals)
- ✅ Form fields in Urdu

#### Connect with Doctors (`/doctors`)
- ✅ Title: "ماہر ڈاکٹروں سے رابطہ کریں"
- ✅ Search placeholder in Urdu
- ✅ Specialty filters in Urdu
- ✅ Doctor cards with Urdu text
- ✅ Booking modal in Urdu

#### Lab Tests & Results (`/lab-tests`)
- ✅ Title: "لیب ٹیسٹ اور نتائج"
- ✅ Tabs: ٹیسٹ بک کریں, رپورٹیں اپ لوڈ کریں, نتائج دیکھیں
- ✅ Test categories in Urdu
- ✅ Test descriptions in Urdu
- ✅ Upload form in Urdu

### 5. Verify Numbers

All numbers should display in Urdu numerals:
- 0 → ۰
- 1 → ۱
- 2 → ۲
- 3 → ۳
- 4 → ۴
- 5 → ۵
- 6 → ۶
- 7 → ۷
- 8 → ۸
- 9 → ۹

**Examples:**
- 24/7 → ۲۴/۷
- 50,000+ → ۵۰،۰۰۰+
- 98% → ۹۸٪
- 108 → ۱۰۸
- ₹500 → ₹۵۰۰

### 6. Verify Layout

**IMPORTANT:** Layout should remain LEFT-TO-RIGHT (LTR)
- ✅ Navigation menu on the left
- ✅ Text flows left to right
- ✅ Buttons and icons in normal positions
- ✅ NO mirroring of the interface
- ✅ Only text is in Urdu, layout unchanged

### 7. Check Forms

Test all forms with Urdu labels:
- ✅ Login modal
- ✅ Appointment booking
- ✅ Lab test booking
- ✅ Emergency request
- ✅ Support contact form

### 8. Check Modals and Dialogs

- ✅ Login modal
- ✅ Doctor profile modal
- ✅ Appointment booking modal
- ✅ Lab report analysis modal
- ✅ Confirmation dialogs

### 9. Common Issues to Check

❌ **Should NOT happen:**
- English text remaining anywhere
- Numbers in English (0-9)
- RTL layout applied
- Pakistan flag 🇵🇰 shown
- Broken translations or missing keys

✅ **Should happen:**
- All text in Urdu
- All numbers in Urdu numerals (۰-۹)
- LTR layout maintained
- India flag 🇮🇳 shown
- Smooth language switching

### 10. Browser Console Check

Open browser console (F12) and check for:
- ✅ No translation errors
- ✅ No missing key warnings
- ✅ Language properly set to 'ur'

## Expected Results

When Urdu is selected:
1. **100% Urdu text** - No English should remain
2. **Urdu numerals** - All numbers in ۰-۹ format
3. **India flag** - 🇮🇳 shown in language switcher
4. **LTR layout** - No RTL changes
5. **Instant switching** - No page reload needed

## Troubleshooting

### If English text appears:
- Check if the translation key exists in `ur.json`
- Verify the component is using `t()` function
- Check browser console for missing key errors

### If numbers are in English:
- Verify `localizeNumber()` is being used
- Check `numberLocalization.ts` has Urdu numerals

### If layout is RTL:
- Check `LanguageContext.tsx` - `rtl: false` for Urdu
- Verify no RTL CSS is being applied

## Success Criteria

✅ All pages fully translated to Urdu
✅ All numbers in Urdu numerals
✅ India flag displayed
✅ LTR layout maintained
✅ No English text visible
✅ Smooth user experience

---

**Testing Date:** February 19, 2026
**Status:** Ready for Testing ✅
