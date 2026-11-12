@echo off
setlocal
title Jayashri Portfolio
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 goto :nonode

netstat -ano | findstr /C:":3000 " | findstr /C:"LISTENING" >nul
if not errorlevel 1 (
  echo The portfolio is already running. Opening http://localhost:3000
  start "" http://localhost:3000
  exit /b 0
)

if not exist "node_modules" (
  echo Installing dependencies. This only happens once...
  echo.
  call npm install
  if errorlevel 1 goto :failed
)

echo.
echo Starting the portfolio at http://localhost:3000
echo The browser opens automatically once the server is ready.
echo Press Ctrl+C to stop the server.
echo.

if /i "%~1"=="--no-open" goto :skipopen
start "" /b powershell -NoProfile -NonInteractive -WindowStyle Hidden -Command "$u='http://localhost:3000'; for($i=0;$i -lt 120;$i++){try{$r=Invoke-WebRequest -UseBasicParsing -Uri $u -TimeoutSec 2; if($r.StatusCode -eq 200){Start-Process $u; break}}catch{}; Start-Sleep -Seconds 1}"
:skipopen

call npm run dev
if errorlevel 1 goto :failed
goto :end

:nonode
echo.
echo Node.js was not found.
echo Install Node.js 18.17 or newer from https://nodejs.org and run this file again.
echo.
pause
exit /b 1

:failed
echo.
echo The dev server stopped with an error. Check the messages above.
echo.
pause
exit /b 1

:end
pause
