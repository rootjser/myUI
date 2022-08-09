const { merge } = require("webpack-merge");
const webpackConfig = require("./webpack.base.js");
const glob = require("glob");
const path = require("path");

// 获得所有组件 {"button":"./src/components/button/index.js"}
const componentsObject = glob
  .sync(`src/components/**/index.js`, {
    dot: true,
  })
  .map((x) => path.resolve(x))
  .map((x) => path.dirname(x).split(path.sep).pop())
  .reduce((p, name) => {
    p[name] = `./src/components/${name}/index.js`;
    return p;
  }, {});

module.exports = merge(webpackConfig, {
  entry: {
    ...componentsObject,
  },
  output: {
    path: __dirname + "/lib",
    library: {
      // 指定库的全局变量名称
      name: "[name]",
    },
  },
});
