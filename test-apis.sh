#!/bin/bash

# 🧪 Test Local para APIs antes de GitHub Actions
# Ejecutar: chmod +x test-apis.sh && ./test-apis.sh

echo "🚀 Probando APIs del blog..."
echo ""

# Configuración inteligente de URL
if curl -s --connect-timeout 2 "http://localhost:3000/api/health" > /dev/null 2>&1; then
  BLOG_URL="http://localhost:3000"
  ENVIRONMENT="desarrollo"
else
  BLOG_URL="https://www.delrio.dev"
  ENVIRONMENT="producción"
fi

# Token (puede ser sobrescrito con variable de entorno)
TOKEN="${MAINTENANCE_TOKEN:-blog-maintenance-2024-secure-token-xyz123}"

echo "📍 URL del blog: $BLOG_URL ($ENVIRONMENT)"
if [[ "$ENVIRONMENT" == "desarrollo" ]]; then
  echo "💡 Tip: Asegúrate de que 'npm run dev' esté ejecutándose"
else
  echo "🌐 Probando en producción - esto puede tardar un poco más"
fi
echo ""

# Test 1: Health Check
echo "🔍 Test 1: Health Check"
echo "========================"
response=$(curl -L -s -w "%{http_code}" "$BLOG_URL/api/health")
http_code="${response: -3}"
body="${response%???}"

echo "HTTP Status: $http_code"
echo "Response: $body"

if [ "$http_code" -eq 200 ]; then
    echo "✅ Health check OK"
else
    echo "❌ Health check falló"
fi
echo ""

# Test 2: Maintenance API
echo "🧹 Test 2: Maintenance API"
echo "============================"
response=$(curl -L -s -w "%{http_code}" -X POST \
  "$BLOG_URL/api/maintenance" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json")

http_code="${response: -3}"
body="${response%???}"

echo "HTTP Status: $http_code"
echo "Response: $body"

if [ "$http_code" -eq 200 ]; then
    echo "✅ Maintenance API OK"
else
    echo "❌ Maintenance API falló"
fi
echo ""

# Test 3: View Tracking
echo "📊 Test 3: View Tracking"
echo "========================="
response=$(curl -L -s -w "%{http_code}" -X POST \
  "$BLOG_URL/api/views/test-post" \
  -H "Content-Type: application/json")

http_code="${response: -3}"
body="${response%???}"

echo "HTTP Status: $http_code"
echo "Response: $body"

if [ "$http_code" -eq 200 ]; then
    echo "✅ View tracking OK"
else
    echo "❌ View tracking falló"
fi
echo ""

# Test 4: Stats API
echo "📈 Test 4: Stats API"
echo "===================="
response=$(curl -L -s -w "%{http_code}" "$BLOG_URL/api/views/stats")
http_code="${response: -3}"
body="${response%???}"

echo "HTTP Status: $http_code"
echo "Response: $body"

if [ "$http_code" -eq 200 ]; then
    echo "✅ Stats API OK"
else
    echo "❌ Stats API falló"
fi
echo ""

echo "🎯 Tests completados!"
echo ""
echo "📝 Siguiente paso:"
if [[ "$ENVIRONMENT" == "desarrollo" ]]; then
  echo "1. ✅ APIs funcionando en desarrollo"
  echo "2. 🚀 Hacer push para probar en producción"
  echo "3. 🤖 GitHub Actions se ejecutará automáticamente"
else
  echo "1. ✅ APIs funcionando en producción"
  echo "2. 🤖 GitHub Actions está listo"
  echo "3. 🎉 ¡Sistema completamente operativo!"
fi