// Digital Prescription Service with QR Code Verification
// Official and verifiable prescription system

export interface Medication {
  name: string;
  dosage: string;
  duration: string;
  instructions: string;
}

export interface Prescription {
  id: string;
  prescriptionNumber: string;
  appointmentId: string;
  doctorId: string;
  doctorName: string;
  doctorRegistrationId: string;
  doctorSpecialization: string;
  patientId: string;
  patientName: string;
  patientAge?: number;
  patientGender?: string;
  date: string;
  medications: Medication[];
  diagnosis: string;
  notes: string;
  digitalSignature: string;
  qrCode: string;
  verificationUrl: string;
  isValid: boolean;
  createdAt: string;
}

const PRESCRIPTION_STORAGE_KEY = 'mediguide_prescriptions';
let prescriptionCounter = 1;

// Initialize counter from localStorage
const initializeCounter = () => {
  const prescriptions = localStorage.getItem(PRESCRIPTION_STORAGE_KEY);
  if (prescriptions) {
    const allPrescriptions: Prescription[] = JSON.parse(prescriptions);
    if (allPrescriptions.length > 0) {
      const lastNumber = Math.max(
        ...allPrescriptions.map(p => parseInt(p.prescriptionNumber.split('-')[2]) || 0)
      );
      prescriptionCounter = lastNumber + 1;
    }
  }
};

initializeCounter();

