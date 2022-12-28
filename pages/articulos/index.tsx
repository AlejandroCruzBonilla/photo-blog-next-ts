import { Grid, Typography } from '@mui/material';
import { MainLayout } from "../../components/layouts";
import { MediaCard } from '../../components/ui';



export const allArticles = [
	{
		title: "Articulo 1",
		body: "Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, auctor leo ligula non facilisis sollicitudin fermentum fusce, vitae parturient magnis viverra erat proin suscipit. Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, auctor leo ligula non facilisis sollicitudin fermentum fusce, vitae parturient magnis viverra erat proin suscipit.Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, auctor leo ligula non facilisis sollicitudin fermentum fusce, vitae parturient magnis viverra erat proin suscipit. Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, auctor leo ligula non facilisis sollicitudin fermentum fusce, vitae parturient magnis viverra erat proin suscipit.",
		image: { src: "https://via.placeholder.com/1920x1080.jpeg", alt: "Alt Text" },
		url: "articulo-1"
	},
	{
		title: "Articulo 2",
		body: "Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, auctor leo ligula non facilisis sollicitudin fermentum fusce, vitae parturient magnis viverra erat proin suscipit. Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, auctor leo ligula non facilisis sollicitudin fermentum fusce, vitae parturient magnis viverra erat proin suscipit.Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, auctor leo ligula non facilisis sollicitudin fermentum fusce, vitae parturient magnis viverra erat proin suscipit. Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, auctor leo ligula non facilisis sollicitudin fermentum fusce, vitae parturient magnis viverra erat proin suscipit.",
		image: { src: "https://via.placeholder.com/1920x1080.jpeg", alt: "Alt Text" },
		url: "articulo-2"
	},
	{
		title: "Articulo 3",
		body: "Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, auctor leo ligula non facilisis sollicitudin fermentum fusce, vitae parturient magnis viverra erat proin suscipit. Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, auctor leo ligula non facilisis sollicitudin fermentum fusce, vitae parturient magnis viverra erat proin suscipit.Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, auctor leo ligula non facilisis sollicitudin fermentum fusce, vitae parturient magnis viverra erat proin suscipit. Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, auctor leo ligula non facilisis sollicitudin fermentum fusce, vitae parturient magnis viverra erat proin suscipit.",
		image: { src: "https://via.placeholder.com/1920x1080.jpeg", alt: "Alt Text" },
		url: "articulo-3"
	},
]

const seo = {
	title: "Articulos",
	description: "Pagina de Articulos"
}

const Articles = () => {

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
					allArticles.map(({ title, body, image, url }, index) =>
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