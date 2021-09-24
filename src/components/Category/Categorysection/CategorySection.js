import React,{useState,useEffect} from 'react'
import './CategorySec.css'
import c0 from '../../../images/c0.png';
import c1 from '../../../images/c1.png';
import c2 from '../../../images/c2.png';
import sub1 from '../../../images/sub1.png'
import sub2 from '../../../images/sub2.png'
import axios from 'axios'

function CategorySection() {

    const [categories,setCategory]=useState([]);
    useEffect(()=>{
        axios.get('https://seabasket.citypetcare.in/api/getCategories/key/654784578114')
        .then(res=>{
            console.log(res);
            setCategory(res.data.response)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    // const [subcate1,setSubCate1]=useState([]);
    // useEffect(()=>{
    //     const cate_id=categories[0].category_id;
    //     axios.get(`https://seabasket.citypetcare.in/api/getchildCategories/cate_id/${cate_id}/key/654784578114`)
    //     .then(res=>{
    //         console.log(res);
    //         setSubCate1(res.data.response)
    //         console.log(subcate1)
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // },[])
    // const [subcate2,setSubCate2]=useState([]);
    // useEffect(()=>{
    //     const cate_id=categories[0].category_id;
    //     axios.get(`https://seabasket.citypetcare.in/api/getchildCategories/cate_id/${cate_id}/key/654784578114`)
    //     .then(res=>{
    //         console.log(res);
    //         setSubCate2(res.data.response)
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // },[])
    // const [subcate3,setSubCate3]=useState([]);
    // useEffect(()=>{
    //     const cate_id=categories[0].category_id;
    //     axios.get(`https://seabasket.citypetcare.in/api/getchildCategories/cate_id/${cate_id}/key/654784578114`)
    //     .then(res=>{
    //         console.log(res);
    //         setSubCate3(res.data.response)
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // },[])


    return (
        <div style={{textAlign:"center",width:"100vw",marginTop:"100px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h3 className="category-heading">CATEGORIES</h3>
            <div style={{display:"flex",width:"1200px",justifyContent:"space-around",marginTop:"60px"}}>
            
            {/* <div className="box">
                <img src={c1} style={{width:"150px",height:"80px"}}/>
                <span style={{fontSize:"16px",fontWeight:"500"}}>FISH</span>
            </div>
            <div className="box">
                <img src={c0} style={{width:"150px",height:"80px"}}/>
                <span style={{fontSize:"16px",fontWeight:"500"}}>CRUSTACEANS</span>
            </div>
            <div className="box">
                <img src={c2} style={{width:"150px",height:"80px"}}/>
                <span style={{fontSize:"16px",fontWeight:"500"}}>EXOTIC</span>
            </div> */}
            {categories.map((item,index)=>{
                return(
                    <div className="box" key={index}>
                        <img src={item.image} style={{width:"205px",height:"100px"}}/>
                        <span style={{fontSize:"16px",fontWeight:"500"}}>{item.name}</span>
                    </div>
                )
            })}
        </div>
        <h3 className="category-heading2" style={{marginTop:"100px"}}>FISH</h3>
            <div style={{display:"flex",width:"1200px",justifyContent:"flex-start",marginTop:"60px",padding:"0 20px"}}>
            
            <div className="box2">
                <img src={sub1} style={{width:"310px",height:"188px",paddingBottom:"35px"}}/>
                <span style={{fontSize:"16px",fontWeight:"500",marginTop:"20px"}}>SEA FISH</span>
            </div>
            <div className="box2" style={{marginLeft:"122px"}}>
                <img src={sub2} style={{width:"310px",height:"188px",paddingBottom:"35px"}}/>
                <span style={{fontSize:"16px",fontWeight:"500",marginTop:"20px"}}>RIVER FISH</span>
            </div>
            {/* {subcate1.map((item,index)=>{
                return(
                    <div className="box2" style={{marginLeft:"122px"}} key={index}>
                        <img src={item.image} style={{width:"310px",height:"188px",paddingBottom:"35px"}}/>
                        <span style={{fontSize:"16px",fontWeight:"500",marginTop:"20px"}}>{item.name}</span>
                    </div> 
                )
            })} */}

        </div>
        <h3 className="category-heading3" style={{marginTop:"100px"}}>PRODUCTS</h3>
        <hr className="line"/>
        </div>
    )
}

export default CategorySection