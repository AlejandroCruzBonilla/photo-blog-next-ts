import { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { Grid, Typography } from '@mui/material';
import Slider from "react-slick";

import { MainLayout } from '../components/layouts/MainLayout/MainLayout';

import { HomeData } from '../_fakeData'

// import styles from '../styles/Home.module.css'
// import { Inter } from '@next/font/google'
// const inter = Inter({ subsets: ['latin'] })

interface HomeProps {
	data: {
		title: string
		body: string
		image: ImageProps
		images: ImageProps[]
		seo: Seo
	}
}
type ImageProps = {
	src: string
	alt: string
}

interface Seo {
	title: string
	description: string
}

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
				<Grid item>
					<Slider {...settingsSlider}>
						{
							images.map((image, index) => (
								<Grid key={`home-slider-index${index}`} container alignItems="center" justifyContent="center" >
									<Grid item height={"90vh"}>
										<Image
											src={image.src}
											alt={image.alt}
											width={1920}
											height={1080}
											style={{
												width: "100%",
												height: "100%",
												objectFit: "cover",
												objectPosition: "center"
											}}
										/>
									</Grid>
								</Grid>
							))
						}
					</Slider>
				</Grid>
			</Grid>
			<Grid container my={"2%"}>
				<Grid
					item
					xs={12}
				>
					<Typography
						variant="h1"
						fontSize={"3rem"}
						textAlign={{
							xs: "center",
							md: "start"
						}}
					>
						{title}
					</Typography>
				</Grid>
			</Grid>
		</MainLayout>

	)
}

export default Home



export const getStaticProps: GetStaticProps = async (ctx) => {
	// const { data } = await  // your fetch function here 
	const { data } = HomeData;
	return {
		props: {
			data
		}
	}
}