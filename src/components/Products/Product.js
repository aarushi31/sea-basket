import React, { useEffect, useState,useReducer } from 'react'
import { Redirect, useParams,useHistory } from 'react-router'
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
    const history=useHistory()
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

    const [extra,setExtra]=useState(0);
    const Pprice=sale;
    const [price,setPrice]=useState();

    console.log(price)
    const handlePrice=(p,oid)=>{
        setExtra(p);
        setPrice(extra+Pprice)
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
        localStorage.setItem('oid',option_id)
    }

    var config = {
        method: 'post',
        url: 'http://proffus.pythonanywhere.com/api/getuserdetails',
        headers: { 
          'Authorization': `Basic ${token}`
        },
        data :''
    };
    const [address,setAddress]=useState([])

    useEffect(()=>{

        axios.post('http://proffus.pythonanywhere.com/api/getaddress',{
            auth: {
                username: username,
                password: password
              }
        },config)
        .then(res=>{
            console.log(res)
            setAddress(res.data.Address);
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    const [aid,setAid]=useState()

    console.log(aid)

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

        if(!option_id){
            window.alert('Please select any option(Small, Medium, Large)');
        }
        else{
        var data = JSON.stringify({
            "pid": parseInt(pid),
            "quantity": parseInt(amt),
            "option_id": parseInt(option_id)
          });

          localStorage.setItem('amt',amt);
          localStorage.setItem('pid',pid);
          
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


          const total=amt*price
          var orderdata = JSON.stringify({
            "customer_id": parseInt(username),
            "total_price": parseInt(total),
            "address_id": parseInt(aid),
            "payment_method": "online(card)",
            "product_details":{
                "1":{
                    "pid": parseInt(pid),
                    "quantity": parseInt(amt),
                    "option_id": parseInt(option_id)
                }
            },

          });


          console.log(orderdata)
          var config2 = {
            method: 'post',
            url: 'http://proffus.pythonanywhere.com/api/addorder/',
            headers: { 
              'Authorization': `Basic ${token}`, 
              'Content-Type': 'application/json'
            },
            data : orderdata
          };
          
          axios(config2)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            history.push('/cart')
            
          })
          .catch(function (error) {
            console.log(error);
          });

        }
          
    }

    return ( 
        <div>
        <div className="prod-container">
            
            <div className="details">
            <img src={url} alt="Product image" className="prod-img"/>
                <div className="small-container">
                <div className="prod-deets">
                    <div className="name-price">
                        <span style={{fontSize:"24px",fontWeight:"600"}}>{name}</span>
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
            <div className="select-address">
            <span>Select Address</span>
            {
                address.map((add,idx)=>{
                    const id=localStorage.getItem('aid');
                    return(
                    <div onClick={()=>{setAid(add.address_id);localStorage.setItem('aid',aid)}} className={`address ${id && id==add.address_id?"activeAddress":""}`}>
                        <p><b>{add.first_name} {add.last_name}</b></p>
                        <p>{add.address1}</p>
                        <p>{add.address2}</p>
                        <p>{add.city}</p>
                        <p>{add.postcode}</p>
                    </div>
                    )
                })
            }
            </div>
            <hr className="hrLine"/>
            {message && <Alert variant="success">{message}</Alert>}
            <div className="buy-buttons">
                <button className="button add-to-cart" onClick={handleAddToCart}>Add to cart</button>
                {/* <button className="button buyNow">Buy now</button> */}
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
