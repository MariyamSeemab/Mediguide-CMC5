#!/usr/bin/env python3
"""
Copy Relief Solutions from Hindi to all other languages
"""

import json

LANGUAGES = ['ta', 'te', 'bn', 'mr', 'kn', 'ml', 'pa', 'or', 'as', 'gu', 'ur']

def copy_relief_solutions():
    # Read Hindi translations
    with open('src/translations/hi.json', 'r', encoding='utf-8') as f:
        hindi_data = json.load(f)
    
    if 'periodTracker' not in hindi_data or 'reliefSolutions' not in hindi_data['periodTracker']:
        print("❌ reliefSolutions not found in Hindi translations")
        return
    
    relief_solutions = hindi_data['periodTracker']['reliefSolutions']
    
    # Copy to each language
    for lang in LANGUAGES:
        file_path = f'src/translations/{lang}.json'
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            if 'periodTracker' not in data:
                data['periodTracker'] = {}
            
            data['periodTracker']['reliefSolutions'] = relief_solutions
            
            with open(file_path, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            
            print(f"✅ Added relief solutions to {lang}.json")
            
        except Exception as e:
            print(f"❌ Error updating {lang}.json: {e}")

if __name__ == '__main__':
    print("🚀 Copying relief solutions to all languages...")
    copy_relief_solutions()
    print("\n✅ Done! All languages now have relief solutions")
