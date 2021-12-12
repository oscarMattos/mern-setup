const CURRENT_WORKING_DIR = process.cwd(),
  PATH = require("path"),
  CONFIG = {
    mode: "production",
    entry: [PATH.join(CURRENT_WORKING_DIR, "client/main.js")],
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
  };

module.exports = CONFIG;
