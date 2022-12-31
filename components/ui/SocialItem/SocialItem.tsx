import { FC } from "react";
import { Grid, Link, Icon, Typography } from "@mui/material"
import styles from "./SocialItem.module.css"


export const SocialItem: FC<SocialItemProps> = ({ icon, title, link }) => {
  return (
    <Grid item>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        underline="none"
      // color="inherit"
      >
        <Grid
          container
          direction={"column"}
        >
          <Icon
            baseClassName="material-symbols-outlined"
            className={styles['social-item-xxx-font-size']}
            sx={{
              color: "footer.contrastText"
            }}
          >
            {icon}
          </Icon>
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