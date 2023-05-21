const common = require('./build-utils/webpack.common');
const merge = require('webpack-merge').merge;
const { getAddons } = require('./build-utils/utils.js');


module.exports = (env) => {
	const config = require(`./build-utils/webpack.${env.env}.js`);
	const merged = merge(
		common,
		config,
		...getAddons(env.addons),
	);
	return merged;
};
