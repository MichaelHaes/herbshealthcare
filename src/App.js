import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import AboutUs from './Components/AboutUs';
import Tools from './Components/Tools';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      {/* <Navbar />
      <div className='scroll-container'>
        <section id='section1'>
          <Homepage />
        </section>
        <section id='section2'>
          <AboutUs />
        </section>
        <section id='section3'>
          <Tools />
        </section>
      </div> */}
    </div>
  );
}

export default App;
