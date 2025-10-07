/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Deshabilitar ESLint durante el build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Deshabilitar TypeScript durante el build
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
