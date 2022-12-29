import { SyntheticEvent, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { MainLayout } from "../../components/layouts";
import { MediaCard, TabBar, TabContent, TabsContent } from '../../components/ui';
import { GetStaticProps, NextPage } from 'next';


import { GalleriesData } from '../../_fakeData'


interface GalleriesProps {
	data: {
		galleries: Galleries[]
		seo: SeoProps
	}
}

interface Galleries {
	category: GaleryCategory
	galleries: Gallery[]
}
interface Gallery {
	data: {
		title: string
		body: string
		image: ImageProps
		images: ImageProps[]
		url: string
		seo: SeoProps
	}
}



type GaleryCategory = {
	icon: string
	label: string
	value: number
}

type ImageProps = {
	src: string
	alt: string
}

interface SeoProps {
	title: string
	description: string
}

const Galleries: NextPage<GalleriesProps> = ({
	data: {
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
			<Grid container my={"2%"}>
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
						Galerias
					</Typography>
				</Grid>
			</Grid>

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
														xs={12}
														sm={6}
														md={4}
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