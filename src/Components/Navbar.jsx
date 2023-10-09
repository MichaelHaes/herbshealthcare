import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../Assets/herbscare_logo.png';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <AppBar position='' sx={{
      backgroundColor: '#14AE5C',
    }}>
      <Toolbar sx={{ height: 100 }}>
        <Box
          component='img'
          sx={{
            width: 75,
          }}
          src={Logo}
        />
        <Box>
          <Button href="#" sx={{color:'white'}}>Link</Button>
          <Button href="#" sx={{color:'white'}}>Login</Button>
          <Button href="#" sx={{color:'white'}}>All Plants</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar