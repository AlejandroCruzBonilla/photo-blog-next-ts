import { FC } from "react";
import { Grid, Link, SvgIconTypeMap, Typography } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface Props {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  }
  link: string;
  title?: string;
}

export const SocialItem: FC<Props> = ({ Icon, title, link }) => {
  return (
    <Grid>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        underline="none"
      >
        <Grid container direction={"column"}>
          <Icon sx={{ mx: "auto" }} fontSize={"large"}/>
          {title ? <Grid ><Typography textAlign={"center"}>{title}</Typography></Grid> : null}
        </Grid>
      </Link>
    </Grid>
  )
}