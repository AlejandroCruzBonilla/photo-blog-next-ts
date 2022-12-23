import { Box, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'

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
          <Image src={"https://via.placeholder.com/75x75.jpeg"} alt="logo" width={75} height={75} />
        </Grid>
      </Grid>
      <Grid container height={4 / 6} >
        <Grid container justifyContent={"center"} alignItems={"center"} >
          <Grid container item xs={6} md={2} justifyContent={"center"} alignItems={"center"} >
            <Image src={"https://via.placeholder.com/50x50.jpeg"} alt="logo" width={50} height={50} />
          </Grid>
          <Grid container item xs={6} md={2} justifyContent={"center"} alignItems={"center"} >
            <Image src={"https://via.placeholder.com/50x50.jpeg"} alt="logo" width={50} height={50} />
          </Grid>
          <Grid container item xs={6} md={2} justifyContent={"center"} alignItems={"center"} >
            <Image src={"https://via.placeholder.com/50x50.jpeg"} alt="logo" width={50} height={50} />
          </Grid>
          <Grid container item xs={6} md={2} justifyContent={"center"} alignItems={"center"} >
            <Image src={"https://via.placeholder.com/50x50.jpeg"} alt="logo" width={50} height={50} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
