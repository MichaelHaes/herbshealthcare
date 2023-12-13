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
        diplay: 'flex',
        justifyContent: 'center',
        alignItems:  'center'
    }}>
      <NavbarDashboard/>
      <Container sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
          <Card sx={{
            width: 500,
            height: 300,
            display: 'flex',
            flexDirection: 'column',
          }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <Box sx={{
                   textAlign: 'center',
                   fontFamily: 'Jaldi',
                   fontWeight: 'bold',
                    fontSize: '30px'
                }}>
                  Profile
                </Box>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Box sx={{
                  display:'flex',
                  flexDirection:'column',
                  fontFamily: 'Jaldi',
                  fontSize: 20,
                  marginTop: 6
                }}>
                  <span>Nama  : </span>
                  <span>Email : </span>
                </Box>
              </Typography>
            </CardContent>
            <CardActions sx={{
              marginTop: 7
            }}>
              <Button size="small" sx={{
                fontFamily: 'Jaldi',
                fontSize: 20
              }}>Edit</Button>
              <Button size="small" sx={{
                color:'red',
                fontFamily: 'Jaldi',
                fontSize: 20
              }}>Delete Profile</Button>
            </CardActions>
          </Card>
      </Container>
    </Box>
  )
}

