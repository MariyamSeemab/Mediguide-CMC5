#!/bin/bash
# Apply all translation replacements to PeriodTracker.tsx

FILE="src/pages/PeriodTracker.tsx"

# AI Companion section
sed -i "s/<h2>💬 Ask AI About Period Health<\/h2>/<h2>💬 {t('periodTracker.aiCompanion.askAI.title')}<\/h2>/g" "$FILE"
sed -i "s/<p className=\"ai-chat-intro\">Get instant answers to your period health questions<\/p>/<p className=\"ai-chat-intro\">{t('periodTracker.aiCompanion.askAI.intro')}<\/p>/g" "$FILE"
sed -i "s/<p>👋 Ask me anything about periods and women's health!<\/p>/<p>👋 {t('periodTracker.aiCompanion.askAI.welcome')}<\/p>/g" "$FILE"
sed -i 's/placeholder="Ask your question here\.\.\."/placeholder={t('\''periodTracker.aiCompanion.askAI.placeholder'\'')}/g' "$FILE"

# Sample questions - need multi-line sed
sed -i "s/Why do I get cramps?/{t('periodTracker.aiCompanion.askAI.sampleQuestions.q1')}/g" "$FILE"
sed -i "s/Why is my period late?/{t('periodTracker.aiCompanion.askAI.sampleQuestions.q2')}/g" "$FILE"
sed -i "s/What foods help during periods?/{t('periodTracker.aiCompanion.askAI.sampleQuestions.q3')}/g" "$FILE"
sed -i "s/What is PMS?/{t('periodTracker.aiCompanion.askAI.sampleQuestions.q4')}/g" "$FILE"

# Buttons
sed -i "s/>\\s*Send\\s*<\/button>/{t('periodTracker.aiCompanion.askAI.send')}<\/button>/g" "$FILE"
sed -i "s/💾 Save Today's Log/💾 {t('periodTracker.buttons.saveTodayLog')}/g" "$FILE"

# Calendar
sed -i "s/<span>🩸 Period Days<\/span>/<span>🩸 {t('periodTracker.calendar.legend.periodDays')}<\/span>/g" "$FILE"
sed -i "s/<span>🌱 Fertile Window<\/span>/<span>🌱 {t('periodTracker.calendar.legend.fertileWindow')}<\/span>/g" "$FILE"
sed -i "s/<span>🥚 Ovulation Day<\/span>/<span>🥚 {t('periodTracker.calendar.legend.ovulationDay')}<\/span>/g" "$FILE"
sed -i "s/<span>✅ Logged Data<\/span>/<span>✅ {t('periodTracker.calendar.legend.loggedData')}<\/span>/g" "$FILE"

# Messages
sed -i "s/alert('Today\\\\'s log saved successfully! ✅');/alert(t('periodTracker.messages.logSaved') + ' ✅');/g" "$FILE"

echo "✅ Translations applied to PeriodTracker.tsx"
