import { FC } from "react"
import { Grid, Typography } from '@mui/material';
import { TabContentProps } from "./model";

export const TabContent: FC<TabContentProps> = ({ children, title }) => {
  return (
    <>
      <Grid
        container
        justifyContent={"center"}
        my={2}
        display={{
          sm: "none"
        }}>

        <Typography
          variant="h3"
          fontSize={"2rem"}
        >
          {title}
        </Typography>
      </Grid>
      <Grid container>
        {children}
      </Grid>
    </>
  )
}
