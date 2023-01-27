import { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { Masonry } from '@mui/lab';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { ImageContainer } from '../ImageContainer';
import { FC } from 'react';
import { MasonryPhotoswipeGalleryProps } from './model';

export const MasonryPhotoswipeGallery: FC<MasonryPhotoswipeGalleryProps> = ({
  galleryID,
  images,
}) => {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <>
      <Box className="pswp-gallery" id={galleryID}>
        <Masonry
          spacing={1}
          columns={{
            xs: 1,
            sm: 2,
          }}
        >
          {
            images.map((image, index) => (
              <a
                href={`https://ik.imagekit.io/ncbphotography/${image.srcHigh}`}
                data-pswp-width={image.width}
                data-pswp-height={image.height}
                key={galleryID + '-' + index}
                target="_blank"
                rel="noreferrer"
              >
                <ImageContainer
                  key={`index-gallery${index}`}
                  image={image}
                  objectFit="cover"
                  placeholder="blur"
                  maxHeight={{
                    xs: "50vw",
                    sm: `${index % 2 ? "50vw" : "40vw"}`,
                    lg: `${index % 2 ? "40vw" : "35vw"}`,
                  }}
                />
              </a>
            ))
          }
        </Masonry>
      </Box>
      {/* <Grid
        container
        className="pswp-gallery"
        id={galleryID}
        height={
          {
            xs: "auto",
            sm: "calc(67vw * 2)",
            lg: "calc(57vw * 2)"
          }
        }
        sx={{
          flexFlow: "column wrap",
          width: "100%",
          maxWidth: "100%",
        }}
      >

        {
          images.map((image, index) => (
            <Grid
              key={galleryID + '-' + index}
              width={{
                xs: "100%",
                sm: "50%"
              }}
              sx={{
                order: `${index + 1}`,
                p: "4px",
              }}
            >
              <a
                href={`https://ik.imagekit.io/ncbphotography/${image.srcHigh}`}
                data-pswp-width={image.width}
                data-pswp-height={image.height}
                // key={galleryID + '-' + index}
                target="_blank"
                rel="noreferrer"
              >
                <ImageContainer
                  key={`index-gallery${index}`}
                  priority={(index<=1)}
                  image={image}
                  objectFit="cover"
                  placeholder="blur"
                  maxHeight={{
                    xs: "50vw",
                    sm: `${index % 2 ? "50vw" : "40vw"}`,
                    lg: `${index % 2 ? "40vw" : "35vw"}`,
                  }}
                />
              </a>
            </Grid>

          ))
        }
        <Box component={"span"} sx={{
          flexBasis: "100%",
          width: 0,
          margin: 0,
          content: "''",
          padding: 0
        }}> </Box>
      </Grid> */}
    </>
  );
}