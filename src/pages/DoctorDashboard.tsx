import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import ProfilePhotoUpload from '../components/ProfilePhotoUpload';
import DoctorPatientChat from '../components/DoctorPatientChat';
import PrescriptionWriter from '../components/PrescriptionWriter';
import { chatService } from '../services/chatService';
import { prescriptionService } from '../services/prescriptionService';
import { pdfService } from '../services/pdfService';
import { appointmentService } from '../services/appointmentService';
import './DoctorDashboard.css';

interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  doctorId: string;
  doctorEmail: string;
  doctorName: string;
  date: string;
  time: string;
  consultationType: 'online' | 'offline';
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled' | 'rescheduled';
  reason: string;
  aiReport?: string;
  labResults?: string;
  prescription?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

interface DoctorStats {
  totalAppointments: number;
  todayAppointments: number;
  totalPatients: number;
  totalEarnings: number;
  monthlyEarnings: { month: string; amount: number }[];
  rating: number;
}

const DoctorDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { doctorId } = useParams<{ doctorId: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'appointments' | 'patients' | 'earnings' | 'profile'>('overview');
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [appointmentFilter, setAppointmentFilter] = useState<'all' | 'pending' | 'confirmed' | 'completed'>('all');
  const [stats, setStats] = useState<DoctorStats>({
    totalAppointments: 0,
    todayAppointments: 0,
    totalPatients: 0,
    totalEarnings: 0,
    monthlyEarnings: [],
    rating: 0,
  });
  const [loading, setLoading] = useState(true);
  
  // Chat and Prescription modal states
  const [showChatModal, setShowChatModal] = useState(false);
  const [showPrescriptionModal, setShowPrescriptionModal] = useState(false);
  const [selectedAppointmentForChat, setSelectedAppointmentForChat] = useState<Appointment | null>(null);
  const [selectedAppointmentForPrescription, setSelectedAppointmentForPrescription] = useState<Appointment | null>(null);
  const [unreadCounts, setUnreadCounts] = useState<{ [key: string]: number }>({});

  // Authentication check - ensure user is logged in and is a doctor
  useEffect(() => {
    if (!user || user.role !== 'doctor') {
      navigate('/');
      return;
    }

    // Security: Verify doctor can only access their own dashboard
    if (doctorId) {
      const doctorSlug = user.email.split('@')[0].replace(/\./g, '-');
      if (doctorId !== doctorSlug) {
        alert('Access denied. You can only view your own dashboard.');
        navigate(`/doctor/dashboard/${doctorSlug}`);
        return;
      }
    }
  }, [user, doctorId, navigate]);

  // Fetch doctor's appointments and calculate stats
  useEffect(() => {
    if (user?.email) {
      fetchDoctorData();
    }
  }, [user]);

  // Update unread counts periodically
  useEffect(() => {
    if (appointments.length > 0) {
      updateUnreadCounts();
      const interval = setInterval(updateUnreadCounts, 3000);
      return () => clearInterval(interval);
    }
  }, [appointments]);

  const updateUnreadCounts = () => {
    const counts: { [key: string]: number } = {};
    appointments.forEach(apt => {
      counts[apt.id] = chatService.getUnreadCount(apt.id, user?.email || '');
    });
    setUnreadCounts(counts);
  };

  const fetchDoctorData = () => {
    try {
      console.log('🔍 Fetching doctor data for:', user?.email);
      
      // Get appointments from localStorage
      const storedAppointments = localStorage.getItem('mediguide_appointments');
      console.log('Raw appointments from storage:', storedAppointments);
      
      const allAppointments: Appointment[] = storedAppointments ? JSON.parse(storedAppointments) : [];
      console.log('Total appointments in central storage:', allAppointments.length);
      console.log('All appointments:', allAppointments);
      
      // Filter appointments for this doctor - REAL DATA ONLY
      const doctorAppointments = allAppointments.filter(apt => {
        console.log(`Checking appointment ${apt.id}: doctorEmail="${apt.doctorEmail}" vs user="${user?.email}"`);
        return apt.doctorEmail === user?.email;
      });
      console.log(`Filtered appointments for ${user?.email}:`, doctorAppointments.length);
      console.log('Doctor appointments:', doctorAppointments);
      
      // Sort by date (newest first)
      doctorAppointments.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      
      // Calculate stats from real data
      const today = new Date().toISOString().split('T')[0];
      const todayApts = doctorAppointments.filter(apt => apt.date === today);
      
      // Get unique patients
      const uniquePatients = new Set(doctorAppointments.map(apt => apt.patientEmail));
      
      // Get doctor profile from localStorage
      const users = JSON.parse(localStorage.getItem('mediguide_users') || '[]');
      const doctorUser = users.find((u: any) => u.email === user?.email);
      const doctorProfile = doctorUser?.doctorProfile;
      
      // Calculate earnings (consultation fee * completed appointments)
      const completedAppointments = doctorAppointments.filter(apt => apt.status === 'completed');
      const consultationFee = doctorProfile?.consultationFee || 500;
      const totalEarnings = completedAppointments.length * consultationFee;
      
      const displayStats: DoctorStats = {
        totalAppointments: doctorAppointments.length,
        todayAppointments: todayApts.length,
        totalPatients: uniquePatients.size,
        totalEarnings,
        monthlyEarnings: calculateMonthlyEarnings(completedAppointments, consultationFee),
        rating: doctorProfile?.rating || 4.8,
      };
      
      console.log('📊 Stats:', displayStats);
      
      setAppointments(doctorAppointments);
      setStats(displayStats);
      setLoading(false);
    } catch (error) {
      console.error('❌ Error fetching doctor data:', error);
      setLoading(false);
    }
  };

  const calculateMonthlyEarnings = (appointments: Appointment[], fee: number) => {
    const monthlyData: { [key: string]: number } = {};
    
    appointments.forEach(apt => {
      const month = new Date(apt.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
      monthlyData[month] = (monthlyData[month] || 0) + fee;
    });
    
    return Object.entries(monthlyData).map(([month, amount]) => ({ month, amount }));
  };

  const updateAppointmentStatus = (appointmentId: string, newStatus: Appointment['status']) => {
    try {
      console.log('🔵 updateAppointmentStatus called:', { appointmentId, newStatus });
      
      // Update in central storage
      const storedAppointments = localStorage.getItem('mediguide_appointments');
      console.log('📦 Central storage exists:', !!storedAppointments);
      
      const allAppointments: Appointment[] = storedAppointments ? JSON.parse(storedAppointments) : [];
      console.log('📊 Total appointments in central:', allAppointments.length);
      
      const appointmentIndex = allAppointments.findIndex(apt => apt.id === appointmentId);
      console.log('🔍 Appointment index in central:', appointmentIndex);
      
      if (appointmentIndex === -1) {
        console.error('❌ Appointment not found in central storage');
        return false;
      }
      
      const oldStatus = allAppointments[appointmentIndex].status;
      console.log('📝 Updating status:', oldStatus, '→', newStatus);
      
      const updatedAppointments = allAppointments.map(apt => {
        if (apt.id === appointmentId) {
          return { ...apt, status: newStatus, updatedAt: new Date().toISOString() };
        }
        return apt;
      });
      
      localStorage.setItem('mediguide_appointments', JSON.stringify(updatedAppointments));
      console.log('💾 Central storage updated');
      
      // SYNC BACK TO PATIENT STORAGE
      const appointment = updatedAppointments.find(apt => apt.id === appointmentId);
      if (appointment) {
        console.log('🔄 Starting sync to patient storage...');
        console.log('👤 Patient email:', appointment.patientEmail);
        syncStatusToPatientStorage(appointment, newStatus);
      } else {
        console.error('❌ Could not find updated appointment for sync');
      }
      
      // Refresh data immediately
      fetchDoctorData();
      
      console.log('✅ updateAppointmentStatus completed successfully');
      return true;
    } catch (error) {
      console.error('❌ Error updating appointment:', error);
      alert('Failed to update appointment. Please try again.');
      return false;
    }
  };

  const syncStatusToPatientStorage = (appointment: Appointment, newStatus: Appointment['status']) => {
    try {
      console.log('🔄 Syncing status back to patient storage:', appointment.patientEmail);
      console.log('📋 Appointment ID:', appointment.id);
      console.log('📊 New Status:', newStatus);
      
      // Map doctor status to patient status
      const patientStatus = newStatus === 'confirmed' ? 'approved' : 
                           newStatus === 'cancelled' ? 'cancelled' :
                           newStatus === 'completed' ? 'completed' :
                           newStatus === 'rejected' ? 'rejected' : 
                           'pending';
      
      console.log('🔄 Mapped to patient status:', patientStatus);
      
      // Get patient's appointments
      const patientStorageKey = `mediguide_appointments_${appointment.patientEmail}`;
      console.log('🔑 Patient storage key:', patientStorageKey);
      
      const patientAppointments = localStorage.getItem(patientStorageKey);
      
      if (patientAppointments) {
        const appointments = JSON.parse(patientAppointments);
        console.log('📦 Found patient appointments:', appointments.length);
        
        const appointmentIndex = appointments.findIndex((apt: any) => apt.id === appointment.id);
        console.log('🔍 Appointment index:', appointmentIndex);
        
        if (appointmentIndex >= 0) {
          const updatedAppointments = appointments.map((apt: any) => {
            if (apt.id === appointment.id) {
              console.log('✏️ Updating appointment from', apt.status, 'to', patientStatus);
              return { ...apt, status: patientStatus };
            }
            return apt;
          });
          
          localStorage.setItem(patientStorageKey, JSON.stringify(updatedAppointments));
          console.log('✅ Status synced to patient storage:', patientStatus);
          console.log('💾 Updated appointments saved to localStorage');
        } else {
          console.error('❌ Appointment not found in patient storage');
        }
      } else {
        console.warn('⚠️ Patient appointments not found in storage');
        console.log('🔍 Checking all localStorage keys...');
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && key.includes('appointments')) {
            console.log('Found key:', key);
          }
        }
      }
    } catch (error) {
      console.error('❌ Error syncing to patient storage:', error);
    }
  };

  const handleApprove = (appointmentId: string) => {
    console.log('🔵 Approve button clicked for:', appointmentId);
    console.log('👤 Doctor email:', user?.email);
    
    // Get the appointment to show details
    const appointment = appointments.find(apt => apt.id === appointmentId);
    if (!appointment) {
      alert('Appointment not found.');
      return;
    }
    
    const consultationType = appointment.consultationType === 'online' ? 'Online' : 'Offline';
    const confirmMessage = `Approve this ${consultationType} consultation?\n\nPatient: ${appointment.patientName}\nDate: ${formatDate(appointment.date)}\nTime: ${appointment.time}`;
    
    if (confirm(confirmMessage)) {
      try {
        console.log('✅ User confirmed approval');
        console.log('📦 Using appointmentService');
        
        const result = appointmentService.approveAppointment(appointmentId, user!.email);
        console.log('📊 Approval result:', result);
        
        if (result.success) {
          if (result.meetingId) {
            alert(`✅ Appointment approved!\n\n🎥 Meeting ID: ${result.meetingId}\n\nPatient will be notified via email.`);
          } else {
            alert('✅ Appointment approved!\n\n🏥 Patient will be notified for clinic visit.');
          }
          console.log('🔄 Refreshing data...');
          fetchDoctorData(); // Refresh data
        } else {
          console.error('❌ Approval failed');
          alert('Failed to approve appointment. Please try again.');
        }
      } catch (error) {
        console.error('❌ Error in handleApprove:', error);
        alert('An error occurred while approving the appointment.');
      }
    } else {
      console.log('❌ User cancelled approval');
    }
  };

  const handleReject = (appointmentId: string) => {
    if (confirm('Are you sure you want to reject this appointment?')) {
      const success = appointmentService.rejectAppointment(appointmentId, user!.email);
      
      if (success) {
        alert('Appointment rejected. Patient will be notified.');
        fetchDoctorData(); // Refresh data
      } else {
        alert('Failed to reject appointment. Please try again.');
      }
    }
  };

  const handleReschedule = (appointmentId: string) => {
    // In a real app, this would open a modal to select new date/time
    const newDate = prompt('Enter new date (YYYY-MM-DD):');
    const newTime = prompt('Enter new time (HH:MM AM/PM):');
    
    if (newDate && newTime) {
      try {
        // Update in central storage
        const storedAppointments = localStorage.getItem('mediguide_appointments');
        const allAppointments: Appointment[] = storedAppointments ? JSON.parse(storedAppointments) : [];
        
        const updatedAppointments = allAppointments.map(apt => {
          if (apt.id === appointmentId) {
            return { ...apt, date: newDate, time: newTime, status: 'rescheduled' as const, updatedAt: new Date().toISOString() };
          }
          return apt;
        });
        
        localStorage.setItem('mediguide_appointments', JSON.stringify(updatedAppointments));
        
        // SYNC BACK TO PATIENT STORAGE
        const appointment = updatedAppointments.find(apt => apt.id === appointmentId);
        if (appointment) {
          syncRescheduleToPatientStorage(appointment, newDate, newTime);
        }
        
        fetchDoctorData();
        alert('Appointment rescheduled successfully!');
      } catch (error) {
        console.error('Error rescheduling:', error);
        alert('Failed to reschedule. Please try again.');
      }
    }
  };

  const syncRescheduleToPatientStorage = (appointment: Appointment, newDate: string, newTime: string) => {
    try {
      console.log('🔄 Syncing reschedule to patient storage:', appointment.patientEmail);
      
      // Get patient's appointments
      const patientStorageKey = `mediguide_appointments_${appointment.patientEmail}`;
      const patientAppointments = localStorage.getItem(patientStorageKey);
      
      if (patientAppointments) {
        const appointments = JSON.parse(patientAppointments);
        const updatedAppointments = appointments.map((apt: any) => {
          if (apt.id === appointment.id) {
            return { 
              ...apt, 
              appointmentDate: newDate, 
              appointmentTime: newTime,
              status: 'pending' // Reset to pending after reschedule
            };
          }
          return apt;
        });
        
        localStorage.setItem(patientStorageKey, JSON.stringify(updatedAppointments));
        console.log('✅ Reschedule synced to patient storage');
      }
    } catch (error) {
      console.error('❌ Error syncing reschedule to patient storage:', error);
    }
  };

  const handleCancel = (appointmentId: string) => {
    if (confirm('Are you sure you want to cancel this appointment?')) {
      const success = updateAppointmentStatus(appointmentId, 'cancelled');
      if (success) {
        alert('Appointment cancelled successfully!');
      }
    }
  };

  const handleComplete = (appointmentId: string) => {
    const appointment = appointments.find(apt => apt.id === appointmentId);
    if (!appointment) {
      console.error('❌ Appointment not found:', appointmentId);
      return;
    }
    
    const consultationType = appointment.consultationType === 'online' ? 'Online' : 'Offline';
    const confirmMessage = `Mark this ${consultationType} consultation as completed?\n\nConsultation fee of ₹500 will be added to your earnings.`;
    
    console.log('📋 Completing appointment:', {
      id: appointmentId,
      patientEmail: appointment.patientEmail,
      type: consultationType,
      currentStatus: appointment.status
    });
    
    if (confirm(confirmMessage)) {
      console.log('✅ User confirmed completion');
      const success = updateAppointmentStatus(appointmentId, 'completed');
      
      if (success) {
        console.log('✅ Appointment marked as completed in central storage');
        
        // Force immediate data refresh
        setTimeout(() => {
          fetchDoctorData();
          console.log('🔄 Data refreshed after completion');
        }, 100);
        
        // Show success message with earnings update
        alert(`✅ Consultation completed successfully!\n\n💰 ₹500 added to your earnings\nType: ${consultationType} Consultation`);
      } else {
        console.error('❌ Failed to update appointment status');
      }
    } else {
      console.log('❌ User cancelled completion');
    }
  };

  const handleVideoCall = (appointmentId: string) => {
    navigate(`/doctor/video-consultation/${appointmentId}`);
  };

  const handleChat = (appointmentId: string) => {
    const appointment = appointments.find(apt => apt.id === appointmentId);
    if (appointment) {
      setSelectedAppointmentForChat(appointment);
      setShowChatModal(true);
    }
  };

  const handleWritePrescription = (appointmentId: string) => {
    const appointment = appointments.find(apt => apt.id === appointmentId);
    if (appointment) {
      // Get doctor profile for registration ID
      const users = JSON.parse(localStorage.getItem('mediguide_users') || '[]');
      const doctorUser = users.find((u: any) => u.email === user?.email);
      const profile = doctorUser?.doctorProfile;
      
      if (!profile) {
        alert('Please complete your profile before writing prescriptions.');
        return;
      }
      
      setSelectedAppointmentForPrescription(appointment);
      setShowPrescriptionModal(true);
    }
  };

  const handleCloseChatModal = () => {
    setShowChatModal(false);
    setSelectedAppointmentForChat(null);
    updateUnreadCounts();
  };

  const handleClosePrescriptionModal = () => {
    setShowPrescriptionModal(false);
    setSelectedAppointmentForPrescription(null);
  };

  const handlePrescriptionSuccess = () => {
    fetchDoctorData();
    updateUnreadCounts();
  };

  const handleDownloadPrescription = async (prescriptionId: string) => {
    try {
      const prescription = prescriptionService.getPrescriptionById(prescriptionId);
      
      if (!prescription) {
        alert('Prescription not found.');
        return;
      }

      // Verify doctor can download this prescription
      if (!pdfService.canDownloadPrescription(prescription, user?.email || '', 'doctor')) {
        alert('You do not have permission to download this prescription.');
        return;
      }

      await pdfService.generatePrescriptionPDF(prescription);
    } catch (error) {
      console.error('Error downloading prescription:', error);
      alert('Failed to download prescription PDF. Please try again.');
    }
  };

  const handlePhotoUpdate = (photoData: string | null) => {
    try {
      const users = JSON.parse(localStorage.getItem('mediguide_users') || '[]');
      const userIndex = users.findIndex((u: any) => u.email === user?.email);
      
      if (userIndex !== -1) {
        if (!users[userIndex].doctorProfile) {
          users[userIndex].doctorProfile = {};
        }
        users[userIndex].doctorProfile.profilePhoto = photoData;
        localStorage.setItem('mediguide_users', JSON.stringify(users));
      }
    } catch (error) {
      console.error('Error updating profile photo:', error);
      alert('Failed to update profile photo. Please try again.');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'status-confirmed';
      case 'pending': return 'status-pending';
      case 'completed': return 'status-completed';
      case 'cancelled': return 'status-cancelled';
      case 'rescheduled': return 'status-pending';
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

  if (loading) {
    return (
      <div className="doctor-dashboard">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          fontSize: '1.5rem',
          color: '#1977cc'
        }}>
          Loading Dashboard...
        </div>
      </div>
    );
  }

  return (
    <div className="doctor-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-content">
          <div className="header-left">
            <button 
              className="btn-back-home" 
              onClick={() => navigate('/')}
              style={{
                marginRight: '1rem',
                padding: '0.5rem',
                background: 'transparent',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              title="Back to Home"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '20px', height: '20px' }}>
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
            {(() => {
              const users = JSON.parse(localStorage.getItem('mediguide_users') || '[]');
              const doctorUser = users.find((u: any) => u.email === user?.email);
              const profilePhoto = doctorUser?.doctorProfile?.profilePhoto;

              return profilePhoto ? (
                <img 
                  src={profilePhoto} 
                  alt={user?.name} 
                  style={{ 
                    width: '60px', 
                    height: '60px', 
                    borderRadius: '50%', 
                    objectFit: 'cover',
                    marginRight: '1rem',
                    border: '3px solid #1977cc'
                  }} 
                />
              ) : null;
            })()}
            <div>
              <h1>Doctor Dashboard</h1>
              <p>Welcome back, {user?.name}!</p>
            </div>
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
            <p className="stat-number">{stats.totalAppointments}</p>
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
            <p className="stat-number">{stats.todayAppointments}</p>
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
            <p className="stat-number">{stats.totalPatients}</p>
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
            <p className="stat-number">₹{stats.totalEarnings.toLocaleString()}</p>
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
          Appointments ({appointments.length})
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
          Patients ({stats.totalPatients})
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

      {/* Content Area - Will continue in next part */}
      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="overview-section">
            <div className="section-card">
              <h2>Quick Overview</h2>
              <div className="overview-grid">
                <div className="overview-item">
                  <h4>Pending Appointments</h4>
                  <p className="overview-number">{appointments.filter(a => a.status === 'pending').length}</p>
                </div>
                <div className="overview-item">
                  <h4>Confirmed Today</h4>
                  <p className="overview-number">{appointments.filter(a => a.status === 'confirmed' && a.date === new Date().toISOString().split('T')[0]).length}</p>
                </div>
                <div className="overview-item">
                  <h4>Completed This Month</h4>
                  <p className="overview-number">{appointments.filter(a => a.status === 'completed' && new Date(a.date).getMonth() === new Date().getMonth()).length}</p>
                </div>
                <div className="overview-item">
                  <h4>Average Rating</h4>
                  <p className="overview-number">⭐ {stats.rating}</p>
                </div>
              </div>
            </div>

            <div className="section-card" style={{ marginTop: '1.5rem' }}>
              <h2>Recent Appointments</h2>
              {appointments.slice(0, 3).length > 0 ? (
                <div className="appointments-list">
                  {appointments.slice(0, 3).map(appointment => (
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
              ) : (
                <p style={{ color: '#6c757d', textAlign: 'center', padding: '2rem' }}>
                  No appointments yet. Patients will be able to book appointments with you.
                </p>
              )}
            </div>
          </div>
        )}

        {/* Appointments Tab - Continuing... */}

        {activeTab === 'appointments' && (
          <div className="appointments-section">
            <div className="section-header">
              <h2>All Appointments</h2>
              <div className="filter-buttons">
                <button 
                  className={`btn-filter ${appointmentFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setAppointmentFilter('all')}
                >
                  All
                </button>
                <button 
                  className={`btn-filter ${appointmentFilter === 'pending' ? 'active' : ''}`}
                  onClick={() => setAppointmentFilter('pending')}
                >
                  Pending
                </button>
                <button 
                  className={`btn-filter ${appointmentFilter === 'confirmed' ? 'active' : ''}`}
                  onClick={() => setAppointmentFilter('confirmed')}
                >
                  Confirmed
                </button>
                <button 
                  className={`btn-filter ${appointmentFilter === 'completed' ? 'active' : ''}`}
                  onClick={() => setAppointmentFilter('completed')}
                >
                  Completed
                </button>
              </div>
            </div>

            {(() => {
              // Filter appointments based on selected filter
              const filteredAppointments = appointmentFilter === 'all' 
                ? appointments 
                : appointments.filter(apt => apt.status === appointmentFilter);
              
              console.log('🔍 Filter:', appointmentFilter, 'Total:', appointments.length, 'Filtered:', filteredAppointments.length);
              
              return filteredAppointments.length > 0 ? (
              <div className="appointments-list">
                {filteredAppointments.map(appointment => (
                  <div key={appointment.id} className="appointment-card">
                    <div className="appointment-header">
                      <div className="patient-info">
                        <div className="patient-avatar">
                          {appointment.patientName.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h3>{appointment.patientName}</h3>
                          <p>{appointment.patientEmail}</p>
                          {appointment.patientPhone && <p>{appointment.patientPhone}</p>}
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

                    {appointment.aiReport && (
                      <div className="ai-report-section">
                        <h4>🤖 AI Generated Report</h4>
                        <p>{appointment.aiReport}</p>
                      </div>
                    )}

                    {appointment.labResults && (
                      <div className="lab-results-section">
                        <h4>🧪 Lab Test Results</h4>
                        <a href={appointment.labResults} target="_blank" rel="noopener noreferrer" className="btn-view-results">
                          View Results
                        </a>
                      </div>
                    )}

                    {/* Display existing prescriptions */}
                    {(() => {
                      const prescriptions = prescriptionService.getPrescriptionsByAppointment(appointment.id);
                      if (prescriptions.length > 0) {
                        return (
                          <div className="prescriptions-section">
                            <h4>📝 Prescriptions ({prescriptions.length})</h4>
                            {prescriptions.map(presc => (
                              <div key={presc.id} className="prescription-item">
                                <div className="prescription-item-info">
                                  <span className="prescription-number">{presc.prescriptionNumber}</span>
                                  <span className="prescription-date">
                                    {new Date(presc.date).toLocaleDateString()}
                                  </span>
                                </div>
                                <div className="prescription-item-actions">
                                  <button
                                    className="btn-download-prescription"
                                    onClick={() => handleDownloadPrescription(presc.id)}
                                    title="Download PDF"
                                  >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                      <polyline points="7 10 12 15 17 10"/>
                                      <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                    Download PDF
                                  </button>
                                  <a 
                                    href={presc.verificationUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn-verify-prescription"
                                  >
                                    Verify
                                  </a>
                                </div>
                              </div>
                            ))}
                          </div>
                        );
                      }
                      return null;
                    })()}

                    <div className="appointment-actions">
                      {appointment.status === 'pending' && (
                        <>
                          <button className="btn-action btn-approve" onClick={() => handleApprove(appointment.id)}>
                            ✅ Approve
                          </button>
                          <button className="btn-action btn-reject" onClick={() => handleReject(appointment.id)}>
                            ❌ Reject
                          </button>
                        </>
                      )}
                      {appointment.status === 'confirmed' && (
                        <>
                          <button className="btn-action btn-reschedule" onClick={() => handleReschedule(appointment.id)}>
                            🔄 Reschedule
                          </button>
                          <button className="btn-action btn-complete" onClick={() => handleComplete(appointment.id)}>
                            ✔️ Complete
                          </button>
                          {appointment.consultationType === 'online' && (
                            <button className="btn-action btn-video" onClick={() => handleVideoCall(appointment.id)}>
                              🎥 Start Video Call
                            </button>
                          )}
                          {appointment.consultationType === 'offline' && (
                            <div className="clinic-visit-info">
                              <span className="clinic-badge">🏥 Clinic Visit Scheduled</span>
                            </div>
                          )}
                        </>
                      )}
                      <button 
                        className="btn-action btn-chat" 
                        onClick={() => handleChat(appointment.id)}
                        style={{ position: 'relative' }}
                      >
                        💬 Chat
                        {unreadCounts[appointment.id] > 0 && (
                          <span className="unread-badge">{unreadCounts[appointment.id]}</span>
                        )}
                      </button>
                      {(appointment.status === 'confirmed' || appointment.status === 'completed') && (
                        <button 
                          className="btn-action btn-prescription" 
                          onClick={() => handleWritePrescription(appointment.id)}
                        >
                          📝 Write Prescription
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              ) : (
                <div className="empty-state">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '64px', height: '64px', color: '#ccc' }}>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <h3>No {appointmentFilter !== 'all' ? appointmentFilter.charAt(0).toUpperCase() + appointmentFilter.slice(1) : ''} Appointments</h3>
                  <p>{appointmentFilter === 'all' ? 'Patients will be able to book appointments with you through the platform.' : `No ${appointmentFilter} appointments found.`}</p>
                </div>
              );
            })()}
          </div>
        )}

        {activeTab === 'patients' && (
          <div className="patients-section">
            <h2>My Patients</h2>
            {stats.totalPatients > 0 ? (
              <div className="patients-list">
                {Array.from(new Set(appointments.map(apt => apt.patientEmail))).map((email, index) => {
                  const patientAppointments = appointments.filter(apt => apt.patientEmail === email);
                  const patient = patientAppointments[0];
                  return (
                    <div key={index} className="patient-card">
                      <div className="patient-header">
                        <div className="patient-avatar-large">
                          {patient.patientName.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="patient-details">
                          <h3>{patient.patientName}</h3>
                          <p>{patient.patientEmail}</p>
                          <div className="patient-stats">
                            <span>📅 {patientAppointments.length} Appointments</span>
                            <span>✅ {patientAppointments.filter(a => a.status === 'completed').length} Completed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="empty-state">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '64px', height: '64px', color: '#ccc' }}>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                <h3>No Patients Yet</h3>
                <p>Your patient list will appear here once they book appointments.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'earnings' && (
          <div className="earnings-section">
            <h2>Earnings Overview</h2>
            
            <div className="earnings-cards">
              <div className="earning-card">
                <h4>Total Earnings</h4>
                <p className="earning-amount">₹{stats.totalEarnings.toLocaleString()}</p>
                <span className="earning-label">All time</span>
              </div>
              <div className="earning-card">
                <h4>This Month</h4>
                <p className="earning-amount">
                  ₹{appointments
                    .filter(a => a.status === 'completed' && new Date(a.date).getMonth() === new Date().getMonth())
                    .length * 500}
                </p>
                <span className="earning-label">Current month</span>
              </div>
              <div className="earning-card">
                <h4>Online Consultations</h4>
                <p className="earning-amount">
                  ₹{appointments
                    .filter(a => a.status === 'completed' && a.consultationType === 'online')
                    .length * 500}
                </p>
                <span className="earning-label">Total online</span>
              </div>
              <div className="earning-card">
                <h4>Offline Consultations</h4>
                <p className="earning-amount">
                  ₹{(() => {
                    const offlineCompleted = appointments.filter(a => a.status === 'completed' && a.consultationType === 'offline');
                    console.log('💰 Offline completed consultations:', offlineCompleted.length, offlineCompleted);
                    return offlineCompleted.length * 500;
                  })()}
                </p>
                <span className="earning-label">Total offline</span>
              </div>
            </div>

            {stats.monthlyEarnings.length > 0 && (
              <div className="earnings-chart-section">
                <h3>Monthly Earnings Trend</h3>
                <div className="simple-chart">
                  {stats.monthlyEarnings.map((data, index) => (
                    <div key={index} className="chart-bar">
                      <div className="bar" style={{ height: `${(data.amount / Math.max(...stats.monthlyEarnings.map(d => d.amount))) * 200}px` }}>
                        <span className="bar-value">₹{data.amount}</span>
                      </div>
                      <span className="bar-label">{data.month}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="earnings-breakdown">
              <h3>Earnings Breakdown</h3>
              {appointments.filter(a => a.status === 'completed').length > 0 ? (
                <table className="earnings-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Patient</th>
                      <th>Type</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments
                      .filter(a => a.status === 'completed')
                      .map(apt => (
                        <tr key={apt.id}>
                          <td>{new Date(apt.date).toLocaleDateString()}</td>
                          <td>{apt.patientName}</td>
                          <td>
                            <span className={`type-badge ${apt.consultationType}`}>
                              {apt.consultationType === 'online' ? '💻 Online' : '🏥 Offline'}
                            </span>
                          </td>
                          <td className="amount-cell">₹500</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              ) : (
                <p style={{ textAlign: 'center', color: '#6c757d', padding: '2rem' }}>
                  No completed consultations yet.
                </p>
              )}
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="profile-section">
            <h2>Doctor Profile</h2>
            
            {(() => {
              const users = JSON.parse(localStorage.getItem('mediguide_users') || '[]');
              const doctorUser = users.find((u: any) => u.email === user?.email);
              const profile = doctorUser?.doctorProfile;

              return (
                <>
                  {/* Profile Photo Upload */}
                  <ProfilePhotoUpload
                    currentPhoto={profile?.profilePhoto || null}
                    onPhotoUpdate={handlePhotoUpdate}
                    userName={user?.name || 'Doctor'}
                  />

                  {/* Profile Card */}
                  <div className="profile-card" style={{ marginTop: '2rem' }}>
                    <div className="profile-avatar-large">
                      {profile?.profilePhoto ? (
                        <img src={profile.profilePhoto} alt={user?.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                      ) : (
                        user?.name.split(' ').map(n => n[0]).join('')
                      )}
                    </div>
                    <div className="profile-info">
                      <h3>{user?.name}</h3>
                      <p>{user?.email}</p>
                      <p className="role-badge">Doctor</p>
                    </div>
                  </div>

                  {profile ? (
                    <div className="profile-details">
                      <div className="detail-row">
                        <strong>Specialization:</strong>
                        <span>{profile.specialization.charAt(0).toUpperCase() + profile.specialization.slice(1)}</span>
                      </div>
                      <div className="detail-row">
                        <strong>Education:</strong>
                        <span>{profile.education}</span>
                      </div>
                      <div className="detail-row">
                        <strong>Experience:</strong>
                        <span>{profile.experience} years</span>
                      </div>
                      <div className="detail-row">
                        <strong>Languages:</strong>
                        <span>{profile.languages}</span>
                      </div>
                      <div className="detail-row">
                        <strong>Location:</strong>
                        <span>{profile.location}</span>
                      </div>
                      <div className="detail-row">
                        <strong>Consultation Fee:</strong>
                        <span>₹{profile.consultationFee}</span>
                      </div>
                      <div className="detail-row">
                        <strong>Available Slots:</strong>
                        <span>{profile.availableSlots}</span>
                      </div>
                      <div className="detail-row">
                        <strong>About:</strong>
                        <p style={{ marginTop: '0.5rem' }}>{profile.about}</p>
                      </div>
                    </div>
                  ) : (
                    <p style={{ textAlign: 'center', color: '#6c757d', padding: '2rem' }}>
                      Profile information not available.
                    </p>
                  )}
                </>
              );
            })()}
          </div>
        )}
      </div>

      {/* Chat Modal */}
      {showChatModal && selectedAppointmentForChat && (
        <DoctorPatientChat
          appointmentId={selectedAppointmentForChat.id}
          currentUserId={user?.email || ''}
          currentUserName={user?.name || 'Doctor'}
          currentUserRole="doctor"
          onClose={handleCloseChatModal}
        />
      )}

      {/* Prescription Writer Modal */}
      {showPrescriptionModal && selectedAppointmentForPrescription && (() => {
        const users = JSON.parse(localStorage.getItem('mediguide_users') || '[]');
        const doctorUser = users.find((u: any) => u.email === user?.email);
        const profile = doctorUser?.doctorProfile;
        
        return (
          <PrescriptionWriter
            appointmentId={selectedAppointmentForPrescription.id}
            doctorId={user?.email || ''}
            doctorName={user?.name || 'Doctor'}
            doctorRegistrationId={profile?.registrationId || 'REG-' + Date.now()}
            doctorSpecialization={profile?.specialization || 'General Medicine'}
            patientId={selectedAppointmentForPrescription.patientEmail}
            patientName={selectedAppointmentForPrescription.patientName}
            onClose={handleClosePrescriptionModal}
            onSuccess={handlePrescriptionSuccess}
          />
        );
      })()}
    </div>
  );
};

export default DoctorDashboard;
