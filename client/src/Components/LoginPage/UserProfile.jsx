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
    // axios.get('http://localhost:5000/userinformation', {
    //   withCredentials: true,
    // })
    // .then((res) => {
    //   console.log(res);
    //   setUser(res.data);
    // });
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
        <Typography>Name: {user.name}</Typography>
        <Typography>Email: {user.email}</Typography>
        <Typography>Created At: {user.createdAt}</Typography>
      </Container>
    </Box>
  )
}

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        component="img"
        alt="john"
        height="140"
        image=""
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
