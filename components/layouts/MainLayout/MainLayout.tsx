import { FC } from 'react';
import Head from 'next/head';
import { Grid, Toolbar } from '@mui/material';
import { Navbar, MainMenu, Footer } from '../../ui';
import { MainLayoutProps } from './model';

export const MainLayout: FC<MainLayoutProps> = ({
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

			<Grid component={"header"} >
				<Navbar />
				<Toolbar
					disableGutters
					sx={{
						mb: {
							xs: "6%",
							sm: "3%",
						}
					}}
				/>
				<MainMenu />
			</Grid>

			<Grid component={"main"}
				container
				justifyContent={"center"}
				minHeight={'65vh'}
				px={{
					xs: 2
				}}
			>
				<Grid
					item
					xs={12}
					md={10}
				>
					{children}
				</Grid>
			</Grid>

			<Grid component={"footer"} >
				<Footer />
			</Grid>


		</>
	)
};