/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable unicorn/prefer-module */
/* eslint-disable global-require */
module.exports = {
  transforms: {
    PKG_JSON: require('markdown-magic-package-json'),
    SUBPACKAGE_LIST: require('markdown-magic-subpackage-list'),
  },
};
