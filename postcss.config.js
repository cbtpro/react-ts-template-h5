// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 3,
    }),
    require('postcss-px-to-viewport-8-plugin')({
      viewportWidth: 750, // 设计稿的宽度
      // viewportHeight: 667, // 可选
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines'],
      minPixelValue: 1,
      mediaQuery: false,
      exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
    }),
  ],
};
