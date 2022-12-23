import { useContext } from 'react';
import Image from 'next/image';

import { AppBar, Grid, IconButton, Toolbar, Typography, Box } from '@mui/material';
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
						<Box m={0} p={1}>
							<Image src={"https://via.placeholder.com/75x75.jpeg"} alt="logo" width={75} height={75} />
						</Box>
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
