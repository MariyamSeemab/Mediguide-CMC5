#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json

# Complete Urdu translation
urdu_translation = {
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
  "topBar": {
    "email": "support@mediguide.com",
    "phone": "+۹۱ ۱۸۰۰-۱۲۳-۴۵۶۷",
    "emergency": "ایمرجنسی؟ کال کریں",
    "emergencyNumber": "۱۰۸",
    "emergencyText": "فوری مدد کے لیے"
  },
  "hero": {
    "badge": "۵۰،۰۰۰+ مریضوں کا اعتماد",
    "title": "آپ کی صحت،\\nہماری ترجیح",
    "subtitle": "ہمارے اے آئی سے چلنے والے پلیٹ فارم کے ساتھ عالمی معیار کی صحت کی دیکھ بھال کا تجربہ کریں۔ فوری طبی رہنمائی حاصل کریں، ماہرین سے رابطہ کریں، اور اپنے صحت کے سفر کا انتظام کریں—سب ایک جگہ۔",
    "startConsultation": "مشاورت شروع کریں",
    "watchVideo": "ویڈیو دیکھیں",
    "stats": {
      "available": "۲۴/۷",
      "availableLabel": "دستیاب",
      "languages": "۱۲+",
      "languagesLabel": "زبانیں",
      "satisfaction": "۹۸٪",
      "satisfactionLabel": "اطمینان"
    }
  },
  "quickActions": {
    "emergency": {
      "title": "ایمرجنسی کیئر",
      "description": "۲۴/۷ ایمرجنسی سپورٹ",
      "link": "ابھی رسائی حاصل کریں"
    },
    "findDoctor": {
      "title": "ڈاکٹر تلاش کریں",
      "description": "ماہرین سے رابطہ کریں",
      "link": "ابھی تلاش کریں"
    },
    "appointment": {
      "title": "اپائنٹمنٹ بک کریں",
      "description": "اپنا دورہ شیڈول کریں",
      "link": "ابھی بک کریں"
    },
    "labResults": {
      "title": "لیب کے نتائج",
      "description": "اپنی رپورٹیں دیکھیں",
      "link": "نتائج دیکھیں"
    }
  },
  "impact": {
    "title": "صحت کی دیکھ بھال کو قابل رسائی بنانا",
    "subtitle": "معیاری صحت کی رہنمائی کے لیے ہندوستان بھر میں ہزاروں کا اعتماد",
    "stats": {
      "patients": "۵۰،۰۰۰+",
      "patientsLabel": "فعال مریض",
      "doctors": "۵۰۰+",
      "doctorsLabel": "ماہر ڈاکٹرز",
      "satisfaction": "۹۸٪",
      "satisfactionLabel": "اطمینان کی شرح",
      "support": "۲۴/۷",
      "supportLabel": "سپورٹ دستیاب"
    }
  },
  "quickAccess": {
    "title": "فوری رسائی",
    "email": "ای میل",
    "password": "پاس ورڈ",
    "login": "لاگ ان",
    "googleLogin": "گوگل کے ساتھ جاری رکھیں",
    "newUser": "میڈی گائیڈ میں نئے ہیں؟",
    "createAccount": "اکاؤنٹ بنائیں",
    "badges": {
      "verifiedData": "تصدیق شدہ صحت کا ڈیٹا",
      "fastResponses": "تیز جوابات",
      "multilingualSupport": "کثیر لسانی سپورٹ"
    }
  },
  "features": {
    "title": "ہماری خصوصیات",
    "symptomChecker": {
      "title": "اے آئی علامات کی جانچ",
      "description": "اے آئی سے چلنے والے تجزیہ کے ساتھ فوری طور پر اپنی علامات کو سمجھیں۔"
    },
    "chatbot": {
      "title": "کثیر لسانی اے آئی اسسٹنٹ",
      "description": "انگریزی، ہندی، تمل، تیلگو، بنگالی اور مزید میں بات کریں۔"
    },
    "medicineInfo": {
      "title": "دوا کی معلومات",
      "description": "ضمنی اثرات اور استعمال کی تفصیلات کے ساتھ دوائیں تلاش کریں۔"
    },
    "secure": {
      "title": "محفوظ اور نجی",
      "description": "آپ کا صحت کا ڈیٹا خفیہ کاری شدہ اور رازدارانہ رہتا ہے۔"
    },
    "available": {
      "title": "۲۴/۷ دستیابی",
      "description": "ہمیشہ آپ کے لیے، جب بھی آپ کو رہنمائی کی ضرورت ہو۔"
    },
    "summary": {
      "title": "ڈاکٹر کے لیے تیار خلاصہ",
      "description": "اپنی چیٹ کی تاریخ کو صحت کی دیکھ بھال فراہم کرنے والوں کے ساتھ ڈاؤن لوڈ یا شیئر کریں۔"
    }
  },
  "trust": {
    "title": "ہزاروں کا اعتماد",
    "badges": {
      "secureAI": "محفوظ اے آئی",
      "fast": "تیز",
      "reliable": "قابل اعتماد",
      "multilingual": "کثیر لسانی"
    }
  },
  "footer": {
    "about": "کے بارے میں",
    "privacy": "رازداری کی پالیسی",
    "terms": "سروس کی شرائط",
    "support": "سپورٹ",
    "contact": "ہم سے رابطہ کریں",
    "copyright": "© ۲۰۲۵ میڈی گائیڈ۔ تمام حقوق محفوظ ہیں۔"
  }
}

# Write to file
with open('src/translations/ur.json', 'w', encoding='utf-8') as f:
    json.dump(urdu_translation, f, ensure_ascii=False, indent=2)

print("Urdu translation file created successfully!")
