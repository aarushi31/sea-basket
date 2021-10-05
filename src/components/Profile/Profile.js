import React, { useState } from 'react'
import {Form,InputGroup,Button,FormControl} from 'react-bootstrap'
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {selectUser} from '../../features/userSlice'
import userIcon from '../../images/icons/user.png'
import phoneIcon from '../../images/icons/phone.png'
import hashIcon from '../../images/icons/hash.png'
import faxIcon from '../../images/icons/fax.png'
import locationIcon from '../../images/icons/location.png'
import mailIcon from '../../images/icons/mail.png'
import cross from '../../images/icons/cross.png'
import './Profile.css'
import Footer from '../Home/Footer/Footer';


function Profile() {
    const user=useSelector(selectUser);
    const [firstname,setFname]=useState();
    const [lastname,setLname]=useState();
    const [email,setemail]=useState();
    const [telephone,setTelephone]=useState();
    const [fax,setFax]=useState();
    const [add1,setAdd1]=useState();
    const [add2,setAdd2]=useState();
    const [city,setCity]=useState();
    const [postCode,setPcode]=useState();
    const [countryCode,setCcode]=useState();
    const [zoneId,setZoneId]=useState();
    const [password,setPassword]=useState();
    const [newsLetter,setNewsletter]=useState(true);

    
    const handleSubmit=(e)=>{
        e.preventDefault();
        window.alert('Your profile has been updated')
    }





    return (
        <>
        <div className="profile-container">
            <center><h2 className="profile-heading">My profile</h2></center>
            <div className="form">
                <form>
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
                            <input placeholder="Postal code" type="text" onChange={(e)=>setPcode(e.target.value)} value={postCode}/>
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
                        <input placeholder="City" type="text" onChange={(e)=>setCity(e.target.value)} value={city}/>
                        <img src={cross} alt="clear" onClick={()=>setCity('')} className="cross"/>
                    </div>
                    <div className="profile-row">
                        <div className="input">
                            <img src={hashIcon} alt="hash icon"/>
                            <input placeholder="Zone Id" type="text" onChange={(e)=>setZoneId(e.target.value)} value={zoneId}/>
                            <img src={cross} alt="clear" onClick={()=>setZoneId('')} className="cross"/>
                        </div>
                        <div className="input">
                            <img src={hashIcon} alt="hash icon"/>
                            <input placeholder="Country code" type="text" onChange={(e)=>setCcode(e.target.value)} v/>
                            <img src={cross} alt="clear" onClick={()=>setFname('')} className="cross"/>
                        </div>
                    </div>
                    <div className="profile-row btn">
                        <button className="change-password">Change password</button>
                        <button className="save">Save changes</button>
                    </div>
                </form>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Profile
