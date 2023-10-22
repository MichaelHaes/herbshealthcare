import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../../Assets/white_logo.png';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider, MuiCssBaseline } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Khula from '../../Font/Khula.ttf'
import Paper from '@mui/material/Paper';
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
  return (
    <AppBar position='static' sx={{
      backgroundColor: '#017414',
    }}>
      <Toolbar position='relative' sx={{ height: 100, left:'-10px', display: 'flex',
        justifyContent: 'space-between' }}>
        <Box
          component='img'
          sx={{
            width: '100px'
          }}
          src={Logo}
        />
        <Grid>
          <ThemeProvider theme={theme}>
            <CssBaseline />
              <Button href="/dashboard/profile" sx={{color:'white', fontSize:'25px', marginTop:'5px'}}>Profil</Button>
              <Button href="/dashboard/plants" sx={{color:'white', fontSize:'25px', marginTop:'5px'}}>All Plants</Button>
              <Button href="/dashboard/logout" sx={{color:'white', fontSize:'25px', marginTop:'5px'}}>Logout</Button>
          </ThemeProvider>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default NavbarDashboard