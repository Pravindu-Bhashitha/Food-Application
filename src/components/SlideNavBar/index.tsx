import React, {useState} from 'react';
import navigations from '../../navigation/vertical';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideNavBar: React.FC = () => {

    return (
        <aside style={asideStyle}>
            <ul style={ulStyle}>
                {navigations && navigations.map((navigation, index) => (
                    <li key={index} style={liStyle}>
                        <NavLink
                            to={navigation.navLink}
                            style={({isActive}) =>
                                isActive ? aActiveStyle : aStyle
                            }
                        >
                            {({isActive}) => (
                                <>
                                    {isActive && <div style={leftActiveLineStyle}></div>}
                                    <div style={iconTextStyle}>
                                    <span style={iconStyle}><FontAwesomeIcon icon={navigation.icon} /></span>
                                        <a>{navigation.title}</a>
                                    </div>

                                </>
                            )}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </aside>
    );
};


const asideStyle = {
    // width: '200px',
    minWidth: '',
    height: '100vh',
    background: '#fff',
    padding: '8px',
    boxSizing: 'border-box' as 'border-box',
};


const ulStyle = {
    listStyle: 'none',
    padding: 0,
    marginTop: 5,
};


const liStyle = {
    marginBottom: '15px',
};


const aStyle = {
    textDecoration: 'none',
    color: '#333', // text color
    fontSize: '16px',
    fontWeight: 'normal',
    display: 'flex',
    alignItems: 'center',
};


const iconTextStyle = {
    margin: '9px 0',
    
};


const aActiveStyle = {
    textDecoration: 'none',
    background: '#F2F2F2',
    color: '#333',
    fontSize: '16px',
    fontWeight: 'normal',
    display: 'flex',
    alignItems: 'center',
};


const leftActiveLineStyle: React.CSSProperties = {
    background: '#FF1001',
    width: '2px',
    position: 'absolute',
    height:'42px'
};


const iconStyle = {
    marginLeft: '12px',
    marginRight: '10px',
    alignItems: 'center',
};


export default SideNavBar;
