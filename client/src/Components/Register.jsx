import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './LandingPage/Navbar';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider, MuiCssBaseline } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Jaldi from '../Font/Jaldi-Regular.ttf'
import Paper from '@mui/material/Paper';
import background from '../Assets/LP_background.png'
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = event => {
    event.preventDefault();
    

    const user = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      confirm_password: formData.confirm_password
    };

    console.log(user)

    axios.post(`http://localhost:5000/register`, { user })
      .then(res => {
        window.location.href = '/login'
        console.log(res)
      })
      .catch(error => {
        console.error('Error adding user:', error);
      });
  }

  const theme = createTheme({
    typography: {
      fontFamily: 'Jaldi',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Jaldi';
            src: url(${Jaldi});
          }
        `,
      },
    },
  });

  return (
    <Box sx={{
      height: '100vh',
      background: `url(${background})`,
      backgroundSize: 'cover',
    }}>
      <Navbar />
      <Container sx={{
        paddingTop: '100px'
      }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              fontFamily: 'Jaldi',
              fontSize: '120px',
              height: '100px',
              color: 'white',
              textAlign: 'center'
            }}
          >
            Register
          </Box>
        </ThemeProvider>
        <Paper elevation={8}
          sx={{
            width: '40%',
            mx: 'auto',
            padding: '2rem',
            borderRadius: 2,
            border: '1px solid white',
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            display: 'grid',
            marginTop: '70px',
          }}>
          <FormControl>
            <InputLabel htmlFor="name-input" sx={{ color: 'white' }}>Name</InputLabel>
            <Input id="name-input" name="name" aria-describedby="my-helper-text" sx={{ color: 'white' }} value={formData.name} onChange={handleChange} />
          </FormControl><br></br>
          <FormControl>
            <InputLabel htmlFor="email-input" sx={{ color: 'white' }}>Email address</InputLabel>
            <Input id="email-input" name="email" aria-describedby="my-helper-text" sx={{ color: 'white' }} value={formData.email} onChange={handleChange} />
          </FormControl><br></br>
          <FormControl>
            <InputLabel htmlFor="password-input" sx={{ color: 'white' }}>Password</InputLabel>
            <Input id="password-input" name="password" aria-describedby="my-helper-text" sx={{ color: 'white' }} value={formData.password} onChange={handleChange} />
          </FormControl><br></br>
          <FormControl>
            <InputLabel htmlFor="confirm-password-input" sx={{ color: 'white' }}>Confirm Password</InputLabel>
            <Input id="confirm-password-input" name="confirm_password" aria-describedby="my-helper-text" sx={{ color: 'white' }} value={formData.confirm_password} onChange={handleChange} />
          </FormControl><br></br>
          <Button variant="contained" onClick={handleSubmit} color="primary" type="submit" sx={{
            mx: 'auto',
            width: '100px',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '10px',
            border: '1px solid white',
            fontSize: '16px',
            marginTop: '20px',
            alignItems: 'center',
            '&:hover': {
              color: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              transition: 'background-color 1s, color 1s',
            },
            color: '#FFFFFF'
          }}>
            Register
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default Register;
