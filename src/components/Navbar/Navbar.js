import React from 'react'
import {Nav, NavLink, Bars,NavMenu, NavBtn, NavBtnLink} from './NavElements'
import logo from '../../images/logo1.png'

function Navbar() {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={logo} alt="Logo" style={{width:"183px"}}/>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/category" activeStyle>
                        Category
                    </NavLink>
                    <NavLink to="/faq" activeStyle>
                        FAQs
                    </NavLink>
                    <NavLink to="/cart" activeStyle>
                        My Cart
                    </NavLink>
                    <NavBtn>
                    <NavBtnLink to="/login">Login</NavBtnLink>
                    </NavBtn>
                </NavMenu>

            </Nav>
        </>
    )
}

export default Navbar
