import React from 'react';
import logo from '../../assets/images/logo.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faFileAlt, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const TopNavBar: React.FC = () => {
    return (
        <nav className='navbarMainStyles'>
            <ul className='navbarulStyles'>
                <img src={logo} alt="Logo" className='navbarlogoStyles'/>
                <div className="navbarIconStyleDiv">
                    <FontAwesomeIcon icon={faPhone} className="navbarIconStyles"  />
                    <FontAwesomeIcon icon={faFileAlt} className="navbarIconStyles"  />
                    <FontAwesomeIcon icon={faBell} className="navbarIconStyles" />
                    <FontAwesomeIcon icon={faUser} className="navbarIconStyles" />
                </div>
            </ul>
        </nav>
    );
};

export default TopNavBar;


