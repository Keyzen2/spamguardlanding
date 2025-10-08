@echo off
cls

echo 🛡️ SpamGuard AI - Configuración Automática
echo ==============================================

echo 📋 Verificando dependencias...

:: Verificar Node.js
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js no está instalado. Por favor instálalo desde https://nodejs.org/
    pause
    exit /b 1
)

:: Verificar npm
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm no está instalado.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i

echo ✅ Node.js %NODE_VERSION% detectado
echo ✅ npm %NPM_VERSION% detectado

echo.
echo 🚀 Configurando Landing Page...
echo --------------------------------

echo 📦 Instalando dependencias...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Error instalando dependencias de la landing page
    pause
    exit /b 1
)

:: Configurar variables de entorno
if not exist ".env.local" (
    echo ⚙️ Creando archivo .env.local...
    copy .env.example .env.local >nul
    echo ✅ Archivo .env.local creado. Puedes editarlo según tus necesidades.
) else (
    echo ✅ .env.local ya existe
)

echo.
echo 🔧 Configurando Admin Dashboard...
echo ----------------------------------

cd admin-dashboard

echo 📦 Instalando dependencias del dashboard...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Error instalando dependencias del dashboard
    pause
    exit /b 1
)

:: Configurar variables de entorno
if not exist ".env" (
    echo ⚙️ Creando archivo .env...
    copy .env.example .env >nul
    echo ⚠️  IMPORTANTE: Edita admin-dashboard/.env con tus credenciales de Supabase
) else (
    echo ✅ .env ya existe
)

cd ..

echo.
echo 🎉 ¡Configuración completada!
echo =============================
echo.
echo 📝 Próximos pasos:
echo 1. Editar .env.local (landing page) si es necesario
echo 2. Editar admin-dashboard\.env con tus credenciales de Supabase
echo 3. Iniciar la landing page: npm run dev
echo 4. Iniciar el dashboard: cd admin-dashboard ^&^& npm run dev
echo.
echo 🔗 URLs por defecto:
echo    Landing Page: http://localhost:3000
echo    Admin Dashboard: http://localhost:5173
echo    Backend API: http://localhost:8000
echo.
echo 📖 Para más información, consulta el README.md

pause