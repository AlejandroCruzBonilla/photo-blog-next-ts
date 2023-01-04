import { FC } from "react"
import { Grid, Typography } from "@mui/material"
import { ImageContainerProps } from "./model"
import Image from "next/image"


export const ImageContainer: FC<ImageContainerProps> = ({
	image,
	objectFit = "contain",
	placeholder = "empty",
	priority = false,
	maxHeight=image.height

}) => (
	<Grid
		container
		justifyContent={"center"}

	>
		<Grid
			container
			alignItems={"center"}
			justifyItems={"center"}
			position="relative"
			width={"100%"}
			// width={image.width}
			height={image.height}
			maxHeight={maxHeight}
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

