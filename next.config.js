/* eslint-disable @typescript-eslint/no-var-requires */
const sitemap = require('nextjs-sitemap-generator');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { i18n } = require('./next-i18next.config');

sitemap({
  pagesDirectory: `${__dirname}/src/pages`,
  targetDirectory: `public/`,
});

module.exports = withBundleAnalyzer({
  i18n,
  webpack5: true,
  swcMinify: false,
});
