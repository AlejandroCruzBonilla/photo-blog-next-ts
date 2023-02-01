import { FC, useContext } from 'react';;
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import {
	Drawer,
	Grid,
	IconButton,
	Icon,
	Typography,
	ListItemButton,
	List,
	Box,
	Link,
} from '@mui/material';

import { HeadingPage } from '../HeadingPage';
import { UIContext } from '../../../context/ui';
import { Divider } from '@mui/material';
import {
	ClearOutlined,
	RoofingOutlined,
	PhotoCameraOutlined,
	ArticleOutlined,
	EmailOutlined,
	WorkOutlineOutlined,
} from '@mui/icons-material';
import globalStyle from '../../../styles/globals.module.css'

import MenuItems from '../../../_fakeData/menu.json';


export const MainMenu = () => {
	const { data: { title, menuItems } } = MenuItems


	const icons = menuItems.map(({ icon }) => {

	})
	// console.log(icons);

	const setIcon = (icon: string) => {
		switch (icon) {
			case 'RoofingOutlined':
				return <RoofingOutlined sx={{ mx: 1 }} className={globalStyle['xx-font-size']} />
			case 'PhotoCameraOutlined':
				return <PhotoCameraOutlined sx={{ mx: 1 }} className={globalStyle['xx-font-size']} />
			case 'ArticleOutlined':
				return <ArticleOutlined sx={{ mx: 1 }} className={globalStyle['xx-font-size']} />
			case 'EmailOutlined':
				return <EmailOutlined sx={{ mx: 1 }} className={globalStyle['xx-font-size']} />
			case 'WorkOutlineOutlined':
				return <WorkOutlineOutlined sx={{ mx: 1 }} className={globalStyle['xx-font-size']} />
		}
	}

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
									passHref
									legacyBehavior
								>
									<Link my={1} sx={{ color: "mainMenu.dark", textDecoration: "none" }}>
										<ListItemButton
											onClick={closeSideMenu}
											sx={{
												'&:hover': { color: "mainMenu.contrastText", backgroundColor: "unset" }
											}}
										>
											{/* <Icon
												baseClassName="material-symbols-outlined"
												className={globalStyle['xx-font-size']}
												sx={{
													mx: 1
												}}
											>
												{icon}
											</Icon> */}
											{
												setIcon(icon)
											}

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
									</Link>
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