import React, { MouseEvent } from 'react';
import {
	Button as MuiButton,
	ButtonProps as MuiButtonProps
} from '@mui/material';

import '@fontsource/roboto';
import './Button.css';


type ButtonBaseProps = Pick<
	MuiButtonProps,
	'variant' | 'size' | 'color' | 'onClick'
>;

export interface ButtonProps extends ButtonBaseProps {
	/** Button label text */
	label: string;
	/** Mouse click event handler */
	onClick: (event: MouseEvent<HTMLButtonElement>) => void,
}

export const Button = ({ label, ...rest }: ButtonProps) => (
	<MuiButton {...rest}>{label}</MuiButton>
);
