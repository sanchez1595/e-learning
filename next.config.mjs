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
  // Redirecciones para mantener las URL originales
  async redirects() {
    return [
      // Redirigir rutas originales a public-routes
      {
        source: '/public-routes/:path*',
        destination: '/:path*',
        permanent: false,
      },
      // Rutas específicas
      {
        source: '/public-routes/home',
        destination: '/home',
        permanent: false,
      },
      {
        source: '/public-routes/cursos',
        destination: '/cursos',
        permanent: false,
      },
      {
        source: '/public-routes/cursos/:id',
        destination: '/cursos/:id',
        permanent: false,
      },
      {
        source: '/public-routes/cursos/:id/learn',
        destination: '/cursos/:id/learn',
        permanent: false,
      },
      {
        source: '/public-routes/blog',
        destination: '/blog',
        permanent: false,
      },
      {
        source: '/public-routes/blog/:id',
        destination: '/blog/:id',
        permanent: false,
      },
      {
        source: '/public-routes/eventos',
        destination: '/eventos',
        permanent: false,
      },
      {
        source: '/public-routes/eventos/:id',
        destination: '/eventos/:id',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
