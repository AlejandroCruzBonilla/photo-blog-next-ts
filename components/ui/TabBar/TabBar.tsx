import { ReactElement, JSXElementConstructor, FC, SyntheticEvent } from 'react';

import { SvgIcon, Icon, Grid, Tab, Tabs, Typography } from '@mui/material';


interface Props {
  value: number
  tabs: Tab[]
  handleChange: (event: SyntheticEvent, newValue: number) => void
}
type Tab = {
  icon?: string | undefined,
  label: string
  value: number
}
export const TabBar: FC<Props> = ({ value, tabs, handleChange }) => {
  return (
    <Grid >
      <Tabs
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        textColor="secondary"
        centered
      >
        {
          tabs.map(({ label, value, icon }, index) =>
          (
            <Tab
              key={`simple-tab-${index}`}
              {...allProps(index)}
              value={value}
              iconPosition="start"
              icon={
                // <Icon baseClassName="material-icons-outlined">{icon}</Icon>
                <Icon baseClassName="material-symbols-outlined">{icon}</Icon>
              }
              label={
                <Typography
                  component={"h2"}
                  display={{ xs: 'none', sm: 'block' }}
                >
                  {label}
                </Typography>
              }
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
