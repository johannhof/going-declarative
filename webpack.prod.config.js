var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: [
      "./src/index"
    ],
    output: {
      path: './dist/',
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ["", ".js", ".jsx", ".json"]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
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

