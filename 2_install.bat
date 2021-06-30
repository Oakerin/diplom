@echo off
echo Please, wait...
echo ---
cd back
echo Installing backend packages
call npm i
echo Done!
echo ---
cd ..
cd front
echo Installing frontend packages
call npm i
echo Done!
echo ---
pause
