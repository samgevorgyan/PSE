const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  devtool: "inline-source-map",

  devServer: {
    static: "./dist",
  },

  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  optimization: {
    runtimeChunk: "single",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "PSE",
      hash: true,
      template: "./src/html/home.html",
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
};
