import React from 'react'
import Navbar from '../components/MyNavbar'
import Aboutsection from '../components/Aboutsection'
import Food from '../components/Food'
import Hero from '../components/Hero'
import Contactsection from '../components/Contactsection'
import Video from '../components/Video'
import Foodslider from '../components/Foodslider'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import LogoSlider from '../components/LogoSlider'
import MenuSection from '../components/Menusection'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Aboutsection/>
        <Food/>
        <Foodslider/>
        <MenuSection/>
        <Video/>
        <Testimonials/>
        <Contactsection/>
        <LogoSlider/>
        <Footer/>
    </div>
  )
}

export default Home