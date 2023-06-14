import { defineConfig } from 'umi';
import routes from './src/router';

console.log('process.env.ENV===>', process.env.ENV);
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  fastRefresh: {},
  base: '/',
  publicPath: './',
  history: {
    type: 'hash'
  },
  hash: true,
  chainWebpack: (config, { webpack }) => {
    // 将js文件打包到dist/js文件中
    config.output.filename('js/[name].[hash:8].js');
    config.output.chunkFilename('js/[name].[hash:8].async.js');
    // 将css文件打包到dist/css文件中
    config.module.rule('css').oneOf('css').use('extract-css-loader').tap(() => ({
      publicPath: '../',
      hmr: false
    }))
    config.module.rule('less').oneOf('css').use('extract-css-loader').tap(() => ({
      publicPath: '../',
      hmr: false
    }))
    config.module.rule('less').oneOf('css-modules').use('extract-css-loader').tap(() => ({
       publicPath: '../',
       hmr: false
    }));
    
    config.plugin('extract-css').tap(() => [
      {
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].chunk.css',
        ignoreOrder: true,
      },
    ]);
  },
  define: {
    'process.env.ENV': process.env.ENV
  }
});
