@echo off
echo Starting local assessment server...
echo.
echo Please wait for the server to start, then open your browser to:
echo http://localhost:8000
echo.
echo To stop the server, close this window.
echo.
python -m http.server 8000
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Python is not installed or not in your PATH.
    echo Please install Python from python.org to run this project locally.
    pause
)
