import React from 'react'
import Sign from './components/Sign'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Home from './components/Home'
import './App.css';
import Flat from './components/Flat'
import Dmcst from './components/Dmcst'
import Cncst from './components/Cncst'
import Mamcst from './components/Mamcst'
import Sscst from './components/Sscst'
import Mmscst from './components/Mmscst'

const App = () => {
  return (
    <div className='full'>
      <Navbar />
      <Routes>
        <Route path="/s" element={<Sign />} />
        <Route path='/a' element={<About />} />
        <Route path='/l' element={<Login />} />
         <Route path='/' element={<Home />} />
         <Route path='flat' element={<Flat />} />
         <Route path='dmcst' element={<Dmcst />} />
         <Route path='cncst' element={<Cncst />} />
         <Route path='mamcst' element={<Mamcst />} />
         <Route path='sscst' element={<Sscst />} />
          <Route path='mmscst' element={<Mmscst/>} />

      </Routes>
    </div>
  )
}

export default App
