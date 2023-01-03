import { FC } from "react"
import { Grid, Typography } from "@mui/material"
import { ImageContainerProps } from "./model"
import Image from "next/image"


export const ImageContainer: FC<ImageContainerProps> = ({
	image,
	objectFit = "cover",

}) => (
	<Grid
		container
		alignItems="center"
		justifyContent="center"
	>
		<Grid>
			<Image
				src={image.src}
				alt={image.alt}
				width={image.width}
				height={image.height}
				style={{
					width: "100%",
					height: "100%",
					objectFit: objectFit,
					objectPosition: "center"
				}}
			/>
		</Grid>
	</Grid>
)

