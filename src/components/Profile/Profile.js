import React, { useState } from 'react'
import {Form,InputGroup,Button,FormControl} from 'react-bootstrap'
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {selectUser} from '../../features/userSlice'

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
        <Form style={{padding:'30px 120px'}}>
            <center>Update your profile</center>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" placeholder="John" value={firstname} onChange={(e)=>setFname(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder="Doe" value={lastname} onChange={(e)=>setLname(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e)=>setemail(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Mobile no.</Form.Label>
                <Form.Control type="text" placeholder="Mobile no." value={telephone} onChange={(e)=>setTelephone(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Fax</Form.Label>
                <Form.Control type="text" placeholder="Fax" value={fax} onChange={(e)=>setFax(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Address Line 1</Form.Label>
                <Form.Control type="text" placeholder="address" value={add1} onChange={(e)=>setAdd1(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Address Line 2</Form.Label>
                <Form.Control type="text" placeholder="address" value={add2} onChange={(e)=>setAdd2(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="city" value={city} onChange={(e)=>setCity(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Postal code</Form.Label>
                <Form.Control type="number" placeholder="postal code" value={postCode} onChange={(e)=>setPcode(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Country Code</Form.Label>
                <Form.Control type="number" placeholder="eg +91" value={countryCode} onChange={(e)=>setCcode(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Zone Id</Form.Label>
                <Form.Control type="number" placeholder="zone id" value={zoneId} onChange={(e)=>setZoneId(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Password</Form.Label>
                <span><a href="/updatePassword">Update Password</a></span>
            </Form.Group>

            <Button variant="primary" onClick={(e)=>handleSubmit(e)}>Save</Button>{' '}
        </Form>
    )
}

export default Profile
