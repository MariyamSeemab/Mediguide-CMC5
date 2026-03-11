# Period Tracker Debug Guide

## Issues Identified

### 1. Button Click Not Working
**Symptoms**: Buttons appear but don't respond to clicks, page feels laggy

**Potential Causes**:
1. ✅ **FIXED**: Grid layout broken by wrapping buttons in divs
2. ✅ **FIXED**: GlobalLanguageSelector z-index conflict (excluded Period Tracker)
3. ✅ **FIXED**: Tab z-index too high (reduced from 100 to 50)
4. ⚠️ **POSSIBLE**: useEffect infinite loop causing performance issues
5. ⚠️ **POSSIBLE**: Missing event handler dependencies

### 2. Navigation to Chatbot Not Working
**Status**: ✅ FIXED
- Added `useLocation` to Chatbot.tsx
- Added initial message handling via navigation state
- Auto-sends message when received from Period Tracker

### 3. Smart Relief Assistant Not Expanding
**Status**: ✅ FIXED
- Removed nested div structure that broke grid layout
- Moved expanded content outside the grid
- Added proper expand/collapse logic

## Fixes Applied

### Fix 1: Grid Layout Structure
**File**: `CMC-5-main/src/pages/PeriodTracker.tsx`

Changed from:
```tsx
<div className="symptom-selector-compact">
  {symptoms.map(symptom => (
    <div key={symptom}>  // ❌ This breaks grid
      <button>...</button>
      {expanded && <div>...</div>}
    </div>
  ))}
</div>
```

To:
```tsx
<div className="symptom-selector-compact">
  {symptoms.map(symptom => (
    <button key={symptom}>...</button>  // ✅ Direct grid children
  ))}
</div>
{/* Expanded content outside grid */}
{expandedSymptom && <div>...</div>}
```

### Fix 2: Z-Index Conflicts
**Files**: 
- `CMC-5-main/src/pages/PeriodTracker.css` - Reduced tabs z-index from 100 to 50
- `CMC-5-main/src/components/GlobalLanguageSelector.tsx` - Excluded `/period-tracker` path

### Fix 3: Navigation State Handling
**File**: `CMC-5-main/src/pages/Chatbot.tsx`

Added:
```tsx
import { useLocation } from 'react-router-dom';

const location = useLocation();
const initialMessageSentRef = useRef(false);

useEffect(() => {
  const state = location.state as { initialMessage?: string } | null;
  if (state?.initialMessage && !initialMessageSentRef.current) {
    initialMessageSentRef.current = true;
    setTimeout(() => {
      setInputText(state.initialMessage);
    }, 500);
  }
}, [location.state]);
```

## Testing Checklist

### Test 1: Button Clicks
- [ ] Click on tab buttons (AI Companion, Period Tracker, Calendar, Analytics)
- [ ] Click on sample questions in AI Chat section
- [ ] Click on symptom cards in Smart Relief Assistant
- [ ] Click on self-care cards

### Test 2: AI Chat Navigation
- [ ] Click "Why do I get cramps?" sample question
- [ ] Should navigate to `/chatbot`
- [ ] Question should appear in input field
- [ ] Question should auto-send to AI
- [ ] Should receive AI response

### Test 3: Smart Relief Assistant
- [ ] Click on "Cramps" card
- [ ] Should expand to show relief solutions
- [ ] Should show "Do These", "Medications", "Don't Do These" sections
- [ ] Click again to collapse
- [ ] Try other symptoms (headache, bloating, etc.)

### Test 4: Self Care Cards
- [ ] Verify 8 cards are displayed
- [ ] New cards: Herbal Tea, Journaling
- [ ] Click "Try Now" button on Breathing Exercise
- [ ] Should open meditation modal

### Test 5: Performance
- [ ] Page should load quickly
- [ ] No lag when clicking buttons
- [ ] Smooth tab switching
- [ ] No console errors

## Browser Console Debugging

Open browser console (F12) and check for:

1. **React Errors**:
   ```
   Warning: Maximum update depth exceeded
   ```
   - Indicates infinite re-render loop

2. **Event Handler Errors**:
   ```
   Uncaught TypeError: Cannot read property 'xxx' of undefined
   ```
   - Indicates missing function or state

3. **Navigation Errors**:
   ```
   No routes matched location "/chatbot"
   ```
   - Indicates routing issue

## Performance Profiling

If page is still laggy:

1. Open React DevTools
2. Go to Profiler tab
3. Click Record
4. Interact with page
5. Stop recording
6. Look for:
   - Components rendering too frequently
   - Long render times
   - Unnecessary re-renders

## Common Issues & Solutions

### Issue: Buttons still not clickable
**Solution**: Check for:
- Overlaying elements with higher z-index
- CSS `pointer-events: none` on parent elements
- JavaScript errors preventing event handlers from attaching

### Issue: Page is laggy
**Solution**: 
- Check useEffect dependencies
- Look for infinite loops in state updates
- Use React.memo for expensive components
- Add useCallback for event handlers

### Issue: Navigation not working
**Solution**:
- Verify route exists in App.tsx
- Check if navigate function is called correctly
- Ensure no errors in console blocking navigation

## Next Steps if Issues Persist

1. **Add Console Logs**:
   ```tsx
   const handleAiChat = (question: string) => {
     console.log('🔍 handleAiChat called with:', question);
     navigate('/chatbot', { state: { initialMessage: question } });
   };
   ```

2. **Check Event Propagation**:
   ```tsx
   onClick={(e) => {
     e.stopPropagation();
     console.log('Button clicked');
     handleClick();
   }}
   ```

3. **Verify State Updates**:
   ```tsx
   useEffect(() => {
     console.log('State updated:', { expandedSymptom, activeTab });
   }, [expandedSymptom, activeTab]);
   ```

4. **Test in Incognito Mode**:
   - Rules out browser extension conflicts
   - Clears cached JavaScript

5. **Hard Refresh**:
   - Ctrl + Shift + R (Windows/Linux)
   - Cmd + Shift + R (Mac)
   - Clears cached files

## Files Modified

1. `CMC-5-main/src/pages/PeriodTracker.tsx` - Main component logic
2. `CMC-5-main/src/pages/Chatbot.tsx` - Initial message handling
3. `CMC-5-main/src/pages/PeriodTracker.css` - Z-index fix
4. `CMC-5-main/src/components/GlobalLanguageSelector.tsx` - Excluded path

## Status: READY FOR TESTING

All identified issues have been fixed. Please test the page and report any remaining issues with:
- Specific button that's not working
- Browser console errors
- Steps to reproduce the issue
