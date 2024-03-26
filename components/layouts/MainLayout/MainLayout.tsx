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
				<title>{`Nayeli Cruz - ${title}`}</title>
				<meta name="description" content={description} />
				<meta property="og:title" content={`Nayeli Cruz - ${title}`}/>
				<meta property="og:description" content={description}/>
				<meta property="og:image" content="https://photo-blog-next-ts.vercel.app/Nayeli-Cruz-portada.jpg"/>
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

			<Grid
				component={"main"}
				container
				justifyContent={"center"}
				px={{
					xs: 2
				}}
				mb={3}
			>
				<Grid
					item
					xs={12}
					md={10}
				>
					{children}
				</Grid>
			</Grid>
			<Footer />
		</>
	)
};