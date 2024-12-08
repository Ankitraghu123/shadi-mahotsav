import React from 'react'
import AboutUsBanner from './About/AboutBanner'
import AboutSection from './Home/AboutSection'
import CountsSection from './Home/CountsSection'
import Testimonials from './About/Testimonials'


const About = () => {
  return (
    <div>
        <AboutUsBanner />
        <AboutSection />
        <CountsSection />
        <Testimonials />
    </div>
  )
}

export default About