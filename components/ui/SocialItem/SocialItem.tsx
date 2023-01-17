import { FC } from "react";
import { Grid, Link, Typography } from "@mui/material"
// import { EmailOutlined } from '@mui/icons-material';
import { InstagramIcon, TwitterIcon, MailIcon } from '../icons';
import globalStyle from '../../../styles/globals.module.css'


export const SocialItem: FC<SocialItemProps> = ({ icon, title, link }) => {

  const setIcon = (icon: string) => {
    switch (icon) {
      case 'twitter':
        return <TwitterIcon viewBox="0 0 50 50" sx={{ mx: 1, color: "footer.contrastText", fontWeight: 900 }}
          className={globalStyle['xx-font-size']}
        />
      case 'instagram':
        return <InstagramIcon viewBox="0 0 50 50" sx={{ mx: 1, color: "footer.contrastText" }}
          className={globalStyle['xx-font-size']}
        />
      case 'mail':
        return <MailIcon viewBox="0 0 43 43" sx={{ mx: 1, color: "footer.contrastText" }}
          className={globalStyle['xx-font-size']}
        />
    }
  }
  return (
    <Grid item>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        underline="none"
        aria-label={link}
      >
        <Grid
          container
          direction={"column"}
        >
          {/* <Icon
            baseClassName="material-symbols-outlined"
            className={styles['social-item-xxx-font-size']}
            sx={{
              color: "footer.contrastText"
            }}
          >
            {icon}
          </Icon> */}

          <Grid>
            {
              setIcon(icon)
            }
          </Grid>

          {
            title
              ? (
                <Grid >
                  <Typography
                    textAlign={"center"}
                    sx={{
                      color: "footer.contrastText"
                    }}
                  >
                    {title}
                  </Typography>
                </Grid>
              )
              : null
          }
        </Grid>
      </Link>
    </Grid>
  )
}