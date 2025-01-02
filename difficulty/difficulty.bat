@echo off
color 9
echo difficulty selector
echo N: Normal (default mode)
echo H: Hard (harder progression)
set /p DIFF="Mode: "

if %DIFF% == "N"  echo "global.mode = 'normal'" > "%~dp0..\kubejs\startup_scripts\difficulty.js"

if %DIFF% == "H" echo "global.mode = 'hard'" > "%~dp0..\kubejs\startup_scripts\difficulty.js"

else echo "invalid output!"

exit 0

