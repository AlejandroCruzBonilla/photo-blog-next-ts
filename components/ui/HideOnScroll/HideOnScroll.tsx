import { FC } from 'react';

import { Slide, useScrollTrigger } from '@mui/material'
import { HideOnScrollProps } from './models';


export const HideOnScroll: FC<HideOnScrollProps> = ({ children, window }) => {
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	});

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	)
}
