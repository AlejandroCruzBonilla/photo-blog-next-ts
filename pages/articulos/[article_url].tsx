import { Grid, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MainLayout } from '../../components/layouts';

interface Props {
	article: Article
}
interface Article {
	url: string
	title: string
	body: string
	date?: string
	image: {
		src: string
		alt: string
	}
}

const seo = {
	title: "Articulo X",
	description: "Pagina de Articulo X"
}

const Articulo: NextPage<Props> = ({
	article: {
		title,
		body,
		date,
		image,
	}
}) => {
	const router = useRouter();
	// console.log(router.query);
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

export default Articulo;

import { allArticles } from './'

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	// const { data } = await  // your fetch function here 

	return {
		paths: allArticles.map(({ url }) => ({
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

	const article = allArticles.find(({ url }) => url === article_url)

	return {
		props: {
			article
		}
	}
}