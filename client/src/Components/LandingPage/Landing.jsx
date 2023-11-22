import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider, MuiCssBaseline } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Jaldi from '../../Font/Jaldi-Regular.ttf';
import { Fade } from 'react-reveal';


const Landing = () => {
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
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid container spacing={5} 
        sx={{ 
          marginTop: '10vh', 
          flexDirection: 'column', 
          alignContent: 'center', 
          marginTop: '-2vh' 
        }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <Fade left duration={500}>
            <Typography
              sx={{
                fontFamily: 'Jaldi',
                color: 'white',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                fontSize: '6vmax',
              }}
            >
              This is&nbsp;<b>Herbs Care</b>
            </Typography>
            </Fade>
            <Fade right duration={1000}>
          <Typography
            sx={{
              fontFamily: 'Jaldi',
              color: 'white',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1.7vmax',
              marginTop: '-5vh',
            }}
          >
            An Innovative Blend of&nbsp;<b>Nature</b>&nbsp;and&nbsp;<b>Technology</b>
          </Typography>
          </Fade>
        </ThemeProvider>
          <Box 
            sx={{ 
              display: 'flex', 
              gap: 2, 
              marginTop: '20px', 
              justifyContent: 'center', 
              flexDirection: 'column', 
              marginTop: '10vh' 
            }}>
            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: 'row', 
                gap: 2, 
                justifyContent: 'center' 
              }}>
              <Fade duration={500} delay={1000}>
              <Button href='#section2' onclick='' variant="contained" size='large'
                sx={{
                  fontFamily: 'Jaldi',
                  borderRadius: '10px',
                  fontSize: '1.3rem',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid white',
                  width: '15vw',
                  color: 'white',
                  '&:hover': {
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    transition: 'background-color 1s, color 1s',
                  },
                }}
              >
                About Us
              </Button>
              </Fade>
              <Fade duration={500} delay={1500}>
              <Button href='#section3' variant="contained" size='large'
                sx={{
                  fontFamily: 'Jaldi',
                  borderRadius: '10px',
                  fontSize: '1.3rem',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid white',
                  width: '15vw',
                  color: 'white',
                  '&:hover': {
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    transition: 'background-color 1s, color 1s',
                  },
                }}
              >
                Our Technology
              </Button>
              </Fade>
            </Box>
            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: 'row', 
                gap: 2, 
                justifyContent: 'center' 
              }}>
              <Fade duration={500} delay={2000}>
              <Button variant="contained" size='large'
                sx={{
                  fontFamily: 'Jaldi',
                  backgroundColor: '#000000',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  fontSize: '1.3rem',
                  color: 'white',
                  border: '1px solid white',
                  borderRadius: '10px',
                  width: '31vw',
                  '&:hover': {
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    transition: 'background-color 1s, color 1s',
                  },
                }}
              >
                Get started for&nbsp; <b>Free</b>
              </Button>
              </Fade>
            </Box>
          </Box>
      </Grid>
    </Container>
  );
};

export default Landing;
