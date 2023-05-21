import type { Meta, StoryObj } from '@storybook/react';

import { Options } from './Options';

export default {
	title: 'Pages/Options',
	component: Options,
	tags: ['autodocs'],
} satisfies Meta<typeof Options>;

export const BasicOptions: StoryObj<typeof Options> = { };
