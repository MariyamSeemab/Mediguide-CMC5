// Video Consultation Service using Whereby
// 
// IMPORTANT: This implementation uses Whereby's free embedded rooms.
// To use this in production:
// 1. Sign up at https://whereby.com
// 2. Get your subdomain (e.g., yourcompany.whereby.com)
// 3. Update WHEREBY_SUBDOMAIN below with your subdomain
// 4. For API-based room creation (recommended for production), you'll need:
//    - A backend server to handle API calls (to avoid CORS)
//    - Whereby API key from your account
//
// Current setup works for development/demo without backend.

// CONFIGURATION: Replace with your Whereby subdomain
const WHEREBY_SUBDOMAIN = 'mediguide-health'; // Change this to your subdomain

export interface VideoRoom {
  roomUrl: string;
  roomName: string;
  appointmentId: string;
  doctorId: string;
  patientId: string;
  createdAt: string;
  expiresAt: string;
  status: 'active' | 'ended' | 'expired';
  hostRoomUrl?: string;
}

export interface CallLog {
  id: string;
  appointmentId: string;
  roomName: string;
  doctorId: string;
  patientId: string;
  startTime: string;
  endTime?: string;
  duration?: number;
  status: 'ongoing' | 'completed' | 'missed' | 'cancelled';
  participants: string[];
}

class VideoConsultationService {
  private storageKey = 'mediguide_video_rooms';
  private callLogsKey = 'mediguide_call_logs';
  private wherebyApiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmFwcGVhci5pbiIsImF1ZCI6Imh0dHBzOi8vYXBpLmFwcGVhci5pbi92MSIsImV4cCI6OTAwNzE5OTI1NDc0MDk5MSwiaWF0IjoxNzcyNDQzNjk3LCJvcmdhbml6YXRpb25JZCI6MzM1NzE1LCJqdGkiOiI5ZDExZDliNC1mZWRkLTQ4NjQtOWYwMC1lNDVmYTYyZGIzN2MifQ.MkwTUInsTy2zXH3o2PsVUp2J0W1FNN1mbXBzF3lD7WY';

  // Create a video room for an appointment
  async createRoom(appointmentId: string, doctorId: string, patientId: string): Promise<VideoRoom> {
    try {
      const roomName = `mediguide-${appointmentId.toLowerCase()}`;
      
      console.log('🎥 Creating Whereby room via API for appointment:', appointmentId);

      // Call Whereby API through Vite proxy to avoid CORS
      const response = await fetch('/api/whereby/v1/meetings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          endDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours from now
          fields: ['hostRoomUrl'],
          roomNamePrefix: roomName,
          roomMode: 'normal',
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Whereby API error:', response.status, errorText);
        throw new Error(`Failed to create Whereby room: ${response.status}`);
      }

      const data = await response.json();
      console.log('✅ Whereby room created via API:', data);
      
      const room: VideoRoom = {
        roomUrl: data.roomUrl,
        hostRoomUrl: data.hostRoomUrl || data.roomUrl,
        roomName: data.meetingId,
        appointmentId,
        doctorId,
        patientId,
        createdAt: new Date().toISOString(),
        expiresAt: data.endDate,
        status: 'active',
      };

      this.saveRoom(room);
      console.log('💾 Room saved to localStorage');
      
      return room;
    } catch (error) {
      console.error('❌ Error creating video room:', error);
      throw error;
    }
  }

  // Get room by appointment ID
  getRoom(appointmentId: string): VideoRoom | null {
    const rooms = this.getAllRooms();
    return rooms.find(room => room.appointmentId === appointmentId) || null;
  }

  // Get or create room
  async getOrCreateRoom(appointmentId: string, doctorId: string, patientId: string): Promise<VideoRoom> {
    const existingRoom = this.getRoom(appointmentId);
    
    if (existingRoom && existingRoom.status === 'active') {
      const now = new Date();
      const expiresAt = new Date(existingRoom.expiresAt);
      
      if (now < expiresAt) {
        console.log('♻️ Using existing room:', existingRoom.roomUrl);
        return existingRoom;
      }
    }

    return await this.createRoom(appointmentId, doctorId, patientId);
  }

