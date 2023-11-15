import * as React from 'react';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../../Assets/white_logo.png';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider, MuiCssBaseline } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Khula from '../../Font/Khula.ttf'
import Grid from '@mui/material/Unstable_Grid2'

const NavbarDashboard = () => {
  const theme = createTheme({
    typography: {
      fontFamily: 'Khula',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Khula';
            src: url(${Khula});
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
    <AppBar position='Absolute' sx={{
      backgroundColor: '#017414',
    }}>
      <Toolbar position='relative' sx={{ height: 100, left:'-10px', display: 'flex',
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
              <Button href="/dashboard/profile" sx={{color:'white', fontSize:'25px', marginTop:'5px', fontFamily: 'BalooBhaijaan', '&:hover': {
                fontWeight:'bolder'
              },}}>Profil</Button>
              <Button href="/dashboard/plants" sx={{color:'white', fontSize:'25px', marginTop:'5px', fontFamily: 'BalooBhaijaan', '&:hover': {
                fontWeight:'bolder'
              },}}>All Plants</Button>
              <Button onClick={logout} sx={{color:'white', fontSize:'25px', marginTop:'5px', fontFamily: 'BalooBhaijaan', '&:hover': {
                fontWeight:'bolder'
              },}}>Logout</Button>
          </ThemeProvider>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default NavbarDashboard