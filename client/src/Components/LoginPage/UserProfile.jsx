import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box } from '@mui/material'
import NavbarDashboard from './NavbarDashboard'
import Container from '@mui/material/Container'
import background from '../../Assets/LP_background.png'
import Jaldi from '../../Font/Jaldi-Regular.ttf';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export const UserProfile = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5000/isLoggedIn`, {
      withCredentials: true
    })
      .then((res) => {
        if (res.data === 0) window.location.href = '/'
      });
    axios.get('http://localhost:5000/userinformation', {
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        setUser(res.data);
      });
  }, []);
  console.log(user)
  return (
    <Box sx={{
      backgroundColor: '#C6D8C5',
      height: '100vh',
      background: `url(${background})`,
      backgroundSize: 'cover',
    }}>
      <NavbarDashboard />
      <Container>
        <Box sx={{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          }}>
          <Card sx={{ 
            maxWidth: 345, 
            mx: 'auto',
            bgcolor: 'white',
            width: '500px'
            }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Jaldi', fontSize: '32px'}}>
                User Profile
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Typography sx={{ color: 'black', fontFamily: 'Jaldi', fontSize: '22px'}}>Name: {user.name}</Typography>
                <Typography sx={{ color: 'black', fontFamily: 'Jaldi', fontSize: '22px'}}>Email: {user.email}</Typography>
                <Typography sx={{ color: 'black', fontFamily: 'Jaldi', fontSize: '22px'}}>Created At: {user.createdAt}</Typography>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ fontFamily: 'Jaldi', fontSize: '20px'}}>Share</Button>
              <Button size="small" sx={{ fontFamily: 'Jaldi', fontSize: '20px'}}>Learn More</Button>
            </CardActions>
          </Card>
          </Box>
      </Container>
    </Box>
  )
}

