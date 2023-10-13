import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import { ShowUser } from './Components/ShowUser';
import Navbar from './Components/LandingPage/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/showuser" element={<ShowUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
