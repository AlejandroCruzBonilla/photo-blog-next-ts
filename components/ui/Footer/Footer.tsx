import React from 'react'
import Image from 'next/image'
import { Box, Grid } from '@mui/material'
import { SocialItem } from '../';

import {
  EmailOutlined,
} from '@mui/icons-material'

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
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            src={"https://via.placeholder.com/100x100.jpeg"}
            alt="logo"
            width={100}
            height={100}
            priority
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
