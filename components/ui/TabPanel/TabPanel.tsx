import { FC, ReactElement } from "react";
import { Grid } from "@mui/material";

interface Props {
  children: ReactElement;
  index: number;
  value: number;
  className?: string;
}

export const TabPanel: FC<Props> = ({ children, value, index, className, ...other }) => {


  return (
    <Grid
      container
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className={className}
      {...other}
    >
      {value === index && (
        <Grid
          container
          direction="row"
        >
          {children}
        </Grid>
      )}
    </Grid>
  );
}
