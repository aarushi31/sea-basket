import React,{useState} from 'react'
import { useHistory } from 'react-router';
import eye from '../../images/icons/eye.png'
import lock from '../../images/icons/lock.png'
import Footer from '../Home/Footer/Footer';

function ChangePassword() {
    const history=useHistory();
    const [old,setOld]=useState('');
    const [newP,setNew]=useState('');
    const [confirm,setConfirm]=useState('');

    const [oldType,setOldType]=useState('password');
    const [newType,setNewType]=useState('password');
    const [confirmType,setConfirmType]=useState('password');

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

    const handlesave=()=>{
        if(newP!==confirm){
            window.alert('New and confirm passwords are different')
        }
        else if(!newP || !confirm){
            window.alert('Please fill all the fields')
        }
        else if(newP===old){
            window.alert("You can't update to your old password")
        }
        else{
            window.alert('Your password has been updated');
            history.push('/editprofile')
        }
    }

    return (
        <>
            <div className="profile-container">
                <center><h2 className="profile-heading">Change Password</h2></center>
                    <div className="form">
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
