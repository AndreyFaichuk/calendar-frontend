import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import RegistrationForm from '../../components/RegistrationForm';

const Login: FC = () => (
  <Grid
   container
    direction="column"
    justifyContent="center"
    alignItems="center"
  >
    <RegistrationForm />
  </Grid>
);

export default Login;
