import React, { useState } from 'react'
import { useParams } from 'react-router'
import katla from '../../images/katla.jpg'
import './Product.css'
import {Link} from 'react-router-dom'
import Footer from '../Home/Footer/Footer'


function Product() {
    const [amt, setamt]=useState(1);

    const {name}=useParams();
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
    const [price,setPrice]=useState(400);
    const handlePrice=(p)=>{
        setExtra(p);
    }

    return (
        <div>
        <div className="prod-container">
            <img src={katla} alt="Product image" className="prod-img"/>
            <div className="details">
                <div className="name-price">
                    <span style={{fontSize:"24px",fontWeight:"600"}}>{name}</span>
                    <span style={{fontSize:"20px",color:'#0E79BD'}}>₹ {price+extra}.00</span>
                    <span style={{fontSize:'18px',color:'gray',textDecoration:'line-through'}}>₹ 600.00</span>
                </div>
                <div className="buy">
                    <span className="stock">In Stock</span>
                    <div className="addProd">
                        <span onClick={()=>setamt(amt+1)} style={{cursor:"pointer"}}>+</span>
                        <span>{amt}</span>
                        <span onClick={decrease} style={{cursor:"pointer"}}>-</span>
                    </div>
                </div>
            </div>
            <hr className="hrLine"/>
            <div className="option-container">
                <p style={{fontWeight:'600'}}>Select option</p>
                <div className="options">
                    <span className={`opt ${extra===10 ? "activeOpt":""}`} onClick={()=>handlePrice(10)}>Small(+10.00)</span>
                    <span className={`opt ${extra===20 ? "activeOpt":""}`} onClick={()=>handlePrice(20)}>Medium(+20.00)</span>
                    <span className={`opt ${extra===30 ? "activeOpt":""}`} onClick={()=>handlePrice(30)}>Large(+30.00)</span>
                </div>
            </div>
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
            <div className="similar">
                <p style={{fontWeight:'600',lineHeight:'40px'}}>View similar products</p>
                <div className="similar-products">
                <div className="product">
                    <img src={katla} alt="proctuct-img" className="product-img"/>
                    <span className="prod-name">Catla</span>
                    <span className="disc-price">₹ 400.00</span>
                    <span className="orig-price">₹ 600.00</span>
                    <hr style={{width:"100%",backgroundColor:"gray",opacity:"0.4"}}/>
                    <span className="add"><Link to="/product/Catla">Add to cart</Link></span>
                </div>
                <div className="product">
                    <img src={katla} alt="proctuct-img" className="product-img"/>
                    <span className="prod-name">Catla</span>
                    <span className="disc-price">₹ 400.00</span>
                    <span className="orig-price">₹ 600.00</span>
                    <hr style={{width:"100%",backgroundColor:"gray",opacity:"0.4"}}/>
                    <span className="add"><Link to="/product/Catla">Add to cart</Link></span>
                </div>
                <div className="product">
                    <img src={katla} alt="proctuct-img" className="product-img"/>
                    <span className="prod-name">Catla</span>
                    <span className="disc-price">₹ 400.00</span>
                    <span className="orig-price">₹ 600.00</span>
                    <hr style={{width:"100%",backgroundColor:"gray",opacity:"0.4"}}/>
                    <span className="add"><Link to="/product/Catla">Add to cart</Link></span>
                </div>
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
        </div>
        <Footer/>
        </div>
    )
}

export default Product
