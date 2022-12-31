import { createTheme } from '@mui/material';
import { grey, teal } from '@mui/material/colors';



export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		background: {
			default: grey[900],
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
			main: '#A2F7E1',
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
			main: grey[900],
			light: grey[100],
			dark: grey[200],
			contrastText: teal[200],
		},
	},

	components: {
		// MuiAppBar: {
		// 	defaultProps: {
		// 		elevation: 0
		// 	},
		// 	styleOverrides: {
		// 		root: {
		// 			backgroundColor: '#4a148c'
		// 		}
		// 	}
		// }
	}
});