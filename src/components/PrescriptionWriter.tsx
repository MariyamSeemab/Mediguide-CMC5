import React, { useState } from 'react';
import { prescriptionService, Medication, Prescription } from '../services/prescriptionService';
import { pdfService } from '../services/pdfService';
import './PrescriptionWriter.css';

interface PrescriptionWriterProps {
  appointmentId: string;
  doctorId: string;
  doctorName: string;
  doctorRegistrationId: string;
  doctorSpecialization: string;
  patientId: string;
  patientName: string;
  patientAge?: number;
  patientGender?: string;
  onClose: () => void;
  onSuccess: () => void;
}

const PrescriptionWriter: React.FC<PrescriptionWriterProps> = ({
  appointmentId,
  doctorId,
  doctorName,
  doctorRegistrationId,
  doctorSpecialization,
  patientId,
  patientName,
  patientAge,
  patientGender,
  onClose,
  onSuccess,
}) => {
  const [diagnosis, setDiagnosis] = useState('');
  const [notes, setNotes] = useState('');
  const [medications, setMedications] = useState<Medication[]>([
    { name: '', dosage: '', duration: '', instructions: '' },
  ]);
  const [saving, setSaving] = useState(false);
  const [createdPrescription, setCreatedPrescription] = useState<Prescription | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleAddMedication = () => {
    setMedications([
      ...medications,
      { name: '', dosage: '', duration: '', instructions: '' },
    ]);
  };

  const handleRemoveMedication = (index: number) => {
    setMedications(medications.filter((_, i) => i !== index));
  };

  const handleMedicationChange = (
    index: number,
    field: keyof Medication,
    value: string
  ) => {
    const updated = [...medications];
    updated[index][field] = value;
    setMedications(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!diagnosis.trim()) {
      alert('Please enter diagnosis');
      return;
    }

    const validMedications = medications.filter(m => m.name.trim());
    if (validMedications.length === 0) {
      alert('Please add at least one medication');
      return;
    }

    setSaving(true);

    try {
      const prescription = prescriptionService.createPrescription({
        appointmentId,
        doctorId,
        doctorName,
        doctorRegistrationId,
        doctorSpecialization,
        patientId,
        patientName,
        patientAge,
        patientGender,
        medications: validMedications,
        diagnosis: diagnosis.trim(),
        notes: notes.trim(),
      });

      setCreatedPrescription(prescription);
      setShowSuccessModal(true);
      onSuccess();
    } catch (error) {
      console.error('Error creating prescription:', error);
      alert('Failed to create prescription. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleDownloadPDF = async () => {
    if (!createdPrescription) return;
    
    try {
      await pdfService.generatePrescriptionPDF(createdPrescription);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      alert('Failed to download PDF. Please try again.');
    }
  };

  const handleCloseSuccess = () => {
    setShowSuccessModal(false);
    setCreatedPrescription(null);
    onClose();
  };

  return (
    <>
      <div className="prescription-modal-overlay" onClick={onClose}>
        <div className="prescription-modal" onClick={(e) => e.stopPropagation()}>
        <div className="prescription-header">
          <h2>📝 Write Prescription</h2>
          <button className="close-btn" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="prescription-content">
          <div className="prescription-info">
            <div className="info-section">
              <h4>Doctor Information</h4>
              <p><strong>Name:</strong> {doctorName}</p>
              <p><strong>Registration ID:</strong> {doctorRegistrationId}</p>
              <p><strong>Specialization:</strong> {doctorSpecialization}</p>
            </div>
            <div className="info-section">
              <h4>Patient Information</h4>
              <p><strong>Name:</strong> {patientName}</p>
              {patientAge && <p><strong>Age:</strong> {patientAge}</p>}
              {patientGender && <p><strong>Gender:</strong> {patientGender}</p>}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="prescription-form">
            <div className="form-group">
              <label htmlFor="diagnosis">Diagnosis *</label>
              <textarea
                id="diagnosis"
                value={diagnosis}
                onChange={(e) => setDiagnosis(e.target.value)}
                placeholder="Enter diagnosis..."
                rows={3}
                required
              />
            </div>

            <div className="medications-section">
              <div className="section-header">
                <h4>Medications</h4>
                <button
                  type="button"
                  className="btn-add-medication"
                  onClick={handleAddMedication}
                >
                  + Add Medication
                </button>
              </div>

              {medications.map((med, index) => (
                <div key={index} className="medication-item">
                  <div className="medication-header">
                    <span>Medication {index + 1}</span>
                    {medications.length > 1 && (
                      <button
                        type="button"
                        className="btn-remove"
                        onClick={() => handleRemoveMedication(index)}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  <div className="medication-fields">
                    <input
                      type="text"
                      placeholder="Medicine Name *"
                      value={med.name}
                      onChange={(e) =>
                        handleMedicationChange(index, 'name', e.target.value)
                      }
                      required
                    />
                    <input
                      type="text"
                      placeholder="Dosage (e.g., 500mg)"
                      value={med.dosage}
                      onChange={(e) =>
                        handleMedicationChange(index, 'dosage', e.target.value)
                      }
                    />
                    <input
                      type="text"
                      placeholder="Duration (e.g., 7 days)"
                      value={med.duration}
                      onChange={(e) =>
                        handleMedicationChange(index, 'duration', e.target.value)
                      }
                    />
                    <input
                      type="text"
                      placeholder="Instructions (e.g., After meals)"
                      value={med.instructions}
                      onChange={(e) =>
                        handleMedicationChange(index, 'instructions', e.target.value)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="form-group">
              <label htmlFor="notes">Additional Notes</label>
              <textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any additional instructions or notes..."
                rows={3}
              />
            </div>

            <div className="form-actions">
              <button type="button" className="btn-cancel" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn-submit" disabled={saving}>
                {saving ? 'Creating...' : 'Create Prescription'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    {/* Success Modal */}
    {showSuccessModal && createdPrescription && (
      <div className="prescription-modal-overlay" onClick={handleCloseSuccess}>
        <div className="success-modal" onClick={(e) => e.stopPropagation()}>
          <div className="success-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <h2>Prescription Created Successfully!</h2>
          <div className="prescription-details">
            <p><strong>Prescription Number:</strong></p>
            <p className="prescription-number-large">{createdPrescription.prescriptionNumber}</p>
            <p className="prescription-info">
              <strong>Patient:</strong> {createdPrescription.patientName}<br/>
              <strong>Date:</strong> {new Date(createdPrescription.date).toLocaleDateString()}
            </p>
          </div>
          <div className="success-actions">
            <button className="btn-download-pdf" onClick={handleDownloadPDF}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              📄 Download Prescription (PDF)
            </button>
            <button className="btn-close-success" onClick={handleCloseSuccess}>
              Close
            </button>
          </div>
        </div>
      </div>
    )}
  </>
  );
};

export default PrescriptionWriter;
