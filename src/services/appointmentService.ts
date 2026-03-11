// Appointment Service
// Manages appointment bookings and retrieval

export interface Appointment {
  id: string;
  userId: string;
  patientName: string;
  patientPhone: string;
  doctor: {
    id: number;
    name: string;
    specialty: string;
    image: string;
    consultationFee: string;
    location?: string;
  };
  appointmentDate: string;
  appointmentTime: string;
  reason: string;
  consultationMode: 'online' | 'offline'; // NEW: Required consultation mode
  status: 'pending' | 'approved' | 'rejected' | 'cancelled' | 'completed'; // Added 'rejected' and 'completed'
  bookedAt: Date;
  meetingId?: string; // NEW: For online consultations
  paymentStatus?: 'pending' | 'paid'; // NEW: Payment status
  doctorReadyReport?: {
    reportId: string;
    available: boolean;
  };
  labReports?: {
    reportId: string;
    testName: string;
    date: string;
  }[];
}

// Extended appointment interface for doctor dashboard compatibility
export interface DoctorAppointment {
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
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled' | 'rejected' | 'rescheduled';
  reason: string;
  meetingId?: string; // NEW: For online consultations
  aiReport?: string;
  labResults?: string;
  prescription?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

class AppointmentService {
  private storageKey = 'mediguide_appointments';
  private centralStorageKey = 'mediguide_appointments'; // Centralized storage for all appointments

  // Get all appointments for a user (patient view)
  getAppointments(userId: string): Appointment[] {
    // First, sync from central storage to get latest updates from doctors
    this.syncFromCentralToPatient(userId);
    
    const stored = localStorage.getItem(`${this.storageKey}_${userId}`);
    if (!stored) {
      return [];
    }
    
    return JSON.parse(stored).map((apt: any) => ({
      ...apt,
      bookedAt: new Date(apt.bookedAt)
    }));
  }

  // Get appointment by ID
  getAppointmentById(userId: string, appointmentId: string): Appointment | null {
    const appointments = this.getAppointments(userId);
    return appointments.find(apt => apt.id === appointmentId) || null;
  }

