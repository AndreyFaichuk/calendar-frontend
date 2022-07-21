import React, { FC, useState } from 'react';
import {
  Paper, Link, Button, Box, Typography, Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';

import Input from '../../controls/Input';
import { RoutesNames } from '../../router/routesNames';
import validation from '../../helpers/loginValidation';
import { useActions } from '../../hooks/useActions';
import { UserRegistraion } from '../../models/User';
import { AuthActionCreators } from '../../store/reducers/authentification/action-creators';

const useStylesLoginForm = makeStyles((theme) => ({
  root: {
    width: '30%',
    margin: '11% 0 0 0',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column'
  },
  button: {
    width: '30%'
  },
  buttonWrapper: {
    display: 'flex',
    margin: '25px',
    justifyContent: 'space-evenly'
  },
  titleWrapper: {
    width: '44%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    marginBottom: '15px'
  }
}));

const RegistrationForm: FC = () => {
  const [inputValue, setInputValue] = useState<UserRegistraion>({ username: '', password: '', email: '' });
  const navigate = useNavigate();
  const classes = useStylesLoginForm();
  const { setRegistrationUser } = useActions(AuthActionCreators);

  const isEmptyFields = !!(!inputValue.username || !inputValue.password || !inputValue.email);

  const handleInputChange = (e: React.FormEvent<EventTarget>): void => {
    const { name, value } = e.target as HTMLInputElement;

    setInputValue({
      ...inputValue,
      [name]: value
    })
  };

  const handleSubmit = () => {
    setRegistrationUser(inputValue)
    setInputValue({ username: '', password: '', email: '' })
  };

  return (
    <Paper className={classes.root}>
      <Grid container direction={"column"} spacing={3}>
        <Grid item>
        <Input
          value={inputValue.username}
          label="Name"
          name="username"
          onChange={handleInputChange}
        />
        </Grid>
        <Grid item>
        <Input
          value={inputValue.password}
          label="Password"
          name="password"
          type="password"
          onChange={handleInputChange}
        />
        </Grid>
        <Grid item>
        <Input
          value={inputValue.email}
          label="Email"
          name="email"
          onChange={handleInputChange}
        />
        </Grid>
      </Grid>
        <Box className={classes.buttonWrapper}>
            <Button 
                className={classes.button}
                variant="contained" 
                color="primary"
                onClick={handleSubmit}
                disabled={isEmptyFields}
            >
                Registration
            </Button>
            <Box className={classes.titleWrapper}>
              <Typography>Already have an account?</Typography>
              <Link
                  component="button"
                  variant="body2"
                  onClick={() => navigate(RoutesNames.LOGIN)}
              >
                Login
              </Link>
            </Box>
        </Box>
    </Paper>
  );
};

export default RegistrationForm;
