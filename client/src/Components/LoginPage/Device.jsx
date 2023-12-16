import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar'
import Jaldi from '../../Font/Jaldi-Regular.ttf';
import background from '../../Assets/LP_background.png'
import Grid from '@mui/material/Unstable_Grid2';
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
  const [isLoggedIn, setIsLoggedIn] = useState(1)
  let { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:5000/isLoggedIn`, {
      withCredentials: true
    })
      .then((res) => {
        setIsLoggedIn(res.data)
        console.log(isLoggedIn)
        if (isLoggedIn === 0) window.location.href = '/'
      });

    axios.get(`http://localhost:5000/device`, { params: { id } })
      .then((res) => {
        console.log(res)
        const plants = res.data;
        setPlants(plants);
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
      height: '100vh',
      background: `url(${background})`,
      backgroundSize: 'cover',
    }}>
      <Navbar auth={isLoggedIn} />
      <Container>
        <Grid display="flex" justifyContent="center" alignItems="center">
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
              sx={{
                fontFamily: 'Jaldi',
                fontSize: '80px',
                height: '100px',
                color: 'white',
                marginTop: '50px'
              }}
            >
              Device ID - {id}
            </Box>
          </ThemeProvider>
        </Grid>
        <TableContainer component={Paper} sx={{ marginTop: '50px' }}>
          <Table sx={{
            minWidth: 650,
            bgcolor: 'rgba(0, 0, 0, 0.5)',
          }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {/* <TableCell>No</TableCell> */}
                {/* <TableCell>Time</TableCell> */}
                <TableCell align='center' sx={{
                  fontWeight: 'Bold',
                  color: 'white'
                }}
                >Luminosity</TableCell>
                <TableCell align='center' sx={{
                  fontWeight: 'Bold',
                  color: 'white'
                }}
                >Humidty</TableCell>
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
    </Box>
  )
}
