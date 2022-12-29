import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Grid, Typography } from '@mui/material';
import { MainLayout } from '../../components/layouts';

import { ArticlesData } from '../../_fakeData'

interface ArticleProps {
	data: {
		url: string
		title: string
		body: string
		date?: string
		image: ImageProps
		seo: SeoProps
	}
}

type ImageProps = {
	src: string
	alt: string
}

interface SeoProps {
	title: string
	description: string
}

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