import { Grid, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MainLayout } from '../../components/layouts';

interface Props {
	gallery: Gallery
}
interface Gallery {
	url: string
	title: string
	body: string
	date?: string
	image: Image
	images: Image[]
}

type Image = {
	src: string
	alt: string
}

const seo = {
	title: "Articulo X",
	description: "Pagina de Articulo X"
}

const Gallery: NextPage<Props> = ({
	gallery: {
		title,
		body,
		date,
		image,
		images,
	}
}) => {
	const router = useRouter();
	return (
		<MainLayout
			seo={seo}
		>

			<Grid container alignItems="center" justifyContent="center">
				<Grid item >
					<Image
						src={image.src}
						alt={image.alt}
						width={1920}
						height={800}
						style={{
							width: "100%",
							height: "100%",
							objectFit: "none",
							objectPosition: "center"
						}}
					/>
				</Grid>
			</Grid>
			<Grid
				container
				my={"2%"}
			>
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
			<Grid container alignItems="center">
				<Grid item >
					<Typography textAlign="justify">
						{body}
					</Typography>
				</Grid>
			</Grid>

			<Grid container alignItems="center">
				<Grid item >
					{
						images.map(({ src, alt }, index) => (
							<Grid key={`gallery-image-${index}`} container alignItems="center" justifyContent="center">
								<Grid item >
									<Image
										src={src}
										alt={alt}
										width={1920}
										height={800}
										style={{
											width: "100%",
											height: "100%",
											objectFit: "none",
											objectPosition: "center"
										}}
									/>
								</Grid>
							</Grid>
						))
					}
				</Grid>
			</Grid>

		</MainLayout>
	);
}

export default Gallery;

import { Galleries } from './'

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	// const { data } = await  // your fetch function here 
	const galleries = Galleries.map(({ galleries }) => galleries);
	const flatGalleries = galleries.flat()
	return {
		paths: flatGalleries.map(({ url }) => ({
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

	const galleries = Galleries.map(({ galleries }) => galleries);
	const flatGalleries = galleries.flat()
	const gallery = flatGalleries.find(({ url }) => url === gallery_url)

	return {
		props: {
			gallery
		}
	}
}