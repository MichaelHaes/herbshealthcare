import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, Grid, TextField} from '@mui/material'
import Navbar from '../Navbar'
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
  const [isLoggedIn, setIsLoggedIn] = useState(1)

  useEffect(() => {
    axios.get(`http://localhost:5000/isLoggedIn`, {
      withCredentials: true
    })
      .then((res) => {
        setIsLoggedIn(res.data)
        console.log(isLoggedIn)
        if (isLoggedIn === 0) window.location.href = '/'
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
      <Navbar auth={isLoggedIn} />
      <Container>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}>
          <Card
            sx={{
              padding: 3,
              width: '75%',
              height: '50%',
              alignItems: 'center',
            }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Jaldi', fontSize: '32px' }}>
              User Profile
            </Typography>
            <CardContent
              sx={{
                mx: 5
              }}
            >
              <Typography variant="body2" color="text.secondary">
                <Grid container spacing={2} sx={{ color: 'black' }}>
                  <Grid item xs={6} md={4}>
                    <Typography sx={{ fontFamily: 'Jaldi', fontSize: '22px' }}>Name</Typography>
                  </Grid>
                  <Grid item xs={6} md={8}>
                    <TextField id="name" value={user.name} variant="standard" fullWidth/>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography sx={{ fontFamily: 'Jaldi', fontSize: '22px' }}>Email</Typography>
                  </Grid>
                  <Grid item xs={6} md={8}>
                    <TextField id="name" value={user.email} variant="standard" fullWidth/>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography sx={{ fontFamily: 'Jaldi', fontSize: '22px' }}>Password</Typography>
                  </Grid>
                  <Grid item xs={6} md={8}>
                    <TextField id="name" value='---' variant="standard" type='password' fullWidth/>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography sx={{ fontFamily: 'Jaldi', fontSize: '22px' }}>Created At</Typography>
                  </Grid>
                  <Grid item xs={6} md={8}>
                    <Typography sx={{ fontFamily: 'Jaldi', fontSize: '22px' }}>: {user.createdAt}</Typography>
                  </Grid>
                </Grid>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ fontFamily: 'Jaldi', fontSize: '20px' }}>Update</Button>
              <Button size="small" sx={{ fontFamily: 'Jaldi', fontSize: '20px' }}>Delete</Button>
            </CardActions>
          </Card>
        </Box>
      </Container>
    </Box>
  )
}

