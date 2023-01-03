import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Grid, Typography } from '@mui/material';
import { getPlaiceholder } from "plaiceholder";
import { MainLayout } from '../../components/layouts';
import { HeadingPage, ImageContainer } from '../../components/ui';
import { GalleryProps, ImageProps } from '../../@types';

import { GalleriesData } from '../../_fakeData'
import Image from 'next/image';


const Gallery: NextPage<GalleryProps> = ({
	data: {
		title,
		body,
		date,
		image,
		images,
		seo
	}
}) => {
	return (
		<MainLayout
			seo={seo}
		>
			<Grid container>
				<ImageContainer
					image={image}
					objectFit="cover"
					placeholder="blur"
					priority
				/>
			</Grid>

			<HeadingPage title={title} textAlign={{ md: "left" }} />

			<Grid container alignItems="center">
				<Grid item >
					<Typography textAlign="justify">
						{body}
					</Typography>
				</Grid>
			</Grid>

			<Grid container>
				{
					images.map((image, index) => (
						<Grid
							container
							key={`gallery-image-${index}`}
							my={1}
						>
							<ImageContainer
								image={image}
								objectFit="cover"
								placeholder="blur"
							/>
						</Grid>
					))
				}
			</Grid>


		</MainLayout>
	);
}

export default Gallery;


export const getStaticPaths: GetStaticPaths = async (ctx) => {
	// const { data } = await  // your fetch function here 
	const galleries = GalleriesData.data.galleries.map(({ galleries }) => galleries);
	const flatGalleries = galleries.flat()
	return {
		paths: flatGalleries.map(({ data: { url } }) => ({
			params: {
				gallery_url: url
			}
		})),
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

	const { gallery_url } = params as { gallery_url: string }

	// const { data } = await  // your fetch function here 
	const galleries = GalleriesData.data.galleries.map(({ galleries }) => galleries);
	const flatGalleries = galleries.flat();
	const gallery = flatGalleries.find(({ data: { url } }) => url === gallery_url);

	if (!gallery) throw new Error(`No gallery with url ${gallery_url}`);

	try {

		const { data: {
			image,
			images
		} } = gallery


		const imagesPromises: any = []

		imagesPromises.push(getPlaiceholder(image.src))

		images.forEach(({ src }) => { imagesPromises.push(getPlaiceholder(src)) })

		const [{ base64, img }, ...restImages] = await Promise.all(imagesPromises)

		gallery.data.image = {
			base64,
			alt: image.alt,
			...img
		} as ImageProps

		gallery.data.images = restImages.map(({ base64, img }, index) => {
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
				data: gallery.data
			}
		}
	} catch (e) {
		throw new Error(`Error ${gallery_url} ${e}`);
	}
}