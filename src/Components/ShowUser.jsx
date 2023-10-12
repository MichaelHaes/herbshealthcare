import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ShowUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/user`)
            .then((res) => {
                const fetchedUsers = res.data;
                console.log(fetchedUsers[0])
                setUsers(fetchedUsers);
            });
    }, []);

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.user.name}</li>
                ))}
            </ul>
        </div>
    )
}
