var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		pageOne: './src/components/DappPages/Home',
		pageTwo: './src/components/DappPages/Epoch',
	},
	output: {
		path: path.join(__dirname, '/bundle'),
		filename: 'index_bundle.js',
		publicPath: '/',
	},

	mode: 'development',
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
	devServer: {
		historyApiFallback: true,
	},
	externals: {
		// global app config object
		config: JSON.stringify({
			apiUrl: '/api',
		}),
	},
};
