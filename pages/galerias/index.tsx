import { SyntheticEvent, useState } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { Grid, Typography } from '@mui/material';
import { MainLayout } from "../../components/layouts";
import { HeadingPage, MediaCard, TabBar, TabContent, TabsContent } from '../../components/ui';
import { GalleriesProps } from '../../@types';


import { GalleriesData } from '../../_fakeData'

const Galleries: NextPage<GalleriesProps> = ({
	data: {
		title,
		body,
		galleries,
		seo
	}
}) => {

	const categories = galleries.map(({ category }) => category);
	const [value, setValue] = useState(0);

	const handleChange = (event: SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<MainLayout
			seo={seo}
		>
			<HeadingPage title={title} textAlign={{ md: "left" }} />

			<Grid
				container
				justifyContent={"center"}
			>
				<Grid item>
					<Grid my={"2%"} >
						<TabBar
							value={value}
							tabs={categories}
							handleChange={handleChange}
						/>
					</Grid>
					<Grid>
						<TabsContent value={value}>
							{
								galleries.map(({ category: { label }, galleries }, index) => (
									<Grid key={`tab-content-${index}`}>
										<TabContent
											title={label}
										>
											{
												galleries.map(({ data: { title, body, image, url } }, index) =>
													<MediaCard
														key={`media-card-${index}`}
														{...{ title, body, image, url: `/galerias/${url}` }}
														gridResponsive={{
															xs: 12,
															sm: 6,
															md: 4,
														}}
													/>
												)
											}
										</TabContent>
									</Grid>
								))
							}
						</TabsContent>
					</Grid>
				</Grid>
			</Grid>
		</MainLayout>
	)
}

export default Galleries;


export const getStaticProps: GetStaticProps = async (ctx) => {
	// const { data } = await  // your fetch function here 
	const { data } = GalleriesData;
	return {
		props: {
			data
		}
	}
}