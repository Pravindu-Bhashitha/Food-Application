import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import navigations from '../../navigation/vertical/index';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const SideNavBar = () => {
    const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
    const [expandedSubMenus, setExpandedSubMenus] = useState<Record<number, boolean>>({});

    const toggleSubMenu = (index: number) => {
        setActiveSubMenu(activeSubMenu === index ? null : index);
        setExpandedSubMenus({
            ...expandedSubMenus,
            [index]: !expandedSubMenus[index]
        });
    };

    return (
        <aside style={asideStyle}>
            <ul style={ulStyle}>
                {navigations && navigations.map((navigation, index) => (
                    <li key={index} style={liStyle}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <NavLink
                                to={navigation.navLink}
                                style={activeSubMenu === index ? aActiveStyle : aStyle}
                                onClick={() => setActiveSubMenu(index)}
                            >
                                <span style={iconStyle}>
                                    <FontAwesomeIcon icon={navigation.icon} />
                                </span>
                                <span style={iconTextStyle}>{navigation.title}</span>
                            </NavLink>
                            {navigation.submenu && (
                                <span
                                    style={{
                                        ...arrowStyle,
                                        transform: expandedSubMenus[index] ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 750ms ease-in-out'
                                    }}
                                    onClick={() => toggleSubMenu(index)}
                                >
                                    <FontAwesomeIcon icon={faCaretDown} />
                                </span>
                            )}
                        </div>
                        {navigation.submenu && (
                            <ul style={{ maxHeight: expandedSubMenus[index] ? '500px' : '0', overflow: 'hidden', transition: 'max-height 750ms ease-in-out' }}>
                                {navigation.submenu.map((submenuItem, subIndex) => (
                                    <li key={subIndex} style={subliStyle}>
                                        <NavLink to={submenuItem.navLink} style={aStyle}>
                                            <span>{submenuItem.title}</span>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </aside>
    );
};

// Styles...


const aActiveStyle = {
    textDecoration: 'none',
    background: '#F2F2F2',
    color: '#333',
    fontSize: '16px',
    fontWeight: 'normal',
    display: 'flex',
    alignItems: 'center',
    borderLeft: '3px solid #FF1001',
    width: '100%'
};

const arrowStyle = {
    marginLeft: '1rem',
    cursor: 'pointer',
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

const subliStyle = {
    marginBottom: '15px',
    marginLeft: '1rem'
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


const leftActiveLineStyle: React.CSSProperties = {
    background: '#FF1001',
    width: '2px',
    position: 'absolute',
    height: '42px'
};


const iconStyle = {
    marginLeft: '12px',
    marginRight: '10px',
    alignItems: 'center',
    width: '1.2rem',
};


export default SideNavBar;
