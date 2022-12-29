// import "animate.css"
import '../styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import type { AppProps } from 'next/app'
import { CssBaseline } from '@mui/material';
import { UIProvider } from '../context/ui';
import { ThemeManager } from '../components/ui';


export default function App({ Component, pageProps }: AppProps) {

  return (
    <UIProvider>
      <ThemeManager>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeManager>
    </UIProvider>
  )

}
