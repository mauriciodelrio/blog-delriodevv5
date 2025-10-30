# 🤖 GitHub Actions - Setup (100% Gratis)

## ⚡ **Setup en 3 Pasos**

### **1. Token en GitHub**
1. Ve a: `https://github.com/mauriciodelrio/blog-delriodevv5`
2. **Settings** → **Secrets and variables** → **Actions**
3. **New repository secret:**
   - **Name:** `MAINTENANCE_TOKEN`
   - **Secret:** `blog-maintenance-2024-secure-token-xyz123`

### **2. Variable en Vercel**
1. Vercel Dashboard → tu proyecto → **Settings** → **Environment Variables**
2. **Add New:**
   - **Name:** `MAINTENANCE_TOKEN`
   - **Value:** `blog-maintenance-2024-secure-token-xyz123`

### **3. Probar**
1. GitHub → **Actions** → **"Blog Maintenance"** → **"Run workflow"**
2. Verificar logs en 1-2 minutos

## 📅 **Ejecución Automática**
- **Limpieza diaria:** 2:00 AM UTC
- **Health checks:** Cada 6 horas
- **Manual:** Cuando quieras desde GitHub

## ✅ **¡Listo!**
Tu blog se mantiene automáticamente. **100% gratis con GitHub Actions + Vercel.**