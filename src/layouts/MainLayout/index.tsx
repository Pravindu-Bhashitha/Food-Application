import React from 'react';
import TopNavBar from '../../components/TopNavBar';
import SideNavBar from '../../components/SlideNavBar';
import {Outlet} from 'react-router-dom';

const MainLayout: React.FC = () => (
    <>
        <TopNavBar/>
        <div>
            <div style={{display:'flex'}}>
                <div style={{width: '16%'}}>
                    <SideNavBar/>
                </div>
                <div style={{width: '84%', background:'#F2F2F2'}}>
                    <Outlet/>

                </div>
            </div>
        </div>
    </>
);

export default MainLayout;