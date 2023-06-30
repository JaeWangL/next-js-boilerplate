/** @type {import('next').NextConfig} */
const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: false,
  basePath: '',
  reactStrictMode: true,
  /*
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@styles': path.resolve(__dirname, 'src/presentation/styles'),
    };
    return config;
  },
  */
});
