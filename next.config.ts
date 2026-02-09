/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // Empêche la pré-génération statique côté serveur de la page callback
  async redirects() {
    return [];
  },
};

module.exports = nextConfig;