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
			contrastText: grey[900],
		},
		primary: {
			main: teal.A100,
			contrastText: grey[900],
		},
		secondary: {
			main: teal[100],
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
			main: grey[900],
			light: grey[100],
			dark: grey[200],
			contrastText: teal[200],
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
						backgroundColor: teal[100]
					},
					border: "none",
					"&:hover": {
						borderWidth: 1,
						borderStyle: "solid",
						borderColor: teal[200]
					}
				}
			}
		},
		MuiTabs: {
			defaultProps: {
				textColor: "secondary",
				indicatorColor: "secondary",
			},
			styleOverrides: {
				root: {
					'.MuiTouchRipple-root .MuiTouchRipple-child': {
						backgroundColor: teal[100]
					},
				}
			}
		}
	}
});