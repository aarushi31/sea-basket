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
import { Alert } from 'react-bootstrap'


function Product() {
    const user=useSelector(selectUser)
    const [amt, setamt]=useState(1);

    const [desc,setDesc]=useState();
    const [spec,setSpec]=useState();
    const [name,setName]=useState();
    const [optionId1,setOptionId1]=useState();
    const [optionId2,setOptionId2]=useState();
    const [optionId3,setOptionId3]=useState();
    const [sale,setSale]=useState();
    const [actual,setActual]=useState()
    const [inStock,setInstock]=useState()
    const [url,setUrl]=useState();
    const [message,setMessage]=useState('')

    const [option_id,setOptionId]=useState();
    
    const {pid}=useParams();

    const username=localStorage.getItem('customer_id');
    const password=localStorage.getItem('password')
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

    console.log(pid)


    useEffect(()=>{

        axios.post(`http://proffus.pythonanywhere.com/api/getProduct/p_id/${pid}`)
        .then(res=>{
            console.log(res.data.Detail);
            setName(res.data.Detail.name);
            setDesc(res.data.Detail.description);
            setSpec(res.data.Detail.specification);
            setSale(res.data.Detail.after_sale_price);
            setActual(res.data.Detail.actual_price);
            setOptionId1(res.data.Detail.options[0].option_id)
            setOptionId2(res.data.Detail.options[1].option_id)
            setOptionId3(res.data.Detail.options[2].option_id)
            setUrl(res.data.Detail.image_url)
            setOptionId(optionId2)
            if(res.data.Detail.in_stock==1 || res.data.Detail.in_stock==true || res.data.Detail.in_stock=="True"){
                setInstock(true);
            }
            else{
                setInstock(false)
            }
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
    const Pprice=sale;
    const [price,setPrice]=useState();

    console.log(price)
    const handlePrice=(p,oid)=>{
        setExtra(p);
        if(oid==1){
            setOptionId(optionId1);
        }
        else if(oid==2){
            setOptionId(optionId2);
        }
        else if(oid==3){
            setOptionId(optionId3);
        }

        console.log(option_id)
    }

    

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

    const handleAddToCart=(e)=>{
        e.preventDefault();
        setMessage('');
        var data = JSON.stringify({
            "pid": parseInt(pid),
            "quantity": parseInt(amt),
            "option_id": parseInt(option_id)
          });
          
          var config = {
            method: 'post',
            url: 'http://proffus.pythonanywhere.com/api/addcart',
            headers: { 
              'Authorization': `Basic ${token}`, 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            setMessage('Added to cart')
          })
          .catch(function (error) {
            console.log(error);
          });
          
    }

    return ( 
        <div>
        <div className="prod-container">
            
            <div className="details">
            <img src={url} alt="Product image" className="prod-img"/>
                <div className="small-container">
                <div className="prod-deets">
                    <div className="name-price">
                        <span style={{fontSize:"24px",fontWeight:"600"}}>{name}<span style={{cursor:'pointer'}}><img src={heart_outline} alt="Wishlist" onClick={(e)=>addWishlist(e)} data-wishlist /></span></span>
                        <span style={{fontSize:"20px",color:'#0E79BD'}}>₹ {parseFloat(Pprice+extra)}</span>
                        {actual && <span style={{fontSize:'18px',color:'gray',textDecoration:'line-through'}}>₹ {parseFloat(actual)}</span>}

                    </div>
                    
                    {inStock && <span className="stock">In Stock</span>}
                    {!inStock && <span className="stock" style={{border:'1px solid red'}}>Out Of Stock</span>}
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
                    <span className={`opt ${extra===10 ? "activeOpt":""}`} onClick={()=>handlePrice(10,1)}>Small(+10.00)</span>
                    <span className={`opt ${extra===20 ? "activeOpt":""}`} onClick={()=>handlePrice(20,2)}>Medium(+20.00)</span>
                    <span className={`opt ${extra===30 ? "activeOpt":""}`} onClick={()=>handlePrice(30,3)}>Large(+30.00)</span>
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
                <p style={{marginTop:'20px'}}>{desc}</p>
            </div>
            <hr className="hrLine"/>
            <div className="specification">
                <p style={{fontWeight:'600',lineHeight:'40px'}}>Specification</p>
                <p style={{marginTop:'20px'}}><b>Specification  :</b>{spec}</p>
                
            </div>
            <hr className="hrLine"/>
            {message && <Alert variant="success">{message}</Alert>}
            <div className="buy-buttons">
                <button className="button add-to-cart" onClick={handleAddToCart}>Add to cart</button>
                <button className="button buyNow">Buy now</button>
            </div>
            <div className="similar">
                {/* <p style={{fontWeight:'600',lineHeight:'40px'}}>View similar products</p> */}
                {/* <div className="similar-products">
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
                
                
                
                
                </div> */}
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default Product
