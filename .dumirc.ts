import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  publicPath: '/an-mobile/',
  base: '/an-mobile/',
  themeConfig: {
    name: 'an-mobile',
    logo: false,
    // deviceWidth: 375,
  },
});
