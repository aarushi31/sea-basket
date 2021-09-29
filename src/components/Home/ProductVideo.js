import React from 'react'
import './ProductVideo.css'
function ProductVideo() {
    return (
        <div style={{width:"100vw",textAlign:"center",marginTop:"100px"}}>
            <h2 className="heading"><b>A GLANCE AT OUR PRODUCT</b></h2>
            <div className="video">
            
            <iframe width="760" height="415" src="https://www.youtube.com/embed/F4lynrnxkRw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{borderRadius:"25px"}}></iframe>
            </div>
        </div>
    )
}

export default ProductVideo
