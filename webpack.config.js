var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
	context: path.resolve('./app'),
	entry: './js/index.js',
	output: {
		path: path.resolve('./dist/'),
		filename: 'js/bundle.js'
	},
	module: {
		devtool: 'source-map',
		loaders: [{
			test: /\.js$/,
			loader: 'babel',
			exclude: /node_modules/,
			query: {
				presets: ['es2015']
			}
		},{
			test: /\.html$/,
			loader: 'html'
		},{
			test: /\.scss$/,
			loaders: ["style", "css", "sass"]
		},{
			test: /\.css$/,
			loaders: ["style", "css"]
		},{
			test: /\.(eot|svg|ttf|woff|woff2)$/,
			loader: 'file?name=fonts/[name].[ext]'
		},{
			test: /\.(jpe?g|png|gif)$/,
  		loader:'file?name=img/[name].[ext]'
		}]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
		}),
		new BrowserSyncPlugin({
			server: {
				baseDir: ['dist']
			},
			port: 3000,
			host: 'localhost'
		})
	]
}
