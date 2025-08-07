// RegisterForm.jsx
import React, { useState } from 'react';
import {
    Alert,
    Box,
    Button,
    Paper,
    TextField,
    Typography,
    CircularProgress,
    Snackbar
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import API_ROUTES from '../../services/apiRoutes';
import { postRequest } from '../../services/https';

const RegisterForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormdata] = useState({
        userName: '',
        email: '',
        password: ''
    });

    const [snackbar, setSnack] = useState({
        open: false,
        message: '',
        severity: 'success'
    });

    const handleChange = (e) => {
        setFormdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await postRequest(API_ROUTES.AUTH.REGISTER, formData);
            setSnack({
                open: true,
                message: 'Successfully Registered ❤️‍🔥',
                severity: 'success'
            });
            setTimeout(() => {
                navigate('/login');
            }, 2000);
            setFormdata({ userName: '', email: '', password: '' });
        } catch (error) {
            let errorMessage =
                error?.response?.data?.message || error.message || 'Something Went Wrong ❌';
            if (errorMessage.toLowerCase().includes('exist')) {
                errorMessage = 'User already exists. Please try logging in.';
            }
            setSnack({
                open: true,
                message: errorMessage,
                severity: 'error'
            });
        } finally {
            setLoading(false);
        }
    };

    const handleCloseSnackbar = () => {
        setSnack({ ...snackbar, open: false });
    };

    return (
        <>
            <Paper elevation={5} sx={{
                padding: 4, width: { xs: '90%', sm: 400 }, display: 'flex',
                flexDirection: 'column', gap: 2,
            }}>
                <Typography variant="h5" sx={{ textAlign: 'center', fontFamily: 'inherit' }} gutterBottom>
                    Register
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: {
                            xs: 1.5,  // smaller gap on mobile
                            sm: 2     // default gap on larger screens
                        },
                        alignItems: 'center'
                    }}>

                        <TextField label='UserName' value={formData.userName} name='userName' variant='outlined' onChange={handleChange} fullWidth required />
                        <TextField id="outlined-basic" label='Email' type='email' name='email' value={formData.email} variant='outlined' onChange={handleChange} fullWidth required />
                        <TextField label='Password' value={formData.password} name='password' variant='outlined' onChange={handleChange} fullWidth required />

                        <Box>
                            <Button variant='contained' type='submit' sx={{ backgroundColor: '#F74781', '&:hover': { backgroundColor: '#d53c6e' } }}
                                disabled={loading}
                                startIcon={loading ? <CircularProgress size={18} /> : null}

                            >{loading ? 'Registering...' : 'Register'}</Button>
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
            <Snackbar
                open={snackbar.open}
                autoHideDuration={4000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </>
    );
};

export default RegisterForm;
