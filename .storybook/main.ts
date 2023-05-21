import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
	stories: [
		'../src/components/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-styling',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
		// 'storybook-addon-material-ui5'
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	typescript: {
		check: false,
		checkOptions: {},
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			shouldRemoveUndefinedFromOptional: true,
			propFilter: (prop) => (
				prop.parent ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName) : true
			),
		}
	}
};

export default config;
