# 🚀 Firebase Quick Start - MediGuide AI

## ⚡ Quick Setup (15 minutes)

### Step 1: Create Firebase Project (5 min)
1. Go to https://console.firebase.google.com/
2. Click "Add project"
3. Name it "mediguide-ai"
4. Click through the setup wizard

### Step 2: Enable Services (3 min)
1. **Authentication**: Build > Authentication > Get started
   - Enable "Email/Password"
   - Enable "Google"
2. **Firestore**: Build > Firestore Database > Create database
   - Choose location
   - Start in production mode

### Step 3: Get Firebase Config (2 min)
1. Click the Web icon (`</>`) in Project Overview
2. Register app as "MediGuide AI Web"
3. Copy the `firebaseConfig` object

### Step 4: Configure Your App (3 min)
1. Create `.env` file in project root:
   ```bash
   cp .env.example .env
   ```

2. Add your Firebase credentials to `.env`:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

### Step 5: Update App.tsx (1 min)
Open `src/App.tsx` and change line 2:

**From:**
```typescript
import { AuthProvider } from './contexts/AuthContext';
```

**To:**
```typescript
import { FirebaseAuthProvider as AuthProvider } from './contexts/FirebaseAuthContext';
```

### Step 6: Set Firestore Rules (1 min)
In Firebase Console > Firestore > Rules, paste:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    match /appointments/{appointmentId} {
      allow read, write: if request.auth != null && 
                           (request.resource.data.userId == request.auth.uid || 
                            resource.data.userId == request.auth.uid);
    }
    match /doctorReports/{reportId} {
      allow read, write: if request.auth != null && 
                           (request.resource.data.userId == request.auth.uid || 
                            resource.data.userId == request.auth.uid);
    }
    match /labReports/{reportId} {
      allow read, write: if request.auth != null && 
                           (request.resource.data.userId == request.auth.uid || 
                            resource.data.userId == request.auth.uid);
    }
  }
}
```

Click "Publish"

### Step 7: Test (2 min)
```bash
npm run dev
```

1. Register a new account
2. Check Firebase Console > Authentication (you should see the user)
3. Create an appointment
4. Check Firebase Console > Firestore (you should see the data)

---

## ✅ Done!

Your app now has:
- ✅ Cloud database
- ✅ User authentication
- ✅ Cross-device sync
- ✅ Data persistence

---

## 📖 Need More Details?

See `FIREBASE_SETUP_GUIDE.md` for complete instructions.

---

## 🐛 Troubleshooting

**Problem**: "Firebase not configured"
**Solution**: Make sure `.env` file exists with all credentials

**Problem**: "Permission denied"
**Solution**: Check Firestore rules are published

**Problem**: "Google Sign-In not working"
**Solution**: Make sure Google provider is enabled in Authentication

---

## 🎉 You're Ready!

Your MediGuide AI now stores data in the cloud and works across all devices!
