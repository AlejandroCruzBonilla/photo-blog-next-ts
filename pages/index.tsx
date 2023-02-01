import { GetStaticProps, NextPage } from 'next'
import NextLink from 'next/link';
import { MainLayout } from '../components/layouts/MainLayout/MainLayout';
import { Grid, Typography } from '@mui/material';
import { Masonry } from '@mui/lab';
import Slider from "react-slick";
import { ImageContainer } from '../components/ui';
import { imagekitIoLoader } from '../utils/customImageLoader';
import { getPlaiceholder } from "plaiceholder";
import { HomeProps } from '../@types';

import HomeData from '../_fakeData/home.json'

// import styles from '../styles/Home.module.css'
// import { Inter } from '@next/font/google'
// const inter = Inter({ subsets: ['latin'] })


const Home: NextPage<HomeProps> = ({
	data: {
		title,
		subtitle,
		body,
		images,
		links,
		seo
	}
}) => {

	return (

		<MainLayout seo={seo}>

			<Grid
				container
				mb={{
					xs: 2
				}}
			>
				<Grid container >
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
							{title}
						</Typography>
						<Typography
							variant='h2'
							fontWeight={700}
							fontSize={{
								xs: '2.5rem',
								md: '3.2rem',
								lg: '4.2rem',
								xl: '5.2rem',
							}}
						>
							{subtitle}
						</Typography>
					</Grid>
				</Grid>
			</Grid>

			<Grid
				mb={{
					xs: 8
				}}
			>
				<Slider
					dots={false}
					arrows={false}
					infinite={true}
					autoplay={true}
					speed={800}
				>
					{
						images.map((image, index) => (
							<ImageContainer
								key={`main-slide-${index}`}
								image={image}
								objectFit="cover"
								placeholder="blur"
								priority={(index = 0) ? true : false}
							/>
						))
					}
				</Slider>
			</Grid>
			<Masonry
				// spacing={4}
				columns={{
					xs: 1,
					sm: 2,
				}}
			>
				{
					links.map(({ title, image, url }, index) => (
						<Grid key={`home-link-${index}`}>
							<NextLink
								href={url}
								style={{
									textDecoration: "none",
									color: "unset"
								}}
							>
								<Typography
									variant='h2'
									fontWeight={700}
									textAlign="center"
								>
									{title}
								</Typography>
							</NextLink>
							<NextLink
								href={url}
							>
								<ImageContainer
									image={image}
									objectFit="cover"
									placeholder="blur"
									maxHeight={{
										xs: "50vw",
										sm: `${index % 2 ? "50vw" : "40vw"}`,
										// lg: `${index % 2 ? "40vw" : "35vw"}`,
									}}
								/>
							</NextLink>
						</Grid>
					))
				}
			</Masonry>

		</MainLayout>

	)
}

export default Home

export const getStaticProps: GetStaticProps = async (ctx) => {
	// const { data } = await  // your fetch function here 
	const { data } = HomeData;
	const { images, links, ...rest } = data
	const imagesPromises: any = []
	const linkImagesPromises: any = []

	images.forEach(({ src, width }) => {
		imagesPromises.push(getPlaiceholder(
			imagekitIoLoader({
				src: src,
				width: 1000,
				quality: 100
			})
		));
	});

	links.forEach(({ image: { src } }) => {
		linkImagesPromises.push(getPlaiceholder(
			imagekitIoLoader({
				src: src,
				width: 1000,
				quality: 70
			})
		));
	});

	const Images = await Promise.all(imagesPromises);
	const LinkImages = await Promise.all(linkImagesPromises);

	const props = {
		data: {
			...rest,
			images: Images.map(({ base64, img }, index) => {
				const alt = images[index].alt
				return (
					{
						base64,
						alt,
						...img
					})
			}),
			links: LinkImages.map(({ base64, img }, index) => {
				const { image, ...rest } = links[index]
				return (
					{
						...rest,
						image: {
							base64,
							...img,
							alt: image.alt
						}
					}
				)
			})
		}
	}

	return {
		props
	}
}