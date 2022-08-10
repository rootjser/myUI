if (process.env.NODE_ENV === "production") {
  module.exports = require("./dist/myUI.js");
} else {
  module.exports = require("./dist/myUI.min.js");
}
