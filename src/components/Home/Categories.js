import React from 'react'
import './Categories.css'
import CategoryElements from './CategoryElements'
import {Container} from 'react-bootstrap'

function Categories() {
    return (
        // <div style={{textAlign:"center",width:"100vw",marginTop:"150px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",flexWrap:'wrap'}}>
        <Container style={{textAlign:"center",width:"100vw",marginTop:"150px"}}>
            <h2 className="heading" style={{fontSize:"30px"}}><b>HOW IT WORKS</b></h2>
            <p className="subheading" style={{fontSize:"18px"}}>Sea Basket delivers fresh sourced seafood in a few easy clicks</p>
            <h3 className="subHeading2" style={{fontSize:"20px",fontWeight:'600'}}>CATEGORIES</h3>
            <CategoryElements/>
        </Container>
    )
}

export default Categories
