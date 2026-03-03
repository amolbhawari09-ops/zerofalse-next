/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Note: swcMinify is removed (enabled by default in v15+)
  
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: '**', // Broad wildcard for AI-generated images/external sources
      },
    ],
  },

  experimental: {
    // Keeps build times fast by only processing what's needed
    optimizePackageImports: ['lucide-react', 'recharts', 'framer-motion'],
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }
        ]
      }
    ];
  }
};

export default nextConfig;
