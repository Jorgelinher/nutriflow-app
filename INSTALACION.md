# 🚀 Guía de Instalación - NutriFlow

## ⚠️ IMPORTANTE: Antes de comenzar

**Necesitas tener Node.js instalado en tu sistema.** Si no lo tienes:

### Windows:
1. Ve a [nodejs.org](https://nodejs.org)
2. Descarga la versión LTS (Long Term Support)
3. Ejecuta el instalador
4. Reinicia tu terminal/PowerShell

### Verificar instalación:
```bash
node --version
npm --version
```

## 📋 Pasos de Instalación

### 1. Instalar Dependencias
```bash
cd nutriflow-app
npm install
```

### 2. Configurar Supabase

#### A. Crear cuenta en Supabase
1. Ve a [supabase.com](https://supabase.com)
2. Crea una cuenta gratuita
3. Crea un nuevo proyecto
4. Anota la URL y las claves API

#### B. Configurar variables de entorno
1. Copia `env.example` a `.env.local`
2. Edita `.env.local` con tus datos:

```env
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key_aqui
SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key_aqui
WHATSAPP_PHONE_NUMBER=51987654321
```

#### C. Configurar base de datos
1. Ve al editor SQL de Supabase
2. Copia y pega todo el contenido de `database/schema.sql`
3. Ejecuta el script
4. Verifica que se crearon las tablas

### 3. Ejecutar la aplicación
```bash
npm run dev
```

### 4. Abrir en el navegador
Ve a [http://localhost:3000](http://localhost:3000)

## 🔧 Configuración Adicional

### Configurar usuario administrador
1. Regístrate en la aplicación
2. Ve a Supabase > Authentication > Users
3. Copia el ID del usuario
4. Ejecuta en SQL:

```sql
UPDATE profiles 
SET is_admin = true 
WHERE id = 'tu-user-id-aqui';
```

### Configurar WhatsApp
1. Cambia `WHATSAPP_PHONE_NUMBER` por tu número real
2. Los enlaces se actualizarán automáticamente

## 🐛 Solución de Problemas

### Error: "npx no se reconoce"
- Instala Node.js desde [nodejs.org](https://nodejs.org)
- Reinicia tu terminal

### Error: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error de conexión a Supabase
- Verifica que las variables de entorno estén correctas
- Asegúrate de que el proyecto de Supabase esté activo

### Error de permisos en Windows
- Ejecuta PowerShell como administrador
- O usa Git Bash en su lugar

## 📞 ¿Necesitas Ayuda?

Si tienes problemas con la instalación:

1. **Verifica Node.js**: `node --version` debe mostrar v18+
2. **Verifica npm**: `npm --version` debe mostrar v8+
3. **Revisa las variables de entorno** en `.env.local`
4. **Verifica la conexión a Supabase** en el dashboard

## 🎉 ¡Listo!

Una vez completados estos pasos, tendrás NutriFlow funcionando localmente. 

**Próximos pasos:**
- Personaliza el contenido en las páginas
- Configura tu información en `/perfil`
- Ajusta los servicios en `/servicios`
- Despliega en Vercel para producción
