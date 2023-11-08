import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box } from '@mui/material'
import NavbarDashboard from './NavbarDashboard'
import Container from '@mui/material/Container'

export const UserProfile = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/userinformation', {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res);
      setUser(res.data);
    });
  }, []);
  console.log(user)
  return (
    <Box>
      <NavbarDashboard />
      <Container>
        
      </Container>
    </Box>
  )
}
