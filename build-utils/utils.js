const HtmlWebpackPlugin = require('html-webpack-plugin');

function getEntryPoints(chunks) {
	return chunks.reduce((obj, item) => {
		const { name, path } = item;
		return Object.assign(obj, {
			[name]: path,
		});
	}, {})
};

function getHtmlPlugin(chunks) {
	return chunks.filter(chunk => chunk.hasHtmlOutput).map(chunk => {
		const { name, title } = chunk;
		return new HtmlWebpackPlugin({
			title,
			filename: `${name}.html`,
			chunks: [name],
		});
	});
}

function getAddons(addons) {
	const addonsNames = [ ...[addons]].filter(Boolean);
	return addonsNames.map((addonName) => (
		require(`./addons/webpack.${addonName}.js`)
	));
};

module.exports = {
	getEntryPoints,
	getHtmlPlugin,
	getAddons,
};
