import React from 'react'
import './Topics.css'

function Topic(props) {
    return (
        <div className="topic-box">
            <div className="gradient">
            <span className="topic-title">{props.title}</span>
            <p className="topic-content">{props.content}</p>
            <span className="tread-more">READ MORE</span>
            </div>
        </div>
    )
}

export default Topic
