# Urdu Language Implementation Guide

## Summary
Infrastructure for Urdu language support has been successfully implemented with RTL (Right-to-Left) layout support. The translation file needs to be completed with Urdu translations.

## Completed Changes

### 1. Language Context (`src/contexts/LanguageContext.tsx`)
✅ Added Urdu to available languages list:
```typescript
{ code: 'ur', name: 'Urdu', nativeName: 'اردو', flag: '🇵🇰', rtl: true }
```

✅ Implemented RTL support:
- Automatically sets `dir="rtl"` on HTML element when Urdu is selected
- Adds `rtl` class to body for CSS styling
- Removes RTL when switching back to LTR languages

### 2. Translations Index (`src/translations/index.ts`)
✅ Added Urdu import and export

### 3. Number Localization (`src/utils/numberLocalization.ts`)
✅ Added Urdu (Eastern Arabic) numerals:
- ۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹

### 4. Translation File (`src/translations/ur.json`)
✅ Base file created (currently contains English text)
⚠️ **NEEDS COMPLETION**: All English text needs to be translated to Urdu

## Translation File Structure

The `ur.json` file contains the following sections that need translation:

### Navigation & UI Elements
- `nav`: Navigation menu items
- `topBar`: Top bar contact information
- `common`: Common UI elements (buttons, labels, etc.)

### Pages
1. **Home Page** (`hero`, `quickActions`, `impact`, `features`, `services`, `howItWorks`, `testimonials`)
2. **Symptom Checker** (`symptomChecker`)
3. **AI Assistant** (`chatbot`)
4. **About Us** (`about`)
5. **Support** (`support`)
6. **Emergency** (`emergency`)
7. **Connect with Doctors** (`connectDoctor`)
8. **Lab Tests & Results** (`labTest`)

### Total Translation Keys
- Approximately 900+ text strings
- All need to be translated from English to Urdu

## RTL CSS Support

### Automatic RTL Handling
When Urdu is selected, the following happens automatically:
```html
<html dir="rtl" lang="ur">
<body class="rtl">
```

### CSS for RTL Support
Add these styles to your global CSS or component CSS files:

```css
/* RTL Support */
[dir="rtl"] {
  text-align: right;
}

[dir="rtl"] .text-left {
  text-align: right !important;
}

[dir="rtl"] .text-right {
  text-align: left !important;
}

/* Flex direction reversal */
[dir="rtl"] .flex-row {
  flex-direction: row-reverse;
}

/* Margin and padding adjustments */
[dir="rtl"] .ml-auto {
  margin-left: 0 !important;
  margin-right: auto !important;
}

[dir="rtl"] .mr-auto {
  margin-right: 0 !important;
  margin-left: auto !important;
}

/* Float adjustments */
[dir="rtl"] .float-left {
  float: right !important;
}

[dir="rtl"] .float-right {
  float: left !important;
}
```

## How to Complete the Translation

### Option 1: Manual Translation
1. Open `src/translations/ur.json`
2. Replace each English value with Urdu translation
3. Keep the JSON structure intact
4. Use proper Urdu script (اردو)

### Option 2: Professional Translation Service
1. Export the English JSON file
2. Send to professional Urdu translator
3. Import translated content back into `ur.json`

### Option 3: AI-Assisted Translation
1. Use translation tools like Google Translate API
2. Review and correct translations manually
3. Ensure cultural appropriateness

## Sample Urdu Translations

Here are some key translations to get started:

```json
{
  "nav": {
    "home": "ہوم",
    "symptomChecker": "علامات کی جانچ",
    "chatbot": "اے آئی اسسٹنٹ",
    "about": "ہمارے بارے میں",
    "support": "ہماری مدد کریں",
    "login": "لاگ ان",
    "signup": "سائن اپ",
    "doctors": "ڈاکٹر تلاش کریں",
    "dashboard": "ڈیش بورڈ"
  },
  "common": {
    "loading": "لوڈ ہو رہا ہے...",
    "error": "کچھ غلط ہو گیا",
    "retry": "دوبارہ کوشش کریں",
    "cancel": "منسوخ کریں",
    "confirm": "تصدیق کریں",
    "save": "محفوظ کریں",
    "edit": "ترمیم کریں",
    "delete": "حذف کریں",
    "search": "تلاش کریں",
    "filter": "فلٹر",
    "next": "اگلا",
    "previous": "پچھلا",
    "close": "بند کریں",
    "yes": "ہاں",
    "no": "نہیں",
    "ok": "ٹھیک ہے",
    "back": "واپس",
    "continue": "جاری رکھیں",
    "submit": "جمع کرائیں",
    "logout": "لاگ آؤٹ",
    "makeAppointment": "اپائنٹمنٹ بنائیں"
  }
}
```

## Number Localization

Numbers will automatically convert to Urdu numerals:
- English: 0 1 2 3 4 5 6 7 8 9
- Urdu: ۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹

Examples:
- "24/7" → "۲۴/۷"
- "50,000+" → "۵۰،۰۰۰+"
- "98%" → "۹۸٪"

## Testing Checklist

After completing translations:

### Functionality Tests
- [ ] Language switcher shows Urdu option
- [ ] Selecting Urdu changes all text to Urdu
- [ ] RTL layout applies correctly
- [ ] Numbers display in Urdu numerals
- [ ] All pages are translated
- [ ] Navigation works correctly
- [ ] Forms and inputs work in RTL
- [ ] Buttons and CTAs are translated

### Visual Tests
- [ ] Text alignment is right-to-left
- [ ] Icons and images are mirrored appropriately
- [ ] Spacing and margins are correct
- [ ] No text overflow or truncation
- [ ] Mobile responsive design works
- [ ] Print layouts work correctly

### Browser Tests
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

## Known Considerations

### RTL Layout Challenges
1. **Icons**: Some icons may need to be flipped horizontally
2. **Charts/Graphs**: May need special handling
3. **Images with text**: Should have Urdu versions
4. **Third-party components**: May not support RTL out of the box

### Cultural Considerations
1. Use formal Urdu for medical terminology
2. Ensure respectful tone in all translations
3. Use appropriate medical terms recognized in Pakistan/India
4. Consider regional variations in Urdu

### Performance
- RTL CSS may slightly increase bundle size
- Consider lazy-loading RTL-specific styles
- Test performance on mobile devices

## Next Steps

1. **Complete Translation**: Translate all 900+ strings in `ur.json`
2. **Add RTL CSS**: Create comprehensive RTL styles
3. **Test Thoroughly**: Test all pages and features
4. **Get Native Review**: Have native Urdu speaker review translations
5. **Fix Issues**: Address any layout or translation issues
6. **Document**: Update user documentation with Urdu support

## Files Modified

1. ✅ `src/contexts/LanguageContext.tsx` - Added Urdu language and RTL support
2. ✅ `src/translations/index.ts` - Added Urdu import
3. ✅ `src/utils/numberLocalization.ts` - Added Urdu numerals
4. ⚠️ `src/translations/ur.json` - Created but needs translation

## Files to Create/Modify

1. **Global RTL CSS** - Add to `src/index.css` or create `src/styles/rtl.css`
2. **Component-specific RTL** - Update component CSS files as needed
3. **Complete ur.json** - Translate all English text to Urdu

---

**Status**: 🟡 Infrastructure Complete, Translation Pending
**Priority**: High - Translation file needs completion
**Estimated Effort**: 20-40 hours for complete translation and testing
