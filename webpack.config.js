var path              = require( 'path' );
var webpack           = require( 'webpack' );
var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
	devtool: 'inline-source-map',
	entry:  __dirname + '/app/main.js',
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js',
		publicPath: '/'
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
				loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
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
		new ExtractTextPlugin( 'style.css' )
	],

	devServer: {
		colors             : true,
		historyApiFallback : true,
		inline             : true,
		host               : 'localhost',
		port               : 3000
	}
}
