import React, { useEffect, useState } from 'react'
import {Form,InputGroup,Button,FormControl, Alert,Modal} from 'react-bootstrap'
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
import { useHistory } from 'react-router';


//add address
function MyVerticallyCenteredModal(props) {
    const shapassword=localStorage.getItem('password')
    const username=localStorage.getItem('customer_id');
    const token = Buffer.from(`${username}:${shapassword}`, 'utf8').toString('base64')
    const [firstname,setFname]=useState();
    const [lastname,setLname]=useState();
    const [add1,setAdd1]=useState();
    const [add2,setAdd2]=useState();
    const [city,setCity]=useState();
    const [postCode,setPcode]=useState();
    const [countryCode,setCcode]=useState();
    const [fax,setFax]=useState()
    const [telephone,setTelephone]=useState();
    const [message,setMessage]=useState('')



    const handleAdd=(e)=>{
        e.preventDefault();
        setMessage('');
        var data = JSON.stringify({
            "first_name": firstname,
            "last_name": lastname,
            "address_1": add1,
            "address_2": add2,
            "city": city,
            "postcode": parseInt(postCode),
            "country_id": parseInt(countryCode),
            "set_default": false,
            "company": "sea-basket",
            "fax": fax,
            "telephone": telephone
          });
          
          var config = {
            method: 'post',
            url: 'http://proffus.pythonanywhere.com/api/addaddress',
            headers: { 
              'Authorization': `Basic ${token}`, 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            if(response.data.success){
                setMessage('Address added successfully!')
            }
          })
          .catch(function (error) {
            console.log(error);
          });
          

    }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add new address
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="profile-row">
                        <div className="input">
                            <img src={userIcon} alt="user icon"/>
                            <input placeholder="First name" type="text" value={firstname} onChange={(e)=>setFname(e.target.value)}/>
                            
                        </div>
                        <div className="input">
                            <img src={userIcon} alt="user icon"/>
                            <input placeholder="Last name" type="text" value={lastname} onChange={(e)=>setLname(e.target.value)}/>
                            
                        </div>
                    </div>
                            <div className="profile-row">
                        <div className="input">
                            <img src={hashIcon} alt="hash icon"/>
                            <input placeholder="Postal code" type="text" value={postCode} onChange={(e)=>setPcode(e.target.value)}/>
                            
                        </div>
                        </div>
                    <div className="full-width">
                        <img src={locationIcon} alt="location"/>
                        <input placeholder="Address" type="text" value={add1} onChange={(e)=>setAdd1(e.target.value)}/>
                    </div>
                    <div className="full-width">
                        <img src={locationIcon} alt="location"/>
                        <input placeholder="Address" type="text" value={add2} onChange={(e)=>setAdd2(e.target.value)}/>
                        
                    </div>
                    <div className="full-width">
                        <img src={locationIcon} alt="location"/>
                        <input placeholder="City" type="text" value={city} onChange={(e)=>setCity(e.target.value)}/>
                        
                    </div>
                    <div className="profile-row">
                        
                        <div className="input">
                            <img src={hashIcon} alt="hash icon"/>
                            <input placeholder="Country code" type="text" value={countryCode} onChange={(e)=>setCcode(e.target.value)}/>
                            
                        </div>
                    </div>
                    <div className="profile-row">
                    <div className="input">
                            <img src={phoneIcon} alt="phone icon"/>
                            <input placeholder="Mobile number" type="text" onChange={(e)=>setTelephone(e.target.value)} value={telephone}/>
                            
                        </div>
                    
                    
                        <div className="input">
                            <img src={faxIcon} alt="fax icon"/>
                            <input placeholder="Fax" type="text" onChange={(e)=>setFax(e.target.value)} value={fax}/>
                            
                        </div>
                        
                        
                    </div>
                                
        </Modal.Body>
        <Modal.Footer>
            {message && <Alert variant="success">{message}</Alert>}
            <Button onClick={handleAdd}>Add address</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );

    }




