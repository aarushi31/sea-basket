import React,{useState,useEffect} from 'react'
import './CategorySec.css'
import c0 from '../../../images/c0.png';
import c1 from '../../../images/c1.png';
import c2 from '../../../images/c2.png';
import sub1 from '../../../images/sub1.png'
import sub2 from '../../../images/sub2.png'
import river from '../../../images/river.jpg'
import sea from '../../../images/sea.jpg'
import crab from '../../../images/crabs.jpg'
import lobster from '../../../images/lobster.jpg'
import oyster from '../../../images/oyster.jpg'
import prawn from '../../../images/prawn.jpg'
import axios from 'axios'
import { useHistory } from 'react-router';

function CategorySection() {

    const [categories,setCategory]=useState([]);
    const [subCategories,setSubcategories]=useState([]);
    const history=useHistory()

    const config={
        headers:{
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Credentials':true
        }
    }

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
                    
                    <div className="box2" style={{marginLeft:"50px"}} onClick={()=>setScid(sc.scid)}>
                        <img src={river} style={{width:"210px",height:"188px",paddingBottom:"35px"}}/>
                        <span style={{fontSize:"16px",fontWeight:"500",marginTop:"20px"}}>{sc.name}</span>
                    </div> 
                    
                )
            })}
            </div>}

        
        <h3 className="category-heading3" style={{marginTop:"100px"}}>PRODUCTS</h3>
        <hr className="line"/>
        </div>
    )
}

export default CategorySection