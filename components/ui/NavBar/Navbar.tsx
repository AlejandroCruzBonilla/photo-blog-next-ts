import { useContext } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';

import { AppBar, Grid, IconButton, Toolbar, Typography, Box, Link } from '@mui/material';
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
						<Box m={0} p={0} display={"flex"} sx={{ flexGrow: 1 }} >
							<NextLink href="/" legacyBehavior>
								<Link underline="none" sx={{cursor:"pointer"}} display={"inline-block"}>
									<Grid container direction={"row"}>
										<Image src={"https://via.placeholder.com/60x60.jpeg"} alt="logo" width={60} height={60} priority />
										<Typography component='div' alignSelf={"center"} ml={3} color={"#fff"}>Site Name</Typography>
									</Grid>
								</Link>
							</NextLink>
						</Box>

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
