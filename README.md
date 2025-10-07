# 🥗 NutriFlow - Plataforma de Nutrición Inteligente

Una plataforma completa de gestión nutricional diseñada para nutricionistas independientes y sus pacientes. Desarrollada con Next.js 14, TypeScript, TailwindCSS y Supabase.

## ✨ Características Principales

### Para Pacientes
- 📊 **Dashboard Personalizado** - Seguimiento de progreso en tiempo real
- 📈 **Gráficos de Progreso** - Visualización de evolución de peso y bienestar
- 📝 **Registro de Progreso** - Log diario de peso, notas y estado de ánimo
- 📱 **Acceso Móvil** - Diseño 100% responsive
- 💬 **Contacto Directo** - Integración con WhatsApp

### Para Nutricionistas (Panel Admin)
- 📊 **Business Intelligence** - Métricas y KPIs en tiempo real
- 👥 **Gestión de Pacientes** - Lista completa con búsqueda y filtros
- 📈 **Análisis de Ingresos** - Seguimiento de rentabilidad
- 📊 **Reportes Visuales** - Gráficos de nuevos pacientes y retención
- 🔍 **Búsqueda Avanzada** - Filtros por plan, estado, fecha

### Páginas Públicas
- 🏠 **Landing Page** - Diseño moderno con animaciones
- 👩‍⚕️ **Página "Sobre Mí"** - Perfil profesional de la nutricionista
- 🛍️ **Servicios** - Catálogo de planes con enlaces a WhatsApp
- 📱 **SEO Optimizado** - Meta tags y estructura semántica

## 🚀 Tecnologías Utilizadas

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: TailwindCSS, Framer Motion
- **Backend**: Supabase (PostgreSQL)
- **Autenticación**: Supabase Auth
- **Gráficos**: Recharts
- **Iconos**: Lucide React
- **Formularios**: React Hook Form + Zod

## 📦 Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- Cuenta en Supabase
- Cuenta en Vercel (para despliegue)

### 1. Clonar el Repositorio
```bash
git clone <repository-url>
cd nutriflow-app
```

### 2. Instalar Dependencias
```bash
npm install
# o
yarn install
```

### 3. Configurar Variables de Entorno
Copia el archivo de ejemplo y configura tus variables:

```bash
cp env.example .env.local
```

Edita `.env.local` con tus credenciales:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key_de_supabase
SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key

# Stripe Configuration (opcional)
STRIPE_PUBLISHABLE_KEY=tu_stripe_publishable_key
STRIPE_SECRET_KEY=tu_stripe_secret_key
STRIPE_WEBHOOK_SECRET=tu_stripe_webhook_secret

# Google Analytics (opcional)
NEXT_PUBLIC_GA_ID=tu_google_analytics_id

# WhatsApp Configuration
WHATSAPP_PHONE_NUMBER=51987654321
```

### 4. Configurar Supabase

#### Crear Proyecto en Supabase
1. Ve a [supabase.com](https://supabase.com)
2. Crea un nuevo proyecto
3. Copia la URL y las claves API

#### Ejecutar Esquema de Base de Datos
1. Ve al editor SQL de Supabase
2. Copia y ejecuta el contenido de `database/schema.sql`
3. Esto creará todas las tablas y políticas de seguridad

#### Configurar Usuario Admin
```sql
-- Reemplaza 'tu-user-id' con el ID real del usuario admin
UPDATE profiles 
SET is_admin = true 
WHERE id = 'tu-user-id';
```

### 5. Ejecutar en Desarrollo
```bash
npm run dev
# o
yarn dev
```

Visita [http://localhost:3000](http://localhost:3000) para ver la aplicación.

## 🏗️ Estructura del Proyecto

```
nutriflow-app/
├── app/
│   ├── (public_pages)/          # Páginas públicas
│   │   ├── layout.tsx
│   │   ├── page.tsx            # Landing page
│   │   ├── perfil/             # Página "Sobre Mí"
│   │   └── servicios/          # Página de servicios
│   ├── (authenticated_areas)/  # Áreas protegidas
│   │   ├── dashboard/          # Panel de pacientes
│   │   └── admin/              # Panel administrativo
│   ├── api/                    # Rutas de API
│   │   └── auth/               # Autenticación
│   └── globals.css             # Estilos globales
├── components/
│   ├── ui/                     # Componentes básicos
│   ├── layout/                 # Navbar, Footer
│   └── sections/               # Secciones de páginas
├── lib/
│   ├── supabase.ts            # Configuración Supabase
│   └── utils.ts               # Utilidades
├── database/
│   └── schema.sql             # Esquema de base de datos
└── public/                    # Archivos estáticos
```

## 🎨 Paleta de Colores

La aplicación utiliza una paleta de colores cuidadosamente seleccionada:

- **Verde Bosque**: `#2D5B4F` - Color principal
- **Celeste Agua**: `#A8DADC` - Color secundario
- **Blanco Hueso**: `#F1FAEE` - Fondos principales
- **Rojo Coral**: `#E63946` - Acentos y CTAs
- **Azul Acero**: `#457B9D` - Gráficos y datos

## 📱 Funcionalidades por Implementar

### Integraciones Pendientes
- [ ] **Stripe/MercadoPago** - Pasarela de pagos
- [ ] **Google Calendar** - Agendamiento automático
- [ ] **Google Analytics** - Tracking de conversiones
- [ ] **Email Marketing** - Mailchimp/ConvertKit
- [ ] **Notificaciones Push** - Service Workers

### Mejoras Futuras
- [ ] **App Móvil** - React Native
- [ ] **Chat Interno** - Mensajería en tiempo real
- [ ] **IA Nutricional** - Recomendaciones automáticas
- [ ] **Integración Wearables** - Fitbit, Apple Health
- [ ] **Recetas Automáticas** - Generación de menús

## 🚀 Despliegue en Vercel

### 1. Conectar con GitHub
1. Sube tu código a GitHub
2. Conecta tu repositorio con Vercel
3. Configura las variables de entorno en Vercel

### 2. Variables de Entorno en Vercel
Asegúrate de configurar todas las variables de entorno en el dashboard de Vercel:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_GA_ID`
- `WHATSAPP_PHONE_NUMBER`

### 3. Despliegue Automático
Una vez configurado, cada push a la rama principal desplegará automáticamente.

## 🔧 Configuración Adicional

### WhatsApp Business API
Para configurar los enlaces de WhatsApp:

1. Obtén tu número de WhatsApp Business
2. Actualiza `WHATSAPP_PHONE_NUMBER` en las variables de entorno
3. Los enlaces se generarán automáticamente

### Google Analytics
1. Crea una cuenta en Google Analytics
2. Obtén tu ID de seguimiento
3. Configura `NEXT_PUBLIC_GA_ID`

### Stripe (Opcional)
1. Crea una cuenta en Stripe
2. Obtén tus claves API
3. Configura las variables de entorno
4. Implementa los webhooks

## 📊 Base de Datos

### Tablas Principales
- **profiles** - Perfiles de usuario
- **patients** - Datos de pacientes
- **nutrition_plans** - Planes nutricionales
- **progress_tracking** - Seguimiento de progreso
- **consultations** - Consultas y citas
- **meal_logs** - Registro de comidas
- **notifications** - Notificaciones

### Políticas de Seguridad
- Row Level Security (RLS) habilitado
- Políticas por usuario y admin
- Protección de datos sensibles

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico o consultas:
- Email: soporte@nutriflow.com
- WhatsApp: +51 987 654 321

---

**Desarrollado con ❤️ para transformar vidas a través de la nutrición inteligente.**
