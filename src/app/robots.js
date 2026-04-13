export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
    ],
    sitemap: 'https://delrio.dev/sitemap.xml',
    host: 'https://delrio.dev',
  };
}
