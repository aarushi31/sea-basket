import React, { useState } from 'react'
import {Form,InputGroup,Button,FormControl, Alert} from 'react-bootstrap'
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import userIcon from '../../images/icons/user.png'
import phoneIcon from '../../images/icons/phone.png'
import hashIcon from '../../images/icons/hash.png'
import faxIcon from '../../images/icons/fax.png'
import locationIcon from '../../images/icons/location.png'
import mailIcon from '../../images/icons/mail.png'
import cross from '../../images/icons/cross.png'
import eye from '../../images/icons/eye.png'
import lock from '../../images/icons/lock.png'
import Footer from '../Home/Footer/Footer';
import { useDispatch } from 'react-redux';
import {login} from '../../features/userSlice'


function Register() {
    const dispatch=useDispatch();
    const history=useHistory();
    const [firstname,setFname]=useState();
    const [lastname,setLname]=useState();
    const [email,setemail]=useState();
    const [telephone,setTelephone]=useState();
    const [fax,setFax]=useState();
    const [add1,setAdd1]=useState('');
    const [add2,setAdd2]=useState('');
    const [city,setCity]=useState();
    const [postCode,setPcode]=useState();
    const [countryCode,setCcode]=useState();
    const [zoneId,setZoneId]=useState();
    const [password,setPassword]=useState();
    const [newsLetter,setNewsletter]=useState(true);
    const [agree,setAgree]=useState(true);

    const [newP,setNew]=useState('');
    const [confirm,setConfirm]=useState('');

    const [newType,setNewType]=useState('password');
    const [confirmType,setConfirmType]=useState('password');
    const [error,setError]=useState('')

    const handleEye2=()=>{
        if(newType==='password'){
            setNewType('text')
        }
        else if(newType==='text'){
            setNewType('password')
        }
    }
    const handleEye3=()=>{
        if(confirmType==='password'){
            setConfirmType('text')
        }
        else if(confirmType==='text'){
            setConfirmType('password')
        }
    }

    // const handlesave=()=>{
    //     
    //     else{
    //         window.alert('Your have registered successfully');
    //         history.push('/')
    //     }
    // }


    // const postdata={
    //     first_name:firstname, 
    //     last_name:lastname, 
    //     email:email, 
    //     telephone:telephone,
    //     fax:fax, 
    //     company:"sea basket",
    //     address_1:add1, 
    //     address_2:add2, 
    //     city:city, 
    //     postcode:parseInt(postCode),
    //     country_id:parseInt(countryCode),
    //     password:password,
    //     newsletter:newsLetter?1:0,
    //     agree:1
    // }

    //console.log(typeof(postdata.postcode))

    

  const handleSubmit=async(e)=> {
        e.preventDefault()
        if(password!==confirm){
                    setError('New and confirm passwords are different')
                }
                else if(!password || !confirm){
                    setError('Please fill all the fields')
                }
        else{
            var data = JSON.stringify({
                "first_name": firstname,
                "last_name": lastname,
                "email": email,
                "telephone": telephone,
                "fax": fax,
                "company": "sea basket",
                "address_1": add1,
                "address_2": add2,
                "city": city,
                "postcode": parseInt(postCode),
                "country_id": parseInt(countryCode),
                "password": password,
                "newsletter": newsLetter?1:0,
                "agree": 1
              });

              console.log(password)
              
              var config = {
                method: 'post',
                url: 'http://proffus.pythonanywhere.com//api/register/',
                headers: { 
                  'Content-Type': 'application/json'
                },
                data : data
              };
              
              axios(config)
              .then(function (response) {
                console.log(JSON.stringify(response.data));
                history.push('/login')
              })
              .catch(function (error) {
                console.log(error);
              });
              
    }
    }

    return (
        <>
        <div className="profile-container">
            <center><h2 className="profile-heading">Register</h2></center>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="profile-row">
                        <div className="input">
                            <img src={userIcon} alt="user icon"/>
                            <input placeholder="First name" type="text" onChange={(e)=>setFname(e.target.value)} value={firstname}/>
                            <img src={cross} alt="clear" onClick={()=>setFname('')} className="cross"/>
                        </div>
                        <div className="input">
                            <img src={userIcon} alt="user icon"/>
                            <input placeholder="Last name" type="text" onChange={(e)=>setLname(e.target.value)} value={lastname}/>
                            <img src={cross} alt="clear" onClick={()=>setLname('')} className="cross"/>
                        </div>
                    </div>
                    <div className="profile-row">
                        <div className="input">
                            <img src={mailIcon} alt="mail icon"/>
                            <input placeholder="Email" type="email" onChange={(e)=>setemail(e.target.value)} value={email}/>
                            <img src={cross} alt="clear" onClick={()=>setemail('')} className="cross"/>
                        </div>
                        <div className="input">
                            <img src={phoneIcon} alt="phone icon"/>
                            <input placeholder="Mobile number" type="text" onChange={(e)=>setTelephone(e.target.value)} value={telephone}/>
                            <img src={cross} alt="clear" onClick={()=>setTelephone('')} className="cross"/>
                        </div>
                    </div>
                    <div className="profile-row">
                        <div className="input">
                            <img src={faxIcon} alt="fax icon"/>
                            <input placeholder="Fax" type="text" onChange={(e)=>setFax(e.target.value)} value={fax}/>
                            <img src={cross} alt="clear" onClick={()=>setFax('')} className="cross"/>
                        </div>
                        <div className="input">
                            <img src={hashIcon} alt="hash icon"/>
                            <input placeholder="Postal code" type="number" onChange={(e)=>setPcode(e.target.value)} value={postCode}/>
                            <img src={cross} alt="clear" onClick={()=>setPcode('')} className="cross"/>
                        </div>
                    </div>
                    <div className="full-width">
                        <img src={locationIcon} alt="location"/>
                        <input placeholder="Address" type="text" onChange={(e)=>setAdd1(e.target.value)} value={add1}/>
                        <img src={cross} alt="clear" onClick={()=>setAdd1('')} className="cross"/>
                    </div>
                    <div className="full-width">
                        <img src={locationIcon} alt="location"/>
                        <input placeholder="Address" type="text" onChange={(e)=>setAdd2(e.target.value)} value={add2}/>
                        <img src={cross} alt="clear" onClick={()=>setAdd2('')} className="cross"/>
                    </div>
                    <div className="full-width">
                        <img src={locationIcon} alt="location"/>
                        <input placeholder="City" type="text" onChange={(e)=>setCity(e.target.value)} value={city}/>
                        <img src={cross} alt="clear" onClick={()=>setCity('')} className="cross"/>
                    </div>
                    <div className="profile-row">
                        {/* <div className="input">
                            <img src={hashIcon} alt="hash icon"/>
                            <input placeholder="Zone Id" type="number" onChange={(e)=>setZoneId(e.target.value)} value={zoneId}/>
                            <img src={cross} alt="clear" onClick={()=>setZoneId('')} className="cross"/>
                        </div> */}
                        <div className="input">
                            <img src={hashIcon} alt="hash icon"/>
                            <input placeholder="Country code" type="number" onChange={(e)=>setCcode(e.target.value)} v/>
                            <img src={cross} alt="clear" onClick={()=>setCcode('')} className="cross"/>
                        </div>
                    </div>
                    <div className="full-width">
                                <img src={lock} alt="lock"/>
                                <input placeholder="Password" type={newType} onChange={(e)=>setPassword(e.target.value)} value={password}/>
                                <img src={eye} alt="visible" onClick={handleEye2} className="cross"/>
                            </div>
                            <div className="full-width">
                                <img src={lock} alt="lock"/>
                                <input placeholder="Confirm Password" type={confirmType} onChange={(e)=>setConfirm(e.target.value)} value={confirm}/>
                                <img src={eye} alt="clear" onClick={handleEye3} className="cross"/>
                            </div>
                            <div className="profile-row">
                                <div className="input-checkbox">
                            
                                    <input type="checkbox" id="newletter" name="newsletter" onChange={(e)=>setNewsletter(!newsLetter)} value={newsLetter}/>
                                    <label for="newletter">Subscribe to newletter</label>
                                </div>
                                <div className="input-checkbox">
                            
                                    <input type="checkbox" name="terms" id="terms" onChange={(e)=>setAgree(!agree)} value={agree}/>
                                    <label for="terms">Terms and conditions</label>
                            </div>
                    </div>

                    <div className="profile-row btn">
                        <center><button className="save" onClick={handleSubmit} disabled={agree}>Register</button></center>
                    </div>
                    {error && <Alert variant="danger" style={{marginTop:'30px'}}>{error}</Alert>}
                </form>
            </div>
            <center><h2 className="profile-footer">OR</h2></center>
            <center><b>Already a member?</b><Link to="/login">Login</Link></center>
        </div>
        <Footer/>
        </>
    )
}

export default Register
