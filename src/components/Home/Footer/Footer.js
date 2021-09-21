import React from 'react'
import './Footer.css'
import logo from '../../../images/logo1.png'
import Copyright from './Copyright'


function Footer() {
    return (
        <>
        <div className="footer">
            <img src={logo} alt="logo" className="logo"/>
            <div className="lists">
                <div className="l1">
                    <span>Support</span><br/>
                    <span>About us</span><br/>
                    <span>Privacy Policy</span><br/>
                </div>
                <div className="l2">
                    <span>Terms and Condition</span><br/>
                    <span>Return n Refund Policy</span><br/>
                    <span>Shipping n Delivery Policy</span><br/>
                </div>
                
            </div>
            
        </div>
        <Copyright/>
        </>
    )
}

export default Footer
