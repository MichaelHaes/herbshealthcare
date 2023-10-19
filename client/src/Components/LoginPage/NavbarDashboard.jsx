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
      <Toolbar position='relative' sx={{ height: 100, left:'-10px', }}>
        <Box
          component='img'
          sx={{
            width: '100px'
          }}
          src={Logo}
        />
          <ThemeProvider theme={theme}>
            <CssBaseline />
              <Button href="#" sx={{color:'white', fontSize:'25px', marginTop:'5px'}}>All Plants</Button>
              <Button href="#" sx={{color:'white', fontSize:'25px', marginTop:'5px'}}>Logout</Button>
          </ThemeProvider>
      </Toolbar>
    </AppBar>
  )
}

export default NavbarDashboard