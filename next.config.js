/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['nftnow.com', 'cryptopunks.app', 'cdn.prod.website-files.com', 'img.etimg.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif)$/i,
      type: 'assets/resource'
    });
    return config;
  },
  images: {
    domains: [
      'nftnow.com',
      'cryptopunks.app',
      'cdn.prod.website-files.com',
      'img.etimg.com'
    ],
  },
  experimental: {
    optimizeCss: false,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  swcMinify: false,
  poweredByHeader: false,
  compress: false,
}

module.exports = nextConfig
