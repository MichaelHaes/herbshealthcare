import { Container } from '@mui/system'
import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import axios from 'axios'
import { Button, linearProgressClasses } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Logo from '../../Assets/herbscare_logo.png'
import { createTheme, ThemeProvider, MuiCssBaseline } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Jaldi from '../../Font/Jaldi-Regular.ttf';
import background from '../../Assets/LP_background.png'
import Paper from '@mui/material/Paper';

export const WaterReservoir = () => {
  const [user, setUser] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(1)

  useEffect(() => {
    axios.get(`http://localhost:5000/isLoggedIn`, {
      withCredentials: true
    })
      .then((res) => {
        setIsLoggedIn(res.data)
        console.log(isLoggedIn)
        if(isLoggedIn === 0) window.location.href = '/'
      });

    axios.get(`http://localhost:5000/dashboard`, {
      withCredentials: true
    })
      .then((res) => {
        const fetchedUsers = res.data;
        setUser(fetchedUsers);
      });
  }, []);

  const theme = createTheme({
    typography: {
      fontFamily: 'BalooBhaijaan',
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
      backgroundColor: '#C6D8C5',
      height: '100vh',
      background: `url(${background})`,
      backgroundSize: 'cover',
    }}>
      <div>
      <Navbar auth={isLoggedIn}/>
        <Container>
          <Grid container spacing={5} sx={{
            marginTop: '10vh',
            flexDirection: 'column',
            alignContent: 'center',
            marginTop: '-2vh',
            color: 'black'
          }}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Box
                sx={{
                  marginTop: "70px",
                  fontFamily: 'Jaldi',
                  fontSize: '80px',
                  height: '100px',
                  color: 'white',
                  textAlign: 'center'
                }}
              >
                Water Level In Water Reservoirs
              </Box>
            </ThemeProvider>
          </Grid>
          <Grid sx={{
            position: 'absolute',
            marginTop: '-80px',
            marginLeft: '-120px',
            top: '50%',
            left: '50%',
            transform: 'translate (-50%,-50%)',
            width: '250px',
            height: '400px',
            border: '6px solid #fff',
            borderRadius: '30px',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
            background: '#D5F4FD',
            backgroundRepeat: 'repeat-x',
            borderColor: 'black',
            animation: 'animate 10s linear infinite',
            boxShadow: '0 10px 15px rgba(0,0,0,1)',
          }}>
          </Grid>
          <Grid sx={{
            position: 'absolute',
            marginTop: '-80px',
            marginLeft: '130px',
            top: '50%',
            left: '50%',
            transform: 'translate (-50%,-50%)',
            width: '20px',
            height: '0px',
            border: '5px solid #fff',
            borderColor: 'Green',
            borderLeft: 'transparent',
            borderRight: 'transparent',
            borderBottom: 'transparent',
            fontSize: '30px'
          }}>
            <Grid sx={{
              position: 'absolute',
              marginTop: '-25px',
              marginLeft: '20px',
              top: '50%',
              left: '50%',
              color: 'white'
            }}>
              100%
            </Grid>
          </Grid>
          <Grid sx={{
            position: 'absolute',
            marginTop: '20px',
            marginLeft: '130px',
            top: '50%',
            left: '50%',
            transform: 'translate (-50%,-50%)',
            width: '20px',
            height: '0px',
            border: '5px solid #fff',
            borderColor: 'Yellow',
            borderLeft: 'transparent',
            borderRight: 'transparent',
            borderBottom: 'transparent',
            fontSize: '30px'
          }}>
            <Grid sx={{
              position: 'absolute',
              marginTop: '-25px',
              marginLeft: '20px',
              top: '50%',
              left: '50%',
              color: 'white'
            }}>
              75%
            </Grid>
          </Grid>
          <Grid sx={{
            position: 'absolute',
            marginTop: '120px',
            marginLeft: '130px',
            top: '50%',
            left: '50%',
            transform: 'translate (-50%,-50%)',
            width: '20px',
            height: '0px',
            border: '5px solid #fff',
            borderColor: 'Orange',
            borderLeft: 'transparent',
            borderRight: 'transparent',
            borderBottom: 'transparent',
            fontSize: '30px'
          }}>
            <Grid sx={{
              position: 'absolute',
              marginTop: '-25px',
              marginLeft: '20px',
              top: '50%',
              left: '50%',
              color: 'white'
            }}>
              50%
            </Grid>
          </Grid>
          <Grid sx={{
            position: 'absolute',
            marginTop: '210px',
            marginLeft: '130px',
            top: '50%',
            left: '50%',
            transform: 'translate (-50%,-50%)',
            width: '20px',
            height: '0px',
            border: '5px solid #fff',
            borderColor: 'Red',
            borderLeft: 'transparent',
            borderRight: 'transparent',
            borderBottom: 'transparent',
            fontSize: '30px'
          }}>
            <Grid sx={{
              position: 'absolute',
              marginTop: '-25px',
              marginLeft: '20px',
              top: '50%',
              left: '50%',
              color: 'white'
            }}>
              25%
            </Grid>
          </Grid>
          <Grid sx={{
            position: 'absolute',
            marginTop: '300px',
            marginLeft: '130px',
            top: '50%',
            left: '50%',
            transform: 'translate (-50%,-50%)',
            width: '20px',
            height: '0px',
            border: '5px solid #fff',
            borderColor: 'Black',
            borderLeft: 'transparent',
            borderRight: 'transparent',
            borderBottom: 'transparent',
            fontSize: '30px'
          }}>
            <Grid sx={{
              position: 'absolute',
              marginTop: '-25px',
              marginLeft: '20px',
              top: '50%',
              left: '50%',
              color: 'white'
            }}>
              0%
            </Grid>
          </Grid>
        </Container>
      </div>
    </Box>
  )
}
