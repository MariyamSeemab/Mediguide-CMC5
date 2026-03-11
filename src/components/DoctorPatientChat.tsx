import React, { useState, useEffect, useRef } from 'react';
import { chatService, ChatMessage } from '../services/chatService';
import './DoctorPatientChat.css';

interface DoctorPatientChatProps {
  appointmentId: string;
  currentUserId: string;
  currentUserName: string;
  currentUserRole: 'doctor' | 'patient';
  onClose: () => void;
}

const DoctorPatientChat: React.FC<DoctorPatientChatProps> = ({
  appointmentId,
  currentUserId,
  currentUserName,
  currentUserRole,
  onClose,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load messages
  useEffect(() => {
    loadMessages();
    // Mark messages as read
    chatService.markAsRead(appointmentId, currentUserId);

    // Poll for new messages every 2 seconds (simulates real-time)
    const interval = setInterval(() => {
      loadMessages();
      chatService.markAsRead(appointmentId, currentUserId);
    }, 2000);

    return () => clearInterval(interval);
  }, [appointmentId, currentUserId]);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const loadMessages = () => {
    const msgs = chatService.getMessages(appointmentId);
    setMessages(msgs);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newMessage.trim() || sending) return;

    setSending(true);

    try {
      chatService.sendMessage(
        appointmentId,
        currentUserId,
        currentUserName,
        currentUserRole,
        newMessage.trim()
      );

      setNewMessage('');
      loadMessages();
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      });
    }
  };

  // Group messages by date
  const groupedMessages: { [key: string]: ChatMessage[] } = {};
  messages.forEach(msg => {
    const dateKey = formatDate(msg.timestamp);
    if (!groupedMessages[dateKey]) {
      groupedMessages[dateKey] = [];
    }
    groupedMessages[dateKey].push(msg);
  });

  return (
    <div className="chat-modal-overlay" onClick={onClose}>
      <div className="chat-modal" onClick={(e) => e.stopPropagation()}>
        <div className="chat-header">
          <div className="chat-header-info">
            <h3>💬 Chat</h3>
            <p>Appointment ID: {appointmentId}</p>
          </div>
          <button className="chat-close-btn" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="chat-messages">
          {Object.keys(groupedMessages).length === 0 ? (
            <div className="chat-empty">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              <p>No messages yet. Start the conversation!</p>
            </div>
          ) : (
            Object.entries(groupedMessages).map(([date, msgs]) => (
              <div key={date}>
                <div className="chat-date-divider">
                  <span>{date}</span>
                </div>
                {msgs.map((msg) => (
                  <div
                    key={msg.id}
                    className={`chat-message ${
                      msg.senderId === currentUserId ? 'own-message' : 'other-message'
                    }`}
                  >
                    <div className="message-content">
                      {msg.senderId !== currentUserId && (
                        <div className="message-sender">{msg.senderName}</div>
                      )}
                      <div className="message-text">{msg.message}</div>
                      <div className="message-time">{formatTime(msg.timestamp)}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="chat-input-form" onSubmit={handleSendMessage}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            disabled={sending}
            maxLength={500}
          />
          <button type="submit" disabled={!newMessage.trim() || sending}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorPatientChat;
