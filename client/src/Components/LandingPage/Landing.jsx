import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Logo from '../../Assets/herbscare_logo.png'
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
      height:'620px',
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
                  marginTop: '40px'
                }}
              >
                Herbs Care
              </Box>
              <Box
                sx={{
                  fontFamily: 'BalooBhaijaan',
                  fontSize: '30px',
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
                  marginTop: '25px',
                  color: 'white',
                }}>
              Herbal Health Care System is revolutionizing the way we nurture
              our precious herbs that integrates an embedded system,
              auto-watering feature, and advanced LED light control to create
              the ultimate environment for thriving herbs and optimal health benefits.
              </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, marginTop:'20px'}}>
          <Button variant="contained" size='large'
            sx={{
              backgroundColor: '#000000',
              display: 'list-item',
              opacity:'50%',
              fontSize:'25px',
              '&:hover': {
                backgroundColor: '#FFFFFF',
                color: '#000000'
              },
              color: '#FFFFFF'
            }}
          >
            Get started for <br></br><b>FREE</b>
          </Button>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2}}>
          <Button href='#section2' variant="contained" size='large'
              sx={{
                backgroundColor: '#000000',
                opacity:'50%',
                borderRadius:'10px',
                fontSize:'20px',
                '&:hover': {
                  backgroundColor: '#FFFFFF',
                  color: '#000000'
                },
                color: '#FFFFFF'
              }}
            >
              Read more about us
            </Button>
            <Button href='#section3' variant="contained" size='large'
              sx={{
                backgroundColor: '#000000',
                opacity:'50%',
                borderRadius:'10px',
                fontSize:'20px',
                width:'400px',
                '&:hover': {
                  backgroundColor: '#FFFFFF',
                  color: '#000000'
                },
                color: '#FFFFFF'
              }}
            >
              Check out our technology!
            </Button>
          </Box>
        </Box>
        </Grid>
        <Grid item xs={4} >
          <Box
            component='img'
            sx={{
              width: '120%',
              marginTop:'30px',
              marginLeft:'30px'
            }}
            src={Logo}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Landing