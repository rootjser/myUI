const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const fs = require("fs");
const { VueLoaderPlugin } = require("vue-loader");

const browserslistrc = (() => {
  const content = fs.readFileSync(
    path.resolve(__dirname, ".browserslistrc"),
    "UTF-8"
  );
  return content.split("\n").map((m) => m.trim());
})();

module.exports = {
  output: {
    // 导出的文件名
    filename: "[name].js",
    path: __dirname + "/lib",
    // umd self is not defined 报错
    globalObject: "this",
    library: {
      // 指定库的全局变量名称
      name: "[name]",
      type: "umd",
      export: "default",
    },
  },
  mode: "none",
  plugins: [
    // 清空 dist 目录
    new CleanWebpackPlugin(),
    // 拆分 css 到独立文件
    new MiniCssExtractPlugin({
      filename: "theme-chalk/[name].css",
    }),
    // vue
    new VueLoaderPlugin(),
    // 复制 umd main.js 文件，to 会根据output定位
    // new CopyPlugin({
    //   patterns: [{ from: "./main.js", to: "./main.js" }],
    // }),
  ],
  externals: [
    {
      vue: {
        root: "Vue",
        commonjs: "vue",
        commonjs2: "vue",
        amd: "vue",
      },
    },
    "lodash",
  ], // 三方库中的引用不要打包进来
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".vue"],
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        type: "asset",
        generator: {
          filename: "fonts/[name].[contenthash:8][ext]",
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)/i,
        type: "asset", // asset  asset/inline  asset/resource
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 10K
          },
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(jsx?|tsx?)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(css|sass|scss)/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                    {
                      overrideBrowserslist: browserslistrc,
                    },
                  ],
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
};
