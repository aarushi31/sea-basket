import React, { useState } from 'react'
import { Alert, Container } from 'react-bootstrap'
import { useHistory } from 'react-router'
import cross from '../../images/icons/cross.png'
import eye from '../../images/icons/eye.png'
import lock from '../../images/icons/lock.png'


function Payment() {
    const history=useHistory()

    const [cardN,setCardN]=useState();
    const [year,setYear]=useState();
    const [month,setMonth]=useState();
    const [cvv,setCvv]=useState();
    const [newType,setNewType]=useState('password');
    const shapassword=localStorage.getItem('password')
    const username=localStorage.getItem('customer_id');
    const token = Buffer.from(`${username}:${shapassword}`, 'utf8').toString('base64')
    const [message,setMessage]=useState('')
    const [error,seterror]=useState('')

    const handleEye2=()=>{
        if(newType==='password'){
            setNewType('text')
        }
        else if(newType==='text'){
            setNewType('password')
        }
    }

    const handleSubmit=()=>{
        e.preventDefault();
        setMessage('');
        seterror('')

        var data = JSON.stringify({
            "card_number": parseInt(cardN),
            "exp_month": parseInt(month),
            "exp_year": parseInt(year),
            "cvv": parseInt(cvv)
          });
          
          var config = {
            method: 'post',
            url: 'http://proffus.pythonanywhere.com/api/addcard/',
            headers: { 
              'Authorization': `Basic ${token}`, 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            if(response.data.error){
                seterror(response.data.error)
            }
            else{
                setMessage('Card added successfully')
                history.push('/pay');
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div className="profile-container">
            <center><h2 className="profile-heading">Login</h2></center>
            <div className="form">
                {error && <Alert variant="danger">{error}</Alert>}
                <form onSubmit={handleSubmit}>
                    <div className="profile-row" style={{flexDirection:'column',justifyContent:'center',marginLeft:'20vw'}}>
                        <div className="input">
                            
                            <input placeholder="Card Number" type="text" onChange={(e)=>setCardN(e.target.value)} value={cardN}/>
                            <img src={cross} alt="clear" onClick={()=>setCardN('')} className="cross"/>
                        </div>
                        <div className="input">
                            
                            <input placeholder="Expiry month" type="number" onChange={(e)=>setMonth(e.target.value)} value={month}/>
                            <img src={cross} alt="clear" onClick={()=>setMonth('')} className="cross"/>
                        </div>
                        <div className="input">
                            
                            <input placeholder="Expiry year" type="number" onChange={(e)=>setYear(e.target.value)} value={year}/>
                            <img src={cross} alt="clear" onClick={()=>setYear('')} className="cross"/>
                        </div>
                        <div className="input" style={{marginTop:'50px'}}>
                            <img src={lock} alt="lock" className="input-icon"/>
                            <input placeholder="New Password" type={newType} onChange={(e)=>setCvv(e.target.value)} value={cvv}/>
                            <img src={eye} alt="visible" onClick={handleEye2} className="cross"/>
                        </div>
                    </div>
                    <div className="profile-row btn" style={{marginLeft:'16vw'}}>
                        <button className="save" onClick={handleSubmit}>Add Card</button>
                    </div>
                    {message && <Alert variant="success">{message}</Alert>}
                    {error && <Alert variant="danger">{error}</Alert>}
                </form>
            </div>
            
        </div>
    )
}

export default Payment
