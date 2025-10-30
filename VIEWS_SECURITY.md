# 🚀 Sistema de Tracking y Badges - Blog

## ✨ **Características Principales**

- **📊 Tracking inteligente de views** con rate limiting
- **🏆 Sistema de badges automático** (New, Top, Trending, Popular, Must-Read)
- **🔒 Seguridad robusta** con validación y file locking
- **🤖 Mantenimiento automático** vía GitHub Actions
- **🌐 Soporte bilingüe** con slug mapping dinámico

## 🔧 **APIs Disponibles**

### Tracking de Views
```bash
# Registrar vista
POST /api/views/[slug]

# Obtener estadísticas
GET /api/views/[slug]
```

### Estadísticas y Badges
```bash
# Obtener todos los badges y stats
GET /api/views/stats
```

### Monitoreo
```bash
# Health check del sistema
GET /api/health

# Mantenimiento (requiere token)
POST /api/maintenance
```

## 🎯 **Sistema de Badges**

| Badge | Condición | Prioridad |
|-------|-----------|-----------|
| **New** | < 7 días | 1 (más alta) |
| **Top** | > 100 vistas | 2 |
| **Trending** | > 10 vistas últimos 7 días | 3 |
| **Popular** | > 50 vistas | 4 |
| **Must-Read** | > 200 vistas | 5 |

## 🔒 **Medidas de Seguridad**

- ✅ **Validación estricta** de slugs (`^[a-zA-Z0-9-_]+$`)
- ✅ **Rate limiting** (4 horas TTL por IP)
- ✅ **File locking** para prevenir corrupción
- ✅ **Backups automáticos** en cada escritura
- ✅ **Verificación de integridad** JSON

## 🤖 **Mantenimiento Automático (GitHub Actions)**

### Configuración:
1. **GitHub Secret:** `MAINTENANCE_TOKEN` = `tu-token-secreto`
2. **Vercel Env Var:** `MAINTENANCE_TOKEN` = `tu-token-secreto`

### Horarios:
- **Limpieza diaria:** 2:00 AM UTC
- **Health checks:** Cada 6 horas
- **Ejecución manual:** Disponible en GitHub Actions

## 🧪 **Testing Local**

```bash
# Probar todas las APIs
npm run test:apis

# Verificar health
curl http://localhost:3000/api/health
```

## 📁 **Estructura de Datos**

```json
{
  "posts": {
    "post-slug": {
      "views": 42,
      "lastViewed": "2024-01-15T10:30:00.000Z",
      "dailyViews": { "2024-01-15": 5 },
      "weeklyViews": { "2024-W03": 15 },
      "createdAt": "2024-01-10T08:00:00.000Z"
    }
  },
  "metadata": {
    "lastUpdated": "2024-01-15T10:30:00.000Z",
    "totalViews": 42,
    "version": "1.0.0"
  }
}
```

## 🚨 **Troubleshooting**

### Errores Comunes:
- **"Invalid slug"**: Verifica que el slug solo contenga letras, números, guiones
- **"Rate limited"**: El usuario ya vio este post recientemente (4h TTL)
- **"Unauthorized"**: Token de mantenimiento incorrecto

### Logs:
- **Desarrollo**: `console.log` visible en terminal
- **Producción**: Vercel Dashboard → Functions → View Function Logs

## 🎊 **¡Listo para Producción!**

Tu sistema de tracking está enterprise-ready con:
- ✅ Seguridad robusta
- ✅ Monitoreo automático  
- ✅ Mantenimiento sin intervención
- ✅ 100% gratis en GitHub + Vercel