import React, { useState } from 'react'
import {Alert} from 'react-bootstrap'
import axios from 'axios';

function Pay() {

    const [total,setTotal]=useState(2000);
    const [message,setMessage]=useState('');
    const [error,setError]=useState('');

    const username=localStorage.getItem('customer_id');
    const password=localStorage.getItem('password')
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

    const handlePay=(e)=>{
        e.preventDefault();
        var data = JSON.stringify({
            "amount": parseInt(total)
          });
          
          var config = {
            method: 'post',
            url: 'http://proffus.pythonanywhere.com/api/make_payment',
            headers: { 
              'Authorization': `Basic ${token}`, 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            setMessage('Payment successful')
          })
          .catch(function (error) {
            console.log(error);
            setError('Payment unsuccessful')
          });
          

    }
    return (
        <div className="profile-container">
            <center><h2 className="profile-heading">Payment</h2></center>
            <div className="form">
                
                <form onSubmit={handlePay}>
                    <div className="profile-row" style={{flexDirection:'column',justifyContent:'center',marginLeft:'20vw'}}>
                        <div className="input">
                            
                            <input placeholder="Amount" type="text" value={total}/>
                        </div>
                    </div>
                    <div className="profile-row btn" style={{marginLeft:'16vw'}}>
                        <button className="save" onClick={handlePay}>Pay now</button>
                    </div>
                    {message && <Alert variant="success" style={{marginTop:'30px'}}>{message}</Alert>}
                    {error && <Alert variant="danger" style={{marginTop:'30px'}}>{error}</Alert>}
                </form>
            </div>
            
        </div>
    )
}

export default Pay

