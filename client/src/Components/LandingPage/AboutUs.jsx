import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { Button, ButtonGroup } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { createTheme, ThemeProvider, MuiCssBaseline } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Jaldi from '../../Font/Jaldi-Regular.ttf';
import Box from '@mui/material/Box';
import EmbeddedSystem from '../../Assets/embeddedSystem.png';

const AboutUs = () => {
    const theme = createTheme({
        typography: {
          fontFamily: 'Jaldi',
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: `
              @font-face {
                font-family: 'Jaldi';
                src: url(${Jaldi});
              }
            `,
          },
        },
      });

    const desc = [
        'At the heart of this herbal oasis lies a sophisticated embedded system. Equipped with sensors and processors, it continuously monitors the vital signs of your herbs. From soil moisture levels to temperature and humidity, the system keeps a watchful eye on the well-being of your green companions.',
        'Say goodbye to the hassle of manual watering! The Herbal Health Care System takes care of hydration automatically. When the soil moisture drops below the ideal level, a precision pump springs into action, delivering just the right amount of water to keep your herbs flourishing. No more guesswork, no more overwatering or underhydration just perfectly balanced moisture for thriving herbs',
        'Harness the power of light with precision. Our LED light control feature allows you to tailor the lighting conditions to the specific needs of your herbs. Whether it`s promoting growth during the vegetative stage or encouraging flowering and fruiting, you have complete control. Mimic natural sunlight with ease, ensuring your herbs receive the perfect amount of illumination, day or night.',
        'Not only does the Herbal Health Care System enhance the vitality of your herbs, but it also boosts your overall well-being. Fresh, organically grown herbs are a rich source of essential nutrients and antioxidants. With this system, you can effortlessly cultivate herbs that elevate your health, providing you with the freshest ingredients for your culinary creations and herbal remedies.'
    ]
    const [button, setButton] = useState('0')

    const handleButton = (e) => {
        setButton(e.currentTarget.id)
    }

    return (
        <Container sx={{
            height: '100vh',
            paddingTop:'5vh'
        }}>
            <Grid sx={{
                display:'flex',
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                <Grid sx={{
                    display:'flex',
                    flexDirection:'column',
                }}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <Typography sx={{
                            fontWeight:'bold',
                            fontSize:'6vmax',
                            display:'flex',
                            justifyContent:'center'
                            }}>
                            Herbs Care
                        </Typography>
                    </ThemeProvider>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <Typography sx={{
                            fontSize:'1.7vmax',
                            display:'flex',
                            justifyContent:'center',
                            textAlign:'center',
                            flexDirection:'column'
                        }}>
                            Herbs Health Care System is revolutionizing the way we nurture our 
                            precious herbs that integrates an embedded system, 
                            auto-watering feature, and advanced LED light control to 
                            create the ultimate environment for thriving herbs and 
                            optimal health benefits.
                        </Typography>
                    </ThemeProvider>
                    <Grid sx={{
                        display:'flex',
                        flexDirection:'column'
                        }}>
                        <Box sx={{
                            paddingTop: '10vh',
                            width: '15vw',
                            margin: 'auto',
                            }}>
                            <img src={EmbeddedSystem} alt="Embedded System" style={{ width: '100%', height: 'auto' }} />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            {/* <Grid sx={{
                paddingTop:'40px',
            }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Typography variant='h1' sx={{}}>
                    Herbs Care
                </Typography>
            </ThemeProvider>
                <ButtonGroup variant="text" sx={{
                    width: '100%',
                    justifyContent: 'space-between',
                    paddingTop:'20px',
                    height:'100px'
                }}>
                    <Button sx={{
                            fontFamily: 'BalooBhaijaan',
                            backgroundColor: '#9FB99D',
                            borderRadius:'10px',
                            fontSize:'18px',
                            fontWeight:'bold',
                            '&:hover': {
                                backgroundColor: '#017414',
                                color: '#FFFFFF'
                            },
                            color: '#000000'
                            }}
                        id='0' fullWidth color='inherit' onClick={handleButton} variant={button === '0' ? 'contained' : 'text'}
                        className="custom-button"
                    >Embedded Intelligence</Button>
                    <Button sx={{
                            fontFamily: 'BalooBhaijaan',
                            backgroundColor: '#9FB99D',
                            borderRadius:'10px',
                            fontSize:'18px',
                            fontWeight:'bold',
                            '&:hover': {
                                backgroundColor: '#017414',
                                color: '#FFFFFF'
                            },
                            color: '#000000'
                            }}
                        id='1' fullWidth color='inherit' onClick={handleButton} variant={button === '1' ? 'contained' : 'text'}
                    >Auto Watering System</Button>
                    <Button sx={{
                            fontFamily: 'BalooBhaijaan',
                            backgroundColor: '#9FB99D',
                            borderRadius:'10px',
                            fontSize:'18px',
                            fontWeight:'bold',
                            '&:hover': {
                                backgroundColor: '#017414',
                                color: '#FFFFFF'
                            },
                            color: '#000000'
                            }}
                        id='2' fullWidth color='inherit' onClick={handleButton} variant={button === '2' ? 'contained' : 'text'}
                    >LED Light Control</Button>
                    <Button sx={{
                            fontFamily: 'BalooBhaijaan',
                            backgroundColor: '#9FB99D',
                            borderRadius:'10px',
                            fontSize:'18px',
                            fontWeight:'bold',
                            '&:hover': {
                                backgroundColor: '#017414',
                                color: '#FFFFFF'
                            },
                            color: '#000000'
                            }}
                        id='3' fullWidth color='inherit' onClick={handleButton} variant={button === '3' ? 'contained' : 'text'}
                    >Health and Wellness</Button>
                </ButtonGroup>
                <Card raised sx={{
                    margin: '5rem',
                    height: '50%',
                    paddingX:'4rem',
                    fontSize: '28px',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    textAlign: 'justify',
                    color: '#D7E6DD',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    {desc[button]}
                </Card>
            </Grid> */}
        </Container>
    )
}

export default AboutUs