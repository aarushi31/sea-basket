import React,{useState,useEffect} from 'react'
import './CategorySec.css'
import c0 from '../../../images/c0.png';
import c1 from '../../../images/c1.png';
import c2 from '../../../images/c2.png';
import sub1 from '../../../images/sub1.png'
import sub2 from '../../../images/sub2.png'
import axios from 'axios'
import { useHistory } from 'react-router';

function CategorySection() {

    const [categories,setCategory]=useState([]);
    const history=useHistory()

    useEffect(()=>{
        axios.get('https://seabasket.citypetcare.in/api/getCategories/key/654784578114')
        .then(res=>{
            console.log(res.data.response[0]);
            setCategory(res.data.response)

        
        })
        .catch(err=>{
            console.log(err)
        })

        
    },[])
    const setCategoryID=(id,e)=>{
        e.preventDefault();
        localStorage.setItem('category_id',id);
        // if(e.target.dataset.activeCategory!==undefined)
        // {
        //     e.target.style.border='2px solid #black';
        //     e.target.removeAttribute('data-wishlist');
        // }
        // else{

        //     e.target.style;
        //     e.target.setAttribute('data-wishlist','true');
        // }
        history.push('/category')
    }
    

    return (
        <div className="cate-container">
            <h3 className="category-heading">CATEGORIES</h3>
            <div className="cat-subcontainer">
            
            {categories.map((item,index)=>{
                const id=localStorage.getItem('category_id');
                return(
                    <div className={`box ${item.category_id==id?"blueBorder":""}`} key={index} onClick={(e)=>{setCategoryID(item.category_id,e)}}>
                        <img src={item.image} style={{width:"205px",height:"100px"}}/>
                        <span style={{fontSize:"16px",fontWeight:"500"}}>{item.name}</span>
                    </div>
                )
            })}
        </div>
        
            
            
            {/* <div className="box2">
                <img src={sub1} style={{width:"310px",height:"188px",paddingBottom:"35px"}}/>
                <span style={{fontSize:"16px",fontWeight:"500",marginTop:"20px"}}>SEA FISH</span>
            </div>
            <div className="box2" style={{marginLeft:"122px"}}>
                <img src={sub2} style={{width:"310px",height:"188px",paddingBottom:"35px"}}/>
                <span style={{fontSize:"16px",fontWeight:"500",marginTop:"20px"}}>RIVER FISH</span>
            </div> */}
            {categories.map((item,index)=>{
                if(item.category_id==localStorage.getItem('category_id')){
                return(
                    <>
                    {item.children && <h3 className="category-heading2" style={{marginTop:"100px"}}>{item.name}</h3>}
                    <div className="cat-subcontainer">
                    {item.children.map((c,i)=>{

                        return(
                            <div className="box2" style={{marginLeft:"50px"}} key={i}>
                            <img src={c.image} style={{width:"210px",height:"188px",paddingBottom:"35px"}}/>
                            <span style={{fontSize:"16px",fontWeight:"500",marginTop:"20px"}}>{c.name}</span>
                        </div> 
                        )
                    })
                    
                    }
                    </div>
                    </>
                )
                }
            })}

        
        <h3 className="category-heading3" style={{marginTop:"100px"}}>PRODUCTS</h3>
        <hr className="line"/>
        </div>
    )
}

export default CategorySection