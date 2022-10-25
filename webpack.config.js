const HtmlWebpackPlugin = require('html-webpack-plugin');
const { loader } = require('mini-css-extract-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',

  output: {
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          sources: false
        }
      },
      {
        test: /\.css$/,
        exclude: /styles.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /styles.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)/,
        loader: 'file-loader'
      }
    ]
  },

  optimization: {},



  plugins: [
    new HtmlWebpackPlugin({
      title: 'Mi webpack App',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'nuevo-estilo.css',
      ignoreOrder: false
    })
  ]
};



