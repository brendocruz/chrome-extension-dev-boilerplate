import type { Meta, StoryObj } from '@storybook/react';

import { Popup } from './Popup';

export default {
	title: 'Pages/Popup',
	component: Popup,
	tags: ['autodocs'],
} satisfies Meta<typeof Popup>;

export const BasicPopup: StoryObj<typeof Popup> = { };
