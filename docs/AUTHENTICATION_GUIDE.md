# MediGuide Authentication System

## Overview
The MediGuide app now has a fully functional authentication system with persistent user data stored in browser localStorage.

## Features

### 1. User Registration
- Navigate to `/signup` or click "Create account" link on homepage
- Enter your full name, email, and password
- Password must be at least 6 characters
- Account data is stored locally in browser
- Automatically logs you in after registration

### 2. User Login
- Enter your registered email and password on the homepage
- Click "Login" button
- Your session persists even after closing the browser
- Shows personalized welcome message with your name

### 3. Google Sign-In (Demo)
- Click "Sign in with Google" button
- Simulates OAuth flow (demo implementation)
- Creates a demo Google user account

### 4. Session Persistence
- User data is stored in localStorage
- Automatically logs you back in when you return
- Session persists across browser refreshes
- User name is displayed based on registration data

### 5. Logout
- Click "Logout" button in header or Quick Access Panel
- Clears session and returns to login screen
- User data remains stored for future logins

## How It Works

### Data Storage
All user data is stored in browser localStorage:
- **mediguide_users**: Array of all registered users
- **mediguide_current_user**: Currently logged-in user session

### User Data Structure
```json
{
  "email": "user@example.com",
  "password": "hashed_password",
  "name": "John Doe",
  "preferredLanguage": "en",
  "createdAt": "2025-01-01T00:00:00.000Z",
  "authProvider": "email"
}
```

### Security Notes
⚠️ **This is a demo implementation for development purposes**
- Passwords are stored in plain text in localStorage
- No actual encryption or hashing
- No backend API integration
- For production, implement:
  - Proper password hashing (bcrypt, argon2)
  - Backend API with secure authentication
  - JWT tokens or session cookies
  - HTTPS encryption
  - OAuth 2.0 for Google sign-in

## Testing the System

### Test Scenario 1: New User Registration
1. Go to http://localhost:5173/signup
2. Fill in the form:
   - Name: "John Doe"
   - Email: "john@example.com"
   - Password: "password123"
   - Confirm Password: "password123"
3. Click "Create Account"
4. You'll be redirected to homepage, logged in as "John Doe"

### Test Scenario 2: Returning User Login
1. Logout if currently logged in
2. On homepage, enter:
   - Email: "john@example.com"
   - Password: "password123"
3. Click "Login"
4. Welcome message shows: "Welcome back, John Doe!"

### Test Scenario 3: Session Persistence
1. Login with your account
2. Close the browser tab
3. Reopen http://localhost:5173
4. You're still logged in with your name displayed

### Test Scenario 4: Multiple Users
1. Create account for "Alice" (alice@example.com)
2. Logout
3. Create account for "Bob" (bob@example.com)
4. Logout
5. Login as Alice - shows "Welcome back, Alice!"
6. Logout and login as Bob - shows "Welcome back, Bob!"

## Error Handling

The system handles various error cases:
- **Duplicate email**: "An account with this email already exists."
- **Invalid credentials**: "Invalid email or password. Please try again."
- **Password mismatch**: "Passwords do not match"
- **Short password**: "Password must be at least 6 characters"
- **Empty fields**: Browser validation prevents submission

## UI States

### Not Logged In
- Shows login form with email/password fields
- "Sign in with Google" button
- "Create account" link

### Logged In
- Welcome message with user's name
- Quick action buttons (Start Chat, Symptom Checker)
- Logout button
- User name in header with logout option

### Loading States
- Buttons show "Logging in..." or "Creating Account..."
- Form inputs are disabled during authentication
- Visual feedback with disabled state styling

## Browser Developer Tools

To inspect stored data:
1. Open browser DevTools (F12)
2. Go to "Application" or "Storage" tab
3. Expand "Local Storage"
4. Click on your domain
5. View `mediguide_users` and `mediguide_current_user` keys

## Clearing Data

To reset all user data:
```javascript
// In browser console
localStorage.removeItem('mediguide_users');
localStorage.removeItem('mediguide_current_user');
location.reload();
```

## Next Steps for Production

1. **Backend API**: Create REST API endpoints for auth
2. **Password Security**: Implement bcrypt hashing
3. **JWT Tokens**: Use secure token-based authentication
4. **Email Verification**: Add email confirmation flow
5. **Password Reset**: Implement forgot password feature
6. **OAuth Integration**: Real Google OAuth 2.0 setup
7. **Rate Limiting**: Prevent brute force attacks
8. **HTTPS**: Ensure all traffic is encrypted
9. **CSRF Protection**: Add CSRF tokens
10. **Session Management**: Implement secure session handling
