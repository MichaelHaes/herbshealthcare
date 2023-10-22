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

const Dashboard = () => {
    //sementara
    // const [user, setUser] = useState([]);

    // useEffect(() => {
    //     axios.get(`http://localhost:5000/login`, { params: })
    //         .then((res) => {
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
        <div style={{backgroundColor: '#C6D8C5', height:'720px'}}>
            <NavbarDashboard/>
            <Container>
                <Grid>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <Box
                            sx={{
                            fontFamily: 'BalooBhaijaan',
                            fontSize: '100px',
                            height: '100px',
                            color: 'Black', 
                            textAlign:'center'
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
                            textAlign:'center',
                            padding:'50px'
                            }}
                        >
                            Username
                        </Box>
                    </ThemeProvider>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{paddingTop:'80px'}}>
                    <Grid xs={6} display="flex" justifyContent="center" alignItems="center">
                        <Button>
                            Informasi Tanaman
                        </Button>
                    </Grid>
                    <Grid xs={6} display="flex" justifyContent="center" alignItems="center">
                        <Button>
                            Informasi Penyimpanan Air
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Dashboard