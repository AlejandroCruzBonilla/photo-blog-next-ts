import React from 'react'
import { Grid } from '@mui/material'
import { ImageContainer, SocialItem } from '../';
import { FooterData } from '../../../_fakeData';


export const Footer = () => {
  const { data: { logo, socialItems } } = FooterData

  return (
    <Grid
      py={4}
      sx={{
        backgroundColor: "secondaryBackground.main"
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
