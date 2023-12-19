import * as React from 'react';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, MuiCssBaseline } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Jaldi from '../Font/Jaldi-Regular.ttf'
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
  const logout = () => {
    axios.delete("http://localhost:5000/logout", {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    })
      .then((res) => {
        window.location.href = '/'
      });

  }

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
              {props.auth === 1 && (
                <Box href="/" sx={{
                  color: 'white',
                  fontSize: '25px',
                  fontFamily: 'Jaldi',
                  '&:hover': {
                    fontWeight: 'bolder',
                    cursor: 'pointer'
                  },
                }} onClick={() => {
                  window.location.href = '/dashboard';
                }}>
                  Herbs Care.
                </Box>
              )}
              
              {props.auth !== 1 && (
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
                  Herbs Care.
                </Box>
              )}
              {props.auth !== 1 && (
                <Box
                  sx={{
                    color: 'white',
                    fontSize: '25px',
                    fontFamily: 'Jaldi',
                    '&:hover': {
                      fontWeight: 'bolder',
                      cursor: 'Pointer'
                    },
                  }}
                  onClick={() => { window.location.href = '/login' }}>
                  Login
                </Box>
              )}
              {props.auth === 1 && (
                <Box sx={{ display: 'flex', gap: 3 }}>
                  <Box href="/dashboard/plant"
                    sx={{
                      color: 'white',
                      fontSize: '25px',
                      fontFamily: 'Jaldi',
                      '&:hover': {
                        fontWeight: 'bolder',
                        cursor: 'Pointer'
                      },
                    }}
                    onClick={() => { window.location.href = '/dashboard/plants' }}>
                    All Plant
                  </Box>
                  <Box href="/dashboard/profile"
                    sx={{
                      color: 'white',
                      fontSize: '25px',
                      fontFamily: 'Jaldi',
                      '&:hover': {
                        fontWeight: 'bolder',
                        cursor: 'Pointer'
                      },
                    }}
                    onClick={() => { window.location.href = '/dashboard/profile' }}>
                    Profil
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
                    }}
                    onClick={logout}>
                    Log Out
                  </Box>
                </Box>
              )}
            </Box>
          </ThemeProvider>
        </Container>
      </Fade>
    </AppBar>
  );
}

export default Navbar;
