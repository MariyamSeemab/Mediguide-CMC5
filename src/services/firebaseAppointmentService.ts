import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where,
  orderBy,
  Timestamp 
} from 'firebase/firestore';
import { db } from '../config/firebase';

export interface FirebaseAppointment {
  id?: string;
  userId: string;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  status: 'pending' | 'approved' | 'cancelled';
  location?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const APPOINTMENTS_COLLECTION = 'appointments';

export const firebaseAppointmentService = {
  // Create a new appointment
  async createAppointment(appointment: Omit<FirebaseAppointment, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, APPOINTMENTS_COLLECTION), {
        ...appointment,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error creating appointment:', error);
      throw error;
    }
  },

  // Get all appointments for a user
  async getUserAppointments(userId: string): Promise<FirebaseAppointment[]> {
    try {
      const q = query(
        collection(db, APPOINTMENTS_COLLECTION),
        where('userId', '==', userId),
        orderBy('createdAt', 'desc')
      );
      
      const querySnapshot = await getDocs(q);
      const appointments: FirebaseAppointment[] = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        appointments.push({
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate() || new Date(),
          updatedAt: data.updatedAt?.toDate() || new Date()
        } as FirebaseAppointment);
      });
      
      return appointments;
    } catch (error) {
      console.error('Error getting appointments:', error);
      throw error;
    }
  },

  // Get upcoming appointments
  async getUpcomingAppointments(userId: string): Promise<FirebaseAppointment[]> {
    try {
      const appointments = await this.getUserAppointments(userId);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      return appointments.filter(apt => {
        const aptDate = new Date(apt.date);
        return aptDate >= today && apt.status !== 'cancelled';
      });
    } catch (error) {
      console.error('Error getting upcoming appointments:', error);
      throw error;
    }
  },

  // Get past appointments
  async getPastAppointments(userId: string): Promise<FirebaseAppointment[]> {
    try {
      const appointments = await this.getUserAppointments(userId);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      return appointments.filter(apt => {
        const aptDate = new Date(apt.date);
        return aptDate < today || apt.status === 'cancelled';
      });
    } catch (error) {
      console.error('Error getting past appointments:', error);
      throw error;
    }
  },

  // Update appointment status
  async updateAppointmentStatus(appointmentId: string, status: 'pending' | 'approved' | 'cancelled'): Promise<void> {
    try {
      const appointmentRef = doc(db, APPOINTMENTS_COLLECTION, appointmentId);
      await updateDoc(appointmentRef, {
        status,
        updatedAt: Timestamp.now()
      });
    } catch (error) {
      console.error('Error updating appointment status:', error);
      throw error;
    }
  },

  // Delete appointment
  async deleteAppointment(appointmentId: string): Promise<void> {
    try {
      await deleteDoc(doc(db, APPOINTMENTS_COLLECTION, appointmentId));
    } catch (error) {
      console.error('Error deleting appointment:', error);
      throw error;
    }
  }
};
