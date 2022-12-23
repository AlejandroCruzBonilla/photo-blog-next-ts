import { FC, ReactElement } from 'react';
import Head from 'next/head';

import { Box, Grid } from '@mui/material';
import { Navbar, MainMenu, Footer } from '../../ui';


interface Props {
	children: ReactElement | ReactElement[],
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
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>{`Site Name - ${title}`}</title>
				<meta name="description" content={description} />
				<link rel="icon" href="/home.ico" />
			</Head>
		
			<Grid component={"header"}>
				<Navbar />
				<MainMenu />
			</Grid>

			<Grid component={"main"} mb={"30vh"} pb={3}>
				{children}
			</Grid>
			<Footer />
		</>





	)
};
