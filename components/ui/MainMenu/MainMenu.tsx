import { FC, useContext } from 'react';;
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import {
	Drawer,
	Grid,
	IconButton,
	Icon,
	Button,
	Typography,
	ListItemButton,
	ListItem,
	colors,
	List,
	ListItemText,
	Box,
} from '@mui/material';

import { ClearOutlined } from '@mui/icons-material'
import { HeadingPage } from '../HeadingPage';
import { UIContext } from '../../../context/ui';
import globalStyle from '../../../styles/globals.module.css'

import { MenuItems } from '../../../_fakeData';
import { Divider } from '@mui/material';


export const MainMenu = () => {
	const { data: { title, menuItems } } = MenuItems


	const { sideMenuOpen, closeSideMenu } = useContext(UIContext);
	const { pathname } = useRouter();
	return (
		<Drawer
			anchor="right"
			open={sideMenuOpen}
			onClose={closeSideMenu}
		>
			<Grid
				sx={{
					backgroundColor: "mainMenu.main"
				}}
			>
				<HeadingPage title={title} variant="h2" />
			</Grid>
			<Grid
				container
				height={"100vh"}
				minWidth={{
					xs: "100vw",
					sm: "50vw",
				}}
				sx={{
					backgroundColor: "mainMenu.main"
				}}
			>
				<Grid
					container
					justifyContent="center"
				>
					<List>
						{
							menuItems.map(({ route, text, icon }, index) => (
								<NextLink
									href={route}
									key={`main-menu-Item-${index}`}
									// passHref
									legacyBehavior
								>
									<Box my={1}>
										<ListItemButton
											onClick={closeSideMenu}
											sx={{

												'&:hover': { color: "mainMenu.contrastText", backgroundColor: "unset" }
											}}
										>
											<Icon
												baseClassName="material-symbols-outlined"
												className={globalStyle['xx-font-size']}
												sx={{
													mx: 1
												}}
											>
												{icon}
											</Icon>
											<Typography
												className={globalStyle['xx-font-size']}
											>
												{text}
											</Typography>
										</ListItemButton>
										{
											(pathname === route) && (
												<Divider
													variant="inset"
													sx={[
														{
															borderBottomWidth: 2,
															borderColor: "mainMenu.contrastText",
														}
													]}
												/>
											)
										}
									</Box>
								</NextLink>
							))
						}
						<Grid container justifyContent={"center"}>
							<IconButton onClick={closeSideMenu}>
								<ClearOutlined fontSize={'large'} />
							</IconButton>
						</Grid>
					</List>

				</Grid>
			</Grid>

		</Drawer>
	)
};