  // Create new appointment
  createAppointment(
    userId: string,
    appointmentData: Omit<Appointment, 'id' | 'userId' | 'status' | 'bookedAt'>
  ): Appointment {
    const appointments = this.getAppointments(userId);
    
    const newAppointment: Appointment = {
      id: `APT-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      userId,
      status: 'pending',
      bookedAt: new Date(),
      ...appointmentData
    };
    
    appointments.unshift(newAppointment); // Add to beginning (most recent first)
    this.saveAppointments(userId, appointments);
    
    // SYNC TO CENTRAL STORAGE FOR DOCTOR DASHBOARD
    this.syncToCentralStorage(newAppointment, userId);
    
    return newAppointment;
  }

  // Sync appointment to central storage for doctor dashboard
  private syncToCentralStorage(appointment: Appointment, userEmail: string): void {
    try {
      console.log('🔄 Syncing appointment to central storage:', appointment.id);
      console.log('Patient email:', userEmail);
      console.log('Doctor name:', appointment.doctor.name);
      
      // Get all centralized appointments
      const centralAppointments = this.getCentralAppointments();
      
      // Convert to doctor dashboard format
      const doctorAppointment: DoctorAppointment = {
        id: appointment.id,
        patientId: userEmail,
        patientName: appointment.patientName,
        patientEmail: userEmail,
        patientPhone: appointment.patientPhone,
        doctorId: appointment.doctor.name, // Using doctor name as ID for now
        doctorEmail: this.getDoctorEmailFromName(appointment.doctor.name),
        doctorName: appointment.doctor.name,
        date: appointment.appointmentDate,
        time: appointment.appointmentTime,
        consultationType: appointment.consultationMode, // Use actual consultation mode
        status: appointment.status === 'approved' ? 'confirmed' : 
                appointment.status === 'rejected' ? 'rejected' :
                appointment.status === 'cancelled' ? 'cancelled' : 'pending',
        reason: appointment.reason,
        meetingId: appointment.meetingId, // Include meeting ID
        createdAt: appointment.bookedAt.toISOString(),
        updatedAt: appointment.bookedAt.toISOString(),
      };
      
      console.log('✅ Converted to doctor format:', doctorAppointment);
      console.log('Doctor email:', doctorAppointment.doctorEmail);
      
      // Check if appointment already exists in central storage
      const existingIndex = centralAppointments.findIndex(apt => apt.id === appointment.id);
      
      if (existingIndex >= 0) {
        // Update existing
        centralAppointments[existingIndex] = doctorAppointment;
        console.log('📝 Updated existing appointment in central storage');
      } else {
        // Add new
        centralAppointments.push(doctorAppointment);
        console.log('➕ Added new appointment to central storage');
      }
      
      // Save to central storage
      localStorage.setItem(this.centralStorageKey, JSON.stringify(centralAppointments));
      console.log('💾 Saved to localStorage. Total appointments:', centralAppointments.length);
      
      // SYNC BACK TO PATIENT: Update patient's appointment with latest status from central
      this.syncBackToPatient(appointment.id, userEmail);
    } catch (error) {
      console.error('❌ Error syncing to central storage:', error);
    }
  }

  // Sync status changes from central storage back to patient
  private syncBackToPatient(appointmentId: string, patientEmail: string): void {
    try {
      const centralAppointments = this.getCentralAppointments();
      const centralApt = centralAppointments.find(apt => apt.id === appointmentId);
      
      if (!centralApt) return;
      
      // Get patient's appointments without triggering sync (avoid recursion)
      const patientAppointments = this.getAppointmentsRaw(patientEmail);
      const patientAptIndex = patientAppointments.findIndex(apt => apt.id === appointmentId);
      
      if (patientAptIndex >= 0) {
        // Map doctor status back to patient status
        const patientStatus = centralApt.status === 'confirmed' ? 'approved' : 
                             centralApt.status === 'rejected' ? 'rejected' :
                             centralApt.status === 'cancelled' ? 'cancelled' :
                             centralApt.status === 'completed' ? 'completed' : 'pending';
        
        patientAppointments[patientAptIndex].status = patientStatus as any;
        // Sync meeting ID if exists
        if (centralApt.meetingId) {
          patientAppointments[patientAptIndex].meetingId = centralApt.meetingId;
        }
        this.saveAppointments(patientEmail, patientAppointments);
        console.log(`✅ Synced status back to patient: ${appointmentId} -> ${patientStatus}`);
      }
    } catch (error) {
      console.error('❌ Error syncing back to patient:', error);
    }
  }

  // Sync all appointments from central storage to patient (called when loading appointments)
  private syncFromCentralToPatient(patientEmail: string): void {
    try {
      console.log('🔄 Syncing from central to patient:', patientEmail);
      
      const centralAppointments = this.getCentralAppointments();
      console.log('📦 Central appointments:', centralAppointments.length);
      
      const patientAppointments = this.getAppointmentsRaw(patientEmail);
      console.log('📦 Patient appointments before sync:', patientAppointments.length);
      
      if (patientAppointments.length === 0) {
        console.log('⚠️ No patient appointments to sync');
        return;
      }
      
      let updated = false;
      
      patientAppointments.forEach((patientApt, index) => {
        const centralApt = centralAppointments.find(apt => apt.id === patientApt.id);
        
        if (centralApt) {
          // Map doctor status back to patient status
          const patientStatus = centralApt.status === 'confirmed' ? 'approved' : 
                               centralApt.status === 'rejected' ? 'rejected' :
                               centralApt.status === 'cancelled' ? 'cancelled' :
                               centralApt.status === 'completed' ? 'completed' : 'pending';
          
          if (patientAppointments[index].status !== patientStatus) {
            console.log(`🔄 Syncing appointment ${patientApt.id}: ${patientAppointments[index].status} -> ${patientStatus}`);
            patientAppointments[index].status = patientStatus as any;
            // Sync meeting ID if exists
            if (centralApt.meetingId) {
              patientAppointments[index].meetingId = centralApt.meetingId;
            }
            updated = true;
          }
        }
      });
      
      if (updated) {
        this.saveAppointments(patientEmail, patientAppointments);
        console.log('💾 Saved updated appointments for patient:', patientEmail);
        console.log('📊 Updated appointment statuses:', patientAppointments.map(apt => ({ id: apt.id, status: apt.status })));
      } else {
        console.log('✅ All appointments already in sync');
      }
    } catch (error) {
      console.error('❌ Error syncing from central to patient:', error);
    }
  }

  // Get appointments without syncing (internal use)
  private getAppointmentsRaw(userId: string): Appointment[] {
    const stored = localStorage.getItem(`${this.storageKey}_${userId}`);
    if (!stored) {
      return [];
    }
    
    return JSON.parse(stored).map((apt: any) => ({
      ...apt,
      bookedAt: new Date(apt.bookedAt)
    }));
  }

  // Get doctor email from doctor name (helper function)
  private getDoctorEmailFromName(doctorName: string): string {
    // First, try to find the doctor in the users database
    try {
      const users = JSON.parse(localStorage.getItem('mediguide_users') || '[]');
      const doctor = users.find((u: any) => u.name === doctorName && u.role === 'doctor');
      if (doctor) {
        console.log(`✅ Found doctor email from users: ${doctor.email}`);
        return doctor.email;
      }
    } catch (error) {
      console.error('Error finding doctor in users:', error);
    }
    
    // Fallback: Map doctor names to emails
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
    
    const email = doctorEmailMap[doctorName] || 'doctor@mediguide.com';
    console.log(`📧 Using mapped email for ${doctorName}: ${email}`);
    return email;
  }

  // Get all centralized appointments
  private getCentralAppointments(): DoctorAppointment[] {
    const stored = localStorage.getItem(this.centralStorageKey);
    return stored ? JSON.parse(stored) : [];
  }

  // Sync back to patient (single appointment)
  private syncBackToPatientSingle(appointmentId: string, patientEmail: string): void {
    try {
      console.log('🔄 syncBackToPatientSingle called:', { appointmentId, patientEmail });
      
      const centralAppointments = this.getCentralAppointments();
      const centralApt = centralAppointments.find(apt => apt.id === appointmentId);
      
      if (!centralApt) {
        console.error('❌ Appointment not found in central storage:', appointmentId);
        return;
      }
      
      console.log('📋 Central appointment status:', centralApt.status);
      
      // Get patient's appointments without triggering sync (avoid recursion)
      const patientAppointments = this.getAppointmentsRaw(patientEmail);
      console.log('📦 Patient has', patientAppointments.length, 'appointments');
      
      const patientAptIndex = patientAppointments.findIndex(apt => apt.id === appointmentId);
      console.log('🔍 Found patient appointment at index:', patientAptIndex);
      
      if (patientAptIndex >= 0) {
        // Map doctor status back to patient status
        const patientStatus = centralApt.status === 'confirmed' ? 'approved' : 
                             centralApt.status === 'rejected' ? 'rejected' :
                             centralApt.status === 'cancelled' ? 'cancelled' :
                             centralApt.status === 'completed' ? 'completed' : 'pending';
        
        console.log(`📝 Updating patient appointment: ${patientAppointments[patientAptIndex].status} -> ${patientStatus}`);
        
        patientAppointments[patientAptIndex].status = patientStatus as any;
        // Sync meeting ID if exists
        if (centralApt.meetingId) {
          patientAppointments[patientAptIndex].meetingId = centralApt.meetingId;
          console.log('🎥 Synced meeting ID:', centralApt.meetingId);
        }
        
        this.saveAppointments(patientEmail, patientAppointments);
        console.log(`✅ Synced status back to patient: ${appointmentId} -> ${patientStatus}`);
        console.log('💾 Saved to key:', `${this.storageKey}_${patientEmail}`);
      } else {
        console.error('❌ Appointment not found in patient appointments');
      }
    } catch (error) {
      console.error('❌ Error syncing back to patient:', error);
    }
  }

  // Approve appointment (doctor action)
  approveAppointment(appointmentId: string, doctorEmail: string): { success: boolean; meetingId?: string } {
    try {
      console.log('🔵 approveAppointment called:', { appointmentId, doctorEmail });
      
      const centralAppointments = this.getCentralAppointments();
      console.log('📋 Total central appointments:', centralAppointments.length);
      
      const index = centralAppointments.findIndex(apt => apt.id === appointmentId && apt.doctorEmail === doctorEmail);
      console.log('🔍 Found appointment at index:', index);
      
      if (index === -1) {
        console.error('❌ Appointment not found or doctor email mismatch');
        console.log('Looking for:', { appointmentId, doctorEmail });
        console.log('Available appointments:', centralAppointments.map(apt => ({ id: apt.id, doctorEmail: apt.doctorEmail })));
        return { success: false };
      }

      console.log('📝 Current appointment:', centralAppointments[index]);
      
      centralAppointments[index].status = 'confirmed';
      centralAppointments[index].updatedAt = new Date().toISOString();

      // Generate meeting ID for online consultations
      if (centralAppointments[index].consultationType === 'online') {
        const meetingId = `MEET-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
        centralAppointments[index].meetingId = meetingId;
        console.log('🎥 Generated meeting ID:', meetingId);
      }

      localStorage.setItem(this.centralStorageKey, JSON.stringify(centralAppointments));
      console.log('💾 Saved to localStorage');
      
      // Sync back to patient
      this.syncBackToPatientSingle(appointmentId, centralAppointments[index].patientEmail);
      
      console.log(`✅ Appointment ${appointmentId} approved successfully`);
      return { 
        success: true, 
        meetingId: centralAppointments[index].meetingId 
      };
    } catch (error) {
      console.error('❌ Error approving appointment:', error);
      return { success: false };
    }
  }

  // Reject appointment (doctor action)
  rejectAppointment(appointmentId: string, doctorEmail: string): boolean {
    try {
      const centralAppointments = this.getCentralAppointments();
      const index = centralAppointments.findIndex(apt => apt.id === appointmentId && apt.doctorEmail === doctorEmail);
      
      if (index === -1) {
        return false;
      }

      centralAppointments[index].status = 'rejected';
      centralAppointments[index].updatedAt = new Date().toISOString();
      localStorage.setItem(this.centralStorageKey, JSON.stringify(centralAppointments));
      
      // Sync back to patient
      this.syncBackToPatientSingle(appointmentId, centralAppointments[index].patientEmail);
      
      console.log(`✅ Appointment ${appointmentId} rejected`);
      return true;
    } catch (error) {
      console.error('❌ Error rejecting appointment:', error);
      return false;
    }
  }

  // Update appointment status
  updateAppointmentStatus(
    userId: string,
    appointmentId: string,
    status: 'pending' | 'approved' | 'rejected' | 'cancelled' | 'completed'
  ): boolean {
    const appointments = this.getAppointments(userId);
    const index = appointments.findIndex(apt => apt.id === appointmentId);
    
    if (index === -1) {
      return false;
    }
    
    appointments[index].status = status;
    this.saveAppointments(userId, appointments);
    
    // SYNC STATUS UPDATE TO CENTRAL STORAGE
    this.syncStatusToCentral(appointmentId, status);
    
    return true;
  }

