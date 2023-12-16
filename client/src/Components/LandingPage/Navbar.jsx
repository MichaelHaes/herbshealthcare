import * as React from 'react';
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

const Navbar = (props) => {
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
    <AppBar position='absolute' sx={{
      background: 'none',
      boxShadow: 'none',
      paddingLeft: '0'
    }}>
      <Fade>
        <Container position='relative' sx={{ height: '8vh', display: 'flex', alignItems: 'center' }}>
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
              }} onClick={() => {
                window.location.href = '/';
              }}>
                Herbs Care. {props.auth}
              </Box>
              <Box sx={{
                color: 'white',
                fontSize: '25px',
                fontFamily: 'Jaldi',
                '&:hover': {
                  fontWeight: 'bolder',
                  cursor: 'Pointer'
                },
              }} onClick={() => {
                window.location.href = '/login';
              }}>
                Login
              </Box>
            </Box>
          </ThemeProvider>
        </Container>
      </Fade>
    </AppBar>
  );
}

export default Navbar;
