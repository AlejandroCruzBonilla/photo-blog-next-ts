import { GetStaticProps, NextPage } from 'next'
import { Grid, Typography } from '@mui/material';
import { getPlaiceholder } from "plaiceholder";
import { MainLayout } from '../components/layouts/MainLayout/MainLayout';
import { HeadingPage, ImageContainer } from '../components/ui';
import { HomeProps, ImageProps } from '../@types';

import { HomeData } from '../_fakeData'
import Link from 'next/link';

// import styles from '../styles/Home.module.css'
// import { Inter } from '@next/font/google'
// const inter = Inter({ subsets: ['latin'] })


const Home: NextPage<HomeProps> = ({
	data: {
		title,
		body,
		image,
		images,
		seo
	}
}) => {

	return (

		<MainLayout seo={seo}>
			<Grid item>

				<Grid
					container
					mb={{
						xs: 2
					}}
				>
					<Grid
						container
						alignItems="center"
						item
						xs={12}
						sm={6}
					>
						<Grid item>
							<Typography
								variant='h1'
								textAlign={{
									xs: 'left',
								}}
								fontSize={{
									lg: '8rem',
								}}
							>
								Nayeli <br />
								Cruz  <br />
								Bonilla
							</Typography>
							<Typography
								variant='h2'
								fontWeight={600}
								fontSize={{
									xs: '2.5rem',
									md: '3.2rem',
									lg: '4.2rem',
									xl: '5.2rem',
								}}
							>
								Fotoperiodismo
							</Typography>
						</Grid>
					</Grid>
					<Grid
						item
						xs={12}
						sm={6}
					>
						<ImageContainer
							image={image}
							objectFit="cover"
							placeholder="blur"
							maxHeight={{
								xs: "50vh",
								sm: "60vh",
							}}
						/>
					</Grid>
				</Grid>

				<Grid
					container
					direction={{
						xs: "column-reverse",
						sm: "row"
					}}
					mb={{
						xs: 2
					}}
				>
					<Grid
						item
						xs={12}
						sm={6}
					>
						<Link
							href={'/galerias'}
						>
							<ImageContainer
								image={images[5]}
								objectFit="cover"
								placeholder="blur"
								maxHeight={{
									xs: "50vh",
									sm: "60vh",
								}}
							/>
						</Link>
					</Grid>
					<Grid
						container
						justifyContent={"center"}
						alignItems={"center"}
						item
						xs={12}
						sm={6}
					>
						<Link
							href={'/galerias'}
							style={{
								textDecoration: "none",
								color: "unset"
							}}
						>
							<Typography
								variant='h2'
								fontWeight={600}
							>
								Galerías
							</Typography>
						</Link>

					</Grid>
				</Grid>

				<Grid
					container
					mb={{
						xs: 2
					}}
				>
					<Grid
						container
						justifyContent={"center"}
						alignItems="center"
						item
						xs={12}
						sm={6}

					>
						<Grid item>
							<Link
								href={'/articulos'}
								style={{
									textDecoration: "none",
									color: "unset"
								}}
							>
								<Typography
									variant='h2'
									fontWeight={600}
									textAlign={{
										xs: 'left',
									}}
								>
									Artículos
								</Typography>
							</Link>
						</Grid>
					</Grid>
					<Grid
						item
						xs={12}
						sm={6}
					>
						<Link
							href={'/articulos'}
						>
							<ImageContainer
								image={images[4]}
								objectFit="cover"
								placeholder="blur"
								maxHeight={{
									xs: "50vh",
									sm: "60vh",
								}}
							/>
						</Link>
					</Grid>
				</Grid>

			</Grid>
		</MainLayout>

	)
}

export default Home



export const getStaticProps: GetStaticProps = async (ctx) => {
	// const { data } = await  // your fetch function here 
	const { data } = HomeData;
	const { data: { image, images } } = HomeData
	const imagesPromises: any = []

	imagesPromises.push(getPlaiceholder(image.src));

	images.forEach(({ src }) => {
		imagesPromises.push(getPlaiceholder(src));
	})

	const [{ base64, img }, ...restImages] = await Promise.all(imagesPromises);

	data.image = {
		base64,
		alt: image.alt,
		...img
	} as ImageProps

	data.images = restImages.map(({ base64, img }, index) => {
		const alt = images[index].alt
		return (
			{
				base64,
				alt,
				...img
			} as ImageProps)
	})

	return {
		props: {
			data
		}
	}
}