# EMERGENCY FIX - Period Tracker Not Responding

## Issue
Only Calendar tab works. AI Companion and Period Tracker tabs are not clickable/functional.

## Quick Diagnostic Steps

1. **Open Browser Console** (F12)
2. **Look for JavaScript errors** - Red text in console
3. **Check if tabs are switching** - Click tabs and see if `activeTab` state changes

## Most Likely Causes

### 1. CSS Overlay Blocking Clicks
**Symptom**: Buttons visible but not clickable
**Fix**: Check for elements with high z-index covering the content

### 2. JavaScript Error Breaking Render
**Symptom**: Content not rendering at all
**Fix**: Check console for errors

### 3. Event Handler Not Attached
**Symptom**: Clicks do nothing, no console errors
**Fix**: Verify onClick handlers are properly bound

## Immediate Test

Add this to browser console to test if tabs are switching:
```javascript
// Check current tab
document.querySelector('.period-tabs button.active')?.textContent

// Try to click AI Companion tab programmatically
document.querySelectorAll('.period-tabs button')[0].click()
```

## Emergency Rollback

If nothing works, we need to:
1. Check git history for last working version
2. Identify what changed
3. Revert problematic changes

## Debug Commands

```javascript
// Check if React is rendering
document.querySelector('.ai-companion-section')

// Check if buttons exist
document.querySelectorAll('.sample-questions button').length

// Check if event listeners are attached
document.querySelector('.sample-questions button').__reactProps$

// Force tab change
// (Find React component and call setActiveTab)
```
