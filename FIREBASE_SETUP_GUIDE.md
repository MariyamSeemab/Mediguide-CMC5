# 🔥 Firebase Setup Guide for MediGuide AI

## Overview

This guide will help you set up Firebase for your MediGuide AI application to enable:
- ✅ User Authentication (Email/Password & Google Sign-In)
- ✅ Cloud Firestore Database (for appointments, reports, lab tests)
- ✅ Data persistence across devices
- ✅ Real-time synchronization

---

## 📋 Prerequisites

- Google account
- Node.js installed
- MediGuide AI project cloned

---

## 🚀 Step 1: Create Firebase Project

1. **Go to Firebase Console**
   - Visit: https://console.firebase.google.com/
   - Click "Add project" or "Create a project"

2. **Enter Project Details**
   - Project name: `mediguide-ai` (or your preferred name)
   - Click "Continue"

3. **Google Analytics** (Optional)
   - Enable or disable Google Analytics
   - Click "Create project"
   - Wait for project creation (takes ~30 seconds)

4. **Click "Continue"** when ready

---

## 🌐 Step 2: Register Web App

1. **In Firebase Console**, click the **Web icon** (`</>`) to add a web app

2. **Register App**
   - App nickname: `MediGuide AI Web`
   - ✅ Check "Also set up Firebase Hosting" (optional)
   - Click "Register app"

3. **Copy Firebase Configuration**
   - You'll see a code snippet with your Firebase config
   - **IMPORTANT**: Copy these values - you'll need them!
   
   ```javascript
   const firebaseConfig = {
     apiKey: "AIza...",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123456789:web:abc123"
   };
   ```

4. **Click "Continue to console"**

---

## 🔐 Step 3: Enable Authentication

1. **In Firebase Console**, go to **Build** > **Authentication**

2. **Click "Get started"**

3. **Enable Sign-in Methods**:

   **A. Email/Password:**
   - Click on "Email/Password"
   - Toggle "Enable"
   - Click "Save"

   **B. Google Sign-In:**
   - Click on "Google"
   - Toggle "Enable"
   - Enter project support email
   - Click "Save"

---

## 🗄️ Step 4: Create Firestore Database

1. **In Firebase Console**, go to **Build** > **Firestore Database**

2. **Click "Create database"**

3. **Choose Location**
   - Select a location close to your users (e.g., `us-central`, `asia-south1`)
   - Click "Next"

4. **Start in Production Mode**
   - Select "Start in production mode"
   - Click "Enable"
   - Wait for database creation

