import { FC, ReactElement } from "react"
import { Grid, Typography } from '@mui/material';


interface Props {
  children: ReactElement[] | ReactElement
  title?: string
}

export const TabContent: FC<Props> = ({ children, title }) => {
  return (
    <>
      {
        title
          ? (
            <Grid
              container
              py={2}
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
