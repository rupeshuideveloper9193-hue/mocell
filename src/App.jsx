
import React from 'react'
import Header from './Componant/Header.jsx'
import Home from './pages/Home.jsx'
import Footer from './Componant/Footer.jsx'

import { Routes, Route } from 'react-router-dom'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import ProductDetails from './Componant/ProductDetails.jsx'

import Collection from './Componant/Collection.jsx'
import { FaWhatsapp } from 'react-icons/fa';
import { IoMdCall } from "react-icons/io";
import Career from './pages/Career.jsx'
import DistributePartnership from './pages/DistributePartnership.jsx'
import Login from './pages/Login.jsx'
import Signin from './pages/Signin.jsx'
const App = () => {
  return (
    <div>
      <div className="">

        <Header />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/career' element={<Career />} />
          <Route path='/products/:productId' element={<ProductDetails />} />
          <Route path='/distribute-partnership' element={<DistributePartnership />}  /> 
                  
          <Route path='/collection/category/:categoryId/subcategory/:subCategoryId' element={<Collection />} />
          <Route path='/collection/category/:categoryId/subcategory/:subCategoryId/products/:productId' element={<ProductDetails />} />
        <Route   path='/login' element={<Login/>} />
        <Route   path='/signin' element={<Signin/>} />
        </Routes>

        <Footer />





        <div className="">
          <a href="https://wa.me/11234567" target='_blank'>
            <div class="what_btn">
              <span>Reach Us Fast </span>
              <i class="icon"><FaWhatsapp className='what_icon' />  </i>
            </div>
          </a>
        </div>


        {/*  contact  icon   */}


        <div className="">
          <a href="tel:11234567" target='_blank'>
            <div class="call_btn">
              <span> Call Us Now  </span>
              <i class="icon"><IoMdCall className='call_icon' />  </i>
            </div>
          </a>
        </div>




      </div>
    </div>
  )
}

export default App