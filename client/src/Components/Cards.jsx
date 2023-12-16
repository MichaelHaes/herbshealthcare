import React from 'react'
import * as React from 'react';
import { Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Logo from '../Assets/card_logo.png';
import Box from '@mui/material/Box';
import Jaldi from '../../Font/Jaldi-Regular.ttf';
import { Fade } from 'react-reveal';
import { createTheme, ThemeProvider, MuiCssBaseline } from '@mui/material/styles';

const Cards = (props) => {
    return (
        <Card
            sx={{
                width: '20%',
                maxWidth: '20%',
                maxHeight: '40vh',
                backgroundColor: '#2A7A50'
            }}
        >
            <CardActionArea
            sx={{height:'40vh'}}
            >
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <CardMedia
                        component='img'
                        sx={{
                            width: '50%',
                            paddingTop: 3
                        }}
                        image={Logo}
                        draggable='false'
                    />
                <CardContent>
                    <Typography sx={{color: '#F9FFCF'}} variant='h4'>
                        {props.name}
                    </Typography>
                </CardContent>
                </Box>
            </CardActionArea>
        </Card>
    )
}

export default Cards