  // Save room to localStorage
  private saveRoom(room: VideoRoom): void {
    const rooms = this.getAllRooms();
    const existingIndex = rooms.findIndex(r => r.appointmentId === room.appointmentId);
    
    if (existingIndex >= 0) {
      rooms[existingIndex] = room;
    } else {
      rooms.push(room);
    }
    
    localStorage.setItem(this.storageKey, JSON.stringify(rooms));
  }

  // Get all rooms
  private getAllRooms(): VideoRoom[] {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  // End room
  endRoom(appointmentId: string): void {
    const rooms = this.getAllRooms();
    const updatedRooms = rooms.map(room => {
      if (room.appointmentId === appointmentId) {
        return { ...room, status: 'ended' as const };
      }
      return room;
    });
    
    localStorage.setItem(this.storageKey, JSON.stringify(updatedRooms));
  }

  // Start call log
  startCallLog(appointmentId: string, roomName: string, doctorId: string, patientId: string): CallLog {
    const callLog: CallLog = {
      id: `CALL-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      appointmentId,
      roomName,
      doctorId,
      patientId,
      startTime: new Date().toISOString(),
      status: 'ongoing',
      participants: [],
    };

    const logs = this.getAllCallLogs();
    logs.push(callLog);
    localStorage.setItem(this.callLogsKey, JSON.stringify(logs));
    
    console.log('📞 Call started:', callLog.id);
    return callLog;
  }

  // End call log
  endCallLog(callId: string, status: 'completed' | 'missed' | 'cancelled' = 'completed'): void {
    const logs = this.getAllCallLogs();
    const updatedLogs = logs.map(log => {
      if (log.id === callId && log.status === 'ongoing') {
        const endTime = new Date();
        const startTime = new Date(log.startTime);
        const duration = Math.floor((endTime.getTime() - startTime.getTime()) / 1000); // seconds
        
        return {
          ...log,
          endTime: endTime.toISOString(),
          duration,
          status,
        };
      }
      return log;
    });
    
    localStorage.setItem(this.callLogsKey, JSON.stringify(updatedLogs));
    console.log('📞 Call ended:', callId, 'Duration:', updatedLogs.find(l => l.id === callId)?.duration, 'seconds');
  }

  // Get all call logs
  getAllCallLogs(): CallLog[] {
    const stored = localStorage.getItem(this.callLogsKey);
    return stored ? JSON.parse(stored) : [];
  }

  // Get call logs by doctor
  getCallLogsByDoctor(doctorId: string): CallLog[] {
    return this.getAllCallLogs().filter(log => log.doctorId === doctorId);
  }

  // Get call logs by patient
  getCallLogsByPatient(patientId: string): CallLog[] {
    return this.getAllCallLogs().filter(log => log.patientId === patientId);
  }

  // Get call logs by appointment
  getCallLogsByAppointment(appointmentId: string): CallLog[] {
    return this.getAllCallLogs().filter(log => log.appointmentId === appointmentId);
  }

  // Verify access to room
  verifyAccess(appointmentId: string, userId: string, userRole: 'doctor' | 'patient'): boolean {
    // Get appointment from central storage
    const appointments = JSON.parse(localStorage.getItem('mediguide_appointments') || '[]');
    const appointment = appointments.find((apt: any) => apt.id === appointmentId);
    
    if (!appointment) {
      console.log('❌ Appointment not found:', appointmentId);
      return false;
    }

    console.log('🔍 Verifying access for:', userId, 'Role:', userRole);
    console.log('📋 Appointment:', appointment);

    if (userRole === 'doctor') {
      const hasAccess = appointment.doctorEmail === userId;
      console.log('👨‍⚕️ Doctor access:', hasAccess, '(', appointment.doctorEmail, 'vs', userId, ')');
      return hasAccess;
    } else {
      const hasAccess = appointment.patientEmail === userId || appointment.patientId === userId;
      console.log('👤 Patient access:', hasAccess, '(', appointment.patientEmail, 'vs', userId, ')');
      return hasAccess;
    }
  }

  // Format duration
  formatDuration(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${secs}s`;
    } else {
      return `${secs}s`;
    }
  }
}

export const videoConsultationService = new VideoConsultationService();
