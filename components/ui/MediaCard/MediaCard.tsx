import { FC } from 'react';
import { Card, CardHeader, CardActionArea, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import { height, textAlign, width } from '@mui/system';

interface Props {
	className?: string
	justifyContent?: "start" | "center" | "end"| undefined 
	title: string
	body: string,
	image: {
		src: string
		alt: string
	}
}

export const MediaCard: FC<Props> = ({ image, title, body, justifyContent }) => {
	return (
		<Grid container justifyContent={justifyContent}>
			<Grid item xs={12} sm={9}  my={4}>
				<Card variant="outlined">
					<CardActionArea>
						{/* <CardMedia
					component="img"
					image={image.src}
					alt={image.alt}
					height="auto"
				/> */}
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
							<Typography pb={2} variant="body2" color="text.secondary">
								{body}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</Grid>
		</Grid>
	)
}
