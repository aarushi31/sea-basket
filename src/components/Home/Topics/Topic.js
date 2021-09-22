import React from 'react'
import './Topics.css'


function Topic(props) {
    return (
        <div className="topic-box">
            <div className="gradient">
            <span className="topic-title">{props.title}</span>
            <p className="topic-content">{props.content}</p><br/>
            <span className="tread-more">READ MORE </span><svg width="13.43" height="23.46" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{position:"relative",top:"4px"}}
            >
<path d="M2.62435 7.88062C2.8081 8.06437 3.10435 8.06437 3.2881 7.88062L6.40435 4.76437C6.5506 4.61812 6.5506 4.38187 6.40435 4.23562L3.2881 1.11937C3.10435 0.935621 2.8081 0.935621 2.62435 1.11937C2.4406 1.30312 2.4406 1.59937 2.62435 1.78312L5.33935 4.50187L2.6206 7.22062C2.4406 7.40062 2.4406 7.70062 2.62435 7.88062Z" fill="#0E79BD" stroke="#0E79BD"/>
</svg>
            </div>
        </div>
    )
}

export default Topic
