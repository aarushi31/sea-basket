import React from 'react'
import {Nav, NavLink, Bars,NavMenu, NavBtn, NavBtnLink} from './NavElements'
import logo from '../../images/logo1.png'
import * as Rbs from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        // <>
        //     <Nav>
        //         <NavLink to="/">
        //             <img src={logo} alt="Logo" style={{width:"170px"}}/>
        //         </NavLink>
        //         <Bars/>
        //         <NavMenu>
        //             <NavLink to="/category" activeStyle>
        //                 Category
        //             </NavLink>
        //             <NavLink to="/faq" activeStyle>
        //                 FAQs
        //             </NavLink>
        //             <NavLink to="/cart" activeStyle>
        //                 My Cart
        //             </NavLink>
        //             <NavBtn>
        //             <NavBtnLink to="/login">Login</NavBtnLink>
        //             </NavBtn>
        //         </NavMenu>

        //     </Nav>
        // </>
        <Rbs.Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky='top'>
  <Rbs.Container>
  <Rbs.Navbar.Brand><Link to="/"><img src={logo} style={{width:"170px"}}/></Link></Rbs.Navbar.Brand>
  <Rbs.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Rbs.Navbar.Collapse id="responsive-navbar-nav">
    <Rbs.Nav className="me-auto">
      {/* <Rbs.Nav.Link href="#features">Features</Rbs.Nav.Link>
      <Rbs.Nav.Link href="#pricing">Pricing</Rbs.Nav.Link>
      <Rbs.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <Rbs.NavDropdown.Item href="#action/3.1">Action</Rbs.NavDropdown.Item>
        <Rbs.NavDropdown.Item href="#action/3.2">Another action</Rbs.NavDropdown.Item>
        <Rbs.NavDropdown.Item href="#action/3.3">Something</Rbs.NavDropdown.Item>
        <Rbs.NavDropdown.Divider />
        <Rbs.NavDropdown.Item href="#action/3.4">Separated link</Rbs.NavDropdown.Item>
      </Rbs.NavDropdown> */}
    </Rbs.Nav>
    <Rbs.Nav>
      <Rbs.Nav.Link href="/category" style={{color:'#0E79BD',fontWeight:'600',marginRight:'30px'}}>Category</Rbs.Nav.Link>
      <Rbs.Nav.Link href="#faq" style={{color:'#0E79BD',fontWeight:'600',marginRight:'30px'}}>FAQ</Rbs.Nav.Link>
      <Rbs.Nav.Link href="/cart" style={{color:'#0E79BD',fontWeight:'600',marginRight:'30px'}}>Cart</Rbs.Nav.Link>
      <Rbs.Nav.Link href="/login" style={{width:'100px',background:'#0E79BD',color:'white',display:'flex',justifyContent:'center',alignItems:'center'}}>
        Login
      </Rbs.Nav.Link>
    </Rbs.Nav>
  </Rbs.Navbar.Collapse>
  </Rbs.Container>
</Rbs.Navbar>
    )
}

export default Navbar
