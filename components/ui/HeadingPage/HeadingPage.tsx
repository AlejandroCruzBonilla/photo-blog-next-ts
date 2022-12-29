import { FC } from "react"
import { Grid, Typography } from "@mui/material"
import { HeadingPageProps } from "./model"

export const HeadingPage: FC<HeadingPageProps> = ({
	title,
	variant,
	textAlign
}) => (
	<Grid container my={"2%"}>
		<Grid
			item
			xs={12}
		>
			<Typography
				variant={variant || "h1"}
				fontSize={"3rem"}
				textAlign={{
					xs: textAlign?.xs || "center",
					md: textAlign?.md || "center"
				}}
			>
				{title}
			</Typography>
		</Grid>
	</Grid>
)

