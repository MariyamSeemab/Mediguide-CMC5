import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './PeriodTracker.css';

const PeriodTrackerSimple: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'aicompanion' | 'tracker' | 'calendar'>('aicompanion');
  const [expandedSymptom, setExpandedSymptom] = useState<string | null>(null);

  const handleAiChat = (question: string) => {
    console.log('Navigating to chatbot with:', question);
    navigate('/chatbot', { state: { initialMessage: question } });
  };

  const handleSymptomClick = (symptom: string) => {
    console.log('Symptom clicked:', symptom);
    setExpandedSymptom(expandedSymptom === symptom ? null : symptom);
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
          <h1>🩸 Period & Women Health</h1>
          <p>Track your cycle and manage your health</p>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="period-tabs">
        <button 
          className={activeTab === 'aicompanion' ? 'active' : ''} 
          onClick={() => {
            console.log('AI Companion tab clicked');
            setActiveTab('aicompanion');
          }}
        >
          🤖 AI Companion
        </button>
        <button 
          className={activeTab === 'tracker' ? 'active' : ''} 
          onClick={() => {
            console.log('Tracker tab clicked');
            setActiveTab('tracker');
          }}
        >
          📝 Period Tracker
        </button>
        <button 
          className={activeTab === 'calendar' ? 'active' : ''} 
          onClick={() => {
            console.log('Calendar tab clicked');
            setActiveTab('calendar');
          }}
        >
          📅 Calendar
        </button>
      </div>

      {/* Content Area */}
      <div className="period-content">
        {/* AI COMPANION TAB */}
        {activeTab === 'aicompanion' && (
          <div className="ai-companion-section">
            
            {/* Ask AI */}
            <div className="glass-card" style={{ marginBottom: '2rem' }}>
              <h2>💬 Ask AI About Period Health</h2>
              <p style={{ marginBottom: '1.5rem' }}>Click any question to get answers from our AI assistant</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <button 
                  onClick={() => handleAiChat('Why do I get cramps?')}
                  style={{
                    padding: '1rem',
                    background: 'white',
                    border: '2px solid #ff6b9d',
                    borderRadius: '12px',
                    color: '#c44569',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontSize: '1rem'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = '#fff5f7'}
                  onMouseOut={(e) => e.currentTarget.style.background = 'white'}
                >
                  Why do I get cramps?
                </button>
                <button 
                  onClick={() => handleAiChat('Why is my period late?')}
                  style={{
                    padding: '1rem',
                    background: 'white',
                    border: '2px solid #ff6b9d',
                    borderRadius: '12px',
                    color: '#c44569',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontSize: '1rem'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = '#fff5f7'}
                  onMouseOut={(e) => e.currentTarget.style.background = 'white'}
                >
                  Why is my period late?
                </button>
                <button 
                  onClick={() => handleAiChat('What foods help during periods?')}
                  style={{
                    padding: '1rem',
                    background: 'white',
                    border: '2px solid #ff6b9d',
                    borderRadius: '12px',
                    color: '#c44569',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontSize: '1rem'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = '#fff5f7'}
                  onMouseOut={(e) => e.currentTarget.style.background = 'white'}
                >
                  What foods help during periods?
                </button>
              </div>
            </div>

            {/* Smart Relief Assistant */}
            <div className="glass-card" style={{ marginBottom: '2rem' }}>
              <h2>💊 Smart Pain Relief Assistant</h2>
              <p style={{ marginBottom: '1.5rem' }}>Click on any symptom for relief tips</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
                {['cramps', 'headache', 'bloating'].map(symptom => (
                  <button
                    key={symptom}
                    onClick={() => handleSymptomClick(symptom)}
                    style={{
                      padding: '1rem',
                      background: expandedSymptom === symptom ? 'linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)' : 'white',
                      border: '2px solid #ffe0ec',
                      borderRadius: '12px',
                      color: expandedSymptom === symptom ? 'white' : '#c44569',
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontSize: '1rem'
                    }}
                  >
                    {symptom === 'cramps' && '🤕 '}
                    {symptom === 'headache' && '🤯 '}
                    {symptom === 'bloating' && '🎈 '}
                    {symptom.charAt(0).toUpperCase() + symptom.slice(1)}
                  </button>
                ))}
              </div>

              {expandedSymptom && (
                <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: '#fff5f7', borderRadius: '12px' }}>
                  <h3 style={{ color: '#c44569', marginBottom: '1rem' }}>Relief for {expandedSymptom}</h3>
                  <div style={{ marginBottom: '1rem' }}>
                    <h4 style={{ color: '#ff6b9d' }}>✅ Do These:</h4>
                    <ul>
                      <li>Apply heat to the affected area</li>
                      <li>Stay hydrated</li>
                      <li>Get adequate rest</li>
                      <li>Try gentle stretching</li>
                    </ul>
                  </div>
                  <div>
                    <h4 style={{ color: '#e74c3c' }}>❌ Avoid:</h4>
                    <ul>
                      <li>Excessive caffeine</li>
                      <li>Strenuous activity if pain is severe</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Self Care */}
            <div className="glass-card">
              <h2>🧘‍♀️ Self-Care Tips</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
                {[
                  { icon: '🌬️', title: 'Breathing', desc: 'Deep breathing exercises' },
                  { icon: '🔥', title: 'Heat Therapy', desc: 'Use heating pad' },
                  { icon: '🧘‍♀️', title: 'Yoga', desc: 'Gentle stretches' },
                  { icon: '😴', title: 'Sleep', desc: '7-9 hours rest' },
                  { icon: '🛁', title: 'Warm Bath', desc: 'Relax muscles' },
                  { icon: '🚶‍♀️', title: 'Walking', desc: '20-30 min walk' },
                  { icon: '🍵', title: 'Herbal Tea', desc: 'Chamomile or ginger' },
                  { icon: '📖', title: 'Journaling', desc: 'Write your feelings' }
                ].map((item, index) => (
                  <div key={index} style={{ padding: '1.5rem', background: '#fff5f7', borderRadius: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                    <h4 style={{ color: '#c44569', margin: '0.5rem 0' }}>{item.title}</h4>
                    <p style={{ color: '#666', fontSize: '0.9rem' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* PERIOD TRACKER TAB */}
        {activeTab === 'tracker' && (
          <div className="glass-card">
            <h2>📝 Period Tracker</h2>
            <p>Track your cycle and symptoms here</p>
            <div style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>
              <p>Period tracking features coming soon...</p>
            </div>
          </div>
        )}

        {/* CALENDAR TAB */}
        {activeTab === 'calendar' && (
          <div className="glass-card">
            <h2>📅 Calendar</h2>
            <p>View your cycle calendar here</p>
            <div style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>
              <p>Calendar view coming soon...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PeriodTrackerSimple;
