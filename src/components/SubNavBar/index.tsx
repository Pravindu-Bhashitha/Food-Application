import React, { useState } from 'react';
import { NAV_LIST } from '../../dummyData/SideNavBarData';
import { TabContent, TabPane } from 'reactstrap';
import Payouts from '../../views/Payments/Payouts';
import PillNavigation from './SubNavBarParent';
import './index.css';

const SubNavBar = () => {
    const [active, setActive] = useState(1);
  
    const toggle = (tab:any) => {
        setActive(tab);
    };

    return (
        <div className='subnavbartopdiv'> 
            <PillNavigation navList={NAV_LIST} active={active} toggle={toggle}/>
            <TabContent className="py-50" activeTab={active} >
                {active === 1 && (
                    <div className='subnavbareachpart'>
                        <TabPane tabId={1}>
                        <Payouts/>
                        </TabPane>
                    </div>
                )}
                {active === 2 && (
                    <div className='subnavbareachpart'>
                        <TabPane tabId={2}>
                            This is Banking
                        </TabPane>
                    </div>
                )}
                {active === 3 && (
                    <div className='subnavbareachpart'>
                        <TabPane tabId={3}>
                            This is Invoices
                        </TabPane>
                    </div>
                )}
                {active === 4 && (
                    <div className='subnavbareachpart'>
                        <TabPane tabId={4}>
                            This is Invoices Settings
                        </TabPane>
                    </div>
                )}
            </TabContent>
        </div>
    );
};

export default SubNavBar;
