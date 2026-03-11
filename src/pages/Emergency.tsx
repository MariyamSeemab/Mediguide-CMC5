import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { localizeNumber } from '../utils/numberLocalization';
import './Emergency.css';

// Fix Leaflet default marker icon issue
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = icon;

interface EmergencyRequest {
  pickupLocation: string;
  patientName: string;
  contactNumber: string;
  emergencyType: string;
}

interface LocationCoords {
  lat: number;
  lng: number;
}

// Custom icons
const userIcon = L.icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#3b82f6" stroke="white" stroke-width="2"/>
      <circle cx="12" cy="12" r="4" fill="white"/>
    </svg>
  `),
  iconSize: [30, 30],
  iconAnchor: [15, 15],
  popupAnchor: [0, -15],
});

const ambulanceIcon = L.icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
      <rect x="2" y="6" width="14" height="10" fill="#ef4444" rx="1"/>
      <polygon points="16 9 19 9 21 11 21 16 16 16" fill="#dc2626"/>
      <circle cx="6" cy="17" r="1.5" fill="#1f2937"/>
      <circle cx="17" cy="17" r="1.5" fill="#1f2937"/>
      <text x="7" y="13" fill="white" font-size="6" font-weight="bold">108</text>
    </svg>
  `),
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  popupAnchor: [0, -20],
});

// Component to recenter map
function RecenterMap({ center }: { center: LocationCoords }) {
  const map = useMap();
  useEffect(() => {
    map.setView([center.lat, center.lng], map.getZoom());
  }, [center, map]);
  return null;
}

