import React from "react";
import {
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'
import './index.css'

const PillNavigation = ({ navList, active, toggle }: { navList: any[], active: number, toggle: (tab: number) => void }) => {
    return (    
        <Nav pills style={{color:"black"}}>
            {navList.map((item:any, index:any) => {
                return <NavItem key={item.id}>
                    <NavLink
                        active={active === item.id}
                        onClick={() => {
                            toggle(item.id)
                        }}
                        className="subnavbarlinkstextcolor"
                        style={{color:'#667085'}}
                    >
                        {item.item}
                    </NavLink>
                </NavItem>
            })}
        </Nav>
    )
}

export default PillNavigation;