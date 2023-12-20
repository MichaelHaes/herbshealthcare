import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';
import Jaldi from '../../Font/Jaldi-Regular.ttf';
import background from '../../Assets/LP_background.png';
import Grid from '@mui/material/Unstable_Grid2';
import {
  createTheme,
  ThemeProvider,
  MuiCssBaseline,
} from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import { Button } from '@mui/material'

const WaterPumpIndicator = ({ isOn }) => (
  <div
    style={{
      width: '2rem',
      height: '2rem',
      borderRadius: '50%',
      backgroundColor: isOn ? 'green' : 'red',
      marginRight: '0.5rem',
    }}
  />
);

const LedLightIndicator = ({ isOn }) => (
  <div
    style={{
      width: '2rem',
      height: '2rem',
      borderRadius: '50%',
      backgroundColor: isOn ? 'green' : 'red',
      marginLeft: '0.5rem',
    }}
  />
);

export const Device = () => {
  const [plants, setPlants] = useState([]);
  const [waterPumpOn, setWaterPumpOn] = useState(false);
  const [ledLightOn, setLedLightOn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(1);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/isLoggedIn`, {
        withCredentials: true,
      })
      .then((res) => {
        setIsLoggedIn(res.data);
        console.log(isLoggedIn);
        if (isLoggedIn === 0) window.location.href = '/';
      });

    axios.get(`http://localhost:5000/device`, { params: { id } }).then((res) => {
      console.log(res);
      const plants = res.data;
      setPlants(plants);
    });
  }, []);

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

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

  const handlePump = () => {
    setWaterPumpOn((prevWaterPumpOn) => {
      axios.post(`http://localhost:5000/eventhandler`, { params: { type: 'pump', waterPumpOn: !prevWaterPumpOn } })
        .then((res) => {
          console.log(res);
        });
  
      return !prevWaterPumpOn;
    });
  };
  

  const handleLed = () => {
    setLedLightOn((prevLedLightOn) => {
      const newLedLightOn = !prevLedLightOn;
  
      axios.post(`http://localhost:5000/eventhandler`, { params: { type: 'led', ledLightOn: newLedLightOn } })
        .then((res) => {
          console.log(res);
        });
  
      return newLedLightOn;
    });
  };

  return (
    <Box
      sx={{
        height: '100vh',
        background: `url(${background})`,
        backgroundSize: 'cover',
      }}
    >
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
                marginTop: '50px',
              }}
            >
              Device ID - {id}
            </Box>
          </ThemeProvider>
        </Grid>
        <Grid display="flex" justifyContent="center" sx={{ marginTop: '2rem' }}>
          <Grid container justifyContent="center" alignItems="center">
            <Box sx={{ color: 'white' }}>Water Pump Indicator</Box>
            <WaterPumpIndicator isOn={waterPumpOn} />
            <Button
              sx={{
                fontFamily: 'Jaldi',
                borderRadius: '10px',
                border: '1px solid white',
                fontSize: '20px',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                width: '100%',
                color: 'white',
                marginRight: '1rem',
                marginTop: '1rem',
                '&:hover': {
                  color: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  transition: 'background-color 1s, color 1s',
                }
              }}
              onClick={handlePump}
            >
              Toggle Water Pump
            </Button>
          </Grid>
          <Grid container justifyContent="center" alignItems="center">
            <Box sx={{ color: 'white' }}>LED Light Indicator</Box>
            <LedLightIndicator isOn={ledLightOn} />
            <Button
              sx={{
                fontFamily: 'Jaldi',
                borderRadius: '10px',
                border: '1px solid white',
                fontSize: '20px',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                width: '100%',
                color: 'white',
                marginLeft: '1rem',
                marginTop: '1rem',
                '&:hover': {
                  color: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  transition: 'background-color 1s, color 1s',
                }
              }}
              onClick={handleLed}
            >
              Toggle LED Light
            </Button>
          </Grid>
        </Grid>
        <TableContainer component={Paper} sx={{ marginTop: '50px' }}>
          <Table
            sx={{
              minWidth: 650,
              bgcolor: 'rgba(255, 255, 255, 0.5)',
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: 'Bold',
                    color: 'Black',
                  }}
                >
                  Date and Time
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: 'Bold',
                    color: 'Black',
                  }}
                >
                  Luminosity
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: 'Bold',
                    color: 'Black',
                  }}
                >
                  Humidity
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: 'Bold',
                    color: 'Black',
                  }}
                >
                  Water Level
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {plants.map((plant) => (
                <TableRow key={plant.sensor_id}>
                  <TableCell align="center">
                    {formatTimestamp(plant.createdAt)}
                  </TableCell>
                  <TableCell align="center">{plant.luminosity} -
                    {plant.luminosity < 1000 ? ' Very Bright' :
                      plant.luminosity < 2000 ? ' Bright' :
                        plant.luminosity < 3000 ? ' Normal' :
                          plant.luminosity <= 3500 ? ' Dark' : ' Very Dark'
                    }
                  </TableCell>
                  <TableCell align="center">{plant.humidity} - 
                    {plant.humidity < 1000 ? ' Wet' :
                      plant.humidity < 2000 ? ' Damp' :
                        plant.humidity < 3000 ? ' Normal' :
                          plant.humidity <= 3500 ? ' Dry' : ' Very Dry'
                    }
                  </TableCell>
                  <TableCell align="center">
                    {plant.waterLevel}%
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};
