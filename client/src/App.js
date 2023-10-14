import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Components/Homepage';
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
    </div>
  );
}

export default App;
