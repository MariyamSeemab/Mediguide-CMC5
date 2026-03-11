import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import './AdminDashboard.css';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  joinedDate: string;
}

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  patients: number;
  rating: number;
  status: 'active' | 'pending' | 'suspended';
}

const AdminDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'doctors' | 'appointments' | 'settings'>('overview');

  // Mock data
  const [users] = useState<User[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Patient', status: 'active', joinedDate: '2025-12-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Patient', status: 'active', joinedDate: '2025-12-20' },
    { id: 3, name: 'Dr. John Smith', email: 'doctor@email.com', role: 'Doctor', status: 'active', joinedDate: '2025-11-10' },
  ]);

  const [doctors] = useState<Doctor[]>([
    { id: 1, name: 'Dr. Rajesh Kumar', specialty: 'General Physician', patients: 234, rating: 4.8, status: 'active' },
    { id: 2, name: 'Dr. Priya Sharma', specialty: 'Cardiologist', patients: 189, rating: 4.9, status: 'active' },
    { id: 3, name: 'Dr. Amit Patel', specialty: 'Dermatologist', patients: 156, rating: 4.7, status: 'pending' },
  ]);

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-content">
          <div className="header-left">
            <h1>Admin Dashboard</h1>
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

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#e3f2fd' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#1977cc" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <div className="stat-info">
            <h3>Total Users</h3>
            <p className="stat-number">1,234</p>
            <span className="stat-change positive">+12% from last month</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#e8f5e9' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#388e3c" strokeWidth="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
          </div>
          <div className="stat-info">
            <h3>Active Doctors</h3>
            <p className="stat-number">156</p>
            <span className="stat-change positive">+8% from last month</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#fff3e0' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#f57c00" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          </div>
          <div className="stat-info">
            <h3>Appointments Today</h3>
            <p className="stat-number">89</p>
            <span className="stat-change neutral">Same as yesterday</span>
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
            <h3>Revenue (Monthly)</h3>
            <p className="stat-number">₹2.4M</p>
            <span className="stat-change positive">+15% from last month</span>
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
          className={`tab-btn ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          Users
        </button>
        <button 
          className={`tab-btn ${activeTab === 'doctors' ? 'active' : ''}`}
          onClick={() => setActiveTab('doctors')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
          </svg>
          Doctors
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
          className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 1v6m0 6v6m5.2-13.2l-4.2 4.2m0 6l4.2 4.2M23 12h-6m-6 0H1m18.2 5.2l-4.2-4.2m-6 0l-4.2 4.2"/>
          </svg>
          Settings
        </button>
      </div>

      {/* Content Area */}
      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="overview-section">
            <h2>System Overview</h2>
            <div className="overview-grid">
              <div className="overview-card">
                <h3>Recent Activity</h3>
                <div className="activity-list">
                  <div className="activity-item">
                    <div className="activity-icon">👤</div>
                    <div className="activity-details">
                      <p><strong>New user registered</strong></p>
                      <span>John Doe joined 5 minutes ago</span>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon">📅</div>
                    <div className="activity-details">
                      <p><strong>Appointment booked</strong></p>
                      <span>Jane Smith booked with Dr. Kumar</span>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon">⭐</div>
                    <div className="activity-details">
                      <p><strong>New review</strong></p>
                      <span>Dr. Sharma received 5-star rating</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overview-card">
                <h3>System Health</h3>
                <div className="health-metrics">
                  <div className="metric">
                    <span className="metric-label">Server Status</span>
                    <span className="metric-value status-good">Operational</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Database</span>
                    <span className="metric-value status-good">Healthy</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">API Response Time</span>
                    <span className="metric-value">45ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="users-section">
            <div className="section-header">
              <h2>User Management</h2>
              <button className="btn-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19"/>
                  <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
                Add User
              </button>
            </div>

            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Joined Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td><span className="role-badge">{user.role}</span></td>
                      <td>
                        <span className={`status-badge ${user.status === 'active' ? 'status-active' : 'status-inactive'}`}>
                          {user.status}
                        </span>
                      </td>
                      <td>{new Date(user.joinedDate).toLocaleDateString()}</td>
                      <td>
                        <div className="action-buttons">
                          <button className="btn-icon" title="Edit">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                            </svg>
                          </button>
                          <button className="btn-icon" title="Delete">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="3 6 5 6 21 6"/>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'doctors' && (
          <div className="doctors-section">
            <div className="section-header">
              <h2>Doctor Management</h2>
              <button className="btn-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19"/>
                  <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
                Add Doctor
              </button>
            </div>

            <div className="doctors-grid">
              {doctors.map(doctor => (
                <div key={doctor.id} className="doctor-card-admin">
                  <div className="doctor-header">
                    <h3>{doctor.name}</h3>
                    <span className={`status-badge ${doctor.status === 'active' ? 'status-active' : doctor.status === 'pending' ? 'status-pending' : 'status-suspended'}`}>
                      {doctor.status}
                    </span>
                  </div>
                  <p className="doctor-specialty">{doctor.specialty}</p>
                  <div className="doctor-stats">
                    <div className="stat-item">
                      <span className="stat-label">Patients</span>
                      <span className="stat-value">{doctor.patients}</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Rating</span>
                      <span className="stat-value">⭐ {doctor.rating}</span>
                    </div>
                  </div>
                  <div className="doctor-actions">
                    <button className="btn-action-small">View Details</button>
                    <button className="btn-action-small">Edit</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'appointments' && (
          <div className="appointments-section">
            <h2>Appointment Management</h2>
            <p>Appointment management features coming soon...</p>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="settings-section">
            <h2>System Settings</h2>
            <p>System configuration options coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
