module.exports = {
  entry: ["./src/index.js"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "bable-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    extentions: ["*", ".js"],
  },
  output: {
    path: __dirname + "/dist",
    pubicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: "./dist",
    port: 3000,
    histroyApiFallback: true,
  },
};
