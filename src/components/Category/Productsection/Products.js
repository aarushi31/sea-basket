import React, { useEffect, useState } from 'react'
import './Products.css'
import katla from '../../../images/katla.jpg';
import {Link} from 'react-router-dom';
import axios from 'axios'
import heart_outline from '../../../images/icons/heart_outline.svg'
import heart_filled from '../../../images/icons/heart_filled.svg'

function Products() {

    const [products,setProducts]=useState([]);

    useEffect(()=>{
        axios.get('https://seabasket.citypetcare.in/api/products/key/654784578114')
        .then(res=>{
            console.log(res.data.response);
            setProducts(res.data.response);
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    const [added, setAdded] = useState(false);

    const addWishlist=(e)=>{
        e.preventDefault();
        //window.alert('Added to wishlist');
        //setImgSrc(heart_filled)
        
        //setAdded(!added);    
        
        if(e.target.dataset.wishlist!==undefined)
        {
            e.target.src=heart_filled;
            e.target.removeAttribute('data-wishlist');
        }
        else{

            e.target.src=heart_outline;
            e.target.setAttribute('data-wishlist','true');
        }
    }

 
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
            {/* <h3 className="product-headings">Our Bestsellers</h3> */}
            <div className="products">
                {products.map((item,index)=>{ 
                    return(
                        <div className="product">
                            <img src={item.thumb} alt="product-img" className="product-img"/>
                            <span className="prod-name">{item.name}</span>
                            <span className="disc-price">₹ {item.special?parseFloat(item.special):parseFloat(item.price)}</span>
                            {item.special && <span className="orig-price">₹ {parseFloat(item.price)}</span>}
                            <hr style={{width:"100%",backgroundColor:"gray",opacity:"0.4"}}/>
                            <div style={{display:'flex',width:'100%',justifyContent:'space-evenly'}}>
                            <span className="add"><Link to={{pathname: `/product/${item.product_id}`}}>Add to cart</Link></span>
                            <span style={{cursor:'pointer'}}><img src={heart_outline} alt="Wishlist" onClick={(e)=>addWishlist(e)} data-wishlist /></span>
                            </div>
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}

export default Products
