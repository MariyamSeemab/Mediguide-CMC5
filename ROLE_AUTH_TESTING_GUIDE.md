# Role-Based Auth - Quick Testing Guide

## 🚀 Quick Test (5 minutes)

### Test 1: Signup as Patient

1. Go to: http://localhost:5173/signup
2. Fill form:
   - Name: Patient Test
   - Register As: **Patient**
   - Email: patient@test.com
   - Password: test123
   - Confirm: test123
3. Click "Create Account"
4. **Expected:** Stays on homepage (/)

### Test 2: Signup as Doctor

1. Go to: http://localhost:5173/signup
2. Fill form:
   - Name: Doctor Test
   - Register As: **Doctor**
   - Email: doctor@test.com
   - Password: test123
   - Confirm: test123
3. Click "Create Account"
4. **Expected:** Redirects to /doctor/dashboard

### Test 3: Signup as Ambulance Responder

1. Go to: http://localhost:5173/signup
2. Fill form:
   - Name: Ambulance Test
   - Register As: **Ambulance Responder**
   - Email: ambulance@test.com
   - Password: test123
   - Confirm: test123
3. Click "Create Account"
4. **Expected:** Redirects to /emergency

### Test 4: Signup as Lab Technician

1. Go to: http://localhost:5173/signup
2. Fill form:
   - Name: Lab Test
   - Register As: **Lab Technician**
   - Email: lab@test.com
   - Password: test123
   - Confirm: test123
3. Click "Create Account"
4. **Expected:** Redirects to /lab-results

### Test 5: Login with Existing Doctor Account

1. Go to: http://localhost:5173/
2. Click "Login" button
3. Enter:
   - Email: doctor@email.com
   - Password: doctor@123
4. Click "Sign In"
5. **Expected:** Redirects to /doctor/dashboard

### Test 6: Role Validation

1. Go to: http://localhost:5173/signup
2. Fill form but **don't select role**
3. Click "Create Account"
4. **Expected:** Shows error "Please select your role"

## ✅ Success Checklist

- [ ] Patient signup redirects to homepage
- [ ] Doctor signup redirects to doctor dashboard
- [ ] Ambulance Responder signup redirects to emergency page
- [ ] Lab Technician signup redirects to lab results page
- [ ] Login redirects based on stored role
- [ ] Role dropdown is required
- [ ] Role dropdown matches input styling
- [ ] Error shown when role not selected
- [ ] Predefined doctor account works
- [ ] Role persists after page refresh

## 🎯 Expected Results

### Signup Redirections:
| Role | Redirect URL |
|------|-------------|
| Patient | / |
| Doctor | /doctor/dashboard |
| Ambulance Responder | /emergency |
| Lab Technician | /lab-results |

### Login Redirections:
| Role | Redirect URL |
|------|-------------|
| Patient | / (homepage) |
| Doctor | /doctor/dashboard |
| Admin | /admin/dashboard |
| Ambulance | /emergency |
| Lab | /lab-results |

**Note:** Backend stores roles as 'ambulance' and 'lab', but displays as "Ambulance Responder" and "Lab Technician".

## 🔍 What to Check

### Visual Checks:
1. Role dropdown appears between Name and Email
2. Dropdown styling matches other inputs
3. Dropdown has placeholder "Select your role"
4. All 4 role options visible
5. Dropdown disabled during submission

### Functional Checks:
1. Cannot submit without selecting role
2. Error message appears if role not selected
3. Auto-redirects after successful signup
4. Auto-redirects after successful login
5. Role persists in localStorage
6. Role shown in user object

### Browser Console Checks:
```javascript
// After login, check user object
const user = JSON.parse(localStorage.getItem('mediguide_current_user'));
console.log('User role:', user.role);
```

## 🐛 Common Issues

### Issue 1: Not Redirecting
**Check:** Browser console for errors
**Fix:** Hard refresh (Cmd+Shift+R)

### Issue 2: Role Not Saving
**Check:** localStorage in DevTools
**Fix:** Clear localStorage and try again

### Issue 3: Dropdown Not Styled
**Check:** CSS loaded correctly
**Fix:** Hard refresh browser

### Issue 4: Validation Not Working
**Check:** Form submission handler
**Fix:** Ensure role field is required

## 📱 Mobile Testing

Test on mobile viewport:
1. Open DevTools
2. Toggle device toolbar
3. Select mobile device
4. Test signup flow
5. Verify dropdown works on mobile

## 🎉 All Tests Pass?

If all tests pass:
✅ Role-based auth is working perfectly!
✅ Ready for production use
✅ Users can signup with roles
✅ Auto-redirection is functional

---

**Quick Test Time:** ~5 minutes
**Full Test Time:** ~15 minutes
**Status:** Ready to test!
