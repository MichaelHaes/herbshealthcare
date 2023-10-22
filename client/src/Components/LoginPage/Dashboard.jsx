import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavbarDashboard from './NavbarDashboard'
import { Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Logo from '../../Assets/herbscare_logo.png'
import { createTheme, ThemeProvider, MuiCssBaseline } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import BalooBhaijaan from '../../Font/BalooBhaijaan.ttf'
import Paper from '@mui/material/Paper';
import background from '../../Assets/landingPage_bg.png'


const Dashboard = () => {
    const [user, setUser] = useState([]);

    // useEffect(() => {
    //     axios.get(`http://localhost:5000/dashboard`)
    //         .then((res) => {
    //             console.log(res)
    //             const fetchedUsers = res.data;
    //             setUser(fetchedUsers);
    //         });
    // }, []);

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
        <Box sx={{
            backgroundColor: '#C6D8C5', height: '100vh', background: `url(${background})`,
            backgroundSize: 'cover',
        }}>
            <NavbarDashboard />
            <Container>
                <Grid>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <Box
                            sx={{
                                fontFamily: 'BalooBhaijaan',
                                fontSize: '100px',
                                height: '100px',
                                color: 'white',
                                textAlign: 'center'
                            }}
                        >
                            Welcome Back,
                        </Box>
                        <Box
                            sx={{
                                fontFamily: 'BalooBhaijaan',
                                fontSize: '60px',
                                height: '100px',
                                color: 'Black',
                                textAlign: 'center',
                                padding: '50px'
                            }}
                        >
                            {/* {user.name} */}
                        </Box>
                    </ThemeProvider>
                </Grid>
                <Grid container sx={{ paddingTop: '80px' }}>
                    <Grid item xs={6} 
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Button href='/dashboard/plants' variant="contained"
                            sx={{
                                fontFamily: 'BalooBhaijaan',
                                fontSize: '20px',
                                backgroundColor: '#E8E8E8',
                                width: '66%',
                                color: '#00480C',
                                '&:hover': {
                                    backgroundColor: '#00480C',
                                    color: '#FFFFFF'
                                },

                            }}
                        >
                            Informasi Tanaman
                        </Button>
                    </Grid>
                    <Grid item xs={6}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Button href='/dashboard/reservoir' variant="contained"
                            sx={{
                                fontFamily: 'BalooBhaijaan',
                                fontSize: '20px',
                                backgroundColor: '#E8E8E8',
                                width: '66%',
                                color: '#00480C',
                                '&:hover': {
                                    backgroundColor: '#00480C',
                                    color: '#FFFFFF'
                                },
                            }}
                        >
                            Informasi Penyimpanan Air
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Dashboard