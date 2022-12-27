import { useContext } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';

import { AppBar, Grid, IconButton, Toolbar, Typography, Box, Link } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { UIContext } from '../../../context/ui';
import { HideOnScroll } from '../';


export const Navbar = () => {

	const { openSideMenu } = useContext(UIContext);

	return (

		<HideOnScroll>
			<AppBar component={"nav"}
				sx={{ px: 2 }}
			>
				<Toolbar
					disableGutters
				>
					<Grid
						container
						justifyContent={"center"}
					>
						<Grid
							container
							justifyContent={"space-between"}
							item
							xs={12}
							md={10}
						>
							<Grid item>
								<NextLink
									href="/"
									legacyBehavior
								>
									<Link
										underline="none"
										sx={{ cursor: "pointer" }}
									>
										<Grid container direction={"row"}>
											<Image
												src={"https://via.placeholder.com/100x100.jpeg"}
												alt="logo"
												width={60}
												height={60}
												priority
											/>
											<Typography
												component='div'
												alignSelf={"center"}
												color={"#fff"}
												ml={4}
											>
												Site Name
											</Typography>
										</Grid>
									</Link>
								</NextLink>
							</Grid>

							<Grid item>
								<IconButton
									size='large'
									edge="start"
									onClick={openSideMenu}
								>
									<MenuOutlinedIcon />
								</IconButton>
							</Grid>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</HideOnScroll>

	)
};
