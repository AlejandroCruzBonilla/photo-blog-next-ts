import { Box, Grid } from '@mui/material'
import React from 'react'

export const Footer = () => {
  return (
    <Grid component={"footer"}
      container direction={"column"}
      position={'absolute'}
      p={4}
      // sx={{ bottom: 0, height: "30vh"}}
      sx={{ bottom: 0, height: "30vh", background: "#fff" }}
    >
      <Grid container height={2 / 6}>
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid>Logo</Grid>
        </Grid>
      </Grid>
      <Grid container height={4 / 6}>
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid container item xs={3} md={2} justifyContent={"center"} alignItems={"center"} >Social</Grid>
          <Grid container item xs={3} md={2} justifyContent={"center"} alignItems={"center"} >Social</Grid>
          <Grid container item xs={3} md={2} justifyContent={"center"} alignItems={"center"} >Social</Grid>
          <Grid container item xs={3} md={2} justifyContent={"center"} alignItems={"center"} >Social</Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