  // Sync status update to central storage
  private syncStatusToCentral(appointmentId: string, status: 'pending' | 'approved' | 'rejected' | 'cancelled' | 'completed'): void {
    try {
      const centralAppointments = this.getCentralAppointments();
      const index = centralAppointments.findIndex(apt => apt.id === appointmentId);
      
      if (index >= 0) {
        const mappedStatus = status === 'approved' ? 'confirmed' : 
                            status === 'rejected' ? 'rejected' :
                            status === 'cancelled' ? 'cancelled' :
                            status === 'completed' ? 'completed' : 'pending';
        centralAppointments[index].status = mappedStatus as any;
        centralAppointments[index].updatedAt = new Date().toISOString();
        localStorage.setItem(this.centralStorageKey, JSON.stringify(centralAppointments));
      }
    } catch (error) {
      console.error('Error syncing status to central storage:', error);
    }
  }

  // Link Doctor-Ready Report to appointment
  linkDoctorReadyReport(
    userId: string,
    appointmentId: string,
    reportId: string
  ): boolean {
    const appointments = this.getAppointments(userId);
    const index = appointments.findIndex(apt => apt.id === appointmentId);
    
    if (index === -1) {
      return false;
    }
    
    appointments[index].doctorReadyReport = {
      reportId,
      available: true
    };
    this.saveAppointments(userId, appointments);
    return true;
  }

  // Link Lab Report to appointment
  linkLabReport(
    userId: string,
    appointmentId: string,
    labReport: {
      reportId: string;
      testName: string;
      date: string;
    }
  ): boolean {
    const appointments = this.getAppointments(userId);
    const index = appointments.findIndex(apt => apt.id === appointmentId);
    
    if (index === -1) {
      return false;
    }
    
    if (!appointments[index].labReports) {
      appointments[index].labReports = [];
    }
    
    appointments[index].labReports!.push(labReport);
    this.saveAppointments(userId, appointments);
    return true;
  }

