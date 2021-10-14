import React,{useState} from 'react'
import { useHistory } from 'react-router';
import eye from '../../images/icons/eye.png'
import lock from '../../images/icons/lock.png'
import Footer from '../Home/Footer/Footer';
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux';
import {selectUser} from '../../features/userSlice'
import { Alert } from 'react-bootstrap';
import { Data } from '../Home/FAQ/Data';

function ChangePassword() {
    const user=useSelector(selectUser)
    const history=useHistory();
    const [old,setOld]=useState('');
    const [newP,setNew]=useState('');
    const [confirm,setConfirm]=useState('');

    const [oldType,setOldType]=useState('password');
    const [newType,setNewType]=useState('password');
    const [confirmType,setConfirmType]=useState('password');
    const [error,setError]=useState('');
    const [message,setMessage]=useState('');





    const handleEye1=()=>{
        if(oldType==='password'){
            setOldType('text')
        }
        else if(oldType==='text'){
            setOldType('password')
        }
    }

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
    const email=localStorage.getItem('email');

    const postdata={
        email:email,
        old_password:old,
        new_password:newP
    }
    //console.log(postdata.email)
    const handlesave=(e)=>{
        e.preventDefault()
        setError('')
        if(newP!==confirm){
            setError('New and confirm passwords are different')
        }
        else if(!newP || !confirm){
            setError('Please fill all the fields')
        }
        else if(newP===old){
            setError("You can't update to your old password")
        }
        else{
            axios.post('http://proffus.pythonanywhere.com/api/editPassword',postdata)
            .then(res=>{
                console.log(res);
                if(res.data.success){
                    setMessage('Password updated successfully!')
                }
                else if(!res.data.success){
                    setError(res.data.error)
                }
            })
            .catch(err=>{
                console.log(err);
                setError('Error updating password')
            })
        }
        setNew('')
        setOld('')
        setConfirm('')
    }

    return (
        <>
            <div className="profile-container">
                <center><h2 className="profile-heading">Change Password</h2></center>
                    <div className="form">
                        {error && <Alert variant="danger">{error}</Alert>}
                        {message && <Alert variant="success">{message}</Alert>}
                        <form>
                            <div className="full-width">
                                <img src={lock} alt="lock"/>
                                <input placeholder="Old Password" type={oldType} onChange={(e)=>setOld(e.target.value)} value={old}/>
                                <img src={eye} alt="clear" onClick={handleEye1} className="cross"/>
                            </div>
                            <div className="full-width">
                                <img src={lock} alt="lock"/>
                                <input placeholder="New Password" type={newType} onChange={(e)=>setNew(e.target.value)} value={newP}/>
                                <img src={eye} alt="visible" onClick={handleEye2} className="cross"/>
                            </div>
                            <div className="full-width">
                                <img src={lock} alt="lock"/>
                                <input placeholder="Confirm Password" type={confirmType} onChange={(e)=>setConfirm(e.target.value)} value={confirm}/>
                                <img src={eye} alt="clear" onClick={handleEye3} className="cross"/>
                            </div>
                            <div className="profile-row btn">
                                <button className="save" onClick={handlesave}>Change Password</button>
                            </div>
                        </form>
                    </div>
            </div>
            <Footer/>
        </>
    )
}

export default ChangePassword
