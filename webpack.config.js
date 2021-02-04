const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

/*
 * We've enabled MiniCssExtractPlugin for you. This allows your app to
 * use css modules that will be moved into a separate CSS file instead of inside
 * one of your module entries!
 *
 * https://github.com/webpack-contrib/mini-css-extract-plugin
 *
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');




/*
 * We've enabled TerserPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/terser-webpack-plugin
 *
 */

const TerserPlugin = require('terser-webpack-plugin');




module.exports = {
  mode: 'development',

  devServer: {
    historyApiFallback: {
      index: 'index.html'
    },
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9090
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'assets',
        },
      },
    ],
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ filename:'main.[contenthash].css' }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html'
    }),
  //   new GoogleFontsPlugin({
  //     fonts: [
  //         { family: "Source Sans Pro" },
  //         { family: "Roboto", variants: [ "400", "700italic" ] }
  //     ]
  //     /* ...options */
  // }),
    
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name(resourcePath, resourceQuery) {
            `resourcePath` - `/absolute/path/to/file.js`
            `resourceQuery` - `?foo=bar`

            if (process.env.NODE_ENV === 'development') {
              return '[path][name].[ext]';
            }
            return '[contenthash].[ext]';
          },
        },
      },
    ],
    
  },

  optimization: {
    minimizer: [new TerserPlugin()],

    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },

      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: false
    }
  }
}