import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthState } from '../types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string, role: 'patient' | 'doctor' | 'ambulance' | 'lab') => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => void;
}

interface StoredUser {
  email: string;
  password: string;
  name: string;
  preferredLanguage: string;
  createdAt: string;
  authProvider: 'email' | 'google';
  role: 'patient' | 'doctor' | 'admin' | 'ambulance' | 'lab';
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

// Helper functions for localStorage
const USERS_KEY = 'mediguide_users';
const CURRENT_USER_KEY = 'mediguide_current_user';

// Initialize predefined accounts
const initializePredefinedAccounts = (): void => {
  const users = getStoredUsers();
  
  const predefinedAccounts: StoredUser[] = [
    {
      email: 'doctor@email.com',
      password: 'doctor@123',
      name: 'Dr. John Smith',
      preferredLanguage: 'en',
      createdAt: new Date().toISOString(),
      authProvider: 'email',
      role: 'doctor'
    },
    {
      email: 'dr.rajesh@mediguide.com',
      password: 'doctor123',
      name: 'Dr. Rajesh Kumar',
      preferredLanguage: 'en',
      createdAt: new Date().toISOString(),
      authProvider: 'email',
      role: 'doctor'
    },
    {
      email: 'admin@email.com',
      password: 'admin@123',
      name: 'Admin User',
      preferredLanguage: 'en',
      createdAt: new Date().toISOString(),
      authProvider: 'email',
      role: 'admin'
    },
    {
      email: 'ambulance@email.com',
      password: 'ambulance@123',
      name: 'Ambulance Responder',
      preferredLanguage: 'en',
      createdAt: new Date().toISOString(),
      authProvider: 'email',
      role: 'ambulance'
    },
    {
      email: 'mariyam@email.com',
      password: 'mariyam@123',
      name: 'Mariyam',
      preferredLanguage: 'en',
      createdAt: new Date().toISOString(),
      authProvider: 'email',
      role: 'patient'
    }
  ];
  
  // Add predefined accounts if they don't exist
  predefinedAccounts.forEach(account => {
    if (!users.find(u => u.email === account.email)) {
      users.push(account);
    }
  });
  
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

const getStoredUsers = (): StoredUser[] => {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

const saveUser = (user: StoredUser): void => {
  const users = getStoredUsers();
  const existingIndex = users.findIndex(u => u.email === user.email);
  if (existingIndex >= 0) {
    users[existingIndex] = user;
  } else {
    users.push(user);
  }
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

const findUser = (email: string, password: string): StoredUser | null => {
  const users = getStoredUsers();
  return users.find(u => u.email === email && u.password === password) || null;
};

const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem(CURRENT_USER_KEY);
  if (!userStr) return null;
  const user = JSON.parse(userStr);
  return {
    ...user,
    createdAt: new Date(user.createdAt),
    lastLogin: new Date(user.lastLogin),
  };
};

const saveCurrentUser = (user: User): void => {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
};

const clearCurrentUser = (): void => {
  localStorage.removeItem(CURRENT_USER_KEY);
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    token: null,
    isLoading: true,
    error: null,
  });

  // Initialize predefined accounts and check for existing session on mount
  useEffect(() => {
    initializePredefinedAccounts();
    const user = getCurrentUser();
    if (user) {
      setAuthState({
        isAuthenticated: true,
        user,
        token: `token-${user.id}`,
        isLoading: false,
        error: null,
      });
    } else {
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  const register = async (email: string, password: string, name: string, role: 'patient' | 'doctor' | 'ambulance' | 'lab'): Promise<void> => {
    setAuthState((prev: AuthState) => ({ ...prev, isLoading: true, error: null }));
    
    try {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      // Check if user already exists
      const users = getStoredUsers();
      if (users.find(u => u.email === email)) {
        throw new Error('An account with this email already exists.');
      }
      
      // Create new user
      const newStoredUser: StoredUser = {
        email,
        password,
        name,
        preferredLanguage: 'en',
        createdAt: new Date().toISOString(),
        authProvider: 'email',
        role, // Use the role from parameter
      };
      
      saveUser(newStoredUser);
      
      // Auto-login after registration
      const user: User = {
        id: email, // Using email as ID for simplicity
        email,
        name,
        preferredLanguage: 'en',
        createdAt: new Date(),
        lastLogin: new Date(),
        authProvider: 'email',
        role,
      };
      
      saveCurrentUser(user);
      
      setAuthState({
        isAuthenticated: true,
        user,
        token: `token-${user.id}`,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Registration failed. Please try again.';
      setAuthState((prev: AuthState) => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));
      throw error;
    }
  };

  const login = async (email: string, password: string): Promise<void> => {
    setAuthState((prev: AuthState) => ({ ...prev, isLoading: true, error: null }));
    
    try {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      // Find user in localStorage
      const storedUser = findUser(email, password);
      
      if (!storedUser) {
        throw new Error('Invalid email or password. Please try again.');
      }
      
      // Create user object
      const user: User = {
        id: email,
        email: storedUser.email,
        name: storedUser.name,
        preferredLanguage: storedUser.preferredLanguage,
        createdAt: new Date(storedUser.createdAt),
        lastLogin: new Date(),
        authProvider: storedUser.authProvider,
        role: storedUser.role,
      };
      
      // Update last login
      saveUser({
        ...storedUser,
        createdAt: storedUser.createdAt,
      });
      
      saveCurrentUser(user);
      
      setAuthState({
        isAuthenticated: true,
        user,
        token: `token-${user.id}`,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Login failed. Please try again.';
      setAuthState((prev: AuthState) => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));
      throw error;
    }
  };

  const loginWithGoogle = async (): Promise<void> => {
    setAuthState((prev: AuthState) => ({ ...prev, isLoading: true, error: null }));
    
    try {
      // Simulate Google OAuth flow
      await new Promise((resolve) => setTimeout(resolve, 800));
      
      // For demo purposes, create a Google user
      const email = 'demo@google.com';
      const name = 'Google Demo User';
      
      const user: User = {
        id: email,
        email,
        name,
        preferredLanguage: 'en',
        createdAt: new Date(),
        lastLogin: new Date(),
        authProvider: 'google',
        role: 'patient',
      };
      
      // Save to localStorage
      const storedUser: StoredUser = {
        email,
        password: '', // No password for Google auth
        name,
        preferredLanguage: 'en',
        createdAt: new Date().toISOString(),
        authProvider: 'google',
        role: 'patient',
      };
      
      saveUser(storedUser);
      saveCurrentUser(user);
      
      setAuthState({
        isAuthenticated: true,
        user,
        token: `token-${user.id}`,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setAuthState((prev: AuthState) => ({
        ...prev,
        isLoading: false,
        error: 'Google sign-in failed. Please try again or use email login.',
      }));
      throw error;
    }
  };

  const logout = () => {
    clearCurrentUser();
    setAuthState({
      isAuthenticated: false,
      user: null,
      token: null,
      isLoading: false,
      error: null,
    });
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
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
