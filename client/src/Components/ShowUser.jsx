import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ShowUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/showuser`)
            .then((res) => {
                const fetchedUsers = res.data;
                // console.log(fetchedUsers)
                setUsers(fetchedUsers);
            });
        }, []);
        

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.user_id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}
