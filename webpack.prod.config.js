const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const webpack = require('webpack');
const _ = require('lodash');

const config = require('./webpack.config');

module.exports = _.assign(config, {
	plugins: [
		new LodashModuleReplacementPlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		})
	]
});
