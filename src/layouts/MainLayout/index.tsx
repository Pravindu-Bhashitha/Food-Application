import React from 'react';
import TopNavBar from '../../components/TopNavBar';
import SideNavBar from '../../components/SlideNavBar';
import {Outlet} from 'react-router-dom';
import './index.css';

const MainLayout: React.FC = () => (
    <>
        <TopNavBar/>
        <div>
            <div className='mainlayoutMainStyles'>
                <div className='mainlayoutSideNavBarStyles'>
                    <SideNavBar/>
                </div>
                <div className='mainlayoutOutletStyles'>
                    <Outlet/>
                </div>
            </div>
        </div>
    </>
);

export default MainLayout;