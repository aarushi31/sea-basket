import React from 'react'
import './Products.css'
import katla from '../../../images/katla.jpg';
import {Link} from 'react-router-dom'

function Products() {
    return (
        <div className="product-container">
            <div className="filters">
                <span className="filter-label" style={{marginTop:"10px"}}>Price</span>
                <select name="filter" id="select-filter">
                    <option value="" disabled selected>Select</option>
                    <option value="lowToHigh">Low to high</option>
                    <option value="highToLow">High to low</option>
                </select>
                <span className="filter-label">From ₹ 
                <input type="text" placeholder="price" className="input-box"/></span>
                <span className="filter-label">To ₹ 
                <input type="text" placeholder="price" className="input-box"/></span>
                
            </div>
            <div className="buttons">
                <button className="btn remove" style={{border:'1px solid #0E79BD'}}>Remove Filter</button>
                <button className="btn apply" style={{background:'#0E79BD',color:'white'}}>Apply Filter</button>
            </div>
            <hr className="line2"/>
            <div className="products">
                <div className="product">
                    <img src={katla} alt="proctuct-img" className="product-img"/>
                    <span className="prod-name">Catla</span>
                    <span className="disc-price">₹ 400.00</span>
                    <span className="orig-price">₹ 600.00</span>
                    <hr style={{width:"100%",backgroundColor:"gray",opacity:"0.4"}}/>
                    <span className="add"><Link to="/product/Catla">Add to cart</Link></span>
                </div>
            </div>
        </div>
    )
}

export default Products
