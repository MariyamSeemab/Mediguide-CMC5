import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import './AmbulanceDashboard.css';
import 'leaflet/dist/leaflet.css';

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

interface LocationCoords {
  lat: number;
  lng: number;
}

interface EmergencyRequest {
  id: string;
  patientName: string;
  patientLocation: string;
  patientCoords: LocationCoords;
  contactNumber: string;
  emergencyType: string;
  distance: number;
  eta: number;
  status: 'pending' | 'accepted' | 'enroute' | 'arrived' | 'completed';
  timestamp: string;
  notes?: string;
}

function RecenterMap({ center }: { center: LocationCoords }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      console.log('🗺️ RecenterMap: Moving map to', center);
      map.setView([center.lat, center.lng], map.getZoom());
    }
  }, [center.lat, center.lng, map]);
  return null;
}

function AmbulanceMarker({ position }: { position: LocationCoords }) {
  const markerRef = useRef<L.Marker>(null);
  
  useEffect(() => {
    if (markerRef.current) {
      console.log('🚑 Updating ambulance marker to:', position);
      markerRef.current.setLatLng([position.lat, position.lng]);
    }
  }, [position.lat, position.lng]);
  
  return (
    <Marker 
      ref={markerRef}
      position={[position.lat, position.lng]} 
      icon={ambulanceIcon}
    >
      <Popup>Ambulance - En Route</Popup>
    </Marker>
  );
}

const AmbulanceDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState<'overview' | 'active' | 'history'>('overview');
  const [responderStatus, setResponderStatus] = useState<'available' | 'on-duty' | 'busy' | 'offline'>('available');
  const [emergencyRequests, setEmergencyRequests] = useState<EmergencyRequest[]>([]);
  const [activeRequest, setActiveRequest] = useState<EmergencyRequest | null>(null);
  const [ambulanceLocation, setAmbulanceLocation] = useState<LocationCoords | null>(null);
  const [routePath, setRoutePath] = useState<[number, number][]>([]);
  const [showNotification, setShowNotification] = useState(false);
  const [newRequest, setNewRequest] = useState<EmergencyRequest | null>(null);
  const [simulationProgress, setSimulationProgress] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const simulationIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Stats
  const [stats, setStats] = useState({
    todayTotal: 0,
    activeRequests: 0,
    completedToday: 0,
    avgResponseTime: 0,
    totalEarnings: 0,
    monthlyEarnings: 0
  });

  // Check authentication
  useEffect(() => {
    if (!user || user.email !== 'ambulance@email.com') {
      navigate('/login');
    }
  }, [user, navigate]);

  // Get ambulance current location (find nearest hospital)
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const userCoords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          
          console.log('📍 Current GPS location:', userCoords);
          
          // Try to find nearest hospital
          const hospitalCoords = await findNearestHospital(userCoords);
          
          if (hospitalCoords) {
            const distance = calculateDistance(userCoords, hospitalCoords);
            setAmbulanceLocation(hospitalCoords);
            console.log(`🏥 Ambulance stationed at nearest hospital (${distance.toFixed(2)} km away)`);
          } else {
            // Use location very close by if no hospital found (~100m away)
            const fallbackCoords = {
              lat: userCoords.lat + 0.0009, // ~100m north
              lng: userCoords.lng + 0.0009  // ~100m east
            };
            setAmbulanceLocation(fallbackCoords);
            console.log('⚠️ No hospital found within 2km, using very close location (~100m away)');
          }
        },
        (error) => {
          console.error('❌ Error getting location:', error);
          // Fallback location (Mumbai - near hospital area)
          setAmbulanceLocation({
            lat: 19.0760,
            lng: 72.8777
          });
          console.log('⚠️ Using default Mumbai location');
        }
      );
    } else {
      console.error('❌ Geolocation not supported');
      // Fallback location
      setAmbulanceLocation({
        lat: 19.0760,
        lng: 72.8777
      });
    }
  }, []);

  // Find nearest hospital using Overpass API
  const findNearestHospital = async (coords: LocationCoords): Promise<LocationCoords | null> => {
    try {
      console.log('🔍 Searching for nearest hospital from:', coords);
      
      // Search within 5km radius for better coverage
      const radius = 5000;
      
      const query = `
        [out:json];
        (
          node["amenity"="hospital"](around:${radius},${coords.lat},${coords.lng});
          way["amenity"="hospital"](around:${radius},${coords.lat},${coords.lng});
          node["healthcare"="hospital"](around:${radius},${coords.lat},${coords.lng});
        );
        out center 10;
      `;
      
      console.log('📡 Sending Overpass API request...');
      
      const response = await fetch('https://overpass-api.de/api/interpreter', {
        method: 'POST',
        body: query
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log(`📦 Found ${data.elements?.length || 0} hospitals`);
        
        if (data.elements && data.elements.length > 0) {
          // Find the closest hospital
          let closestHospital = null;
          let minDistance = Infinity;
          
          for (const hospital of data.elements) {
            const hospitalCoords: LocationCoords = {
              lat: hospital.lat || hospital.center?.lat,
              lng: hospital.lon || hospital.center?.lon
            };
            
            if (!hospitalCoords.lat || !hospitalCoords.lng) continue;
            
            const distance = calculateDistance(coords, hospitalCoords);
            
            console.log(`🏥 ${hospital.tags?.name || 'Hospital'}: ${distance.toFixed(2)} km away`);
            
            if (distance < minDistance) {
              minDistance = distance;
              closestHospital = {
                coords: hospitalCoords,
                name: hospital.tags?.name || 'Hospital',
                distance
              };
            }
          }
          
          if (closestHospital) {
            console.log(`✅ Closest hospital: ${closestHospital.name} (${closestHospital.distance.toFixed(2)} km away)`);
            return closestHospital.coords;
          }
        } else {
          console.log('⚠️ No hospitals found in response');
        }
      } else {
        console.error('❌ Overpass API response not OK:', response.status);
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

  // Listen for emergency requests
  useEffect(() => {
    const checkForEmergencies = () => {
      const stored = localStorage.getItem('emergency_requests');
      if (stored) {
        const requests: EmergencyRequest[] = JSON.parse(stored);
        const pending = requests.filter(r => r.status === 'pending');
        
        if (pending.length > 0 && responderStatus === 'available') {
          const nearest = pending[0];
          setNewRequest(nearest);
          setShowNotification(true);
          playAlertSound();
        }
        
        setEmergencyRequests(requests);
        updateStats(requests);
      }
    };

    const interval = setInterval(checkForEmergencies, 3000);
    checkForEmergencies();
    
    return () => clearInterval(interval);
  }, [responderStatus]);

  const playAlertSound = () => {
    // Create emergency alert sound
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    gainNode.gain.value = 0.3;
    
    oscillator.start();
    setTimeout(() => oscillator.stop(), 200);
    
    setTimeout(() => {
      const osc2 = audioContext.createOscillator();
      osc2.connect(gainNode);
      osc2.frequency.value = 600;
      osc2.type = 'sine';
      osc2.start();
      setTimeout(() => osc2.stop(), 200);
    }, 300);
  };

  const updateStats = (requests: EmergencyRequest[]) => {
    const today = new Date().toDateString();
    const todayRequests = requests.filter(r => new Date(r.timestamp).toDateString() === today);
    
    setStats({
      todayTotal: todayRequests.length,
      activeRequests: requests.filter(r => r.status === 'accepted' || r.status === 'enroute').length,
      completedToday: todayRequests.filter(r => r.status === 'completed').length,
      avgResponseTime: 8,
      totalEarnings: requests.filter(r => r.status === 'completed').length * 500,
      monthlyEarnings: requests.filter(r => r.status === 'completed').length * 500
    });
  };

  const handleAcceptRequest = async (request: EmergencyRequest) => {
    console.log('🚑 Starting mission for emergency request:', request.id);
    setActiveRequest(request);
    setResponderStatus('on-duty');
    setShowNotification(false);
    
    // Auto-switch to Active Mission tab
    setActiveTab('active');
    
    // Update request status to accepted
    setEmergencyRequests(prev => {
      const updated = prev.map(r => 
        r.id === request.id ? { ...r, status: 'accepted' as const } : r
      );
      localStorage.setItem('emergency_requests', JSON.stringify(updated));
      return updated;
    });
    
    // Notify patient (update in localStorage for patient to see)
    console.log('📢 Notifying patient: Ambulance is on the way');
    
    // Set ambulance to a very close location (50-100m away from patient)
    const nearbyAmbulanceLocation = {
      lat: request.patientCoords.lat + 0.0005, // ~55m north
      lng: request.patientCoords.lng + 0.0005  // ~55m east
    };
    
    console.log('📍 Setting ambulance to nearby location:', nearbyAmbulanceLocation);
    console.log('📍 Patient location:', request.patientCoords);
    setAmbulanceLocation(nearbyAmbulanceLocation);
    
    // Calculate route from nearby location to patient
    const route = await getRoute(nearbyAmbulanceLocation, request.patientCoords);
    
    if (route && route.length > 0) {
      console.log('✅ Route calculated with', route.length, 'points');
      console.log('✅ Starting mission simulation in 2 seconds...');
      // Start automatic simulation after 2 seconds, passing the route
      setTimeout(() => {
        startSimulation(request, route);
      }, 2000);
    } else {
      console.error('❌ Failed to calculate route');
      alert('Unable to calculate route. Please try again.');
    }
  };

  const startSimulation = (request: EmergencyRequest, route: [number, number][]) => {
    console.log('🔍 DEBUG: startSimulation called');
    console.log('🔍 DEBUG: ambulanceLocation:', ambulanceLocation);
    console.log('🔍 DEBUG: route length:', route.length);
    
    if (!ambulanceLocation || route.length === 0) {
      console.log('❌ Cannot start simulation: missing location or route');
      alert('Cannot start simulation. Missing ambulance location or route.');
      return;
    }
    
    console.log('🚀 Starting simulation with', route.length, 'route points');
    console.log('🚀 First point:', route[0]);
    console.log('🚀 Last point:', route[route.length - 1]);
    console.log('🚀 Patient coords:', request.patientCoords);
    
    setIsSimulating(true);
    setSimulationProgress(0);
    
    let currentIndex = 0;
    const totalPoints = route.length;
    // Adjust speed based on route length - faster for longer routes
    const intervalTime = totalPoints > 100 ? 500 : totalPoints > 50 ? 800 : 1000;
    
    console.log(`⏱️ Simulation speed: ${intervalTime}ms per point`);
    console.log(`⏱️ Total simulation time: ~${(totalPoints * intervalTime / 1000).toFixed(0)} seconds`);
    
    // Update status to enroute
    setEmergencyRequests(prev => {
      const updated = prev.map(r => 
        r.id === request.id ? { ...r, status: 'enroute' as const } : r
      );
      localStorage.setItem('emergency_requests', JSON.stringify(updated));
      return updated;
    });
    
    console.log('✅ Starting interval timer...');
    
    simulationIntervalRef.current = setInterval(() => {
      currentIndex++;
      
      console.log(`🔄 Interval tick: currentIndex=${currentIndex}, totalPoints=${totalPoints}`);
      
      if (currentIndex < totalPoints) {
        const nextPoint = route[currentIndex];
        console.log(`📍 Moving to point ${currentIndex}:`, nextPoint);
        
        setAmbulanceLocation({
          lat: nextPoint[0],
          lng: nextPoint[1]
        });
        
        const progress = (currentIndex / totalPoints) * 100;
        setSimulationProgress(progress);
        
        if (currentIndex % 10 === 0 || currentIndex === 1) {
          console.log(`🚑 Moving... ${progress.toFixed(0)}% complete (${currentIndex}/${totalPoints})`);
        }
      } else {
        // Reached destination
        console.log('🎯 REACHED DESTINATION!');
        console.log('✅ Ambulance arrived at destination!');
        console.log('🔍 Current index:', currentIndex);
        console.log('🔍 Total points:', totalPoints);
        
        if (simulationIntervalRef.current) {
          console.log('⏹️ Clearing interval...');
          clearInterval(simulationIntervalRef.current);
          simulationIntervalRef.current = null;
        }
        
        setIsSimulating(false);
        setSimulationProgress(100);
        
        // Set final position to exact patient location
        console.log('📍 Setting final position to patient location:', request.patientCoords);
        setAmbulanceLocation({
          lat: request.patientCoords.lat,
          lng: request.patientCoords.lng
        });
        
        // Auto mark as arrived
        console.log('✅ Auto-marking as arrived...');
        setEmergencyRequests(prev => {
          const arrivedUpdated = prev.map(r => 
            r.id === request.id ? { ...r, status: 'arrived' as const } : r
          );
          localStorage.setItem('emergency_requests', JSON.stringify(arrivedUpdated));
          return arrivedUpdated;
        });
        
        setActiveRequest({ ...request, status: 'arrived' });
        
        // Show completion prompt after 2 seconds
        console.log('⏰ Setting timeout for completion prompt (2 seconds)...');
        setTimeout(() => {
          console.log('🏥 Showing completion prompt NOW!');
          const shouldComplete = window.confirm('🏥 Ambulance has arrived!\n\nPatient has been picked up. Mark mission as completed?');
          console.log('User response:', shouldComplete);
          
          if (shouldComplete) {
            const notes = window.prompt('Add mission notes (optional):', 'Patient transported successfully');
            console.log('Mission notes:', notes);
            
            if (notes !== null) {
              console.log('Calling handleCompleteRequest...');
              handleCompleteRequest(notes || 'Mission completed successfully');
            } else {
              console.log('User cancelled notes prompt');
            }
          } else {
            console.log('User declined to complete mission');
          }
        }, 2000);
      }
    }, intervalTime);
    
    console.log('✅ Interval started with ID:', simulationIntervalRef.current);
  };

  // Cleanup simulation on unmount
  useEffect(() => {
    return () => {
      if (simulationIntervalRef.current) {
        clearInterval(simulationIntervalRef.current);
      }
    };
  }, []);

  const handleRejectRequest = () => {
    // Not used anymore - keeping for compatibility
    setShowNotification(false);
    setNewRequest(null);
  };

  const getRoute = async (start: LocationCoords, end: LocationCoords): Promise<[number, number][] | null> => {
    try {
      console.log('🗺️ Getting route from OSRM...');
      console.log('Start:', start);
      console.log('End:', end);
      
      const response = await fetch(
        `https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson`
      );
      
      if (response.ok) {
        const data = await response.json();
        if (data.routes && data.routes.length > 0) {
          const coordinates = data.routes[0].geometry.coordinates;
          const path: [number, number][] = coordinates.map((coord: number[]) => [coord[1], coord[0]]);
          
          const distance = (data.routes[0].distance / 1000).toFixed(2);
          const duration = Math.ceil(data.routes[0].duration / 60);
          
          console.log(`✅ Route found: ${path.length} points, ${distance} km, ${duration} min`);
          
          setRoutePath(path);
          return path;
        } else {
          console.error('❌ No routes found in response');
        }
      } else {
        console.error('❌ OSRM response not OK:', response.status);
      }
    } catch (error) {
      console.error('❌ Routing error:', error);
    }
    
    return null;
  };

  const handleMarkArrived = () => {
    if (activeRequest) {
      console.log('✅ Marking as arrived');
      
      setEmergencyRequests(prev => {
        const updated = prev.map(r => 
          r.id === activeRequest.id ? { ...r, status: 'arrived' as const } : r
        );
        localStorage.setItem('emergency_requests', JSON.stringify(updated));
        return updated;
      });
      
      setActiveRequest({ ...activeRequest, status: 'arrived' });
    }
  };

  const handleCompleteRequest = (notes: string) => {
    if (activeRequest) {
      console.log('✅ Completing mission:', activeRequest.id);
      
      setEmergencyRequests(prev => {
        const updated = prev.map(r => 
          r.id === activeRequest.id ? { ...r, status: 'completed' as const, notes } : r
        );
        localStorage.setItem('emergency_requests', JSON.stringify(updated));
        return updated;
      });
      
      // Reset state
      setActiveRequest(null);
      setResponderStatus('available');
      setRoutePath([]);
      setSimulationProgress(0);
      setIsSimulating(false);
      
      // Show success message
      alert('✅ Mission completed successfully!\n\nEarnings: ₹500\nYou are now available for new emergencies.');
      
      // Switch to history tab to show completed mission
      setActiveTab('history');
    }
  };

  return (
    <div className="ambulance-dashboard">
      {/* Header */}
      <div className="ambulance-header">
        <div className="header-content">
          <div className="header-left">
            <div className="ambulance-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="3" width="15" height="13"/>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
            </div>
            <div>
              <h1>Ambulance Responder</h1>
              <p>Emergency Response Dashboard</p>
            </div>
          </div>
          <div className="header-right">
            <div className="status-selector">
              <select 
                value={responderStatus} 
                onChange={(e) => setResponderStatus(e.target.value as any)}
                className={`status-select ${responderStatus}`}
                disabled={activeRequest !== null}
              >
                <option value="available">✅ Available</option>
                <option value="on-duty">🚑 On Emergency Mission</option>
                <option value="busy">⏳ Busy</option>
                <option value="offline">⭕ Offline</option>
              </select>
            </div>
            <button className="btn-logout" onClick={logout}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
                <polyline points="16 17 21 12 16 7"/>
                <line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Emergency Notification */}
      {showNotification && newRequest && (
        <div className="emergency-notification">
          <div className="notification-content">
            <div className="notification-header">
              <div className="alert-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </div>
              <div>
                <h2>🚨 EMERGENCY ALERT</h2>
                <p>Patient needs immediate assistance</p>
              </div>
            </div>
            <div className="notification-details">
              <div className="detail-row">
                <span>Patient:</span>
                <strong>{newRequest.patientName}</strong>
              </div>
              <div className="detail-row">
                <span>Location:</span>
                <strong>{newRequest.patientLocation}</strong>
              </div>
              <div className="detail-row">
                <span>Emergency Type:</span>
                <strong>{newRequest.emergencyType || 'General Emergency'}</strong>
              </div>
              <div className="detail-row">
                <span>Distance:</span>
                <strong>{newRequest.distance.toFixed(1)} km</strong>
              </div>
              <div className="detail-row">
                <span>ETA:</span>
                <strong>{newRequest.eta} minutes</strong>
              </div>
            </div>
            <div className="notification-actions">
              <button className="btn-start-mission" onClick={() => handleAcceptRequest(newRequest)}>
                🚑 Start Mission
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-icon red">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
          </div>
          <div className="stat-info">
            <h3>Today's Calls</h3>
            <p className="stat-number">{stats.todayTotal}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <div className="stat-info">
            <h3>Active Requests</h3>
            <p className="stat-number">{stats.activeRequests}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <div className="stat-info">
            <h3>Completed Today</h3>
            <p className="stat-number">{stats.completedToday}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon blue">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="1" x2="12" y2="23"/>
              <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
            </svg>
          </div>
          <div className="stat-info">
            <h3>Total Earnings</h3>
            <p className="stat-number">₹{stats.totalEarnings.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="dashboard-tabs">
        <button 
          className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`tab-btn ${activeTab === 'active' ? 'active' : ''}`}
          onClick={() => setActiveTab('active')}
        >
          Active Mission {activeRequest && <span className="badge">1</span>}
        </button>
        <button 
          className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          History
        </button>
      </div>

      {/* Content */}
      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="overview-section">
            <div className="section-card">
              <h2>Response Performance</h2>
              <div className="performance-grid">
                <div className="performance-item">
                  <span>Avg Response Time</span>
                  <strong>{stats.avgResponseTime} min</strong>
                </div>
                <div className="performance-item">
                  <span>Success Rate</span>
                  <strong>98%</strong>
                </div>
                <div className="performance-item">
                  <span>Monthly Missions</span>
                  <strong>{stats.todayTotal * 30}</strong>
                </div>
              </div>
            </div>

            <div className="section-card">
              <h2>Recent Emergencies</h2>
              {emergencyRequests.slice(0, 5).length > 0 ? (
                <div className="emergency-list">
                  {emergencyRequests.slice(0, 5).map(req => (
                    <div key={req.id} className="emergency-item">
                      <div className="emergency-info">
                        <strong>{req.patientName}</strong>
                        <span>{new Date(req.timestamp).toLocaleString()}</span>
                      </div>
                      <span className={`status-badge ${req.status}`}>
                        {req.status}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="empty-state">No emergency requests yet</p>
              )}
            </div>
          </div>
        )}

        {activeTab === 'active' && (
          <>
            {!activeRequest ? (
              <div className="empty-mission-section">
                <div className="section-card">
                  <div className="empty-mission-content">
                    <div className="empty-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="1" y="3" width="15" height="13"/>
                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                        <circle cx="5.5" cy="18.5" r="2.5"/>
                        <circle cx="18.5" cy="18.5" r="2.5"/>
                      </svg>
                    </div>
                    <h2>No Active Mission</h2>
                    <p>You don't have any active emergency missions at the moment.</p>
                    <p className="status-info">
                      Current Status: <span className={`status-badge ${responderStatus}`}>{responderStatus}</span>
                    </p>
                    <div className="empty-actions">
                      <button className="btn-overview" onClick={() => setActiveTab('overview')}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="7" height="7"/>
                          <rect x="14" y="3" width="7" height="7"/>
                          <rect x="14" y="14" width="7" height="7"/>
                          <rect x="3" y="14" width="7" height="7"/>
                        </svg>
                        View Overview
                      </button>
                      {responderStatus === 'offline' && (
                        <p className="hint-text">💡 Set your status to "Available" to receive emergency requests</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="active-mission-section">
            <div className="mission-card">
              <div className="mission-header">
                <h2>🚨 On Emergency Mission</h2>
                <span className={`status-badge ${activeRequest.status}`}>
                  {activeRequest.status === 'accepted' ? 'En Route' : 
                   activeRequest.status === 'enroute' ? 'En Route' :
                   activeRequest.status === 'arrived' ? 'Arrived' : 
                   activeRequest.status}
                </span>
              </div>

              <div className="patient-details">
                <h3>Patient Information</h3>
                <div className="detail-grid">
                  <div className="detail-item">
                    <span>Name:</span>
                    <strong>{activeRequest.patientName}</strong>
                  </div>
                  <div className="detail-item">
                    <span>Contact:</span>
                    <strong>{activeRequest.contactNumber}</strong>
                  </div>
                  <div className="detail-item">
                    <span>Emergency Type:</span>
                    <strong>{activeRequest.emergencyType || 'General'}</strong>
                  </div>
                  <div className="detail-item">
                    <span>Distance:</span>
                    <strong>{activeRequest.distance.toFixed(1)} km</strong>
                  </div>
                </div>
              </div>

              {ambulanceLocation && (
                <div className="mission-map">
                  {isSimulating && (
                    <div className="simulation-progress">
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${simulationProgress}%` }}></div>
                      </div>
                      <p className="progress-text">
                        🚑 Ambulance en route to patient... {simulationProgress.toFixed(0)}% complete
                      </p>
                      <p className="eta-text">
                        ETA: ~{Math.ceil(activeRequest.eta * (1 - simulationProgress / 100))} min
                      </p>
                    </div>
                  )}
                  <MapContainer
                    center={[ambulanceLocation.lat, ambulanceLocation.lng]}
                    zoom={13}
                    style={{ height: '400px', width: '100%', borderRadius: '12px' }}
                    key={`map-${activeRequest.id}`}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker 
                      position={[activeRequest.patientCoords.lat, activeRequest.patientCoords.lng]} 
                      icon={userIcon}
                    >
                      <Popup>Patient Location</Popup>
                    </Marker>
                    <AmbulanceMarker position={ambulanceLocation} />
                    {routePath.length > 0 && (
                      <Polyline positions={routePath} color="#ef4444" weight={5} opacity={0.8} />
                    )}
                    <RecenterMap center={ambulanceLocation} />
                  </MapContainer>
                </div>
              )}

              <div className="mission-actions">
                <button className="btn-call" onClick={() => window.location.href = `tel:${activeRequest.contactNumber}`}>
                  📞 Call Patient
                </button>
                <button className="btn-navigate" onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${activeRequest.patientCoords.lat},${activeRequest.patientCoords.lng}`)}>
                  🗺️ Navigate
                </button>
                {(activeRequest.status === 'accepted' || activeRequest.status === 'enroute') && (
                  <button className="btn-arrived" onClick={handleMarkArrived}>
                    ✅ Mark as Arrived
                  </button>
                )}
                {activeRequest.status === 'arrived' && (
                  <button className="btn-complete" onClick={() => {
                    const notes = prompt('Add mission notes (optional):', 'Patient transported successfully');
                    if (notes !== null) {
                      handleCompleteRequest(notes || 'Mission completed successfully');
                    }
                  }}>
                    ✔️ Mark as Completed
                  </button>
                )}
              </div>
            </div>
          </div>
            )}
          </>
        )}

        {activeTab === 'history' && (
          <div className="history-section">
            <div className="section-card">
              <h2>Emergency History</h2>
              {emergencyRequests.filter(r => r.status === 'completed').length > 0 ? (
                <div className="history-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Date & Time</th>
                        <th>Patient</th>
                        <th>Location</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Earnings</th>
                      </tr>
                    </thead>
                    <tbody>
                      {emergencyRequests.filter(r => r.status === 'completed').map(req => (
                        <tr key={req.id}>
                          <td>{new Date(req.timestamp).toLocaleString()}</td>
                          <td>{req.patientName}</td>
                          <td>{req.patientLocation.substring(0, 30)}...</td>
                          <td>{req.emergencyType || 'General'}</td>
                          <td><span className="status-badge completed">Completed</span></td>
                          <td>₹500</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="empty-state">No completed missions yet</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AmbulanceDashboard;
