import React from 'react'
import BlogElement from './BlogElement'

function Blog() {
    return (
        <div style={{width:"100vw",textAlign:"center",marginTop:"150px",padding:"7rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h2 style={{fontSize:"48px",fontWeight:"500"}}>HAVE A READ</h2>
            <BlogElement title="The right quality"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            
            />
            <BlogElement title="The right time"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            
            />
            <BlogElement title="The basis of a balanced diet"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            
            />
        </div>
    )
}

export default Blog
