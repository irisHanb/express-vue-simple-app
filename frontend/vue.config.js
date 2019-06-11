const path = require('path');

// vue.config.js
module.exports = {
  devServer: {
    proxy: 'http://localhost:3000'
  },
  outputDir: path.resolve(__dirname, '../backend/public')
};
