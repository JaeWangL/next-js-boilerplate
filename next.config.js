/* eslint-disable @typescript-eslint/no-var-requires */
const withAntdLess = require('next-plugin-antd-less');
const sitemap = require('nextjs-sitemap-generator');
const { i18n } = require('./next-i18next.config');

sitemap({
  pagesDirectory: `${__dirname}/src/pages`,
  targetDirectory: `public/`,
});

module.exports = withAntdLess({
  lessVarsFilePathAppendToEndOfContent: false,
  cssLoaderOptions: {},
  webpack(config) {
    return config;
  },
  i18n,
  future: {
    webpack5: true,
  },
});
