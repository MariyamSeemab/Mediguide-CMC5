#!/usr/bin/env python3
"""
Script to add complete lab test translations for Malayalam, Punjabi, Odia, and Assamese
"""

import json
import os

# Define complete translations for each language
translations = {
    'ml': {  # Malayalam
        'upload': {
            'title': 'ലാബ് റിപ്പോർട്ടുകൾ അപ്‌ലോഡ് ചെയ്യുക',
            'subtitle': 'AI-പവർഡ് വിശകലനത്തിനും നിങ്ങളുടെ മെഡിക്കൽ റെക്കോർഡുകളിലേക്ക് സ്വയമേവ സംയോജിപ്പിക്കുന്നതിനും നിങ്ങളുടെ ലബോറട്ടറി റിപ്പോർട്ടുകൾ അപ്‌ലോഡ് ചെയ്യുക',
            'uploadTitle': 'നിങ്ങളുടെ ലാബ് റിപ്പോർട്ട് അപ്‌ലോഡ് ചെയ്യുക',
            'supportedFormats': 'പിന്തുണയ്ക്കുന്ന ഫോർമാറ്റുകൾ: PDF, JPG, PNG, DOC (പരമാവധി 10MB)',
            'chooseFile': 'ഫയൽ തിരഞ്ഞെടുക്കുക',
            'uploadAndAnalyze': 'റിപ്പോർട്ട് അപ്‌ലോഡ് ചെയ്ത് വിശകലനം ചെയ്യുക',
            'uploading': 'അപ്‌ലോഡ് ചെയ്യുന്നു...',
            'analyzing': 'AI ഉപയോഗിച്ച് വിശകലനം ചെയ്യുന്നു...',
            'selectedFile': 'തിരഞ്ഞെടുത്ത ഫയൽ',
            'removeFile': 'ഫയൽ നീക്കം ചെയ്യുക',
            'infoCards': {
                'secure': {
                    'title': 'സുരക്ഷിതവും സ്വകാര്യവും',
                    'description': 'നിങ്ങളുടെ റിപ്പോർട്ടുകൾ എൻക്രിപ്റ്റ് ചെയ്തിരിക്കുന്നു, നിങ്ങൾക്ക് മാത്രം ആക്സസ് ചെയ്യാൻ കഴിയും'
                },
                'instant': {
                    'title': 'തൽക്ഷണ വിശകലനം',
                    'description': 'AI പ്രധാന കണ്ടെത്തലുകൾ എക്സ്ട്രാക്റ്റ് ചെയ്യുകയും മുൻകരുതൽ ഉൾക്കാഴ്ചകൾ നൽകുകയും ചെയ്യുന്നു'
                },
                'autoIntegration': {
                    'title': 'സ്വയം-സംയോജനം',
                    'description': 'കണ്ടെത്തലുകൾ സ്വയമേവ നിങ്ങളുടെ ഡോക്ടർ-റെഡി റിപ്പോർട്ടിലേക്ക് ചേർക്കുന്നു'
                }
            },
            'uploadedReports': 'നിങ്ങളുടെ അപ്‌ലോഡ് ചെയ്ത റിപ്പോർട്ടുകൾ',
            'testsAnalyzed': 'വിശകലനം ചെയ്ത ടെസ്റ്റുകൾ',
            'abnormalFindings': 'അസാധാരണ കണ്ടെത്തലുകൾ',
            'precautions': 'മുൻകരുതലുകൾ',
            'viewAnalysis': 'വിശകലനം കാണുക',
            'download': 'ഡൗൺലോഡ്',
            'print': 'പ്രിന്റ്',
            'share': 'പങ്കിടുക',
            'delete': 'ഇല്ലാതാക്കുക',
            'confirmDelete': 'ഈ ലാബ് റിപ്പോർട്ട് ഇല്ലാതാക്കണമെന്ന് തീർച്ചയാണോ?',
            'fileValidation': {
                'invalidType': 'ദയവായി സാധുവായ ഫയൽ അപ്‌ലോഡ് ചെയ്യുക (PDF, JPG, PNG, അല്ലെങ്കിൽ DOC)',
                'tooLarge': 'ഫയൽ വലുപ്പം 10MB-ൽ കുറവായിരിക്കണം',
                'selectFile': 'ദയവായി ഒരു ഫയൽ തിരഞ്ഞെടുത്ത് നിങ്ങൾ ലോഗിൻ ചെയ്തിട്ടുണ്ടെന്ന് ഉറപ്പാക്കുക',
                'dataNotAvailable': 'റിപ്പോർട്ട് ഫയൽ ഡാറ്റ ലഭ്യമല്ല',
                'downloadFailed': 'റിപ്പോർട്ട് ഡൗൺലോഡ് ചെയ്യുന്നതിൽ പരാജയപ്പെട്ടു. ദയവായി വീണ്ടും ശ്രമിക്കുക.',
                'allowPopups': 'റിപ്പോർട്ടുകൾ പ്രിന്റ് ചെയ്യാൻ ദയവായി പോപ്പ്-അപ്പുകൾ അനുവദിക്കുക'
            },
            'shareSuccess': 'റിപ്പോർട്ട് സംഗ്രഹം ക്ലിപ്പ്ബോർഡിലേക്ക് പകർത്തി!',
            'sharePrompt': 'പങ്കിടാൻ ഈ റിപ്പോർട്ട് സംഗ്രഹം പകർത്തുക:',
            'exportPdfMessage': 'ദയവായി പ്രിന്റ് ഉപയോഗിച്ച് PDF ആയി സേവ് ചെയ്യുക തിരഞ്ഞെടുക്കുക'
        },
        'results': {
            'title': 'നിങ്ങളുടെ ലാബ് ഫലങ്ങൾ',
            'downloadAll': 'എല്ലാം ഡൗൺലോഡ് ചെയ്യുക',
            'emptyState': {
                'title': 'ഇതുവരെ ലാബ് റിപ്പോർട്ടുകളൊന്നുമില്ല',
                'description': 'ഇവിടെ കാണാൻ നിങ്ങളുടെ ആദ്യ ലാബ് റിപ്പോർട്ട് അപ്‌ലോഡ് ചെയ്യുക',
                'uploadNow': 'ലാബ് റിപ്പോർട്ട് അപ്‌ലോഡ് ചെയ്യുക'
            },
            'status': {
                'normal': 'സാധാരണം',
                'abnormal': 'ശ്രദ്ധ ആവശ്യമാണ്',
                'new': 'പുതിയത്'
            },
            'meta': {
                'uploadDate': 'അപ്‌ലോഡ് തീയതി',
                'uploadTime': 'അപ്‌ലോഡ് സമയം',
                'testsAnalyzed': 'വിശകലനം ചെയ്ത ടെസ്റ്റുകൾ',
                'abnormalFindings': 'അസാധാരണ കണ്ടെത്തലുകൾ'
            },
            'quickSummary': 'ദ്രുത സംഗ്രഹം',
            'viewFullReport': 'പൂർണ്ണ റിപ്പോർട്ട് കാണുക'
        },
        'booking': {
            'title': 'ലാബ് ടെസ്റ്റുകൾ ബുക്ക് ചെയ്യുക',
            'selectedTests': 'തിരഞ്ഞെടുത്ത ടെസ്റ്റുകൾ',
            'totalAmount': 'ആകെ',
            'patientName': 'രോഗിയുടെ പേര്',
            'phoneNumber': 'ഫോൺ നമ്പർ',
            'email': 'ഇമെയിൽ',
            'preferredDate': 'ഇഷ്ടപ്പെട്ട തീയതി',
            'preferredTime': 'ഇഷ്ടപ്പെട്ട സമയം',
            'selectTime': 'സമയം തിരഞ്ഞെടുക്കുക',
            'homeCollection': 'ഹോം കളക്ഷൻ',
            'address': 'വിലാസം',
            'addressPlaceholder': 'ഹോം കളക്ഷനായി നിങ്ങളുടെ പൂർണ്ണ വിലാസം നൽകുക',
            'cancel': 'റദ്ദാക്കുക',
            'confirmBooking': 'ബുക്കിംഗ് സ്ഥിരീകരിക്കുക',
            'success': 'ലാബ് ടെസ്റ്റുകൾ വിജയകരമായി ബുക്ക് ചെയ്തു! നിങ്ങൾക്ക് ഉടൻ ഒരു സ്ഥിരീകരണ കോൾ ലഭിക്കും.',
            'timeSlots': {
                'morning1': 'രാവിലെ ൬:൦൦ - ൮:൦൦',
                'morning2': 'രാവിലെ ൮:൦൦ - ൧൦:൦൦',
                'morning3': 'രാവിലെ ൧൦:൦൦ - ഉച്ച ൧൨:൦൦',
                'afternoon1': 'ഉച്ചയ്ക്ക് ൨:൦൦ - ൪:൦൦',
                'afternoon2': 'ഉച്ചയ്ക്ക് ൪:൦൦ - ൬:൦൦'
            }
        },
        'analysis': {
            'title': 'AI ലാബ് റിപ്പോർട്ട് വിശകലനം',
            'reportInfo': 'റിപ്പോർട്ട് വിവരങ്ങൾ',
            'fileName': 'ഫയൽ പേര്',
            'uploadDate': 'അപ്‌ലോഡ് തീയതി',
            'reportId': 'റിപ്പോർട്ട് ID',
            'fileSize': 'ഫയൽ വലുപ്പം',
            'extractedResults': 'എക്സ്ട്രാക്റ്റ് ചെയ്ത ടെസ്റ്റ് ഫലങ്ങൾ',
            'testName': 'ടെസ്റ്റ് പേര്',
            'value': 'മൂല്യം',
            'normalRange': 'സാധാരണ പരിധി',
            'status': 'നില',
            'abnormalFindings': 'അസാധാരണ കണ്ടെത്തലുകൾ',
            'precautionaryGuidance': 'മുൻകരുതൽ മാർഗ്ഗനിർദ്ദേശം',
            'recommendations': 'ശുപാർശകൾ',
            'disclaimer': 'പ്രധാനം: ഈ AI വിശകലനം വിവരദായക ആവശ്യങ്ങൾക്ക് മാത്രമാണ്, മെഡിക്കൽ രോഗനിർണയം നൽകുന്നില്ല. ശരിയായ മെഡിക്കൽ ഉപദേശത്തിനും ചികിത്സയ്ക്കും ദയവായി യോഗ്യതയുള്ള ആരോഗ്യ പ്രൊഫഷണലുമായി കൂടിയാലോചിക്കുക.',
            'integrationNotice': 'ഈ ലാബ് റിപ്പോർട്ട് വിശകലനം സ്വയമേവ നിങ്ങളുടെ ഡോക്ടർ-റെഡി റിപ്പോർട്ടിലേക്ക് സംയോജിപ്പിച്ചിരിക്കുന്നു, നിങ്ങളുടെ ആരോഗ്യ സേവന ദാതാവിന് അവലോകനം ചെയ്യാൻ ലഭ്യമാണ്.',
            'close': 'അടയ്ക്കുക'
        },
        'tests': {
            'cbc': {
                'name': 'സമ്പൂർണ്ണ രക്ത എണ്ണം (CBC)',
                'description': 'മൊത്തത്തിലുള്ള ആരോഗ്യം പരിശോധിക്കാനും വിവിധ വൈകല്യങ്ങൾ കണ്ടെത്താനും സമഗ്ര രക്ത പരിശോധന',
                'preparation1': '൮-൧൨ മണിക്കൂർ ഉപവാസം ആവശ്യമാണ്',
                'preparation2': 'പരിശോധനയ്ക്ക് ൨൪ മണിക്കൂർ മുമ്പ് മദ്യം ഒഴിവാക്കുക',
                'normalRange': 'ഘടകം അനുസരിച്ച് വ്യത്യാസപ്പെടുന്നു'
            },
            'lipidProfile': {
                'name': 'ലിപിഡ് പ്രൊഫൈൽ',
                'description': 'ഹൃദ്രോഗ അപകടസാധ്യത വിലയിരുത്താൻ കൊളസ്ട്രോൾ, ട്രൈഗ്ലിസറൈഡ് അളവുകൾ അളക്കുന്നു',
                'preparation1': '൧൨ മണിക്കൂർ ഉപവാസം ആവശ്യമാണ്',
                'preparation2': 'പരിശോധനയ്ക്ക് മുമ്പ് പുകവലി ഇല്ല',
                'normalRange': 'മൊത്തം കൊളസ്ട്രോൾ: <൨൦൦ mg/dL'
            },
            'hba1c': {
                'name': 'HbA1c (പ്രമേഹം)',
                'description': 'കഴിഞ്ഞ ൨-൩ മാസങ്ങളിലെ ശരാശരി രക്തത്തിലെ പഞ്ചസാര അളവ് അളക്കുന്നു',
                'preparation1': 'ഉപവാസം ആവശ്യമില്ല',
                'normalRange': '<൫.൭%'
            },
            'lft': {
                'name': 'കരൾ പ്രവർത്തന പരിശോധന (LFT)',
                'description': 'വിവിധ എൻസൈം അളവുകളിലൂടെ കരൾ ആരോഗ്യവും പ്രവർത്തനവും വിലയിരുത്തുന്നു',
                'preparation1': '൮-൧൨ മണിക്കൂർ ഉപവാസം ആവശ്യമാണ്',
                'normalRange': 'ALT: ൭-൫൬ U/L, AST: ൧൦-൪൦ U/L'
            },
            'kft': {
                'name': 'വൃക്ക പ്രവർത്തന പരിശോധന (KFT)',
                'description': 'ക്രിയാറ്റിനിൻ, യൂറിയ അളവുകളിലൂടെ വൃക്ക പ്രവർത്തനം വിലയിരുത്തുന്നു',
                'preparation1': 'പ്രത്യേക തയ്യാറെടുപ്പ് ആവശ്യമില്ല',
                'normalRange': 'ക്രിയാറ്റിനിൻ: ൦.൬-൧.൨ mg/dL'
            },
            'thyroid': {
                'name': 'തൈറോയ്ഡ് പ്രൊഫൈൽ (T3, T4, TSH)',
                'description': 'സമ്പൂർണ്ണ തൈറോയ്ഡ് പ്രവർത്തന വിലയിരുത്തൽ',
                'preparation1': 'ഉപവാസം ആവശ്യമില്ല',
                'preparation2': 'മരുന്നുകൾ പതിവുപോലെ കഴിക്കുക',
                'normalRange': 'TSH: ൦.൪-൪.൦ mIU/L'
            },
            'vitaminD': {
                'name': 'വിറ്റാമിൻ D ടെസ്റ്റ്',
                'description': 'രക്തത്തിലെ വിറ്റാമിൻ D അളവ് അളക്കുന്നു',
                'preparation1': 'പ്രത്യേക തയ്യാറെടുപ്പ് ആവശ്യമില്ല',
                'normalRange': '൩൦-൧൦൦ ng/mL'
            },
            'urineRoutine': {
                'name': 'മൂത്ര പതിവ് & മൈക്രോസ്കോപ്പി',
                'description': 'അണുബാധകൾക്കും വൃക്ക പ്രവർത്തനത്തിനുമുള്ള അടിസ്ഥാന മൂത്ര വിശകലനം',
                'preparation1': 'ആദ്യ രാവിലെ മൂത്ര സാമ്പിൾ ശേഖരിക്കുക',
                'normalRange': 'അസാധാരണ കണ്ടെത്തലുകളൊന്നുമില്ല'
            }
        }
    }
}

def update_translation_file(lang_code, translations_data):
    """Update a translation file with new translations"""
    file_path = f'src/translations/{lang_code}.json'
    
    try:
        # Read existing file
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        # Update labTest section
        if 'labTest' in data:
            for section, content in translations_data.items():
                data['labTest'][section] = content
        
        # Write back
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        
        print(f'✅ Updated {lang_code}.json successfully')
        return True
    except Exception as e:
        print(f'❌ Error updating {lang_code}.json: {e}')
        return False

# Update Malayalam
if __name__ == '__main__':
    print('Updating Malayalam translations...')
    update_translation_file('ml', translations['ml'])
    print('Done!')
