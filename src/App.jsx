import { useState } from 'react'
import './App.css'
import Navbar from './components/sections/Navbar'
import Home from './components/sections/Home'
import Advice from './components/sections/Advice'
import WhoWeAre from './components/sections/WhoWeAre'
import WhatClientSay from './components/sections/WhatClientSay'
import MeetOurAttorneys from './components/sections/MeetOurAttorneys'
import MakeAnAppointment from './components/sections/MakeAnAppointment'
import ContactUs from './components/sections/ContactUs'
import Footer from './components/sections/Footer'

function App() {

  return (
    <div >
      <div className='bg-home bg-no-repeat bg-cover'>
        <Navbar />
        <Home />
      </div>
      <Advice/>
      <WhoWeAre />    
      <WhatClientSay/>
      <MeetOurAttorneys/>
      <MakeAnAppointment/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default App
