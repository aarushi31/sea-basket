import React from 'react'
import './ProductVideo.css'
function ProductVideo() {
    return (
        <div style={{width:"100vw",textAlign:"center",marginTop:"100px"}}>
            <h2 className="heading">A GLANCE AT OUR PRODUCT</h2>
            <div className="video">
            <iframe width="1200" height="534" src="https://www.youtube.com/embed/6stlCkUDG_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
            style={{borderRadius:"25px"}}
            ></iframe>
            </div>
        </div>
    )
}

export default ProductVideo
