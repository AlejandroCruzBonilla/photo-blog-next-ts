import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

interface Props {
	article: Article
}
interface Article {
	url: string
	title: string
	body: string
	date?: string
	image: {
		src: string
		alt: string
	}
}


const Articulo: NextPage<Props> = ({
	article: {
		title,
		body,
		date,
		image,
	}
}) => {
	const router = useRouter();
	// console.log(router.query);
	return (
		<h1>{title}</h1>
	);
}

export default Articulo;

import { allArticles } from './'

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	// const { data } = await  // your fetch function here 

	return {
		paths: allArticles.map(({ url }) => ({
			params: {
				articulo: url
			}
		})),
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

	const { articulo } = params as { articulo: string }

	// const { data } = await  // your fetch function here 

	const article = allArticles.find(({ url }) => url === articulo)

	return {
		props: {
			article
		}
	}
}