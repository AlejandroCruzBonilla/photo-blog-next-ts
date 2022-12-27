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
		<MainLayout seo={seo}>
			<h1>Galerias</h1>
			<TabBar value={value} tabs={categories} handleChange={handleChange} />
			<TabsContent value={value}>
				{
					galleries.map((galleries, index) => (
						<TabContent key={`tab-content-${index}`}>
							{
								galleries.map(({ title, body, image }, index) =>
									<MediaCard key={`media-card-${index}`} justifyContent={`${index % 2 ? "end" : "start"}`} {...{ title, body, image }}></MediaCard>
								)
							}
						</TabContent>
					))
				}
			</TabsContent>
		</MainLayout>
	)
}

export default Galerias;