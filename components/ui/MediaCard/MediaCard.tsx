import { FC } from 'react';
import NextLink from 'next/link';

import { Card, CardActionArea, CardContent, Typography, Grid, Divider } from '@mui/material';
import { ImageContainer } from '../';
import { MediaCardProps } from './model';

export const MediaCard: FC<MediaCardProps> = ({
	image,
	// customLoader,
	title,
	body,
	date,
	url,
	gridResponsive,
	priority=false,
	maxHeight = image.width,
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
							placeholder="blur"
							// customLoader={customLoader}
							maxHeight={maxHeight}
							priority={priority}
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
