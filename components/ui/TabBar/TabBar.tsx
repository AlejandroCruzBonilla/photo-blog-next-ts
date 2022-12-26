import { ReactElement, JSXElementConstructor, FC, SyntheticEvent } from 'react';

import { Grid, Tab, Tabs } from "@mui/material"


interface Props {
  value: number
  tabs: Tab[]
  handleChange: (event: SyntheticEvent, newValue: number) => void
}
type Tab = {
  Icon?: string | ReactElement<any, string | JSXElementConstructor<any>> | undefined,
  label: string
  value: number
}
export const TabBar: FC<Props> = ({ value, tabs, handleChange }) => {

  return (
    <Grid >
      <Tabs
        // variant="fullWidth"
        value={value}
        onChange={handleChange}
        textColor="secondary"
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        // centered
      >
        {
          tabs.map(({ label, value, Icon }, index) =>
          (
            <Tab
              icon={Icon}
              key={`simple-tab-${index}`}
              label={label}
              value={value}
              {...allProps(index)}
            />
          ))
        }
      </Tabs>
    </Grid>
  )
}

const allProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
