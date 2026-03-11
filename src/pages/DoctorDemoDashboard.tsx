import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DoctorDashboard.css';

// Static Demo Dashboard - No authentication, no database
const DoctorDemoDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'appointments' | 'patients' | 'earnings' | 'profile'>('overview');

  // Fixed demo data - never changes
  const demoDoctor = {
    name: 'Dr. Demo Physician',
    email: 'demo@mediguide.com',
    specialization: 'General Physician',
    experience: '15 years',
    education: 'MBBS, MD',
    languages: 'English, Hindi, Tamil',
    location: 'Mumbai, Maharashtra',
    consultationFee: 500,
    availableSlots: 'Mon-Fri: 9 AM - 5 PM',
    about: 'Experienced general physician with expertise in preventive healthcare and chronic disease management.',
  };

  const demoStats = {
    totalAppointments: 5,
    todayAppointments: 2,
    totalPatients: 18,
    totalEarnings: 12500,
    monthlyEarnings: [
      { month: 'Jan 2026', amount: 8500 },
      { month: 'Feb 2026', amount: 11000 },
      { month: 'Mar 2026', amount: 12500 },
    ],
    rating: 4.8,
  };

  const demoAppointments = [
    {
      id: 'DEMO-001',
      patientId: 'PT-1024',
      patientName: 'Ayesha Khan',
      patientEmail: 'ayesha.khan@demo.com',
      patientPhone: '+91 98765 43210',
      age: 28,
      gender: 'Female',
      date: new Date().toISOString().split('T')[0],
      time: '10:00 AM',
      consultationType: 'online' as const,
      status: 'confirmed' as const,
      reason: 'Regular checkup and consultation for persistent headaches',
    },
    {
      id: 'DEMO-002',
      patientId: 'PT-1025',
      patientName: 'Rohan Mehta',
      patientEmail: 'rohan.mehta@demo.com',
      patientPhone: '+91 98765 43211',
      age: 35,
      gender: 'Male',
      date: new Date().toISOString().split('T')[0],
      time: '2:30 PM',
      consultationType: 'offline' as const,
      status: 'pending' as const,
      reason: 'Follow-up consultation for diabetes management',
    },
    {
      id: 'DEMO-003',
      patientId: 'PT-1026',
      patientName: 'Mariyam Shaikh',
      patientEmail: 'mariyam.shaikh@demo.com',
      patientPhone: '+91 98765 43212',
      age: 42,
      gender: 'Female',
      date: new Date(Date.now() - 86400000).toISOString().split('T')[0],
      time: '11:00 AM',
      consultationType: 'online' as const,
      status: 'completed' as const,
      reason: 'Consultation for seasonal allergies',
    },
    {
      id: 'DEMO-004',
      patientId: 'PT-1027',
      patientName: 'Arjun Patil',
      patientEmail: 'arjun.patil@demo.com',
      patientPhone: '+91 98765 43213',
      age: 31,
      gender: 'Male',
      date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      time: '9:00 AM',
      consultationType: 'offline' as const,
      status: 'confirmed' as const,
      reason: 'Annual health checkup',
    },
    {
      id: 'DEMO-005',
      patientId: 'PT-1028',
      patientName: 'Neha Verma',
      patientEmail: 'neha.verma@demo.com',
      patientPhone: '+91 98765 43214',
      age: 26,
      gender: 'Female',
      date: new Date(Date.now() + 604800000).toISOString().split('T')[0],
      time: '4:00 PM',
      consultationType: 'online' as const,
      status: 'pending' as const,
      reason: 'Consultation for back pain',
    },
  ];

  const demoPatients = [
    { id: 'PT-1024', name: 'Ayesha Khan', email: 'ayesha.khan@demo.com', appointments: 3 },
    { id: 'PT-1025', name: 'Rohan Mehta', email: 'rohan.mehta@demo.com', appointments: 2 },
    { id: 'PT-1026', name: 'Mariyam Shaikh', email: 'mariyam.shaikh@demo.com', appointments: 4 },
    { id: 'PT-1027', name: 'Arjun Patil', email: 'arjun.patil@demo.com', appointments: 1 },
    { id: 'PT-1028', name: 'Neha Verma', email: 'neha.verma@demo.com', appointments: 2 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'status-confirmed';
      case 'pending': return 'status-pending';
      case 'completed': return 'status-completed';
      case 'cancelled': return 'status-cancelled';
      default: return '';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleDemoAction = () => {
    alert('This is a demo dashboard. All actions are disabled. Sign up as a doctor to access real functionality.');
  };

  return (
    <div className="doctor-dashboard">
      {/* Demo Banner */}
      <div className="demo-banner">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <span>
          <strong>Demo Dashboard:</strong> This is a static demonstration. Sign up as a doctor to access your personal dashboard with real functionality.
        </span>
      </div>

      {/* Header */}
      <div className="dashboard-header">
        <div className="header-content">
          <div className="header-left">
            <div>
              <h1>Doctor Dashboard (Demo)</h1>
              <p>Welcome, {demoDoctor.name}!</p>
            </div>
          </div>
          <div className="header-right">
            <button className="btn-logout" onClick={() => navigate('/')}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                <polyline points="16 17 21 12 16 7"/>
                <line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
              Back to Home
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#e3f2fd' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#1977cc" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          </div>
          <div className="stat-info">
            <h3>Total Appointments</h3>
            <p className="stat-number">{demoStats.totalAppointments}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#fff3e0' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#f57c00" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <div className="stat-info">
            <h3>Today's Appointments</h3>
            <p className="stat-number">{demoStats.todayAppointments}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#e8f5e9' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#388e3c" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <div className="stat-info">
            <h3>Total Patients</h3>
            <p className="stat-number">{demoStats.totalPatients}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#fce4ec' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#c2185b" strokeWidth="2">
              <line x1="12" y1="1" x2="12" y2="23"/>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
          </div>
          <div className="stat-info">
            <h3>Total Earnings</h3>
            <p className="stat-number">₹{demoStats.totalEarnings.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="dashboard-tabs">
        <button 
          className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7"/>
            <rect x="14" y="3" width="7" height="7"/>
            <rect x="14" y="14" width="7" height="7"/>
            <rect x="3" y="14" width="7" height="7"/>
          </svg>
          Overview
        </button>
        <button 
          className={`tab-btn ${activeTab === 'appointments' ? 'active' : ''}`}
          onClick={() => setActiveTab('appointments')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          Appointments ({demoStats.totalAppointments})
        </button>
        <button 
          className={`tab-btn ${activeTab === 'patients' ? 'active' : ''}`}
          onClick={() => setActiveTab('patients')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          Patients ({demoPatients.length})
        </button>
        <button 
          className={`tab-btn ${activeTab === 'earnings' ? 'active' : ''}`}
          onClick={() => setActiveTab('earnings')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="1" x2="12" y2="23"/>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
          Earnings
        </button>
        <button 
          className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          Profile
        </button>
      </div>

      {/* Content Area */}
      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="overview-section">
            <div className="section-card">
              <h2>Quick Overview</h2>
              <div className="overview-grid">
                <div className="overview-item">
                  <h4>Pending Appointments</h4>
                  <p className="overview-number">{demoAppointments.filter(a => a.status === 'pending').length}</p>
                </div>
                <div className="overview-item">
                  <h4>Confirmed Today</h4>
                  <p className="overview-number">{demoAppointments.filter(a => a.status === 'confirmed' && a.date === new Date().toISOString().split('T')[0]).length}</p>
                </div>
                <div className="overview-item">
                  <h4>Completed</h4>
                  <p className="overview-number">{demoAppointments.filter(a => a.status === 'completed').length}</p>
                </div>
                <div className="overview-item">
                  <h4>Average Rating</h4>
                  <p className="overview-number">⭐ {demoStats.rating}</p>
                </div>
              </div>
            </div>

            <div className="section-card" style={{ marginTop: '1.5rem' }}>
              <h2>Recent Appointments</h2>
              <div className="appointments-list">
                {demoAppointments.slice(0, 3).map(appointment => (
                  <div key={appointment.id} className="appointment-card-mini">
                    <div className="appointment-header">
                      <div className="patient-info">
                        <div className="patient-avatar-small">
                          {appointment.patientName.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4>{appointment.patientName}</h4>
                          <p>{formatDate(appointment.date)} at {appointment.time}</p>
                        </div>
                      </div>
                      <span className={`status-badge ${getStatusColor(appointment.status)}`}>
                        {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'appointments' && (
          <div className="appointments-section">
            <div className="section-header">
              <h2>All Appointments</h2>
            </div>

            <div className="appointments-list">
              {demoAppointments.map(appointment => (
                <div key={appointment.id} className="appointment-card">
                  <div className="appointment-header">
                    <div className="patient-info">
                      <div className="patient-avatar">
                        {appointment.patientName.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3>{appointment.patientName}</h3>
                        <p>{appointment.patientEmail}</p>
                        <p>{appointment.patientPhone}</p>
                        <p>Age: {appointment.age} | Gender: {appointment.gender}</p>
                      </div>
                    </div>
                    <span className={`status-badge ${getStatusColor(appointment.status)}`}>
                      {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                    </span>
                  </div>

                  <div className="appointment-details">
                    <div className="detail-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      <span>{formatDate(appointment.date)}</span>
                    </div>
                    <div className="detail-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      <span>{appointment.time}</span>
                    </div>
                    <div className="detail-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {appointment.consultationType === 'online' ? (
                          <><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></>
                        ) : (
                          <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>
                        )}
                      </svg>
                      <span>{appointment.consultationType === 'online' ? 'Online Consultation' : 'Offline Consultation'}</span>
                    </div>
                  </div>

                  <div className="appointment-reason">
                    <strong>Reason:</strong> {appointment.reason}
                  </div>

                  <div className="appointment-actions">
                    <button className="btn-action btn-confirm" onClick={handleDemoAction} disabled>
                      ✅ Confirm
                    </button>
                    <button className="btn-action btn-reschedule" onClick={handleDemoAction} disabled>
                      🔄 Reschedule
                    </button>
                    <button className="btn-action btn-cancel" onClick={handleDemoAction} disabled>
                      ❌ Cancel
                    </button>
                    <button className="btn-action btn-chat" onClick={handleDemoAction} disabled>
                      💬 Chat
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'patients' && (
          <div className="patients-section">
            <h2>My Patients</h2>
            <div className="patients-list">
              {demoPatients.map((patient) => (
                <div key={patient.id} className="patient-card">
                  <div className="patient-header">
                    <div className="patient-avatar-large">
                      {patient.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="patient-details">
                      <h3>{patient.name}</h3>
                      <p>{patient.email}</p>
                      <p>Patient ID: {patient.id}</p>
                      <div className="patient-stats">
                        <span>📅 {patient.appointments} Appointments</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'earnings' && (
          <div className="earnings-section">
            <h2>Earnings Overview</h2>
            
            <div className="earnings-cards">
              <div className="earning-card">
                <h4>Total Earnings</h4>
                <p className="earning-amount">₹{demoStats.totalEarnings.toLocaleString()}</p>
                <span className="earning-label">All time</span>
              </div>
              <div className="earning-card">
                <h4>This Month</h4>
                <p className="earning-amount">₹{demoStats.monthlyEarnings[demoStats.monthlyEarnings.length - 1].amount.toLocaleString()}</p>
                <span className="earning-label">Current month</span>
              </div>
              <div className="earning-card">
                <h4>Online Consultations</h4>
                <p className="earning-amount">₹{(demoAppointments.filter(a => a.consultationType === 'online' && a.status === 'completed').length * demoDoctor.consultationFee).toLocaleString()}</p>
                <span className="earning-label">Total online</span>
              </div>
              <div className="earning-card">
                <h4>Offline Consultations</h4>
                <p className="earning-amount">₹{(demoAppointments.filter(a => a.consultationType === 'offline' && a.status === 'completed').length * demoDoctor.consultationFee).toLocaleString()}</p>
                <span className="earning-label">Total offline</span>
              </div>
            </div>

            <div className="earnings-chart-section">
              <h3>Monthly Earnings Trend</h3>
              <div className="simple-chart">
                {demoStats.monthlyEarnings.map((data, index) => (
                  <div key={index} className="chart-bar">
                    <div className="bar" style={{ height: `${(data.amount / Math.max(...demoStats.monthlyEarnings.map(d => d.amount))) * 200}px` }}>
                      <span className="bar-value">₹{data.amount.toLocaleString()}</span>
                    </div>
                    <span className="bar-label">{data.month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="profile-section">
            <h2>Doctor Profile</h2>
            <div className="profile-card">
              <div className="profile-avatar-large">
                {demoDoctor.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="profile-info">
                <h3>{demoDoctor.name}</h3>
                <p>{demoDoctor.email}</p>
                <p className="role-badge">Doctor</p>
              </div>
            </div>

            <div className="profile-details">
              <div className="detail-row">
                <strong>Specialization:</strong>
                <span>{demoDoctor.specialization}</span>
              </div>
              <div className="detail-row">
                <strong>Education:</strong>
                <span>{demoDoctor.education}</span>
              </div>
              <div className="detail-row">
                <strong>Experience:</strong>
                <span>{demoDoctor.experience}</span>
              </div>
              <div className="detail-row">
                <strong>Languages:</strong>
                <span>{demoDoctor.languages}</span>
              </div>
              <div className="detail-row">
                <strong>Location:</strong>
                <span>{demoDoctor.location}</span>
              </div>
              <div className="detail-row">
                <strong>Consultation Fee:</strong>
                <span>₹{demoDoctor.consultationFee}</span>
              </div>
              <div className="detail-row">
                <strong>Available Slots:</strong>
                <span>{demoDoctor.availableSlots}</span>
              </div>
              <div className="detail-row">
                <strong>About:</strong>
                <p style={{ marginTop: '0.5rem' }}>{demoDoctor.about}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorDemoDashboard;
