import React, { FC } from 'react';
import { Drawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';

const drawerWidth = '220px';

const CustomDrawer: FC = () => {
	const navigate = useNavigate();

	const menuItems = [
		{
			text: 'My calendar',
			icon: <CalendarMonthIcon/>,
			path: '/calendar'
		},
		{
			text: 'Profile',
			icon: <PersonIcon/>,
			path: '/profile'
		}
	];

  return (
		<Drawer 
			variant='permanent'
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				[`& .MuiDrawer-paper`]: {
				width: drawerWidth, boxSizing: 'border-box',
				position: 'inherit', border: 'none', marginTop: '15px'
			}}
		}>
			<Box sx={{ overflow: 'hidden' }}>
				<List>
					{menuItems.map((item) => (
						<ListItem 
							key={item.path} 
							disablePadding
							onClick={() => navigate(item.path)}
						>
							<ListItemButton>
								<ListItemIcon>
									{item.icon}
								</ListItemIcon>
								<ListItemText primary={item.text} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Box>
		</Drawer>
  );
};

export default CustomDrawer;