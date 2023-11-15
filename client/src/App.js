import './App.css';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Navbar from './Components/LandingPage/Navbar';
import Dashboard from './Components/LoginPage/Dashboard';
import Register from './Components/Register';
import PlantInformation from './Components/LoginPage/PlantInformation';
import { WaterReservoir } from './Components/LoginPage/WaterReservoir';
import { UserProfile } from './Components/LoginPage/UserProfile';
import { Device } from './Components/LoginPage/Device';

import SocketContext from './SocketContext';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

function App() {
  return (
    <SocketContext.Provider value={socket}>

      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/plants" element={<PlantInformation />} />
            <Route path="/dashboard/plants/:id" element={<Device />} />
            <Route path="/dashboard/reservoir" element={<WaterReservoir />} />
            <Route path="/dashboard/profile" element={<UserProfile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </SocketContext.Provider>
  );
}

export default App;