  // Delete appointment
  deleteAppointment(userId: string, appointmentId: string): boolean {
    const appointments = this.getAppointments(userId);
    const filtered = appointments.filter(apt => apt.id !== appointmentId);
    
    if (filtered.length === appointments.length) {
      return false; // Appointment not found
    }
    
    this.saveAppointments(userId, filtered);
    
    // SYNC DELETION TO CENTRAL STORAGE
    this.deleteFromCentralStorage(appointmentId);
    
    return true;
  }

  // Delete from central storage
  private deleteFromCentralStorage(appointmentId: string): void {
    try {
      const centralAppointments = this.getCentralAppointments();
      const filtered = centralAppointments.filter(apt => apt.id !== appointmentId);
      localStorage.setItem(this.centralStorageKey, JSON.stringify(filtered));
    } catch (error) {
      console.error('Error deleting from central storage:', error);
    }
  }

  // Save appointments to localStorage
  private saveAppointments(userId: string, appointments: Appointment[]): void {
    localStorage.setItem(`${this.storageKey}_${userId}`, JSON.stringify(appointments));
  }

  // Get appointments by status
  getAppointmentsByStatus(
    userId: string,
    status: 'pending' | 'approved' | 'cancelled'
  ): Appointment[] {
    const appointments = this.getAppointments(userId);
    return appointments.filter(apt => apt.status === status);
  }

  // Get upcoming appointments (pending or approved, future dates)
  getUpcomingAppointments(userId: string): Appointment[] {
    const appointments = this.getAppointments(userId);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return appointments.filter(apt => {
      if (apt.status === 'cancelled') return false;
      const aptDate = new Date(apt.appointmentDate);
      return aptDate >= today;
    }).sort((a, b) => {
      const dateA = new Date(a.appointmentDate);
      const dateB = new Date(b.appointmentDate);
      return dateA.getTime() - dateB.getTime();
    });
  }

  // Get past appointments
  getPastAppointments(userId: string): Appointment[] {
    const appointments = this.getAppointments(userId);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return appointments.filter(apt => {
      const aptDate = new Date(apt.appointmentDate);
      return aptDate < today;
    }).sort((a, b) => {
      const dateA = new Date(a.appointmentDate);
      const dateB = new Date(b.appointmentDate);
      return dateB.getTime() - dateA.getTime(); // Most recent first
    });
  }

  // Clear all appointments for a user
  clearUserAppointments(userId: string): void {
    localStorage.removeItem(`${this.storageKey}_${userId}`);
  }

  // MIGRATION: Sync all existing appointments to central storage
  migrateExistingAppointments(): void {
    try {
      console.log('🔄 Starting appointment migration...');
      
      // Get all users from localStorage
      const users = JSON.parse(localStorage.getItem('mediguide_users') || '[]');
      console.log('Found users:', users.length);
      
      let migratedCount = 0;
      
      users.forEach((user: any) => {
        if (user.role === 'patient') {
          const appointments = this.getAppointments(user.email);
          console.log(`Patient ${user.email} has ${appointments.length} appointments`);
          
          appointments.forEach(apt => {
            this.syncToCentralStorage(apt, user.email);
            migratedCount++;
          });
        }
      });
      
      console.log(`✅ Migration completed: ${migratedCount} appointments synced to central storage`);
    } catch (error) {
      console.error('❌ Error during migration:', error);
    }
  }

  // Fix doctor emails in existing appointments
  fixDoctorEmails(): void {
    try {
      console.log('🔧 Fixing doctor emails in appointments...');
      
      const centralAppointments = this.getCentralAppointments();
      const users = JSON.parse(localStorage.getItem('mediguide_users') || '[]');
      
      let fixedCount = 0;
      
      centralAppointments.forEach(apt => {
        // Find the doctor by name
        const doctor = users.find((u: any) => u.name === apt.doctorName && u.role === 'doctor');
        
        if (doctor && apt.doctorEmail !== doctor.email) {
          console.log(`Fixing ${apt.id}: ${apt.doctorEmail} -> ${doctor.email}`);
          apt.doctorEmail = doctor.email;
          fixedCount++;
        }
      });
      
      if (fixedCount > 0) {
        localStorage.setItem(this.centralStorageKey, JSON.stringify(centralAppointments));
        console.log(`✅ Fixed ${fixedCount} appointments`);
      } else {
        console.log('✅ All appointments have correct doctor emails');
      }
    } catch (error) {
      console.error('❌ Error fixing doctor emails:', error);
    }
  }
}

// Export singleton instance
export const appointmentService = new AppointmentService();
