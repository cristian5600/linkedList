var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  watch: true,
  devtool: "inline-source-map",
  entry: "./src/index.js", //relative to root of the application
  output: {
    filename: "./app.bundle.js", //relative to root of the application
  },
  plugins: [
    new HtmlWebpackPlugin({
      // hash: true,
      filename: "./index.html", //relative to root of the application
    }),
  ],
};
