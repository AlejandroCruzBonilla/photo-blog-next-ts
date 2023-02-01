import { FC } from 'react';
import NextLink from 'next/link';

import { Card, CardActionArea, CardContent, Typography, Grid, Divider, Link } from '@mui/material';
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
	target = "_self",
	priority = false,
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
					target={target}
					legacyBehavior
				>
					<Link
						target={target}
						color="inherit"
						sx={{ textDecoration: "none" }}
					>
						<ImageContainer
							image={image}
							objectFit="cover"
							placeholder="blur"
							maxHeight={maxHeight}
							priority={priority}
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="div"
								minHeight={"66px"}
							>
								{title}
							</Typography>
							{
								body
									? (
										<Typography
											component={"div"}
											overflow="hidden"
											display="-webkit-box"
											minHeight={"90px"}
											sx={{
												WebkitLineClamp: 3,
												WebkitBoxOrient: " vertical",
											}}
											dangerouslySetInnerHTML={{ __html: body }}
										/>
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
					</Link>
				</NextLink>


			</Card>
		</Grid>

	)
}
