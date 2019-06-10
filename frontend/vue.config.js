const path = require('path');

// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  // publicPath: '',
  outputDir: path.resolve(__dirname, '../../backend/public'),
  indexPath: path.resolve(__dirname, '../../backend/public/index.html'),
  assetsDir: path.resolve(__dirname, '../../backend/public')
};
