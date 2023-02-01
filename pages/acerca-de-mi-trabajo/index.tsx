import { Grid } from '@mui/material';
import { GetStaticProps, NextPage } from 'next';
import { getPlaiceholder } from "plaiceholder";
import { MainLayout } from "../../components/layouts";
import { HeadingPage, MediaCard } from '../../components/ui';
import { imagekitIoLoader } from '../../utils/customImageLoader';
import { AboutMyWorkProps } from '../../@types';

import aboutMyWork from '../../_fakeData/aboutMyWork.json'

const AboutMyWork: NextPage<AboutMyWorkProps> = ({
	data: {
		title,
		body,
		mentions,
		seo
	}
}) => {

	return (
		<MainLayout
			seo={seo}
		>
			<HeadingPage title={title} textAlign={{ md: "left" }} />
			<Grid container>
				{
					mentions.map(({ data: { title, body, image, url } }, index) =>
						<MediaCard
							key={`media-card-${index}`}
							{...{ title, body, image, url }}
							priority={(index<=2)}
							gridResponsive={{
								xs: 12,
								sm: 6,
								md: 4,
							}}
							maxHeight={{
								xs: "50vw",
								sm: "30vw",
								md: "15vw",
							}}
						/>
					)
				}
			</Grid>
		</MainLayout>
	)
}

export default AboutMyWork;


export const getStaticProps: GetStaticProps = async (ctx) => {
	// const { data } = await  // your fetch function here 
	const { data } = aboutMyWork;

	const { mentions, ...rest } = data;

	const imagesPromises: any = []

	mentions.forEach(({ data: { image } }) => {
		imagesPromises.push(getPlaiceholder(imagekitIoLoader({
			src: image.src,
			width: 500,
			quality: 30
		})));
	})

	const mainImages = await Promise.all(imagesPromises);

	const newMentions = mentions.map(({ data: { image: { alt }, ...rest } }, index) => {
		const { base64, img } = mainImages.shift()
		return {
			data: {
				...rest,
				image: {
					base64,
					alt,
					...img,
				}
			}
		}
	})

	return {
		props: {
			data: {
				...rest,
				mentions: newMentions
			}
		}
	}
}