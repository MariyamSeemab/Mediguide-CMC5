// Real-time Chat Service for Doctor-Patient Communication
// Uses localStorage as data persistence layer

export interface ChatMessage {
  id: string;
  appointmentId: string;
  senderId: string;
  senderName: string;
  senderRole: 'doctor' | 'patient';
  message: string;
  timestamp: string;
  read: boolean;
}

const CHAT_STORAGE_KEY = 'mediguide_chats';

export const chatService = {
  // Get all messages for a specific appointment
  getMessages: (appointmentId: string): ChatMessage[] => {
    try {
      const chats = localStorage.getItem(CHAT_STORAGE_KEY);
      const allMessages: ChatMessage[] = chats ? JSON.parse(chats) : [];
      return allMessages
        .filter(msg => msg.appointmentId === appointmentId)
        .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
    } catch (error) {
      console.error('Error fetching messages:', error);
      return [];
    }
  },

  // Send a new message
  sendMessage: (
    appointmentId: string,
    senderId: string,
    senderName: string,
    senderRole: 'doctor' | 'patient',
    message: string
  ): ChatMessage => {
    try {
      const chats = localStorage.getItem(CHAT_STORAGE_KEY);
      const allMessages: ChatMessage[] = chats ? JSON.parse(chats) : [];

      const newMessage: ChatMessage = {
        id: `MSG-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        appointmentId,
        senderId,
        senderName,
        senderRole,
        message,
        timestamp: new Date().toISOString(),
        read: false,
      };

      allMessages.push(newMessage);
      localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(allMessages));

      return newMessage;
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  },

  // Mark messages as read
  markAsRead: (appointmentId: string, userId: string): void => {
    try {
      const chats = localStorage.getItem(CHAT_STORAGE_KEY);
      const allMessages: ChatMessage[] = chats ? JSON.parse(chats) : [];

      const updatedMessages = allMessages.map(msg => {
        if (msg.appointmentId === appointmentId && msg.senderId !== userId) {
          return { ...msg, read: true };
        }
        return msg;
      });

      localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(updatedMessages));
    } catch (error) {
      console.error('Error marking messages as read:', error);
    }
  },

  // Get unread message count for a user
  getUnreadCount: (appointmentId: string, userId: string): number => {
    try {
      const messages = chatService.getMessages(appointmentId);
      return messages.filter(msg => msg.senderId !== userId && !msg.read).length;
    } catch (error) {
      console.error('Error getting unread count:', error);
      return 0;
    }
  },

  // Delete all messages for an appointment
  deleteMessages: (appointmentId: string): void => {
    try {
      const chats = localStorage.getItem(CHAT_STORAGE_KEY);
      const allMessages: ChatMessage[] = chats ? JSON.parse(chats) : [];
      const filteredMessages = allMessages.filter(msg => msg.appointmentId !== appointmentId);
      localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(filteredMessages));
    } catch (error) {
      console.error('Error deleting messages:', error);
    }
  },
};
