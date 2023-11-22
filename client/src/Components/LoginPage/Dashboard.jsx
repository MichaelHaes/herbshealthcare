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
import background from '../../Assets/LP_background.png'
import Jaldi from '../../Font/Jaldi-Regular.ttf';
import { Fade } from 'react-reveal';


const Dashboard = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/dashboard`)
            .then((res) => {
                const fetchedUsers = res.data;
                setUser(fetchedUsers);
            });
    }, []);

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

    return (
        
        <Box sx={{
            backgroundColor: '#C6D8C5', 
            height: '100vh', 
            background: `url(${background})`,
            backgroundSize: 'cover',
        }}>
            <NavbarDashboard />
            <Container>
                <Grid container spacing ={5}
                sx={{
                    marginTop: '10vh', 
                    flexDirection: 'column', 
                    alignContent: 'center', 
                    marginTop: '-2vh' 
                }}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: "70px",
                                fontFamily: 'Jaldi',
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
                                fontFamily: 'Jaldi',
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
                                fontFamily: 'Jaldi',
                                borderRadius: '10px',
                                border: '1px solid white',
                                fontSize: '20px',
                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                width: '66%',
                                color: 'white',
                                '&:hover': {
                                    color: 'white',
                                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                    transition: 'background-color 1s, color 1s',
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
                                fontFamily: 'Jaldi',
                                borderRadius: '10px',
                                border: '1px solid white',
                                fontSize: '20px',
                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                width: '66%',
                                color: 'white',
                                '&:hover': {
                                    color: 'white',
                                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                    transition: 'background-color 1s, color 1s',
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