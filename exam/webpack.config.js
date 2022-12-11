const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    filename: "[name][contenthash].js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  devtool: "inline-source-map",
  module: {
    rules: [{ test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ }],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    compress: true,
    port: 9000,
    open: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "public/index.html",
    }),
  ],
};
