import React, { useEffect, useState,useReducer } from 'react'
import { Redirect, useParams } from 'react-router'
import katla from '../../images/katla.jpg'
import './Product.css'
import {Link} from 'react-router-dom'
import Footer from '../Home/Footer/Footer'
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {selectUser} from '../../features/userSlice'
import heart_outline from '../../images/icons/heart_outline.svg'
import heart_filled from '../../images/icons/heart_filled.svg'


function Product() {
    const user=useSelector(selectUser)
    const [amt, setamt]=useState(1);

    const [deets,setDeets]=useState({});
    const [related,setRelated]=useState([]);
    const {product_id}=useParams();
    console.log(product_id)


    useEffect(()=>{

        axios.get(`https://seabasket.citypetcare.in/api/getProduct/p_id/${product_id}/key/654784578114`)
        .then(res=>{
            console.log(res.data.response.product);
            setDeets(res.data.response.product)
            console.log(res.data.response.related);
            setRelated(res.data.response.related)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])


    const decrease=()=>{
        let tempamt=amt-1;
        if(tempamt<=0){
            setamt(0);
        }
        else{
            setamt(tempamt);
        }
    }

    const [extra,setExtra]=useState(20);
    const Pprice=deets.special?parseFloat(deets.special):parseFloat(deets.price);
    const [price,setPrice]=useState();

    console.log(price)
    const handlePrice=(p)=>{
        setExtra(p);
    }

    // const postdata={
    //     customer_id:parseInt(user.customer_id),
    //     product_id:parseInt(product_id),
    //     quantity:amt

    // }
    // let config={
    //     headers:{
    //         'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
    //     }
    // }

    // const addToCart=()=>{
    //     if(amt==0){
    //         window.alert('Please select the no. of product');
    //     }
    //     else{
    //         axios.post('https://seabasket.citypetcare.in/api/addcart/key/654784578114',postdata,config)
    //         .then(res=>{
    //             console.log(postdata.customer_id)
    //             console.log(postdata.product_id)
    //             console.log(res);
                
    //         })
    //         .catch(err=>{
    //             console.log(err)
    //         })

    //     }
    // }

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
        <div>
        <div className="prod-container">
            
            <div className="details">
            <img src={deets.image} alt="Product image" className="prod-img"/>
                <div className="small-container">
                <div className="prod-deets">
                    <div className="name-price">
                        <span style={{fontSize:"24px",fontWeight:"600"}}>{deets.name} <span style={{cursor:'pointer'}}><img src={heart_outline} alt="Wishlist" onClick={(e)=>addWishlist(e)} data-wishlist /></span></span>
                        <span style={{fontSize:"20px",color:'#0E79BD'}}>₹ {Pprice+extra}</span>
                        {deets.special && <span style={{fontSize:'18px',color:'gray',textDecoration:'line-through'}}>₹ {parseFloat(deets.price)}</span>}

                    </div>
                    
                    <span className="stock">In Stock</span>
                </div>
                <hr style={{width:'100%',background:'black',marginLeft:'20px'}}/>
               
                
                <div className="buy">
                    {/* <span className="stock">In Stock</span>
                    <div className="addProd">
                        <span onClick={()=>setamt(amt+1)} style={{cursor:"pointer"}}>+</span>
                        <span>{amt}</span>
                        <span onClick={decrease} style={{cursor:"pointer"}}>-</span>
                    </div> */}
                    <p style={{fontWeight:'600'}}>Select option</p>
                <div className="options">
                    <span className={`opt ${extra===10 ? "activeOpt":""}`} onClick={()=>handlePrice(10)}>Small(+10.00)</span>
                    <span className={`opt ${extra===20 ? "activeOpt":""}`} onClick={()=>handlePrice(20)}>Medium(+20.00)</span>
                    <span className={`opt ${extra===30 ? "activeOpt":""}`} onClick={()=>handlePrice(30)}>Large(+30.00)</span>
                </div>
                {/* <hr style={{width:'40vw',background:'black',marginRight:'40px'}}/> */}
                <div className="amt-container">
                <span style={{fontWeight:'600',position:'relative',top:'40px'}}>Choose Quantity</span>
                <div className="addProd">
                    <span onClick={()=>setamt(amt+1)} style={{cursor:"pointer"}}>+</span>
                    <span>{amt}</span>
                    <span onClick={decrease} style={{cursor:"pointer"}}>-</span>
                </div>
                </div>
                </div>
                </div>
            </div>
            {/* <hr className="hrLine"/>
            <div className="option-container">
                
            </div> */}
            <hr className="hrLine"/>
            <div className="description">
                <p style={{fontWeight:'600',lineHeight:'40px'}}>Description</p>
                <p style={{marginTop:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <hr className="hrLine"/>
            <div className="specification">
                <p style={{fontWeight:'600',lineHeight:'40px'}}>Specification</p>
                <p style={{marginTop:'20px'}}><b>Specification 1 :</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <p><b>Specification 2 :</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <p><b>Specification 3 :</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <p><b>Specification 4 :</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <p><b>Specification 5 :</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <p><b>Specification 6 :</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <hr className="hrLine"/>
            <div className="buy-buttons">
                <button className="button add-to-cart">Add to cart</button>
                <button className="button buyNow">Buy now</button>
            </div>
            <div className="similar">
                <p style={{fontWeight:'600',lineHeight:'40px'}}>View similar products</p>
                <div className="similar-products">
                    {related.map((item,index)=>{
                        return(
                                <div className="product">
                                    <img src={item.thumb} alt="proctuct-img" className="product-img"/>
                                    <span className="prod-name">{item.name}</span>
                                    <span className="disc-price">₹ {item.special?parseFloat(item.special):parseFloat(item.price)}</span>
                                    {item.special && <span className="orig-price">₹ {parseFloat(item.price)}</span>}
                                    <hr style={{width:"100%",backgroundColor:"gray",opacity:"0.4"}}/>
                                    <div style={{display:'flex',width:'100%',justifyContent:'space-evenly'}}>
                                    <span className="add"><a onClick={() => {window.location.href=`/product/${item.product_id}`}}>Add to cart</a></span>
                                    <span style={{cursor:'pointer'}}><img src={heart_outline} alt="Wishlist" onClick={(e)=>addWishlist(e)} data-wishlist /></span>
                                    </div>
                                </div>
                        )
                    })}
                
                
                
                
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default Product
