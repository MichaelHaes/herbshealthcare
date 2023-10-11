import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Logo from '../../Assets/herbscare_logo.png'
import Button from '@mui/material/Button'

const Landing = () => {
  return (
    <Container sx={{
      marginTop: '50px',
      height: '100vh'
    }}>
      <Grid container spacing={5}>
        <Grid item xs={8} >
          <Box>
            <Typography variant='h1'>
              Herbs Healthcare
            </Typography>
            <Typography variant='h4'>
              Introducing the Herbal Health Care System: An Innovative Blend of Nature and Technology
            </Typography>
            <br />
            <Typography variant='body1' align='justify'>
              In a world where wellness meets cutting-edge technology, the Herbal Health Care System
              is revolutionizing the way we nurture our precious herbs. This ingenious system seamlessly
              integrates an embedded system, auto-watering feature, and advanced LED light control to
              create the ultimate environment for thriving herbs and optimal health benefits.
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
        <Box sx={{ display: 'flex', gap: 3 }}>

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
      </Grid>
    </Container>
  )
}

export default Landing