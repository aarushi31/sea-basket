import React from 'react'
import './Blog.css'


function BlogElement(props) {
    return (
        <div className="blog">
            <span className="blog-title">{props.title}</span>
            <p className="blog-content">{props.content}</p>
            <span className="read-more">READ MORE</span>
        </div>
    )
}

export default BlogElement
