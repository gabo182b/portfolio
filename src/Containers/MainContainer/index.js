import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../../Components/Home'
import { About } from '../../Components/About'
import { Portfolio } from '../../Components/Portfolio'
import { Contact } from '../../Components/Contact'

const MainContainer = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export { MainContainer }
