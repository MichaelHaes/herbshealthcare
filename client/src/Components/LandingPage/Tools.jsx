import React from 'react'
import { Card, CardContent, CardMedia } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Photo1 from '../../Assets/photo1.png'
import Photo2 from '../../Assets/photo2.png'
import Photo3 from '../../Assets/photo3.png'
import Photo4 from '../../Assets/photo4.jpg'
import Photo5 from '../../Assets/photo5.jpg'
import Photo6 from '../../Assets/photo6.png'
import BalooBhaijaan from '../../Font/BalooBhaijaan.ttf'
import { createTheme, ThemeProvider, MuiCssBaseline } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const Tools = () => {
    const theme = createTheme({
        typography: {
          fontFamily: 'BalooBhaijaan',
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: `
              @font-face {
                font-family: 'BalooBhaijaan';
                src: url(${BalooBhaijaan});
              }
            `,
          },
        },
      });
    return (
        <Container sx={{
        }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Typography variant='h4' sx={{
                    textAlign: 'center',
                    marginBottom: 7,
                    paddingTop: '40px',
                    fontSize: '50px'
                }}>
                    Our Technology
                </Typography>
            </ThemeProvider>
            <Grid container spacing={2}>
                <Grid xs={8} sx={{height:'240px'}}>
                    <Grid sx={{
                        height:'200px',
                        padding: '20px',
                    }}>
                            <ThemeProvider theme={theme}>
                                <CssBaseline />
                                <Typography variant='h4' sx={{
                                    textAlign: 'center',
                                }}>
                                    ESP 32 Microcontroller
                                </Typography>
                            </ThemeProvider>
                            <Typography variant='body1'>
                                <p align = "justify">
                                The ESP32 serves as the brains behind all your equipment, acting as the central hub for tasks like watering plants and
                                monitoring soil moisture levels. It's the powerhouse that stores and executes the code to make it all happen seamlessly.
                                </p>
                            </Typography>
                    </Grid>
                </Grid>
                <Grid xs={4}>
                    <Box
                            component='img'
                            sx={{
                                height: '170px',
                                marginTop: '20px',
                                marginLeft: '60px',
                                transition: '1s',
                                '&:hover': {
                                    height: '195px',
                                    marginTop: '0px',
                                    marginLeft: '40px',
                                }
                            }}
                            src={Photo2}
                        />
                </Grid>
                <Grid xs={4}>
                    <Box
                        component='img'
                        sx={{
                            height: '210px',
                            marginTop: '-10px',
                            marginLeft: '95px',
                            transition: '1s',
                            '&:hover': {
                                height: '240px',
                                marginTop: '-30px',
                                marginLeft: '80px',
                            }
                        }}
                        src={Photo6}
                    />
                </Grid>
                <Grid xs={8} sx={{height:'240px'}}>
                    <Grid sx={{
                        height:'200px',
                        padding: '20px',
                    }}>
                            <ThemeProvider theme={theme}>
                                <CssBaseline />
                                <Typography variant='h4' sx={{
                                    textAlign: 'center',
                                }}>
                                    Soil Moisture Sensor
                                </Typography>
                            </ThemeProvider>
                            <Typography variant='body1'>
                                <p align = "justify">
                                Soil Moisture Sensor, or soil moisture sensor, is an electronic device used to measure the level of humidity or air content in the soil. 
                                These sensors have many applications in agriculture, horticulture, air resource management and environmental monitoring.
                                </p>
                            </Typography>
                    </Grid>
                </Grid>
                <Grid xs={8} sx={{height:'240px'}}>
                    <Grid sx={{
                        height:'200px',
                        padding: '20px',
                    }}>
                            <ThemeProvider theme={theme}>
                                <CssBaseline />
                                <Typography variant='h4' sx={{
                                    textAlign: 'center',
                                }}>
                                    Photoresistor
                                </Typography>
                            </ThemeProvider>
                            <Typography variant='body1'>
                                <p align = "justify">
                                Photoresistors are light-sensitive sensors that change their resistance in response to light intensity.
                                In the dark, the resistance of a photoresistor is very high, typically in the millions of ohms.
                                However, when exposed to light, the resistance of a photoresistor decreases, and the amount of resistance
                                change depends on the intensity of the light given.
                                </p>
                            </Typography>
                    </Grid>
                </Grid>
                <Grid xs={4}>
                    <Box
                        component='img'
                        sx={{
                            height: '170px',
                            marginTop: '20px',
                            marginLeft: '30px',
                            transition: '1s',
                            '&:hover': {
                                height: '195px',
                                marginTop: '0px',
                                marginLeft: '10px',
                            }
                        }}
                        src={Photo1}
                        />
                </Grid>
                <Grid xs={4}>
                    <Box
                        component='img'
                        sx={{
                            height: '200px',
                            marginTop: '0px',
                            marginLeft: '40px',
                            transition: '1s',
                            '&:hover': {
                                height: '227px',
                                marginTop: '-10px',
                                marginLeft: '15px',
                            }
                        }}
                        src={Photo4}
                    />
                </Grid>
                <Grid xs={8} sx={{height:'240px'}}>
                    <Grid sx={{
                        height:'200px',
                        padding: '20px',
                    }}>
                            <ThemeProvider theme={theme}>
                                <CssBaseline />
                                <Typography variant='h4' sx={{
                                    textAlign: 'center',
                                }}>
                                    Water Pump
                                </Typography>
                            </ThemeProvider>
                            <Typography variant='body1'>
                                <p align = "justify">
                                Water pump is a small, lightweight, and portable water pump that is typically used in low-flow applications.
                                Since the small water pump uses small voltage, it could be powered up with battery 5V. By
                                connect tube pipe to the motor outlet, and submerge it in water and power it.
                                </p>
                            </Typography>
                    </Grid>
                </Grid>
                <Grid xs={8} sx={{height:'240px'}}>
                    <Grid sx={{
                        height:'200px',
                        padding: '20px',
                    }}>
                            <ThemeProvider theme={theme}>
                                <CssBaseline />
                                <Typography variant='h4' sx={{
                                    textAlign: 'center',
                                }}>
                                    LED Light
                                </Typography>
                            </ThemeProvider>
                            <Typography variant='body1'>
                                <p align = "justify">
                                A 16-bit LED is used to illuminate plants when they lack sufficient light.
                                When the photoresistor detects a dark environment, the LED will shine just
                                enough to brighten things up. TOLONG DITAMBAH PUHHHHHHHHHHHHHHHHHHHHH, SEPUHHHHHHHHHHHHHHHHHHHHHHHHH
                                TERLALU PENDEK PUHH
                                </p>
                            </Typography>
                    </Grid>
                </Grid>
                <Grid xs={4}>
                    <Box
                        component='img'
                        sx={{
                            height: '200px',
                            marginTop: '0px',
                            marginLeft: '65px',
                            transition: '1s',
                            '&:hover': {
                                height: '237px',
                                marginTop: '-20px',
                                marginLeft: '45px',
                            }
                        }}
                        src={Photo3}
                        />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Tools