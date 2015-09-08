var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    devtool: "eval",
    entry: [
      "webpack-dev-server/client?http://localhost:8080",
      "webpack/hot/only-dev-server",
      "./src/index"
    ],
    devServer: {
      hot: true,
      colors: true,
      progress: true,
      historyApiFallback: true
    },
    output: {
      path: './dist/',
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ["", ".js", ".jsx", ".json"]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new HtmlWebpackPlugin()
    ],
    module: {
        loaders: [
            { test: /\.json$/, loader: "json-loader"},
            {
              test: /\.jsx?$/,
              loaders: ["react-hot", "babel"],
              include: path.join(__dirname, "src")
            },
            {
              test: /\.scss$/,
              loader: "style!css!sass"
           }

        ]
    }
};

