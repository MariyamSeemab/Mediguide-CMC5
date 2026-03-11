import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  User as FirebaseUser
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import { User, AuthState } from '../types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string, role: 'patient' | 'doctor' | 'ambulance' | 'lab') => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

// Helper function to create User object from Firebase user
const createUserObject = async (firebaseUser: FirebaseUser, additionalData?: any): Promise<User> => {
  // Get user data from Firestore
  const userDocRef = doc(db, 'users', firebaseUser.uid);
  const userDoc = await getDoc(userDocRef);
  const userData = userDoc.data();
  
  return {
    id: firebaseUser.uid,
    email: firebaseUser.email || '',
    name: userData?.name || firebaseUser.displayName || 'User',
    preferredLanguage: userData?.preferredLanguage || 'en',
    createdAt: userData?.createdAt?.toDate() || new Date(),
    lastLogin: new Date(),
    authProvider: userData?.authProvider || 'email',
    role: userData?.role || 'patient',
    ...additionalData
  };
};

// Helper function to save user data to Firestore
const saveUserToFirestore = async (uid: string, userData: any) => {
  const userDocRef = doc(db, 'users', uid);
  await setDoc(userDocRef, userData, { merge: true });
};

export const FirebaseAuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    token: null,
    isLoading: true,
    error: null,
  });

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const user = await createUserObject(firebaseUser);
          const token = await firebaseUser.getIdToken();
          
          setAuthState({
            isAuthenticated: true,
            user,
            token,
            isLoading: false,
            error: null,
          });
        } catch (error) {
          console.error('Error creating user object:', error);
          setAuthState({
            isAuthenticated: false,
            user: null,
            token: null,
            isLoading: false,
            error: 'Failed to load user data',
          });
        }
      } else {
        setAuthState({
          isAuthenticated: false,
          user: null,
          token: null,
          isLoading: false,
          error: null,
        });
      }
    });

    return () => unsubscribe();
  }, []);

  const register = async (email: string, password: string, name: string, role: 'patient' | 'doctor' | 'ambulance' | 'lab'): Promise<void> => {
    setAuthState((prev: AuthState) => ({ ...prev, isLoading: true, error: null }));
    
    try {
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;
      
      // Save additional user data to Firestore
      await saveUserToFirestore(firebaseUser.uid, {
        name,
        email,
        preferredLanguage: 'en',
        createdAt: new Date(),
        lastLogin: new Date(),
        authProvider: 'email',
        role, // Use the role from parameter
      });
      
      // User state will be updated by onAuthStateChanged listener
    } catch (error: any) {
      let errorMessage = 'Registration failed. Please try again.';
      
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'An account with this email already exists.';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'Password should be at least 6 characters.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email address.';
      }
      
      setAuthState((prev: AuthState) => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));
      throw new Error(errorMessage);
    }
  };

  const login = async (email: string, password: string): Promise<void> => {
    setAuthState((prev: AuthState) => ({ ...prev, isLoading: true, error: null }));
    
    try {
      // Sign in with Firebase Auth
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Update last login in Firestore
      await saveUserToFirestore(userCredential.user.uid, {
        lastLogin: new Date(),
      });
      
      // User state will be updated by onAuthStateChanged listener
    } catch (error: any) {
      let errorMessage = 'Login failed. Please try again.';
      
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        errorMessage = 'Invalid email or password. Please try again.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email address.';
      } else if (error.code === 'auth/user-disabled') {
        errorMessage = 'This account has been disabled.';
      }
      
      setAuthState((prev: AuthState) => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));
      throw new Error(errorMessage);
    }
  };

  const loginWithGoogle = async (): Promise<void> => {
    setAuthState((prev: AuthState) => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const firebaseUser = userCredential.user;
      
      // Check if user exists in Firestore
      const userDocRef = doc(db, 'users', firebaseUser.uid);
      const userDoc = await getDoc(userDocRef);
      
      if (!userDoc.exists()) {
        // New user - save to Firestore
        await saveUserToFirestore(firebaseUser.uid, {
          name: firebaseUser.displayName || 'Google User',
          email: firebaseUser.email,
          preferredLanguage: 'en',
          createdAt: new Date(),
          lastLogin: new Date(),
          authProvider: 'google',
          role: 'patient',
        });
      } else {
        // Existing user - update last login
        await saveUserToFirestore(firebaseUser.uid, {
          lastLogin: new Date(),
        });
      }
      
      // User state will be updated by onAuthStateChanged listener
    } catch (error: any) {
      let errorMessage = 'Google sign-in failed. Please try again or use email login.';
      
      if (error.code === 'auth/popup-closed-by-user') {
        errorMessage = 'Sign-in popup was closed. Please try again.';
      } else if (error.code === 'auth/cancelled-popup-request') {
        errorMessage = 'Sign-in was cancelled. Please try again.';
      }
      
      setAuthState((prev: AuthState) => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));
      throw new Error(errorMessage);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      // State will be updated by onAuthStateChanged listener
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        register,
        loginWithGoogle,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a FirebaseAuthProvider');
  }
  return context;
};
