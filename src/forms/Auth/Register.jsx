import React, { useState } from 'react'

import signUpBg from '../../assets/signUp.svg';
import { Box } from '@mui/material';
import RegisterForm from '../../components/pages/RegisterForm';
const Register = () => {

  return (

    <Box sx={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundImage: `url(${signUpBg})`, backgroundSize: 'cover',
      backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
    }} >
      <RegisterForm />
    </Box >
  )
}

export default Register
