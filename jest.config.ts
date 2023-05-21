import type { Config } from 'jest';

export default {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: [
		'./jest.setup.js',
	],
	moduleNameMapper: {
		'\\.css$': 'identity-obj-proxy',
		'@fontsource/roboto': 'identity-obj-proxy',
	},
} satisfies Config;
