import { GetStaticProps, NextPage } from 'next'
import { Grid, Typography } from '@mui/material';
import Slider from "react-slick";
import { getPlaiceholder } from "plaiceholder";
import { MainLayout } from '../components/layouts/MainLayout/MainLayout';
import { HeadingPage, ImageContainer } from '../components/ui';
import { HomeProps, ImageProps } from '../@types';

import { HomeData } from '../_fakeData'

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

	const settingsSlider = {
		className: "HomeSlider",
		dots: false,
		arrows: false,
		autoplay: true,
		fade: true,
		speed: 1500,
		autoplaySpeed: 4500,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		// adaptiveHeight: true
	};
	return (

		<MainLayout seo={seo}>

			<Grid>
				<Grid
					item
				>
					<Slider {...settingsSlider} >
						{
							images.map((image, index) => (
								<Grid
									key={`home-slider-index${index}`}
									container
									alignItems="center"
									justifyContent="center"
									height={{
										xs: "75vh",
										md: "auto"
									}}
								>
									<ImageContainer
										image={image}
										objectFit="cover"
										placeholder="blur"
										maxHeight={{
											xs: "70vh",
											xl: "85vh"
										}}
									/>
								</Grid>
							))
						}
					</Slider>
				</Grid>
			</Grid>
			<HeadingPage title={title} textAlign={{ md: "left" }} />
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