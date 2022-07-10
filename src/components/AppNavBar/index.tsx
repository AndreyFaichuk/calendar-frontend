import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { RoutesNames } from '../../router/routesNames';
import { useTypedSelector } from '../../hooks/useTypedSelector';

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
  }
}));

const AppNavBar:FC = () => {
  const classes = useStylesAppNavBar();
  const history = useNavigate();

  const { isAuth } = useTypedSelector(state => state.authentificationReducer)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton 
              edge="start" 
              className={classes.menuButton} 
              color="inherit" 
              aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography 
              variant="h6" 
              className={classes.title}
            >
              Calendar</Typography>
          {isAuth ? 
            <>
              <Typography
                className={classes.authName}
                variant="h5"
              >
                Andrey F.</Typography>
              <Button 
                variant="contained"
                onClick={() => console.log('exit')}
              >
                Sign Out</Button>
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