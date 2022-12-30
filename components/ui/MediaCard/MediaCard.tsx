import { FC } from 'react';
import { useRouter } from 'next/router';
import { Card, CardHeader, CardActionArea, CardContent, CardMedia, Typography, Grid, Divider } from '@mui/material';
import { ImageContainer } from '../';
import { MediaCardProps } from './model';

export const MediaCard: FC<MediaCardProps> = ({
	image,
	title,
	body,
	date,
	url,
	gridResponsive
}) => {

	const router = useRouter()

	const onClick = () => {
		router.push(url)
	}

	return (

		<Grid
			onClick={onClick}
			item
			p={1}
			{...gridResponsive}
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
					<ImageContainer
						image={image}
						objectFit="cover"
					/>
					<CardContent sx={{ p: 1.5 }}>
						<Typography
							gutterBottom
							variant="h5"
							component="div"
						>
							{title}
						</Typography>
						{
							body
								? (
									<Typography
										variant="body1"
										// color="text.secondary"
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
											// color="text.secondary"
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
