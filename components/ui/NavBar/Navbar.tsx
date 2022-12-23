import { useContext } from 'react';

import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { UIContext } from '../../../context/ui';

import { HideOnScroll } from '../';

// const StyledToolbar = styled(Toolbar)(({ theme }) => ({
//   alignItems: 'flex-start',
//   paddingTop: theme.spacing(1),
//   paddingBottom: theme.spacing(2),
//   // Override media queries injected by theme.mixins.toolbar
//   '@media all': {
//     minHeight: 128,
//   },
// }));

export const Navbar = () => {

	const { openSideMenu } = useContext(UIContext);

	return (
		<Grid component={"nav"}>
			<HideOnScroll>
				<AppBar>
					<Toolbar>
						<Typography sx={{ flexGrow: 1 }} component='div'>Site Name</Typography>
						<IconButton
							size='large'
							edge="start"
							onClick={openSideMenu}
						>
							<MenuOutlinedIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
		</Grid>
	)
};
