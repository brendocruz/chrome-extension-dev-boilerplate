import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Button } from './Button';

import { expect, jest } from '@storybook/jest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export default {
	title: 'Controls/Button',
	component: Button,
	tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export const BasicButton: StoryObj<typeof Button> = {
	render: (args) => <Button {...args} />,
	play: async ({ args }) => {
		const button = screen.getByRole('button');
		await userEvent.click(button);
		expect(args.onClick).toHaveBeenCalled();
	},
	args: {
		label: 'Click me',
	},
};
