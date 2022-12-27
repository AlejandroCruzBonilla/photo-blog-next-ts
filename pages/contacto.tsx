
import { MainLayout } from "../components/layouts";
import { Avatar, Grid, Typography } from '@mui/material';

import { ContactForm } from '../components/Forms';

const seo = {
	title: "Contacto",
	description: "Esta es la pagina de contacto",
}

const Contacto = () => {
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
						Contacto
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
									src="https://via.placeholder.com/500x500.jpeg"
									alt="Remy Sharp"
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
									Lorem ipsum dolor sit amet consectetur adipiscing elit pulvinar imperdiet mollis, fermentum habitasse nec orci ligula nisl urna sollicitudin tristique. Nostra fusce risus hac tempor nascetur aptent. Quis facilisis lobortis orci laoreet hendrerit proin rutrum ullamcorper vehicula lacinia tempus mi ornare sollicitudin conubia viverra nec lobortis.
								</Typography>
								<Typography
									paragraph
									textAlign={"justify"}
								>
									Volutpat convallis blandit facilisis primis adipiscing elit pulvinar imperdiet mollis, fermentum habitasse nec orci ligula nisl urna sollicitudin tristique. Nostra fusce risus duis phasellus auctor congue fames, penatibus dapibus sociis id urna vulputate per inceptos, hendrerit egestas porttitor risus hac tempor nascetur aptent.
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
export default Contacto;