import { createTheme } from '@mui/material';
import { grey, teal } from '@mui/material/colors';


export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		background: {
			default: grey[200]
		},
		font: {
			main: teal.A100,
			contrastText: grey[900],
		},
		primary: {
			main: teal.A100,
			contrastText: grey[900],
		},
		secondary: {
			main: teal[300],
			contrastText: grey[900],
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
		MuiCard: {
			defaultProps: {
				variant: "outlined"
			},
			styleOverrides: {
				root: {
					'.MuiTouchRipple-root .MuiTouchRipple-child': {
						backgroundColor: teal[200]
					},
					border: "none",
					"&:hover": {
						borderWidth: 1,
						borderStyle: "solid",
						borderColor: teal[300]
					}
				}
			}
		},
		MuiTabs:{
			defaultProps:{
				textColor:  "secondary",
				indicatorColor:  "secondary",
			},
			styleOverrides: {
				root: {
					'.MuiTouchRipple-root .MuiTouchRipple-child': {
						backgroundColor: teal[200]
					},
				}
			}
		}
	}
});