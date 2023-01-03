import React from 'react'
import { Grid } from '@mui/material'
import { ImageContainer, SocialItem } from '../';
import { FooterData } from '../../../_fakeData';
import Image from 'next/image';


export const Footer = () => {
  const { data: { logo, socialItems } } = FooterData

  return (
    <Grid
      py={4}
      sx={{
        bgcolor: "footer.main"
      }}
    >
      <Grid
        container
        height={2 / 6}
        justifyContent="center"
        alignItems="center"
        mb={{
          xs: 4,
          md: 8
        }}
      >
        <Grid
          container
          justifyContent={"center"}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
          />
        </Grid>
      </Grid>
      <Grid
        container
        height={4 / 6}
        mb={{
          xs: 4,
          md: 8
        }}
      >
        <Grid
          container
          justifyContent={"center"}
        >
          <Grid
            container
            alignItems={"center"}
            justifyContent={"center"}
            item xs={8}
          >
            {
              socialItems.map(({ link, icon }, index) => (
                <Grid
                  key={`footer-social-item-${index}`}
                  container
                  alignItems={"center"}
                  justifyContent={"center"}
                  item
                  xs={3}
                >
                  <SocialItem link={link} icon={icon} />
                </Grid>
              ))
            }
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
