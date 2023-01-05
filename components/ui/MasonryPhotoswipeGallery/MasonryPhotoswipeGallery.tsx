import { useEffect } from 'react';
import { Box } from '@mui/material';
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
              // href={image.largeURL}
              href={image.src}
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
  );
}


{/* <Masonry
spacing={1}
columns={{
  xs: 1,
  sm: 2,
}}
>
{
  images.map((image, index) => (
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
  ))
}
</Masonry> */}