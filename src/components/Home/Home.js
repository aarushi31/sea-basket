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
            
            <Faq/>
            <Blog/>
            <Topics/>
            <Footer/>
        </div>
    )
}

export default Home
