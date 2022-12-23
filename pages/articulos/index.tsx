import { MainLayout } from "../../components/layouts";

const seo = {
	title: "Home",
	description: "Pagina principal"
}


const Articulos = () => {
	return (
		<MainLayout seo={seo}>
			<h1>Articulos</h1>
		</MainLayout>
	)
}

export default Articulos;