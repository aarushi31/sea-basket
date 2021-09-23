import React,{useState} from 'react'
import {Data} from './Data'
import styled from 'styled-components'
import {IconContext} from 'react-icons'
import {FiPlus,FiMinus} from 'react-icons/fi'
import darrow from '../../../images/icons/arrow.svg'
import { Accordion,Container } from 'react-bootstrap'

// const FaqSection=styled.div`
//     display:flex;
//     flex-direction:column;
//     align-items:center;
//     justify-content:center;
//     position:relative;
//     height:60vh;
//     background:#fff;
//     width:100vw;
//     padding:7rem;
//     margin-top:70px;
    
// `;


// const Container=styled.div`
//     box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
//     padding:4rem;
//     border-radius:25px;
//     width:1200px;

// `;

// const Wrap=styled.div`
//     display:flex;
//     justify-content:space-between;
//     align-items:center;
//     width:100%;
//     text-align:left;
//     cursor:pointer;
//     padding-top:30px;
//     span{
//         color:#0E79BD;
//         margin-right:1.5rem;
//     }
// `;

// const Dropdown=styled.div`
//     width:100%;
//     height:100px;
//     display:flex;
//     flex-direction:column;
//     justify-content:center;
//     align-items:center;

    
// `;

function Faq() {
    const [clicked,setClicked]=useState(null);

    const toggle=index=>{
        if(clicked===index){
            return setClicked(null);
        }

        setClicked(index);
    }


    return (
        
            
        // <IconContext.Provider value={{
        //     color:'#000',size:"25px"
        // }}>
        
        // <FaqSection>
        //     <Container>
        //         {Data.map((item,index)=>{
        //             return(
        //                 <div>
        //                     <Wrap onClick={()=>toggle(index)}
        //                     key={index}>
        //                     <p style={{fontSize:"18px",fontWeight:"600",lineHeight:"32.81px"}}>{item.question}</p>
        //                     <span>{clicked==index?<FiMinus style={{color:"#0E79BD"}}/>:<img src={darrow} style={{color:"#0E79BD"}}/>}</span>
        //                     </Wrap>
        //                     {
        //                         clicked===index?(
        //                             <Dropdown>
        //                                 <p style={{fontSize:"16px",fontWeight:"400",lineHeight:"20.47px",marginTop:"30px"}}>{item.answer}</p>
        //                             </Dropdown>
        //                         ):null

        //                     }
                            
        //                 </div>
        //             )
        //         })}
        //     </Container>
        // </FaqSection>
        // </IconContext.Provider>
        <Container className="faq-box">
            <center><h2 style={{fontSize:"30px",fontWeight:"500",marginTop:"150px"}}>FAQs</h2></center>
        <Accordion defaultActiveKey="0" style={{marginTop:'60px'}}>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</Container>
        
    )
}

export default Faq;

