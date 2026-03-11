import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Signup.css';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const { register, isLoading, error } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '' as 'patient' | 'doctor' | 'ambulance' | 'lab' | '',
    // Doctor-specific fields
    specialization: '',
    education: '',
    experience: '',
    about: '',
    languages: '',
    location: '',
    consultationFee: '',
    availableSlots: '',
  });
  const [formError, setFormError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setFormError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    // Validation
    if (!formData.name.trim()) {
      setFormError('Please enter your name');
      return;
    }

    if (!formData.email.trim()) {
      setFormError('Please enter your email');
      return;
    }

    if (formData.password.length < 6) {
      setFormError('Password must be at least 6 characters');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setFormError('Passwords do not match');
      return;
    }

    if (!formData.role) {
      setFormError('Please select your role');
      return;
    }

    // Doctor-specific validation
    if (formData.role === 'doctor') {
      if (!formData.specialization) {
        setFormError('Please select your specialization');
        return;
      }
      if (!formData.education.trim()) {
        setFormError('Please enter your education details');
        return;
      }
      if (!formData.experience) {
        setFormError('Please enter your years of experience');
        return;
      }
      if (!formData.consultationFee) {
        setFormError('Please enter your consultation fee');
        return;
      }
    }

    try {
      await register(formData.email, formData.password, formData.name, formData.role);
      
      // Save doctor profile if role is doctor
      if (formData.role === 'doctor') {
        const users = JSON.parse(localStorage.getItem('mediguide_users') || '[]');
        const userIndex = users.findIndex((u: any) => u.email === formData.email);
        if (userIndex !== -1) {
          users[userIndex].doctorProfile = {
            specialization: formData.specialization,
            education: formData.education,
            experience: formData.experience,
            about: formData.about,
            languages: formData.languages,
            location: formData.location,
            consultationFee: parseInt(formData.consultationFee),
            availableSlots: formData.availableSlots,
            rating: 4.8,
            profilePhoto: null,
          };
          localStorage.setItem('mediguide_users', JSON.stringify(users));
        }
      }
      
      // Auto-redirect based on role
      if (formData.role === 'doctor') {
        // Create doctor-specific route slug from email
        const doctorSlug = formData.email.split('@')[0].replace(/\./g, '-');
        navigate(`/doctor/dashboard/${doctorSlug}`);
      } else if (formData.role === 'ambulance') {
        navigate('/ambulance/dashboard'); // Ambulance dashboard
      } else if (formData.role === 'lab') {
        navigate('/lab-results'); // Lab dashboard
      } else {
        navigate('/'); // Patient goes to homepage
      }
    } catch {
      // Error is handled in AuthContext
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-header">
          <h1>Create Your MediGuide Account</h1>
          <p>Join thousands of users getting trusted health guidance</p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          {(error || formError) && (
            <div className="error-message">{error || formError}</div>
          )}

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              disabled={isLoading}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Register As</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              disabled={isLoading}
              required
            >
              <option value="">Select your role</option>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="ambulance">Ambulance Responder</option>
              <option value="lab">Lab Technician</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              disabled={isLoading}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password (min 6 characters)"
              disabled={isLoading}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              disabled={isLoading}
              required
            />
          </div>

          {/* Doctor-Specific Fields */}
          {formData.role === 'doctor' && (
            <div className="doctor-fields">
              <div className="form-section-title">Professional Details</div>
              
              <div className="form-group">
                <label htmlFor="specialization">Medical Specialization *</label>
                <select
                  id="specialization"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  disabled={isLoading}
                  required
                >
                  <option value="">Select Specialization</option>
                  <option value="general">General Physician</option>
                  <option value="cardiologist">Cardiologist</option>
                  <option value="dermatologist">Dermatologist</option>
                  <option value="pediatrician">Pediatrician</option>
                  <option value="orthopedic">Orthopedic</option>
                  <option value="gynecologist">Gynecologist</option>
                  <option value="neurologist">Neurologist</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="education">Education *</label>
                <input
                  type="text"
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  placeholder="e.g., MBBS, MD"
                  disabled={isLoading}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="experience">Experience (Years) *</label>
                <input
                  type="number"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Years of experience"
                  min="0"
                  disabled={isLoading}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="about">About Doctor</label>
                <textarea
                  id="about"
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  placeholder="Brief description about yourself and your practice"
                  rows={3}
                  disabled={isLoading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="languages">Languages Spoken</label>
                <input
                  type="text"
                  id="languages"
                  name="languages"
                  value={formData.languages}
                  onChange={handleChange}
                  placeholder="e.g., English, Hindi, Tamil"
                  disabled={isLoading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="location">Clinic / Hospital Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g., Mumbai, Maharashtra"
                  disabled={isLoading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="consultationFee">Consultation Fee (₹) *</label>
                <input
                  type="number"
                  id="consultationFee"
                  name="consultationFee"
                  value={formData.consultationFee}
                  onChange={handleChange}
                  placeholder="e.g., 500"
                  min="0"
                  disabled={isLoading}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="availableSlots">Available Time Slots</label>
                <input
                  type="text"
                  id="availableSlots"
                  name="availableSlots"
                  value={formData.availableSlots}
                  onChange={handleChange}
                  placeholder="e.g., Mon-Fri: 9 AM - 5 PM"
                  disabled={isLoading}
                />
              </div>
            </div>
          )}

          <button type="submit" className="btn btn-primary" disabled={isLoading}>
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <div className="signup-footer">
          <p>
            Already have an account?{' '}
            <a href="/" className="login-link">
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
