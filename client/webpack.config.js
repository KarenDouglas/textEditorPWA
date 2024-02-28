const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = () => {
    // Return webpack configuration object
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
        // Output configuration
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    // Plugins configuration
    plugins: [
       // Generates an HTML file to serve your bundles
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'JATE',
      }),
       // Extracts CSS into separate files
      new MiniCssExtractPlugin(),
        // Injects a service worker into your app to handle caching
      new InjectManifest({
        swSrc: './src/src-sw.js',
        swDest: 'src-sw.js',
      }),
      // Generates a web app manifest file
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'JATE',
        short_name: 'JATE',
        description: 'Just another text editor',
        background_color: '#7eb4e2',
        theme_color: '#7eb4e2',
        start_url: './',
        publicPath: './',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
    ],
    // Module rules for processing different file types
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        },
      ],
    },
  };
}
  
