import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './SelfCareTracker.css';

interface DailyLog {
  date: string;
  waterIntake: number;
  steps: number;
  sleep: number;
  mood: 'calm' | 'okay' | 'stressed' | 'veryStressed' | '';
  exercise: boolean;
  fruitsVeggies: boolean;
  notes: string;
}

const SelfCareTracker: React.FC = () => {
  const navigate = useNavigate();
  const { t, currentLanguage, availableLanguages, changeLanguage } = useLanguage();
  
  // State management
  const [activeTab, setActiveTab] = useState<'tracker' | 'tips' | 'firstaid' | 'remedies' | 'exercises'>('tracker');
  const [waterIntake, setWaterIntake] = useState(0);
  const [steps, setSteps] = useState(0);
  const [sleepHours, setSleepHours] = useState(7);
  const [mood, setMood] = useState<'calm' | 'okay' | 'stressed' | 'veryStressed' | ''>('');
  const [exerciseDone, setExerciseDone] = useState(false);
  const [fruitsVeggiesDone, setFruitsVeggiesDone] = useState(false);
  const [dailyNotes, setDailyNotes] = useState('');
  const [dailyLogs, setDailyLogs] = useState<DailyLog[]>([]);
  
  // Eye relaxation timer
  const [eyeTimerActive, setEyeTimerActive] = useState(false);
  const [eyeTimerSeconds, setEyeTimerSeconds] = useState(20);
  
  // Modals
  const [showBreathingModal, setShowBreathingModal] = useState(false);
  const [showYogaModal, setShowYogaModal] = useState(false);
  const [selectedFirstAid, setSelectedFirstAid] = useState<string | null>(null);
  const [selectedRemedy, setSelectedRemedy] = useState<string | null>(null);
  
  // User profile for personalized goals
  const [userAge, setUserAge] = useState(25);
  const [userWeight, setUserWeight] = useState(60);
  
  // Load data from localStorage
  useEffect(() => {
    const savedLogs = localStorage.getItem('selfCareLogs');
    const savedAge = localStorage.getItem('userAge');
    const savedWeight = localStorage.getItem('userWeight');
    
    if (savedLogs) {
      const logs = JSON.parse(savedLogs);
      setDailyLogs(logs);
      
      // Load today's log
      const today = new Date().toISOString().split('T')[0];
      const todayLog = logs.find((log: DailyLog) => log.date === today);
      if (todayLog) {
        setWaterIntake(todayLog.waterIntake);
        setSteps(todayLog.steps);
        setSleepHours(todayLog.sleep);
        setMood(todayLog.mood);
        setExerciseDone(todayLog.exercise);
        setFruitsVeggiesDone(todayLog.fruitsVeggies);
        setDailyNotes(todayLog.notes);
      }
    }
    
    if (savedAge) setUserAge(Number(savedAge));
    if (savedWeight) setUserWeight(Number(savedWeight));
  }, []);
  
  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem('selfCareLogs', JSON.stringify(dailyLogs));
    localStorage.setItem('userAge', userAge.toString());
    localStorage.setItem('userWeight', userWeight.toString());
  }, [dailyLogs, userAge, userWeight]);
  
  // Calculate personalized goals
  const getWaterGoal = () => {
    // Basic formula: 30ml per kg of body weight
    return Math.round((userWeight * 30) / 250); // Convert to glasses (250ml each)
  };
  
  const getStepsGoal = () => {
    if (userAge < 18) return 12000;
    if (userAge < 40) return 10000;
    if (userAge < 60) return 8000;
    return 6000;
  };
  
  // Save today's log
  const saveTodayLog = () => {
    const today = new Date().toISOString().split('T')[0];
    const newLog: DailyLog = {
      date: today,
      waterIntake,
      steps,
      sleep: sleepHours,
      mood,
      exercise: exerciseDone,
      fruitsVeggies: fruitsVeggiesDone,
      notes: dailyNotes
    };
    
    setDailyLogs(prev => {
      const filtered = prev.filter(log => log.date !== today);
      return [...filtered, newLog];
    });
    
    alert(t('selfCare.messages.logSaved'));
  };
  
  // Eye timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (eyeTimerActive && eyeTimerSeconds > 0) {
      interval = setInterval(() => {
        setEyeTimerSeconds(prev => prev - 1);
      }, 1000);
    } else if (eyeTimerSeconds === 0) {
      setEyeTimerActive(false);
      alert(t('selfCare.eyeTimer.complete'));
      setEyeTimerSeconds(20);
    }
    return () => clearInterval(interval);
  }, [eyeTimerActive, eyeTimerSeconds, t]);

  return (
    <div className="selfcare-tracker-page">
      {/* Header */}
      <header className="selfcare-header">
        <button onClick={() => navigate('/')} className="back-button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        <div className="header-content">
          <h1>🌿 {t('selfCare.title')}</h1>
          <p>{t('selfCare.subtitle')}</p>
        </div>
        <select
          value={currentLanguage}
          onChange={(e) => changeLanguage(e.target.value)}
          className="language-selector"
        >
          {availableLanguages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.flag} {lang.nativeName}
            </option>
          ))}
        </select>
      </header>

      {/* Tab Navigation */}
      <div className="selfcare-tabs">
        <button
          className={activeTab === 'tracker' ? 'active' : ''}
          onClick={() => setActiveTab('tracker')}
        >
          📊 {t('selfCare.tabs.tracker')}
        </button>
        <button
          className={activeTab === 'tips' ? 'active' : ''}
          onClick={() => setActiveTab('tips')}
        >
          💡 {t('selfCare.tabs.tips')}
        </button>
        <button
          className={activeTab === 'firstaid' ? 'active' : ''}
          onClick={() => setActiveTab('firstaid')}
        >
          🚑 {t('selfCare.tabs.firstAid')}
        </button>
        <button
          className={activeTab === 'remedies' ? 'active' : ''}
          onClick={() => setActiveTab('remedies')}
        >
          🌿 {t('selfCare.tabs.remedies')}
        </button>
        <button
          className={activeTab === 'exercises' ? 'active' : ''}
          onClick={() => setActiveTab('exercises')}
        >
          🧘 {t('selfCare.tabs.exercises')}
        </button>
      </div>

      {/* Content Area */}
      <div className="selfcare-content">
        
        {/* DAILY TRACKER TAB */}
        {activeTab === 'tracker' && (
          <div className="tracker-section">
            
            {/* Today's Date */}
            <div className="glass-card date-card">
              <h2>📅 {new Date().toLocaleDateString(currentLanguage, { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</h2>
            </div>

            {/* How are you feeling? */}
            <div className="glass-card mood-card">
              <h3>😊 {t('selfCare.tracker.howFeeling')}</h3>
              <div className="mood-buttons">
                <button
                  className={`mood-btn ${mood === 'calm' ? 'selected' : ''}`}
                  onClick={() => setMood('calm')}
                >
                  <span className="mood-emoji">😌</span>
                  <span>{t('selfCare.moods.calm')}</span>
                </button>
                <button
                  className={`mood-btn ${mood === 'okay' ? 'selected' : ''}`}
                  onClick={() => setMood('okay')}
                >
                  <span className="mood-emoji">🙂</span>
                  <span>{t('selfCare.moods.okay')}</span>
                </button>
                <button
                  className={`mood-btn ${mood === 'stressed' ? 'selected' : ''}`}
                  onClick={() => setMood('stressed')}
                >
                  <span className="mood-emoji">😟</span>
                  <span>{t('selfCare.moods.stressed')}</span>
                </button>
                <button
                  className={`mood-btn ${mood === 'veryStressed' ? 'selected' : ''}`}
                  onClick={() => setMood('veryStressed')}
                >
                  <span className="mood-emoji">😰</span>
                  <span>{t('selfCare.moods.veryStressed')}</span>
                </button>
              </div>
            </div>

            {/* Water Intake Tracker */}
            <div className="glass-card water-card">
              <h3>💧 {t('selfCare.tracker.waterIntake')}</h3>
              <p className="goal-text">{t('selfCare.tracker.goal')}: {getWaterGoal()} {t('selfCare.tracker.glasses')}</p>
              <div className="water-visual">
                {Array.from({ length: getWaterGoal() }).map((_, i) => (
                  <span key={i} className={`water-drop ${i < waterIntake ? 'filled' : ''}`}>
                    💧
                  </span>
                ))}
              </div>
              <div className="water-controls">
                <button onClick={() => setWaterIntake(Math.max(0, waterIntake - 1))}>-</button>
                <span className="water-count">{waterIntake} / {getWaterGoal()}</span>
                <button onClick={() => setWaterIntake(Math.min(getWaterGoal(), waterIntake + 1))}>+</button>
              </div>
            </div>

            {/* Steps Tracker */}
            <div className="glass-card steps-card">
              <h3>👣 {t('selfCare.tracker.steps')}</h3>
              <p className="goal-text">{t('selfCare.tracker.goal')}: {getStepsGoal().toLocaleString()} {t('selfCare.tracker.stepsUnit')}</p>
              <div className="steps-input">
                <input
                  type="number"
                  value={steps}
                  onChange={(e) => setSteps(Number(e.target.value))}
                  placeholder="0"
                />
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${Math.min(100, (steps / getStepsGoal()) * 100)}%` }}
                ></div>
              </div>
              <p className="progress-text">
                {Math.round((steps / getStepsGoal()) * 100)}% {t('selfCare.tracker.complete')}
              </p>
            </div>

            {/* Sleep Tracker */}
            <div className="glass-card sleep-card">
              <h3>😴 {t('selfCare.tracker.sleep')}</h3>
              <p className="goal-text">{t('selfCare.tracker.sleepGoal')}</p>
              <div className="sleep-slider">
                <input
                  type="range"
                  min="0"
                  max="12"
                  step="0.5"
                  value={sleepHours}
                  onChange={(e) => setSleepHours(Number(e.target.value))}
                />
                <span className="sleep-value">{sleepHours} {t('selfCare.tracker.hours')}</span>
              </div>
            </div>

            {/* Quick Health Checks */}
            <div className="glass-card health-checks-card">
              <h3>✅ {t('selfCare.tracker.quickChecks')}</h3>
              <div className="check-list">
                <label className="check-item">
                  <input
                    type="checkbox"
                    checked={sleepHours >= 7}
                    readOnly
                  />
                  <span>{t('selfCare.tracker.check1')}</span>
                </label>
                <label className="check-item">
                  <input
                    type="checkbox"
                    checked={waterIntake >= getWaterGoal()}
                    readOnly
                  />
                  <span>{t('selfCare.tracker.check2')}</span>
                </label>
                <label className="check-item">
                  <input
                    type="checkbox"
                    checked={exerciseDone}
                    onChange={(e) => setExerciseDone(e.target.checked)}
                  />
                  <span>{t('selfCare.tracker.check3')}</span>
                </label>
                <label className="check-item">
                  <input
                    type="checkbox"
                    checked={fruitsVeggiesDone}
                    onChange={(e) => setFruitsVeggiesDone(e.target.checked)}
                  />
                  <span>{t('selfCare.tracker.check4')}</span>
                </label>
              </div>
            </div>

            {/* Eye Relaxation Timer */}
            <div className="glass-card eye-timer-card">
              <h3>👁️ {t('selfCare.eyeTimer.title')}</h3>
              <p className="timer-rule">{t('selfCare.eyeTimer.rule')}</p>
              <div className="timer-display">
                <span className="timer-number">{eyeTimerSeconds}</span>
                <span className="timer-label">{t('selfCare.eyeTimer.seconds')}</span>
              </div>
              <button
                className={`timer-btn ${eyeTimerActive ? 'active' : ''}`}
                onClick={() => {
                  if (eyeTimerActive) {
                    setEyeTimerActive(false);
                    setEyeTimerSeconds(20);
                  } else {
                    setEyeTimerActive(true);
                  }
                }}
              >
                {eyeTimerActive ? t('selfCare.eyeTimer.stop') : t('selfCare.eyeTimer.start')}
              </button>
            </div>

            {/* Notes */}
            <div className="glass-card notes-card">
              <h3>📝 {t('selfCare.tracker.notes')}</h3>
              <textarea
                value={dailyNotes}
                onChange={(e) => setDailyNotes(e.target.value)}
                placeholder={t('selfCare.tracker.notesPlaceholder')}
                rows={4}
              />
            </div>

            {/* Save Button */}
            <button className="save-btn" onClick={saveTodayLog}>
              💾 {t('selfCare.tracker.saveLog')}
            </button>
          </div>
        )}

        {/* HEALTH TIPS TAB */}
        {activeTab === 'tips' && (
          <div className="tips-section">
            <div className="glass-card tip-of-day">
              <h2>💡 {t('selfCare.tips.dailyTip')}</h2>
              <div className="tip-content">
                <p className="tip-text">{t('selfCare.tips.tip1')}</p>
              </div>
            </div>

            <div className="tips-grid">
              {['tip2', 'tip3', 'tip4', 'tip5', 'tip6', 'tip7', 'tip8', 'tip9'].map((tip, index) => (
                <div key={tip} className="glass-card tip-card">
                  <div className="tip-icon">
                    {index === 0 && '🚶'}
                    {index === 1 && '😴'}
                    {index === 2 && '🥗'}
                    {index === 3 && '🧘'}
                    {index === 4 && '☀️'}
                    {index === 5 && '📱'}
                    {index === 6 && '🍎'}
                    {index === 7 && '🧠'}
                  </div>
                  <p>{t(`selfCare.tips.${tip}`)}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FIRST AID TAB */}
        {activeTab === 'firstaid' && (
          <div className="firstaid-section">
            <div className="glass-card emergency-header">
              <h2>🚑 {t('selfCare.firstAid.title')}</h2>
              <p className="emergency-number">
                {t('selfCare.firstAid.emergency')}: <strong>108</strong>
              </p>
            </div>

            <div className="firstaid-grid">
              {['cuts', 'burns', 'sprains', 'nosebleed', 'choking', 'heartAttack'].map((aid) => (
                <div
                  key={aid}
                  className="glass-card firstaid-card"
                  onClick={() => setSelectedFirstAid(aid)}
                >
                  <div className="firstaid-icon">
                    {aid === 'cuts' && '🩹'}
                    {aid === 'burns' && '🔥'}
                    {aid === 'sprains' && '🦵'}
                    {aid === 'nosebleed' && '👃'}
                    {aid === 'choking' && '😮'}
                    {aid === 'heartAttack' && '❤️'}
                  </div>
                  <h4>{t(`selfCare.firstAid.${aid}.title`)}</h4>
                  <p className="read-more">{t('selfCare.firstAid.readMore')}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* HOME REMEDIES TAB */}
        {activeTab === 'remedies' && (
          <div className="remedies-section">
            <div className="glass-card remedies-header">
              <h2>🌿 {t('selfCare.remedies.title')}</h2>
              <p>{t('selfCare.remedies.subtitle')}</p>
            </div>

            <div className="remedies-grid">
              {['soreThroat', 'cold', 'cough', 'headache', 'acidity', 'indigestion'].map((remedy) => (
                <div
                  key={remedy}
                  className="glass-card remedy-card"
                  onClick={() => setSelectedRemedy(remedy)}
                >
                  <div className="remedy-icon">
                    {remedy === 'soreThroat' && '🫖'}
                    {remedy === 'cold' && '🌬️'}
                    {remedy === 'cough' && '🥛'}
                    {remedy === 'headache' && '🧊'}
                    {remedy === 'acidity' && '🥥'}
                    {remedy === 'indigestion' && '🍋'}
                  </div>
                  <h4>{t(`selfCare.remedies.${remedy}.title`)}</h4>
                  <p className="remedy-preview">{t(`selfCare.remedies.${remedy}.preview`)}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EXERCISES TAB */}
        {activeTab === 'exercises' && (
          <div className="exercises-section">
            <div className="glass-card exercises-header">
              <h2>🧘 {t('selfCare.exercises.title')}</h2>
              <p>{t('selfCare.exercises.subtitle')}</p>
            </div>

            <div className="exercises-grid">
              <div className="glass-card exercise-card" onClick={() => setShowBreathingModal(true)}>
                <div className="exercise-icon">🌬️</div>
                <h4>{t('selfCare.exercises.breathing.title')}</h4>
                <p>{t('selfCare.exercises.breathing.desc')}</p>
                <button className="try-btn">{t('selfCare.exercises.tryNow')}</button>
              </div>

              <div className="glass-card exercise-card" onClick={() => setShowYogaModal(true)}>
                <div className="exercise-icon">🧘</div>
                <h4>{t('selfCare.exercises.yoga.title')}</h4>
                <p>{t('selfCare.exercises.yoga.desc')}</p>
                <button className="try-btn">{t('selfCare.exercises.tryNow')}</button>
              </div>

              {['stretching', 'walking', 'meditation', 'neckExercise'].map((exercise) => (
                <div key={exercise} className="glass-card exercise-card">
                  <div className="exercise-icon">
                    {exercise === 'stretching' && '🤸'}
                    {exercise === 'walking' && '🚶'}
                    {exercise === 'meditation' && '🧘‍♀️'}
                    {exercise === 'neckExercise' && '💆'}
                  </div>
                  <h4>{t(`selfCare.exercises.${exercise}.title`)}</h4>
                  <p>{t(`selfCare.exercises.${exercise}.desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Breathing Exercise Modal */}
      {showBreathingModal && (
        <div className="modal-overlay" onClick={() => setShowBreathingModal(false)}>
          <div className="modal-content breathing-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>🌬️ {t('selfCare.exercises.breathing.title')}</h3>
              <button onClick={() => setShowBreathingModal(false)} className="modal-close">×</button>
            </div>
            <div className="modal-body">
              <div className="breathing-guide">
                <div className="breathing-circle"></div>
                <div className="breathing-steps">
                  <p>1️⃣ {t('selfCare.exercises.breathing.step1')}</p>
                  <p>2️⃣ {t('selfCare.exercises.breathing.step2')}</p>
                  <p>3️⃣ {t('selfCare.exercises.breathing.step3')}</p>
                  <p>4️⃣ {t('selfCare.exercises.breathing.step4')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Yoga Modal */}
      {showYogaModal && (
        <div className="modal-overlay" onClick={() => setShowYogaModal(false)}>
          <div className="modal-content yoga-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>🧘 {t('selfCare.exercises.yoga.title')}</h3>
              <button onClick={() => setShowYogaModal(false)} className="modal-close">×</button>
            </div>
            <div className="modal-body">
              <div className="yoga-poses">
                {['pose1', 'pose2', 'pose3', 'pose4'].map((pose) => (
                  <div key={pose} className="yoga-pose">
                    <h4>{t(`selfCare.exercises.yoga.${pose}.name`)}</h4>
                    <p>{t(`selfCare.exercises.yoga.${pose}.desc`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* First Aid Detail Modal */}
      {selectedFirstAid && (
        <div className="modal-overlay" onClick={() => setSelectedFirstAid(null)}>
          <div className="modal-content firstaid-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{t(`selfCare.firstAid.${selectedFirstAid}.title`)}</h3>
              <button onClick={() => setSelectedFirstAid(null)} className="modal-close">×</button>
            </div>
            <div className="modal-body">
              <div className="firstaid-steps">
                {['step1', 'step2', 'step3', 'step4'].map((step) => (
                  <div key={step} className="firstaid-step">
                    <p>{t(`selfCare.firstAid.${selectedFirstAid}.${step}`)}</p>
                  </div>
                ))}
              </div>
              <div className="warning-box">
                <p>⚠️ {t('selfCare.firstAid.warning')}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Remedy Detail Modal */}
      {selectedRemedy && (
        <div className="modal-overlay" onClick={() => setSelectedRemedy(null)}>
          <div className="modal-content remedy-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{t(`selfCare.remedies.${selectedRemedy}.title`)}</h3>
              <button onClick={() => setSelectedRemedy(null)} className="modal-close">×</button>
            </div>
            <div className="modal-body">
              <div className="remedy-details">
                <h4>{t('selfCare.remedies.ingredients')}</h4>
                <p>{t(`selfCare.remedies.${selectedRemedy}.ingredients`)}</p>
                
                <h4>{t('selfCare.remedies.method')}</h4>
                <p>{t(`selfCare.remedies.${selectedRemedy}.method`)}</p>
                
                <h4>{t('selfCare.remedies.usage')}</h4>
                <p>{t(`selfCare.remedies.${selectedRemedy}.usage`)}</p>
              </div>
              <div className="caution-box">
                <p>⚠️ {t('selfCare.remedies.caution')}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelfCareTracker;
