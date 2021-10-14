import React, { useEffect, useState } from 'react'
import c3 from '../../images/c3.png'
import axios from 'axios';
import {Carousel} from 'react-bootstrap'

function Cover() {
    const [images,setImages]=useState();
    useEffect(()=>{
        axios.post('http://proffus.pythonanywhere.com/api/getbannerbyname/bannername/Fish_Oil')
        .then(res=>{
            console.log(res.data.banner.b_url);
            setImages(res.data.banner.b_url);
            console.log(images)
            //console.log(images);
            //console.log(images[0].image)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])

    return (
        // <div>
        //     <img src={c3} alt="Cover image" style={{width:"100%"}}/>
        // </div>
        <Carousel>
             {/* {images.map((item,index)=>{
                return(
                    <Carousel.Item key={index}>
                        <img
                        className="d-block w-100"
                        src={item.image}
                        alt="Second slide"
                        />

                    </Carousel.Item>
                )
            })}  */}
            <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={images}
                        alt="Second slide"
                        style={{height:'500px'}}
                        />

            </Carousel.Item>
  
  {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item> */}
</Carousel>
    )
}

export default Cover
