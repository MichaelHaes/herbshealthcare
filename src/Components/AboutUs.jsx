import React from 'react'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import SvgIcon from '@mui/material/SvgIcon'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import { Grass, WaterDrop, Lightbulb, Spa } from '@mui/icons-material';

const AboutUs = () => {
    return (
        <Container sx={{
            height: '100vh',
            textAlign: 'justify'
        }}>
            <Typography variant='h4' sx={{
                textAlign: 'center',
                marginBottom: 2 
            }}>
                About Us
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={6} >
                    <Paper
                        sx={{
                            minHeight: 250,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: '#8DB69E',
                            padding: 4
                        }}>
                        <SvgIcon fontSize='large' component={Grass} sx={{ marginRight: 2 }} />
                        <Typography variant='h4'>
                            Embedded Intelligence
                        </Typography>
                        <Typography variant='body'>
                            At the heart of this herbal oasis lies a sophisticated embedded system.
                            Equipped with sensors and processors, it <b> continuously monitors the vital signs of your herbs. </b>
                            From soil moisture levels to temperature and humidity, the system keeps a watchful eye on
                            the well-being of your green companions.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6} >
                    <Paper
                        sx={{
                            minHeight: 250,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: '#8DB69E',
                            padding: 4
                        }}>
                        <SvgIcon fontSize='large' component={WaterDrop} sx={{ marginRight: 2 }} />
                        <Typography variant='h4'>
                            Auto-Watering System
                        </Typography>
                        <Typography variant='body'>
                            Say goodbye to the hassle of manual watering! <b> The Herbal Health Care System takes
                            care of hydration automatically</b>. When the soil moisture drops below the ideal level,
                            a precision pump springs into action, delivering just the right amount of water to
                            keep your herbs flourishing. No more guesswork, no more overwatering or underhydration—just
                            perfectly balanced moisture for thriving herbs.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6} >
                    <Paper
                        sx={{
                            minHeight: 250,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: '#8DB69E',
                            padding: 4
                        }}>
                        <SvgIcon fontSize='large' component={Lightbulb} sx={{ marginRight: 2 }} />
                        <Typography variant='h4'>
                            LED Light Control
                        </Typography>
                        <Typography variant='body'>
                            Harness the power of light with precision. Our <b>LED light control feature allows you to tailor
                            the lighting conditions to the specific needs of your herbs</b>. Whether it's promoting growth
                            during the vegetative stage or encouraging flowering and fruiting, you have complete control.
                            Mimic natural sunlight with ease, ensuring your herbs receive the perfect amount of illumination,
                            day or night.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6} >
                    <Paper
                        sx={{
                            minHeight: 250,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: '#8DB69E',
                            padding: 4
                        }}>
                        <SvgIcon fontSize='large' component={Spa} sx={{ marginRight: 2 }} />
                        <Typography variant='h4'>
                            Health and Wellness
                        </Typography>
                        <Typography variant='body'>
                            Not only does the Herbal Health Care System enhance the vitality of your herbs,
                            but it also boosts your overall well-being. Fresh, organically grown herbs are a rich
                            source of essential nutrients and antioxidants. <b>With this system, you can effortlessly
                            cultivate herbs that elevate your health, providing you with the freshest ingredients for
                            your culinary creations and herbal remedies.</b>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>




        </Container>
    )
}

export default AboutUs