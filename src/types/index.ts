export interface User {
  id: string;
  email: string;
  name: string;
  preferredLanguage: string;
  createdAt: Date;
  lastLogin: Date;
  authProvider: 'email' | 'google';
  role: 'patient' | 'doctor' | 'admin' | 'ambulance' | 'lab';
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  rtl: boolean;
}

export interface TranslationData {
  [languageCode: string]: {
    [key: string]: string;
  };
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

export interface LoginFormState {
  email: string;
  password: string;
  errors: {
    email?: string;
    password?: string;
    general?: string;
  };
  isSubmitting: boolean;
}

export interface Feature {
  id: string;
  icon: string;
  titleKey: string;
  descriptionKey: string;
}
