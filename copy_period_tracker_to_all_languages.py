#!/usr/bin/env python3
"""
Copy Period Tracker translation structure from Hindi to all other languages
This creates the structure - you can translate the actual text later
"""

import json
import os

# List of all language files
LANGUAGES = ['ta', 'te', 'bn', 'mr', 'kn', 'ml', 'pa', 'or', 'as', 'gu', 'ur']

def copy_structure_from_hindi():
    """Copy the periodTracker structure from Hindi to all other languages"""
    
    # Read Hindi translations
    with open('src/translations/hi.json', 'r', encoding='utf-8') as f:
        hindi_data = json.load(f)
    
    if 'periodTracker' not in hindi_data:
        print("❌ periodTracker not found in Hindi translations")
        return
    
    period_tracker_structure = hindi_data['periodTracker']
    
    # Copy to each language
    for lang in LANGUAGES:
        file_path = f'src/translations/{lang}.json'
        
        try:
            # Read existing translations
            with open(file_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            # Add periodTracker structure (keeping Hindi text for now - can be translated later)
            if 'periodTracker' not in data:
                data['periodTracker'] = {}
            
            # Merge the structure
            def merge_dict(target, source):
                for key, value in source.items():
                    if key not in target:
                        target[key] = value
                    elif isinstance(value, dict) and isinstance(target[key], dict):
                        merge_dict(target[key], value)
            
            merge_dict(data['periodTracker'], period_tracker_structure)
            
            # Write back
            with open(file_path, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            
            print(f"✅ Updated {lang}.json with Period Tracker structure")
            
        except Exception as e:
            print(f"❌ Error updating {lang}.json: {e}")

def main():
    print("🚀 Copying Period Tracker translations to all languages...")
    print("📝 Note: This copies the Hindi text. You can translate it later.")
    print()
    
    copy_structure_from_hindi()
    
    print()
    print("✅ All language files updated!")
    print("💡 The app will now work in all languages (using Hindi text as placeholder)")
    print("🌍 To translate to native languages, edit each .json file manually")

if __name__ == '__main__':
    main()
