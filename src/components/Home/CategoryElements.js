import React, { useEffect, useState } from 'react'
import './Categories.css'
import {db,auth} from '../../firebase'
import c1 from '../../images/c1.png';
import c2 from '../../images/c2.png';
import c0 from '../../images/c0.png';
import Categories from './Categories';

function CategoryElements() {
    const [categories,setCategory]=useState([]);
    useEffect(()=>{
        db.collection('categories')
        .get()
        .then(snapshot=>{
            const category=[]
            snapshot.forEach(doc=>{
                const data=doc.data()
                category.push(data)
            })
            setCategory(category)
            console.log(category);
            console.log(categories[0].title)
        })
        .catch(err=>console.log(err))
    },[])
    return (
        <div style={{display:"flex",width:"100vw",justifyContent:"space-around",marginTop:"3rem"}}>
            
            <div className="box">
                <img src={c1} style={{width:"170px"}}/>
                <span>{categories[0].title}</span>
            </div>
            <div className="box">
                <img src={c0} style={{width:"170px"}}/>
                <span>{categories[1].title}</span>
            </div>
            <div className="box">
                <img src={c2} style={{width:"170px"}}/>
                <span>{categories[2].title}</span>
            </div>
        </div>
    )
}

export default CategoryElements
