#!/bin/bash

# 🛡️ SpamGuard AI - Setup Script
# Configura automáticamente la landing page y el admin dashboard

echo "🛡️ SpamGuard AI - Configuración Automática"
echo "=============================================="

# Función para verificar si un comando existe
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Verificar dependencias
echo "📋 Verificando dependencias..."

if ! command_exists node; then
    echo "❌ Node.js no está instalado. Por favor instálalo desde https://nodejs.org/"
    exit 1
fi

if ! command_exists npm; then
    echo "❌ npm no está instalado."
    exit 1
fi

echo "✅ Node.js $(node --version) detectado"
echo "✅ npm $(npm --version) detectado"

# Configurar Landing Page
echo ""
echo "🚀 Configurando Landing Page..."
echo "--------------------------------"

# Instalar dependencias de la landing
echo "📦 Instalando dependencias..."
npm install

# Configurar variables de entorno
if [ ! -f ".env.local" ]; then
    echo "⚙️ Creando archivo .env.local..."
    cp .env.example .env.local
    echo "✅ Archivo .env.local creado. Puedes editarlo según tus necesidades."
else
    echo "✅ .env.local ya existe"
fi

# Configurar Admin Dashboard
echo ""
echo "🔧 Configurando Admin Dashboard..."
echo "----------------------------------"

cd admin-dashboard

# Instalar dependencias del dashboard
echo "📦 Instalando dependencias del dashboard..."
npm install

# Configurar variables de entorno
if [ ! -f ".env" ]; then
    echo "⚙️ Creando archivo .env..."
    cp .env.example .env
    echo "⚠️  IMPORTANTE: Edita admin-dashboard/.env con tus credenciales de Supabase"
else
    echo "✅ .env ya existe"
fi

cd ..

echo ""
echo "🎉 ¡Configuración completada!"
echo "============================="
echo ""
echo "📝 Próximos pasos:"
echo "1. Editar .env.local (landing page) si es necesario"
echo "2. Editar admin-dashboard/.env con tus credenciales de Supabase"
echo "3. Iniciar la landing page: npm run dev"
echo "4. Iniciar el dashboard: cd admin-dashboard && npm run dev"
echo ""
echo "🔗 URLs por defecto:"
echo "   Landing Page: http://localhost:3000"
echo "   Admin Dashboard: http://localhost:5173"
echo "   Backend API: http://localhost:8000"
echo ""
echo "📖 Para más información, consulta el README.md"