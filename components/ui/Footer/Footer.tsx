import React from 'react'
import { Box, Divider, Grid, Typography } from '@mui/material';
import { ImageContainer, SocialItem } from '../';
import { FooterData } from '../../../_fakeData';


export const Footer = () => {
  const { data: { logo, socialItems } } = FooterData

  return (
    <Grid
      component={"footer"}
      container
      justifyContent={"center"}
      alignItems={"center"}
      px={{
        xs: 2
      }}
    >
      <Grid
        item
        xs={12}
        md={10}
      >
        <Divider
          sx={{
            borderColor: "footer.contrastText",
            borderBottomWidth:2,
            my: 2
          }}
        />
        <Grid
          container
          item
          my={3}
        >
          <Grid
            container
            item
            xs={12}
            md={6}
            justifyContent={{
              xs: "center",
              md: "start"
            }}
          >
            {
              socialItems.map(({ link, icon }, index) => (
                <Box
                  key={`footer-social-item-${index}`}
                  mx={1}
                >
                  <SocialItem
                    link={link}
                    icon={icon}
                  />
                </Box>
              ))
            }
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={6}
            justifyContent={{
              xs: 'center',
              md: "end"
            }}
            my={2}
          >
            <Typography>
              © 2023 Images por Nayeli Cruz Bonilla
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>



  )
}
