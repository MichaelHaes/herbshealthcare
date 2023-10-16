import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Logo from '../../Assets/white_logo.png'
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider, MuiCssBaseline } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import BalooBhaijaan from '../../Font/BalooBhaijaan.ttf'
import Paper from '@mui/material/Paper';
import background from '../../Assets/landingPage_bg.png'

const Landing = () => {
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
    <Container sx={{
      height:'607px',
      background: `url(${background})`,
      backgroundSize: 'cover',
      marginLeft:'0px',
      maxWidth:'100%'
    }}>
      <Grid container spacing={5} sx={{marginTop : "0px"}}>
        <Grid item xs={8} >
          <Box>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Box
                sx={{
                  fontFamily: 'BalooBhaijaan',
                  fontSize: '120px',
                  height: '100px',
                  color: 'white',
                  marginLeft: '30px',
                  marginTop: '40px'
                }}
              >
                Herbs Care
              </Box>
              <Box
                sx={{
                  fontFamily: 'BalooBhaijaan',
                  fontSize: '30px',
                  marginLeft: '30px',
                  marginTop: '30px',
                  color: 'white',
                }}
              >
                An Innovative Blend of Nature and Technology
              </Box>
            </ThemeProvider>
              <Typography variant='body1' align='justify'
              sx={{
                  fontSize: '20px',
                  marginLeft: '30px',
                  marginTop: '25px',
                  color: 'white',
                }}>
              Herbal Health Care System is revolutionizing the way we nurture
              our precious herbs that integrates an embedded system,
              auto-watering feature, and advanced LED light control to create
              the ultimate environment for thriving herbs and optimal health benefits.
              </Typography>
          </Box>
        </Grid>
        <Grid item xs={4} >
          <Box
            component='img'
            sx={{
              width: '100%',
            }}
            src={Logo}
          />
        </Grid>
        <Box sx={{ display: 'flex', gap: 3, marginLeft: '50px'}}>
          <Button variant="contained" size='large'
            sx={{
              backgroundColor: '#8BB19B',
              '&:hover': {
                backgroundColor: '#81A38F',
              },
              color: '#121C16'
            }}
          >
            Get started for free
          </Button>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, marginLeft: '30px'}}>
          <Button href='#section2' variant="contained" size='large'
              sx={{
                backgroundColor: '#8BB19B',
                '&:hover': {
                  backgroundColor: '#81A38F',
                },
                color: '#121C16'
              }}
            >
              Read more about us
            </Button>
            <Button href='#section3' variant="contained" size='large'
              sx={{
                backgroundColor: '#8BB19B',
                '&:hover': {
                  backgroundColor: '#81A38F',
                },
                color: '#121C16'
              }}
            >
              Check out our technology!
            </Button>
          </Box>
        </Box>
      </Grid>
    </Container>
  )
}

export default Landing