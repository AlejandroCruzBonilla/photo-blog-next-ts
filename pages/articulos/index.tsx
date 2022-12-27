import { Grid } from '@mui/material';
import { MainLayout } from "../../components/layouts";
import { MediaCard, TabBar, TabContent, TabsContent } from '../../components/ui';

const seo = {
	title: "Articulos",
	description: "Pagina de Articulos"
}

const allArticles = [
	{ title: "Articulo 1", body: "Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, auctor leo ligula non facilisis sollicitudin fermentum fusce, vitae parturient magnis viverra erat proin suscipit. Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, auctor leo ligula non facilisis sollicitudin fermentum fusce, vitae parturient magnis viverra erat proin suscipit.", image: { src: "https://via.placeholder.com/1920x1080.jpeg", alt: "Alt Text" } },
	{ title: "Articulo 2", body: "Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, auctor leo ligula non facilisis sollicitudin fermentum fusce, vitae parturient magnis viverra erat proin suscipit. Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, auctor leo ligula non facilisis sollicitudin fermentum fusce, vitae parturient magnis viverra erat proin suscipit.", image: { src: "https://via.placeholder.com/1920x1080.jpeg", alt: "Alt Text" } },
	{ title: "Articulo 3", body: "Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, auctor leo ligula non facilisis sollicitudin fermentum fusce, vitae parturient magnis viverra erat proin suscipit. Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, auctor leo ligula non facilisis sollicitudin fermentum fusce, vitae parturient magnis viverra erat proin suscipit.", image: { src: "https://via.placeholder.com/1920x1080.jpeg", alt: "Alt Text" } },
]

const Articles = () => {

	return (
		<MainLayout seo={seo}>
			<h1>Articulos</h1>
			<Grid>
				{
					allArticles.map(({ title, body, image }, index) =>
						<MediaCard key={`media-card-${index}`} justifyContent={"center"}  {...{ title, body, image }}></MediaCard>
					)
				}
			</Grid>
		</MainLayout>
	)
}

export default Articles;