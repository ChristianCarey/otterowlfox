const webpack = require('webpack');
const path = require('path');

const PATHS = {
    react: path.join(__dirname, 'node_modules/react/dist/react.min.js'),
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, './build/images')
};

module.exports = {
  entry: {
    jsx: './images/index.js',
  },
  output: {
    path: PATHS.build,
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }  
          }
        ]
      }
    ]
  }
}