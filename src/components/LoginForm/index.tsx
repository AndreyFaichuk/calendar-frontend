import React, { FC, useState } from 'react';
import {
  Paper, Box, Button, Typography, Link, CircularProgress
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

import Input from '../../controls/Input';
import validation from '../../helpers/loginValidation';
import { useNavigate } from 'react-router-dom';
import { RoutesNames } from '../../router/routesNames';
import { AuthActionCreators } from '../../store/reducers/authentification/action-creators';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const useStylesLoginForm = makeStyles((theme) => ({
  root: {
    width: '30%',
    margin: '15% 0 0 0',
    padding: '30px',
  },
  form: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    padding: '10px'
  },
  title: {
    margin: '0 5px 0 0'
  }
}));

interface InputValue{
  username: string;
  password: string;
}

const LoginForm: FC = () => {
  const [inputValue, setInputValue] = useState<InputValue>({ username: '', password: '' });
  const { isLoading } = useTypedSelector(state => state.authentification)
  const navigate = useNavigate();
  const classes = useStylesLoginForm();
  const dispatch = useDispatch();

  const isEmptyFields = !!(!inputValue.username || !inputValue.password);

  const handleInputChange = (e: React.FormEvent<EventTarget>): void => {
    const { name, value } = e.target as HTMLInputElement;

    setInputValue({
      ...inputValue,
      [name]: value
    })
  };

  const handleSubmit = () => {
    dispatch(AuthActionCreators.setLoginUser(inputValue))
    setInputValue({ username: '', password: '' })
  };

  return (
    <>
    {
      isLoading ? 
      <CircularProgress style={{margin: '15% 0 0 0'}}/>
        :
        <Paper className={classes.root}>
        <Box component="form" className={classes.form}>
          <Input
            width='35%'
            label="Name"
            name="username"
            onChange={handleInputChange}
          />
          <Input
            width='35%'
            label="Password"
            name="password"
            onChange={handleInputChange}
          />
          <Button 
            variant="contained" 
            color="primary"
            onClick={handleSubmit}
            disabled={isEmptyFields}
            >
              Login
          </Button>
      </Box>
      <Box className={classes.titleWrapper}>
        <Typography className={classes.title}>Do not have an account?</Typography>
          <Link
              component="button"
              variant="body2"
              onClick={() => navigate(RoutesNames.REGISTRATION)}
          >
            Registration
          </Link>
        </Box>
    </Paper>
    }
    </>
  );
};

export default LoginForm;