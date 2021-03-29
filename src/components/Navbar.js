import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap'
import { NavLink, Route, Link } from 'react-router-dom';
import { ImBooks } from 'react-icons/im';
import Signin from './Signin'


function Navbar() {
    return (
        <>
            <Container>
                <Row >
                    <Col xs lg="6">
                        <div className='navbar-logo'>
                            <ImBooks className='navbar-icon' />
                            <span className="header" >AlViN EDU-Master</span>
                        </div>
                    </Col>
                    <Col>
                        <Link to='/home' className='nav-links'>Home</Link>
                    </Col>
                    <Col >
                        <Link to='/dashboard' className='nav-links'>Dashboard</Link>
                    </Col>
                    <Col >
                        <Link to='/discussion' className='nav-links'>Discussion</Link>
                    </Col>
                    <Col  xs lg="1.8" >
                        <Link to='/contact'>Contact Us</Link>
                    </Col>
                    <Col>
                        <NavLink to='/signin'>
                            <Button variant="outline-info">Sign In</Button>
                        </NavLink>
                    </Col>
                </Row>
            </Container>

            <Route path="/signin" component={Signin} />
        </>
    );
}

export default Navbar
