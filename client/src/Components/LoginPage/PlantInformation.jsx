import React, { useState, useEffect } from 'react'
import NavbarDashboard from './NavbarDashboard'
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Container, Grid, Button } from '@mui/material'

const PlantInformation = () => {
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const [devices, setDevices] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/plantsinformation`)
      .then((res) => {
        console.log(res)
        const devices = res.data;
        setDevices(devices);
      });
  });

  const makePot = () => {
    axios.post(`http://localhost:5000/makepot`)
      .then((res) => {
        console.log(res)
      });
  }

  return (
    <Box>
      <NavbarDashboard />
      <Container>
        <Button onClick={makePot} variant='outlined' sx={{
          marginTop: '10px'
        }}>Add Pot</Button>
        <Grid container spacing={5} sx={{ paddingTop: '80px' }}>
          {devices.map((device) => {
            const createdAt = new Date(device.createdAt);
            const formattedCreatedAt = createdAt.getDate() + ' ' + month[createdAt.getMonth()] + ' ' + createdAt.getFullYear()
            return (
              <Grid item xs={4} display="flex" justifyContent="center" alignItems="center">
                <Card sx={{ width: '500px' }} key={device.device_id} >
                  <CardActionArea href={`/dashboard/plants/${device.device_id}`}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Pot {device.device_id}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        This pot was created at {formattedCreatedAt}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}

export default PlantInformation;