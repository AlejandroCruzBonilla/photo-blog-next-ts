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
          ? (<Typography>{title}</Typography>)
          : null
      }
      <Grid container>
        {children}
      </Grid>
    </>
  )
}
