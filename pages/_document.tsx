import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="es">
			<Head>
				<link rel="icon" href="/logo.png" />
				<link rel="preload" href="/fonts/roboto-v30-latin-ext-regular.woff2" as="font" type="font/woff2" crossOrigin='anonymous'/> 
				<link rel="preload" href="/fonts/roboto-v30-latin-ext-300.woff2" as="font" type="font/woff2" crossOrigin='anonymous'/> 
				<link rel="preload" href="/fonts/roboto-v30-latin-ext-700.woff2" as="font" type="font/woff2" crossOrigin='anonymous'/> 
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
