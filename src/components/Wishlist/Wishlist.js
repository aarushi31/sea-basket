import React from 'react'
import catla from '../../images/katla.jpg'
import heart_outline from '../../images/icons/heart_outline.svg'
import heart_filled from '../../images/icons/heart_filled.svg'
import {Link} from 'react-router-dom';
import './Wishlist.css'
import Footer from '../Home/Footer/Footer'

function Wishlist() {

    const removeWishlist=(e)=>{
        e.preventDefault();
        //window.alert('Added to wishlist');
        //setImgSrc(heart_filled)
        
        //setAdded(!added);    
        
        if(e.target.dataset.wishlist!==undefined)
        {
            e.target.src=heart_outline;
            e.target.removeAttribute('data-wishlist');
        }
        else{

            e.target.src=heart_filled;
            e.target.setAttribute('data-wishlist','true');
        }
    }

    return (
        <>
        <div className="wishlist-container">
            <center><h2 className="wishlist-heading">My wishlist</h2></center>
            <div className="products">
                <div className="product">
                    <img src={catla} alt="product-img" className="product-img"/>
                    <span className="prod-name">Catla</span>
                    <span className="disc-price">₹100</span>
                    <span className="orig-price">₹110</span>
                    <hr style={{width:"100%",backgroundColor:"gray",opacity:"0.4"}}/>
                    <div style={{display:'flex',width:'100%',justifyContent:'space-evenly'}}>
                        <span className="add"><Link to={{pathname: `/product/42`}}>Add to cart</Link></span>
                        <span style={{cursor:'pointer'}}><img src={heart_filled} alt="Wishlist" onClick={(e)=>removeWishlist(e)} data-wishlist /></span>
                    </div>
                </div>
                <div className="product">
                    <img src={catla} alt="product-img" className="product-img"/>
                    <span className="prod-name">Catla</span>
                    <span className="disc-price">₹100</span>
                    <span className="orig-price">₹110</span>
                    <hr style={{width:"100%",backgroundColor:"gray",opacity:"0.4"}}/>
                    <div style={{display:'flex',width:'100%',justifyContent:'space-evenly'}}>
                        <span className="add"><Link to={{pathname: `/product/42`}}>Add to cart</Link></span>
                        <span style={{cursor:'pointer'}}><img src={heart_filled} alt="Wishlist" onClick={(e)=>removeWishlist(e)} data-wishlist /></span>
                    </div>
                </div>
                <div className="product">
                    <img src={catla} alt="product-img" className="product-img"/>
                    <span className="prod-name">Catla</span>
                    <span className="disc-price">₹100</span>
                    <span className="orig-price">₹110</span>
                    <hr style={{width:"100%",backgroundColor:"gray",opacity:"0.4"}}/>
                    <div style={{display:'flex',width:'100%',justifyContent:'space-evenly'}}>
                        <span className="add"><Link to={{pathname: `/product/42`}}>Add to cart</Link></span>
                        <span style={{cursor:'pointer'}}><img src={heart_filled} alt="Wishlist" onClick={(e)=>removeWishlist(e)} data-wishlist /></span>
                    </div>
                </div>
                <div className="product">
                    <img src={catla} alt="product-img" className="product-img"/>
                    <span className="prod-name">Catla</span>
                    <span className="disc-price">₹100</span>
                    <span className="orig-price">₹110</span>
                    <hr style={{width:"100%",backgroundColor:"gray",opacity:"0.4"}}/>
                    <div style={{display:'flex',width:'100%',justifyContent:'space-evenly'}}>
                        <span className="add"><Link to={{pathname: `/product/42`}}>Add to cart</Link></span>
                        <span style={{cursor:'pointer'}}><img src={heart_filled} alt="Wishlist" onClick={(e)=>removeWishlist(e)} data-wishlist /></span>
                    </div>
                </div>
                <div className="product">
                    <img src={catla} alt="product-img" className="product-img"/>
                    <span className="prod-name">Catla</span>
                    <span className="disc-price">₹100</span>
                    <span className="orig-price">₹110</span>
                    <hr style={{width:"100%",backgroundColor:"gray",opacity:"0.4"}}/>
                    <div style={{display:'flex',width:'100%',justifyContent:'space-evenly'}}>
                        <span className="add"><Link to={{pathname: `/product/42`}}>Add to cart</Link></span>
                        <span style={{cursor:'pointer'}}><img src={heart_filled} alt="Wishlist" onClick={(e)=>removeWishlist(e)} data-wishlist /></span>
                    </div>
                </div>
                <div className="product">
                    <img src={catla} alt="product-img" className="product-img"/>
                    <span className="prod-name">Catla</span>
                    <span className="disc-price">₹100</span>
                    <span className="orig-price">₹110</span>
                    <hr style={{width:"100%",backgroundColor:"gray",opacity:"0.4"}}/>
                    <div style={{display:'flex',width:'100%',justifyContent:'space-evenly'}}>
                        <span className="add"><Link to={{pathname: `/product/42`}}>Add to cart</Link></span>
                        <span style={{cursor:'pointer'}}><img src={heart_filled} alt="Wishlist" onClick={(e)=>removeWishlist(e)} data-wishlist /></span>
                    </div>
                </div>
                <div className="product">
                    <img src={catla} alt="product-img" className="product-img"/>
                    <span className="prod-name">Catla</span>
                    <span className="disc-price">₹100</span>
                    <span className="orig-price">₹110</span>
                    <hr style={{width:"100%",backgroundColor:"gray",opacity:"0.4"}}/>
                    <div style={{display:'flex',width:'100%',justifyContent:'space-evenly'}}>
                        <span className="add"><Link to={{pathname: `/product/42`}}>Add to cart</Link></span>
                        <span style={{cursor:'pointer'}}><img src={heart_filled} alt="Wishlist" onClick={(e)=>removeWishlist(e)} data-wishlist /></span>
                    </div>
                </div>
                <div className="product">
                    <img src={catla} alt="product-img" className="product-img"/>
                    <span className="prod-name">Catla</span>
                    <span className="disc-price">₹100</span>
                    <span className="orig-price">₹110</span>
                    <hr style={{width:"100%",backgroundColor:"gray",opacity:"0.4"}}/>
                    <div style={{display:'flex',width:'100%',justifyContent:'space-evenly'}}>
                        <span className="add"><Link to={{pathname: `/product/42`}}>Add to cart</Link></span>
                        <span style={{cursor:'pointer'}}><img src={heart_filled} alt="Wishlist" onClick={(e)=>removeWishlist(e)} data-wishlist /></span>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Wishlist
