import { createTheme } from '@mui/material';
import { grey, teal } from '@mui/material/colors';



export const lightTheme = createTheme({
	palette: {
		// mode: 'light',
		background: {
			default: grey[200]
		},
		font: {
			main: teal.A100,
			contrastText: 'rgba(0, 0, 0, 0.87)',
		},
		primary: {
			main: teal.A100,
			contrastText: 'rgba(0, 0, 0, 0.87)',
		},
		secondary: {
			main: '#71ac9d',
			contrastText: '#000',
		},

		navbar: {
			main: teal.A100,
			contrastText: grey[900],
		},
		footer: {
			main: '#121212',
			contrastText: teal.A100,
		},
		mainMenu: {
			main: grey[200],
			light: grey[200],
			dark: grey[800],
			contrastText: teal[300],
		},
	},

	components: {
		// MuiAppBar: {
		// 	defaultProps: {
		// 		elevation: 0
		// 	},
		// 	styleOverrides: {}
		// }
	}
});