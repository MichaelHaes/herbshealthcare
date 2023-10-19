import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavbarDashboard from './NavbarDashboard'
import { Button } from '@mui/material'
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

    return (
        <div>
            <NavbarDashboard/>
            <Button variant='contained'>All Plants Information</Button>
            <Button variant='contained'>Ini buat profil user</Button>
            <Button variant='contained'>Ini buat liat referensi tanaman (ga yakin)</Button>
        </div>
    )
}

export default Dashboard