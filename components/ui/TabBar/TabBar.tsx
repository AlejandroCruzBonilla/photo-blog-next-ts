import { FC } from 'react';

import { Icon, Grid, Tab, Tabs, Typography } from '@mui/material';
import { TabsProps } from './model';


export const TabBar: FC<TabsProps> = ({ value, tabs, handleChange }) => {
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
