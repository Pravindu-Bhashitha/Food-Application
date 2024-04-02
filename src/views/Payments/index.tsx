import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import './index.css';
import SubNavBar from '../../components/SubNavBar';


const Payments = () => {
    const location = useLocation();

    return (
        <div>
            {/* <Navbar bg="white" className='payments-navbar'>
                <Container className='payments-container'>
                    <Nav className="payments-nav">
                        <Nav.Link as={NavLink} to="/payments" active={location.pathname === '/payments'} style={location.pathname === '/payments' ? activeLinkStyle : undefined}>
                            Payouts
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/payments/booking" active={location.pathname === '/payments/booking'} style={location.pathname === '/payments/booking' ? activeLinkStyle : undefined}>
                            Booking
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/payments/invoices" active={location.pathname === '/payments/invoices'} style={location.pathname === '/payments/invoices' ? activeLinkStyle : undefined}>
                            Invoices
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/payments/invoice_settings" active={location.pathname === '/payments/invoice_settings'} style={location.pathname === '/payments/invoice_settings' ? activeLinkStyle : undefined}>
                            Invoice Settings
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet /> */}
            <SubNavBar/>
        </div>
    );
};

// CSS styles for the active link
const activeLinkStyle: React.CSSProperties = {
    borderBottom: '2px solid red', // Add red bottom border
    color: 'red', // Change text color to red
};

export default Payments;
