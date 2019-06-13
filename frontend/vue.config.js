const path = require('path');

// vue.config.js
module.exports = {
  proxy: {
    '/api': {
      target: 'http://localhost:3000' // 개발서버
    }
  },
  outputDir: path.resolve(__dirname, '../backend/public')
};
