import React, { useState } from 'react'
import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material'
import Snackbar from '@mui/material/Snackbar';
import { useNavigate } from 'react-router-dom';

import API_ROUTES from '../../services/apiRoutes';
import { postRequest } from '../../services/https'
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormdata] = useState({
    userName: '',
    email: '',
    password: ''
  })
  const [error, seterror] = useState('');
  const [success, setsuccess] = useState('')

  const handleChange = (e) => {
    setFormdata((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    seterror('');
    setsuccess('');
    try {
      const response = await postRequest(API_ROUTES.AUTH.REGISTER, formData);
      setsuccess("Registration Succesfull !");
      setFormdata({ userName: '', email: '', password: '' })
    } catch (error) {
      seterror(error.message || "Something Went wrong")
    }
  }
  return (
    <Container maxWidth='sm' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '92vh' }} >
      <Paper elevation={5} sx={{
        padding: 4, marginTop: 8, width: 400, display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}>
        <Typography variant="h5" sx={{ textAlign: 'center' }} gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'center'
          }}>

            <TextField label='UserName' value={formData.userName} name='userName' variant='outlined' onChange={handleChange} fullWidth required />
            <TextField id="outlined-basic" label='Email' type='email' name='email' value={formData.email} variant='outlined' onChange={handleChange} fullWidth required />
            <TextField label='Password' value={formData.password} name='password' variant='outlined' onChange={handleChange} fullWidth required />
            {error && <Typography color="error">{error}</Typography>}
            {success && <Typography color="primary">{success}</Typography>}

            <Box>
              <Button variant='contained' type='submit' color='primary' >Register</Button>
            </Box>
            <Box textAlign="center">
              <Typography variant="body2">
                Already have an account?{" "}
                <span
                  onClick={() => navigate('/login')}
                  style={{ color: "#1976d2", cursor: "pointer", fontWeight: "bold" }}
                >
                  Login
                </span>
              </Typography>
            </Box>
          </Box>

        </form>
      </Paper>
    </Container>
  )
}

export default Register
