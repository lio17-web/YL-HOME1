// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    allowedDevOrigins: ["192.168.100.178"], // ton IP locale
  },
};

module.exports = nextConfig;
