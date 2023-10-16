import React from 'react'
import AboutUs from './LandingPage/AboutUs';
import Tools from './LandingPage/Tools';
import Landing from './LandingPage/Landing'

const Homepage = () => {
  return (
    <div>
      <section id='section1'>
        <Landing />
      </section>
      <section id='section2'>
        <AboutUs />
      </section>
      {/* <section id='section3'>
        <Tools />
      </section> */}
    </div>
  )
}

export default Homepage