import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

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
    return (
        <div>
            <h3>ID: {id}</h3>
            <ul>
                {plants.map((plant) => (
                    <li key={plant.sensor_id}>Luminosity = {plant.luminosity} and Humidity = {plant.humidity}</li>
                ))}
            </ul>
        </div>
    )
}
