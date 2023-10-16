import React from 'react'
import AboutUs from './LandingPage/AboutUs';
import Tools from './LandingPage/Tools';
import Landing from './LandingPage/Landing'
import Box from '@mui/material/Box'
import background from '../Assets/landingPage_bg.png'

const Homepage = () => {
  return (
    <Box>
      <Box id='section1' sx={{
        background: `url(${background})`,
        backgroundSize: 'cover',
      }}>
        <Landing />
      </Box>
      <Box id='section2'sx={{
        backgroundColor: '#C6D8C5',
      }}>
        <AboutUs />
      </Box>
      {/* <Box id='section3'>
        <Tools />
      </Box> */}
    </Box>
  )
}

export default Homepage