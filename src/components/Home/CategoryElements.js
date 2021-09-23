import React, { useEffect, useState } from 'react'
import './Categories.css'
import {db,auth} from '../../firebase'
import c1 from '../../images/c1.png';
import c2 from '../../images/c2.png';
import c0 from '../../images/c0.png';
import {Container} from 'react-bootstrap'

function CategoryElements() {
    // const [categories,setCategory]=useState([]);
    // useEffect(()=>{
    //     db.collection('categories')
    //     .get()
    //     .then(snapshot=>{
    //         const category=[]
    //         snapshot.forEach(doc=>{
    //             const data=doc.data()
    //             category.push(data)
    //         })
    //         setCategory(category)
    //         console.log(category);
    //         console.log(categories)
    //     })
    //     .catch(err=>console.log(err))
    // },[])
    return (
        <Container className="category-cont">
            
            <div className="box">
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
            </div>
        </Container>
    )
}

export default CategoryElements
