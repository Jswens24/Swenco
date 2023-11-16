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
      {/* <Gallery /> */}
      <Quote />
      <Footer />
      <div onClick={() => {
        const anchor = document.querySelector('#home')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }} className='cursor-pointer w-fit p-1 pl-3 pr-3 rounded-full border-black border-2 fixed bottom-1 right-1 bg-white'>↑</div>
    </>
  )
}

export default App
