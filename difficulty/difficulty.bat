@echo off
color 9
echo difficulty selector
echo N: Normal (default mode)
echo H: Hard (harder progression)
set /p DIFF="Mode: "

if /I "%DIFF%"=="N" (
    echo global.mode = 'normal' > "%~dp0..\kubejs\startup_scripts\difficulty.js"
    echo Mode set to Normal.
) else if /I "%DIFF%"=="H" (
    echo global.mode = 'hard' > "%~dp0..\kubejs\startup_scripts\difficulty.js"
    echo Mode set to Hard.
) else (
    echo Invalid output!
)

pause
exit
