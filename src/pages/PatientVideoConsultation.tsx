import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { videoConsultationService, CallLog } from '../services/videoConsultationService';
import { appointmentService } from '../services/appointmentService';
import './PatientVideoConsultation.css';

const PatientVideoConsultation: React.FC = () => {
  const { appointmentId } = useParams<{ appointmentId: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [roomUrl, setRoomUrl] = useState<string | null>(null);
  const [callLog, setCallLog] = useState<CallLog | null>(null);
  const [appointment, setAppointment] = useState<any>(null);
  
  // Call state
  const [isJoined, setIsJoined] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(true);
  
  const durationIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Verify access and load appointment
  useEffect(() => {
    if (!user || !appointmentId) {
      setError('Unauthorized access');
      setLoading(false);
      return;
    }

    // Verify user is a patient
    if (user.role !== 'patient') {
      setError('Access Denied: Only patients can access this page.');
      setLoading(false);
      return;
    }

    loadAppointment();
  }, [appointmentId, user]);

  // Load appointment details
  const loadAppointment = async () => {
    try {
      if (!user || !appointmentId) return;

      // Get appointment from patient's appointments
      const apt = appointmentService.getAppointmentById(user.email, appointmentId);

      if (!apt) {
        setError('Appointment not found');
        setLoading(false);
        return;
      }

      // Verify appointment is online
      if (apt.consultationMode !== 'online') {
        setError('This appointment is not an online consultation.');
        setLoading(false);
        return;
      }

      // Verify appointment is approved
      if (apt.status !== 'approved' && apt.status !== 'completed') {
        setError('This appointment is not confirmed yet.');
        setLoading(false);
        return;
      }

      setAppointment(apt);

      // Get or create room
      const doctorEmail = getDoctorEmail(apt.doctor.name);
      const room = await videoConsultationService.getOrCreateRoom(
        appointmentId,
        doctorEmail,
        user.email
      );

      setRoomUrl(room.roomUrl);
      setLoading(false);
    } catch (err) {
      console.error('Error loading appointment:', err);
      setError('Failed to load consultation. Please try again.');
      setLoading(false);
    }
  };

  // Get doctor email from name
  const getDoctorEmail = (doctorName: string): string => {
    const doctorEmailMap: { [key: string]: string } = {
      'Dr. Rajesh Kumar': 'dr.rajesh@mediguide.com',
      'Dr. Priya Sharma': 'dr.priya@mediguide.com',
      'Dr. Amit Patel': 'dr.amit@mediguide.com',
      'Dr. Sneha Reddy': 'dr.sneha@mediguide.com',
      'Dr. Vikram Singh': 'dr.vikram@mediguide.com',
      'Dr. Anjali Mehta': 'dr.anjali@mediguide.com',
      'Dr. Rahul Verma': 'dr.rahul@mediguide.com',
      'Dr. Kavita Desai': 'dr.kavita@mediguide.com',
    };
    
    return doctorEmailMap[doctorName] || 'doctor@mediguide.com';
  };

  // Join call
  const joinCall = () => {
    if (!roomUrl || !user || !appointmentId || !appointment) return;

    try {
      const doctorEmail = getDoctorEmail(appointment.doctor.name);
      
      // Start call log
      const log = videoConsultationService.startCallLog(
        appointmentId,
        roomUrl.split('/').pop() || '',
        doctorEmail,
        user.email
      );
      
      setCallLog(log);
      setIsJoined(true);

      // Start duration timer
      durationIntervalRef.current = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);

    } catch (err) {
      console.error('Error joining call:', err);
      setError('Failed to join call. Please try again.');
    }
  };

  // Leave call
  const leaveCall = () => {
    if (confirm('Are you sure you want to end the consultation?')) {
      cleanup();
      navigate('/appointments');
    }
  };

  // Cleanup
  const cleanup = () => {
    if (durationIntervalRef.current) {
      clearInterval(durationIntervalRef.current);
    }

    if (callLog) {
      videoConsultationService.endCallLog(callLog.id, 'completed');
    }

    if (appointmentId) {
      videoConsultationService.endRoom(appointmentId);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cleanup();
    };
  }, []);

  // Format duration
  const formatDuration = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const pad = (num: number) => num.toString().padStart(2, '0');

    if (hours > 0) {
      return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
    }
    return `${pad(minutes)}:${pad(secs)}`;
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Loading state
  if (loading) {
    return (
      <div className="patient-video-page">
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Preparing your consultation...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="patient-video-page">
        <div className="error-container">
          <div className="error-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="15" y1="9" x2="9" y2="15"/>
              <line x1="9" y1="9" x2="15" y2="15"/>
            </svg>
          </div>
          <h2>Unable to Join</h2>
          <p>{error}</p>
          <button onClick={() => navigate('/appointments')} className="btn-back">
            Back to Appointments
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="patient-video-page">
      {/* Header */}
      <div className="consultation-header">
        <div className="header-left">
          <div className="doctor-info">
            <div className="doctor-avatar">
              <img src={appointment?.doctor.image} alt={appointment?.doctor.name} />
            </div>
            <div className="doctor-details">
              <h2>{appointment?.doctor.name}</h2>
              <p className="specialty">{appointment?.doctor.specialty}</p>
              <div className="appointment-meta">
                <span className="appointment-date">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  {appointment && formatDate(appointment.appointmentDate)}
                </span>
                <span className="appointment-time">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  {appointment?.appointmentTime}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="header-right">
          {isJoined && (
            <>
              <div className="call-duration">
                <span className="duration-dot"></span>
                <span className="duration-time">{formatDuration(callDuration)}</span>
              </div>
              <button onClick={leaveCall} className="btn-end-call">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 1l-6 6"/>
                  <path d="M17 1l6 6"/>
                </svg>
                End Call
              </button>
            </>
          )}
        </div>
      </div>

      {/* Video Container */}
      <div className="video-container">
        {!isJoined ? (
          <div className="pre-call-screen">
            <div className="pre-call-content">
              <div className="pre-call-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 7l-7 5 7 5V7z"/>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                </svg>
              </div>
              <h2>Ready to start your consultation?</h2>
              <p>Your doctor will join shortly. Click below to enter the consultation room.</p>
              
              <div className="pre-call-info">
                <div className="info-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  <span>Doctor: {appointment?.doctor.name}</span>
                </div>
                <div className="info-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>Appointment ID: #{appointmentId?.slice(-8)}</span>
                </div>
              </div>
              
              <button onClick={joinCall} className="btn-join-call">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 7l-7 5 7 5V7z"/>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                </svg>
                Join Consultation
              </button>
            </div>
          </div>
        ) : (
          <iframe
            src={`${roomUrl}?displayName=${encodeURIComponent(user?.name || 'Patient')}&chat=on&people=on&screenshare=off&leaveButton=off`}
            allow="camera; microphone; fullscreen; speaker; display-capture"
            className="whereby-iframe"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default PatientVideoConsultation;
