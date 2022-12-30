import { ChangeEvent, useContext } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';

import { AppBar, Grid, IconButton, Toolbar, Typography, Link } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';

import { UIContext } from '../../../context/ui';
import { HideOnScroll, ThemeSwitch } from '../';
import { NavBarData } from '../../../_fakeData';


export const Navbar = () => {

	const { data: { title, logo } } = NavBarData;
	const { openSideMenu, setDarkTheme, setLightTheme, currentTheme } = useContext(UIContext);


	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.checked) setDarkTheme();
		else setLightTheme();
	}

	return (

		<HideOnScroll>
			<AppBar
				component={"nav"}
				color="primary"
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
										color="inherit"
										sx={{ cursor: "pointer" }}
									>
										<Grid container direction={"row"}>
											<Image
												src={logo.src}
												alt={logo.alt}
												width={logo.width}
												height={logo.height}
												priority
											/>
											<Typography
												alignSelf={"center"}
												ml={4}
											>
												{title}
											</Typography>
										</Grid>
									</Link>
								</NextLink>
							</Grid>
							<Grid item>
								<Grid container alignItems={"center"} height={1}>
									<Grid item>
										<Grid container >
											<Grid item>
												<ThemeSwitch currentTheme={currentTheme} handleChange={handleChange} />
											</Grid>
											<IconButton
												size='large'
												edge="start"
												onClick={openSideMenu}
											>
												<MenuOutlined />
											</IconButton>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</HideOnScroll>
	)
};
