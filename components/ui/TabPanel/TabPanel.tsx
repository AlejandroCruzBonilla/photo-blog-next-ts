import { FC } from "react";
import { Grid } from "@mui/material";
import { TabPanelProps } from "./model";

export const TabPanel: FC<TabPanelProps> = ({ children, value, index, className, ...other }) => {


  return (
    <Grid
      container
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className={className}
    >
      {value === index && (
        <Grid
          container
        >
          {children}
        </Grid>
      )}
    </Grid>
  );
}
