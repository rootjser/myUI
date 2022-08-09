const TerserPlugin = require("terser-webpack-plugin");
const { merge } = require("webpack-merge");
const webpackConfig = require("./webpack.base.js");

module.exports = merge(webpackConfig, {
  entry: {
    myUI: "./src/index.js",
    "myUI.min": "./src/index.js",
  },
  output: {
    path: __dirname + "/dist",
    library: {
      // 指定库的全局变量名称
      name: "myUI",
    },
  },
  mode: "none",
  optimization: {
    // 默认mode:'development'会压缩文件，mode:'none'就不会压缩了，使用TerserPlugin只对min.js压缩
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
      }),
    ],
  },
});
