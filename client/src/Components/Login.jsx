import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './LandingPage/Navbar';
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Logo from '../Assets/herbscare_logo.png'
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider, MuiCssBaseline } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import BalooBhaijaan from '../Font/BalooBhaijaan.ttf'
import Paper from '@mui/material/Paper';
import background from '../Assets/landingPage_bg.png'
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';

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
    
    axios.get(`http://localhost:5000/login`, { params: user })
      .then(res => {
        window.location.href = '/dashboard'
        console.log(res.data)
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
    <div style={{
      height: '720px',
      width: '100%',
      background: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPositionY: '90px'

    }}>
      <Navbar />
      <Container sx={{
        height: '620px',
      }}>
        <Grid container spacing={5} sx={{ marginTop: "0px" }} justifyContent={'center'}>
          <Grid flexDirection={'row'} sx={{ justifyContent: 'center' }}>
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
            <Grid sx={{
              marginTop: '100px',
              justifyContent: 'center',
              marginLeft: '50px',
            }}>
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <InputLabel htmlFor="my-input">Email address</InputLabel>
                  <Input id="my-input" name="email" aria-describedby="my-helper-text" value={formData.email} onChange={handleChange}/>
                  <FormHelperText id="my-helper-text">@gmail.com</FormHelperText>
                </FormControl><br></br>
                <FormControl>
                  <InputLabel htmlFor="my-input">Password</InputLabel>
                  <Input id="my-input" name="password" aria-describedby="my-helper-text" value={formData.password} onChange={handleChange}/>
                  <FormHelperText id="my-helper-text">at least 8 letters</FormHelperText>
                </FormControl><br></br>
                <Button variant="contained" color="primary" type="submit" sx={{
                  marginLeft: '60px',
                  backgroundColor: '#000000',
                  opacity: '50%',
                  borderRadius: '10px',
                  fontSize: '16px',
                  width: '40px',
                  marginTop: '20px',
                  '&:hover': {
                    backgroundColor: '#FFFFFF',
                    color: '#000000'
                  },
                  color: '#FFFFFF'
                }}>
                  Login
                </Button>


              </form>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
