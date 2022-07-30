import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Avatar } from '@material-ui/core';

import { RoutesNames } from '../../router/routesNames';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getUserAvatar } from '../../api/updateUser';

const useStylesAppNavBar = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  authName: {
    marginRight: '15px'
  },
  avatar: {
    width: '50px',
    height: '50px',
    backgroundColor: 'orange'
  }
}));

const AppNavBar: FC = () => {
  const classes = useStylesAppNavBar();
  const history = useNavigate();
  const { isAuth } = useTypedSelector((state) => state.authentification);
  const { username, avatar } = useTypedSelector((state) => state.user);
  const [avatarPreview, setAvatarPreview] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      if (avatar) {
        const fetchedAvatar = await getUserAvatar(avatar!)
        setAvatarPreview(fetchedAvatar)
      } else {
        setAvatarPreview('')
      }
    }
    fetchData()
  }, [avatar])

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Calendar
          </Typography>
          {isAuth ? (
            <>
              <Typography className={classes.authName} variant='h6'>
                {username}
              </Typography>
              {avatarPreview ?
                <Avatar
                  className={classes.avatar}
                  src={avatarPreview}
                >
                </Avatar>
                :
                <Avatar
                  className={classes.avatar}
                >
                  <Typography variant='h5'>
                    {username[0]}
                  </Typography>
                </Avatar>
              }
            </>
          ) : (
            <Button variant='contained' onClick={() => history(RoutesNames.LOGIN)}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppNavBar;
