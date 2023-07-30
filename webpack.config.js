const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  mode: 'development',
  entry : './src/index.js',
  output: {
    publicPath: '/',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development', // or 'production'
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
      rules: [{
         test:/\.(s*)css$/,
         use: [
            miniCss.loader,
            'css-loader',
            'sass-loader',
         ],
      },
      {
         test: /\.js$|jsx/,
         exclude: /node_modules/,
         use: ['babel-loader'],
      },
      {
         test: /\.(png|jpe?g|gif|svg)$/i,
         type: 'asset/resource',
     },
     {
      test: /\.html$/,
         use: [
            {
               loader: 'html-loader',
               options: {
                 minimize: true,
               },
             },
            ],
     }
   ]
   },
   resolve: {
      extensions: ['*', '.js', '.jsx']
    },
      plugins: [
         new miniCss({
            filename: 'style.css',
         }),
         new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/index.html',
            inject:'body',
            minify: {
               removeComments: true,
               collapseWhitespace: true
             }
         }),
         new CopyPlugin({
            patterns: [
              { from: "src/assets/img", to: "img" },
            //   { from: "other", to: "public" },
            ],
          }),
         //  new HtmlWebpackPlugin({
         //    template: './src/pages/basket.html',
         //    filename:'basket.html',
         //    minify: {
         //       removeComments: true,
         //       collapseWhitespace: true
         //     }
         //  }),
      ],
      devServer: {
         static: {
           directory: path.join(__dirname, 'dist'),
         },
         historyApiFallback: true,
         compress: true,
         port: 1150,
       },
};