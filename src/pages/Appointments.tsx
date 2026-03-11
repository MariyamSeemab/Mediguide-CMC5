import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { appointmentService, Appointment } from '../services/appointmentService';
import { patientDataService } from '../services/patientDataService';
import { useNavigate } from 'react-router-dom';
import { chatService } from '../services/chatService';
import { prescriptionService } from '../services/prescriptionService';
import { pdfService } from '../services/pdfService';
import DoctorPatientChat from '../components/DoctorPatientChat';
import './Appointments.css';

interface SavedReport {
  reportId: string;
  userId: string;
  patientName: string;
  age?: number;
  gender?: string;
  symptoms: string[];
  aiInsights: string;
  recommendedTests: string[];
  notes: string;
  createdAt: Date;
  lastUpdated: Date;
  accessStatus: 'private';
  vitalSigns?: {
    bloodPressure?: string;
    heartRate?: number;
    temperature?: number;
    oxygenLevel?: number;
  };
}

interface UploadedLabReport {
  id: string;
  userId: string;
  fileName: string;
  fileType: string;
  fileSize: number;
  uploadDate: Date;
  aiAnalysis: {
    extractedData: {
      testName: string;
      value: string;
      unit: string;
      normalRange: string;
      status: 'normal' | 'high' | 'low' | 'critical';
    }[];
    precautions: string[];
    recommendations: string[];
    abnormalFindings: string[];
  };
}

