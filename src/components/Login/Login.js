import React,{useState,useReducer, useContext} from 'react'
import {Form,InputGroup,Button,FormControl} from 'react-bootstrap'
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
                localStorage.setItem('customer_id',res.data.userdata.customer_id);
                localStorage.setItem('loggedIn',true);
                localStorage.setItem('email',email);
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
                <form>
                    <div className="profile-row">
                        <div className="input">
                            <img src={mailIcon} alt="mail icon" className="input-icon"/>
                            <input placeholder="Email" type="email" onChange={(e)=>setemail(e.target.value)} value={email}/>
                            <img src={cross} alt="clear" onClick={()=>setemail('')} className="cross"/>
                        </div>
                        <div className="input">
                            <img src={lock} alt="lock" className="input-icon"/>
                            <input placeholder="New Password" type={newType} onChange={(e)=>setPassword(e.target.value)} value={password}/>
                            <img src={eye} alt="visible" onClick={handleEye2} className="cross"/>
                        </div>
                    </div>
                    <div className="profile-row btn">
                        <button className="save" onClick={handlesave}>Login</button>
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
