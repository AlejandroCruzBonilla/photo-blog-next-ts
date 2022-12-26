import { FC, ReactElement } from "react"
import { Grid } from '@mui/material';
import { TabPanel } from "../";

interface Props {
  value: number
  children: ReactElement[] | ReactElement
}

export const TabsContent: FC<Props> = ({ value, children }) => {
  return (
    <Grid>
      {
        (Array.isArray(children))
          ? (
            children.map((children, index) =>
              <TabPanel key={`simple-tab-content-${index}`} value={value} index={index}>
                {children}
              </TabPanel>
            )
          )
          : (
            <TabPanel value={value} index={0}>
              {children}
            </TabPanel>
          )
      }
    </Grid>
  )
}

