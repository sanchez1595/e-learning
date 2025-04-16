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
};

export default nextConfig;
