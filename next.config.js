const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  lessVarsFilePathAppendToEndOfContent: false,
  cssLoaderOptions: {},
  webpack(config) {
    return config;
  },

  future: {
    webpack5: true,
  },
});
