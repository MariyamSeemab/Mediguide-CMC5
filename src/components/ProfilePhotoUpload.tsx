import React, { useState, useRef } from 'react';
import './ProfilePhotoUpload.css';

interface ProfilePhotoUploadProps {
  currentPhoto: string | null;
  onPhotoUpdate: (photoData: string | null) => void;
  userName: string;
}

const ProfilePhotoUpload: React.FC<ProfilePhotoUploadProps> = ({ 
  currentPhoto, 
  onPhotoUpdate,
  userName 
}) => {
  const [preview, setPreview] = useState<string | null>(currentPhoto);
  const [error, setError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file (JPG, PNG, GIF)');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image size must be less than 5MB');
      return;
    }

    setError('');

    // Read file and convert to base64
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setPreview(base64String);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = () => {
    if (preview) {
      onPhotoUpdate(preview);
      alert('Profile photo updated successfully!');
    }
  };

  const handleRemove = () => {
    if (confirm('Are you sure you want to remove your profile photo?')) {
      setPreview(null);
      onPhotoUpdate(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleSelectClick = () => {
    fileInputRef.current?.click();
  };

  const getInitials = () => {
    return userName.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="profile-photo-upload">
      <div className="photo-preview-section">
        <div className="photo-preview-large">
          {preview ? (
            <img src={preview} alt="Profile" />
          ) : (
            <div className="photo-placeholder">
              {getInitials()}
            </div>
          )}
        </div>
        <div className="photo-info">
          <h4>Profile Photo</h4>
          <p>Upload a professional photo (Max 5MB, JPG/PNG/GIF)</p>
        </div>
      </div>

      {error && (
        <div className="photo-error">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          {error}
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />

      <div className="photo-actions">
        <button className="btn-photo-select" onClick={handleSelectClick}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="17 8 12 3 7 8"/>
            <line x1="12" y1="3" x2="12" y2="15"/>
          </svg>
          Select Photo
        </button>
        
        {preview && preview !== currentPhoto && (
          <button className="btn-photo-upload" onClick={handleUpload}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Save Photo
          </button>
        )}
        
        {(preview || currentPhoto) && (
          <button className="btn-photo-remove" onClick={handleRemove}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="3 6 5 6 21 6"/>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
            </svg>
            Remove Photo
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfilePhotoUpload;
