import React from 'react';
import { expect, jest, it, describe } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './Button';


describe('Button component tests', () => {
	it('checks if it was clicked', async () => {
		const onClick = jest.fn();

		render(<Button 
			label={'Click Me'}
			onClick={onClick}
		/>);

		const button = screen.getByRole('button');
		await userEvent.click(button);
		expect(onClick).toHaveBeenCalled();
	});
});
