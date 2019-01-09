const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: ["@babel/polyfill", "./src/index.js"]
  },
  output: {
    path: path.join(__dirname, "/dist/"),
    filename: "[name].js",
    publicPath: "/"
  },
  devServer: {
    historyApiFallback: true
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new CompressionPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx", ".scss"]
  }
};
