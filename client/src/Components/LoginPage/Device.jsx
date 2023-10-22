import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import NavbarDashboard from './NavbarDashboard'
import BalooBhaijaan from '../../Font/BalooBhaijaan.ttf'
import Grid from '@mui/material/Unstable_Grid2'
import { createTheme, ThemeProvider, MuiCssBaseline } from '@mui/material/styles';
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';

export const Device = () => {
    const [plants, setPlants] = useState([]);
    let { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5000/device`, { params: {id} })
            .then((res) => {
                console.log(res)
                const plants = res.data;
                setPlants(plants);
            });
    }, []);
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
            <NavbarDashboard />
            <Container>
                <Grid display="flex" justifyContent="center" alignItems="center">
                    <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Box
                        sx={{
                        fontFamily: 'BalooBhaijaan',
                        fontSize: '80px',
                        height: '100px',
                        color: 'Black',
                        marginTop: '20px'
                        }}
                    >
                        Device ID - {id}
                    </Box>
                    </ThemeProvider>
                </Grid>
                    <TableContainer component={Paper} sx={{marginTop:'50px'}}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    {/* <TableCell>No</TableCell> */}
                                    {/* <TableCell>Time</TableCell> */}
                                    <TableCell align='center' sx={{fontWeight:'Bold'}}>Luminosity</TableCell>
                                    <TableCell align='center' sx={{fontWeight:'Bold'}}>Humidty</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {plants.map((plant) => (
                                    <TableRow key={plant.sensor_id}>
                                        <TableCell align='center'>{plant.luminosity}</TableCell>
                                        <TableCell align='center'>{plant.humidity}</TableCell>
                                    </TableRow>

                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
            </Container>
        </div>
    )
}
