import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Grid, Typography } from '@mui/material';
import { MainLayout } from '../../components/layouts';
import { HeadingPage, ImageContainer } from '../../components/ui';
import { ArticleProps } from '../../@types';

import { ArticlesData } from '../../_fakeData'

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

	const { articles } = ArticlesData.data;

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

	const { articles } = ArticlesData.data;


	const article = articles.find(({ data: { url } }) => url === article_url)

	if (!article) throw new Error(`No article with url ${article_url}`)
	return {
		props: {
			data: article.data
		}
	}
}