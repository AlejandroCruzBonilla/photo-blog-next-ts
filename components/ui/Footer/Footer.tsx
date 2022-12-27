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
      p={2}
      height={'30vh'}
      sx={{
        background: "#fff"
      }}
    >
      <Grid container height={2 / 6}>
        <Grid container justifyContent={"center"} alignItems={"center"} >
          <Image src={"https://via.placeholder.com/100x100.jpeg"} alt="logo" width={100} height={100} priority />
        </Grid>
      </Grid>
      <Grid container height={4 / 6}>
        <Grid container justifyContent={"center"} >
          <Grid container alignItems={"center"} item xs={9}>
            <Grid container item xs={3} justifyContent={"center"} alignItems={"center"} >
              <SocialItem {...{ link: "https:google.com", Icon: EmailOutlined }} />
            </Grid>
            <Grid container item xs={3} justifyContent={"center"} alignItems={"center"} >
              <SocialItem {...{ link: "https:google.com", Icon: EmailOutlined }} />
            </Grid>
            <Grid container item xs={3} justifyContent={"center"} alignItems={"center"} >
              <SocialItem {...{ link: "https:google.com", Icon: EmailOutlined }} />
            </Grid>
            <Grid container item xs={3} justifyContent={"center"} alignItems={"center"} >
              <SocialItem {...{ link: "https:google.com", Icon: EmailOutlined }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
