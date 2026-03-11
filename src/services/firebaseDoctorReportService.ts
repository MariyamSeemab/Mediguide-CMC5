import { 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc,
  doc,
  query, 
  where,
  orderBy,
  limit,
  Timestamp 
} from 'firebase/firestore';
import { db } from '../config/firebase';

export interface FirebaseDoctorReport {
  id?: string;
  userId: string;
  reportId: string;
  patientName: string;
  age?: number;
  gender?: string;
  symptoms: string[];
  aiInsights: string;
  recommendedTests: string[];
  notes: string;
  vitalSigns?: {
    bloodPressure?: string;
    heartRate?: number;
    temperature?: number;
    oxygenLevel?: number;
  };
  createdAt: Date;
  lastUpdated: Date;
}

const DOCTOR_REPORTS_COLLECTION = 'doctorReports';

export const firebaseDoctorReportService = {
  // Create a new doctor report
  async createReport(report: Omit<FirebaseDoctorReport, 'id' | 'createdAt' | 'lastUpdated'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, DOCTOR_REPORTS_COLLECTION), {
        ...report,
        createdAt: Timestamp.now(),
        lastUpdated: Timestamp.now()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error creating doctor report:', error);
      throw error;
    }
  },

  // Get all reports for a user
  async getUserReports(userId: string): Promise<FirebaseDoctorReport[]> {
    try {
      const q = query(
        collection(db, DOCTOR_REPORTS_COLLECTION),
        where('userId', '==', userId),
        orderBy('createdAt', 'desc')
      );
      
      const querySnapshot = await getDocs(q);
      const reports: FirebaseDoctorReport[] = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        reports.push({
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate() || new Date(),
          lastUpdated: data.lastUpdated?.toDate() || new Date()
        } as FirebaseDoctorReport);
      });
      
      return reports;
    } catch (error) {
      console.error('Error getting doctor reports:', error);
      throw error;
    }
  },

  // Get latest report for a user
  async getLatestReport(userId: string): Promise<FirebaseDoctorReport | null> {
    try {
      const q = query(
        collection(db, DOCTOR_REPORTS_COLLECTION),
        where('userId', '==', userId),
        orderBy('createdAt', 'desc'),
        limit(1)
      );
      
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        return null;
      }
      
      const doc = querySnapshot.docs[0];
      const data = doc.data();
      
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate() || new Date(),
        lastUpdated: data.lastUpdated?.toDate() || new Date()
      } as FirebaseDoctorReport;
    } catch (error) {
      console.error('Error getting latest doctor report:', error);
      throw error;
    }
  },

  // Delete a report
  async deleteReport(reportId: string): Promise<void> {
    try {
      await deleteDoc(doc(db, DOCTOR_REPORTS_COLLECTION, reportId));
    } catch (error) {
      console.error('Error deleting doctor report:', error);
      throw error;
    }
  }
};
