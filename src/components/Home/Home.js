import React from 'react'
import Blog from './Blog/Blog'
import Categories from './Categories'
import Cover from './Cover'
import Footer from './Footer/Footer'
import ProductVideo from './ProductVideo'
import Topics from './Topics/Topics'
import Faq from './FAQ/Faq'

function Home() {
    return (
        <div style={{overflowX:"hidden"}}>
            <Cover/>
            <Categories/>
            <ProductVideo/>
            <center><h2 style={{fontSize:"48px",fontWeight:"500",marginTop:"150px"}}>FAQs</h2></center>
            <Faq/>
            <Blog/>
            <Topics/>
            <Footer/>
        </div>
    )
}

export default Home
