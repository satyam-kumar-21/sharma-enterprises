import React from 'react'
import Carousel from './Carousel'
import AboutUsSection from './AboutUsSection'
import OurServices from './OurServices'
import OurTeam from './OurTeam'
import Testimonials from './Testimonials'
import Newsletter from './Newsletter'
import VisionMission from './VisionMission'

function Home() {
  return (
    <>
    <Carousel />
    <AboutUsSection />
    <OurServices />
    {/* <OurTeam /> */}
    <VisionMission />
    <Testimonials />
    <Newsletter />
    
    </>
  )
}

export default Home
