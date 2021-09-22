import React from 'react'
import Footer from '../Home/Footer/Footer'
import CategorySection from './Categorysection/CategorySection'
import Products from './Products/Products'

function Category() {
    return (
        <div style={{width:"100vw",marginTop:"200px",padding:"0,120px",overflowX:"hidden"}}>
            <center><h2 style={{fontSize:"48px",fontWeight:"500",color:"#0E79BD"}}>MARKET</h2></center>
            <CategorySection/>
            <Products/>
            <Footer/>
        </div>
    )
}

export default Category
