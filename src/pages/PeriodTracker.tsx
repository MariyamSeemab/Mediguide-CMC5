import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './PeriodTracker.css';
import './PeriodTrackerExtended.css';
import './PeriodTrackerAI.css';
import './PeriodTrackerCompact.css';

interface PeriodLog {
  id: string;
  startDate: string;
  endDate?: string;
  flow: 'light' | 'medium' | 'heavy';
  symptoms: string[];
  notes: string;
}

interface DailyLog {
  date: string;
  mood: 'happy' | 'sad' | 'anxious' | 'angry' | 'neutral' | '';
  waterIntake: number;
  symptoms: string[];
  flow?: 'light' | 'medium' | 'heavy';
  notes: string;
}

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isPeriod: boolean;
  isFertile: boolean;
  isOvulation: boolean;
  isToday: boolean;
  hasLog: boolean;
}

const PeriodTracker: React.FC = () => {
  const navigate = useNavigate();
  const { t, currentLanguage, availableLanguages, changeLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState<'aicompanion' | 'tracker' | 'calendar' | 'analytics'>('calendar');
  const [lastPeriodDate, setLastPeriodDate] = useState('');
  const [cycleLength, setCycleLength] = useState(28);
  const [periodDuration, setPeriodDuration] = useState(5);
  const [periodLogs, setPeriodLogs] = useState<PeriodLog[]>([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [dailyLogs, setDailyLogs] = useState<DailyLog[]>([]);
  
  // Calendar state
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showDayModal, setShowDayModal] = useState(false);
  
  // AI Companion features
  const [privacyMode, setPrivacyMode] = useState(false);
  const [showEmergencyAlert, setShowEmergencyAlert] = useState(false);
  const [emergencySymptoms, setEmergencySymptoms] = useState<string[]>([]);
  const [sleepHours, setSleepHours] = useState(7);
  const [stressLevel, setStressLevel] = useState<'low' | 'medium' | 'high'>('low');
  const [aiChatMessages, setAiChatMessages] = useState<Array<{role: 'user' | 'assistant', content: string}>>([]);
  const [aiChatInput, setAiChatInput] = useState('');
  const [showMeditationModal, setShowMeditationModal] = useState(false);
  const [showPeriodPrepModal, setShowPeriodPrepModal] = useState(false);
  const [expandedSymptom, setExpandedSymptom] = useState<string | null>(null);
  
  // Daily tracking state
  const [todayMood, setTodayMood] = useState<'happy' | 'sad' | 'anxious' | 'angry' | 'neutral' | ''>('');
  const [waterIntake, setWaterIntake] = useState(0);
  const [flowIntensity, setFlowIntensity] = useState<'light' | 'medium' | 'heavy' | ''>('');
  const [dailyNotes, setDailyNotes] = useState('');

  // Load data from localStorage
  useEffect(() => {
    const savedLastPeriod = localStorage.getItem('lastPeriodDate');
    const savedCycleLength = localStorage.getItem('cycleLength');
    const savedPeriodDuration = localStorage.getItem('periodDuration');
    const savedDailyLogs = localStorage.getItem('dailyLogs');
    
    if (savedLastPeriod) setLastPeriodDate(savedLastPeriod);
    if (savedCycleLength) setCycleLength(Number(savedCycleLength));
    if (savedPeriodDuration) setPeriodDuration(Number(savedPeriodDuration));
    if (savedDailyLogs) {
      const logs = JSON.parse(savedDailyLogs);
      setDailyLogs(logs);
      
      // Load today's log if it exists
      const today = new Date().toISOString().split('T')[0];
      const todayLog = logs.find((log: DailyLog) => log.date === today);
      if (todayLog) {
        setTodayMood(todayLog.mood);
        setWaterIntake(todayLog.waterIntake);
        setSelectedSymptoms(todayLog.symptoms);
        setFlowIntensity(todayLog.flow || '');
        setDailyNotes(todayLog.notes);
      }
    }
  }, []);

  // Save data to localStorage
  useEffect(() => {
    if (lastPeriodDate) localStorage.setItem('lastPeriodDate', lastPeriodDate);
    localStorage.setItem('cycleLength', cycleLength.toString());
    localStorage.setItem('periodDuration', periodDuration.toString());
    localStorage.setItem('dailyLogs', JSON.stringify(dailyLogs));
  }, [lastPeriodDate, cycleLength, periodDuration, dailyLogs]);

  // Calculate next period and ovulation
  const calculateNextPeriod = () => {
    if (!lastPeriodDate) return null;
    const lastDate = new Date(lastPeriodDate);
    const nextDate = new Date(lastDate);
    nextDate.setDate(nextDate.getDate() + cycleLength);
    return nextDate.toLocaleDateString();
  };

  const calculateOvulation = () => {
    if (!lastPeriodDate) return null;
    const lastDate = new Date(lastPeriodDate);
    const ovulationDate = new Date(lastDate);
    ovulationDate.setDate(ovulationDate.getDate() + Math.floor(cycleLength / 2));
    return ovulationDate.toLocaleDateString();
  };

  // Check if a date is a period day
  const isPeriodDay = (date: Date): boolean => {
    if (!lastPeriodDate) return false;
    const lastPeriod = new Date(lastPeriodDate);
    const daysDiff = Math.floor((date.getTime() - lastPeriod.getTime()) / (1000 * 60 * 60 * 24));
    
    // Check current cycle
    if (daysDiff >= 0 && daysDiff < periodDuration) return true;
    
    // Check future cycles
    const cycleNumber = Math.floor(daysDiff / cycleLength);
    const dayInCycle = daysDiff % cycleLength;
    if (cycleNumber > 0 && dayInCycle < periodDuration) return true;
    
    return false;
  };

  // Check if a date is in fertile window (5 days before ovulation + ovulation day)
  const isFertileDay = (date: Date): boolean => {
    if (!lastPeriodDate) return false;
    const lastPeriod = new Date(lastPeriodDate);
    const daysDiff = Math.floor((date.getTime() - lastPeriod.getTime()) / (1000 * 60 * 60 * 24));
    const ovulationDay = Math.floor(cycleLength / 2);
    
    const cycleNumber = Math.floor(daysDiff / cycleLength);
    const dayInCycle = daysDiff % cycleLength;
    
    return dayInCycle >= (ovulationDay - 5) && dayInCycle <= ovulationDay;
  };

  // Check if a date is ovulation day
  const isOvulationDay = (date: Date): boolean => {
    if (!lastPeriodDate) return false;
    const lastPeriod = new Date(lastPeriodDate);
    const daysDiff = Math.floor((date.getTime() - lastPeriod.getTime()) / (1000 * 60 * 60 * 24));
    const ovulationDay = Math.floor(cycleLength / 2);
    
    const dayInCycle = daysDiff % cycleLength;
    return dayInCycle === ovulationDay;
  };

  // Generate calendar days
  const generateCalendarDays = (): CalendarDay[] => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days: CalendarDay[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      
      const dateStr = date.toISOString().split('T')[0];
      const hasLog = dailyLogs.some(log => log.date === dateStr);
      
      days.push({
        date,
        isCurrentMonth: date.getMonth() === month,
        isPeriod: isPeriodDay(date),
        isFertile: isFertileDay(date),
        isOvulation: isOvulationDay(date),
        isToday: date.getTime() === today.getTime(),
        hasLog
      });
    }
    
    return days;
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleDayClick = (day: CalendarDay) => {
    setSelectedDate(day.date);
    const dateStr = day.date.toISOString().split('T')[0];
    const existingLog = dailyLogs.find(log => log.date === dateStr);
    
    if (existingLog) {
      setTodayMood(existingLog.mood);
      setWaterIntake(existingLog.waterIntake);
      setSelectedSymptoms(existingLog.symptoms);
      setFlowIntensity(existingLog.flow || '');
      setDailyNotes(existingLog.notes);
    } else {
      setTodayMood('');
      setWaterIntake(0);
      setSelectedSymptoms([]);
      setFlowIntensity('');
      setDailyNotes('');
    }
    
    setShowDayModal(true);
  };

  const saveDailyLog = () => {
    if (!selectedDate) return;
    
    const dateStr = selectedDate.toISOString().split('T')[0];
    const newLog: DailyLog = {
      date: dateStr,
      mood: todayMood,
      waterIntake,
      symptoms: selectedSymptoms,
      flow: flowIntensity || undefined,
      notes: dailyNotes
    };
    
    setDailyLogs(prev => {
      const filtered = prev.filter(log => log.date !== dateStr);
      return [...filtered, newLog];
    });
    
    setShowDayModal(false);
  };

  const exportData = () => {
    const data = {
      lastPeriodDate,
      cycleLength,
      periodDuration,
      dailyLogs
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `period-tracker-data-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
  };

  // AI Companion Helper Functions
  const getCurrentCyclePhase = (): 'menstrual' | 'follicular' | 'ovulation' | 'luteal' | 'unknown' => {
    if (!lastPeriodDate) return 'unknown';
    
    const lastPeriod = new Date(lastPeriodDate);
    const today = new Date();
    const daysSinceLastPeriod = Math.floor((today.getTime() - lastPeriod.getTime()) / (1000 * 60 * 60 * 24));
    const dayInCycle = daysSinceLastPeriod % cycleLength;
    
    if (dayInCycle < periodDuration) return 'menstrual';
    if (dayInCycle < Math.floor(cycleLength / 2) - 2) return 'follicular';
    if (dayInCycle >= Math.floor(cycleLength / 2) - 2 && dayInCycle <= Math.floor(cycleLength / 2) + 2) return 'ovulation';
    return 'luteal';
  };

  const checkEmergencySymptoms = () => {
    const emergencyList: string[] = [];
    
    const recentLogs = dailyLogs.slice(-7);
    const hasHeavyBleeding = recentLogs.filter(log => log.flow === 'heavy').length >= 3;
    const hasSeverePain = recentLogs.filter(log => log.symptoms.includes('cramps')).length >= 5;
    
    if (hasHeavyBleeding) emergencyList.push('Extremely heavy bleeding for multiple days');
    if (hasSeverePain) emergencyList.push('Persistent severe pain');
    
    if (lastPeriodDate) {
      const daysSinceLastPeriod = Math.floor((new Date().getTime() - new Date(lastPeriodDate).getTime()) / (1000 * 60 * 60 * 24));
      if (daysSinceLastPeriod > cycleLength + 14) {
        emergencyList.push('Period significantly delayed');
      }
    }
    
    if (emergencyList.length > 0) {
      setEmergencySymptoms(emergencyList);
      setShowEmergencyAlert(true);
    }
  };

  const calculateHealthScore = (): number => {
    let score = 100;
    
    if (sleepHours < 6) score -= 30;
    else if (sleepHours < 7) score -= 15;
    else if (sleepHours > 9) score -= 10;
    
    const avgWater = dailyLogs.length > 0 
      ? dailyLogs.reduce((sum, log) => sum + log.waterIntake, 0) / dailyLogs.length 
      : 0;
    if (avgWater < 6) score -= 25;
    else if (avgWater < 8) score -= 10;
    
    if (stressLevel === 'high') score -= 25;
    else if (stressLevel === 'medium') score -= 10;
    
    const recentSymptoms = dailyLogs.slice(-7).reduce((acc, log) => acc + log.symptoms.length, 0);
    if (recentSymptoms > 15) score -= 20;
    else if (recentSymptoms > 10) score -= 10;
    
    return Math.max(0, score);
  };

  const getHealthScoreLevel = (score: number): string => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Moderate';
    return 'Needs Attention';
  };

  const getPainReliefRecommendations = (symptom: string) => {
    // Try to get translations first
    try {
      const reliefSolutions = t('periodTracker.reliefSolutions') as any;
      if (reliefSolutions && typeof reliefSolutions === 'object' && reliefSolutions[symptom]) {
        return reliefSolutions[symptom];
      }
    } catch (error) {
      console.log('Translation not found, using fallback');
    }
    
    // Fallback to English if translations not available
    const recommendations: { [key: string]: any } = {
      cramps: {
        homeRemedies: ['Apply heating pad to lower abdomen', 'Take warm bath with Epsom salt', 'Gentle abdominal massage', 'Stay hydrated'],
        medicines: ['Ibuprofen (400mg every 6-8 hours)', 'Naproxen (220mg every 8-12 hours)', 'Acetaminophen (500mg every 6 hours)'],
        exercises: ['Child\'s Pose', 'Cat-Cow Stretch', 'Pelvic tilts', 'Gentle walking'],
        warning: 'If pain is unbearable or doesn\'t improve with medication, consult a doctor',
        dontDo: ['Don\'t consume excessive caffeine or alcohol', 'Avoid intense physical activity if pain is severe']
      },
      headache: {
        homeRemedies: ['Rest in dark, quiet room', 'Cold compress on forehead', 'Stay hydrated', 'Peppermint oil on temples'],
        medicines: ['Ibuprofen (400mg)', 'Acetaminophen (500mg)', 'Aspirin (325mg)'],
        exercises: ['Neck stretches', 'Deep breathing', 'Light walking', 'Shoulder rolls'],
        warning: 'Seek medical help if headache is severe or accompanied by vision changes',
        dontDo: ['Don\'t skip meals or get dehydrated', 'Avoid bright screens and loud noises']
      },
      bloating: {
        homeRemedies: ['Drink peppermint tea', 'Avoid salty foods', 'Eat smaller meals', 'Light abdominal massage'],
        medicines: ['Simethicone (Gas-X)', 'Probiotics', 'Magnesium supplements'],
        exercises: ['Walking', 'Yoga twists', 'Knee-to-chest pose', 'Light cardio'],
        warning: 'If bloating is severe or persistent, consult a healthcare provider',
        dontDo: ['Don\'t eat salty or processed foods', 'Avoid carbonated drinks']
      },
      backPain: {
        homeRemedies: ['Apply heat or ice pack', 'Maintain good posture', 'Use supportive pillow', 'Warm compress'],
        medicines: ['Ibuprofen (400mg)', 'Naproxen (220mg)', 'Topical pain relief cream'],
        exercises: ['Cat-Cow Stretch', 'Child\'s Pose', 'Pelvic tilts', 'Gentle back stretches'],
        warning: 'Consult doctor if pain radiates down legs or is accompanied by numbness',
        dontDo: ['Don\'t sit or stand for too long', 'Avoid heavy lifting']
      },
      fatigue: {
        homeRemedies: ['Get 7-9 hours sleep', 'Eat iron-rich foods', 'Stay hydrated', 'Take short naps'],
        medicines: ['Iron supplements (if deficient)', 'Vitamin B12', 'Multivitamin'],
        exercises: ['Light walking', 'Gentle yoga', 'Stretching', 'Avoid intense workouts'],
        warning: 'Persistent fatigue may indicate anemia - get blood work done',
        dontDo: ['Don\'t skip sleep or stay up late', 'Avoid excessive sugar and junk food']
      },
      moodSwings: {
        homeRemedies: ['Practice deep breathing', 'Get regular exercise', 'Maintain sleep schedule', 'Talk to loved ones'],
        medicines: ['Magnesium supplements', 'Vitamin B6', 'Evening primrose oil'],
        exercises: ['Yoga', 'Walking', 'Dancing', 'Swimming'],
        warning: 'If mood changes are severe or affecting daily life, seek professional help',
        dontDo: ['Don\'t isolate yourself completely', 'Avoid making major decisions during this time']
      }
    };
    
    return recommendations[symptom] || null;
  };

  const handleAiChat = (question: string) => {
    try {
      console.log('🔍 Navigating to chatbot with question:', question);
      // Navigate to AI Assistant page with the question pre-filled
      navigate('/chatbot', { state: { initialMessage: question } });
    } catch (error) {
      console.error('❌ Error in handleAiChat:', error);
      alert('Navigation error. Please try again.');
    }
  };

  useEffect(() => {
    if (dailyLogs.length > 0) {
      checkEmergencySymptoms();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dailyLogs]);

  useEffect(() => {
    if (lastPeriodDate) {
      const nextPeriod = new Date(lastPeriodDate);
      nextPeriod.setDate(nextPeriod.getDate() + cycleLength);
      const daysUntilPeriod = Math.floor((nextPeriod.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
      
      if (daysUntilPeriod === 3 || daysUntilPeriod === 2) {
        setShowPeriodPrepModal(true);
      }
    }
  }, [lastPeriodDate, cycleLength]);

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptom) 
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  // Save today's log
  const saveTodayLog = () => {
    const today = new Date().toISOString().split('T')[0];
    const newLog: DailyLog = {
      date: today,
      mood: todayMood,
      waterIntake,
      symptoms: selectedSymptoms,
      flow: flowIntensity || undefined,
      notes: dailyNotes
    };
    
    setDailyLogs(prev => {
      const filtered = prev.filter(log => log.date !== today);
      return [...filtered, newLog];
    });
    
    alert('Today\'s log saved successfully! ✅');
  };

  return (
    <div className="period-tracker-page">
      {/* Header */}
      <header className="period-header">
        <button onClick={() => navigate('/')} className="back-button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        <div className="header-content">
          <h1>{privacyMode ? `🏥 ${t('periodTracker.privacyMode.enabled')}` : `🩸 ${t('periodTracker.title')}`}</h1>
          <p>{privacyMode ? t('periodTracker.privacyMode.subtitle') : t('periodTracker.subtitle')}</p>
        </div>
        <select
          value={currentLanguage}
          onChange={(e) => changeLanguage(e.target.value)}
          className="language-selector"
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            background: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            fontSize: '0.9rem',
            cursor: 'pointer',
            marginRight: '1rem',
            fontWeight: '600'
          }}
        >
          {availableLanguages.map((lang) => (
            <option key={lang.code} value={lang.code} style={{ color: '#333' }}>
              {lang.flag} {lang.nativeName}
            </option>
          ))}
        </select>
        <button 
          onClick={() => setPrivacyMode(!privacyMode)} 
          className="privacy-toggle"
          title={privacyMode ? 'Disable Privacy Mode' : 'Enable Privacy Mode'}
        >
          {privacyMode ? '🔒' : '👁️'}
        </button>
      </header>

      {/* Tab Navigation */}
      <div className="period-tabs">
        <button 
          className={activeTab === 'aicompanion' ? 'active' : ''} 
          onClick={() => {
            console.log('🔘 AI Companion tab clicked');
            setActiveTab('aicompanion');
          }}
        >
          🤖 {t('periodTracker.tabs.aiCompanion')}
        </button>
        <button 
          className={activeTab === 'tracker' ? 'active' : ''} 
          onClick={() => {
            console.log('🔘 Period Tracker tab clicked');
            setActiveTab('tracker');
          }}
        >
          📝 {t('periodTracker.tabs.tracker')}
        </button>
        <button 
          className={activeTab === 'calendar' ? 'active' : ''} 
          onClick={() => {
            console.log('🔘 Calendar tab clicked');
            setActiveTab('calendar');
          }}
        >
          📅 {t('periodTracker.tabs.calendar')}
        </button>
        <button 
          className={activeTab === 'analytics' ? 'active' : ''} 
          onClick={() => {
            console.log('🔘 Analytics tab clicked');
            setActiveTab('analytics');
          }}
        >
          📊 {t('periodTracker.tabs.analytics')}
        </button>
      </div>

      {/* Content Area */}
      <div className="period-content">
        {/* AI COMPANION TAB - AI Guidance Only */}
        {activeTab === 'aicompanion' && (
          <div className="ai-companion-section">
            
            {/* Ask AI About Period Health */}
            <div className="ai-chat-card glass-card">
              <h2>💬 Ask AI About Period Health</h2>
              <p className="ai-chat-intro">Get instant answers to your period health questions</p>
              
              <div className="ai-welcome">
                <p>👋 {t('periodTracker.aiCompanion.askAI.welcome')}</p>
                <div className="sample-questions">
                  <button onClick={() => handleAiChat('Why do I get cramps?')}>
                    Why do I get cramps?
                  </button>
                  <button onClick={() => handleAiChat('Why is my period late?')}>
                    Why is my period late?
                  </button>
                  <button onClick={() => handleAiChat('What foods help during periods?')}>
                    What foods help during periods?
                  </button>
                  <button onClick={() => handleAiChat('What is PMS?')}>
                    What is PMS?
                  </button>
                </div>
              </div>

              <div className="ai-chat-input">
                <input
                  type="text"
                  value={aiChatInput}
                  onChange={(e) => setAiChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && aiChatInput.trim() && handleAiChat(aiChatInput)}
                  placeholder={t('periodTracker.aiCompanion.askAI.placeholder')}
                />
                <button 
                  onClick={() => aiChatInput.trim() && handleAiChat(aiChatInput)}
                  disabled={!aiChatInput.trim()}
                >
                  Send
                </button>
              </div>
            </div>

            {/* Smart Pain Relief Assistant */}
            <div className="pain-relief-card glass-card">
              <h2>💊 {t('periodTracker.smartRelief.title')}</h2>
              <p>{t('periodTracker.smartRelief.subtitle')}</p>
              
              <div className="symptom-selector-compact">
                {['cramps', 'headache', 'bloating', 'backPain', 'fatigue', 'moodSwings'].map(symptom => {
                  const recommendations = getPainReliefRecommendations(symptom);
                  const isExpanded = expandedSymptom === symptom;
                  
                  return (
                    <button
                      key={symptom}
                      className={`symptom-btn-compact ${isExpanded ? 'selected' : ''}`}
                      onClick={() => setExpandedSymptom(isExpanded ? null : symptom)}
                    >
                      <span className="symptom-icon-compact">
                        {symptom === 'cramps' && '🤕'}
                        {symptom === 'headache' && '🤯'}
                        {symptom === 'bloating' && '🎈'}
                        {symptom === 'backPain' && '🔙'}
                        {symptom === 'fatigue' && '😴'}
                        {symptom === 'moodSwings' && '😢'}
                      </span>
                      <span>{t(`periodTracker.symptoms.${symptom}`)}</span>
                    </button>
                  );
                })}
              </div>

              {/* Show expanded content below the grid */}
              {expandedSymptom && getPainReliefRecommendations(expandedSymptom) && (
                <div className="relief-suggestion-card" style={{ marginTop: '1.5rem' }}>
                  <h3 style={{ marginBottom: '1rem', color: '#db2777' }}>
                    {t('periodTracker.smartRelief.reliefFor')} {t(`periodTracker.symptoms.${expandedSymptom}`)}
                  </h3>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ color: '#ec4899', marginBottom: '0.5rem' }}>✅ {t('periodTracker.smartRelief.doThese')}</h4>
                    <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                      {getPainReliefRecommendations(expandedSymptom)?.homeRemedies.map((remedy: string, index: number) => (
                        <li key={index}>{remedy}</li>
                      ))}
                      {getPainReliefRecommendations(expandedSymptom)?.exercises.slice(0, 2).map((exercise: string, index: number) => (
                        <li key={index}>{exercise}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ color: '#ec4899', marginBottom: '0.5rem' }}>💊 {t('periodTracker.smartRelief.medications')}</h4>
                    <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                      {getPainReliefRecommendations(expandedSymptom)?.medicines.map((medicine: string, index: number) => (
                        <li key={index}>{medicine}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <h4 style={{ color: '#e74c3c', marginBottom: '0.5rem' }}>❌ {t('periodTracker.smartRelief.dontDo')}</h4>
                    <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                      {getPainReliefRecommendations(expandedSymptom)?.dontDo?.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="warning-compact" style={{ background: '#fff3cd', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #ffc107' }}>
                    ⚠️ {getPainReliefRecommendations(expandedSymptom)?.warning}
                  </div>
                </div>
              )}
            </div>

            {/* Smart Nutrition Guidance */}
            <div className="nutrition-guidance-card glass-card">
              <h2>🥗 {t('periodTracker.nutrition.title')}</h2>
              <p>{t('periodTracker.nutrition.subtitle')}</p>
              
              <div className="nutrition-grid-compact">
                <div className="nutrition-item-compact">
                  <span className="nutrition-icon-large">🍫</span>
                  <h4>{t('periodTracker.nutrition.ironRich.title')}</h4>
                  <p>{t('periodTracker.nutrition.ironRich.description')}</p>
                  <ul>
                    <li>{t('periodTracker.nutrition.ironRich.food1')}</li>
                    <li>{t('periodTracker.nutrition.ironRich.food2')}</li>
                    <li>{t('periodTracker.nutrition.ironRich.food3')}</li>
                  </ul>
                </div>

                <div className="nutrition-item-compact">
                  <span className="nutrition-icon-large">🥜</span>
                  <h4>{t('periodTracker.nutrition.magnesium.title')}</h4>
                  <p>{t('periodTracker.nutrition.magnesium.description')}</p>
                  <ul>
                    <li>{t('periodTracker.nutrition.magnesium.food1')}</li>
                    <li>{t('periodTracker.nutrition.magnesium.food2')}</li>
                    <li>{t('periodTracker.nutrition.magnesium.food3')}</li>
                  </ul>
                </div>

                <div className="nutrition-item-compact">
                  <span className="nutrition-icon-large">💧</span>
                  <h4>{t('periodTracker.nutrition.hydration.title')}</h4>
                  <p>{t('periodTracker.nutrition.hydration.description')}</p>
                  <ul>
                    <li>{t('periodTracker.nutrition.hydration.tip1')}</li>
                    <li>{t('periodTracker.nutrition.hydration.tip2')}</li>
                    <li>{t('periodTracker.nutrition.hydration.tip3')}</li>
                  </ul>
                </div>

                <div className="nutrition-item-compact">
                  <span className="nutrition-icon-large">🚫</span>
                  <h4>{t('periodTracker.nutrition.avoid.title')}</h4>
                  <p>{t('periodTracker.nutrition.avoid.description')}</p>
                  <ul>
                    <li>{t('periodTracker.nutrition.avoid.food1')}</li>
                    <li>{t('periodTracker.nutrition.avoid.food2')}</li>
                    <li>{t('periodTracker.nutrition.avoid.food3')}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Self-Care Guidance */}
            <div className="selfcare-guidance-card glass-card">
              <h2>🧘‍♀️ {t('periodTracker.aiCompanion.selfCare.title')}</h2>
              <p>{t('periodTracker.aiCompanion.selfCare.subtitle')}</p>
              
              <div className="selfcare-grid-compact">
                <div className="selfcare-item-compact">
                  <span className="selfcare-icon-large">🌬️</span>
                  <h4>{t('periodTracker.aiCompanion.selfCare.breathing.title')}</h4>
                  <p>{t('periodTracker.aiCompanion.selfCare.breathing.desc')}</p>
                  <button className="try-btn" onClick={() => setShowMeditationModal(true)}>
                    {t('periodTracker.aiCompanion.selfCare.breathing.tryNow')}
                  </button>
                </div>

                <div className="selfcare-item-compact">
                  <span className="selfcare-icon-large">🔥</span>
                  <h4>{t('periodTracker.aiCompanion.selfCare.heatTherapy.title')}</h4>
                  <p>{t('periodTracker.aiCompanion.selfCare.heatTherapy.desc')}</p>
                </div>

                <div className="selfcare-item-compact">
                  <span className="selfcare-icon-large">🧘‍♀️</span>
                  <h4>{t('periodTracker.aiCompanion.selfCare.yoga.title')}</h4>
                  <p>{t('periodTracker.aiCompanion.selfCare.yoga.desc')}</p>
                </div>

                <div className="selfcare-item-compact">
                  <span className="selfcare-icon-large">😴</span>
                  <h4>{t('periodTracker.aiCompanion.selfCare.sleep.title')}</h4>
                  <p>{t('periodTracker.aiCompanion.selfCare.sleep.desc')}</p>
                </div>

                <div className="selfcare-item-compact">
                  <span className="selfcare-icon-large">🛁</span>
                  <h4>{t('periodTracker.aiCompanion.selfCare.bath.title')}</h4>
                  <p>{t('periodTracker.aiCompanion.selfCare.bath.desc')}</p>
                </div>

                <div className="selfcare-item-compact">
                  <span className="selfcare-icon-large">🚶‍♀️</span>
                  <h4>{t('periodTracker.aiCompanion.selfCare.walk.title')}</h4>
                  <p>{t('periodTracker.aiCompanion.selfCare.walk.desc')}</p>
                </div>

                <div className="selfcare-item-compact">
                  <span className="selfcare-icon-large">🍵</span>
                  <h4>{t('periodTracker.aiCompanion.selfCare.tea.title')}</h4>
                  <p>{t('periodTracker.aiCompanion.selfCare.tea.desc')}</p>
                </div>

                <div className="selfcare-item-compact">
                  <span className="selfcare-icon-large">📖</span>
                  <h4>{t('periodTracker.aiCompanion.selfCare.journaling.title')}</h4>
                  <p>{t('periodTracker.aiCompanion.selfCare.journaling.desc')}</p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* PERIOD TRACKER TAB - Data Logging Only */}
        {activeTab === 'tracker' && (
          <div className="tracker-section">
            <div className="tracker-card glass-card">
              <h2>{t('periodTracker.tracker.title')}</h2>
              <div className="tracker-form">
                <div className="form-group">
                  <label>{t('periodTracker.tracker.lastPeriod')}</label>
                  <input 
                    type="date" 
                    value={lastPeriodDate}
                    onChange={(e) => {
                      console.log('📅 Date changed:', e.target.value);
                      setLastPeriodDate(e.target.value);
                    }}
                    onClick={() => console.log('📅 Date input clicked')}
                  />
                </div>
                <div className="form-group">
                  <label>{t('periodTracker.tracker.cycleLength')}</label>
                  <input 
                    type="number" 
                    value={cycleLength}
                    onChange={(e) => {
                      console.log('🔢 Cycle length changed:', e.target.value);
                      setCycleLength(Number(e.target.value));
                    }}
                    onClick={() => console.log('🔢 Cycle length input clicked')}
                    min="21"
                    max="35"
                  />
                  <span className="helper-text">{t('periodTracker.tracker.days')}</span>
                </div>
                <div className="form-group">
                  <label>{t('periodTracker.tracker.periodDuration')}</label>
                  <input 
                    type="number" 
                    value={periodDuration}
                    onChange={(e) => {
                      console.log('🔢 Period duration changed:', e.target.value);
                      setPeriodDuration(Number(e.target.value));
                    }}
                    onClick={() => console.log('🔢 Period duration input clicked')}
                    min="3"
                    max="7"
                  />
                  <span className="helper-text">{t('periodTracker.tracker.days')}</span>
                </div>
              </div>

              {lastPeriodDate && (
                <div className="predictions">
                  <div className="prediction-card">
                    <span className="prediction-icon">🩸</span>
                    <div>
                      <h4>{t('periodTracker.tracker.nextPeriod')}</h4>
                      <p className="prediction-date">{calculateNextPeriod()}</p>
                    </div>
                  </div>
                  <div className="prediction-card">
                    <span className="prediction-icon">🥚</span>
                    <div>
                      <h4>{t('periodTracker.tracker.ovulation')}</h4>
                      <p className="prediction-date">{calculateOvulation()}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Daily Tracking */}
            <div className="daily-tracking glass-card">
              <div className="tracker-header">
                <h3>{t('periodTracker.tracker.dailyTracking')}</h3>
                <p style={{ color: '#888', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                  📅 {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  {dailyLogs.find(log => log.date === new Date().toISOString().split('T')[0]) && 
                    <span style={{ color: '#4caf50', marginLeft: '1rem' }}>✅ Logged</span>
                  }
                </p>
              </div>
              
              {/* Mood Tracker */}
              <div className="tracking-section">
                <h4>{t('periodTracker.tracker.moodToday')}</h4>
                <div className="mood-buttons">
                  {['happy', 'neutral', 'sad', 'anxious', 'angry'].map(mood => (
                    <button
                      key={mood}
                      className={`mood-btn ${todayMood === mood ? 'selected' : ''}`}
                      onClick={() => setTodayMood(mood as any)}
                    >
                      {mood === 'happy' && '😊'}
                      {mood === 'neutral' && '😐'}
                      {mood === 'sad' && '😢'}
                      {mood === 'anxious' && '😰'}
                      {mood === 'angry' && '😠'}
                      <span>{t(`periodTracker.moods.${mood}`)}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Water Intake */}
              <div className="tracking-section">
                <h4>{t('periodTracker.tracker.waterIntake')}</h4>
                <p style={{ fontSize: '0.85rem', color: '#888', marginBottom: '1rem' }}>
                  💧 Staying hydrated reduces bloating and helps with cramps
                </p>
                <div className="water-tracker">
                  <div className="water-display">
                    <span className="water-icon">💧</span>
                    <span className="water-count">{waterIntake} {t('periodTracker.tracker.glasses')}</span>
                  </div>
                  <div className="water-controls">
                    <button onClick={() => setWaterIntake(Math.max(0, waterIntake - 1))}>-</button>
                    <button onClick={() => setWaterIntake(waterIntake + 1)}>+</button>
                  </div>
                </div>
                <p className="water-goal">Goal: 8-10 glasses per day</p>
              </div>
            </div>

            {/* Symptom Tracker */}
            <div className="symptom-tracker glass-card">
              <h3>{t('periodTracker.tracker.symptoms')}</h3>
              <div className="symptom-grid">
                {['cramps', 'headache', 'bloating', 'moodSwings', 'fatigue', 'backPain', 'acne', 'cravings'].map(symptom => (
                  <button
                    key={symptom}
                    className={`symptom-btn ${selectedSymptoms.includes(symptom) ? 'selected' : ''}`}
                    onClick={() => toggleSymptom(symptom)}
                  >
                    {t(`periodTracker.symptoms.${symptom}`)}
                  </button>
                ))}
              </div>
            </div>

            {/* Flow Intensity & Notes */}
            <div className="flow-notes-card glass-card">
              <div className="tracking-section">
                <h4>{t('periodTracker.tracker.flowIntensity')}</h4>
                <div className="flow-buttons">
                  {['light', 'medium', 'heavy'].map(flow => (
                    <button
                      key={flow}
                      className={`flow-btn ${flowIntensity === flow ? 'selected' : ''}`}
                      onClick={() => setFlowIntensity(flow as any)}
                    >
                      {t(`periodTracker.flow.${flow}`)}
                    </button>
                  ))}
                  <button
                    className={`flow-btn ${flowIntensity === '' ? 'selected' : ''}`}
                    onClick={() => setFlowIntensity('')}
                  >
                    None
                  </button>
                </div>
              </div>

              <div className="tracking-section">
                <h4>{t('periodTracker.tracker.notes')}</h4>
                <textarea
                  value={dailyNotes}
                  onChange={(e) => setDailyNotes(e.target.value)}
                  placeholder={t('periodTracker.tracker.notesPlaceholder')}
                  rows={3}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: '2px solid #ffe0ec',
                    borderRadius: '12px',
                    fontFamily: 'inherit',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button 
                onClick={saveTodayLog}
                className="save-log-btn"
                style={{
                  width: '100%',
                  padding: '1rem 2rem',
                  background: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginTop: '1rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 107, 157, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                💾 Save Today's Log
              </button>
            </div>
          </div>
        )}

        {/* Calendar View Tab */}
        {activeTab === 'calendar' && (
          <div className="calendar-section">
            {/* Helpful Guide */}
            {!lastPeriodDate && (
              <div className="glass-card" style={{ marginBottom: '2rem', background: '#fef3c7', borderColor: '#fbbf24' }}>
                <h3 style={{ color: '#92400e', marginBottom: '1rem' }}>⚠️ Set Your Last Period Date First</h3>
                <p style={{ color: '#92400e', marginBottom: '1rem' }}>
                  To see period predictions and color-coded days on the calendar, please go to the "Period Tracker" tab and set your last period start date.
                </p>
                <button 
                  onClick={() => setActiveTab('tracker')}
                  style={{
                    padding: '0.875rem 1.75rem',
                    background: '#fbbf24',
                    color: '#78350f',
                    border: 'none',
                    borderRadius: '12px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    fontSize: '0.9375rem'
                  }}
                >
                  Go to Tracker
                </button>
              </div>
            )}

            <div className="calendar-card glass-card">
              <div className="calendar-header">
                <button onClick={prevMonth} className="month-nav">‹</button>
                <h2>{currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h2>
                <button onClick={nextMonth} className="month-nav">›</button>
              </div>
              
              <div className="calendar-legend">
                <div className="legend-item">
                  <span className="legend-dot period"></span>
                  <span>🩸 Period Days</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot fertile"></span>
                  <span>🌱 Fertile Window</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot ovulation"></span>
                  <span>🥚 Ovulation Day</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot logged"></span>
                  <span>✅ Logged Data</span>
                </div>
              </div>

              <p style={{ textAlign: 'center', color: '#888', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                💡 Click any day to log your mood, symptoms, and notes for that date
              </p>

              <div className="calendar-grid">
                <div className="calendar-weekdays">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="weekday">{day}</div>
                  ))}
                </div>
                <div className="calendar-days">
                  {generateCalendarDays().map((day, index) => (
                    <div
                      key={index}
                      className={`calendar-day ${!day.isCurrentMonth ? 'other-month' : ''} ${day.isToday ? 'today' : ''} ${day.isPeriod ? 'period' : ''} ${day.isFertile ? 'fertile' : ''} ${day.isOvulation ? 'ovulation' : ''}`}
                      onClick={() => handleDayClick(day)}
                    >
                      <span className="day-number">{day.date.getDate()}</span>
                      {day.hasLog && <span className="log-indicator">•</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ANALYTICS TAB - Health Insights */}
        {activeTab === 'analytics' && (
          <div className="analytics-section">
            
            {/* Helpful Guide */}
            <div className="glass-card" style={{ marginBottom: '2rem', background: '#e3f2fd', borderColor: '#64b5f6' }}>
              <h3 style={{ color: '#1976d2', marginBottom: '1rem' }}>📊 How Analytics Works</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                <div>
                  <p style={{ color: '#1976d2', fontWeight: '600', marginBottom: '0.5rem' }}>1️⃣ Set Your Cycle Info</p>
                  <p style={{ color: '#555', fontSize: '0.9rem' }}>Go to "Period Tracker" and set your last period date</p>
                </div>
                <div>
                  <p style={{ color: '#1976d2', fontWeight: '600', marginBottom: '0.5rem' }}>2️⃣ Log Daily Data</p>
                  <p style={{ color: '#555', fontSize: '0.9rem' }}>Track mood, symptoms, water intake daily</p>
                </div>
                <div>
                  <p style={{ color: '#1976d2', fontWeight: '600', marginBottom: '0.5rem' }}>3️⃣ See Insights</p>
                  <p style={{ color: '#555', fontSize: '0.9rem' }}>After 7+ days, you'll see patterns and predictions</p>
                </div>
              </div>
            </div>
            
            {/* No Data Message */}
            {dailyLogs.length === 0 && (
              <div className="glass-card" style={{ textAlign: 'center', padding: '3rem' }}>
                <h3 style={{ color: '#db2777', marginBottom: '1rem', fontSize: '2rem' }}>📊 No Data Yet</h3>
                <p style={{ color: '#64748b', marginBottom: '1.5rem', fontSize: '1.0625rem' }}>
                  Start logging your daily mood, symptoms, and water intake to see personalized insights!
                </p>
                <button 
                  onClick={() => setActiveTab('tracker')}
                  style={{
                    padding: '1rem 2rem',
                    background: '#ec4899',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(236, 72, 153, 0.25)'
                  }}
                >
                  📝 Go to Period Tracker
                </button>
              </div>
            )}
            
            {/* Emergency Alert */}
            {showEmergencyAlert && (
              <div className="emergency-alert glass-card">
                <div className="alert-header">
                  <span className="alert-icon">⚠️</span>
                  <h3>Health Alert - Medical Attention May Be Required</h3>
                  <button onClick={() => setShowEmergencyAlert(false)} className="alert-close">×</button>
                </div>
                <div className="alert-body">
                  <p>We've detected concerning symptoms:</p>
                  <ul>
                    {emergencySymptoms.map((symptom, index) => (
                      <li key={index}>{symptom}</li>
                    ))}
                  </ul>
                  <p className="alert-action">
                    <strong>Recommended Action:</strong> Please consult a gynecologist for proper evaluation.
                  </p>
                  <button className="btn-emergency" onClick={() => navigate('/doctors')}>
                    Find a Doctor Near You
                  </button>
                </div>
              </div>
            )}

            {/* Cycle Overview */}
            {dailyLogs.length > 0 && (
              <div className="analytics-card glass-card">
                <h3>📊 Cycle Overview</h3>
                {!lastPeriodDate ? (
                  <p style={{ color: '#888', textAlign: 'center', padding: '2rem' }}>
                    Set your last period date in the "Period Tracker" tab to see cycle predictions
                  </p>
                ) : (
                  <div className="stat-grid">
                    <div className="stat-item">
                      <span className="stat-label">Average Cycle</span>
                      <span className="stat-value">{cycleLength} days</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Period Duration</span>
                      <span className="stat-value">{periodDuration} days</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Next Period</span>
                      <span className="stat-value">{calculateNextPeriod()}</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Ovulation Day</span>
                      <span className="stat-value">{calculateOvulation()}</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Current Cycle Phase */}
            {getCurrentCyclePhase() !== 'unknown' && (
              <div className="cycle-phase-card glass-card">
                <h3>🌙 Current Cycle Phase</h3>
                <div className="phase-display">
                  <div className={`phase-indicator phase-${getCurrentCyclePhase()}`}>
                    {getCurrentCyclePhase() === 'menstrual' && '🩸 Menstrual Phase'}
                    {getCurrentCyclePhase() === 'follicular' && '🌱 Follicular Phase'}
                    {getCurrentCyclePhase() === 'ovulation' && '🥚 Ovulation Phase'}
                    {getCurrentCyclePhase() === 'luteal' && '🌙 Luteal Phase'}
                  </div>
                </div>

                <div className="phase-lifestyle-tips">
                  {getCurrentCyclePhase() === 'menstrual' && (
                    <div className="lifestyle-tip">
                      <p>🛌 Low-energy activities recommended</p>
                      <p>Focus on rest and gentle movement</p>
                    </div>
                  )}
                  {getCurrentCyclePhase() === 'follicular' && (
                    <div className="lifestyle-tip">
                      <p>💪 High productivity phase</p>
                      <p>Great time for intense workouts and new projects</p>
                    </div>
                  )}
                  {getCurrentCyclePhase() === 'ovulation' && (
                    <div className="lifestyle-tip">
                      <p>🎉 Peak energy phase</p>
                      <p>Perfect for social activities and challenging tasks</p>
                    </div>
                  )}
                  {getCurrentCyclePhase() === 'luteal' && (
                    <div className="lifestyle-tip">
                      <p>😌 Rest and recovery phase</p>
                      <p>Focus on stress reduction and balanced nutrition</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Symptom Patterns */}
            {dailyLogs.length >= 7 && (
              <div className="insights-card glass-card">
                <h3>🔮 Symptom Patterns & Insights</h3>
                <div className="insights-list">
                  {dailyLogs.filter(log => log.symptoms.includes('cramps')).length >= 3 && (
                    <div className="insight-item">
                      <span className="insight-icon">📊</span>
                      <p>Cramps most frequently occur on Day 1-2 of your cycle.</p>
                    </div>
                  )}
                  {dailyLogs.filter(log => log.mood === 'sad' || log.mood === 'anxious').length >= 3 && (
                    <div className="insight-item">
                      <span className="insight-icon">😔</span>
                      <p>You tend to feel low energy before your period.</p>
                    </div>
                  )}
                  {dailyLogs.filter(log => log.waterIntake < 6).length >= 4 && (
                    <div className="insight-item">
                      <span className="insight-icon">💧</span>
                      <p>Your hydration levels are often low. Aim for 8-10 glasses daily.</p>
                    </div>
                  )}
                  {dailyLogs.filter(log => log.symptoms.includes('fatigue')).length >= 3 && (
                    <div className="insight-item">
                      <span className="insight-icon">😴</span>
                      <p>You frequently experience fatigue. Consider iron-rich foods.</p>
                    </div>
                  )}
                  {dailyLogs.filter(log => log.symptoms.includes('headache')).length >= 3 && (
                    <div className="insight-item">
                      <span className="insight-icon">🤯</span>
                      <p>Headaches are common in your cycle. Stay hydrated and rest.</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Mood Trends */}
            <div className="analytics-card glass-card">
              <h3>😊 Mood Trends</h3>
              <div className="mood-stats">
                {['happy', 'neutral', 'sad', 'anxious', 'angry'].map(mood => {
                  const count = dailyLogs.filter(log => log.mood === mood).length;
                  return count > 0 ? (
                    <div key={mood} className="mood-stat-item">
                      <span>{t(`periodTracker.moods.${mood}`)}</span>
                      <span className="mood-count">{count} days</span>
                    </div>
                  ) : null;
                })}
              </div>
            </div>

            {/* Common Symptoms Chart */}
            <div className="analytics-card glass-card">
              <h3>🔄 Common Symptoms</h3>
              <div className="symptom-stats">
                {['cramps', 'headache', 'bloating', 'moodSwings', 'fatigue', 'backPain'].map(symptom => {
                  const count = dailyLogs.filter(log => log.symptoms.includes(symptom)).length;
                  return count > 0 ? (
                    <div key={symptom} className="symptom-stat-item">
                      <span>{t(`periodTracker.symptoms.${symptom}`)}</span>
                      <div className="symptom-bar">
                        <div 
                          className="symptom-bar-fill" 
                          style={{ width: `${(count / Math.max(dailyLogs.length, 1)) * 100}%` }}
                        ></div>
                      </div>
                      <span className="symptom-count">{count}</span>
                    </div>
                  ) : null;
                })}
              </div>
            </div>

          </div>
        )}
      </div>

      {/* Day Detail Modal */}
      {showDayModal && selectedDate && (
        <div className="modal-overlay" onClick={() => setShowDayModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h3>
              <button onClick={() => setShowDayModal(false)} className="modal-close">×</button>
            </div>
            
            <div className="modal-body">
              {/* Mood Selection */}
              <div className="modal-section">
                <h4>{t('periodTracker.tracker.moodToday')}</h4>
                <div className="mood-buttons">
                  {['happy', 'neutral', 'sad', 'anxious', 'angry'].map(mood => (
                    <button
                      key={mood}
                      className={`mood-btn ${todayMood === mood ? 'selected' : ''}`}
                      onClick={() => setTodayMood(mood as any)}
                    >
                      {mood === 'happy' && '😊'}
                      {mood === 'neutral' && '😐'}
                      {mood === 'sad' && '😢'}
                      {mood === 'anxious' && '😰'}
                      {mood === 'angry' && '😠'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Flow Intensity */}
              <div className="modal-section">
                <h4>{t('periodTracker.tracker.flowIntensity')}</h4>
                <div className="flow-buttons">
                  {['light', 'medium', 'heavy'].map(flow => (
                    <button
                      key={flow}
                      className={`flow-btn ${flowIntensity === flow ? 'selected' : ''}`}
                      onClick={() => setFlowIntensity(flow as any)}
                    >
                      {t(`periodTracker.flow.${flow}`)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Water Intake */}
              <div className="modal-section">
                <h4>{t('periodTracker.tracker.waterIntake')}</h4>
                <div className="water-tracker">
                  <div className="water-display">
                    <span className="water-icon">💧</span>
                    <span className="water-count">{waterIntake} {t('periodTracker.tracker.glasses')}</span>
                  </div>
                  <div className="water-controls">
                    <button onClick={() => setWaterIntake(Math.max(0, waterIntake - 1))}>-</button>
                    <button onClick={() => setWaterIntake(waterIntake + 1)}>+</button>
                  </div>
                </div>
              </div>

              {/* Symptoms */}
              <div className="modal-section">
                <h4>{t('periodTracker.tracker.symptoms')}</h4>
                <div className="symptom-grid-modal">
                  {['cramps', 'headache', 'bloating', 'moodSwings', 'fatigue', 'backPain', 'acne', 'cravings'].map(symptom => (
                    <button
                      key={symptom}
                      className={`symptom-btn-small ${selectedSymptoms.includes(symptom) ? 'selected' : ''}`}
                      onClick={() => toggleSymptom(symptom)}
                    >
                      {t(`periodTracker.symptoms.${symptom}`)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div className="modal-section">
                <h4>{t('periodTracker.tracker.notes')}</h4>
                <textarea
                  value={dailyNotes}
                  onChange={(e) => setDailyNotes(e.target.value)}
                  placeholder={t('periodTracker.tracker.notesPlaceholder')}
                  rows={3}
                />
              </div>
            </div>

            <div className="modal-footer">
              <button onClick={() => setShowDayModal(false)} className="btn-cancel">
                {t('common.cancel')}
              </button>
              <button onClick={saveDailyLog} className="btn-save">
                {t('common.save')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Meditation Modal */}
      {showMeditationModal && (
        <div className="modal-overlay" onClick={() => setShowMeditationModal(false)}>
          <div className="modal-content meditation-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>🧘‍♀️ Guided Breathing Exercise</h3>
              <button onClick={() => setShowMeditationModal(false)} className="modal-close">×</button>
            </div>
            <div className="modal-body">
              <div className="breathing-guide">
                <div className="breathing-circle"></div>
                <p className="breathing-instruction">Breathe in for 4 seconds...</p>
                <p className="breathing-instruction">Hold for 4 seconds...</p>
                <p className="breathing-instruction">Breathe out for 4 seconds...</p>
                <p className="breathing-instruction">Repeat 5 times</p>
              </div>
              <div className="calming-message">
                <p>💙 You're doing great. Take your time and focus on your breath.</p>
                <p>Remember: It's okay to feel what you're feeling. This too shall pass.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Period Preparation Reminder Modal */}
      {showPeriodPrepModal && (
        <div className="modal-overlay" onClick={() => setShowPeriodPrepModal(false)}>
          <div className="modal-content prep-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>📅 Period Preparation Reminder</h3>
              <button onClick={() => setShowPeriodPrepModal(false)} className="modal-close">×</button>
            </div>
            <div className="modal-body">
              <p>Your period is expected in a few days. Here's your preparation checklist:</p>
              <div className="prep-checklist">
                <div className="prep-item">
                  <span className="prep-icon">🩸</span>
                  <span>Stock up on sanitary products</span>
                </div>
                <div className="prep-item">
                  <span className="prep-icon">💊</span>
                  <span>Prepare pain relief options (heating pad, medications)</span>
                </div>
                <div className="prep-item">
                  <span className="prep-icon">💧</span>
                  <span>Stay well-hydrated</span>
                </div>
                <div className="prep-item">
                  <span className="prep-icon">🥗</span>
                  <span>Plan balanced, nutritious meals</span>
                </div>
                <div className="prep-item">
                  <span className="prep-icon">😴</span>
                  <span>Ensure adequate rest and sleep</span>
                </div>
                <div className="prep-item">
                  <span className="prep-icon">🧘‍♀️</span>
                  <span>Prepare comfortable clothes</span>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button onClick={() => setShowPeriodPrepModal(false)} className="btn-save">
                Got it, thanks!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PeriodTracker;
