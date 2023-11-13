const path = require("path");

module.exports = {
  entry: "./src/components/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    alias: {
      UI$: path.resolve(__dirname, "src/components/"),
    },
  },
};
