import React from 'react'
import Carousel from './Carousel'
import AboutUsSection from './AboutUsSection'
import OurServices from './OurServices'
import OurTeam from './OurTeam'
import Testimonials from './Testimonials'
import Newsletter from './Newsletter'

function Home() {
  return (
    <>
    <Carousel />
    <AboutUsSection />
    <OurServices />
    {/* <OurTeam /> */}
    <Testimonials />
    <Newsletter />
    
    </>
  )
}

export default Home
