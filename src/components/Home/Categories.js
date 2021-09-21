import React from 'react'
import './Categories.css'
import CategoryElements from './CategoryElements'

function Categories() {
    return (
        <div style={{textAlign:"center",width:"100vw",marginTop:"3rem"}}>
            <h2 className="heading">HOW IT WORKS</h2>
            <p className="subheading">Sea Basket delivers fresh sourced seafood in a few easy clicks</p>
            <h3 className="subHeading2">CATEGORIES</h3>
            <CategoryElements/>
        </div>
    )
}

export default Categories
