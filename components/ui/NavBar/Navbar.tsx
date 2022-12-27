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
			<AppBar
				component={"nav"}
				sx={{
					px: {
						xs: 2
					},
				}}
			>
				<Toolbar
					disableGutters
					sx={{
						height: "5%",
						justifyContent: "center"
					}}
				>
					<Grid
						container direction={"row"} justifyContent={"center"}
						item xs={12}
						sm={10}
					>
						<Grid
							container
							justifyContent={"start"}
							item
							xs={10}
						>
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
										>
											Site Name
										</Typography>
									</Grid>
								</Link>
							</NextLink>
						</Grid>
						<Grid
							container
							justifyContent={"end"}
							item
							xs={2}
						>
							<IconButton
								size='large'
								edge="start"
								onClick={openSideMenu}
							>
								<MenuOutlinedIcon />
							</IconButton>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</HideOnScroll>
	)
};
