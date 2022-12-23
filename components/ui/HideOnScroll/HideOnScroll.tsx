import { FC, ReactElement } from 'react';

import { Slide, useScrollTrigger } from '@mui/material'

interface Props {
	window?: () => Window;
	children: ReactElement;
}

export const HideOnScroll: FC<Props> = ({ children, window }) => {
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	});

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	)
}
