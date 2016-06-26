module.exports = {
	entry: ['babel-polyfill', './entry.js'],
	output: {
		path: `${__dirname}/dist`,
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.scss']
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['babel'],
			exclude: /node_modules/
		}, {
			test: /\.scss$/,
			loaders: ['style', 'css', 'sass'],
			exclude: /node_modules/
		}, {
			test: /\.(eot|ttf|woff|woff2|svg)(\?.+)?$/,
			loaders: ['file']
		}, {
			test: /\.png$/,
			loaders: [
				'file'
			]
		}]
	},
	plugins: []
};
