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

			</Head>
			<Grid container direction={"column"}>
				<Grid
					component={"header"}
					mb={5}
				>
					<Navbar />
					<MainMenu />
				</Grid>

				<Grid
					component={"main"}
					item
					// pt={4}
					px={3}
					my={5}
					minHeight={'65vh'}
					width={1}>
					{children}
				</Grid>

				<Grid item component={"footer"}>
					<Footer />
				</Grid>
			</Grid>

		</>





	)
};
