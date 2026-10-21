/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // La versión en español se sirve en la raíz; la inglesa en /en.
  async rewrites() {
    return [{ source: "/", destination: "/es" }];
  },
};

export default nextConfig;
