import { Grid, Typography } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { MainLayout } from "../../components/layouts";
import { MediaCard, TabBar, TabContent, TabsContent } from '../../components/ui';

const seo = {
	title: "Galerias",
	description: "Pagina de Galerias"
}

const Galleries = [
	{
		category: { icon: "work", label: "Portafolio", value: 0 },
		galleries: [
			{ title: "Galerias 0", body: "Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, auctor leo ligula non facilisis sollicitudin fermentum fusce, vitae parturient magnis viverra erat proin suscipit. Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, auctor leo ligula non facilisis sollicitudin fermentum fusce, vitae parturient magnis viverra erat proin suscipit.", image: { src: "https://via.placeholder.com/1920x1080.jpeg", alt: "Alt Text" } },
			{ title: "Galerias 0", body: "Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, auctor leo ligula non facilisis sollicitudin fermentum fusce, vitae parturient magnis viverra erat proin suscipit. Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, auctor leo ligula non facilisis sollicitudin fermentum fusce, vitae parturient magnis viverra erat proin suscipit.", image: { src: "https://via.placeholder.com/1920x1080.jpeg", alt: "Alt Text" } },
			{ title: "Galerias 0", body: "Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, auctor leo ligula non facilisis sollicitudin fermentum fusce, vitae parturient magnis viverra erat proin suscipit. Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, auctor leo ligula non facilisis sollicitudin fermentum fusce, vitae parturient magnis viverra erat proin suscipit.", image: { src: "https://via.placeholder.com/1920x1080.jpeg", alt: "Alt Text" } },
		]
	},
	{
		category: { icon: "newspaper", label: "Periodismo", value: 1 },
		galleries: [
			{ title: "Galerias 1", body: "Soy una Galeria", image: { src: "https://via.placeholder.com/1920x1080.jpeg", alt: "Alt Text" } },
			{ title: "Galerias 1", body: "Soy una Galeria", image: { src: "https://via.placeholder.com/1920x1080.jpeg", alt: "Alt Text" } },
			{ title: "Galerias 1", body: "Soy una Galeria", image: { src: "https://via.placeholder.com/1920x1080.jpeg", alt: "Alt Text" } },
		]
	},
	{
		category: { icon: "contacts", label: "Proyectos personales", value: 2 },
		galleries: [
			{ title: "Galerias 2", body: "Soy una Galeria", image: { src: "https://via.placeholder.com/1920x1080.jpeg", alt: "Alt Text" } },
			{ title: "Galerias 2", body: "Soy una Galeria", image: { src: "https://via.placeholder.com/1920x1080.jpeg", alt: "Alt Text" } },
			{ title: "Galerias 2", body: "Soy una Galeria", image: { src: "https://via.placeholder.com/1920x1080.jpeg", alt: "Alt Text" } },
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
			<Grid container >
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
				<Grid
					item
				>
					<TabBar
						value={value}
						tabs={categories}
						handleChange={handleChange}
					/>
					<TabsContent
						value={value}
					>
						{
							galleries.map((galleries, index) => {
								const { label } = categories[index]
								return (
									<TabContent
										key={`tab-content-${index}`}
										title={label}
									>
										{
											galleries.map(({ title, body, image }, index) =>
												<MediaCard
													key={`media-card-${index}`}
													justifyContent={"center"}
													// justifyContent={`${index % 2 ? "end" : "start"}`} md={10}
													{...{ title, body, image }}
												/>
											)
										}
									</TabContent>
								)
							})
						}
					</TabsContent>
				</Grid>
			</Grid>
		</MainLayout>
	)
}

export default Galerias;