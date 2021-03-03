const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {

    entry: { 
        index: path.resolve(__dirname, "src", "index.js")
    },

    module: {
        rules: [
          {
            test: /\.scss|\.sass|\.css$/,
            use: ["style-loader", "css-loader", "sass-loader"]
          },
          {
            test: /\.js|\.jsx$/,
            exclude: /node_modules/,
            loader: require.resolve("babel-loader"),
          }
        ]
    },

    // Define plugins.
    plugins: [
        new HtmlWebpackPlugin ({
            template: "./src/index.html"
        })
    ]
}