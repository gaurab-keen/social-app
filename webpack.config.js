const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your React app
  output: {
    filename: 'bundle.js', // Name of the bundled JavaScript file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
      ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html', // Template HTML file
      filename: 'index.html', // Name of the output HTML file
    }),
  ],
};
