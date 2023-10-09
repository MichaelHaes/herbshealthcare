import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import AboutUs from './Components/AboutUs';
import Tools from './Components/Tools';

function App() {
  return (
    <div className="App">
      <Navbar />
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
      </div>
    </div>
  );
}

export default App;
