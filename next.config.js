const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Configuración experimental para incluir archivos en el build
  experimental: {
    outputFileTracingIncludes: {
      '/': ['./src/posts/**/*'],
      '/[locale]/posts': ['./src/posts/**/*'],
      '/[locale]/posts/[slug]': ['./src/posts/**/*'],
    },
  },
  
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/hooks': path.resolve(__dirname, 'src/hooks'),
      '@/utils': path.resolve(__dirname, 'src/utils'),
      '@/lib': path.resolve(__dirname, 'src/lib'),
      '@/styles': path.resolve(__dirname, 'src/styles'),
      '@/public': path.resolve(__dirname, 'public'),
      '@/posts': path.resolve(__dirname, 'src/posts'),
      '@/app': path.resolve(__dirname, 'src/app'),
    };
    
    // Copiar archivos de posts al build
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    
    return config;
  },
};

module.exports = nextConfig;