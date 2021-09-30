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
            <center><h2 style={{fontSize:"30px",fontWeight:"600",marginTop:"150px",color:'#0E79BD'}}>FAQs</h2></center>
        <Accordion defaultActiveKey="0" style={{marginTop:'60px'}}>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Where do I cut a fish when I gut it?</Accordion.Header>
    <Accordion.Body>
    <b>Expert Answer</b><br/><br/>
Start at the back of the fish by the tail and slice up along the belly up to the gills.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Can I use butter when cooking a fillet fish?</Accordion.Header>
    <Accordion.Body>
    <b>Community Answer</b><br/><br/>
Yes, but there are better options, as dairy and fish don’t mix well. Consider olive oil,
it is hailed as a perfect base when seasoning/cooking fish. Certain fish are good for
frying, others are best grilled. Do some research on the fish you have.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Does taking the skin off make a fish a fillet?</Accordion.Header>
    <Accordion.Body>
    <b>Community Answer</b><br/><br/>
    No. Fillet refers to the slab of meat on either side of the centre bone. A fish fillet can
have skin.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>What do you mean by &quot;scale the fish&quot;?</Accordion.Header>
    <Accordion.Body>
    <b>Community Answer</b><br/><br/>
    Scrape off the scales with a knife. Scales are the little flaky things on the skin of the
    fish.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>How do I fillet a catfish?</Accordion.Header>
    <Accordion.Body>
    <b>Community Answer</b><br/><br/>
    You can fillet a catfish the same way you would fillet any other fish.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Will this same fillet method work for common carp?</Accordion.Header>
    <Accordion.Body>
    <b>Community Answer</b><br/><br/>
    Yes. Just be sure to scale and gut it first so you&#39;re not poisoned by the organs.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Do I gut the fish first?</Accordion.Header>
    <Accordion.Body>
    <b>Community Answer</b><br/><br/>
    No. Cut the fillets off the fish on both sides with a fillet knife (thin blade, razor edge),
then discard the remainder of the fish.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Should I start cutting at the head and pull the knife down to the tail or the other
way around?</Accordion.Header>
    <Accordion.Body>
    <b>Community Answer</b><br/><br/>
    Start at the head, then make your way down to the tail. Try to keep the cut as even
as possible.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</Container>
        
    )
}

export default Faq;

