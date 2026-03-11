# Emergency Location Troubleshooting Guide

## Issue: Real Location Not Working

### Added Debug Logging
I've added comprehensive console logging to help diagnose the issue. Open the browser console (F12) and look for these messages:

### Expected Console Output (Success)
```
🚀 Emergency page mounted, useGPS: true
📍 Auto-fetching location...
🎯 getUserLocation called
📍 Requesting geolocation...
✅ Location received: {latitude: 19.0760, longitude: 72.8777, ...}
📌 Setting user location: {lat: 19.0760, lng: 72.8777}
🔍 Reverse geocoding...
📍 Address found: Mumbai, Maharashtra, India
```

### Common Issues & Solutions

## 1. Permission Denied
**Console shows**: `🚫 Permission denied by user`

**Causes**:
- User clicked "Block" on location permission prompt
- Browser settings block location access
- Site previously denied permission

**Solutions**:
1. **Chrome**: Click the 🔒 icon in address bar → Site settings → Location → Allow
2. **Firefox**: Click the 🔒 icon → Clear permissions → Reload page
3. **Safari**: Safari → Preferences → Websites → Location → Allow for this site

## 2. HTTPS Required
**Console shows**: `❌ Geolocation not supported` or permission denied

**Cause**: Geolocation API requires HTTPS (or localhost)

**Solutions**:
- ✅ **Development**: `http://localhost:5173` works fine
- ❌ **Production**: Must use HTTPS
- If testing on local network (e.g., `http://192.168.1.x`), geolocation won't work

**Fix for Production**:
```bash
# Deploy with HTTPS
# Use services like Vercel, Netlify, or configure SSL certificate
```

## 3. Position Unavailable
**Console shows**: `📍 Position unavailable`

**Causes**:
- GPS/Location services disabled on device
- No GPS signal (indoors, basement)
- Network location unavailable

**Solutions**:
1. **Enable Location Services**:
   - **Mac**: System Preferences → Security & Privacy → Privacy → Location Services
   - **Windows**: Settings → Privacy → Location
   - **Mobile**: Settings → Location → On

2. **Try different location method**:
   - Move near a window (better GPS signal)
   - Connect to WiFi (helps with network location)
   - Restart browser

## 4. Timeout
**Console shows**: `⏱️ Request timeout`

**Cause**: Location request took longer than 10 seconds

**Solutions**:
1. **Increase timeout** (if needed):
```typescript
{
  enableHighAccuracy: true,
  timeout: 30000, // 30 seconds instead of 10
  maximumAge: 0
}
```

2. **Check GPS signal**: Move to open area
3. **Disable high accuracy** (faster but less accurate):
```typescript
{
  enableHighAccuracy: false, // Use network location
  timeout: 10000,
  maximumAge: 0
}
```

## 5. No Console Output
**Console shows**: Nothing

**Causes**:
- Page not loading
- JavaScript error preventing execution
- React component not mounting

**Solutions**:
1. Check browser console for errors
2. Verify dev server is running: `npm run dev`
3. Clear browser cache and reload
4. Check if other pages work

## 6. Location Shows But Map Doesn't
**Console shows**: Location received but map not visible

**Causes**:
- `showMap` state not updating
- Map container CSS issue
- Leaflet not loading

**Solutions**:
1. Check if `showMap` is true in React DevTools
2. Verify Leaflet CSS is loaded
3. Check for CSS conflicts

## Testing Steps

### Step 1: Open Browser Console
1. Press F12 (or Cmd+Option+I on Mac)
2. Go to "Console" tab
3. Reload the Emergency page

### Step 2: Check Initial Logs
Look for:
```
🚀 Emergency page mounted, useGPS: true
📍 Auto-fetching location...
```

If you don't see these, the component isn't mounting properly.

### Step 3: Check Permission Prompt
- Browser should show location permission prompt
- Click "Allow" or "Always Allow"
- If no prompt appears, check browser settings

### Step 4: Check Location Response
Look for:
```
✅ Location received: {latitude: ..., longitude: ...}
```

If you see this, location is working!

### Step 5: Check Address Geocoding
Look for:
```
📍 Address found: [Your Address]
```

If this fails, it's a geocoding issue (not critical).

## Manual Testing

### Test GPS Mode
1. Open Emergency page
2. Should auto-fetch location
3. Check console for logs
4. Verify address appears in field
5. Verify map shows with blue marker

### Test Manual Mode
1. Click "Enter Manually" toggle
2. Type an address (e.g., "Mumbai Central Station")
3. Click search button
4. Check console for geocoding logs
5. Verify map updates

