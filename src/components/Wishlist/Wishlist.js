import React, { useEffect, useState } from 'react'
import catla from '../../images/katla.jpg'
import heart_outline from '../../images/icons/heart_outline.svg'
import heart_filled from '../../images/icons/heart_filled.svg'
import {Link} from 'react-router-dom';
import './Wishlist.css'
import Footer from '../Home/Footer/Footer'
import axios from 'axios'

function Wishlist() {
    const [items,setItems]=useState([]);

    const username=localStorage.getItem('customer_id');
    const password=localStorage.getItem('password')
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

    const removeWishlist=(pid,e)=>{
        e.preventDefault();
        
        //window.alert('Added to wishlist');
        //setImgSrc(heart_filled)
        
        //setAdded(!added);  
        var data = JSON.stringify({
            "pid": pid
          });  
        
        var config = {
            method: 'post',
            url: 'http://proffus.pythonanywhere.com/api/delfromwishlist/',
            headers: { 
              'Authorization': `Basic ${token}`,
              'Content-Type': 'application/json'
            },
            data:data
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
        if(e.target.dataset.wishlist!==undefined)
        {
            e.target.src=heart_outline;
            e.target.removeAttribute('data-wishlist');
        }
        else{

            e.target.src=heart_filled;
            e.target.setAttribute('data-wishlist','true');
        }
        setRemoved(true)
        
    }

    const [removed,setRemoved]=useState(false)
    useEffect(()=>{
        var config = {
            method: 'post',
            url: 'http://proffus.pythonanywhere.com/api/wishlist/',
            headers: { 
              'Authorization': `Basic ${token}`
            }
          };
          
          axios(config)
          .then(function (response) {
            // console.log(JSON.stringify(response.data));
            setItems(response.data.Wishlist)
          })
    },[removeWishlist])



    
    return (
        <>
        <div className="wishlist-container">
            <center><h2 className="wishlist-heading">My wishlist</h2></center>
            <div className="products">
                {items && items.map((item,idx)=>{
                    return(
                        <div className="product" key={item.pid}>
                            <img src={catla} alt="product-img" className="product-img"/>
                            <span className="prod-name">{item.name}</span>
                            <hr style={{width:"100%",backgroundColor:"gray",opacity:"0.4"}}/>
                            <div style={{display:'flex',width:'100%',justifyContent:'space-evenly'}}>
                                <span className="add"><Link to={{pathname: `/product/${item.pid}`}}>Add to cart</Link></span>
                                <span style={{cursor:'pointer'}}><img src={heart_filled} alt="Wishlist" onClick={(e)=>removeWishlist(item.pid,e)} data-wishlist /></span>
                            </div>
                        </div>
                    )
                })}
                
                {/* <div className="product">
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
                </div> */}
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Wishlist
