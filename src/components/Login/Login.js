import React,{useState,useReducer, useContext} from 'react'
import {Form,InputGroup,Button,FormControl, Alert} from 'react-bootstrap'
import axios from 'axios';
import { useHistory } from 'react-router';
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {login} from '../../features/userSlice'
import Footer from '../Home/Footer/Footer';
import mailIcon from '../../images/icons/mail.png'
import cross from '../../images/icons/cross.png'
import eye from '../../images/icons/eye.png'
import lock from '../../images/icons/lock.png'

function Login() {
    //const {state,dispatch}=useContext(UserContext)

    //const [state, dispatch] = useReducer(reducer, initialState);
    const dispatch=useDispatch();
    const [email,setemail]=useState();
    const [password,setPassword]=useState();
    const [customerid,setCustomerid]=useState();
    const [error,setError]=useState('')

    const history=useHistory();
    var data = JSON.stringify({
        "email": email,
        "password": password
      });
      
      var config = {
        method: 'post',
        url: 'http://proffus.pythonanywhere.com/api/login/',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios(config)
        .then(res=>{
            console.log(res);
            if(res.data.success){
                console.log(res.data.customer_id)
                dispatch(login({
                    email:email,
                    customer_id:res.data.customer_id,
                    password:res.data.sha,
                    loggedIn:true,
                    
                }))
                localStorage.setItem('loggedIn',true);
                localStorage.setItem('customer_id',res.data.customer_id);
                localStorage.setItem('email',email);
                localStorage.setItem('password',res.data.sha);
                history.push('/category');
                //window.alert("You have loggedin successfully");
                
            }
            else{
                setError(res.data.error);
            }
        })
        .catch(err=>{
            console.log(err);
            setError('Error logging in')
        })
        setemail('');
        setPassword('')

    }

    const [newType,setNewType]=useState('password');

    const handleEye2=()=>{
        if(newType==='password'){
            setNewType('text')
        }
        else if(newType==='text'){
            setNewType('password')
        }
    }

    const handlesave=(e)=>{
        e.preventDefault();
        history.push('/')
        //window.alert('Logged in successfully');
        localStorage.setItem('customer_id',5);
        localStorage.setItem('loggedIn',true);
        localStorage.setItem('email',email);
       
        window.location.href="/";
        

    }


    return (
        <>
        <div className="profile-container">
            <center><h2 className="profile-heading">Login</h2></center>
            <div className="form">
                {error && <Alert variant="danger">{error}</Alert>}
                <form onSubmit={handleSubmit}>
                    <div className="profile-row" style={{flexDirection:'column',justifyContent:'center',marginLeft:'20vw'}}>
                        <div className="input">
                            <img src={mailIcon} alt="mail icon" className="input-icon"/>
                            <input placeholder="Email" type="email" onChange={(e)=>setemail(e.target.value)} value={email}/>
                            <img src={cross} alt="clear" onClick={()=>setemail('')} className="cross"/>
                        </div>
                        <div className="input" style={{marginTop:'50px'}}>
                            <img src={lock} alt="lock" className="input-icon"/>
                            <input placeholder="New Password" type={newType} onChange={(e)=>setPassword(e.target.value)} value={password}/>
                            <img src={eye} alt="visible" onClick={handleEye2} className="cross"/>
                        </div>
                    </div>
                    <div className="profile-row btn" style={{marginLeft:'16vw'}}>
                        <button className="save" onClick={handleSubmit}>Login</button>
                    </div>
                </form>
            </div>
            <center><h2 className="profile-footer">OR</h2></center>
            <center><b>New here?</b><Link to="/register">Create an account</Link></center>
        </div>
        <Footer/>
        </>
    )
}

export default Login