### Test Refresh Button
1. In GPS mode
2. Click the 🎯 refresh button
3. Should re-fetch location
4. Check console for new logs

## Browser-Specific Issues

### Chrome
- Most reliable for geolocation
- Clear site data: Settings → Privacy → Site Settings → Location
- Check: chrome://settings/content/location

### Firefox
- May be slower than Chrome
- Check: about:preferences#privacy → Permissions → Location
- Clear permissions and retry

### Safari
- Requires explicit permission
- Check: Safari → Preferences → Websites → Location
- May need to restart Safari

### Mobile Browsers
- Ensure location services enabled on device
- May need to grant permission to browser app itself
- Check device settings → Apps → Browser → Permissions

## Network Issues

### Reverse Geocoding Fails
**Console shows**: `❌ Reverse geocoding error`

**Not Critical**: Location still works, just shows coordinates instead of address

**Causes**:
- Nominatim API rate limit (1 req/sec)
- Network error
- API temporarily down

**Solutions**:
- Wait a few seconds and try again
- Use coordinates directly (still works for ambulance)
- Check internet connection

### Routing API Fails
**Console shows**: Routing error

**Fallback**: Ambulance uses straight-line movement

**Solutions**:
- Check internet connection
- OSRM API might be temporarily down
- Ambulance will still move (just not on roads)

## Quick Fixes

### Fix 1: Clear Browser Data
```
Chrome: Ctrl+Shift+Delete → Clear browsing data
Firefox: Ctrl+Shift+Delete → Clear recent history
Safari: Safari → Clear History
```

### Fix 2: Reset Location Permission
```
1. Go to browser settings
2. Find site permissions
3. Remove Emergency page
4. Reload page
5. Allow permission when prompted
```

### Fix 3: Use Incognito/Private Mode
```
1. Open incognito window
2. Navigate to Emergency page
3. Allow location permission
4. Test if it works
```

### Fix 4: Try Different Browser
```
1. Test in Chrome (most reliable)
2. Test in Firefox
3. Test in Safari
4. Compare results
```

## Development Mode

### Localhost Testing
```bash
# Start dev server
npm run dev

# Open in browser
http://localhost:5173/emergency

# Location should work (localhost is allowed)
```

### Network Testing
```bash
# If testing on local network (e.g., 192.168.1.x)
# Geolocation WON'T work (requires HTTPS)

# Solution: Use localhost or deploy with HTTPS
```

## Production Deployment

### Requirements
- ✅ HTTPS certificate
- ✅ Valid domain
- ✅ SSL configured

### Recommended Platforms
- **Vercel**: Auto HTTPS
- **Netlify**: Auto HTTPS
- **Firebase Hosting**: Auto HTTPS
- **AWS S3 + CloudFront**: Configure SSL

## Still Not Working?

### Collect Debug Info
1. Open console (F12)
2. Copy all console output
3. Note browser and version
4. Note operating system
5. Note error messages

### Check These
- [ ] Browser supports geolocation
- [ ] Location services enabled on device
- [ ] Permission granted to site
- [ ] Using HTTPS (or localhost)
- [ ] No JavaScript errors in console
- [ ] Internet connection working
- [ ] GPS signal available (if on mobile)

### Fallback: Use Manual Mode
If GPS doesn't work:
1. Click "Enter Manually" toggle
2. Type your address
3. Click search button
4. Map will update with location
5. Submit form normally

## Console Commands for Testing

### Test Geolocation Support
```javascript
console.log('Geolocation supported:', 'geolocation' in navigator);
```

### Test Permission Status
```javascript
navigator.permissions.query({name: 'geolocation'}).then(result => {
  console.log('Permission:', result.state);
});
```

### Manual Location Test
```javascript
navigator.geolocation.getCurrentPosition(
  pos => console.log('Success:', pos.coords),
  err => console.error('Error:', err)
);
```

## Expected Behavior

### On Page Load
1. Component mounts
2. Auto-fetches location (GPS mode)
3. Shows loading spinner
4. Permission prompt appears (first time)
5. Location received
6. Address geocoded
7. Map displays
8. Blue marker shows location

### On Refresh Button Click
1. Shows loading spinner
2. Re-fetches location
3. Updates address
4. Updates map

### On Manual Mode
1. Input field enabled
2. User types address
3. Clicks search
4. Address geocoded
5. Map updates
6. Marker moves to new location

## Summary

The location feature should work if:
- ✅ Using HTTPS or localhost
- ✅ Location permission granted
- ✅ Location services enabled
- ✅ GPS signal available
- ✅ Internet connection working

Check the console logs to see exactly where it's failing, then follow the appropriate solution above.
