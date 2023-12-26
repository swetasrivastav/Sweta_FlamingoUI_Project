import React from 'react'
import Home from './componenet/Home'
import Transformyourmind from './componenet/Transformyourmind'
import OurTopCategories from './componenet/OurTopCategories'
import Pinkflamingo from './componenet/Pinkflamingo'
import Blog from './componenet/Blog'
import Connect from './componenet/Connect'
import Footer from './componenet/Footer'
import Navbar from './componenet/Navbar'
import Product from "./componenet/Product"

import { BrowserRouter, Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
   <BrowserRouter>
    <Home/> 
    <Navbar/>
    <Routes>
      <Route path="Product" element={<Product/>}/>
      </Routes>
      </BrowserRouter>
  <Transformyourmind/>
    <OurTopCategories/>
    <Pinkflamingo/>
    <Blog/>
    <Connect/> 
    <Footer/> 
   
 
      </div>
  )
}

export default App