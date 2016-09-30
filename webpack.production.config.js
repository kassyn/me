var path              = require( 'path' );
var webpack           = require( 'webpack' );
var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
	entry:  __dirname + '/app/main.js',
	output: {
		path: __dirname + '/build',
		filename: '[name]-[hash].js'
	},

	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /(\.js|\.jsx)$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /(\.scss|\.css)$/,
				loader: ExtractTextPlugin.extract( 'style', 'css?modules!postcss!sass' )
			},
			{
				test: /(\.eot|\.woff|\.ttf|\.svg)$/,
				loader: 'file-loader?name=fonts/[name]__[hash:6].[ext]'
			},
			{
				test: /(\.png|\.jpg|\.gif)$/,
				loader: 'file-loader?name=images/[name]__[hash:6].[ext]'
			}
		]
	},

	postcss: [
		require( 'autoprefixer' )
	],

	sassLoader: {
		data: [
			'@import "' + path.resolve( __dirname, 'app/stylesheets/base/_vars.scss' ) + '";',
			'@import "' + path.resolve( __dirname, 'app/stylesheets/base/_functions.scss' ) + '";',
			'@import "' + path.resolve( __dirname, 'app/stylesheets/base/_helpers.scss' ) + '";'
		].join( '' )
  	},

	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/app/index.tmpl.html'
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env':{
				'NODE_ENV': JSON.stringify( 'production' )
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress:{
				warnings: false
			}
		}),
		new ExtractTextPlugin( '[name]-[hash].css' )
	]
}
