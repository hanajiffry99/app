import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { ImBooks } from 'react-icons/im';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    return (
        <>
            <div className='navbar'>
                <div className='container'>
                    <Link to='/' className='navbar-logo'>
                        <ImBooks className='navbar-icon' />
                    <span className='header'>AlViN EDU-Master</span>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/home' className='nav-links'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/dashboard' className='nav-links'>Dashboard</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/discussion' className='nav-links'>Discussion</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links'>Contact Us</Link>
                        </li>
                        <li className='nav-btn'>
                            <Link to='/signin'>
                                <Button variant="outline-info">Sign In</Button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar
