import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './PatientDashboard.css';

interface HealthRecord {
  id: number;
  date: string;
  type: string;
  description: string;
  doctor: string;
}

interface LabReport {
  id: number;
  testName: string;
  date: string;
  status: 'completed' | 'pending' | 'in-progress';
  result?: string;
  fileUrl?: string;
}

interface Appointment {
  id: number;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

const PatientDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'health-history' | 'lab-reports' | 'appointments' | 'profile'>('overview');

  // Patient profile data
  const patientProfile = {
    age: 22,
    bloodGroup: 'O+',
    height: '165 cm',
    weight: '58 kg',
    allergies: ['Penicillin', 'Peanuts'],
    chronicConditions: ['None'],
    emergencyContact: {
      name: 'Sarah Ahmed',
      relation: 'Mother',
      phone: '+91 98765 43210'
    }
  };

  // Mock health history data
  const [healthHistory] = useState<HealthRecord[]>([
    {
      id: 1,
      date: '2026-01-10',
      type: 'Consultation',
      description: 'Regular checkup - All vitals normal',
      doctor: 'Dr. Rajesh Kumar'
    },
    {
      id: 2,
      date: '2025-12-15',
      type: 'Vaccination',
      description: 'COVID-19 Booster dose administered',
      doctor: 'Dr. Priya Sharma'
    },
    {
      id: 3,
      date: '2025-11-20',
      type: 'Treatment',
      description: 'Treated for seasonal flu - Prescribed medication',
      doctor: 'Dr. Amit Patel'
    }
  ]);

  // Mock lab reports data
  const [labReports] = useState<LabReport[]>([
    {
      id: 1,
      testName: 'Complete Blood Count (CBC)',
      date: '2026-01-12',
      status: 'completed',
      result: 'Normal',
      fileUrl: '#'
    },
    {
      id: 2,
      testName: 'Lipid Profile',
      date: '2026-01-12',
      status: 'completed',
      result: 'Normal',
      fileUrl: '#'
    },
    {
      id: 3,
      testName: 'Thyroid Function Test',
      date: '2026-01-15',
      status: 'pending',
    },
    {
      id: 4,
      testName: 'Vitamin D Test',
      date: '2026-01-14',
      status: 'in-progress',
    }
  ]);

  // Mock appointments data
  const [appointments] = useState<Appointment[]>([
    {
      id: 1,
      doctorName: 'Dr. Rajesh Kumar',
      specialty: 'General Physician',
      date: '2026-01-18',
      time: '10:00 AM',
      status: 'upcoming'
    },
    {
      id: 2,
      doctorName: 'Dr. Sneha Reddy',
      specialty: 'Pediatrician',
      date: '2026-01-20',
      time: '2:00 PM',
      status: 'upcoming'
    }
  ]);

  const handleShareWithDoctor = () => {
    alert('Health records will be shared with your doctor. This feature will be implemented with backend integration.');
  };

  const handleDownloadReport = (reportId: number) => {
    alert(`Downloading report ${reportId}. This feature will be implemented with backend integration.`);
  };

  const handleUploadReport = () => {
    alert('Upload lab report feature will be implemented with backend integration.');
  };

  const handleBookAppointment = () => {
    navigate('/doctors');
  };

