import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { videoConsultationService, CallLog } from '../services/videoConsultationService';
import './VideoConsultation.css';

const VideoConsultation: React.FC = () => {
  const { appointmentId } = useParams<{ appointmentId: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [roomUrl, setRoomUrl] = useState<string | null>(null);
  const [callLog, setCallLog] = useState<CallLog | null>(null);
  
  // Call state
  const [isJoined, setIsJoined] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);
  
  const durationIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Verify access
  useEffect(() => {
    if (!user || !appointmentId) {
      setError('Unauthorized access');
      setLoading(false);
      return;
    }

    const hasAccess = videoConsultationService.verifyAccess(
      appointmentId,
      user.email,
      user.role as 'doctor' | 'patient'
    );

    if (!hasAccess) {
      setError('Access Denied: You do not have permission to join this consultation.');
      setLoading(false);
      return;
    }

    initializeRoom();
  }, [appointmentId, user]);

  // Initialize room
  const initializeRoom = async () => {
    try {
      if (!user || !appointmentId) return;

      // Get appointment details
      const appointments = JSON.parse(localStorage.getItem('mediguide_appointments') || '[]');
      const appointment = appointments.find((apt: any) => apt.id === appointmentId);

      if (!appointment) {
        setError('Appointment not found');
        setLoading(false);
        return;
      }

      // Get or create room
      const room = await videoConsultationService.getOrCreateRoom(
        appointmentId,
        appointment.doctorEmail,
        appointment.patientEmail
      );

      setRoomUrl(room.roomUrl);
      setLoading(false);
    } catch (err) {
      console.error('Error initializing room:', err);
      setError('Failed to initialize video room. Please try again.');
      setLoading(false);
    }
  };

  // Join call
  const joinCall = () => {
    if (!roomUrl || !user || !appointmentId) return;

    try {
      // Start call log
      const appointments = JSON.parse(localStorage.getItem('mediguide_appointments') || '[]');
      const appointment = appointments.find((apt: any) => apt.id === appointmentId);
      
      const log = videoConsultationService.startCallLog(
        appointmentId,
        roomUrl.split('/').pop() || '',
        appointment.doctorEmail,
        appointment.patientEmail
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
      
      // Navigate back
      if (user?.role === 'doctor') {
        const doctorSlug = user.email.split('@')[0].replace(/\./g, '-');
        navigate(`/doctor/dashboard/${doctorSlug}`);
      } else {
        navigate('/appointments');
      }
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

  // Copy invite link
  const copyInviteLink = () => {
    if (!roomUrl) return;
    
    // Copy the actual Whereby room URL so anyone can join
    navigator.clipboard.writeText(roomUrl).then(() => {
      setShowCopiedMessage(true);
      setTimeout(() => setShowCopiedMessage(false), 3000);
    }).catch(err => {
      console.error('Failed to copy link:', err);
      alert('Failed to copy link. Please copy manually: ' + roomUrl);
    });
  };

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

  // Loading state
  if (loading) {
    return (
      <div className="video-consultation-page">
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Preparing consultation room...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="video-consultation-page">
        <div className="error-container">
          <div className="error-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="15" y1="9" x2="9" y2="15"/>
              <line x1="9" y1="9" x2="15" y2="15"/>
            </svg>
          </div>
          <h2>Access Denied</h2>
          <p>{error}</p>
          <button onClick={() => navigate(-1)} className="btn-back">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="video-consultation-page">
      {/* Header */}
      <div className="consultation-header">
        <div className="header-left">
          <div className="header-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M23 7l-7 5 7 5V7z"/>
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
            </svg>
          </div>
          <div className="header-info">
            <h2>Video Consultation</h2>
            <span className="appointment-id">Appointment #{appointmentId?.slice(-8)}</span>
          </div>
        </div>
        <div className="header-right">
          <button onClick={copyInviteLink} className="btn-copy-link" title="Copy Whereby meeting link to share with others" disabled={!roomUrl}>
            {showCopiedMessage ? (
              <>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Link Copied!
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
                Share Link
              </>
            )}
          </button>
          {isJoined && (
            <>
              <div className="call-duration">
                <span className="duration-dot"></span>
                <span className="duration-label">Duration:</span>
                <span className="duration-time">{formatDuration(callDuration)}</span>
              </div>
              <button onClick={leaveCall} className="btn-leave-call" title="Leave consultation">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                  <polyline points="16 17 21 12 16 7"/>
                  <line x1="21" y1="12" x2="9" y2="12"/>
                </svg>
                Leave
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
              <h2>Ready to join?</h2>
              <p>Click the button below to start your video consultation</p>
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
            src={`${roomUrl}?displayName=${encodeURIComponent(user?.name || 'User')}&chat=on&people=on&screenshare=on&leaveButton=on`}
            allow="camera; microphone; fullscreen; speaker; display-capture"
            className="whereby-iframe"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default VideoConsultation;