const Emergency: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const { t, currentLanguage } = useLanguage();
  
  const [formData, setFormData] = useState<EmergencyRequest>({
    pickupLocation: '',
    patientName: user?.name || '',
    contactNumber: '',
    emergencyType: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [requestId, setRequestId] = useState('');
  
  // Location states
  const [userLocation, setUserLocation] = useState<LocationCoords | null>(null);
  const [ambulanceLocation, setAmbulanceLocation] = useState<LocationCoords | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [locationError, setLocationError] = useState<string>('');
  const [showMap, setShowMap] = useState(false);
  const [useGPS, setUseGPS] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [routePath, setRoutePath] = useState<[number, number][]>([]);
  
  // Refs
  const ambulanceIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const routeIndexRef = useRef<number>(0);

  // Get user's current location with live tracking option
  const getUserLocation = (enableWatchPosition = false) => {
    console.log('🎯 getUserLocation called, watch:', enableWatchPosition);
    setIsLoadingLocation(true);
    setLocationError('');
    
    if (!navigator.geolocation) {
      console.error('❌ Geolocation not supported');
      setLocationError(t('emergency.location.notSupported') || 'Geolocation is not supported');
      setIsLoadingLocation(false);
      return;
    }

    const successCallback = async (position: GeolocationPosition) => {
      console.log('✅ Location received:', position.coords);
      console.log('📊 Accuracy:', position.coords.accuracy, 'meters');
      console.log('⏰ Timestamp:', new Date(position.timestamp).toLocaleTimeString());
      
      const coords: LocationCoords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      
      console.log('📌 Setting user location:', coords);
      setUserLocation(coords);
      setShowMap(true);
      
      // Reverse geocode using Nominatim (OpenStreetMap)
      try {
        console.log('🔍 Reverse geocoding with Nominatim...');
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}&addressdetails=1`,
          {
            headers: {
              'Accept-Language': 'en',
              'User-Agent': 'MediGuide Emergency App'
            }
          }
        );
        
        if (response.ok) {
          const data = await response.json();
          const address = data.display_name;
          console.log('📍 Address found:', address);
          setFormData(prev => ({
            ...prev,
            pickupLocation: address
          }));
        } else {
          setFormData(prev => ({
            ...prev,
            pickupLocation: `${coords.lat.toFixed(6)}, ${coords.lng.toFixed(6)}`
          }));
        }
      } catch (error) {
        console.error('❌ Reverse geocoding error:', error);
        setFormData(prev => ({
          ...prev,
          pickupLocation: `${coords.lat.toFixed(6)}, ${coords.lng.toFixed(6)}`
        }));
      }
      
      setIsLoadingLocation(false);
    };

    const errorCallback = (error: GeolocationPositionError) => {
      console.error('❌ Geolocation error:', error);
      console.error('Error code:', error.code);
      console.error('Error message:', error.message);
      let errorMessage = t('emergency.location.error') || 'Unable to get location';
      
      switch (error.code) {
        case error.PERMISSION_DENIED:
          errorMessage = 'Location permission denied. Please allow location access in your browser settings.';
          console.error('🚫 Permission denied by user');
          break;
        case error.POSITION_UNAVAILABLE:
          errorMessage = 'Location unavailable. Please check your device GPS settings.';
          console.error('📍 Position unavailable');
          break;
        case error.TIMEOUT:
          errorMessage = 'Location request timeout. Please try again.';
          console.error('⏱️ Request timeout');
          break;
      }
      
      setLocationError(errorMessage);
      setIsLoadingLocation(false);
    };

    const options: PositionOptions = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    };

    console.log('📍 Requesting geolocation...');
    
    if (enableWatchPosition) {
      // Continuous tracking
      console.log('👁️ Starting continuous location tracking...');
      const watchId = navigator.geolocation.watchPosition(
        successCallback,
        errorCallback,
        options
      );
      // Store watchId if you want to stop tracking later
      return watchId;
    } else {
      // One-time location
      navigator.geolocation.getCurrentPosition(
        successCallback,
        errorCallback,
        options
      );
    }
  };

  // Search for address using Nominatim (OpenStreetMap Geocoding)
  const searchAddress = async (address: string) => {
    if (!address || address.length < 3) {
      console.log('❌ Address too short:', address);
      setLocationError('Please enter at least 3 characters');
      return;
    }
    
    setIsSearching(true);
    setLocationError('');
    
    try {
      console.log('🔍 Searching address with Nominatim:', address);
      
      // Try full address first
      let url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1&addressdetails=1`;
      console.log('📡 Request URL:', url);
      
      let response = await fetch(url, {
        headers: {
          'Accept-Language': 'en',
          'User-Agent': 'MediGuide Emergency App'
        }
      });
      
      console.log('📥 Response status:', response.status);
      
      if (response.ok) {
        let data = await response.json();
        console.log('📦 Response data:', data);
        
        // If no results, try simplified address
        if (!data || data.length === 0) {
          console.log('⚠️ No results for full address, trying simplified version...');
          
          // Extract city and state from address
          const parts = address.split(',').map(p => p.trim());
          const simplifiedAddresses = [];
          
          // Try different combinations
          if (parts.length >= 2) {
            // Try last 2 parts (usually city, state)
            simplifiedAddresses.push(parts.slice(-2).join(', '));
            // Try last 3 parts
            if (parts.length >= 3) {
              simplifiedAddresses.push(parts.slice(-3).join(', '));
            }
            // Try area + city
            if (parts.length >= 4) {
              simplifiedAddresses.push(`${parts[parts.length-3]}, ${parts[parts.length-2]}`);
            }
          }
          
          // Try each simplified address
          for (const simplified of simplifiedAddresses) {
            console.log('🔄 Trying simplified address:', simplified);
            url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(simplified)}&limit=1&addressdetails=1`;
            
            response = await fetch(url, {
              headers: {
                'Accept-Language': 'en',
                'User-Agent': 'MediGuide Emergency App'
              }
            });
            
            if (response.ok) {
              data = await response.json();
              if (data && data.length > 0) {
                console.log('✅ Found with simplified address:', simplified);
                break;
              }
            }
            
            // Wait 1 second between requests (Nominatim rate limit)
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        }
        
        if (data && data.length > 0) {
          const result = data[0];
          const coords: LocationCoords = {
            lat: parseFloat(result.lat),
            lng: parseFloat(result.lon)
          };
          
          console.log('✅ Location found:', coords);
          console.log('📍 Address:', result.display_name);
          
          setUserLocation(coords);
          setShowMap(true);
          setFormData(prev => ({
            ...prev,
            pickupLocation: result.display_name
          }));
          setLocationError('');
        } else {
          console.log('❌ No results found');
          setLocationError('Address not found. Try: "Area name, City" (e.g., "Byculla, Mumbai")');
        }
      } else {
        console.error('❌ Response not OK:', response.status, response.statusText);
        setLocationError(t('emergency.location.searchError') || 'Error searching address');
      }
    } catch (error) {
      console.error('❌ Geocoding error:', error);
      setLocationError('Error searching address. Please check your internet connection.');
    } finally {
      setIsSearching(false);
    }
  };

  // Find nearest hospital using Overpass API (OpenStreetMap)
  const findNearestHospital = async (userCoords: LocationCoords): Promise<LocationCoords | null> => {
    try {
      console.log('🏥 Finding nearest hospital to:', userCoords);
      
      // Search radius: 2km (reduced from 5km for closer hospitals)
      const radius = 2000;
      
      // Overpass API query to find hospitals
      const query = `
        [out:json];
        (
          node["amenity"="hospital"](around:${radius},${userCoords.lat},${userCoords.lng});
          way["amenity"="hospital"](around:${radius},${userCoords.lat},${userCoords.lng});
        );
        out center 1;
      `;
      
      const response = await fetch('https://overpass-api.de/api/interpreter', {
        method: 'POST',
        body: query
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('🏥 Hospital search results:', data);
        
        if (data.elements && data.elements.length > 0) {
          const hospital = data.elements[0];
          const hospitalCoords: LocationCoords = {
            lat: hospital.lat || hospital.center?.lat,
            lng: hospital.lon || hospital.center?.lon
          };
          
          const hospitalName = hospital.tags?.name || 'Nearby Hospital';
          console.log('✅ Found hospital:', hospitalName, hospitalCoords);
          
          // Calculate distance
          const distance = calculateDistance(userCoords, hospitalCoords);
          console.log('📏 Distance:', distance.toFixed(2), 'km');
          
          return hospitalCoords;
        } else {
          console.log('⚠️ No hospitals found within 2km, using fallback location');
          return null;
        }
      }
    } catch (error) {
      console.error('❌ Error finding hospital:', error);
    }
    return null;
  };

  // Calculate distance between two coordinates (in km)
  const calculateDistance = (coord1: LocationCoords, coord2: LocationCoords): number => {
    const R = 6371; // Earth's radius in km
    const dLat = (coord2.lat - coord1.lat) * Math.PI / 180;
    const dLng = (coord2.lng - coord1.lng) * Math.PI / 180;
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(coord1.lat * Math.PI / 180) * Math.cos(coord2.lat * Math.PI / 180) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };
  // Get route using OSRM (Open Source Routing Machine) - follows real roads
  const getRoute = async (start: LocationCoords, end: LocationCoords) => {
    try {
      console.log('🗺️ Getting route from OSRM...');
      const response = await fetch(
        `https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson`
      );
      
      if (response.ok) {
        const data = await response.json();
        
        if (data.routes && data.routes.length > 0) {
          const route = data.routes[0];
          const coordinates = route.geometry.coordinates;
          
          // Convert [lng, lat] to [lat, lng] for Leaflet
          const path: [number, number][] = coordinates.map((coord: number[]) => [coord[1], coord[0]]);
          
          // Calculate ETA
          const durationMinutes = Math.ceil(route.duration / 60);
          const distanceKm = (route.distance / 1000).toFixed(1);
          
          console.log('✅ Route found with', path.length, 'points');
          console.log('📏 Distance:', distanceKm, 'km');
          console.log('⏱️ ETA:', durationMinutes, 'minutes');
          
          setRoutePath(path);
          return path;
        }
      }
    } catch (error) {
      console.error('❌ Routing error:', error);
    }
    return [];
  };

  // Auto-fetch location on component mount (only if GPS mode)
  useEffect(() => {
    console.log('🚀 Emergency page mounted, useGPS:', useGPS);
    if (useGPS) {
      console.log('📍 Auto-fetching location...');
      getUserLocation();
    } else {
      console.log('✋ GPS mode disabled, skipping auto-fetch');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on mount

  // Simulate ambulance movement when request is confirmed
  useEffect(() => {
    if (showConfirmation && userLocation) {
      console.log('🚑 Starting ambulance dispatch...');
      
      // Find nearest hospital and start ambulance from there
      findNearestHospital(userLocation).then(hospitalLocation => {
        let initialAmbulanceLocation: LocationCoords;
        
        if (hospitalLocation) {
          // Start from nearest hospital
          initialAmbulanceLocation = hospitalLocation;
          console.log('🏥 Ambulance starting from nearest hospital:', hospitalLocation);
        } else {
          // Fallback: Start ambulance at a nearby location (simulated hospital ~500m away)
          initialAmbulanceLocation = {
            lat: userLocation.lat + 0.0045, // ~500m away (reduced from 1km)
            lng: userLocation.lng + 0.0035
          };
          console.log('⚠️ Using fallback location (no hospital found within 1km):', initialAmbulanceLocation);
        }
        
        setAmbulanceLocation(initialAmbulanceLocation);
        
        // Get route from ambulance to user (follows roads)
        getRoute(initialAmbulanceLocation, userLocation).then(route => {
          if (route.length > 0) {
            routeIndexRef.current = 0;
            
            // Move ambulance along the route
            ambulanceIntervalRef.current = setInterval(() => {
              routeIndexRef.current += 1;
              
              if (routeIndexRef.current < route.length) {
                const nextPoint = route[routeIndexRef.current];
                setAmbulanceLocation({
                  lat: nextPoint[0],
                  lng: nextPoint[1]
                });
              } else {
                // Reached destination
                console.log('✅ Ambulance arrived at destination!');
                if (ambulanceIntervalRef.current) {
                  clearInterval(ambulanceIntervalRef.current);
                }
              }
            }, 1000); // Move to next point every 1 second
          } else {
            // Fallback to straight line if routing fails
            console.log('⚠️ Routing failed, using straight line movement');
            ambulanceIntervalRef.current = setInterval(() => {
              setAmbulanceLocation(prev => {
                if (!prev || !userLocation) return prev;
                
                const latDiff = userLocation.lat - prev.lat;
                const lngDiff = userLocation.lng - prev.lng;
                const distance = Math.sqrt(latDiff * latDiff + lngDiff * lngDiff);
                
                if (distance < 0.001) {
                  console.log('✅ Ambulance arrived (straight line)!');
                  if (ambulanceIntervalRef.current) {
                    clearInterval(ambulanceIntervalRef.current);
                  }
                  return prev;
                }
                
                return {
                  lat: prev.lat + latDiff * 0.1,
                  lng: prev.lng + lngDiff * 0.1
                };
              });
            }, 2000);
          }
        });
      });
    }
    
    return () => {
      if (ambulanceIntervalRef.current) {
        clearInterval(ambulanceIntervalRef.current);
      }
    };
  }, [showConfirmation, userLocation]);

  const emergencyTypes = [
    { value: '', label: t('emergency.form.emergencyTypes.select') },
    { value: 'cardiac', label: `🫀 ${t('emergency.form.emergencyTypes.cardiac')}` },
    { value: 'accident', label: `🚗 ${t('emergency.form.emergencyTypes.accident')}` },
    { value: 'breathing', label: `🫁 ${t('emergency.form.emergencyTypes.breathing')}` },
    { value: 'stroke', label: `🧠 ${t('emergency.form.emergencyTypes.stroke')}` },
    { value: 'severe-pain', label: `⚡ ${t('emergency.form.emergencyTypes.severePain')}` },
    { value: 'bleeding', label: `🩸 ${t('emergency.form.emergencyTypes.bleeding')}` },
    { value: 'unconscious', label: `😵 ${t('emergency.form.emergencyTypes.unconscious')}` },
    { value: 'other', label: `🚨 ${t('emergency.form.emergencyTypes.other')}` }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.pickupLocation || !formData.patientName || !formData.contactNumber) {
      alert(t('emergency.form.validation.fillRequired'));
      return;
    }

    setIsSubmitting(true);

    // Calculate distance and ETA
    const distance = ambulanceLocation && userLocation 
      ? calculateDistance(ambulanceLocation, userLocation)
      : 5.0;
    const eta = Math.ceil(distance * 8); // Rough estimate: 8 min per km

    // Create emergency request
    const emergencyRequest = {
      id: `EMG-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
      patientName: formData.patientName,
      patientLocation: formData.pickupLocation,
      patientCoords: userLocation || { lat: 19.0760, lng: 72.8777 },
      contactNumber: formData.contactNumber,
      emergencyType: formData.emergencyType,
      distance,
      eta,
      status: 'pending' as const,
      timestamp: new Date().toISOString()
    };

    // Save to localStorage for ambulance dashboard
    const existingRequests = localStorage.getItem('emergency_requests');
    const requests = existingRequests ? JSON.parse(existingRequests) : [];
    requests.push(emergencyRequest);
    localStorage.setItem('emergency_requests', JSON.stringify(requests));

    // Simulate API call
    setTimeout(() => {
      setRequestId(emergencyRequest.id);
      setShowConfirmation(true);
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        pickupLocation: '',
        patientName: user?.name || '',
        contactNumber: '',
        emergencyType: ''
      });
    }, 1500);
  };

  const handleEmergencyCall = () => {
    window.location.href = `tel:${localizeNumber('108', currentLanguage)}`;
  };

  if (showConfirmation) {
    return (
      <div className="emergency-page">
        <div className="emergency-container">
          <div className="confirmation-card">
            <div className="confirmation-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            
            <h1>{t('emergency.confirmation.title')}</h1>
            <p className="confirmation-subtitle">{t('emergency.confirmation.subtitle')}</p>
            
            <div className="request-details">
              <div className="detail-item">
                <span className="detail-label">{t('emergency.confirmation.requestId')}:</span>
                <span className="detail-value">{requestId}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">{t('emergency.confirmation.status')}:</span>
                <span className="detail-value status-active">
                  <span className="status-pulse"></span>
                  {t('emergency.confirmation.dispatching')}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">{t('emergency.confirmation.estimatedArrival')}:</span>
                <span className="detail-value">{localizeNumber('8', currentLanguage)}-{localizeNumber('12', currentLanguage)} {t('emergency.confirmation.minutes')}</span>
              </div>
            </div>

            <div className="confirmation-message">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
              <p>
                {t('emergency.confirmation.message')}
              </p>
            </div>

            {/* Live Tracking Map */}
            {userLocation && (
              <div className="tracking-map-container">
                <div className="tracking-map-header">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  </svg>
                  <span>{t('emergency.location.liveTracking') || 'Live Ambulance Tracking'}</span>
                </div>
                <div className="map-wrapper">
                  <MapContainer
                    center={[ambulanceLocation?.lat || userLocation.lat, ambulanceLocation?.lng || userLocation.lng]}
                    zoom={14}
                    style={{ height: '400px', width: '100%', borderRadius: '12px' }}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    
                    {/* Recenter map on ambulance */}
                    {ambulanceLocation && <RecenterMap center={ambulanceLocation} />}
                    
                    {/* User Location Marker */}
                    <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
                      <Popup>{t('emergency.location.pickupPoint') || 'Pickup Point'}</Popup>
                    </Marker>
                    
                    {/* Ambulance Location Marker */}
                    {ambulanceLocation && (
                      <Marker position={[ambulanceLocation.lat, ambulanceLocation.lng]} icon={ambulanceIcon}>
                        <Popup>{t('emergency.location.ambulance') || 'Ambulance'} - {t('emergency.location.onTheWay') || 'On the way'}</Popup>
                      </Marker>
                    )}
                    
                    {/* Route showing ambulance path */}
                    {routePath.length > 0 && (
                      <Polyline
                        positions={routePath}
                        color="#ef4444"
                        weight={5}
                        opacity={0.8}
                      />
                    )}
                  </MapContainer>
                </div>
                <div className="tracking-info">
                  <div className="tracking-item">
                    <div className="tracking-icon user-marker">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    </div>
                    <span>{t('emergency.location.yourLocation') || 'Your Location'}</span>
                  </div>
                  <div className="tracking-item">
                    <div className="tracking-icon ambulance-marker">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="1" y="3" width="15" height="13"/>
                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                      </svg>
                    </div>
                    <span>{t('emergency.location.ambulance') || 'Ambulance'} - {t('emergency.location.onTheWay') || 'On the way'}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="confirmation-actions">
              <button className="btn-call-emergency" onClick={handleEmergencyCall}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                {t('emergency.confirmation.callEmergency')}: {localizeNumber('108', currentLanguage)}
              </button>
              
              <button 
                className="btn-secondary" 
                onClick={() => {
                  setShowConfirmation(false);
                  window.location.href = '/';
                }}
              >
                {t('emergency.confirmation.returnHome')}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="emergency-page">
      {/* Emergency Header */}
      <div className="emergency-header">
        <div className="emergency-header-content">
          <a href="/" className="back-button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </a>
          
          <div className="emergency-branding">
            <div className="emergency-icon-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <div>
              <h1>{t('emergency.header.title')}</h1>
              <p>{t('emergency.header.subtitle')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="emergency-container">
        <div className="emergency-content">
          {/* Quick Call Section */}
          <div className="quick-call-section">
            <div className="quick-call-card">
              <div className="quick-call-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div className="quick-call-content">
                <h3>{t('emergency.quickCall.title')}</h3>
                <p>{t('emergency.quickCall.subtitle')}</p>
              </div>
              <button className="btn-emergency-call" onClick={handleEmergencyCall}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                {t('emergency.quickCall.button')} {localizeNumber('108', currentLanguage)}
              </button>
            </div>
          </div>

          {/* Request Form */}
          <div className="emergency-form-section">
            <div className="form-header">
              <h2>{t('emergency.form.title')}</h2>
              <p>{t('emergency.form.subtitle')}</p>
            </div>

            <form className="emergency-form" onSubmit={handleSubmit}>
              {/* Pickup Location */}
              <div className="form-group">
                <label htmlFor="pickupLocation" className="required">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {t('emergency.form.pickupLocation')}
                </label>
                
                {/* Toggle between GPS and Manual */}
                <div className="location-mode-toggle">
                  <button
                    type="button"
                    className={`toggle-btn ${useGPS ? 'active' : ''}`}
                    onClick={() => {
                      setUseGPS(true);
                      getUserLocation();
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <circle cx="12" cy="12" r="3"/>
                      <line x1="12" y1="2" x2="12" y2="6"/>
                      <line x1="12" y1="18" x2="12" y2="22"/>
                      <line x1="2" y1="12" x2="6" y2="12"/>
                      <line x1="18" y1="12" x2="22" y2="12"/>
                    </svg>
                    {t('emergency.location.useGPS') || 'Use GPS'}
                  </button>
                  <button
                    type="button"
                    className={`toggle-btn ${!useGPS ? 'active' : ''}`}
                    onClick={() => setUseGPS(false)}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {t('emergency.location.enterManually') || 'Enter Manually'}
                  </button>
                </div>
                
                <div className="location-input-group">
                  <input
                    type="text"
                    id="pickupLocation"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleInputChange}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !useGPS && formData.pickupLocation) {
                        e.preventDefault();
                        searchAddress(formData.pickupLocation);
                      }
                    }}
                    onBlur={(e) => {
                      if (!useGPS && e.target.value) {
                        searchAddress(e.target.value);
                      }
                    }}
                    placeholder={useGPS ? t('emergency.form.pickupLocationPlaceholder') : t('emergency.location.enterAddress') || 'Enter your address'}
                    required
                    autoFocus
                    disabled={useGPS && isLoadingLocation}
                  />
                  {useGPS && (
                    <button
                      type="button"
                      className="btn-get-location"
                      onClick={getUserLocation}
                      disabled={isLoadingLocation}
                      title={t('emergency.location.refreshLocation') || 'Refresh location'}
                    >
                      {isLoadingLocation ? (
                        <span className="spinner-small"></span>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <circle cx="12" cy="12" r="3"/>
                          <line x1="12" y1="2" x2="12" y2="6"/>
                          <line x1="12" y1="18" x2="12" y2="22"/>
                          <line x1="2" y1="12" x2="6" y2="12"/>
                          <line x1="18" y1="12" x2="22" y2="12"/>
                        </svg>
                      )}
                    </button>
                  )}
                  {!useGPS && (
                    <button
                      type="button"
                      className="btn-search-location"
                      onClick={() => searchAddress(formData.pickupLocation)}
                      disabled={isSearching || !formData.pickupLocation}
                      title={t('emergency.location.searchAddress') || 'Search address'}
                    >
                      {isSearching ? (
                        <span className="spinner-small"></span>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="11" cy="11" r="8"/>
                          <path d="M21 21l-4.35-4.35"/>
                        </svg>
                      )}
                    </button>
                  )}
                </div>
                {locationError && (
                  <span className="field-error">{locationError}</span>
                )}
                <span className="field-hint">
                  {useGPS 
                    ? t('emergency.form.pickupLocationHint') 
                    : (t('emergency.location.manualHint') || 'Type address and press search or Enter')}
                </span>
              </div>

              {/* Live Location Map */}
              {showMap && userLocation && (
                <div className="map-container">
                  <div className="map-header">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>{t('emergency.location.yourLocation') || 'Your Location'}</span>
                  </div>
                  <div className="map-wrapper">
                    <MapContainer
                      center={[userLocation.lat, userLocation.lng]}
                      zoom={15}
                      style={{ height: '300px', width: '100%', borderRadius: '8px' }}
                    >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      
                      {/* User Location Marker */}
                      <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
                        <Popup>{t('emergency.location.yourLocation') || 'Your Location'}</Popup>
                      </Marker>
                    </MapContainer>
                  </div>
                  <div className="map-legend">
                    <div className="legend-item">
                      <div className="legend-icon user-icon"></div>
                      <span>{t('emergency.location.you') || 'You'}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Patient Name */}
              <div className="form-group">
                <label htmlFor="patientName" className="required">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  {t('emergency.form.patientName')}
                </label>
                <input
                  type="text"
                  id="patientName"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleInputChange}
                  placeholder={t('emergency.form.patientNamePlaceholder')}
                  required
                />
              </div>

              {/* Contact Number */}
              <div className="form-group">
                <label htmlFor="contactNumber" className="required">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                    <line x1="12" y1="18" x2="12.01" y2="18"/>
                  </svg>
                  {t('emergency.form.contactNumber')}
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  placeholder={t('emergency.form.contactNumberPlaceholder')}
                  pattern="[0-9]{10}"
                  required
                />
                <span className="field-hint">{t('emergency.form.contactNumberHint')}</span>
              </div>

              {/* Emergency Type */}
              <div className="form-group">
                <label htmlFor="emergencyType">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                  {t('emergency.form.emergencyType')}
                </label>
                <select
                  id="emergencyType"
                  name="emergencyType"
                  value={formData.emergencyType}
                  onChange={handleInputChange}
                >
                  {emergencyTypes.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                <span className="field-hint">{t('emergency.form.emergencyTypeHint')}</span>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="btn-request-ambulance"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    {t('emergency.form.requesting')}
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="1" y="3" width="15" height="13"/>
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                      <circle cx="5.5" cy="18.5" r="2.5"/>
                      <circle cx="18.5" cy="18.5" r="2.5"/>
                      <path d="M5 16h-4v-4l2-2h2"/>
                    </svg>
                    {t('emergency.form.requestButton')}
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Important Information */}
          <div className="emergency-info-section">
            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="16" x2="12" y2="12"/>
                  <line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
              </div>
              <div className="info-content">
                <h3>{t('emergency.info.whatToExpect.title')}</h3>
                <ul>
                  <li>{t('emergency.info.whatToExpect.point1')}</li>
                  <li>{t('emergency.info.whatToExpect.point2')}</li>
                  <li>{t('emergency.info.whatToExpect.point3')}</li>
                  <li>{t('emergency.info.whatToExpect.point4')}</li>
                </ul>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <div className="info-content">
                <h3>{t('emergency.info.beforeArrival.title')}</h3>
                <ul>
                  <li>{t('emergency.info.beforeArrival.point1')}</li>
                  <li>{t('emergency.info.beforeArrival.point2')}</li>
                  <li>{t('emergency.info.beforeArrival.point3')}</li>
                  <li>{t('emergency.info.beforeArrival.point4')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
