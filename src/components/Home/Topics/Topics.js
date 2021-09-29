import React from 'react'
import Topic from './Topic'
import t1 from '../../../images/topic1.jpg'
import t2 from '../../../images/topic2.jpg'
import './Topics.css'
import { Container } from 'react-bootstrap'

function Topics() {
    return (
        <Container className="topic-cont">
            <h2 style={{fontSize:"30px",fontWeight:"600",color:'#0E79BD'}}>TOPICS YOU CAN'T MISS</h2>
            <Topic title="Topics you can't miss"
             content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
             classname="1"
             />
             <Topic title="How to clean/cut your seafood"
             content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
             classname="2"
             />
        </Container>
    )
}

export default Topics