export const prescriptionService = {
  // Generate unique prescription number
  generatePrescriptionNumber: (): string => {
    const year = new Date().getFullYear();
    const number = prescriptionCounter.toString().padStart(6, '0');
    prescriptionCounter++;
    return `RX-${year}-${number}`;
  },

  // Generate QR code data (in production, this would be a real QR code image)
  generateQRCode: (prescriptionId: string): string => {
    const verificationUrl = `${window.location.origin}/verify-prescription/${prescriptionId}`;
    // In production, use a QR code library like qrcode.react or qrcode
    return `data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
        <rect width="200" height="200" fill="white"/>
        <text x="100" y="100" text-anchor="middle" font-size="12" fill="black">
          Scan to Verify
        </text>
        <text x="100" y="120" text-anchor="middle" font-size="10" fill="gray">
          ${prescriptionId}
        </text>
      </svg>
    `)}`;
  },

  // Generate digital signature
  generateDigitalSignature: (doctorName: string, doctorId: string): string => {
    const timestamp = new Date().getTime();
    const signature = btoa(`${doctorName}-${doctorId}-${timestamp}`);
    return signature;
  },

  // Create new prescription
  createPrescription: (data: {
    appointmentId: string;
    doctorId: string;
    doctorName: string;
    doctorRegistrationId: string;
    doctorSpecialization: string;
    patientId: string;
    patientName: string;
    patientAge?: number;
    patientGender?: string;
    medications: Medication[];
    diagnosis: string;
    notes: string;
  }): Prescription => {
    try {
      const prescriptions = localStorage.getItem(PRESCRIPTION_STORAGE_KEY);
      const allPrescriptions: Prescription[] = prescriptions ? JSON.parse(prescriptions) : [];

      const prescriptionNumber = prescriptionService.generatePrescriptionNumber();
      const prescriptionId = `PRESC-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const digitalSignature = prescriptionService.generateDigitalSignature(data.doctorName, data.doctorId);
      const qrCode = prescriptionService.generateQRCode(prescriptionId);
      const verificationUrl = `${window.location.origin}/verify-prescription/${prescriptionId}`;

      const newPrescription: Prescription = {
        id: prescriptionId,
        prescriptionNumber,
        appointmentId: data.appointmentId,
        doctorId: data.doctorId,
        doctorName: data.doctorName,
        doctorRegistrationId: data.doctorRegistrationId,
        doctorSpecialization: data.doctorSpecialization,
        patientId: data.patientId,
        patientName: data.patientName,
        patientAge: data.patientAge,
        patientGender: data.patientGender,
        date: new Date().toISOString(),
        medications: data.medications,
        diagnosis: data.diagnosis,
        notes: data.notes,
        digitalSignature,
        qrCode,
        verificationUrl,
        isValid: true,
        createdAt: new Date().toISOString(),
      };

      allPrescriptions.push(newPrescription);
      localStorage.setItem(PRESCRIPTION_STORAGE_KEY, JSON.stringify(allPrescriptions));

      return newPrescription;
    } catch (error) {
      console.error('Error creating prescription:', error);
      throw error;
    }
  },

  // Get prescription by ID
  getPrescriptionById: (prescriptionId: string): Prescription | null => {
    try {
      const prescriptions = localStorage.getItem(PRESCRIPTION_STORAGE_KEY);
      const allPrescriptions: Prescription[] = prescriptions ? JSON.parse(prescriptions) : [];
      return allPrescriptions.find(p => p.id === prescriptionId) || null;
    } catch (error) {
      console.error('Error fetching prescription:', error);
      return null;
    }
  },

  // Get prescriptions by appointment ID
  getPrescriptionsByAppointment: (appointmentId: string): Prescription[] => {
    try {
      const prescriptions = localStorage.getItem(PRESCRIPTION_STORAGE_KEY);
      const allPrescriptions: Prescription[] = prescriptions ? JSON.parse(prescriptions) : [];
      return allPrescriptions.filter(p => p.appointmentId === appointmentId);
    } catch (error) {
      console.error('Error fetching prescriptions:', error);
      return [];
    }
  },

  // Get all prescriptions by doctor
  getPrescriptionsByDoctor: (doctorId: string): Prescription[] => {
    try {
      const prescriptions = localStorage.getItem(PRESCRIPTION_STORAGE_KEY);
      const allPrescriptions: Prescription[] = prescriptions ? JSON.parse(prescriptions) : [];
      return allPrescriptions
        .filter(p => p.doctorId === doctorId)
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } catch (error) {
      console.error('Error fetching doctor prescriptions:', error);
      return [];
    }
  },

  // Get all prescriptions by patient
  getPrescriptionsByPatient: (patientId: string): Prescription[] => {
    try {
      const prescriptions = localStorage.getItem(PRESCRIPTION_STORAGE_KEY);
      const allPrescriptions: Prescription[] = prescriptions ? JSON.parse(prescriptions) : [];
      return allPrescriptions
        .filter(p => p.patientId === patientId)
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } catch (error) {
      console.error('Error fetching patient prescriptions:', error);
      return [];
    }
  },

  // Verify prescription
  verifyPrescription: (prescriptionId: string): {
    isValid: boolean;
    prescription: Prescription | null;
    message: string;
  } => {
    try {
      const prescription = prescriptionService.getPrescriptionById(prescriptionId);

      if (!prescription) {
        return {
          isValid: false,
          prescription: null,
          message: 'Invalid or Tampered Prescription. Prescription ID not found in our records.',
        };
      }

      if (!prescription.isValid) {
        return {
          isValid: false,
          prescription,
          message: 'This prescription has been revoked or is no longer valid.',
        };
      }

      return {
        isValid: true,
        prescription,
        message: 'Prescription is valid and verified.',
      };
    } catch (error) {
      console.error('Error verifying prescription:', error);
      return {
        isValid: false,
        prescription: null,
        message: 'Error verifying prescription. Please try again.',
      };
    }
  },

  // Revoke prescription
  revokePrescription: (prescriptionId: string, doctorId: string): boolean => {
    try {
      const prescriptions = localStorage.getItem(PRESCRIPTION_STORAGE_KEY);
      const allPrescriptions: Prescription[] = prescriptions ? JSON.parse(prescriptions) : [];

      const prescriptionIndex = allPrescriptions.findIndex(
        p => p.id === prescriptionId && p.doctorId === doctorId
      );

      if (prescriptionIndex === -1) {
        return false;
      }

      allPrescriptions[prescriptionIndex].isValid = false;
      localStorage.setItem(PRESCRIPTION_STORAGE_KEY, JSON.stringify(allPrescriptions));

      return true;
    } catch (error) {
      console.error('Error revoking prescription:', error);
      return false;
    }
  },
};
