import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar__links'>
                <li className='navbar__link'><NavLink to='/'>Home</NavLink></li>
                <li className='navbar__link'><NavLink to='/about'>About</NavLink></li>
                <li className='navbar__link'><NavLink to='/portfolio'>Portfolio</NavLink></li>
                <li className='navbar__link'><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export { Navbar }

