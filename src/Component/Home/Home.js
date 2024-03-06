import React from 'react'
import Hero from '../Hero/Hero'
import Product from '../ProductPage/Product'
import About from '../About/About'
import Testimonial from '../Testimonial/Testimonial'
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <>
     <Hero />
     <About />
     <Product />
     <Testimonial />
     <Contact/>
    </>
   
  )
}

export default Home