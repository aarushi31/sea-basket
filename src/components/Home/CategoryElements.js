import React, { useEffect, useState } from 'react'
import './Categories.css'
import c1 from '../../images/c1.png';
import c2 from '../../images/c2.png';
import c0 from '../../images/c0.png';
import {Container} from 'react-bootstrap'
import axios from 'axios'

function CategoryElements() {
    const [categories,setCategory]=useState([]);
    useEffect(()=>{
        axios.get('https://seabasket.citypetcare.in/api/getCategories/key/654784578114')
        .then(res=>{
            console.log(res);
            setCategory(res.data.response)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
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
            {categories.map((item,index)=>{
                return(
                    <div className="box" key={index}>
                        <img src={item.image} style={{width:"205px",height:"100px"}}/>
                        <span style={{fontSize:"16px",fontWeight:"500"}}>{item.name}</span>
                    </div>
                )
            })}
        </Container>
    )
}

export default CategoryElements
