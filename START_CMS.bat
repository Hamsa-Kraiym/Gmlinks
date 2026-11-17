@echo off
cd /d "%~dp0cms"
docker compose up -d
timeout /t 8 /nobreak >nul
node setup-our-work.mjs
start http://localhost:8055/admin
echo Directus is running.
pause
