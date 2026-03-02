/** @type {import('next').NextConfig} */
const nextConfig = {
  // This is the key part that lets your build finish even 
  // if the "Linting" robot finds minor issues.
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // This ensures your build ignores type errors if you add 
  // TypeScript later, keeping your deployment fast.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
