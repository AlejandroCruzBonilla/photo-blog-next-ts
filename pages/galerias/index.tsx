import { Grid, Typography } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { MainLayout } from "../../components/layouts";
import { MediaCard, TabBar, TabContent, TabsContent } from '../../components/ui';

const seo = {
	title: "Galerias",
	description: "Pagina de Galerias"
}

export const Galleries = [
	{
		category: { icon: "work", label: "Portafolio", value: 0 },
		galleries: [
			{
				title: "Galeria 1",
				body: "Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, auctor leo ligula non facilisis sollicitudin fermentum fusce, vitae parturient magnis viverra erat proin suscipit. Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, auctor leo ligula non facilisis sollicitudin fermentum fusce, vitae parturient magnis viverra erat proin suscipit.",
				image: { src: "https://via.placeholder.com/1920x1080.jpeg", alt: "Alt Text" },
				url: "galeria-1"
			},
			{
				title: "Galeria 2",
				body: "Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, auctor leo ligula non facilisis sollicitudin fermentum fusce, vitae parturient magnis viverra erat proin suscipit. Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, auctor leo ligula non facilisis sollicitudin fermentum fusce, vitae parturient magnis viverra erat proin suscipit.",
				image: { src: "https://via.placeholder.com/1920x1080.jpeg", alt: "Alt Text" },
				url: "galeria-2"
			},
			{
				title: "Galeria 3",
				body: "Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, auctor leo ligula non facilisis sollicitudin fermentum fusce, vitae parturient magnis viverra erat proin suscipit. Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, auctor leo ligula non facilisis sollicitudin fermentum fusce, vitae parturient magnis viverra erat proin suscipit.",
				image: { src: "https://via.placeholder.com/1920x1080.jpeg", alt: "Alt Text" },
				url: "galeria-3"
			},
		]
	},
	{
		category: { icon: "newspaper", label: "Periodismo", value: 1 },
		galleries: [
			{
				title: "Galeria 4",
				body: "Soy una Galeria",
				image: { src: "https://via.placeholder.com/1920x1080.jpeg", alt: "Alt Text" },
				url: "galeria-4"
			},
			{
				title: "Galeria 5",
				body: "Soy una Galeria",
				image: { src: "https://via.placeholder.com/1920x1080.jpeg", alt: "Alt Text" },
				url: "galeria-5"
			},
			{
				title: "Galeria 6",
				body: "Soy una Galeria",
				image: { src: "https://via.placeholder.com/1920x1080.jpeg", alt: "Alt Text" },
				url: "galeria-6"
			},
		]
	},
	{
		category: { icon: "contacts", label: "Proyectos personales", value: 2 },
		galleries: [
			{
				title: "Galeria 7",
				body: "Soy una Galeria",
				image: { src: "https://via.placeholder.com/1920x1080.jpeg", alt: "Alt Text" },
				url: "galeria-7"
			},
			{
				title: "Galeria 8",
				body: "Soy una Galeria",
				image: { src: "https://via.placeholder.com/1920x1080.jpeg", alt: "Alt Text" },
				url: "galeria-8"
			},
			{
				title: "Galeria 9",
				body: "Soy una Galeria",
				image: { src: "https://via.placeholder.com/1920x1080.jpeg", alt: "Alt Text" },
				url: "galeria-9"
			},
		]
	},
]

const Galerias = () => {


	const categories = Galleries.map(({ category }) => category)
	const galleries = Galleries.map(({ galleries }) => galleries)

	const [{ value: initValue }] = categories;
	const [value, setValue] = useState(initValue)



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
								galleries.map((galleries, index) => {
									const { label } = categories[index]
									return (
										<Grid key={`tab-content-${index}`}>
											<TabContent
												title={label}
											>
												{
													galleries.map(({ title, body, image, url }, index) =>
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
									)
								})
							}
						</TabsContent>
					</Grid>
				</Grid>
			</Grid>
		</MainLayout>
	)
}

export default Galerias;