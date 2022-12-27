import { FC } from 'react';
import { Card, CardHeader, CardActionArea, CardContent, CardMedia, Typography, Grid, Divider } from '@mui/material';
import Image from 'next/image';

interface Props {
	title: string
	body?: string
	date?: string
	image: {
		src: string
		alt: string
	}
	xs?:number
	sm?:number
	md?:number
	lg?:number
}

export const MediaCard: FC<Props> = ({
	image,
	title,
	body, date,
	...rest
}) => {
	return (

		<Grid
			item
			p={1}
			{...rest}
		>
			<Card
				variant="outlined"
				sx={{
					border: "none",
					":hover": { borderWidth: 1, borderStyle: "solid", borderColor: "rgba(0, 0, 0, 0.16)" }
				}}
			>
				<CardActionArea>
					{/* 
							<CardMedia
								component="img"
								image={image.src}
								alt={image.alt}
								height="auto"
							/> 
						*/}
					<Image
						priority
						src={image.src}
						alt={image.alt}
						width={1920}
						height={1080}
						style={{
							width: '100%',
							height: 'auto',
						}}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{title}
						</Typography>
						{
							body
								? (
									<Typography
										variant="body1"
										color="text.secondary"
										overflow="hidden"
										display="-webkit-box"
										sx={{
											WebkitLineClamp: 3,
											WebkitBoxOrient: " vertical",
										}}
									>
										{body}
									</Typography>
								)
								: null
						}

						<Grid mt={2} pb={1}>
							<Divider
								sx={{
									display: "inline-block",
									width: "70%",
								}}
							/>
							{
								date
									? (
										<Typography
											color="text.secondary"
											textAlign={"end"}
											sx={{
												display: "inline-block",
												width: "30%"
											}}
										>
											{date}
										</Typography>
									)
									: null
							}
						</Grid>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>

	)
}
