const {
  addDecoratorsLegacy,
  // addPostcssPlugins,
  addWebpackAlias,
  addWebpackModuleRule,
  override,
  fixBabelImports,
} = require("customize-cra");
const path = require("path");

// const pxToViewport = require('postcss-px-to-viewport-8-plugin');

module.exports = override(
  addDecoratorsLegacy(),
  addWebpackAlias({
    // 加载模块的时候，可以使用“@”符号来进行简写啦~
    "@": path.resolve(__dirname, "src"),
  }),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css",
  }),
  // addPostcssPlugins([
  //   pxToViewport({
  //     viewportWidth: 375, // 设计稿的宽度，如 375 或 750
  //     // viewportHeight: 667, // 可选，根据设计稿的高度
  //     unitPrecision: 5, // 保留小数位数
  //     viewportUnit: 'vw', // 希望使用的视口单位
  //     selectorBlackList: ['.adm-', '.ignore', '.hairlines'], // 不转换的类
  //     minPixelValue: 1, // 小于或等于1px不转换为视口单位
  //     mediaQuery: false, // 允许在媒体查询中转换 `px`
  //     exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配

  //     // unitToConvert: "px", // 要转化的单位
  //     // viewportWidth: 750, // UI设计稿的宽度
  //     // unitPrecision: 6, // 转换后的精度，即小数点位数
  //     // propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
  //     // viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
  //     // fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
  //     // selectorBlackList: ["wrap"], // 指定不转换为视窗单位的类名，
  //     // minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
  //     // mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
  //     // replace: true, // 是否转换后直接更换属性值
  //     // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
  //     // landscape: false, // 是否处理横屏情况
  //   }),
  // ]),
  addWebpackModuleRule({
    test: /\.(css|scss)$/,
    use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
  }),
);
