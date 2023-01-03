import { FC } from "react"
import { Grid, Typography } from "@mui/material"
import { ImageContainerProps } from "./model"
import Image from "next/image"


export const ImageContainer: FC<ImageContainerProps> = ({
	image,
	objectFit = "contain",
	placeholder = "empty",
	priority = false,

}) => (
	<Grid
		container
		justifyContent={"center"}
	>
		<Grid
			// width={"100vw"}
			// height={{
			// 	xs: "60vw",
			// 	sm:	"70vw",
			// 	md: "50vw",
			// }}
			width={"100%"}
			height={image.height}
			maxHeight={{
				xs: "60vw",
				sm: "70vw",
				md: "50vw",
			}}
			position="relative"
		>
			<Image
				src={image.src}
				alt={image.alt}
				placeholder={placeholder}
				blurDataURL={image.base64 ? image.base64 : ''}
				priority={priority}
				fill
				style={{
					objectFit: objectFit,
					objectPosition: "center"
				}}
			/>
		</Grid>
	</Grid>
)

