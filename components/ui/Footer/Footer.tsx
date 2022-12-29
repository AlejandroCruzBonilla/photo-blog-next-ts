import React from 'react'
import Image from 'next/image'
import { Grid } from '@mui/material'
import { ImageContainer, SocialItem } from '../';

const logo = {
  src: "https://via.placeholder.com/100x100.jpeg",
  alt: "Logo",
  width: 100,
  height: 100,
}

export const Footer = () => {
  return (
    <Grid
      py={4}
      sx={{
        background: "#fff"
      }}
    >
      <Grid
        container
        height={2 / 6}
        mb={{
          xs: 4,
          md: 8
        }}
      >
        <ImageContainer image={logo} />
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
            <Grid
              container
              alignItems={"center"}
              justifyContent={"center"}
              item
              xs={3}
            >
              <SocialItem {...{ link: "https:google.com", icon: "mail" }} />
            </Grid>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"center"}
              item
              xs={3}
            >
              <SocialItem {...{ link: "https:google.com", icon: "mail" }} />
            </Grid>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"center"}
              item
              xs={3}
            >
              <SocialItem {...{ link: "https:google.com", icon: "mail" }} />
            </Grid>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"center"}
              item
              xs={3}
            >
              <SocialItem {...{ link: "https:google.com", icon: "mail" }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
