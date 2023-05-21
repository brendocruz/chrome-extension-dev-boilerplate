const commonPaths = require('./common-paths.js');
const { getHtmlPlugin } = require('./utils.js');
const { chunks } = require('./chunks.js');

const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
	mode: 'production',
	plugins: [
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
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
};
