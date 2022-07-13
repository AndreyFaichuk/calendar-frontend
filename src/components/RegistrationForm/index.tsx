import React, { FC, useState } from 'react';
import {
  Paper, Link, Button, Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';

import Input from '../../controls/Input';
import { RoutesNames } from '../../router/routesNames';
import validation from '../../helpers/loginValidation';

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
  }
}));

interface InputValue{
  name: string;
  password: string;
  email: string;
}

const RegistrationForm: FC = () => {
  const [inputValue, setInputValue] = useState<InputValue>({ name: '', password: '', email: '' });
  const navigate = useNavigate();
  const classes = useStylesLoginForm();

  const isEmptyFields = !!(!inputValue.name || !inputValue.password || !inputValue.email);

  const handleInputChange = (e: React.FormEvent<EventTarget>): void => {
    const { name, value } = e.target as HTMLInputElement;

    setInputValue({
      ...inputValue,
      [name]: value
    })
  };

  const handleSubmit = () => {
    console.log(inputValue)
  };

  return (
    <Paper className={classes.root}>
        <Input
          label="Name"
          name="name"
          onChange={handleInputChange}
        />

        <Input
          label="Password"
          name="password"
          onChange={handleInputChange}
        />

        <Input
          label="Email"
          name="email"
          onChange={handleInputChange}
        />
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
            <Link
                component="button"
                variant="body2"
                onClick={() => navigate(RoutesNames.LOGIN)}
            >
                Already have an account? Login
            </Link>
        </Box>
    </Paper>
  );
};

export default RegistrationForm;
