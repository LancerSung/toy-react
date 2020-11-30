/*
 * @Author: songyzh
 * @Date: 2020-11-25 17:34:31
 * @LastEditors: songyzh
 * @LastEditTime: 2020-11-26 10:49:35
 */
module.exports = {
  entry: {
    main: "./main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              [
                "@babel/plugin-transform-react-jsx",
                { pragma: "createElement" },
              ],
            ],
          },
        },
      },
    ],
  },
  mode: "development",
  optimization: {
    minimize: false,
  },
};
