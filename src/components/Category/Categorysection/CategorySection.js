import React,{useState,useEffect} from 'react'
import './CategorySec.css'

import river from '../../../images/river.jpg'
import {Link} from 'react-router-dom';
import axios from 'axios'
import heart_outline from '../../../images/icons/heart_outline.svg'
import heart_filled from '../../../images/icons/heart_filled.svg'
import { useHistory } from 'react-router';
import '../Productsection/Products.css'

function CategorySection() {

    const [categories,setCategory]=useState([]);
    const [subCategories,setSubcategories]=useState([]);
    const history=useHistory()
    const [ProductData,setPData]=useState([])
    const username=localStorage.getItem('customer_id');
    const password=localStorage.getItem('password')
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
    const config={
        headers:{
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Credentials':true
        }
    }

    

    const scid=localStorage.getItem('scid')?localStorage.getItem('scid'):1;
    const handleProduct=(scid)=>{
        setScid(scid)

        const cid=localStorage.getItem('cid');
        axios.post(`http://proffus.pythonanywhere.com/api/products/subcategory/${scid}/`,config)
        .then(res=>{
            console.log(res);
            let ProductArray=[]
            let pD=[];
            ProductArray=res.data.Products;
        
            console.log(ProductArray.length);
            let index = 0
            let numberofproducts = ProductArray.length
            console.log('Number of products', numberofproducts);
            for(index=0;index < numberofproducts;index++) {
                let num = ProductArray[index]
                console.log('Index', index);
                axios({
                    method: 'POST',
                    url: `https://proffus.pythonanywhere.com/api/getProduct/p_id/${num}/`,

                }).then(res => {
                    //  console.log(res.data.Detail);
                    pD.push(res.data.Detail)
                    // console.log(ProductData)
                }).catch(err => { console.log(err); })
                   

            }
            setPData(pD)
            console.log(ProductData)
        })
        .catch(err=>{
            console.log(err)
        })
    };


    

    const addWishlist=(pid,e)=>{
        e.preventDefault();
        //window.alert('Added to wishlist');
        //setImgSrc(heart_filled)
        
        //setAdded(!added);    
        var data = JSON.stringify({
            "pid": pid
          });
          
          var config = {
            method: 'post',
            url: 'http://proffus.pythonanywhere.com/api/addtowishlist/',
            headers: { 
              'Authorization': `Basic ${token}`, 
              'Content-Type': 'application/json'
            },
            data : data
          };
          axios(config)
            .then(function (response) {
            console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
            console.log(error);
            });
        
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
    


    // const config2={
    //     headers:{
    //         'Content-Type':'application/json',
    //         'Access-Control-Allow-Origin':'*',
    //         'Access-Control-Allow-Credentials':true
    //     }
    // }

    useEffect(()=>{
        axios.post('http://proffus.pythonanywhere.com/api/getCategories/',config)
        .then(res=>{
            console.log(res);
            setCategory(res.data.Categories)

        
        })
        .catch(err=>{
            console.log(err)
        })

        
    },[])
    const setCategoryID=(id,e)=>{
        e.preventDefault();
        localStorage.setItem('cid',id);
        // if(e.target.dataset.activeCategory!==undefined)
        // {
        //     e.target.style.border='2px solid blue';
        //     e.target.removeAttribute('data-wishlist');
        // }
        // else{

        //     e.target.style.border='none';
        //     e.target.setAttribute('data-wishlist','true');
        // }
        history.push('/category')
    }

    

    useEffect(()=>{

        const cid=localStorage.getItem('cid')?localStorage.getItem('cid'):1;

        axios.post(`http://proffus.pythonanywhere.com/api/products/category/${cid}/`)
        .then(res=>{
        
            setSubcategories(res.data.Sub_Categories)
        })
        .catch(err=>{
            console.log(err)
        })

        
    },[subCategories])


    const setScid=(scid)=>{
        localStorage.setItem('scid',scid);
    }
    

    return (
        <div className="cate-container">
            <h3 className="category-heading">CATEGORIES</h3>
            <div className="cat-subcontainer">
            
            {categories && categories.map((item,index)=>{
                const id=localStorage.getItem('cid');
                return(
                    <div className={`box ${item.cid==id?"blueBorder":""}`} key={index} onClick={(e)=>{setCategoryID(item.cid,e)}}>
                        <img src={item.url} style={{width:"205px",height:"100px"}}/>
                        <span style={{fontSize:"16px",fontWeight:"500"}}>{item.name}</span>
                    </div>
                )
            })}

        </div>
        
            
            
            
           
            {<div className="cat-subcontainer" style={{justifyContent:'flex-start'}}>
            
            {subCategories && subCategories.map((sc,idx)=>{
                return(
                    
                    <div className="box2" style={{marginLeft:"50px",cursor:'pointer'}} onClick={()=>handleProduct(sc.scid)}>
                        <img src={river} style={{width:"210px",height:"188px",paddingBottom:"35px"}}/>
                        <span style={{fontSize:"16px",fontWeight:"500",marginTop:"20px"}}>{sc.name}</span>
                    </div> 
                    
                )
            })}
            </div>}

        
        <h3 className="category-heading3" style={{marginTop:"100px"}}>PRODUCTS</h3>
        <hr className="line"/>
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
                {ProductData.map((item,index)=>{ 
                    //console.log(item)
                    return(
                       
                        <div className="product" key={index}>
                            
                            <img src={item.image_url} alt="product-img" className="product-img"/>
                            <span className="prod-name">{item.name}</span>
                            <span className="disc-price">₹ {item.after_sale_price?parseFloat(item.after_sale_price):parseFloat(item.actual_price)}</span>
                            {item.after_sale_price && <span className="orig-price">₹ {parseFloat(item.actual_price)}</span>}
                            <hr style={{width:"100%",backgroundColor:"gray",opacity:"0.4"}}/>
                            <div style={{display:'flex',width:'100%',justifyContent:'space-evenly'}}>
                            <span className="add"><Link to={{pathname: `/product/${item.pid}`}}>Add to cart</Link></span>
                            <span style={{cursor:'pointer'}}><img src={heart_outline} alt="Wishlist" onClick={(e)=>addWishlist(item.pid,e)} data-wishlist /></span>
                            </div>
                        </div>
                    )
                })}
                
            </div>
        </div>
        </div>
    )
}

export default CategorySection