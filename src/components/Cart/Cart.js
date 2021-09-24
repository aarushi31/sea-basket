import React from 'react'
import Footer from '../Home/Footer/Footer'
import {Container,Row,Col} from 'react-bootstrap'
import './Cart.css'
import katla from '../../images/katla.jpg'

function Cart() {
    return (
        <div>
            <Container className="cart-container">
                <center><span style={{fontSize:"30px",fontWeight:"500",color:"#0E79BD"}}>My Cart</span></center>
                <Container style={{textAlign:'center',marginTop:'5vw'}}>

            <Row>
                <Col><b>ITEMS</b></Col>
                <Col><b>QUANTITY</b></Col>
                <Col><b>PRICE</b></Col>
            </Row>
            <Row style={{marginTop:'30px'}}>
                <Col className="item-col">
                    <img src={katla} style={{width:'150px',borderRadius:'12px'}}/>
                    <div className="item-details">
                        <span><b>Catla</b></span>
                        <span>₹ 690.00</span>
                        <span>Medium(+20.00)</span>
                        <span className="remove-item">Remove Item</span>
                    </div>
                </Col>
                <Col>2</Col>
                <Col>₹ 1200.00</Col>
            </Row>
            <Row style={{marginTop:'30px'}}>
                <Col className="item-col">
                    <img src={katla} style={{width:'150px',borderRadius:'12px'}}/>
                    <div className="item-details">
                        <span><b>Catla</b></span>
                        <span>₹ 690.00</span>
                        <span>Medium(+20.00)</span>
                        <span className="remove-item">Remove Item</span>
                    </div>
                </Col>
                <Col>2</Col>
                <Col>₹ 1200.00</Col>
            </Row>
            </Container>
            </Container>
            <Footer/>
        </div>
    )
}

export default Cart
