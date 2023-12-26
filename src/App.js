import React from 'react'
import Home from './componenet/Home'
import Footer from './componenet/Footer'
import Navbar from './componenet/Navbar'
import Product from "./componenet/Product"
import FirstSection from './componenet/FirstSection'

import { BrowserRouter, Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
   <BrowserRouter>
   <FirstSection/>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/> }/>
     <Route path="Product" element={<Product/>}/>
    </Routes>
 
    <Footer/> 
    </BrowserRouter>

 
      </div>
  )
}

export default App