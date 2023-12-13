import React, { useState, useEffect } from 'react'
import NavbarDashboard from './NavbarDashboard'
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack, Box, CardActionArea, Container, Grid, Button } from '@mui/material'
import { useSocket } from '../../SocketContext';
import background from '../../Assets/LP_background.png'
import Jaldi from '../../Font/Jaldi-Regular.ttf';

const PlantInformation = () => {
  const socket = useSocket();
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const [devices, setDevices] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/plantsinformation`, {
      withCredentials: true
    })
      .then((res) => {
        console.log(res)
        const devices = res.data;
        setDevices(devices);
      });
  }, []);

  useEffect(() => {
    socket.on('newPot', (updatedData) => {
      setDevices(updatedData);
    });

    return () => {
      socket.off('newPot');
    };
  }, [socket]);

  const makePot = () => {
    socket.emit('addPot', 'new pot is added')

    axios.post(`http://localhost:5000/makepot`, {}, {
      withCredentials: true
    })
      .then((res) => {
        console.log(res)
      });
  }

  return (
    <Box sx={{
      backgroundColor: '#C6D8C5',
      height: '100vh',
      background: `url(${background})`,
      backgroundSize: 'cover',
    }}>
      <NavbarDashboard />
      <Container>
        <Grid display='flex' justifyContent='center'>
          <Button onClick={makePot} variant="contained" sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '100px',
            fontFamily: 'Jaldi',
            width: '50%',
            backgroundColor: '#E8E8E8',
            width: '66%',
            color: '#00480C',
            '&:hover': {
              backgroundColor: '#00480C',
              color: '#FFFFFF'
            },
          }}>Add Pot</Button>
        </Grid>
        <Stack
          marginTop={'30px'}
          spacing={{ md: 2, lg: 3 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
          justifyContent='center'
        >
          {devices.map((device) => {
            const createdAt = new Date(device.createdAt);
            const formattedCreatedAt = createdAt.getDate() + ' ' + month[createdAt.getMonth()] + ' ' + createdAt.getFullYear()
            return (
              <Card key={device.device_id} >
                <CardActionArea href={`/dashboard/plants/${device.device_id}`}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Pot {device.pot_number}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      This pot was created at {formattedCreatedAt}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            )
          })}
        </Stack>
      </Container>
    </Box>
  )
}

export default PlantInformation;