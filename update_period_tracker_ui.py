#!/usr/bin/env python3
"""
Update PeriodTracker.tsx to use translation keys for all hardcoded English text
"""

import re

# Read the file
with open('src/pages/PeriodTracker.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Define replacements (old_text, new_text)
replacements = [
    # AI Companion section
    (r'<h2>💬 Ask AI About Period Health</h2>', r"<h2>💬 {t('periodTracker.aiCompanion.askAI.title')}</h2>"),
    (r'<p className="ai-chat-intro">Get instant answers to your period health questions</p>', 
     r"<p className=\"ai-chat-intro\">{t('periodTracker.aiCompanion.askAI.intro')}</p>"),
    (r'<p>👋 Ask me anything about periods and women\'s health!</p>', 
     r"<p>👋 {t('periodTracker.aiCompanion.askAI.welcome')}</p>"),
    (r'placeholder="Ask your question here\.\.\."', 
     r"placeholder={t('periodTracker.aiCompanion.askAI.placeholder')}"),
    
    # Sample questions
    (r"onClick=\{\(\) => handleAiChat\('Why do I get cramps\?'\)\}>\s*Why do I get cramps\?",
     r"onClick={() => handleAiChat(t('periodTracker.aiCompanion.askAI.sampleQuestions.q1'))}>\n                {t('periodTracker.aiCompanion.askAI.sampleQuestions.q1')}"),
    (r"onClick=\{\(\) => handleAiChat\('Why is my period late\?'\)\}>\s*Why is my period late\?",
     r"onClick={() => handleAiChat(t('periodTracker.aiCompanion.askAI.sampleQuestions.q2'))}>\n                {t('periodTracker.aiCompanion.askAI.sampleQuestions.q2')}"),
    (r"onClick=\{\(\) => handleAiChat\('What foods help during periods\?'\)\}>\s*What foods help during periods\?",
     r"onClick={() => handleAiChat(t('periodTracker.aiCompanion.askAI.sampleQuestions.q3'))}>\n                {t('periodTracker.aiCompanion.askAI.sampleQuestions.q3')}"),
    (r"onClick=\{\(\) => handleAiChat\('What is PMS\?'\)\}>\s*What is PMS\?",
     r"onClick={() => handleAiChat(t('periodTracker.aiCompanion.askAI.sampleQuestions.q4'))}>\n                {t('periodTracker.aiCompanion.askAI.sampleQuestions.q4')}"),
    
    # Buttons
    (r'>\s*Send\s*</button>', r">\n                {t('periodTracker.aiCompanion.askAI.send')}\n              </button>"),
    (r'<h2>💊 Smart Pain Relief Assistant</h2>', r"<h2>💊 {t('periodTracker.smartRelief.title')}</h2>"),
    (r'<p>Click on any symptom to get personalized relief recommendations</p>', 
     r"<p>{t('periodTracker.smartRelief.subtitle')}</p>"),
    
    # Calendar section
    (r'<span>🩸 Period Days</span>', r"<span>🩸 {t('periodTracker.calendar.legend.periodDays')}</span>"),
    (r'<span>🌱 Fertile Window</span>', r"<span>🌱 {t('periodTracker.calendar.legend.fertileWindow')}</span>"),
    (r'<span>🥚 Ovulation Day</span>', r"<span>🥚 {t('periodTracker.calendar.legend.ovulationDay')}</span>"),
    (r'<span>✅ Logged Data</span>', r"<span>✅ {t('periodTracker.calendar.legend.loggedData')}</span>"),
    
    # Weekdays
    (r"<div key={day} className=\"weekday\">{day}</div>",
     r"<div key={day} className=\"weekday\">{t(`periodTracker.calendar.weekdays.${day.toLowerCase()}`)}</div>"),
    
    # Messages
    (r"alert\('Today\\'s log saved successfully! ✅'\);",
     r"alert(t('periodTracker.messages.logSaved') + ' ✅');"),
    (r'<h3 style=\{\{ color: \'#856404\', marginBottom: \'1rem\' \}\}>⚠️ Set Your Last Period Date First</h3>',
     r"<h3 style={{ color: '#856404', marginBottom: '1rem' }}>⚠️ {t('periodTracker.calendar.setDateFirst')}</h3>"),
    
    # Analytics
    (r'<h3 style=\{\{ color: \'#1976d2\', marginBottom: \'1rem\' \}\}>📊 How Analytics Works</h3>',
     r"<h3 style={{ color: '#1976d2', marginBottom: '1rem' }}>📊 {t('periodTracker.analytics.howItWorks')}</h3>"),
    (r'<h3 style=\{\{ color: \'#c44569\', marginBottom: \'1rem\', fontSize: \'2rem\' \}\}>📊 No Data Yet</h3>',
     r"<h3 style={{ color: '#c44569', marginBottom: '1rem', fontSize: '2rem' }}>📊 {t('periodTracker.analytics.noData.title')}</h3>"),
    
    # Save button
    (r'💾 Save Today\'s Log', r"💾 {t('periodTracker.buttons.saveTodayLog')}"),
    (r'Go to Period Tracker', r"{t('periodTracker.calendar.goToTracker')}"),
]

# Apply replacements
for old, new in replacements:
    content = re.sub(old, new, content)

# Write back
with open('src/pages/PeriodTracker.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ PeriodTracker.tsx updated with translation keys!")
