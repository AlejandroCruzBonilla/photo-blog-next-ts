import { Grid, Typography } from '@mui/material';
import { GetStaticProps, NextPage } from 'next';
import { MainLayout } from "../../components/layouts";
import { MediaCard } from '../../components/ui';

import { ArticlesData } from '../../_fakeData'

interface ArticlesProps {
	data: {
		articles: Article[]
		seo: SeoProps
	}
}

interface Article {
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

const Articles: NextPage<ArticlesProps> = ({
	data: {
		articles,
		seo
	}
}) => {

	return (
		<MainLayout
			seo={seo}
		>
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
						Articulos
					</Typography>
				</Grid>
			</Grid>
			<Grid container>
				{
					articles.map(({ data: { title, body, image, url } }, index) =>
						<MediaCard
							key={`media-card-${index}`}
							{...{ title, body, image, url: `/articulos/${url}` }}
							xs={12}
							sm={6}
							md={4}
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
	return {
		props: {
			data
		}
	}
}