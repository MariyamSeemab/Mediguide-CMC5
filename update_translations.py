import json

# Translation data for each language
translations = {
    'bn.json': {
        "users": "10,000+",
        "usersLabel": "সক্রিয় ব্যবহারকারী",
        "languages": "13+",
        "languagesLabel": "সমর্থিত ভাষা",
        "availability": "24/7",
        "availabilityLabel": "উপলব্ধ সহায়তা",
        "security": "100%",
        "securityLabel": "সুরক্ষিত এবং ব্যক্তিগত"
    },
    'mr.json': {
        "users": "10,000+",
        "usersLabel": "सक्रिय वापरकर्ते",
        "languages": "13+",
        "languagesLabel": "समर्थित भाषा",
        "availability": "24/7",
        "availabilityLabel": "उपलब्ध समर्थन",
        "security": "100%",
        "securityLabel": "सुरक्षित आणि खाजगी"
    },
    'gu.json': {
        "users": "10,000+",
        "usersLabel": "સક્રિય વપરાશકર્તાઓ",
        "languages": "13+",
        "languagesLabel": "સમર્થિત ભાષાઓ",
        "availability": "24/7",
        "availabilityLabel": "ઉપલબ્ધ સપોર્ટ",
        "security": "100%",
        "securityLabel": "સુરક્ષિત અને ખાનગી"
    },
    'kn.json': {
        "users": "10,000+",
        "usersLabel": "ಸಕ್ರಿಯ ಬಳಕೆದಾರರು",
        "languages": "13+",
        "languagesLabel": "ಬೆಂಬಲಿತ ಭಾಷೆಗಳು",
        "availability": "24/7",
        "availabilityLabel": "ಲಭ್ಯವಿರುವ ಬೆಂಬಲ",
        "security": "100%",
        "securityLabel": "ಸುರಕ್ಷಿತ ಮತ್ತು ಖಾಸಗಿ"
    },
    'ml.json': {
        "users": "10,000+",
        "usersLabel": "സജീവ ഉപയോക്താക്കൾ",
        "languages": "13+",
        "languagesLabel": "പിന്തുണയ്ക്കുന്ന ഭാഷകൾ",
        "availability": "24/7",
        "availabilityLabel": "ലഭ്യമായ പിന്തുണ",
        "security": "100%",
        "securityLabel": "സുരക്ഷിതവും സ്വകാര്യവും"
    },
    'pa.json': {
        "users": "10,000+",
        "usersLabel": "ਸਰਗਰਮ ਉਪਭੋਗਤਾ",
        "languages": "13+",
        "languagesLabel": "ਸਮਰਥਿਤ ਭਾਸ਼ਾਵਾਂ",
        "availability": "24/7",
        "availabilityLabel": "ਉਪਲਬਧ ਸਹਾਇਤਾ",
        "security": "100%",
        "securityLabel": "ਸੁਰੱਖਿਅਤ ਅਤੇ ਨਿੱਜੀ"
    },
    'or.json': {
        "users": "10,000+",
        "usersLabel": "ସକ୍ରିୟ ଉପଯୋଗକର୍ତ୍ତା",
        "languages": "13+",
        "languagesLabel": "ସମର୍ଥିତ ଭାଷାଗୁଡ଼ିକ",
        "availability": "24/7",
        "availabilityLabel": "ଉପଲବ୍ଧ ସହାୟତା",
        "security": "100%",
        "securityLabel": "ସୁରକ୍ଷିତ ଏବଂ ବ୍ୟକ୍ତିଗତ"
    },
    'as.json': {
        "users": "10,000+",
        "usersLabel": "সক্ৰিয় ব্যৱহাৰকাৰী",
        "languages": "13+",
        "languagesLabel": "সমৰ্থিত ভাষা",
        "availability": "24/7",
        "availabilityLabel": "উপলব্ধ সহায়",
        "security": "100%",
        "securityLabel": "সুৰক্ষিত আৰু ব্যক্তিগত"
    },
    'ur.json': {
        "users": "10,000+",
        "usersLabel": "فعال صارفین",
        "languages": "13+",
        "languagesLabel": "معاون زبانیں",
        "availability": "24/7",
        "availabilityLabel": "دستیاب معاونت",
        "security": "100%",
        "securityLabel": "محفوظ اور نجی"
    }
}

# Update each file
for filename, new_stats in translations.items():
    filepath = f'src/translations/{filename}'
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        # Update the impact stats
        if 'about' in data and 'impact' in data['about'] and 'stats' in data['about']['impact']:
            data['about']['impact']['stats'].update(new_stats)
            
            with open(filepath, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            print(f'✅ Updated {filename}')
        else:
            print(f'⚠️  Structure not found in {filename}')
    except Exception as e:
        print(f'❌ Error updating {filename}: {e}')

print('\n✅ All translations updated!')
