import { Button, Container, FormControl, TextField, Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Login = () => {
  return (
    <>
    <Header />
        <Container>
        <Typography sx={{ fontWeight: '600', color: '#0a2c3d', mt: 5, mb:3 }} variant="h5">Please Login</Typography>      
        <FormControl sx={{ width:'40%' }}>
        <Typography sx={{ fontWeight: '600', color: '#0a2c3d', mt: 3, mb:3 }} variant="h6">Your Email</Typography> 
        <TextField
            required
            fullWidth
            margin="normal"          
            type="email"          
            id="outlined-required"
        />          
        <Typography sx={{ fontWeight: '600', color: '#0a2c3d', mt: 3 , mb:3 }} variant="h6">Your Password</Typography> 
        <TextField
            required
            fullWidth
            margin="normal"          
            type="password"        
            id="outlined-required"
        />
        <Button sx={{ backgroundColor: 'var(--bg-black-100)', color: '#202020', textDecoration: 'none', width: '30%', mt:5 }} variant="contained">Login</Button>      
        </FormControl>
                <Typography sx={{ fontWeight: '600', color: '#0a2c3d', mt: 5 , mb:5 }} variant="h5">- - - - - - - - - - - - - - - - - OR - - - - - - - - - - - - - - - - -</Typography>       
        <Button sx={{ backgroundColor: 'var(--bg-black-100)', color: '#202020', textDecoration: 'none' }} variant="contained">Login With Google</Button>      
    </Container>
    <Footer />
    </>
    );
};

export default Login;