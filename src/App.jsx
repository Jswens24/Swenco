import { useState } from 'react'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Services from './components/Services'
import Vision from './components/Vision'
import ChooseUs from './components/ChooseUs'
import Gallery from './components/Gallery'
import Quote from './components/Quote'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <NavBar />
      <Banner />
      <Services />
      <Vision />
      <ChooseUs />
      <Gallery />
      <Quote />
      <Footer />
    </>
  )
}

export default App
