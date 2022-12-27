import { FC } from "react";
import { Grid, Link, Icon, Typography } from "@mui/material"
import styles from "./SocialItem.module.css"

interface Props {
  icon: string
  link: string
  title?: string
}

export const SocialItem: FC<Props> = ({ icon, title, link }) => {
  return (
    <Grid item>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        underline="none"
        color="inherit"
      >
        <Grid
          container
          direction={"column"}
        >
          <Icon
            baseClassName="material-symbols-outlined"
            className={styles['social-item-xxx-font-size']}
          >
            {icon}
          </Icon>
          {
            title
              ? (
                <Grid >
                  <Typography
                    textAlign={"center"}
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