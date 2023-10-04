import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../herbscare_logo.png';
import Button from '@mui/material/Button';

const pages = ['Product', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Index = () => {
  return (
    <AppBar color='transparent' id='navbar'>
      <Toolbar sx={{ height: 100 }}>
        <Box
          component='img'
          sx={{
            width: 75,
          }}
          src={Logo}
        />
        <Box>
          <Button href="#text-buttons" sx={{color:'white'}}>Link</Button>
          <Button href="#text-buttons" sx={{color:'white'}}></Button>
          <Button href="#text-buttons" sx={{color:'white'}}>All Plants</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Index