import { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { Grid, Typography } from '@mui/material';
import Slider from "react-slick";

import { MainLayout } from '../components/layouts/MainLayout/MainLayout';
import { HeadingPage, ImageContainer } from '../components/ui';
import { HomeProps } from '../@types';

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
				<Grid item>
					<Slider {...settingsSlider}>
						{
							images.map((image, index) => (
								<Grid
									key={`home-slider-index${index}`}
									container
									alignItems="center"
									justifyContent="center"
									height={"90vh"}
								>
									<ImageContainer
										image={image}
										objectFit="cover"
									/>
								</Grid>
							))
						}
					</Slider>
				</Grid>
			</Grid>
			<HeadingPage title={title} textAlign={{md:"left"}} />
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