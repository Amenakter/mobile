import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../../pages/About'
import Blog from '../../pages/Blog'
import Contact from '../../pages/Contact'
import Home from '../../pages/Home'
import Services from '../../pages/Services'
import ProductDetails from '../productDetails/ProductDetails'


const NavPage = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/services' element={<Services />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/productDetails:id' element={<ProductDetails />} />
            </Routes>
        </div>
    )
}

export default NavPage;