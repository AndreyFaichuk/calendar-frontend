import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@material-ui/core';

import { RoutesNames } from '../../router/routesNames';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { AuthActionCreators } from '../../store/reducers/authentification/action-creators';
import { AccountCircle } from '@material-ui/icons';

const useStylesAppNavBar = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  authName: {
    marginRight: '15px'
  },
  avatar: {
    width: '40px',
    height: '40px'
  }
}));

const AppNavBar:FC = () => {
  const classes = useStylesAppNavBar();
  const history = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { isAuth } = useTypedSelector(state => state.authentification)
  const { username } = useTypedSelector(state => state.user)
  const { logoutUser } = useActions(AuthActionCreators);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    logoutUser();
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography 
              variant="h6" 
              className={classes.title}
            >
              Calendar</Typography>
          {isAuth ? 
            <>
              <Typography className={classes.authName} variant="h6">{username}</Typography>
              <IconButton
                onClick={handleMenu}
                color="inherit"
                size='medium'
              >
                <AccountCircle />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                  style: { 
                    transform: 'translateX(-30%) translateY(40%)'
                  }
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
              :
            <Button 
              variant="contained"
              onClick={() => history(RoutesNames.LOGIN)}
            >
              Login</Button>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppNavBar;