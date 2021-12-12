const CURRENT_WORKING_DIR = process.cwd(),
  NODE_EXTERNALS = require("webpack-node-externals"),
  PATH = require("path"),
  CONFIG = {
    name: "server",
    entry: [PATH.join(CURRENT_WORKING_DIR, "./server/server.js")],
    target: "node",
    output: {
      path: PATH.join(CURRENT_WORKING_DIR, "/dist/"),
      filename: "server.generated.js",
      publicPath: "/dist/",
      libraryTarget: "commonjs2",
    },
    externals: [NODE_EXTERNALS()],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
      ],
    },
  };

module.exports = CONFIG;
