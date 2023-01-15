import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Box, Grid, Typography } from '@mui/material';
import { getPlaiceholder } from "plaiceholder";
import { MainLayout } from '../../components/layouts';
import { HeadingPage, ImageContainer } from '../../components/ui';
import { imagekitIoLoader } from '../../utils/customImageLoader';
import { GalleryProps, ImageProps } from '../../@types';

import GalleriesData from '../../_fakeData/galleries.json'
import { MasonryPhotoswipeGallery } from '../../components/ui/MasonryPhotoswipeGallery/MasonryPhotoswipeGallery';


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
			<HeadingPage title={title} textAlign={{ md: "left" }} />

			<Grid container alignItems="center" my={4}>
				<Grid item >
					<Typography textAlign="justify">
						{body}
					</Typography>
				</Grid>
			</Grid>

			<Box my={2}>
				<MasonryPhotoswipeGallery
					galleryID='masonry-photoswipe-gallery'
					images={images}
				/>
			</Box>
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
			images,
			...restProps
		} } = gallery


		const imagesPromises: any = []
		
		imagesPromises.push(getPlaiceholder(
			imagekitIoLoader({
				src: image.src,
				width: image.width,
				quality: 50
			})
		));

		images.forEach(({ src, width }) => {
			imagesPromises.push(getPlaiceholder(
				imagekitIoLoader({
					src,
					width,
					quality: 50
				})
			))
		});

		const [{ base64, img }, ...restImages] = await Promise.all(imagesPromises);

		const props = {
			data: {
				...restProps,
				image: {
					base64,
					alt: image.alt,
					...img
				},
				images: restImages.map(({ base64, img }, index) => {
					const alt = images[index].alt
					return (
						{
							base64,
							alt,
							...img
						} as ImageProps)
				})
			}
		}
		return {
			props
		}
	} catch (e) {
		throw new Error(`Error: ${gallery_url} ${e}`);
	}
}