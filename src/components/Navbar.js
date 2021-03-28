import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import {ImBooks} from 'react-icons/im';
import {FaBars,FaTimes} from 'react-icons/fa';

function Navbar() {
    const [click,setClick] =  useState(false)

    const handleClick = () => setClick(!click)
        return (
            <>
        <div className='navbar'>
            <div className='container'>
                <Link to='/' className='navbar-logo'>
                    <ImBooks className='navbar-icon'/>
                    AlViN EDU-Master
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    {click ?<FaTimes/> : <FaBars/>}
                </div>
                    <ul className={click? 'nav-menu active' : 'nav-menu'}>
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
                    </ul>
            </div>
        </div>
        </>
    );
}

export default Navbar
