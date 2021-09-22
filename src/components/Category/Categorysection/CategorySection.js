import React from 'react'
import './CategorySec.css'
import c0 from '../../../images/c0.png';
import c1 from '../../../images/c1.png';
import c2 from '../../../images/c2.png';
import sub1 from '../../../images/sub1.png'
import sub2 from '../../../images/sub2.png'

function CategorySection() {
    return (
        <div style={{textAlign:"center",width:"100vw",marginTop:"150px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h3 className="category-heading">CATEGORIES</h3>
            <div style={{display:"flex",width:"1200px",justifyContent:"space-around",marginTop:"60px"}}>
            
            <div className="box">
                <img src={c1} style={{width:"205px",height:"100px"}}/>
                <span style={{fontSize:"24px",fontWeight:"500"}}>FISH</span>
            </div>
            <div className="box">
                <img src={c0} style={{width:"205px",height:"100px"}}/>
                <span style={{fontSize:"24px",fontWeight:"500"}}>CRUSTACEANS</span>
            </div>
            <div className="box">
                <img src={c2} style={{width:"205px",height:"100px"}}/>
                <span style={{fontSize:"24px",fontWeight:"500"}}>EXOTIC</span>
            </div>
        </div>
        <h3 className="category-heading2" style={{marginTop:"100px"}}>SUB-CATEGORIES</h3>
            <div style={{display:"flex",width:"1200px",justifyContent:"flex-start",marginTop:"60px"}}>
            
            <div className="box2">
                <img src={sub1} style={{width:"310px",height:"188px"}}/>
                <span style={{fontSize:"24px",fontWeight:"500",marginTop:"20px"}}>SEA FISH</span>
            </div>
            <div className="box2" style={{marginLeft:"122px"}}>
                <img src={sub2} style={{width:"310px",height:"188px"}}/>
                <span style={{fontSize:"24px",fontWeight:"500",marginTop:"20px"}}>RIVER FISH</span>
            </div>
        </div>
        <h3 className="category-heading3" style={{marginTop:"100px"}}>PRODUCTS</h3>
        <hr className="line"/>
        </div>
    )
}

export default CategorySection