import { FC } from "react"
import { Grid, Typography } from "@mui/material"
import { HeadingPageProps } from "./model"

export const HeadingPage: FC<HeadingPageProps> = ({
	title,
	variant,
	textAlign,
	fontSize = "3rem",
	fontWeight = "300"
}) => (
	<Grid container my={"2%"}>
		<Grid
			item
			xs={12}
		>
			<Typography
				variant={variant || "h1"}
				fontSize={fontSize}
				textAlign={{
					xs: textAlign?.xs || "center",
					md: textAlign?.md || "center"
				}}
				fontWeight={fontWeight}
			>
				{title}
			</Typography>
		</Grid>
	</Grid>
)

