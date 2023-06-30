
import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div>
      <Navbar/>
      <Outlet/>
      <div className='bg-[#F3F5F5] py-10'>
      <Footer/>
      </div>
    </div>
  )
}

export default App
