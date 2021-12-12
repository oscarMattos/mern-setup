import webpack from "webpack";
import webpackConfigClient from "./../webpack.config.client.js";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackMiddleware from "webpack-dev-middleware";

const compile = (app) =>
  process.env.NODE_ENV === "development" &&
  (() => {
    let compiler = webpack(webpackConfigClient),
      middleware = webpackMiddleware(compiler, {
        publicPath: webpackConfigClient.output.publicPath,
      });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
  })();

export default {
  compile,
};
