import React, { FC } from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import RegistrationForm from '../../components/RegistrationForm';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Login: FC = () => {
  const { isLoading } = useTypedSelector(state => state.authentification);

return(
  <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
  >
  {
    isLoading ? 
    <CircularProgress style={{ margin: '15% 0 0 0' }}/>
    :
    <RegistrationForm />
  }
</Grid>
)};

export default Login;
