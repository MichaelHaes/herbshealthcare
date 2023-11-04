import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './LandingPage/Navbar';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider, MuiCssBaseline } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import BalooBhaijaan from '../Font/BalooBhaijaan.ttf'
import Paper from '@mui/material/Paper';
import background from '../Assets/landingPage_bg.png'
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
      email: formData.email,
      password: formData.password
    };

    axios.post(`http://localhost:5000/login`, user)
      .then(res => {
        console.log(res.data.user)
        // window.location.href = '/dashboard'
      })
      .catch(error => {
        console.error('Error adding user:', error);
      });
  }

  const theme = createTheme({
    typography: {
      fontFamily: 'BalooBhaijaan',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'BalooBhaijaan';
            src: url(${BalooBhaijaan});
          }
        `,
      },
    },
  });

  return (
    <Box sx={{
      height: '100vh',
      width: '100%',
      background: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPositionY: '90px'
    }}>
      <Navbar />
      <Container sx={{
        paddingTop: '100px'
      }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              fontFamily: 'BalooBhaijaan',
              fontSize: '120px',
              height: '100px',
              color: 'white',
              textAlign: 'center'
            }}
          >
            Login
          </Box>
        </ThemeProvider>
        <Paper elevation={8}
          sx={{
            width: '40%',
            mx: 'auto',
            padding: '2rem',
            borderRadius: 2,
            bgcolor: 'white',
            display: 'grid',
            marginTop: '70px',
          }}>
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" name="email" aria-describedby="my-helper-text" value={formData.email} onChange={handleChange} />
          </FormControl><br></br>
          <FormControl>
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input id="my-input" name="password" aria-describedby="my-helper-text" value={formData.password} onChange={handleChange} />
          </FormControl><br></br>
          <Button variant="contained" onClick={handleSubmit} color="primary" type="submit" sx={{
            mx: 'auto',
            width: '100px',
            backgroundColor: '#017414',
            borderRadius: '10px',
            fontSize: '16px',
            marginTop: '20px',
            alignItems: 'center',
            '&:hover': {
              backgroundColor: '#00480C',
              color: '#FFFFFF'
            },
            color: '#FFFFFF'
          }}>
            Login
          </Button>
          <Button variant='text' href='/register' sx={{
            marginTop: '10px'
          }}>
            Register
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