5. **Set Up Security Rules**
   - Go to **Rules** tab
   - Replace the rules with:

   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       // Users collection - users can only read/write their own data
       match /users/{userId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
       
       // Appointments collection - users can only access their own appointments
       match /appointments/{appointmentId} {
         allow read, write: if request.auth != null && 
                              request.resource.data.userId == request.auth.uid;
         allow read: if request.auth != null && 
                        resource.data.userId == request.auth.uid;
       }
       
       // Doctor Reports collection - users can only access their own reports
       match /doctorReports/{reportId} {
         allow read, write: if request.auth != null && 
                              request.resource.data.userId == request.auth.uid;
         allow read: if request.auth != null && 
                        resource.data.userId == request.auth.uid;
       }
       
       // Lab Reports collection - users can only access their own lab reports
       match /labReports/{reportId} {
         allow read, write: if request.auth != null && 
                              request.resource.data.userId == request.auth.uid;
         allow read: if request.auth != null && 
                        resource.data.userId == request.auth.uid;
       }
     }
   }
   ```

6. **Click "Publish"**

---

## ⚙️ Step 5: Configure Your Application

1. **Create `.env` file** in your project root:
   ```bash
   cp .env.example .env
   ```

2. **Edit `.env` file** and add your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key_from_step_2
   VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

3. **Save the file**

---

## 🔄 Step 6: Update App.tsx to Use Firebase Auth

Open `src/App.tsx` and update the import:

**Change from:**
```typescript
import { AuthProvider } from './contexts/AuthContext';
```

**Change to:**
```typescript
import { FirebaseAuthProvider as AuthProvider } from './contexts/FirebaseAuthContext';
```

---

## 🧪 Step 7: Test Your Setup

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Test Registration**:
   - Go to http://localhost:5173
   - Click "Sign Up"
   - Create a new account
   - Check Firebase Console > Authentication > Users (you should see the new user)

3. **Test Login**:
   - Log out
   - Log in with the account you just created
   - You should be logged in successfully

4. **Test Google Sign-In**:
   - Click "Sign in with Google"
   - Select your Google account
   - Check Firebase Console > Authentication > Users

5. **Test Data Persistence**:
   - Create an appointment
   - Check Firebase Console > Firestore Database > appointments
   - You should see the appointment data

---

## 📊 Step 8: Verify Firestore Collections

After using the app, check Firebase Console > Firestore Database. You should see these collections:

1. **users** - User profile data
2. **appointments** - User appointments
3. **doctorReports** - Doctor-ready health reports
4. **labReports** - Lab test reports

---

## 🔒 Security Best Practices

1. **Never commit `.env` file** to Git
   - It's already in `.gitignore`
   - Keep your Firebase credentials secret

2. **Use Environment Variables**
   - Always use `import.meta.env.VITE_*` for Firebase config
   - Never hardcode credentials in source code

3. **Review Firestore Rules**
   - Ensure users can only access their own data
   - Test rules in Firebase Console > Firestore > Rules > Rules Playground

4. **Enable App Check** (Optional but recommended)
   - Go to Firebase Console > Build > App Check
   - Protects your app from abuse

---

## 🌍 Step 9: Deploy to Production

When deploying to production (Vercel, Netlify, etc.):

1. **Add Environment Variables** in your hosting platform:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`

2. **Update Authorized Domains** in Firebase:
   - Go to Firebase Console > Authentication > Settings > Authorized domains
   - Add your production domain (e.g., `mediguide-ai.vercel.app`)

---

## 🐛 Troubleshooting

### Issue: "Firebase: Error (auth/configuration-not-found)"
**Solution**: Make sure you've created the `.env` file and added all Firebase credentials.

### Issue: "Missing or insufficient permissions"
**Solution**: Check Firestore security rules. Make sure you're logged in and rules allow access.

### Issue: "Firebase: Error (auth/popup-blocked)"
**Solution**: Allow popups in your browser for Google Sign-In.

### Issue: Data not showing after login
**Solution**: 
1. Check browser console for errors
2. Verify Firestore rules
3. Check that userId matches in database

### Issue: "Firebase: Error (auth/api-key-not-valid)"
**Solution**: Double-check your API key in `.env` file.

---

## 📚 Additional Resources

- **Firebase Documentation**: https://firebase.google.com/docs
- **Firestore Documentation**: https://firebase.google.com/docs/firestore
- **Firebase Authentication**: https://firebase.google.com/docs/auth
- **Firebase Console**: https://console.firebase.google.com/

---

## ✅ Checklist

Before pushing to GitHub, make sure:

- [ ] Firebase project created
- [ ] Web app registered
- [ ] Authentication enabled (Email/Password & Google)
- [ ] Firestore database created
- [ ] Security rules configured
- [ ] `.env` file created with Firebase credentials
- [ ] `.env` file added to `.gitignore`
- [ ] App.tsx updated to use FirebaseAuthProvider
- [ ] Tested registration
- [ ] Tested login
- [ ] Tested Google Sign-In
- [ ] Tested data persistence
- [ ] Verified Firestore collections

---

## 🎉 You're Done!

Your MediGuide AI application is now connected to Firebase! 

**Benefits:**
- ✅ User data persists across devices
- ✅ Secure authentication
- ✅ Real-time data synchronization
- ✅ Scalable database
- ✅ No need to manage backend servers

**Next Steps:**
1. Test all features thoroughly
2. Deploy to production
3. Monitor usage in Firebase Console
4. Scale as needed (Firebase scales automatically!)

---

**Need Help?**
- Check Firebase Console > Build > Authentication/Firestore for errors
- Review browser console for error messages
- Verify all environment variables are set correctly

**Happy coding!** 🚀
