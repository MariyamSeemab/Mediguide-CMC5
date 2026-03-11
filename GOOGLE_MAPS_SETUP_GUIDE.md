# Google Maps Integration Setup Guide

## Why Google Maps?

You requested **real Google Maps** instead of OpenStreetMap because:
- ✅ More accurate and up-to-date maps
- ✅ Better satellite imagery
- ✅ More reliable routing
- ✅ Familiar interface
- ✅ Better address search
- ✅ Real-time traffic data
- ✅ Street View integration

## Current Status

I've installed the Google Maps React library:
```bash
npm install @react-google-maps/api
```

## Step 1: Get Google Maps API Key

### 1.1 Go to Google Cloud Console
Visit: https://console.cloud.google.com/

### 1.2 Create a New Project (or select existing)
1. Click "Select a project" at the top
2. Click "NEW PROJECT"
3. Name it: "MediGuide-Emergency"
4. Click "CREATE"

### 1.3 Enable Required APIs
You need to enable 3 APIs:

#### A. Maps JavaScript API
1. Go to: https://console.cloud.google.com/apis/library/maps-backend.googleapis.com
2. Click "ENABLE"

#### B. Geocoding API
1. Go to: https://console.cloud.google.com/apis/library/geocoding-backend.googleapis.com
2. Click "ENABLE"

#### C. Directions API
1. Go to: https://console.cloud.google.com/apis/library/directions-backend.googleapis.com
2. Click "ENABLE"

### 1.4 Create API Key
1. Go to: https://console.cloud.google.com/apis/credentials
2. Click "+ CREATE CREDENTIALS"
3. Select "API key"
4. Copy the API key (looks like: `AIzaSyD...`)

### 1.5 Restrict API Key (Important for Security)
1. Click on the API key you just created
2. Under "Application restrictions":
   - Select "HTTP referrers (web sites)"
   - Add: `http://localhost:5173/*` (for development)
   - Add: `https://yourdomain.com/*` (for production)
3. Under "API restrictions":
   - Select "Restrict key"
   - Check: Maps JavaScript API, Geocoding API, Directions API
4. Click "SAVE"

## Step 2: Add API Key to Project

### 2.1 Open `.env` file
The file already has a placeholder:
```env
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

### 2.2 Replace with your actual key
```env
VITE_GOOGLE_MAPS_API_KEY=AIzaSyD1234567890abcdefghijklmnopqrstuv
```

### 2.3 Restart dev server
```bash
# Stop the server (Ctrl+C)
# Start again
npm run dev
```

## Step 3: Verify Integration

### 3.1 Check Console
Open browser console (F12) and look for:
```
✅ Google Maps loaded successfully
```

### 3.2 Test Features
1. **Location Auto-fetch**: Should work immediately
2. **Address Search**: Type address and search
3. **Map Display**: Should show real Google Maps
4. **Routing**: Ambulance should follow real roads

## Features with Google Maps

### 1. Real Google Maps Display
- Satellite view
- Street view
- Terrain view
- Traffic layer

### 2. Accurate Geocoding
- Better address recognition
- Supports landmarks
- International addresses
- Place autocomplete

### 3. Real-Time Routing
- Follows actual roads
- Avoids traffic
- Multiple route options
- Turn-by-turn directions

### 4. Advanced Features
- Traffic layer
- Transit layer
- Bicycling layer
- Custom map styling

## Pricing (Important!)

### Free Tier
Google Maps offers **$200 free credit per month**:
- Maps JavaScript API: $7 per 1,000 loads
- Geocoding API: $5 per 1,000 requests
- Directions API: $5 per 1,000 requests

### Example Usage
With $200 credit:
- ~28,000 map loads/month
- ~40,000 geocoding requests/month
- ~40,000 direction requests/month

### For Small Projects
- ✅ Development: FREE (localhost)
- ✅ Small apps: FREE (within $200 credit)
- ⚠️ Large apps: May need billing

### Enable Billing
1. Go to: https://console.cloud.google.com/billing
2. Link a credit card (won't be charged unless you exceed $200/month)
3. Set up budget alerts

## Comparison: OpenStreetMap vs Google Maps

### OpenStreetMap (Current)
- ✅ Completely FREE
- ✅ No API key needed
- ✅ No rate limits
- ✅ Open source
- ❌ Less accurate in some areas
- ❌ Slower updates
- ❌ Basic routing

### Google Maps (Requested)
- ✅ Most accurate maps
- ✅ Real-time traffic
- ✅ Better routing
- ✅ Familiar interface
- ✅ Street View
- ⚠️ Requires API key
- ⚠️ $200/month free tier
- ⚠️ Billing required for high usage

## Implementation Status

### ✅ Completed
- Installed `@react-google-maps/api`
- Added API key placeholder to `.env`
- Created setup guide

### 🔄 In Progress
- Rewriting Emergency.tsx to use Google Maps
- Replacing Leaflet components with Google Maps components
- Updating routing to use Google Directions API
- Updating geocoding to use Google Geocoding API

### ⏳ Pending
- Your Google Maps API key
- Testing with real API key
- Verifying all features work

## Next Steps

### For You:
1. ✅ Get Google Maps API key (follow Step 1 above)
2. ✅ Add key to `.env` file
3. ✅ Restart dev server
4. ✅ Test the Emergency page

### For Me:
Once you provide the API key, I'll:
1. Complete the Google Maps integration
2. Test all features
3. Ensure routing works on real roads
4. Verify address search works
5. Add traffic layer option

## Troubleshooting

### "Google Maps JavaScript API error: InvalidKeyMapError"
- API key is invalid or not set
- Check `.env` file has correct key
- Restart dev server after adding key

### "This page can't load Google Maps correctly"
- Billing not enabled
- API not enabled (enable Maps JavaScript API)
- Domain not whitelisted in API restrictions

### "REQUEST_DENIED" in console
- Geocoding API or Directions API not enabled
- Enable all 3 required APIs (see Step 1.3)

### Map shows but routing doesn't work
- Directions API not enabled
- Enable it in Google Cloud Console

## Alternative: Keep OpenStreetMap

If you prefer to avoid Google Maps costs, we can enhance OpenStreetMap:

### Improvements Available:
1. **Better map tiles**: Use Mapbox tiles (free tier available)
2. **Better routing**: Use GraphHopper API (free tier)
3. **Better geocoding**: Use LocationIQ API (free tier)
4. **Satellite view**: Add Esri satellite tiles

### Hybrid Approach:
- Use OpenStreetMap for display (FREE)
- Use Google Geocoding for addresses (more accurate)
- Use Google Directions for routing (better routes)

## Recommendation

### For Development/Testing:
✅ Use Google Maps (within free tier)

### For Production:
- **Low traffic (<10k users/month)**: Google Maps (FREE)
- **Medium traffic**: Google Maps with billing
- **High traffic**: Consider OpenStreetMap + paid routing

## Support

### Google Maps Documentation:
- React: https://react-google-maps-api-docs.netlify.app/
- API: https://developers.google.com/maps/documentation

### Need Help?
1. Check console for errors
2. Verify API key is correct
3. Ensure all 3 APIs are enabled
4. Check billing is enabled (if needed)

## Summary

To get **real Google Maps** working:

1. **Get API Key**: https://console.cloud.google.com/
2. **Enable 3 APIs**: Maps JavaScript, Geocoding, Directions
3. **Add to `.env`**: `VITE_GOOGLE_MAPS_API_KEY=your_key`
4. **Restart server**: `npm run dev`
5. **Test**: Open Emergency page

Once you have the API key, the integration will be complete and you'll have real Google Maps with accurate routing on actual roads!
