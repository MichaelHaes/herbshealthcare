import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './LandingPage/Navbar';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: formData.email,
      password: formData.password
    };

    axios.get(`http://localhost:5000/login`, { params: user })
      .then(res => {
        console.log(res.data)
      })
      .catch(error => {
        console.error('Error adding user:', error);
      });
  }

  return (
    <div>
    <Navbar />
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="text" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
