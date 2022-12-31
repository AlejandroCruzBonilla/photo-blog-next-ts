import { FC } from 'react';
import NextLink from 'next/link';

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


	return (

		<Grid
			item
			p={1}
			{...gridResponsive}
		>
			<Card>
				<NextLink
					href={url}
					passHref
					legacyBehavior
				>
					<CardActionArea
						LinkComponent={"a"}
						focusRipple
					>
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
						<CardContent>
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
				</NextLink>


			</Card>
		</Grid>

	)
}
