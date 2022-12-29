import { Grid, Typography } from '@mui/material';
import { GetStaticProps, NextPage } from 'next';
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