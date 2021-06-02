module.exports = {
  mode: "production",
  entry: './src/main/js/entry.js',
  output: {
      path: `${__dirname}/src/main/resources/static/common/js`,
      filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                  "@babel/preset-env",
                  "preact"
              ]
            }
          }
        ]
      }
    ]
  },
};
