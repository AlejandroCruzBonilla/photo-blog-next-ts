import { FC } from "react"
import { Grid, Typography } from '@mui/material';
import { TabContentProps } from "./model";

export const TabContent: FC<TabContentProps> = ({ children, title }) => {
  return (
    <>
      {
        title
          ? (
            <Grid
              container
              py={2}
              my={2}
              display={{
                sm: "none"
              }}
            >
              <Grid
                item
                xs={12}
              >
                <Typography
                  variant="h3"
                  fontSize={"2rem"}
                  textAlign={{
                    xs: "center",
                  }}
                >
                  {title}
                </Typography>
              </Grid>
            </Grid>
          )
          : null
      }
      <Grid container>
        {children}
      </Grid>
    </>
  )
}
