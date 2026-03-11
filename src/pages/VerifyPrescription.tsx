import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { prescriptionService, Prescription } from '../services/prescriptionService';
import './VerifyPrescription.css';

const VerifyPrescription: React.FC = () => {
  const { prescriptionId } = useParams<{ prescriptionId: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [verification, setVerification] = useState<{
    isValid: boolean;
    prescription: Prescription | null;
    message: string;
  } | null>(null);

  useEffect(() => {
    if (prescriptionId) {
      verifyPrescription();
    }
  }, [prescriptionId]);

  const verifyPrescription = () => {
    setLoading(true);
    
    setTimeout(() => {
      const result = prescriptionService.verifyPrescription(prescriptionId || '');
      setVerification(result);
      setLoading(false);
    }, 1000); // Simulate verification delay
  };

  if (loading) {
    return (
      <div className="verify-prescription-page">
        <div className="verify-container">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Verifying Prescription...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!verification) {
    return (
      <div className="verify-prescription-page">
        <div className="verify-container">
          <div className="error-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="15" y1="9" x2="9" y2="15"/>
              <line x1="9" y1="9" x2="15" y2="15"/>
            </svg>
            <h2>Verification Failed</h2>
            <p>Unable to verify prescription. Please try again.</p>
            <button onClick={() => navigate('/')}>Go to Homepage</button>
          </div>
        </div>
      </div>
    );
  }

  const { isValid, prescription, message } = verification;

  return (
    <div className="verify-prescription-page">
      <div className="verify-container">
        {/* Header */}
        <div className="verify-header">
          <div className="logo">
            <h1>MEDIGUIDE</h1>
            <p>Prescription Verification System</p>
          </div>
        </div>

        {/* Verification Result - Hidden for print to not block QR scanner */}
        <div className={`verification-result ${isValid ? 'valid' : 'invalid'} hide-on-print`}>
          <div className="result-icon">
            {isValid ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="15" y1="9" x2="9" y2="15"/>
                <line x1="9" y1="9" x2="15" y2="15"/>
              </svg>
            )}
          </div>
          <h2>{isValid ? 'Prescription Valid ✓' : 'Invalid Prescription ✗'}</h2>
          <p className="verification-message">{message}</p>
        </div>

        {/* Prescription Details */}
        {isValid && prescription && (
          <div className="prescription-details-card">
            <div className="detail-section">
              <h3>Prescription Information</h3>
              <div className="detail-grid">
                <div className="detail-item">
                  <span className="label">Prescription Number:</span>
                  <span className="value prescription-number">{prescription.prescriptionNumber}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Issue Date:</span>
                  <span className="value">
                    {new Date(prescription.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="detail-item">
                  <span className="label">Status:</span>
                  <span className={`status-badge ${prescription.isValid ? 'valid' : 'invalid'}`}>
                    {prescription.isValid ? 'Valid' : 'Revoked'}
                  </span>
                </div>
              </div>
            </div>

            <div className="detail-section">
              <h3>Doctor Information</h3>
              <div className="detail-grid">
                <div className="detail-item">
                  <span className="label">Doctor Name:</span>
                  <span className="value">{prescription.doctorName}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Registration ID:</span>
                  <span className="value">{prescription.doctorRegistrationId}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Specialization:</span>
                  <span className="value">{prescription.doctorSpecialization}</span>
                </div>
              </div>
            </div>

            <div className="detail-section">
              <h3>Patient Information</h3>
              <div className="detail-grid">
                <div className="detail-item">
                  <span className="label">Patient Name:</span>
                  <span className="value">{prescription.patientName}</span>
                </div>
                {prescription.patientAge && (
                  <div className="detail-item">
                    <span className="label">Age:</span>
                    <span className="value">{prescription.patientAge} years</span>
                  </div>
                )}
                {prescription.patientGender && (
                  <div className="detail-item">
                    <span className="label">Gender:</span>
                    <span className="value">{prescription.patientGender}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="detail-section">
              <h3>Diagnosis</h3>
              <p className="diagnosis-text">{prescription.diagnosis}</p>
            </div>

            <div className="detail-section">
              <h3>Prescribed Medications</h3>
              <div className="medications-list">
                {prescription.medications.map((med, index) => (
                  <div key={index} className="medication-card">
                    <div className="medication-number">{index + 1}</div>
                    <div className="medication-details">
                      <h4>{med.name}</h4>
                      <div className="medication-info">
                        {med.dosage && <span>💊 {med.dosage}</span>}
                        {med.duration && <span>⏱️ {med.duration}</span>}
                      </div>
                      {med.instructions && (
                        <p className="medication-instructions">📋 {med.instructions}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {prescription.notes && (
              <div className="detail-section">
                <h3>Additional Notes</h3>
                <p className="notes-text">{prescription.notes}</p>
              </div>
            )}

            {/* Doctor Signature Section */}
            <div className="detail-section signature-section">
              <div className="signature-container">
                <div className="signature-box">
                  <img 
                    src="/signature.png" 
                    alt="Doctor Signature" 
                    className="signature-image"
                  />
                  <div className="signature-line"></div>
                  <p className="signature-name">{prescription.doctorName}</p>
                  <p className="signature-reg">Reg. No: {prescription.doctorRegistrationId}</p>
                </div>
                <div className="stamp-box">
                  <div className="authorized-stamp">
                    <div className="stamp-circle">
                      <div className="stamp-inner">
                        <div className="stamp-text-top">MEDIGUIDE</div>
                        <div className="stamp-text-center">AUTHORIZED</div>
                        <div className="stamp-text-bottom">VERIFIED</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="verification-footer">
              <p className="verification-timestamp">
                Verified on: {new Date().toLocaleString()}
              </p>
              <p className="verification-notice">
                This prescription has been verified through Mediguide's secure verification system.
              </p>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="btn-primary" onClick={() => navigate('/')}>
            Go to Homepage
          </button>
          {isValid && (
            <button className="btn-secondary" onClick={() => window.print()}>
              Print Verification
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyPrescription;
