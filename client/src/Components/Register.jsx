import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './LandingPage/Navbar';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
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
      name: formData.username,
      email: formData.email,
      password: formData.password
    };

    axios.post(`http://localhost:5000/adduser`, { user })
      .then(res => {
        console.log(res)
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
          Name:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="text" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Register;
