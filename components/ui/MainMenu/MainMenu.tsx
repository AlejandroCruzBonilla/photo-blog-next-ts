import { FC, useContext } from 'react';;
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import {
	Drawer,
	Grid,
	Link,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	IconButton,
	Icon
} from '@mui/material';

import { ClearOutlined } from '@mui/icons-material'
import { HeadingPage } from '../HeadingPage';
import { UIContext } from '../../../context/ui';
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
				container
				width={"100vw"}
			>
				<HeadingPage title={title} variant="h2" />
				<Grid
					container
					justifyContent="center"
					alignItems="center"
				>
					<Grid item>
						<List>
							<Grid container justifyContent={"center"}>
								<Grid item>
									{
										menuItems.map(({ route, text, icon },index) => (
											<Grid
												key={`main-menu-Item-${index}`}
												item
											>
												<ListItemButton
													key={text}
													disabled={pathname === route}
													selected={pathname === route}
													divider={pathname === route}
												>
													<NextLink href={route} passHref legacyBehavior>
														<Link onClick={closeSideMenu} underline="none" m={1} width={1}>
															<ListItem alignItems='center' sx={{ justifyContent: "center" }}>
																<Grid container>
																	<Grid item >
																		<ListItemIcon sx={{ display: "flex", justifyContent: "center" }}>
																			<Icon
																				baseClassName="material-symbols-outlined"
																			// className={styles['social-item-xxx-font-size']}
																			>
																				{icon}
																			</Icon>
																		</ListItemIcon>
																	</Grid>
																	<Grid item>
																		<ListItemText primary={text} />
																	</Grid>
																</Grid>
															</ListItem>
														</Link>
													</NextLink>
												</ListItemButton>
											</Grid>
										))
									}
									<Grid container justifyContent={"center"}>
										<IconButton onClick={closeSideMenu}>
											<ClearOutlined fontSize={'large'} />
										</IconButton>
									</Grid>
								</Grid>
							</Grid>
						</List>
					</Grid>
				</Grid>
			</Grid>

		</Drawer>
	)
};