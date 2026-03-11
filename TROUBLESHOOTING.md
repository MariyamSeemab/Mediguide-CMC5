# Troubleshooting Guide

## Node.js Not Found Error

### Problem
```
'node' is not recognized as an internal or external command
```

### Solution

#### Option 1: Add to System PATH (Recommended)

1. **Open Environment Variables**:
   - Press `Win + R`
   - Type `sysdm.cpl` and press Enter
   - Go to "Advanced" tab
   - Click "Environment Variables"

2. **Edit PATH**:
   - Under "System variables", find "Path"
   - Click "Edit"
   - Click "New"
   - Add: `C:\Program Files\nodejs`
   - Click "OK" on all dialogs

3. **Restart Everything**:
   - Close ALL terminal windows
   - Close Kiro/VS Code
   - Reopen and try again

4. **Verify**:
   ```bash
   node --version
   npm --version
   ```

#### Option 2: Use Full Path (Temporary)

If you can't modify PATH, use the full path:

```bash
# Instead of: npm install
# Use:
& "C:\Program Files\nodejs\npm.cmd" install

# Instead of: npm run dev
# Use:
& "C:\Program Files\nodejs\npm.cmd" run dev
```

## Installation Errors

### EPERM Error (Permission Denied)

**Solution**: Run terminal as Administrator
- Right-click PowerShell/CMD
- Select "Run as Administrator"
- Navigate to project and run `npm install`

### Network/Timeout Errors

**Solution**: Try these commands:
```bash
npm config set registry https://registry.npmjs.org/
npm cache clean --force
npm install
```

### Module Not Found Errors

These are normal before `npm install` completes. They will disappear after successful installation.

## TypeScript Errors in IDE

### Red Squiggles Everywhere

**Cause**: Dependencies not installed yet

**Solution**: 
1. Run `npm install` successfully
2. Restart your IDE
3. Errors should disappear

## Running the App

### Port Already in Use

**Error**: `Port 5173 is already in use`

**Solution**:
```bash
# Kill the process using the port
netstat -ano | findstr :5173
taskkill /PID <PID_NUMBER> /F

# Or use a different port
npm run dev -- --port 3000
```

### Blank Page After Starting

**Solution**:
1. Check browser console for errors (F12)
2. Ensure all files are saved
3. Try hard refresh (Ctrl + Shift + R)
4. Clear browser cache

## Common Issues

### "Cannot find module 'react'"

**Status**: Normal before installation
**Fix**: Complete `npm install`

### "JSX element implicitly has type 'any'"

**Status**: Normal before installation
**Fix**: Complete `npm install` to get React types

### Build Fails

**Solution**:
```bash
# Clean and reinstall
rm -rf node_modules
rm package-lock.json
npm install
```

## Getting Help

If you're still stuck:

1. Check the error message carefully
2. Search the error on Google/Stack Overflow
3. Ensure Node.js version is 18+ (`node --version`)
4. Ensure npm version is 9+ (`npm --version`)
5. Try deleting `node_modules` and reinstalling

## Quick Checklist

- [ ] Node.js installed (v18+)
- [ ] Node.js added to PATH
- [ ] Terminal restarted after PATH change
- [ ] `node --version` works
- [ ] `npm --version` works
- [ ] In correct directory (`mediguide-app`)
- [ ] `npm install` completed successfully
- [ ] No red errors in terminal

## Success Indicators

You'll know everything is working when:
- ✅ `npm install` completes without errors
- ✅ `node_modules` folder exists
- ✅ TypeScript errors disappear in IDE
- ✅ `npm run dev` starts the server
- ✅ Browser opens to `http://localhost:5173`
- ✅ You see the MediGuide homepage
