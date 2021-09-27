import React,{useState,useReducer, useContext} from 'react'
import {Form,InputGroup,Button,FormControl} from 'react-bootstrap'
import axios from 'axios';
import { useHistory } from 'react-router';
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {login} from '../../features/userSlice'

function Login() {
    //const {state,dispatch}=useContext(UserContext)

    //const [state, dispatch] = useReducer(reducer, initialState);
    const dispatch=useDispatch();
    const [email,setemail]=useState();
    const [password,setPassword]=useState();
    const [customerid,setCustomerid]=useState();

    const history=useHistory();
    const postdata={
        email:email,
        password:password
    }

    let config={
        headers:{
            'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
        }
    }
    const handleSubmit=(e)=>{
        //e.preventDefault();
        axios.post('https://seabasket.citypetcare.in/api/login/key/654784578114',postdata,config)
        .then(res=>{
            console.log(res);
            if(res.data.success){
                dispatch(login({
                    email:email,
                    customer_id:res.data.userdata.customer_id,
                    loggedIn:true,
                    
                }))
                //window.alert("You have loggedin successfully");
                history.push('/category');
            }
            else{
                window.alert("Error logging in");
            }
        })
        .catch(err=>{
            console.log(err);
        })

    }


    return (
        <Form style={{padding:'30px 120px'}}>
            <center>Login | <Link to="/register">Create an account</Link></center>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="John" value={email} onChange={(e)=>setemail(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            </Form.Group>
            <Button variant="primary" onClick={(e)=>handleSubmit(e)}>Login</Button>{' '}
        </Form>
    )
}

export default Login
