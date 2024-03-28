import React from 'react';
import Drop_Down_Menu from '../../../components/Drop Down Menu';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Payouts = () => {
    return (
        <div style={componentOverview}>
            <div style={firstRowStyles}>
                <h2 style={{color:'#333'}}>Payments</h2>
                <div style={firstRowSecondPartStyles}>
                    <input type='date' style={inputStyles} />
                    <Drop_Down_Menu />
                    <Button style={buttonStyles}>
                        <FontAwesomeIcon icon={faDownload} style={{ marginRight: '1rem' }} />
                        Download
                    </Button>
                </div>
            </div>
            
        </div>
    );
};

const componentOverview = {
    margin: '2rem 2rem'
};

const firstRowStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', // Align vertically
    gap: '2rem', // Adjusted gap
    height: '2.5rem', // Adjusted height to 40px (2.5rem * 1.6)
};

const firstRowSecondPartStyles = {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center', // Align vertically
    height: '100%', // Set height to 100% for consistent height
};

const inputStyles = {
    height: '100%', // Set height to 100% for consistent height
    width: '18rem', // Adjusted width for the date input
    backgroundColor: '#fff', // Set background color to white
    border: '1px solid #ced4da', // Add border
    borderRadius: '4px', // Add border radius
    padding: '0.375rem 0.75rem', // Add padding
    color:'#333'
};



const buttonStyles = {
    background: '#590B21',
    color: '#fff',
    border: '1px solid transparent',
    height: '100%', // Set height to 100% for consistent height
    borderRadius: '2rem', // Add border radius
    width: '11rem', // Adjusted width for the button
};

export default Payouts;
