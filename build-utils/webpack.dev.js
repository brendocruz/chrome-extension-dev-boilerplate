const commonPaths = require('./common-paths.js');
const { getHtmlPlugin } = require('./utils.js');
const { chunks } = require('./chunks.js');

const CopyPlugin = require('copy-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');


module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	plugins: [
		new HotModuleReplacementPlugin(),
		new CopyPlugin({
			patterns: [
				{
					from: `${commonPaths.projectRoot}/src/static`,
					to: commonPaths.outputPath,
				}
			]
		}),
		...getHtmlPlugin(chunks),
	],
};
