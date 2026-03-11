# Emergency Page Debug Guide

## Current Status
✅ Code updated with OpenStreetMap (100% FREE)
✅ Better error handling added
✅ Debug logging added
✅ Leaflet CSS loaded from CDN

## How to Test

### 1. Open Browser Console
1. Go to Emergency page: http://localhost:5173/emergency
2. Press F12 to open Developer Tools
3. Click "Console" tab
4. Look for debug messages

### 2. Test GPS Mode

**Steps:**
1. Page should auto-load and request location
2. Click "Allow" when browser asks for location permission
3. Watch console for messages:
   - `🎯 getUserLocation called`
   - `📍 Requesting geolocation...`
   - `✅ Location received: {coords}`
   - `🔍 Reverse geocoding with Nominatim...`
   - `📍 Address found: ...`

**If GPS doesn't work:**
- Check console for error messages
- Make sure you clicked "Allow" for location permission
- Try clicking the refresh button (circular icon)
- Check if you're using HTTPS or localhost (required for geolocation)

### 3. Test Manual Mode

**Steps:**
1. Click "Enter Manually" button
2. Type address: "8, Shepherd Rd, Police Colony, Nagpada, Byculla, Mumbai, Maharashtra 400008"
3. Click search button (magnifying glass icon) OR press Enter
4. Watch console for messages:
   - `🔍 Searching address with Nominatim: ...`
   - `📡 Request URL: ...`
   - `📥 Response status: 200`
   - `📦 Response data: ...`
   - `✅ Location found: {lat, lng}`
   - `📍 Address: ...`

**If Manual doesn't work:**
- Check console for error messages
- Look for red error text below input field
- Try shorter address: "Nagpada, Mumbai"
- Try different address: "Mumbai, Maharashtra"

### 4. Common Issues and Solutions

#### Issue: "Address too short"
**Solution**: Type at least 3 characters

#### Issue: "Address not found"
**Solution**: Try these formats:
- ✅ "Shepherd Rd, Mumbai"
- ✅ "Nagpada, Mumbai"
- ✅ "Byculla, Mumbai, Maharashtra"
- ✅ "Mumbai Central Station"
- ✅ "Gateway of India, Mumbai"

#### Issue: "Error searching address"
**Solutions**:
1. Check internet connection
2. Check console for CORS errors
3. Try again after a few seconds (Nominatim rate limit: 1 req/sec)

#### Issue: Map not showing
**Solutions**:
1. Check if `showMap` is true in console
2. Check if `userLocation` has values
3. Look for Leaflet errors in console
4. Check if Leaflet CSS loaded (Network tab)

#### Issue: GPS permission denied
**Solutions**:
1. Click the lock icon in address bar
2. Change location permission to "Allow"
3. Refresh page
4. Or use Manual mode instead

### 5. Console Commands for Testing

Open console and try these:

```javascript
// Check if location is set
console.log('User location:', userLocation);

// Check if map is showing
console.log('Show map:', showMap);

// Test address search manually
searchAddress('Mumbai, Maharashtra');

// Test GPS manually
getUserLocation();
```

### 6. Network Tab Debugging

1. Open Developer Tools → Network tab
2. Filter by "Fetch/XHR"
3. Look for requests to:
   - `nominatim.openstreetmap.org` (geocoding)
   - `router.project-osrm.org` (routing)
   - `tile.openstreetmap.org` (map tiles)

**Expected:**
- Status: 200 OK
- Response: JSON data with coordinates

**If failed:**
- Status: 429 = Rate limit (wait 1 second)
- Status: 404 = Address not found
- Status: 0 = CORS or network error

### 7. What to Look For

#### GPS Working:
- ✅ Console shows: "Location received"
- ✅ Blue marker appears on map
- ✅ Address fills in input field
- ✅ Map shows your area

#### Manual Search Working:
- ✅ Console shows: "Location found"
- ✅ Blue marker appears on map
- ✅ Address updates in input field
- ✅ Map shows searched location

#### Routing Working (after submit):
- ✅ Console shows: "Route found with X points"
- ✅ Red ambulance marker appears
- ✅ Red line shows route
- ✅ Ambulance moves along route

### 8. Test Addresses (Known to Work)

Try these if your address doesn't work:

**Mumbai:**
- "Gateway of India, Mumbai"
- "Chhatrapati Shivaji Terminus, Mumbai"
- "Bandra, Mumbai"
- "Andheri, Mumbai"

**Delhi:**
- "India Gate, Delhi"
- "Connaught Place, Delhi"
- "Chandni Chowk, Delhi"

**Bangalore:**
- "MG Road, Bangalore"
- "Koramangala, Bangalore"
- "Indiranagar, Bangalore"

### 9. Expected Console Output (Success)

**GPS Mode:**
```
🎯 getUserLocation called
📍 Requesting geolocation...
✅ Location received: {latitude: 18.9769, longitude: 72.8347}
📌 Setting user location: {lat: 18.9769, lng: 72.8347}
🔍 Reverse geocoding with Nominatim...
📍 Address found: Mumbai, Maharashtra, India
```

**Manual Mode:**
```
🔍 Searching address with Nominatim: 8, Shepherd Rd, Mumbai
📡 Request URL: https://nominatim.openstreetmap.org/search?...
📥 Response status: 200
📦 Response data: [{lat: "18.9769", lon: "72.8347", ...}]
✅ Location found: {lat: 18.9769, lng: 72.8347}
📍 Address: 8, Shepherd Road, Police Colony, Nagpada, Mumbai, Maharashtra, 400008, India
```

### 10. Quick Fixes

#### If nothing works:
1. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Clear browser cache
3. Check if dev server is running: `npm run dev`
4. Restart dev server

#### If GPS doesn't work but Manual does:
- Use Manual mode (it's just as good!)
- GPS requires HTTPS or localhost
- Some browsers block GPS in certain situations

#### If Manual doesn't work:
- Check internet connection
- Try simpler address: "Mumbai"
- Wait 1-2 seconds between searches (rate limit)
- Check console for specific error

### 11. Report Issues

If still not working, share:
1. Console error messages (screenshot)
2. Network tab (screenshot of failed requests)
3. Which mode you're testing (GPS or Manual)
4. What address you're trying
5. Browser and OS version

## Summary

The Emergency page should now:
- ✅ Auto-fetch GPS location on load
- ✅ Show blue marker on map
- ✅ Allow manual address entry
- ✅ Search any Indian address
- ✅ Show detailed error messages
- ✅ Log everything to console for debugging

Check the console for detailed debug messages to see exactly what's happening!
