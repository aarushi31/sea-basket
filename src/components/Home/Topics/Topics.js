import React from 'react'
import Topic from './Topic'
import t1 from '../../../images/topic1.jpg'
import t2 from '../../../images/topic2.jpg'

function Topics() {
    return (
        <div style={{width:"100vw",textAlign:"center",padding:"7rem"}}>
            <h2 style={{fontSize:"2.5rem"}}>TOPICS YOU CAN'T MISS</h2>
            <Topic title="Topics you can't miss"
             content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
             
             />
             <Topic title="How to clean/cut your seafood"
             content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
             
             />
        </div>
    )
}

export default Topics