const Appointments: React.FC = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past' | 'schedule' | 'completed'>('all');
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [latestDoctorReport, setLatestDoctorReport] = useState<SavedReport | null>(null);
  const [latestLabReport, setLatestLabReport] = useState<UploadedLabReport | null>(null);
  
  // New states for enhanced features
  const [showChatModal, setShowChatModal] = useState(false);
  const [selectedChatAppointment, setSelectedChatAppointment] = useState<Appointment | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPaymentAppointment, setSelectedPaymentAppointment] = useState<Appointment | null>(null);
  const [unreadCounts, setUnreadCounts] = useState<{ [key: string]: number }>({});

  // Redirect to home if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      alert('Please log in to view your appointments.');
      navigate('/');
    }
  }, [isAuthenticated, isLoading, navigate]);

  useEffect(() => {
    if (user && isAuthenticated) {
      console.log('🔄 User authenticated, running migration and loading appointments');
      // Run migration once to sync existing appointments
      appointmentService.migrateExistingAppointments();
      loadAppointments();
    }
  }, [user, filter, isAuthenticated]);

  // Update unread counts periodically
  useEffect(() => {
    if (appointments.length > 0 && user) {
      updateUnreadCounts();
      const interval = setInterval(updateUnreadCounts, 3000);
      return () => clearInterval(interval);
    }
  }, [appointments, user]);

  const updateUnreadCounts = () => {
    if (!user) return;
    const counts: { [key: string]: number } = {};
    appointments.forEach(apt => {
      counts[apt.id] = chatService.getUnreadCount(apt.id, user.email);
    });
    setUnreadCounts(counts);
  };

  const loadAppointments = () => {
    if (!user) return;

    console.log('📋 Loading appointments for user:', user.email);
    console.log('🔍 Current filter:', filter);

    let loadedAppointments: Appointment[] = [];
    
    if (filter === 'upcoming') {
      loadedAppointments = appointmentService.getUpcomingAppointments(user.id);
    } else if (filter === 'past') {
      loadedAppointments = appointmentService.getPastAppointments(user.id);
    } else if (filter === 'schedule') {
      // Get approved appointments that are upcoming
      const allAppointments = appointmentService.getAppointments(user.id);
      console.log('🔍 Schedule filter - All appointments:', allAppointments.map(apt => ({
        id: apt.id,
        status: apt.status,
        date: apt.appointmentDate,
        doctor: apt.doctor.name
      })));
      
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      loadedAppointments = allAppointments.filter(apt => {
        const aptDate = new Date(apt.appointmentDate);
        const isApproved = apt.status === 'approved';
        const isUpcoming = aptDate >= today;
        
        console.log(`📋 ${apt.id}: status=${apt.status}, approved=${isApproved}, date=${apt.appointmentDate}, upcoming=${isUpcoming}`);
        
        return isApproved && isUpcoming;
      });
      
      console.log('✅ Filtered scheduled appointments:', loadedAppointments.length);
    } else if (filter === 'completed') {
      // Get completed appointments (status = completed OR past approved appointments)
      const allAppointments = appointmentService.getAppointments(user.id);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      console.log('🔍 Filtering completed appointments...');
      console.log('📅 Today:', today.toISOString());
      console.log('📋 All appointments:', allAppointments.map(apt => ({
        id: apt.id,
        status: apt.status,
        date: apt.appointmentDate,
        doctor: apt.doctor.name
      })));
      
      loadedAppointments = allAppointments.filter(apt => {
        // Include appointments with completed status
        if (apt.status === 'completed') {
          console.log(`✅ ${apt.id}: status=completed`);
          return true;
        }
        
        // Include past approved appointments (consultation already happened)
        if (apt.status === 'approved') {
          const aptDate = new Date(apt.appointmentDate);
          const isPast = aptDate < today;
          console.log(`🔍 ${apt.id}: status=approved, date=${apt.appointmentDate}, isPast=${isPast}`);
          return isPast;
        }
        
        console.log(`❌ ${apt.id}: status=${apt.status} (not completed/approved)`);
        return false;
      }).sort((a, b) => {
        const dateA = new Date(a.appointmentDate);
        const dateB = new Date(b.appointmentDate);
        return dateB.getTime() - dateA.getTime(); // Most recent first
      });
      
      console.log('✅ Filtered completed appointments:', loadedAppointments.length);
    } else {
      loadedAppointments = appointmentService.getAppointments(user.id);
    }

    console.log('📊 Loaded appointments:', loadedAppointments.length);
    setAppointments(loadedAppointments);
  };

  const handleViewDetails = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setIsDetailsModalOpen(true);
    
    // Fetch latest reports when opening details
    if (user) {
      fetchLatestReports(user.id);
    }
  };

  const fetchLatestReports = (userId: string) => {
    // Fetch latest Doctor Ready Report
    const doctorReportsStored = localStorage.getItem(`mediguide_reports_${userId}`);
    if (doctorReportsStored) {
      const reports: SavedReport[] = JSON.parse(doctorReportsStored).map((r: any) => ({
        ...r,
        createdAt: new Date(r.createdAt),
        lastUpdated: new Date(r.lastUpdated)
      }));
      
      // Sort by createdAt descending and get the latest
      if (reports.length > 0) {
        const sorted = reports.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
        setLatestDoctorReport(sorted[0]);
      } else {
        setLatestDoctorReport(null);
      }
    } else {
      setLatestDoctorReport(null);
    }

    // Fetch latest Lab Report
    const labReportsStored = localStorage.getItem(`mediguide_lab_reports_${userId}`);
    if (labReportsStored) {
      const labReports: UploadedLabReport[] = JSON.parse(labReportsStored).map((r: any) => ({
        ...r,
        uploadDate: new Date(r.uploadDate)
      }));
      
      // Sort by uploadDate descending and get the latest
      if (labReports.length > 0) {
        const sorted = labReports.sort((a, b) => b.uploadDate.getTime() - a.uploadDate.getTime());
        setLatestLabReport(sorted[0]);
      } else {
        setLatestLabReport(null);
      }
    } else {
      setLatestLabReport(null);
    }
  };

  const handleCancelAppointment = (appointmentId: string) => {
    if (!user || !isAuthenticated) {
      alert('Please log in to manage appointments.');
      navigate('/');
      return;
    }
    
    const confirmed = window.confirm('Are you sure you want to cancel this appointment? This will permanently delete it.');
    if (confirmed) {
      // Delete the appointment instead of marking as cancelled
      const deleted = appointmentService.deleteAppointment(user.id, appointmentId);
      if (deleted) {
        alert('Appointment cancelled and removed successfully.');
        loadAppointments();
        setIsDetailsModalOpen(false);
      } else {
        alert('Failed to cancel appointment. Please try again.');
      }
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'approved':
        return 'status-approved';
      case 'rejected':
        return 'status-rejected';
      case 'cancelled':
        return 'status-cancelled';
      case 'completed':
        return 'status-completed';
      default:
        return 'status-pending';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'approved':
        return 'Confirmed';
      case 'rejected':
        return 'Rejected';
      case 'cancelled':
        return 'Cancelled';
      case 'completed':
        return 'Completed';
      default:
        return 'Pending';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    return timeString;
  };

  const handleViewDoctorReport = () => {
    navigate('/summary');
  };

  const handleViewLabReports = () => {
    navigate('/lab-results');
  };

  // New handler functions for enhanced features
  const handleStartVideoCall = (appointmentId: string) => {
    navigate(`/video-consultation/${appointmentId}`);
  };

  const handleOpenChat = (appointment: Appointment) => {
    setSelectedChatAppointment(appointment);
    setShowChatModal(true);
  };

  const handleCloseChat = () => {
    setShowChatModal(false);
    setSelectedChatAppointment(null);
    updateUnreadCounts();
  };

  const handleDownloadPrescription = async (appointmentId: string) => {
    try {
      const prescriptions = prescriptionService.getPrescriptionsByAppointment(appointmentId);
      
      if (prescriptions.length === 0) {
        alert('No prescription available for this appointment.');
        return;
      }

      // Get the latest prescription
      const latestPrescription = prescriptions[prescriptions.length - 1];

      // Verify user can download this prescription
      if (!pdfService.canDownloadPrescription(latestPrescription, user?.email || '', 'patient')) {
        alert('You do not have permission to download this prescription.');
        return;
      }

      await pdfService.generatePrescriptionPDF(latestPrescription);
    } catch (error) {
      console.error('Error downloading prescription:', error);
      alert('Failed to download prescription PDF. Please try again.');
    }
  };

  const handleOpenPayment = (appointment: Appointment) => {
    setSelectedPaymentAppointment(appointment);
    setShowPaymentModal(true);
  };

  const handleClosePayment = () => {
    setShowPaymentModal(false);
    setSelectedPaymentAppointment(null);
  };

  const handlePaymentComplete = () => {
    // Update appointment payment status
    if (selectedPaymentAppointment && user) {
      // Mark as paid in localStorage
      const appointments = appointmentService.getAppointments(user.id);
      const updated = appointments.map(apt => {
        if (apt.id === selectedPaymentAppointment.id) {
          return { ...apt, paymentStatus: 'paid' };
        }
        return apt;
      });
      
      localStorage.setItem(`mediguide_appointments_${user.email}`, JSON.stringify(updated));
      
      alert('✅ Payment successful! Your appointment is confirmed.');
      handleClosePayment();
      loadAppointments();
    }
  };

  if (isLoading) {
    return (
      <div className="appointments-page">
        <div className="loading-state">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return (
      <div className="appointments-page">
        <div className="not-logged-in">
          <h2>Please log in to view your appointments</h2>
          <p>You need to be logged in to access this page</p>
          <button onClick={() => navigate('/')}>Go to Home & Login</button>
        </div>
      </div>
    );
  }

  return (
    <div className="appointments-page">
      <div className="appointments-header">
        <h1>My Appointments</h1>
        <p>View and manage all your doctor appointments</p>
      </div>

      {/* Filter Tabs */}
      <div className="appointments-filters">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          All Appointments
        </button>
        <button
          className={`filter-btn ${filter === 'upcoming' ? 'active' : ''}`}
          onClick={() => setFilter('upcoming')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          Upcoming
        </button>
        <button
          className={`filter-btn ${filter === 'schedule' ? 'active' : ''}`}
          onClick={() => setFilter('schedule')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          Schedule
        </button>
        <button
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          Completed
        </button>
        <button
          className={`filter-btn ${filter === 'past' ? 'active' : ''}`}
          onClick={() => setFilter('past')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
            <path d="M3 3v5h5"/>
            <path d="M12 7v5l4 2"/>
          </svg>
          Past
        </button>
      </div>

      {/* Appointments List */}
      <div className="appointments-container">
        {appointments.length === 0 ? (
          <div className="no-appointments">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <h3>No appointments found</h3>
            <p>You haven't booked any appointments yet</p>
            <button className="btn-book-new" onClick={() => navigate('/doctors')}>
              Book an Appointment
            </button>
          </div>
        ) : (
          <div className="appointments-grid">
            {appointments.map((appointment) => {
              // Check if this is Schedule section with approved appointments
              const isScheduleSection = filter === 'schedule';
              const prescriptions = prescriptionService.getPrescriptionsByAppointment(appointment.id);
              const hasPrescription = prescriptions.length > 0;
              
              return (
              <div key={appointment.id} className={`appointment-card ${isScheduleSection ? 'schedule-card' : ''}`}>
                <div className="appointment-card-header">
                  <div className="doctor-avatar">
                    <img
                      src={appointment.doctor.image}
                      alt={appointment.doctor.name}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'flex';
                          fallback.textContent = appointment.doctor.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('');
                        }
                      }}
                    />
                    <span className="avatar-fallback" style={{ display: 'none' }}></span>
                  </div>
                  <span className={`status-badge ${getStatusBadgeClass(appointment.status)}`}>
                    {getStatusText(appointment.status)}
                  </span>
                </div>

                <div className="appointment-info">
                  <h3>{appointment.doctor.name}</h3>
                  <p className="specialty">{appointment.doctor.specialty}</p>

                  <div className="appointment-details">
                    <div className="detail-row">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      <span>{formatDate(appointment.appointmentDate)}</span>
                    </div>

                    <div className="detail-row">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      <span>{formatTime(appointment.appointmentTime)}</span>
                    </div>

                    <div className="detail-row">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {appointment.consultationMode === 'online' ? (
                          <>
                            <rect x="2" y="7" width="20" height="15" rx="2" ry="2"/>
                            <polyline points="17 2 12 7 7 2"/>
                          </>
                        ) : (
                          <>
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                            <polyline points="9 22 9 12 15 12 15 22"/>
                          </>
                        )}
                      </svg>
                      <span>{appointment.consultationMode === 'online' ? 'Online Consultation' : 'Offline Consultation'}</span>
                    </div>

                    {appointment.doctor.location && appointment.consultationMode === 'offline' && (
                      <div className="detail-row">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <span>{appointment.doctor.location}</span>
                      </div>
                    )}

                    <div className="detail-row">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="1" x2="12" y2="23"/>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                      </svg>
                      <span>{appointment.doctor.consultationFee}</span>
                    </div>
                  </div>

                  {appointment.reason && (
                    <div className="appointment-reason">
                      <strong>Reason:</strong> {appointment.reason}
                    </div>
                  )}
                </div>

                <div className="appointment-actions">
                  {/* Enhanced actions for Schedule section */}
                  {isScheduleSection ? (
                    <>
                      {/* Video Call - Only for online consultations */}
                      {appointment.consultationMode === 'online' && (
                        <button
                          className="btn-action btn-video-call"
                          onClick={() => handleStartVideoCall(appointment.id)}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="23 7 16 12 23 17 23 7"/>
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                          </svg>
                          Start Video Call
                        </button>
                      )}
                      
                      {/* Chat Button */}
                      <button
                        className="btn-action btn-chat"
                        onClick={() => handleOpenChat(appointment)}
                        style={{ position: 'relative' }}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                        </svg>
                        Chat
                        {unreadCounts[appointment.id] > 0 && (
                          <span className="unread-badge">{unreadCounts[appointment.id]}</span>
                        )}
                      </button>
                      
                      {/* Prescription Download */}
                      {hasPrescription && (
                        <button
                          className="btn-action btn-prescription"
                          onClick={() => handleDownloadPrescription(appointment.id)}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                            <line x1="16" y1="13" x2="8" y2="13"/>
                            <line x1="16" y1="17" x2="8" y2="17"/>
                          </svg>
                          Download Prescription
                        </button>
                      )}
                      
                      {/* Payment Button - Only for online consultations */}
                      {appointment.consultationMode === 'online' && (!appointment.paymentStatus || appointment.paymentStatus !== 'paid') && (
                        <button
                          className="btn-action btn-payment"
                          onClick={() => handleOpenPayment(appointment)}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                            <line x1="1" y1="10" x2="23" y2="10"/>
                          </svg>
                          Pay Now
                        </button>
                      )}
                      {appointment.consultationMode === 'online' && appointment.paymentStatus === 'paid' && (
                        <span className="payment-status-badge">✅ Paid</span>
                      )}
                    </>
                  ) : (
                    /* Default actions for other sections */
                    <>
                      <button
                        className="btn-view-details"
                        onClick={() => handleViewDetails(appointment)}
                      >
                        View Full Details
                      </button>
                      {appointment.status === 'pending' && (
                        <button
                          className="btn-cancel"
                          onClick={() => handleCancelAppointment(appointment.id)}
                        >
                          Cancel
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Details Modal */}
      {isDetailsModalOpen && selectedAppointment && (
        <div className="modal-overlay" onClick={() => setIsDetailsModalOpen(false)}>
          <div className="details-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Appointment Details</h2>
              <button className="close-btn" onClick={() => setIsDetailsModalOpen(false)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="modal-content">
              <div className="appointment-id">
                <strong>Appointment ID:</strong> {selectedAppointment.id}
              </div>

              <div className="doctor-details-section">
                <h3>Doctor Information</h3>
                <div className="doctor-info-grid">
                  <div className="info-item">
                    <span className="label">Name:</span>
                    <span className="value">{selectedAppointment.doctor.name}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Specialty:</span>
                    <span className="value">{selectedAppointment.doctor.specialty}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Consultation Fee:</span>
                    <span className="value">{selectedAppointment.doctor.consultationFee}</span>
                  </div>
                  {selectedAppointment.doctor.location && (
                    <div className="info-item">
                      <span className="label">Location:</span>
                      <span className="value">{selectedAppointment.doctor.location}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="appointment-details-section">
                <h3>Appointment Information</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="label">Date:</span>
                    <span className="value">{formatDate(selectedAppointment.appointmentDate)}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Time:</span>
                    <span className="value">{formatTime(selectedAppointment.appointmentTime)}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Status:</span>
                    <span className={`value ${getStatusBadgeClass(selectedAppointment.status)}`}>
                      {getStatusText(selectedAppointment.status)}
                    </span>
                  </div>
                  <div className="info-item">
                    <span className="label">Booked On:</span>
                    <span className="value">
                      {selectedAppointment.bookedAt.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                </div>
              </div>

              <div className="patient-details-section">
                <h3>Patient Information</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="label">Name:</span>
                    <span className="value">{selectedAppointment.patientName}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Phone:</span>
                    <span className="value">{selectedAppointment.patientPhone}</span>
                  </div>
                  {selectedAppointment.reason && (
                    <div className="info-item full-width">
                      <span className="label">Reason for Visit:</span>
                      <span className="value">{selectedAppointment.reason}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Latest Reports Section - Only show if reports exist */}
              {(latestDoctorReport || latestLabReport) && (
                <div className="reports-section">
                  <h3>📋 Latest Medical Records</h3>
                  
                  {/* Latest Doctor Ready Report */}
                  {latestDoctorReport && (
                    <div className="report-display-card">
                      <div className="report-display-header">
                        <div className="report-display-title">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                            <line x1="16" y1="13" x2="8" y2="13"/>
                            <line x1="16" y1="17" x2="8" y2="17"/>
                          </svg>
                          <div>
                            <h4>Doctor-Ready Health Report</h4>
                            <p className="report-meta">
                              Report ID: {latestDoctorReport.reportId} • 
                              Generated: {latestDoctorReport.createdAt.toLocaleDateString()} at {latestDoctorReport.createdAt.toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                        <span className="report-badge">Latest</span>
                      </div>
                      
                      <div className="report-display-content">
                        <div className="report-info-grid">
                          <div className="report-info-item">
                            <span className="report-label">Patient Name:</span>
                            <span className="report-value">{latestDoctorReport.patientName}</span>
                          </div>
                          {latestDoctorReport.age && (
                            <div className="report-info-item">
                              <span className="report-label">Age:</span>
                              <span className="report-value">{latestDoctorReport.age} years</span>
                            </div>
                          )}
                          {latestDoctorReport.gender && (
                            <div className="report-info-item">
                              <span className="report-label">Gender:</span>
                              <span className="report-value">{latestDoctorReport.gender}</span>
                            </div>
                          )}
                        </div>
                        
                        {latestDoctorReport.symptoms.length > 0 && (
                          <div className="report-section">
                            <strong className="report-section-title">Chief Complaints:</strong>
                            <div className="symptoms-tags">
                              {latestDoctorReport.symptoms.slice(0, 5).map((symptom, index) => (
                                <span key={index} className="symptom-tag">{symptom}</span>
                              ))}
                              {latestDoctorReport.symptoms.length > 5 && (
                                <span className="symptom-tag more">+{latestDoctorReport.symptoms.length - 5} more</span>
                              )}
                            </div>
                          </div>
                        )}
                        
                        {latestDoctorReport.vitalSigns && Object.values(latestDoctorReport.vitalSigns).some(v => v) && (
                          <div className="report-section">
                            <strong className="report-section-title">Vital Signs:</strong>
                            <div className="vitals-compact">
                              {latestDoctorReport.vitalSigns.bloodPressure && (
                                <span className="vital-item">BP: {latestDoctorReport.vitalSigns.bloodPressure}</span>
                              )}
                              {latestDoctorReport.vitalSigns.heartRate && (
                                <span className="vital-item">HR: {latestDoctorReport.vitalSigns.heartRate} bpm</span>
                              )}
                              {latestDoctorReport.vitalSigns.temperature && (
                                <span className="vital-item">Temp: {latestDoctorReport.vitalSigns.temperature}°F</span>
                              )}
                              {latestDoctorReport.vitalSigns.oxygenLevel && (
                                <span className="vital-item">O₂: {latestDoctorReport.vitalSigns.oxygenLevel}%</span>
                              )}
                            </div>
                          </div>
                        )}
                        
                        {latestDoctorReport.recommendedTests.length > 0 && (
                          <div className="report-section">
                            <strong className="report-section-title">Recommended Tests:</strong>
                            <ul className="recommended-tests-list">
                              {latestDoctorReport.recommendedTests.slice(0, 3).map((test, index) => (
                                <li key={index}>{test}</li>
                              ))}
                              {latestDoctorReport.recommendedTests.length > 3 && (
                                <li className="more-tests">+{latestDoctorReport.recommendedTests.length - 3} more tests</li>
                              )}
                            </ul>
                          </div>
                        )}
                        
                        <button className="btn-view-full-report" onClick={handleViewDoctorReport}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                          </svg>
                          View Full Report
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {/* Latest Lab Report */}
                  {latestLabReport && (
                    <div className="report-display-card">
                      <div className="report-display-header">
                        <div className="report-display-title">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                            <line x1="12" y1="18" x2="12" y2="12"/>
                            <line x1="9" y1="15" x2="15" y2="15"/>
                          </svg>
                          <div>
                            <h4>Lab Test Report</h4>
                            <p className="report-meta">
                              {latestLabReport.fileName} • 
                              Uploaded: {latestLabReport.uploadDate.toLocaleDateString()} at {latestLabReport.uploadDate.toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                        <span className="report-badge">Latest</span>
                      </div>
                      
                      <div className="report-display-content">
                        {latestLabReport.aiAnalysis.extractedData.length > 0 && (
                          <div className="report-section">
                            <strong className="report-section-title">Test Results Summary:</strong>
                            <div className="lab-results-summary">
                              {latestLabReport.aiAnalysis.extractedData.slice(0, 4).map((test, index) => (
                                <div key={index} className="lab-result-item">
                                  <span className="test-name">{test.testName}</span>
                                  <span className={`test-status status-${test.status}`}>
                                    {test.value} {test.unit}
                                  </span>
                                </div>
                              ))}
                              {latestLabReport.aiAnalysis.extractedData.length > 4 && (
                                <div className="lab-result-item more">
                                  <span className="test-name">+{latestLabReport.aiAnalysis.extractedData.length - 4} more tests</span>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                        
                        {latestLabReport.aiAnalysis.abnormalFindings.length > 0 && (
                          <div className="report-section">
                            <strong className="report-section-title">⚠️ Abnormal Findings:</strong>
                            <ul className="abnormal-findings-list">
                              {latestLabReport.aiAnalysis.abnormalFindings.slice(0, 2).map((finding, index) => (
                                <li key={index}>{finding}</li>
                              ))}
                              {latestLabReport.aiAnalysis.abnormalFindings.length > 2 && (
                                <li className="more-findings">+{latestLabReport.aiAnalysis.abnormalFindings.length - 2} more findings</li>
                              )}
                            </ul>
                          </div>
                        )}
                        
                        <button className="btn-view-full-report" onClick={handleViewLabReports}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                          </svg>
                          View Full Lab Report
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="modal-footer">
              {selectedAppointment.status === 'pending' && (
                <button
                  className="btn-cancel-appointment"
                  onClick={() => handleCancelAppointment(selectedAppointment.id)}
                >
                  Cancel Appointment
                </button>
              )}
              <button className="btn-close" onClick={() => setIsDetailsModalOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Modal */}
      {showChatModal && selectedChatAppointment && user && (
        <DoctorPatientChat
          appointmentId={selectedChatAppointment.id}
          currentUserId={user.email}
          currentUserName={user.name}
          currentUserRole="patient"
          onClose={handleCloseChat}
        />
      )}

      {/* Payment Modal */}
      {showPaymentModal && selectedPaymentAppointment && (
        <div className="modal-overlay" onClick={handleClosePayment}>
          <div className="payment-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Payment</h2>
              <button className="close-btn" onClick={handleClosePayment}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="modal-content">
              <div className="payment-details">
                <h3>Consultation Fee</h3>
                <div className="payment-info">
                  <div className="info-row">
                    <span>Doctor:</span>
                    <strong>{selectedPaymentAppointment.doctor.name}</strong>
                  </div>
                  <div className="info-row">
                    <span>Consultation Type:</span>
                    <strong>{selectedPaymentAppointment.consultationMode === 'online' ? 'Online' : 'Offline'}</strong>
                  </div>
                  <div className="info-row">
                    <span>Date:</span>
                    <strong>{formatDate(selectedPaymentAppointment.appointmentDate)}</strong>
                  </div>
                  <div className="info-row">
                    <span>Time:</span>
                    <strong>{formatTime(selectedPaymentAppointment.appointmentTime)}</strong>
                  </div>
                  <div className="info-row total">
                    <span>Total Amount:</span>
                    <strong className="amount">{selectedPaymentAppointment.doctor.consultationFee}</strong>
                  </div>
                </div>
              </div>

              <div className="qr-code-section">
                <div className="payment-header-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="M9 12l2 2 4-4"/>
                  </svg>
                  Secure UPI Payment
                </div>
                
                <div className="qr-code-container-realistic">
                  {/* Ultra-realistic QR Code with dense pattern */}
                  <div className="qr-code-realistic">
                    <div className="qr-scan-line"></div>
                    <svg viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* White background */}
                      <rect width="250" height="250" fill="white"/>
                      
                      {/* Corner markers (top-left) - Larger and more detailed */}
                      <rect x="15" y="15" width="60" height="60" fill="black"/>
                      <rect x="22" y="22" width="46" height="46" fill="white"/>
                      <rect x="29" y="29" width="32" height="32" fill="black"/>
                      <rect x="36" y="36" width="18" height="18" fill="white"/>
                      <rect x="40" y="40" width="10" height="10" fill="black"/>
                      
                      {/* Corner markers (top-right) */}
                      <rect x="175" y="15" width="60" height="60" fill="black"/>
                      <rect x="182" y="22" width="46" height="46" fill="white"/>
                      <rect x="189" y="29" width="32" height="32" fill="black"/>
                      <rect x="196" y="36" width="18" height="18" fill="white"/>
                      <rect x="200" y="40" width="10" height="10" fill="black"/>
                      
                      {/* Corner markers (bottom-left) */}
                      <rect x="15" y="175" width="60" height="60" fill="black"/>
                      <rect x="22" y="182" width="46" height="46" fill="white"/>
                      <rect x="29" y="189" width="32" height="32" fill="black"/>
                      <rect x="36" y="196" width="18" height="18" fill="white"/>
                      <rect x="40" y="200" width="10" height="10" fill="black"/>
                      
                      {/* Timing patterns */}
                      {[...Array(15)].map((_, i) => (
                        <rect key={`timing-h-${i}`} x={85 + i * 10} y="15" width="5" height="5" fill={i % 2 === 0 ? "black" : "white"}/>
                      ))}
                      {[...Array(15)].map((_, i) => (
                        <rect key={`timing-v-${i}`} x="15" y={85 + i * 10} width="5" height="5" fill={i % 2 === 0 ? "black" : "white"}/>
                      ))}
                      
                      {/* Dense data pattern - More realistic QR blocks */}
                      {/* Top section data */}
                      <rect x="85" y="25" width="4" height="4" fill="black"/>
                      <rect x="90" y="25" width="4" height="4" fill="black"/>
                      <rect x="99" y="25" width="4" height="4" fill="black"/>
                      <rect x="108" y="25" width="4" height="4" fill="black"/>
                      <rect x="112" y="25" width="4" height="4" fill="black"/>
                      <rect x="121" y="25" width="4" height="4" fill="black"/>
                      <rect x="130" y="25" width="4" height="4" fill="black"/>
                      <rect x="139" y="25" width="4" height="4" fill="black"/>
                      <rect x="148" y="25" width="4" height="4" fill="black"/>
                      <rect x="157" y="25" width="4" height="4" fill="black"/>
                      <rect x="166" y="25" width="4" height="4" fill="black"/>
                      
                      <rect x="85" y="34" width="4" height="4" fill="black"/>
                      <rect x="94" y="34" width="4" height="4" fill="black"/>
                      <rect x="103" y="34" width="4" height="4" fill="black"/>
                      <rect x="117" y="34" width="4" height="4" fill="black"/>
                      <rect x="126" y="34" width="4" height="4" fill="black"/>
                      <rect x="135" y="34" width="4" height="4" fill="black"/>
                      <rect x="144" y="34" width="4" height="4" fill="black"/>
                      <rect x="153" y="34" width="4" height="4" fill="black"/>
                      <rect x="162" y="34" width="4" height="4" fill="black"/>
                      
                      {/* Left section data */}
                      <rect x="25" y="85" width="4" height="4" fill="black"/>
                      <rect x="34" y="85" width="4" height="4" fill="black"/>
                      <rect x="43" y="85" width="4" height="4" fill="black"/>
                      <rect x="52" y="85" width="4" height="4" fill="black"/>
                      <rect x="61" y="85" width="4" height="4" fill="black"/>
                      
                      <rect x="25" y="94" width="4" height="4" fill="black"/>
                      <rect x="38" y="94" width="4" height="4" fill="black"/>
                      <rect x="47" y="94" width="4" height="4" fill="black"/>
                      <rect x="56" y="94" width="4" height="4" fill="black"/>
                      <rect x="65" y="94" width="4" height="4" fill="black"/>
                      
                      {/* Center alignment pattern */}
                      <rect x="105" y="105" width="40" height="40" fill="black"/>
                      <rect x="112" y="112" width="26" height="26" fill="white"/>
                      <rect x="119" y="119" width="12" height="12" fill="black"/>
                      
                      {/* Dense middle section */}
                      <rect x="85" y="95" width="4" height="4" fill="black"/>
                      <rect x="90" y="95" width="4" height="4" fill="black"/>
                      <rect x="85" y="100" width="4" height="4" fill="black"/>
                      <rect x="94" y="100" width="4" height="4" fill="black"/>
                      <rect x="85" y="109" width="4" height="4" fill="black"/>
                      <rect x="90" y="109" width="4" height="4" fill="black"/>
                      <rect x="99" y="109" width="4" height="4" fill="black"/>
                      
                      <rect x="155" y="95" width="4" height="4" fill="black"/>
                      <rect x="160" y="95" width="4" height="4" fill="black"/>
                      <rect x="155" y="104" width="4" height="4" fill="black"/>
                      <rect x="164" y="104" width="4" height="4" fill="black"/>
                      <rect x="155" y="113" width="4" height="4" fill="black"/>
                      <rect x="160" y="113" width="4" height="4" fill="black"/>
                      <rect x="169" y="113" width="4" height="4" fill="black"/>
                      
                      {/* Bottom section dense data */}
                      <rect x="85" y="155" width="4" height="4" fill="black"/>
                      <rect x="90" y="155" width="4" height="4" fill="black"/>
                      <rect x="99" y="155" width="4" height="4" fill="black"/>
                      <rect x="108" y="155" width="4" height="4" fill="black"/>
                      <rect x="117" y="155" width="4" height="4" fill="black"/>
                      <rect x="126" y="155" width="4" height="4" fill="black"/>
                      <rect x="135" y="155" width="4" height="4" fill="black"/>
                      <rect x="144" y="155" width="4" height="4" fill="black"/>
                      <rect x="153" y="155" width="4" height="4" fill="black"/>
                      <rect x="162" y="155" width="4" height="4" fill="black"/>
                      
                      <rect x="85" y="164" width="4" height="4" fill="black"/>
                      <rect x="94" y="164" width="4" height="4" fill="black"/>
                      <rect x="103" y="164" width="4" height="4" fill="black"/>
                      <rect x="112" y="164" width="4" height="4" fill="black"/>
                      <rect x="126" y="164" width="4" height="4" fill="black"/>
                      <rect x="135" y="164" width="4" height="4" fill="black"/>
                      <rect x="148" y="164" width="4" height="4" fill="black"/>
                      <rect x="157" y="164" width="4" height="4" fill="black"/>
                      
                      {/* Right section data */}
                      <rect x="185" y="85" width="4" height="4" fill="black"/>
                      <rect x="194" y="85" width="4" height="4" fill="black"/>
                      <rect x="203" y="85" width="4" height="4" fill="black"/>
                      <rect x="212" y="85" width="4" height="4" fill="black"/>
                      <rect x="221" y="85" width="4" height="4" fill="black"/>
                      
                      <rect x="185" y="94" width="4" height="4" fill="black"/>
                      <rect x="198" y="94" width="4" height="4" fill="black"/>
                      <rect x="207" y="94" width="4" height="4" fill="black"/>
                      <rect x="216" y="94" width="4" height="4" fill="black"/>
                      <rect x="225" y="94" width="4" height="4" fill="black"/>
                      
                      {/* Additional scattered realistic blocks */}
                      <rect x="25" y="103" width="4" height="4" fill="black"/>
                      <rect x="34" y="108" width="4" height="4" fill="black"/>
                      <rect x="43" y="112" width="4" height="4" fill="black"/>
                      <rect x="52" y="117" width="4" height="4" fill="black"/>
                      <rect x="61" y="121" width="4" height="4" fill="black"/>
                      <rect x="29" y="126" width="4" height="4" fill="black"/>
                      <rect x="38" y="130" width="4" height="4" fill="black"/>
                      <rect x="47" y="135" width="4" height="4" fill="black"/>
                      <rect x="56" y="139" width="4" height="4" fill="black"/>
                      <rect x="65" y="144" width="4" height="4" fill="black"/>
                      <rect x="25" y="148" width="4" height="4" fill="black"/>
                      <rect x="34" y="153" width="4" height="4" fill="black"/>
                      <rect x="43" y="157" width="4" height="4" fill="black"/>
                      <rect x="52" y="162" width="4" height="4" fill="black"/>
                      <rect x="61" y="166" width="4" height="4" fill="black"/>
                      
                      <rect x="185" y="103" width="4" height="4" fill="black"/>
                      <rect x="194" y="108" width="4" height="4" fill="black"/>
                      <rect x="203" y="112" width="4" height="4" fill="black"/>
                      <rect x="212" y="117" width="4" height="4" fill="black"/>
                      <rect x="221" y="121" width="4" height="4" fill="black"/>
                      <rect x="189" y="126" width="4" height="4" fill="black"/>
                      <rect x="198" y="130" width="4" height="4" fill="black"/>
                      <rect x="207" y="135" width="4" height="4" fill="black"/>
                      <rect x="216" y="139" width="4" height="4" fill="black"/>
                      <rect x="225" y="144" width="4" height="4" fill="black"/>
                      
                      {/* Version information blocks */}
                      <rect x="175" y="185" width="4" height="4" fill="black"/>
                      <rect x="180" y="185" width="4" height="4" fill="black"/>
                      <rect x="185" y="185" width="4" height="4" fill="black"/>
                      <rect x="175" y="190" width="4" height="4" fill="black"/>
                      <rect x="185" y="190" width="4" height="4" fill="black"/>
                      <rect x="175" y="195" width="4" height="4" fill="black"/>
                      <rect x="180" y="195" width="4" height="4" fill="black"/>
                      <rect x="185" y="195" width="4" height="4" fill="black"/>
                    </svg>
                  </div>
                  
                  {/* UPI Apps Row */}
                  <div className="upi-apps-row">
                    <div className="upi-app-icon gpay">
                      <svg viewBox="0 0 40 40" fill="none">
                        <circle cx="20" cy="20" r="20" fill="#4285F4"/>
                        <text x="20" y="26" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">G</text>
                      </svg>
                      <span>GPay</span>
                    </div>
                    <div className="upi-app-icon phonepe">
                      <svg viewBox="0 0 40 40" fill="none">
                        <circle cx="20" cy="20" r="20" fill="#5F259F"/>
                        <text x="20" y="26" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">P</text>
                      </svg>
                      <span>PhonePe</span>
                    </div>
                    <div className="upi-app-icon paytm">
                      <svg viewBox="0 0 40 40" fill="none">
                        <circle cx="20" cy="20" r="20" fill="#00BAF2"/>
                        <text x="20" y="26" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">P</text>
                      </svg>
                      <span>Paytm</span>
                    </div>
                    <div className="upi-app-icon bhim">
                      <svg viewBox="0 0 40 40" fill="none">
                        <circle cx="20" cy="20" r="20" fill="#097939"/>
                        <text x="20" y="26" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">B</text>
                      </svg>
                      <span>BHIM</span>
                    </div>
                  </div>
                  
                  {/* Payment Info Card */}
                  <div className="payment-info-card">
                    <div className="payment-info-row">
                      <span className="info-label">UPI ID</span>
                      <span className="info-value upi-id-value">drrajesh@paytm</span>
                    </div>
                    <div className="payment-info-row">
                      <span className="info-label">Payee</span>
                      <span className="info-value">Dr. Rajesh Kumar</span>
                    </div>
                    <div className="payment-info-row amount-row">
                      <span className="info-label">Amount</span>
                      <span className="info-value amount-value">₹{selectedPaymentAppointment.doctor.consultationFee.replace('₹', '')}</span>
                    </div>
                  </div>
                  
                  {/* Security Badge */}
                  <div className="security-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                    <span>Secured by UPI</span>
                  </div>
                </div>
              </div>

              <div className="payment-actions">
                <button className="btn-payment-done" onClick={handlePaymentComplete}>
                  ✅ I have completed the payment
                </button>
                <button className="btn-payment-cancel" onClick={handleClosePayment}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointments;
