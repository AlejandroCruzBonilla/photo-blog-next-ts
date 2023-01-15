import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Grid, Typography } from '@mui/material';
import { getPlaiceholder } from "plaiceholder";
import { MainLayout } from '../../components/layouts';
import { HeadingPage, ImageContainer } from '../../components/ui';
import { imagekitIoLoader } from '../../utils/customImageLoader';
import { ArticleProps, ImageProps } from '../../@types';

import ArticlesData from '../../_fakeData/articles.json'

const Article: NextPage<ArticleProps> = ({
	data: {
		title,
		body,
		date,
		image,
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
					maxHeight={{
						xs: "50vw",
						sm: "70vw",
						md: "50vw",
					}}
				/>
			</Grid>

			<HeadingPage title={title} textAlign={{ md: "left" }} />

			<Grid container alignItems="center">
				<Grid item mb={"6%"}>
					<Typography textAlign="justify">
						{body}
					</Typography>
				</Grid>
			</Grid>

		</MainLayout>
	);
}

export default Article;


export const getStaticPaths: GetStaticPaths = async (ctx) => {
	// const { data } = await  // your fetch function here 

	const { data } = ArticlesData;
	const { articles } = data;

	return {
		paths: articles.map(({ data: { url } }) => ({
			params: {
				article_url: url
			}
		})),
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

	const { article_url } = params as { article_url: string }

	// const { data } = await  // your fetch function here 

	const { data } = ArticlesData;
	const { articles } = data;


	const article = articles.find(({ data: { url } }) => url === article_url)

	if (!article) throw new Error(`No article with url ${article_url}`)
	const { data: { image } } = article


	// console.log("IMAGELOADER", imagekitIoLoader({
	// 	src: image.src,
	// 	width: image.width,
	// 	quality: 50
	// }))

	const { base64, img } = await getPlaiceholder(imagekitIoLoader({
		src: image.src,
		width: image.width,
		quality: 50
	}))

	const optimizeArticleData = {
		...article.data,
		image: {
			alt: image.alt,
			base64,
			...img
		}
	}

	return {
		props: {
			data: optimizeArticleData
		}
	}
}