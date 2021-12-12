const CURRENT_WORKING_DIR = process.cwd(),
  PATH = require("path"),
  WEBPACK = require("webpack"),
  CONFIG = {
    name: "browser",
    mode: "development",
    devtool: "eval-source-map",
    entry: [
      "react-hot-loader/patch",
      "webpack-hot-middleware/client?reload=true",
      PATH.join(CURRENT_WORKING_DIR, "client/main.js"),
    ],
    output: {
      path: PATH.join(CURRENT_WORKING_DIR, "/dist"),
      filename: "bundle.js",
      publicPath: "/dist/",
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
      ],
    },
    plugins: [
      new WEBPACK.HotModuleReplacementPlugin(),
      new WEBPACK.NoEmitOnErrorsPlugin(),
    ],
  };

module.exports = CONFIG;
