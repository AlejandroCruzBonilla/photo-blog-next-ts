import { useContext } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';

import { AppBar, Grid, IconButton, Toolbar, Typography, Box, Link } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { UIContext } from '../../../context/ui';
import { HideOnScroll } from '../';
import { height } from '@mui/system';

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
		<HideOnScroll>
			<AppBar component={"nav"} sx={{ p: 1 }}>
				<Toolbar>
					<Grid container sx={{ flexGrow: 1 }}>
						<NextLink href="/" legacyBehavior>
							<Link underline="none" sx={{ cursor: "pointer" }} display={"inline-block"}>
								<Grid container direction={"row"}>
									<Image
										src={"https://via.placeholder.com/100x100.jpeg"}
										alt="logo"
										width={60}
										height={60}
										priority
									/>
									<Typography component='div' alignSelf={"center"} ml={3} color={"#fff"}>Site Name</Typography>
								</Grid>
							</Link>
						</NextLink>
					</Grid>

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
	)
};
