import React, { useState } from 'react';
import {
  Box,
} from '@mui/material';
import signUpBg from '../../assets/signUp.svg';

import LoginForm from '../../components/pages/LoginForm';

const Login = () => {


  return (
    <Box
      sx={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundImage: `url(${signUpBg})`, backgroundSize: 'cover',
        backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
      }}
    >
      <LoginForm />
    </Box>
  );
};

export default Login;
