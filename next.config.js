const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(
	withImages({
		target: 'serverless',
		webpack: (config, options) => {
			if (config.resolve.plugins) {
				config.resolve.plugins.push(new TsconfigPathsPlugin());
			} else {
				config.resolve.plugins = [new TsconfigPathsPlugin()];
			}
			return config;
		},
		loaders: [
			{
				test: /\.css$/,
				loader: 'style!css!'
			}
		]
	})
);
