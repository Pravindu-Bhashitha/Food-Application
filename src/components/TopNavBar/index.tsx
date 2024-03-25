import React from 'react';
import logo from '../../assets/images/logo.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faFileAlt, faBell, faUser } from '@fortawesome/free-solid-svg-icons';

const TopNavBar: React.FC = () => {
    return (
        <nav style={{ background: '#fff', padding: '5px', borderBottom: '1px solid rgb(221 221 221)', marginTop:'1rem' }}>
            <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
                <img src={logo} alt="Logo"
                    style={{ width: '120px', height: 'auto' }} />
                <div className="d-flex align-items-center" style={navbarIconStyleDiv}>
                    <FontAwesomeIcon icon={faPhone} className="mr-3" style={navbarIconStyle} />
                    <FontAwesomeIcon icon={faFileAlt} className="mr-3" style={navbarIconStyle} />
                    <FontAwesomeIcon icon={faBell} className="mr-3" style={navbarIconStyle} />
                    <FontAwesomeIcon icon={faUser} className="mr-3" style={navbarIconStyle} />
                </div>
            </ul>
        </nav>
    );
};

const navbarIconStyleDiv = {
    color: '#333', // text color
    fontSize: '1.2rem'
}

const navbarIconStyle = {
    marginRight:  '2vw',
    cursor:'pointer'
}

export default TopNavBar;


