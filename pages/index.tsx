import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'
import { MainLayout } from '../components/layouts/MainLayout/MainLayout';

// const inter = Inter({ subsets: ['latin'] })

const seo = {
	title: "Home",
	description: "Pagina principal"
}

export default function Home() {
	return (
		<>
			<MainLayout seo={seo}>
				<h1>Hola</h1>
			</MainLayout>
		</>
	)
}
