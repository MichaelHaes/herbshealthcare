import React from 'react'
import { Card, CardContent, CardMedia } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Photo1 from '../../Assets/photo1.jpg'
import Photo2 from '../../Assets/photo2.jpg'
import Photo3 from '../../Assets/photo3.jpg'
import Photo4 from '../../Assets/photo4.jpg'

const Tools = () => {
    return (
        <Container sx={{
            marginTop: 10,
            height: '100vh'
        }}>
            <Typography variant='h4' sx={{
                textAlign: 'center',
                marginBottom: 5
            }}>
                Technology
            </Typography>
            <Grid container spacing={5}>
                <Grid item xs={8} >
                    <Card sx={{
                        backgroundColor: '#8DB69E'
                    }}>
                        <CardContent>
                            <Typography variant='h4' sx={{ marginBottom: '15px' }}>
                                Photoresistor
                            </Typography>
                            <Typography variant='body1'>
                                Photoresistors are light-sensitive sensors that change their resistance in response to light intensity.
                                In the dark, the resistance of a photoresistor is very high, typically in the millions of ohms.
                                However, when exposed to light, the resistance of a photoresistor decreases, and the amount of resistance
                                change depends on the intensity of the light given.
                            </Typography>
                        </CardContent>
                    </Card>

                </Grid>
                <Grid item xs={4} >
                    <Box
                        position='relative'
                        component='img'
                        sx={{
                            zIndex: -1,
                            right: 200,
                            bottom: 30,
                            width: '150%',
                        }}
                        src={Photo1}
                    />
                </Grid>
                <Grid item xs={4} >
                    <Box
                        position='relative'
                        component='img'
                        sx={{
                            zIndex: -1,
                            left: 20,
                            bottom: 30,
                            width: '125%',
                        }}
                        src={Photo2}
                    />
                </Grid>
                <Grid item xs={8} >
                    <Card sx={{
                        backgroundColor: '#8DB69E'
                    }}>
                        <CardContent>
                            <Typography variant='h4' sx={{ marginBottom: '15px' }}>
                                ESP 32 Microcontroller
                            </Typography>
                            <Typography variant='body1'>
                                The ESP32 serves as the brains behind all your equipment, acting as the central hub for tasks like watering plants and
                                monitoring soil moisture levels. It's the powerhouse that stores and executes the code to make it all happen seamlessly.
                            </Typography>
                        </CardContent>
                    </Card>

                </Grid>
                <Grid item xs={8} >
                    <Card sx={{
                        backgroundColor: '#8DB69E'
                    }}>
                        <CardContent>
                            <Typography variant='h4' sx={{ marginBottom: '15px' }}>
                                LED 16-bit
                            </Typography>
                            <Typography variant='body1'>
                                A 16-bit LED is used to illuminate plants when they lack sufficient light.
                                When the photoresistor detects a dark environment, the LED will shine just
                                enough to brighten things up.
                            </Typography>
                        </CardContent>
                    </Card>

                </Grid>
                <Grid item xs={4} >
                    <Box
                        position='relative'
                        component='img'
                        sx={{
                            zIndex: -1,
                            right: 100,
                            bottom: 70,
                            width: '110%',
                        }}
                        src={Photo3}
                    />
                </Grid>
                <Grid item xs={4} >
                    <Box
                        position='relative'
                        component='img'
                        sx={{
                            zIndex: -1,
                            left: 20,
                            bottom: 30,
                            width: '125%',
                        }}
                        src={Photo4}
                    />
                </Grid>
                <Grid item xs={8} >
                    <Card sx={{
                        backgroundColor: '#8DB69E'
                    }}>
                        <CardContent>
                            <Typography variant='h4' sx={{ marginBottom: '15px' }}>
                                Photoresistor
                            </Typography>
                            <Typography variant='body1'>
                                Photoresistors are light-sensitive sensors that change their resistance in response to light intensity.
                                In the dark, the resistance of a photoresistor is very high, typically in the millions of ohms.
                                However, when exposed to light, the resistance of a photoresistor decreases, and the amount of resistance
                                change depends on the intensity of the light given.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Tools