import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Logo from '../herbscare_logo.png'

const Homepage = () => {
  return (
    <Container sx={{ marginTop: '150px' }}>
      <Grid container spacing={5}>
        <Grid item xs={7} >
          <Box>
            <Typography variant='h3'>
              Herbs Healthcare
            </Typography>
            <Typography align='justify'>
              Introducing the Herbal Health Care System: An Innovative Blend of Nature and Technology
              In a world where wellness meets cutting-edge technology, the Herbal Health Care System
              is revolutionizing the way we nurture our precious herbs. This ingenious system seamlessly 
              integrates an embedded system, auto-watering feature, and advanced LED light control to 
              create the ultimate environment for thriving herbs and optimal health benefits.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={5} >
          <Box
            component='img'
            sx={{
              width: '75%',
            }}
            src={Logo}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Homepage