@echo off
setlocal enabledelayedexpansion

:: Get script directory
set SCRIPT_DIR=%~dp0
cd /d "%SCRIPT_DIR%"

title Care-Jai Demo Launcher

echo ==========================================
echo    Welcome to Care-Jai Demo Launcher
echo ==========================================

:: 1. Check for .env file
if not exist "backend\.env" (
    echo [!] WARNING: .env file not found in backend folder.
    echo     Please copy backend\.env.example to backend\.env and add your API keys.
    echo.
    pause
)

echo [1/3] Starting Backend...
:: Start backend in a separate window
start "Care-Jai Backend" cmd /k "cd /d %SCRIPT_DIR%backend && pip install -r requirements.txt && python main.py"

echo [2/3] Starting Frontend...
:: Start frontend in a separate window
start "Care-Jai Frontend" cmd /k "cd /d %SCRIPT_DIR%frontend && npm install && npm run dev"

echo [3/3] Waiting for services to start...
echo Opening browser in 10 seconds...
timeout /t 10

:: Open browser
start http://localhost:5173

echo ==========================================
echo    Demo is now running! 
echo    Backend: http://localhost:8000
echo    Frontend: http://localhost:5173
echo ==========================================
pause
