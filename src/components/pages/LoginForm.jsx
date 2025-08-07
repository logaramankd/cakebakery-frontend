import React, { useState } from 'react';
import {
    Alert,
    Box,
    Button,
    Container,
    Paper,
    TextField,
    Typography,
    Snackbar,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import API_ROUTES from '../../services/apiRoutes';
import { postRequest } from '../../services/https';
const LoginForm = () => {
    const navigate = useNavigate();

    const [formData, setFormdata] = useState({
        email: '',
        password: '',
    });

    const [snackbar, setSnack] = useState({
        open: false,
        message: '',
        severity: 'success',
    });

    const handleChange = (e) => {
        setFormdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSnack({ open: false, message: '', severity: 'success' });

        try {
            const response = await postRequest(API_ROUTES.AUTH.LOGIN, formData);

            // store token if provided (optional)
            if (response.token) {
                localStorage.setItem('token', response.token);
            }

            setSnack({
                open: true,
                message: 'Login Successful 🎉',
                severity: 'success',
            });

            setTimeout(() => {
                navigate('/'); // 👈 Redirect to home or dashboard
            }, 2000);
        } catch (error) {
            let errorMessage =
                error?.response?.data?.message || error.message || 'Login failed ❌';

            if (errorMessage.toLowerCase().includes('invalid')) {
                errorMessage = 'Invalid credentials. Please try again.';
            }

            setSnack({
                open: true,
                message: errorMessage,
                severity: 'error',
            });
        }
    };

    const handleCloseSnackbar = () => {
        setSnack((prev) => ({ ...prev, open: false }));
    };
    return (
        <>
            <Paper
                // elevation={5}
                sx={{
                    padding: 4, width: { xs: '90%', sm: 400 }, display: 'flex',
                    flexDirection: 'column', gap: 2,
                }}
            >
                <Typography variant="h5" textAlign="center" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: {
                                xs: 1.5,  // smaller gap on mobile
                                sm: 2     // default gap on larger screens
                            },
                            alignItems: 'center'
                        }}
                    >
                        <TextField
                            label="Email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                        <TextField
                            label="Password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                        <Button type="submit" variant="contained" sx={{
                            backgroundColor: '#F74781', '&:hover': { backgroundColor: '#d53c6e' }
                        }}>
                            Login
                        </Button>
                        <Typography variant="body2" textAlign="center">
                            Don’t have an account?{' '}
                            <span
                                onClick={() => navigate('/register')}
                                style={{
                                    color: '#1976d2',
                                    cursor: 'pointer',
                                    fontWeight: 'bold',
                                }}
                            >
                                Register
                            </span>
                        </Typography>
                    </Box>
                </form>
            </Paper >

            <Snackbar
                open={snackbar.open}
                autoHideDuration={4000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbar.severity}
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </>
    )
}

export default LoginForm
