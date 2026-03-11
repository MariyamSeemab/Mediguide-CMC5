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

export interface FirebaseLabReport {
  id?: string;
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

const LAB_REPORTS_COLLECTION = 'labReports';

export const firebaseLabReportService = {
  // Create a new lab report
  async createLabReport(report: Omit<FirebaseLabReport, 'id' | 'uploadDate'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, LAB_REPORTS_COLLECTION), {
        ...report,
        uploadDate: Timestamp.now()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error creating lab report:', error);
      throw error;
    }
  },

  // Get all lab reports for a user
  async getUserLabReports(userId: string): Promise<FirebaseLabReport[]> {
    try {
      const q = query(
        collection(db, LAB_REPORTS_COLLECTION),
        where('userId', '==', userId),
        orderBy('uploadDate', 'desc')
      );
      
      const querySnapshot = await getDocs(q);
      const reports: FirebaseLabReport[] = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        reports.push({
          id: doc.id,
          ...data,
          uploadDate: data.uploadDate?.toDate() || new Date()
        } as FirebaseLabReport);
      });
      
      return reports;
    } catch (error) {
      console.error('Error getting lab reports:', error);
      throw error;
    }
  },

  // Get latest lab report for a user
  async getLatestLabReport(userId: string): Promise<FirebaseLabReport | null> {
    try {
      const q = query(
        collection(db, LAB_REPORTS_COLLECTION),
        where('userId', '==', userId),
        orderBy('uploadDate', 'desc'),
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
        uploadDate: data.uploadDate?.toDate() || new Date()
      } as FirebaseLabReport;
    } catch (error) {
      console.error('Error getting latest lab report:', error);
      throw error;
    }
  },

  // Delete a lab report
  async deleteLabReport(reportId: string): Promise<void> {
    try {
      await deleteDoc(doc(db, LAB_REPORTS_COLLECTION, reportId));
    } catch (error) {
      console.error('Error deleting lab report:', error);
      throw error;
    }
  }
};