function Profile() {
    const history=useHistory();
    const user=useSelector(selectUser);
    const [firstname,setFname]=useState();
    const [lastname,setLname]=useState();
    const [email,setemail]=useState();
    const [telephone,setTelephone]=useState();
    const [fax,setFax]=useState();
    
    const [modalShow, setModalShow] = React.useState(false);

    
    const [password,setPassword]=useState();
    const [newsLetter,setNewsletter]=useState(true);
    const [error,setError]=useState('');
    const [message,setMessage]=useState('')
    const [address,setAddress]=useState([])

    const customer_id=localStorage.getItem('customer_id')
    const shapassword=localStorage.getItem('password')
    console.log(customer_id)
    console.log(password)

    const postData={
        'customer_id':customer_id
    }

    const data=''

    const username=localStorage.getItem('customer_id');
    const token = Buffer.from(`${username}:${shapassword}`, 'utf8').toString('base64')

    var config = {
        method: 'post',
        url: 'http://proffus.pythonanywhere.com/api/getuserdetails',
        headers: { 
          'Authorization': `Basic ${token}`
        },
        data : data
    };

    useEffect(()=>{
        axios(config)
        .then(res=>{
            console.log(res);
            setFname(res.data.Details.first_name)
            setLname(res.data.Details.last_name)
            setTelephone(res.data.Details.telephone)
            setFax(res.data.Details.fax)
            setemail(res.data.Details.email)
        })
        .catch(err=>{
            console.log(err)
        })

        axios.post('http://proffus.pythonanywhere.com/api/getaddress',{
            auth: {
                username: customer_id,
                password: shapassword
              }
        },config)
        .then(res=>{
            console.log(res)
            setAddress(res.data.Address);
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    // const postdata={
       
    //     first_name:firstname, 
    //     last_name:lastname, 
    //     email:email, 
    //     telephone:telephone,
    //     fax:fax, 
    //     customer_id:customer_id
    // }

    
    const handleSubmit=(e)=>{
        
        e.preventDefault();

        var data = JSON.stringify({
            "first_name": firstname,
            "last_name": lastname,
            "email": email,
            "telephone": telephone,
            "fax": fax,
            "customer_id": customer_id
          });
          
          var config = {
            method: 'post',
            url: 'http://proffus.pythonanywhere.com/api/editCustomer',
            headers: { 
              'Authorization': `Basic ${token}`, 
              'Content-Type': 'application/json'
            },
            data : data
          };
          

        setError('')


        axios(config)
        .then(res=>{
            console.log(res)
            if(res.data.success){
                setMessage('Profile has been updated succesfully')
                localStorage.setItem('email',email);
            }
        })
        .catch(err=>{
            console.log(err)
            setError("Error updating profile")
        })
    }

    const handleChange=(e)=>{
        history.push('/changePassword')
    }

    const [addressData,setAddressData]=useState()

    const handleAddAdress=(e)=>{
        e.preventDefault();
        setModalShow(true)
        
    }

    const handleDeleteAddress=(aid,e)=>{
        e.preventDefault();
        var data = JSON.stringify({
            "address_id": parseInt(aid)
          });
          
          var config = {
            method: 'post',
            url: 'http://proffus.pythonanywhere.com/api/deleteaddress/',
            headers: { 
              'Authorization': `Basic ${token}`, 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            history.push('/editprofile')
          })
          .catch(function (error) {
            console.log(error);
          });
          
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
                        
                        
                    </div>
                    
                        <div className="profile-row btn">
                        <button className="save" onClick={handleSubmit}>Save changes</button>
                        <button className="change-password" onClick={handleChange}>Change password</button>
                        </div>

                        {address && address.map((add,idx)=>{
                            return(
                                <div key={idx} style={{marginTop:'100px'}}>
                                <span style={{marginTop:'100px'}}>Address {idx+1}</span>
                                <span style={{marginLeft:'100px',color:'red',cursor:'pointer'}} onClick={(e)=>handleDeleteAddress(add.address_id,e)}>Delete Address</span>
                                <div className="profile-row">
                        <div className="input">
                            <img src={userIcon} alt="user icon"/>
                            <input placeholder="First name" type="text" value={add.first_name}/>
                            
                        </div>
                        <div className="input">
                            <img src={userIcon} alt="user icon"/>
                            <input placeholder="Last name" type="text" value={add.last_name}/>
                            
                        </div>
                    </div>
                            <div className="profile-row">
                        <div className="input">
                            <img src={hashIcon} alt="hash icon"/>
                            <input placeholder="Postal code" type="text" value={add.postcode}/>
                            
                        </div>
                        </div>
                    <div className="full-width">
                        <img src={locationIcon} alt="location"/>
                        <input placeholder="Address" type="text" value={add.address1}/>
                    </div>
                    <div className="full-width">
                        <img src={locationIcon} alt="location"/>
                        <input placeholder="Address" type="text" value={add.address2}/>
                        
                    </div>
                    <div className="full-width">
                        <img src={locationIcon} alt="location"/>
                        <input placeholder="City" type="text" value={add.city}/>
                        
                    </div>
                    <div className="profile-row">
                        
                        <div className="input">
                            <img src={hashIcon} alt="hash icon"/>
                            <input placeholder="Country code" type="text" value={add.country_id}/>
                            
                        </div>
                    </div>
                                </div>
                            )
                        })}
                        
                    <div className="profile-row btn">
                        {/* <button className="change-password" onClick={handleEditAddress}>Edit Address</button> */}
                        <button className="save" onClick={handleAddAdress}>Add address</button>
                    </div>
                    {message && <Alert variant="success" style={{marginTop:'60px'}}>{message}</Alert>}
                    {error && <Alert variant="danger" style={{marginTop:'60px'}}>{error}</Alert>}
                </form>
            </div>
        </div>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        <Footer/>
        </>
    )
}

export default Profile
