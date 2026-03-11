import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import BrowserNavigation from './components/BrowserNavigation';
import GlobalLanguageSelector from './components/GlobalLanguageSelector';
import Homepage from './pages/Homepage';
import Signup from './pages/Signup';
import Chatbot from './pages/Chatbot';
import ChatbotTest from './pages/ChatbotTest';
import About from './pages/About';
import Support from './pages/Support';
import SymptomChecker from './pages/SymptomChecker';
import ConnectDoctor from './pages/ConnectDoctor';
import PeriodTracker from './pages/PeriodTracker';
import SelfCareTracker from './pages/SelfCareTracker';
import DoctorDashboard from './pages/DoctorDashboard';
import DoctorDemoDashboard from './pages/DoctorDemoDashboard';
import AdminDashboard from './pages/AdminDashboard';
import DoctorReport from './pages/DoctorReport';
import Emergency from './pages/Emergency';
import AmbulanceDashboard from './pages/AmbulanceDashboard';
import LabTest from './pages/LabTest';
import Appointments from './pages/Appointments';
import VoiceTest from './pages/VoiceTest';
import SimpleVoiceTest from './pages/SimpleVoiceTest';
import VerifyPrescription from './pages/VerifyPrescription';
import VideoConsultation from './pages/VideoConsultation';
import PatientVideoConsultation from './pages/PatientVideoConsultation';
import Marketplace from './pages/Marketplace';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';

// Import mobile responsive styles
import './styles/mobile-responsive.css';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import './App.css';

// Protected Route Component
interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: Array<'patient' | 'doctor' | 'admin' | 'ambulance' | 'lab'>;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const { isAuthenticated, user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '1.5rem',
        color: '#1977cc'
      }}>
        Loading...
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return <Navigate to="/" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    // Redirect to appropriate dashboard based on role
    if (user.role === 'doctor') {
      return <Navigate to="/doctor/dashboard" replace />;
    } else if (user.role === 'admin') {
      return <Navigate to="/admin/dashboard" replace />;
    } else if (user.role === 'ambulance') {
      return <Navigate to="/emergency" replace />;
    } else if (user.role === 'lab') {
      return <Navigate to="/lab-results" replace />;
    } else {
      return <Navigate to="/" replace />;
    }
  }

  return <>{children}</>;
};

// Dashboard Router Component
const DashboardRouter: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Redirect to appropriate dashboard based on role
  if (user.role === 'doctor') {
    // Create doctor-specific route slug from email
    const doctorSlug = user.email.split('@')[0].replace(/\./g, '-');
    return <Navigate to={`/doctor/dashboard/${doctorSlug}`} replace />;
  } else if (user.role === 'admin') {
    return <Navigate to="/admin/dashboard" replace />;
  } else if (user.role === 'ambulance') {
    return <Navigate to="/ambulance/dashboard" replace />;
  } else if (user.role === 'lab') {
    return <Navigate to="/lab-results" replace />;
  } else {
    return <Navigate to="/" replace />;
  }
};

function AppRoutes() {
  return (
    <>
      <BrowserNavigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/chatbot-test" element={<ChatbotTest />} />
        <Route path="/voice-test" element={<VoiceTest />} />
        <Route path="/simple-voice-test" element={<SimpleVoiceTest />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/symptom-checker" element={<SymptomChecker />} />
        <Route path="/period-tracker" element={<PeriodTracker />} />
        <Route path="/selfcare" element={<SelfCareTracker />} />
        <Route path="/doctors" element={<ConnectDoctor />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/lab-results" element={<LabTest />} />
        <Route path="/lab-res" element={<LabTest />} />
        
        {/* Marketplace Routes */}
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/marketplace/:category" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        
        {/* Prescription Verification - Public route */}
        <Route path="/verify-prescription/:prescriptionId" element={<VerifyPrescription />} />
        
        {/* Video Consultation - Protected route */}
        <Route 
          path="/doctor/video-consultation/:appointmentId" 
          element={
            <ProtectedRoute allowedRoles={['doctor', 'patient']}>
              <VideoConsultation />
            </ProtectedRoute>
          } 
        />
        
        {/* Patient Video Consultation - Protected route */}
        <Route 
          path="/video-consultation/:appointmentId" 
          element={
            <ProtectedRoute allowedRoles={['patient']}>
              <PatientVideoConsultation />
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/appointments" 
          element={
            <ProtectedRoute allowedRoles={['patient', 'doctor', 'admin']}>
              <Appointments />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/summary" 
          element={
            <ProtectedRoute allowedRoles={['patient', 'doctor', 'admin']}>
              <DoctorReport />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/reports" 
          element={
            <ProtectedRoute allowedRoles={['patient', 'doctor', 'admin']}>
              <DoctorReport />
            </ProtectedRoute>
          } 
        />
        
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardRouter />} />
        
        {/* Demo Doctor Dashboard - No authentication required */}
        <Route path="/doctor/demo-dashboard" element={<DoctorDemoDashboard />} />
        
        {/* Real Doctor Dashboard - Dynamic routing with authentication */}
        <Route 
          path="/doctor/dashboard/:doctorId" 
          element={
            <ProtectedRoute allowedRoles={['doctor']}>
              <DoctorDashboard />
            </ProtectedRoute>
          } 
        />
        
        {/* Legacy route - redirects to dynamic route */}
        <Route 
          path="/doctor/dashboard" 
          element={<DashboardRouter />}
        />
        
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        
        {/* Ambulance Dashboard */}
        <Route 
          path="/ambulance/dashboard" 
          element={
            <ProtectedRoute allowedRoles={['ambulance']}>
              <AmbulanceDashboard />
            </ProtectedRoute>
          } 
        />
        
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <CartProvider>
          <Router>
            <GlobalLanguageSelector />
            <AppRoutes />
          </Router>
        </CartProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
