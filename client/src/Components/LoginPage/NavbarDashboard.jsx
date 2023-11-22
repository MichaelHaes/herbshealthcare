import * as React from 'react';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../../Assets/white_logo.png';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider, MuiCssBaseline } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Jaldi from '../../Font/Jaldi-Regular.ttf'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2'
import { Container } from '@mui/system';
import { Fade } from 'react-reveal';

const NavbarDashboard = () => {
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

  const logout = () => {
    axios.delete("http://localhost:5000/logout", {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    })
    .then((res) => {
      window.location.href =  '/'
    });
    
  }

  return (
    <AppBar position='absolute' sx={{
      background: 'none',
      boxShadow: 'none',
      paddingLeft: '0'
    }}>
      <Fade>
      <Container position='relative' sx={{ 
        height: '8vh', 
        display: 'flex', 
        alignItems: 'center' 
      }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}>
            <Box href="/" sx={{
              color: 'white',
              fontSize: '25px',
              fontFamily: 'Jaldi',
              '&:hover': {
                fontWeight: 'bolder',
                cursor: 'pointer'
              },
            }}>
              Herbs Care.
            </Box>
            <Box href="/dashboard/plant" 
              sx={{
                color: 'white',
                fontSize: '25px',
                fontFamily: 'Jaldi',
                '&:hover': {
                  fontWeight: 'bolder',
                  cursor: 'Pointer'
                },
              }}>
              All Plant
            </Box>
          </Box>
        </ThemeProvider>
      </Container>
      </Fade>
      {/* <Toolbar position='relative' sx={{ 
        height: 100, 
        left:'-10px', 
        display: 'flex',
        justifyContent: 'space-between' }}>
        <a href='/dashboard'>
          <Box
          component='img'
          sx={{
            width: '85px',
            marginTop:'10px'
          }}
          src={Logo}
        />
        </a>
        <Grid>
          <ThemeProvider theme={theme}>
            <CssBaseline />
              <Button href="/dashboard/profile" sx={{
                color:'white', 
                fontSize:'25px', 
                marginTop:'5px', 
                fontFamily: 'BalooBhaijaan', 
                '&:hover': {
                  fontWeight:'bolder'
              },}}>Profil</Button>
              <Button href="/dashboard/plants" sx={{
                color:'white', 
                fontSize:'25px', 
                marginTop:'5px', 
                fontFamily: 'BalooBhaijaan', 
                '&:hover': {
                  fontWeight:'bolder'
              },}}>All Plants</Button>
              <Button href="/dashboard/logout" sx={{
                color:'white', 
                fontSize:'25px', 
                marginTop:'5px', 
                fontFamily: 'BalooBhaijaan', 
                '&:hover': {
                  fontWeight:'bolder'
              },}}>Logout</Button>
          </ThemeProvider>
        </Grid>
      </Toolbar> */}
    </AppBar>
  )
}

export default NavbarDashboard