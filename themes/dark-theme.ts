import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';



export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		background: {
			default: grey[900]
		},
		primary: {
			main: '#A2F7E1',
			contrastText: 'rgba(0, 0, 0, 0.87)',
		},
		secondary: {
			main: '#71ac9d',
			contrastText: '#000',
		},
		secondaryBackground: {
			main: '#121212',
			contrastText: '#fff',
		}
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