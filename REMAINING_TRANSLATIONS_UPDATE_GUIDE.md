# Remaining Translation Files Update Guide

## Status
✅ **Completed:**
- English (en.json)
- Hindi (hi.json)
- Tamil (ta.json)
- Telugu (te.json)
- Bengali (bn.json)

## ⏳ **Remaining to Update:**
The following translation files need the symptom analysis section added. All translations are available in `CMC5-main 3/src/translations/` and need to be copied to `CMC5-main 2/src/translations/`.

### Files to Update:
1. **Marathi** (mr.json)
2. **Gujarati** (gu.json)
3. **Kannada** (kn.json)
4. **Malayalam** (ml.json)
5. **Punjabi** (pa.json)
6. **Odia** (or.json)
7. **Assamese** (as.json)
8. **Urdu** (ur.json)

## How to Update Each File

For each language file, find the `"analysis"` section under `"symptomChecker"` and replace it with the expanded version that includes:

```json
"analysis": {
  "title": "[Language-specific title]",
  "confidence": "[Language-specific]",
  "symptoms": "[Language-specific]",
  "recommendations": "[Language-specific]",
  "disclaimer": "[Language-specific]",
  "analyzing": "[Language-specific]",
  "checkNew": "[Language-specific]",
  "fever": {
    "symptom1": "...",
    "symptom2": "...",
    "symptom3": "...",
    "rec1": "...",
    "rec2": "...",
    "rec3": "...",
    "rec4": "...",
    "rec5": "..."
  },
  "headache": {
    "symptom1": "...",
    "symptom2": "...",
    "symptom3": "...",
    "rec1": "...",
    "rec2": "...",
    "rec3": "...",
    "rec4": "...",
    "rec5": "...",
    "rec6": "..."
  },
  "cough": {
    "symptom1": "...",
    "symptom2": "...",
    "symptom3": "...",
    "rec1": "...",
    "rec2": "...",
    "rec3": "...",
    "rec4": "...",
    "rec5": "...",
    "rec6": "..."
  },
  "stomach": {
    "symptom1": "...",
    "symptom2": "...",
    "symptom3": "...",
    "rec1": "...",
    "rec2": "...",
    "rec3": "...",
    "rec4": "...",
    "rec5": "...",
    "rec6": "..."
  },
  "general": {
    "symptom1": "...",
    "symptom2": "...",
    "rec1": "...",
    "rec2": "...",
    "rec3": "...",
    "rec4": "...",
    "rec5": "...",
    "rec6": "..."
  }
}
```

## Quick Update Method

You can use the `strReplace` tool to update each file. The pattern is:

**Find:** The existing short `"analysis"` section
**Replace:** The complete `"analysis"` section from the corresponding file in `CMC5-main 3/src/translations/`

## Verification

After updating all files, verify:
1. No JSON syntax errors
2. All translation keys are present
3. The SymptomChecker component works in all languages

## Note
All translations are already complete and available in the `CMC5-main 3` directory. This is just a matter of copying the expanded `analysis` sections to the existing files in `CMC5-main 2`.
