/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["192.168.29.201"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
