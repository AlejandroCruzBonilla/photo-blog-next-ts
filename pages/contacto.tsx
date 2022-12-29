import { GetStaticProps, NextPage } from "next";

import { Avatar, Grid, Typography } from '@mui/material';
import { MainLayout } from "../components/layouts";
import { ContactForm } from '../components/Forms';


import { ContactData } from "../_fakeData";

interface ContactProps {
	data: {
		title: string
		body: string
		image: ImageProps
		seo: Seo
	}
}
type ImageProps = {
	src: string
	alt: string
}

interface Seo {
	title: string
	description: string
}

const Contact: NextPage<ContactProps> = ({
	data: {
		title,
		body,
		image,
		seo,
	}
}) => {
	return (
		<MainLayout seo={seo}>
			<Grid container my={"2%"}>
				<Grid
					item
					xs={12}
				>
					<Typography
						variant="h1"
						fontSize={"3rem"}
						textAlign={{
							xs: "center",
							// md: "start"
						}}
					>
						{title}
					</Typography>
				</Grid>
			</Grid>

			<Grid
				container
				alignItems={"center"}
				my={"2%"}
			>
				<Grid
					container
					justifyContent={"center"}
				>
					<Grid
						item
						xs={12}
						md={10}
						lg={8}
						my={"2%"}
					>
						<Grid
							container
							justifyContent={"center"}
							alignContent={"center"}
						>
							<Grid item
								xs={8}
								sm={6}
								lg={4}
							>
								<Avatar
									src={image.src}
									alt={image.alt}
									sx={{ width: "auto", height: "auto" }}
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid
						item
						xs={12}
						md={10}
						lg={8}
						my={"2%"}
					>
						<Grid
							container
							alignContent={"center"}
						>
							<Grid item >
								<Typography
									paragraph
									textAlign={"justify"}
								>
									{body}
								</Typography>
							</Grid>
						</Grid>
					</Grid>

				</Grid>

				<Grid
					container
					justifyContent={"center"}
				>
					<Grid
						item
						xs={12}
						md={10}
						lg={6}
						xl={5}
					>
						<ContactForm />
					</Grid>

				</Grid>
			</Grid>
		</MainLayout>
	)
}
export default Contact;

export const getStaticProps: GetStaticProps = async (ctx) => {
	// const { data } = await  // your fetch function here 
	const { data } = ContactData;
	return {
		props: {
			data
		}
	}
}