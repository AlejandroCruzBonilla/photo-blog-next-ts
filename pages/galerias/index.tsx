import { SyntheticEvent, useState } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { Grid, Typography } from '@mui/material';
import { getPlaiceholder } from "plaiceholder";
import { MainLayout } from "../../components/layouts";
import { HeadingPage, MediaCard, TabBar, TabContent, TabsContent } from '../../components/ui';
import { imagekitIoLoader } from '../../utils/customImageLoader';
import { GalleriesProps } from '../../@types';


import GalleriesData from '../../_fakeData/galleries.json'

const Galleries: NextPage<GalleriesProps> = ({
	data: {
		title,
		body,
		galleries,
		seo
	}
}) => {

	const categories = galleries.map(({ category }) => category);
	const [value, setValue] = useState(0);

	const handleChange = (event: SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<MainLayout
			seo={seo}
		>
			<HeadingPage title={title} textAlign={{ md: "left" }} />

			<Grid
				container
				justifyContent={"center"}
			>
				<Grid item my={"2%"} >
					<TabBar
						value={value}
						tabs={categories}
						handleChange={handleChange}
					/>
				</Grid>
				<Grid container>
					<TabsContent value={value}>
						{
							galleries.map(({ category: { label }, galleries }, index) => (
								<TabContent
									key={`tab-content-${index}`}
									title={label}
								>
									{
										galleries.map(({ data: { title, body, image, url } }, index) =>
											<MediaCard
												key={`media-card-${index}`}
												{...{ title, body, image, url: `/galerias/${url}` }}
												gridResponsive={{
													xs: 12,
													sm: 6,
													md: 4,
												}}
												maxHeight={{
													xs: "50vw",
													sm: "30vw",
													md: "15vw",
												}}
											/>
										)
									}
								</TabContent>

							))
						}
					</TabsContent>
				</Grid>
			</Grid>
		</MainLayout>
	)
}

export default Galleries;


export const getStaticProps: GetStaticProps = async (ctx) => {
	// const { data } = await  // your fetch function here 
	const { data } = GalleriesData;

	const { galleries, ...rest } = data;

	const imagesPromises: any = []

	galleries.forEach(({ galleries }) => {
		galleries.forEach(({ data: { image } }) => {
			imagesPromises.push(getPlaiceholder(
				imagekitIoLoader({
					src: image.src,
					width: 600,
					quality: 30
				})
			));
		})
	})

	const mainImages = await Promise.all(imagesPromises);

	const newGalleries = galleries.map(({ galleries, ...rest }, i_index) => {
		return {
			...rest,
			galleries: galleries.map(({ data: { image: { alt }, ...rest } }, j_index) => {
				const { base64, img } = mainImages.shift()
				return {
					data: {
						...rest,
						image: {
							alt,
							base64,
							...img
						}
					}
				}
			})
		}
	})

	return {
		props:{
			data: {
				...rest,
				galleries: newGalleries
			}
		}
	}
}