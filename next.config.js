/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
    ],
  },
  // Configuración para solucionar problemas con directorios de grupo
  experimental: {
    serverComponentsExternalPackages: [],
    // Permitir manejo consistente de archivos de manifiesto
    outputFileTracingRoot: process.env.NODE_ENV === 'production' ? undefined : undefined,
  },
  // Para Vercel, asegurar compatibilidad con rutas agrupadas
  webpack: (config, { isServer }) => {
    // Forzar a webpack a manejar correctamente los paréntesis en las rutas
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
  // Redirecciones para mantener URLs limpias
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/public-routes/home',
        permanent: false,
      },
      {
        source: '/cursos',
        destination: '/public-routes/cursos',
        permanent: false,
      },
      {
        source: '/cursos/:id',
        destination: '/public-routes/cursos/:id',
        permanent: false,
      },
      {
        source: '/cursos/:id/learn',
        destination: '/public-routes/cursos/:id/learn',
        permanent: false,
      },
      {
        source: '/blog',
        destination: '/public-routes/blog',
        permanent: false,
      },
      {
        source: '/blog/:id',
        destination: '/public-routes/blog/:id',
        permanent: false,
      },
      {
        source: '/eventos',
        destination: '/public-routes/eventos',
        permanent: false,
      },
      {
        source: '/eventos/:id',
        destination: '/public-routes/eventos/:id',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
