import React,{useEffect, useReducer, useState} from 'react'
import Footer from '../Home/Footer/Footer'
import {Container,Row,Col} from 'react-bootstrap'
import './Cart.css'
import katla from '../../images/katla.jpg'

import Login from '../Login/Login';
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux';
import {selectUser} from '../../features/userSlice'
import { Redirect } from 'react-router'

function Cart() {
    
    // if(!state.loggedin){
    //     return(
    //         <Login/>
    //     )
    // }
    const [cart,setCart]=useState([]);
    const user=useSelector(selectUser);
   
    let config={
        headers:{
            'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
        }
    }

    // const postdata={
    //     customer_id:user.customer_id
    // };
    // console.log(postdata)

    // useEffect(()=>{
    //     axios.post('https://seabasket.citypetcare.in/api/cartproduct/key/654784578114',postdata,config)
    //     .then(res=>{
    //         console.log(res);
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // },[])

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
            <div className="buy-buttons" style={{justifyContent:'center',width:'100%'}}>
                <button className="button buyNow">Place order</button>
            </div>
            </Container>
            <Footer/>
        </div>
    )
}

export default Cart
