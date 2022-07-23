import React, { FC } from 'react';
import {
	Drawer,
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

import { Divider } from '@material-ui/core';
import LogoutIcon from '@mui/icons-material/Logout';

import { useActions } from '../../hooks/useActions';
import { AuthActionCreators } from '../../store/reducers/authentification/action-creators';

import menuItems from './MenuItems';
import { menuItem } from '../../models/DrawerItem';

const drawerWidth = '200px';

const CustomDrawer: FC = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { logoutUser } = useActions(AuthActionCreators);

	return (
		<Drawer
			variant='permanent'
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				[`& .MuiDrawer-paper`]: {
					width: drawerWidth,
					boxSizing: 'border-box',
					position: 'inherit',
					border: 'none',
					marginTop: '15px'
				}
			}}
		>
			<Box sx={{ overflow: 'hidden' }}>
				<List>
					{menuItems.map((item: menuItem) => (
						<ListItem
							key={item.path}
							disablePadding
							onClick={() => navigate(item.path)}
							selected={item.path === location.pathname}
						>
							<ListItemButton>
								<ListItemIcon>{item.icon}</ListItemIcon>
								<ListItemText primary={item.text} />
							</ListItemButton>
						</ListItem>
					))}
					<Divider />
					<ListItem disablePadding onClick={() => logoutUser()}>
						<ListItemButton>
							<ListItemIcon>
								<LogoutIcon />
							</ListItemIcon>
							<ListItemText primary='Logout' />
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Drawer>
	);
};

export default CustomDrawer;
