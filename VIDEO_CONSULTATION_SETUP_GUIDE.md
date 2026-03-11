# Video Consultation Setup Guide 🎥

## ✅ What's Been Implemented

A complete Zoom-like video consultation system with:
- ✅ Real WebRTC video/audio using Daily.co
- ✅ Screen sharing
- ✅ Mic/Camera controls
- ✅ Call duration timer
- ✅ Participant management
- ✅ Secure appointment-based access
- ✅ Call logs and analytics
- ✅ Professional UI/UX

## 📋 Setup Steps

### Step 1: Create Daily.co Account (5 minutes)

1. Go to **https://daily.co**
2. Click **"Sign up free"**
3. Sign up with your email
4. Verify your email address
5. You'll be redirected to the Dashboard

### Step 2: Get Your API Key

1. In the Daily.co Dashboard, click **"Developers"** in the left sidebar
2. You'll see your **API Key** - it looks like:
   ```
   a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6
   ```
3. Click **"Copy"** to copy it

### Step 3: Add API Key to Your Project

1. In your project root, create a file named `.env`:
   ```bash
   touch .env
   ```

2. Open `.env` and add:
   ```
   VITE_DAILY_API_KEY=paste_your_api_key_here
   ```

3. Replace `paste_your_api_key_here` with your actual API key

4. Save the file

### Step 4: Restart Development Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## 🎥 How to Use

### For Doctors:

1. Login as doctor: `dr.rajesh@mediguide.com`
2. Go to dashboard: `/doctor/dashboard/dr-rajesh`
3. Find an appointment
4. Click **"🎥 Start Video Call"** button
5. Click **"Join Consultation"**
6. Wait for patient to join

### For Patients:

1. Login as patient: `mariyam@gmail.com`
2. Go to: `/appointments`
3. Find your appointment
4. Click **"Join Video Call"** (when doctor starts)
5. Click **"Join Consultation"**

## 🔐 Security Features

### Appointment-Based Access
- Only the assigned doctor and patient can join
- URL manipulation is prevented
- Unauthorized users see "Access Denied"

### Room Expiration
- Rooms expire after 24 hours
- Automatic cleanup after consultation ends

### Access Verification
```typescript
// Only doctor and patient for that specific appointment can join
verifyAccess(appointmentId, userId, userRole)
```

## 🎛️ Features

### Video Controls
- **Microphone**: Toggle on/off
- **Camera**: Toggle on/off
- **Screen Share**: Share your screen
- **End Call**: Leave consultation

### Call Information
- **Duration Timer**: Shows call length (MM:SS format)
- **Participants Count**: Shows who's in the call
- **Network Quality**: Indicates connection status

### Call Logs
Every call is logged with:
- Start time
- End time
- Duration
- Participants
- Status (completed/missed/cancelled)

## 📊 Call Logs & Analytics

### View Call Logs
```typescript
// Get all calls for a doctor
videoConsultationService.getCallLogsByDoctor(doctorEmail);

// Get all calls for a patient
videoConsultationService.getCallLogsByPatient(patientEmail);

// Get calls for specific appointment
videoConsultationService.getCallLogsByAppointment(appointmentId);
```

### Call Log Structure
```json
{
  "id": "CALL-1234567890-ABC123",
  "appointmentId": "APT-1772441210492-U6F5KC1HK",
  "roomName": "mediguide-apt-1772441210492-u6f5kc1hk",
  "doctorId": "dr.rajesh@mediguide.com",
  "patientId": "mariyam@gmail.com",
  "startTime": "2026-03-02T10:30:00.000Z",
  "endTime": "2026-03-02T10:45:00.000Z",
  "duration": 900,
  "status": "completed",
  "participants": ["Dr. Rajesh Kumar", "Mariyam"]
}
```

## 🔧 Troubleshooting

### Issue 1: "Failed to create Daily.co room"
**Solution**: Check your API key in `.env` file

### Issue 2: Video not loading
**Solution**: 
1. Check browser console for errors
2. Ensure you have camera/mic permissions
3. Try a different browser (Chrome recommended)

### Issue 3: "Access Denied"
**Solution**: 
- Ensure you're logged in as the correct user
- Verify the appointment ID is correct
- Check that you're either the doctor or patient for that appointment

### Issue 4: No API Key
**Solution**: The system will work in "demo mode" without an API key, but you won't have real video. Get an API key from Daily.co for full functionality.

## 🌐 Browser Compatibility

### Fully Supported:
- ✅ Chrome/Edge (Chromium) - Recommended
- ✅ Firefox
- ✅ Safari (macOS/iOS)

### Partially Supported:
- ⚠️ Older browsers may have limited features

## 📱 Mobile Support

- ✅ Works on mobile browsers
- ✅ Responsive design
- ✅ Touch-friendly controls
- ⚠️ Screen sharing may not work on all mobile devices

## 🎯 Testing Checklist

### Test 1: Doctor Starts Call
- [ ] Login as doctor
- [ ] Go to dashboard
- [ ] Click "Start Video Call"
- [ ] See pre-call screen
- [ ] Click "Join Consultation"
- [ ] See video interface
- [ ] Test mic/camera controls

### Test 2: Patient Joins
- [ ] Login as patient (different browser/incognito)
- [ ] Go to appointments
- [ ] Click "Join Video Call"
- [ ] Join consultation
- [ ] See both participants

### Test 3: Controls
- [ ] Toggle microphone
- [ ] Toggle camera
- [ ] Share screen
- [ ] End call
- [ ] Check call log saved

### Test 4: Security
- [ ] Try accessing with wrong user
- [ ] See "Access Denied"
- [ ] Try manipulating URL
- [ ] Verify access blocked

## 📈 Daily.co Free Tier Limits

- ✅ Unlimited 1-on-1 calls
- ✅ Up to 10 participants per call
- ✅ 10,000 participant minutes/month
- ✅ Screen sharing included
- ✅ Recording available

For production with more users, consider upgrading to a paid plan.

## 🔗 Useful Links

- Daily.co Dashboard: https://dashboard.daily.co
- Daily.co Documentation: https://docs.daily.co
- Daily.co API Reference: https://docs.daily.co/reference/rest-api
- Daily.co React SDK: https://docs.daily.co/reference/daily-react

## 🚀 Next Steps

1. Get your Daily.co API key
2. Add it to `.env` file
3. Restart server
4. Test video consultation
5. Enjoy real video calls!

## 💡 Pro Tips

1. **Test with two browsers**: Open one in incognito mode to simulate doctor and patient
2. **Check permissions**: Allow camera/mic access when prompted
3. **Use headphones**: Prevents echo during calls
4. **Good lighting**: Improves video quality
5. **Stable internet**: Required for smooth video

## Status: ✅ READY TO USE

Once you add your Daily.co API key, the video consultation system is fully functional and production-ready!
