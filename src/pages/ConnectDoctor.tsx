import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { localizeNumber } from '../utils/numberLocalization';
import { appointmentService } from '../services/appointmentService';
import './ConnectDoctor.css';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  reviews: number;
  availability: string;
  languages: string[];
  consultationFee: string;
  image: string;
  location?: string;
  distance?: string;
  isNearby?: boolean;
  education?: string;
  about?: string;
  timeSlots?: string[];
}

interface LocationState {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
  loading: boolean;
}

interface ProfileModalProps {
  doctor: Doctor | null;
  isOpen: boolean;
  onClose: () => void;
  onBookAppointment: (doctor: Doctor) => void;
}

interface BookingData {
  doctor: Doctor;
  selectedDate: string;
  selectedTime: string;
  patientName: string;
  patientPhone: string;
  reason: string;
  consultationMode: 'online' | 'offline'; // NEW
}

interface BookingModalProps {
  doctor: Doctor | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (bookingData: BookingData) => void;
}

// Profile Modal Component
const ProfileModal: React.FC<ProfileModalProps> = ({ doctor, isOpen, onClose, onBookAppointment }) => {
  const { t, currentLanguage } = useLanguage();
  
  // Helper function for translations with number localization
  const tWithNumbers = (key: string): string => {
    const translation = t(key);
    return translation.replace(/\d+/g, (match) => localizeNumber(match, currentLanguage));
  };

  const getLocalizedSpecialty = (specialty: string): string => {
    const specialtyMap: { [key: string]: string } = {
      'All': t('connectDoctor.specialties.all'),
      'General Physician': t('connectDoctor.specialties.generalPhysician'),
      'Cardiologist': t('connectDoctor.specialties.cardiologist'),
      'Dermatologist': t('connectDoctor.specialties.dermatologist'),
      'Pediatrician': t('connectDoctor.specialties.pediatrician'),
      'Orthopedic': t('connectDoctor.specialties.orthopedic'),
      'Gynecologist': t('connectDoctor.specialties.gynecologist'),
      'Psychiatrist': t('connectDoctor.specialties.psychiatrist'),
      'Dentist': t('connectDoctor.specialties.dentist'),
      'Neurologist': t('connectDoctor.specialties.neurologist'),
      'Ophthalmologist': t('connectDoctor.specialties.ophthalmologist'),
      'ENT Specialist': t('connectDoctor.specialties.entSpecialist')
    };
    return specialtyMap[specialty] || specialty;
  };

  const getLocalizedLanguages = (languages: string[]): string[] => {
    const languageMap: { [key: string]: string } = {
      'English': t('connectDoctor.languages.english'),
      'Hindi': t('connectDoctor.languages.hindi'),
      'Tamil': t('connectDoctor.languages.tamil'),
      'Telugu': t('connectDoctor.languages.telugu'),
      'Bengali': t('connectDoctor.languages.bengali'),
      'Marathi': t('connectDoctor.languages.marathi'),
      'Gujarati': t('connectDoctor.languages.gujarati'),
      'Kannada': t('connectDoctor.languages.kannada'),
      'Malayalam': t('connectDoctor.languages.malayalam'),
      'Punjabi': t('connectDoctor.languages.punjabi'),
      'Odia': t('connectDoctor.languages.odia'),
      'Assamese': t('connectDoctor.languages.assamese')
    };
    return languages.map(lang => languageMap[lang] || lang);
  };

  if (!isOpen || !doctor) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{t('connectDoctor.profileModal.title')}</h2>
          <button className="close-btn" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        
        <div className="modal-content">
          <div className="doctor-profile-header">
            <div className="doctor-image-container">
              <img 
                src={doctor.image} 
                alt={doctor.name}
                onLoad={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'block';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'none';
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) {
                    fallback.style.display = 'flex';
                    fallback.textContent = doctor.name.split(' ').map(n => n[0]).join('');
                  }
                }}
                style={{ display: 'block' }}
              />
              <span className="avatar-fallback" style={{ display: 'none' }}></span>
            </div>
            <div className="doctor-basic-info">
              <h3>{doctor.name}</h3>
              <p className="specialty">{getLocalizedSpecialty(doctor.specialty)}</p>
              <div className="rating-section">
                <div className="rating">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                  <span>{localizeNumber(doctor.rating.toString(), currentLanguage)}</span>
                </div>
                <span className="reviews">({localizeNumber(doctor.reviews.toString(), currentLanguage)} {t('connectDoctor.doctorCard.reviews')})</span>
              </div>
            </div>
          </div>

          <div className="doctor-details">
            <div className="detail-section">
              <h4>{t('connectDoctor.profileModal.education')}</h4>
              <p>{doctor.education}</p>
            </div>
            
            <div className="detail-section">
              <h4>{t('connectDoctor.profileModal.about')}</h4>
              <p>{doctor.about}</p>
            </div>
            
            <div className="detail-section">
              <h4>{t('connectDoctor.profileModal.experience')}</h4>
              <p>{tWithNumbers(doctor.experience)}</p>
            </div>
            
            <div className="detail-section">
              <h4>{t('connectDoctor.profileModal.languages')}</h4>
              <p>{getLocalizedLanguages(doctor.languages).join(', ')}</p>
            </div>
            
            <div className="detail-section">
              <h4>{t('connectDoctor.profileModal.location')}</h4>
              <p>{doctor.location}</p>
            </div>
            
            <div className="detail-section">
              <h4>{t('connectDoctor.profileModal.consultationFee')}</h4>
              <p className="fee">{tWithNumbers(doctor.consultationFee)}</p>
            </div>
            
            {doctor.timeSlots && (
              <div className="detail-section">
                <h4>{t('connectDoctor.profileModal.availableTimeSlots')}</h4>
                <div className="time-slots">
                  {doctor.timeSlots.map((slot, index) => (
                    <span key={index} className="time-slot">{tWithNumbers(slot)}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="modal-footer">
          <button className="btn-book-appointment" onClick={() => onBookAppointment(doctor)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            {t('connectDoctor.profileModal.bookAppointment')}
          </button>
        </div>
      </div>
    </div>
  );
};

// Booking Modal Component
const BookingModal: React.FC<BookingModalProps> = ({ doctor, isOpen, onClose, onConfirm }) => {
  const { t, currentLanguage } = useLanguage();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [reason, setReason] = useState('');
  const [consultationMode, setConsultationMode] = useState<'online' | 'offline' | ''>(''); // NEW

  // Helper function for translations with number localization
  const tWithNumbers = (key: string): string => {
    const translation = t(key);
    return translation.replace(/\d+/g, (match) => localizeNumber(match, currentLanguage));
  };

  const getLocalizedSpecialty = (specialty: string): string => {
    const specialtyMap: { [key: string]: string } = {
      'All': t('connectDoctor.specialties.all'),
      'General Physician': t('connectDoctor.specialties.generalPhysician'),
      'Cardiologist': t('connectDoctor.specialties.cardiologist'),
      'Dermatologist': t('connectDoctor.specialties.dermatologist'),
      'Pediatrician': t('connectDoctor.specialties.pediatrician'),
      'Orthopedic': t('connectDoctor.specialties.orthopedic'),
      'Gynecologist': t('connectDoctor.specialties.gynecologist'),
      'Psychiatrist': t('connectDoctor.specialties.psychiatrist'),
      'Dentist': t('connectDoctor.specialties.dentist'),
      'Neurologist': t('connectDoctor.specialties.neurologist'),
      'Ophthalmologist': t('connectDoctor.specialties.ophthalmologist'),
      'ENT Specialist': t('connectDoctor.specialties.entSpecialist')
    };
    return specialtyMap[specialty] || specialty;
  };

  if (!isOpen || !doctor) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate consultation mode is selected
    if (!consultationMode) {
      alert('Please select a consultation mode (Online or Offline)');
      return;
    }
    
    const bookingData = {
      doctor,
      selectedDate,
      selectedTime,
      patientName,
      patientPhone,
      reason,
      consultationMode // NEW: Include consultation mode
    };
    onConfirm(bookingData);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{t('connectDoctor.bookingModal.title')}</h2>
          <button className="close-btn" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        
        <div className="modal-content">
          <div className="doctor-summary">
            <img 
              src={doctor.image} 
              alt={doctor.name} 
              onLoad={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'block';
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                // Create fallback if image fails
                const fallback = document.createElement('div');
                fallback.className = 'booking-avatar-fallback';
                fallback.textContent = doctor.name.split(' ').map(n => n[0]).join('');
                target.parentNode?.insertBefore(fallback, target.nextSibling);
              }}
              style={{ display: 'block' }}
            />
            <div>
              <h4>{doctor.name}</h4>
              <p>{getLocalizedSpecialty(doctor.specialty)}</p>
              <p className="fee">{tWithNumbers(doctor.consultationFee)}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-group">
              <label htmlFor="patientName">{t('connectDoctor.bookingModal.patientNameRequired')}</label>
              <input
                type="text"
                id="patientName"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="patientPhone">{t('connectDoctor.bookingModal.phoneNumberRequired')}</label>
              <input
                type="tel"
                id="patientPhone"
                value={patientPhone}
                onChange={(e) => setPatientPhone(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="appointmentDate">{t('connectDoctor.bookingModal.appointmentDateRequired')}</label>
              <input
                type="date"
                id="appointmentDate"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={today}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="appointmentTime">{t('connectDoctor.bookingModal.preferredTimeRequired')}</label>
              <select
                id="appointmentTime"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                required
              >
                <option value="">{t('connectDoctor.bookingModal.selectTime')}</option>
                {doctor.timeSlots?.map((slot, index) => (
                  <option key={index} value={slot}>{tWithNumbers(slot)}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="consultation-mode-label">
                Consultation Mode <span className="required-star">*</span>
              </label>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="consultationMode"
                    value="online"
                    checked={consultationMode === 'online'}
                    onChange={(e) => setConsultationMode(e.target.value as 'online')}
                    required
                  />
                  <span className="radio-label">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M23 7l-7 5 7 5V7z"/>
                      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                    </svg>
                    Online Video Consultation
                  </span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="consultationMode"
                    value="offline"
                    checked={consultationMode === 'offline'}
                    onChange={(e) => setConsultationMode(e.target.value as 'offline')}
                    required
                  />
                  <span className="radio-label">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    Offline Clinic Visit
                  </span>
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="reason">{t('connectDoctor.bookingModal.reasonForVisit')}</label>
              <textarea
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={3}
                placeholder={t('connectDoctor.bookingModal.reasonPlaceholder')}
              />
            </div>

            <div className="form-actions">
              <button type="button" className="btn-cancel" onClick={onClose}>
                {t('connectDoctor.bookingModal.cancel')}
              </button>
              <button type="submit" className="btn-confirm">
                {t('connectDoctor.bookingModal.confirmBooking')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const ConnectDoctor: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const { user } = useAuth();
  const [selectedSpecialty, setSelectedSpecialty] = useState(t('connectDoctor.specialties.all'));
  const [searchQuery, setSearchQuery] = useState('');
  const [showNearbyOnly, setShowNearbyOnly] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [location, setLocation] = useState<LocationState>({
    latitude: null,
    longitude: null,
    error: null,
    loading: false
  });

  // Helper function for translations with number localization
  const tWithNumbers = (key: string): string => {
    const translation = t(key);
    return translation.replace(/\d+/g, (match) => localizeNumber(match, currentLanguage));
  };

  const specialties = [
    t('connectDoctor.specialties.all'),
    t('connectDoctor.specialties.generalPhysician'),
    t('connectDoctor.specialties.cardiologist'),
    t('connectDoctor.specialties.dermatologist'),
    t('connectDoctor.specialties.pediatrician'),
    t('connectDoctor.specialties.orthopedic'),
    t('connectDoctor.specialties.gynecologist'),
    t('connectDoctor.specialties.psychiatrist'),
    t('connectDoctor.specialties.dentist'),
    t('connectDoctor.specialties.neurologist'),
    t('connectDoctor.specialties.ophthalmologist'),
    t('connectDoctor.specialties.entSpecialist')
  ];

  const getLocalizedSpecialty = (specialty: string): string => {
    const specialtyMap: { [key: string]: string } = {
      'All': t('connectDoctor.specialties.all'),
      'General Physician': t('connectDoctor.specialties.generalPhysician'),
      'Cardiologist': t('connectDoctor.specialties.cardiologist'),
      'Dermatologist': t('connectDoctor.specialties.dermatologist'),
      'Pediatrician': t('connectDoctor.specialties.pediatrician'),
      'Orthopedic': t('connectDoctor.specialties.orthopedic'),
      'Gynecologist': t('connectDoctor.specialties.gynecologist'),
      'Psychiatrist': t('connectDoctor.specialties.psychiatrist'),
      'Dentist': t('connectDoctor.specialties.dentist'),
      'Neurologist': t('connectDoctor.specialties.neurologist'),
      'Ophthalmologist': t('connectDoctor.specialties.ophthalmologist'),
      'ENT Specialist': t('connectDoctor.specialties.entSpecialist')
    };
    return specialtyMap[specialty] || specialty;
  };

  const doctors: Doctor[] = [
    {
      id: 1,
      name: t('connectDoctor.doctors.rajeshKumar.name'),
      specialty: 'General Physician',
      experience: '15 years',
      rating: 4.8,
      reviews: 234,
      availability: 'Available Today',
      languages: ['English', 'Hindi', 'Tamil'],
      consultationFee: '₹500',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face',
      location: t('connectDoctor.doctors.rajeshKumar.location'),
      distance: '2.5 km',
      isNearby: true,
      education: t('connectDoctor.doctors.rajeshKumar.education'),
      about: t('connectDoctor.doctors.rajeshKumar.about'),
      timeSlots: ['9:00 AM', '10:30 AM', '2:00 PM', '4:30 PM', '6:00 PM']
    },
    {
      id: 2,
      name: t('connectDoctor.doctors.priyaSharma.name'),
      specialty: 'Cardiologist',
      experience: '12 years',
      rating: 4.9,
      reviews: 189,
      availability: 'Available Today',
      languages: ['English', 'Hindi'],
      consultationFee: '₹800',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
      location: t('connectDoctor.doctors.priyaSharma.location'),
      distance: '1.8 km',
      isNearby: true,
      education: t('connectDoctor.doctors.priyaSharma.education'),
      about: t('connectDoctor.doctors.priyaSharma.about'),
      timeSlots: ['10:00 AM', '11:30 AM', '3:00 PM', '5:00 PM']
    },
    {
      id: 3,
      name: t('connectDoctor.doctors.amitPatel.name'),
      specialty: 'Dermatologist',
      experience: '10 years',
      rating: 4.7,
      reviews: 156,
      availability: 'Available Tomorrow',
      languages: ['English', 'Hindi', 'Gujarati'],
      consultationFee: '₹600',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face',
      location: t('connectDoctor.doctors.amitPatel.location'),
      distance: '3.2 km',
      isNearby: true,
      education: t('connectDoctor.doctors.amitPatel.education'),
      about: t('connectDoctor.doctors.amitPatel.about'),
      timeSlots: ['9:30 AM', '11:00 AM', '2:30 PM', '4:00 PM', '5:30 PM']
    },
    {
      id: 4,
      name: t('connectDoctor.doctors.snehaReddy.name'),
      specialty: 'Pediatrician',
      experience: '8 years',
      rating: 4.9,
      reviews: 278,
      availability: 'Available Today',
      languages: ['English', 'Telugu', 'Hindi'],
      consultationFee: '₹550',
      image: 'https://images.unsplash.com/photo-1594824475317-d3c0b5b0c3b0?w=200&h=200&fit=crop&crop=face',
      location: t('connectDoctor.doctors.snehaReddy.location'),
      distance: '4.1 km',
      isNearby: false,
      education: t('connectDoctor.doctors.snehaReddy.education'),
      about: t('connectDoctor.doctors.snehaReddy.about'),
      timeSlots: ['9:00 AM', '10:00 AM', '11:00 AM', '3:00 PM', '4:00 PM', '5:00 PM']
    },
    {
      id: 5,
      name: t('connectDoctor.doctors.arjunSingh.name'),
      specialty: 'Orthopedic',
      experience: '18 years',
      rating: 4.8,
      reviews: 312,
      availability: 'Available Today',
      languages: ['English', 'Hindi', 'Punjabi'],
      consultationFee: '₹900',
      image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=200&h=200&fit=crop&crop=face',
      location: t('connectDoctor.doctors.arjunSingh.location'),
      distance: '5.7 km',
      isNearby: false,
      education: t('connectDoctor.doctors.arjunSingh.education'),
      about: t('connectDoctor.doctors.arjunSingh.about'),
      timeSlots: ['8:00 AM', '10:00 AM', '2:00 PM', '4:00 PM']
    },
    {
      id: 6,
      name: t('connectDoctor.doctors.kavitaMenon.name'),
      specialty: 'Gynecologist',
      experience: '14 years',
      rating: 4.9,
      reviews: 245,
      availability: 'Available Tomorrow',
      languages: ['English', 'Hindi', 'Malayalam'],
      consultationFee: '₹700',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=200&h=200&fit=crop&crop=face',
      location: t('connectDoctor.doctors.kavitaMenon.location'),
      distance: '2.9 km',
      isNearby: true,
      education: t('connectDoctor.doctors.kavitaMenon.education'),
      about: t('connectDoctor.doctors.kavitaMenon.about'),
      timeSlots: ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM', '6:00 PM']
    },
    {
      id: 7,
      name: t('connectDoctor.doctors.vikramJoshi.name'),
      specialty: 'Psychiatrist',
      experience: '16 years',
      rating: 4.6,
      reviews: 198,
      availability: 'Available Today',
      languages: ['English', 'Hindi', 'Marathi'],
      consultationFee: '₹750',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop&crop=face',
      location: t('connectDoctor.doctors.vikramJoshi.location'),
      distance: '3.8 km',
      isNearby: false,
      education: t('connectDoctor.doctors.vikramJoshi.education'),
      about: t('connectDoctor.doctors.vikramJoshi.about'),
      timeSlots: ['10:00 AM', '12:00 PM', '3:00 PM', '5:00 PM', '7:00 PM']
    },
    {
      id: 8,
      name: t('connectDoctor.doctors.meeraAgarwal.name'),
      specialty: 'Dentist',
      experience: '11 years',
      rating: 4.8,
      reviews: 167,
      availability: 'Available Today',
      languages: ['English', 'Hindi'],
      consultationFee: '₹400',
      image: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=200&h=200&fit=crop&crop=face',
      location: t('connectDoctor.doctors.meeraAgarwal.location'),
      distance: '1.2 km',
      isNearby: true,
      education: t('connectDoctor.doctors.meeraAgarwal.education'),
      about: t('connectDoctor.doctors.meeraAgarwal.about'),
      timeSlots: ['9:00 AM', '10:30 AM', '12:00 PM', '2:30 PM', '4:00 PM', '5:30 PM']
    },
    {
      id: 9,
      name: t('connectDoctor.doctors.sureshNair.name'),
      specialty: 'Neurologist',
      experience: '20 years',
      rating: 4.9,
      reviews: 289,
      availability: 'Available Tomorrow',
      languages: ['English', 'Hindi', 'Malayalam'],
      consultationFee: '₹1000',
      image: 'https://images.unsplash.com/photo-1643297654416-05795d62e39c?w=200&h=200&fit=crop&crop=face',
      location: t('connectDoctor.doctors.sureshNair.location'),
      distance: '6.2 km',
      isNearby: false,
      education: t('connectDoctor.doctors.sureshNair.education'),
      about: t('connectDoctor.doctors.sureshNair.about'),
      timeSlots: ['8:30 AM', '10:00 AM', '2:00 PM', '4:30 PM']
    },
    {
      id: 10,
      name: t('connectDoctor.doctors.anitaRoy.name'),
      specialty: 'Ophthalmologist',
      experience: '13 years',
      rating: 4.7,
      reviews: 203,
      availability: 'Available Today',
      languages: ['English', 'Hindi', 'Bengali'],
      consultationFee: '₹650',
      image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=200&h=200&fit=crop&crop=face',
      location: t('connectDoctor.doctors.anitaRoy.location'),
      distance: '4.5 km',
      isNearby: false,
      education: t('connectDoctor.doctors.anitaRoy.education'),
      about: t('connectDoctor.doctors.anitaRoy.about'),
      timeSlots: ['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM']
    },
    {
      id: 11,
      name: t('connectDoctor.doctors.rohitGupta.name'),
      specialty: 'ENT Specialist',
      experience: '9 years',
      rating: 4.6,
      reviews: 142,
      availability: 'Available Today',
      languages: ['English', 'Hindi'],
      consultationFee: '₹550',
      image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=200&h=200&fit=crop&crop=face',
      location: t('connectDoctor.doctors.rohitGupta.location'),
      distance: '2.1 km',
      isNearby: true,
      education: t('connectDoctor.doctors.rohitGupta.education'),
      about: t('connectDoctor.doctors.rohitGupta.about'),
      timeSlots: ['9:30 AM', '11:30 AM', '2:00 PM', '4:00 PM', '6:00 PM']
    },
    {
      id: 12,
      name: t('connectDoctor.doctors.deepikaIyer.name'),
      specialty: 'General Physician',
      experience: '7 years',
      rating: 4.5,
      reviews: 118,
      availability: 'Available Today',
      languages: ['English', 'Hindi', 'Tamil'],
      consultationFee: '₹450',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face',
      location: t('connectDoctor.doctors.deepikaIyer.location'),
      distance: '3.7 km',
      isNearby: false,
      education: t('connectDoctor.doctors.deepikaIyer.education'),
      about: t('connectDoctor.doctors.deepikaIyer.about'),
      timeSlots: ['8:00 AM', '10:00 AM', '12:00 PM', '3:00 PM', '5:00 PM', '7:00 PM']
    }
  ];

  const getLocalizedAvailability = (availability: string): string => {
    if (availability.includes('Today')) {
      return t('connectDoctor.doctorCard.availableToday');
    } else if (availability.includes('Tomorrow')) {
      return t('connectDoctor.doctorCard.availableTomorrow');
    }
    return availability;
  };

  const getLocalizedLanguages = (languages: string[]): string[] => {
    const languageMap: { [key: string]: string } = {
      'English': t('connectDoctor.languages.english'),
      'Hindi': t('connectDoctor.languages.hindi'),
      'Tamil': t('connectDoctor.languages.tamil'),
      'Telugu': t('connectDoctor.languages.telugu'),
      'Bengali': t('connectDoctor.languages.bengali'),
      'Marathi': t('connectDoctor.languages.marathi'),
      'Gujarati': t('connectDoctor.languages.gujarati'),
      'Kannada': t('connectDoctor.languages.kannada'),
      'Malayalam': t('connectDoctor.languages.malayalam'),
      'Punjabi': t('connectDoctor.languages.punjabi'),
      'Odia': t('connectDoctor.languages.odia'),
      'Assamese': t('connectDoctor.languages.assamese')
    };
    return languages.map(lang => languageMap[lang] || lang);
  };

  const getCurrentLocation = () => {
    setLocation(prev => ({ ...prev, loading: true, error: null }));
    
    if (!navigator.geolocation) {
      setLocation(prev => ({ 
        ...prev, 
        loading: false, 
        error: t('connectDoctor.locationErrors.notSupported')
      }));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          loading: false,
          error: null
        });
        setShowNearbyOnly(true);
      },
      (error) => {
        let errorMessage = t('connectDoctor.locationErrors.unknown');
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = t('connectDoctor.locationErrors.denied');
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = t('connectDoctor.locationErrors.unavailable');
            break;
          case error.TIMEOUT:
            errorMessage = t('connectDoctor.locationErrors.timeout');
            break;
        }
        setLocation(prev => ({ 
          ...prev, 
          loading: false, 
          error: errorMessage 
        }));
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000 // 5 minutes
      }
    );
  };

  // Open Google Maps to find nearby doctors
  const findNearbyDoctors = () => {
    // Map selected translated specialty back to English for Google Maps search
    const englishSpecialtyMap: { [key: string]: string } = {
      [t('connectDoctor.specialties.all')]: 'All',
      [t('connectDoctor.specialties.generalPhysician')]: 'General Physician',
      [t('connectDoctor.specialties.cardiologist')]: 'Cardiologist',
      [t('connectDoctor.specialties.dermatologist')]: 'Dermatologist',
      [t('connectDoctor.specialties.pediatrician')]: 'Pediatrician',
      [t('connectDoctor.specialties.orthopedic')]: 'Orthopedic',
      [t('connectDoctor.specialties.gynecologist')]: 'Gynecologist',
      [t('connectDoctor.specialties.psychiatrist')]: 'Psychiatrist',
      [t('connectDoctor.specialties.dentist')]: 'Dentist',
      [t('connectDoctor.specialties.neurologist')]: 'Neurologist',
      [t('connectDoctor.specialties.ophthalmologist')]: 'Ophthalmologist',
      [t('connectDoctor.specialties.entSpecialist')]: 'ENT Specialist'
    };
    
    const englishSpecialty = englishSpecialtyMap[selectedSpecialty] || selectedSpecialty;
    const query = englishSpecialty === 'All' ? 'doctors near me' : `${englishSpecialty} near me`;
    const googleMapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(query)}`;
    window.open(googleMapsUrl, '_blank');
  };

  // Handle view profile
  const handleViewProfile = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsProfileModalOpen(true);
  };

  // Handle book appointment from profile
  const handleBookAppointmentFromProfile = (doctor: Doctor) => {
    // Check if user is logged in
    if (!user) {
      alert('Please log in to book an appointment. You will be redirected to the login page.');
      setIsProfileModalOpen(false);
      window.location.href = '/';
      return;
    }
    
    setIsProfileModalOpen(false);
    setSelectedDoctor(doctor);
    setIsBookingModalOpen(true);
  };

  // Handle direct book appointment
  const handleBookAppointment = (doctor: Doctor) => {
    // Check if user is logged in
    if (!user) {
      alert('Please log in to book an appointment. You will be redirected to the login page.');
      window.location.href = '/';
      return;
    }
    
    setSelectedDoctor(doctor);
    setIsBookingModalOpen(true);
  };

  // Handle booking confirmation
  const handleBookingConfirm = (bookingData: BookingData) => {
    // Check if user is logged in
    if (!user) {
      alert('Please log in to book an appointment. You will be redirected to the login page.');
      setIsBookingModalOpen(false);
      setSelectedDoctor(null);
      // Redirect to home/login page
      window.location.href = '/';
      return;
    }

    // Save appointment to database
    const appointment = appointmentService.createAppointment(user.id, {
      patientName: bookingData.patientName,
      patientPhone: bookingData.patientPhone,
      doctor: {
        id: bookingData.doctor.id,
        name: bookingData.doctor.name,
        specialty: bookingData.doctor.specialty,
        image: bookingData.doctor.image,
        consultationFee: bookingData.doctor.consultationFee,
        location: bookingData.doctor.location
      },
      appointmentDate: bookingData.selectedDate,
      appointmentTime: bookingData.selectedTime,
      reason: bookingData.reason,
      consultationMode: bookingData.consultationMode // NEW: Save consultation mode
    });

    console.log('Appointment saved:', appointment);
    
    const successMessage = t('connectDoctor.bookingModal.bookingSuccess')
      .replace('{doctorName}', bookingData.doctor.name)
      .replace('{date}', bookingData.selectedDate)
      .replace('{time}', bookingData.selectedTime);
    alert(successMessage + '\n\nYou can view your appointment at: /appointments');
    
    setIsBookingModalOpen(false);
    setSelectedDoctor(null);
  };

  const filteredDoctors = doctors.filter(doctor => {
    // Map selected translated specialty back to English for filtering
    const englishSpecialtyMap: { [key: string]: string } = {
      [t('connectDoctor.specialties.all')]: 'All',
      [t('connectDoctor.specialties.generalPhysician')]: 'General Physician',
      [t('connectDoctor.specialties.cardiologist')]: 'Cardiologist',
      [t('connectDoctor.specialties.dermatologist')]: 'Dermatologist',
      [t('connectDoctor.specialties.pediatrician')]: 'Pediatrician',
      [t('connectDoctor.specialties.orthopedic')]: 'Orthopedic',
      [t('connectDoctor.specialties.gynecologist')]: 'Gynecologist',
      [t('connectDoctor.specialties.psychiatrist')]: 'Psychiatrist',
      [t('connectDoctor.specialties.dentist')]: 'Dentist',
      [t('connectDoctor.specialties.neurologist')]: 'Neurologist',
      [t('connectDoctor.specialties.ophthalmologist')]: 'Ophthalmologist',
      [t('connectDoctor.specialties.entSpecialist')]: 'ENT Specialist'
    };
    
    const englishSpecialty = englishSpecialtyMap[selectedSpecialty] || selectedSpecialty;
    const matchesSpecialty = englishSpecialty === 'All' || doctor.specialty === englishSpecialty;
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesNearby = !showNearbyOnly || doctor.isNearby;
    return matchesSpecialty && matchesSearch && matchesNearby;
  });

  return (
    <div className="connect-doctor">
      {/* Header */}
      <div className="connect-header">
        <h1>{t('connectDoctor.title')}</h1>
        <p>{t('connectDoctor.subtitle')}</p>
      </div>

      {/* Search and Filter Section */}
      <div className="search-filter-section">
        <div className="search-container">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            placeholder={t('connectDoctor.search.placeholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Location and Nearby Options */}
        <div className="location-section">
          <div className="location-controls">
            <button 
              className={`location-btn ${location.loading ? 'loading' : ''}`}
              onClick={getCurrentLocation}
              disabled={location.loading}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {location.loading ? t('connectDoctor.search.gettingLocation') : t('connectDoctor.search.useLocation')}
            </button>
            
            <button className="nearby-btn" onClick={findNearbyDoctors}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {t('connectDoctor.search.findOnMaps')}
            </button>

            <label className="nearby-toggle">
              <input
                type="checkbox"
                checked={showNearbyOnly}
                onChange={(e) => setShowNearbyOnly(e.target.checked)}
              />
              <span className="toggle-slider"></span>
              <span className="toggle-label">{t('connectDoctor.search.showNearbyOnly')}</span>
            </label>
          </div>

          {location.error && (
            <div className="location-error">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              {location.error}
            </div>
          )}
        </div>

        <div className="specialty-filters">
          {specialties.map((specialty) => (
            <button
              key={specialty}
              className={`filter-btn ${selectedSpecialty === specialty ? 'active' : ''}`}
              onClick={() => setSelectedSpecialty(specialty)}
            >
              {getLocalizedSpecialty(specialty)}
            </button>
          ))}
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="doctors-grid">
        {filteredDoctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card-new">
            {/* Top Section: Avatar + Badges */}
            <div className="card-top">
              <div className="doctor-avatar-new">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) {
                      fallback.style.display = 'flex';
                      fallback.textContent = doctor.name.split(' ').map(n => n[0]).join('');
                    }
                  }}
                />
                <span className="avatar-fallback-new"></span>
              </div>
              
              <div className="card-badges-new">
                <div className={`availability-badge-new ${doctor.availability.includes('Today') ? 'available' : 'tomorrow'}`}>
                  {getLocalizedAvailability(doctor.availability)}
                </div>
                {doctor.isNearby && (
                  <div className="nearby-badge-new">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {t('connectDoctor.doctorCard.nearby')}
                  </div>
                )}
              </div>
            </div>

            {/* Doctor Info */}
            <div className="doctor-info-new">
              <h3 className="doctor-name-new">{doctor.name}</h3>
              <div className="specialty-badge-new">{getLocalizedSpecialty(doctor.specialty)}</div>
              
              {/* Location + Distance */}
              {doctor.location && (
                <div className="location-row-new">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>{doctor.location}</span>
                  {doctor.distance && <span className="distance-new">• {tWithNumbers(doctor.distance)}</span>}
                </div>
              )}

              {/* Experience */}
              <div className="experience-row-new">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>{localizeNumber(doctor.experience.split(' ')[0], currentLanguage)} {t('connectDoctor.doctorCard.years')} {t('connectDoctor.doctorCard.experience')}</span>
              </div>

              {/* Rating */}
              <div className="rating-row-new">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <span className="rating-value-new">{localizeNumber(doctor.rating.toString(), currentLanguage)}</span>
                <span className="reviews-new">({localizeNumber(doctor.reviews.toString(), currentLanguage)} {t('connectDoctor.doctorCard.reviews')})</span>
              </div>

              {/* Languages */}
              <div className="languages-row-new">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                </svg>
                <span>{getLocalizedLanguages(doctor.languages).join(', ')}</span>
              </div>

              {/* Consultation Fee */}
              <div className="consultation-fee-new">
                <span className="fee-label-new">{t('connectDoctor.doctorCard.consultationFee')}</span>
                <span className="fee-amount-new">{tWithNumbers(doctor.consultationFee)}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="doctor-actions-new">
              <button 
                className="btn-book-new"
                onClick={() => handleBookAppointment(doctor)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                {t('connectDoctor.doctorCard.bookAppointment')}
              </button>
              <button 
                className="btn-view-profile"
                onClick={() => handleViewProfile(doctor)}
              >
                {t('connectDoctor.doctorCard.viewProfile')}
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <div className="no-results">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <h3>{t('connectDoctor.noResults.title')}</h3>
          <p>{t('connectDoctor.noResults.description')}</p>
        </div>
      )}

      {/* Modals */}
      <ProfileModal
        doctor={selectedDoctor}
        isOpen={isProfileModalOpen}
        onClose={() => {
          setIsProfileModalOpen(false);
          setSelectedDoctor(null);
        }}
        onBookAppointment={handleBookAppointmentFromProfile}
      />

      <BookingModal
        doctor={selectedDoctor}
        isOpen={isBookingModalOpen}
        onClose={() => {
          setIsBookingModalOpen(false);
          setSelectedDoctor(null);
        }}
        onConfirm={handleBookingConfirm}
      />
    </div>
  );
};

export default ConnectDoctor;