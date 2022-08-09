// var glob = require("glob");
// const path = require("path");
// const componentsObject = glob
//   .sync(`src/components/**/index.js`, {
//     dot: true,
//   })
//   .map((x) => path.resolve(x))
//   .map((x) => path.dirname(x).split(path.sep).pop())
//   .reduce((p, name) => {
//     p[name] = `./src/components/${name}/index.js`;
//     return p;
//   }, {});
// console.log(componentsObject);

// if (process.env.NODE_ENV === "production") {
module.exports = require("./dist/myUI.js");
// } else {
//   module.exports = require("./dist/myUI.min.js");
// }
