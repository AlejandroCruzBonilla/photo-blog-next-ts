import { useContext } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import {
	Box,
	Drawer,
	Grid,
	Link,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
	IconButton
} from '@mui/material';

import {
	ArticleOutlined,
	EmailOutlined,
	PhotoCameraOutlined,
	RoofingOutlined,
	ClearOutlined
} from '@mui/icons-material'


const menuItems = [
	{ route: '/', text: "inicio", Icon: RoofingOutlined },
	{ route: '/galerias', text: "Galerias", Icon: PhotoCameraOutlined },
	{ route: '/articulos', text: "Articulos", Icon: ArticleOutlined },
	{ route: '/contacto', text: "Contacto", Icon: EmailOutlined },
]

import { UIContext } from '../../../context/ui';

export const MainMenu = () => {

	const { sidemenuOpen, closeSideMenu } = useContext(UIContext);
	const { pathname } = useRouter();
	return (
		<Drawer
			anchor="right"
			open={sidemenuOpen}
			onClose={closeSideMenu}
		>
			<Grid pt={4} width={"100vw"}>
				<Grid container justifyContent={"center"} pt={4}>
					<Typography textAlign={"center"} variant="h4">Menú</Typography>
				</Grid>
				<Grid px={"15vw"} mt={"15vh"}>
					<List>
						{
							menuItems.map(({ route, text, Icon }, index) => (
								<ListItemButton
									key={text}
									sx={{ width: 1, padding: 0 }}
									disabled={pathname === route}
									selected={pathname === route}
									divider={pathname === route}
								>
									<NextLink href={route} passHref legacyBehavior>
										<Link onClick={closeSideMenu} underline="none" m={1} width={1}>
											<ListItem alignItems='center' sx={{ justifyContent: "center" }}>
												<Grid item width={1 / 2}>
													<ListItemIcon sx={{ display: "flex", justifyContent: "center" }}>
														<Icon />
													</ListItemIcon>
												</Grid>
												<Grid item width={1 / 2}>
													<ListItemText primary={text} />
												</Grid>
											</ListItem>
										</Link>
									</NextLink>
								</ListItemButton>
							))
						}
					</List>
				</Grid>
				<Grid container justifyContent={"center"} mt={3}>
					<IconButton>
						<ClearOutlined onClick={closeSideMenu} fontSize={'large'} />
					</IconButton>
				</Grid>
			</Grid>

		</Drawer>
	)
};
