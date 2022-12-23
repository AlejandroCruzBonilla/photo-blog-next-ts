import { MainLayout } from "../components/layouts";

const seo = {
	title: "Home",
	description: "Pagina principal"
}


const Contacto = () => {
	return (
		<MainLayout seo={seo}>
			<h1>Contacto</h1>
		</MainLayout>
	)
}
export default Contacto;