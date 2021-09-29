import React from 'react'
import Footer from '../Home/Footer/Footer'
import CategorySection from './Categorysection/CategorySection'
import Products from './Productsection/Products'

function Category() {
    return (
        <div style={{width:"100vw",marginTop:"70px",padding:"0,120px",overflowX:"hidden"}}>
            <center><h2 style={{fontSize:"30px",fontWeight:"600",color:"#0E79BD"}}>MARKET</h2></center>
            <CategorySection/>
            <Products/>
            <Footer/>
        </div>
    )
}

export default Category
