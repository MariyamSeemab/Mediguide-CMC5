# Appointment Sync Debugging Guide

## How to Test and Debug

### Step 1: Book an Appointment
1. Login as patient: `mariyam@gmail.com`
2. Go to `/doctors`
3. Click "Book Appointment" on Dr. Rajesh Kumar
4. Fill in the form and submit
5. **Open Browser Console (F12)** - You should see:
   ```
   🔄 Syncing appointment to central storage: APT-xxxxx
   Patient email: mariyam@gmail.com
   Doctor name: Dr. Rajesh Kumar
   ✅ Converted to doctor format: {...}
   Doctor email: dr.rajesh@mediguide.com
   ➕ Added new appointment to central storage
   💾 Saved to localStorage. Total appointments: 1
   ```

### Step 2: View in Appointments Page
1. Go to `/appointments`
2. **Open Browser Console (F12)** - You should see:
   ```
   🔄 Starting appointment migration...
   Found users: X
   Patient mariyam@gmail.com has X appointments
   🔄 Syncing appointment to central storage: APT-xxxxx
   ...
   ✅ Migration completed: X appointments synced to central storage
   ```

### Step 3: Login as Doctor
1. Logout
2. Login as doctor: `dr.rajesh@mediguide.com` / password: `doctor123`
3. Go to `/doctor/dashboard/dr-rajesh`
4. **Open Browser Console (F12)** - You should see:
   ```
   🔍 Fetching doctor data for: dr.rajesh@mediguide.com
   Raw appointments from storage: [...]
   Total appointments in central storage: X
   Filtered appointments for dr.rajesh@mediguide.com: X
   Doctor appointments: [...]
   📊 Stats: {...}
   ```

## Manual Migration (If Needed)

If appointments are not showing, open Browser Console and run:

```javascript
// Check what's in central storage
console.log('Central storage:', localStorage.getItem('mediguide_appointments'));

// Check patient storage
console.log('Patient storage:', localStorage.getItem('mediguide_appointments_mariyam@gmail.com'));

// Manually trigger migration
const { appointmentService } = await import('./services/appointmentService');
appointmentService.migrateExistingAppointments();
```

## Check localStorage Directly

Open Browser Console and run:

```javascript
// See all appointments in central storage
JSON.parse(localStorage.getItem('mediguide_appointments') || '[]')

// See appointments for specific patient
JSON.parse(localStorage.getItem('mediguide_appointments_mariyam@gmail.com') || '[]')

// See all localStorage keys
Object.keys(localStorage).filter(k => k.includes('appointment'))
```

## Common Issues

### Issue 1: Appointments not syncing
**Symptom**: Console shows "Total appointments in central storage: 0"
**Solution**: 
1. Go to `/appointments` page (triggers migration)
2. Check console for migration logs
3. Refresh doctor dashboard

### Issue 2: Wrong doctor email mapping
**Symptom**: Console shows "Doctor email: doctor@mediguide.com" instead of "dr.rajesh@mediguide.com"
**Solution**: Check the doctor name exactly matches "Dr. Rajesh Kumar" (case-sensitive)

### Issue 3: User ID vs Email
**Symptom**: Patient ID is not an email
**Solution**: The system uses `user.id` which should be the email. Check:
```javascript
// In console
const users = JSON.parse(localStorage.getItem('mediguide_users') || '[]');
console.log('Users:', users);
```

## Force Clear and Restart

If nothing works, clear all appointment data:

```javascript
// Clear all appointment data
Object.keys(localStorage)
  .filter(k => k.includes('appointment'))
  .forEach(k => localStorage.removeItem(k));

// Then book a new appointment and check logs
```

## Expected Console Output

### When Booking:
```
🔄 Syncing appointment to central storage: APT-1234567890-ABC123
Patient email: mariyam@gmail.com
Doctor name: Dr. Rajesh Kumar
✅ Converted to doctor format: {
  id: "APT-1234567890-ABC123",
  patientEmail: "mariyam@gmail.com",
  doctorEmail: "dr.rajesh@mediguide.com",
  ...
}
Doctor email: dr.rajesh@mediguide.com
➕ Added new appointment to central storage
💾 Saved to localStorage. Total appointments: 1
```

### When Viewing Doctor Dashboard:
```
🔍 Fetching doctor data for: dr.rajesh@mediguide.com
Raw appointments from storage: [{"id":"APT-...","doctorEmail":"dr.rajesh@mediguide.com",...}]
Total appointments in central storage: 1
Filtered appointments for dr.rajesh@mediguide.com: 1
Doctor appointments: [{...}]
📊 Stats: {totalAppointments: 1, todayAppointments: 0, ...}
```

## Next Steps

1. Book an appointment as patient
2. Open console and check for sync logs
3. Go to `/appointments` and check migration logs
4. Login as doctor and check fetch logs
5. Share the console output if issues persist
