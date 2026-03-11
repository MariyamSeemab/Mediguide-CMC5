@echo off
echo ========================================
echo MediGuide Installation Script
echo ========================================
echo.

echo Checking Node.js installation...
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not found in PATH!
    echo.
    echo Please add Node.js to your system PATH:
    echo 1. Open System Environment Variables
    echo 2. Edit PATH variable
    echo 3. Add: C:\Program Files\nodejs
    echo 4. Restart terminal and run this script again
    echo.
    pause
    exit /b 1
)

echo [OK] Node.js found!
node --version
echo.

echo Checking npm...
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] npm is not found in PATH!
    pause
    exit /b 1
)

echo [OK] npm found!
npm --version
echo.

echo Installing dependencies...
echo This may take a few minutes...
echo.

npm install

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo [SUCCESS] Installation complete!
    echo ========================================
    echo.
    echo To start the development server, run:
    echo   npm run dev
    echo.
) else (
    echo.
    echo ========================================
    echo [ERROR] Installation failed!
    echo ========================================
    echo.
    echo Please check the error messages above.
    echo.
)

pause
