/**
 * Created by erickacorrales on 20/4/17.
 */
import webpack from 'webpack';
import htmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const PATHS = {
  app: path.join(__dirname, './app'),
  build: path.join(__dirname, './dist')
 };

export default {

    context: PATHS.app,
    entry: {
      app: ["./index.js"]
    },
    output: {
      path: PATHS.build,
      filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader:'babel-loader',
                  options: {
                    presets: [
                      ['es2015', {modules:false}]
                    ]
                  }
                },
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader', 'css-loader'
                ]
            },
            {
              test:   /\.(ttf|otf|eot|svg|woff2?)(\?.+)?$/,
              use: {
                loader: 'url-loader',
                options: {
                  limit: 10000
                }
              }
            },
            {
              test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
              use:{
                loader:'file-loader'
              }
            }

        ],
    },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    /**
     * HtmlWebpackPlugin will make sure out Javascript files are being called
     * from within our index.html
     */
    new htmlWebpackPlugin({
        title: 'Leasing app demo',
        template: path.join(PATHS.app, 'index.html'), // Load a custom template
        inject: 'body' // Inject all scripts into the body
    })
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: PATHS.app,
    compress: true,
    port: 5006,
    open: true
  }
};
