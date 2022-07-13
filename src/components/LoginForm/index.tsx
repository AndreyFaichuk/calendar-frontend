import React, { FC, useState } from 'react';
import {
  Paper, Box, Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Input from '../../controls/Input';
import validation from '../../helpers/loginValidation';

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
}));

interface InputValue{
  name: string;
  password: string;
}

const LoginForm: FC = () => {
  const [inputValue, setInputValue] = useState<InputValue>({ name: '', password: '' });

  const classes = useStylesLoginForm();

  const isEmptyFields = !!(!inputValue.name || !inputValue.password);

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
      <Box component="form" className={classes.form}>
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

        <Button 
          variant="contained" 
          color="primary"
          onClick={handleSubmit}
          disabled={isEmptyFields}
          >
            Login
        </Button>
      </Box>
    </Paper>
  );
};

export default LoginForm;
