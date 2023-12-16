import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, Grid, TextField } from '@mui/material'
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
  const [isUpdating, setIsUpdating] = useState(false)
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

  const handleChange = event => {
    const { name, value } = event.target; // Destructure name and value
    setUser({
      ...user,
      [name]: value,
    });
  }

  const handleSubmit = event => {
    console.log(user)
  }

  const dateObject = new Date(user.createdAt)

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const year = dateObject.getUTCFullYear();
  const month = dateObject.getUTCMonth();
  const day = dateObject.getUTCDate().toString().padStart(2, "0");

  const formattedDate = ` ${day} ${monthNames[month]} ${year} `;

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
                    <TextField id="name" name="name" value={user.name} variant="standard" fullWidth onChange={handleChange} />
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography sx={{ fontFamily: 'Jaldi', fontSize: '22px' }}>Email</Typography>
                  </Grid>
                  <Grid item xs={6} md={8}>
                    <TextField name="email" value={user.email} variant="standard" fullWidth onChange={handleChange} />
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography sx={{ fontFamily: 'Jaldi', fontSize: '22px' }}>Password</Typography>
                  </Grid>
                  <Grid item xs={6} md={8}>
                    <TextField name="password" value='---' variant="standard" type='password' fullWidth onChange={handleChange} />
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography sx={{ fontFamily: 'Jaldi', fontSize: '22px' }}>Created At</Typography>
                  </Grid>
                  <Grid item xs={6} md={8}>
                    <Typography sx={{ fontFamily: 'Jaldi', fontSize: '22px' }}>: {formattedDate}</Typography>
                  </Grid>
                </Grid>
              </Typography>
            </CardContent>
            <CardActions>

              {isUpdating && (
                <Box>
                  <Button size="small" sx={{ fontFamily: 'Jaldi', fontSize: '20px' }} onClick={handleSubmit}>Confirm</Button>
                  <Button size="small" sx={{ fontFamily: 'Jaldi', fontSize: '20px' }} onClick={() => setIsUpdating(false)}>Cancel</Button>
                </Box>
              )}
              {!isUpdating && (
                <Box>
                  <Button size="small" sx={{ fontFamily: 'Jaldi', fontSize: '20px' }} onClick={() => setIsUpdating(true)}>Update</Button>
                  <Button size="small" sx={{ fontFamily: 'Jaldi', fontSize: '20px' }}>Delete</Button>
                </Box>
              )}
            </CardActions>
          </Card>
        </Box>
      </Container>
    </Box>
  )
}

