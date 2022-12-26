import { FC, ReactElement } from "react"
import { Grid } from '@mui/material';


interface Props {
  children: ReactElement[] | ReactElement
}

export const TabContent: FC<Props> = ({ children }) => {
  return (
    <Grid container>
      {children}
    </Grid>
  )
}

