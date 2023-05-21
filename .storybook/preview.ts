import type { Preview } from "@storybook/react";

export default {
	parameters: {
		actions: {
			argTypesRegex: '^on.*',
		},
		controls: {
			expanded: true,
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
} as const satisfies Preview;

import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { lightTheme } from '../src/themes/lightTheme';
import { darkTheme } from '../src/themes/darkTheme';

// import { muiTheme } from 'storybook-addon-material-ui5';

export const decorators = [
	// muiTheme([
	// 	lightTheme,
	// 	darkTheme,
	// ]),
	withThemeFromJSXProvider({
		themes: {
			light: lightTheme,
			dark: darkTheme,
		},
		defaultTheme: 'light',
		Provider: ThemeProvider,
		GlobalStyles: CssBaseline,
	}),
];
