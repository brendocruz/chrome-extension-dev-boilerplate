const commonPaths = require('./common-paths');

module.exports = {
	chunks: [
		{
			name: 'popup',
			path: `${commonPaths.appEntry}/popup/popup.tsx`,
			title: 'Extension Popup',
			hasHtmlOutput: true,
		},
		{
			name: 'options',
			path: `${commonPaths.appEntry}/options/options.tsx`,
			title: 'Extension Options',
			hasHtmlOutput: true,
			favicon: 'icon.png',
		},
		{
			name: 'background',
			path: `${commonPaths.appEntry}/background/background.ts`,
			hasHtmlOutput: false,
		},
		{
			name: 'contentScript',
			path: `${commonPaths.appEntry}/contentScript/contentScript.ts`,
			hasHtmlOutput: false,
		},
	],
};
