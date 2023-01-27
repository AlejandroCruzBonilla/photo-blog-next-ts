import { FC } from 'react';

import { Tab, Tabs, Typography } from '@mui/material';
import {
  WorkOutlineOutlined,
  NewspaperOutlined,
  ContactsOutlined
} from '@mui/icons-material';
import { TabsProps } from './model';
import globalStyle from '../../../styles/globals.module.css'

export const TabBar: FC<TabsProps> = ({ value, tabs, handleChange }) => {

  const setIcon = (icon: string) => {
    switch (icon) {
      case 'work':
        return <WorkOutlineOutlined sx={{ mx: 1 }} className={globalStyle['xx-font-size']} />
      case 'newspaper':
        return <NewspaperOutlined sx={{ mx: 1 }} className={globalStyle['xx-font-size']} />
      case 'contacts':
        return <ContactsOutlined sx={{ mx: 1 }} className={globalStyle['xx-font-size']} />
    }
  }
  return (

    <Tabs
      variant="fullWidth"
      value={value}
      onChange={handleChange}
    >
      {
        tabs.map(({ label, icon }, index) =>
        (
          <Tab
            key={`simple-tab-${index}`}
            id={`simple-tab-${index}`}
            value={index}
            iconPosition="start"
            // icon={
            //   <Icon
            //     baseClassName="material-symbols-outlined"
            //   >
            //     {icon}
            //   </Icon>
            // }
            icon={
              icon && (
                setIcon(icon)
              )
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

  )
}
