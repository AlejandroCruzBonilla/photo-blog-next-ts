import { FC, ReactElement } from 'react';
import Head from 'next/head';

import { Box } from '@mui/material';
import { Navbar, Sidebar } from '../../ui';


interface Props {
	children: ReactElement,
	seo: SeoProps
}

interface SeoProps {
	title: string,
	description: string,
}

export const MainLayout: FC<Props> = ({
	children,
	seo: {
		title,
		description
	}
}) => {
	return (
		<Box sx={{ flexFlow: 1 }}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Site Name - {title}</title>
				<meta name="description" content={description} />
				<link rel="icon" href="/home.ico" />
			</Head>

			<Navbar />
			<Sidebar />

			<Box>
				{children}
			</Box>

		</Box>
	)
};
