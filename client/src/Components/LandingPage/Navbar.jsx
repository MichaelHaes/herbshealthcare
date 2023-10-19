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

const Navbar = () => {
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
        <a href='/'>
          <Box
          component='img'
          sx={{
            width: '85px',
            marginTop:'10px'
          }}
          src={Logo}
        />
        </a>
        <Grid
          container
          direction="row"
          justifyContent="right"
          sx={{ width:'100%'}}
        >
        <ThemeProvider theme={theme}>
            <CssBaseline />
              <Button href="#" sx={{color:'white', fontSize:'25px', marginTop:'5px',
              '&:hover': {
                fontWeight:'bolder'
              },
            }}>All Plants</Button>
              <Button href="/login" sx={{color:'white', fontSize:'25px', marginTop:'5px',
              '&:hover': {
                fontWeight:'bolder'
              },}}>Login</Button>
          </ThemeProvider>
        </Grid>
          {/* <ThemeProvider theme={theme}>
            <CssBaseline />
              <Button href="/login" sx={{color:'white', fontSize:'25px', marginTop:'5px'}}>Login</Button>
          </ThemeProvider> */}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar