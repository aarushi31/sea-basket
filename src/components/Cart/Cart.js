import React,{useEffect, useReducer, useState} from 'react'
import Footer from '../Home/Footer/Footer'
import {Container,Row,Col} from 'react-bootstrap'
import './Cart.css'
import katla from '../../images/katla.jpg'

import Login from '../Login/Login';
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux';
import {selectUser} from '../../features/userSlice'
import { Redirect, useHistory } from 'react-router'

function Cart() {
    const history=useHistory()
    const [cart,setCart]=useState([]);
    const user=useSelector(selectUser);
    const [total_price,settotalPrice]=useState();

    const username=localStorage.getItem('customer_id');
    const password=localStorage.getItem('password')
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
    
    
    const handleRemove=(pid,e)=>{
      e.preventDefault()
      var data = JSON.stringify({
          "pid": pid,
          "quantity": 1
        });
        
        var config = {
          method: 'post',
          url: 'http://proffus.pythonanywhere.com/api/removefromcart/',
          headers: { 
            'Authorization': `Basic ${token}`, 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          history.push('/cart')
          
        })
        .catch(function (error) {
          console.log(error);
        });
  }

    

    useEffect(()=>{
        var data=''
        var config = {
            method: 'post',
            url: 'http://proffus.pythonanywhere.com/api/cartproduct/',
            headers: { 
              'Authorization': `Basic ${token}`
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            // console.log(JSON.stringify(response.data));
            setCart(response.data.Cart)
            settotalPrice(response.data.total_price)
            
          })
          .catch(function (error) {
            console.log(error);
          });
          
    },[])

    


    const addOrder=()=>{
      history.push('/make-payment')
    }
   

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
            {cart && cart.map((item,idx)=>{
              // console.log(item.total_price)
                return(
                    <Row style={{marginTop:'30px'}} key={idx}>
                <Col className="item-col">
                    <img src={item.image_url} style={{width:'150px',borderRadius:'12px'}}/>
                    <div className="item-details">
                        <span><b>{item.name}</b></span>
                        {/* <span>₹ {item.total_price}</span> */}
                        <span className="remove-item" onClick={(e)=>handleRemove(item.pid,e)}>Remove Item</span>
                    </div>
                </Col>
                <Col>{item.quantity}</Col>
                <Col>₹ {item.total_price}</Col>
            </Row>
                )
            })}
            <Row>
              <Col>Total Price : ₹{total_price}</Col>
            </Row>
            
            </Container>
            <div className="buy-buttons" style={{justifyContent:'center',width:'100%'}}>
            
                {cart && <button className="button buyNow"  onClick={addOrder}>Place order</button>}

                {!cart && <center><span style={{fontSize:"30px",fontWeight:"500",color:"#0E79BD"}}>Cart is empty</span></center>}
            </div>
            </Container>
            <Footer/>
        </div>
    )
}

export default Cart
