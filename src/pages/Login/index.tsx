import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import LoginForm from '../../components/LoginForm/index';

const Login: FC = () => (
  <Grid
   container
    direction="column"
    justifyContent="center"
    alignItems="center"
  >
    <LoginForm />
  </Grid>
);

export default Login;