  return (
    <div className="patient-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-content">
          <div className="header-left">
            <h1>My Health Dashboard</h1>
            <p>Welcome back, {user?.name}!</p>
          </div>
          <div className="header-right">
            <button className="btn-logout" onClick={logout}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                <polyline points="16 17 21 12 16 7"/>
                <line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
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
            <h3>Upcoming Appointments</h3>
            <p className="stat-number">{appointments.filter(a => a.status === 'upcoming').length}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#e8f5e9' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#388e3c" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>
          <div className="stat-info">
            <h3>Health Records</h3>
            <p className="stat-number">{healthHistory.length}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#fff3e0' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#f57c00" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="12" y1="18" x2="12" y2="12"/>
              <line x1="9" y1="15" x2="15" y2="15"/>
            </svg>
          </div>
          <div className="stat-info">
            <h3>Lab Reports</h3>
            <p className="stat-number">{labReports.length}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#fce4ec' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#c2185b" strokeWidth="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
          </div>
          <div className="stat-info">
            <h3>Age</h3>
            <p className="stat-number">{patientProfile.age}</p>
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
          className={`tab-btn ${activeTab === 'health-history' ? 'active' : ''}`}
          onClick={() => setActiveTab('health-history')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
          </svg>
          Health History
        </button>
        <button 
          className={`tab-btn ${activeTab === 'lab-reports' ? 'active' : ''}`}
          onClick={() => setActiveTab('lab-reports')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="12" y1="18" x2="12" y2="12"/>
            <line x1="9" y1="15" x2="15" y2="15"/>
          </svg>
          Lab Reports
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
          Appointments
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
            <div className="overview-grid">
              {/* Quick Actions */}
              <div className="overview-card">
                <h3>Quick Actions</h3>
                <div className="quick-actions">
                  <button className="action-btn" onClick={handleBookAppointment}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    Book Appointment
                  </button>
                  <button className="action-btn" onClick={handleUploadReport}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="17 8 12 3 7 8"/>
                      <line x1="12" y1="3" x2="12" y2="15"/>
                    </svg>
                    Upload Lab Report
                  </button>
                  <button className="action-btn" onClick={handleShareWithDoctor}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="18" cy="5" r="3"/>
                      <circle cx="6" cy="12" r="3"/>
                      <circle cx="18" cy="19" r="3"/>
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                    </svg>
                    Share with Doctor
                  </button>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="overview-card">
                <h3>Recent Activity</h3>
                <div className="activity-list">
                  <div className="activity-item">
                    <div className="activity-icon">📋</div>
                    <div className="activity-details">
                      <p><strong>Lab Report Added</strong></p>
                      <span>CBC Test - 2 days ago</span>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon">📅</div>
                    <div className="activity-details">
                      <p><strong>Appointment Scheduled</strong></p>
                      <span>Dr. Rajesh Kumar - 5 days ago</span>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon">💊</div>
                    <div className="activity-details">
                      <p><strong>Prescription Updated</strong></p>
                      <span>New medication added - 1 week ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Health Summary */}
            <div className="health-summary-card">
              <h3>Health Summary</h3>
              <div className="health-metrics">
                <div className="metric-item">
                  <span className="metric-label">Blood Group</span>
                  <span className="metric-value">{patientProfile.bloodGroup}</span>
                </div>
                <div className="metric-item">
                  <span className="metric-label">Height</span>
                  <span className="metric-value">{patientProfile.height}</span>
                </div>
                <div className="metric-item">
                  <span className="metric-label">Weight</span>
                  <span className="metric-value">{patientProfile.weight}</span>
                </div>
                <div className="metric-item">
                  <span className="metric-label">BMI</span>
                  <span className="metric-value">21.3</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'health-history' && (
          <div className="health-history-section">
            <div className="section-header">
              <h2>Health History</h2>
              <button className="btn-primary" onClick={handleShareWithDoctor}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="18" cy="5" r="3"/>
                  <circle cx="6" cy="12" r="3"/>
                  <circle cx="18" cy="19" r="3"/>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                </svg>
                Share with Doctor
              </button>
            </div>

            <div className="health-records-list">
              {healthHistory.map(record => (
                <div key={record.id} className="health-record-card">
                  <div className="record-header">
                    <div className="record-type-badge">{record.type}</div>
                    <span className="record-date">{new Date(record.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <p className="record-description">{record.description}</p>
                  <div className="record-footer">
                    <span className="record-doctor">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                      {record.doctor}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Allergies and Conditions */}
            <div className="medical-info-grid">
              <div className="medical-info-card">
                <h3>Allergies</h3>
                <div className="tags-list">
                  {patientProfile.allergies.map((allergy, index) => (
                    <span key={index} className="tag tag-warning">{allergy}</span>
                  ))}
                </div>
              </div>
              <div className="medical-info-card">
                <h3>Chronic Conditions</h3>
                <div className="tags-list">
                  {patientProfile.chronicConditions.map((condition, index) => (
                    <span key={index} className="tag tag-info">{condition}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'lab-reports' && (
          <div className="lab-reports-section">
            <div className="section-header">
              <h2>Lab Reports</h2>
              <button className="btn-primary" onClick={handleUploadReport}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="17 8 12 3 7 8"/>
                  <line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
                Upload Report
              </button>
            </div>

            <div className="lab-reports-grid">
              {labReports.map(report => (
                <div key={report.id} className="lab-report-card">
                  <div className="report-header">
                    <h3>{report.testName}</h3>
                    <span className={`status-badge status-${report.status}`}>
                      {report.status.replace('-', ' ')}
                    </span>
                  </div>
                  <div className="report-details">
                    <div className="detail-row">
                      <span className="detail-label">Date:</span>
                      <span className="detail-value">{new Date(report.date).toLocaleDateString()}</span>
                    </div>
                    {report.result && (
                      <div className="detail-row">
                        <span className="detail-label">Result:</span>
                        <span className="detail-value result-normal">{report.result}</span>
                      </div>
                    )}
                  </div>
                  {report.status === 'completed' && (
                    <div className="report-actions">
                      <button className="btn-action" onClick={() => handleDownloadReport(report.id)}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                          <polyline points="7 10 12 15 17 10"/>
                          <line x1="12" y1="15" x2="12" y2="3"/>
                        </svg>
                        Download
                      </button>
                      <button className="btn-action" onClick={handleShareWithDoctor}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="18" cy="5" r="3"/>
                          <circle cx="6" cy="12" r="3"/>
                          <circle cx="18" cy="19" r="3"/>
                          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                        </svg>
                        Share
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'appointments' && (
          <div className="appointments-section">
            <div className="section-header">
              <h2>My Appointments</h2>
              <button className="btn-primary" onClick={handleBookAppointment}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19"/>
                  <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
                Book New Appointment
              </button>
            </div>

            <div className="appointments-list">
              {appointments.map(appointment => (
                <div key={appointment.id} className="appointment-card">
                  <div className="appointment-header">
                    <div className="doctor-info">
                      <h3>{appointment.doctorName}</h3>
                      <p>{appointment.specialty}</p>
                    </div>
                    <span className={`status-badge status-${appointment.status}`}>
                      {appointment.status}
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
                      <span>{new Date(appointment.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="detail-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      <span>{appointment.time}</span>
                    </div>
                  </div>
                  {appointment.status === 'upcoming' && (
                    <div className="appointment-actions">
                      <button className="btn-action btn-reschedule">Reschedule</button>
                      <button className="btn-action btn-cancel">Cancel</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="profile-section">
            <h2>My Profile</h2>
            <div className="profile-grid">
              <div className="profile-card">
                <div className="profile-avatar-large">
                  {user?.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="profile-info">
                  <h3>{user?.name}</h3>
                  <p>{user?.email}</p>
                  <p className="role-badge">Patient</p>
                </div>
              </div>

              <div className="profile-details-card">
                <h3>Personal Information</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">Age</span>
                    <span className="info-value">{patientProfile.age} years</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Blood Group</span>
                    <span className="info-value">{patientProfile.bloodGroup}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Height</span>
                    <span className="info-value">{patientProfile.height}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Weight</span>
                    <span className="info-value">{patientProfile.weight}</span>
                  </div>
                </div>
              </div>

              <div className="profile-details-card">
                <h3>Emergency Contact</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">Name</span>
                    <span className="info-value">{patientProfile.emergencyContact.name}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Relation</span>
                    <span className="info-value">{patientProfile.emergencyContact.relation}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Phone</span>
                    <span className="info-value">{patientProfile.emergencyContact.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientDashboard;
