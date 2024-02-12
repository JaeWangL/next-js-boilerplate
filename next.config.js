/* eslint-disable no-param-reassign, import/no-extraneous-dependencies, import/extensions */
const path = require('path');
const analyzer = require('@next/bundle-analyzer');

const isProd = process.env.NODE_ENV === 'production';

const withBundleAnalyzer = analyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: isProd,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/presentation/styles')],
  },
  images: {
    unoptimized: !isProd,
  },
  webpack(config, { webpack: _webpack }) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-virtualized/List': 'react-virtualized/dist/es/List',
      '@styles': path.resolve(__dirname, 'src/presentation/styles'),
    };
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
};

module.exports = isProd ? withBundleAnalyzer(nextConfig) : nextConfig;
