# SpamGuard AI - Landing Page & Admin Dashboard

SpamGuard AI es una solución completa de protección anti-spam con Machine Learning para WordPress. Este repositorio contiene la landing page y el panel de administración.

## 🚀 Estructura del Proyecto

```
spamguardlanding-main/
├── 📁 Landing Page (Next.js)
│   ├── app/                 # App Router de Next.js
│   ├── components/          # Componentes React
│   ├── public/             # Archivos estáticos
│   └── package.json
│
└── 📁 admin-dashboard/     # Panel de Administración (Vite + React)
    ├── src/
    │   ├── components/     # Componentes del dashboard
    │   ├── pages/         # Páginas del admin
    │   ├── lib/           # Utilidades y API
    │   └── types/         # Tipos TypeScript
    └── package.json
```

## 🛠️ Instalación y Configuración

### Landing Page (Next.js)

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Configurar variables de entorno:**
   ```bash
   cp .env.example .env.local
   # Editar .env.local con tus valores
   ```

3. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```

4. **Construir para producción:**
   ```bash
   npm run build
   npm start
   ```

### Admin Dashboard (Vite + React)

1. **Navegar al directorio:**
   ```bash
   cd admin-dashboard
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   ```bash
   cp .env.example .env
   # Editar .env con tus valores de Supabase y API
   ```

4. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```

5. **Construir para producción:**
   ```bash
   npm run build
   ```

## 🔧 Variables de Entorno

### Landing Page (.env.local)
```env
NODE_ENV=development
NEXT_PUBLIC_ADMIN_URL=https://admin.spamguard.local
```

### Admin Dashboard (.env)
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
VITE_API_URL=https://your-api-url.com
NODE_ENV=development
```

## 🎯 Características Implementadas

### ✅ Landing Page
- ✅ Diseño responsive con Tailwind CSS
- ✅ Menú móvil funcional
- ✅ Navegación suave entre secciones
- ✅ Optimización SEO con metadatos
- ✅ Accesibilidad mejorada (ARIA labels)
- ✅ Animaciones CSS optimizadas

### ✅ Admin Dashboard
- ✅ Autenticación con Supabase
- ✅ Estados de carga y error mejorados
- ✅ Manejo robusto de errores de API
- ✅ Dashboard con métricas en tiempo real
- ✅ Gestión de sitios y alertas
- ✅ Diseño responsive

## 🔐 Seguridad

- **Autenticación:** Supabase Auth con JWT
- **Validación:** Verificación de tokens y sesiones
- **CORS:** Configurado para dominios específicos
- **Variables sensibles:** Nunca en el código fuente

## 📱 Responsive Design

El proyecto está optimizado para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1920px+)

## 🚀 Despliegue

### Landing Page
- **Vercel:** `npm run build` + deploy automático
- **Netlify:** Compatible con builds estáticos
- **GitHub Pages:** Soporte completo con `output: 'export'`

### Admin Dashboard
- **Vercel:** Configurado con `vercel.json`
- **Netlify:** Deploy directo desde `/admin-dashboard`
- **Railway/Render:** Compatible

## 🐛 Problemas Conocidos y Soluciones

### 1. Variables de entorno no cargadas
```bash
# Verificar que los archivos .env existen
ls -la .env*
# Reiniciar el servidor de desarrollo
```

### 2. Errores de autenticación
```bash
# Verificar configuración de Supabase
echo $VITE_SUPABASE_URL
# Limpiar caché del navegador
```

### 3. Imágenes no optimizadas
```bash
# Las imágenes están desoptimizadas para export estático
# Para optimización, cambiar next.config.mjs
```

## 🤝 Contribuir

1. Fork el repositorio
2. Crear una rama para tu feature: `git checkout -b feature/nueva-funcionalidad`
3. Commit tus cambios: `git commit -m 'Añadir nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Crear un Pull Request

## 📋 Scripts Disponibles

### Landing Page
```bash
npm run dev      # Desarrollo
npm run build    # Construir
npm run start    # Producción
npm run lint     # Linting
```

### Admin Dashboard
```bash
npm run dev      # Desarrollo
npm run build    # Construir
npm run preview  # Preview de build
```

## 🔗 Enlaces Útiles

- **Documentation:** [Next.js Docs](https://nextjs.org/docs)
- **Dashboard Framework:** [Vite Docs](https://vitejs.dev/)
- **Authentication:** [Supabase Docs](https://supabase.com/docs)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/docs)

## 📞 Soporte

- **Issues:** [GitHub Issues](https://github.com/spamguard-ai/spamguard/issues)
- **Discussions:** [GitHub Discussions](https://github.com/spamguard-ai/spamguard/discussions)

---

**Desarrollado con ❤️ para la comunidad WordPress**