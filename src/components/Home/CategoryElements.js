import React, { useEffect, useState } from 'react'
import './Categories.css'
import c1 from '../../images/c1.png';
import c2 from '../../images/c2.png';
import c0 from '../../images/c0.png';
import {Container} from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from 'react-router';

function CategoryElements() {
    const history=useHistory();
    const [categories,setCategory]=useState([]);
    const config={
        headers:{
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Credentials':true
        }
    }

    useEffect(()=>{
        axios.post('http://proffus.pythonanywhere.com/api/getCategories/',config)
        .then(res=>{
            console.log(res);
            setCategory(res.data.Categories)

        
        })
        .catch(err=>{
            console.log(err)
        })

        
    },[])

    const setCategoryID=(id)=>{
        localStorage.setItem('cid',id);
        history.push('/category')
    }
    return (
        <Container className="category-cont">
            
            {/* <div className="box">
                <img src={c1} style={{width:"205px",height:"100px"}}/>
                <span style={{fontSize:"16px",fontWeight:"500"}}>Fish</span>
            </div>
            <div className="box">
                <img src={c0} style={{width:"205px",height:"100px"}}/>
                <span style={{fontSize:"16px",fontWeight:"500"}}>Crustaceans</span>
            </div>
            <div className="box">
                <img src={c2} style={{width:"205px",height:"100px"}}/>
                <span style={{fontSize:"16px",fontWeight:"500"}}>Exotic</span>
            </div> */}
            {categories && categories.map((item,index)=>{
                return(
                    <div className="box" key={index} onClick={()=>{setCategoryID(item.cid)}}>
                        <img src={item.url} style={{width:"205px",height:"100px"}}/>
                        <span style={{fontSize:"16px",fontWeight:"500"}}>{item.name}</span>
                    </div>
                )
            })}
        </Container>
    )
}

export default CategoryElements
