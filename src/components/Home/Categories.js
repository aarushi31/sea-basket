import React from 'react'
import './Categories.css'
import CategoryElements from './CategoryElements'

function Categories() {
    return (
        <div style={{textAlign:"center",width:"100vw",marginTop:"150px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h2 className="heading" style={{fontSize:"30px"}}>HOW IT WORKS</h2>
            <p className="subheading" style={{fontSize:"16px"}}>Sea Basket delivers fresh sourced seafood in a few easy clicks</p>
            <h3 className="subHeading2" style={{fontSize:"18px"}}>CATEGORIES</h3>
            <CategoryElements/>
        </div>
    )
}

export default Categories
