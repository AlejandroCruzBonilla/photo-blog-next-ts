import { FC, ReactElement, useContext, useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { UIContext } from "../../../context/ui";
import { lightTheme, darkTheme } from '../../../themes';

interface Props {
  children: ReactElement | ReactElement[]
}

export const ThemeManager: FC<Props> = ({ children }) => {
  const { currentTheme } = useContext(UIContext);
  const [theme, setTheme] = useState(lightTheme)
  useEffect(() => {
    switch (currentTheme) {
      case "lightTheme":
        setTheme(lightTheme)
        break;
      case "darkTheme":
        setTheme(darkTheme)
        break;
      default:
        break;
    }
  }, [currentTheme])

  return (
    <>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </>
  )
}
