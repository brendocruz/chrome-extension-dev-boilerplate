const commonPaths = require('./common-paths');
const { chunks } = require('./chunks.js');
const { getEntryPoints } = require('./utils.js');

module.exports = {
	entry: getEntryPoints(chunks),
	module: {
		rules: [
			{
				test: /\.(?:js|mjs|cjs)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							{
								targets: 'defaults',
							},
						],
					},
				},
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(?:jpg|jpeg|png|woff|woff2|eot|ttf|svg)%/,
				type: 'asset/resource',
			}
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js'],
	},
	output: {
		filename: '[name].js',
		path: commonPaths.outputPath,
		clean: true,
	},
};

