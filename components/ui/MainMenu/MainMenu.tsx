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
} from '@mui/material';

import { ClearOutlined } from '@mui/icons-material'
import { HeadingPage } from '../HeadingPage';
import { UIContext } from '../../../context/ui';
import globalStyle from '../../../styles/globals.module.css'

import { MenuItems } from '../../../_fakeData';


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
					<Grid item>
						<Grid
							container
							direction={"column"}
						>
							{
								menuItems.map(({ route, text, icon }, index) => (

									<NextLink
										href={route}
										passHref
										legacyBehavior
										key={`main-menu-Item-${index}`}
									>

										<Button
											onClick={closeSideMenu}
											size="large"
											variant={(pathname === route) ? "contained" : "text"}
											sx={[
												{
													py: 3, m: 1,
													color: "mainMenu.contrastText",
													justifyContent: "space-between",
													// justifyContent: "center",
													'&:hover': { backgroundColor: 'mainMenu.contrastText', color: "mainMenu.light" },
												},
												(pathname === route) && {
													backgroundColor: "mainMenu.contrastText",
													color: "mainMenu.light",
													'&:hover': {
														backgroundColor: 'mainMenu.dark',
														color: "mainMenu.contrastText"
													},
												}
											]}
										>
											<Icon
												baseClassName="material-symbols-outlined"
												className={globalStyle['xx-font-size']}
											>
												{icon}
											</Icon>
											<Typography variant="h5">{text}</Typography>
										</Button>
									</NextLink>
								))
							}
							<Grid container justifyContent={"center"}>
								<IconButton onClick={closeSideMenu}>
									<ClearOutlined fontSize={'large'} />
								</IconButton>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

		</Drawer>
	)
};