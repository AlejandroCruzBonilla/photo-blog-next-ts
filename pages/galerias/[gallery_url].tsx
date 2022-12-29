import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { Grid, Typography } from '@mui/material';
import { MainLayout } from '../../components/layouts';
import { HeadingPage, ImageContainer } from '../../components/ui';
import { GalleryProps } from '../../@types';

import { GalleriesData } from '../../_fakeData'


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
					objectFit="none"
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

			<Grid
				container
				justifyContent="center"
				alignItems="center"
				py={6}
			>
				<Grid item >
					{
						images.map((image, index) => (
							<ImageContainer
								key={`gallery-image-${index}`}
								image={image}
								objectFit="none"
							/>
						))
					}
				</Grid>
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

	if (!gallery) throw new Error(`No article with url ${gallery_url}`);

	return {
		props: {
			data: gallery.data
		}
	}
}