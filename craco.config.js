const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      'components': resolve('src/components'),
    }
  },
  //antd按需引入
  babel: {
    plugins: [
        [
          "import", 
          {
            "libraryName": "antd",
            "libraryDirectory": "es",
            "style": true //设置为true即是less
          }
      ]
    ]
  },
}
