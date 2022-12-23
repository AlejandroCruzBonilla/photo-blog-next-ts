import { useContext } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import {
	Box,
	Drawer,
	Link,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';

import {
	ArticleOutlined,
	EmailOutlined,
	PhotoCameraOutlined,
	RoofingOutlined
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
	console.log(useRouter());
	return (
		<Drawer
			anchor="right"
			open={sidemenuOpen}
			onClose={closeSideMenu}
		>

			{/* <Box sx={{width: '100vw'}}> */}
			{/* <Box sx={{ px: 3, pt: 4, height: 1 }} display={"flex"} flexDirection={"column"} justifyContent={"center"}> */}
			<Box sx={{ mr: 3, px: 3, pt: 4 }}>
				<Box>
					<Typography variant="h4">Menú</Typography>
				</Box>
				<List>
					{
						menuItems.map(({ route, text, Icon }, index) => (
							<ListItemButton
								key={text}
								sx={{ padding: 0}}
								disabled={pathname === route}
								selected={pathname === route}
								divider={pathname === route}
							>
								<NextLink href={route} passHref legacyBehavior>
									<Link onClick={closeSideMenu} underline="none" padding={1} m={1}>
										<ListItem>
											<ListItemIcon>
												<Icon />
											</ListItemIcon>
											<ListItemText primary={text} />
										</ListItem>
									</Link>
								</NextLink>
							</ListItemButton>
						))
					}
				</List>
			</Box>

		</Drawer>
	)
};
