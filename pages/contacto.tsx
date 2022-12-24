import { MainLayout } from "../components/layouts";
import { Avatar, Button, Grid, TextField, Typography } from '@mui/material';

const seo = {
	title: "Contacto",
	description: "Esta es la pagina de contacto",
}


const Contacto = () => {
	return (
		<MainLayout seo={seo}>
			<Grid container justifyContent={"center"} mt={4} mb={6}>
				<Typography variant="h1" fontSize={"3rem"}>Contacto</Typography>
			</Grid>
			<Grid container alignItems={"center"}>
				<Grid container justifyContent={"center"}>
					<Grid container item xs={12} md={4} mb={5} alignContent={"center"}>
						<Grid item xs={8} mx={"auto"}>
							<Avatar
								src="https://via.placeholder.com/500x500.jpeg"
								alt="Remy Sharp"
								sx={{ width: "auto", height: "auto" }}
							/>
						</Grid>
					</Grid>
					<Grid container item alignItems={"center"} xs={12} md={6} >
						<Grid>
							<Typography paragraph textAlign={"justify"}>
								Lorem ipsum dolor sit amet consectetur adipiscing elit pulvinar imperdiet mollis, fermentum habitasse nec orci ligula nisl urna sollicitudin tristique. Nostra fusce risus hac tempor nascetur aptent. Quis facilisis lobortis orci laoreet hendrerit proin rutrum ullamcorper vehicula lacinia tempus mi ornare sollicitudin conubia viverra nec lobortis, tortor natoque cursus dictum praesent leo pharetra tristique ac sociis, fringilla quis varius ultricies posuere erat nulla porttitor parturient facilisi.
							</Typography>
							<Typography paragraph textAlign={"justify"}>
								Volutpat convallis blandit facilisis primis adipiscing elit pulvinar imperdiet mollis, fermentum habitasse nec orci ligula nisl urna sollicitudin tristique. Nostra fusce risus duis phasellus auctor congue fames, penatibus dapibus sociis id urna vulputate per inceptos, hendrerit egestas porttitor risus hac tempor nascetur aptent. Quis facilisis lobortis orci laoreet hendrerit proin rutrum ullamcorper nisl, aliquet dignissim accumsan vel vivamus tempus lacus donec, hac mattis nulla pretium suscipit varius habitasse massa. Bibendum pretium mollis egestas montes curae lacinia turpis facilisi.
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid container direction={"column"} mt={6}>
					<Grid container mb={6}>
						<Grid component={"form"} mx={"auto"}
							sx={{
								xs: { width: "100vw" },
								md: { width: "60vw" },
							}}
						>
							<TextField sx={{ my: 1 }} fullWidth label="name" id="name" />
							<TextField sx={{ my: 1 }} fullWidth label="email" id="email" />
							<TextField sx={{ my: 1 }} fullWidth label="message" id="message" multiline rows={4} />
							<Button sx={{ my: 1 }} fullWidth variant="outlined">Enviar</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</MainLayout>
	)
}
export default Contacto;