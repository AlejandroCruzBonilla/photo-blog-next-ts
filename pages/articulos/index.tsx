import { Grid, Typography } from '@mui/material';
import { GetStaticProps, NextPage } from 'next';
import { getPlaiceholder } from "plaiceholder";
import { MainLayout } from "../../components/layouts";
import { HeadingPage, MediaCard } from '../../components/ui';
import { ArticlesProps } from '../../@types';

import { ArticlesData } from '../../_fakeData'

const Articles: NextPage<ArticlesProps> = ({
	data: {
		title,
		body,
		articles,
		seo
	}
}) => {

	return (
		<MainLayout
			seo={seo}
		>
			<HeadingPage title={title} textAlign={{ md: "left" }} />
			<Grid container>
				{
					articles.map(({ data: { title, body, image, url } }, index) =>
						<MediaCard
							key={`media-card-${index}`}
							{...{ title, body, image, url: `/articulos/${url}` }}
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
			</Grid>
		</MainLayout>
	)
}

export default Articles;


export const getStaticProps: GetStaticProps = async (ctx) => {
	// const { data } = await  // your fetch function here 
	const { data } = ArticlesData;
	const { articles } = data;

	const imagesPromises: any = []

	articles.forEach(({ data: { image } }) => {
		imagesPromises.push(getPlaiceholder(image.src));
	})

	const mainImages = await Promise.all(imagesPromises);

	articles.forEach(({ data: { image } }, index) => {
		const { base64, img } = mainImages.shift()
		articles[index].data.image = {
			alt: image.alt,
			base64,
			...img,
		}
	})

	return {
		props: {
			data
		}
	}
}