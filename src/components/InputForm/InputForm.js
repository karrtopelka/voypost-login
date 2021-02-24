import { Button, Grid, IconButton, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './InputForm.css';
import {
  changeEmail,
  changePassword,
  selectEmail,
  selectPassword,
} from '../../features/userSlice';
import Input from '../Input/Input';

const InputForm = () => {
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input__root">
      <div>
        <Grid container direction="column" justify="center" alignItems="center">
          <h1 className="input__title">Login</h1>
          <div className="input__wrapper">
            <Input
              label="Email adress"
              value={email}
              onChange={changeEmail}
              type="email"
              lw={95}
            />
            <Input
              label="Password"
              value={password}
              onChange={changePassword}
              type={showPassword ? 'text' : 'password'}
              lw={70}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <Button
            disabled
            variant="contained"
            className={`input__button ${
              (password && email) || 'input__button_disabled'
            }`}
          >
            Log In
          </Button>
          <p className="input__forgot">Forgot your password?</p>
          <div className="input__register">
            <p>Don’t have an account yet?</p>
            <p>Register</p>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default InputForm;
