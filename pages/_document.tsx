import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="es">
			<Head>
				<link rel="icon" href="/home.ico" />
				{/* <link
					rel="stylesheet"
					href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
				/> */}
				{/* <link
					href="https://fonts.googleapis.com/css2?family=Material+Icons+Outlined"
					rel="stylesheet"
				/> */}
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
				/>

				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
